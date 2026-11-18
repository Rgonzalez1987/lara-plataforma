-- ============================================================================
-- 003_rpcs.sql
-- Operaciones transaccionales seguras (SECURITY DEFINER) para XP, rachas,
-- escudos, rankings, retos y misiones recomendadas.
-- ============================================================================

-- Cálculo de nivel centralizado en servidor
CREATE OR REPLACE FUNCTION public.compute_level(p_xp INTEGER)
RETURNS INTEGER
LANGUAGE sql
IMMUTABLE
AS $$
  SELECT GREATEST(1, floor(GREATEST(0, p_xp) / 250.0)::INTEGER + 1);
$$;

-- 1. Otorgar XP desde una sesión de juego con tope por sesión, tope diario e idempotencia
CREATE OR REPLACE FUNCTION public.award_xp_from_session(
  p_source_type public.xp_source_type,
  p_source_ref TEXT,
  p_raw_xp INTEGER,
  p_session_nonce UUID
)
RETURNS TABLE (new_xp INTEGER, new_level INTEGER, granted_xp INTEGER)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_uid UUID := auth.uid();
  v_status public.account_status;
  v_today_xp INTEGER;
  v_clamped_xp INTEGER;
  v_daily_cap CONSTANT INTEGER := 1500;
  v_session_cap CONSTANT INTEGER := 150;
  v_final_xp INTEGER;
  v_new_total INTEGER;
  v_new_lvl INTEGER;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'No autenticado';
  END IF;

  IF p_source_type IN ('shield_purchase', 'admin_adjust') THEN
    RAISE EXCEPTION 'Tipo de origen no permitido en esta RPC';
  END IF;

  SELECT account_status INTO v_status
  FROM public.profiles
  WHERE id = v_uid;

  IF v_status IS DISTINCT FROM 'active' THEN
    RAISE EXCEPTION 'Cuenta inactiva o inexistente';
  END IF;

  -- Idempotencia: si el nonce ya existe, devolvemos el estado actual sin duplicar XP
  IF EXISTS (SELECT 1 FROM public.xp_ledger WHERE session_nonce = p_session_nonce) THEN
    SELECT p.xp, p.level, 0
      INTO new_xp, new_level, granted_xp
    FROM public.profiles p
    WHERE p.id = v_uid;
    RETURN NEXT;
    RETURN;
  END IF;

  v_clamped_xp := LEAST(v_session_cap, GREATEST(0, COALESCE(p_raw_xp, 0)));

  SELECT COALESCE(SUM(delta_xp), 0) INTO v_today_xp
  FROM public.xp_ledger
  WHERE user_id = v_uid
    AND delta_xp > 0
    AND source_type <> 'admin_adjust'
    AND created_at >= date_trunc('day', now());

  v_final_xp := LEAST(v_clamped_xp, GREATEST(0, v_daily_cap - v_today_xp));

  INSERT INTO public.xp_ledger (user_id, delta_xp, source_type, source_ref, session_nonce)
  VALUES (v_uid, v_final_xp, p_source_type, left(COALESCE(p_source_ref, ''), 120), p_session_nonce);

  IF v_final_xp > 0 THEN
    INSERT INTO public.activity_log (user_id, action, xp_earned)
    VALUES (v_uid, p_source_type::TEXT || ':' || left(COALESCE(p_source_ref, 'session'), 80), v_final_xp);
  END IF;

  PERFORM set_config('app.trusted_rpc', 'on', true);

  UPDATE public.profiles
  SET xp = xp + v_final_xp,
      level = public.compute_level(xp + v_final_xp)
  WHERE id = v_uid
  RETURNING xp, level INTO v_new_total, v_new_lvl;

  new_xp := v_new_total;
  new_level := v_new_lvl;
  granted_xp := v_final_xp;
  RETURN NEXT;
END;
$$;

-- 2. Comprar protector de racha (300 XP, máx. 3 escudos)
CREATE OR REPLACE FUNCTION public.buy_streak_shield()
RETURNS TABLE (new_xp INTEGER, new_shields INTEGER)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_uid UUID := auth.uid();
  v_xp INTEGER;
  v_shields INTEGER;
  v_cost CONSTANT INTEGER := 300;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'No autenticado';
  END IF;

  SELECT xp, streak_shields
    INTO v_xp, v_shields
  FROM public.profiles
  WHERE id = v_uid AND account_status = 'active'
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Perfil no encontrado o inactivo';
  END IF;

  IF v_shields >= 3 THEN
    RAISE EXCEPTION 'Ya tienes el máximo de 3 protectores de racha';
  END IF;

  IF v_xp < v_cost THEN
    RAISE EXCEPTION 'XP insuficiente para comprar protector';
  END IF;

  INSERT INTO public.xp_ledger (user_id, delta_xp, source_type, source_ref, session_nonce)
  VALUES (v_uid, -v_cost, 'shield_purchase', 'streak_shield', gen_random_uuid());

  PERFORM set_config('app.trusted_rpc', 'on', true);

  UPDATE public.profiles
  SET xp = xp - v_cost,
      level = public.compute_level(xp - v_cost),
      streak_shields = streak_shields + 1
  WHERE id = v_uid
  RETURNING xp, streak_shields INTO new_xp, new_shields;

  RETURN NEXT;
END;
$$;

-- 3. Sincronización diaria de racha en servidor (nunca confía en la fecha del navegador)
CREATE OR REPLACE FUNCTION public.sync_daily_streak()
RETURNS TABLE (streak_count INTEGER, streak_shields INTEGER, shield_consumed BOOLEAN)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_uid UUID := auth.uid();
  v_last DATE;
  v_streak INTEGER;
  v_shields INTEGER;
  v_diff INTEGER;
  v_consumed BOOLEAN := false;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'No autenticado';
  END IF;

  SELECT p.last_active_date, p.streak_count, p.streak_shields
    INTO v_last, v_streak, v_shields
  FROM public.profiles p
  WHERE p.id = v_uid AND p.account_status = 'active'
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Perfil no encontrado o inactivo';
  END IF;

  v_diff := CURRENT_DATE - v_last;

  IF v_diff = 1 THEN
    v_streak := v_streak + 1;
  ELSIF v_diff > 1 THEN
    IF v_shields > 0 THEN
      v_shields := v_shields - 1;
      v_consumed := true;
    ELSE
      v_streak := 1;
    END IF;
  END IF;

  IF v_diff >= 1 THEN
    PERFORM set_config('app.trusted_rpc', 'on', true);
    UPDATE public.profiles
    SET streak_count = v_streak,
        streak_shields = v_shields,
        last_active_date = CURRENT_DATE
    WHERE id = v_uid;
  END IF;

  streak_count := v_streak;
  streak_shields := v_shields;
  shield_consumed := v_consumed;
  RETURN NEXT;
END;
$$;

-- 4. Ranking seguro (solo expone campos públicos mínimos de alumnos activos)
CREATE OR REPLACE FUNCTION public.get_leaderboard(p_scope TEXT DEFAULT 'global')
RETURNS TABLE (
  id UUID,
  username TEXT,
  avatar TEXT,
  grade TEXT,
  xp INTEGER,
  level INTEGER,
  streak_count INTEGER
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT p.id, p.username, p.avatar, p.grade, p.xp, p.level, p.streak_count
  FROM public.profiles p
  WHERE p.account_status = 'active'
    AND p.app_role = 'student'
    AND (
      p_scope <> 'friends'
      OR p.id = auth.uid()
      OR public.are_friends(auth.uid(), p.id)
    )
  ORDER BY p.xp DESC, p.username ASC
  LIMIT 50;
$$;

-- 5. Retos entre amigos
CREATE OR REPLACE FUNCTION public.create_challenge(
  p_opponent_id UUID,
  p_game_type TEXT,
  p_challenger_score INTEGER
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_uid UUID := auth.uid();
  v_id UUID;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'No autenticado';
  END IF;

  IF NOT public.are_friends(v_uid, p_opponent_id) THEN
    RAISE EXCEPTION 'Solo puedes retar a amigos aceptados';
  END IF;

  INSERT INTO public.challenges (challenger_id, opponent_id, game_type, challenger_score, status)
  VALUES (v_uid, p_opponent_id, left(COALESCE(p_game_type, 'math'), 40), GREATEST(0, p_challenger_score), 'pending')
  RETURNING id INTO v_id;

  RETURN v_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.submit_challenge_score(
  p_challenge_id UUID,
  p_score INTEGER
)
RETURNS public.challenges
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_uid UUID := auth.uid();
  v_row public.challenges;
  v_winner UUID;
  v_clean_score INTEGER := GREATEST(0, p_score);
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'No autenticado';
  END IF;

  SELECT * INTO v_row
  FROM public.challenges
  WHERE id = p_challenge_id
    AND opponent_id = v_uid
    AND status = 'pending'
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Reto no disponible para completar';
  END IF;

  IF v_clean_score > v_row.challenger_score THEN
    v_winner := v_row.opponent_id;
  ELSIF v_clean_score < v_row.challenger_score THEN
    v_winner := v_row.challenger_id;
  ELSE
    v_winner := NULL;
  END IF;

  UPDATE public.challenges
  SET opponent_score = v_clean_score,
      status = 'completed',
      winner_id = v_winner,
      completed_at = now()
  WHERE id = p_challenge_id
  RETURNING * INTO v_row;

  RETURN v_row;
END;
$$;

-- 6. Misiones recomendadas (solo tutor del alumno o admin)
CREATE OR REPLACE FUNCTION public.set_recommended_missions(
  p_student_id UUID,
  p_missions JSONB
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'No autenticado';
  END IF;

  IF NOT (public.is_guardian_of(p_student_id) OR public.is_admin()) THEN
    RAISE EXCEPTION 'Sin permisos para recomendar misiones a este alumno';
  END IF;

  PERFORM set_config('app.trusted_rpc', 'on', true);

  UPDATE public.student_progress
  SET recommended_missions = COALESCE(p_missions, '[]'::jsonb)
  WHERE user_id = p_student_id;
END;
$$;

-- Permisos de ejecución explícitos
REVOKE ALL ON FUNCTION public.award_xp_from_session(public.xp_source_type, TEXT, INTEGER, UUID) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.buy_streak_shield() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.sync_daily_streak() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.get_leaderboard(TEXT) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.create_challenge(UUID, TEXT, INTEGER) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.submit_challenge_score(UUID, INTEGER) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.set_recommended_missions(UUID, JSONB) FROM PUBLIC;

GRANT EXECUTE ON FUNCTION public.award_xp_from_session(public.xp_source_type, TEXT, INTEGER, UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.buy_streak_shield() TO authenticated;
GRANT EXECUTE ON FUNCTION public.sync_daily_streak() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_leaderboard(TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.create_challenge(UUID, TEXT, INTEGER) TO authenticated;
GRANT EXECUTE ON FUNCTION public.submit_challenge_score(UUID, INTEGER) TO authenticated;
GRANT EXECUTE ON FUNCTION public.set_recommended_missions(UUID, JSONB) TO authenticated;

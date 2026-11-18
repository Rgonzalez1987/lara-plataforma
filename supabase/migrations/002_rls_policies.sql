-- ============================================================================
-- 002_rls_policies.sql
-- Políticas RLS estrictas y triggers de protección de columnas críticas
-- ============================================================================

-- Habilitar RLS en todas las tablas
ALTER TABLE public.families ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.family_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.xp_ledger ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.friendships ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenges ENABLE ROW LEVEL SECURITY;

-- ----------------------------------------------------------------------------
-- Funciones auxiliares de autorización (SECURITY DEFINER, sin recursión RLS)
-- ----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles p
    WHERE p.id = auth.uid()
      AND p.app_role = 'admin'
      AND p.account_status = 'active'
  );
$$;

CREATE OR REPLACE FUNCTION public.is_guardian_of(target_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.family_members g
    JOIN public.family_members s
      ON s.family_id = g.family_id
    WHERE g.user_id = auth.uid()
      AND g.member_role = 'guardian'
      AND s.user_id = target_user_id
      AND s.member_role = 'student'
  );
$$;

CREATE OR REPLACE FUNCTION public.is_family_member(target_family_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.family_members fm
    WHERE fm.family_id = target_family_id
      AND fm.user_id = auth.uid()
  );
$$;

CREATE OR REPLACE FUNCTION public.are_friends(user_a UUID, user_b UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.friendships f
    WHERE f.status = 'accepted'
      AND (
        (f.requester_id = user_a AND f.addressee_id = user_b)
        OR (f.requester_id = user_b AND f.addressee_id = user_a)
      )
  );
$$;

-- ----------------------------------------------------------------------------
-- Triggers de protección de columnas sensibles frente a UPDATE directo
-- ----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.guard_profile_columns()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  IF auth.role() = 'service_role'
     OR current_setting('app.trusted_rpc', true) = 'on'
     OR public.is_admin() THEN
    RETURN NEW;
  END IF;

  IF NEW.username IS DISTINCT FROM OLD.username
     OR NEW.app_role IS DISTINCT FROM OLD.app_role
     OR NEW.account_status IS DISTINCT FROM OLD.account_status
     OR NEW.xp IS DISTINCT FROM OLD.xp
     OR NEW.level IS DISTINCT FROM OLD.level
     OR NEW.streak_count IS DISTINCT FROM OLD.streak_count
     OR NEW.streak_shields IS DISTINCT FROM OLD.streak_shields
     OR NEW.last_active_date IS DISTINCT FROM OLD.last_active_date THEN
    RAISE EXCEPTION 'Modificación directa no autorizada en columnas protegidas de profiles';
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_guard_profile_columns ON public.profiles;
CREATE TRIGGER trg_guard_profile_columns
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.guard_profile_columns();

CREATE OR REPLACE FUNCTION public.guard_student_progress_columns()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  IF auth.role() = 'service_role'
     OR current_setting('app.trusted_rpc', true) = 'on'
     OR public.is_admin()
     OR public.is_guardian_of(OLD.user_id) THEN
    RETURN NEW;
  END IF;

  IF NEW.recommended_missions IS DISTINCT FROM OLD.recommended_missions THEN
    RAISE EXCEPTION 'Solo tutores o administradores pueden modificar recommended_missions';
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_guard_student_progress_columns ON public.student_progress;
CREATE TRIGGER trg_guard_student_progress_columns
  BEFORE UPDATE ON public.student_progress
  FOR EACH ROW EXECUTE FUNCTION public.guard_student_progress_columns();

-- ----------------------------------------------------------------------------
-- Políticas por tabla
-- ----------------------------------------------------------------------------

-- FAMILIES
DROP POLICY IF EXISTS "families_select" ON public.families;
CREATE POLICY "families_select" ON public.families
  FOR SELECT TO authenticated
  USING (public.is_family_member(id) OR public.is_admin());

-- FAMILY_MEMBERS
DROP POLICY IF EXISTS "family_members_select" ON public.family_members;
CREATE POLICY "family_members_select" ON public.family_members
  FOR SELECT TO authenticated
  USING (
    user_id = auth.uid()
    OR public.is_guardian_of(user_id)
    OR public.is_admin()
  );

-- PROFILES
DROP POLICY IF EXISTS "profiles_select" ON public.profiles;
CREATE POLICY "profiles_select" ON public.profiles
  FOR SELECT TO authenticated
  USING (
    id = auth.uid()
    OR public.is_guardian_of(id)
    OR public.is_admin()
  );

DROP POLICY IF EXISTS "profiles_update_self" ON public.profiles;
CREATE POLICY "profiles_update_self" ON public.profiles
  FOR UPDATE TO authenticated
  USING (id = auth.uid() AND account_status = 'active')
  WITH CHECK (id = auth.uid() AND account_status = 'active');

-- STUDENT_PROGRESS
DROP POLICY IF EXISTS "student_progress_select" ON public.student_progress;
CREATE POLICY "student_progress_select" ON public.student_progress
  FOR SELECT TO authenticated
  USING (
    user_id = auth.uid()
    OR public.is_guardian_of(user_id)
    OR public.is_admin()
  );

DROP POLICY IF EXISTS "student_progress_update" ON public.student_progress;
CREATE POLICY "student_progress_update" ON public.student_progress
  FOR UPDATE TO authenticated
  USING (
    user_id = auth.uid()
    OR public.is_guardian_of(user_id)
    OR public.is_admin()
  )
  WITH CHECK (
    user_id = auth.uid()
    OR public.is_guardian_of(user_id)
    OR public.is_admin()
  );

-- XP_LEDGER (solo lectura; escritura exclusiva por RPCs SECURITY DEFINER)
DROP POLICY IF EXISTS "xp_ledger_select" ON public.xp_ledger;
CREATE POLICY "xp_ledger_select" ON public.xp_ledger
  FOR SELECT TO authenticated
  USING (
    user_id = auth.uid()
    OR public.is_guardian_of(user_id)
    OR public.is_admin()
  );

-- ACTIVITY_LOG (solo lectura; escritura exclusiva por RPCs SECURITY DEFINER)
DROP POLICY IF EXISTS "activity_log_select" ON public.activity_log;
CREATE POLICY "activity_log_select" ON public.activity_log
  FOR SELECT TO authenticated
  USING (
    user_id = auth.uid()
    OR public.is_guardian_of(user_id)
    OR public.is_admin()
  );

-- FRIENDSHIPS
DROP POLICY IF EXISTS "friendships_select" ON public.friendships;
CREATE POLICY "friendships_select" ON public.friendships
  FOR SELECT TO authenticated
  USING (
    requester_id = auth.uid()
    OR addressee_id = auth.uid()
    OR public.is_admin()
  );

DROP POLICY IF EXISTS "friendships_insert" ON public.friendships;
CREATE POLICY "friendships_insert" ON public.friendships
  FOR INSERT TO authenticated
  WITH CHECK (
    requester_id = auth.uid()
    AND status = 'pending'
  );

DROP POLICY IF EXISTS "friendships_update" ON public.friendships;
CREATE POLICY "friendships_update" ON public.friendships
  FOR UPDATE TO authenticated
  USING (addressee_id = auth.uid() OR requester_id = auth.uid())
  WITH CHECK (
    (addressee_id = auth.uid() AND status IN ('accepted', 'blocked'))
    OR (requester_id = auth.uid() AND status = 'pending')
  );

DROP POLICY IF EXISTS "friendships_delete" ON public.friendships;
CREATE POLICY "friendships_delete" ON public.friendships
  FOR DELETE TO authenticated
  USING (requester_id = auth.uid() OR addressee_id = auth.uid() OR public.is_admin());

-- CHALLENGES (lectura restringida; mutaciones por RPCs)
DROP POLICY IF EXISTS "challenges_select" ON public.challenges;
CREATE POLICY "challenges_select" ON public.challenges
  FOR SELECT TO authenticated
  USING (
    challenger_id = auth.uid()
    OR opponent_id = auth.uid()
    OR public.is_admin()
  );

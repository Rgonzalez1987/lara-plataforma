-- ============================================================================
-- 001_initial_schema.sql
-- Esquema base para Lara Platform v2 (Staging / Nueva Arquitectura)
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Tipos enumerados
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('student', 'guardian', 'admin');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.family_member_role AS ENUM ('guardian', 'student');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.account_status AS ENUM ('active', 'suspended');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.friendship_status AS ENUM ('pending', 'accepted', 'blocked');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.challenge_status AS ENUM ('pending', 'completed', 'cancelled');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE public.xp_source_type AS ENUM (
    'aventura',
    'arcade',
    'explora',
    'challenge',
    'shield_purchase',
    'admin_adjust'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- 1. Familias
CREATE TABLE IF NOT EXISTS public.families (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL CHECK (char_length(trim(name)) BETWEEN 2 AND 80),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Perfiles (vinculados 1:1 a auth.users; sin contraseñas ni secretos)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT NOT NULL CHECK (char_length(trim(username)) BETWEEN 2 AND 32),
  display_name TEXT,
  grade TEXT NOT NULL DEFAULT '4º Primaria',
  avatar TEXT NOT NULL DEFAULT '⚡',
  app_role public.app_role NOT NULL DEFAULT 'student',
  account_status public.account_status NOT NULL DEFAULT 'active',
  xp INTEGER NOT NULL DEFAULT 0 CHECK (xp >= 0),
  level INTEGER NOT NULL DEFAULT 1 CHECK (level >= 1),
  streak_count INTEGER NOT NULL DEFAULT 0 CHECK (streak_count >= 0),
  streak_shields INTEGER NOT NULL DEFAULT 1 CHECK (streak_shields BETWEEN 0 AND 3),
  last_active_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS profiles_username_lower_idx
  ON public.profiles (lower(username));

-- 3. Miembros de familia (varios tutores y varios niños por familia)
CREATE TABLE IF NOT EXISTS public.family_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  family_id UUID NOT NULL REFERENCES public.families(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  member_role public.family_member_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (family_id, user_id)
);

CREATE INDEX IF NOT EXISTS family_members_user_idx ON public.family_members (user_id);
CREATE INDEX IF NOT EXISTS family_members_family_idx ON public.family_members (family_id);

-- 4. Progreso y métricas del alumno (separado de profiles para privacidad)
CREATE TABLE IF NOT EXISTS public.student_progress (
  user_id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
  adv JSONB NOT NULL DEFAULT '{}'::jsonb,
  adv_meta JSONB NOT NULL DEFAULT '{}'::jsonb,
  fails JSONB NOT NULL DEFAULT '[]'::jsonb,
  metrics JSONB NOT NULL DEFAULT '{}'::jsonb,
  recommended_missions JSONB NOT NULL DEFAULT '[]'::jsonb,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 5. Libro mayor de XP (auditoría e idempotencia anti-trampas)
CREATE TABLE IF NOT EXISTS public.xp_ledger (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  delta_xp INTEGER NOT NULL,
  source_type public.xp_source_type NOT NULL,
  source_ref TEXT,
  session_nonce UUID NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS xp_ledger_user_date_idx
  ON public.xp_ledger (user_id, created_at DESC);

-- 6. Historial de actividad
CREATE TABLE IF NOT EXISTS public.activity_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  xp_earned INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS activity_log_user_date_idx
  ON public.activity_log (user_id, created_at DESC);

-- 7. Amistades con estado
CREATE TABLE IF NOT EXISTS public.friendships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  requester_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  addressee_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  status public.friendship_status NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CHECK (requester_id <> addressee_id),
  UNIQUE (requester_id, addressee_id)
);

CREATE INDEX IF NOT EXISTS friendships_requester_idx ON public.friendships (requester_id);
CREATE INDEX IF NOT EXISTS friendships_addressee_idx ON public.friendships (addressee_id);

-- 8. Retos entre amigos
CREATE TABLE IF NOT EXISTS public.challenges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  challenger_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  opponent_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  challenger_score INTEGER NOT NULL DEFAULT 0 CHECK (challenger_score >= 0),
  opponent_score INTEGER CHECK (opponent_score IS NULL OR opponent_score >= 0),
  game_type TEXT NOT NULL DEFAULT 'math',
  status public.challenge_status NOT NULL DEFAULT 'pending',
  winner_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ,
  CHECK (challenger_id <> opponent_id)
);

CREATE INDEX IF NOT EXISTS challenges_challenger_idx ON public.challenges (challenger_id);
CREATE INDEX IF NOT EXISTS challenges_opponent_idx ON public.challenges (opponent_id);

-- Trigger genérico para updated_at
CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_profiles_updated_at ON public.profiles;
CREATE TRIGGER trg_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

DROP TRIGGER IF EXISTS trg_student_progress_updated_at ON public.student_progress;
CREATE TRIGGER trg_student_progress_updated_at
  BEFORE UPDATE ON public.student_progress
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

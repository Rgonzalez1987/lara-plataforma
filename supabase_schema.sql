-- TABLA DE PERFILES DE ALUMNOS
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    grade TEXT DEFAULT '4º Primaria',
    avatar TEXT DEFAULT '⚡',
    xp INTEGER DEFAULT 0,
    level INTEGER DEFAULT 1,
    streak_count INTEGER DEFAULT 0,
    streak_shields INTEGER DEFAULT 1,
    last_active_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- TABLA DE AMIGOS / SEGUIDORES
CREATE TABLE IF NOT EXISTS public.friends (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    friend_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(user_id, friend_id)
);

-- TABLA DE RETOS ENTRE AMIGOS (ESTILO DUOLINGO)
CREATE TABLE IF NOT EXISTS public.challenges (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    challenger_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    opponent_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    challenger_score INTEGER DEFAULT 0,
    opponent_score INTEGER DEFAULT NULL,
    game_type TEXT DEFAULT 'math',
    status TEXT DEFAULT 'pending',
    winner_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- TABLA DE ACTIVIDAD DIARIA / HISTORIAL
CREATE TABLE IF NOT EXISTS public.activity_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    action TEXT,
    xp_earned INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Habilitar acceso directo (RLS permissive para nuestra app)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.friends ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_log ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Permitir todo en profiles" ON public.profiles;
DROP POLICY IF EXISTS "Permitir todo en friends" ON public.friends;
DROP POLICY IF EXISTS "Permitir todo en challenges" ON public.challenges;
DROP POLICY IF EXISTS "Permitir todo en activity_log" ON public.activity_log;

CREATE POLICY "Permitir todo en profiles" ON public.profiles FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Permitir todo en friends" ON public.friends FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Permitir todo en challenges" ON public.challenges FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Permitir todo en activity_log" ON public.activity_log FOR ALL USING (true) WITH CHECK (true);

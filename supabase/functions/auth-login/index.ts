import { corsHeaders, jsonResponse } from '../_shared/cors.ts';
import { getAdminClient, getAnonClient } from '../_shared/supabase.ts';

interface LoginBody {
  username?: string;
  password?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Método no permitido' }, 405);
  }

  try {
    const body = (await req.json()) as LoginBody;
    const username = (body.username ?? '').trim().toLowerCase();
    const password = body.password ?? '';

    if (!username || !password) {
      return jsonResponse({ error: 'Usuario y contraseña obligatorios' }, 400);
    }

    const admin = getAdminClient();
    const { data: profile, error: profErr } = await admin
      .from('profiles')
      .select('id, username, display_name, grade, avatar, app_role, account_status, xp, level, streak_count, streak_shields, last_active_date')
      .ilike('username', username)
      .maybeSingle();

    if (profErr) {
      console.error('auth-login DB error:', profErr);
      return jsonResponse({ error: `Error de base de datos: ${profErr.message}` }, 500);
    }
    if (!profile || profile.account_status !== 'active') {
      return jsonResponse({ error: 'Usuario o contraseña incorrectos' }, 401);
    }

    const { data: authUser, error: userErr } = await admin.auth.admin.getUserById(profile.id);
    if (userErr || !authUser.user?.email) {
      console.error('auth-login getUserById failed:', { userErr });
      return jsonResponse({ error: 'Usuario o contraseña incorrectos' }, 401);
    }

    const anon = getAnonClient();
    const { data: signInData, error: signInErr } = await anon.auth.signInWithPassword({
      email: authUser.user.email,
      password,
    });

    if (signInErr || !signInData.session) {
      console.error('auth-login signInWithPassword failed:', { message: signInErr?.message });
      return jsonResponse({ error: 'Usuario o contraseña incorrectos' }, 401);
    }

    return jsonResponse({
      session: {
        access_token: signInData.session.access_token,
        refresh_token: signInData.session.refresh_token,
        expires_at: signInData.session.expires_at,
      },
      profile,
    });
  } catch {
    return jsonResponse({ error: 'Error procesando inicio de sesión' }, 500);
  }
});

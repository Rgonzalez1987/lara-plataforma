import type { Profile } from '../types/database';
import { invokeEdgeFunction, requireSupabase } from './supabase-helpers';

interface AuthLoginResponse {
  session: {
    access_token: string;
    refresh_token: string;
    expires_at?: number;
  };
  profile: Profile;
}

export async function loginWithUsername(username: string, password: string): Promise<Profile> {
  const sb = requireSupabase();
  const res = await invokeEdgeFunction<AuthLoginResponse>('auth-login', {
    username: username.trim(),
    password,
  });

  const { error } = await sb.auth.setSession({
    access_token: res.session.access_token,
    refresh_token: res.session.refresh_token,
  });
  if (error) {
    throw new Error('No se pudo establecer la sesión autenticada');
  }

  return res.profile;
}

export async function logout(): Promise<void> {
  const sb = requireSupabase();
  const { error } = await sb.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
}

export async function getCurrentProfile(): Promise<Profile | null> {
  const sb = requireSupabase();
  const { data: userData, error: userErr } = await sb.auth.getUser();
  if (userErr || !userData.user) {
    return null;
  }

  const { data, error } = await sb
    .from('profiles')
    .select('*')
    .eq('id', userData.user.id)
    .maybeSingle<Profile>();

  if (error) {
    throw new Error(error.message);
  }
  return data ?? null;
}

export async function updateOwnProfile(
  userId: string,
  patch: Partial<Pick<Profile, 'avatar' | 'grade' | 'display_name'>>,
): Promise<Profile> {
  const sb = requireSupabase();
  const { data, error } = await sb
    .from('profiles')
    .update(patch)
    .eq('id', userId)
    .select('*')
    .single<Profile>();

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

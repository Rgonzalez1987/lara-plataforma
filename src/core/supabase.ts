import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { assertEnvConfigured, env } from '../config/env';

let client: SupabaseClient | null = null;

/**
 * Devuelve el cliente singleton de Supabase usando únicamente la clave pública (anon).
 * Retorna null si aún no se han configurado las variables VITE_SUPABASE_*.
 */
export function getSupabaseClient(): SupabaseClient | null {
  if (!assertEnvConfigured()) {
    return null;
  }
  if (!client) {
    client = createClient(env.supabaseUrl, env.supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false,
      },
    });
  }
  return client;
}

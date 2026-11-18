export const env = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL ?? '',
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? '',
} as const;

export function assertEnvConfigured(): boolean {
  return Boolean(env.supabaseUrl && env.supabaseAnonKey);
}

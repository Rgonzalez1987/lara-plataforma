import type { SupabaseClient } from '@supabase/supabase-js';
import { getSupabaseClient } from '../core/supabase';

export function requireSupabase(): SupabaseClient {
  const sb = getSupabaseClient();
  if (!sb) {
    throw new Error('Supabase no está configurado. Revisa VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY.');
  }
  return sb;
}

export async function invokeEdgeFunction<TResponse>(
  name: string,
  body: Record<string, unknown>,
): Promise<TResponse> {
  const sb = requireSupabase();
  const { data, error } = await sb.functions.invoke<TResponse & { error?: string }>(name, {
    body,
  });

  if (error) {
    // FunctionsHttpError guarda la Response en error.context
    const ctx = (error as { context?: Response }).context;
    if (ctx && typeof ctx.json === 'function') {
      try {
        const errBody = (await ctx.json()) as { error?: string; message?: string };
        if (errBody?.error) throw new Error(errBody.error);
        if (errBody?.message) throw new Error(errBody.message);
      } catch (inner) {
        if (inner instanceof Error && inner.message !== error.message) {
          throw inner;
        }
      }
    }
    throw new Error(error.message || `Error invocando ${name}`);
  }
  if (!data) {
    throw new Error(`Respuesta vacía de ${name}`);
  }
  if (typeof data === 'object' && 'error' in data && data.error) {
    throw new Error(data.error);
  }
  return data;
}

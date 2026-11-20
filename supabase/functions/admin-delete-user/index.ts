import { corsHeaders, jsonResponse } from '../_shared/cors.ts';
import { getAdminClient, getCallerUser } from '../_shared/supabase.ts';

interface AdminDeleteUserBody {
  userId?: string;
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Método no permitido' }, 405);
  }

  try {
    const admin = getAdminClient();
    const caller = await getCallerUser(req, admin);
    if (!caller) {
      return jsonResponse({ error: 'No autenticado' }, 401);
    }

    const { data: callerProfile } = await admin
      .from('profiles')
      .select('app_role, account_status')
      .eq('id', caller.id)
      .maybeSingle();

    if (!callerProfile || callerProfile.app_role !== 'admin' || callerProfile.account_status !== 'active') {
      return jsonResponse({ error: 'Solo administradores pueden eliminar usuarios' }, 403);
    }

    const body = (await req.json()) as AdminDeleteUserBody;
    const userId = (body.userId ?? '').trim();

    if (!UUID_RE.test(userId)) {
      return jsonResponse({ error: 'ID de usuario inválido' }, 400);
    }
    if (userId === caller.id) {
      return jsonResponse({ error: 'No puedes eliminar tu propia cuenta de administrador' }, 400);
    }

    const { error: delErr } = await admin.auth.admin.deleteUser(userId);
    if (delErr) {
      return jsonResponse({ error: `No se pudo eliminar usuario: ${delErr.message}` }, 400);
    }

    return jsonResponse({ ok: true, id: userId }, 200);
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Error interno';
    return jsonResponse({ error: msg }, 500);
  }
});

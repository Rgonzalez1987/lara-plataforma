import { corsHeaders, jsonResponse } from '../_shared/cors.ts';
import { getAdminClient, getCallerUser } from '../_shared/supabase.ts';

interface AdminCreateUserBody {
  username?: string;
  password?: string;
  displayName?: string;
  grade?: string;
  avatar?: string;
  appRole?: 'student' | 'guardian' | 'admin';
  familyId?: string;
  newFamilyName?: string;
}

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
      return jsonResponse({ error: 'Solo administradores pueden crear usuarios' }, 403);
    }

    const body = (await req.json()) as AdminCreateUserBody;
    const username = (body.username ?? '').trim();
    const password = body.password ?? '';
    const appRole = body.appRole ?? 'student';

    if (username.length < 2 || username.length > 32) {
      return jsonResponse({ error: 'El nombre de usuario debe tener entre 2 y 32 caracteres' }, 400);
    }
    if (password.length < 6) {
      return jsonResponse({ error: 'La contraseña debe tener al menos 6 caracteres' }, 400);
    }

    const userId = crypto.randomUUID();
    const internalEmail = `${userId}@kids.lara.internal`;

    const { error: authErr } = await admin.auth.admin.createUser({
      id: userId,
      email: internalEmail,
      password,
      email_confirm: true,
      user_metadata: { username, app_role: appRole },
    });

    if (authErr) {
      return jsonResponse({ error: `No se pudo crear usuario Auth: ${authErr.message}` }, 400);
    }

    const { error: profErr } = await admin.from('profiles').insert({
      id: userId,
      username,
      display_name: body.displayName?.trim() || username,
      grade: body.grade?.trim() || '4º Primaria',
      avatar: body.avatar?.trim() || '⚡',
      app_role: appRole,
      account_status: 'active',
    });

    if (profErr) {
      await admin.auth.admin.deleteUser(userId);
      return jsonResponse({ error: `Error creando perfil: ${profErr.message}` }, 400);
    }

    if (appRole === 'student') {
      await admin.from('student_progress').insert({ user_id: userId });
    }

    let resolvedFamilyId = body.familyId ?? null;
    if (!resolvedFamilyId && body.newFamilyName?.trim()) {
      const { data: fam, error: famErr } = await admin
        .from('families')
        .insert({ name: body.newFamilyName.trim() })
        .select('id')
        .single();
      if (!famErr && fam) {
        resolvedFamilyId = fam.id;
      }
    }

    if (resolvedFamilyId && (appRole === 'student' || appRole === 'guardian')) {
      await admin.from('family_members').insert({
        family_id: resolvedFamilyId,
        user_id: userId,
        member_role: appRole,
      });
    }

    return jsonResponse({
      id: userId,
      username,
      appRole,
      familyId: resolvedFamilyId,
    }, 201);
  } catch {
    return jsonResponse({ error: 'Error interno creando usuario' }, 500);
  }
});

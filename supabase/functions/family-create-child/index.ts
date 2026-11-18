import { corsHeaders, jsonResponse } from '../_shared/cors.ts';
import { getAdminClient, getCallerUser } from '../_shared/supabase.ts';

interface CreateChildBody {
  familyId?: string;
  username?: string;
  password?: string;
  displayName?: string;
  grade?: string;
  avatar?: string;
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

    const body = (await req.json()) as CreateChildBody;
    const username = (body.username ?? '').trim();
    const password = body.password ?? '';

    if (username.length < 2 || username.length > 32) {
      return jsonResponse({ error: 'El nombre de usuario debe tener entre 2 y 32 caracteres' }, 400);
    }
    if (password.length < 6) {
      return jsonResponse({ error: 'La contraseña debe tener al menos 6 caracteres' }, 400);
    }

    // Verificar que el usuario autenticado es tutor de la familia indicada (o su primera familia)
    let guardianQuery = admin
      .from('family_members')
      .select('family_id')
      .eq('user_id', caller.id)
      .eq('member_role', 'guardian');

    if (body.familyId) {
      guardianQuery = guardianQuery.eq('family_id', body.familyId);
    }

    const { data: membership } = await guardianQuery.limit(1).maybeSingle();
    if (!membership) {
      return jsonResponse({ error: 'No tienes permisos de tutor en esta familia' }, 403);
    }

    const childId = crypto.randomUUID();
    const internalEmail = `${childId}@kids.lara.internal`;

    const { error: authErr } = await admin.auth.admin.createUser({
      id: childId,
      email: internalEmail,
      password,
      email_confirm: true,
      user_metadata: { username, app_role: 'student' },
    });

    if (authErr) {
      return jsonResponse({ error: `No se pudo crear cuenta: ${authErr.message}` }, 400);
    }

    const { error: profErr } = await admin.from('profiles').insert({
      id: childId,
      username,
      display_name: body.displayName?.trim() || username,
      grade: body.grade?.trim() || '4º Primaria',
      avatar: body.avatar?.trim() || '⚡',
      app_role: 'student',
      account_status: 'active',
    });

    if (profErr) {
      await admin.auth.admin.deleteUser(childId);
      return jsonResponse({ error: `Error creando perfil: ${profErr.message}` }, 400);
    }

    await admin.from('student_progress').insert({ user_id: childId });
    await admin.from('family_members').insert({
      family_id: membership.family_id,
      user_id: childId,
      member_role: 'student',
    });

    return jsonResponse({
      id: childId,
      username,
      familyId: membership.family_id,
    }, 201);
  } catch {
    return jsonResponse({ error: 'Error interno creando cuenta infantil' }, 500);
  }
});

import '../../../js/aventura/meta.js';
import { el } from '../../core/dom';
import { sfx } from '../../core/sfx';
import {
  adminCreateUser,
  getFamilyMembers,
  getStudentProgressForGuardian,
  setRecommendedMissions,
  type FamilyMemberWithProfile,
} from '../../services/family.service';
import type { AppRole, Profile } from '../../types/database';

interface AdvMetaItem {
  id: number;
  subject: string;
  mission: string;
  title: string;
}

function getAdvMetaList(): AdvMetaItem[] {
  const adv = (window as unknown as { Adv?: { meta?: AdvMetaItem[] } }).Adv;
  return Array.isArray(adv?.meta) ? adv.meta : [];
}

export function renderFamilyView(profile: Profile): HTMLElement {
  const isAdmin = profile.app_role === 'admin';
  const isGuardian = profile.app_role === 'guardian';

  if (!isAdmin && !isGuardian) {
    return el(
      'div',
      { className: 'glass-card' },
      el('h2', {}, 'Acceso restringido'),
      el('p', { className: 'muted' }, 'Solo tutores o administradores pueden gestionar cuentas familiares.'),
    );
  }

  const container = el('div', {});
  const listBox = el('div', { className: 'glass-card' }, el('h2', {}, '👨‍👩‍👧 Miembros de la familia'), el('p', { className: 'muted' }, 'Cargando...'));
  const recBox = el('div', { className: 'glass-card' }, el('h2', {}, '🎯 Misiones Recomendadas'), el('p', { className: 'muted' }, 'Cargando alumnos...'));
  const feedback = el('div', { className: 'alert' });
  feedback.style.display = 'none';

  const usernameInput = el('input', { id: 'child-user', className: 'input', type: 'text', required: true, minLength: 2, maxLength: 32, placeholder: 'Ej. lara_2' });
  const passInput = el('input', { id: 'child-pass', className: 'input', type: 'password', required: true, minLength: 6, placeholder: 'Mínimo 6 caracteres' });
  const gradeInput = el('input', { id: 'child-grade', className: 'input', type: 'text', value: '4º Primaria' });
  const familyNameInput = el('input', { id: 'family-name', className: 'input', type: 'text', placeholder: 'Opcional: nombre de nueva familia' });

  const roleSelect = document.createElement('select');
  roleSelect.id = 'new-user-role';
  roleSelect.className = 'input';
  for (const r of ['student', 'guardian', 'admin'] as AppRole[]) {
    const opt = document.createElement('option');
    opt.value = r;
    opt.textContent = r;
    roleSelect.appendChild(opt);
  }

  const submitBtn = el('button', { className: 'btn', type: 'submit' }, isAdmin ? 'Crear Usuario' : 'Añadir Hijo/a');

  const form = el(
    'form',
    {
      className: 'glass-card',
      onSubmit: async (e) => {
        e.preventDefault();
        feedback.style.display = 'none';
        submitBtn.disabled = true;

        try {
          if (isAdmin) {
            await adminCreateUser({
              username: usernameInput.value.trim(),
              password: passInput.value,
              grade: gradeInput.value.trim(),
              appRole: roleSelect.value as AppRole,
              newFamilyName: familyNameInput.value.trim() || undefined,
            });
          } else {
            throw new Error('Solo el administrador puede crear cuentas.');
          }

          sfx.lvl();
          feedback.className = 'alert alert-success';
          feedback.textContent = `Cuenta "${usernameInput.value.trim()}" creada correctamente.`;
          feedback.style.display = 'block';
          usernameInput.value = '';
          passInput.value = '';
          await refreshAll(listBox, recBox);
        } catch (err) {
          sfx.err();
          feedback.className = 'alert alert-error';
          feedback.textContent = err instanceof Error ? err.message : 'Error creando cuenta';
          feedback.style.display = 'block';
        } finally {
          submitBtn.disabled = false;
        }
      },
    },
    el('h2', {}, isAdmin ? '🛠️ Crear cuenta (Admin)' : '➕ Añadir cuenta infantil'),
    feedback,
    el('div', { className: 'field' }, el('label', { htmlFor: 'child-user' }, 'Usuario'), usernameInput),
    el('div', { className: 'field' }, el('label', { htmlFor: 'child-pass' }, 'Contraseña / PIN'), passInput),
    el('div', { className: 'field' }, el('label', { htmlFor: 'child-grade' }, 'Curso'), gradeInput),
    isAdmin ? el('div', { className: 'field' }, el('label', { htmlFor: 'new-user-role' }, 'Rol'), roleSelect) : null,
    isAdmin ? el('div', { className: 'field' }, el('label', { htmlFor: 'family-name' }, 'Nueva Familia'), familyNameInput) : null,
    submitBtn,
  );

  container.append(listBox, el('div', { style: 'height: 1rem;' } as never), recBox, el('div', { style: 'height: 1rem;' } as never), form);
  void refreshAll(listBox, recBox);
  return container;
}

async function refreshAll(listBox: HTMLElement, recBox: HTMLElement): Promise<void> {
  try {
    const members = await getFamilyMembers();
    renderMembersList(listBox, members);
    await renderRecommendationsPanel(recBox, members);
  } catch (err) {
    listBox.replaceChildren(
      el('h2', {}, '👨‍👩‍👧 Miembros de la familia'),
      el('p', { className: 'muted' }, err instanceof Error ? err.message : 'No se pudieron cargar los miembros.'),
    );
    recBox.replaceChildren(el('h2', {}, '🎯 Misiones Recomendadas'));
  }
}

function renderMembersList(listBox: HTMLElement, members: FamilyMemberWithProfile[]): void {
  const title = el('h2', {}, '👨‍👩‍👧 Miembros de la familia');
  if (members.length === 0) {
    listBox.replaceChildren(title, el('p', { className: 'muted' }, 'Todavía no hay miembros vinculados.'));
    return;
  }

  const grid = el('div', { className: 'grid' });
  for (const m of members) {
    const p = m.profile;
    grid.appendChild(
      el(
        'div',
        { className: 'card' },
        el('strong', {}, `${p?.avatar ?? '⚡'} ${p?.username ?? m.user_id}`),
        el('p', { className: 'muted' }, `${m.member_role} · ${p?.grade ?? ''}`),
        el('p', {}, `💎 ${p?.xp ?? 0} XP · Nv. ${p?.level ?? 1} · 🔥 ${p?.streak_count ?? 0}`),
      ),
    );
  }
  listBox.replaceChildren(title, grid);
}

async function renderRecommendationsPanel(recBox: HTMLElement, members: FamilyMemberWithProfile[]): Promise<void> {
  const students = members.filter((m) => m.member_role === 'student' && m.profile);
  const title = el('h2', {}, '🎯 Misiones Recomendadas');

  if (students.length === 0) {
    recBox.replaceChildren(title, el('p', { className: 'muted' }, 'Crea un alumno vinculado a una familia para recomendarle misiones.'));
    return;
  }

  const studentSelect = document.createElement('select');
  studentSelect.className = 'input';
  for (const s of students) {
    const opt = document.createElement('option');
    opt.value = s.user_id;
    opt.textContent = `${s.profile?.avatar ?? '⚡'} ${s.profile?.username ?? s.user_id}`;
    studentSelect.appendChild(opt);
  }

  const missions = getAdvMetaList();
  const missionSelect = document.createElement('select');
  missionSelect.className = 'input';
  for (const m of missions) {
    const opt = document.createElement('option');
    opt.value = String(m.id);
    opt.textContent = `${m.mission}: ${m.title} (${m.subject})`;
    missionSelect.appendChild(opt);
  }

  const tagsBox = el('div', { className: 'topbar-stats' });
  const statusMsg = el('p', { className: 'muted' }, '');
  let currentIds: number[] = [];

  async function loadSelectedStudent(): Promise<void> {
    const sid = studentSelect.value;
    const prog = await getStudentProgressForGuardian(sid);
    currentIds = Array.isArray(prog?.recommended_missions) ? prog.recommended_missions : [];
    drawTags();
  }

  function drawTags(): void {
    if (currentIds.length === 0) {
      tagsBox.replaceChildren(el('span', { className: 'muted' }, 'Sin misiones recomendadas aún.'));
      return;
    }
    tagsBox.replaceChildren(
      ...currentIds.map((id) => {
        const meta = missions.find((m) => m.id === id);
        return el(
          'button',
          {
            type: 'button',
            className: 'pill',
            onClick: async () => {
              const next = currentIds.filter((x) => x !== id);
              await setRecommendedMissions(studentSelect.value, next);
              currentIds = next;
              sfx.tap();
              drawTags();
            },
          },
          `${meta ? meta.title : `Misión ${id}`} ✕`,
        );
      }),
    );
  }

  studentSelect.addEventListener('change', () => {
    void loadSelectedStudent();
  });

  const addBtn = el(
    'button',
    {
      type: 'button',
      className: 'btn',
      onClick: async () => {
        const mid = Number(missionSelect.value);
        if (!mid || currentIds.includes(mid)) return;
        const next = [...currentIds, mid];
        await setRecommendedMissions(studentSelect.value, next);
        currentIds = next;
        sfx.ok();
        statusMsg.textContent = 'Misión recomendada guardada.';
        drawTags();
      },
    },
    '+ Recomendar misión',
  );

  recBox.replaceChildren(
    title,
    el('div', { className: 'field' }, el('label', {}, 'Alumno'), studentSelect),
    el('div', { className: 'field' }, el('label', {}, 'Misión de Aventura'), missionSelect),
    addBtn,
    el('div', { style: 'height: 0.75rem;' } as never),
    tagsBox,
    statusMsg,
  );

  await loadSelectedStudent();
}

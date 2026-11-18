import { el } from '../../core/dom';
import { setState } from '../../core/state';
import { loginWithUsername } from '../../services/auth.service';
import { syncDailyStreak } from '../../services/progress.service';

export function renderLoginView(): HTMLElement {
  const errorBox = el('div', { className: 'alert alert-error' });
  errorBox.style.display = 'none';

  const usernameInput = el('input', {
    id: 'login-username',
    className: 'input',
    type: 'text',
    placeholder: 'Ej. lara',
    required: true,
    minLength: 2,
    maxLength: 32,
  });

  const passwordInput = el('input', {
    id: 'login-password',
    className: 'input',
    type: 'password',
    placeholder: 'Tu contraseña o PIN',
    required: true,
    minLength: 6,
  });

  const submitBtn = el('button', { className: 'btn', type: 'submit' }, 'Entrar a Jugar');
  submitBtn.style.width = '100%';

  const form = el(
    'form',
    {
      onSubmit: async (e) => {
        e.preventDefault();
        errorBox.style.display = 'none';
        submitBtn.disabled = true;
        submitBtn.textContent = 'Conectando...';

        try {
          const profile = await loginWithUsername(usernameInput.value, passwordInput.value);
          try {
            const streak = await syncDailyStreak();
            profile.streak_count = streak.streak_count;
            profile.streak_shields = streak.streak_shields;
          } catch {
            // Si falla la sincronización de racha no bloqueamos el acceso
          }
          setState({ profile, screen: 'home' });
        } catch (err) {
          errorBox.textContent = err instanceof Error ? err.message : 'Error al iniciar sesión';
          errorBox.style.display = 'block';
        } finally {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Entrar a Jugar';
        }
      },
    },
    errorBox,
    el('div', { className: 'field' }, el('label', { htmlFor: 'login-username' }, 'Usuario'), usernameInput),
    el('div', { className: 'field' }, el('label', { htmlFor: 'login-password' }, 'Contraseña o PIN'), passwordInput),
    submitBtn,
  );

  return el(
    'div',
    { className: 'auth-wrap' },
    el(
      'div',
      { className: 'card auth-card' },
      el('h1', {}, '⚡ Lara Platform'),
      el('p', { className: 'muted' }, 'Inicia sesión con tu usuario asignado por tu tutor o administrador.'),
      form,
    ),
  );
}

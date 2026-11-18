import { el } from '../../core/dom';
import { sfx } from '../../core/sfx';
import { setState } from '../../core/state';
import { updateOwnProfile } from '../../services/auth.service';
import { buyStreakShield } from '../../services/progress.service';
import type { Profile } from '../../types/database';

const AVATARS = ['⚡', '🦊', '🚀', '🦄', '🐉', '🦉', '🐼', '🦁', '🎮', '🌟', '🧠', '🏆'];

export function renderHomeView(profile: Profile): HTMLElement {
  const feedback = el('div', { className: 'alert' });
  feedback.style.display = 'none';

  const shieldBtn = el(
    'button',
    {
      className: 'btn btn-secondary',
      type: 'button',
      onClick: async () => {
        sfx.tap();
        feedback.style.display = 'none';
        shieldBtn.disabled = true;
        try {
          const res = await buyStreakShield();
          sfx.lvl();
          setState({
            profile: {
              ...profile,
              xp: res.new_xp,
              streak_shields: res.new_shields,
            },
          });
        } catch (err) {
          sfx.err();
          feedback.className = 'alert alert-error';
          feedback.textContent = err instanceof Error ? err.message : 'No se pudo comprar el protector';
          feedback.style.display = 'block';
          shieldBtn.disabled = false;
        }
      },
    },
    '🧊 Comprar Protector (300 XP)',
  );

  const avatarGrid = el(
    'div',
    { className: 'avatar-grid' },
    ...AVATARS.map((av) =>
      el(
        'button',
        {
          type: 'button',
          className: `avatar-option${profile.avatar === av ? ' active' : ''}`,
          onClick: async () => {
            sfx.tap();
            try {
              const updated = await updateOwnProfile(profile.id, { avatar: av });
              setState({ profile: updated });
            } catch {
              // Ignorar si falla temporalmente
            }
          },
        },
        av,
      ),
    ),
  );

  const heroCard = el(
    'div',
    { className: 'glass-card' },
    el('h1', {}, `${profile.avatar} ¡Hola, ${profile.display_name || profile.username}!`),
    el('p', { className: 'muted' }, `Curso: ${profile.grade} · Nivel ${profile.level} · 🔥 Racha de ${profile.streak_count} días`),
    feedback,
    el('div', { style: 'height: 0.75rem;' } as never),
    shieldBtn,
    el('div', { style: 'height: 1rem;' } as never),
    el('strong', {}, 'Elige tu avatar'),
    avatarGrid,
  );

  const dailyChallenge = el(
    'div',
    {
      className: 'daily-challenge',
      onClick: () => {
        sfx.tap();
        setState({ screen: 'arcade' });
      },
    },
    el('h3', {}, '⚡ Reto Diario de Cálculo'),
    el('p', { className: 'muted' }, 'Entra 60 segundos al Arcade y suma XP extra para subir de nivel.'),
    el('div', { style: 'height: 0.75rem;' } as never),
    el('span', { className: 'btn' }, 'Jugar ahora →'),
  );

  const dashGrid = el('div', { className: 'dash-grid' }, heroCard, dailyChallenge);

  const missionGrid = el(
    'div',
    { className: 'mission-grid' },
    buildNavCard('🗺️ Aventura', 'Las 40 misiones por estaciones', () => setState({ screen: 'aventura' })),
    buildNavCard('🧮 Arcade', 'Cálculo mental rápido y problemas', () => setState({ screen: 'arcade' })),
    buildNavCard('🔭 Explora', 'Lecturas ilustradas y comprensión', () => setState({ screen: 'explora' })),
    buildNavCard('🏆 Social', 'Podio, amigos y retos', () => setState({ screen: 'social' })),
  );

  return el('div', {}, dashGrid, el('div', { style: 'height: 1.5rem;' } as never), missionGrid);
}

function buildNavCard(title: string, desc: string, onOpen: () => void): HTMLElement {
  return el(
    'div',
    {
      className: 'mission-card',
      onClick: () => {
        sfx.tap();
        onOpen();
      },
    },
    el('h3', {}, title),
    el('p', { className: 'muted' }, desc),
  );
}

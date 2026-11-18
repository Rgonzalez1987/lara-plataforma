import './styles/legacy-theme.css';
import './styles/app.css';
import { assertEnvConfigured } from './config/env';
import { el } from './core/dom';
import { sfx } from './core/sfx';
import { getState, setState, subscribe, type ScreenId } from './core/state';
import { getCurrentProfile, logout } from './services/auth.service';
import { renderLoginView } from './features/auth/login.view';
import { renderHomeView } from './features/home/home.view';
import { renderFamilyView } from './features/family/family.view';
import { renderSocialView } from './features/social/social.view';
import { renderExploraView } from './features/explora/explora.view';
import { renderArcadeView } from './features/arcade/arcade.view';
import { renderAventuraView } from './features/aventura/aventura.view';
import { renderStatsView } from './features/stats/stats.view';
import type { Profile } from './types/database';

function renderScreenContent(profile: Profile, screen: ScreenId): HTMLElement {
  switch (screen) {
    case 'home':
      return renderHomeView(profile);
    case 'aventura':
      return renderAventuraView(profile);
    case 'arcade':
      return renderArcadeView(profile);
    case 'explora':
      return renderExploraView(profile);
    case 'social':
      return renderSocialView(profile);
    case 'stats':
      return renderStatsView(profile);
    case 'family':
      return renderFamilyView(profile);
  }
}

function renderShell(profile: Profile, activeScreen: ScreenId): HTMLElement {
  const navItems: Array<{ id: ScreenId; label: string; roles?: Profile['app_role'][] }> = [
    { id: 'home', label: '🏠 Inicio' },
    { id: 'aventura', label: '🗺️ Aventura' },
    { id: 'arcade', label: '🧮 Arcade' },
    { id: 'explora', label: '🔭 Explora' },
    { id: 'social', label: '🏆 Social' },
    { id: 'stats', label: '📊 Estadísticas' },
    { id: 'family', label: '👨‍👩‍👧 Familia / Admin', roles: ['guardian', 'admin'] },
  ];

  const sidebar = el(
    'aside',
    { className: 'sidebar' },
    el('div', { className: 'logo' }, '⚡ LARA'),
    ...navItems
      .filter((item) => !item.roles || item.roles.includes(profile.app_role))
      .map((item) =>
        el(
          'button',
          {
            type: 'button',
            className: `nav-item${activeScreen === item.id ? ' active' : ''}`,
            onClick: () => {
              sfx.tap();
              setState({ screen: item.id });
            },
          },
          item.label,
        ),
      ),
  );

  const xpInLevel = profile.xp % 250;
  const xpPct = Math.min(100, Math.round((xpInLevel / 250) * 100));
  const barInner = el('div', { className: 'xp-bar-inner' });
  barInner.style.width = `${xpPct}%`;

  const logoutBtn = el(
    'button',
    {
      type: 'button',
      className: 'btn btn-secondary',
      onClick: async () => {
        await logout();
        setState({ profile: null, screen: 'home' });
      },
    },
    'Salir',
  );

  const topbar = el(
    'header',
    { className: 'topbar' },
    el(
      'div',
      { className: 'topbar-left' },
      el('div', { className: 'level-badge' }, String(profile.level)),
      el(
        'div',
        { className: 'xp-bar-wrap' },
        el('div', {}, `${profile.avatar} ${profile.display_name || profile.username} · ${profile.xp} XP`),
        el('div', { className: 'xp-bar-outer' }, barInner),
      ),
    ),
    el(
      'div',
      { className: 'topbar-stats' },
      el('span', { className: 'pill' }, `🔥 ${profile.streak_count} días`),
      el('span', { className: 'pill' }, `🧊 ${profile.streak_shields}`),
      logoutBtn,
    ),
  );

  const main = el(
    'div',
    { className: 'main-area' },
    topbar,
    el('main', { className: 'content' }, renderScreenContent(profile, activeScreen)),
  );

  return el('div', { className: 'app-shell' }, sidebar, main);
}

function render(): void {
  const root = document.getElementById('app');
  if (!root) return;

  const { booting, profile, screen } = getState();

  if (!assertEnvConfigured()) {
    root.replaceChildren(
      el(
        'div',
        { className: 'auth-wrap' },
        el(
          'div',
          { className: 'card auth-card' },
          el('h2', {}, '⚙️ Configuración pendiente'),
          el('p', { className: 'muted' }, 'Crea un archivo .env.local con VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY de tu proyecto Staging.'),
        ),
      ),
    );
    return;
  }

  if (booting) {
    root.replaceChildren(
      el('div', { className: 'auth-wrap' }, el('p', { className: 'muted' }, 'Cargando sesión...')),
    );
    return;
  }

  root.replaceChildren(profile ? renderShell(profile, screen) : renderLoginView());
}

async function bootstrap(): Promise<void> {
  subscribe(render);
  render();

  if (!assertEnvConfigured()) {
    setState({ booting: false });
    return;
  }

  try {
    const profile = await getCurrentProfile();
    setState({ profile, booting: false });
  } catch {
    setState({ profile: null, booting: false });
  }
}

void bootstrap();

import '../../../js/aventura/meta.js';
import '../../../js/aventura/engine.js';
import '../../../js/aventura/content.js';
import { el } from '../../core/dom';
import { setState } from '../../core/state';
import {
  awardXpFromSession,
  loadStudentProgress,
  saveStudentProgress,
} from '../../services/progress.service';
import type { Profile } from '../../types/database';

interface AdvEngine {
  applyCloudProfile: (profilePayload: Record<string, unknown>) => void;
  buildCloudPayload: () => {
    progress: {
      adv: Record<string, unknown>;
      advMeta: Record<string, unknown>;
      fails: unknown[];
    };
    metrics: Record<string, unknown>;
  } | null;
  renderScreen: () => void;
}

declare global {
  interface Window {
    Adv?: AdvEngine;
    app?: Record<string, unknown>;
  }
}

function showToast(title: string, msg: string): void {
  const toast = el('div', { className: 'toast' }, el('strong', {}, title), el('div', {}, msg));
  document.body.appendChild(toast);
  window.setTimeout(() => toast.remove(), 3500);
}

export function renderAventuraView(profile: Profile): HTMLElement {
  const container = el('div', { id: 'screen-aventura', className: 'screen active' });
  container.appendChild(
    el('div', { className: 'glass-card' }, el('p', { className: 'muted' }, 'Cargando Mapa de Aventura...')),
  );

  void mountAventura(container, profile);
  return container;
}

async function mountAventura(container: HTMLElement, profile: Profile): Promise<void> {
  const adv = window.Adv;
  if (!adv) {
    container.replaceChildren(
      el('div', { className: 'glass-card' }, el('p', { className: 'alert alert-error' }, 'No se pudo cargar el motor de Aventura.')),
    );
    return;
  }

  let saveTimer: number | null = null;
  const currState: Record<string, unknown> = {
    xp: profile.xp,
    lvl: profile.level,
    grade: profile.grade,
    avatar: profile.avatar,
    history: [],
    achievements: [],
    fails: [],
    adv: {},
    advMeta: {},
    metrics: {},
  };

  window.app = {
    curr: currState,
    cloudUser: {
      id: profile.id,
      username: profile.username,
      streak_shields: profile.streak_shields,
      recommended_missions: [],
    },
    impersonating: false,
    notify: (title: string, msg: string) => showToast(title, msg),
    switchScreen: () => adv.renderScreen(),
    save: () => {
      if (saveTimer !== null) window.clearTimeout(saveTimer);
      saveTimer = window.setTimeout(() => {
        const payload = adv.buildCloudPayload();
        if (!payload) return;
        void saveStudentProgress(profile.id, {
          adv: payload.progress.adv,
          adv_meta: payload.progress.advMeta,
          fails: payload.progress.fails,
          metrics: payload.metrics,
        }).catch(() => {});
      }, 600);
    },
    addXP: (rawXp: number) => {
      if (!rawXp || rawXp <= 0) return;
      void awardXpFromSession({
        sourceType: 'aventura',
        sourceRef: 'mission_activity',
        rawXp,
      })
        .then((res) => {
          currState.xp = res.new_xp;
          currState.lvl = res.new_level;
          setState({
            profile: { ...profile, xp: res.new_xp, level: res.new_level },
          });
        })
        .catch(() => {});
    },
  };

  try {
    const progress = await loadStudentProgress(profile.id);
    if (progress) {
      (window.app.cloudUser as Record<string, unknown>).recommended_missions =
        progress.recommended_missions ?? [];

      adv.applyCloudProfile({
        progress: {
          adv: progress.adv,
          advMeta: progress.adv_meta,
          fails: progress.fails,
        },
        metrics: progress.metrics,
      });
    }
  } catch {
    // Si el perfil aún no tiene fila en student_progress (ej. admin), arranca con estado vacío
  }

  adv.renderScreen();
}

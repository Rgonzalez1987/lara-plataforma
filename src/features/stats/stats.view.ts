import Chart from 'chart.js/auto';
import { el } from '../../core/dom';
import { loadStudentProgress } from '../../services/progress.service';
import type { Profile } from '../../types/database';

interface MetricsShape {
  totalSec?: number;
  daily?: Record<string, number>;
  questions?: { count?: number; impulsiveCount?: number; stuckCount?: number };
}

interface FailItem {
  q?: string;
  expected?: string;
  d?: string;
}

export function renderStatsView(profile: Profile): HTMLElement {
  const root = el(
    'div',
    { className: 'glass-card' },
    el('h2', {}, '📊 Mis Estadísticas y Progreso'),
    el('p', { className: 'muted' }, 'Cargando métricas...'),
  );

  void (async () => {
    try {
      const prog = await loadStudentProgress(profile.id);
      const metrics = (prog?.metrics ?? {}) as MetricsShape;
      const fails = (Array.isArray(prog?.fails) ? prog.fails : []) as FailItem[];
      const recs = Array.isArray(prog?.recommended_missions) ? prog.recommended_missions : [];
      const mins = Math.round((metrics.totalSec ?? 0) / 60);

      const cards = el(
        'div',
        { className: 'grid' },
        el('div', { className: 'card' }, el('h3', {}, '⏱️ Tiempo de estudio'), el('p', {}, `${mins} minutos`)),
        el('div', { className: 'card' }, el('h3', {}, '❓ Preguntas'), el('p', {}, `${metrics.questions?.count ?? 0} respondidas`)),
        el('div', { className: 'card' }, el('h3', {}, '🎯 Recomendadas'), el('p', {}, recs.length > 0 ? `Misiones: ${recs.join(', ')}` : 'Ninguna asignada')),
        el('div', { className: 'card' }, el('h3', {}, '📝 Repaso'), el('p', {}, `${fails.length} fallos registrados`)),
      );

      const canvas = document.createElement('canvas');
      canvas.height = 110;
      const chartBox = el('div', { className: 'card' }, el('h3', {}, '📅 Minutos de estudio (últimos 7 días)'), canvas);

      const daily = metrics.daily ?? {};
      const labels: string[] = [];
      const values: number[] = [];
      for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const key = d.toISOString().slice(0, 10);
        labels.push(key.slice(5));
        values.push(Math.round(((daily[key] ?? 0) / 60) * 10) / 10);
      }

      const failsList = el('div', { className: 'social-list' });
      fails.slice(-8).reverse().forEach((f) => {
        failsList.appendChild(
          el(
            'div',
            { className: 'social-user-row' },
            el('span', {}, f.q ?? 'Pregunta'),
            el('span', { className: 'pill' }, `Resp: ${f.expected ?? '-'}`),
          ),
        );
      });

      const failsBox = el(
        'div',
        { className: 'card' },
        el('h3', {}, '📝 Últimos fallos para repasar'),
        fails.length > 0 ? failsList : el('p', { className: 'muted' }, '¡Sin fallos recientes!'),
      );

      root.replaceChildren(
        el('h2', {}, '📊 Mis Estadísticas y Progreso'),
        cards,
        el('div', { style: 'height: 1rem;' } as never),
        chartBox,
        el('div', { style: 'height: 1rem;' } as never),
        failsBox,
      );

      new Chart(canvas, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'Minutos',
              data: values,
              backgroundColor: 'rgba(139, 92, 246, 0.7)',
              borderColor: '#a78bfa',
              borderWidth: 1,
              borderRadius: 8,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.06)' } },
            x: { ticks: { color: '#94a3b8' }, grid: { display: false } },
          },
        },
      });
    } catch (err) {
      root.replaceChildren(
        el('h2', {}, '📊 Mis Estadísticas y Progreso'),
        el('div', { className: 'alert alert-error' }, err instanceof Error ? err.message : 'Error cargando estadísticas'),
      );
    }
  })();

  return root;
}

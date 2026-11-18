import '../../../js/explora/extra_stories.js';
import '../../../js/explora/pack_01.js';
import '../../../js/explora/pack_02.js';
import '../../../js/explora/pack_03.js';
import '../../../js/explora/pack_04.js';
import '../../../js/explora/pack_05.js';
import '../../../js/explora/pack_06.js';
import '../../../js/explora/pack_07.js';
import '../../../js/explora/pack_08.js';
import '../../../js/explora/pack_09.js';
import '../../../js/explora/pack_10.js';
import { el } from '../../core/dom';
import { burstConfetti } from '../../core/particles';
import { sfx } from '../../core/sfx';
import { setState } from '../../core/state';
import { awardXpFromSession } from '../../services/progress.service';
import type { Profile } from '../../types/database';

interface ExploraQuestion {
  q: string;
  o: string[];
  a: string; // 'A' | 'B' | 'C' | 'D'
}

interface ExploraStory {
  id: string;
  interest: string;
  title: string;
  story: string;
  image?: string;
  questions: ExploraQuestion[];
}

declare global {
  interface Window {
    EXPLORA_EXTRA_STORIES?: { young?: ExploraStory[]; middle?: ExploraStory[] };
    EXPLORA_PACKS?: ExploraStory[];
  }
}

function getAllStories(): ExploraStory[] {
  const list: ExploraStory[] = [];
  if (window.EXPLORA_EXTRA_STORIES?.young) list.push(...window.EXPLORA_EXTRA_STORIES.young);
  if (window.EXPLORA_EXTRA_STORIES?.middle) list.push(...window.EXPLORA_EXTRA_STORIES.middle);
  if (Array.isArray(window.EXPLORA_PACKS)) list.push(...window.EXPLORA_PACKS);
  return list;
}

function personalize(text: string, name: string): string {
  return text.replace(/\{\{NAME\}\}/g, name);
}

export function renderExploraView(profile: Profile): HTMLElement {
  const stories = getAllStories();
  const studentName = profile.display_name || profile.username;
  const root = el('div', {});

  let selectedInterest = 'Todas';
  let searchTerm = '';
  let activeStory: ExploraStory | null = null;

  function renderCatalog(): void {
    const interests = ['Todas', ...Array.from(new Set(stories.map((s) => s.interest))).sort()];

    const searchInput = el('input', {
      type: 'text',
      className: 'input',
      placeholder: 'Buscar lectura por título...',
      value: searchTerm,
    });
    searchInput.addEventListener('input', () => {
      searchTerm = searchInput.value.trim().toLowerCase();
      renderList();
    });

    const filterGroup = el(
      'div',
      { className: 'segment-group' },
      ...interests.map((cat) =>
        el(
          'button',
          {
            type: 'button',
            className: `segment${selectedInterest === cat ? ' active' : ''}`,
            onClick: () => {
              selectedInterest = cat;
              renderCatalog();
            },
          },
          cat,
        ),
      ),
    );

    const grid = el('div', { className: 'grid' });

    function renderList(): void {
      const filtered = stories.filter((s) => {
        const matchCat = selectedInterest === 'Todas' || s.interest === selectedInterest;
        const title = personalize(s.title, studentName).toLowerCase();
        const matchText = !searchTerm || title.includes(searchTerm);
        return matchCat && matchText;
      });

      grid.replaceChildren(
        ...filtered.slice(0, 36).map((story) =>
          el(
            'div',
            {
              className: 'mission-card',
              onClick: () => {
                activeStory = story;
                renderReader(story);
              },
            },
            el('span', { className: 'pill' }, story.interest),
            el('h3', {}, personalize(story.title, studentName)),
            el('p', { className: 'muted' }, `${story.questions.length} preguntas de comprensión`),
          ),
        ),
      );
    }

    const header = el(
      'div',
      { className: 'glass-card' },
      el('h2', {}, '🔭 Explora y Comprensión Lectora'),
      el('p', { className: 'muted' }, `${stories.length} lecturas disponibles para ti, ${studentName}.`),
      el('div', { className: 'field' }, searchInput),
      filterGroup,
    );

    renderList();
    root.replaceChildren(header, grid);
  }

  function renderReader(story: ExploraStory): void {
    let qIdx = 0;
    let correctCount = 0;
    const sessionNonce = crypto.randomUUID();

    const backBtn = el(
      'button',
      {
        type: 'button',
        className: 'btn btn-secondary',
        onClick: () => {
          activeStory = null;
          renderCatalog();
        },
      },
      '← Volver a lecturas',
    );

    const quizArea = el('div', {});

    function renderQuestion(): void {
      const q = story.questions[qIdx];
      if (!q) {
        void finishQuiz();
        return;
      }

      const correctText = q.o[q.a.charCodeAt(0) - 65] ?? q.o[0];
      const shuffled = [...q.o].sort(() => Math.random() - 0.5);
      const feedback = el('p', { className: 'muted' }, '');

      const buttons = shuffled.map((optText) => {
        const btn = el(
          'button',
          {
            type: 'button',
            className: 'choice-btn',
            onClick: () => {
              buttons.forEach((b) => (b.disabled = true));
              const isOk = optText === correctText;
              if (isOk) {
                correctCount += 1;
                sfx.ok();
                btn.classList.add('correct');
                feedback.textContent = '✅ ¡Correcto!';
              } else {
                sfx.err();
                btn.classList.add('wrong');
                feedback.textContent = `❌ Era: ${correctText}`;
              }
              setTimeout(() => {
                qIdx += 1;
                renderQuestion();
              }, 900);
            },
          },
          optText,
        );
        return btn;
      });

      quizArea.replaceChildren(
        el('p', { className: 'muted' }, `Pregunta ${qIdx + 1} de ${story.questions.length}`),
        el('h3', {}, personalize(q.q, studentName)),
        el('div', { className: 'choice-grid' }, ...buttons),
        feedback,
      );
    }

    async function finishQuiz(): Promise<void> {
      const rawXp = correctCount * 20 + 10;
      quizArea.replaceChildren(el('p', { className: 'muted' }, 'Guardando tu recompensa en el servidor...'));
      try {
        const res = await awardXpFromSession({
          sourceType: 'explora',
          sourceRef: story.id,
          rawXp,
          sessionNonce,
        });
        setState({
          profile: {
            ...profile,
            xp: res.new_xp,
            level: res.new_level,
          },
        });
        sfx.lvl();
        burstConfetti();
        quizArea.replaceChildren(
          el('div', { className: 'alert alert-success' }, `🎉 Lectura completada: ${correctCount}/${story.questions.length} aciertos · +${res.granted_xp} XP`),
          el('button', { type: 'button', className: 'btn', onClick: () => renderCatalog() }, 'Elegir otra lectura'),
        );
      } catch (err) {
        quizArea.replaceChildren(
          el('div', { className: 'alert alert-error' }, err instanceof Error ? err.message : 'No se pudo guardar el XP'),
          el('button', { type: 'button', className: 'btn', onClick: () => renderCatalog() }, 'Volver'),
        );
      }
    }

    const coverImg = story.image
      ? (() => {
          const img = document.createElement('img');
          img.src = `/${story.image}`;
          img.alt = personalize(story.title, studentName);
          img.className = 'story-cover';
          return img;
        })()
      : null;

    const card = el(
      'div',
      { className: 'glass-card' },
      backBtn,
      coverImg,
      el('h2', {}, personalize(story.title, studentName)),
      el('p', { className: 'story-body' }, personalize(story.story, studentName)),
      quizArea,
    );

    renderQuestion();
    root.replaceChildren(card);
  }

  if (activeStory) {
    renderReader(activeStory);
  } else {
    renderCatalog();
  }
  return root;
}

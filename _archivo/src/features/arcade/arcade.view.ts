import problemasRaw from '../../../js/problemas_db.js?raw';
import { el } from '../../core/dom';
import { burstConfetti } from '../../core/particles';
import { sfx } from '../../core/sfx';
import { setState } from '../../core/state';
import { awardXpFromSession } from '../../services/progress.service';
import type { Profile } from '../../types/database';

interface ProblemaItem {
  id: string;
  level: number;
  text: string;
  answer: number;
  hint?: string;
}

type ArcadeMode = 'math' | 'problems' | 'flashcards' | 'memory';
type MathOp = '+' | '-' | '*' | '/' | 'mix';

function parseProblems(): ProblemaItem[] {
  const cleaned = problemasRaw
    .replace(/^[\s\S]*?const\s+PROBLEMAS_DB\s*=\s*/, '')
    .replace(/;\s*$/, '');
  return JSON.parse(cleaned) as ProblemaItem[];
}

const PROBLEMS_LIST = parseProblems();

const FLASHCARD_DECKS: Record<string, Array<[string, string]>> = {
  'Tablas de Multiplicar': [
    ['7 × 8', '56'],
    ['9 × 6', '54'],
    ['8 × 8', '64'],
    ['12 × 5', '60'],
    ['7 × 9', '63'],
    ['6 × 7', '42'],
  ],
  'Capitales de Europa': [
    ['España', 'Madrid'],
    ['Francia', 'París'],
    ['Italia', 'Roma'],
    ['Portugal', 'Lisboa'],
    ['Alemania', 'Berlín'],
    ['Grecia', 'Atenas'],
  ],
  'Inglés Básico': [
    ['Knowledge', 'Conocimiento'],
    ['Challenge', 'Reto / Desafío'],
    ['Lightning', 'Relámpago'],
    ['Adventure', 'Aventura'],
    ['Universe', 'Universo'],
  ],
};

function generateMathQuestion(op: MathOp, level: number): { label: string; answer: number } {
  const ops: Array<Exclude<MathOp, 'mix'>> = ['+', '-', '*', '/'];
  const picked = op === 'mix' ? ops[Math.floor(Math.random() * ops.length)]! : op;
  const maxN = level === 1 ? 12 : level === 2 ? 35 : 99;

  if (picked === '+') {
    const a = 1 + Math.floor(Math.random() * maxN);
    const b = 1 + Math.floor(Math.random() * maxN);
    return { label: `${a} + ${b}`, answer: a + b };
  }
  if (picked === '-') {
    const a = 2 + Math.floor(Math.random() * maxN);
    const b = 1 + Math.floor(Math.random() * a);
    return { label: `${a} - ${b}`, answer: a - b };
  }
  if (picked === '*') {
    const cap = level === 1 ? 10 : level === 2 ? 12 : 15;
    const a = 2 + Math.floor(Math.random() * cap);
    const b = 2 + Math.floor(Math.random() * cap);
    return { label: `${a} × ${b}`, answer: a * b };
  }
  const divisor = 2 + Math.floor(Math.random() * (level === 1 ? 9 : 12));
  const quotient = 2 + Math.floor(Math.random() * (level === 1 ? 10 : 15));
  return { label: `${divisor * quotient} ÷ ${divisor}`, answer: quotient };
}

export function renderArcadeView(profile: Profile): HTMLElement {
  const root = el('div', {});
  let mode: ArcadeMode = 'math';
  let timerId: number | null = null;

  function clearTimer(): void {
    if (timerId !== null) {
      window.clearInterval(timerId);
      timerId = null;
    }
  }

  function renderTabs(): HTMLElement {
    const tabs: Array<{ id: ArcadeMode; label: string }> = [
      { id: 'math', label: '⚡ Cálculo (60s)' },
      { id: 'problems', label: `🧩 Problemas (${PROBLEMS_LIST.length})` },
      { id: 'flashcards', label: '🃏 Flashcards' },
      { id: 'memory', label: '🧠 Memory' },
    ];

    return el(
      'div',
      { className: 'glass-card' },
      el('h2', {}, '🧮 Arcade de Cálculo, Lógica y Memoria'),
      el('p', { className: 'muted' }, 'Entrena tu velocidad mental, resuelve problemas o juega al Memory.'),
      el(
        'div',
        { className: 'segment-group' },
        ...tabs.map((t) =>
          el(
            'button',
            {
              type: 'button',
              className: `segment${mode === t.id ? ' active' : ''}`,
              onClick: () => {
                sfx.tap();
                clearTimer();
                mode = t.id;
                renderMain();
              },
            },
            t.label,
          ),
        ),
      ),
    );
  }

  function renderMathArena(body: HTMLElement): void {
    let op: MathOp = 'mix';
    let level = 1;
    let running = false;
    let timeLeft = 60;
    let score = 0;
    let streak = 0;
    let current = generateMathQuestion(op, level);

    const setupBox = el('div', { className: 'glass-card' });

    function drawSetup(): void {
      const ops: Array<{ id: MathOp; label: string }> = [
        { id: 'mix', label: '🎲 Mezcla' },
        { id: '+', label: '➕ Sumas' },
        { id: '-', label: '➖ Restas' },
        { id: '*', label: '✖️ Multiplicar' },
        { id: '/', label: '➗ Dividir' },
      ];

      setupBox.replaceChildren(
        el('h3', {}, 'Configura tu partida'),
        el(
          'div',
          { className: 'segment-group' },
          ...ops.map((o) =>
            el(
              'button',
              {
                type: 'button',
                className: `segment${op === o.id ? ' active' : ''}`,
                onClick: () => {
                  sfx.tap();
                  op = o.id;
                  drawSetup();
                },
              },
              o.label,
            ),
          ),
        ),
        el('div', { style: 'height: 0.75rem;' } as never),
        el(
          'div',
          { className: 'segment-group' },
          ...[1, 2, 3].map((lvl) =>
            el(
              'button',
              {
                type: 'button',
                className: `segment${level === lvl ? ' active' : ''}`,
                onClick: () => {
                  sfx.tap();
                  level = lvl;
                  drawSetup();
                },
              },
              `Nivel ${lvl}`,
            ),
          ),
        ),
        el('div', { style: 'height: 1rem;' } as never),
        el(
          'button',
          {
            type: 'button',
            className: 'btn',
            onClick: () => startGame(),
          },
          '🚀 ¡Empezar 60 segundos!',
        ),
      );
    }

    function startGame(): void {
      sfx.tap();
      running = true;
      timeLeft = 60;
      score = 0;
      streak = 0;
      current = generateMathQuestion(op, level);

      const statusEl = el('div', { className: 'topbar-stats' });
      const questionEl = el('div', { className: 'op-text' }, current.label);
      const feedbackEl = el('p', { className: 'muted', style: 'text-align:center;' } as never, '');
      const inputEl = el('input', {
        type: 'text',
        className: 'arcade-input',
        placeholder: '?',
      });
      inputEl.inputMode = 'numeric';

      function refreshStatus(): void {
        statusEl.replaceChildren(
          el('span', { className: 'pill' }, `⏱️ ${timeLeft}s`),
          el('span', { className: 'pill' }, `✅ Aciertos: ${score}`),
          el('span', { className: 'pill' }, `🔥 Racha: ${streak}`),
        );
      }

      function checkAnswer(): void {
        if (!running) return;
        const val = Number(inputEl.value.trim());
        if (!Number.isFinite(val) || inputEl.value.trim() === '') return;

        if (val === current.answer) {
          score += 1;
          streak += 1;
          sfx.ok();
          feedbackEl.textContent = '✅ ¡Bien!';
        } else {
          streak = 0;
          sfx.err();
          feedbackEl.textContent = `❌ Era ${current.answer}`;
        }
        inputEl.value = '';
        current = generateMathQuestion(op, level);
        questionEl.textContent = current.label;
        refreshStatus();
      }

      inputEl.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') checkAnswer();
      });

      const padKeys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '⌫', '0', 'OK'];
      const numpad = el(
        'div',
        { className: 'arcade-numpad-grid' },
        ...padKeys.map((k) =>
          el(
            'button',
            {
              type: 'button',
              className: 'numpad-btn',
              onClick: () => {
                if (k === '⌫') {
                  inputEl.value = inputEl.value.slice(0, -1);
                } else if (k === 'OK') {
                  checkAnswer();
                } else {
                  inputEl.value += k;
                }
              },
            },
            k,
          ),
        ),
      );

      refreshStatus();
      setupBox.replaceChildren(statusEl, questionEl, inputEl, feedbackEl, numpad);
      inputEl.focus();

      timerId = window.setInterval(() => {
        timeLeft -= 1;
        refreshStatus();
        if (timeLeft <= 0) {
          clearTimer();
          running = false;
          void finishMath();
        }
      }, 1000);
    }

    async function finishMath(): Promise<void> {
      const rawXp = score * 5;
      setupBox.replaceChildren(el('p', { className: 'muted' }, 'Guardando XP en servidor...'));
      try {
        const res = await awardXpFromSession({
          sourceType: 'arcade',
          sourceRef: `math_${op}_lvl${level}`,
          rawXp,
        });
        sfx.lvl();
        if (score > 0) burstConfetti();
        setState({
          profile: { ...profile, xp: res.new_xp, level: res.new_level },
        });
        setupBox.replaceChildren(
          el('div', { className: 'alert alert-success' }, `🏁 ¡Tiempo! ${score} aciertos · +${res.granted_xp} XP`),
          el('button', { type: 'button', className: 'btn', onClick: () => drawSetup() }, 'Jugar otra vez'),
        );
      } catch (err) {
        setupBox.replaceChildren(
          el('div', { className: 'alert alert-error' }, err instanceof Error ? err.message : 'Error guardando XP'),
          el('button', { type: 'button', className: 'btn', onClick: () => drawSetup() }, 'Volver'),
        );
      }
    }

    drawSetup();
    body.replaceChildren(setupBox);
  }

  function renderProblemsArena(body: HTMLElement): void {
    let level = 1;
    let solved = 0;

    function pickProblem(): ProblemaItem {
      const pool = PROBLEMS_LIST.filter((p) => p.level === level);
      const list = pool.length > 0 ? pool : PROBLEMS_LIST;
      return list[Math.floor(Math.random() * list.length)]!;
    }

    let current = pickProblem();
    const card = el('div', { className: 'glass-card' });

    function drawProblem(): void {
      const answerInput = el('input', {
        type: 'number',
        className: 'arcade-input',
        placeholder: 'Resultado',
      });
      const hintEl = el('p', { className: 'muted' }, '');
      const feedbackEl = el('div', { className: 'alert' });
      feedbackEl.style.display = 'none';

      const levelBtns = el(
        'div',
        { className: 'segment-group' },
        ...[1, 2, 3, 4].map((l) =>
          el(
            'button',
            {
              type: 'button',
              className: `segment${level === l ? ' active' : ''}`,
              onClick: () => {
                sfx.tap();
                level = l;
                current = pickProblem();
                drawProblem();
              },
            },
            `Nivel ${l}`,
          ),
        ),
      );

      const checkBtn = el(
        'button',
        {
          type: 'button',
          className: 'btn',
          onClick: async () => {
            const val = Number(answerInput.value.trim());
            if (!Number.isFinite(val) || answerInput.value.trim() === '') return;

            if (val === current.answer) {
              solved += 1;
              checkBtn.disabled = true;
              sfx.ok();
              try {
                const res = await awardXpFromSession({
                  sourceType: 'arcade',
                  sourceRef: current.id,
                  rawXp: 15 + level * 5,
                });
                setState({ profile: { ...profile, xp: res.new_xp, level: res.new_level } });
                burstConfetti(30);
                feedbackEl.className = 'alert alert-success';
                feedbackEl.textContent = `✅ ¡Correcto! +${res.granted_xp} XP (Resueltos hoy: ${solved})`;
              } catch (err) {
                feedbackEl.className = 'alert alert-error';
                feedbackEl.textContent = err instanceof Error ? err.message : 'Error guardando XP';
              }
              feedbackEl.style.display = 'block';
            } else {
              sfx.err();
              feedbackEl.className = 'alert alert-error';
              feedbackEl.textContent = '❌ No coincide, revisa los datos e inténtalo de nuevo.';
              feedbackEl.style.display = 'block';
            }
          },
        },
        'Comprobar',
      );

      const nextBtn = el(
        'button',
        {
          type: 'button',
          className: 'btn btn-secondary',
          onClick: () => {
            sfx.tap();
            current = pickProblem();
            drawProblem();
          },
        },
        'Siguiente problema →',
      );

      const hintBtn = current.hint
        ? el(
            'button',
            {
              type: 'button',
              className: 'btn btn-secondary',
              onClick: () => {
                sfx.tap();
                hintEl.textContent = `💡 Pista: ${current.hint}`;
              },
            },
            'Ver pista',
          )
        : null;

      card.replaceChildren(
        levelBtns,
        el('p', { className: 'story-body' }, current.text),
        hintEl,
        feedbackEl,
        answerInput,
        el('div', { style: 'height: 1rem;' } as never),
        el('div', { className: 'topbar-stats' }, checkBtn, hintBtn, nextBtn),
      );
    }

    drawProblem();
    body.replaceChildren(card);
  }

  function renderFlashcardsArena(body: HTMLElement): void {
    const deckNames = Object.keys(FLASHCARD_DECKS);
    let deckName = deckNames[0]!;
    let idx = 0;
    let flipped = false;

    const card = el('div', { className: 'glass-card' });

    function draw(): void {
      const deck = FLASHCARD_DECKS[deckName]!;
      const [front, back] = deck[idx]!;
      const flashEl = el(
        'div',
        {
          className: `flashcard${flipped ? ' flipped' : ''}`,
          onClick: () => {
            sfx.tap();
            flipped = !flipped;
            flashEl.classList.toggle('flipped', flipped);
          },
        },
        el('div', { className: 'card-face card-front' }, front),
        el('div', { className: 'card-face card-back' }, back),
      );

      card.replaceChildren(
        el(
          'div',
          { className: 'segment-group' },
          ...deckNames.map((name) =>
            el(
              'button',
              {
                type: 'button',
                className: `segment${deckName === name ? ' active' : ''}`,
                onClick: () => {
                  sfx.tap();
                  deckName = name;
                  idx = 0;
                  flipped = false;
                  draw();
                },
              },
              name,
            ),
          ),
        ),
        el('p', { className: 'muted' }, `Tarjeta ${idx + 1} de ${deck.length} (pulsa para girar)`),
        el('div', { className: 'flashcard-container' }, flashEl),
        el(
          'div',
          { className: 'topbar-stats' },
          el(
            'button',
            {
              type: 'button',
              className: 'btn btn-secondary',
              onClick: () => {
                sfx.tap();
                idx = (idx - 1 + deck.length) % deck.length;
                flipped = false;
                draw();
              },
            },
            '← Anterior',
          ),
          el(
            'button',
            {
              type: 'button',
              className: 'btn',
              onClick: () => {
                sfx.tap();
                idx = (idx + 1) % deck.length;
                flipped = false;
                draw();
              },
            },
            'Siguiente →',
          ),
        ),
      );
    }

    draw();
    body.replaceChildren(card);
  }

  function renderMemoryArena(body: HTMLElement): void {
    const pairs: Array<[string, string]> = [
      ['3 × 4', '12'],
      ['5 × 6', '30'],
      ['7 × 7', '49'],
      ['8 × 9', '72'],
      ['9 × 9', '81'],
      ['6 × 8', '48'],
    ];

    const tiles = pairs
      .flatMap(([q, a], pairId) => [
        { pairId, label: q },
        { pairId, label: a },
      ])
      .sort(() => Math.random() - 0.5);

    const card = el('div', { className: 'glass-card' });
    const grid = el('div', { className: 'memory-grid' });
    const status = el('p', { className: 'muted' }, 'Encuentra las 6 parejas operación ↔ resultado');

    let firstIdx: number | null = null;
    let locked = false;
    let matchedCount = 0;

    const tileEls = tiles.map((tile, i) => {
      const tileEl = el(
        'div',
        {
          className: 'memory-card',
          onClick: () => {
            if (locked || tileEl.classList.contains('flipped') || tileEl.classList.contains('matched')) return;
            sfx.tap();
            tileEl.classList.add('flipped');

            if (firstIdx === null) {
              firstIdx = i;
              return;
            }

            const prevIdx = firstIdx;
            firstIdx = null;
            const prevTile = tiles[prevIdx]!;
            const prevEl = tileEls[prevIdx]!;

            if (prevTile.pairId === tile.pairId) {
              prevEl.classList.add('matched');
              tileEl.classList.add('matched');
              matchedCount += 1;
              sfx.ok();

              if (matchedCount === pairs.length) {
                void (async () => {
                  try {
                    const res = await awardXpFromSession({
                      sourceType: 'arcade',
                      sourceRef: 'memory_math',
                      rawXp: 40,
                    });
                    sfx.lvl();
                    burstConfetti();
                    setState({ profile: { ...profile, xp: res.new_xp, level: res.new_level } });
                    status.textContent = `🎉 ¡Completado! +${res.granted_xp} XP`;
                  } catch {
                    status.textContent = '🎉 ¡Completado!';
                  }
                })();
              }
            } else {
              locked = true;
              sfx.err();
              window.setTimeout(() => {
                prevEl.classList.remove('flipped');
                tileEl.classList.remove('flipped');
                locked = false;
              }, 700);
            }
          },
        },
        el('div', { className: 'card-face card-front' }, '⚡'),
        el('div', { className: 'card-face card-back' }, tile.label),
      );
      return tileEl;
    });

    grid.replaceChildren(...tileEls);
    card.replaceChildren(el('h3', {}, '🧠 Memory Matemático'), status, grid);
    body.replaceChildren(card);
  }

  function renderMain(): void {
    const body = el('div', {});
    root.replaceChildren(renderTabs(), body);
    if (mode === 'math') renderMathArena(body);
    else if (mode === 'problems') renderProblemsArena(body);
    else if (mode === 'flashcards') renderFlashcardsArena(body);
    else renderMemoryArena(body);
  }

  renderMain();
  return root;
}

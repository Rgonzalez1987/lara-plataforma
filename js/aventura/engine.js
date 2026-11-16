/* =========================================================
   LARA · MOTOR DE AVENTURA Y BIBLIOTECA (EDICIÓN VIVA)
   - Sintetizador polifónico cálido tipo Marimba/Kalimba (estilo Duolingo)
   - Mascota animada SVG ("Lumi") con reacciones en vivo y bocadillo
   - Animaciones con físicas elásticas (spring), partículas, +XP flotante y estrellas secuenciales
   ========================================================= */
(function () {
'use strict';
const A = window.Adv = window.Adv || {};
A.meta = A.meta || [];
A.content = A.content || {};

A.SUBJECTS = [
  { key: 'Lengua Castellana y Literatura', short: 'Lengua',    icon: '📖', color: '#ec4899' },
  { key: 'Matemáticas',                    short: 'Mates',     icon: '📐', color: '#8b5cf6' },
  { key: 'Ciencias de la Naturaleza',      short: 'Naturales', icon: '🌿', color: '#10b981' },
  { key: 'Ciencias Sociales',              short: 'Sociales',  icon: '🌍', color: '#f59e0b' }
];
A.NODE_ICONS = ['📘', '🧩', '🎯'];

/* ---------- utilidades ---------- */
A.rnd = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
A.pick = arr => arr[Math.floor(Math.random() * arr.length)];
A.shuffle = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
A.gcd = (a, b) => b ? A.gcd(b, a % b) : Math.abs(a);
A.lcm = (a, b) => Math.abs(a * b) / A.gcd(a, b);
A.frac = (n, d) => `<span class="adv-frac"><span>${n}</span><span>${d}</span></span>`;
A.fmt = n => String(Math.round(n * 1e6) / 1e6).replace('.', ',');
A.register = (id, data) => { A.content[id] = data; };
A.getMeta = id => A.meta.find(m => m.id === id);
A.missionsOf = key => A.meta.filter(m => m.subject === key);
A.subjectOf = key => A.SUBJECTS.find(s => s.key === key);
A.stripHtml = h => String(h).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

/* ---------- progreso ---------- */
A.st = function () {
  const c = window.app && window.app.curr;
  if (!c) return {};
  if (!c.adv) c.adv = {};
  return c.adv;
};
A.ms = function (id) {
  const s = A.st();
  if (!s[id]) s[id] = { s: [0, 0, 0], b: 0, stars: [0, 0, 0, 0] };
  return s[id];
};
A.nodeDone = (id, k) => { const m = A.ms(id); return k < 3 ? !!m.s[k] : !!m.b; };
A.missionDone = id => [0, 1, 2, 3].every(k => A.nodeDone(id, k));
A.missionProgress = id => [0, 1, 2, 3].filter(k => A.nodeDone(id, k)).length;
A.unlocked = function (id, k) {
  if (k > 0) return A.nodeDone(id, k - 1);
  const m = A.getMeta(id), list = A.missionsOf(m.subject), mi = list.findIndex(x => x.id === id);
  if (mi === 0) return true;
  return A.missionDone(list[mi - 1].id);
};
A.hasContent = id => !!(A.content[id] && A.content[id].stations && A.content[id].stations.length === 3);
A.saveProgress = function () {
  if (!window.app) return;
  window.app.save();
  try {
    const u = window.app.cloudUser;
    if (u && 'progress' in u && typeof sb !== 'undefined' && sb) {
      u.progress = window.app.curr.adv;
      sb.from('profiles').update({ progress: window.app.curr.adv }).eq('id', u.id).then(() => {});
    }
  } catch (e) {}
};
A.mergeProgress = function (local, cloud) {
  const out = JSON.parse(JSON.stringify(local || {}));
  Object.keys(cloud || {}).forEach(id => {
    const c = cloud[id], l = out[id] || { s: [0, 0, 0], b: 0, stars: [0, 0, 0, 0] };
    for (let k = 0; k < 3; k++) { l.s[k] = (l.s[k] || (c.s && c.s[k])) ? 1 : 0; }
    l.b = (l.b || c.b) ? 1 : 0;
    for (let k = 0; k < 4; k++) l.stars[k] = Math.max(l.stars[k] || 0, (c.stars && c.stars[k]) || 0);
    out[id] = l;
  });
  return out;
};
A.xpSplit = function (id) {
  const xp = A.getMeta(id).xp, st = Math.round(xp * 0.2);
  return [st, st, st, xp - 3 * st];
};

/* =========================================================
   MOTOR DE AUDIO CÁLIDO (MARIMBA / KALIMBA / CAMPANA SUAVE)
   ========================================================= */
let actx = null, masterBus = null;
function getAudio() {
  try {
    if (!actx) {
      actx = window.audio || new (window.AudioContext || window.webkitAudioContext)();
      window.audio = actx;
      const filter = actx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 3600;
      filter.Q.value = 0.7;

      const comp = actx.createDynamicsCompressor();
      comp.threshold.value = -14;
      comp.ratio.value = 4;

      // Eco suave para dar calidez de sala
      const delay = actx.createDelay();
      delay.delayTime.value = 0.11;
      const fb = actx.createGain();
      fb.gain.value = 0.18;
      const wet = actx.createGain();
      wet.gain.value = 0.2;

      filter.connect(comp);
      filter.connect(delay);
      delay.connect(fb);
      fb.connect(delay);
      delay.connect(wet);
      wet.connect(comp);
      comp.connect(actx.destination);
      masterBus = filter;
    }
    if (actx.state === 'suspended') actx.resume();
    return actx;
  } catch (e) { return null; }
}

// Toca una nota cálida tipo marimba/kalimba con armónicos suaves
function playNote(freq, dur, when, vol, brightness) {
  const ctx = getAudio();
  if (!ctx || !masterBus) return;
  const t0 = ctx.currentTime + (when || 0);
  const v = vol || 0.22;

  // Oscilador fundamental (cuerpo cálido)
  const o1 = ctx.createOscillator();
  const g1 = ctx.createGain();
  o1.type = 'sine';
  o1.frequency.setValueAtTime(freq, t0);
  g1.gain.setValueAtTime(0.0001, t0);
  g1.gain.linearRampToValueAtTime(v, t0 + 0.008);
  g1.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o1.connect(g1); g1.connect(masterBus);
  o1.start(t0); o1.stop(t0 + dur + 0.02);

  // Segundo oscilador (octava superior suave tipo campana/kalimba)
  const o2 = ctx.createOscillator();
  const g2 = ctx.createGain();
  o2.type = 'triangle';
  o2.frequency.setValueAtTime(freq * (brightness || 2), t0);
  g2.gain.setValueAtTime(0.0001, t0);
  g2.gain.linearRampToValueAtTime(v * 0.28, t0 + 0.005);
  g2.gain.exponentialRampToValueAtTime(0.0001, t0 + dur * 0.55);
  o2.connect(g2); g2.connect(masterBus);
  o2.start(t0); o2.stop(t0 + dur * 0.6 + 0.02);

  // Pequeño golpe de maza de madera al inicio (transitorio percusivo)
  const o3 = ctx.createOscillator();
  const g3 = ctx.createGain();
  o3.type = 'sine';
  o3.frequency.setValueAtTime(freq * 3.2, t0);
  o3.frequency.exponentialRampToValueAtTime(freq, t0 + 0.028);
  g3.gain.setValueAtTime(0.0001, t0);
  g3.gain.linearRampToValueAtTime(v * 0.35, t0 + 0.003);
  g3.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.032);
  o3.connect(g3); g3.connect(masterBus);
  o3.start(t0); o3.stop(t0 + 0.04);
}

A.sfx = {
  // Burbuja / toque de ficha táctil suave
  tap() {
    const ctx = getAudio(); if (!ctx || !masterBus) return;
    const t0 = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(310, t0);
    o.frequency.exponentialRampToValueAtTime(620, t0 + 0.045);
    g.gain.setValueAtTime(0.001, t0);
    g.gain.linearRampToValueAtTime(0.16, t0 + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.055);
    o.connect(g); g.connect(masterBus);
    o.start(t0); o.stop(t0 + 0.06);
  },
  // Transición suave al cambiar de tarjeta
  slide() {
    playNote(523.25, 0.12, 0, 0.08, 1.5);
  },
  // Acierto estilo Duolingo (sube de tono con la racha de combos!)
  ok(combo) {
    const shift = Math.pow(2, Math.min((combo || 1) - 1, 6) / 12);
    playNote(587.33 * shift, 0.22, 0,     0.22, 2);   // Re5
    playNote(880.00 * shift, 0.42, 0.085, 0.26, 2);   // La5
    if ((combo || 0) >= 3) {
      playNote(1174.66 * shift, 0.45, 0.16, 0.20, 2); // Re6 brillante en racha
    }
  },
  // Error empático y grave (madera suave, cero estridencia)
  err() {
    const ctx = getAudio(); if (!ctx || !masterBus) return;
    playNote(311.13, 0.22, 0,    0.18, 1); // Mib4
    playNote(233.08, 0.36, 0.11, 0.20, 1); // Sib3
  },
  // Estrella individual al caer en la pantalla final
  star(idx) {
    const notes = [659.25, 783.99, 1046.50]; // Mi5, Sol5, Do6
    playNote(notes[idx % 3], 0.38, 0, 0.25, 2);
  },
  // Fanfarria triunfal polifónica al terminar la lección
  done() {
    const mel = [
      [523.25, 0.18, 0.00], // Do5
      [659.25, 0.18, 0.10], // Mi5
      [783.99, 0.18, 0.20], // Sol5
      [1046.5, 0.55, 0.30], // Do6
      [783.99, 0.18, 0.30], // Sol5 (acorde)
      [659.25, 0.45, 0.30]  // Mi5 (acorde)
    ];
    mel.forEach(([f, d, w]) => playNote(f, d, w, 0.20, 2));
  }
};

// Mejoramos también los sonidos globales de toda la plataforma para que ningún juego suene frío
window.sfx = {
  ok: () => A.sfx.ok(1),
  err: () => A.sfx.err(),
  lvl: () => A.sfx.done()
};

A.speak = function (html) {
  try {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(A.stripHtml(html));
    u.lang = 'es-ES'; u.rate = 0.96; u.pitch = 1.05;
    window.speechSynthesis.speak(u);
  } catch (e) {}
};

// Explosión de confeti rica y partículas flotantes
A.confetti = function () {
  try {
    if (typeof expl === 'function') {
      const w = window.innerWidth, h = window.innerHeight;
      const cols = ['#fbbf24', '#ec4899', '#10b981', '#38bdf8', '#a78bfa'];
      [0.18, 0.38, 0.62, 0.82].forEach((p, i) => {
        setTimeout(() => expl(w * p, h * 0.28, cols[i % cols.length]), i * 140);
      });
    }
  } catch (e) {}
};
A.burstAt = function (elem, xpText) {
  try {
    if (!elem) return;
    const r = elem.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    if (typeof expl === 'function') expl(cx, cy, '#34d399');
    if (xpText) {
      const fl = document.createElement('div');
      fl.className = 'adv-float-xp';
      fl.textContent = xpText;
      fl.style.left = cx + 'px';
      fl.style.top = cy + 'px';
      document.body.appendChild(fl);
      setTimeout(() => fl.remove(), 1100);
    }
  } catch (e) {}
};
A.toast = (t, m) => { if (window.app) window.app.notify(t, m); };

/* =========================================================
   MASCOTA ANIMADA "LUMI" (SVG EXPRESIVO ESTILO DUOLINGO)
   ========================================================= */
function lumiSvg(mood) {
  // mood: 'idle' | 'happy' | 'sad' | 'fire'
  const isHappy = mood === 'happy' || mood === 'fire';
  const isSad = mood === 'sad';
  const isFire = mood === 'fire';
  const bodyCol = isFire ? '#f59e0b' : (isSad ? '#6366f1' : '#8b5cf6');
  const bellyCol = isFire ? '#fef3c7' : '#ede9fe';
  return `
  <svg class="adv-lumi-svg mood-${mood || 'idle'}" viewBox="0 0 120 120" width="74" height="74" aria-hidden="true">
    <defs>
      <radialGradient id="lumiGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${bodyCol}" stop-opacity="0.45"/>
        <stop offset="100%" stop-color="${bodyCol}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="60" cy="64" r="54" fill="url(#lumiGlow)"/>
    ${isFire ? `<path class="lumi-flame" d="M60 6 C72 22, 88 26, 82 44 C78 54, 42 54, 38 44 C32 26, 48 22, 60 6 Z" fill="#fbbf24" opacity="0.85"/>` : ''}
    <!-- Sombra suelo -->
    <ellipse cx="60" cy="108" rx="28" ry="6" fill="rgba(0,0,0,0.35)"/>
    <!-- Cuerpo principal -->
    <g class="lumi-body">
      <!-- Orejitas / penachos -->
      <path d="M32 34 L22 18 L44 28 Z" fill="${bodyCol}"/>
      <path d="M88 34 L98 18 L76 28 Z" fill="${bodyCol}"/>
      <!-- Cuerpo redondeado -->
      <rect x="24" y="24" width="72" height="74" rx="34" fill="${bodyCol}"/>
      <!-- Barriguita -->
      <ellipse cx="60" cy="72" rx="23" ry="20" fill="${bellyCol}"/>
      <path d="M50 66 Q60 72 70 66" stroke="${bodyCol}" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.45"/>
      <path d="M53 75 Q60 80 67 75" stroke="${bodyCol}" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.45"/>
      <!-- Alas -->
      <path class="lumi-wing-l" d="M24 52 C12 56, 12 78, 26 82 Z" fill="#6d28d9"/>
      <path class="lumi-wing-r" d="M96 52 C108 56, 108 78, 94 82 Z" fill="#6d28d9"/>
      <!-- Ojos grandes expresivos -->
      <circle cx="44" cy="48" r="13" fill="#ffffff"/>
      <circle cx="76" cy="48" r="13" fill="#ffffff"/>
      ${isHappy ? `
        <path d="M36 49 Q44 39 52 49" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M68 49 Q76 39 84 49" stroke="#1e1b4b" stroke-width="4" fill="none" stroke-linecap="round"/>
      ` : isSad ? `
        <circle cx="44" cy="50" r="6.5" fill="#1e1b4b"/>
        <circle cx="76" cy="50" r="6.5" fill="#1e1b4b"/>
        <circle cx="42" cy="48" r="2.2" fill="#ffffff"/>
        <circle cx="74" cy="48" r="2.2" fill="#ffffff"/>
        <path d="M33 36 L52 41" stroke="#1e1b4b" stroke-width="3" stroke-linecap="round"/>
        <path d="M87 36 L68 41" stroke="#1e1b4b" stroke-width="3" stroke-linecap="round"/>
      ` : `
        <g class="lumi-pupils">
          <circle cx="45" cy="48" r="6.8" fill="#1e1b4b"/>
          <circle cx="75" cy="48" r="6.8" fill="#1e1b4b"/>
          <circle cx="42.5" cy="45.5" r="2.5" fill="#ffffff"/>
          <circle cx="72.5" cy="45.5" r="2.5" fill="#ffffff"/>
        </g>
      `}
      <!-- Coloretes -->
      <ellipse cx="31" cy="58" rx="5.5" ry="3" fill="#f472b6" opacity="${isHappy ? 0.85 : 0.45}"/>
      <ellipse cx="89" cy="58" rx="5.5" ry="3" fill="#f472b6" opacity="${isHappy ? 0.85 : 0.45}"/>
      <!-- Piquito -->
      <polygon points="55,53 65,53 60,61" fill="#fbbf24"/>
      <!-- Patitas -->
      <ellipse cx="47" cy="99" rx="7" ry="4" fill="#fbbf24"/>
      <ellipse cx="73" cy="99" rx="7" ry="4" fill="#fbbf24"/>
    </g>
    ${isHappy ? `
      <text x="14" y="26" font-size="16" class="lumi-star">✨</text>
      <text x="94" y="24" font-size="15" class="lumi-star">⭐</text>
    ` : ''}
  </svg>`;
}

/* ---------- CSS ---------- */
function ensureCss() {
  if (document.getElementById('adv-css')) return;
  const s = document.createElement('style'); s.id = 'adv-css';
  s.textContent = `
.adv-frac{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.1;margin:0 .15em;font-weight:800}
.adv-frac>span:first-child{border-bottom:2px solid currentColor;padding:0 .25em .08em}
.adv-frac>span:last-child{padding:.08em .25em 0}
.adv-tabs{display:flex;gap:.6rem;overflow-x:auto;padding:.2rem .1rem .6rem;position:sticky;top:0;z-index:5}
.adv-tab{flex:1;min-width:110px;background:var(--glass);border:2px solid var(--glass-border);border-bottom-width:5px;border-radius:18px;padding:.7rem .6rem;text-align:center;cursor:pointer;font-weight:700;transition:transform .18s cubic-bezier(.34,1.56,.64,1),background .2s,border-color .2s;color:#fff}
.adv-tab:hover{transform:translateY(-2px)}
.adv-tab:active{transform:translateY(2px)}
.adv-tab small{display:block;font-weight:600;opacity:.6;font-size:.7rem;margin-top:2px}
.adv-tab.on{border-color:var(--c);background:color-mix(in srgb,var(--c) 24%,transparent);box-shadow:0 8px 24px color-mix(in srgb,var(--c) 32%,transparent);transform:translateY(-2px)}
.adv-path{display:flex;flex-direction:column;align-items:center;gap:0;padding:.5rem 0 4rem}
.adv-banner{width:100%;max-width:640px;border-radius:24px;padding:1.1rem 1.3rem;margin:1.6rem 0 1rem;background:linear-gradient(135deg,color-mix(in srgb,var(--c) 85%,#000),color-mix(in srgb,var(--c) 55%,#000));box-shadow:0 8px 0 color-mix(in srgb,var(--c) 40%,#000);position:relative;transition:transform .2s}
.adv-banner.lock{filter:grayscale(.85) brightness(.7)}
.adv-banner h3{font-size:1.25rem;font-weight:800;margin:.1rem 0}
.adv-banner .k{font-size:.72rem;font-weight:800;letter-spacing:.08em;opacity:.85}
.adv-banner p{font-size:.82rem;opacity:.92;line-height:1.45;margin-top:.3rem}
.adv-banner .row{display:flex;align-items:center;gap:.6rem;flex-wrap:wrap;margin-top:.7rem}
.adv-chip{background:rgba(0,0,0,.28);border-radius:999px;padding:.25rem .7rem;font-size:.75rem;font-weight:800}
.adv-jump{background:rgba(255,255,255,.2);border:2px solid rgba(255,255,255,.5);border-bottom-width:4px;color:#fff;border-radius:999px;padding:.38rem .95rem;font-weight:800;font-size:.78rem;cursor:pointer;transition:transform .15s}
.adv-jump:hover{transform:scale(1.04);background:rgba(255,255,255,.28)}
.adv-jump:active{transform:scale(.95)}
.adv-nodewrap{display:flex;flex-direction:column;align-items:center;margin:.55rem 0;position:relative}
.adv-node{width:80px;height:80px;border-radius:50%;border:none;font-size:2rem;cursor:pointer;color:#fff;background:var(--c);box-shadow:0 8px 0 color-mix(in srgb,var(--c) 50%,#000),inset 0 4px 8px rgba(255,255,255,.3);transition:transform .15s cubic-bezier(.34,1.56,.64,1),box-shadow .15s;display:flex;align-items:center;justify-content:center;position:relative}
.adv-node:hover:not(.lock){transform:translateY(-3px) scale(1.05)}
.adv-node:active:not(.lock){transform:translateY(5px);box-shadow:0 3px 0 color-mix(in srgb,var(--c) 50%,#000)}
.adv-node.done{background:linear-gradient(145deg,#fbbf24,#d97706);box-shadow:0 8px 0 #92400e,inset 0 4px 8px rgba(255,255,255,.45)}
.adv-node.lock{background:#475569;box-shadow:0 8px 0 #2b3544;cursor:not-allowed;opacity:.85}
.adv-node.cur{animation:advPulse 1.6s infinite}
.adv-node.boss{width:94px;height:94px;font-size:2.4rem}
@keyframes advPulse{0%,100%{box-shadow:0 8px 0 color-mix(in srgb,var(--c) 50%,#000),0 0 0 0 color-mix(in srgb,var(--c) 70%,transparent)}50%{box-shadow:0 8px 0 color-mix(in srgb,var(--c) 50%,#000),0 0 0 18px transparent}}
.adv-start{position:absolute;top:-32px;background:#fff;color:#111;font-weight:900;font-size:.72rem;padding:.24rem .68rem;border-radius:12px;animation:advBob 1.1s ease-in-out infinite;white-space:nowrap;box-shadow:0 4px 12px rgba(0,0,0,.35)}
.adv-start::after{content:'';position:absolute;bottom:-5px;left:50%;transform:translateX(-50%);border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #fff}
@keyframes advBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
.adv-lbl{font-size:.74rem;font-weight:700;opacity:.8;margin-top:.55rem;max-width:155px;text-align:center}
.adv-stars{font-size:.85rem;letter-spacing:2px;margin-top:.25rem}

/* Overlay de lección */
.adv-ov{position:fixed;inset:0;z-index:900;background:radial-gradient(circle at 50% 0,#1e1b4b 0,#070b14 72%);display:none;flex-direction:column}
.adv-top{display:flex;align-items:center;gap:1rem;padding:calc(.9rem + env(safe-area-inset-top)) 1.2rem .6rem;max-width:760px;width:100%;margin:0 auto}
.adv-x{background:rgba(255,255,255,.06);border:none;color:#94a3b8;font-size:1.3rem;cursor:pointer;width:40px;height:40px;border-radius:12px;transition:.15s}
.adv-x:hover{background:rgba(255,255,255,.14);color:#fff;transform:scale(1.06)}
.adv-bar{flex:1;height:18px;background:rgba(255,255,255,.1);border-radius:99px;overflow:hidden;position:relative;padding:3px}
.adv-bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--c,#8b5cf6),color-mix(in srgb,var(--c,#8b5cf6) 75%,#fff));border-radius:99px;transition:width .55s cubic-bezier(.34,1.56,.64,1);position:relative;box-shadow:0 0 16px color-mix(in srgb,var(--c,#8b5cf6) 65%,transparent)}
.adv-bar i::after{content:'';position:absolute;top:2px;left:8px;right:8px;height:4px;background:rgba(255,255,255,.38);border-radius:99px}
.adv-bar.fire i{background:linear-gradient(90deg,#f59e0b,#ef4444,#fbbf24);box-shadow:0 0 20px rgba(251,191,36,.7)}
.adv-combo{font-weight:900;color:#fbbf24;min-width:68px;text-align:right;font-size:1rem;transition:transform .25s cubic-bezier(.34,1.56,.64,1)}
.adv-combo.pop{animation:advComboPop .45s cubic-bezier(.34,1.56,.64,1)}
@keyframes advComboPop{0%{transform:scale(.6)}50%{transform:scale(1.35)}100%{transform:scale(1)}}

/* Mascota Lumi y su bocadillo */
.adv-mascot-row{display:flex;align-items:center;gap:.9rem;margin-bottom:1rem;animation:advSlideIn .38s cubic-bezier(.22,1,.36,1)}
.adv-speech{background:rgba(255,255,255,.07);border:2px solid rgba(255,255,255,.16);border-radius:20px;padding:.75rem 1.05rem;position:relative;font-size:.92rem;font-weight:700;color:#e2e8f0;line-height:1.4;box-shadow:0 8px 20px rgba(0,0,0,.25)}
.adv-speech::before{content:'';position:absolute;left:-9px;top:50%;transform:translateY(-50%);border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:9px solid rgba(255,255,255,.16)}
.adv-lumi-svg .lumi-body{animation:lumiFloat 2.4s ease-in-out infinite;transform-origin:60px 64px}
.adv-lumi-svg.mood-happy .lumi-body,.adv-lumi-svg.mood-fire .lumi-body{animation:lumiJump .55s cubic-bezier(.34,1.56,.64,1) 2}
.adv-lumi-svg.mood-sad .lumi-body{animation:lumiTilt .5s ease}
.adv-lumi-svg .lumi-pupils{animation:lumiBlink 4.2s infinite;transform-origin:60px 48px}
.adv-lumi-svg .lumi-wing-l{animation:lumiWingL 1.8s ease-in-out infinite;transform-origin:26px 60px}
.adv-lumi-svg .lumi-wing-r{animation:lumiWingR 1.8s ease-in-out infinite;transform-origin:94px 60px}
@keyframes lumiFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
@keyframes lumiJump{0%,100%{transform:translateY(0) scale(1)}45%{transform:translateY(-14px) scale(1.07,.95)}}
@keyframes lumiTilt{0%{transform:rotate(0)}35%{transform:rotate(-8deg)}75%{transform:rotate(6deg)}100%{transform:rotate(0)}}
@keyframes lumiBlink{0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(.08)}}
@keyframes lumiWingL{0%,100%{transform:rotate(0)}50%{transform:rotate(10deg)}}
@keyframes lumiWingR{0%,100%{transform:rotate(0)}50%{transform:rotate(-10deg)}}

/* Escenario de ejercicio con entrada elástica */
.adv-body{flex:1;overflow-y:auto;padding:.8rem 1.2rem 1.2rem;max-width:760px;width:100%;margin:0 auto;-webkit-overflow-scrolling:touch}
.adv-stage-enter{animation:advStageIn .36s cubic-bezier(.22,1,.36,1)}
@keyframes advStageIn{from{opacity:0;transform:translateX(28px) scale(.98)}to{opacity:1;transform:translateX(0) scale(1)}}
@keyframes advSlideIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
.adv-tag{display:inline-block;font-size:.72rem;font-weight:800;padding:.24rem .75rem;border-radius:99px;background:rgba(251,191,36,.16);color:#fbbf24;border:1px solid rgba(251,191,36,.35);margin-bottom:.7rem}
.adv-q{font-size:clamp(1.22rem,3.5vw,1.62rem);font-weight:800;line-height:1.48;margin-bottom:1.15rem}
.adv-opts{display:flex;flex-direction:column;gap:.75rem}
.adv-opt{background:var(--glass);border:2px solid var(--glass-border);border-bottom-width:5px;border-radius:18px;padding:1rem 1.15rem;font-size:clamp(1.04rem,2.9vw,1.22rem);font-weight:700;color:#fff;text-align:left;cursor:pointer;min-height:58px;transition:transform .15s cubic-bezier(.34,1.56,.64,1),background .15s,border-color .15s,box-shadow .15s;width:100%;animation:advOptIn .35s cubic-bezier(.34,1.56,.64,1) backwards}
.adv-opt:nth-child(1){animation-delay:.03s}.adv-opt:nth-child(2){animation-delay:.08s}.adv-opt:nth-child(3){animation-delay:.13s}.adv-opt:nth-child(4){animation-delay:.18s}
@keyframes advOptIn{from{opacity:0;transform:translateY(14px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
.adv-opt:hover:not(.done){transform:translateY(-2px);border-color:rgba(255,255,255,.32);background:var(--glass-strong)}
.adv-opt:active:not(.done){transform:translateY(3px);border-bottom-width:2px}
.adv-opt.sel{border-color:#38bdf8;background:rgba(56,189,248,.18);box-shadow:0 0 20px rgba(56,189,248,.25);transform:scale(1.015)}
.adv-opt.good{border-color:var(--success);background:rgba(16,185,129,.25);box-shadow:0 0 24px rgba(16,185,129,.35);animation:advPopGood .42s cubic-bezier(.34,1.56,.64,1)}
.adv-opt.bad{border-color:var(--error);background:rgba(239,68,68,.24);animation:advShake .42s ease}
.adv-opt.done{opacity:.52;pointer-events:none}
.adv-opt.good.done{opacity:1}
@keyframes advPopGood{0%{transform:scale(.95)}50%{transform:scale(1.04)}100%{transform:scale(1)}}
@keyframes advShake{0%,100%{transform:translateX(0)}20%{transform:translateX(-9px)}40%{transform:translateX(9px)}60%{transform:translateX(-6px)}80%{transform:translateX(6px)}}

.adv-grid2{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}
.adv-num{font-size:2.4rem;font-weight:800;text-align:center;background:rgba(255,255,255,.05);border:2px solid var(--glass-border);border-radius:20px;padding:.75rem;min-height:80px;margin-bottom:.9rem;letter-spacing:2px;transition:border-color .2s,transform .15s}
.adv-pad{display:grid;grid-template-columns:repeat(3,1fr);gap:.55rem;max-width:380px;margin:0 auto}
.adv-pad button{background:var(--glass-strong);border:2px solid var(--glass-border);border-bottom-width:5px;border-radius:16px;font-size:1.55rem;font-weight:800;color:#fff;padding:.75rem 0;cursor:pointer;transition:transform .1s,background .15s}
.adv-pad button:hover{background:rgba(255,255,255,.14)}
.adv-pad button:active{transform:translateY(3px);border-bottom-width:2px;background:var(--c,#8b5cf6)}
.adv-line{min-height:64px;border-bottom:3px dashed rgba(255,255,255,.25);display:flex;flex-wrap:wrap;gap:.5rem;padding:.4rem 0 .7rem;margin-bottom:1.1rem}
.adv-chipbtn{background:var(--glass-strong);border:2px solid var(--glass-border);border-bottom-width:5px;border-radius:14px;padding:.6rem .95rem;font-size:1.08rem;font-weight:700;color:#fff;cursor:pointer;transition:transform .15s cubic-bezier(.34,1.56,.64,1),background .15s,border-color .15s}
.adv-chipbtn:hover{transform:translateY(-2px)}
.adv-chipbtn:active{transform:translateY(2px)}
.adv-chipbtn.sel{border-color:#38bdf8;background:rgba(56,189,248,.22);transform:scale(1.05)}
.adv-chipbtn.used{opacity:.22;pointer-events:none;transform:scale(.92)}
.adv-chipbtn.good{border-color:var(--success);background:rgba(16,185,129,.26);animation:advPopGood .38s cubic-bezier(.34,1.56,.64,1)}
.adv-chipbtn.bad{border-color:var(--error);background:rgba(239,68,68,.26);animation:advShake .4s ease}
.adv-pool{display:flex;flex-wrap:wrap;gap:.55rem;justify-content:center}
.adv-cols{display:grid;grid-template-columns:1fr 1fr;gap:.9rem}
.adv-col{display:flex;flex-direction:column;gap:.6rem}
.adv-cat{background:rgba(255,255,255,.04);border:2px dashed rgba(255,255,255,.28);border-radius:18px;padding:.75rem;min-height:110px;cursor:pointer;transition:border-color .2s,background .2s}
.adv-cat:hover{border-color:#38bdf8;background:rgba(56,189,248,.06)}
.adv-cat h4{font-size:.95rem;margin-bottom:.5rem;text-align:center;color:#fbbf24}
.adv-cat .in{display:flex;flex-wrap:wrap;gap:.4rem;justify-content:center}
.adv-text{font-size:clamp(1.15rem,3.2vw,1.45rem);line-height:2.4}
.adv-w{display:inline-block;padding:.05rem .45rem;margin:0 .1rem;border-radius:10px;border:2px solid transparent;cursor:pointer;transition:transform .12s,background .15s}
.adv-w:hover{background:rgba(255,255,255,.08);transform:translateY(-2px)}
.adv-w.sel{border-color:#38bdf8;background:rgba(56,189,248,.24);transform:scale(1.06)}
.adv-w.good{border-color:var(--success);background:rgba(16,185,129,.28);animation:advPopGood .38s}
.adv-w.bad{border-color:var(--error);background:rgba(239,68,68,.28);animation:advShake .4s}

/* Cajón inferior de feedback con rebote elástico */
.adv-foot{border-top:2px solid rgba(255,255,255,.08);padding:1rem 1.2rem calc(1rem + env(safe-area-inset-bottom));transition:background .25s,border-color .25s}
.adv-foot .in{max-width:760px;margin:0 auto}
.adv-foot.ok{background:linear-gradient(180deg,#064e3b,#042f2e);border-color:#10b981;animation:advDrawerUp .32s cubic-bezier(.34,1.56,.64,1)}
.adv-foot.bad{background:linear-gradient(180deg,#4c0519,#3b0714);border-color:#ef4444;animation:advDrawerUp .32s cubic-bezier(.34,1.56,.64,1)}
@keyframes advDrawerUp{from{transform:translateY(26px);opacity:.7}to{transform:translateY(0);opacity:1}}
#adv-fb{display:none;margin-bottom:.85rem}
.adv-fb-row{display:flex;align-items:flex-start;gap:.85rem}
.adv-fb-ico{width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.35rem;font-weight:900;flex-shrink:0;animation:advPopGood .4s cubic-bezier(.34,1.56,.64,1)}
.adv-foot.ok .adv-fb-ico{background:#10b981;color:#042f2e;box-shadow:0 0 18px rgba(16,185,129,.6)}
.adv-foot.bad .adv-fb-ico{background:#ef4444;color:#fff;box-shadow:0 0 18px rgba(239,68,68,.6)}
#adv-fb h4{font-size:1.22rem;font-weight:900;margin-bottom:.2rem}
.adv-foot.ok #adv-fb h4{color:#34d399}.adv-foot.bad #adv-fb h4{color:#fca5a5}
#adv-fb p{font-size:.96rem;line-height:1.5;opacity:.96}
.adv-main{width:100%;border:none;border-radius:18px;padding:1rem;font-size:1.1rem;font-weight:800;color:#fff;background:var(--c,#8b5cf6);box-shadow:0 6px 0 color-mix(in srgb,var(--c,#8b5cf6) 50%,#000);cursor:pointer;letter-spacing:.04em;text-transform:uppercase;transition:transform .12s,background .2s}
.adv-main:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-1px)}
.adv-main:active:not(:disabled){transform:translateY(4px);box-shadow:0 2px 0 color-mix(in srgb,var(--c,#8b5cf6) 50%,#000)}
.adv-main:disabled{background:#334155;box-shadow:0 6px 0 #1e293b;color:#64748b;cursor:not-allowed}
.adv-foot.ok .adv-main{background:#10b981;box-shadow:0 6px 0 #047857}
.adv-foot.bad .adv-main{background:#ef4444;box-shadow:0 6px 0 #991b1b}

/* Píldora teórica y pantalla de victoria */
.adv-pill{background:var(--glass);border:1px solid var(--glass-border);border-radius:26px;padding:1.6rem;text-align:left;animation:advStageIn .38s cubic-bezier(.22,1,.36,1)}
.adv-pill .em{font-size:3rem;display:inline-block;margin-bottom:.4rem;animation:advBob 2s ease-in-out infinite}
.adv-pill h2{font-size:1.5rem;margin-bottom:.7rem;color:#fbbf24}
.adv-pill p{font-size:1.12rem;line-height:1.75;opacity:.95}
.adv-res{text-align:center;padding-top:1.2rem;animation:advStageIn .45s cubic-bezier(.22,1,.36,1)}
.adv-res h2{font-size:2rem;margin:.4rem 0;font-weight:900}
.adv-res .st{font-size:3.2rem;letter-spacing:8px;margin:.7rem 0;min-height:3.8rem}
.adv-star-pop{display:inline-block;opacity:0;transform:scale(0) rotate(-25deg);transition:transform .42s cubic-bezier(.34,1.56,.64,1),opacity .25s}
.adv-star-pop.on{opacity:1;transform:scale(1) rotate(0)}
.adv-res .stat{display:inline-block;background:var(--glass);border:2px solid var(--glass-border);border-radius:18px;padding:.75rem 1.3rem;margin:.35rem;font-weight:800;font-size:1.05rem}

/* Globo +XP flotante */
.adv-float-xp{position:fixed;z-index:2000;pointer-events:none;font-weight:900;font-size:1.35rem;color:#fbbf24;text-shadow:0 4px 14px rgba(0,0,0,.65);transform:translate(-50%,-50%);animation:advFloatUp 1.05s cubic-bezier(.22,1,.36,1) forwards}
@keyframes advFloatUp{0%{opacity:0;transform:translate(-50%,0) scale(.6)}25%{opacity:1;transform:translate(-50%,-18px) scale(1.15)}100%{opacity:0;transform:translate(-50%,-70px) scale(.95)}}

/* Biblioteca */
.adv-libcard{background:var(--glass);border:1px solid var(--glass-border);border-radius:20px;padding:1.1rem 1.2rem;cursor:pointer;transition:.2s;display:flex;gap:1rem;align-items:center}
.adv-libcard:hover{border-color:var(--c);background:var(--glass-strong);transform:translateY(-3px)}
.adv-libcard .n{width:44px;height:44px;border-radius:14px;background:var(--c);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.2rem;flex-shrink:0}
.adv-libcard h4{font-size:1.05rem;margin-bottom:.15rem}
.adv-libcard small{opacity:.65;font-size:.78rem;line-height:1.35;display:block}
.adv-liblist{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:.9rem}
.adv-act{background:var(--glass);border:2px solid var(--glass-border);border-bottom-width:5px;border-radius:16px;padding:.9rem 1.1rem;color:#fff;font-weight:700;text-align:left;cursor:pointer;width:100%;font-size:1rem;transition:transform .14s,border-color .15s}
.adv-act:hover{border-color:var(--c);transform:translateY(-2px)}
.adv-sum{background:var(--glass);border-left:5px solid var(--c);border-radius:14px;padding:1rem 1.2rem;margin-bottom:.8rem}
.adv-sum b.t{display:block;color:#fbbf24;margin-bottom:.25rem}
@media(max-width:860px){.adv-grid2{grid-template-columns:1fr}.adv-cols{gap:.6rem}.adv-node{width:72px;height:72px}.adv-banner{margin-top:1.2rem}.adv-tabs{display:grid;grid-template-columns:repeat(2,1fr);gap:.45rem}.adv-tab{min-width:0;padding:.55rem .4rem;font-size:.88rem}}
@media(max-height:620px){.adv-q{margin-bottom:.7rem}.adv-body{padding:.5rem 1rem}}
`;
  document.head.appendChild(s);
}

/* ---------- preparación de ejercicios ---------- */
function prepare(src, rev) {
  let e = src;
  if (e.t === 'gen') e = e.f();
  const p = Object.assign({}, e, { src: src, rev: !!rev });
  if (p.t === 'choice') {
    const opts = p.o.map((x, i) => ({ x, ok: i === p.a }));
    p.opts = p.keep ? opts : A.shuffle(opts);
  } else if (p.t === 'order') {
    p.shuf = A.shuffle(p.items.map((x, i) => ({ x, i })));
    if (p.items.length > 2) { let guard = 0; while (p.shuf.every((o, k) => o.i === k) && guard++ < 10) p.shuf = A.shuffle(p.shuf); }
  } else if (p.t === 'match') {
    p.L = A.shuffle(p.pairs.map((x, i) => ({ x: x[0], i })));
    p.R = A.shuffle(p.pairs.map((x, i) => ({ x: x[1], i })));
  } else if (p.t === 'sort') {
    p.itemsShuf = A.shuffle(p.items.map((x, i) => ({ x: x.x, c: x.c, i })));
  }
  return p;
}
function qKey(e) { return A.stripHtml(e.q || '') + '|' + (e.t || ''); }
function allPool(id) {
  const c = A.content[id]; if (!c) return [];
  return c.stations.map(s => s.ex || []);
}
function sampleFrom(pools, n) {
  const used = new Set(), out = [];
  const flat = [];
  pools.forEach((pl, pi) => A.shuffle(pl).forEach(e => flat.push({ e, pi })));
  const per = Math.max(1, Math.ceil(n / pools.length));
  const taken = new Array(pools.length).fill(0);
  const tryAdd = (e) => {
    for (let k = 0; k < (e.t === 'gen' ? 6 : 1); k++) {
      const p = prepare(e);
      const key = qKey(p);
      if (!used.has(key)) { used.add(key); out.push(p); return true; }
    }
    return false;
  };
  for (const it of flat) { if (out.length >= n) break; if (taken[it.pi] >= per) continue; if (tryAdd(it.e)) taken[it.pi]++; }
  for (const it of flat) { if (out.length >= n) break; tryAdd(it.e); }
  return A.shuffle(out).slice(0, n);
}
function reviewItems(id) {
  const m = A.getMeta(id), list = A.missionsOf(m.subject), mi = list.findIndex(x => x.id === id);
  const done = list.slice(0, mi).filter(x => A.missionDone(x.id) && A.hasContent(x.id));
  if (!done.length) return [];
  const out = [], used = new Set();
  for (let i = 0; i < 2; i++) {
    const mm = A.pick(done), pools = allPool(mm.id).flat();
    const src = A.pick(pools); if (!src) continue;
    const p = prepare(src, true); const k = qKey(p);
    if (!used.has(k)) { used.add(k); out.push(p); }
  }
  return out;
}

/* ---------- renderizadores de ejercicios ---------- */
const R = {};
function el(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; }

R.choice = function (e, stage, onChange) {
  let sel = -1;
  const box = el('div', 'adv-opts');
  e.opts.forEach((o, i) => {
    const b = el('button', 'adv-opt', o.x);
    b.onclick = () => { A.sfx.tap(); sel = i; [...box.children].forEach((c, k) => c.classList.toggle('sel', k === i)); onChange(); };
    box.appendChild(b);
  });
  stage.appendChild(box);
  return {
    ready: () => sel >= 0,
    check() {
      const ok = e.opts[sel].ok;
      [...box.children].forEach((c, k) => { c.classList.add('done'); if (e.opts[k].ok) c.classList.add('good'); else if (k === sel) c.classList.add('bad'); c.classList.remove('sel'); });
      return { ok, correct: e.opts.find(o => o.ok).x, targetEl: box.children[sel] };
    }
  };
};
R.tf = function (e, stage, onChange) {
  let sel = null, selBtn = null;
  const box = el('div', 'adv-grid2');
  [[true, '✅ Verdadero'], [false, '❌ Falso']].forEach(([v, t]) => {
    const b = el('button', 'adv-opt', t); b.style.textAlign = 'center';
    b.onclick = () => { A.sfx.tap(); sel = v; selBtn = b; [...box.children].forEach(c => c.classList.remove('sel')); b.classList.add('sel'); onChange(); };
    box.appendChild(b);
  });
  stage.appendChild(box);
  return {
    ready: () => sel !== null,
    check() {
      const ok = sel === e.a;
      [...box.children].forEach((c, k) => { c.classList.add('done'); c.classList.remove('sel'); const v = k === 0; if (v === e.a) c.classList.add('good'); else if (v === sel) c.classList.add('bad'); });
      return { ok, correct: e.a ? 'Verdadero' : 'Falso', targetEl: selBtn };
    }
  };
};
R.num = function (e, stage, onChange) {
  let v = '';
  const disp = el('div', 'adv-num', '&nbsp;');
  const upd = () => { disp.innerHTML = (v === '' ? '&nbsp;' : v) + (e.u ? ' <small style="opacity:.6;font-size:.55em">' + e.u + '</small>' : ''); onChange(); };
  const pad = el('div', 'adv-pad');
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '0', '⌫'].forEach(k => {
    const b = el('button', '', k);
    b.onclick = () => { A.sfx.tap(); if (k === '⌫') v = v.slice(0, -1); else if (k === ',') { if (v !== '' && v !== '-' && !v.includes(',')) v += ','; } else if (v.replace(/[-,]/g, '').length < 9) v += k; upd(); };
    pad.appendChild(b);
  });
  const sign = el('button', '', '± ( − )'); sign.style.gridColumn = '1 / -1'; sign.style.fontSize = '1rem';
  sign.onclick = () => { A.sfx.tap(); v = v.startsWith('-') ? v.slice(1) : '-' + v; upd(); };
  if (e.neg) pad.appendChild(sign);
  stage.appendChild(disp); stage.appendChild(pad);
  return {
    ready: () => v !== '' && v !== '-' && v !== ',',
    check() {
      const n = Number(v.replace(',', '.'));
      const targets = [e.a].concat(e.alt || []);
      const ok = targets.some(t => Math.abs(n - t) <= 1e-9 * Math.max(1, Math.abs(t)));
      disp.style.borderColor = ok ? 'var(--success)' : 'var(--error)';
      return { ok, correct: A.fmt(e.a) + (e.u ? ' ' + e.u : ''), targetEl: disp };
    }
  };
};
R.order = function (e, stage, onChange) {
  const picked = [];
  const line = el('div', 'adv-line'), pool = el('div', 'adv-pool');
  const btns = e.shuf.map((o, k) => {
    const b = el('button', 'adv-chipbtn', o.x);
    b.onclick = () => { A.sfx.tap(); const at = picked.indexOf(k); if (at >= 0) picked.splice(at, 1); else picked.push(k); draw(); onChange(); };
    return b;
  });
  function draw() {
    line.innerHTML = ''; pool.innerHTML = '';
    picked.forEach(k => { const c = el('button', 'adv-chipbtn', e.shuf[k].x); c.onclick = btns[k].onclick; line.appendChild(c); });
    btns.forEach((b, k) => { b.classList.toggle('used', picked.includes(k)); pool.appendChild(b); });
  }
  draw(); stage.appendChild(line); stage.appendChild(pool);
  return {
    ready: () => picked.length === e.shuf.length,
    check() {
      const ok = picked.every((k, pos) => e.shuf[k].i === pos);
      [...line.children].forEach((c, pos) => c.classList.add(e.shuf[picked[pos]].i === pos ? 'good' : 'bad'));
      [...pool.children].forEach(c => c.style.pointerEvents = 'none');
      return { ok, correct: e.items.join(' → '), targetEl: line };
    }
  };
};
R.match = function (e, stage, onChange) {
  let selL = -1, mistakes = 0, matched = 0;
  const cols = el('div', 'adv-cols'), cl = el('div', 'adv-col'), cr = el('div', 'adv-col');
  const lb = e.L.map(o => el('button', 'adv-chipbtn', o.x)), rb = e.R.map(o => el('button', 'adv-chipbtn', o.x));
  lb.forEach((b, k) => b.onclick = () => { if (b.classList.contains('good')) return; A.sfx.tap(); selL = k; lb.forEach((x, j) => x.classList.toggle('sel', j === k)); });
  rb.forEach((b, k) => b.onclick = () => {
    if (b.classList.contains('good') || selL < 0) return;
    if (e.L[selL].i === e.R[k].i) {
      A.sfx.ok(matched + 1); A.burstAt(b, '✨');
      lb[selL].classList.remove('sel'); lb[selL].classList.add('good'); b.classList.add('good'); matched++; selL = -1; onChange();
    } else {
      A.sfx.err(); mistakes++; b.classList.add('bad'); lb[selL].classList.add('bad');
      const bb = b, ll = lb[selL]; setTimeout(() => { bb.classList.remove('bad'); ll.classList.remove('bad'); ll.classList.remove('sel'); }, 450); selL = -1;
    }
  });
  lb.forEach(b => cl.appendChild(b)); rb.forEach(b => cr.appendChild(b));
  cols.appendChild(cl); cols.appendChild(cr); stage.appendChild(cols);
  return {
    ready: () => matched === e.pairs.length,
    check() { return { ok: mistakes === 0, correct: e.pairs.map(p => p[0] + ' ↔ ' + p[1]).join('<br>'), targetEl: cols }; },
    auto: true
  };
};
R.sort = function (e, stage, onChange) {
  const place = {}; let selI = -1;
  const pool = el('div', 'adv-pool'), cats = el('div', 'adv-cols');
  cats.style.gridTemplateColumns = e.cats.length === 3 ? 'repeat(3,1fr)' : '1fr 1fr';
  cats.style.marginTop = '1.2rem';
  const chips = e.itemsShuf.map((o, k) => { const b = el('button', 'adv-chipbtn', o.x); b.onclick = () => { A.sfx.tap(); if (place[k] !== undefined) { delete place[k]; selI = -1; } else selI = (selI === k ? -1 : k); draw(); onChange(); }; return b; });
  const boxes = e.cats.map((c, ci) => {
    const d = el('div', 'adv-cat'); d.innerHTML = '<h4>' + c + '</h4><div class="in"></div>';
    d.onclick = (ev) => { if (ev.target.closest('.adv-chipbtn')) return; if (selI >= 0) { A.sfx.tap(); place[selI] = ci; selI = -1; draw(); onChange(); } };
    return d;
  });
  function draw() {
    pool.innerHTML = '';
    boxes.forEach(b => b.querySelector('.in').innerHTML = '');
    chips.forEach((b, k) => {
      b.classList.toggle('sel', selI === k);
      if (place[k] === undefined) pool.appendChild(b); else boxes[place[k]].querySelector('.in').appendChild(b);
    });
  }
  boxes.forEach(b => cats.appendChild(b)); stage.appendChild(pool); stage.appendChild(cats); draw();
  const hint = el('p', '', 'Toca una ficha y luego toca su casilla.'); hint.style.cssText = 'opacity:.55;font-size:.85rem;text-align:center;margin-top:1rem'; stage.appendChild(hint);
  return {
    ready: () => Object.keys(place).length === e.itemsShuf.length,
    check() {
      let ok = true;
      chips.forEach((b, k) => { const g = place[k] === e.itemsShuf[k].c; if (!g) ok = false; b.classList.add(g ? 'good' : 'bad'); b.style.pointerEvents = 'none'; });
      const corr = e.cats.map((c, ci) => '<b>' + c + ':</b> ' + e.items.filter(it => it.c === ci).map(it => it.x).join(', ')).join('<br>');
      return { ok, correct: corr, targetEl: cats };
    }
  };
};
R.tap = function (e, stage, onChange) {
  const sel = new Set();
  const box = el('div', 'adv-text');
  const ws = e.words.map((w, k) => { const s = el('span', 'adv-w', w); s.onclick = () => { A.sfx.tap(); sel.has(k) ? sel.delete(k) : sel.add(k); s.classList.toggle('sel', sel.has(k)); onChange(); }; box.appendChild(s); box.appendChild(document.createTextNode(' ')); return s; });
  stage.appendChild(box);
  const hint = el('p', '', 'Toca las palabras que creas que están mal.'); hint.style.cssText = 'opacity:.55;font-size:.85rem;margin-top:1rem'; stage.appendChild(hint);
  return {
    ready: () => sel.size > 0,
    check() {
      const target = new Set(e.wrong);
      const ok = sel.size === target.size && [...sel].every(k => target.has(k));
      ws.forEach((s, k) => { s.style.pointerEvents = 'none'; s.classList.remove('sel'); if (target.has(k)) s.classList.add('good'); else if (sel.has(k)) s.classList.add('bad'); });
      return { ok, correct: e.wrong.map(k => e.words[k]).join(', '), targetEl: box };
    }
  };
};

/* ---------- sesión de lección (overlay) ---------- */
let S = null;
const CHEERS_IDLE = [
  '¡Vamos a por ello! Tú puedes 💪',
  'Lee con calma, ¡seguro que la sabes! ✨',
  '¡Paso a paso nos hacemos expertas! 🌟',
  'Piensa en la regla que hemos visto 🧠',
  '¡A por otra! Estás haciéndolo genial 🚀'
];
const CHEERS_STREAK = [
  '¡Estás en racha imparable! 🔥',
  '¡Menuda puntería llevas hoy! 🎯',
  '¡Ni una se te resiste! ⚡',
  '¡Modo genia activado! 👑'
];

function ensureOverlay() {
  ensureCss();
  if (document.getElementById('adv-lesson')) return;
  const o = el('div', 'adv-ov'); o.id = 'adv-lesson';
  o.innerHTML = `
    <div class="adv-top"><button class="adv-x" id="adv-x" aria-label="Salir">✕</button><div class="adv-bar" id="adv-bar"><i id="adv-barfill"></i></div><div class="adv-combo" id="adv-combo"></div></div>
    <div class="adv-body"><div id="adv-mascot"></div><div id="adv-stage"></div></div>
    <div class="adv-foot" id="adv-foot"><div class="in"><div id="adv-fb"><div class="adv-fb-row"><div class="adv-fb-ico" id="adv-fb-ico">✓</div><div><h4></h4><p></p></div></div></div><button class="adv-main" id="adv-main">Comprobar</button></div></div>`;
  document.body.appendChild(o);
  document.getElementById('adv-x').onclick = () => {
    if (!S) return;
    if (S.mode === 'result' || confirm('¿Seguro que quieres salir? Perderás el progreso de esta lección.')) closeLesson(false);
  };
  document.getElementById('adv-main').onclick = onMain;
}
function setMascot(mood, text) {
  const m = document.getElementById('adv-mascot');
  if (!m) return;
  if (!mood) { m.innerHTML = ''; return; }
  m.innerHTML = `<div class="adv-mascot-row">${lumiSvg(mood)}<div class="adv-speech">${text || ''}</div></div>`;
}
function overlay(show) { document.getElementById('adv-lesson').style.display = show ? 'flex' : 'none'; document.body.style.overflow = show ? 'hidden' : ''; }
function setFoot(cls) { const f = document.getElementById('adv-foot'); f.className = 'adv-foot ' + (cls || ''); document.getElementById('adv-fb').style.display = cls ? 'block' : 'none'; }
function setMain(txt, disabled) { const b = document.getElementById('adv-main'); b.textContent = txt; b.disabled = !!disabled; }
function setBar() {
  const bar = document.getElementById('adv-bar');
  if (bar) bar.classList.toggle('fire', S && S.combo >= 3);
  document.getElementById('adv-barfill').style.width = (S.total ? Math.round(S.done / S.total * 100) : 0) + '%';
}

A.runSession = function (cfg) {
  ensureOverlay();
  getAudio();
  S = { cfg, queue: cfg.items.slice(), total: cfg.items.length, done: 0, ft: 0, wrong: 0, combo: 0, mode: '', cur: null, ctl: null, pillIdx: 0, pills: cfg.intro || [] };
  document.getElementById('adv-lesson').style.setProperty('--c', cfg.color || '#8b5cf6');
  document.getElementById('adv-combo').textContent = '';
  setBar(); overlay(true);
  if (S.pills.length) showPill(0); else nextEx();
};
function showPill(i) {
  S.mode = 'pill'; S.pillIdx = i; setFoot('');
  A.sfx.slide();
  setMascot('idle', i === 0 ? '¡Mira este truco antes de empezar! 💡' : '¡Un detalle más y pasamos a la acción! 🚀');
  const p = S.pills[i], stage = document.getElementById('adv-stage'); stage.innerHTML = '';
  const c = el('div', 'adv-pill');
  c.innerHTML = `<span class="em">${p.i || '💡'}</span><h2>${p.h}</h2><p>${p.p}</p>`;
  const sp = el('button', 'adv-chipbtn', '🔊 Escuchar'); sp.style.marginTop = '1rem'; sp.onclick = () => A.speak(p.h + '. ' + p.p); c.appendChild(sp);
  stage.appendChild(c); document.querySelector('.adv-body').scrollTop = 0;
  setMain(i === S.pills.length - 1 ? '¡A practicar!' : 'Siguiente', false);
}
function nextEx() {
  if (!S.queue.length) return finish();
  S.mode = 'ex'; setFoot('');
  A.sfx.slide();
  const e = S.cur = S.queue.shift();
  const mood = S.combo >= 3 ? 'fire' : 'idle';
  const msg = e.retry ? '¡Venga, ahora seguro que te sale! 💪' : (S.combo >= 3 ? A.pick(CHEERS_STREAK) : A.pick(CHEERS_IDLE));
  setMascot(mood, msg);

  const stage = document.getElementById('adv-stage');
  stage.innerHTML = '';
  stage.className = '';
  void stage.offsetWidth;
  stage.className = 'adv-stage-enter';

  if (e.rev) stage.appendChild(el('span', 'adv-tag', '🔁 Repaso de misiones anteriores'));
  else if (e.retry) stage.appendChild(el('span', 'adv-tag', '🎯 Segunda oportunidad'));

  const q = el('div', 'adv-q', e.q);
  const sp = el('button', 'adv-chipbtn', '🔊'); sp.style.cssText = 'padding:.15rem .6rem;margin-left:.6rem;font-size:.9rem;vertical-align:middle'; sp.onclick = () => A.speak(e.q); q.appendChild(sp);
  stage.appendChild(q);
  const upd = () => { if (!S || !S.ctl) return; if (S.ctl.auto) { if (S.ctl.ready() && S.mode === 'ex') resolve(S.ctl.check(), S.cur); } else setMain('Comprobar', !S.ctl.ready()); };
  S.ctl = R[e.t](e, stage, upd);
  setMain('Comprobar', true); document.querySelector('.adv-body').scrollTop = 0;
}
const PRAISE = ['¡Genial!', '¡Perfecto!', '¡Eso es!', '¡Muy bien!', '¡Excelente!', '¡Brillante!'];
function onMain() {
  if (!S) return;
  if (S.mode === 'pill') { S.pillIdx + 1 < S.pills.length ? showPill(S.pillIdx + 1) : nextEx(); return; }
  if (S.mode === 'ex') {
    const r = S.ctl.check(), e = S.cur;
    resolve(r, e); return;
  }
  if (S.mode === 'fb') { nextEx(); return; }
  if (S.mode === 'result') { closeLesson(true); return; }
}
function resolve(r, e) {
  S.mode = 'fb';
  const ok = r.ok, retry = !!e.retry;
  const f = document.getElementById('adv-fb');
  const ico = document.getElementById('adv-fb-ico');
  if (ok) {
    S.done++; if (!retry) S.ft++; S.combo++;
    A.sfx.ok(S.combo);
    A.burstAt(r.targetEl || document.getElementById('adv-main'), S.combo >= 3 ? `🔥 x${S.combo}` : '✨ ¡Bien!');
    if (ico) ico.textContent = S.combo >= 3 ? '🔥' : '✓';
    const praise = PRAISE[Math.floor(Math.random() * PRAISE.length)];
    f.querySelector('h4').textContent = praise + (S.combo >= 2 ? `  🔥 ¡${S.combo} seguidas!` : '');
    f.querySelector('p').innerHTML = e.why || '';
    setMascot(S.combo >= 3 ? 'fire' : 'happy', S.combo >= 3 ? `¡${S.combo} aciertos seguidos! ¡Estás que te sales! 🔥` : `${praise} ¡Sigue así! 🎉`);
    setFoot('ok');
  } else {
    A.sfx.err(); S.combo = 0; S.wrong++;
    if (ico) ico.textContent = '💡';
    f.querySelector('h4').textContent = 'Respuesta correcta:';
    f.querySelector('p').innerHTML = '<b>' + r.correct + '</b>' + (e.why ? '<br><span style="opacity:.9">' + e.why + '</span>' : '');
    setMascot('sad', '¡No pasa nada! Fíjate en la explicación y luego la repetimos 💡');
    setFoot('bad');
    if (S.cfg.noRetry) { S.done++; } else { const again = prepare(e.src, e.rev); again.retry = true; S.queue.push(again); }
  }
  const cbEl = document.getElementById('adv-combo');
  cbEl.textContent = S.combo >= 2 ? '🔥 ' + S.combo : '';
  if (S.combo >= 2) { cbEl.classList.remove('pop'); void cbEl.offsetWidth; cbEl.classList.add('pop'); }
  setBar(); setMain('Continuar', false);
}
function finish() {
  S.mode = 'result';
  const unique = S.cfg.items.length;
  const acc = unique ? S.ft / unique : 1;
  let stars = acc >= 0.9 ? 3 : acc >= 0.7 ? 2 : 1;
  let passed = true;
  if (S.cfg.noRetry) { passed = S.ft >= (S.cfg.passMin || unique - 1); stars = passed ? 3 : 0; }
  let info = {};
  if (S.cfg.onDone) info = S.cfg.onDone({ stars, acc, passed, ft: S.ft, total: unique }) || {};
  setFoot('');
  setMascot(null);
  document.getElementById('adv-barfill').style.width = '100%';
  const stage = document.getElementById('adv-stage');
  const title = passed ? (stars === 3 ? '¡Lección perfecta!' : '¡Lección completada!') : 'Casi lo consigues';
  const starSpans = passed ? [0, 1, 2].map(i => `<span class="adv-star-pop" id="adv-res-star-${i}">${i < stars ? '⭐' : '☆'}</span>`).join('') : '';
  stage.innerHTML = `<div class="adv-res">
    <div style="display:flex;justify-content:center;margin-bottom:.3rem">${lumiSvg(passed ? (stars === 3 ? 'fire' : 'happy') : 'sad')}</div>
    <h2>${title}</h2>
    ${passed ? `<div class="st">${starSpans}</div>` : ''}
    <div>
      <span class="stat">🎯 ${S.ft}/${unique} a la primera</span>
      ${info.xp ? `<span class="stat" style="color:#fbbf24" id="adv-xp-counter">+0 XP</span>` : ''}
    </div>
    ${info.note ? `<p style="margin-top:1.2rem;opacity:.88;line-height:1.6;font-weight:600">${info.note}</p>` : ''}
  </div>`;

  if (passed) {
    A.sfx.done();
    A.confetti();
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const st = document.getElementById('adv-res-star-' + i);
        if (st) st.classList.add('on');
        if (i < stars) A.sfx.star(i);
      }, 220 + i * 240);
    }
    if (info.xp) {
      const xpEl = document.getElementById('adv-xp-counter');
      const target = info.xp; const steps = 18; let cur = 0;
      const iv = setInterval(() => {
        cur++;
        if (xpEl) xpEl.textContent = '+' + Math.round((cur / steps) * target) + ' XP ✨';
        if (cur >= steps) clearInterval(iv);
      }, 35);
    }
  } else {
    A.sfx.err();
  }
  setMain('Continuar', false);
}
function closeLesson(completed) {
  const cb = S && S.cfg.onClose; overlay(false); S = null; try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (e) {}
  if (cb) cb(completed);
}

/* ---------- lanzadores de lecciones ---------- */
function color(id) { return A.subjectOf(A.getMeta(id).subject).color; }
function needContent(id) { if (A.hasContent(id)) return true; A.toast('🚧 En preparación', 'Esta misión todavía no tiene contenido. ¡Muy pronto!'); return false; }

A.startStation = function (id, k, opt) {
  if (!needContent(id)) return;
  opt = opt || {};
  const st = A.content[id].stations[k];
  const items = sampleFrom([st.ex], Math.min(7, st.ex.length * 1));
  const rev = (k === 0 && !opt.practice) ? reviewItems(id) : [];
  A.runSession({
    title: st.title, color: color(id), items: rev.concat(items), intro: st.intro,
    onDone: (res) => {
      if (opt.practice) return { note: '📚 Modo biblioteca: practicas sin gastar ni ganar XP.' };
      const m = A.ms(id), wasDone = !!m.s[k], xp = wasDone ? 0 : A.xpSplit(id)[k];
      m.s[k] = 1; m.stars[k] = Math.max(m.stars[k] || 0, res.stars);
      A.saveProgress(); if (xp && window.app) window.app.addXP(xp);
      return { xp, note: wasDone ? 'Ya habías superado esta estación: ¡repasar siempre ayuda!' : (k < 2 ? 'Siguiente parada: ' + (A.content[id].stations[k + 1].title) : '¡Ya puedes enfrentarte al Reto de Maestría! 👑') };
    },
    onClose: opt.onClose || (() => A.renderScreen())
  });
};
A.startBoss = function (id, opt) {
  if (!needContent(id)) return;
  opt = opt || {};
  const items = sampleFrom(allPool(id), 9);
  A.runSession({
    title: 'Reto de Maestría', color: color(id), items, intro: [],
    onDone: (res) => {
      if (opt.practice) return { note: '📚 Modo biblioteca: practicas sin gastar ni ganar XP.' };
      const m = A.ms(id), was = !!m.b, xp = was ? 0 : A.xpSplit(id)[3];
      m.b = 1; m.stars[3] = Math.max(m.stars[3] || 0, res.stars); A.saveProgress(); if (xp && window.app) window.app.addXP(xp);
      return { xp, note: A.missionDone(id) ? '🎉 ¡MISIÓN COMPLETADA! "' + A.getMeta(id).title + '" ya es tuya.' : '' };
    },
    onClose: opt.onClose || (() => A.renderScreen())
  });
};
A.startJump = function (id) {
  if (!needContent(id)) return;
  if (A.missionDone(id)) { A.toast('✅ Misión superada', 'Ya has completado esta misión.'); return; }
  if (!confirm('⚡ EXAMEN DE SALTO\n\n5 preguntas de toda la misión. Si aciertas 4 o más a la primera, la superas entera y te llevas todos sus XP.\n\n¿Empezamos?')) return;
  const items = sampleFrom(allPool(id), 5);
  A.runSession({
    title: 'Examen de salto', color: color(id), items, intro: [], noRetry: true, passMin: 4,
    onDone: (res) => {
      if (!res.passed) return { note: 'Necesitabas 4 aciertos. No pasa nada: ¡sigue el camino paso a paso y vuelve a intentarlo cuando quieras!' };
      const m = A.ms(id), split = A.xpSplit(id); let xp = 0;
      for (let k = 0; k < 4; k++) { if (!A.nodeDone(id, k)) { xp += split[k]; if (k < 3) { m.s[k] = 1; m.stars[k] = Math.max(m.stars[k] || 0, 2); } else { m.b = 1; m.stars[3] = Math.max(m.stars[3] || 0, 2); } } }
      A.saveProgress(); if (xp && window.app) window.app.addXP(xp);
      return { xp, note: '🚀 ¡Misión "' + A.getMeta(id).title + '" superada de golpe!' };
    },
    onClose: () => A.renderScreen()
  });
};
A.startMix = function (id, onClose) {
  if (!needContent(id)) return;
  A.runSession({ title: 'Práctica mixta', color: color(id), items: sampleFrom(allPool(id), 10), intro: [], onDone: () => ({ note: '📚 Modo biblioteca: practicas sin gastar ni ganar XP.' }), onClose });
};

/* ---------- pantalla AVENTURA (el caminito) ---------- */
A.subject = null;
A.renderScreen = function () {
  ensureCss();
  const box = document.getElementById('screen-aventura'); if (!box) return;
  if (!A.subject) A.subject = A.SUBJECTS[0].key;
  const sub = A.subjectOf(A.subject);
  const tabs = A.SUBJECTS.map(s => {
    const ms = A.missionsOf(s.key), done = ms.filter(m => A.missionDone(m.id)).length;
    return `<div class="adv-tab ${s.key === A.subject ? 'on' : ''}" style="--c:${s.color}" onclick="Adv.sfx.tap();Adv.setSubject('${s.key}')">${s.icon} ${s.short}<small>${done}/${ms.length} misiones</small></div>`;
  }).join('');
  let html = `<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.8rem">
    <div style="display:flex;align-items:center;gap:.9rem">${lumiSvg('idle')}<div><h1>🗺️ Aventura</h1><p style="opacity:.72;font-size:.9rem">Avanza misión a misión. ¿Ya te lo sabes? ¡Haz el ⚡ examen de salto!</p></div></div>
  </div><div class="adv-tabs">${tabs}</div><div class="adv-path" style="--c:${sub.color}">`;
  const list = A.missionsOf(A.subject), offs = [0, 46, 0, -46];
  let curId = null;
  list.forEach((m, mi) => {
    const has = A.hasContent(m.id), unl = A.unlocked(m.id, 0), done = A.missionDone(m.id), prog = A.missionProgress(m.id);
    html += `<div class="adv-banner ${!unl && !done ? 'lock' : ''}" style="--c:${sub.color}"><div class="k">MISIÓN ${mi + 1} ${done ? '· ✅ COMPLETADA' : ''}</div><h3>${m.title}</h3><p>${m.objective.length > 150 ? m.objective.slice(0, 148) + '…' : m.objective}</p>
      <div class="row"><span class="adv-chip">⭐ ${m.xp} XP</span><span class="adv-chip">${prog}/4</span>${!done ? `<button class="adv-jump" onclick="Adv.sfx.tap();Adv.startJump(${m.id})">⚡ Examen de salto</button>` : ''}</div></div>`;
    for (let k = 0; k < 4; k++) {
      const nd = A.nodeDone(m.id, k), un = A.unlocked(m.id, k);
      const isCur = !curId && un && !nd; if (isCur) curId = m.id + '-' + k;
      const stars = A.ms(m.id).stars[k] || 0;
      const cls = nd ? 'done' : (un ? '' : 'lock');
      const icon = nd ? '✔' : (un ? (k === 3 ? '👑' : A.NODE_ICONS[k]) : '🔒');
      const label = k === 3 ? 'Reto de Maestría' : (has ? A.content[m.id].stations[k].title : 'Estación ' + (k + 1));
      html += `<div class="adv-nodewrap" style="transform:translateX(${offs[k]}px)">${isCur ? '<div class="adv-start">¡EMPIEZA!</div>' : ''}<button id="advn-${m.id}-${k}" class="adv-node ${cls} ${isCur ? 'cur' : ''} ${k === 3 ? 'boss' : ''}" onclick="Adv.sfx.tap();Adv.clickNode(${m.id},${k})">${icon}</button>
        <div class="adv-lbl">${label}</div>${nd ? `<div class="adv-stars">${'⭐'.repeat(stars)}</div>` : ''}</div>`;
    }
  });
  html += '</div>';
  box.innerHTML = html;
  if (curId) setTimeout(() => { const n = document.getElementById('advn-' + curId); if (n) n.scrollIntoView({ block: 'center', behavior: 'smooth' }); }, 150);
};
A.setSubject = function (key) { A.subject = key; A.renderScreen(); window.scrollTo && document.querySelector('main') && (document.querySelector('main').scrollTop = 0); };
A.clickNode = function (id, k) {
  if (!A.unlocked(id, k)) { A.sfx.err(); A.toast('🔒 Todavía bloqueado', 'Completa el nodo anterior o supera el ⚡ examen de salto de la misión.'); return; }
  k === 3 ? A.startBoss(id) : A.startStation(id, k);
};

/* ---------- BIBLIOTECA (todo el temario, sin candados) ---------- */
A.libSubject = null;
A.renderLibrary = function (box) {
  if (!box) return;
  ensureCss();
  if (!A.libSubject) A.libSubject = A.SUBJECTS[0].key;
  const sub = A.subjectOf(A.libSubject);
  const tabs = A.SUBJECTS.map(s => `<div class="adv-tab ${s.key === A.libSubject ? 'on' : ''}" style="--c:${s.color}" onclick="Adv.sfx.tap();Adv.setLibSubject('${s.key}')">${s.icon} ${s.short}</div>`).join('');
  const cards = A.missionsOf(A.libSubject).map((m, i) => {
    const has = A.hasContent(m.id), done = A.missionDone(m.id);
    return `<div class="adv-libcard" style="--c:${sub.color};${has ? '' : 'opacity:.5'}" onclick="Adv.sfx.tap();Adv.openLibMission(${m.id})"><div class="n">${i + 1}</div><div><h4>${m.title} ${done ? '✅' : ''}</h4><small>${has ? 'Repasa y practica en el orden que quieras' : '🚧 Contenido en preparación'}</small></div></div>`;
  }).join('');
  box.innerHTML = `<div class="adv-tabs" style="position:static">${tabs}</div><div class="adv-liblist">${cards}</div>`;
};
A.setLibSubject = function (key) { A.libSubject = key; A.renderLibrary(document.getElementById('adv-library')); };
A.openLibMission = function (id) {
  if (!needContent(id)) return;
  const box = document.getElementById('adv-library'); if (!box) return;
  const m = A.getMeta(id), c = A.content[id], sub = A.subjectOf(m.subject);
  const sums = c.stations.map((s, k) => `<div class="adv-sum" style="--c:${sub.color}"><b class="t">${A.NODE_ICONS[k]} ${s.title}</b>${(s.intro || []).map(p => `<p style="margin:.4rem 0;line-height:1.6"><b>${p.h}.</b> ${p.p}</p>`).join('')}</div>`).join('');
  box.innerHTML = `<button class="btn" style="padding:.5rem 1rem;font-size:.8rem;background:transparent;border:1px solid var(--glass-border);margin-bottom:1rem" onclick="Adv.sfx.tap();Adv.renderLibrary(document.getElementById('adv-library'))">⬅ Temario</button>
    <div class="glass-card" style="--c:${sub.color};margin-bottom:1rem"><div style="font-size:.75rem;font-weight:800;opacity:.7">${sub.icon} ${sub.short.toUpperCase()}</div><h2 style="margin:.2rem 0 .5rem">${m.title}</h2><p style="opacity:.8;line-height:1.55">${m.objective}</p></div>
    <h3 style="margin:1rem 0 .6rem">📝 Resumen para estudiar</h3>${sums}
    <h3 style="margin:1.4rem 0 .6rem">🎮 Practicar (sin XP, sin candados)</h3>
    <div style="display:grid;gap:.6rem;--c:${sub.color}">
      ${c.stations.map((s, k) => `<button class="adv-act" onclick="Adv.sfx.tap();Adv.libStation(${id},${k})">${A.NODE_ICONS[k]} Practicar: ${s.title}</button>`).join('')}
      <button class="adv-act" onclick="Adv.sfx.tap();Adv.libBoss(${id})">👑 Reto de Maestría</button>
      <button class="adv-act" onclick="Adv.sfx.tap();Adv.libMix(${id})">🔀 Práctica mixta (10 preguntas al azar)</button>
    </div>`;
  box.dataset.cur = id;
};
A.libStation = (id, k) => A.startStation(id, k, { practice: true, onClose: () => A.openLibMission(id) });
A.libBoss = id => A.startBoss(id, { practice: true, onClose: () => A.openLibMission(id) });
A.libMix = id => A.startMix(id, () => A.openLibMission(id));

})();

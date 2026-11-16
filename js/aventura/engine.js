/* =========================================================
   LARA · MOTOR DE AVENTURA Y BIBLIOTECA
   - Aventura: sendero tipo Duolingo (estaciones + reto de maestría + examen de salto)
   - Biblioteca: acceso libre a todo el temario (sin candados)
   Contenido: js/aventura/content.js (generado desde content_src/)
   ========================================================= */
(function () {
'use strict';
const A = window.Adv = window.Adv || {};
A.meta = A.meta || [];
A.content = A.content || {};

A.SUBJECTS = [
  { key: 'Lengua Castellana y Literatura', short: 'Lengua',   icon: '📖', color: '#ec4899' },
  { key: 'Matemáticas',                    short: 'Mates',    icon: '📐', color: '#8b5cf6' },
  { key: 'Ciencias de la Naturaleza',      short: 'Naturales', icon: '🌿', color: '#10b981' },
  { key: 'Ciencias Sociales',              short: 'Sociales', icon: '🌍', color: '#f59e0b' }
];
A.NODE_ICONS = ['📘', '🧩', '🎯'];

/* ---------- utilidades (también disponibles para los generadores de contenido) ---------- */
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

/* ---------- progreso (se guarda en el perfil de la alumna) ---------- */
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
  // Sincroniza con la nube solo si la columna "progress" existe en el perfil
  try {
    const u = window.app.cloudUser;
    if (u && 'progress' in u && typeof sb !== 'undefined' && sb) {
      u.progress = window.app.curr.adv;
      sb.from('profiles').update({ progress: window.app.curr.adv }).eq('id', u.id).then(() => {});
    }
  } catch (e) { /* sin nube: se mantiene en local */ }
};
A.mergeProgress = function (local, cloud) {
  const out = JSON.parse(JSON.stringify(local || {}));
  Object.keys(cloud || {}).forEach(id => {
    const c = cloud[id], l = out[id] || { s: [0, 0, 0], b: 0, stars: [0, 0, 0, 0] };
    for (let k = 0; k < 3; k++) { l.s[k] = (l.s[k] || c.s && c.s[k]) ? 1 : 0; }
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

/* ---------- sonidos (sin archivos: los genera el navegador) ---------- */
A.sfx = {
  _b(f, t, type, when) { try { if (typeof audio !== 'undefined' && audio.state === 'suspended') audio.resume(); setTimeout(() => { try { beep(f, t, type || 'sine'); } catch (e) {} }, when || 0); } catch (e) {} },
  tap() { this._b(660, 0.04, 'triangle'); },
  ok() { this._b(523, 0.12, 'triangle', 0); this._b(784, 0.18, 'triangle', 90); },
  err() { this._b(196, 0.18, 'triangle', 0); this._b(147, 0.25, 'triangle', 120); },
  done() { [523, 659, 784, 1046, 1318].forEach((f, i) => this._b(f, 0.28, 'triangle', i * 120)); }
};
A.speak = function (html) {
  try {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(A.stripHtml(html));
    u.lang = 'es-ES'; u.rate = 0.95;
    window.speechSynthesis.speak(u);
  } catch (e) {}
};
A.confetti = function () {
  try { if (typeof expl === 'function') { const w = window.innerWidth; [0.2, 0.5, 0.8].forEach((p, i) => setTimeout(() => expl(w * p, 160, ['#fbbf24', '#ec4899', '#10b981'][i]), i * 180)); } } catch (e) {}
};
A.toast = (t, m) => { if (window.app) window.app.notify(t, m); };

/* ---------- CSS ---------- */
function ensureCss() {
  if (document.getElementById('adv-css')) return;
  const s = document.createElement('style'); s.id = 'adv-css';
  s.textContent = `
.adv-frac{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.1;margin:0 .15em;font-weight:800}
.adv-frac>span:first-child{border-bottom:2px solid currentColor;padding:0 .25em .08em}
.adv-frac>span:last-child{padding:.08em .25em 0}
.adv-tabs{display:flex;gap:.6rem;overflow-x:auto;padding:.2rem .1rem .6rem;position:sticky;top:0;z-index:5}
.adv-tab{flex:1;min-width:110px;background:var(--glass);border:2px solid var(--glass-border);border-radius:18px;padding:.7rem .6rem;text-align:center;cursor:pointer;font-weight:700;transition:.2s;color:#fff}
.adv-tab small{display:block;font-weight:600;opacity:.6;font-size:.7rem;margin-top:2px}
.adv-tab.on{border-color:var(--c);background:color-mix(in srgb,var(--c) 22%,transparent);box-shadow:0 8px 24px color-mix(in srgb,var(--c) 30%,transparent)}
.adv-path{display:flex;flex-direction:column;align-items:center;gap:0;padding:.5rem 0 4rem}
.adv-banner{width:100%;max-width:640px;border-radius:22px;padding:1rem 1.2rem;margin:1.6rem 0 1rem;background:linear-gradient(135deg,color-mix(in srgb,var(--c) 85%,#000),color-mix(in srgb,var(--c) 55%,#000));box-shadow:0 8px 0 color-mix(in srgb,var(--c) 40%,#000);position:relative}
.adv-banner.lock{filter:grayscale(.85) brightness(.7)}
.adv-banner h3{font-size:1.25rem;font-weight:800;margin:.1rem 0}
.adv-banner .k{font-size:.72rem;font-weight:800;letter-spacing:.08em;opacity:.8}
.adv-banner p{font-size:.82rem;opacity:.9;line-height:1.45;margin-top:.3rem}
.adv-banner .row{display:flex;align-items:center;gap:.6rem;flex-wrap:wrap;margin-top:.7rem}
.adv-chip{background:rgba(0,0,0,.28);border-radius:999px;padding:.25rem .7rem;font-size:.75rem;font-weight:800}
.adv-jump{background:rgba(255,255,255,.18);border:2px solid rgba(255,255,255,.4);color:#fff;border-radius:999px;padding:.35rem .9rem;font-weight:800;font-size:.78rem;cursor:pointer}
.adv-jump:active{transform:scale(.96)}
.adv-nodewrap{display:flex;flex-direction:column;align-items:center;margin:.55rem 0;position:relative}
.adv-node{width:78px;height:78px;border-radius:50%;border:none;font-size:2rem;cursor:pointer;color:#fff;background:var(--c);box-shadow:0 8px 0 color-mix(in srgb,var(--c) 50%,#000);transition:.12s;display:flex;align-items:center;justify-content:center;position:relative}
.adv-node:active{transform:translateY(5px);box-shadow:0 3px 0 color-mix(in srgb,var(--c) 50%,#000)}
.adv-node.done{background:#f5b301;box-shadow:0 8px 0 #b07f00}
.adv-node.lock{background:#475569;box-shadow:0 8px 0 #2b3544;cursor:not-allowed;opacity:.85}
.adv-node.cur{animation:advPulse 1.6s infinite}
.adv-node.boss{width:92px;height:92px;font-size:2.4rem}
@keyframes advPulse{0%,100%{box-shadow:0 8px 0 color-mix(in srgb,var(--c) 50%,#000),0 0 0 0 color-mix(in srgb,var(--c) 70%,transparent)}50%{box-shadow:0 8px 0 color-mix(in srgb,var(--c) 50%,#000),0 0 0 16px transparent}}
.adv-start{position:absolute;top:-30px;background:#fff;color:#111;font-weight:800;font-size:.7rem;padding:.2rem .6rem;border-radius:10px;animation:advBob 1.2s infinite;white-space:nowrap}
@keyframes advBob{50%{transform:translateY(-5px)}}
.adv-lbl{font-size:.72rem;font-weight:700;opacity:.75;margin-top:.55rem;max-width:150px;text-align:center}
.adv-stars{font-size:.8rem;letter-spacing:2px;margin-top:.25rem}
.adv-ov{position:fixed;inset:0;z-index:900;background:radial-gradient(circle at 50% 0,#1e1b4b 0,#070b14 70%);display:none;flex-direction:column}
.adv-top{display:flex;align-items:center;gap:1rem;padding:calc(.9rem + env(safe-area-inset-top)) 1.2rem .6rem;max-width:760px;width:100%;margin:0 auto}
.adv-x{background:none;border:none;color:#94a3b8;font-size:1.6rem;cursor:pointer;padding:.2rem .5rem}
.adv-bar{flex:1;height:16px;background:rgba(255,255,255,.1);border-radius:99px;overflow:hidden}
.adv-bar i{display:block;height:100%;width:0;background:var(--c,#8b5cf6);border-radius:99px;transition:width .5s cubic-bezier(.34,1.56,.64,1);box-shadow:inset 0 -4px 0 rgba(0,0,0,.18)}
.adv-combo{font-weight:800;color:#fbbf24;min-width:56px;text-align:right;font-size:.95rem}
.adv-body{flex:1;overflow-y:auto;padding:1rem 1.2rem;max-width:760px;width:100%;margin:0 auto;-webkit-overflow-scrolling:touch}
.adv-tag{display:inline-block;font-size:.72rem;font-weight:800;padding:.2rem .7rem;border-radius:99px;background:rgba(255,255,255,.1);margin-bottom:.8rem}
.adv-q{font-size:clamp(1.25rem,3.6vw,1.7rem);font-weight:700;line-height:1.5;margin-bottom:1.3rem}
.adv-opts{display:flex;flex-direction:column;gap:.75rem}
.adv-opt{background:var(--glass);border:2px solid var(--glass-border);border-bottom-width:5px;border-radius:18px;padding:1rem 1.1rem;font-size:clamp(1.05rem,3vw,1.25rem);font-weight:600;color:#fff;text-align:left;cursor:pointer;min-height:58px;transition:.1s;width:100%}
.adv-opt:active{transform:translateY(2px)}
.adv-opt.sel{border-color:#38bdf8;background:rgba(56,189,248,.15)}
.adv-opt.good{border-color:var(--success);background:rgba(16,185,129,.2)}
.adv-opt.bad{border-color:var(--error);background:rgba(239,68,68,.2)}
.adv-opt.done{opacity:.45;pointer-events:none}
.adv-grid2{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}
.adv-num{font-size:2.4rem;font-weight:800;text-align:center;background:rgba(255,255,255,.05);border:2px solid var(--glass-border);border-radius:20px;padding:.8rem;min-height:84px;margin-bottom:1rem;letter-spacing:2px}
.adv-pad{display:grid;grid-template-columns:repeat(3,1fr);gap:.55rem;max-width:380px;margin:0 auto}
.adv-pad button{background:var(--glass-strong);border:2px solid var(--glass-border);border-bottom-width:5px;border-radius:16px;font-size:1.6rem;font-weight:800;color:#fff;padding:.85rem 0;cursor:pointer}
.adv-pad button:active{transform:translateY(2px)}
.adv-line{min-height:64px;border-bottom:3px solid rgba(255,255,255,.25);display:flex;flex-wrap:wrap;gap:.5rem;padding:.4rem 0 .7rem;margin-bottom:1.1rem}
.adv-chipbtn{background:var(--glass-strong);border:2px solid var(--glass-border);border-bottom-width:5px;border-radius:14px;padding:.6rem .95rem;font-size:1.1rem;font-weight:600;color:#fff;cursor:pointer}
.adv-chipbtn.sel{border-color:#38bdf8;background:rgba(56,189,248,.18)}
.adv-chipbtn.used{opacity:.25;pointer-events:none}
.adv-chipbtn.good{border-color:var(--success);background:rgba(16,185,129,.22)}
.adv-chipbtn.bad{border-color:var(--error);background:rgba(239,68,68,.22)}
.adv-pool{display:flex;flex-wrap:wrap;gap:.55rem;justify-content:center}
.adv-cols{display:grid;grid-template-columns:1fr 1fr;gap:.9rem}
.adv-col{display:flex;flex-direction:column;gap:.6rem}
.adv-cat{background:rgba(255,255,255,.04);border:2px dashed rgba(255,255,255,.25);border-radius:18px;padding:.7rem;min-height:110px;cursor:pointer}
.adv-cat h4{font-size:.95rem;margin-bottom:.5rem;text-align:center}
.adv-cat .in{display:flex;flex-wrap:wrap;gap:.4rem;justify-content:center}
.adv-text{font-size:clamp(1.15rem,3.2vw,1.45rem);line-height:2.4}
.adv-w{display:inline-block;padding:.05rem .4rem;margin:0 .1rem;border-radius:10px;border:2px solid transparent;cursor:pointer}
.adv-w.sel{border-color:#38bdf8;background:rgba(56,189,248,.2)}
.adv-w.good{border-color:var(--success);background:rgba(16,185,129,.25)}
.adv-w.bad{border-color:var(--error);background:rgba(239,68,68,.25)}
.adv-foot{border-top:2px solid rgba(255,255,255,.08);padding:1rem 1.2rem calc(1rem + env(safe-area-inset-bottom));transition:.25s}
.adv-foot .in{max-width:760px;margin:0 auto}
.adv-foot.ok{background:#0b3d2e;border-color:#10b981}
.adv-foot.bad{background:#4a1620;border-color:#ef4444}
#adv-fb{display:none;margin-bottom:.8rem}
#adv-fb h4{font-size:1.25rem;font-weight:800;margin-bottom:.25rem}
.adv-foot.ok #adv-fb h4{color:#34d399}.adv-foot.bad #adv-fb h4{color:#fca5a5}
#adv-fb p{font-size:.98rem;line-height:1.5;opacity:.95}
.adv-main{width:100%;border:none;border-radius:18px;padding:1rem;font-size:1.1rem;font-weight:800;color:#fff;background:var(--c,#8b5cf6);box-shadow:0 6px 0 color-mix(in srgb,var(--c,#8b5cf6) 50%,#000);cursor:pointer;letter-spacing:.04em;text-transform:uppercase}
.adv-main:active{transform:translateY(4px);box-shadow:0 2px 0 color-mix(in srgb,var(--c,#8b5cf6) 50%,#000)}
.adv-main:disabled{background:#334155;box-shadow:0 6px 0 #1e293b;color:#64748b;cursor:not-allowed}
.adv-foot.ok .adv-main{background:#10b981;box-shadow:0 6px 0 #047857}
.adv-foot.bad .adv-main{background:#ef4444;box-shadow:0 6px 0 #991b1b}
.adv-pill{background:var(--glass);border:1px solid var(--glass-border);border-radius:26px;padding:1.6rem;text-align:left}
.adv-pill .em{font-size:3rem;display:block;margin-bottom:.4rem}
.adv-pill h2{font-size:1.5rem;margin-bottom:.7rem;color:#fbbf24}
.adv-pill p{font-size:1.12rem;line-height:1.75;opacity:.95}
.adv-res{text-align:center;padding-top:2rem}
.adv-res .big{font-size:4.5rem}
.adv-res h2{font-size:2rem;margin:.5rem 0}
.adv-res .st{font-size:3rem;letter-spacing:6px;margin:.6rem 0}
.adv-res .stat{display:inline-block;background:var(--glass);border:1px solid var(--glass-border);border-radius:16px;padding:.7rem 1.2rem;margin:.3rem;font-weight:800}
.adv-libcard{background:var(--glass);border:1px solid var(--glass-border);border-radius:20px;padding:1.1rem 1.2rem;cursor:pointer;transition:.2s;display:flex;gap:1rem;align-items:center}
.adv-libcard:hover{border-color:var(--c);background:var(--glass-strong);transform:translateY(-3px)}
.adv-libcard .n{width:44px;height:44px;border-radius:14px;background:var(--c);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.2rem;flex-shrink:0}
.adv-libcard h4{font-size:1.05rem;margin-bottom:.15rem}
.adv-libcard small{opacity:.65;font-size:.78rem;line-height:1.35;display:block}
.adv-liblist{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:.9rem}
.adv-act{background:var(--glass);border:2px solid var(--glass-border);border-bottom-width:5px;border-radius:16px;padding:.9rem 1.1rem;color:#fff;font-weight:700;text-align:left;cursor:pointer;width:100%;font-size:1rem}
.adv-act:hover{border-color:var(--c)}
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
  // pools: array of arrays; toma de forma equilibrada y sin repetir enunciados
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
      return { ok, correct: e.opts.find(o => o.ok).x };
    }
  };
};
R.tf = function (e, stage, onChange) {
  let sel = null;
  const box = el('div', 'adv-grid2');
  [[true, '✅ Verdadero'], [false, '❌ Falso']].forEach(([v, t]) => {
    const b = el('button', 'adv-opt', t); b.style.textAlign = 'center';
    b.onclick = () => { A.sfx.tap(); sel = v; [...box.children].forEach(c => c.classList.remove('sel')); b.classList.add('sel'); onChange(); };
    box.appendChild(b);
  });
  stage.appendChild(box);
  return {
    ready: () => sel !== null,
    check() {
      const ok = sel === e.a;
      [...box.children].forEach((c, k) => { c.classList.add('done'); c.classList.remove('sel'); const v = k === 0; if (v === e.a) c.classList.add('good'); else if (v === sel) c.classList.add('bad'); });
      return { ok, correct: e.a ? 'Verdadero' : 'Falso' };
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
      return { ok, correct: A.fmt(e.a) + (e.u ? ' ' + e.u : '') };
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
      return { ok, correct: e.items.join(' → ') };
    }
  };
};
R.match = function (e, stage, onChange) {
  let selL = -1, mistakes = 0, matched = 0, finished = false;
  const cols = el('div', 'adv-cols'), cl = el('div', 'adv-col'), cr = el('div', 'adv-col');
  const lb = e.L.map(o => el('button', 'adv-chipbtn', o.x)), rb = e.R.map(o => el('button', 'adv-chipbtn', o.x));
  lb.forEach((b, k) => b.onclick = () => { if (b.classList.contains('good')) return; A.sfx.tap(); selL = k; lb.forEach((x, j) => x.classList.toggle('sel', j === k)); });
  rb.forEach((b, k) => b.onclick = () => {
    if (b.classList.contains('good') || selL < 0) return;
    if (e.L[selL].i === e.R[k].i) {
      A.sfx.ok(); lb[selL].classList.remove('sel'); lb[selL].classList.add('good'); b.classList.add('good'); matched++; selL = -1; onChange();
    } else {
      A.sfx.err(); mistakes++; b.classList.add('bad'); lb[selL].classList.add('bad');
      const bb = b, ll = lb[selL]; setTimeout(() => { bb.classList.remove('bad'); ll.classList.remove('bad'); ll.classList.remove('sel'); }, 450); selL = -1;
    }
  });
  lb.forEach(b => cl.appendChild(b)); rb.forEach(b => cr.appendChild(b));
  cols.appendChild(cl); cols.appendChild(cr); stage.appendChild(cols);
  return {
    ready: () => matched === e.pairs.length,
    check() { return { ok: mistakes === 0, correct: e.pairs.map(p => p[0] + ' ↔ ' + p[1]).join('<br>') }; },
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
      return { ok, correct: corr };
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
      return { ok, correct: e.wrong.map(k => e.words[k]).join(', ') };
    }
  };
};

/* ---------- sesión de lección (overlay) ---------- */
let S = null;
function ensureOverlay() {
  ensureCss();
  if (document.getElementById('adv-lesson')) return;
  const o = el('div', 'adv-ov'); o.id = 'adv-lesson';
  o.innerHTML = `
    <div class="adv-top"><button class="adv-x" id="adv-x" aria-label="Salir">✕</button><div class="adv-bar"><i id="adv-barfill"></i></div><div class="adv-combo" id="adv-combo"></div></div>
    <div class="adv-body"><div id="adv-stage"></div></div>
    <div class="adv-foot" id="adv-foot"><div class="in"><div id="adv-fb"><h4></h4><p></p></div><button class="adv-main" id="adv-main">Comprobar</button></div></div>`;
  document.body.appendChild(o);
  document.getElementById('adv-x').onclick = () => {
    if (!S) return;
    if (S.mode === 'result' || confirm('¿Seguro que quieres salir? Perderás el progreso de esta lección.')) closeLesson(false);
  };
  document.getElementById('adv-main').onclick = onMain;
}
function overlay(show) { document.getElementById('adv-lesson').style.display = show ? 'flex' : 'none'; document.body.style.overflow = show ? 'hidden' : ''; }
function setFoot(cls) { const f = document.getElementById('adv-foot'); f.className = 'adv-foot ' + (cls || ''); document.getElementById('adv-fb').style.display = cls ? 'block' : 'none'; }
function setMain(txt, disabled) { const b = document.getElementById('adv-main'); b.textContent = txt; b.disabled = !!disabled; }
function setBar() { document.getElementById('adv-barfill').style.width = (S.total ? Math.round(S.done / S.total * 100) : 0) + '%'; }

A.runSession = function (cfg) {
  ensureOverlay();
  try { if (typeof audio !== 'undefined' && audio.state === 'suspended') audio.resume(); } catch (e) {}
  S = { cfg, queue: cfg.items.slice(), total: cfg.items.length, done: 0, ft: 0, wrong: 0, combo: 0, mode: '', cur: null, ctl: null, pillIdx: 0, pills: cfg.intro || [] };
  document.getElementById('adv-lesson').style.setProperty('--c', cfg.color || '#8b5cf6');
  document.getElementById('adv-combo').textContent = '';
  setBar(); overlay(true);
  if (S.pills.length) showPill(0); else nextEx();
};
function showPill(i) {
  S.mode = 'pill'; S.pillIdx = i; setFoot('');
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
  const e = S.cur = S.queue.shift();
  const stage = document.getElementById('adv-stage'); stage.innerHTML = '';
  if (e.rev) stage.appendChild(el('span', 'adv-tag', '🔁 Repaso de misiones anteriores'));
  const q = el('div', 'adv-q', e.q);
  const sp = el('button', 'adv-chipbtn', '🔊'); sp.style.cssText = 'padding:.15rem .6rem;margin-left:.6rem;font-size:.9rem;vertical-align:middle'; sp.onclick = () => A.speak(e.q); q.appendChild(sp);
  stage.appendChild(q);
  const upd = () => { if (!S || !S.ctl) return; if (S.ctl.auto) { if (S.ctl.ready() && S.mode === 'ex') resolve(S.ctl.check(), S.cur); } else setMain('Comprobar', !S.ctl.ready()); };
  S.ctl = R[e.t](e, stage, upd);
  setMain('Comprobar', true); document.querySelector('.adv-body').scrollTop = 0;
}
const PRAISE = ['¡Genial!', '¡Perfecto!', '¡Eso es!', '¡Muy bien!', '¡Excelente!', '¡Bravo!'];
function onMain() {
  if (!S) return;
  if (S.mode === 'pill') { S.pillIdx + 1 < S.pills.length ? showPill(S.pillIdx + 1) : nextEx(); return; }
  if (S.mode === 'ex') { // comprobar
    const r = S.ctl.check(), e = S.cur;
    resolve(r, e); return;
  }
  if (S.mode === 'fb') { nextEx(); return; }
  if (S.mode === 'result') { closeLesson(true); return; }
}
function resolve(r, e, quiet) {
  S.mode = 'fb';
  const ok = r.ok, retry = !!e.retry;
  const f = document.getElementById('adv-fb');
  if (ok) {
    A.sfx.ok(); S.done++; if (!retry) S.ft++; S.combo++;
    f.querySelector('h4').textContent = PRAISE[Math.floor(Math.random() * PRAISE.length)] + (S.combo >= 3 ? '  🔥 x' + S.combo : '');
    f.querySelector('p').innerHTML = e.why || '';
    setFoot('ok');
  } else {
    A.sfx.err(); S.combo = 0; S.wrong++;
    f.querySelector('h4').textContent = 'Respuesta correcta:';
    f.querySelector('p').innerHTML = '<b>' + r.correct + '</b>' + (e.why ? '<br><span style="opacity:.9">' + e.why + '</span>' : '');
    setFoot('bad');
    if (S.cfg.noRetry) { S.done++; } else { const again = prepare(e.src, e.rev); again.retry = true; S.queue.push(again); /* se repite al final */ }
  }
  document.getElementById('adv-combo').textContent = S.combo >= 2 ? '🔥 ' + S.combo : '';
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
  document.getElementById('adv-barfill').style.width = '100%';
  const stage = document.getElementById('adv-stage');
  const title = passed ? (stars === 3 ? '¡Lección perfecta!' : '¡Lección completada!') : 'Casi lo consigues';
  stage.innerHTML = `<div class="adv-res"><div class="big">${passed ? '🏆' : '💪'}</div><h2>${title}</h2>
    ${passed ? `<div class="st">${'⭐'.repeat(stars)}${'☆'.repeat(3 - stars)}</div>` : ''}
    <div><span class="stat">🎯 ${S.ft}/${unique} a la primera</span>${info.xp ? `<span class="stat" style="color:#fbbf24">+${info.xp} XP</span>` : ''}</div>
    ${info.note ? `<p style="margin-top:1.2rem;opacity:.85;line-height:1.6">${info.note}</p>` : ''}</div>`;
  if (passed) { A.sfx.done(); A.confetti(); } else A.sfx.err();
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
  const first = A.ms(id).s[k] ? 0 : 1;
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
    return `<div class="adv-tab ${s.key === A.subject ? 'on' : ''}" style="--c:${s.color}" onclick="Adv.setSubject('${s.key}')">${s.icon} ${s.short}<small>${done}/${ms.length} misiones</small></div>`;
  }).join('');
  let html = `<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.5rem"><div><h1>🗺️ Aventura</h1><p style="opacity:.65;font-size:.9rem">Avanza misión a misión. ¿Ya te lo sabes? ¡Haz el ⚡ examen de salto!</p></div></div><div class="adv-tabs">${tabs}</div><div class="adv-path" style="--c:${sub.color}">`;
  const list = A.missionsOf(A.subject), offs = [0, 46, 0, -46];
  let curId = null;
  list.forEach((m, mi) => {
    const has = A.hasContent(m.id), unl = A.unlocked(m.id, 0), done = A.missionDone(m.id), prog = A.missionProgress(m.id);
    html += `<div class="adv-banner ${!unl && !done ? 'lock' : ''}" style="--c:${sub.color}"><div class="k">MISIÓN ${mi + 1} ${done ? '· ✅ COMPLETADA' : ''}</div><h3>${m.title}</h3><p>${m.objective.length > 150 ? m.objective.slice(0, 148) + '…' : m.objective}</p>
      <div class="row"><span class="adv-chip">⭐ ${m.xp} XP</span><span class="adv-chip">${prog}/4</span>${!done ? `<button class="adv-jump" onclick="Adv.startJump(${m.id})">⚡ Examen de salto</button>` : ''}</div></div>`;
    for (let k = 0; k < 4; k++) {
      const nd = A.nodeDone(m.id, k), un = A.unlocked(m.id, k);
      const isCur = !curId && un && !nd; if (isCur) curId = m.id + '-' + k;
      const stars = A.ms(m.id).stars[k] || 0;
      const cls = nd ? 'done' : (un ? '' : 'lock');
      const icon = nd ? '✔' : (un ? (k === 3 ? '👑' : A.NODE_ICONS[k]) : '🔒');
      const label = k === 3 ? 'Reto de Maestría' : (has ? A.content[m.id].stations[k].title : 'Estación ' + (k + 1));
      html += `<div class="adv-nodewrap" style="transform:translateX(${offs[k]}px)">${isCur ? '<div class="adv-start">¡EMPIEZA!</div>' : ''}<button id="advn-${m.id}-${k}" class="adv-node ${cls} ${isCur ? 'cur' : ''} ${k === 3 ? 'boss' : ''}" onclick="Adv.clickNode(${m.id},${k})">${icon}</button>
        <div class="adv-lbl">${label}</div>${nd ? `<div class="adv-stars">${'⭐'.repeat(stars)}</div>` : ''}</div>`;
    }
  });
  html += '</div>';
  box.innerHTML = html;
  if (curId) setTimeout(() => { const n = document.getElementById('advn-' + curId); if (n) n.scrollIntoView({ block: 'center', behavior: 'smooth' }); }, 150);
};
A.setSubject = function (key) { A.subject = key; A.renderScreen(); window.scrollTo && document.querySelector('main') && (document.querySelector('main').scrollTop = 0); };
A.clickNode = function (id, k) {
  if (!A.unlocked(id, k)) { A.toast('🔒 Todavía bloqueado', 'Completa el nodo anterior o supera el ⚡ examen de salto de la misión.'); return; }
  k === 3 ? A.startBoss(id) : A.startStation(id, k);
};

/* ---------- BIBLIOTECA (todo el temario, sin candados) ---------- */
A.libSubject = null;
A.renderLibrary = function (box) {
  if (!box) return;
  ensureCss();
  if (!A.libSubject) A.libSubject = A.SUBJECTS[0].key;
  const sub = A.subjectOf(A.libSubject);
  const tabs = A.SUBJECTS.map(s => `<div class="adv-tab ${s.key === A.libSubject ? 'on' : ''}" style="--c:${s.color}" onclick="Adv.setLibSubject('${s.key}')">${s.icon} ${s.short}</div>`).join('');
  const cards = A.missionsOf(A.libSubject).map((m, i) => {
    const has = A.hasContent(m.id), done = A.missionDone(m.id);
    return `<div class="adv-libcard" style="--c:${sub.color};${has ? '' : 'opacity:.5'}" onclick="Adv.openLibMission(${m.id})"><div class="n">${i + 1}</div><div><h4>${m.title} ${done ? '✅' : ''}</h4><small>${has ? 'Repasa y practica en el orden que quieras' : '🚧 Contenido en preparación'}</small></div></div>`;
  }).join('');
  box.innerHTML = `<div class="adv-tabs" style="position:static">${tabs}</div><div class="adv-liblist">${cards}</div>`;
};
A.setLibSubject = function (key) { A.libSubject = key; A.renderLibrary(document.getElementById('adv-library')); };
A.openLibMission = function (id) {
  if (!needContent(id)) return;
  const box = document.getElementById('adv-library'); if (!box) return;
  const m = A.getMeta(id), c = A.content[id], sub = A.subjectOf(m.subject);
  const back = () => A.openLibMission(id);
  const sums = c.stations.map((s, k) => `<div class="adv-sum" style="--c:${sub.color}"><b class="t">${A.NODE_ICONS[k]} ${s.title}</b>${(s.intro || []).map(p => `<p style="margin:.4rem 0;line-height:1.6"><b>${p.h}.</b> ${p.p}</p>`).join('')}</div>`).join('');
  box.innerHTML = `<button class="btn" style="padding:.5rem 1rem;font-size:.8rem;background:transparent;border:1px solid var(--glass-border);margin-bottom:1rem" onclick="Adv.renderLibrary(document.getElementById('adv-library'))">⬅ Temario</button>
    <div class="glass-card" style="--c:${sub.color};margin-bottom:1rem"><div style="font-size:.75rem;font-weight:800;opacity:.7">${sub.icon} ${sub.short.toUpperCase()}</div><h2 style="margin:.2rem 0 .5rem">${m.title}</h2><p style="opacity:.8;line-height:1.55">${m.objective}</p></div>
    <h3 style="margin:1rem 0 .6rem">📝 Resumen para estudiar</h3>${sums}
    <h3 style="margin:1.4rem 0 .6rem">🎮 Practicar (sin XP, sin candados)</h3>
    <div style="display:grid;gap:.6rem;--c:${sub.color}">
      ${c.stations.map((s, k) => `<button class="adv-act" onclick="Adv.libStation(${id},${k})">${A.NODE_ICONS[k]} Practicar: ${s.title}</button>`).join('')}
      <button class="adv-act" onclick="Adv.libBoss(${id})">👑 Reto de Maestría</button>
      <button class="adv-act" onclick="Adv.libMix(${id})">🔀 Práctica mixta (10 preguntas al azar)</button>
    </div>`;
  box.dataset.cur = id;
};
A.libStation = (id, k) => A.startStation(id, k, { practice: true, onClose: () => A.openLibMission(id) });
A.libBoss = id => A.startBoss(id, { practice: true, onClose: () => A.openLibMission(id) });
A.libMix = id => A.startMix(id, () => A.openLibMission(id));

})();

/* =========================================================
   LARA · MOTOR DE AVENTURA Y BIBLIOTECA (EDICIÓN COMPLETA)
   - Audio cálido polifónico tipo Marimba/Kalimba + selector de voz neuronal
   - Mascota animada SVG ("Lumi") con reacciones en vivo
   - 5 Vidas (❤️) + Reto Relámpago de Cálculo (25s) para recargar
   - Sincronización en la nube: progreso, fallos, simulacros, métricas de tiempo y misiones recomendadas
   - Mejoras pedagógicas: detector anti-impulsividad (<2s), botón 💡 Pista, ejemplos resueltos y Boss exigente
   ========================================================= */
(function () {
'use strict';
const A = window.Adv = window.Adv || {};
A.meta = A.meta || [];
A.content = A.content || {};

A.SUBJECTS = [
  { key: 'Lengua Castellana y Literatura', short: 'Lengua',    icon: '📖', color: '#ec4899', code: 'lengua' },
  { key: 'Matemáticas',                    short: 'Mates',     icon: '📐', color: '#8b5cf6', code: 'mates_adv' },
  { key: 'Ciencias de la Naturaleza',      short: 'Naturales', icon: '🌿', color: '#10b981', code: 'naturales' },
  { key: 'Ciencias Sociales',              short: 'Sociales',  icon: '🌍', color: '#f59e0b', code: 'sociales' }
];
A.NODE_ICONS = ['📘', '🧩', '🎯'];
A.MAX_HEARTS = 5;

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
A.subjectOf = key => A.SUBJECTS.find(s => s.key === key) || A.SUBJECTS[0];
A.stripHtml = h => String(h).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const todayStr = () => new Date().toISOString().split('T')[0];

/* ---------- progreso, vidas, buzón, exámenes y métricas ---------- */
A.st = function () {
  const c = window.app && window.app.curr;
  if (!c) return {};
  if (!c.adv) c.adv = {};
  return c.adv;
};
A.metaSt = function () {
  const c = window.app && window.app.curr;
  const td = todayStr();
  if (!c) return { hearts: 5, lastDate: td, inbox: [], exams: [], quests: { date: td, lessons: 0, maxCombo: 0, sprints: 0, chest: false } };
  if (!c.advMeta) c.advMeta = { hearts: 5, lastDate: td, inbox: [], exams: [], quests: { date: td, lessons: 0, maxCombo: 0, sprints: 0, chest: false } };
  const m = c.advMeta;
  if (typeof m.hearts !== 'number') m.hearts = 5;
  if (!Array.isArray(m.inbox)) m.inbox = [];
  if (!Array.isArray(m.exams)) m.exams = [];
  if (!m.quests || m.quests.date !== td) {
    m.quests = { date: td, lessons: 0, maxCombo: 0, sprints: 0, chest: false };
  }
  if (m.lastDate !== td) {
    m.hearts = A.MAX_HEARTS;
    m.lastDate = td;
  }
  return m;
};
A.metricsSt = function () {
  const c = window.app && window.app.curr;
  if (!c) return { totalSec: 0, daily: {}, questions: { count: 0, totalSec: 0, impulsiveCount: 0, stuckCount: 0 }, missions: {}, alerts: [] };
  if (!c.metrics) c.metrics = { totalSec: 0, daily: {}, questions: { count: 0, totalSec: 0, impulsiveCount: 0, stuckCount: 0 }, missions: {}, alerts: [] };
  const mt = c.metrics;
  if (!mt.daily) mt.daily = {};
  if (!mt.questions) mt.questions = { count: 0, totalSec: 0, impulsiveCount: 0, stuckCount: 0 };
  if (!mt.missions) mt.missions = {};
  if (!Array.isArray(mt.alerts)) mt.alerts = [];
  return mt;
};
A.hearts = () => A.metaSt().hearts;
A.addHearts = function (n) {
  const m = A.metaSt();
  m.hearts = Math.min(A.MAX_HEARTS, Math.max(0, m.hearts + n));
  A.saveProgress();
  return m.hearts;
};
A.recordQuest = function (field, val, isMax) {
  const q = A.metaSt().quests;
  if (isMax) q[field] = Math.max(q[field] || 0, val);
  else q[field] = (q[field] || 0) + val;
  A.saveProgress();
};
A.recordTimeMetric = function (missionId, qHtml, sec, ok) {
  const mt = A.metricsSt();
  const td = todayStr();
  const clamped = Math.max(0.2, Math.min(180, sec));
  mt.totalSec = Math.round((mt.totalSec || 0) + clamped);
  mt.daily[td] = Math.round((mt.daily[td] || 0) + clamped);

  mt.questions.count = (mt.questions.count || 0) + 1;
  mt.questions.totalSec = Math.round(((mt.questions.totalSec || 0) + clamped) * 10) / 10;

  const isImpulsive = !ok && clamped < 2.0;
  const isStuck = clamped > 25.0;
  if (isImpulsive) mt.questions.impulsiveCount = (mt.questions.impulsiveCount || 0) + 1;
  if (isStuck) mt.questions.stuckCount = (mt.questions.stuckCount || 0) + 1;

  if (missionId) {
    if (!mt.missions[missionId]) mt.missions[missionId] = { timeSec: 0, qCount: 0, impulsive: 0, stuck: 0 };
    const mm = mt.missions[missionId];
    mm.timeSec = Math.round((mm.timeSec || 0) + clamped);
    mm.qCount = (mm.qCount || 0) + 1;
    if (isImpulsive) mm.impulsive = (mm.impulsive || 0) + 1;
    if (isStuck) mm.stuck = (mm.stuck || 0) + 1;
  }

  if (isImpulsive || isStuck) {
    const mMeta = missionId ? A.getMeta(missionId) : null;
    mt.alerts.push({
      type: isImpulsive ? 'impulsive' : 'stuck',
      sec: Math.round(clamped * 10) / 10,
      q: A.stripHtml(qHtml || '').slice(0, 75),
      missionTitle: mMeta ? mMeta.title : 'Práctica',
      d: new Date().toISOString()
    });
    if (mt.alerts.length > 25) mt.alerts = mt.alerts.slice(-25);
  }
};
A.recordExamResult = function (title, subject, nota, ft, total) {
  const m = A.metaSt();
  m.exams.push({ title, subject, nota, ft, total, d: new Date().toISOString() });
  if (m.exams.length > 25) m.exams = m.exams.slice(-25);
  A.saveProgress();
};
A.recordFail = function (missionId, ex, correctStr) {
  const c = window.app && window.app.curr;
  if (!c) return;
  const meta = A.getMeta(missionId);
  const subShort = meta ? A.subjectOf(meta.subject).short : 'General';
  const qClean = A.stripHtml(ex.q || 'Pregunta');
  const corrClean = A.stripHtml(correctStr || '');

  if (!Array.isArray(c.fails)) c.fails = [];
  const label = `[${subShort} · ${meta ? meta.title : 'Misión'}] ${qClean.slice(0, 85)}`;
  if (!c.fails.some(f => f && f.q === label)) {
    c.fails.push({ q: label, ans: 'Fallo en lección', expected: corrClean.slice(0, 70), d: new Date().toISOString() });
    if (c.fails.length > 40) c.fails = c.fails.slice(-40);
  }

  if (ex.src && ex.src.t !== 'gen') {
    const inbox = A.metaSt().inbox;
    const key = missionId + '|' + qClean;
    if (!inbox.some(it => it.key === key)) {
      inbox.push({ key, missionId, ex: ex.src, t: Date.now() });
      if (inbox.length > 30) inbox.shift();
    }
  }
  A.saveProgress();
};
A.removeInboxKey = function (key) {
  const m = A.metaSt();
  m.inbox = m.inbox.filter(it => it.key !== key);
  A.saveProgress();
};

A.ms = function (id) {
  const s = A.st();
  if (!s[id]) s[id] = { s: [0, 0, 0], b: 0, stars: [0, 0, 0, 0] };
  return s[id];
};
A.nodeDone = (id, k) => { const m = A.ms(id); return k < 3 ? !!m.s[k] : !!m.b; };
A.missionDone = id => [0, 1, 2, 3].every(k => A.nodeDone(id, k));
A.missionProgress = id => [0, 1, 2, 3].filter(k => A.nodeDone(id, k)).length;
A.missionStars = id => (A.ms(id).stars || [0, 0, 0, 0]).reduce((a, b) => a + (b || 0), 0);
A.unlocked = function (id, k) {
  if (k > 0) return A.nodeDone(id, k - 1);
  const m = A.getMeta(id), list = A.missionsOf(m.subject), mi = list.findIndex(x => x.id === id);
  if (mi === 0) return true;
  return A.missionDone(list[mi - 1].id);
};
A.hasContent = id => !!(A.content[id] && A.content[id].stations && A.content[id].stations.length === 3);

/* ---------- sincronización en la nube (progress + metrics) ---------- */
A.buildCloudPayload = function () {
  const c = window.app && window.app.curr;
  if (!c) return null;
  return {
    progress: {
      adv: c.adv || {},
      advMeta: A.metaSt(),
      fails: (c.fails || []).slice(-40),
      history: (c.history || []).slice(-60)
    },
    metrics: A.metricsSt()
  };
};
A.saveProgress = function () {
  if (!window.app) return;
  window.app.save();
  try {
    const u = window.app.cloudUser;
    if (!u || window.app.impersonating || typeof sb === 'undefined' || !sb) return;
    if (!('progress' in u) && !('metrics' in u)) return;
    const payload = A.buildCloudPayload();
    if (!payload) return;
    if (window.LaraSec && typeof window.LaraSec.saveStudentProgress === 'function') {
      u.progress = payload.progress;
      u.metrics = payload.metrics;
      window.LaraSec.saveStudentProgress(u.id, {
        adv: payload.progress.adv,
        adv_meta: payload.progress.advMeta,
        fails: payload.progress.fails,
        metrics: payload.metrics,
      }).catch(() => {});
      return;
    }
    const upd = {};
    if ('progress' in u) { u.progress = payload.progress; upd.progress = payload.progress; }
    if ('metrics' in u) { u.metrics = payload.metrics; upd.metrics = payload.metrics; }
    if (Object.keys(upd).length) {
      sb.from('profiles').update(upd).eq('id', u.id).then(() => {});
    }
  } catch (e) {}
};
A.mergeProgress = function (local, cloud) {
  // Soporta tanto el formato antiguo {1:{s,b,stars}} como el nuevo {adv, advMeta, fails, history}
  const cAdv = (cloud && cloud.adv) ? cloud.adv : (cloud || {});
  const out = JSON.parse(JSON.stringify(local || {}));
  Object.keys(cAdv).forEach(id => {
    if (!/^\d+$/.test(id)) return;
    const c = cAdv[id], l = out[id] || { s: [0, 0, 0], b: 0, stars: [0, 0, 0, 0] };
    for (let k = 0; k < 3; k++) { l.s[k] = (l.s[k] || (c.s && c.s[k])) ? 1 : 0; }
    l.b = (l.b || c.b) ? 1 : 0;
    for (let k = 0; k < 4; k++) l.stars[k] = Math.max(l.stars[k] || 0, (c.stars && c.stars[k]) || 0);
    out[id] = l;
  });
  return out;
};
A.applyCloudProfile = function (profile) {
  if (!window.app || !window.app.curr || !profile) return;
  const curr = window.app.curr;
  if (profile.progress && typeof profile.progress === 'object') {
    curr.adv = A.mergeProgress(curr.adv, profile.progress);
    if (profile.progress.advMeta) {
      const cm = profile.progress.advMeta;
      const lm = A.metaSt();
      if (Array.isArray(cm.exams) && cm.exams.length >= (lm.exams || []).length) lm.exams = cm.exams;
      if (Array.isArray(cm.inbox) && cm.inbox.length > 0 && lm.inbox.length === 0) lm.inbox = cm.inbox;
      if (cm.quests && cm.quests.date === todayStr()) {
        lm.quests.lessons = Math.max(lm.quests.lessons || 0, cm.quests.lessons || 0);
        lm.quests.maxCombo = Math.max(lm.quests.maxCombo || 0, cm.quests.maxCombo || 0);
        lm.quests.sprints = Math.max(lm.quests.sprints || 0, cm.quests.sprints || 0);
        lm.quests.chest = !!(lm.quests.chest || cm.quests.chest);
      }
      if (cm.lastDate === todayStr() && typeof cm.hearts === 'number') lm.hearts = cm.hearts;
    }
    if (Array.isArray(profile.progress.fails) && profile.progress.fails.length > (curr.fails || []).length) {
      curr.fails = profile.progress.fails;
    }
  }
  if (profile.metrics && typeof profile.metrics === 'object' && (profile.metrics.totalSec || 0) > ((curr.metrics && curr.metrics.totalSec) || 0)) {
    curr.metrics = profile.metrics;
  }
  window.app.save();
};
A.xpSplit = function (id) {
  const xp = A.getMeta(id).xp, st = Math.round(xp * 0.2);
  return [st, st, st, xp - 3 * st];
};

/* =========================================================
   MOTOR DE AUDIO CÁLIDO + SELECTOR DE VOZ NEURONAL
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

function playNote(freq, dur, when, vol, brightness) {
  const ctx = getAudio();
  if (!ctx || !masterBus) return;
  const t0 = ctx.currentTime + (when || 0);
  const v = vol || 0.22;

  const o1 = ctx.createOscillator(), g1 = ctx.createGain();
  o1.type = 'sine';
  o1.frequency.setValueAtTime(freq, t0);
  g1.gain.setValueAtTime(0.0001, t0);
  g1.gain.linearRampToValueAtTime(v, t0 + 0.008);
  g1.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o1.connect(g1); g1.connect(masterBus);
  o1.start(t0); o1.stop(t0 + dur + 0.02);

  const o2 = ctx.createOscillator(), g2 = ctx.createGain();
  o2.type = 'triangle';
  o2.frequency.setValueAtTime(freq * (brightness || 2), t0);
  g2.gain.setValueAtTime(0.0001, t0);
  g2.gain.linearRampToValueAtTime(v * 0.28, t0 + 0.005);
  g2.gain.exponentialRampToValueAtTime(0.0001, t0 + dur * 0.55);
  o2.connect(g2); g2.connect(masterBus);
  o2.start(t0); o2.stop(t0 + dur * 0.6 + 0.02);

  const o3 = ctx.createOscillator(), g3 = ctx.createGain();
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
  slide() { playNote(523.25, 0.12, 0, 0.08, 1.5); },
  ok(combo) {
    const shift = Math.pow(2, Math.min((combo || 1) - 1, 6) / 12);
    playNote(587.33 * shift, 0.22, 0,     0.22, 2);
    playNote(880.00 * shift, 0.42, 0.085, 0.26, 2);
    if ((combo || 0) >= 3) playNote(1174.66 * shift, 0.45, 0.16, 0.20, 2);
  },
  err() {
    playNote(311.13, 0.22, 0,    0.18, 1);
    playNote(233.08, 0.36, 0.11, 0.20, 1);
  },
  heartBreak() {
    playNote(349.23, 0.18, 0,    0.20, 1);
    playNote(261.63, 0.22, 0.09, 0.20, 1);
    playNote(196.00, 0.35, 0.18, 0.22, 1);
  },
  heal() {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => playNote(f, 0.28, i * 0.07, 0.22, 2));
  },
  star(idx) {
    const notes = [659.25, 783.99, 1046.50];
    playNote(notes[idx % 3], 0.38, 0, 0.25, 2);
  },
  done() {
    const mel = [
      [523.25, 0.18, 0.00],
      [659.25, 0.18, 0.10],
      [783.99, 0.18, 0.20],
      [1046.5, 0.55, 0.30],
      [783.99, 0.18, 0.30],
      [659.25, 0.45, 0.30]
    ];
    mel.forEach(([f, d, w]) => playNote(f, d, w, 0.20, 2));
  }
};

window.sfx = {
  ok: () => A.sfx.ok(1),
  err: () => A.sfx.err(),
  lvl: () => A.sfx.done()
};

function pickBestSpanishVoice() {
  if (!('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices() || [];
  const esVoices = voices.filter(v => /^es/i.test(v.lang));
  if (!esVoices.length) return null;
  const score = v => {
    let s = 0;
    const n = (v.name || '').toLowerCase();
    if (/es[-_]es/i.test(v.lang)) s += 10;
    if (n.includes('natural') || n.includes('neural') || n.includes('online')) s += 30;
    if (n.includes('elvira') || n.includes('álvaro') || n.includes('alvaro')) s += 25;
    if (n.includes('google')) s += 20;
    if (n.includes('enhanced') || n.includes('premium') || n.includes('mejorada') || n.includes('siri')) s += 24;
    if (n.includes('mónica') || n.includes('monica') || n.includes('luciana') || n.includes('marisol')) s += 12;
    return s;
  };
  return esVoices.slice().sort((a, b) => score(b) - score(a))[0];
}
if ('speechSynthesis' in window && window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = () => pickBestSpanishVoice();
}

let curAudioEl = null;
A.stopAudio = function () {
  if (curAudioEl) { try { curAudioEl.pause(); curAudioEl.currentTime = 0; } catch (e) {} curAudioEl = null; }
  try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (e) {}
};
A.speak = function (html, audioPath) {
  A.stopAudio();
  if (audioPath) {
    try {
      const a = new Audio(audioPath);
      curAudioEl = a;
      a.onerror = () => A.speak(html, null);
      a.play().catch(() => A.speak(html, null));
      return;
    } catch (e) {}
  }
  try {
    if (!('speechSynthesis' in window)) return;
    const u = new SpeechSynthesisUtterance(A.stripHtml(html));
    const best = pickBestSpanishVoice();
    if (best) u.voice = best;
    u.lang = best ? best.lang : 'es-ES';
    u.rate = 0.96; u.pitch = 1.02;
    window.speechSynthesis.speak(u);
  } catch (e) {}
};

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
function lumiSvg(mood, size) {
  const sz = size || 74;
  const isHappy = mood === 'happy' || mood === 'fire';
  const isSad = mood === 'sad';
  const isFire = mood === 'fire';
  const bodyCol = isFire ? '#f59e0b' : (isSad ? '#6366f1' : '#8b5cf6');
  const bellyCol = isFire ? '#fef3c7' : '#ede9fe';
  return `
  <svg class="adv-lumi-svg mood-${mood || 'idle'}" viewBox="0 0 120 120" width="${sz}" height="${sz}" aria-hidden="true">
    <defs>
      <radialGradient id="lumiGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${bodyCol}" stop-opacity="0.45"/>
        <stop offset="100%" stop-color="${bodyCol}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="60" cy="64" r="54" fill="url(#lumiGlow)"/>
    ${isFire ? `<path class="lumi-flame" d="M60 6 C72 22, 88 26, 82 44 C78 54, 42 54, 38 44 C32 26, 48 22, 60 6 Z" fill="#fbbf24" opacity="0.85"/>` : ''}
    <ellipse cx="60" cy="108" rx="28" ry="6" fill="rgba(0,0,0,0.35)"/>
    <g class="lumi-body">
      <path d="M32 34 L22 18 L44 28 Z" fill="${bodyCol}"/>
      <path d="M88 34 L98 18 L76 28 Z" fill="${bodyCol}"/>
      <rect x="24" y="24" width="72" height="74" rx="34" fill="${bodyCol}"/>
      <ellipse cx="60" cy="72" rx="23" ry="20" fill="${bellyCol}"/>
      <path d="M50 66 Q60 72 70 66" stroke="${bodyCol}" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.45"/>
      <path d="M53 75 Q60 80 67 75" stroke="${bodyCol}" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.45"/>
      <path class="lumi-wing-l" d="M24 52 C12 56, 12 78, 26 82 Z" fill="#6d28d9"/>
      <path class="lumi-wing-r" d="M96 52 C108 56, 108 78, 94 82 Z" fill="#6d28d9"/>
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
      <ellipse cx="31" cy="58" rx="5.5" ry="3" fill="#f472b6" opacity="${isHappy ? 0.85 : 0.45}"/>
      <ellipse cx="89" cy="58" rx="5.5" ry="3" fill="#f472b6" opacity="${isHappy ? 0.85 : 0.45}"/>
      <polygon points="55,53 65,53 60,61" fill="#fbbf24"/>
      <ellipse cx="47" cy="99" rx="7" ry="4" fill="#fbbf24"/>
      <ellipse cx="73" cy="99" rx="7" ry="4" fill="#fbbf24"/>
    </g>
    ${isHappy ? `<text x="14" y="26" font-size="16" class="lumi-star">✨</text><text x="94" y="24" font-size="15" class="lumi-star">⭐</text>` : ''}
  </svg>`;
}
A.lumiSvg = lumiSvg;

function heartsHtml(n) {
  let s = '';
  for (let i = 0; i < A.MAX_HEARTS; i++) {
    s += `<span class="adv-heart ${i < n ? 'on' : 'off'}">${i < n ? '❤️' : '🖤'}</span>`;
  }
  return s;
}

/* ---------- CSS ---------- */
function ensureCss() {
  if (document.getElementById('adv-css')) return;
  const s = document.createElement('style'); s.id = 'adv-css';
  s.textContent = `
.adv-frac{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.1;margin:0 .15em;font-weight:800}
.adv-frac>span:first-child{border-bottom:2px solid currentColor;padding:0 .25em .08em}
.adv-frac>span:last-child{padding:.08em .25em 0}
.adv-tabs{display:flex;gap:.6rem;overflow-x:auto;padding:.2rem .1rem .6rem}
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

.adv-topbar-tools{display:flex;align-items:center;gap:.65rem;flex-wrap:wrap}
.adv-hearts-pill{display:inline-flex;align-items:center;gap:.35rem;background:rgba(239,68,68,.12);border:2px solid rgba(239,68,68,.35);border-radius:99px;padding:.4rem .85rem;font-weight:800;font-size:.9rem}
.adv-heart{display:inline-block;transition:transform .25s cubic-bezier(.34,1.56,.64,1)}
.adv-heart.off{opacity:.38;transform:scale(.85)}
.adv-hearts-pill.shake{animation:advShake .42s ease}
.adv-tool-btn{border:2px solid rgba(255,255,255,.22);border-bottom-width:4px;border-radius:16px;padding:.48rem .9rem;font-weight:800;font-size:.82rem;color:#fff;cursor:pointer;display:inline-flex;align-items:center;gap:.4rem;transition:transform .15s}
.adv-tool-btn:hover{transform:translateY(-2px)}
.adv-tool-btn:active{transform:translateY(2px)}
.adv-tool-btn.recharge{background:linear-gradient(135deg,#ec4899,#8b5cf6);border-color:rgba(244,114,182,.5)}
.adv-tool-btn.inbox{background:rgba(245,158,11,.18);border-color:rgba(245,158,11,.45);color:#fde68a}
.adv-tool-btn.exam{background:linear-gradient(135deg,#06b6d4,#3b82f6);border-color:rgba(56,189,248,.5)}

.adv-ov{position:fixed;inset:0;height:100vh;height:100dvh;z-index:900;background:radial-gradient(circle at 50% 0,#1e1b4b 0,#070b14 72%);display:none;flex-direction:column}
.adv-top{display:flex;align-items:center;gap:.8rem;padding:calc(.9rem + env(safe-area-inset-top)) 1.2rem .6rem;max-width:760px;width:100%;margin:0 auto}
.adv-x{background:rgba(255,255,255,.06);border:none;color:#94a3b8;font-size:1.3rem;cursor:pointer;width:40px;height:40px;border-radius:12px;transition:.15s;flex-shrink:0}
.adv-x:hover{background:rgba(255,255,255,.14);color:#fff;transform:scale(1.06)}
.adv-bar{flex:1;height:18px;background:rgba(255,255,255,.1);border-radius:99px;overflow:hidden;position:relative;padding:3px}
.adv-bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--c,#8b5cf6),color-mix(in srgb,var(--c,#8b5cf6) 75%,#fff));border-radius:99px;transition:width .55s cubic-bezier(.34,1.56,.64,1);position:relative;box-shadow:0 0 16px color-mix(in srgb,var(--c,#8b5cf6) 65%,transparent)}
.adv-bar i::after{content:'';position:absolute;top:2px;left:8px;right:8px;height:4px;background:rgba(255,255,255,.38);border-radius:99px}
.adv-bar.fire i{background:linear-gradient(90deg,#f59e0b,#ef4444,#fbbf24);box-shadow:0 0 20px rgba(251,191,36,.7)}
.adv-combo{font-weight:900;color:#fbbf24;text-align:right;font-size:.95rem;transition:transform .25s cubic-bezier(.34,1.56,.64,1);white-space:nowrap}
.adv-combo.pop{animation:advComboPop .45s cubic-bezier(.34,1.56,.64,1)}
@keyframes advComboPop{0%{transform:scale(.6)}50%{transform:scale(1.35)}100%{transform:scale(1)}}

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

.adv-body{flex:1;overflow-y:auto;padding:.8rem 1.2rem 1.2rem;max-width:760px;width:100%;margin:0 auto;-webkit-overflow-scrolling:touch}
.adv-stage-enter{animation:advStageIn .36s cubic-bezier(.22,1,.36,1)}
@keyframes advStageIn{from{opacity:0;transform:translateX(28px) scale(.98)}to{opacity:1;transform:translateX(0) scale(1)}}
@keyframes advSlideIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
.adv-tag{display:inline-block;font-size:.72rem;font-weight:800;padding:.24rem .75rem;border-radius:99px;background:rgba(251,191,36,.16);color:#fbbf24;border:1px solid rgba(251,191,36,.35);margin-bottom:.7rem}
.adv-q{font-size:clamp(1.22rem,3.5vw,1.62rem);font-weight:800;line-height:1.48;margin-bottom:1.15rem}
.adv-hint-box{background:rgba(251,191,36,.12);border:1px solid rgba(251,191,36,.4);border-radius:16px;padding:.75rem 1rem;margin-bottom:1rem;font-size:.92rem;line-height:1.5;color:#fde68a;display:none;animation:advSlideIn .25s ease}
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

.adv-pill{background:var(--glass);border:1px solid var(--glass-border);border-radius:26px;padding:1.6rem;text-align:left;animation:advStageIn .38s cubic-bezier(.22,1,.36,1)}
.adv-pill .em{font-size:3rem;display:inline-block;margin-bottom:.4rem;animation:advBob 2s ease-in-out infinite}
.adv-pill h2{font-size:1.5rem;margin-bottom:.7rem;color:#fbbf24}
.adv-pill p{font-size:1.12rem;line-height:1.75;opacity:.95}
.adv-res{text-align:center;padding-top:1rem;animation:advStageIn .45s cubic-bezier(.22,1,.36,1)}
.adv-res h2{font-size:2rem;margin:.4rem 0;font-weight:900}
.adv-res .st{font-size:3.2rem;letter-spacing:8px;margin:.7rem 0;min-height:3.8rem}
.adv-star-pop{display:inline-block;opacity:0;transform:scale(0) rotate(-25deg);transition:transform .42s cubic-bezier(.34,1.56,.64,1),opacity .25s}
.adv-star-pop.on{opacity:1;transform:scale(1) rotate(0)}
.adv-res .stat{display:inline-block;background:var(--glass);border:2px solid var(--glass-border);border-radius:18px;padding:.75rem 1.3rem;margin:.35rem;font-weight:800;font-size:1.05rem}
.adv-grade-circle{width:130px;height:130px;border-radius:50%;margin:.6rem auto;display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:900;border:6px solid var(--c,#10b981);background:rgba(255,255,255,.04);box-shadow:0 0 30px color-mix(in srgb,var(--c,#10b981) 40%,transparent)}
.adv-grade-circle .num{font-size:2.4rem;line-height:1}
.adv-grade-circle .lbl{font-size:.75rem;opacity:.8;margin-top:4px}

.adv-sprint-ov{position:fixed;inset:0;height:100vh;height:100dvh;z-index:1100;background: rgba(7,11,20,.92);backdrop-filter:blur(14px);display:none;align-items:center;justify-content:center;padding:1rem;overflow-y:auto}
.adv-sprint-card{background:linear-gradient(145deg,#1e1b4b,#0f172a);border:2px solid rgba(236,72,153,.45);border-radius:28px;padding:1.6rem;width:100%;max-width:440px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.65);animation:advPopGood .35s cubic-bezier(.34,1.56,.64,1)}
.adv-sprint-op{font-size:3.4rem;font-weight:900;margin:.6rem 0;color:#fff;letter-spacing:2px}
.adv-sprint-dots{display:flex;justify-content:center;gap:.45rem;margin:.6rem 0}
.adv-sprint-dot{width:14px;height:14px;border-radius:50%;background:rgba(255,255,255,.15);transition:.2s}
.adv-sprint-dot.ok{background:#10b981;box-shadow:0 0 10px #10b981;transform:scale(1.15)}

.adv-float-xp{position:fixed;z-index:2000;pointer-events:none;font-weight:900;font-size:1.35rem;color:#fbbf24;text-shadow:0 4px 14px rgba(0,0,0,.65);transform:translate(-50%,-50%);animation:advFloatUp 1.05s cubic-bezier(.22,1,.36,1) forwards}
@keyframes advFloatUp{0%{opacity:0;transform:translate(-50%,0) scale(.6)}25%{opacity:1;transform:translate(-50%,-18px) scale(1.15)}100%{opacity:0;transform:translate(-50%,-70px) scale(.95)}}

.adv-quest-row{display:flex;align-items:center;gap:.9rem;background:rgba(255,255,255,.03);border:1px solid var(--glass-border);border-radius:16px;padding:.75rem 1rem;margin-bottom:.6rem}
.adv-quest-bar{height:10px;background:rgba(255,255,255,.08);border-radius:99px;overflow:hidden;margin-top:.35rem}
.adv-quest-bar i{display:block;height:100%;background:linear-gradient(90deg,#10b981,#34d399);border-radius:99px;transition:width .4s}
.adv-trophy-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:.75rem;margin-top:.8rem}
.adv-trophy{background:rgba(255,255,255,.03);border:2px solid var(--glass-border);border-radius:18px;padding:.85rem;text-align:center;transition:.2s;cursor:pointer}
.adv-trophy.won{background:linear-gradient(145deg,rgba(251,191,36,.16),rgba(139,92,246,.12));border-color:#fbbf24;box-shadow:0 6px 18px rgba(251,191,36,.15)}
.adv-trophy.lock{opacity:.48;filter:grayscale(.9)}
.adv-trophy:hover{transform:translateY(-3px)}

.adv-libcard{background:var(--glass);border:1px solid var(--glass-border);border-radius:20px;padding:1.1rem 1.2rem;cursor:pointer;transition:.2s;display:flex;gap:1rem;align-items:center}
.adv-libcard:hover{border-color:var(--c);background:var(--glass-strong);transform:translateY(-3px)}
.adv-libcard .n{width:44px;height:44px;border-radius:14px;background:var(--c);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.2rem;flex-shrink:0}
.adv-libcard h4{font-size:1.05rem;margin-bottom:.15rem}
.adv-libcard small{opacity:.65;font-size:.78rem;line-height:1.35;display:block}
.adv-liblist{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(280px,100%),1fr));gap:.9rem}
.adv-act{background:var(--glass);border:2px solid var(--glass-border);border-bottom-width:5px;border-radius:16px;padding:.9rem 1.1rem;color:#fff;font-weight:700;text-align:left;cursor:pointer;width:100%;font-size:1rem;transition:transform .14s,border-color .15s}
.adv-act:hover{border-color:var(--c);transform:translateY(-2px)}
.adv-sum{background:var(--glass);border-left:5px solid var(--c);border-radius:14px;padding:1rem 1.2rem;margin-bottom:.8rem}
.adv-sum b.t{display:block;color:#fbbf24;margin-bottom:.25rem}
.adv-example-box{background:rgba(16,185,129,.08);border:1px solid rgba(16,185,129,.35);border-radius:18px;padding:1.1rem 1.2rem;margin-bottom:1.2rem}
.adv-rec-banner{background:linear-gradient(135deg,rgba(236,72,153,.22),rgba(245,158,11,.18));border:2px solid #f472b6;border-radius:22px;padding:1.1rem 1.3rem;margin-bottom:1rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;box-shadow:0 8px 25px rgba(236,72,153,.2)}
@media(max-width:860px){.adv-grid2{grid-template-columns:1fr}.adv-cols{gap:.6rem}.adv-node{width:72px;height:72px}.adv-banner{margin-top:1.2rem}.adv-tabs{display:grid;grid-template-columns:repeat(2,1fr);gap:.45rem}.adv-tab{min-width:0;padding:.55rem .4rem;font-size:.88rem}}
@media(max-width:520px){.adv-cols{grid-template-columns:1fr}.adv-pill{padding:1.1rem}.adv-trophy-grid{grid-template-columns:repeat(2,1fr)}.adv-mascot-row{gap:.65rem}}
@media(max-height:620px){.adv-q{margin-bottom:.7rem}.adv-body{padding:.5rem 1rem}}
`;
  document.head.appendChild(s);
}

/* ---------- preparación de ejercicios ---------- */
function prepare(src, rev, missionId) {
  let e = src;
  if (e.t === 'gen') e = e.f();
  const p = Object.assign({}, e, { src: src, rev: !!rev, missionId: missionId || e.missionId });
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
  return c.stations.map(s => (s.ex || []).map(x => Object.assign({}, x, { missionId: id })));
}
function sampleFrom(pools, n, defaultMissionId) {
  const used = new Set(), out = [];
  const flat = [];
  pools.forEach((pl, pi) => A.shuffle(pl).forEach(e => flat.push({ e, pi })));
  const per = Math.max(1, Math.ceil(n / Math.max(1, pools.length)));
  const taken = new Array(pools.length).fill(0);
  const tryAdd = (e) => {
    for (let k = 0; k < (e.t === 'gen' ? 6 : 1); k++) {
      const p = prepare(e, false, e.missionId || defaultMissionId);
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
    const p = prepare(src, true, mm.id); const k = qKey(p);
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

/* =========================================================
   ⚡ RETO RELÁMPAGO DE CÁLCULO (PARA RECARGAR VIDAS ❤️)
   ========================================================= */
let SP = null;
function ensureSprintModal() {
  ensureCss();
  if (document.getElementById('adv-sprint')) return;
  const d = el('div', 'adv-sprint-ov'); d.id = 'adv-sprint';
  d.innerHTML = `<div class="adv-sprint-card" id="adv-sprint-card"></div>`;
  document.body.appendChild(d);
}
function genSprintOps(count) {
  const ops = [];
  for (let i = 0; i < count; i++) {
    const kind = A.rnd(1, 10);
    if (kind <= 6) {
      const a = A.rnd(2, 9), b = A.rnd(2, 9);
      ops.push({ q: `${a} × ${b}`, a: a * b });
    } else if (kind <= 8) {
      const a = A.rnd(3, 9), b = A.rnd(3, 9);
      ops.push({ q: `${a} + ${b}`, a: a + b });
    } else {
      const b = A.rnd(2, 8), a = b + A.rnd(2, 9);
      ops.push({ q: `${a} − ${b}`, a: a - b });
    }
  }
  return ops;
}
A.openHeartSprint = function (onDoneCallback) {
  ensureSprintModal();
  getAudio();
  const modal = document.getElementById('adv-sprint');
  const card = document.getElementById('adv-sprint-card');
  modal.style.display = 'flex';
  if (SP && SP.timer) clearInterval(SP.timer);

  card.innerHTML = `
    <div style="display:flex;justify-content:center">${lumiSvg('fire', 72)}</div>
    <h2 style="font-size:1.55rem;font-weight:900;margin:.3rem 0">⚡ Reto Relámpago de Vidas</h2>
    <p style="font-size:.9rem;opacity:.85;line-height:1.45;margin-bottom:1rem">Resuelve <b>6 operaciones de 1 cifra</b> en menos de <b>25 segundos</b> para recargar <b>+3 ❤️</b> (y ganar +15 XP).</p>
    <div style="margin-bottom:1.2rem;font-size:1.2rem">${heartsHtml(A.hearts())}</div>
    <div style="display:flex;gap:.6rem">
      <button class="adv-main" style="background:linear-gradient(135deg,#ec4899,#8b5cf6)" id="adv-sprint-go">🚀 ¡Empezar Reto (25s)!</button>
      <button class="adv-main" style="background:#334155;width:auto;padding:1rem 1.2rem" id="adv-sprint-cancel">Cerrar</button>
    </div>`;
  document.getElementById('adv-sprint-cancel').onclick = () => {
    modal.style.display = 'none';
    if (onDoneCallback) onDoneCallback(false);
  };
  document.getElementById('adv-sprint-go').onclick = () => runSprintGame(onDoneCallback);
};

function runSprintGame(onDoneCallback) {
  const card = document.getElementById('adv-sprint-card');
  const ops = genSprintOps(6);
  SP = { ops, idx: 0, val: '', timeLeft: 25, timer: null, cb: onDoneCallback };

  function renderPlay() {
    const cur = SP.ops[SP.idx];
    const dots = SP.ops.map((_, i) => `<span class="adv-sprint-dot ${i < SP.idx ? 'ok' : ''}"></span>`).join('');
    card.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.4rem">
        <span style="font-weight:800;font-size:.85rem;opacity:.75">Operación ${SP.idx + 1} de ${SP.ops.length}</span>
        <span id="adv-sprint-time" style="font-weight:900;font-size:1.1rem;color:#fbbf24">⏱️ ${SP.timeLeft}s</span>
      </div>
      <div class="adv-sprint-dots">${dots}</div>
      <div class="adv-sprint-op">${cur.q} = <span id="adv-sprint-val" style="color:#38bdf8;border-bottom:3px solid #38bdf8;padding:0 .3rem">${SP.val || '?'}</span></div>
      <div class="adv-pad" style="margin-top:.8rem">
        ${['1','2','3','4','5','6','7','8','9','0','⌫'].map(k => `<button data-k="${k}" style="${k==='0'?'grid-column:span 2':''}">${k}</button>`).join('')}
      </div>`;
    card.querySelectorAll('.adv-pad button').forEach(b => {
      b.onclick = () => {
        const k = b.dataset.k;
        A.sfx.tap();
        if (k === '⌫') SP.val = SP.val.slice(0, -1);
        else if (SP.val.length < 3) SP.val += k;
        const vEl = document.getElementById('adv-sprint-val');
        if (vEl) vEl.textContent = SP.val || '?';
        const expected = String(cur.a);
        if (SP.val === expected) {
          A.sfx.ok(SP.idx + 1);
          A.burstAt(vEl, '✨');
          SP.idx++;
          SP.val = '';
          if (SP.idx >= SP.ops.length) finishSprint(true);
          else renderPlay();
        } else if (SP.val.length >= expected.length) {
          A.sfx.err();
          SP.val = '';
          if (vEl) { vEl.textContent = '✗'; vEl.style.color = '#ef4444'; setTimeout(() => { if (vEl) { vEl.textContent = '?'; vEl.style.color = '#38bdf8'; } }, 280); }
        }
      };
    });
  }

  renderPlay();
  SP.timer = setInterval(() => {
    SP.timeLeft--;
    const tEl = document.getElementById('adv-sprint-time');
    if (tEl) {
      tEl.textContent = `⏱️ ${SP.timeLeft}s`;
      if (SP.timeLeft <= 7) tEl.style.color = '#ef4444';
    }
    if (SP.timeLeft <= 0) finishSprint(false);
  }, 1000);
}

function finishSprint(won) {
  if (SP && SP.timer) { clearInterval(SP.timer); SP.timer = null; }
  const modal = document.getElementById('adv-sprint');
  const card = document.getElementById('adv-sprint-card');
  const cb = SP && SP.cb;
  if (won) {
    A.addHearts(3);
    A.recordQuest('sprints', 1, false);
    if (window.app) window.app.addXP(15);
    A.sfx.heal();
    A.confetti();
    card.innerHTML = `
      <div style="display:flex;justify-content:center">${lumiSvg('fire', 80)}</div>
      <h2 style="font-size:1.7rem;font-weight:900;color:#34d399;margin:.4rem 0">¡Vidas Recargadas! ❤️</h2>
      <div style="font-size:1.4rem;margin:.6rem 0">${heartsHtml(A.hearts())}</div>
      <p style="opacity:.9;margin-bottom:1.2rem">¡6 de 6 a toda velocidad! Has recuperado corazones y ganado <b>+15 XP</b>.</p>
      <button class="adv-main" style="background:#10b981" id="adv-sprint-done">¡Seguir jugando!</button>`;
    document.getElementById('adv-sprint-done').onclick = () => {
      modal.style.display = 'none';
      A.updateTopHearts();
      if (cb) cb(true);
    };
  } else {
    A.sfx.err();
    card.innerHTML = `
      <div style="display:flex;justify-content:center">${lumiSvg('sad', 74)}</div>
      <h2 style="font-size:1.5rem;font-weight:900;color:#fca5a5;margin:.4rem 0">¡Tiempo agotado! ⏱️</h2>
      <p style="opacity:.85;margin-bottom:1.2rem">¡Por poquito! Inténtalo otra vez para recuperar tus corazones.</p>
      <div style="display:flex;gap:.6rem">
        <button class="adv-main" id="adv-sprint-retry">🔄 Reintentar (25s)</button>
        <button class="adv-main" style="background:#334155;width:auto;padding:1rem 1.2rem" id="adv-sprint-exit">Salir</button>
      </div>`;
    document.getElementById('adv-sprint-retry').onclick = () => runSprintGame(cb);
    document.getElementById('adv-sprint-exit').onclick = () => { modal.style.display = 'none'; if (cb) cb(false); };
  }
}

/* ---------- pista contextual para ejercicios ---------- */
function getHintText(e) {
  if (e.hint) return e.hint;
  if (e.missionId && A.hasContent(e.missionId)) {
    const sts = A.content[e.missionId].stations;
    const pills = sts.flatMap(s => s.intro || []);
    if (pills.length) {
      const p = pills[Math.floor(Math.random() * pills.length)];
      return `<b>Recuerda (${p.h}):</b> ${p.p}`;
    }
  }
  return 'Lee el enunciado despacio, fija el dato clave y descarta primero las opciones que no encajen.';
}

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
    <div class="adv-top">
      <button class="adv-x" id="adv-x" aria-label="Salir">✕</button>
      <div class="adv-bar" id="adv-bar"><i id="adv-barfill"></i></div>
      <div id="adv-top-hearts" style="font-size:.9rem;white-space:nowrap"></div>
      <div class="adv-combo" id="adv-combo"></div>
    </div>
    <div class="adv-body"><div id="adv-mascot"></div><div id="adv-stage"></div></div>
    <div class="adv-foot" id="adv-foot"><div class="in"><div id="adv-fb"><div class="adv-fb-row"><div class="adv-fb-ico" id="adv-fb-ico">✓</div><div><h4></h4><p></p></div></div></div><button class="adv-main" id="adv-main">Comprobar</button></div></div>`;
  document.body.appendChild(o);
  document.getElementById('adv-x').onclick = () => {
    if (!S) return;
    if (S.mode === 'result' || confirm('¿Seguro que quieres salir? Perderás el progreso de esta lección.')) closeLesson(false);
  };
  document.getElementById('adv-main').onclick = onMain;
}
A.updateTopHearts = function () {
  const hEl = document.getElementById('adv-top-hearts');
  if (!hEl || !S) return;
  if (S.cfg.useHearts) {
    hEl.innerHTML = `<span class="adv-hearts-pill" id="adv-lesson-hearts" style="padding:.25rem .6rem;font-size:.82rem">${heartsHtml(A.hearts())}</span>`;
  } else if (S.cfg.isExam) {
    hEl.innerHTML = `<span class="adv-chip" style="background:rgba(6,182,212,.2);color:#38bdf8">📝 Examen</span>`;
  } else if (S.cfg.isBattle) {
    hEl.innerHTML = `<span class="adv-chip" style="background:rgba(236,72,153,.2);color:#f472b6">⚔️ Duelo</span>`;
  } else {
    hEl.innerHTML = `<span class="adv-chip">📚 Libre</span>`;
  }
};
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
  if (cfg.useHearts && A.hearts() <= 0) {
    A.openHeartSprint((ok) => { if (ok && A.hearts() > 0) A.runSession(cfg); });
    return;
  }
  S = {
    cfg, queue: cfg.items.slice(), total: cfg.items.length,
    done: 0, ft: 0, wrong: 0, combo: 0, maxCombo: 0,
    mode: '', cur: null, ctl: null, pillIdx: 0, pills: cfg.intro || [],
    failedLog: [], startTime: Date.now(), qStartTime: Date.now()
  };
  document.getElementById('adv-lesson').style.setProperty('--c', cfg.color || '#8b5cf6');
  document.getElementById('adv-combo').textContent = '';
  A.updateTopHearts();
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
  const audioFile = p.audio || (S.cfg.missionId && S.cfg.stationIdx !== undefined ? `assets/audio/m${String(S.cfg.missionId).padStart(2,'0')}_s${S.cfg.stationIdx}_p${i}.mp3` : null);
  const sp = el('button', 'adv-chipbtn', '🔊 Escuchar'); sp.style.marginTop = '1rem'; sp.onclick = () => A.speak(p.h + '. ' + p.p, audioFile); c.appendChild(sp);
  stage.appendChild(c); document.querySelector('.adv-body').scrollTop = 0;
  setMain(i === S.pills.length - 1 ? '¡A practicar!' : 'Siguiente', false);
}
function nextEx() {
  if (!S.queue.length) return finish();
  S.mode = 'ex'; setFoot('');
  S.qStartTime = Date.now();
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
  else if (S.cfg.isExam) stage.appendChild(el('span', 'adv-tag', `📝 Pregunta ${S.done + 1} de ${S.total}`));

  const q = el('div', 'adv-q', e.q);
  const sp = el('button', 'adv-chipbtn', '🔊'); sp.style.cssText = 'padding:.15rem .6rem;margin-left:.6rem;font-size:.9rem;vertical-align:middle'; sp.onclick = () => A.speak(e.q); q.appendChild(sp);
  if (!S.cfg.isExam && !S.cfg.isBattle) {
    const hb = el('button', 'adv-chipbtn', '💡 Pista');
    hb.style.cssText = 'padding:.15rem .65rem;margin-left:.45rem;font-size:.82rem;vertical-align:middle;background:rgba(251,191,36,.15);border-color:rgba(251,191,36,.4);color:#fde68a';
    hb.onclick = () => {
      A.sfx.tap();
      const box = document.getElementById('adv-hint-box');
      if (box) { box.innerHTML = '💡 ' + getHintText(e); box.style.display = box.style.display === 'block' ? 'none' : 'block'; }
    };
    q.appendChild(hb);
  }
  stage.appendChild(q);
  const hintBox = el('div', 'adv-hint-box'); hintBox.id = 'adv-hint-box'; stage.appendChild(hintBox);

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
  if (S.mode === 'nohearts') {
    A.openHeartSprint((ok) => {
      if (ok && A.hearts() > 0) {
        A.updateTopHearts();
        nextEx();
      }
    });
    return;
  }
  if (S.mode === 'fb') { nextEx(); return; }
  if (S.mode === 'result') { closeLesson(true); return; }
}
function resolve(r, e) {
  S.mode = 'fb';
  const ok = r.ok, retry = !!e.retry;
  const elapsed = (Date.now() - (S.qStartTime || Date.now())) / 1000;
  A.recordTimeMetric(e.missionId, e.q, elapsed, ok);

  const f = document.getElementById('adv-fb');
  const ico = document.getElementById('adv-fb-ico');
  if (ok) {
    S.done++; if (!retry) S.ft++; S.combo++;
    if (S.combo > S.maxCombo) S.maxCombo = S.combo;
    A.recordQuest('maxCombo', S.combo, true);
    if (e.inboxKey && !retry) A.removeInboxKey(e.inboxKey);
    A.sfx.ok(S.combo);
    A.burstAt(r.targetEl || document.getElementById('adv-main'), S.combo >= 3 ? `🔥 x${S.combo}` : '✨ ¡Bien!');
    if (ico) ico.textContent = S.combo >= 3 ? '🔥' : '✓';
    const praise = PRAISE[Math.floor(Math.random() * PRAISE.length)];
    f.querySelector('h4').textContent = praise + (S.combo >= 2 ? `  🔥 ¡${S.combo} seguidas!` : '');
    f.querySelector('p').innerHTML = e.why || '';
    setMascot(S.combo >= 3 ? 'fire' : 'happy', S.combo >= 3 ? `¡${S.combo} aciertos seguidos! ¡Estás que te sales! 🔥` : `${praise} ¡Sigue así! 🎉`);
    setFoot('ok');
    setMain('Continuar', false);
  } else {
    S.combo = 0; S.wrong++;
    const rushed = elapsed < 2.0;
    if (!retry) {
      S.failedLog.push({ q: e.q, correct: r.correct, why: e.why });
      if (e.missionId) A.recordFail(e.missionId, e, r.correct);
    }
    if (S.cfg.useHearts) {
      A.sfx.heartBreak();
      const left = A.addHearts(-1);
      A.updateTopHearts();
      const hp = document.getElementById('adv-lesson-hearts');
      if (hp) { hp.classList.remove('shake'); void hp.offsetWidth; hp.classList.add('shake'); }
      if (left <= 0) {
        if (ico) ico.textContent = '💔';
        f.querySelector('h4').textContent = '¡Te has quedado sin corazones! 💔';
        f.querySelector('p').innerHTML = 'Respuesta correcta: <b>' + r.correct + '</b><br>' + (e.why || '') + '<br><b style="color:#fbbf24">⚡ Haz el Reto Relámpago de Cálculo (25s) para recargar +3 ❤️ y seguir aquí mismo.</b>';
        setMascot('sad', '¡Sin vidas! Supera 6 cuentas de 1 cifra en 25s y seguimos donde íbamos 💪');
        setFoot('bad');
        const again = prepare(e.src, e.rev, e.missionId); again.retry = true; S.queue.push(again);
        S.mode = 'nohearts';
        setMain('⚡ Recargar Vidas Ahora (25s)', false);
        return;
      }
    } else {
      A.sfx.err();
    }
    if (ico) ico.textContent = rushed ? '🐢' : '💡';
    f.querySelector('h4').textContent = rushed ? '⚡ ¡Demasiado rápido! Lee con calma:' : 'Respuesta correcta:';
    f.querySelector('p').innerHTML = '<b>' + r.correct + '</b>' + (e.why ? '<br><span style="opacity:.9">' + e.why + '</span>' : '');
    setMascot('sad', rushed ? '¡Ey! Has respondido en menos de 2 segundos 🐢. Lee despacio, ¡que tú sabes hacerlo!' : '¡No pasa nada! Fíjate en la explicación 💡');
    setFoot('bad');
    if (S.cfg.noRetry) { S.done++; } else { const again = prepare(e.src, e.rev, e.missionId); again.retry = true; S.queue.push(again); }
    setMain('Continuar', false);
  }
  const cbEl = document.getElementById('adv-combo');
  cbEl.textContent = S.combo >= 2 ? '🔥 ' + S.combo : '';
  if (S.combo >= 2) { cbEl.classList.remove('pop'); void cbEl.offsetWidth; cbEl.classList.add('pop'); }
  setBar();
}

function finish() {
  S.mode = 'result';
  const unique = S.cfg.items.length;
  const acc = unique ? S.ft / unique : 1;
  let stars = acc >= 0.9 ? 3 : acc >= 0.7 ? 2 : 1;
  let passed = true;
  if (S.cfg.noRetry) { passed = S.ft >= (S.cfg.passMin || unique - 1); stars = passed ? 3 : 0; }
  if (!S.cfg.practice && !S.cfg.isExam) A.recordQuest('lessons', 1, false);

  let info = {};
  if (S.cfg.onDone) info = S.cfg.onDone({ stars, acc, passed, ft: S.ft, total: unique, elapsedSec: Math.round((Date.now() - S.startTime) / 1000) }) || {};
  A.saveProgress();
  setFoot('');
  setMascot(null);
  document.getElementById('adv-barfill').style.width = '100%';
  const stage = document.getElementById('adv-stage');

  if (S.cfg.isExam) {
    const nota = Math.round((S.ft / Math.max(1, unique)) * 100) / 10;
    const notaStr = nota.toFixed(1).replace('.', ',');
    const calif = nota >= 9 ? '🏆 SOBRESALIENTE' : nota >= 7 ? '🌟 NOTABLE' : nota >= 6 ? '👍 BIEN' : nota >= 5 ? '✔️ SUFICIENTE' : '💪 NECESITA REPASAR';
    const col = nota >= 7 ? '#10b981' : nota >= 5 ? '#f59e0b' : '#ef4444';
    A.recordExamResult(S.cfg.title, S.cfg.subjectName || 'General', nota, S.ft, unique);
    const failsHtml = S.failedLog.length ? `<div style="text-align:left;margin-top:1.2rem"><h4 style="margin-bottom:.6rem;color:#fca5a5">📋 Repaso de las preguntas falladas (${S.failedLog.length}):</h4>` +
      S.failedLog.map(fl => `<div style="background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);border-radius:14px;padding:.75rem 1rem;margin-bottom:.5rem"><div style="font-weight:700">${fl.q}</div><div style="color:#34d399;font-size:.9rem;margin-top:.2rem">✓ Respuesta: <b>${fl.correct}</b></div>${fl.why ? `<div style="font-size:.82rem;opacity:.85;margin-top:.2rem">${fl.why}</div>` : ''}</div>`).join('') + `</div>`
      : `<p style="color:#34d399;font-weight:800;margin-top:1rem">🎉 ¡Examen impecable sin un solo fallo! Estás 100 % preparada para el control de clase.</p>`;

    stage.innerHTML = `<div class="adv-res" style="--c:${col}">
      <div style="display:flex;justify-content:center">${lumiSvg(nota >= 5 ? (nota >= 9 ? 'fire' : 'happy') : 'sad', 78)}</div>
      <div class="adv-grade-circle"><span class="num">${notaStr}</span><span class="lbl">sobre 10</span></div>
      <h2 style="color:${col}">${calif}</h2>
      <div><span class="stat">🎯 ${S.ft} de ${unique} aciertos</span></div>
      ${failsHtml}
    </div>`;
    if (nota >= 5) { A.sfx.done(); A.confetti(); } else A.sfx.err();
    setMain('Finalizar Examen', false);
    return;
  }

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
  const cb = S && S.cfg.onClose; overlay(false); S = null; A.stopAudio();
  if (cb) cb(completed);
}

/* ---------- lanzadores de lecciones ---------- */
function color(id) { return A.subjectOf(A.getMeta(id).subject).color; }
function needContent(id) { if (A.hasContent(id)) return true; A.toast('🚧 En preparación', 'Esta misión todavía no tiene contenido. ¡Muy pronto!'); return false; }

A.startStation = function (id, k, opt) {
  if (!needContent(id)) return;
  opt = opt || {};
  const st = A.content[id].stations[k];
  const items = sampleFrom([st.ex], Math.min(7, st.ex.length * 1), id);
  const rev = (k === 0 && !opt.practice) ? reviewItems(id) : [];
  A.runSession({
    title: st.title, missionId: id, stationIdx: k, color: color(id), items: rev.concat(items), intro: st.intro,
    practice: !!opt.practice, useHearts: !opt.practice,
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
  const items = sampleFrom(allPool(id), 10, id);
  A.runSession({
    title: 'Reto de Maestría', missionId: id, color: color(id), items, intro: [],
    practice: !!opt.practice, useHearts: !opt.practice,
    noRetry: !opt.practice, passMin: 7,
    onDone: (res) => {
      if (opt.practice) return { note: '📚 Modo biblioteca: practicas sin gastar ni ganar XP.' };
      if (!res.passed) return { note: '👑 El Reto de Maestría exige al menos <b>7 de 10 aciertos</b> a la primera para demostrar dominio real. ¡Repasa las estaciones y vuelve a por la corona!' };
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
  const items = sampleFrom(allPool(id), 5, id);
  A.runSession({
    title: 'Examen de salto', missionId: id, color: color(id), items, intro: [], noRetry: true, passMin: 4, useHearts: true,
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
  A.runSession({ title: 'Práctica mixta', missionId: id, color: color(id), items: sampleFrom(allPool(id), 10, id), intro: [], practice: true, onDone: () => ({ note: '📚 Modo biblioteca: practicas sin gastar ni ganar XP.' }), onClose });
};

/* ---------- 🩺 BUZÓN DE FALLOS ---------- */
A.startInboxReview = function () {
  const inbox = A.metaSt().inbox;
  if (!inbox.length) {
    A.toast('🎉 ¡Buzón limpio!', 'No tienes ningún fallo pendiente de repasar. ¡Sigue avanzando en Aventura!');
    return;
  }
  const slice = A.shuffle(inbox).slice(0, 8);
  const items = slice.map(it => {
    const p = prepare(it.ex, false, it.missionId);
    p.inboxKey = it.key;
    return p;
  });
  A.runSession({
    title: 'Buzón de Fallos', color: '#f59e0b', items, intro: [],
    onDone: (res) => {
      const xp = res.ft * 5;
      if (xp && window.app) window.app.addXP(xp);
      A.recordQuest('sprints', 1, false);
      return { xp, note: `🩺 Has limpiado ${res.ft} fallo${res.ft === 1 ? '' : 's'} de tu buzón.` };
    },
    onClose: () => A.renderScreen()
  });
};

/* ---------- 📝 SIMULACRO DE EXAMEN (NOTA SOBRE 10) ---------- */
A.startExamMission = function (id) {
  if (!needContent(id)) return;
  const m = A.getMeta(id);
  const items = sampleFrom(allPool(id), 10, id);
  A.runSession({
    title: 'Examen: ' + m.title, subjectName: A.subjectOf(m.subject).short,
    color: color(id), items, intro: [], noRetry: true, isExam: true, passMin: 5,
    onClose: () => A.openLibMission(id)
  });
};
A.openSubjectExamBuilder = function (subjectKey) {
  const box = document.getElementById('adv-library'); if (!box) return;
  const sub = A.subjectOf(subjectKey);
  const list = A.missionsOf(subjectKey).filter(m => A.hasContent(m.id));
  box.innerHTML = `
    <button class="btn" style="padding:.5rem 1rem;font-size:.8rem;background:transparent;border:1px solid var(--glass-border);margin-bottom:1rem" onclick="Adv.sfx.tap();Adv.renderLibrary(document.getElementById('adv-library'))">⬅ Volver a ${sub.short}</button>
    <div class="glass-card" style="--c:${sub.color}">
      <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem">
        ${lumiSvg('idle', 64)}
        <div>
          <h2 style="margin:0">📝 Configurar Simulacro de Examen (${sub.short})</h2>
          <p style="opacity:.8;font-size:.88rem">Marca los temas que entran en tu examen del colegio. Serán 10 preguntas sin pistas con nota final sobre 10.</p>
        </div>
      </div>
      <div style="display:flex;gap:.5rem;margin-bottom:.8rem">
        <button class="adv-chipbtn" style="font-size:.8rem;padding:.35rem .75rem" onclick="document.querySelectorAll('.adv-ex-chk').forEach(c=>c.checked=true)">Marcar todos</button>
        <button class="adv-chipbtn" style="font-size:.8rem;padding:.35rem .75rem" onclick="document.querySelectorAll('.adv-ex-chk').forEach(c=>c.checked=false)">Desmarcar todos</button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:.55rem;margin-bottom:1.2rem">
        ${list.map((m, i) => `<label style="display:flex;align-items:center;gap:.6rem;background:rgba(255,255,255,.04);border:1px solid var(--glass-border);border-radius:12px;padding:.65rem .85rem;cursor:pointer;font-weight:600;font-size:.9rem"><input type="checkbox" class="adv-ex-chk" value="${m.id}" checked style="width:18px;height:18px;accent-color:${sub.color}"> <span>${i + 1}. ${m.title}</span></label>`).join('')}
      </div>
      <button class="adv-main" style="--c:${sub.color}" onclick="Adv.launchCustomExam('${subjectKey}')">🚀 Comenzar Examen (10 preguntas)</button>
    </div>`;
};
A.launchCustomExam = function (subjectKey) {
  const ids = [...document.querySelectorAll('.adv-ex-chk:checked')].map(c => Number(c.value));
  if (!ids.length) { A.toast('⚠️ Elige al menos un tema', 'Marca una o más misiones para generar el examen.'); return; }
  const pools = [];
  ids.forEach(id => allPool(id).forEach(p => pools.push(p)));
  const items = sampleFrom(pools, 10);
  const sub = A.subjectOf(subjectKey);
  A.runSession({
    title: 'Examen de ' + sub.short, subjectName: sub.short, color: sub.color, items, intro: [],
    noRetry: true, isExam: true, passMin: 5,
    onClose: () => A.renderLibrary(document.getElementById('adv-library'))
  });
};

/* ---------- ⚔️ DUELOS TEMÁTICOS ENTRE AMIGAS ---------- */
A.startSubjectBattle = function (gameType, onScoreCallback) {
  let pools = [], colorHex = '#ec4899', title = 'Duelo Temático';
  const sub = A.SUBJECTS.find(s => s.code === gameType);
  if (sub) {
    title = 'Duelo de ' + sub.short;
    colorHex = sub.color;
    A.missionsOf(sub.key).forEach(m => allPool(m.id).forEach(p => pools.push(p)));
  } else {
    title = 'Duelo Trivial 6.º';
    colorHex = '#8b5cf6';
    A.meta.forEach(m => allPool(m.id).forEach(p => pools.push(p)));
  }
  const items = sampleFrom(pools, 8);
  A.runSession({
    title, color: colorHex, items, intro: [],
    noRetry: true, isBattle: true, passMin: 0,
    onDone: (res) => {
      const speedBonus = res.ft > 0 ? Math.max(0, Math.min(16, Math.round((90 - res.elapsedSec) / 5))) : 0;
      const score = res.ft * 10 + speedBonus;
      if (onScoreCallback) onScoreCallback(score);
      return { xp: 25, note: `⚔️ Puntuación de batalla: ${score} pts (${res.ft}/8 aciertos en ${res.elapsedSec}s).` };
    }
  });
};

/* ---------- pantalla AVENTURA (el caminito) ---------- */
A.subject = null;
A.renderScreen = function () {
  ensureCss();
  const box = document.getElementById('screen-aventura'); if (!box) return;
  if (!A.subject) A.subject = A.SUBJECTS[0].key;
  const sub = A.subjectOf(A.subject);
  const h = A.hearts();
  const inboxCount = A.metaSt().inbox.length;
  const recs = (window.app && window.app.cloudUser && Array.isArray(window.app.cloudUser.recommended_missions)) ? window.app.cloudUser.recommended_missions : [];

  const tabs = A.SUBJECTS.map(s => {
    const ms = A.missionsOf(s.key), done = ms.filter(m => A.missionDone(m.id)).length;
    return `<div class="adv-tab ${s.key === A.subject ? 'on' : ''}" style="--c:${s.color}" onclick="Adv.sfx.tap();Adv.setSubject('${s.key}')">${s.icon} ${s.short}<small>${done}/${ms.length} misiones</small></div>`;
  }).join('');
  let html = `<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.8rem">
    <div style="display:flex;align-items:center;gap:.9rem">${lumiSvg('idle')}<div><h1>🗺️ Aventura</h1><p style="opacity:.72;font-size:.9rem">Avanza misión a misión. ¿Ya te lo sabes? ¡Haz el ⚡ examen de salto!</p></div></div>
    <div class="adv-topbar-tools">
      <div class="adv-hearts-pill" title="Tus vidas en Aventura">${heartsHtml(h)} <span style="margin-left:.25rem">${h}/${A.MAX_HEARTS}</span></div>
      <button class="adv-tool-btn recharge" onclick="Adv.sfx.tap();Adv.openHeartSprint(()=>Adv.renderScreen())">⚡ ${h < A.MAX_HEARTS ? 'Recargar Vidas' : 'Reto Cálculo 25s'}</button>
      <button class="adv-tool-btn inbox" onclick="Adv.sfx.tap();Adv.startInboxReview()">🩺 Fallos (${inboxCount})</button>
    </div>
  </div><div class="adv-tabs">${tabs}</div><div class="adv-path" style="--c:${sub.color}">`;
  const list = A.missionsOf(A.subject), offs = [0, 46, 0, -46];
  let curId = null;
  list.forEach((m, mi) => {
    const has = A.hasContent(m.id), unl = A.unlocked(m.id, 0), done = A.missionDone(m.id), prog = A.missionProgress(m.id);
    const isRec = recs.some(r => Number(r.id) === m.id);
    html += `<div class="adv-banner ${!unl && !done ? 'lock' : ''}" style="--c:${sub.color}"><div class="k">MISIÓN ${mi + 1} ${done ? '· ✅ COMPLETADA' : ''} ${isRec ? '· 📌 EXAMEN DE LA SEMANA' : ''}</div><h3>${m.title}</h3><p>${m.objective.length > 150 ? m.objective.slice(0, 148) + '…' : m.objective}</p>
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

/* ---------- BIBLIOTECA (todo el temario + ejemplos resueltos + simulacro) ---------- */
A.libSubject = null;
A.renderLibrary = function (box) {
  if (!box) return;
  ensureCss();
  if (!A.libSubject) A.libSubject = A.SUBJECTS[0].key;
  const sub = A.subjectOf(A.libSubject);
  const recs = (window.app && window.app.cloudUser && Array.isArray(window.app.cloudUser.recommended_missions)) ? window.app.cloudUser.recommended_missions : [];
  const tabs = A.SUBJECTS.map(s => `<div class="adv-tab ${s.key === A.libSubject ? 'on' : ''}" style="--c:${s.color}" onclick="Adv.sfx.tap();Adv.setLibSubject('${s.key}')">${s.icon} ${s.short}</div>`).join('');
  const cards = A.missionsOf(A.libSubject).map((m, i) => {
    const has = A.hasContent(m.id), done = A.missionDone(m.id);
    const isRec = recs.some(r => Number(r.id) === m.id);
    return `<div class="adv-libcard" style="--c:${sub.color};${has ? '' : 'opacity:.5'};${isRec ? 'border-color:#f472b6;' : ''}" onclick="Adv.sfx.tap();Adv.openLibMission(${m.id})"><div class="n">${i + 1}</div><div><h4>${m.title} ${done ? '✅' : ''} ${isRec ? '<span style="font-size:.7rem;background:#ec4899;padding:2px 6px;border-radius:6px;margin-left:4px">📌 Examen</span>' : ''}</h4><small>${has ? 'Resumen, ejemplo resuelto, práctica y simulacro de examen' : '🚧 Contenido en preparación'}</small></div></div>`;
  }).join('');
  box.innerHTML = `<div class="adv-tabs" style="position:static">${tabs}</div>
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.8rem;margin:.6rem 0 1rem;background:rgba(6,182,212,.08);border:1px solid rgba(6,182,212,.3);border-radius:18px;padding:.9rem 1.2rem">
      <div><b style="color:#38bdf8">📝 ¿Tienes examen de ${sub.short} en el cole?</b><div style="font-size:.82rem;opacity:.8">Elige qué temas entran y haz un simulacro real de 10 preguntas con nota sobre 10.</div></div>
      <button class="adv-tool-btn exam" onclick="Adv.sfx.tap();Adv.openSubjectExamBuilder('${sub.key}')">📝 Preparar Simulacro de ${sub.short}</button>
    </div>
    <div class="adv-liblist">${cards}</div>`;
};
A.setLibSubject = function (key) { A.libSubject = key; A.renderLibrary(document.getElementById('adv-library')); };
function buildWorkedExampleHtml(c) {
  const exPool = c.stations.flatMap(s => s.ex || []);
  const fixed = exPool.find(e => e.t === 'choice' || e.t === 'num') || exPool.find(e => e.t === 'gen');
  if (!fixed) return '';
  const ex = fixed.t === 'gen' ? fixed.f() : fixed;
  const ansText = ex.t === 'choice' ? ex.o[ex.a] : (ex.t === 'num' ? A.fmt(ex.a) + (ex.u ? ' ' + ex.u : '') : (ex.a ? 'Verdadero' : 'Falso'));
  return `<div class="adv-example-box">
    <div style="font-weight:800;color:#34d399;margin-bottom:.4rem">🧠 Ejemplo resuelto paso a paso (Truco de examen)</div>
    <div style="font-weight:700;margin-bottom:.35rem">${ex.q}</div>
    <div style="color:#fbbf24;font-weight:800;font-size:.95rem;margin-bottom:.35rem">✓ Solución: ${ansText}</div>
    <div style="font-size:.88rem;opacity:.92;line-height:1.5">${ex.why || ''}</div>
  </div>`;
}
A.openLibMission = function (id) {
  if (!needContent(id)) return;
  const box = document.getElementById('adv-library'); if (!box) return;
  const m = A.getMeta(id), c = A.content[id], sub = A.subjectOf(m.subject);
  const sums = c.stations.map((s, k) => `<div class="adv-sum" style="--c:${sub.color}"><b class="t">${A.NODE_ICONS[k]} ${s.title}</b>${(s.intro || []).map((p, pi) => `<p style="margin:.4rem 0;line-height:1.6"><b>${p.h}.</b> ${p.p} <button class="adv-chipbtn" style="padding:.1rem .45rem;font-size:.75rem;margin-left:.3rem" onclick="Adv.speak(this.parentElement.textContent, 'assets/audio/m${String(id).padStart(2,'0')}_s${k}_p${pi}.mp3')">🔊</button></p>`).join('')}</div>`).join('');
  const exHtml = buildWorkedExampleHtml(c);
  box.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.6rem;margin-bottom:1rem">
      <button class="btn" style="padding:.5rem 1rem;font-size:.8rem;background:transparent;border:1px solid var(--glass-border)" onclick="Adv.sfx.tap();Adv.renderLibrary(document.getElementById('adv-library'))">⬅ Temario</button>
      <button class="adv-tool-btn exam" onclick="Adv.sfx.tap();Adv.startExamMission(${id})">📝 Simulacro de Examen de este tema (Nota / 10)</button>
    </div>
    <div class="glass-card" style="--c:${sub.color};margin-bottom:1rem"><div style="font-size:.75rem;font-weight:800;opacity:.7">${sub.icon} ${sub.short.toUpperCase()}</div><h2 style="margin:.2rem 0 .5rem">${m.title}</h2><p style="opacity:.8;line-height:1.55">${m.objective}</p></div>
    <h3 style="margin:1rem 0 .6rem">📝 Resumen para estudiar</h3>${sums}${exHtml}
    <h3 style="margin:1.4rem 0 .6rem">🎮 Practicar (sin gastar vidas ni candados)</h3>
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

/* =========================================================
   🎯 INICIO: EXAMEN DE LA SEMANA + CONTINUAR AVENTURA + MISIONES DIARIAS
   ========================================================= */
A.findNextStep = function () {
  for (const s of A.SUBJECTS) {
    for (const m of A.missionsOf(s.key)) {
      for (let k = 0; k < 4; k++) {
        if (!A.nodeDone(m.id, k)) return { m, k, sub: s };
      }
    }
  }
  return { m: A.meta[0], k: 0, sub: A.SUBJECTS[0] };
};

A.renderHomeWidget = function () {
  ensureCss();
  const host = document.getElementById('home-adv-hub');
  if (!host) return;
  const nxt = A.findNextStep();
  const stTitle = nxt.k === 3 ? 'Reto de Maestría 👑' : (A.hasContent(nxt.m.id) ? A.content[nxt.m.id].stations[nxt.k].title : 'Estación ' + (nxt.k + 1));
  const q = A.metaSt().quests;
  const qList = [
    { icon: '🗺️', title: 'Completa 1 estación en Aventura', cur: Math.min(1, q.lessons || 0), max: 1 },
    { icon: '🔥', title: 'Logra una racha de 5 aciertos seguidos', cur: Math.min(5, q.maxCombo || 0), max: 5 },
    { icon: '⚡', title: 'Supera 1 Reto de Vidas o limpia tu Buzón de Fallos', cur: Math.min(1, q.sprints || 0), max: 1 }
  ];
  const allDone = qList.every(x => x.cur >= x.max);

  const recs = (window.app && window.app.cloudUser && Array.isArray(window.app.cloudUser.recommended_missions)) ? window.app.cloudUser.recommended_missions : [];
  const recHtml = recs.length ? recs.map(r => {
    const m = A.getMeta(Number(r.id));
    if (!m) return '';
    const sub = A.subjectOf(m.subject);
    return `<div class="adv-rec-banner">
      <div>
        <div style="font-size:.75rem;font-weight:900;color:#f472b6;letter-spacing:.05em">📌 EXAMEN DE LA SEMANA · RECOMENDADO POR ${String(r.assignedBy || 'PAPI/ADMIN').toUpperCase()}</div>
        <h3 style="margin:.2rem 0;font-size:1.25rem">${sub.icon} ${m.title}</h3>
        <div style="font-size:.82rem;opacity:.85">${r.note || 'Repasa el resumen en Biblioteca y haz un simulacro para sacar un 10.'}</div>
      </div>
      <div style="display:flex;gap:.5rem;flex-wrap:wrap">
        <button class="adv-tool-btn" style="background:${sub.color}" onclick="Adv.openLibFromTrophy('${sub.key}',${m.id})">📚 Estudiar Tema</button>
        <button class="adv-tool-btn exam" onclick="Adv.startExamMission(${m.id})">📝 Simulacro (/10)</button>
      </div>
    </div>`;
  }).join('') : '';

  host.innerHTML = `${recHtml}
    <div class="dash-grid" style="margin-top:.5rem">
      <div class="glass-card" style="background:linear-gradient(135deg,rgba(139,92,246,.22),rgba(236,72,153,.15));border:2px solid rgba(139,92,246,.45);display:flex;flex-direction:column;justify-content:space-between;gap:1rem">
        <div style="display:flex;align-items:center;gap:1rem">
          ${lumiSvg('happy', 76)}
          <div>
            <span class="adv-chip" style="background:rgba(0,0,0,.35);color:${nxt.sub.color}">${nxt.sub.icon} ${nxt.sub.short} · Misión ${nxt.m.mission.replace('Misión ','')}</span>
            <h2 style="margin:.35rem 0 .2rem;font-size:1.45rem">${nxt.m.title}</h2>
            <p style="opacity:.85;font-size:.9rem">Siguiente parada: <b>${stTitle}</b></p>
          </div>
        </div>
        <div style="display:flex;gap:.6rem;flex-wrap:wrap">
          <button class="adv-main" style="flex:1;--c:${nxt.sub.color};padding:.85rem" onclick="Adv.sfx.tap();Adv.resumeNext(${nxt.m.id},${nxt.k},'${nxt.sub.key}')">🚀 ¡Continuar Aventura!</button>
          <button class="adv-tool-btn recharge" onclick="Adv.sfx.tap();Adv.openHeartSprint(()=>Adv.renderHomeWidget())">❤️ ${A.hearts()}/${A.MAX_HEARTS} · Recargar</button>
        </div>
      </div>

      <div class="glass-card" style="padding:1.4rem">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.8rem">
          <h3 style="margin:0">🎯 Misiones Diarias</h3>
          <span style="font-size:.78rem;opacity:.65">Premio: 🎁 Cofre +75 XP</span>
        </div>
        ${qList.map(it => {
          const pct = Math.round((it.cur / it.max) * 100);
          return `<div class="adv-quest-row">
            <span style="font-size:1.5rem">${it.cur >= it.max ? '✅' : it.icon}</span>
            <div style="flex:1">
              <div style="display:flex;justify-content:space-between;font-size:.85rem;font-weight:700"><span>${it.title}</span><span style="color:#fbbf24">${it.cur}/${it.max}</span></div>
              <div class="adv-quest-bar"><i style="width:${pct}%"></i></div>
            </div>
          </div>`;
        }).join('')}
        ${allDone && !q.chest ? `<button class="adv-main" style="margin-top:.5rem;background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#111" onclick="Adv.claimDailyChest()">🎁 ¡Abrir Cofre Diario (+75 XP y +1 🧊)!</button>` :
          (q.chest ? `<div style="text-align:center;color:#34d399;font-weight:800;font-size:.88rem;margin-top:.5rem">🎉 ¡Cofre Diario de hoy completado y abierto!</div>` : '')}
      </div>
    </div>`;
};
A.resumeNext = function (id, k, subKey) {
  A.subject = subKey;
  const navEl = document.querySelector('[data-nav="aventura"]');
  if (window.app) window.app.switchScreen('aventura', navEl);
  setTimeout(() => A.clickNode(id, k), 120);
};
A.claimDailyChest = function () {
  const q = A.metaSt().quests;
  if (q.chest) return;
  q.chest = true;
  A.addHearts(A.MAX_HEARTS);
  if (window.app) {
    window.app.addXP(75);
    if (window.app.cloudUser && (window.app.cloudUser.streak_shields || 0) < 3) {
      window.app.cloudUser.streak_shields = (window.app.cloudUser.streak_shields || 0) + 1;
      if (typeof sb !== 'undefined' && sb) sb.from('profiles').update({ streak_shields: window.app.cloudUser.streak_shields }).eq('id', window.app.cloudUser.id).then(() => {});
      window.app.updateHeaderStreak();
    }
  }
  A.saveProgress();
  A.sfx.done();
  A.confetti();
  A.toast('🎁 ¡Cofre Diario Abierto!', 'Has ganado +75 XP, vidas al máximo y +1 🧊 Protector de Racha.');
  A.renderHomeWidget();
};

/* =========================================================
   📊 INFORME DETALLADO PARA SUPER-ADMIN Y MODO PAPI
   ========================================================= */
A.renderMetricsReportHtml = function (metrics, progress, fallbackFails) {
  const mt = metrics || {};
  const td = todayStr();
  const todayMin = Math.round(((mt.daily && mt.daily[td]) || 0) / 60 * 10) / 10;
  const totalMin = Math.round((mt.totalSec || 0) / 60);
  const qCount = (mt.questions && mt.questions.count) || 0;
  const avgQ = qCount ? Math.round(((mt.questions.totalSec || 0) / qCount) * 10) / 10 : 0;
  const impCount = (mt.questions && mt.questions.impulsiveCount) || 0;
  const stuckCount = (mt.questions && mt.questions.stuckCount) || 0;

  const pAdv = (progress && progress.adv) ? progress.adv : (progress || {});
  const doneMissions = A.meta.filter(m => { const pm = pAdv[m.id]; return pm && pm.s && pm.s[0] && pm.s[1] && pm.s[2] && pm.b; }).length;
  const exams = (progress && progress.advMeta && Array.isArray(progress.advMeta.exams)) ? progress.advMeta.exams : [];
  const fails = (progress && Array.isArray(progress.fails) && progress.fails.length) ? progress.fails : (fallbackFails || []);
  const alerts = Array.isArray(mt.alerts) ? mt.alerts : [];

  const examsHtml = exams.length ? exams.slice(-5).reverse().map(ex => `
    <div style="background:rgba(6,182,212,.08);border:1px solid rgba(6,182,212,.25);border-radius:12px;padding:.55rem .9rem;display:flex;justify-content:space-between;align-items:center">
      <span>📝 <b>${ex.title}</b> (${ex.subject})</span>
      <span style="font-weight:900;color:${ex.nota >= 7 ? '#34d399' : ex.nota >= 5 ? '#fbbf24' : '#fca5a5'}">${String(ex.nota).replace('.', ',')} / 10 (${ex.ft}/${ex.total})</span>
    </div>`).join('') : '<p style="opacity:.6;font-size:.84rem">Aún no ha realizado simulacros de examen.</p>';

  const alertsHtml = alerts.length ? alerts.slice(-6).reverse().map(al => `
    <div style="background:${al.type === 'impulsive' ? 'rgba(245,158,11,.1)' : 'rgba(139,92,246,.1)'};border:1px solid ${al.type === 'impulsive' ? 'rgba(245,158,11,.3)' : 'rgba(139,92,246,.3)'};border-radius:12px;padding:.55rem .9rem;display:flex;justify-content:space-between;align-items:center;gap:.5rem">
      <span>${al.type === 'impulsive' ? '⚡ <b>Respuesta impulsiva</b>' : '🐢 <b>Se atascó</b>'} (${al.missionTitle}): ${al.q}</span>
      <span style="font-weight:800;white-space:nowrap;color:${al.type === 'impulsive' ? '#fbbf24' : '#c4b5fd'}">${al.sec}s</span>
    </div>`).join('') : '<p style="opacity:.6;font-size:.84rem">Sin alertas de impulsividad (&lt;2s) ni atascos (&gt;25s).</p>';

  const failsHtml = fails.length ? fails.slice(-6).reverse().map(f => `
    <div style="background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.25);border-radius:12px;padding:.6rem 1rem;display:flex;justify-content:space-between;align-items:center;gap:.5rem">
      <span>⚠️ <strong>${f.q || f.op || 'Operación'}</strong></span>
      <span style="color:#fca5a5;font-size:.85rem">Correcto: <b style="color:#34d399">${f.expected || '?'}</b></span>
    </div>`).join('') : '<p style="opacity:.6;font-size:.85rem">¡No hay fallos recientes registrados!</p>';

  return `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:.75rem;margin-bottom:1.2rem">
      <div style="background:rgba(255,255,255,.04);border-radius:14px;padding:.85rem;text-align:center"><div style="font-size:.75rem;opacity:.6">Hoy / Total</div><div style="font-size:1.3rem;font-weight:800;color:#38bdf8">${todayMin}m / ${totalMin}m</div></div>
      <div style="background:rgba(255,255,255,.04);border-radius:14px;padding:.85rem;text-align:center"><div style="font-size:.75rem;opacity:.6">Media / Pregunta</div><div style="font-size:1.3rem;font-weight:800;color:#a78bfa">${avgQ}s</div></div>
      <div style="background:rgba(255,255,255,.04);border-radius:14px;padding:.85rem;text-align:center"><div style="font-size:.75rem;opacity:.6">Misiones 6.º</div><div style="font-size:1.3rem;font-weight:800;color:#34d399">${doneMissions}/40</div></div>
      <div style="background:rgba(255,255,255,.04);border-radius:14px;padding:.85rem;text-align:center"><div style="font-size:.75rem;opacity:.6">Alertas (&lt;2s / &gt;25s)</div><div style="font-size:1.3rem;font-weight:800;color:#fbbf24">⚡${impCount} · 🐢${stuckCount}</div></div>
    </div>
    <h4 style="margin:1rem 0 .5rem;color:#38bdf8">📝 Últimos Simulacros de Examen:</h4>
    <div style="display:flex;flex-direction:column;gap:.45rem;margin-bottom:1rem">${examsHtml}</div>
    <h4 style="margin:1rem 0 .5rem;color:#fbbf24">⏱️ Tiempos y Detección de Impulsividad / Atascos:</h4>
    <div style="display:flex;flex-direction:column;gap:.45rem;margin-bottom:1rem">${alertsHtml}</div>
    <h4 style="margin:1rem 0 .5rem;color:#fca5a5">🎯 Conceptos o Fallos para Reforzar Juntos:</h4>
    <div style="display:flex;flex-direction:column;gap:.45rem">${failsHtml}</div>`;
};

/* =========================================================
   🏅 ÁLBUM DE TROFEOS DE LAS 40 MISIONES (EN PROGRESO)
   ========================================================= */
A.renderTrophyAlbum = function () {
  ensureCss();
  const host = document.getElementById('stats-trophy-album');
  if (!host) return;
  const totalDone = A.meta.filter(m => A.missionDone(m.id)).length;
  const totalStars = A.meta.reduce((acc, m) => acc + A.missionStars(m.id), 0);

  let html = `<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.8rem;margin-bottom:1rem">
    <div><h2 style="margin:0">🏅 Álbum de Trofeos del Curso (6.º Primaria)</h2><p style="opacity:.7;font-size:.85rem">Conquista las 40 misiones oficiales en Aventura para iluminar todas tus insignias</p></div>
    <div style="display:flex;gap:.6rem"><span class="adv-chip" style="font-size:.9rem;padding:.4rem .9rem;color:#fbbf24">🏆 ${totalDone} / 40 Misiones</span><span class="adv-chip" style="font-size:.9rem;padding:.4rem .9rem;color:#38bdf8">⭐ ${totalStars} / 480 Estrellas</span></div>
  </div>`;

  A.SUBJECTS.forEach(s => {
    const ms = A.missionsOf(s.key);
    const doneCount = ms.filter(m => A.missionDone(m.id)).length;
    html += `<h4 style="margin:1.2rem 0 .4rem;color:${s.color}">${s.icon} ${s.key} (${doneCount}/${ms.length})</h4><div class="adv-trophy-grid">`;
    ms.forEach((m, i) => {
      const done = A.missionDone(m.id), st = A.missionStars(m.id);
      html += `<div class="adv-trophy ${done ? 'won' : 'lock'}" onclick="Adv.sfx.tap();Adv.openLibFromTrophy('${s.key}',${m.id})">
        <div style="font-size:1.9rem">${done ? '🏅' : '🔒'}</div>
        <div style="font-weight:800;font-size:.85rem;margin:.25rem 0">${i + 1}. ${m.title}</div>
        <div style="font-size:.75rem;color:#fbbf24">${done ? `⭐ ${st}/12` : `${A.missionProgress(m.id)}/4 nodos`}</div>
      </div>`;
    });
    html += `</div>`;
  });
  host.innerHTML = html;
};
A.openLibFromTrophy = function (subKey, id) {
  A.libSubject = subKey;
  const navEl = document.querySelector('[data-nav="study"]');
  if (window.app) window.app.switchScreen('study', navEl);
  setTimeout(() => A.openLibMission(id), 80);
};

})();

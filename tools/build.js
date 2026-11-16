#!/usr/bin/env node
/* Valida content_src/m*.js y genera js/aventura/content.js
   Uso:  node tools/build.js            (valida todo y construye)
         node tools/build.js 11 12      (valida solo esas misiones, no construye) */
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
global.window = global;
require(path.join(root, 'js/aventura/meta.js'));
require(path.join(root, 'js/aventura/engine.js'));
const A = global.Adv;

const only = process.argv.slice(2).map(Number).filter(Boolean);
const dir = path.join(root, 'content_src');
const files = fs.readdirSync(dir).filter(f => /^m\d+\.js$/.test(f)).sort();
const errors = [], warns = [];
const stats = {};
const ALLOWED = /^(b|i|u|br|sup|sub|strong|em|span)$/;

function checkHtml(where, s) {
  if (typeof s !== 'string') return;
  const tags = s.match(/<\/?[a-zA-Z][^>]*>/g) || [];
  tags.forEach(t => { const n = t.replace(/[<\/>]/g, ' ').trim().split(/\s+/)[0].toLowerCase(); if (!ALLOWED.test(n)) errors.push(`${where}: etiqueta no permitida ${t}`); if (/on\w+\s*=/i.test(t)) errors.push(`${where}: atributo de evento`); });
  if (/<script/i.test(s)) errors.push(`${where}: script`);
}
function str(where, s, min, max) {
  if (typeof s !== 'string' || !s.trim()) { errors.push(`${where}: texto vacío o no es string`); return false; }
  if (min && s.length < min) warns.push(`${where}: muy corto (${s.length})`);
  if (max && s.length > max) warns.push(`${where}: muy largo (${s.length} > ${max})`);
  checkHtml(where, s); return true;
}
function checkEx(where, e, isGen) {
  if (!e || typeof e !== 'object') { errors.push(`${where}: ejercicio inválido`); return; }
  const t = e.t;
  if (!['choice', 'tf', 'num', 'order', 'match', 'sort', 'tap'].includes(t)) { errors.push(`${where}: tipo desconocido "${t}"`); return; }
  str(where + '.q', e.q, 8, 400);
  if (!e.why || String(e.why).length < 12) errors.push(`${where}: falta 'why' (explicación pedagógica)`); else str(where + '.why', e.why, 12, 400);
  if (t === 'choice') {
    if (!Array.isArray(e.o) || e.o.length < 2 || e.o.length > 4) errors.push(`${where}: choice necesita 2 a 4 opciones`);
    else {
      e.o.forEach((o, i) => str(`${where}.o[${i}]`, String(o), 0, 110));
      if (new Set(e.o.map(String)).size !== e.o.length) errors.push(`${where}: opciones repetidas`);
      if (!Number.isInteger(e.a) || e.a < 0 || e.a >= e.o.length) errors.push(`${where}: 'a' fuera de rango`);
      if (e.o.some(o => /todas las anteriores|ninguna de las anteriores|ambas/i.test(String(o))) && !e.keep) errors.push(`${where}: usa keep:true con "todas/ninguna/ambas"`);
    }
  } else if (t === 'tf') {
    if (typeof e.a !== 'boolean') errors.push(`${where}: tf necesita a:true/false`);
  } else if (t === 'num') {
    if (typeof e.a !== 'number' || !isFinite(e.a)) errors.push(`${where}: num necesita a numérico`);
    if (e.alt && !Array.isArray(e.alt)) errors.push(`${where}: alt debe ser array`);
    if (typeof e.a === 'number' && Math.abs(e.a) >= 1e9) errors.push(`${where}: respuesta demasiado grande`);
    if (typeof e.a === 'number' && e.a < 0 && !e.neg) errors.push(`${where}: respuesta negativa requiere neg:true`);
    if (typeof e.a === 'number' && !Number.isInteger(e.a) && String(e.a).split('.')[1].length > 4) warns.push(`${where}: respuesta con muchos decimales`);
  } else if (t === 'order') {
    if (!Array.isArray(e.items) || e.items.length < 3 || e.items.length > 6) errors.push(`${where}: order necesita 3-6 items`);
    else if (new Set(e.items.map(String)).size !== e.items.length) errors.push(`${where}: items repetidos`);
    else e.items.forEach((x, i) => str(`${where}.items[${i}]`, String(x), 0, 80));
  } else if (t === 'match') {
    if (!Array.isArray(e.pairs) || e.pairs.length < 3 || e.pairs.length > 5) errors.push(`${where}: match necesita 3-5 pares`);
    else {
      if (new Set(e.pairs.map(p => String(p[0]))).size !== e.pairs.length || new Set(e.pairs.map(p => String(p[1]))).size !== e.pairs.length) errors.push(`${where}: pares con elementos repetidos`);
      e.pairs.forEach((p, i) => { if (!Array.isArray(p) || p.length !== 2) errors.push(`${where}: par ${i} inválido`); else { str(`${where}.pairs[${i}][0]`, String(p[0]), 0, 70); str(`${where}.pairs[${i}][1]`, String(p[1]), 0, 70); } });
    }
  } else if (t === 'sort') {
    if (!Array.isArray(e.cats) || e.cats.length < 2 || e.cats.length > 3) errors.push(`${where}: sort necesita 2-3 categorías`);
    else if (!Array.isArray(e.items) || e.items.length < 4 || e.items.length > 8) errors.push(`${where}: sort necesita 4-8 items`);
    else {
      e.items.forEach((it, i) => { if (!it || typeof it.x !== 'string' || !Number.isInteger(it.c) || it.c < 0 || it.c >= e.cats.length) errors.push(`${where}: item ${i} inválido`); });
      e.cats.forEach((c, ci) => { if (!e.items.some(it => it.c === ci)) errors.push(`${where}: la categoría "${c}" no tiene ningún item`); });
      if (new Set(e.items.map(i => i.x)).size !== e.items.length) errors.push(`${where}: items repetidos`);
    }
  } else if (t === 'tap') {
    if (!Array.isArray(e.words) || e.words.length < 4) errors.push(`${where}: tap necesita >=4 palabras`);
    else if (!Array.isArray(e.wrong) || !e.wrong.length || e.wrong.some(k => !Number.isInteger(k) || k < 0 || k >= e.words.length) || new Set(e.wrong).size !== e.wrong.length || e.wrong.length >= e.words.length) errors.push(`${where}: 'wrong' inválido`);
  }
}

files.forEach(f => {
  const id = Number(f.match(/\d+/)[0]);
  if (only.length && !only.includes(id)) return;
  const code = fs.readFileSync(path.join(dir, f), 'utf8');
  delete A.content[id];
  try { vm.runInThisContext('(function(){\n' + code + '\n})();', { filename: f }); } catch (e) { errors.push(`${f}: error de sintaxis/ejecución: ${e.message}`); return; }
  const c = A.content[id];
  const meta = A.getMeta(id);
  if (!meta) { errors.push(`${f}: id sin metadatos`); return; }
  if (!c) { errors.push(`${f}: no llama a Adv.register(${id}, …)`); return; }
  if (!Array.isArray(c.stations) || c.stations.length !== 3) { errors.push(`${f}: necesita exactamente 3 estaciones`); return; }
  let total = 0, gens = 0, tf = [0, 0], types = new Set(), qs = new Map(), pillCount = 0;
  c.stations.forEach((s, si) => {
    const w = `m${id}.e${si + 1}`;
    str(w + '.title', s.title, 5, 60);
    if (!Array.isArray(s.intro) || s.intro.length < 1 || s.intro.length > 3) errors.push(`${w}: intro necesita 1-3 píldoras`); else s.intro.forEach((p, pi) => { str(`${w}.intro[${pi}].h`, p.h, 3, 60); str(`${w}.intro[${pi}].p`, p.p, 50, 520); pillCount++; });
    if (!Array.isArray(s.ex)) { errors.push(`${w}: falta ex[]`); return; }
    let st = 0, g = 0;
    s.ex.forEach((e, ei) => {
      const ww = `${w}.ex[${ei}]`;
      if (e && e.t === 'gen') {
        g++; gens++;
        if (typeof e.f !== 'function') { errors.push(`${ww}: gen necesita f()`); return; }
        const seen = new Set();
        for (let i = 0; i < 300; i++) { let r; try { r = e.f(); } catch (er) { errors.push(`${ww}: el generador lanza error: ${er.message}`); return; } if (i < 60) checkEx(ww + `(#${i})`, r, true); seen.add(A.stripHtml(r.q) + JSON.stringify([r.a, r.o, r.items, r.pairs])); if (i === 0) types.add(r.t); }
        if (seen.size < 25) warns.push(`${ww}: el generador produce poca variedad (${seen.size}/300)`);
      } else {
        st++; total++; checkEx(ww, e);
        if (e && e.t) types.add(e.t);
        if (e && e.t === 'tf') tf[e.a ? 0 : 1]++;
        const k = A.stripHtml(e && e.q || '').toLowerCase();
        if (qs.has(k)) errors.push(`${ww}: enunciado duplicado con ${qs.get(k)}`); else qs.set(k, ww);
      }
    });
    if (st < 8 || st + g * 3 < 12) errors.push(`${w}: pocos ejercicios (${st} fijos + ${g} generadores). Mínimo: 8 fijos y 12 en total (un generador cuenta 3)`);
  });
  if (types.size < 3) warns.push(`m${id}: poca variedad de tipos (${[...types].join(',')})`);
  if (tf[0] + tf[1] >= 4 && (tf[0] / (tf[0] + tf[1]) > 0.7 || tf[1] / (tf[0] + tf[1]) > 0.7)) warns.push(`m${id}: tf desequilibrado (${tf[0]} V / ${tf[1]} F)`);
  stats[id] = { ejercicios: total, generadores: gens, tipos: types.size, pildoras: pillCount };
});

console.log('\nMisión | fijos | gen | tipos | píldoras');
Object.keys(stats).forEach(id => console.log(`${String(id).padStart(6)} | ${String(stats[id].ejercicios).padStart(5)} | ${String(stats[id].generadores).padStart(3)} | ${String(stats[id].tipos).padStart(5)} | ${stats[id].pildoras}`));
if (warns.length) { console.log(`\n⚠️  ${warns.length} avisos:`); warns.slice(0, 60).forEach(w => console.log('  - ' + w)); }
if (errors.length) { console.log(`\n❌ ${errors.length} ERRORES:`); errors.slice(0, 80).forEach(e => console.log('  - ' + e)); process.exit(1); }
console.log(`\n✅ ${Object.keys(stats).length} misiones válidas`);

if (!only.length) {
  const out = ['/* GENERADO por tools/build.js a partir de content_src/. No editar a mano. */'];
  files.forEach(f => { out.push('/* ---- ' + f + ' ---- */'); out.push('(function(){\n' + fs.readFileSync(path.join(dir, f), 'utf8') + '\n})();'); });
  fs.writeFileSync(path.join(root, 'js/aventura/content.js'), out.join('\n') + '\n');
  console.log('📦 js/aventura/content.js generado (' + (fs.statSync(path.join(root, 'js/aventura/content.js')).size / 1024).toFixed(0) + ' KB)');
}

const R = Adv.rnd, P = Adv.pick, SH = Adv.shuffle;

Adv.register(18, {
  stations: [
    {
      title: 'El tiempo en base 60: horas, minutos y segundos',
      intro: [
        { i: '⏱️', h: '¿Por qué se llama sistema sexagesimal?', p: 'Para medir el tiempo (horas, minutos y segundos) usamos el <b>sistema sexagesimal</b>, cuya base es <b>60</b>: cada unidad equivale a <b>60 unidades</b> del orden inmediatamente inferior.<br><b>1 h = 60 min</b> · <b>1 min = 60 s</b> · <b>1 h = 3 600 s</b>.' },
        { i: '🔄', h: 'Forma compleja e incompleja', p: '<b>Forma compleja</b>: usa varias unidades a la vez (<i>2 h 15 min 30 s</i>).<br><b>Forma incompleja</b>: usa una sola unidad (<i>8 130 s</i>).<br>Para bajar de escalón (h → min → s) <b>multiplicamos por 60</b> en cada paso.' },
        { i: '➗', h: 'De incompleja a compleja', p: 'Para subir de escalón (s → min → h) <b>dividimos entre 60</b>. El <b>cociente</b> son las unidades superiores y el <b>resto</b> son las que quedan. Ejemplo: 135 min ÷ 60 → cociente <b>2 h</b> y resto <b>15 min</b> (2 h 15 min).' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuántos segundos hay en 1 hora?', o: ['3 600 s', '600 s', '60 s', '1 200 s'], a: 0, why: 'Como 1 h = 60 min y cada minuto tiene 60 s, multiplicamos 60 · 60 = 3 600 s.' },
        { t: 'tf', q: '2 horas y media equivalen a 150 minutos.', a: true, why: '2 h son 2 · 60 = 120 min, y media hora son 30 min: 120 + 30 = 150 min.' },
        { t: 'tf', q: 'En el sistema sexagesimal, 1,5 horas es lo mismo que 1 hora y 50 minutos.', a: false, why: '0,5 horas es media hora, es decir, la mitad de 60 minutos: 30 minutos (1 h 30 min), no 50 minutos.' },
        { t: 'num', q: '¿Cuántos minutos son 3 horas y cuarto (3 h 15 min)?', a: 195, u: 'min', why: 'Multiplicamos las horas por 60 y sumamos los minutos: 3 · 60 + 15 = 180 + 15 = 195 min.' },
        { t: 'match', q: 'Une cada expresión en forma compleja con su equivalente en minutos.', pairs: [['1 h 20 min', '80 min'], ['2 h 10 min', '130 min'], ['3 h 5 min', '185 min'], ['1 h 45 min', '105 min']], why: 'Multiplicamos las horas por 60 y sumamos los minutos: 60+20=80, 120+10=130, 180+5=185 y 60+45=105.' },
        { t: 'sort', q: 'Clasifica cada medida de tiempo según esté escrita en forma compleja o incompleja.', cats: ['Forma compleja', 'Forma incompleja'], items: [{ x: '2 h 30 min', c: 0 }, { x: '150 min', c: 1 }, { x: '1 h 12 min 40 s', c: 0 }, { x: '7 200 s', c: 1 }, { x: '45 min 18 s', c: 0 }, { x: '4 h', c: 1 }], why: 'La forma compleja combina dos o más unidades (h, min, s); la incompleja expresa toda la cantidad con una sola unidad.' },
        { t: 'order', q: 'Ordena estas duraciones de menor a mayor tiempo.', items: ['50 min', '1 h 10 min', '90 min', '2 h'], why: 'Pasadas todas a minutos son: 50 min < 70 min (1 h 10 min) < 90 min < 120 min (2 h).' },
        { t: 'choice', q: 'Al dividir 200 segundos entre 60 obtenemos cociente 3 y resto 20. ¿Qué significa?', o: ['200 s = 3 min 20 s', '200 s = 20 min 3 s', '200 s = 3 h 20 min'], a: 0, why: 'Al dividir segundos entre 60, el cociente son los minutos completos (3 min) y el resto los segundos sueltos (20 s).' },
        { t: 'tap', q: 'En esta explicación hay dos datos equivocados. ¡Cázalos!', words: ['Una', 'hora', 'tiene', '100', 'minutos', 'y', 'un', 'minuto', 'tiene', '10', 'segundos.'], wrong: [3, 9], why: 'En el sistema sexagesimal la base es 60: una hora tiene <b>60</b> minutos y un minuto tiene <b>60</b> segundos.' },
        { t: 'num', q: 'Un cortometraje dura 4 200 segundos. ¿Cuántos minutos son?', a: 70, u: 'min', why: 'Para pasar de segundos a minutos dividimos entre 60: 4 200 ÷ 60 = 70 min.' },
        { t: 'choice', q: '¿Cómo se escribe correctamente 1 h 85 min pasando los minutos que sobran a horas?', o: ['2 h 25 min', '1 h 25 min', '2 h 85 min', '2 h 15 min'], a: 0, why: 'Como 85 min = 60 min + 25 min = 1 h 25 min, al sumarlo a 1 h obtenemos 2 h 25 min.' },
        { t: 'tf', q: 'Un cuarto de hora equivale a 900 segundos.', a: true, why: 'Un cuarto de hora son 15 minutos, y 15 · 60 = 900 segundos.' },
        { t: 'gen', f: () => {
          const mode = P(['hm', 'ms']);
          if (mode === 'hm') {
            const h = R(1, 8), m = R(5, 55);
            const tot = h * 60 + m;
            return { t: 'num', q: `Convierte <b>${h} h ${m} min</b> a minutos.`, a: tot, u: 'min', why: `Multiplicamos las horas por 60 y sumamos los minutos: ${h} · 60 + ${m} = ${h * 60} + ${m} = ${tot} min.` };
          }
          const m = R(2, 12), s = R(5, 55);
          const tot = m * 60 + s;
          return { t: 'num', q: `Convierte <b>${m} min ${s} s</b> a segundos.`, a: tot, u: 's', why: `Multiplicamos los minutos por 60 y sumamos los segundos: ${m} · 60 + ${s} = ${m * 60} + ${s} = ${tot} s.` };
        } },
        { t: 'gen', f: () => {
          const h = R(1, 6), m = R(5, 54);
          const tot = h * 60 + m;
          const ok = `${h} h ${m} min`;
          const cands = [`${h + 1} h ${m} min`, `${h} h ${(m + 15) % 60 || 10} min`, `${h + 2} h ${m} min`, `${m} h ${h} min`, `${h} h ${m + 5} min`].filter(x => x !== ok);
          const opts = SH([ok, ...[...new Set(cands)].slice(0, 3)]);
          return { t: 'choice', q: `Expresa <b>${tot} min</b> en horas y minutos (forma compleja).`, o: opts, a: opts.indexOf(ok), why: `Dividimos ${tot} ÷ 60: el cociente es ${h} (${h} · 60 = ${h * 60}) y el resto es ${m}. Por tanto, ${ok}.` };
        } },
        { t: 'gen', f: () => {
          const h = R(1, 3), m = R(1, 25), s = R(5, 55);
          const tot = h * 3600 + m * 60 + s;
          return { t: 'num', q: `¿Cuántos segundos son en total <b>${h} h ${m} min ${s} s</b>?`, a: tot, u: 's', why: `${h} h = ${h * 3600} s y ${m} min = ${m * 60} s. Sumamos todo: ${h * 3600} + ${m * 60} + ${s} = ${tot} s.` };
        } }
      ]
    },
    {
      title: 'Amplitud de ángulos: grados, minutos y segundos',
      intro: [
        { i: '📐', h: 'Las unidades de medida de ángulos', p: 'La amplitud de un ángulo se mide en <b>grados (°)</b>. Para medidas muy precisas, cada grado se divide en <b>60 minutos (′)</b> y cada minuto en <b>60 segundos (″)</b>:<br><b>1° = 60′</b> · <b>1′ = 60″</b> · <b>1° = 3 600″</b>.' },
        { i: '🧭', h: 'Tipos de ángulos según su abertura', p: '<b>Agudo</b>: menos de 90°.<br><b>Recto</b>: exactamente 90°.<br><b>Obtuso</b>: más de 90° y menos de 180°.<br><b>Llano</b>: exactamente 180°.<br><b>Completo</b>: 360° (una vuelta entera).' },
        { i: '🤝', h: 'Complementarios y suplementarios', p: 'Dos ángulos son <b>complementarios</b> si sus amplitudes suman <b>90°</b> (un ángulo recto).<br>Dos ángulos son <b>suplementarios</b> si sus amplitudes suman <b>180°</b> (un ángulo llano).' }
      ],
      ex: [
        { t: 'choice', q: '¿Cómo se escribe en símbolos el ángulo «35 grados, 12 minutos y 40 segundos»?', o: ['35° 12′ 40″', '35″ 12′ 40°', '35° 12″ 40′', '35 h 12 min 40 s'], a: 0, why: 'El símbolo de grado es °, el de minuto angular es una comilla simple (′) y el de segundo angular es una comilla doble (″).' },
        { t: 'tf', q: 'Un grado angular (1°) equivale a 3 600 segundos angulares (3 600″).', a: true, why: 'Como 1° = 60′ y cada minuto son 60″, tenemos 60 · 60 = 3 600″.' },
        { t: 'tf', q: 'Dos ángulos son suplementarios cuando entre los dos suman 90°.', a: false, why: 'Los que suman 90° son <b>complementarios</b>. Los <b>suplementarios</b> suman <b>180°</b>.' },
        { t: 'num', q: '¿Cuántos minutos angulares (′) hay en 5° 20′?', a: 320, u: '′', why: 'Multiplicamos los grados por 60 y sumamos los minutos: 5 · 60 + 20 = 300 + 20 = 320′.' },
        { t: 'match', q: 'Une cada tipo de ángulo con su medida.', pairs: [['Ángulo recto', '90°'], ['Ángulo llano', '180°'], ['Ángulo completo', '360°'], ['Ángulo agudo', 'Menor de 90°']], why: 'El recto mide 90°, el llano equivale a dos rectos (180°), el completo da la vuelta entera (360°) y el agudo no llega a 90°.' },
        { t: 'sort', q: 'Clasifica estos ángulos en agudos, rectos u obtusos.', cats: ['Agudo', 'Recto', 'Obtuso'], items: [{ x: '45°', c: 0 }, { x: '89° 30′', c: 0 }, { x: '90°', c: 1 }, { x: '120°', c: 2 }, { x: '91° 15′', c: 2 }, { x: '18°', c: 0 }], why: '89° 30′ aún es menor que 90° (agudo); 90° exactos es recto; 91° 15′ y 120° están entre 90° y 180° (obtusos).' },
        { t: 'order', q: 'Ordena estos ángulos de menor a mayor amplitud.', items: ['45°', '90°', '135°', '180°', '360°'], why: 'De menor a mayor abertura: agudo (45°) < recto (90°) < obtuso (135°) < llano (180°) < completo (360°).' },
        { t: 'num', q: '¿Cuántos grados mide el ángulo complementario de 35°?', a: 55, u: '°', why: 'Dos ángulos complementarios suman 90°, así que restamos: 90° − 35° = 55°.' },
        { t: 'num', q: '¿Cuántos grados mide el ángulo suplementario de 110°?', a: 70, u: '°', why: 'Dos ángulos suplementarios suman 180°, así que restamos: 180° − 110° = 70°.' },
        { t: 'choice', q: 'Si un ángulo mide 89° 60′, ¿de qué tipo de ángulo se trata realmente?', o: ['Recto, porque 89° 60′ = 90°', 'Agudo, porque empieza por 89°', 'Obtuso, porque se pasa de 90°'], a: 0, why: 'Como 60′ es exactamente 1°, al sumarlo a 89° obtenemos 89° + 1° = 90°, que es un ángulo recto.' },
        { t: 'tap', q: 'Encuentra los dos números erróneos en esta frase.', words: ['Un', 'ángulo', 'recto', 'mide', '100', 'grados', 'y', 'uno', 'llano', 'mide', '200', 'grados.'], wrong: [4, 10], why: 'Un ángulo recto mide <b>90</b> grados y un ángulo llano mide <b>180</b> grados.' },
        { t: 'choice', q: '¿Cuál es el ángulo complementario de 40° 20′?', o: ['49° 40′', '50° 40′', '49° 80′', '139° 40′'], a: 0, why: 'Escribimos 90° como 89° 60′ y restamos: (89° − 40°) = 49° y (60′ − 20′) = 40′ → 49° 40′.' },
        { t: 'gen', f: () => {
          const isComp = Math.random() < 0.5;
          const total = isComp ? 90 : 180;
          const name = isComp ? 'complementario' : 'suplementario';
          const deg = isComp ? R(12, 78) : R(25, 165);
          const ans = total - deg;
          return { t: 'num', q: `Calcula en grados el ángulo <b>${name}</b> de un ángulo de <b>${deg}°</b>.`, a: ans, u: '°', why: `Los ángulos ${name}s suman ${total}°. Restamos: ${total}° − ${deg}° = ${ans}°.` };
        } },
        { t: 'gen', f: () => {
          const d = R(2, 12), m = R(5, 55);
          const tot = d * 60 + m;
          return { t: 'num', q: `Expresa el ángulo <b>${d}° ${m}′</b> únicamente en minutos angulares (′).`, a: tot, u: '′', why: `Como 1° = 60′, multiplicamos ${d} · 60 + ${m} = ${d * 60} + ${m} = ${tot}′.` };
        } },
        { t: 'gen', f: () => {
          const d = R(1, 6), m = R(5, 54);
          const tot = d * 60 + m;
          const ok = `${d}° ${m}′`;
          const cands = [`${d + 1}° ${m}′`, `${d}° ${(m + 15) % 60 || 10}′`, `${d + 2}° ${m}′`, `${m}° ${d}′`, `${d}° ${m + 5}′`].filter(x => x !== ok);
          const opts = SH([ok, ...[...new Set(cands)].slice(0, 3)]);
          return { t: 'choice', q: `Convierte <b>${tot}′</b> a grados y minutos (forma compleja).`, o: opts, a: opts.indexOf(ok), why: `Dividimos ${tot} ÷ 60: el cociente es ${d}° (${d} · 60 = ${d * 60}) y el resto es ${m}′. Resultado: ${ok}.` };
        } }
      ]
    },
    {
      title: 'Sumas, restas y problemas sexagesimales',
      intro: [
        { i: '➕', h: 'Sumar en el sistema sexagesimal', p: 'Colocamos horas con horas (o grados con grados), minutos con minutos y segundos con segundos.<br>Si al sumar los segundos o los minutos salen <b>60 o más</b>, restamos 60 y <b>sumamos 1</b> a la unidad inmediatamente superior.' },
        { i: '➖', h: 'Restar pidiendo prestado 60', p: 'Si en la resta los minutos (o segundos) de arriba son menores que los de abajo, <b>pedimos 1 unidad</b> al orden superior y la transformamos en <b>60</b>.<br>Ejemplo: para restar <b>3 h 10 min − 1 h 40 min</b>, transformamos 3 h 10 min en <b>2 h 70 min</b> y restamos → <b>1 h 30 min</b>.' },
        { i: '🚆', h: 'Problemas con horarios y giros', p: '• <b>Hora de llegada</b> = hora de salida + duración.<br>• <b>Duración</b> = hora de llegada − hora de salida.<br>• En geometría, la suma de los ángulos de un triángulo es siempre <b>180°</b>.' }
      ],
      ex: [
        { t: 'choice', q: 'Al sumar 1 h 40 min + 2 h 35 min obtenemos 3 h 75 min. ¿Cómo se escribe correctamente?', o: ['4 h 15 min', '3 h 15 min', '4 h 25 min', '3 h 75 min'], a: 0, why: 'Como 75 min se pasa de 60, hacemos 75 − 60 = 15 min y sumamos 1 h a las 3 h: 4 h 15 min.' },
        { t: 'choice', q: 'Para calcular la resta 5° 20′ − 2° 50′, ¿cómo transformamos el minuendo (5° 20′) antes de restar?', o: ['En 4° 80′', 'En 4° 120′', 'En 6° 80′', 'En 4° 60′'], a: 0, why: 'Como a 20′ no le podemos quitar 50′, tomamos 1° de los 5° (quedan 4°) y añadimos 60′ a los 20′: 20′ + 60′ = 80′.' },
        { t: 'tf', q: 'La suma de 25° 30′ y 14° 30′ es exactamente 40°.', a: true, why: 'Sumamos por separado: 25° + 14° = 39° y 30′ + 30′ = 60′ = 1°. En total, 39° + 1° = 40°.' },
        { t: 'tf', q: 'Al restar 4 h 15 min − 1 h 45 min el resultado es 3 h 30 min.', a: false, why: 'Pasamos 4 h 15 min a 3 h 75 min y restamos: (3 − 1) h = 2 h y (75 − 45) min = 30 min. El resultado es <b>2 h 30 min</b>.' },
        { t: 'order', q: 'Ordena los pasos para calcular la resta 4 h 10 min − 1 h 35 min.', items: ['Ver que 10 min es menor que 35 min', 'Quitar 1 h a las 4 h y sumar 60 min a los 10 min (3 h 70 min)', 'Restar los minutos: 70 min − 35 min = 35 min', 'Restar las horas: 3 h − 1 h = 2 h (resultado: 2 h 35 min)'], why: 'Primero comprobamos si necesitamos pedir prestado, convertimos 1 h en 60 min y luego restamos minutos y horas.' },
        { t: 'match', q: 'Une cada operación con su resultado ya simplificado.', pairs: [['1 h 30 min + 1 h 30 min', '3 h'], ['2 h 45 min + 1 h 20 min', '4 h 5 min'], ['3 h 10 min − 1 h 20 min', '1 h 50 min'], ['4° 15′ + 2° 35′', '6° 50′']], why: 'En las dos primeras los minutos pasan de 60 y suman 1 h; en la tercera pedimos 60 min prestados (2 h 70 min − 1 h 20 min).' },
        { t: 'num', q: 'Un tren sale de Zaragoza a las 09:40 y llega a Huesca a las 10:35. ¿Cuántos minutos dura el viaje?', a: 55, u: 'min', why: 'De 09:40 a 10:00 van 20 minutos, y de 10:00 a 10:35 van 35 minutos: 20 + 35 = 55 min.' },
        { t: 'sort', q: 'Clasifica estas sumas según si los minutos llegan a 60 (hay llevada) o no.', cats: ['Con llevada a la unidad superior', 'Sin llevada'], items: [{ x: '2 h 40 min + 1 h 30 min', c: 0 }, { x: '15° 20′ + 10° 25′', c: 1 }, { x: '3 h 50 min + 2 h 15 min', c: 0 }, { x: '40° 10′ + 20° 35′', c: 1 }, { x: '18° 45′ + 12° 20′', c: 0 }, { x: '1 h 15 min + 2 h 25 min', c: 1 }], why: 'Hay llevada cuando la suma de los minutos es 60 o mayor: 40+30=70, 50+15=65 y 45+20=65.' },
        { t: 'tap', q: 'En esta suma de ángulos hay dos números mal calculados. ¡Tócalos!', words: ['Al', 'sumar', '10°', '40′', 'más', '20°', '30′', 'obtenemos', '30°', '10′', 'porque', 'sobran', '20′.'], wrong: [8, 12], why: '10° + 20° = 30°, pero 40′ + 30′ = 70′ = 1° 10′. Al sumar 1° quedan <b>31°</b> y sobran <b>10′</b>.' },
        { t: 'num', q: 'Dos ángulos de un triángulo miden 65° y 45°. ¿Cuántos grados mide el tercer ángulo?', a: 70, u: '°', why: 'Los tres ángulos de cualquier triángulo suman 180°. Como 65° + 45° = 110°, el tercero mide 180° − 110° = 70°.' },
        { t: 'choice', q: 'Una película empieza a las 17:45 y dura 1 h 50 min. ¿A qué hora termina?', o: ['A las 19:35', 'A las 18:35', 'A las 19:25', 'A las 18:95'], a: 0, why: 'Sumamos 17 h 45 min + 1 h 50 min = 18 h 95 min. Como 95 min = 1 h 35 min, termina a las 19:35.' },
        { t: 'tf', q: 'Si un entrenamiento empieza a las 16:50 y acaba a las 18:15, ha durado 1 h 25 min.', a: true, why: 'De 16:50 a 17:00 van 10 min y de 17:00 a 18:15 va 1 h 15 min. En total: 1 h 25 min.' },
        { t: 'gen', f: () => {
          const isAngle = Math.random() < 0.5;
          const u1 = isAngle ? '°' : ' h', u2 = isAngle ? '′' : ' min';
          const a1 = R(2, 15), m1 = R(30, 55), a2 = R(1, 12), m2 = R(30, 55);
          const rawM = m1 + m2;
          const totA = a1 + a2 + Math.floor(rawM / 60);
          const totM = rawM % 60;
          const ok = `${totA}${u1} ${totM}${u2}`;
          const cands = [`${a1 + a2}${u1} ${totM}${u2}`, `${totA}${u1} ${totM + 10}${u2}`, `${totA + 1}${u1} ${totM + 5}${u2}`, `${a1 + a2}${u1} ${rawM}${u2}`].filter(x => x !== ok);
          const opts = SH([ok, ...[...new Set(cands)].slice(0, 3)]);
          return { t: 'choice', q: `Calcula la suma: <b>${a1}${u1} ${m1}${u2} + ${a2}${u1} ${m2}${u2}</b>.`, o: opts, a: opts.indexOf(ok), why: `Sumamos: ${a1}+${a2} = ${a1 + a2}${u1} y ${m1}+${m2} = ${rawM}${u2} = 1${u1} ${totM}${u2}. Resultado: ${ok}.` };
        } },
        { t: 'gen', f: () => {
          const isAngle = Math.random() < 0.5;
          const u1 = isAngle ? '°' : ' h', u2 = isAngle ? '′' : ' min';
          const a1 = R(5, 18), m1 = R(5, 25), a2 = R(1, a1 - 2), m2 = R(35, 55);
          const totA = (a1 - 1) - a2;
          const totM = (m1 + 60) - m2;
          const ok = `${totA}${u1} ${totM}${u2}`;
          const cands = [`${a1 - a2}${u1} ${totM}${u2}`, `${totA}${u1} ${m2 - m1}${u2}`, `${a1 - a2}${u1} ${m2 - m1}${u2}`, `${totA + 1}${u1} ${totM + 5}${u2}`].filter(x => x !== ok);
          const opts = SH([ok, ...[...new Set(cands)].slice(0, 3)]);
          return { t: 'choice', q: `Calcula la resta: <b>${a1}${u1} ${m1}${u2} − ${a2}${u1} ${m2}${u2}</b>.`, o: opts, a: opts.indexOf(ok), why: `Como ${m1} < ${m2}, pasamos ${a1}${u1} ${m1}${u2} a ${a1 - 1}${u1} ${m1 + 60}${u2}. Restamos: ${a1 - 1}−${a2} = ${totA}${u1} y ${m1 + 60}−${m2} = ${totM}${u2} → ${ok}.` };
        } },
        { t: 'gen', f: () => {
          const h1 = R(8, 16), m1 = P([15, 20, 25, 30, 35, 40, 45, 50]);
          const dur = R(35, 115);
          const totM = h1 * 60 + m1 + dur;
          const h2 = Math.floor(totM / 60), m2 = totM % 60;
          const pad = n => String(n).padStart(2, '0');
          const act = P(['Un autobús sale de Teruel', 'Un taller de robótica empieza', 'Una excursión por el Moncayo comienza', 'Un partido de baloncesto empieza']);
          return { t: 'num', q: `${act} a las <b>${pad(h1)}:${pad(m1)}</b> y termina a las <b>${pad(h2)}:${pad(m2)}</b>. ¿Cuántos <b>minutos</b> ha durado en total?`, a: dur, u: 'min', why: `Hasta las ${pad(h1 + 1)}:00 van ${60 - m1} min, y desde ahí hasta las ${pad(h2)}:${pad(m2)} van ${dur - (60 - m1)} min más: en total ${dur} min.` };
        } }
      ]
    }
  ]
});

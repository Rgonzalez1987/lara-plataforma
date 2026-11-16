const R = Adv.rnd, P = Adv.pick, SH = Adv.shuffle;
const fmt = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u202f');
const toRoman = n => {
  const vals = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  let res = '';
  for (const [v, s] of vals) { while (n >= v) { res += s; n -= v; } }
  return res;
};
const signStr = n => n > 0 ? `+${n}` : String(n);

Adv.register(11, {
  stations: [
    {
      title: 'Números naturales grandes',
      intro: [
        { i: '🔢', h: 'Órdenes de unidades y millones', p: 'En nuestro sistema de numeración decimal, <b>diez unidades de un orden</b> forman una unidad del orden inmediato superior.<br>De derecha a izquierda: unidades (U), decenas (D), centenas (C), unidades de millar (UM), decenas de millar (DM), centenas de millar (CM), <b>unidades de millón (UMM)</b>, decenas de millón (DMM) y centenas de millón (CMM).' },
        { i: '🧩', h: 'Valor posicional y descomposición', p: 'El valor de una cifra depende del lugar que ocupa. En <b>4\u202f305\u202f200</b>:<br>• El <b>4</b> vale 4 UMM = 4\u202f000\u202f000.<br>• El <b>3</b> vale 3 CM = 300\u202f000.<br>• El <b>5</b> vale 5 UM = 5\u202f000.<br>• El <b>2</b> vale 2 C = 200.' },
        { i: '🎯', h: 'Comparar y redondear', p: 'Para <b>redondear</b> a un orden, miramos la cifra situada justo a su derecha:<br>• Si es <b>5 o mayor</b> (5, 6, 7, 8, 9), sumamos 1 a la cifra de ese orden.<br>• Si es <b>menor que 5</b> (0, 1, 2, 3, 4), la dejamos igual.<br>Después sustituimos por ceros todas las cifras de la derecha.' }
      ],
      ex: [
        { t: 'choice', q: '¿Cómo se escribe con cifras «tres millones cuarenta mil doscientos»?', o: ['3\u202f040\u202f200', '3\u202f400\u202f200', '3\u202f004\u202f200'], a: 0, why: '3 UMM (3\u202f000\u202f000) + 4 DM (40\u202f000) + 2 C (200) = 3\u202f040\u202f200. Como no hay centenas ni unidades de millar, ponemos ceros en esas posiciones.' },
        { t: 'choice', q: 'En el número 78\u202f504\u202f312, ¿qué valor en unidades tiene la cifra 8?', o: ['8\u202f000\u202f000', '800\u202f000', '80\u202f000\u202f000'], a: 0, why: 'El 8 ocupa la posición de las unidades de millón (UMM), por lo que vale 8\u202f000\u202f000 unidades.' },
        { t: 'tf', q: 'En el número 6\u202f052\u202f190, la cifra de las centenas de millar es 0.', a: true, why: 'De izquierda a derecha: 6 (UMM), 0 (CM), 5 (DM), 2 (UM), 1 (C), 9 (D), 0 (U). Las centenas de millar valen 0.' },
        { t: 'tf', q: 'Al redondear 4\u202f762\u202f100 a las centenas de millar se obtiene 4\u202f700\u202f000.', a: false, why: 'La cifra de las centenas de millar es 7 y a su derecha hay un 6 (que es ≥ 5), así que sube a 8: el redondeo correcto es 4\u202f800\u202f000.' },
        { t: 'match', q: 'Une cada orden de unidades con su valor en unidades.', pairs: [['1 DM', '10\u202f000'], ['1 CM', '100\u202f000'], ['1 UMM', '1\u202f000\u202f000'], ['1 DMM', '10\u202f000\u202f000']], why: 'Cada orden multiplica por 10 al anterior: DM = 10\u202f000, CM = 100\u202f000, UMM = 1\u202f000\u202f000 y DMM = 10\u202f000\u202f000.' },
        { t: 'order', q: 'Ordena estos números de menor a mayor.', items: ['895\u202f400', '1\u202f020\u202f900', '1\u202f200\u202f000', '1\u202f205\u202f000'], why: '895\u202f400 tiene 6 cifras (es el menor). Los otros tienen 7 cifras y comparamos de izquierda a derecha: 1\u202f020\u202f900 < 1\u202f200\u202f000 < 1\u202f205\u202f000.' },
        { t: 'num', q: 'Escribe con cifras el número formado por <b>5 UMM + 3 CM + 8 UM + 4 D</b>.', a: 5308040, why: '5\u202f000\u202f000 + 300\u202f000 + 8\u202f000 + 40 = 5\u202f308\u202f040. Ponemos ceros en DM, C y U.' },
        { t: 'sort', q: 'Clasifica estos números según su redondeo a las unidades de millón.', cats: ['Se redondea a 5\u202f000\u202f000', 'Se redondea a 6\u202f000\u202f000'], items: [{ x: '5\u202f190\u202f000', c: 0 }, { x: '4\u202f830\u202f000', c: 0 }, { x: '5\u202f420\u202f000', c: 0 }, { x: '5\u202f610\u202f000', c: 1 }, { x: '5\u202f950\u202f000', c: 1 }, { x: '6\u202f210\u202f000', c: 1 }], why: 'Miramos las centenas de millar: 5\u202f190\u202f000, 4\u202f830\u202f000 y 5\u202f420\u202f000 están más cerca de 5 millones; 5\u202f610\u202f000, 5\u202f950\u202f000 y 6\u202f210\u202f000 están más cerca de 6 millones.' },
        { t: 'tap', q: 'En esta descomposición de <b>9\u202f407\u202f050</b> hay dos órdenes equivocados. ¡Cázalos!', words: ['9\u202f407\u202f050', '=', '9\u202fUMM', '+', '4\u202fDM', '+', '7\u202fUM', '+', '5\u202fC'], wrong: [4, 8], why: 'El 4 está en las centenas de millar (<b>4 CM</b>, no 4 DM) y el 5 está en las decenas (<b>5 D</b>, no 5 C).' },
        { t: 'choice', q: '¿Cuántas centenas de millar hay en una unidad de millón?', o: ['10', '100', '1\u202f000'], a: 0, keep: true, why: 'Como 1 UMM = 1\u202f000\u202f000 y 1 CM = 100\u202f000, en un millón hay exactamente 10 centenas de millar.' },
        { t: 'num', q: '¿Cuál es el resultado de <b>350\u202f000 + 650\u202f000</b>?', a: 1000000, why: '350\u202f000 + 650\u202f000 = 1\u202f000\u202f000 (un millón).' },
        { t: 'choice', q: '¿Qué número es una decena de millar mayor que 2\u202f990\u202f000?', o: ['3\u202f000\u202f000', '2\u202f991\u202f000', '3\u202f090\u202f000'], a: 0, why: 'Sumar 1 DM es sumar 10\u202f000: 2\u202f990\u202f000 + 10\u202f000 = 3\u202f000\u202f000.' },
        { t: 'gen', f: () => {
          const umm = R(1, 9), cm = R(0, 9), dm = R(1, 9), um = R(0, 9), c = R(1, 9);
          const n = umm * 1000000 + cm * 100000 + dm * 10000 + um * 1000 + c * 100;
          const parts = [];
          if (umm) parts.push(`${umm} UMM`);
          if (cm) parts.push(`${cm} CM`);
          if (dm) parts.push(`${dm} DM`);
          if (um) parts.push(`${um} UM`);
          if (c) parts.push(`${c} C`);
          return { t: 'num', q: `Escribe el número formado por <b>${parts.join(' + ')}</b>.`, a: n, why: `Sumando el valor de cada orden obtenemos ${fmt(n)}.` };
        } },
        { t: 'gen', f: () => {
          const digs = SH([1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 6);
          const n = Number(digs.join(''));
          const posNames = ['centenas de millar', 'decenas de millar', 'unidades de millar', 'centenas', 'decenas', 'unidades'];
          const mults = [100000, 10000, 1000, 100, 10, 1];
          const idx = R(0, 4);
          const d = digs[idx];
          const val = d * mults[idx];
          return { t: 'num', q: `En el número <b>${fmt(n)}</b>, ¿cuántas unidades vale la cifra <b>${d}</b>?`, a: val, why: `La cifra ${d} ocupa el lugar de las ${posNames[idx]}, así que vale ${d} × ${fmt(mults[idx])} = ${fmt(val)}.` };
        } },
        { t: 'gen', f: () => {
          const ord = P([
            { name: 'unidades de millar', m: 1000 },
            { name: 'decenas de millar', m: 10000 },
            { name: 'centenas de millar', m: 100000 }
          ]);
          let n;
          do { n = R(120000, 980000); } while (n % ord.m === 0 || (n % ord.m) * 2 === ord.m);
          const ans = Math.round(n / ord.m) * ord.m;
          const nextDig = Math.floor((n % ord.m) / (ord.m / 10));
          return { t: 'num', q: `Redondea el número <b>${fmt(n)}</b> a las <b>${ord.name}</b>.`, a: ans, why: `La cifra a la derecha de las ${ord.name} es ${nextDig} (${nextDig >= 5 ? '≥ 5, subimos 1' : '< 5, se queda igual'}), por lo que el redondeo es ${fmt(ans)}.` };
        } }
      ]
    },
    {
      title: 'Los números romanos',
      intro: [
        { i: '🏛️', h: 'Las siete letras romanas', p: 'El sistema romano utiliza siete letras mayúsculas con valor fijo:<br><b>I</b> = 1 · <b>V</b> = 5 · <b>X</b> = 10 · <b>L</b> = 50 · <b>C</b> = 100 · <b>D</b> = 500 · <b>M</b> = 1\u202f000.' },
        { i: '➕', h: 'Reglas de suma y resta', p: '• Si una letra va a la derecha de otra de igual o mayor valor, se <b>suma</b>: <b>XV</b> = 10 + 5 = 15.<br>• Si <b>I, X o C</b> van a la izquierda de una de las dos letras siguientes en valor, se <b>restan</b>:<br><b>IV</b> = 4, <b>IX</b> = 9, <b>XL</b> = 40, <b>XC</b> = 90, <b>CD</b> = 400, <b>CM</b> = 900.' },
        { i: '⚠️', h: 'Reglas de repetición', p: '• Las letras <b>I, X, C y M</b> se pueden repetir seguidas hasta <b>3 veces</b> (III = 3, CCC = 300).<br>• Las letras <b>V, L y D nunca se repiten</b> ni se colocan a la izquierda para restar (no existe VV ni VL).' }
      ],
      ex: [
        { t: 'match', q: 'Une cada letra romana con su valor.', pairs: [['L', '50'], ['C', '100'], ['D', '500'], ['M', '1\u202f000']], why: 'En numeración romana: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500 y M = 1\u202f000.' },
        { t: 'tf', q: 'En los números romanos, las letras V, L y D nunca se pueden repetir seguidas.', a: true, why: 'Porque VV sería 10 (que se escribe X), LL sería 100 (C) y DD sería 1\u202f000 (M).' },
        { t: 'tf', q: 'El número 49 se escribe IL en números romanos.', a: false, why: 'La letra I solo puede restar a V y a X. Para escribir 49 descomponemos 40 (XL) + 9 (IX) = <b>XLIX</b>.' },
        { t: 'choice', q: '¿Cómo se escribe correctamente el número 99 en números romanos?', o: ['XCIX', 'IC', 'XCVIIII'], a: 0, why: 'Se descompone en decenas y unidades: 90 (XC) + 9 (IX) = XCIX. La I nunca resta a la C.' },
        { t: 'num', q: '¿Qué número representa el numeral romano <b>MCDXCII</b>?', a: 1492, why: 'M (1\u202f000) + CD (400) + XC (90) + II (2) = 1\u202f492.' },
        { t: 'num', q: '¿A qué siglo pertenece el año <b>1789</b>? Escribe solo el número.', a: 18, why: 'El año 1789 tiene 17 centenas completas y 89 años más, así que pertenece al siglo XVIII (18).' },
        { t: 'sort', q: 'Clasifica estos numerales romanos según estén bien o mal escritos.', cats: ['Bien escrito', 'Mal escrito'], items: [{ x: 'XLIV', c: 0 }, { x: 'CMXC', c: 0 }, { x: 'MDCVI', c: 0 }, { x: 'XXXX', c: 1 }, { x: 'VV', c: 1 }, { x: 'IC', c: 1 }], why: 'XLIV (44), CMXC (990) y MDCVI (1\u202f606) cumplen todas las reglas. XXXX repite X cuatro veces, VV repite V e IC resta I a C.' },
        { t: 'order', q: 'Ordena estos números romanos de menor a mayor.', items: ['XXXIX', 'XL', 'LIX', 'XC', 'CI'], why: 'XXXIX = 39, XL = 40, LIX = 59, XC = 90 y CI = 101.' },
        { t: 'tap', q: 'En esta lista hay dos numerales romanos mal escritos. ¡Cázalos!', words: ['XIV', 'XXXXII', 'LXXV', 'XCIX', 'CCM', 'MMXXIV'], wrong: [1, 4], why: '42 se escribe <b>XLII</b> (X no se repite 4 veces) y 800 se escribe <b>DCCC</b> (C no puede restar dos veces a M).' },
        { t: 'choice', q: 'En Zaragoza se celebró la Exposición Internacional en el año <b>MMVIII</b>. ¿Qué año fue?', o: ['2008', '2018', '1998'], a: 0, why: 'MM (2\u202f000) + V (5) + III (3) = 2008.' },
        { t: 'choice', q: '¿Cómo se escribe en números romanos el año <b>1978</b>?', o: ['MCMLXXVIII', 'MDCCCCLXXVIII', 'MCMXXCVIII'], a: 0, why: '1\u202f000 (M) + 900 (CM) + 70 (LXX) + 8 (VIII) = MCMLXXVIII.' },
        { t: 'num', q: 'Calcula en nuestro sistema decimal: <b>CLX + XL</b>.', a: 200, why: 'CLX es 160 y XL es 40. Su suma es 160 + 40 = 200 (CC).' },
        { t: 'gen', f: () => {
          const n = R(14, 399);
          const rom = toRoman(n);
          return { t: 'num', q: `¿Qué valor tiene el número romano <b>${rom}</b>?`, a: n, why: `Descomponiendo letra a letra según las reglas de suma y resta, ${rom} equivale a ${n}.` };
        } },
        { t: 'gen', f: () => {
          const n = R(21, 999);
          const ok = toRoman(n);
          const w1 = toRoman(n + P([1, 2, 10, -1, -10]));
          let w2 = toRoman(Math.max(5, n + P([5, 20, -5, -20])));
          if (w2 === ok || w2 === w1) w2 = toRoman(n + 3);
          const opts = SH([ok, w1, w2]);
          return { t: 'choice', q: `¿Cómo se escribe <b>${n}</b> en números romanos?`, o: opts, a: opts.indexOf(ok), why: `Descomponemos ${n} en centenas, decenas y unidades para obtener ${ok}.` };
        } },
        { t: 'gen', f: () => {
          const yr = R(1101, 2025);
          const cent = Math.ceil(yr / 100);
          return { t: 'num', q: `¿A qué siglo (escrito en cifras, por ejemplo 15) pertenece el año <b>${yr}</b>?`, a: cent, why: `Dividimos ${yr} entre 100: como pasa de ${(cent - 1) * 100} sin superar ${cent * 100}, corresponde al siglo ${toRoman(cent)} (${cent}).` };
        } }
      ]
    },
    {
      title: 'Números enteros en acción',
      intro: [
        { i: '🌡️', h: 'Positivos, negativos y el cero', p: 'Los <b>números enteros</b> incluyen los positivos (+1, +2, +3…), el <b>0</b> y los negativos (−1, −2, −3…).<br>Sirven para expresar temperaturas bajo cero (−4 °C), plantas de sótano (−2) o profundidades bajo el nivel del mar (−50 m).' },
        { i: '📏', h: 'La recta numérica y la comparación', p: 'En la recta numérica, los negativos están a la <b>izquierda del 0</b> y los positivos a la <b>derecha</b>.<br>Un número entero es <b>mayor cuanto más a la derecha</b> está: +3 > −1, 0 > −5 y <b>−2 > −8</b> (porque −2 está más cerca del 0).' },
        { i: '🔄', h: 'Valor absoluto y opuesto', p: '• El <b>valor absoluto</b> de un entero es su distancia al 0 (siempre sin signo): |−7| = 7 y |+7| = 7.<br>• El <b>opuesto</b> de un número está a la misma distancia del 0 pero al otro lado: op(+6) = −6 y op(−4) = +4.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué número entero representa «un submarino navega a 120 metros bajo el nivel del mar»?', o: ['−120', '+120', '0'], a: 0, keep: true, why: 'El nivel del mar es el 0; bajo el nivel del mar se expresa con signo negativo: −120.' },
        { t: 'tf', q: 'En la recta numérica, −3 es mayor que −9.', a: true, why: '−3 está más a la derecha (más cerca del 0) que −9, por tanto −3 > −9.' },
        { t: 'tf', q: 'El número 0 es mayor que cualquier número entero negativo.', a: true, why: 'Todos los números negativos están a la izquierda del 0 en la recta numérica.' },
        { t: 'sort', q: 'Clasifica cada situación según se exprese con un entero positivo o negativo.', cats: ['Positivo (+)', 'Negativo (−)'], items: [{ x: 'Cumbre del Aneto a 3\u202f404 m de altitud', c: 0 }, { x: 'Termómetro en Jaca a 5 grados bajo cero', c: 1 }, { x: 'Aparcar en el tercer sótano', c: 1 }, { x: 'Ingresar 25 € en la hucha', c: 0 }, { x: 'Bucear a 15 m de profundidad', c: 1 }, { x: 'Subir a la cuarta planta', c: 0 }], why: 'Altitudes sobre el mar, ingresos y plantas sobre el suelo son positivos (+); temperaturas bajo cero, sótanos y profundidades son negativos (−).' },
        { t: 'order', q: 'Ordena estos números enteros de menor a mayor.', items: ['−12', '−5', '−1', '0', '+4', '+9'], why: 'De izquierda a derecha en la recta numérica: −12 < −5 < −1 < 0 < +4 < +9.' },
        { t: 'match', q: 'Une cada expresión con su resultado.', pairs: [['Opuesto de +8', '−8'], ['Opuesto de −5', '+5'], ['Valor absoluto de −11', '11'], ['Siguiente de −4', '−3']], why: 'El opuesto cambia el signo; el valor absoluto deja la distancia al 0 sin signo; un paso a la derecha de −4 es −3.' },
        { t: 'num', q: 'En Benasque la temperatura era de <b>−4 °C</b> al amanecer y al mediodía subió <b>11 °C</b>. ¿Qué temperatura marcaba al mediodía?', a: 7, u: '°C', neg: true, why: 'Partimos de −4 y sumamos 11: −4 + 11 = +7 °C.' },
        { t: 'num', q: 'Un ascensor está en la planta <b>+3</b> y baja <b>5 plantas</b>. ¿A qué planta llega?', a: -2, neg: true, why: '3 − 5 = −2 (llega al segundo sótano).' },
        { t: 'tap', q: 'En esta frase hay dos comparaciones falsas. ¡Cázalas!', words: ['Sabemos', 'que', '+5>−2,', 'que', '−8>−3,', 'que', '0>−6', 'y', 'que', '−1<−9.'], wrong: [4, 9], why: '−8 es menor que −3 (−8 < −3) y −1 es mayor que −9 (−1 > −9) porque está más cerca del 0.' },
        { t: 'choice', q: '¿Cuántos pisos recorre un ascensor para ir del sótano <b>−3</b> a la planta <b>+4</b>?', o: ['7 pisos', '1 piso', '6 pisos'], a: 0, keep: true, why: 'Sube 3 pisos desde −3 hasta la planta 0, y otros 4 pisos hasta la +4: 3 + 4 = 7 pisos.' },
        { t: 'tf', q: 'Dos números opuestos tienen signos iguales pero distinto valor absoluto.', a: false, why: 'Es justo al revés: dos números opuestos tienen signos contrarios y el mismo valor absoluto (por ejemplo, |−6| = |+6| = 6).' },
        { t: 'num', q: 'Un buceador está a <b>−18 m</b> y asciende <b>7 m</b>. ¿A qué posición respecto al nivel del mar se encuentra ahora?', a: -11, u: 'm', neg: true, why: '−18 + 7 = −11 m (sigue a 11 metros bajo el nivel del mar).' },
        { t: 'gen', f: () => {
          const t0 = R(-12, -1);
          const delta = R(3, 18);
          const up = Math.random() < 0.65;
          const tf = up ? t0 + delta : t0 - delta;
          const city = P(['Teruel', 'Jaca', 'Molina de Aragón', 'Canfranc', 'Sallent de Gállego']);
          return { t: 'num', q: `En ${city} el termómetro marca <b>${t0} °C</b> y la temperatura ${up ? 'sube' : 'baja'} <b>${delta} °C</b>. ¿Qué temperatura marca ahora?`, a: tf, u: '°C', neg: true, why: `Calculamos ${t0} ${up ? '+' : '−'} ${delta} = ${signStr(tf)} °C.` };
        } },
        { t: 'gen', f: () => {
          const mode = P(['op', 'abs', 'step']);
          if (mode === 'op') {
            let n; do { n = R(-25, 25); } while (n === 0);
            return { t: 'num', q: `¿Cuál es el <b>opuesto</b> del número entero <b>${signStr(n)}</b>?`, a: -n, neg: true, why: `El opuesto de ${signStr(n)} tiene la misma distancia al 0 pero signo contrario: ${signStr(-n)}.` };
          }
          if (mode === 'abs') {
            const n = -R(2, 40);
            return { t: 'num', q: `¿Cuál es el <b>valor absoluto</b> de <b>${n}</b> (es decir, |${n}|)?`, a: Math.abs(n), why: `El valor absoluto es la distancia al 0, siempre positiva: |${n}| = ${Math.abs(n)}.` };
          }
          const start = R(-10, 10);
          const dir = Math.random() < 0.5 ? 1 : -1;
          const steps = R(2, 9);
          const ans = start + dir * steps;
          return { t: 'num', q: `En la recta numérica, partes de <b>${signStr(start)}</b> y te mueves <b>${steps} unidades hacia la ${dir > 0 ? 'derecha' : 'izquierda'}</b>. ¿A qué número llegas?`, a: ans, neg: true, why: `Moverse a la ${dir > 0 ? 'derecha es sumar' : 'izquierda es restar'}: ${signStr(start)} ${dir > 0 ? '+' : '−'} ${steps} = ${signStr(ans)}.` };
        } },
        { t: 'gen', f: () => {
          const pool = SH([-19, -16, -14, -11, -9, -7, -5, -4, -2, -1, 0, 2, 5, 8]).slice(0, 4);
          const askMin = Math.random() < 0.5;
          const target = askMin ? Math.min(...pool) : Math.max(...pool);
          const opts = pool.map(signStr);
          return { t: 'choice', q: `¿Cuál de estos números enteros es el <b>${askMin ? 'menor' : 'mayor'}</b>?`, o: opts, a: pool.indexOf(target), why: `En la recta numérica, el que está más a la ${askMin ? 'izquierda' : 'derecha'} es ${signStr(target)}.` };
        } }
      ]
    }
  ]
});

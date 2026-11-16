const R = Adv.rnd, P = Adv.pick, G = Adv.gcd, L = Adv.lcm, SH = Adv.shuffle, F = Adv.frac;
const simp = (n, d) => { const g = G(n, d); return [n / g, d / g]; };

Adv.register(14, {
  stations: [
    {
      title: 'Fracciones equivalentes e irreducibles',
      intro: [
        { i: '🍕', h: '¿Cuándo son equivalentes dos fracciones?', p: `Dos fracciones son <b>equivalentes</b> cuando representan la misma parte de la unidad: ${F(1, 2)} = ${F(2, 4)} = ${F(3, 6)}.<br>Se comprueba multiplicando en cruz: <b>1 · 4 = 2 · 2</b>.` },
        { i: '🔍', h: 'Amplificar y simplificar', p: `• <b>Amplificar</b>: multiplicar numerador y denominador por un mismo número distinto de cero.<br>• <b>Simplificar</b>: dividir numerador y denominador por un divisor común.<br>Cuando ya no tienen divisores comunes (salvo el 1), hemos llegado a la <b>fracción irreducible</b> (dividiendo por su M.C.D.).` },
        { i: '⚖️', h: 'Reducir a común denominador', p: `Para comparar u operar fracciones con distinto denominador, buscamos fracciones equivalentes que tengan como denominador el <b>m.c.m.</b> de los denominadores.<br>Para ${F(1, 4)} y ${F(1, 6)}, m.c.m.(4, 6) = 12 → ${F(3, 12)} y ${F(2, 12)}.` }
      ],
      ex: [
        { t: 'choice', q: `¿Cuál de estas fracciones es equivalente a ${F(2, 3)}?`, o: [F(6, 9), F(4, 9), F(5, 6)], a: 0, why: `Multiplicando numerador y denominador de ${F(2, 3)} por 3 obtenemos ${F(6, 9)}. Además, en cruz: 2 · 9 = 3 · 6 = 18.` },
        { t: 'tf', q: `Las fracciones ${F(3, 4)} y ${F(9, 12)} son equivalentes.`, a: true, why: 'Comprobamos con los productos cruzados: 3 · 12 = 36 y 4 · 9 = 36. Como dan lo mismo, son equivalentes.' },
        { t: 'tf', q: `La fracción ${F(6, 15)} es irreducible.`, a: false, why: `Tanto 6 como 15 son divisibles por 3: al dividir numerador y denominador entre 3 se obtiene ${F(2, 5)}, que sí es irreducible.` },
        { t: 'choice', q: `¿Cuál es la fracción irreducible de ${F(12, 18)}?`, o: [F(2, 3), F(6, 9), F(3, 4)], a: 0, why: `El M.C.D.(12, 18) es 6. Dividimos arriba y abajo entre 6: 12 : 6 = 2 y 18 : 6 = 3 → ${F(2, 3)}.` },
        { t: 'match', q: 'Une cada fracción con su fracción irreducible.', pairs: [[F(4, 8), F(1, 2)], [F(6, 9), F(2, 3)], [F(9, 12), F(3, 4)], [F(10, 25), F(2, 5)]], why: 'Dividimos cada fracción entre el M.C.D. de su numerador y su denominador (4, 3, 3 y 5 respectivamente).' },
        { t: 'sort', q: 'Clasifica estas fracciones según sean irreducibles o se puedan simplificar.', cats: ['Irreducible', 'Se puede simplificar'], items: [{ x: F(3, 7), c: 0 }, { x: F(5, 8), c: 0 }, { x: F(4, 9), c: 0 }, { x: F(6, 8), c: 1 }, { x: F(10, 15), c: 1 }, { x: F(9, 12), c: 1 }], why: 'En 3/7, 5/8 y 4/9 el numerador y el denominador no comparten divisores primos; 6/8, 10/15 y 9/12 sí se pueden dividir entre 2, 5 y 3.' },
        { t: 'order', q: 'Ordena estas fracciones de menor a mayor.', items: [F(1, 6), F(1, 3), F(1, 2), F(2, 3), F(5, 6)], why: 'Con denominador común 6 son 1/6 < 2/6 (1/3) < 3/6 (1/2) < 4/6 (2/3) < 5/6.' },
        { t: 'num', q: `¿Qué número falta en el numerador para que ${F(3, 5)} = ${F('x', 20)}?`, a: 12, why: 'Para pasar de denominador 5 a 20 hemos multiplicado por 4, así que multiplicamos también el numerador por 4: 3 · 4 = 12.' },
        { t: 'choice', q: `Al reducir ${F(1, 4)} a denominador común con ${F(2, 3)} (que es 12), ¿en qué fracción se convierte ${F(1, 4)}?`, o: [F(3, 12), F(1, 12), F(4, 12)], a: 0, why: `Como m.c.m.(4, 3) = 12 y 12 : 4 = 3, multiplicamos por 3 arriba y abajo: ${F(1, 4)} = ${F(3, 12)}.` },
        { t: 'tap', q: 'En esta cadena de fracciones equivalentes a <b>1/3</b> hay dos intrusas. ¡Cázalas!', words: ['1/3', '=', '2/6', '=', '3/8', '=', '4/12', '=', '5/10', '=', '6/18'], wrong: [4, 8], why: 'Multiplicando 1 y 3 por 3 sale <b>3/9</b> (no 3/8) y por 5 sale <b>5/15</b> (no 5/10).' },
        { t: 'tf', q: 'Si dos fracciones tienen el mismo numerador, es mayor la que tiene mayor denominador.', a: false, why: `Es al revés: al dividir la unidad en más partes, cada parte es más pequeña (${F(1, 3)} > ${F(1, 5)}).` },
        { t: 'num', q: `¿Cuál es el mínimo común denominador de ${F(3, 8)} y ${F(5, 12)}?`, a: 24, why: 'El mínimo común denominador es el m.c.m. de los denominadores: m.c.m.(8, 12) = 24.' },
        { t: 'gen', f: () => {
          const pairs = [[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [1, 6], [5, 6], [2, 7], [3, 8]];
          const [n, d] = P(pairs);
          const k = R(2, 9);
          const askNum = Math.random() < 0.5;
          if (askNum) {
            return { t: 'num', q: `Calcula el término desconocido <i>x</i> para que sean equivalentes: ${F(n, d)} = ${F('<i>x</i>', d * k)}.`, a: n * k, why: `El denominador se ha multiplicado por ${k} (${d} · ${k} = ${d * k}), así que <i>x</i> = ${n} · ${k} = ${n * k}.` };
          }
          return { t: 'num', q: `Calcula el término desconocido <i>x</i> para que sean equivalentes: ${F(n, d)} = ${F(n * k, '<i>x</i>')}.`, a: d * k, why: `El numerador se ha multiplicado por ${k} (${n} · ${k} = ${n * k}), así que <i>x</i> = ${d} · ${k} = ${d * k}.` };
        } },
        { t: 'gen', f: () => {
          const irreds = [[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [2, 5], [3, 5], [4, 5], [3, 7], [5, 6], [5, 8], [7, 9]];
          const [n, d] = P(irreds);
          const k = R(2, 8);
          const bigN = n * k, bigD = d * k;
          const ok = F(n, d);
          const w1 = F(n + 1, d + 1);
          const w2 = F(Math.max(1, n), d + 2);
          const opts = SH([ok, w1, w2]);
          return { t: 'choice', q: `Simplifica ${F(bigN, bigD)} hasta su <b>fracción irreducible</b>.`, o: opts, a: opts.indexOf(ok), why: `M.C.D.(${bigN}, ${bigD}) = ${k}. Dividiendo numerador y denominador entre ${k} obtenemos ${F(n, d)}.` };
        } },
        { t: 'gen', f: () => {
          const dens = [[3, 4], [2, 5], [4, 6], [6, 8], [4, 10], [6, 9], [8, 12], [5, 6], [3, 8], [6, 15], [9, 12], [10, 15]];
          const [d1, d2] = P(dens);
          const n1 = R(1, d1 - 1), n2 = R(1, d2 - 1);
          const m = L(d1, d2);
          return { t: 'num', q: `¿Cuál es el <b>mínimo común denominador</b> para reducir a común denominador las fracciones ${F(n1, d1)} y ${F(n2, d2)}?`, a: m, why: `El mínimo común denominador es el m.c.m.(${d1}, ${d2}) = ${m}.` };
        } }
      ]
    },
    {
      title: 'Suma y resta de fracciones',
      intro: [
        { i: '➕', h: 'Con el mismo denominador', p: `Para sumar o restar fracciones con el <b>mismo denominador</b>, se suman o se restan los numeradores y se deja el <b>mismo denominador</b>:<br>${F(2, 7)} + ${F(3, 7)} = ${F(5, 7)} (y en la resta: 7/9 − 4/9 = 3/9).` },
        { i: '🔄', h: 'Con distinto denominador', p: `Si tienen <b>distinto denominador</b>, primero las reducimos a <b>común denominador</b> (m.c.m.) y después sumamos o restamos los numeradores:<br>${F(1, 2)} + ${F(1, 3)} = ${F(3, 6)} + ${F(2, 6)} = ${F(5, 6)}.` },
        { i: '🍰', h: 'La unidad entera y las fracciones', p: `La unidad <b>1</b> tiene el numerador igual al denominador (1 = 4/4 = 8/8).<br>Si te comes ${F(3, 8)} de una tarta, quedan 1 − ${F(3, 8)} = ${F(8, 8)} − ${F(3, 8)} = ${F(5, 8)}.` }
      ],
      ex: [
        { t: 'choice', q: `¿Cuál es el resultado de ${F(3, 11)} + ${F(5, 11)}?`, o: [F(8, 11), F(8, 22), F(15, 11)], a: 0, why: `Como tienen el mismo denominador (11), sumamos los numeradores (3 + 5 = 8) y mantenemos el denominador: ${F(8, 11)}.` },
        { t: 'tf', q: `Para sumar ${F(1, 3)} + ${F(1, 4)} se suman los numeradores y los denominadores: ${F(2, 7)}.`, a: false, why: `¡Nunca se suman los denominadores! Hay que pasar a común denominador (12): ${F(4, 12)} + ${F(3, 12)} = ${F(7, 12)}.` },
        { t: 'tf', q: `El resultado de 1 − ${F(2, 9)} es ${F(7, 9)}.`, a: true, why: `Como 1 = ${F(9, 9)}, restamos ${F(9, 9)} − ${F(2, 9)} = ${F(7, 9)}.` },
        { t: 'choice', q: `Calcula y simplifica: ${F(1, 2)} + ${F(1, 4)}.`, o: [F(3, 4), F(2, 6), F(2, 4)], a: 0, why: `Convertimos ${F(1, 2)} en ${F(2, 4)} y sumamos: ${F(2, 4)} + ${F(1, 4)} = ${F(3, 4)}.` },
        { t: 'match', q: 'Une cada resta respecto a la unidad con su resultado.', pairs: [[`1 − ${F(2, 5)}`, F(3, 5)], [`1 − ${F(2, 3)}`, F(1, 3)], [`1 − ${F(1, 2)}`, F(1, 2)], [`1 − ${F(1, 4)}`, F(3, 4)]], why: 'Escribimos 1 con el mismo denominador en cada caso: 5/5 − 2/5 = 3/5; 3/3 − 2/3 = 1/3; 2/2 − 1/2 = 1/2; 4/4 − 1/4 = 3/4.' },
        { t: 'order', q: 'Ordena los pasos para sumar dos fracciones con distinto denominador.', items: ['Hallar el m.c.m. de los denominadores', 'Calcular los nuevos numeradores equivalentes', 'Sumar los numeradores dejando el denominador común', 'Simplificar hasta la fracción irreducible si es posible'], why: 'Primero igualamos denominadores con el m.c.m., luego sumamos numeradores y finalmente simplificamos.' },
        { t: 'sort', q: 'Clasifica cada suma según sea menor que 1, igual a 1 o mayor que 1.', cats: ['Menor que 1', 'Igual a 1', 'Mayor que 1'], items: [{ x: '1/5 + 2/5', c: 0 }, { x: '1/4 + 2/4', c: 0 }, { x: '2/7 + 5/7', c: 1 }, { x: '1/3 + 2/3', c: 1 }, { x: '3/4 + 2/4', c: 2 }, { x: '4/5 + 3/5', c: 2 }], why: 'Si el numerador final es menor que el denominador vale menos de 1; si son iguales vale 1; si es mayor supera la unidad.' },
        { t: 'num', q: `Calcula el numerador del resultado en ${F(7, 10)} − ${F(4, 10)} = ${F('x', 10)}.`, a: 3, why: 'Tienen el mismo denominador (10), así que restamos los numeradores: 7 − 4 = 3.' },
        { t: 'choice', q: `Lara ha leído ${F(2, 5)} de una novela por la mañana y ${F(1, 5)} por la tarde. ¿Qué fracción del libro le falta por leer?`, o: [F(2, 5), F(3, 5), F(1, 5)], a: 0, why: `Ha leído 2/5 + 1/5 = 3/5 del libro. Como el total es 5/5, le falta 5/5 − 3/5 = ${F(2, 5)}.` },
        { t: 'tap', q: 'En esta lista hay dos sumas mal hechas. ¡Cázalas!', words: ['2/7+3/7=5/7', '1/4+2/4=3/8', '5/9−2/9=3/9', '1/2+1/2=2/4', '3/5+1/5=4/5'], wrong: [1, 3], why: 'El denominador nunca se suma: 1/4 + 2/4 = <b>3/4</b> (no 3/8) y 1/2 + 1/2 = <b>2/2 = 1</b> (no 2/4).' },
        { t: 'choice', q: `¿Cuál es el resultado de ${F(5, 6)} − ${F(1, 2)} simplificado?`, o: [F(1, 3), F(4, 4), F(2, 3)], a: 0, why: `Pasamos a denominador 6: ${F(5, 6)} − ${F(3, 6)} = ${F(2, 6)}, que simplificado entre 2 es ${F(1, 3)}.` },
        { t: 'num', q: `¿Cuánto es ${F(3, 8)} + ${F(5, 8)}? Escribe el resultado como número natural.`, a: 1, why: `${F(3, 8)} + ${F(5, 8)} = ${F(8, 8)} = 1 unidad completa.` },
        { t: 'gen', f: () => {
          const d = R(5, 15);
          const a = R(1, d - 2), b = R(1, d - a);
          const plus = Math.random() < 0.5;
          if (plus) {
            return { t: 'num', q: `Calcula el <b>numerador</b> del resultado (sin cambiar el denominador ${d}): ${F(a, d)} + ${F(b, d)} = ${F('<i>x</i>', d)}.`, a: a + b, why: `Con igual denominador sumamos los numeradores: ${a} + ${b} = ${a + b}.` };
          }
          const hi = Math.max(a + 1, b), lo = Math.min(a, b);
          return { t: 'num', q: `Calcula el <b>numerador</b> del resultado (sin cambiar el denominador ${d}): ${F(hi, d)} − ${F(lo, d)} = ${F('<i>x</i>', d)}.`, a: hi - lo, why: `Con igual denominador restamos los numeradores: ${hi} − ${lo} = ${hi - lo}.` };
        } },
        { t: 'gen', f: () => {
          const pairs = [[2, 3], [2, 5], [3, 4], [3, 5], [4, 5], [2, 7], [3, 7], [4, 6], [6, 8], [3, 6]];
          const [d1, d2] = P(pairs);
          const n1 = R(1, d1 - 1), n2 = R(1, d2 - 1);
          const plus = Math.random() < 0.6 || (n1 * d2 > n2 * d1);
          let rawN = plus ? n1 * d2 + n2 * d1 : n1 * d2 - n2 * d1;
          let a1 = n1, b1 = d1, a2 = n2, b2 = d2;
          if (!plus && rawN <= 0) {
            [a1, b1, a2, b2] = [n2, d2, n1, d1];
            rawN = a1 * b2 - a2 * b1;
          }
          if (rawN === 0) { a1 = 1; b1 = 2; a2 = 1; b2 = 3; rawN = 1; }
          const rawD = b1 * b2;
          const [sn, sd] = simp(rawN, rawD);
          const m = L(b1, b2);
          const ok = F(sn, sd);
          const w1 = F(a1 + (plus ? a2 : Math.max(1, a1 - a2)), b1 + b2);
          let w2 = F(sn + 1, sd);
          if (w1 === ok || w1 === w2) w2 = F(sn + 2, sd + 1);
          const opts = SH([ok, w1, w2]);
          const sign = plus ? '+' : '−';
          return { t: 'choice', q: `Calcula y simplifica hasta la fracción irreducible: ${F(a1, b1)} ${sign} ${F(a2, b2)}.`, o: opts, a: opts.indexOf(ok), why: `Con denominador común ${m}: ${F(a1 * (m / b1), m)} ${sign} ${F(a2 * (m / b2), m)} = ${F(a1 * (m / b1) + (plus ? 1 : -1) * a2 * (m / b2), m)}, que simplificada es ${ok}.` };
        } },
        { t: 'gen', f: () => {
          const d = R(4, 15);
          const n = R(1, d - 1);
          const rem = d - n;
          return { t: 'num', q: `De un depósito se han consumido ${F(n, d)} de su capacidad. Si queda ${F('<i>x</i>', d)}, ¿cuánto vale el numerador <i>x</i>?`, a: rem, why: `El total es 1 = ${F(d, d)}. Restamos ${F(d, d)} − ${F(n, d)} = ${F(rem, d)}, así que <i>x</i> = ${rem}.` };
        } }
      ]
    },
    {
      title: 'Multiplicación, división y problemas',
      intro: [
        { i: '✖️', h: 'Multiplicar fracciones (en línea)', p: `Para multiplicar dos fracciones se multiplican los <b>numeradores entre sí</b> y los <b>denominadores entre sí</b>:<br>${F(2, 3)} · ${F(4, 5)} = ${F('2 · 4', '3 · 5')} = ${F(8, 15)}.` },
        { i: '➗', h: 'Dividir fracciones (en cruz)', p: `Para dividir dos fracciones se multiplica la primera por la inversa de la segunda, es decir, <b>en cruz</b>:<br>${F(3, 4)} : ${F(2, 5)} = ${F('3 · 5', '4 · 2')} = ${F(15, 8)}.` },
        { i: '🎯', h: 'Fracción de una cantidad', p: `Para calcular la <b>fracción de un número</b> (por ejemplo, ${F(3, 5)} de 40), dividimos la cantidad entre el denominador y multiplicamos por el numerador:<br><b>(40 : 5) · 3 = 8 · 3 = 24</b>.` }
      ],
      ex: [
        { t: 'choice', q: `¿Cómo se calcula la multiplicación de dos fracciones ${F('a', 'b')} · ${F('c', 'd')}?`, o: ['Multiplicando en línea: numerador por numerador y denominador por denominador', 'Multiplicando en cruz', 'Reduciendo primero a mínimo común denominador'], a: 0, why: `En la multiplicación no hace falta común denominador: se multiplica directamente en línea, ${F('a · c', 'b · d')}.` },
        { t: 'tf', q: `Para dividir dos fracciones multiplicamos sus términos en cruz: ${F(2, 3)} : ${F(5, 7)} = ${F(14, 15)}.`, a: true, why: '2 · 7 = 14 va al numerador y 3 · 5 = 15 va al denominador.' },
        { t: 'tf', q: `El producto de una fracción por su fracción inversa es siempre igual a 1.`, a: true, why: `Por ejemplo, ${F(3, 5)} · ${F(5, 3)} = ${F(15, 15)} = 1.` },
        { t: 'choice', q: `Calcula y simplifica: ${F(2, 3)} · ${F(3, 5)}.`, o: [F(2, 5), F(6, 8), F(10, 9)], a: 0, why: `Multiplicamos en línea: ${F('2 · 3', '3 · 5')} = ${F(6, 15)}, y dividiendo entre 3 obtenemos ${F(2, 5)}.` },
        { t: 'choice', q: `Calcula: ${F(3, 4)} : ${F(1, 2)}.`, o: [F(3, 2), F(3, 8), F(4, 6)], a: 0, why: `Multiplicamos en cruz: ${F('3 · 2', '4 · 1')} = ${F(6, 4)}, que simplificado entre 2 es ${F(3, 2)}.` },
        { t: 'match', q: 'Une cada expresión con su resultado.', pairs: [[`${F(1, 2)} de 20`, '10'], [`${F(3, 4)} de 20`, '15'], [`${F(2, 5)} de 20`, '8'], [`${F(1, 4)} de 20`, '5']], why: 'Dividimos 20 entre el denominador y multiplicamos por el numerador en cada caso.' },
        { t: 'num', q: `En una clase de <b>24</b> alumnas, ${F(3, 4)} practican atletismo. ¿Cuántas alumnas hacen atletismo?`, a: 18, u: 'alumnas', why: `Calculamos ${F(3, 4)} de 24: (24 : 4) · 3 = 6 · 3 = 18 alumnas.` },
        { t: 'num', q: `¿Cuántos vasos de ${F(1, 4)} de litro se pueden llenar con una jarra de <b>3 litros</b>?`, a: 12, u: 'vasos', why: `Dividimos 3 : ${F(1, 4)} = ${F('3 · 4', 1)} = 12 vasos.` },
        { t: 'order', q: 'Ordena estos valores de menor a mayor.', items: [`${F(1, 5)} de 30`, `${F(1, 3)} de 30`, `${F(1, 2)} de 30`, `${F(2, 3)} de 30`], why: 'Calculando cada uno: 6 < 10 < 15 < 20.' },
        { t: 'sort', q: 'Clasifica cada operación según se resuelva multiplicando en línea o multiplicando en cruz.', cats: ['Multiplicar en línea', 'Multiplicar en cruz'], items: [{ x: `${F(2, 5)} · ${F(3, 7)}`, c: 0 }, { x: `${F(1, 4)} · ${F(3, 5)}`, c: 0 }, { x: `La mitad de ${F(4, 9)}`, c: 0 }, { x: `${F(2, 5)} : ${F(3, 7)}`, c: 1 }, { x: `${F(3, 4)} : ${F(1, 8)}`, c: 1 }, { x: `Repartir ${F(6, 7)} en partes de ${F(1, 7)}`, c: 1 }], why: 'La multiplicación (y la fracción de una fracción) se hace en línea; la división (y repartir en partes) se hace en cruz.' },
        { t: 'tap', q: 'En esta pizarra hay dos resultados equivocados. ¡Cázalos!', words: ['1/2·1/3=1/6', '2/5·3/4=6/9', '1/3:1/2=2/3', '3/4:2/5=6/20'], wrong: [1, 3], why: 'En 2/5 · 3/4 se multiplica en línea: <b>6/20 = 3/10</b> (no se suman denominadores a 9). En 3/4 : 2/5 se multiplica en cruz: <b>15/8</b> (no en línea, 6/20).' },
        { t: 'tf', q: `Calcular la mitad de ${F(2, 5)} es lo mismo que multiplicar ${F(1, 2)} · ${F(2, 5)} = ${F(1, 5)}.`, a: true, why: `La fracción de una fracción se calcula multiplicándolas: ${F(1, 2)} · ${F(2, 5)} = ${F(2, 10)} = ${F(1, 5)}.` },
        { t: 'gen', f: () => {
          const d = P([3, 4, 5, 6, 8, 9, 10, 12]);
          const n = R(1, d - 1);
          const q = R(2, 12);
          const total = d * q;
          const ans = n * q;
          const ctx = P([
            [`Calcula ${F(n, d)} de <b>${total}</b>.`, ''],
            [`En una excursión por el Pirineo de <b>${total} km</b>, ya hemos recorrido ${F(n, d)} del camino. ¿Cuántos kilómetros llevamos recorridos?`, 'km'],
            [`De una caja con <b>${total}</b> manzanas de Calatayud, ${F(n, d)} son rojas. ¿Cuántas manzanas rojas hay?`, 'manzanas']
          ]);
          return { t: 'num', q: ctx[0], a: ans, u: ctx[1] || undefined, why: `Dividimos ${total} entre el denominador ${d} (${total} : ${d} = ${q}) y multiplicamos por el numerador ${n}: ${q} · ${n} = ${ans}.` };
        } },
        { t: 'gen', f: () => {
          const frs = [[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [1, 6], [5, 6]];
          const [n1, d1] = P(frs);
          const [n2, d2] = P(frs);
          const isMul = Math.random() < 0.55;
          const rawN = isMul ? n1 * n2 : n1 * d2;
          const rawD = isMul ? d1 * d2 : d1 * n2;
          const [sn, sd] = simp(rawN, rawD);
          const ok = F(sn, sd);
          const w1 = isMul ? F(n1 * d2, d1 * n2) : F(n1 * n2, d1 * d2);
          let w2 = F(sn + 1, sd + 1);
          const set = new Set([ok]);
          const distractors = [w1, w2, F(sn + 1, sd), F(sn, sd + 1), F(sn + 2, sd + 1)].filter(x => {
            if (set.has(x)) return false;
            set.add(x);
            return true;
          });
          const opts = SH([ok, distractors[0], distractors[1]]);
          const op = isMul ? '·' : ':';
          const how = isMul ? `En línea: ${F(`${n1} · ${n2}`, `${d1} · ${d2}`)} = ${F(rawN, rawD)}` : `En cruz: ${F(`${n1} · ${d2}`, `${d1} · ${n2}`)} = ${F(rawN, rawD)}`;
          return { t: 'choice', q: `Calcula y simplifica hasta la fracción irreducible: ${F(n1, d1)} ${op} ${F(n2, d2)}.`, o: opts, a: opts.indexOf(ok), why: `${how}, que simplificada es ${ok}.` };
        } },
        { t: 'gen', f: () => {
          const litros = R(2, 9);
          const d = P([2, 3, 4, 5, 6]);
          const ans = litros * d;
          return { t: 'num', q: `¿Cuántos botes de ${F(1, d)} de kilo se pueden llenar con <b>${litros} kilos</b> de miel?`, a: ans, u: 'botes', why: `Dividimos ${litros} : ${F(1, d)} = ${litros} · ${d} = ${ans} botes.` };
        } }
      ]
    }
  ]
});

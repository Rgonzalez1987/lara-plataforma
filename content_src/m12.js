const R = Adv.rnd, P = Adv.pick, G = Adv.gcd, L = Adv.lcm, SH = Adv.shuffle;
const isPrime = n => { if (n < 2) return false; for (let i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; };
const divCount = n => { let c = 0; for (let i = 1; i <= n; i++) if (n % i === 0) c++; return c; };
const digSum = n => String(n).split('').reduce((a, b) => a + Number(b), 0);
const fmt = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u202f');
const CRIT = { 2: 'acaba en cifra par', 3: 'la suma de sus cifras es múltiplo de 3', 5: 'acaba en 0 o en 5', 9: 'la suma de sus cifras es múltiplo de 9', 10: 'acaba en 0' };

Adv.register(12, {
  stations: [
    {
      title: 'Criterios de divisibilidad',
      intro: [
        { i: '✂️', h: 'Divisible = división exacta', p: 'Un número es <b>divisible</b> por otro cuando al dividirlos el resto es <b>0</b>. Los criterios de divisibilidad nos permiten saberlo <b>sin hacer la división</b>.' },
        { i: '🔑', h: 'Los criterios clave', p: '<b>Por 2</b>: acaba en cifra par (0, 2, 4, 6, 8).<br><b>Por 5</b>: acaba en 0 o en 5.<br><b>Por 10</b>: acaba en 0.<br><b>Por 3</b>: la suma de sus cifras es múltiplo de 3.<br><b>Por 9</b>: la suma de sus cifras es múltiplo de 9.' },
        { i: '🧮', h: 'Ejemplo con las cifras', p: '¿Es 5 724 divisible por 9? Sumamos: 5 + 7 + 2 + 4 = 18, que es múltiplo de 9. <b>¡Sí!</b> Y como 9 = 3 · 3, también es divisible por 3.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué criterio permite saber si un número es divisible por 5?', o: ['Que acabe en 0 o en 5', 'Que acabe en cifra par', 'Que la suma de sus cifras sea múltiplo de 5'], a: 0, why: 'Los múltiplos de 5 siempre terminan en 0 o en 5: 5, 10, 15, 20…' },
        { t: 'tf', q: 'Un número es divisible por 9 si la suma de sus cifras es múltiplo de 9.', a: true, why: 'Por ejemplo, 738: 7 + 3 + 8 = 18, que es múltiplo de 9. Por eso 738 es divisible por 9.' },
        { t: 'tf', q: 'Todo número divisible por 10 es también divisible por 2 y por 5.', a: true, why: 'Si acaba en 0, es par (divisible por 2) y acaba en 0 (divisible por 5). Además 10 = 2 · 5.' },
        { t: 'choice', q: 'Si un número es divisible por 9, ¿también lo es por 3?', o: ['Sí, siempre', 'No, nunca', 'Solo a veces'], a: 0, keep: true, why: 'Como 9 = 3 · 3, cualquier múltiplo de 9 también es múltiplo de 3.' },
        { t: 'tf', q: 'El número 735 es divisible por 2.', a: false, why: '735 acaba en 5, que no es una cifra par, así que no es divisible por 2.' },
        { t: 'match', q: 'Une cada número con su criterio de divisibilidad.', pairs: [['2', 'Acaba en 0, 2, 4, 6 u 8'], ['5', 'Acaba en 0 o en 5'], ['10', 'Acaba en 0'], ['3', 'La suma de sus cifras es múltiplo de 3']], why: 'Los criterios de 2, 5 y 10 solo miran la última cifra; los de 3 y 9 suman todas las cifras.' },
        { t: 'choice', q: '¿Cuál de estos números es divisible por 3 y por 5 a la vez?', o: ['135', '124', '250'], a: 0, why: '135 acaba en 5 (divisible por 5) y 1 + 3 + 5 = 9 (divisible por 3). 250 no es divisible por 3 porque 2 + 5 + 0 = 7.' },
        { t: 'sort', q: 'Clasifica cada número según sea divisible por 2, por 5 o por ambos.', cats: ['Solo por 2', 'Solo por 5', 'Por 2 y por 5'], items: [{ x: '12', c: 0 }, { x: '25', c: 1 }, { x: '40', c: 2 }, { x: '8', c: 0 }, { x: '35', c: 1 }, { x: '100', c: 2 }], why: '12 y 8 son pares pero no acaban en 0 ni en 5; 25 y 35 acaban en 5 pero son impares; 40 y 100 acaban en 0.' },
        { t: 'choice', q: '¿Es divisible por 9 el número 7 245?', o: ['Sí: 7 + 2 + 4 + 5 = 18, múltiplo de 9', 'No, porque acaba en 5', 'Sí, porque acaba en 5'], a: 0, why: 'Para el 9 se suman las cifras, no se mira la última. 7 + 2 + 4 + 5 = 18 y 18 es múltiplo de 9.' },
        { t: 'gen', f: () => {
          const d = P([2, 3, 5, 9, 10]); const yes = Math.random() < 0.5;
          let n; do { n = d * R(12, Math.floor(999 / d)); if (!yes) n += P([1, 2, 3, 4].filter(x => x % d !== 0).concat([1])); } while (n > 999 || (n % d === 0) !== yes || n < 20);
          return { t: 'tf', q: `El número <b>${n}</b> es divisible por <b>${d}</b>.`, a: n % d === 0, why: `Criterio del ${d}: ${CRIT[d]}. ` + (d === 3 || d === 9 ? `Suma de cifras de ${n}: ${String(n).split('').join(' + ')} = ${digSum(n)}.` : `${n} ${n % d === 0 ? 'cumple' : 'no cumple'} ese criterio.`) };
        } },
        { t: 'gen', f: () => {
          const d = P([3, 9]); const dig = SH([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
          const a = R(1, 9), c = R(0, 9); const s = a + c;
          let x = 0; while ((s + x) % d !== 0) x++;
          return { t: 'num', q: `¿Cuál es la <b>menor cifra</b> que puede ir en el hueco para que <b>${a}_${c}</b> sea divisible por <b>${d}</b>?`, a: x, why: `Suma de las cifras conocidas: ${a} + ${c} = ${s}. Necesitamos llegar al siguiente múltiplo de ${d}: ${s} + ${x} = ${s + x}.` };
        } },
        { t: 'gen', f: () => {
          const cand = [2, 3, 5, 9, 10]; let n, divs, non;
          do { n = R(100, 990); divs = cand.filter(d => n % d === 0); non = cand.filter(d => n % d !== 0); } while (divs.length < 1 || non.length < 2);
          const ok = P(divs); const wrong = SH(non).slice(0, 2);
          const opts = SH([ok].concat(wrong)); const a = opts.indexOf(ok);
          return { t: 'choice', q: `¿Por cuál de estos números es divisible <b>${n}</b>?`, o: opts.map(String), a, why: `${n} ${ok === 3 || ok === 9 ? `tiene suma de cifras ${digSum(n)}` : 'cumple el criterio'} del ${ok}: ${CRIT[ok]}.` };
        } }
      ]
    },
    {
      title: 'Números primos y compuestos',
      intro: [
        { i: '💎', h: 'Número primo', p: 'Un número es <b>primo</b> si tiene <b>exactamente dos divisores</b>: el 1 y él mismo. Ejemplos: 2, 3, 5, 7, 11, 13… El <b>1 no es primo</b> (solo tiene un divisor) y el <b>2</b> es el único primo par.' },
        { i: '🧱', h: 'Número compuesto', p: 'Un número es <b>compuesto</b> si tiene <b>más de dos divisores</b>. Por ejemplo, 12 tiene seis: 1, 2, 3, 4, 6 y 12. Todo número compuesto se puede escribir como producto de primos.' },
        { i: '🌳', h: 'Factores primos', p: 'Descomponer un número es escribirlo como <b>producto de factores primos</b>: 12 = 2 · 2 · 3 = 2<sup>2</sup> · 3. Se hace dividiendo entre 2, 3, 5, 7… mientras se pueda.' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuántos divisores tiene un número primo?', o: ['Exactamente dos: el 1 y él mismo', 'Solo uno', 'Tres o más'], a: 0, keep: true, why: 'Esa es la definición: un primo solo se puede dividir exactamente entre 1 y entre sí mismo.' },
        { t: 'tf', q: 'El 1 es un número primo.', a: false, why: 'El 1 solo tiene un divisor (él mismo). Un primo necesita exactamente dos.' },
        { t: 'tf', q: 'El 2 es el único número primo que es par.', a: true, why: 'Cualquier otro número par es divisible por 2 además de por 1 y por él mismo, así que es compuesto.' },
        { t: 'choice', q: '¿Cuál de estos números es compuesto?', o: ['27', '29', '31'], a: 0, why: '27 = 3 · 9, así que tiene más de dos divisores (1, 3, 9 y 27). Tanto 29 como 31 son primos.' },
        { t: 'sort', q: 'Clasifica estos números.', cats: ['Primo', 'Compuesto'], items: [{ x: '7', c: 0 }, { x: '9', c: 1 }, { x: '13', c: 0 }, { x: '15', c: 1 }, { x: '23', c: 0 }, { x: '25', c: 1 }], why: '7, 13 y 23 solo se dividen entre 1 y entre sí mismos. 9 = 3·3, 15 = 3·5 y 25 = 5·5 son compuestos.' },
        { t: 'order', q: 'Ordena de menor a mayor estos números primos.', items: ['2', '3', '5', '7', '11'], why: 'Son los cinco primeros números primos, en orden creciente.' },
        { t: 'choice', q: 'La descomposición en factores primos de 12 es…', o: ['2<sup>2</sup> · 3', '2 · 6', '3 · 4'], a: 0, why: '12 = 2 · 2 · 3. En «2 · 6» y «3 · 4» hay factores que no son primos (6 y 4).' },
        { t: 'num', q: '¿Cuántos números primos hay entre 1 y 10?', a: 4, why: 'Son 2, 3, 5 y 7.' },
        { t: 'tf', q: 'Todos los números impares son primos.', a: false, why: 'El 9 es impar y es compuesto (9 = 3 · 3). También 15, 21, 25…' },
        { t: 'choice', q: '¿Por qué 15 no es un número primo?', o: ['Tiene más de dos divisores: 1, 3, 5 y 15', 'Porque es impar', 'Porque es mayor que 10'], a: 0, why: 'Un número es primo solo si tiene dos divisores. 15 tiene cuatro.' },
        { t: 'match', q: 'Une cada número con su descomposición en factores primos.', pairs: [['12', '2<sup>2</sup> · 3'], ['18', '2 · 3<sup>2</sup>'], ['20', '2<sup>2</sup> · 5'], ['30', '2 · 3 · 5']], why: '12 = 2·2·3, 18 = 2·3·3, 20 = 2·2·5 y 30 = 2·3·5.' },
        { t: 'gen', f: () => {
          const pr = [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
          const co = [21, 27, 33, 35, 39, 49, 51, 55, 57, 63, 65, 69, 75, 77, 85, 87, 91, 93, 95, 99];
          const yes = Math.random() < 0.5; const n = yes ? P(pr) : P(co);
          let why;
          if (yes) why = `${n} no es divisible por ningún primo menor que su raíz: solo tiene dos divisores (1 y ${n}).`;
          else { const d = [2, 3, 5, 7, 11].find(x => n % x === 0); why = `${n} es divisible por ${d} (${n} = ${d} · ${n / d}), así que tiene más de dos divisores.`; }
          return { t: 'tf', q: `El número <b>${n}</b> es primo.`, a: yes, why };
        } },
        { t: 'gen', f: () => {
          const pr = [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
          const co = [21, 27, 33, 35, 39, 49, 51, 55, 57, 63, 65, 69, 75, 77, 85, 87, 91, 93, 95, 99];
          const ok = P(pr); const bad = SH(co).slice(0, 3); const opts = SH([ok].concat(bad));
          return { t: 'choice', q: '¿Cuál de estos números es <b>primo</b>?', o: opts.map(String), a: opts.indexOf(ok), why: `${ok} solo es divisible por 1 y por ${ok}. Los otros tienen divisores propios (por ejemplo ${bad[0]} = ${[3, 5, 7, 11].find(x => bad[0] % x === 0)} · ${bad[0] / [3, 5, 7, 11].find(x => bad[0] % x === 0)}).` };
        } },
        { t: 'gen', f: () => {
          const n = P([4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 32, 33, 35, 36, 40, 42, 44, 45, 48, 49, 50, 54, 56, 60, 64, 72]);
          const ds = []; for (let i = 1; i <= n; i++) if (n % i === 0) ds.push(i);
          return { t: 'num', q: `¿Cuántos divisores tiene el número <b>${n}</b>?`, a: ds.length, why: `Los divisores de ${n} son: ${ds.join(', ')}. En total, ${ds.length}.` };
        } }
      ]
    },
    {
      title: 'm.c.m. y M.C.D.',
      intro: [
        { i: '🔁', h: 'm.c.m.: menor múltiplo común', p: 'Es el <b>menor número</b> (distinto de 0) que es múltiplo de todos los números dados. Para 4 y 6: múltiplos de 4 → 4, 8, <b>12</b>… y de 6 → 6, <b>12</b>… Entonces <b>m.c.m.(4, 6) = 12</b>. Sirve para problemas en los que algo <b>vuelve a coincidir</b>.' },
        { i: '🍬', h: 'M.C.D.: mayor divisor común', p: 'Es el <b>mayor número</b> que divide a todos los números dados. Divisores de 12: 1, 2, 3, 4, 6, 12. De 18: 1, 2, 3, 6, 9, 18. El mayor común es 6, luego <b>M.C.D.(12, 18) = 6</b>. Sirve para <b>repartir en grupos iguales</b> sin que sobre nada.' },
        { i: '🌳', h: 'Con factores primos', p: 'Descompón los números en primos. <b>m.c.m.</b>: multiplica los factores comunes y no comunes con su <b>mayor</b> exponente. <b>M.C.D.</b>: multiplica solo los factores <b>comunes</b> con su <b>menor</b> exponente.' }
      ],
      ex: [
        { t: 'tf', q: 'El m.c.m. de dos números es el menor múltiplo común distinto de cero.', a: true, why: 'Esa es su definición: el primer número que aparece en la lista de múltiplos de ambos.' },
        { t: 'tf', q: 'El M.C.D. de dos números puede ser mayor que cualquiera de ellos.', a: false, why: 'El M.C.D. es un divisor de ambos, así que nunca puede ser mayor que el más pequeño.' },
        { t: 'choice', q: 'Para calcular el m.c.m. con factores primos, multiplicamos…', o: ['Los factores comunes y no comunes con su mayor exponente', 'Solo los factores comunes con su menor exponente', 'Todos los factores sumados'], a: 0, why: 'Ejemplo: 12 = 2²·3 y 18 = 2·3². Tomamos 2² y 3²: m.c.m. = 4 · 9 = 36.' },
        { t: 'choice', q: 'Para calcular el M.C.D. con factores primos, multiplicamos…', o: ['Solo los factores comunes con su menor exponente', 'Todos los factores con su mayor exponente', 'Los factores no comunes'], a: 0, why: 'Ejemplo: 12 = 2²·3 y 18 = 2·3². Comunes: 2 y 3 con menor exponente (2¹ y 3¹): M.C.D. = 6.' },
        { t: 'num', q: '¿Cuál es el M.C.D. de 12 y 18?', a: 6, why: 'Divisores de 12: 1, 2, 3, 4, 6, 12. Divisores de 18: 1, 2, 3, 6, 9, 18. El mayor en común es 6.' },
        { t: 'match', q: 'Une cada concepto con su significado.', pairs: [['m.c.m.', 'Menor múltiplo común'], ['M.C.D.', 'Mayor divisor común'], ['Múltiplo', 'Resultado de multiplicar por un número natural'], ['Divisor', 'Número que divide exactamente a otro']], why: 'Los múltiplos son «hacia arriba» (4, 8, 12…) y los divisores «hacia abajo» (1, 2, 3, 4, 6, 12).' },
        { t: 'choice', q: 'El m.c.m. de 4 y 6 es…', o: ['12', '24', '2'], a: 0, keep: true, why: 'Múltiplos de 4: 4, 8, 12… Múltiplos de 6: 6, 12… El primero común es 12.' },
        { t: 'tf', q: 'Si dos números son primos entre sí (su único divisor común es 1), su m.c.m. es igual a su producto.', a: true, why: 'Por ejemplo, 4 y 9: m.c.m. = 36 = 4 · 9.' },
        { t: 'choice', q: '¿Qué usamos en los problemas donde algo «vuelve a coincidir» cada cierto tiempo?', o: ['El m.c.m.', 'El M.C.D.', 'La raíz cuadrada'], a: 0, keep: true, why: 'Buscamos el primer momento que sea múltiplo de todos los periodos: el m.c.m.' },
        { t: 'choice', q: '¿Qué usamos para repartir en grupos iguales, sin que sobre nada y con los grupos lo más grandes posible?', o: ['El M.C.D.', 'El m.c.m.', 'La suma de los números'], a: 0, keep: true, why: 'Buscamos el mayor número que divida a todas las cantidades: el M.C.D.' },
        { t: 'order', q: 'Ordena los pasos para calcular el M.C.D. con factores primos.', items: ['Descomponer cada número en factores primos', 'Elegir los factores comunes', 'Tomar cada uno con su menor exponente', 'Multiplicarlos'], why: 'Siempre en ese orden: primero se descompone, luego se escogen los comunes y se multiplican.' },
        { t: 'gen', f: () => {
          const a = P([4, 6, 8, 9, 10, 12, 14, 15, 18, 20, 24, 30]); let b; do { b = P([4, 6, 8, 9, 10, 12, 14, 15, 18, 20, 24, 30]); } while (b === a);
          return { t: 'num', q: `Calcula el <b>m.c.m.</b> de <b>${a}</b> y <b>${b}</b>.`, a: L(a, b), why: `M.C.D.(${a}, ${b}) = ${G(a, b)}, y m.c.m. = ${a} · ${b} ÷ ${G(a, b)} = ${L(a, b)}.` };
        } },
        { t: 'gen', f: () => {
          const g = R(2, 9); let x, y; do { x = R(2, 9); y = R(2, 9); } while (x === y || G(x, y) !== 1);
          const a = g * x, b = g * y;
          return { t: 'num', q: `Calcula el <b>M.C.D.</b> de <b>${a}</b> y <b>${b}</b>.`, a: g, why: `Los dos números son múltiplos de ${g} (${a} = ${g}·${x} y ${b} = ${g}·${y}) y ${x} e ${y} no tienen más divisores comunes. M.C.D. = ${g}.` };
        } },
        { t: 'gen', f: () => {
          const a = P([4, 6, 8, 9, 10, 12, 15, 18, 20]); let b; do { b = P([5, 6, 8, 9, 12, 14, 15, 16, 21]); } while (b === a);
          const objs = [['dos luces', 'parpadean', 'segundos'], ['dos autobuses', 'salen de la estación', 'minutos'], ['dos faros', 'emiten un destello', 'segundos']];
          const [su, ve, un] = P(objs);
          return { t: 'num', q: `${su[0].toUpperCase() + su.slice(1)} ${ve}: una cada <b>${a}</b> ${un} y otra cada <b>${b}</b> ${un}. Si acaban de coincidir, ¿cuántos ${un} pasarán hasta que vuelvan a coincidir?`, a: L(a, b), u: un, why: `Buscamos el m.c.m.(${a}, ${b}) = ${L(a, b)}. A los ${L(a, b)} ${un} coinciden de nuevo.` };
        } },
        { t: 'gen', f: () => {
          const g = R(3, 9); let x, y; do { x = R(2, 8); y = R(2, 8); } while (x === y || G(x, y) !== 1);
          const a = g * x, b = g * y; const [n1, n2] = P([['caramelos de fresa', 'de limón'], ['rotuladores azules', 'rojos'], ['cromos de animales', 'de plantas']]);
          return { t: 'num', q: `Hay <b>${a}</b> ${n1} y <b>${b}</b> ${n2}. Quiero hacer bolsas <b>iguales</b>, sin que sobre ninguno y con el <b>mayor número de bolsas</b> posible. ¿Cuántas bolsas puedo hacer?`, a: g, u: 'bolsas', why: `Es un problema de M.C.D.(${a}, ${b}) = ${g}. Con ${g} bolsas, cada una lleva ${x} y ${y} elementos de cada tipo.` };
        } }
      ]
    }
  ]
});

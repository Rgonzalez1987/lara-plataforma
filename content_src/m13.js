const R = Adv.rnd, P = Adv.pick, SH = Adv.shuffle;
const fmt = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u202f');

Adv.register(13, {
  stations: [
    {
      title: 'Potencias, cuadrados y cubos',
      intro: [
        { i: '🚀', h: '¿Qué es una potencia?', p: 'Una <b>potencia</b> es una forma abreviada de escribir una multiplicación de factores iguales: <b>a<sup>n</sup></b>.<br>• La <b>base</b> (<i>a</i>) es el factor que se repite.<br>• El <b>exponente</b> (<i>n</i>) indica cuántas veces se multiplica la base por sí misma.<br>Ejemplo: <b>2<sup>4</sup> = 2 · 2 · 2 · 2 = 16</b>.' },
        { i: '🟦', h: 'Cuadrados y cubos', p: '• Las potencias de exponente <b>2</b> se leen «al <b>cuadrado</b>»: <b>5<sup>2</sup> = 5 · 5 = 25</b> (como el área de un cuadrado de lado 5).<br>• Las potencias de exponente <b>3</b> se leen «al <b>cubo</b>»: <b>4<sup>3</sup> = 4 · 4 · 4 = 64</b> (como el volumen de un cubo de arista 4).' },
        { i: '✨', h: 'Casos especiales que debes recordar', p: '• Cualquier número elevado a <b>1</b> es ese mismo número: <b>7<sup>1</sup> = 7</b>.<br>• Cualquier número (distinto de 0) elevado a <b>0</b> vale siempre <b>1</b>: <b>9<sup>0</sup> = 1</b>.<br>• El número <b>1</b> elevado a cualquier exponente vale siempre <b>1</b>: <b>1<sup>8</sup> = 1</b>.' }
      ],
      ex: [
        { t: 'choice', q: 'En la potencia <b>7<sup>3</sup></b>, ¿cuál es la base y cuál es el exponente?', o: ['Base 7 y exponente 3', 'Base 3 y exponente 7', 'Base 7 y exponente 21'], a: 0, why: 'El número grande de abajo (7) es la base y el número pequeño de arriba (3) es el exponente.' },
        { t: 'tf', q: 'La potencia 2<sup>3</sup> vale lo mismo que 2 · 3 = 6.', a: false, why: '¡Cuidado! 2<sup>3</sup> significa multiplicar el 2 tres veces por sí mismo: 2 · 2 · 2 = 8, no 2 · 3.' },
        { t: 'tf', q: 'Cualquier número distinto de cero elevado al exponente 0 es igual a 1.', a: true, why: 'Por propiedad de las potencias, todo número distinto de cero elevado a 0 vale 1 (por ejemplo, 8<sup>0</sup> = 1).' },
        { t: 'choice', q: '¿Cómo se escribe en forma de potencia el producto <b>5 · 5 · 5 · 5</b>?', o: ['5<sup>4</sup>', '4<sup>5</sup>', '5 · 4'], a: 0, why: 'El factor que se repite es 5 (base) y aparece 4 veces (exponente): 5<sup>4</sup>.' },
        { t: 'match', q: 'Une cada potencia con su valor.', pairs: [['2<sup>4</sup>', '16'], ['3<sup>3</sup>', '27'], ['4<sup>3</sup>', '64'], ['5<sup>3</sup>', '125']], why: '2<sup>4</sup> = 2·2·2·2 = 16; 3<sup>3</sup> = 3·3·3 = 27; 4<sup>3</sup> = 4·4·4 = 64; 5<sup>3</sup> = 5·5·5 = 125.' },
        { t: 'order', q: 'Ordena estas potencias de menor a mayor según su valor.', items: ['1<sup>9</sup>', '2<sup>3</sup>', '3<sup>2</sup>', '5<sup>2</sup>', '2<sup>5</sup>'], why: 'Calculamos cada una: 1<sup>9</sup> = 1, 2<sup>3</sup> = 8, 3<sup>2</sup> = 9, 5<sup>2</sup> = 25 y 2<sup>5</sup> = 32.' },
        { t: 'sort', q: 'Clasifica cada número según sea un cuadrado perfecto o un cubo perfecto (de un número mayor que 1).', cats: ['Cuadrado perfecto', 'Cubo perfecto'], items: [{ x: '49', c: 0 }, { x: '36', c: 0 }, { x: '100', c: 0 }, { x: '8', c: 1 }, { x: '27', c: 1 }, { x: '125', c: 1 }], why: '49 = 7<sup>2</sup>, 36 = 6<sup>2</sup> y 100 = 10<sup>2</sup> son cuadrados; 8 = 2<sup>3</sup>, 27 = 3<sup>3</sup> y 125 = 5<sup>3</sup> son cubos.' },
        { t: 'num', q: 'Un tablero de ajedrez tiene <b>8 filas</b> y <b>8 casillas</b> en cada fila. ¿Cuántas casillas tiene en total (8<sup>2</sup>)?', a: 64, u: 'casillas', why: '8<sup>2</sup> = 8 · 8 = 64 casillas.' },
        { t: 'num', q: 'Un cubo de Rubik clásico tiene <b>3 · 3 · 3</b> cubitos pequeños. ¿Cuántos cubitos son en total (3<sup>3</sup>)?', a: 27, u: 'cubitos', why: '3<sup>3</sup> = 3 · 3 · 3 = 27 cubitos.' },
        { t: 'tap', q: 'En esta lista hay dos igualdades equivocadas. ¡Cázalas!', words: ['4²=16', '2³=6', '5²=25', '3³=9', '10²=100'], wrong: [1, 3], why: '2<sup>3</sup> = 2·2·2 = <b>8</b> (no 6) y 3<sup>3</sup> = 3·3·3 = <b>27</b> (no 9).' },
        { t: 'choice', q: 'Si en una estantería hay 4 cajas, en cada caja 4 bolsas y en cada bolsa 4 canicas, ¿cuántas canicas hay?', o: ['4<sup>3</sup> = 64', '4 · 3 = 12', '4<sup>2</sup> = 16'], a: 0, why: 'Multiplicamos 4 · 4 · 4 = 4<sup>3</sup> = 64 canicas.' },
        { t: 'tf', q: 'El cuadrado de 9 es mayor que el cubo de 4.', a: true, why: '9<sup>2</sup> = 81 y 4<sup>3</sup> = 64; como 81 > 64, la afirmación es verdadera.' },
        { t: 'gen', f: () => {
          const pairs = [
            [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2], [10, 2], [11, 2], [12, 2], [13, 2], [15, 2], [20, 2],
            [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [10, 3],
            [2, 4], [2, 5], [2, 6], [3, 4], [9, 1], [12, 0]
          ];
          const [b, e] = P(pairs);
          const val = Math.pow(b, e);
          const mult = e === 0 ? '1 (todo número elevado a 0 vale 1)' : e === 1 ? `${b}` : Array(e).fill(b).join(' · ') + ` = ${val}`;
          return { t: 'num', q: `Calcula el valor de la potencia <b>${b}<sup>${e}</sup></b>.`, a: val, why: `${b}<sup>${e}</sup> = ${mult}.` };
        } },
        { t: 'gen', f: () => {
          const b = R(2, 12), e = P([2, 3]);
          const val = Math.pow(b, e);
          const askBase = Math.random() < 0.6;
          if (askBase) {
            return { t: 'num', q: `¿Qué número elevado al <b>${e === 2 ? 'cuadrado' : 'cubo'}</b> da <b>${val}</b> (es decir, <i>x</i><sup>${e}</sup> = ${val})?`, a: b, why: `Como ${Array(e).fill(b).join(' · ')} = ${val}, la base buscada es ${b}.` };
          }
          return { t: 'num', q: `¿A qué <b>exponente</b> hay que elevar <b>${b}</b> para obtener <b>${val}</b> (${b}<sup><i>x</i></sup> = ${val})?`, a: e, why: `Multiplicamos ${b} por sí mismo ${e} veces: ${Array(e).fill(b).join(' · ')} = ${val}. El exponente es ${e}.` };
        } },
        { t: 'gen', f: () => {
          const a = R(2, 10), b = R(2, 6);
          const op = Math.random() < 0.5 ? '+' : '−';
          const v1 = a * a, v2 = b * b;
          const x = Math.max(a, b), y = Math.min(a, b);
          const ans = op === '+' ? v1 + v2 : x * x - y * y;
          const qStr = op === '+' ? `${a}<sup>2</sup> + ${b}<sup>2</sup>` : `${x}<sup>2</sup> − ${y}<sup>2</sup>`;
          const whyStr = op === '+' ? `${a}<sup>2</sup> = ${v1} y ${b}<sup>2</sup> = ${v2}; ${v1} + ${v2} = ${ans}.` : `${x}<sup>2</sup> = ${x * x} y ${y}<sup>2</sup> = ${y * y}; ${x * x} − ${y * y} = ${ans}.`;
          return { t: 'num', q: `Calcula: <b>${qStr}</b>.`, a: ans, why: whyStr };
        } }
      ]
    },
    {
      title: 'Potencias de 10 y descomposición polinómica',
      intro: [
        { i: '🔟', h: 'Potencias de base 10', p: 'Una <b>potencia de base 10</b> es igual a la unidad (1) seguida de <b>tantos ceros como indica el exponente</b>:<br>• 10<sup>1</sup> = 10 · 10<sup>2</sup> = 100 · 10<sup>3</sup> = 1\u202f000<br>• 10<sup>4</sup> = 10\u202f000 · 10<sup>5</sup> = 100\u202f000 · 10<sup>6</sup> = 1\u202f000\u202f000 (un millón).' },
        { i: '🔬', h: 'Números grandes con potencias de 10', p: 'Podemos abreviar números terminados en ceros multiplicando un número por una potencia de 10:<br>• <b>8\u202f000 = 8 · 10<sup>3</sup></b><br>• <b>45\u202f000\u202f000 = 45 · 10<sup>6</sup></b> (el exponente cuenta los ceros).' },
        { i: '🧱', h: 'Descomposición polinómica', p: 'Cualquier número se puede descomponer sumando cada cifra multiplicada por la potencia de 10 de su posición:<br><b>5\u202f308 = 5 · 10<sup>3</sup> + 3 · 10<sup>2</sup> + 8</b>.' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuántos ceros lleva detrás del 1 el resultado de <b>10<sup>6</sup></b>?', o: ['6 ceros (1\u202f000\u202f000)', '5 ceros (100\u202f000)', '7 ceros (10\u202f000\u202f000)'], a: 0, keep: true, why: 'En una potencia de base 10, el exponente indica exactamente el número de ceros que siguen al 1: 10<sup>6</sup> = 1\u202f000\u202f000.' },
        { t: 'tf', q: 'El número 10<sup>4</sup> es igual a 10\u202f000.', a: true, why: 'El exponente es 4, por lo que escribimos un 1 seguido de 4 ceros: 10\u202f000.' },
        { t: 'tf', q: 'La expresión 7 · 10<sup>5</sup> equivale a 70\u202f000.', a: false, why: '7 · 10<sup>5</sup> tiene 5 ceros detrás del 7, así que es 700\u202f000 (70\u202f000 sería 7 · 10<sup>4</sup>).' },
        { t: 'match', q: 'Une cada potencia de base 10 con su nombre o valor.', pairs: [['10<sup>2</sup>', '100 (una centena)'], ['10<sup>3</sup>', '1\u202f000 (un millar)'], ['10<sup>5</sup>', '100\u202f000 (cien mil)'], ['10<sup>6</sup>', '1\u202f000\u202f000 (un millón)']], why: 'El exponente coincide siempre con la cantidad de ceros.' },
        { t: 'choice', q: '¿Cuál es la descomposición polinómica correcta de <b>40\u202f720</b>?', o: ['4 · 10<sup>4</sup> + 7 · 10<sup>2</sup> + 2 · 10<sup>1</sup>', '4 · 10<sup>3</sup> + 7 · 10<sup>2</sup> + 2 · 10<sup>1</sup>', '4 · 10<sup>4</sup> + 7 · 10<sup>3</sup> + 2 · 10<sup>2</sup>'], a: 0, why: '4 DM = 4 · 10\u202f000 = 4 · 10<sup>4</sup>; 7 C = 7 · 10<sup>2</sup>; 2 D = 2 · 10<sup>1</sup>.' },
        { t: 'num', q: '¿Qué número se obtiene con la descomposición <b>6 · 10<sup>4</sup> + 3 · 10<sup>3</sup> + 5 · 10<sup>1</sup> + 9</b>?', a: 63059, why: '60\u202f000 + 3\u202f000 + 50 + 9 = 63\u202f059 (no hay centenas, por eso va un 0 en su lugar).' },
        { t: 'order', q: 'Ordena estas cantidades de menor a mayor.', items: ['9 · 10<sup>2</sup>', '2 · 10<sup>3</sup>', '5 · 10<sup>4</sup>', '3 · 10<sup>5</sup>', '10<sup>6</sup>'], why: '900 < 2\u202f000 < 50\u202f000 < 300\u202f000 < 1\u202f000\u202f000.' },
        { t: 'sort', q: 'Clasifica cada expresión según su número de ceros al escribirla con todas sus cifras.', cats: ['Tiene 3 ceros', 'Tiene 4 ceros', 'Tiene 5 ceros'], items: [{ x: '6 · 10³', c: 0 }, { x: '10³', c: 0 }, { x: '8 · 10⁴', c: 1 }, { x: '10⁴', c: 1 }, { x: '3 · 10⁵', c: 2 }, { x: '10⁵', c: 2 }], why: 'Cuando la cifra inicial no acaba en 0, el exponente de 10 indica directamente cuántos ceros lleva al final.' },
        { t: 'tap', q: 'En la descomposición polinómica de <b>805\u202f300</b> hay dos términos erróneos. ¡Cázalos!', words: ['805\u202f300', '=', '8·10⁴', '+', '5·10³', '+', '3·10¹'], wrong: [2, 6], why: '800\u202f000 es <b>8 · 10<sup>5</sup></b> (5 ceros, no 4) y 300 es <b>3 · 10<sup>2</sup></b> (2 ceros, no 1).' },
        { t: 'choice', q: 'La distancia aproximada de la Tierra al Sol es de <b>150\u202f000\u202f000 km</b>. ¿Cómo se escribe con una potencia de 10?', o: ['15 · 10<sup>7</sup> km', '15 · 10<sup>6</sup> km', '15 · 10<sup>8</sup> km'], a: 0, why: 'Detrás del 15 hay exactamente 7 ceros, así que 150\u202f000\u202f000 = 15 · 10<sup>7</sup>.' },
        { t: 'num', q: '¿Cuál es el exponente que falta en <b>900\u202f000 = 9 · 10<sup><i>x</i></sup></b>?', a: 5, why: '900\u202f000 tiene 5 ceros detrás del 9, por lo que el exponente es 5.' },
        { t: 'tf', q: 'En la descomposición polinómica de 304\u202f000 solo aparecen sumandos para las cifras 3 y 4.', a: true, why: 'Las cifras que valen 0 no aportan nada a la suma: 304\u202f000 = 3 · 10<sup>5</sup> + 4 · 10<sup>3</sup>.' },
        { t: 'gen', f: () => {
          const a = R(1, 9), b = R(0, 9), c = R(1, 9), d = R(0, 9), e = R(1, 9);
          const n = a * 10000 + b * 1000 + c * 100 + d * 10 + e;
          const terms = [];
          terms.push(`${a} · 10<sup>4</sup>`);
          if (b) terms.push(`${b} · 10<sup>3</sup>`);
          terms.push(`${c} · 10<sup>2</sup>`);
          if (d) terms.push(`${d} · 10<sup>1</sup>`);
          terms.push(`${e}`);
          return { t: 'num', q: `¿Qué número corresponde a la descomposición polinómica <b>${terms.join(' + ')}</b>?`, a: n, why: `Multiplicando cada cifra por su potencia de 10 y sumando obtenemos ${fmt(n)}.` };
        } },
        { t: 'gen', f: () => {
          const k = R(2, 45);
          const exp = R(2, 6);
          const val = k * Math.pow(10, exp);
          const askExp = Math.random() < 0.5 && k % 10 !== 0;
          if (askExp) {
            return { t: 'num', q: `¿Qué exponente <i>x</i> cumple que <b>${fmt(val)} = ${k} · 10<sup><i>x</i></sup></b>?`, a: exp, why: `Contamos los ceros añadidos a ${k}: hay ${exp} ceros, así que <i>x</i> = ${exp}.` };
          }
          return { t: 'num', q: `Escribe con todas sus cifras el número <b>${k} · 10<sup>${exp}</sup></b>.`, a: val, why: `Añadimos ${exp} ceros a la derecha de ${k} y obtenemos ${fmt(val)}.` };
        } },
        { t: 'gen', f: () => {
          const d1 = R(2, 9), d2 = R(1, 9);
          const e1 = R(4, 6), e2 = R(1, e1 - 1);
          const okNum = d1 * Math.pow(10, e1) + d2 * Math.pow(10, e2);
          const w1 = d1 * Math.pow(10, e1 - 1) + d2 * Math.pow(10, e2);
          const w2 = d1 * Math.pow(10, e1) + d2 * Math.pow(10, Math.max(0, e2 - 1));
          const opts = SH([fmt(okNum), fmt(w1), fmt(w2)]);
          return { t: 'choice', q: `¿Qué número es igual a <b>${d1} · 10<sup>${e1}</sup> + ${d2} · 10<sup>${e2}</sup></b>?`, o: opts, a: opts.indexOf(fmt(okNum)), why: `${d1} · 10<sup>${e1}</sup> = ${fmt(d1 * Math.pow(10, e1))} y ${d2} · 10<sup>${e2}</sup> = ${fmt(d2 * Math.pow(10, e2))}. Su suma es ${fmt(okNum)}.` };
        } }
      ]
    },
    {
      title: 'Raíces cuadradas exactas y aproximadas',
      intro: [
        { i: '🌱', h: 'La operación inversa de elevar al cuadrado', p: 'La <b>raíz cuadrada</b> (√) de un número es otro número que, elevado al cuadrado, da el primero:<br><b>√36 = 6</b> porque <b>6<sup>2</sup> = 36</b>.<br>El número que está dentro del símbolo √ se llama <b>radicando</b>.' },
        { i: '💎', h: 'Raíces cuadradas exactas', p: 'Los <b>cuadrados perfectos</b> tienen raíz cuadrada exacta:<br>√1 = 1 · √4 = 2 · √9 = 3 · √16 = 4 · √25 = 5 · √36 = 6 · √49 = 7 · √64 = 8 · √81 = 9 · √100 = 10 · √121 = 11 · √144 = 12.' },
        { i: '🔍', h: 'Raíz entera y aproximación', p: 'Si un número no es cuadrado perfecto, buscamos entre qué dos cuadrados consecutivos está.<br>Ejemplo: <b>√30</b>. Como <b>5<sup>2</sup> = 25</b> y <b>6<sup>2</sup> = 36</b>, √30 está entre 5 y 6. Su <b>raíz cuadrada entera</b> (por defecto) es <b>5</b> y el resto es 30 − 25 = 5.' }
      ],
      ex: [
        { t: 'choice', q: '¿Por qué la raíz cuadrada de 49 es 7 (√49 = 7)?', o: ['Porque 7² = 7 · 7 = 49', 'Porque 49 : 7 = 7 y 7 + 7 = 14', 'Porque 49 − 7 = 42'], a: 0, why: 'La raíz cuadrada es la operación inversa de elevar al cuadrado: √49 = 7 porque 7<sup>2</sup> = 49.' },
        { t: 'tf', q: 'La raíz cuadrada de 81 es 9 porque 9<sup>2</sup> = 81.', a: true, why: '9 · 9 = 81, así que √81 = 9.' },
        { t: 'tf', q: 'La raíz cuadrada de 50 es 25 porque 25 + 25 = 50.', a: false, why: 'Hallar la raíz cuadrada no es dividir entre 2. Como 7<sup>2</sup> = 49 y 8<sup>2</sup> = 64, √50 está entre 7 y 8.' },
        { t: 'match', q: 'Une cada raíz cuadrada con su resultado exacto.', pairs: [['√16', '4'], ['√64', '8'], ['√100', '10'], ['√144', '12']], why: '4<sup>2</sup> = 16, 8<sup>2</sup> = 64, 10<sup>2</sup> = 100 y 12<sup>2</sup> = 144.' },
        { t: 'order', q: 'Ordena estas raíces de menor a mayor resultado.', items: ['√9', '√25', '√49', '√81', '√121'], why: 'Sus valores son: √9 = 3, √25 = 5, √49 = 7, √81 = 9 y √121 = 11.' },
        { t: 'sort', q: 'Clasifica estas raíces según sean exactas o enteras (no exactas).', cats: ['Raíz exacta', 'Raíz no exacta'], items: [{ x: '√36', c: 0 }, { x: '√121', c: 0 }, { x: '√100', c: 0 }, { x: '√20', c: 1 }, { x: '√50', c: 1 }, { x: '√90', c: 1 }], why: '36, 121 y 100 son cuadrados perfectos (6<sup>2</sup>, 11<sup>2</sup> y 10<sup>2</sup>); 20, 50 y 90 no lo son.' },
        { t: 'num', q: 'Un jardín cuadrado tiene un área de <b>81 m<sup>2</sup></b>. ¿Cuántos metros mide su lado?', a: 9, u: 'm', why: 'El área del cuadrado es lado<sup>2</sup>, así que el lado mide √81 = 9 m.' },
        { t: 'choice', q: '¿Entre qué dos números naturales consecutivos se encuentra <b>√40</b>?', o: ['Entre 6 y 7', 'Entre 5 y 6', 'Entre 7 y 8'], a: 0, keep: true, why: 'Como 6<sup>2</sup> = 36 y 7<sup>2</sup> = 49, y 36 < 40 < 49, entonces √40 está entre 6 y 7.' },
        { t: 'num', q: '¿Cuál es la <b>raíz cuadrada entera</b> (por defecto) de <b>29</b>?', a: 5, why: '5<sup>2</sup> = 25 (no llega a 29) y 6<sup>2</sup> = 36 (se pasa). Por tanto, la raíz entera es 5.' },
        { t: 'tap', q: 'En esta serie de raíces hay dos resultados falsos. ¡Cázalos!', words: ['√4=2', '√16=8', '√25=5', '√64=8', '√100=50'], wrong: [1, 4], why: '√16 = <b>4</b> (no la mitad, 8) y √100 = <b>10</b> (no la mitad, 50).' },
        { t: 'num', q: 'Queremos colocar <b>100 baldosas cuadradas</b> formando un gran cuadrado. ¿Cuántas baldosas habrá en cada lado?', a: 10, u: 'baldosas', why: '√100 = 10 baldosas en cada lado (10 · 10 = 100).' },
        { t: 'choice', q: 'Si el lado de un cuadrado mide √25 cm, ¿cuánto mide su perímetro?', o: ['20 cm', '25 cm', '100 cm'], a: 0, why: 'El lado mide √25 = 5 cm, y el perímetro de un cuadrado es 4 · lado = 4 · 5 = 20 cm.' },
        { t: 'gen', f: () => {
          const r = P([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 30]);
          const rad = r * r;
          const isArea = Math.random() < 0.4;
          if (isArea) {
            return { t: 'num', q: `Una plaza cuadrada tiene una superficie de <b>${fmt(rad)} m<sup>2</sup></b>. ¿Cuántos metros mide cada lado?`, a: r, u: 'm', why: `El lado es la raíz cuadrada del área: √${fmt(rad)} = ${r} m porque ${r}<sup>2</sup> = ${fmt(rad)}.` };
          }
          return { t: 'num', q: `Calcula la raíz cuadrada exacta: <b>√${fmt(rad)}</b>.`, a: r, why: `√${fmt(rad)} = ${r} porque ${r} · ${r} = ${fmt(rad)}.` };
        } },
        { t: 'gen', f: () => {
          const k = R(2, 14);
          const n = R(k * k + 1, (k + 1) * (k + 1) - 1);
          return { t: 'num', q: `¿Cuál es la <b>raíz cuadrada entera</b> (el mayor entero cuyo cuadrado no supera al número) de <b>${n}</b>?`, a: k, why: `Como ${k}<sup>2</sup> = ${k * k} y ${k + 1}<sup>2</sup> = ${(k + 1) * (k + 1)}, tenemos ${k * k} < ${n} < ${(k + 1) * (k + 1)}. La raíz entera es ${k}.` };
        } },
        { t: 'gen', f: () => {
          const a = R(2, 12), b = R(2, 12);
          const plus = Math.random() < 0.6;
          const x = Math.max(a, b), y = Math.min(a, b);
          const ans = plus ? a + b : x - y;
          const q = plus ? `<b>√${a * a} + √${b * b}</b>` : `<b>√${x * x} − √${y * y}</b>`;
          const why = plus
            ? `√${a * a} = ${a} y √${b * b} = ${b}; por tanto ${a} + ${b} = ${ans}.`
            : `√${x * x} = ${x} y √${y * y} = ${y}; por tanto ${x} − ${y} = ${ans}.`;
          return { t: 'num', q: `Calcula el valor de ${q}.`, a: ans, why };
        } }
      ]
    }
  ]
});

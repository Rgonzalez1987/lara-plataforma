const R = Adv.rnd, P = Adv.pick, G = Adv.gcd, SH = Adv.shuffle, F = Adv.frac, FM = Adv.fmt;
const rd = (n, d = 3) => Math.round(n * Math.pow(10, d)) / Math.pow(10, d);

Adv.register(15, {
  stations: [
    {
      title: 'Décimas, centésimas, milésimas: suma y resta',
      intro: [
        { i: '🔎', h: 'Órdenes decimales hasta la milésima', p: 'Detrás de la coma van las <b>décimas</b> (0,1 = 1/10), las <b>centésimas</b> (0,01 = 1/100) y las <b>milésimas</b> (0,001 = 1/1 000).<br>En <b>4,378</b> hay 4 unidades, 3 décimas, 7 centésimas y 8 milésimas. Recuerda: 1 unidad = 10 décimas = 100 centésimas = 1 000 milésimas.' },
        { i: '⚖️', h: 'Comparar y redondear decimales', p: 'Para comparar, mira primero la <b>parte entera</b> y luego, cifra a cifra, décimas, centésimas y milésimas. Añadir ceros al final no cambia el valor: <b>2,4 = 2,40 = 2,400</b>.<br>Para <b>redondear</b>, mira la cifra siguiente: si es <b>5 o mayor</b>, suma 1; si es menor que 5, déjala igual.' },
        { i: '➕', h: 'Suma y resta: comas en columna', p: 'Coloca los números de modo que las <b>comas queden alineadas</b> en la misma columna. Si falta alguna cifra a la derecha, completa con <b>ceros</b>:<br><b>6,4 − 2,175</b> → escribimos <b>6,400 − 2,175 = 4,225</b>.' }
      ],
      ex: [
        { t: 'choice', q: 'En el número <b>12,408</b>, ¿qué valor posicional ocupa la cifra <b>8</b>?', o: ['8 milésimas', '8 centésimas', '8 décimas', '8 unidades'], a: 0, why: 'El primer lugar tras la coma son décimas (4), el segundo centésimas (0) y el tercero milésimas (8).' },
        { t: 'tf', q: 'Los números <b>3,5</b> y <b>3,500</b> representan exactamente la misma cantidad.', a: true, why: 'Añadir ceros a la derecha de la parte decimal no altera el valor: 5 décimas son 500 milésimas.' },
        { t: 'tf', q: 'El número <b>4,19</b> es menor que <b>4,125</b> porque 19 es menor que 125.', a: false, why: 'Al comparar cifra a cifra tras la coma: ambos tienen 1 décima, pero 4,19 tiene 9 centésimas y 4,125 solo 2 centésimas (4,190 > 4,125).' },
        { t: 'order', q: 'Ordena estos números decimales de <b>menor a mayor</b>.', items: ['1,08', '1,185', '1,2', '1,25'], why: 'Escribiéndolos con tres decimales: 1,080 < 1,185 < 1,200 < 1,250.' },
        { t: 'match', q: 'Une cada descomposición con su número decimal.', pairs: [['3 unidades y 4 décimas', '3,4'], ['3 unidades y 4 centésimas', '3,04'], ['3 unidades y 4 milésimas', '3,004'], ['34 centésimas', '0,34']], why: 'Las décimas ocupan el 1.º lugar tras la coma; las centésimas, el 2.º; y las milésimas, el 3.º.' },
        { t: 'sort', q: 'Clasifica cada número según a qué entero se aproxima al <b>redondear a las unidades</b>.', cats: ['Se redondea a 5', 'Se redondea a 6'], items: [{ x: '5,28', c: 0 }, { x: '5,49', c: 0 }, { x: '5,5', c: 1 }, { x: '5,73', c: 1 }, { x: '4,82', c: 0 }, { x: '6,31', c: 1 }], why: 'Miramos la cifra de las décimas: 4,82 y 5,28 y 5,49 quedan en 5; 5,5 y 5,73 suben a 6, y 6,31 baja a 6.' },
        { t: 'num', q: ' ¿Cuántas <b>milésimas</b> hay en total en <b>2 unidades y 5 décimas</b>?', a: 2500, u: 'milésimas', why: 'Cada unidad son 1 000 milésimas y cada décima son 100 milésimas: 2,5 = 2,500 → 2 500 milésimas.' },
        { t: 'choice', q: '¿Cuál es el resultado de redondear <b>7,386</b> a las <b>centésimas</b>?', o: ['7,39', '7,38', '7,4', '7,3'], a: 0, why: 'La cifra de las centésimas es 8 y la siguiente (milésimas) es 6 ≥ 5, así que sumamos 1 a las centésimas: 7,39.' },
        { t: 'tap', q: 'En esta explicación hay <b>dos errores</b> sobre los decimales. ¡Cázalos!', words: ['En', 'el', 'número', '8,259', 'la', 'cifra', '2', 'ocupa', 'las', 'centésimas', 'y', 'el', '9', 'las', 'décimas.'], wrong: [9, 14], why: 'En 8,259 el 2 ocupa las <b>décimas</b>, el 5 las centésimas y el 9 las <b>milésimas</b>.' },
        { t: 'num', q: 'Calcula mentalmente: <b>10 − 3,625</b>.', a: 6.375, why: 'Escribimos 10,000 − 3,625 = 6,375 (porque 3,625 + 6,375 = 10).' },
        { t: 'choice', q: '¿Qué número está exactamente a mitad de camino entre <b>2,4</b> y <b>2,5</b>?', o: ['2,45', '2,405', '2,54', '2,05'], a: 0, why: 'Como 2,4 = 2,40 y 2,5 = 2,50, el punto medio exacto entre 40 y 50 centésimas es 2,45.' },
        { t: 'tf', q: 'Para restar <b>9,2 − 4,87</b> conviene escribir <b>9,20 − 4,87</b> alineando las comas.', a: true, why: 'Completar con un cero en las centésimas (9,20) evita errores al restar columna por columna: 9,20 − 4,87 = 4,33.' },
        { t: 'gen', f: () => {
          const a = rd(R(12, 89) / 10 + R(1, 9) / 100, 2);
          const b = rd(R(11, 78) / 10 + R(1, 9) / 1000, 3);
          const ans = rd(a + b, 3);
          return { t: 'num', q: `Calcula la suma: <b>${FM(a)} + ${FM(b)}</b>`, a: ans, why: `Alineamos las comas y completamos con ceros: ${FM(a)}0 + ${FM(b)} = <b>${FM(ans)}</b>.` };
        } },
        { t: 'gen', f: () => {
          const a = rd(R(8, 25) + R(1, 8) / 10, 1);
          const b = rd(R(1, 6) + R(11, 99) / 100, 2);
          const ans = rd(a - b, 2);
          return { t: 'num', q: `Calcula la resta: <b>${FM(a)} − ${FM(b)}</b>`, a: ans, why: `Completamos con un cero en las centésimas: ${FM(a)}0 − ${FM(b)} = <b>${FM(ans)}</b>.` };
        } },
        { t: 'gen', f: () => {
          const u = R(1, 9), d = R(0, 9), c = R(0, 9), m = P([1, 2, 3, 4, 6, 7, 8, 9]);
          const n = rd(u + d / 10 + c / 100 + m / 1000, 3);
          const toDec = Math.random() < 0.5;
          const ans = toDec ? rd(Math.round(n * 10) / 10, 1) : rd(Math.round(n * 100) / 100, 2);
          const ord = toDec ? 'décimas' : 'centésimas';
          const look = toDec ? c : m;
          return { t: 'num', q: `Redondea el número <b>${FM(n)}</b> a las <b>${ord}</b>.`, a: ans, why: `Miramos la cifra siguiente (${look}): como es ${look >= 5 ? 'mayor o igual que 5, sumamos 1' : 'menor que 5, dejamos igual'} y obtenemos <b>${FM(ans)}</b>.` };
        } }
      ]
    },
    {
      title: 'Multiplicación y división con decimales',
      intro: [
        { i: '✖️', h: 'Multiplicar números decimales', p: 'Multiplica como si no hubiera comas. Luego, cuenta cuántas <b>cifras decimales suman entre los dos factores</b> y separa esa misma cantidad en el resultado desde la derecha:<br><b>1,2 × 0,35</b> → 12 × 35 = 420 → con 1 + 2 = 3 decimales: <b>0,420 = 0,42</b>.' },
        { i: '🚀', h: 'Por y entre la unidad seguida de ceros', p: 'Al <b>multiplicar por 10, 100 o 1 000</b>, la coma avanza a la <b>derecha</b> tantos lugares como ceros haya (3,45 × 100 = 345).<br>Al <b>dividir entre 10, 100 o 1 000</b>, la coma retrocede a la <b>izquierda</b> (24,8 : 10 = 2,48).' },
        { i: '➗', h: 'Dividir con decimales en el divisor', p: 'No se divide directamente con coma en el divisor: antes <b>multiplicamos dividendo y divisor por 10, 100 o 1 000</b> para que el divisor quede entero.<br>Ejemplo: <b>6,3 : 0,3</b> → multiplicamos ambos por 10 → <b>63 : 3 = 21</b>.' }
      ],
      ex: [
        { t: 'choice', q: 'Sin hacer toda la cuenta, ¿cuántas cifras decimales tendrá el producto <b>2,41 × 1,3</b> antes de quitar ceros finales?', o: ['3 cifras decimales', '2 cifras decimales', '1 cifra decimal', '4 cifras decimales'], a: 0, why: '2,41 tiene 2 decimales y 1,3 tiene 1 decimal: en total 2 + 1 = 3 cifras decimales (2,41 × 1,3 = 3,133).' },
        { t: 'tf', q: 'Al multiplicar un número positivo por <b>0,5</b>, el resultado es la mitad de ese número.', a: true, why: 'Como 0,5 = 1/2, multiplicar por 0,5 equivale a dividir entre 2 (por ejemplo, 14 × 0,5 = 7).' },
        { t: 'tf', q: 'La división <b>4,8 : 0,12</b> da el mismo cociente que <b>48 : 12</b>.', a: false, why: 'Para quitar los dos decimales de 0,12 hay que multiplicar AMBOS términos por 100: equivale a <b>480 : 12 = 40</b>, no a 48 : 12.' },
        { t: 'match', q: 'Une cada operación con su resultado.', pairs: [['0,75 × 10', '7,5'], ['0,75 × 100', '75'], ['7,5 : 10', '0,75'], ['7,5 : 100', '0,075']], why: 'Multiplicar mueve la coma a la derecha; dividir la mueve a la izquierda tantos lugares como ceros tenga la potencia de 10.' },
        { t: 'order', q: 'Ordena los pasos para calcular <b>4,5 : 0,15</b>.', items: ['Contar los decimales del divisor (0,15 tiene dos)', 'Multiplicar dividendo y divisor por 100', 'Escribir la división equivalente 450 : 15', 'Dividir y obtener el cociente 30'], why: 'Transformamos el divisor en entero multiplicando ambos números por 100: 4,5 : 0,15 = 450 : 15 = 30.' },
        { t: 'sort', q: 'Clasifica cada operación según si su resultado es <b>mayor</b> o <b>menor</b> que 10.', cats: ['Menor que 10', 'Mayor que 10'], items: [{ x: '10 × 0,8', c: 0 }, { x: '10 : 0,5', c: 1 }, { x: '10 × 1,25', c: 1 }, { x: '10 : 2,5', c: 0 }, { x: '0,095 × 100', c: 0 }, { x: '0,15 × 100', c: 1 }], why: '10 × 0,8 = 8; 10 : 0,5 = 20; 10 × 1,25 = 12,5; 10 : 2,5 = 4; 0,095 × 100 = 9,5; 0,15 × 100 = 15.' },
        { t: 'num', q: 'En una almazara del Bajo Aragón reparten <b>15 litros</b> de aceite de oliva en botellas de <b>0,75 litros</b>. ¿Cuántas botellas llenan?', a: 20, u: 'botellas', why: 'Dividimos 15 : 0,75 = 1 500 : 75 = 20 botellas.' },
        { t: 'choice', q: '¿Por qué número se ha multiplicado <b>0,048</b> para obtener <b>48</b>?', o: ['Por 1 000', 'Por 100', 'Por 10', 'Por 10 000'], a: 0, why: 'La coma se ha desplazado 3 lugares hacia la derecha (0,048 → 48), lo que corresponde a multiplicar por 1 000.' },
        { t: 'tap', q: 'Encuentra los <b>dos resultados erróneos</b> en la libreta.', words: ['Calculamos:', '3,2×10=32,', '4,5:10=45,', '0,6×0,2=1,2', 'y', '8:0,5=16.'], wrong: [2, 3], why: '4,5 : 10 es <b>0,45</b> (la coma va a la izquierda) y 0,6 × 0,2 es <b>0,12</b> (tiene dos cifras decimales).' },
        { t: 'num', q: 'Calcula: <b>0,25 × 0,4</b>.', a: 0.1, why: '25 × 4 = 100; como hay 2 + 1 = 3 cifras decimales, queda 0,100 = 0,1.' },
        { t: 'choice', q: 'Para resolver <b>12,6 : 0,06</b> sin decimales en el divisor, ¿qué división equivalente escribimos?', o: ['1 260 : 6', '126 : 6', '12,6 : 6', '12 600 : 6'], a: 0, why: 'El divisor 0,06 tiene 2 cifras decimales; multiplicamos ambos términos por 100: 12,6 × 100 = 1 260 y 0,06 × 100 = 6.' },
        { t: 'tf', q: 'Al dividir un número positivo entre <b>0,25</b>, el resultado es 4 veces mayor que el número inicial.', a: true, why: 'Como 0,25 = 1/4, en cada unidad caben cuatro cuartos, así que dividir entre 0,25 equivale a multiplicar por 4.' },
        { t: 'gen', f: () => {
          const p = P([10, 100, 1000]);
          const mult = Math.random() < 0.5;
          const base = R(12, 985);
          const dec = P([10, 100, 1000]);
          const x = rd(base / dec, 3);
          const ans = mult ? rd(x * p, 4) : rd(x / p, 4);
          if (String(ans).includes('.') && String(ans).split('.')[1].length > 4) return { t: 'num', q: 'Calcula: <b>2,45 × 100</b>', a: 245, why: 'La coma avanza 2 lugares a la derecha: 245.' };
          const z = String(p).length - 1;
          return { t: 'num', q: `Calcula: <b>${FM(x)} ${mult ? '×' : ':'} ${p === 1000 ? '1 000' : p}</b>`, a: ans, why: `Al ${mult ? 'multiplicar' : 'dividir'} por ${p}, desplazamos la coma ${z} ${z === 1 ? 'lugar' : 'lugares'} hacia la ${mult ? 'derecha' : 'izquierda'}: <b>${FM(ans)}</b>.` };
        } },
        { t: 'gen', f: () => {
          const a = rd(R(11, 65) / 10, 1);
          const b = rd(P([2, 3, 4, 5, 6, 8, 12, 15, 25]) / 10, 1);
          const ans = rd(a * b, 2);
          return { t: 'num', q: `Calcula el producto: <b>${FM(a)} × ${FM(b)}</b>`, a: ans, why: `Multiplicamos ${Math.round(a * 10)} × ${Math.round(b * 10)} = ${Math.round(a * 10) * Math.round(b * 10)} y separamos dos cifras decimales: <b>${FM(ans)}</b>.` };
        } },
        { t: 'gen', f: () => {
          const div = P([0.2, 0.25, 0.4, 0.5, 0.75, 1.5, 1.25]);
          const q = R(4, 32);
          const dvd = rd(div * q, 2);
          const mult = (div * 100) % 10 === 0 ? 10 : 100;
          return { t: 'num', q: `Calcula la división: <b>${FM(dvd)} : ${FM(div)}</b>`, a: q, why: `Multiplicamos dividendo y divisor por ${mult}: ${FM(rd(dvd * mult))} : ${rd(div * mult)} = <b>${q}</b>.` };
        } }
      ]
    },
    {
      title: 'Fracción, decimal y porcentaje',
      intro: [
        { i: '🔄', h: 'De fracción a número decimal', p: 'Toda fracción es una división: basta con <b>dividir el numerador entre el denominador</b> o buscar una fracción equivalente con denominador 10, 100 o 1 000.<br>Ejemplos: <b>1/2 = 0,5</b> · <b>1/4 = 0,25</b> · <b>3/4 = 0,75</b> · <b>1/5 = 0,2</b> · <b>1/8 = 0,125</b>.' },
        { i: '🧱', h: 'De decimal exacto a fracción irreducible', p: 'Escribe en el numerador el número <b>sin coma</b> y en el denominador un <b>1 seguido de tantos ceros como cifras decimales</b> tenga; después, simplifica:<br><b>0,35 = 35/100</b> → dividimos entre 5 → <b>7/20</b>.' },
        { i: '💯', h: 'El puente de los porcentajes (%)', p: 'Un porcentaje significa «de cada 100», es decir, una fracción con denominador 100 o un decimal hasta las centésimas:<br><b>60 % = 60/100 = 3/5 = 0,6</b> · Para pasar de decimal a %, <b>multiplica por 100</b> (0,125 = 12,5 %).' }
      ],
      ex: [
        { t: 'match', q: 'Une cada fracción con su expresión decimal y porcentaje.', pairs: [[`${F(1, 2)}`, '0,5 = 50 %'], [`${F(1, 4)}`, '0,25 = 25 %'], [`${F(3, 4)}`, '0,75 = 75 %'], [`${F(1, 5)}`, '0,2 = 20 %']], why: '1/2 = 50/100 = 0,5; 1/4 = 25/100 = 0,25; 3/4 = 75/100 = 0,75; y 1/5 = 20/100 = 0,2.' },
        { t: 'choice', q: `¿Cuál es la expresión decimal de la fracción ${F(3, 8)}?`, o: ['0,375', '0,38', '0,325', '3,8'], a: 0, why: 'Dividimos 3 : 8 = 0,375 (o multiplicamos numerador y denominador por 125: 375/1 000 = 0,375).' },
        { t: 'tf', q: 'El porcentaje <b>8 %</b> se escribe en forma de número decimal como <b>0,8</b>.', a: false, why: '8 % es 8/100 = <b>0,08</b> (ocho centésimas). El decimal 0,8 equivale al 80 %.' },
        { t: 'tf', q: `La fracción irreducible equivalente a <b>0,4</b> es ${F(2, 5)}.`, a: true, why: '0,4 = 4/10; al dividir numerador y denominador entre 2 obtenemos la fracción irreducible 2/5.' },
        { t: 'order', q: 'Ordena estas cantidades de <b>menor a mayor</b>.', items: ['15 %', `${F(1, 5)}`, '0,25', `${F(1, 2)}`], why: 'Pasando todo a decimal: 15 % = 0,15 < 1/5 = 0,20 < 0,25 < 1/2 = 0,50.' },
        { t: 'sort', q: 'Clasifica cada expresión según su valor.', cats: ['Equivale a 0,25', 'Equivale a 0,4', 'Equivale a 0,75'], items: [{ x: '25 %', c: 0 }, { x: `${F(1, 4)}`, c: 0 }, { x: '40 %', c: 1 }, { x: `${F(2, 5)}`, c: 1 }, { x: '75 %', c: 2 }, { x: `${F(3, 4)}`, c: 2 }], why: '1/4 = 25 % = 0,25; 2/5 = 40/100 = 40 % = 0,4; y 3/4 = 75 % = 0,75.' },
        { t: 'choice', q: '¿Cuál es la <b>fracción irreducible</b> que corresponde al número decimal <b>0,125</b>?', o: [`${F(1, 8)}`, `${F(125, 100)}`, `${F(1, 4)}`, `${F(5, 40)}`], a: 0, why: '0,125 = 125/1 000. Dividiendo numerador y denominador entre 125 obtenemos la fracción irreducible 1/8.' },
        { t: 'num', q: `En un entrenamiento de baloncesto en Zaragoza, Lara encesta ${F(17, 20)} de sus tiros libres. ¿Qué <b>porcentaje</b> de acierto ha logrado?`, a: 85, u: '%', why: 'Pasamos a denominador 100 multiplicando por 5: 17/20 = 85/100 = 85 %.' },
        { t: 'tap', q: 'Caza las <b>dos equivalencias falsas</b> de esta lista.', words: ['Equivalencias:', '1/2=50%,', '3/5=60%,', '1/4=40%,', '0,05=50%', 'y', '7/10=70%.'], wrong: [3, 4], why: '1/4 equivale al <b>25 %</b> (no 40 %) y 0,05 equivale al <b>5 %</b> (no 50 %).' },
        { t: 'num', q: `Convierte la fracción ${F(7, 8)} en un número decimal.`, a: 0.875, why: 'Dividimos 7 : 8 = 0,875 (7 × 0,125 = 0,875).' },
        { t: 'choice', q: 'Si en una clase el <b>65 %</b> del alumnado va al colegio caminando, ¿qué fracción irreducible representa a quienes van caminando?', o: [`${F(13, 20)}`, `${F(6, 5)}`, `${F(3, 5)}`, `${F(7, 10)}`], a: 0, why: '65 % = 65/100; dividimos numerador y denominador entre 5 y resulta 13/20.' },
        { t: 'tf', q: 'Para convertir cualquier número decimal en porcentaje basta con multiplicarlo por 100.', a: true, why: 'Por ejemplo, 0,32 × 100 = 32 %, y 0,075 × 100 = 7,5 %.' },
        { t: 'gen', f: () => {
          const d = P([2, 4, 5, 8, 10, 20, 25, 50]);
          let n; do { n = R(1, d * 2 - 1); } while (n % d === 0 || G(n, d) !== 1);
          const ans = rd(n / d, 3);
          return { t: 'num', q: `Escribe la fracción ${F(n, d)} en forma de <b>número decimal</b>.`, a: ans, why: `Dividimos el numerador entre el denominador: ${n} : ${d} = <b>${FM(ans)}</b>.` };
        } },
        { t: 'gen', f: () => {
          const d = P([4, 5, 10, 20, 25, 50]);
          let n; do { n = R(1, d - 1); } while (G(n, d) !== 1);
          const k = 100 / d;
          const pct = n * k;
          return { t: 'num', q: `¿A qué <b>porcentaje</b> equivale la fracción ${F(n, d)}?`, a: pct, u: '%', why: `Multiplicamos numerador y denominador por ${k}: ${n}/${d} = ${pct}/100 = <b>${pct} %</b>.` };
        } },
        { t: 'gen', f: () => {
          const pct = P([5, 8, 12, 15, 16, 18, 20, 24, 25, 28, 30, 32, 35, 36, 40, 44, 45, 48, 55, 60, 64, 65, 70, 72, 75, 80, 84, 85, 90, 95]);
          const g = G(pct, 100);
          const n = pct / g, d = 100 / g;
          const ok = F(n, d);
          const w1 = F(n + 1, d);
          const w2 = F(n, d + (d % 2 === 0 ? 5 : 2));
          const w3 = F(pct, 10);
          const opts = SH([ok, w1, w2, w3]);
          return { t: 'choice', q: `¿Cuál es la <b>fracción irreducible</b> equivalente al <b>${pct} %</b> (o a <b>${FM(pct / 100)}</b>)?`, o: opts, a: opts.indexOf(ok), why: `${pct} % = ${pct}/100. Dividiendo numerador y denominador entre su M.C.D. (${g}) obtenemos ${n}/${d}.` };
        } }
      ]
    }
  ]
});

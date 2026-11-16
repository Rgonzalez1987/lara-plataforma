const R = Adv.rnd, P = Adv.pick, G = Adv.gcd, SH = Adv.shuffle, FR = Adv.frac;

Adv.register(20, {
  stations: [
    {
      title: 'Tablas de frecuencias y gráficos estadísticos',
      intro: [
        { i: '📋', h: 'Frecuencia absoluta y frecuencia relativa', p: 'Al hacer una encuesta organizamos las respuestas en una <b>tabla de frecuencias</b>:<br>• <b>Frecuencia absoluta</b>: número de veces que se repite cada dato. La suma de todas es el <b>total de datos (N)</b>.<br>• <b>Frecuencia relativa</b>: la fracción (o división) entre su frecuencia absoluta y el total N.' },
        { i: '📊', h: 'La suma de frecuencias siempre cuadra', p: '• Si sumas todas las <b>frecuencias absolutas</b> de la tabla, obtienes siempre el número total de datos (<b>N</b>).<br>• Si sumas todas las <b>frecuencias relativas</b>, el resultado es siempre <b>1</b> (o el 100 % si se expresa en porcentaje).' },
        { i: '📈', h: 'Tipos de gráficos estadísticos', p: '• <b>Diagrama de barras</b>: la altura de cada barra indica su frecuencia.<br>• <b>Polígono de frecuencias</b>: línea que une los extremos de las barras; ideal para ver cómo evoluciona algo en el tiempo.<br>• <b>Gráfico de sectores</b>: círculo dividido en porciones proporcionales a cada dato.' }
      ],
      ex: [
        { t: 'choice', q: 'En una clase de 25 alumnas, 10 eligen baloncesto, 8 fútbol y el resto voleibol. ¿Cuál es la frecuencia absoluta de voleibol?', o: ['7', '18', '15', '8'], a: 0, why: 'La suma de todas las frecuencias absolutas debe ser 25: 25 − (10 + 8) = 25 − 18 = 7 alumnas.' },
        { t: 'tf', q: 'La suma de todas las frecuencias relativas de una tabla es siempre igual a 1.', a: true, why: 'Como cada frecuencia relativa es una parte del total N, al sumar todas las partes tenemos N/N = 1.' },
        { t: 'tf', q: 'La frecuencia absoluta de un dato puede ser mayor que el número total de datos recogidos.', a: false, why: 'Un dato nunca puede aparecer más veces que el total de encuestados o mediciones realizadas.' },
        { t: 'match', q: 'Une cada concepto estadístico con su definición.', pairs: [['Frecuencia absoluta', 'Número de veces que se repite un dato'], ['Frecuencia relativa', 'Cociente entre la frecuencia absoluta y el total'], ['Diagrama de barras', 'Rectángulos cuya altura indica la frecuencia'], ['Gráfico de sectores', 'Círculo dividido en partes proporcionales']], why: 'La tabla recoge las frecuencias (absoluta y relativa) y los gráficos las muestran visualmente.' },
        { t: 'sort', q: '¿Qué gráfico es el más adecuado para cada situación? Clasifícalos.', cats: ['Polígono de frecuencias (línea)', 'Gráfico de sectores (círculo)', 'Diagrama de barras'], items: [{ x: 'Evolución de la temperatura cada hora del día', c: 0 }, { x: 'Crecimiento de la altura de una planta cada semana', c: 0 }, { x: 'Reparto en porcentajes del presupuesto familiar', c: 1 }, { x: 'Proporción de cada tipo de reciclaje sobre el total', c: 1 }, { x: 'Número de libros leídos por cada alumna', c: 2 }, { x: 'Cantidad de goles de cuatro equipos distintos', c: 2 }], why: 'Las líneas muestran cambios en el tiempo, los sectores muestran partes de un todo y las barras comparan cantidades entre categorías.' },
        { t: 'num', q: 'En una encuesta sobre mascotas se registraron estas frecuencias absolutas: perro (12), gato (9), pájaro (4) y ninguno (5). ¿A cuántas personas se encuestó en total?', a: 30, u: 'personas', why: 'Sumamos todas las frecuencias absolutas: 12 + 9 + 4 + 5 = 30 personas.' },
        { t: 'choice', q: `Si en un grupo de 20 personas hay 5 que llevan gafas, ¿cuál es la frecuencia relativa de llevar gafas?`, o: [FR(5, 20), FR(20, 5), FR(5, 15), FR(15, 20)], a: 0, why: 'La frecuencia relativa divide la frecuencia absoluta (5) entre el total de datos (20): 5/20 (que simplificada es 1/4 o 0,25).' },
        { t: 'order', q: 'Ordena los pasos para construir una tabla de frecuencias a partir de una encuesta.', items: ['Recoger todas las respuestas de la encuesta', 'Contar cuántas veces se repite cada dato (frecuencia absoluta)', 'Sumar las frecuencias absolutas para comprobar el total N', 'Dividir cada frecuencia absoluta entre N (frecuencia relativa)'], why: 'Primero se recogen y cuentan los datos (frecuencia absoluta), se comprueba el total N y por último se calcula la frecuencia relativa.' },
        { t: 'tap', q: 'En esta explicación sobre las tablas de datos hay dos palabras incorrectas. ¡Tócalas!', words: ['Para', 'calcular', 'la', 'frecuencia', 'relativa', 'multiplicamos', 'la', 'frecuencia', 'absoluta', 'por', 'cero.'], wrong: [5, 10], why: 'Para hallar la frecuencia relativa <b>dividimos</b> la frecuencia absoluta entre el <b>total</b> de datos.' },
        { t: 'num', q: 'En un gráfico de sectores, el círculo completo representa el 100 % de los datos. ¿Cuántos grados mide el sector que representa exactamente el 50 % (la mitad)?', a: 180, u: '°', why: 'La vuelta completa mide 360°, así que la mitad (50 %) ocupa 360° ÷ 2 = 180°.' },
        { t: 'choice', q: 'En un diagrama de barras sobre fruta favorita: manzana = 14, plátano = 19, pera = 11 y fresa = 16. ¿Cuántas personas más prefieren el plátano que la pera?', o: ['8 personas', '30 personas', '5 personas', '3 personas'], a: 0, why: 'Restamos las alturas de las dos barras: 19 (plátano) − 11 (pera) = 8 personas.' },
        { t: 'tf', q: 'En un gráfico de sectores, un dato que representa el 25 % del total ocupa un ángulo recto (90°).', a: true, why: 'El 25 % es la cuarta parte del círculo completo: 360° ÷ 4 = 90°.' },
        { t: 'gen', f: () => {
          const a = R(6, 18), b = R(5, 16), c = R(4, 15), x = R(5, 17);
          const tot = a + b + c + x;
          const cat = P([['Pirineos', 'Moncayo', 'Ordesa', 'Albarracín'], ['lectura', 'teatro', 'ajedrez', 'pintura'], ['lunes', 'martes', 'miércoles', 'jueves']]);
          return { t: 'num', q: `En una tabla de frecuencias con un total de <b>${tot} respuestas</b>, las opciones tienen estas frecuencias absolutas: ${cat[0]} (${a}), ${cat[1]} (${b}), ${cat[2]} (${c}) y ${cat[3]} (?). ¿Cuál es la frecuencia absoluta de <b>${cat[3]}</b>?`, a: x, why: `Sumamos las frecuencias conocidas: ${a} + ${b} + ${c} = ${a + b + c}. Restamos al total: ${tot} − ${a + b + c} = ${x}.` };
        } },
        { t: 'gen', f: () => {
          const tot = P([20, 25, 30, 40, 50]);
          const fa = R(3, tot - 6);
          const ok = FR(fa, tot);
          const cands = [FR(tot, fa), FR(tot - fa, tot), FR(fa, tot - fa), FR(fa + 1, tot), FR(fa + 2, tot)].filter(x => x !== ok);
          const opts = SH([ok, ...[...new Set(cands)].slice(0, 3)]);
          return { t: 'choice', q: `De un total de <b>${tot} datos</b>, un valor tiene una frecuencia absoluta de <b>${fa}</b>. ¿Cuál es su <b>frecuencia relativa</b> en forma de fracción (sin simplificar)?`, o: opts, a: opts.indexOf(ok), why: `La frecuencia relativa es frecuencia absoluta entre total de datos: ${fa}/${tot}.` };
        } },
        { t: 'gen', f: () => {
          const a = R(8, 25), b = R(10, 28), c = R(6, 22);
          const askTotal = Math.random() < 0.5;
          if (askTotal) {
            return { t: 'num', q: `En un diagrama de barras de tres equipos, las barras alcanzan las alturas <b>${a}</b>, <b>${b}</b> y <b>${c}</b>. ¿Cuántos datos hay en total entre los tres?`, a: a + b + c, why: `Sumamos las frecuencias de las tres barras: ${a} + ${b} + ${c} = ${a + b + c}.` };
          }
          const mx = Math.max(a, b, c), mn = Math.min(a, b, c);
          return { t: 'num', q: `En un diagrama de barras, las tres barras miden <b>${a}</b>, <b>${b}</b> y <b>${c}</b>. ¿Cuál es la diferencia de frecuencia entre la barra más alta y la más baja?`, a: mx - mn, why: `La barra más alta vale ${mx} y la más baja vale ${mn}. Su diferencia es ${mx} − ${mn} = ${mx - mn}.` };
        } }
      ]
    },
    {
      title: 'Parámetros estadísticos: media, mediana, moda y rango',
      intro: [
        { i: '🏆', h: 'La moda y el rango', p: '• <b>Moda</b>: es el dato que <b>más veces se repite</b> (el que tiene mayor frecuencia absoluta). Puede haber más de una moda.<br>• <b>Rango (o recorrido)</b>: mide la diferencia entre el dato mayor y el dato menor:<br><b>Rango = máximo − mínimo</b>.' },
        { i: '⚖️', h: 'La media aritmética', p: 'La <b>media</b> es el valor promedio (el que tendrían todos si repartiésemos en partes iguales).<br>Se calcula <b>sumando todos los datos</b> y <b>dividiendo entre el número total de datos</b>:<br>Media de 6, 8 y 10 = (6 + 8 + 10) ÷ 3 = 24 ÷ 3 = <b>8</b>.' },
        { i: '🎯', h: 'La mediana: el valor central', p: 'Para hallar la <b>mediana</b>, primero <b>ordenamos los datos de menor a mayor</b> y elegimos el que queda <b>justo en el centro</b>.<br>• En 3, 5, <b>9</b>, 10, 12 la mediana es <b>9</b>.<br>• Si hay un número par de datos, es la media de los dos centrales.' }
      ],
      ex: [
        { t: 'choice', q: 'En las puntuaciones 4, 7, 7, 8, 9, 10, ¿cuál es la moda?', o: ['7', '6', '8', '7,5'], a: 0, why: 'La moda es el valor que más se repite: el 7 aparece dos veces y los demás solo una.' },
        { t: 'tf', q: 'Para calcular la mediana de un conjunto de números, el primer paso obligatorio es ordenarlos de menor a mayor.', a: true, why: 'Si no los ordenas antes, el número que está en medio de la lista desordenada no tiene por qué ser la mediana.' },
        { t: 'tf', q: 'El rango de un conjunto de datos se calcula sumando el dato mayor y el dato menor.', a: false, why: 'El rango es la <b>resta</b> entre el dato mayor y el dato menor (máximo − mínimo).' },
        { t: 'match', q: 'Une cada parámetro estadístico con cómo se obtiene.', pairs: [['Media aritmética', 'Suma de todos los datos dividida entre el total de datos'], ['Moda', 'El dato que tiene mayor frecuencia absoluta'], ['Mediana', 'El dato central cuando están ordenados de menor a mayor'], ['Rango', 'Dato mayor menos dato menor']], why: 'Media = promedio; moda = el más repetido; mediana = el del medio (ordenados); rango = amplitud entre extremos.' },
        { t: 'num', q: 'Lara ha sacado un 7, un 8, un 9 y un 8 en cuatro pruebas de Matemáticas. ¿Cuál es su nota media?', a: 8, why: 'Sumamos las cuatro notas y dividimos entre 4: (7 + 8 + 9 + 8) ÷ 4 = 32 ÷ 4 = 8.' },
        { t: 'num', q: '¿Cuál es la mediana de estos cinco datos desordenados: 14, 8, 20, 11, 17?', a: 14, why: 'Ordenamos de menor a mayor: 8, 11, 14, 17, 20. El dato que queda justo en la posición central (3.ª) es 14.' },
        { t: 'num', q: 'Las temperaturas mínimas de una semana en Jaca fueron: 2 °C, 5 °C, 1 °C, 8 °C, 4 °C, 9 °C y 3 °C. ¿Cuál fue el rango de temperaturas?', a: 8, u: '°C', why: 'Dato mayor = 9 °C; dato menor = 1 °C. Rango = 9 − 1 = 8 °C.' },
        { t: 'sort', q: 'Para los datos 2, 4, 4, 6, 9, clasifica cada resultado con el parámetro que le corresponde.', cats: ['Moda', 'Mediana', 'Rango'], items: [{ x: 'Valor: 4 (se repite dos veces)', c: 0 }, { x: 'Dato con mayor frecuencia', c: 0 }, { x: 'Valor: 4 (ocupa el 3.er lugar de 5)', c: 1 }, { x: 'Dato central de la lista ordenada', c: 1 }, { x: 'Valor: 7 (porque 9 − 2 = 7)', c: 2 }, { x: 'Diferencia entre el máximo y el mínimo', c: 2 }], why: 'En 2, 4, 4, 6, 9 la moda es 4, la mediana es el tercer dato (4), la media es 25÷5 = 5 y el rango es 9 − 2 = 7.' },
        { t: 'order', q: 'Ordena de menor a mayor estos cuatro valores calculados sobre la lista de datos: 1, 5, 5, 5, 9.', items: ['Dato menor (1)', 'Media y mediana (5)', 'Rango (8)', 'Dato mayor (9)'], why: 'Mínimo = 1; media = (1+5+5+5+9)÷5 = 5 y mediana = 5; rango = 9 − 1 = 8; máximo = 9.' },
        { t: 'choice', q: '¿Cuál es la mediana de estos 4 datos ya ordenados: 10, 12, 16, 20?', o: ['14', '12', '16', '15'], a: 0, why: 'Como hay un número par de datos (4), tomamos los dos centrales (12 y 16) y calculamos su media: (12 + 16) ÷ 2 = 14.' },
        { t: 'tap', q: 'En esta frase hay dos errores sobre la mediana. ¡Encuéntralos!', words: ['La', 'mediana', 'es', 'el', 'dato', 'que', 'más', 'se', 'repite', 'sin', 'ordenar.'], wrong: [6, 9], why: 'El dato que más se repite es la <b>moda</b>; la mediana es el dato central <b>después</b> de ordenar.' },
        { t: 'tf', q: 'En el conjunto de datos 3, 3, 5, 7, 7 hay dos modas (es bimodal): el 3 y el 7.', a: true, why: 'Tanto el 3 como el 7 se repiten dos veces (la frecuencia máxima), así que ambos son moda.' },
        { t: 'gen', f: () => {
          const n = P([4, 5]);
          const mean = R(5, 18);
          const offs = n === 4 ? P([[-3, -1, 1, 3], [-4, -1, 2, 3], [-2, -2, 1, 3], [-5, 0, 2, 3]]) : P([[-4, -2, 0, 2, 4], [-3, -1, 0, 1, 3], [-5, -1, 1, 2, 3], [-4, -1, 0, 2, 3]]);
          const arr = SH(offs.map(d => mean + d));
          const sum = mean * n;
          return { t: 'num', q: `Calcula la <b>media aritmética</b> de estos ${n} datos: <b>${arr.join(', ')}</b>.`, a: mean, why: `Sumamos los ${n} datos: ${arr.join(' + ')} = ${sum}. Dividimos entre ${n}: ${sum} ÷ ${n} = ${mean}.` };
        } },
        { t: 'gen', f: () => {
          const base = R(4, 25);
          const d1 = R(2, 6), d2 = R(2, 6), d3 = R(2, 6), d4 = R(2, 6);
          const sorted = [base, base + d1, base + d1 + d2, base + d1 + d2 + d3, base + d1 + d2 + d3 + d4];
          const shuf = SH(sorted);
          const med = sorted[2];
          return { t: 'num', q: `Calcula la <b>mediana</b> de estos 5 datos: <b>${shuf.join(', ')}</b>.`, a: med, why: `Primero los ordenamos de menor a mayor: ${sorted.join(', ')}. El valor central (3.º) es <b>${med}</b>.` };
        } },
        { t: 'gen', f: () => {
          const askRange = Math.random() < 0.5;
          if (askRange) {
            const mn = R(3, 18), rng = R(7, 25);
            const mx = mn + rng;
            const mid = [R(mn + 1, mx - 1), R(mn + 1, mx - 1), R(mn + 1, mx - 1)];
            const arr = SH([mn, mx, ...mid]);
            return { t: 'num', q: `Halla el <b>rango</b> de este conjunto de datos: <b>${arr.join(', ')}</b>.`, a: rng, why: `El dato mayor es ${mx} y el dato menor es ${mn}. Rango = ${mx} − ${mn} = ${rng}.` };
          }
          const vals = SH([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).slice(0, 4);
          const mode = vals[0];
          const arr = SH([mode, mode, mode, vals[1], vals[2], vals[3]]);
          return { t: 'num', q: `¿Cuál es la <b>moda</b> de estos datos: <b>${arr.join(', ')}</b>?`, a: mode, why: `El número ${mode} aparece 3 veces y los demás solo una vez, así que la moda es ${mode}.` };
        } }
      ]
    },
    {
      title: 'El azar y la probabilidad como fracción',
      intro: [
        { i: '🎲', h: 'Suceso seguro, posible e imposible', p: 'En una experiencia de azar no sabemos qué saldrá, pero sí qué puede ocurrir:<br>• <b>Suceso imposible</b>: nunca ocurre (probabilidad = <b>0</b>).<br>• <b>Suceso posible (o probable)</b>: puede ocurrir o no (entre 0 y 1).<br>• <b>Suceso seguro</b>: ocurre siempre (probabilidad = <b>1</b>).' },
        { i: '➗', h: 'La regla de Laplace (probabilidad en fracción)', p: 'Si todos los resultados tienen la misma oportunidad, la probabilidad de un suceso es la fracción:<br><b>Probabilidad = casos favorables ÷ casos posibles</b>.<br>Al lanzar un dado de 6 caras, la probabilidad de sacar un 5 es <b>1/6</b> y la de sacar número par (2, 4, 6) es <b>3/6 = 1/2</b>.' },
        { i: '⚖️', h: 'Simplificar y comparar probabilidades', p: 'Una probabilidad nunca puede ser menor que 0 ni mayor que 1. Cuanto más cerca de 1 está la fracción, <b>más probable</b> es el suceso. Siempre que podamos, simplificamos la fracción hasta la <b>fracción irreducible</b>.' }
      ],
      ex: [
        { t: 'choice', q: 'Al lanzar un dado normal de 6 caras (numeradas del 1 al 6), ¿qué tipo de suceso es «sacar un número menor que 7»?', o: ['Suceso seguro (probabilidad 1)', 'Suceso imposible (probabilidad 0)', 'Suceso poco probable', 'Suceso de probabilidad 1/6'], a: 0, why: 'Las caras son 1, 2, 3, 4, 5 y 6: todas son menores que 7, así que ocurre siempre (6/6 = 1).' },
        { t: 'tf', q: 'La probabilidad de un suceso puede ser 5/4 si hay muchos casos favorables.', a: false, why: 'El número de casos favorables nunca puede superar al total de casos posibles, así que la probabilidad nunca es mayor que 1.' },
        { t: 'tf', q: 'Al lanzar una moneda equilibrada, la probabilidad de sacar cara es 1/2.', a: true, why: 'Hay 2 casos posibles (cara y cruz) y 1 caso favorable (cara): P = 1/2.' },
        { t: 'sort', q: 'Lanzamos un dado de 6 caras (del 1 al 6). Clasifica cada suceso.', cats: ['Seguro', 'Posible', 'Imposible'], items: [{ x: 'Sacar un número entre 1 y 6', c: 0 }, { x: 'Sacar un número mayor que 0', c: 0 }, { x: 'Sacar un número par', c: 1 }, { x: 'Sacar un 6', c: 1 }, { x: 'Sacar un 8', c: 2 }, { x: 'Sacar un número negativo', c: 2 }], why: 'Entre 1 y 6 o mayor que 0 sale siempre; par o un 6 puede salir o no; un 8 o un negativo no están en el dado.' },
        { t: 'match', q: 'Lanzamos un dado de 6 caras. Une cada suceso con su probabilidad simplificada.', pairs: [['Sacar un 4', '1/6'], ['Sacar un número par (2, 4, 6)', '1/2'], ['Sacar un múltiplo de 3 (3, 6)', '1/3'], ['Sacar un número menor que 5 (1, 2, 3, 4)', '2/3']], why: 'Aplicamos Laplace y simplificamos: 1/6, 3/6 = 1/2, 2/6 = 1/3 y 4/6 = 2/3.' },
        { t: 'choice', q: `En una bolsa hay 3 bolas rojas, 2 azules y 5 verdes. ¿Cuál es la probabilidad de sacar al azar una bola azul (sin simplificar)?`, o: [FR(2, 10), FR(2, 8), FR(3, 10), FR(5, 10)], a: 0, why: 'En total hay 3 + 2 + 5 = 10 bolas (casos posibles) y 2 son azules (casos favorables): 2/10 (o 1/5 simplificada).' },
        { t: 'order', q: 'Ordena estos sucesos de MENOR a MAYOR probabilidad al lanzar un dado de 6 caras.', items: ['Sacar un 9 (0/6)', 'Sacar un 5 (1/6)', 'Sacar un número par (3/6)', 'Sacar un número mayor que 1 (5/6)', 'Sacar un número del 1 al 6 (6/6)'], why: 'Comparamos las fracciones de igual denominador: 0/6 < 1/6 < 3/6 < 5/6 < 6/6.' },
        { t: 'num', q: 'En una rifa de 50 boletos numerados del 1 al 50, Lara tiene 5 boletos. Si expresamos su probabilidad de ganar como la fracción irreducible 1/n, ¿cuánto vale el denominador n?', a: 10, why: 'La probabilidad es 5/50. Dividiendo numerador y denominador entre 5 obtenemos 1/10, luego el denominador es 10.' },
        { t: 'num', q: 'Una caja tiene 12 caramelos de fresa y menta. Si la probabilidad de sacar uno de fresa es 1/3, ¿cuántos caramelos de fresa hay en la caja?', a: 4, u: 'caramelos', why: '1/3 de 12 caramelos es 12 ÷ 3 = 4 caramelos de fresa (así 4/12 = 1/3).' },
        { t: 'tap', q: 'En la regla de Laplace hay dos palabras colocadas al revés. ¡Cázalas!', words: ['La', 'probabilidad', 'divide', 'los', 'casos', 'imposibles', 'entre', 'los', 'casos', 'favorables.'], wrong: [5, 9], why: 'La regla de Laplace divide los casos <b>favorables</b> (arriba) entre los casos <b>posibles</b> (abajo).' },
        { t: 'choice', q: `Una ruleta tiene 8 sectores iguales numerados del 1 al 8. ¿Cuál es la probabilidad en fracción irreducible de caer en un número mayor que 6?`, o: [FR(1, 4), FR(2, 8), FR(3, 8), FR(1, 8)], a: 0, why: 'Los números mayores que 6 son el 7 y el 8 (2 casos favorables de 8 posibles). Simplificando 2/8 entre 2 obtenemos 1/4.' },
        { t: 'tf', q: 'Si un suceso tiene probabilidad 3/10 de ocurrir, la probabilidad de que NO ocurra es 7/10.', a: true, why: 'De cada 10 casos posibles, si 3 son favorables al suceso, los otros 10 − 3 = 7 casos son favorables a que no ocurra.' },
        { t: 'gen', f: () => {
          const r = R(2, 8), b = R(2, 8), v = R(2, 8);
          const tot = r + b + v;
          const pickCol = P([['roja', r], ['azul', b], ['verde', v]]);
          const [cname, fav] = pickCol;
          const g = G(fav, tot);
          const num = fav / g, den = tot / g;
          const ok = FR(num, den);
          const cand = [FR( den, num ), FR( (tot - fav) / G(tot - fav, tot), tot / G(tot - fav, tot) ), FR(num, den + 1), FR(num + 1, den), FR(fav, tot - fav)].filter(x => x !== ok);
          const opts = SH([ok, ... [...new Set(cand)].slice(0, 3)]);
          return { t: 'choice', q: `En una bolsa hay <b>${r} bolas rojas</b>, <b>${b} azules</b> y <b>${v} verdes</b>. ¿Cuál es la probabilidad de sacar una bola <b>${cname}</b> expresada como <b>fracción irreducible</b>?`, o: opts, a: opts.indexOf(ok), why: `Casos favorables = ${fav}; casos posibles = ${r} + ${b} + ${v} = ${tot}. Fracción: ${fav}/${tot}, que simplificada entre ${g} es ${num}/${den}.` };
        } },
        { t: 'gen', f: () => {
          const n = P([8, 10, 12, 15, 20]);
          const k = R(2, n - 2);
          const fav = n - k;
          const g = G(fav, n);
          const num = fav / g, den = n / g;
          const ok = FR(num, den);
          const cand = [FR(k / G(k, n), n / G(k, n)), FR(n - k + 1, n), FR(den, num), FR(num, den + 2)].filter(x => x !== ok);
          const opts = SH([ok, ...[...new Set(cand)].slice(0, 3)]);
          return { t: 'choice', q: `En una ruleta con <b>${n} sectores iguales</b> numerados del 1 al ${n}, ¿cuál es la probabilidad (como <b>fracción irreducible</b>) de obtener un número <b>mayor que ${k}</b>?`, o: opts, a: opts.indexOf(ok), why: `Del ${k + 1} al ${n} hay ${ n } − ${ k } = ${ fav } casos favorables de ${ n } posibles: ${ fav }/${ n } = ${ num }/${ den }.` };
        } },
        { t: 'gen', f: () => {
          const den = P([3, 4, 5, 6, 8, 10]);
          const mult = R(2, 6);
          const tot = den * mult;
          const num = R(1, den - 1);
          const fav = num * mult;
          return { t: 'num', q: `En una urna hay <b>${tot} bolas</b> en total. Si la probabilidad de sacar una bola premiada es ${FR(num, den)}, ¿cuántas bolas premiadas hay en la urna?`, a: fav, u: 'bolas', why: `Calculamos ${num}/${den} de ${tot}: (${tot} ÷ ${den}) · ${num} = ${mult} · ${num} = ${fav} bolas premiadas.` };
        } }
      ]
    }
  ]
});

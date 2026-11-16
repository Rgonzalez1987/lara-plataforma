const R = Adv.rnd, P = Adv.pick, G = Adv.gcd, SH = Adv.shuffle, F = Adv.frac, FM = Adv.fmt;
const rd = (n, d = 2) => Math.round(n * Math.pow(10, d)) / Math.pow(10, d);

Adv.register(16, {
  stations: [
    {
      title: 'Proporcionalidad directa y regla de tres',
      intro: [
        { i: '⚖️', h: 'Magnitudes directamente proporcionales', p: 'Dos magnitudes son <b>directamente proporcionales</b> si al multiplicar (o dividir) una por un número, la otra queda multiplicada (o dividida) por <b>ese mismo número</b>.<br>Ejemplo: el doble de kilos de melocotón de Calanda cuesta el doble de euros.' },
        { i: '1️⃣', h: 'Método de reducción a la unidad', p: '1.º Averigua cuánto corresponde a <b>1 sola unidad</b> dividiendo.<br>2.º Multiplica ese valor unitario por las unidades que te piden.<br>Si <b>4 entradas</b> cuestan <b>28 €</b>, 1 entrada cuesta 28 : 4 = <b>7 €</b>, y 6 entradas costarán 6 × 7 = <b>42 €</b>.' },
        { i: '🧮', h: 'La regla de tres directa', p: 'Si a una cantidad <b>A</b> le corresponde <b>B</b>, y a otra cantidad <b>C</b> le corresponde <b>x</b>, las razones son iguales:<br><b>x = (B · C) : A</b>. Multiplicamos en cruz los dos datos conocidos y dividimos entre el tercero.' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuál de estas parejas de magnitudes es <b>directamente proporcional</b>?', o: ['El número de barras de pan iguales y su precio total', 'La edad de una niña y su estatura', 'La velocidad de un tren y el tiempo que tarda en llegar', 'El número de páginas de un libro y su color'], a: 0, why: 'Si compras el doble o el triple de barras al mismo precio unitario, pagas exactamente el doble o el triple. La edad y la estatura no crecen al mismo ritmo.' },
        { t: 'tf', q: 'Si dos magnitudes son directamente proporcionales y una se multiplica por 3, la otra también se multiplica por 3.', a: true, why: 'En la proporcionalidad directa ambas magnitudes aumentan o disminuyen en la misma proporción.' },
        { t: 'tf', q: 'La edad de una persona y su peso son magnitudes directamente proporcionales.', a: false, why: 'Al cumplir el doble de años no pesamos necesariamente el doble: no guardan una razón constante.' },
        { t: 'num', q: 'Si <b>5 kg</b> de cerezas de Calatayud cuestan <b>15 €</b>, ¿cuántos euros cuestan <b>8 kg</b>?', a: 24, u: '€', why: 'Por reducción a la unidad: 1 kg cuesta 15 : 5 = 3 €. Entonces 8 kg cuestan 8 × 3 = 24 €.' },
        { t: 'order', q: 'Ordena los pasos para resolver por <b>reducción a la unidad</b> cuánto cuestan 7 cuadernos si 3 cuadernos valen 6 €.', items: ['Identificar que cuadernos y precio son directamente proporcionales', 'Dividir 6 € entre 3 para hallar el precio de 1 cuaderno (2 €)', 'Multiplicar 2 € por los 7 cuadernos', 'Obtener el precio total: 14 €'], why: 'Primero reducimos a 1 unidad dividiendo (6 : 3 = 2 €) y luego multiplicamos por 7 (2 × 7 = 14 €).' },
        { t: 'match', q: 'En una receta para 4 personas se usan 200 g de arroz. Une cada número de personas con los gramos de arroz necesarios.', pairs: [['1 persona', '50 g'], ['2 personas', '100 g'], ['6 personas', '300 g'], ['10 personas', '500 g']], why: 'Por reducción a la unidad: 200 : 4 = 50 g por persona. Luego multiplicamos 50 g por el número de comensales.' },
        { t: 'sort', q: 'Clasifica cada par de magnitudes según si guardan <b>proporcionalidad directa</b> o <b>no</b>.', cats: ['Proporcionalidad directa', 'No es proporcionalidad directa'], items: [{ x: 'Litros de aceite y su precio', c: 0 }, { x: 'Tiempo a velocidad fija y distancia recorrida', c: 0 }, { x: 'Número de calzado y nota en Matemáticas', c: 1 }, { x: 'Cajas iguales y número total de pinturas', c: 0 }, { x: 'Altura de una persona y su edad', c: 1 }, { x: 'Número de obreros y días que tardan en hacer un muro', c: 1 }], why: 'Precio/litros, distancia/tiempo a velocidad constante y pinturas/cajas crecen en la misma proporción; el resto no (obreros y días es inversa).' },
        { t: 'choice', q: 'En una regla de tres directa: si <b>4 cajas</b> pesan <b>18 kg</b> y <b>6 cajas</b> pesan <b>x kg</b>, ¿cómo se calcula <b>x</b>?', o: ['x = (18 · 6) : 4', 'x = (4 · 6) : 18', 'x = (18 · 4) : 6', 'x = 18 + 6 − 4'], a: 0, why: 'En la regla de tres directa multiplicamos los datos en diagonal (18 · 6 = 108) y dividimos entre el dato restante (108 : 4 = 27 kg).' },
        { t: 'tap', q: 'En esta tabla de proporcionalidad directa (1 entrada = 6 €) hay <b>dos importes mal calculados</b>. ¡Cázalos!', words: ['Tabla:', '1→6€,', '2→12€,', '3→15€,', '4→24€,', '5→35€', 'y', '6→36€.'], wrong: [3, 5], why: 'Como 1 entrada vale 6 €, 3 entradas son 3 × 6 = <b>18 €</b> (no 15 €) y 5 entradas son 5 × 6 = <b>30 €</b> (no 35 €).' },
        { t: 'num', q: 'Una fuente en Jaca mana <b>36 litros</b> de agua en <b>3 minutos</b>. ¿Cuántos litros manará en <b>10 minutos</b> al mismo ritmo?', a: 120, u: 'L', why: 'En 1 minuto mana 36 : 3 = 12 L. En 10 minutos manará 12 × 10 = 120 L.' },
        { t: 'choice', q: 'Un coche que circula a velocidad constante recorre <b>180 km en 2 horas</b>. ¿Cuánto recorrerá en <b>3 horas y media</b>?', o: ['315 km', '270 km', '300 km', '360 km'], a: 0, why: 'En 1 hora recorre 180 : 2 = 90 km. En 3,5 horas recorre 90 × 3,5 = 315 km.' },
        { t: 'tf', q: 'En una tabla de proporcionalidad directa, al dividir cualquier valor de la segunda magnitud entre su correspondiente de la primera siempre se obtiene el mismo número (constante de proporcionalidad).', a: true, why: 'Ese cociente constante es precisamente el valor de 1 unidad.' },
        { t: 'gen', f: () => {
          const unit = R(2, 12);
          const a = R(2, 7); let c; do { c = R(3, 11); } while (c === a);
          const b = a * unit, ans = c * unit;
          const items = P([['kg de manzanas', '€'], ['cajas de rotuladores', 'rotuladores'], ['entradas de cine', '€'], ['horas de marcha', 'km'], ['sobres de cromos', 'cromos']]);
          return { t: 'num', q: `Si <b>${a} ${items[0]}</b> corresponden a <b>${b} ${items[1]}</b>, ¿cuántos ${items[1]} corresponderán a <b>${c} ${items[0]}</b>?`, a: ans, u: items[1], why: `Reducción a la unidad: ${b} : ${a} = ${unit} ${items[1]} por cada uno. Para ${c}: ${c} × ${unit} = <b>${ans} ${items[1]}</b>.` };
        } },
        { t: 'gen', f: () => {
          const k = P([1.5, 2.5, 3.5, 4, 6, 8, 9, 12, 15]);
          const a = P([2, 4, 6, 8]); let c; do { c = P([2, 4, 6, 8, 10, 12]); } while (c === a);
          const b = rd(a * k), ans = rd(c * k);
          return { t: 'num', q: `Las magnitudes A y B son directamente proporcionales. Cuando <b>A = ${a}</b>, entonces <b>B = ${FM(b)}</b>. ¿Cuánto vale <b>B</b> cuando <b>A = ${c}</b>?`, a: ans, why: `Por regla de tres directa: B = (${FM(b)} × ${c}) : ${a} = <b>${FM(ans)}</b>.` };
        } },
        { t: 'gen', f: () => {
          const gPerP = P([40, 50, 60, 75, 80, 90, 120]);
          const p1 = P([4, 6]); const p2 = P([3, 5, 7, 8, 9, 10]);
          const tot1 = gPerP * p1, ans = gPerP * p2;
          const ing = P(['gramos de pasta', 'gramos de harina', 'mililitros de caldo', 'gramos de arroz']);
          return { t: 'num', q: `Para preparar una receta para <b>${p1} personas</b> se necesitan <b>${tot1} ${ing}</b>. ¿Cuántos ${ing} hacen falta para <b>${p2} personas</b>?`, a: ans, u: 'g/mL', why: `Para 1 persona se usan ${tot1} : ${p1} = ${gPerP}. Para ${p2} personas: ${gPerP} × ${p2} = <b>${ans}</b>.` };
        } }
      ]
    },
    {
      title: 'Porcentajes, descuentos e IVA',
      intro: [
        { i: '💯', h: 'Porcentaje de una cantidad', p: 'Para calcular el <b>P % de una cantidad N</b>, multiplicamos N por P y dividimos entre 100 (o multiplicamos por su decimal):<br><b>15 % de 80</b> = (15 × 80) : 100 = 1 200 : 100 = <b>12</b>.' },
        { i: '🏷️', h: 'Descuentos y rebajas', p: 'Un <b>descuento</b> rebaja el precio inicial. Puedes calcularlo en dos pasos (hallar el descuento y <b>restarlo</b>) o en uno:<br>Si rebajan un <b>20 %</b>, pagas el <b>80 %</b> del precio inicial. En una mochila de 50 €: 50 − 10 = <b>40 €</b>.' },
        { i: '🧾', h: 'Aumentos e IVA', p: 'El <b>IVA</b> (Impuesto sobre el Valor Añadido) es un porcentaje que se <b>suma</b> al precio sin impuesto (en España el general es el <b>21 %</b> y el reducido el <b>10 %</b>).<br>Un artículo de <b>200 € más el 21 % de IVA</b> cuesta 200 + 42 = <b>242 €</b>.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué operación permite calcular correctamente el <b>30 % de 250</b>?', o: ['(250 × 30) : 100 = 75', '(250 : 30) × 100', '250 − 30 = 220', '250 + 30 = 280'], a: 0, why: 'El 30 % de 250 es (30/100) × 250 = 7 500 : 100 = 75.' },
        { t: 'tf', q: 'Calcular el <b>25 %</b> de una cantidad da el mismo resultado que dividir esa cantidad entre <b>4</b>.', a: true, why: 'Como 25 % = 25/100 = 1/4, hallar el 25 % equivale exactamente a calcular la cuarta parte.' },
        { t: 'tf', q: 'Si un abrigo cuesta 100 €, primero sube un 10 % y luego baja un 10 %, vuelve a costar exactamente 100 €.', a: false, why: 'Al subir un 10 % pasa a 110 €. El 10 % de 110 € es 11 €, y 110 − 11 = <b>99 €</b> (no 100 €), porque el segundo porcentaje se calcula sobre 110 €.' },
        { t: 'match', q: 'Une cada porcentaje con el atajo mental para calcularlo.', pairs: [['50 %', 'Dividir entre 2 (la mitad)'], ['25 %', 'Dividir entre 4 (la cuarta parte)'], ['10 %', 'Dividir entre 10'], ['20 %', 'Dividir entre 5 (la quinta parte)']], why: '50/100 = 1/2, 25/100 = 1/4, 10/100 = 1/10 y 20/100 = 1/5.' },
        { t: 'order', q: 'Ordena los pasos para hallar el precio final de una bicicleta de <b>200 €</b> con un <b>15 % de descuento</b>.', items: ['Tomar el precio inicial (200 €)', 'Multiplicar 200 × 15 y dividir entre 100 para hallar la rebaja (30 €)', 'Restar los 30 € de rebaja a los 200 € iniciales', 'Obtener el precio final: 170 €'], why: 'En un descuento primero calculamos el importe rebajado (30 €) y luego lo restamos al precio original (200 − 30 = 170 €).' },
        { t: 'sort', q: 'Clasifica cada situación según si <b>disminuye</b> o <b>aumenta</b> el precio inicial.', cats: ['Se resta (baja el precio)', 'Se suma (sube el precio)'], items: [{ x: 'Rebaja de invierno del 30 %', c: 0 }, { x: 'Añadir el 21 % de IVA', c: 1 }, { x: 'Cupón de descuento del 15 %', c: 0 }, { x: 'Recargo del 5 % por envío urgente', c: 1 }, { x: 'Oferta del 25 % menos', c: 0 }, { x: 'Aplicar el 10 % de IVA reducido', c: 1 }], why: 'Descuentos, rebajas y ofertas se restan; el IVA y los recargos se suman al precio base.' },
        { t: 'num', q: 'Unas zapatillas cuestan <b>60 €</b> y tienen un <b>20 % de descuento</b>. ¿Cuántos euros se pagan finalmente por ellas?', a: 48, u: '€', why: 'El descuento es el 20 % de 60 € = 12 €. Precio final: 60 − 12 = 48 €.' },
        { t: 'num', q: 'Una entrada a un espectáculo en Huesca cuesta <b>30 € sin IVA</b>. Si se le aplica un <b>10 % de IVA</b>, ¿cuál es el precio final con IVA?', a: 33, u: '€', why: 'El 10 % de 30 € es 3 €. Al sumarlo: 30 + 3 = 33 €.' },
        { t: 'choice', q: 'Si en una tienda te hacen un <b>35 % de descuento</b>, ¿qué porcentaje del precio original estás pagando en realidad?', o: ['El 65 %', 'El 35 %', 'El 75 %', 'El 135 %'], a: 0, why: 'El total es el 100 %. Si te descuentan el 35 %, pagas 100 % − 35 % = 65 %.' },
        { t: 'tap', q: 'En este cartel de rebajas hay <b>dos cálculos incorrectos</b>. ¡Cázalos!', words: ['Cálculos:', '10%_de_80=8,', '50%_de_60=30,', '25%_de_40=15,', '20%_de_50=20', 'y', '5%_de_200=10.'], wrong: [3, 4], why: 'El 25 % de 40 es 40 : 4 = <b>10</b> (no 15), y el 20 % de 50 es (20 × 50) : 100 = <b>10</b> (no 20).' },
        { t: 'choice', q: 'En un colegio de Teruel con <b>300 estudiantes</b>, el <b>40 %</b> participa en atletismo. ¿Cuántos estudiantes son?', o: ['120 estudiantes', '40 estudiantes', '140 estudiantes', '180 estudiantes'], a: 0, why: '40 % de 300 = (40 × 300) : 100 = 120 estudiantes.' },
        { t: 'tf', q: 'El Impuesto sobre el Valor Añadido (IVA) es un porcentaje que se suma al precio base de un producto o servicio.', a: true, why: 'Por ejemplo, si un ordenador vale 500 € sin IVA y el IVA es del 21 %, se suman 105 € y el total es 605 €.' },
        { t: 'gen', f: () => {
          const pct = P([5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 80]);
          const base = P([40, 60, 80, 120, 140, 160, 200, 240, 300, 400, 500]);
          const ans = rd((pct * base) / 100);
          return { t: 'num', q: `Calcula el <b>${pct} % de ${base}</b>.`, a: ans, why: `Multiplicamos ${base} × ${pct} = ${base * pct} y dividimos entre 100: <b>${FM(ans)}</b>.` };
        } },
        { t: 'gen', f: () => {
          const pct = P([10, 15, 20, 25, 30, 40, 50]);
          const price = P([20, 40, 60, 80, 100, 120, 160, 200, 240]);
          const disc = rd((price * pct) / 100);
          const ans = rd(price - disc);
          const obj = P(['una chaqueta', 'una mochila', 'un patinete', 'un juego de mesa', 'una raqueta']);
          return { t: 'num', q: `El precio inicial de ${obj} es de <b>${price} €</b>. Si tiene un <b>${pct} % de descuento</b>, ¿cuál es su precio final?`, a: ans, u: '€', why: `Descuento: ${pct} % de ${price} € = ${FM(disc)} €. Precio final: ${price} − ${FM(disc)} = <b>${FM(ans)} €</b>.` };
        } },
        { t: 'gen', f: () => {
          const iva = P([4, 10, 21]);
          const price = R(1, 25) * 20;
          const tax = rd((price * iva) / 100);
          const ans = rd(price + tax);
          return { t: 'num', q: `Una factura sin impuestos es de <b>${price} €</b>. Si se le añade un <b>${iva} % de IVA</b>, ¿cuántos euros hay que pagar en total?`, a: ans, u: '€', why: `IVA (${iva} % de ${price} €) = ${FM(tax)} €. Total con IVA: ${price} + ${FM(tax)} = <b>${FM(ans)} €</b>.` };
        } }
      ]
    },
    {
      title: 'Escalas en mapas y planos de Aragón',
      intro: [
        { i: '🗺️', h: '¿Qué significa la escala 1 : N?', p: 'La <b>escala</b> de un mapa indica cuántas veces se ha reducido la realidad. Una escala <b>1 : 100 000</b> significa que <b>1 cm en el mapa representa 100 000 cm en la realidad</b>.<br>Como 100 cm = 1 m y 100 000 cm = 1 km, en esa escala <b>1 cm equivale a 1 km</b>.' },
        { i: '📏', h: 'Del mapa a la realidad', p: '1.º Multiplica los centímetros medidos en el mapa por el denominador de la escala.<br>2.º Pasa los centímetros reales a <b>metros</b> (: 100) o a <b>kilómetros</b> (: 100 000).<br>En un mapa de Aragón a escala <b>1 : 500 000</b>, cada <b>1 cm son 5 km</b> reales.' },
        { i: '📐', h: 'De la realidad al mapa', p: 'Si conoces la distancia real, pásala primero a <b>centímetros</b> (× 100 si son metros; × 100 000 si son kilómetros) y luego <b>divide entre el denominador de la escala</b>.' }
      ],
      ex: [
        { t: 'choice', q: 'En un mapa del Pirineo aragonés aparece la escala <b>1 : 50 000</b>. ¿Qué significa?', o: ['1 cm del mapa equivale a 50 000 cm (500 m) en la realidad', '1 cm del mapa equivale a 50 000 km en la realidad', '50 000 cm del mapa equivalen a 1 cm real', '1 m del mapa equivale a 50 km reales'], a: 0, why: 'En cualquier escala numérica 1 : N, 1 unidad en el mapa equivale a N unidades iguales en la realidad: 50 000 cm = 500 m.' },
        { t: 'tf', q: 'Para pasar de <b>centímetros a kilómetros</b> hay que dividir entre <b>100 000</b>.', a: true, why: '1 m = 100 cm y 1 km = 1 000 m, así que 1 km = 1 000 × 100 = 100 000 cm.' },
        { t: 'tf', q: 'Un plano a escala <b>1 : 100</b> muestra los objetos más reducidos que un mapa a escala <b>1 : 1 000 000</b>.', a: false, why: 'Es al revés: en 1 : 100 la realidad se reduce 100 veces (plano de una vivienda), mientras que en 1 : 1 000 000 se reduce un millón de veces.' },
        { t: 'match', q: 'Une cada escala con lo que representa <b>1 cm del mapa</b> en la realidad.', pairs: [['1 : 100', '1 m'], ['1 : 10 000', '100 m'], ['1 : 100 000', '1 km'], ['1 : 500 000', '5 km']], why: 'Dividimos los cm entre 100 para obtener metros (100 cm = 1 m; 10 000 cm = 100 m) y entre 100 000 para obtener kilómetros.' },
        { t: 'order', q: 'Ordena los pasos para calcular los <b>kilómetros reales</b> cuando dos pueblos de Teruel distan <b>4 cm</b> en un mapa a escala <b>1 : 200 000</b>.', items: ['Medir la distancia en el mapa (4 cm)', 'Multiplicar 4 cm por 200 000 para obtener los cm reales (800 000 cm)', 'Dividir 800 000 entre 100 000 para pasar de cm a km', 'Obtener la distancia real: 8 km'], why: '4 × 200 000 = 800 000 cm; al dividir entre 100 000 cm/km resultan 8 km.' },
        { t: 'sort', q: 'Clasifica cada escala según para qué representación sea más adecuada.', cats: ['Plano de edificio o patio (detalle)', 'Mapa de Aragón o provincial'], items: [{ x: '1 : 50', c: 0 }, { x: '1 : 100', c: 0 }, { x: '1 : 200', c: 0 }, { x: '1 : 400 000', c: 1 }, { x: '1 : 500 000', c: 1 }, { x: '1 : 800 000', c: 1 }], why: 'Las escalas como 1 : 50 o 1 : 200 reducen poco (ideales para aulas o edificios); 1 : 400 000 o 1 : 800 000 reducen mucho para abarcar territorios grandes.' },
        { t: 'num', q: 'En un mapa de Aragón a escala <b>1 : 1 000 000</b>, la distancia en línea recta entre Zaragoza y Huesca es de <b>6,7 cm</b>. ¿Cuántos kilómetros son en la realidad?', a: 67, u: 'km', why: 'En 1 : 1 000 000, cada centímetro equivale a 1 000 000 cm = 10 km. Por tanto, 6,7 × 10 = 67 km.' },
        { t: 'num', q: 'En el plano de un colegio de Zaragoza a escala <b>1 : 200</b>, la pista polideportiva mide <b>20 cm</b> de largo. ¿Cuántos <b>metros</b> mide en la realidad?', a: 40, u: 'm', why: '20 cm × 200 = 4 000 cm reales. Pasamos a metros dividiendo entre 100: 4 000 : 100 = 40 m.' },
        { t: 'choice', q: 'Dos refugios del Parque Nacional de Ordesa y Monte Perdido están a <b>6 km</b> en línea recta. En un mapa excursionista a escala <b>1 : 100 000</b>, ¿a cuántos centímetros están?', o: ['6 cm', '60 cm', '0,6 cm', '16 cm'], a: 0, why: 'En la escala 1 : 100 000, cada 1 km real (100 000 cm) está representado por 1 cm en el mapa; por tanto, 6 km son 6 cm.' },
        { t: 'tap', q: 'Caza las <b>dos afirmaciones erróneas</b> sobre un mapa a escala <b>1 : 200 000</b>.', words: ['En', 'escala', '1:200000,', '1_cm_son_2_km,', '3_cm_son_6_km,', '5_cm_son_50_km', 'y', '10_cm_son_200_km.'], wrong: [5, 7], why: 'Como 1 cm equivale a 2 km (200 000 cm), 5 cm son 5 × 2 = <b>10 km</b> (no 50 km) y 10 cm son 10 × 2 = <b>20 km</b> (no 200 km).' },
        { t: 'choice', q: 'En un plano de la plaza del Torico de Teruel, una fachada de <b>15 m</b> reales mide <b>3 cm</b> en el papel. ¿Cuál es la escala del plano?', o: ['1 : 500', '1 : 50', '1 : 5 000', '1 : 150'], a: 0, why: 'Pasamos 15 m a centímetros: 1 500 cm. Si 3 cm equivalen a 1 500 cm, 1 cm equivale a 1 500 : 3 = 500 cm → escala 1 : 500.' },
        { t: 'tf', q: 'En un mapa de Aragón a escala <b>1 : 400 000</b>, cada centímetro del mapa equivale a <b>4 kilómetros</b> en la realidad.', a: true, why: '400 000 cm : 100 000 cm/km = 4 km por cada centímetro del mapa.' },
        { t: 'gen', f: () => {
          const scKm = P([1, 2, 3, 4, 5, 8, 10]);
          const sc = scKm * 100000;
          const scStr = sc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
          const cm = P([2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 2.5, 3.5, 4.5]);
          const ans = rd(cm * scKm, 2);
          const lug = P(['dos localidades de Huesca', 'dos pueblos de Teruel', 'dos puntos del valle del Ebro', 'dos cimas del Pirineo aragonés', 'dos municipios del Moncayo']);
          return { t: 'num', q: `En un mapa de Aragón a escala <b>1 : ${scStr}</b>, la distancia entre ${lug} es de <b>${FM(cm)} cm</b>. ¿Cuántos <b>kilómetros</b> los separan en la realidad?`, a: ans, u: 'km', why: `En la escala 1 : ${scStr}, 1 cm equivale a ${scKm} km (${scStr} cm : 100 000). Por tanto: ${FM(cm)} × ${scKm} = <b>${FM(ans)} km</b>.` };
        } },
        { t: 'gen', f: () => {
          const sc = P([50, 100, 200, 250, 500]);
          const cm = R(4, 24);
          const ans = rd((cm * sc) / 100, 2);
          const lugar = P(['un patio escolar de Zaragoza', 'un jardín de Huesca', 'una sala de exposiciones de Teruel', 'un polideportivo de Jaca', 'una biblioteca de Alcañiz']);
          return { t: 'num', q: `En el plano de ${lugar} a escala <b>1 : ${sc}</b>, un lado mide <b>${cm} cm</b>. ¿Cuántos <b>metros</b> mide en la realidad?`, a: ans, u: 'm', why: `Multiplicamos ${cm} cm × ${sc} = ${cm * sc} cm reales y dividimos entre 100 para pasar a metros: <b>${FM(ans)} m</b>.` };
        } },
        { t: 'gen', f: () => {
          const scKm = P([2, 4, 5, 10]);
          const sc = scKm * 100000;
          const scStr = sc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
          const cm = R(3, 18);
          const km = cm * scKm;
          return { t: 'num', q: `Dos localidades de Aragón están a <b>${km} km</b> en línea recta. ¿Cuántos <b>centímetros</b> las separarán en un mapa a escala <b>1 : ${scStr}</b>?`, a: cm, u: 'cm', why: `Como 1 cm en escala 1 : ${scStr} representa ${scKm} km reales, dividimos ${km} : ${scKm} = <b>${cm} cm</b>.` };
        } }
      ]
    }
  ]
});

const R = Adv.rnd, P = Adv.pick, G = Adv.gcd, SH = Adv.shuffle, F = Adv.frac, FM = Adv.fmt;
const rd = (n, d = 3) => Math.round(n * Math.pow(10, d)) / Math.pow(10, d);

Adv.register(17, {
  stations: [
    {
      title: 'Longitud, masa y capacidad (de 10 en 10)',
      intro: [
        { i: '🪜', h: 'La escalera de 10 en 10', p: 'En <b>longitud</b> (metro, <b>m</b>), <b>masa</b> (gramo, <b>g</b>) y <b>capacidad</b> (litro, <b>L</b>), cada escalón cambia de <b>10 en 10</b>.<br>Al <b>bajar</b> hacia unidades menores se <b>multiplica por 10</b> en cada escalón; al <b>subir</b> hacia unidades mayores se <b>divide entre 10</b>.' },
        { i: '🏷️', h: 'Múltiplos, submúltiplos y tonelada', p: '<b>kilo-</b> (×1 000) · <b>hecto-</b> (×100) · <b>deca-</b> (×10) · <b>unidad</b> (m, g, L) · <b>deci-</b> (0,1) · <b>centi-</b> (0,01) · <b>mili-</b> (0,001).<br>Para grandes masas usamos la <b>tonelada (t)</b>: <b>1 t = 1 000 kg</b>.' },
        { i: '🧩', h: 'Expresión compleja e incompleja', p: 'Una medida es <b>incompleja</b> cuando usa una sola unidad (<b>2 350 m</b>) y <b>compleja</b> cuando combina varias (<b>2 km 350 m</b>). Para operar siempre pasamos todo a la misma unidad.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué operación hay que hacer para pasar de <b>hectómetros (hm)</b> a <b>metros (m)</b>?', o: ['Multiplicar por 100 (bajar 2 escalones)', 'Dividir entre 100 (subir 2 escalones)', 'Multiplicar por 10', 'Multiplicar por 1 000'], a: 0, why: 'De hm a dam hay 1 escalón y de dam a m hay otro: son 2 escalones hacia abajo, luego se multiplica por 100.' },
        { t: 'tf', q: 'Una <b>tonelada (t)</b> equivale exactamente a <b>1 000 kilogramos</b>.', a: true, why: '1 t = 1 000 kg (que a su vez son 1 000 000 g).' },
        { t: 'tf', q: 'La expresión compleja <b>4 km 5 m</b> equivale a <b>450 m</b>.', a: false, why: '4 km son 4 000 m, así que 4 km 5 m = 4 000 + 5 = <b>4 005 m</b>.' },
        { t: 'order', q: 'Ordena estas unidades de capacidad de <b>mayor a menor</b>.', items: ['kilolitro (kL)', 'hectolitro (hL)', 'litro (L)', 'centilitro (cL)', 'mililitro (mL)'], why: 'En orden descendente: kL (1 000 L) > hL (100 L) > L (1 L) > cL (0,01 L) > mL (0,001 L).' },
        { t: 'match', q: 'Une cada cantidad con su equivalencia en la unidad principal.', pairs: [['3 km', '3 000 m'], ['5 hm', '500 m'], ['250 cm', '2,5 m'], ['75 mm', '0,075 m']], why: '3 × 1 000 = 3 000 m; 5 × 100 = 500 m; 250 : 100 = 2,5 m; y 75 : 1 000 = 0,075 m.' },
        { t: 'sort', q: 'Clasifica cada unidad según la magnitud que mide.', cats: ['Longitud', 'Masa', 'Capacidad'], items: [{ x: 'decámetro (dam)', c: 0 }, { x: 'milímetro (mm)', c: 0 }, { x: 'tonelada (t)', c: 1 }, { x: 'centigramo (cg)', c: 1 }, { x: 'hectolitro (hL)', c: 2 }, { x: 'centilitro (cL)', c: 2 }], why: 'Las unidades acabadas en -metro miden longitud; en -gramo y la tonelada, masa; en -litro, capacidad.' },
        { t: 'num', q: 'El pico Aneto, el más alto de Aragón y de los Pirineos, tiene una altitud de <b>3 km, 4 hm y 4 m</b>. ¿Cuántos <b>metros</b> mide?', a: 3404, u: 'm', why: '3 km = 3 000 m, 4 hm = 400 m y 4 m = 4 m. En total: 3 000 + 400 + 4 = 3 404 m.' },
        { t: 'num', q: '¿Cuántas botellas de <b>25 cL</b> se pueden llenar con una garrafa de <b>5 litros</b> de agua?', a: 20, u: 'botellas', why: 'Pasamos 5 L a centilitros: 5 × 100 = 500 cL. Dividimos: 500 : 25 = 20 botellas.' },
        { t: 'choice', q: '¿Cuántos gramos faltan a un paquete de <b>650 g</b> de arroz para llegar a <b>1 kg</b>?', o: ['350 g', '450 g', '35 g', '250 g'], a: 0, why: 'Como 1 kg = 1 000 g, restamos 1 000 − 650 = 350 g.' },
        { t: 'tap', q: 'Caza las <b>dos conversiones mal hechas</b> del cuaderno.', words: ['Conversiones:', '2_km=2000_m,', '3,5_kg=3500_g,', '4_L=40_cL,', '500_mg=5_g', 'y', '60_dm=6_m.'], wrong: [3, 4], why: '4 L son <b>400 cL</b> (se multiplica por 100, no por 10) y 500 mg son <b>0,5 g</b> (se divide entre 1 000, no entre 100).' },
        { t: 'choice', q: 'Un camión transporta <b>3,5 toneladas</b> de trigo desde las Cinco Villas. ¿Cuántos kilogramos lleva?', o: ['3 500 kg', '350 kg', '35 000 kg', '35 kg'], a: 0, why: 'Cada tonelada son 1 000 kg, así que 3,5 × 1 000 = 3 500 kg.' },
        { t: 'tf', q: 'Un cuarto de litro (0,25 L) equivale a <b>250 mililitros (mL)</b>.', a: true, why: 'De litros a mililitros bajamos 3 escalones (× 1 000): 0,25 × 1 000 = 250 mL.' },
        { t: 'gen', f: () => {
          const pairs = [
            ['km', 'm', 1000, true], ['hm', 'm', 100, true], ['dam', 'm', 10, true],
            ['m', 'cm', 100, true], ['m', 'mm', 1000, true], ['kg', 'g', 1000, true],
            ['t', 'kg', 1000, true], ['L', 'cL', 100, true], ['L', 'mL', 1000, true],
            ['m', 'km', 1000, false], ['cm', 'm', 100, false], ['g', 'kg', 1000, false], ['mL', 'L', 1000, false]
          ];
          const [u1, u2, f, mult] = P(pairs);
          const v = mult ? rd(R(12, 95) / 10, 1) : R(15, 950) * (f === 100 ? 1 : 10);
          const ans = mult ? rd(v * f, 3) : rd(v / f, 3);
          return { t: 'num', q: `Convierte <b>${FM(v)} ${u1}</b> a <b>${u2}</b>.`, a: ans, u: u2, why: `Para pasar de ${u1} a ${u2} ${mult ? 'multiplicamos' : 'dividimos'} por ${f === 1000 ? '1 000' : f}: ${FM(v)} ${mult ? '×' : ':'} ${f} = <b>${FM(ans)} ${u2}</b>.` };
        } },
        { t: 'gen', f: () => {
          const mode = P([
            ['km', 'm', 1000, 'm'],
            ['hm', 'm', 100, 'm'],
            ['kg', 'g', 1000, 'g'],
            ['L', 'cL', 100, 'cL'],
            ['m', 'cm', 100, 'cm']
          ]);
          const [u1, u2, k, target] = mode;
          const a = R(2, 15), b = R(5, k - 5);
          const ans = a * k + b;
          return { t: 'num', q: `Pasa a forma incompleja en <b>${target}</b>: <b>${a} ${u1} y ${b} ${u2}</b>.`, a: ans, u: target, why: `${a} ${u1} = ${a * k} ${target}. Sumamos: ${a * k} + ${b} = <b>${ans} ${target}</b>.` };
        } },
        { t: 'gen', f: () => {
          const capL = P([2, 3, 4, 5, 6, 8, 10]);
          const vasoMl = P([100, 125, 200, 250, 500]);
          const ans = (capL * 1000) / vasoMl;
          return { t: 'num', q: `¿Cuántos envases de <b>${vasoMl} mL</b> se pueden llenar con <b>${capL} L</b> de zumo?`, a: ans, u: 'envases', why: `Pasamos ${capL} L a mililitros: ${capL * 1000} mL. Dividimos entre ${vasoMl} mL: ${capL * 1000} : ${vasoMl} = <b>${ans} envases</b>.` };
        } }
      ]
    },
    {
      title: 'Superficie y unidades agrarias (de 100 en 100)',
      intro: [
        { i: '🟦', h: 'En superficie, cada escalón vale 100', p: 'Un cuadrado de 1 m de lado mide 10 dm × 10 dm = <b>100 dm<sup>2</sup></b>. Por eso, en las unidades de superficie (<b>km<sup>2</sup>, hm<sup>2</sup>, dam<sup>2</sup>, m<sup>2</sup>, dm<sup>2</sup>, cm<sup>2</sup>, mm<sup>2</sup></b>), cada escalón multiplica o divide por <b>100</b> (dos ceros por escalón).' },
        { i: '🌾', h: 'Las unidades agrarias: la hectárea', p: 'Para medir campos, parques o bosques se usan las <b>unidades agrarias</b>:<br>• <b>Hectárea (ha)</b> = 1 hm<sup>2</sup> = <b>10 000 m<sup>2</sup></b>.<br>• <b>Área (a)</b> = 1 dam<sup>2</sup> = <b>100 m<sup>2</sup></b>.<br>• <b>Centiárea (ca)</b> = <b>1 m<sup>2</sup></b>.' },
        { i: '➕', h: 'Dos cifras por unidad', p: 'Al pasar de dos escalones seguidos (por ejemplo de m<sup>2</sup> a cm<sup>2</sup>) hay 2 escalones × 2 ceros = <b>4 ceros</b>: <b>1 m<sup>2</sup> = 10 000 cm<sup>2</sup></b>.' }
      ],
      ex: [
        { t: 'choice', q: '¿Por qué número hay que multiplicar para pasar de <b>metros cuadrados (m<sup>2</sup>)</b> a <b>decímetros cuadrados (dm<sup>2</sup>)</b>?', o: ['Por 100', 'Por 10', 'Por 1 000', 'Por 10 000'], a: 0, why: 'En las unidades de superficie cada escalón hacia abajo se multiplica por 100: 1 m² = 100 dm².' },
        { t: 'tf', q: 'Una <b>hectárea (ha)</b> es igual a <b>1 hm<sup>2</sup></b>, es decir, <b>10 000 m<sup>2</sup></b>.', a: true, why: '1 ha = 1 hm² = 100 dam² = 10 000 m² (como un cuadrado de 100 m de lado).' },
        { t: 'tf', q: 'Para pasar de <b>m<sup>2</sup></b> a <b>cm<sup>2</sup></b> hay que multiplicar por <b>200</b> porque se bajan dos escalones.', a: false, why: 'Bajar dos escalones en superficie significa multiplicar por 100 dos veces: 100 × 100 = <b>10 000</b> (no 200).' },
        { t: 'match', q: 'Une cada unidad agraria o de superficie con su equivalencia en metros cuadrados (m<sup>2</sup>).', pairs: [['1 centiárea (ca)', '1 m²'], ['1 área (a) = 1 dam²', '100 m²'], ['1 hectárea (ha) = 1 hm²', '10 000 m²'], ['1 km²', '1 000 000 m²']], why: 'ca = m²; a = dam² = 100 m²; ha = hm² = 10 000 m²; y 1 km² = 100 hm² = 1 000 000 m².' },
        { t: 'order', q: 'Ordena estas superficies de <b>menor a mayor</b>.', items: ['50 cm²', '5 dm²', '5 m²', '5 dam²', '5 ha'], why: 'En orden creciente de unidad: cm² < dm² < m² < dam² < ha (hm²).' },
        { t: 'sort', q: 'Clasifica cada expresión según su equivalencia.', cats: ['Equivale a 300 m²', 'Equivale a 30 000 m²'], items: [{ x: '3 dam²', c: 0 }, { x: '3 áreas (3 a)', c: 0 }, { x: '30 000 dm²', c: 0 }, { x: '3 hm²', c: 1 }, { x: '3 hectáreas (3 ha)', c: 1 }, { x: '300 dam²', c: 1 }], why: '3 dam² = 3 a = 300 m² (y 30 000 dm² : 100 = 300 m²). En cambio, 3 hm² = 3 ha = 300 dam² = 30 000 m².' },
        { t: 'num', q: 'Un campo de almendros en la comarca del Aranda mide <b>2,5 hectáreas (ha)</b>. ¿Cuántos <b>metros cuadrados (m<sup>2</sup>)</b> tiene?', a: 25000, u: 'm²', why: 'Cada hectárea son 10 000 m², así que 2,5 × 10 000 = 25 000 m².' },
        { t: 'num', q: '¿Cuántos <b>decímetros cuadrados (dm<sup>2</sup>)</b> son <b>4 m<sup>2</sup> y 35 dm<sup>2</sup></b>?', a: 435, u: 'dm²', why: '4 m² = 4 × 100 = 400 dm². Sumamos: 400 + 35 = 435 dm².' },
        { t: 'choice', q: '¿A cuántas <b>hectáreas (ha)</b> equivale <b>1 kilómetro cuadrado (1 km<sup>2</sup>)</b>?', o: ['100 ha', '10 ha', '1 000 ha', '10 000 ha'], a: 0, why: 'Como 1 ha = 1 hm² y de km² a hm² hay un escalón de superficie, 1 km² = 100 hm² = 100 ha.' },
        { t: 'tap', q: 'Caza las <b>dos equivalencias falsas</b> en esta pizarra de superficies.', words: ['Superficies:', '1_m²=100_dm²,', '1_ha=10000_m²,', '1_dam²=10_m²,', '2_dm²=200_cm²', 'y', '5_hm²=500_m².'], wrong: [3, 6], why: '1 dam² son <b>100 m²</b> (no 10 m²) y 5 hm² son <b>50 000 m²</b> (5 × 10 000, no 500 m²).' },
        { t: 'choice', q: 'Un huerto escolar tiene <b>600 m<sup>2</sup></b>. ¿Cuántas <b>áreas (a)</b> mide?', o: ['6 áreas', '60 áreas', '0,6 áreas', '6 000 áreas'], a: 0, why: 'Como 1 área = 1 dam² = 100 m², dividimos 600 : 100 = 6 áreas.' },
        { t: 'tf', q: 'El área (a) equivale a un decámetro cuadrado (1 dam<sup>2</sup>), que son 100 m<sup>2</sup>.', a: true, why: 'Un cuadrado de 1 dam (10 m) de lado tiene 10 m × 10 m = 100 m² = 1 dam² = 1 área.' },
        { t: 'gen', f: () => {
          const convs = [
            ['m<sup>2</sup>', 'dm<sup>2</sup>', 100, true, 'dm²'],
            ['dm<sup>2</sup>', 'cm<sup>2</sup>', 100, true, 'cm²'],
            ['dam<sup>2</sup>', 'm<sup>2</sup>', 100, true, 'm²'],
            ['hm<sup>2</sup>', 'dam<sup>2</sup>', 100, true, 'dam²'],
            ['km<sup>2</sup>', 'hm<sup>2</sup>', 100, true, 'hm²'],
            ['dm<sup>2</sup>', 'm<sup>2</sup>', 100, false, 'm²'],
            ['cm<sup>2</sup>', 'dm<sup>2</sup>', 100, false, 'dm²'],
            ['m<sup>2</sup>', 'dam<sup>2</sup>', 100, false, 'dam²']
          ];
          const [u1, u2, k, mult, uPlain] = P(convs);
          const v = mult ? rd(R(11, 95) / 10, 1) : R(12, 95) * 10;
          const ans = mult ? rd(v * k, 2) : rd(v / k, 2);
          return { t: 'num', q: `Convierte <b>${FM(v)} ${u1}</b> a <b>${u2}</b>.`, a: ans, u: uPlain, why: `Entre ${u1} y ${u2} hay un escalón de superficie (factor 100): ${FM(v)} ${mult ? '×' : ':'} 100 = <b>${FM(ans)} ${u2}</b>.` };
        } },
        { t: 'gen', f: () => {
          const toM2 = Math.random() < 0.6;
          if (toM2) {
            const ha = rd(R(2, 45) / 10, 1);
            const ans = Math.round(ha * 10000);
            return { t: 'num', q: `Una parcela agrícola en Aragón tiene una superficie de <b>${FM(ha)} hectáreas (ha)</b>. ¿Cuántos <b>metros cuadrados (m<sup>2</sup>)</b> son?`, a: ans, u: 'm²', why: `Como 1 ha = 10 000 m², multiplicamos ${FM(ha)} × 10 000 = <b>${ans} m²</b>.` };
          } else {
            const ha = R(2, 35);
            const m2 = ha * 10000;
            const m2Str = m2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
            return { t: 'num', q: `Un pinar ocupa <b>${m2Str} m<sup>2</sup></b>. ¿Cuántas <b>hectáreas (ha)</b> son?`, a: ha, u: 'ha', why: `Dividimos entre 10 000 m²/ha: ${m2Str} : 10 000 = <b>${ha} ha</b>.` };
          }
        } },
        { t: 'gen', f: () => {
          const a = R(2, 18), b = R(4, 95);
          const pair = P([
            ['m<sup>2</sup>', 'dm<sup>2</sup>', 'dm²'],
            ['dam<sup>2</sup>', 'm<sup>2</sup>', 'm²'],
            ['hm<sup>2</sup>', 'dam<sup>2</sup>', 'dam²'],
            ['dm<sup>2</sup>', 'cm<sup>2</sup>', 'cm²']
          ]);
          const ans = a * 100 + b;
          return { t: 'num', q: `Expresa en <b>${pair[1]}</b> la superficie: <b>${a} ${pair[0]} y ${b} ${pair[1]}</b>.`, a: ans, u: pair[2], why: `${a} ${pair[0]} = ${a * 100} ${pair[1]}. Sumando ${b} ${pair[1]} obtenemos <b>${ans} ${pair[1]}</b>.` };
        } }
      ]
    },
    {
      title: 'Volumen y relación con la capacidad (1 dm³ = 1 L)',
      intro: [
        { i: '🧊', h: 'En volumen, cada escalón vale 1 000', p: 'El <b>volumen</b> es el espacio que ocupa un cuerpo. Un cubo de 1 m de arista contiene 10 dm × 10 dm × 10 dm = <b>1 000 dm<sup>3</sup></b>.<br>Por eso, entre <b>m<sup>3</sup>, dm<sup>3</sup>, cm<sup>3</sup> y mm<sup>3</sup></b> cada escalón multiplica o divide por <b>1 000</b> (tres ceros).' },
        { i: '💧', h: 'El puente clave: 1 dm³ = 1 L', p: 'Si llenas de agua un cubo hueco de <b>1 dm de arista (1 dm<sup>3</sup>)</b>, cabe exactamente <b>1 litro (1 L)</b>.<br>Esta igualdad conecta las unidades de volumen con las de capacidad.' },
        { i: '🏅', h: 'Las tres equivalencias de oro', p: '• <b>1 dm<sup>3</sup> = 1 L</b> (decímetro cúbico = litro).<br>• <b>1 m<sup>3</sup> = 1 kL = 1 000 L</b> (metro cúbico = kilolitro).<br>• <b>1 cm<sup>3</sup> = 1 mL</b> (centímetro cúbico = mililitro).' }
      ],
      ex: [
        { t: 'choice', q: '¿A cuántos <b>litros (L)</b> equivale exactamente <b>1 decímetro cúbico (1 dm<sup>3</sup>)</b>?', o: ['1 L', '10 L', '100 L', '1 000 L'], a: 0, why: 'En un cubo de 1 dm de arista (10 cm × 10 cm × 10 cm) cabe exactamente 1 litro: 1 dm³ = 1 L.' },
        { t: 'tf', q: 'Para pasar de <b>metros cúbicos (m<sup>3</sup>)</b> a <b>decímetros cúbicos (dm<sup>3</sup>)</b> se multiplica por <b>1 000</b>.', a: true, why: 'En las unidades de volumen (tres dimensiones: largo, ancho y alto), cada escalón equivale a multiplicar o dividir por 1 000.' },
        { t: 'tf', q: 'Un depósito de <b>1 metro cúbico (1 m<sup>3</sup>)</b> tiene una capacidad de <b>100 litros</b>.', a: false, why: '1 m³ = 1 000 dm³, y como cada dm³ es 1 L, en 1 m³ caben <b>1 000 litros (1 kL)</b>, no 100 L.' },
        { t: 'match', q: 'Une cada unidad de volumen con su unidad de capacidad equivalente.', pairs: [['1 dm³', '1 L (litro)'], ['1 m³', '1 kL (1 000 L)'], ['1 cm³', '1 mL (mililitro)'], ['100 dm³', '1 hL (100 L)']], why: '1 dm³ = 1 L; 1 m³ = 1 000 dm³ = 1 000 L = 1 kL; 1 cm³ = 0,001 dm³ = 1 mL; y 100 dm³ = 100 L = 1 hL.' },
        { t: 'order', q: 'Ordena estos volúmenes y capacidades de <b>menor a mayor</b>.', items: ['5 cm³', '50 mL', '2 dm³', '500 L', '3 m³'], why: 'Pasando todo a litros (o dm³): 5 cm³ = 0,005 L < 50 mL = 0,05 L < 2 dm³ = 2 L < 500 L < 3 m³ = 3 000 L.' },
        { t: 'sort', q: 'Clasifica cada medida según su capacidad equivalente.', cats: ['Equivale a 1 litro', 'Equivale a 1 000 litros'], items: [{ x: '1 dm³', c: 0 }, { x: '1 000 cm³', c: 0 }, { x: '1 000 mL', c: 0 }, { x: '1 m³', c: 1 }, { x: '1 kL', c: 1 }, { x: '1 000 dm³', c: 1 }], why: '1 dm³ = 1 000 cm³ = 1 000 mL = 1 L; mientras que 1 m³ = 1 000 dm³ = 1 kL = 1 000 L.' },
        { t: 'num', q: 'Una jeringuilla médica contiene <b>15 cm<sup>3</sup></b> de suero. ¿Cuántos <b>mililitros (mL)</b> son?', a: 15, u: 'mL', why: 'Como 1 cm³ = 1 mL, 15 cm³ equivalen exactamente a 15 mL.' },
        { t: 'num', q: 'En una balsa de riego de Los Monegros caben <b>45 m<sup>3</sup></b> de agua. ¿Cuántos <b>litros (L)</b> son?', a: 45000, u: 'L', why: 'Cada metro cúbico equivale a 1 000 litros (1 m³ = 1 000 dm³ = 1 000 L), así que 45 × 1 000 = 45 000 L.' },
        { t: 'choice', q: 'Un brick de leche de <b>1 litro</b> tiene un volumen interior de…', o: ['1 dm<sup>3</sup> = 1 000 cm<sup>3</sup>', '1 m<sup>3</sup> = 100 dm<sup>3</sup>', '10 cm<sup>3</sup>', '100 cm<sup>3</sup>'], a: 0, why: '1 L = 1 dm³, y al bajar un escalón de volumen a cm³ multiplicamos por 1 000: 1 000 cm³.' },
        { t: 'tap', q: 'Caza los <b>dos errores</b> en esta ficha de volumen y capacidad.', words: ['Ficha:', '1_dm³=1_L,', '1_m³=1000_L,', '1_cm³=10_mL,', '2_m³=200_dm³', 'y', '5_L=5_dm³.'], wrong: [3, 4], why: '1 cm³ es igual a <b>1 mL</b> (no 10 mL) y 2 m³ son <b>2 000 dm³</b> (se multiplica por 1 000, no por 100).' },
        { t: 'choice', q: 'Si una pecera tiene un volumen de <b>60 000 cm<sup>3</sup></b>, ¿cuántos <b>litros</b> de agua le caben como máximo?', o: ['60 L', '6 L', '600 L', '6 000 L'], a: 0, why: 'Pasamos de cm³ a dm³ dividiendo entre 1 000: 60 000 : 1 000 = 60 dm³ = 60 L.' },
        { t: 'tf', q: 'Un centímetro cúbico (1 cm<sup>3</sup>) es exactamente lo mismo en capacidad que un mililitro (1 mL).', a: true, why: 'Como 1 dm³ = 1 000 cm³ y 1 L = 1 000 mL, al dividir entre 1 000 resulta 1 cm³ = 1 mL.' },
        { t: 'gen', f: () => {
          const ops = [
            ['m<sup>3</sup>', 'dm<sup>3</sup>', 1000, true, 'dm³'],
            ['dm<sup>3</sup>', 'cm<sup>3</sup>', 1000, true, 'cm³'],
            ['dm<sup>3</sup>', 'm<sup>3</sup>', 1000, false, 'm³'],
            ['cm<sup>3</sup>', 'dm<sup>3</sup>', 1000, false, 'dm³']
          ];
          const [u1, u2, k, mult, uPlain] = P(ops);
          const v = mult ? rd(R(12, 98) / 10, 1) : R(15, 95) * 100;
          const ans = mult ? rd(v * k, 2) : rd(v / k, 2);
          return { t: 'num', q: `Convierte <b>${FM(v)} ${u1}</b> a <b>${u2}</b>.`, a: ans, u: uPlain, why: `Entre ${u1} y ${u2} hay un escalón de volumen (factor 1 000): ${FM(v)} ${mult ? '×' : ':'} 1 000 = <b>${FM(ans)} ${u2}</b>.` };
        } },
        { t: 'gen', f: () => {
          const kind = R(1, 3);
          if (kind === 1) {
            const m3 = rd(R(12, 85) / 10, 1);
            const ans = Math.round(m3 * 1000);
            return { t: 'num', q: `¿Cuántos <b>litros (L)</b> caben en un depósito de <b>${FM(m3)} m<sup>3</sup></b>?`, a: ans, u: 'L', why: `Como 1 m³ = 1 000 dm³ = 1 000 L, multiplicamos ${FM(m3)} × 1 000 = <b>${ans} L</b>.` };
          } else if (kind === 2) {
            const dm3 = rd(R(15, 250) / 10, 1);
            return { t: 'num', q: `Un recipiente tiene un volumen de <b>${FM(dm3)} dm<sup>3</sup></b>. ¿Cuántos <b>litros (L)</b> de agua caben en él?`, a: dm3, u: 'L', why: `Como 1 dm³ equivale exactamente a 1 L, caben <b>${FM(dm3)} L</b>.` };
          } else {
            const cm3 = R(2, 45) * 100;
            const ans = rd(cm3 / 1000, 2);
            return { t: 'num', q: `Una jarra tiene un volumen de <b>${cm3} cm<sup>3</sup></b>. ¿A cuántos <b>litros (L)</b> equivale?`, a: ans, u: 'L', why: `Pasamos de cm³ a dm³ (litros) dividiendo entre 1 000: ${cm3} : 1 000 = <b>${FM(ans)} L</b>.` };
          }
        } },
        { t: 'gen', f: () => {
          const a = R(1, 9), b = R(15, 950);
          const pair = P([
            ['m<sup>3</sup>', 'dm<sup>3</sup>', 'L'],
            ['dm<sup>3</sup>', 'cm<sup>3</sup>', 'mL']
          ]);
          const ans = a * 1000 + b;
          return { t: 'num', q: `Un contenedor mide <b>${a} ${pair[0]} y ${b} ${pair[1]}</b>. ¿Cuántos <b>${pair[2]}</b> de capacidad tiene en total?`, a: ans, u: pair[2], why: `${a} ${pair[0]} = ${a * 1000} ${pair[1]}. En total ${a * 1000} + ${b} = ${ans} ${pair[1]} = <b>${ans} ${pair[2]}</b>.` };
        } }
      ]
    }
  ]
});

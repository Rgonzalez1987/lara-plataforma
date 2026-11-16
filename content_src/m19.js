const R = Adv.rnd, P = Adv.pick, SH = Adv.shuffle, F = Adv.fmt;

Adv.register(19, {
  stations: [
    {
      title: 'Coordenadas, cuadrantes y movimientos en el plano',
      intro: [
        { i: '🧭', h: 'El plano cartesiano y las coordenadas', p: 'Dos rectas perpendiculares forman los ejes: el horizontal es el <b>eje X (abscisas)</b> y el vertical el <b>eje Y (ordenadas)</b>. Se cortan en el <b>origen (0, 0)</b>.<br>Cada punto se escribe <b>(x, y)</b>: primero el paso horizontal (+ derecha, − izquierda) y luego el vertical (+ arriba, − abajo).' },
        { i: '🔢', h: 'Los cuatro cuadrantes', p: 'Los ejes dividen el plano en <b>cuatro cuadrantes</b> (numerados en sentido contrario a las agujas del reloj):<br>• <b>I cuadrante</b>: (+, +) arriba a la derecha.<br>• <b>II cuadrante</b>: (−, +) arriba a la izquierda.<br>• <b>III cuadrante</b>: (−, −) abajo a la izquierda.<br>• <b>IV cuadrante</b>: (+, −) abajo a la derecha.' },
        { i: '🪞', h: 'Simetrías y traslaciones', p: '<b>Simetría axial</b>: como un espejo. Respecto al <b>eje Y</b>, cambia el signo de x: (3, 2) → (−3, 2). Respecto al <b>eje X</b>, cambia el signo de y: (3, 2) → (3, −2).<br><b>Traslación</b>: deslizar la figura sumando o restando a (x, y) los pasos indicados.' }
      ],
      ex: [
        { t: 'choice', q: 'En el punto P(−4, 7), ¿cuál es la abscisa (x) y cuál la ordenada (y)?', o: ['Abscisa −4 y ordenada 7', 'Abscisa 7 y ordenada −4', 'Abscisa 4 y ordenada −7'], a: 0, why: 'En cualquier par ordenado (x, y), el primer número es siempre la abscisa (eje horizontal X) y el segundo la ordenada (eje vertical Y).' },
        { t: 'tf', q: 'El origen de coordenadas es el punto (0, 0), donde se cortan el eje X y el eje Y.', a: true, why: 'Desde el punto (0, 0) se empiezan a contar las unidades hacia la derecha/izquierda y hacia arriba/abajo.' },
        { t: 'tf', q: 'El punto (−3, −5) está situado en el II cuadrante.', a: false, why: 'Cuando las dos coordenadas son negativas (−, −), el punto está abajo a la izquierda, que es el <b>III cuadrante</b>.' },
        { t: 'match', q: 'Une cada cuadrante con los signos de sus coordenadas (x, y).', pairs: [['I cuadrante', '(+, +)'], ['II cuadrante', '(−, +)'], ['III cuadrante', '(−, −)'], ['IV cuadrante', '(+, −)']], why: 'I: derecha y arriba (+, +); II: izquierda y arriba (−, +); III: izquierda y abajo (−, −); IV: derecha y abajo (+, −).' },
        { t: 'sort', q: 'Clasifica cada punto según el cuadrante en el que se encuentra.', cats: ['I cuadrante (+, +)', 'II cuadrante (−, +)', 'IV cuadrante (+, −)'], items: [{ x: '(3, 5)', c: 0 }, { x: '(−4, 2)', c: 1 }, { x: '(6, −1)', c: 2 }, { x: '(1, 8)', c: 0 }, { x: '(−7, 4)', c: 1 }, { x: '(5, −6)', c: 2 }], why: 'Miramos los signos de (x, y): (+, +) va al I, (−, +) va al II y (+, −) va al IV.' },
        { t: 'choice', q: '¿Dónde está situado el punto A(0, 5)?', o: ['Sobre el eje Y (ordenadas)', 'Sobre el eje X (abscisas)', 'En el origen (0, 0)', 'En el III cuadrante'], a: 0, why: 'Como la coordenada x es 0, no nos movemos ni a la derecha ni a la izquierda: subimos 5 unidades por el eje Y.' },
        { t: 'choice', q: '¿Cuál es el punto simétrico de (4, 3) respecto al eje vertical Y?', o: ['(−4, 3)', '(4, −3)', '(−4, −3)', '(3, 4)'], a: 0, why: 'Al reflejar respecto al eje Y, el punto pasa de la derecha a la izquierda a la misma altura: cambia el signo de x y se mantiene y.' },
        { t: 'choice', q: '¿Cuál es el punto simétrico de (−2, 6) respecto al eje horizontal X?', o: ['(−2, −6)', '(2, 6)', '(2, −6)', '(6, −2)'], a: 0, why: 'Al reflejar respecto al eje X, el punto pasa de arriba a abajo en la misma vertical: se mantiene x (−2) y cambia el signo de y (−6).' },
        { t: 'order', q: 'Ordena los pasos para situar el punto (−3, 4) partiendo del origen.', items: ['Situarse en el origen de coordenadas (0, 0)', 'Desplazarse 3 unidades hacia la izquierda por el eje X', 'Subir 4 unidades en paralelo al eje Y', 'Marcar el punto (−3, 4) en el II cuadrante'], why: 'Siempre se recorre primero la coordenada horizontal (x = −3, izquierda) y después la vertical (y = +4, arriba).' },
        { t: 'num', q: 'Si trasladamos el punto (2, 5) moviéndolo 6 unidades a la derecha, ¿cuál será su nueva coordenada x?', a: 8, why: 'Mover a la derecha suma en el eje X: 2 + 6 = 8. El nuevo punto es (8, 5).' },
        { t: 'tap', q: 'En esta descripción de una simetría hay dos palabras equivocadas. ¡Cázalas!', words: ['En', 'una', 'traslación', 'la', 'figura', 'cambia', 'de', 'tamaño', 'y', 'de', 'forma', 'al', 'deslizarse.'], wrong: [5, 7], why: 'Tanto en la traslación como en la simetría la figura conserva exactamente su tamaño y su forma (son movimientos rígidos).' },
        { t: 'tf', q: 'Al trasladar un triángulo 4 unidades a la derecha y 2 hacia arriba, sus lados mantienen la misma longitud.', a: true, why: 'Una traslación solo desplaza la figura de lugar sin deformarla ni cambiar sus medidas.' },
        { t: 'gen', f: () => {
          const qIdx = R(0, 3);
          const sx = (qIdx === 0 || qIdx === 3) ? 1 : -1;
          const sy = (qIdx === 0 || qIdx === 1) ? 1 : -1;
          const x = sx * R(1, 9), y = sy * R(1, 9);
          const names = ['I cuadrante', 'II cuadrante', 'III cuadrante', 'IV cuadrante'];
          return { t: 'choice', q: `¿En qué cuadrante del plano cartesiano se encuentra el punto <b>(${x}, ${y})</b>?`, o: names, a: qIdx, keep: true, why: `La abscisa es ${x > 0 ? 'positiva' : 'negativa'} (${x}) y la ordenada es ${y > 0 ? 'positiva' : 'negativa'} (${y}), que corresponde al ${names[qIdx]}.` };
        } },
        { t: 'gen', f: () => {
          const x = R(-5, 5), y = R(-5, 5);
          const dx = P([-4, -3, -2, 2, 3, 4, 5]), dy = P([-4, -3, -2, 2, 3, 4, 5]);
          const nx = x + dx, ny = y + dy;
          const dirX = dx > 0 ? `${dx} unidades a la derecha` : `${-dx} unidades a la izquierda`;
          const dirY = dy > 0 ? `${dy} unidades hacia arriba` : `${-dy} unidades hacia abajo`;
          const ok = `(${nx}, ${ny})`;
          const cands = [`(${x - dx}, ${y - dy})`, `(${nx}, ${y - dy})`, `(${x - dx}, ${ny})`, `(${nx + 1}, ${ny - 1})`, `(${nx - 1}, ${ny + 1})`].filter(p => p !== ok);
          const opts = SH([ok, ...[...new Set(cands)].slice(0, 3)]);
          return { t: 'choice', q: `Partimos del punto <b>(${x}, ${y})</b> y lo trasladamos <b>${dirX}</b> y <b>${dirY}</b>. ¿A qué punto llegamos?`, o: opts, a: opts.indexOf(ok), why: `En el eje X: ${x} ${dx > 0 ? '+ ' + dx : '− ' + (-dx)} = ${nx}. En el eje Y: ${y} ${dy > 0 ? '+ ' + dy : '− ' + (-dy)} = ${ny}. Llegamos a ${ok}.` };
        } },
        { t: 'gen', f: () => {
          const x = P([-8, -7, -6, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7, 8]);
          const y = P([-8, -7, -6, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7, 8]);
          const ejeX = Math.random() < 0.5;
          const ok = ejeX ? `(${x}, ${-y})` : `(${-x}, ${y})`;
          const w1 = ejeX ? `(${-x}, ${y})` : `(${x}, ${-y})`;
          const w2 = `(${-x}, ${-y})`;
          const w3 = `(${x}, ${y})`;
          const opts = SH([ok, w1, w2, w3]);
          return { t: 'choice', q: `¿Cuál es el punto simétrico de <b>(${x}, ${y})</b> respecto al <b>eje ${ejeX ? 'X (horizontal)' : 'Y (vertical)'}</b>?`, o: opts, a: opts.indexOf(ok), why: `Al reflejar respecto al eje ${ejeX ? 'X cambia el signo de la coordenada y' : 'Y cambia el signo de la coordenada x'}: de (${x}, ${y}) pasamos a ${ok}.` };
        } }
      ]
    },
    {
      title: 'Perímetros y áreas de polígonos',
      intro: [
        { i: '📏', h: 'Perímetro y área: no los confundas', p: '• <b>Perímetro (P)</b>: longitud del contorno de la figura (suma de todos sus lados). Se mide en unidades lineales (<b>cm, m, km</b>).<br>• <b>Área (A)</b>: medida de la superficie interior. Se mide en unidades cuadradas (<b>cm<sup>2</sup>, m<sup>2</sup>, km<sup>2</sup></b>).' },
        { i: '📐', h: 'Áreas de cuadriláteros y triángulos', p: '• <b>Cuadrado</b>: A = lado · lado = l<sup>2</sup>.<br>• <b>Rectángulo y romboide</b>: A = base · altura (b · h).<br>• <b>Triángulo</b>: A = (base · altura) ÷ 2.<br>• <b>Rombo</b>: A = (Diagonal mayor · diagonal menor) ÷ 2.<br>• <b>Trapecio</b>: A = (Base mayor + base menor) · altura ÷ 2.' },
        { i: '🛑', h: 'Polígonos regulares', p: 'Tienen todos sus lados y ángulos iguales (pentágono 5, hexágono 6, octógono 8…).<br>• <b>Perímetro</b>: P = n.º de lados · lado.<br>• <b>Área</b>: A = (Perímetro · <b>apotema</b>) ÷ 2, donde la apotema va del centro a la mitad de un lado.' }
      ],
      ex: [
        { t: 'choice', q: '¿Por qué en la fórmula del área del triángulo dividimos entre 2 (A = b · h ÷ 2)?', o: ['Porque cualquier triángulo es exactamente la mitad de un rectángulo o romboide de igual base y altura', 'Porque un triángulo tiene dos alturas', 'Porque su perímetro es la mitad que el del cuadrado'], a: 0, why: 'Si juntas dos triángulos iguales obtienes un romboide (o rectángulo) cuya área es base · altura; por eso un solo triángulo ocupa la mitad.' },
        { t: 'tf', q: 'Si un cuadrado tiene 6 cm de lado, su perímetro es 24 cm y su área es 36 cm².', a: true, why: 'Perímetro = 4 · 6 = 24 cm. Área = 6 · 6 = 36 cm².' },
        { t: 'tf', q: 'Un rectángulo y un romboide que tienen la misma base y la misma altura tienen distinta área.', a: false, why: 'Ambos tienen exactamente la misma fórmula de área (A = base · altura), por lo que sus áreas son iguales.' },
        { t: 'match', q: 'Une cada figura plana con la fórmula de su área.', pairs: [['Rectángulo', 'base · altura'], ['Triángulo', '(base · altura) ÷ 2'], ['Rombo', '(Diagonal mayor · diagonal menor) ÷ 2'], ['Polígono regular', '(Perímetro · apotema) ÷ 2']], why: 'El triángulo, el rombo y el polígono regular llevan división entre 2; el rectángulo es directamente base por altura.' },
        { t: 'num', q: 'Calcula el área de un trapecio cuyas bases miden 10 cm y 6 cm, y cuya altura es de 4 cm.', a: 32, u: 'cm²', why: 'Sumamos las bases, multiplicamos por la altura y dividimos entre 2: (10 + 6) · 4 ÷ 2 = 16 · 4 ÷ 2 = 32 cm².' },
        { t: 'num', q: 'Un hexágono regular tiene 8 cm de lado y 7 cm de apotema. ¿Cuál es su área?', a: 168, u: 'cm²', why: 'Primero el perímetro: P = 6 · 8 = 48 cm. Luego el área: A = (48 · 7) ÷ 2 = 336 ÷ 2 = 168 cm².' },
        { t: 'sort', q: 'Clasifica cada situación según haya que calcular el perímetro o el área.', cats: ['Perímetro (longitud)', 'Área (superficie)'], items: [{ x: 'Poner una valla alrededor de un huerto', c: 0 }, { x: 'Embaldosar el suelo de una cocina', c: 1 }, { x: 'Colocar un marco de madera a un cuadro', c: 0 }, { x: 'Pintar una pared entera', c: 1 }, { x: 'Poner cinta en el borde de un mantel', c: 0 }, { x: 'Cubrir de césped un campo de fútbol', c: 1 }], why: 'Rodear el borde o contorno es perímetro; cubrir el interior es área.' },
        { t: 'order', q: 'Ordena de menor a mayor según su número de lados estos polígonos regulares.', items: ['Triángulo equilátero', 'Cuadrado', 'Pentágono regular', 'Hexágono regular', 'Octógono regular'], why: 'Tienen 3, 4, 5, 6 y 8 lados iguales respectivamente.' },
        { t: 'tap', q: 'En este problema resuelto hay dos errores. ¡Cázalos!', words: ['El', 'área', 'de', 'un', 'triángulo', 'de', 'base', '10', 'cm', 'y', 'altura', '6', 'cm', 'es', '60', 'cm', 'porque', 'multiplicamos', 'sin', 'dividir.'], wrong: [14, 18], why: 'El área del triángulo es (base · altura) ÷ 2 = (10 · 6) ÷ 2 = <b>30</b> cm²: siempre hay que dividir entre 2.' },
        { t: 'choice', q: 'El perímetro de un pentágono regular es de 45 cm. ¿Cuánto mide cada uno de sus lados?', o: ['9 cm', '5 cm', '7,5 cm', '11,25 cm'], a: 0, why: 'Un pentágono regular tiene 5 lados iguales, así que cada lado mide 45 ÷ 5 = 9 cm.' },
        { t: 'num', q: 'Las diagonales de una cometa con forma de rombo miden 12 dm y 8 dm. ¿Cuál es su área?', a: 48, u: 'dm²', why: 'Área del rombo = (D · d) ÷ 2 = (12 · 8) ÷ 2 = 96 ÷ 2 = 48 dm².' },
        { t: 'tf', q: 'La apotema de un polígono regular es el segmento que va desde el centro hasta el punto medio de uno de sus lados.', a: true, why: 'Es perpendicular al lado y sirve como altura de los triángulos en que se descompone el polígono regular.' },
        { t: 'gen', f: () => {
          const fig = P(['triángulo', 'rectángulo', 'rombo']);
          if (fig === 'rectángulo') {
            const b = R(4, 18), h = R(3, 15);
            return { t: 'num', q: `Calcula el <b>área</b> de un <b>rectángulo</b> de base <b>${b} cm</b> y altura <b>${h} cm</b>.`, a: b * h, u: 'cm²', why: `Área del rectángulo = base · altura = ${b} · ${h} = ${b * h} cm².` };
          }
          if (fig === 'triángulo') {
            const b = R(2, 10) * 2, h = R(3, 15);
            const a = (b * h) / 2;
            return { t: 'num', q: `Calcula el <b>área</b> de un <b>triángulo</b> de base <b>${b} cm</b> y altura <b>${h} cm</b>.`, a, u: 'cm²', why: `Área del triángulo = (base · altura) ÷ 2 = (${b} · ${h}) ÷ 2 = ${b * h} ÷ 2 = ${a} cm².` };
          }
          const D = R(3, 11) * 2, d = R(3, 12);
          const a = (D * d) / 2;
          return { t: 'num', q: `Calcula el <b>área</b> de un <b>rombo</b> cuyas diagonales miden <b>${D} cm</b> y <b>${d} cm</b>.`, a, u: 'cm²', why: `Área del rombo = (D · d) ÷ 2 = (${D} · ${d}) ÷ 2 = ${D * d} ÷ 2 = ${a} cm².` };
        } },
        { t: 'gen', f: () => {
          const [name, n] = P([['pentágono regular', 5], ['hexágono regular', 6], ['octógono regular', 8], ['decágono regular', 10]]);
          const l = R(4, 18);
          const p = n * l;
          if (Math.random() < 0.5) {
            return { t: 'num', q: `¿Cuál es el <b>perímetro</b> de un <b>${name}</b> de <b>${l} cm</b> de lado?`, a: p, u: 'cm', why: `Un ${name} tiene ${n} lados iguales: Perímetro = ${n} · ${l} = ${p} cm.` };
          }
          return { t: 'num', q: `El perímetro de un <b>${name}</b> es de <b>${p} cm</b>. ¿Cuánto mide cada lado?`, a: l, u: 'cm', why: `Dividimos el perímetro entre los ${n} lados iguales: ${p} ÷ ${n} = ${l} cm.` };
        } },
        { t: 'gen', f: () => {
          const [name, n] = P([['pentágono regular', 5], ['hexágono regular', 6], ['octógono regular', 8], ['decágono regular', 10]]);
          const l = R(3, 9) * 2, ap = R(3, 12);
          const per = n * l, area = (per * ap) / 2;
          return { t: 'num', q: `Halla el <b>área</b> de un <b>${name}</b> de lado <b>${l} cm</b> y apotema <b>${ap} cm</b>.`, a: area, u: 'cm²', why: `Perímetro = ${n} · ${l} = ${per} cm. Área = (Perímetro · apotema) ÷ 2 = (${per} · ${ap}) ÷ 2 = ${area} cm².` };
        } }
      ]
    },
    {
      title: 'El círculo y el volumen de prismas y cubos',
      intro: [
        { i: '⭕', h: 'Circunferencia y círculo (π = 3,14)', p: 'El <b>diámetro (D)</b> es el doble del <b>radio (r)</b>: D = 2 · r. Usamos <b>π = 3,14</b>:<br>• <b>Longitud de la circunferencia</b> (borde): <b>L = 2 · π · r = π · D</b>.<br>• <b>Área del círculo</b> (interior): <b>A = π · r<sup>2</sup> = 3,14 · r · r</b>.' },
        { i: '🧊', h: 'El volumen de un cubo', p: 'El <b>volumen (V)</b> es el espacio que ocupa un cuerpo en tres dimensiones y se mide en <b>cm<sup>3</sup>, dm<sup>3</sup> o m<sup>3</sup></b>.<br>En un <b>cubo</b> de arista <i>a</i>, sus tres dimensiones son iguales:<br><b>V = a<sup>3</sup> = a · a · a</b>.' },
        { i: '📦', h: 'El volumen de un prisma', p: 'En cualquier <b>prisma recto</b> multiplicamos el área de su base por la altura:<br><b>V = Área de la base · altura</b>.<br>Si es una caja rectangular (ortoedro): <b>V = largo · ancho · alto</b>.' }
      ],
      ex: [
        { t: 'choice', q: 'Si el diámetro de una circunferencia mide 14 cm, ¿cuánto mide su radio?', o: ['7 cm', '28 cm', '14 cm', '3,5 cm'], a: 0, why: 'El radio es siempre la mitad del diámetro: 14 ÷ 2 = 7 cm.' },
        { t: 'tf', q: 'La circunferencia es la línea curva cerrada del borde y el círculo es la superficie plana de su interior.', a: true, why: 'Por eso de la circunferencia calculamos su longitud (en cm, m…) y del círculo calculamos su área (en cm², m²…).' },
        { t: 'num', q: 'Calcula la longitud de una circunferencia de 10 cm de diámetro (usa π = 3,14).', a: 31.4, u: 'cm', why: 'Longitud = π · D = 3,14 · 10 = 31,4 cm.' },
        { t: 'num', q: 'Calcula el área de un círculo de 10 cm de radio (usa π = 3,14).', a: 314, u: 'cm²', why: 'Área = π · r² = 3,14 · 10² = 3,14 · 100 = 314 cm².' },
        { t: 'match', q: 'Une cada magnitud geométrica con su fórmula (usando π = 3,14).', pairs: [['Longitud de la circunferencia', '2 · 3,14 · r'], ['Área del círculo', '3,14 · r²'], ['Volumen del cubo', 'arista³ (a · a · a)'], ['Volumen del prisma', 'Área de la base · altura']], why: 'En la circunferencia se multiplica por 2·r; en el círculo por r²; en el cubo se eleva al cubo y en el prisma es base por altura.' },
        { t: 'tf', q: 'Un cubo de 2 cm de arista tiene un volumen de 6 cm³.', a: false, why: 'El volumen del cubo es arista al cubo: 2 · 2 · 2 = <b>8 cm³</b> (no 2 · 3 = 6).' },
        { t: 'num', q: '¿Cuál es el volumen de un cubo cuya arista mide 4 cm?', a: 64, u: 'cm³', why: 'Multiplicamos la arista tres veces por sí misma: V = 4³ = 4 · 4 · 4 = 64 cm³.' },
        { t: 'num', q: 'Una caja con forma de prisma rectangular mide 5 dm de largo, 4 dm de ancho y 3 dm de alto. ¿Cuál es su volumen?', a: 60, u: 'dm³', why: 'Multiplicamos largo · ancho · alto: V = 5 · 4 · 3 = 60 dm³.' },
        { t: 'sort', q: 'Clasifica cada unidad según mida longitud, superficie (área) o volumen.', cats: ['Longitud', 'Superficie (área)', 'Volumen'], items: [{ x: 'cm', c: 0 }, { x: 'cm²', c: 1 }, { x: 'cm³', c: 2 }, { x: 'm', c: 0 }, { x: 'm²', c: 1 }, { x: 'm³', c: 2 }], why: 'Sin exponente es longitud (1D), al cuadrado es área (2D) y al cubo es volumen (3D).' },
        { t: 'order', q: 'Ordena los pasos para hallar el área de un círculo si solo te dan su diámetro D = 6 cm (usa π = 3,14).', items: ['Dividir el diámetro entre 2 para obtener el radio: r = 6 ÷ 2 = 3 cm', 'Elevar el radio al cuadrado: r² = 3 · 3 = 9 cm²', 'Multiplicar por π = 3,14: 3,14 · 9 = 28,26 cm²'], why: 'Nunca uses el diámetro directamente en π · r²: primero divide entre 2 para tener el radio.' },
        { t: 'tap', q: 'En esta explicación sobre el círculo hay dos errores. ¡Encuéntralos!', words: ['Para', 'calcular', 'el', 'área', 'del', 'círculo', 'multiplicamos', 'π', 'por', 'el', 'diámetro', 'al', 'cubo.'], wrong: [10, 12], why: 'El área del círculo es π por el <b>radio</b> al <b>cuadrado</b> (A = π · r²).' },
        { t: 'choice', q: 'Un prisma tiene una base cuadrada de 9 cm² de área y una altura de 5 cm. ¿Cuál es su volumen?', o: ['45 cm³', '14 cm³', '405 cm³', '22,5 cm³'], a: 0, why: 'Como ya nos dan el área de la base (9 cm²), solo multiplicamos por la altura: V = 9 · 5 = 45 cm³.' },
        { t: 'gen', f: () => {
          const isArea = Math.random() < 0.5;
          const r = P([2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 50]);
          if (isArea) {
            const ans = Math.round(3.14 * r * r * 100) / 100;
            return { t: 'num', q: `Calcula el <b>área de un círculo</b> de radio <b>${r} cm</b> (usa <b>π = 3,14</b>).`, a: ans, u: 'cm²', why: `A = π · r² = 3,14 · ${r}² = 3,14 · ${r * r} = ${F(ans)} cm².` };
          }
          const ans = Math.round(2 * 3.14 * r * 100) / 100;
          return { t: 'num', q: `Calcula la <b>longitud de una circunferencia</b> de radio <b>${r} cm</b> (usa <b>π = 3,14</b>).`, a: ans, u: 'cm', why: `L = 2 · π · r = 2 · 3,14 · ${r} = ${F(ans)} cm.` };
        } },
        { t: 'gen', f: () => {
          const a = R(2, 12);
          const v = a * a * a;
          const u = P(['cm', 'dm', 'm']);
          return { t: 'num', q: `Calcula el <b>volumen de un cubo</b> cuya arista mide <b>${a} ${u}</b>.`, a: v, u: `${u}³`, why: `V = arista³ = ${a} · ${a} · ${a} = ${v} ${u}³.` };
        } },
        { t: 'gen', f: () => {
          const a = R(3, 12), b = R(2, 10), c = R(2, 10);
          const v = a * b * c;
          const u = P(['cm', 'dm', 'm']);
          return { t: 'num', q: `Un prisma rectangular tiene <b>${a} ${u}</b> de largo, <b>${b} ${u}</b> de ancho y <b>${c} ${u}</b> de alto. ¿Cuál es su <b>volumen</b>?`, a: v, u: `${u}³`, why: `Área de la base = ${a} · ${b} = ${a * b} ${u}². Multiplicamos por la altura: ${a * b} · ${c} = ${v} ${u}³.` };
        } }
      ]
    }
  ]
});

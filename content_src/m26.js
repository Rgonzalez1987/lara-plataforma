const R = Adv.rnd, P = Adv.pick, SH = Adv.shuffle;
const fmt = n => String(n).replace('.', ',');

Adv.register(26, {
  stations: [
    {
      title: 'Masa, volumen, densidad y flotabilidad',
      intro: [
        { i: '⚖️', h: 'Masa, volumen y densidad', p: 'Toda la materia tiene dos propiedades generales: <b>masa</b> (cantidad de materia, en kg o g) y <b>volumen</b> (espacio que ocupa, en L, mL o cm<sup>3</sup>). La <b>densidad</b> relaciona ambas dividiendo la masa entre el volumen:<br><b>densidad = masa ÷ volumen</b> (se suele medir en <b>g/cm<sup>3</sup></b> o en <b>kg/L</b>).' },
        { i: '💧', h: 'La densidad del agua como referencia', p: 'La densidad del <b>agua pura</b> es exactamente <b>1 g/cm<sup>3</sup></b> (porque 1 cm<sup>3</sup> o 1 mL de agua tiene una masa de 1 g). Cada sustancia tiene su propia densidad: el corcho (0,24 g/cm<sup>3</sup>) y el aceite (0,92 g/cm<sup>3</sup>) son menos densos que el agua; el hierro (7,8 g/cm<sup>3</sup>) es mucho más denso.' },
        { i: '🛟', h: '¿Por qué flotan o se hunden los cuerpos?', p: 'La <b>flotabilidad</b> depende de la densidad:<br>• Si un objeto tiene <b>menor densidad</b> que el líquido, <b>flota</b>.<br>• Si tiene <b>mayor densidad</b> que el líquido, <b>se hunde</b>.<br>Por eso el aceite y el hielo flotan en el agua, mientras que una llave de hierro se va al fondo.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué fórmula permite calcular la densidad de un cuerpo?', o: ['Densidad = masa ÷ volumen', 'Densidad = masa + volumen', 'Densidad = volumen − masa'], a: 0, why: 'La <b>densidad</b> es la relación entre la masa de un cuerpo y el volumen que ocupa: <b>d = m ÷ V</b>.' },
        { t: 'num', q: '¿Cuál es la densidad del agua pura expresada en g/cm³?', a: 1, u: 'g/cm³', why: 'Un centímetro cúbico (1 cm³ = 1 mL) de agua pura tiene una masa de 1 gramo, por lo que su densidad es <b>1 g/cm³</b>.' },
        { t: 'tf', q: 'Un objeto flota en el agua cuando su densidad es menor que la densidad del agua (1 g/cm³).', a: true, why: 'Todo cuerpo menos denso que el líquido en el que se sumerge experimenta un empuje que lo hace flotar.' },
        { t: 'tf', q: 'Un kilogramo de paja tiene menos masa que un kilogramo de hierro.', a: false, why: 'Ambos tienen exactamente la misma masa (<b>1 kg</b>). Lo que cambia es el volumen: la paja ocupa mucho más espacio porque es menos densa.' },
        { t: 'match', q: 'Une cada magnitud de la materia con su definición y unidad habitual.', pairs: [['Masa', 'Cantidad de materia (gramos o kilogramos)'], ['Volumen', 'Espacio que ocupa un cuerpo (cm³ o litros)'], ['Densidad', 'Masa dividida entre volumen (g/cm³)']], why: 'La masa se mide con la balanza, el volumen con probetas o fórmulas geométricas y la densidad dividiendo masa entre volumen.' },
        { t: 'sort', q: 'Sabiendo que la densidad del agua es 1 g/cm³, clasifica cada material según flote o se hunda en agua.', cats: ['Flota en el agua', 'Se hunde en el agua'], items: [{ x: 'Corcho (0,24 g/cm³)', c: 0 }, { x: 'Aceite de oliva (0,92 g/cm³)', c: 0 }, { x: 'Hierro (7,8 g/cm³)', c: 1 }, { x: 'Madera de pino (0,5 g/cm³)', c: 0 }, { x: 'Roca de granito (2,7 g/cm³)', c: 1 }, { x: 'Plomo (11,3 g/cm³)', c: 1 }], why: 'El corcho, el aceite y la madera de pino tienen densidad menor que 1 g/cm³ y flotan; el hierro, el granito y el plomo superan 1 g/cm³ y se hunden.' },
        { t: 'order', q: 'Si echamos en un vaso alto miel (1,4 g/cm³), agua (1,0 g/cm³) y aceite (0,9 g/cm³) sin agitar, ordénalos desde el que queda ARRIBA del todo hasta el del FONDO.', items: ['Aceite (0,9 g/cm³)', 'Agua (1,0 g/cm³)', 'Miel (1,4 g/cm³)'], why: 'El líquido menos denso (aceite) flota arriba, el agua queda en el medio y el más denso (miel) se va al fondo.' },
        { t: 'tap', q: 'Hay dos palabras erróneas en esta explicación sobre la flotabilidad. ¡Cázalas!', words: ['El', 'aceite', 'se', 'hunde', 'en', 'el', 'agua', 'porque', 'su', 'densidad', 'es', 'mayor', 'que', 'la', 'del', 'agua.'], wrong: [3, 11], why: 'El aceite <b>flota</b> en el agua porque su densidad (0,92 g/cm³) es <b>menor</b> que la del agua (1 g/cm³).' },
        { t: 'choice', q: '¿Por qué los cubitos de hielo flotan en un vaso de agua líquida?', o: ['Porque al congelarse el agua aumenta ligeramente de volumen y su densidad baja de 1 g/cm³', 'Porque el hielo no tiene masa', 'Porque el hielo es una sustancia distinta sin oxígeno'], a: 0, why: 'El hielo ocupa algo más de volumen que la misma masa de agua líquida; su densidad es de unos 0,92 g/cm³ y por eso flota.' },
        { t: 'choice', q: '¿Cómo conseguimos medir el volumen de una piedra irregular en el laboratorio?', o: ['Sumergiéndola en una probeta con agua y viendo cuánto sube el nivel', 'Pesándola dos veces en una balanza', 'Midiendo solo su largo con una regla'], a: 0, why: 'El volumen de agua desplazado en la probeta graduada coincide exactamente con el volumen de la piedra sumergida.' },
        { t: 'tf', q: 'La densidad es una propiedad característica de cada sustancia: un trozo pequeño de oro puro y un lingote grande de oro puro tienen la misma densidad.', a: true, why: 'Al tener el doble de masa también ocupa el doble de volumen, por lo que el cociente masa ÷ volumen se mantiene constante.' },
        { t: 'choice', q: '¿Por qué un gran barco con casco de acero puede flotar en el mar si el acero es más denso que el agua?', o: ['Porque su interior encierra mucho aire y la densidad media del barco completo es menor que la del agua', 'Porque el agua del mar no tiene gravedad', 'Porque la pintura del barco anula su masa'], a: 0, why: 'El barco es hueco y contiene un gran volumen de aire; su masa total dividida entre su enorme volumen da una densidad media inferior a la del agua.' },
        { t: 'gen', f: () => {
          const d = P([0.5, 0.8, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 9, 10]);
          const v = P([4, 6, 8, 10, 12, 15, 20, 25, 30, 40, 50]);
          const m = Math.round(d * v);
          return { t: 'num', q: `Un bloque tiene una masa de <b>${m} g</b> y ocupa un volumen de <b>${v} cm³</b>. ¿Cuál es su <b>densidad</b> en g/cm³?`, a: d, u: 'g/cm³', why: `Aplicamos la fórmula: densidad = masa ÷ volumen = ${m} g ÷ ${v} cm³ = <b>${fmt(d)} g/cm³</b>.` };
        } },
        { t: 'gen', f: () => {
          const floats = Math.random() < 0.5;
          const d = floats ? P([0.2, 0.4, 0.5, 0.6, 0.75, 0.8, 0.9]) : P([1.2, 1.5, 2, 2.5, 3, 4, 5, 8]);
          const v = P([10, 20, 40, 50, 80, 100, 200]);
          const m = Math.round(d * v);
          return { t: 'tf', q: `Un objeto de <b>${m} g</b> de masa y <b>${v} cm³</b> de volumen <b>flota</b> al ponerlo en agua pura (densidad = 1 g/cm³).`, a: floats, why: `Su densidad es ${m} ÷ ${v} = <b>${fmt(d)} g/cm³</b>. Como es ${floats ? 'menor' : 'mayor'} que 1 g/cm³, el objeto ${floats ? 'flota' : 'se hunde'}.` };
        } },
        { t: 'gen', f: () => {
          const d = P([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
          const v = P([5, 8, 10, 12, 15, 20, 25, 30, 40, 50]);
          const m = d * v;
          return { t: 'num', q: `Una pieza metálica tiene una densidad de <b>${d} g/cm³</b> y un volumen de <b>${v} cm³</b>. ¿Cuál es su <b>masa</b> en gramos?`, a: m, u: 'g', why: `Si densidad = masa ÷ volumen, entonces masa = densidad · volumen = ${d} · ${v} = <b>${m} g</b>.` };
        } }
      ]
    },
    {
      title: 'Cambios físicos: estados y mezclas',
      intro: [
        { i: '🧊', h: 'Cambios físicos y cambios de estado', p: 'En un <b>cambio físico</b> la materia cambia de forma, posición o estado, pero <b>sigue siendo la misma sustancia</b>. Los cambios de estado del agua son:<br>• <b>Fusión</b>: de sólido a líquido (hielo a 0 °C).<br>• <b>Vaporización</b>: de líquido a gas (ebullición a 100 °C).<br>• <b>Condensación</b>: de gas a líquido.<br>• <b>Solidificación</b>: de líquido a sólido.' },
        { i: '🥣', h: 'Sustancias puras y mezclas', p: 'Las <b>mezclas</b> están formadas por dos o más sustancias:<br>• <b>Heterogéneas</b>: sus componentes se distinguen a simple vista (ensalada, agua con arena, granito).<br>• <b>Homogéneas o disoluciones</b>: sus componentes no se distinguen (agua con sal, aire, bronce).' },
        { i: '🧲', h: 'Separación de mezclas (métodos físicos)', p: '• <b>Filtración</b>: separa un sólido no disuelto de un líquido (arena y agua).<br>• <b>Evaporación</b>: separa un sólido disuelto calentando el líquido (obtener sal del agua salada).<br>• <b>Decantación</b>: separa dos líquidos de distinta densidad que no se mezclan (agua y aceite).<br>• <b>Imantación</b>: separa metales magnéticos como el hierro con un imán.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué caracteriza siempre a un cambio físico?', o: ['La sustancia sigue siendo la misma antes y después del cambio', 'Se forman sustancias totalmente nuevas con propiedades distintas', 'Desaparece la masa del objeto'], a: 0, why: 'En un <b>cambio físico</b> (como derretir hielo, cortar papel o estirar un muelle) la composición química de la materia no varía.' },
        { t: 'choice', q: '¿Cómo se llama el paso de estado líquido a estado gaseoso, por ejemplo cuando hierve el agua o se seca la ropa?', o: ['Vaporización (evaporación o ebullición)', 'Condensación', 'Fusión'], a: 0, why: 'El paso de líquido a gas es la <b>vaporización</b>: se llama evaporación si ocurre lentamente en la superficie y ebullición si hierve toda la masa líquida.' },
        { t: 'tf', q: 'Cuando el vapor de agua del baño choca contra el espejo frío y forma gotitas líquidas, se produce una condensación.', a: true, why: 'El paso de estado gaseoso (vapor) a estado líquido (gotas de agua) se denomina <b>condensación</b>.' },
        { t: 'tf', q: 'El agua con sal bien removida es una mezcla heterogénea porque sus componentes se ven a simple vista.', a: false, why: 'El agua con sal disuelta es una <b>mezcla homogénea</b> (o disolución): no se distinguen la sal y el agua ni siquiera con lupa.' },
        { t: 'match', q: 'Une cada cambio de estado con la transformación que describe.', pairs: [['Fusión', 'De sólido a líquido'], ['Solidificación', 'De líquido a sólido'], ['Vaporización', 'De líquido a gas'], ['Condensación', 'De gas a líquido']], why: 'Fusión y vaporización ocurren al calentar; condensación y solidificación ocurren al enfriar.' },
        { t: 'sort', q: 'Clasifica cada mezcla según sea homogénea (disolución) o heterogénea.', cats: ['Mezcla homogénea', 'Mezcla heterogénea'], items: [{ x: 'Agua con azúcar totalmente disuelto', c: 0 }, { x: 'Ensalada de tomate, lechuga y maíz', c: 1 }, { x: 'El aire limpio que respiramos', c: 0 }, { x: 'Agua con aceite', c: 1 }, { x: 'Agua con piedras y arena', c: 1 }, { x: 'Acero o bronce (aleaciones metálicas)', c: 0 }], why: 'En las mezclas homogéneas (agua azucarada, aire, aleaciones) no se distinguen las partes; en las heterogéneas sí se ven a simple vista.' },
        { t: 'match', q: 'Une cada mezcla con el método físico más adecuado para separar sus componentes.', pairs: [['Agua y arena', 'Filtración'], ['Agua con sal disuelta', 'Evaporación'], ['Agua y aceite', 'Decantación'], ['Arena y limaduras de hierro', 'Imantación']], why: 'El filtro retiene la arena; la evaporación deja la sal seca; la decantación separa líquidos de distinta densidad; el imán atrae el hierro.' },
        { t: 'order', q: 'Ordena los tres estados por los que pasa un cubito de hielo si lo sacamos del congelador a −15 °C y lo calentamos en un cazo hasta superar los 100 °C.', items: ['Sólido (hielo)', 'Líquido (agua líquida)', 'Gaseoso (vapor de agua)'], why: 'Al aportar calor, primero se funde a 0 °C pasando de sólido a líquido, y a 100 °C hierve pasando a gas.' },
        { t: 'tap', q: 'Localiza las dos palabras erróneas en esta descripción de las salinas.', words: ['Para', 'separar', 'la', 'sal', 'disuelta', 'en', 'el', 'agua', 'usamos', 'un', 'imán', 'mediante', 'la', 'filtración.'], wrong: [10, 13], why: 'Como la sal está disuelta, no sirve un imán ni un filtro: se separa con el <b>calor del sol</b> mediante la <b>evaporación</b> del agua.' },
        { t: 'num', q: '¿A cuántos grados Celsius (°C) hierve el agua pura a nivel del mar (punto de ebullición)?', a: 100, u: '°C', why: 'A presión atmosférica normal, la temperatura de ebullición del agua pura es de <b>100 °C</b> (y la de fusión es de 0 °C).' },
        { t: 'choice', q: '¿Qué método utiliza un embudo especial con llave en la parte inferior para separar el agua del aceite?', o: ['Decantación', 'Imantación', 'Tamizado'], a: 0, why: 'En el embudo de <b>decantación</b> el agua (más densa) queda abajo y sale al abrir la llave, mientras el aceite queda arriba.' },
        { t: 'tf', q: 'Separar los componentes de una mezcla mediante filtración o evaporación es un proceso físico porque las sustancias no cambian su naturaleza.', a: true, why: 'Antes y después de separarlas siguen siendo exactamente las mismas sustancias (por ejemplo, agua y sal).' },
        { t: 'gen', f: () => {
          const sal = R(5, 45);
          const agua = R(100, 450);
          const total = sal + agua;
          return { t: 'num', q: `Preparamos una disolución mezclando <b>${sal} g</b> de sal en <b>${agua} g</b> de agua. ¿Cuál es la <b>masa total</b> de la mezcla en gramos?`, a: total, u: 'g', why: `Al disolver sal en agua se produce un cambio físico y la masa se conserva: ${sal} g + ${agua} g = <b>${total} g</b>.` };
        } },
        { t: 'gen', f: () => {
          const t0 = R(12, 88);
          const diff = 100 - t0;
          return { t: 'num', q: `Un cazo con agua líquida está a <b>${t0} °C</b>. ¿Cuántos grados Celsius debe subir su temperatura para alcanzar el punto de ebullición (<b>100 °C</b>)?`, a: diff, u: '°C', why: `El agua pura hierve a 100 °C. Restamos: 100 °C − ${t0} °C = <b>${diff} °C</b>.` };
        } }
      ]
    },
    {
      title: 'Cambios químicos y reacciones',
      intro: [
        { i: '⚗️', h: '¿Qué es un cambio químico?', p: 'En un <b>cambio químico</b> (o reacción química), las sustancias iniciales llamadas <b>reactivos</b> se transforman en otras sustancias diferentes llamadas <b>productos</b>. A diferencia de los cambios físicos, aquí cambia la composición de la materia y suele ser irreversible.' },
        { i: '🔥', h: 'Oxidación y combustión', p: '• <b>Oxidación</b>: una sustancia se combina con el <b>oxígeno</b> del aire. Por ejemplo, el hierro a la intemperie se transforma en <b>óxido</b> (herrumbre) o una manzana cortada se oscurece.<br>• <b>Combustión</b>: es una oxidación muy rápida que desprende <b>luz y calor</b>. Al quemarse madera o papel se forman cenizas, vapor de agua y dióxido de carbono.' },
        { i: '🍞', h: 'La fermentación', p: 'La <b>fermentación</b> es una reacción química que ocurre en ausencia de oxígeno gracias a microorganismos beneficiosos (como <b>levaduras</b> y ciertas <b>bacterias</b>). Así se transforma la leche en <b>yogur</b> o queso, y se esponja la masa del <b>pan</b>.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué diferencia a un cambio químico de un cambio físico?', o: ['En el cambio químico las sustancias iniciales se transforman en otras sustancias nuevas', 'En el cambio químico solo cambia la forma o la temperatura de la misma sustancia', 'En el cambio químico no interviene la materia'], a: 0, why: 'En toda reacción química los <b>reactivos</b> se convierten en <b>productos</b> con propiedades distintas (por ejemplo, madera en ceniza y humo).' },
        { t: 'choice', q: '¿Qué gas del aire es imprescindible para que se produzcan tanto la oxidación del hierro como la combustión de una vela?', o: ['El oxígeno', 'El helio', 'El vapor de mercurio'], a: 0, why: 'Tanto la oxidación lenta como la combustión necesitan <b>oxígeno</b> (actúa como comburente). Si tapas una vela con un vaso, se apaga al agotarse el oxígeno.' },
        { t: 'tf', q: 'Derretir un trozo de mantequilla en la sartén a fuego suave es un cambio físico, pero quemar una hoja de papel hasta hacerla ceniza es un cambio químico.', a: true, why: 'Al derretirse la mantequilla solo cambia de sólido a líquido (fusión); al quemarse el papel se produce una combustión y aparecen sustancias nuevas.' },
        { t: 'tf', q: 'La fermentación que transforma la leche en yogur es un cambio físico provocado por un imán.', a: false, why: 'La fermentación es un <b>cambio químico</b> realizado por bacterias beneficiosas que transforman el azúcar de la leche (lactosa) en ácido láctico.' },
        { t: 'sort', q: 'Clasifica cada fenómeno según sea un cambio físico o un cambio químico.', cats: ['Cambio físico', 'Cambio químico'], items: [{ x: 'Congelar agua para hacer cubitos de hielo', c: 0 }, { x: 'Quemar leña en una hoguera', c: 1 }, { x: 'Cortar una barra de pan en rebanadas', c: 0 }, { x: 'Una verja de hierro que se cubre de herrumbre (óxido)', c: 1 }, { x: 'Fabricar yogur a partir de la leche', c: 1 }, { x: 'Modelar una figura con plastilina', c: 0 }], why: 'Congelar, cortar o modelar no alteran la sustancia (físicos); quemar leña (combustión), oxidarse el hierro (oxidación) y hacer yogur (fermentación) crean sustancias nuevas (químicos).' },
        { t: 'match', q: 'Une cada tipo de reacción química con su ejemplo cotidiano.', pairs: [['Oxidación lenta', 'Un clavo de hierro se vuelve rojizo al aire libre y la humedad'], ['Combustión', 'Arde el gas butano o la madera desprendiendo llama y calor'], ['Fermentación', 'La levadura hace subir la masa del pan produciendo burbujas']], why: 'Son los tres grandes tipos de reacciones químicas presentes en nuestra vida diaria.' },
        { t: 'order', q: 'Ordena lo que ocurre en una reacción química de combustión de principio a fin.', items: ['Tenemos los reactivos: el combustible (madera) y el oxígeno del aire', 'Se aporta calor inicial para encender y se produce la reacción con luz y calor', 'Se obtienen los productos finales: cenizas, dióxido de carbono y vapor de agua'], why: 'En toda reacción partimos de los reactivos, ocurre la transformación química y terminamos con los productos.' },
        { t: 'tap', q: 'Caza las dos palabras equivocadas en esta explicación sobre reacciones químicas.', words: ['Al', 'quemar', 'papel', 'ocurre', 'un', 'cambio', 'físico', 'llamado', 'congelación', 'que', 'produce', 'cenizas', 'y', 'humo.'], wrong: [6, 8], why: 'Al quemar papel ocurre un cambio <b>químico</b> llamado <b>combustión</b>.' },
        { t: 'choice', q: '¿Por qué una manzana pelada o un aguacate abierto se vuelven marrones al cabo de unos minutos en contacto con el aire?', o: ['Porque sufren una reacción química de oxidación con el oxígeno del aire', 'Porque se están congelando a temperatura ambiente', 'Porque pierden toda su gravedad'], a: 0, why: 'El oxígeno del aire reacciona con sustancias de la fruta provocando una <b>oxidación</b>; unas gotas de zumo de limón ayudan a retrasarla.' },
        { t: 'choice', q: '¿Cómo se llaman las sustancias iniciales que tenemos antes de que empiece una reacción química y las sustancias nuevas que resultan al final?', o: ['Reactivos (al principio) y productos (al final)', 'Productos (al principio) y reactivos (al final)', 'Solutos y disolventes'], a: 0, keep: true, why: 'Las sustancias que reaccionan son los <b>reactivos</b> y las sustancias nuevas que se forman son los <b>productos</b>.' },
        { t: 'tf', q: 'Las levaduras que hacen esponjoso el pan son hongos microscópicos que realizan la fermentación produciendo pequeñas burbujas de gas.', a: true, why: 'Durante la fermentación, las levaduras transforman azúcares y liberan dióxido de carbono, que forma los huecos de la miga del pan.' },
        { t: 'choice', q: '¿Para qué pintamos las barandillas y puentes de hierro en calles y parques?', o: ['Para impedir que el oxígeno y la humedad toquen el hierro y evitar su oxidación', 'Para que el hierro se convierta en madera', 'Para aumentar el volumen del puente al doble'], a: 0, why: 'La capa de pintura aísla el hierro del contacto con el oxígeno del aire y el agua, previniendo la reacción química de oxidación.' },
        { t: 'gen', f: () => {
          const hierro = R(14, 70);
          const oxigeno = R(6, 30);
          const oxido = hierro + oxigeno;
          return { t: 'num', q: `En una reacción química cerrada, la masa total se conserva. Si <b>${hierro} g</b> de un metal se combinan exactamente con <b>${oxigeno} g</b> de oxígeno, ¿cuántos gramos de <b>óxido</b> se forman?`, a: oxido, u: 'g', why: `La masa de los reactivos es igual a la de los productos: ${hierro} g + ${oxigeno} g = <b>${oxido} g</b> de óxido.` };
        } },
        { t: 'gen', f: () => {
          const d = P([2, 2.5, 3, 4, 5, 7.5, 8, 9, 10]);
          const v = P([10, 20, 30, 40, 50, 60, 80, 100]);
          const m = Math.round(d * v);
          return { t: 'num', q: `Una barra metálica tiene <b>${m} g</b> de masa y <b>${v} cm³</b> de volumen. Si la partimos por la mitad (cambio físico), ¿cuál sigue siendo la <b>densidad</b> de cada mitad en g/cm³?`, a: d, u: 'g/cm³', why: `Cortar un material es un cambio físico y la densidad no varía: ${m} ÷ ${v} = <b>${fmt(d)} g/cm³</b> (cada mitad tiene ${m / 2} g y ${v / 2} cm³).` };
        } }
      ]
    }
  ]
});

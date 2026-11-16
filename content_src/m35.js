const R = Adv.rnd, P = Adv.pick;

Adv.register(35, {
  stations: [
    {
      title: 'Los tres sectores económicos',
      intro: [
        { i: '🌾', h: 'Sector primario: recursos de la naturaleza', p: 'Agrupa las actividades que obtienen alimentos y materias primas directamente de la naturaleza: <b>agricultura</b> (secano como cereal, vid y olivo; regadío como frutales y hortalizas), <b>ganadería</b>, <b>pesca</b> y <b>silvicultura</b> (explotación forestal).' },
        { i: '🏭', h: 'Sector secundario: transformar y construir', p: 'Transforma las materias primas en productos elaborados.<br>Incluye la <b>industria</b> (automoción, agroalimentaria, química, maquinaria), la <b>producción de energía</b> (en Aragón destacan la eólica, solar e hidroeléctrica), la <b>minería</b> y la <b>construcción</b>.' },
        { i: '🚚', h: 'Sector terciario: los servicios', p: 'No fabrica objetos materiales, sino que presta <b>servicios</b> a las personas y a las empresas: comercio, transporte y <b>logística</b> (muy potente en Aragón por su posición entre Madrid, Barcelona, Bilbao y Valencia), turismo, sanidad, educación, banca y cultura.<br>Es el sector que emplea a <b>más trabajadores</b> en Aragón, España y Europa.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué sector económico obtiene alimentos y materias primas directamente de la naturaleza?', o: ['El sector primario', 'El sector secundario', 'El sector terciario', 'El sector financiero'], a: 0, why: 'La agricultura, la ganadería, la pesca y la silvicultura forman el <b>sector primario</b>.' },
        { t: 'sort', q: 'Clasifica cada profesión según el sector económico al que pertenece.', cats: ['Sector primario', 'Sector secundario', 'Sector terciario'], items: [{ x: 'Agricultora de frutales en el valle del Jalón', c: 0 }, { x: 'Ganadero de ovino en el Pirineo', c: 0 }, { x: 'Operaria en una fábrica de automóviles', c: 1 }, { x: 'Albañil en la construcción de un puente', c: 1 }, { x: 'Médica de un hospital público', c: 2 }, { x: 'Guía turístico en el Parque Nacional de Ordesa', c: 2 }], why: 'El primario extrae de la naturaleza, el secundario fabrica o construye y el terciario presta servicios.' },
        { t: 'match', q: 'Une cada actividad económica destacada en Aragón con su descripción.', pairs: [['Cultivos de secano', 'Cereal, vid y olivo que crecen solo con el agua de lluvia'], ['Cultivos de regadío', 'Frutales, maíz y hortalizas regados cerca de ríos y canales'], ['Agroindustria', 'Transformación de productos del campo en alimentos envasados'], ['Logística', 'Almacenaje y distribución de mercancías desde una posición clave']], why: 'En Aragón conviven secano y regadío, una potente industria agroalimentaria y de automoción, y plataformas logísticas de primer nivel.' },
        { t: 'tf', q: 'En Aragón, en España y en el conjunto de Europa, el sector que da empleo a más personas es el sector terciario o de servicios.', a: true, why: 'En las economías europeas actuales la mayor parte de la población ocupada trabaja en servicios (comercio, sanidad, educación, transporte, turismo…).' },
        { t: 'choice', q: '¿A qué sector pertenece una fábrica que elabora jamón, queso o conservas vegetales a partir de productos del campo?', o: ['Al sector secundario (industria agroalimentaria)', 'Al sector primario, porque usa alimentos', 'Al sector terciario, porque luego se comen', 'A ningún sector económico'], a: 0, why: 'En cuanto se <b>transforma</b> una materia prima en una fábrica, la actividad pasa a ser industrial, es decir, del <b>sector secundario</b>.' },
        { t: 'order', q: 'Ordena las etapas del proceso económico de un bote de melocotón en almíbar, desde el árbol hasta la tienda.', items: ['Recolección del melocotón en la huerta (sector primario)', 'Lavado, cocción y envasado en la fábrica conservera (sector secundario)', 'Transporte por carretera hasta el almacén logístico (sector terciario)', 'Venta al público en el supermercado del barrio (sector terciario)'], why: 'Un mismo producto recorre los tres sectores: se cultiva en el primario, se elabora en el secundario y se transporta y vende en el terciario.' },
        { t: 'tf', q: 'La silvicultura consiste en el cuidado y aprovechamiento sostenible de los bosques para obtener madera, corcho o resina.', a: true, why: 'La silvicultura o explotación forestal forma parte del sector primario.' },
        { t: 'tap', q: 'Hay dos palabras equivocadas en esta frase sobre los sectores económicos. ¡Cázalas!', words: ['Un', 'maestro', 'y', 'una', 'conductora', 'de', 'autobús', 'trabajan', 'en', 'el', 'sector', 'primario', 'produciendo', 'materias.'], wrong: [11, 13], why: 'Tanto la enseñanza como el transporte pertenecen al sector <b>terciario</b> y prestan <b>servicios</b>.' },
        { t: 'choice', q: '¿Por qué Zaragoza y el valle del Ebro son un gran centro logístico en el noreste de España?', o: ['Por su posición estratégica entre Madrid, Barcelona, País Vasco, Valencia y el sur de Francia', 'Porque tiene el mayor puerto marítimo del mar Mediterráneo', 'Porque no existen carreteras ni ferrocarriles en el resto de la península', 'Porque en Aragón solo se permite trabajar en almacenes'], a: 0, why: 'En un radio de unos 300 km desde Zaragoza se concentra gran parte de la población y la producción económica de España.' },
        { t: 'tf', q: 'Los cultivos de regadío son aquellos que no reciben más agua que la que cae directamente de la lluvia.', a: false, why: 'Esos son los cultivos de <b>secano</b>; los de regadío reciben agua adicional mediante canales, acequias o sistemas de riego por goteo.' },
        { t: 'choice', q: 'El turismo de nieve en el Pirineo, el mudéjar de Teruel o la Basílica del Pilar en Zaragoza forman parte del…', o: ['Sector terciario (servicios turísticos y culturales)', 'Sector primario (extracción natural)', 'Sector secundario (industria pesada)', 'Sector minero'], a: 0, why: 'La hostelería, el alojamiento, el transporte de viajeros y las visitas culturales son servicios del sector terciario.' },
        { t: 'num', q: '¿En cuántos sectores clásicos (primario, secundario y terciario) se dividen tradicionalmente las actividades económicas?', a: 3, u: 'sectores', why: 'La clasificación clásica distingue 3 sectores: primario, secundario y terciario.' }
      ]
    },
    {
      title: 'Presupuesto familiar, ingresos y ahorro',
      intro: [
        { i: '📒', h: '¿Qué es un presupuesto?', p: 'Un <b>presupuesto</b> es el cálculo anticipado de los <b>ingresos</b> (el dinero que entra: sueldos, pensiones, ventas) y los <b>gastos</b> (el dinero que sale) durante un periodo, como un mes.<br><b>Saldo o ahorro = ingresos − gastos</b>.' },
        { i: '🧾', h: 'Tipos de gastos', p: '• <b>Gastos fijos obligatorios</b>: no se pueden dejar de pagar y cambian poco (alquiler o hipoteca, comunidad).<br>• <b>Gastos variables necesarios</b>: son indispensables pero su importe varía (comida, luz, agua, ropa, transporte).<br>• <b>Gastos prescindibles o de ocio</b>: caprichos, cine, videojuegos; son los primeros que se ajustan si hace falta.' },
        { i: '🐷', h: 'El ahorro y el fondo de imprevistos', p: '<b>Ahorrar</b> es reservar una parte de los ingresos en lugar de gastarla toda. Sirve para alcanzar metas futuras (un viaje, unos estudios, una bicicleta) y para afrontar <b>imprevistos</b> (como reparar la lavadora).' }
      ],
      ex: [
        { t: 'choice', q: 'En educación financiera, ¿qué diferencia hay entre un ingreso y un gasto?', o: ['El ingreso es el dinero que se recibe y el gasto es el dinero que se emplea en comprar o pagar algo', 'El ingreso es lo que pagamos en el supermercado y el gasto es el sueldo', 'Ambos significan exactamente lo mismo', 'El ingreso solo existe en los bancos y el gasto solo en las tiendas'], a: 0, why: 'Los ingresos aumentan el dinero disponible y los gastos lo reducen.' },
        { t: 'sort', q: 'Clasifica cada pago familiar según el tipo de gasto que representa.', cats: ['Gasto fijo obligatorio', 'Gasto variable necesario', 'Gasto prescindible u ocio'], items: [{ x: 'Alquiler mensual de la vivienda', c: 0 }, { x: 'Cuota fija de la hipoteca', c: 0 }, { x: 'Compra semanal de fruta, verdura y leche', c: 1 }, { x: 'Factura mensual de electricidad y agua', c: 1 }, { x: 'Comprar cromos coleccionables y golosinas', c: 2 }, { x: 'Entradas para un parque de atracciones', c: 2 }], why: 'La vivienda es un pago fijo obligatorio; la alimentación y los suministros son necesarios pero variables; los caprichos y el ocio son prescindibles.' },
        { t: 'tf', q: 'Si una familia gasta en un mes más dinero del que ingresa, su presupuesto tiene déficit y tendrá que usar ahorros o endeudarse.', a: true, why: 'Cuando los gastos superan a los ingresos (ingresos < gastos), el saldo es negativo (déficit).' },
        { t: 'match', q: 'Une cada término financiero con su significado.', pairs: [['Presupuesto', 'Plan que anota ingresos y gastos previstos'], ['Ahorro', 'Parte de los ingresos que se guarda para el futuro'], ['Deuda', 'Dinero prestado que hay que devolver, a menudo con intereses'], ['Imprevisto', 'Gasto urgente e inesperado, como una avería en casa']], why: 'Conocer estos cuatro conceptos básicos ayuda a organizar el dinero con responsabilidad.' },
        { t: 'order', q: 'Ordena de forma responsable la prioridad de uso de los ingresos mensuales de una familia.', items: ['Pagar los gastos fijos obligatorios (vivienda)', 'Cubrir los gastos variables necesarios (alimentación, luz, agua)', 'Separar una parte para el ahorro y posibles imprevistos', 'Destinar lo que reste de forma razonable a ocio y caprichos'], why: 'Primero se aseguran las necesidades básicas y el ahorro antes de gastar en caprichos.' },
        { t: 'choice', q: '¿Qué es lo más recomendable para ahorrar con éxito cada mes?', o: ['Apartar una cantidad fija nada más recibir los ingresos, antes de gastar en caprichos', 'Gastar sin mirar y ahorrar solo si por casualidad sobra algo el último día', 'Pedir un préstamo cada semana para comprar juguetes', 'Dejar de pagar la factura de la luz y del agua'], a: 0, why: 'Planificar el ahorro al principio del mes evita gastarlo sin darse cuenta en compras impulsivas.' },
        { t: 'tf', q: 'Los gastos variables necesarios, como la comida o la electricidad, tienen siempre el mismo importe exacto al céntimo todos los meses del año.', a: false, why: 'Precisamente se llaman <b>variables</b> porque su importe cambia cada mes según lo que consumamos (por ejemplo, en invierno se gasta más en calefacción).' },
        { t: 'tap', q: 'Caza las dos palabras equivocadas en esta regla de oro del presupuesto.', words: ['Para', 'tener', 'ahorro', 'los', 'gastos', 'deben', 'ser', 'mayores', 'que', 'los', 'ingresos', 'mensuales.'], wrong: [4, 10], why: 'Para poder ahorrar, los <b>ingresos</b> deben ser mayores que los <b>gastos</b> (o los gastos menores que los ingresos).' },
        { t: 'num', q: 'Sara recibe 15 € de paga al mes y se propone ahorrar la tercera parte antes de gastar nada. ¿Cuántos euros ahorra cada mes?', a: 5, u: '€', why: 'La tercera parte de 15 € es 15 ÷ 3 = 5 €.' },
        { t: 'gen', f: () => {
          const ing = R(18, 35) * 100;
          const viv = R(5, 9) * 100;
          const alim = R(3, 6) * 100;
          const otros = R(2, 4) * 100;
          const totG = viv + alim + otros;
          const aho = ing - totG;
          return { t: 'num', q: `Una familia ingresa <b>${ing} €</b> este mes. Sus gastos son: <b>${viv} €</b> de vivienda, <b>${alim} €</b> de alimentación y suministros, y <b>${otros} €</b> en otros gastos. ¿Cuánto dinero consigue <b>ahorrar</b> este mes?`, a: aho, u: '€', why: `Gastos totales = ${viv} + ${alim} + ${otros} = ${totG} €. Ahorro = ingresos − gastos = ${ing} − ${totG} = ${aho} €.` };
        } },
        { t: 'gen', f: () => {
          const sem = R(4, 15);
          const nSem = P([4, 6, 8, 10, 12]);
          const meta = sem * nSem;
          return { t: 'num', q: `Alba quiere comprar una bicicleta de segunda mano que cuesta <b>${meta} €</b>. Si ahorra <b>${sem} €</b> cada semana, ¿cuántas <b>semanas</b> necesitará para reunir el dinero?`, a: nSem, u: 'semanas', why: `Semanas necesarias = precio ÷ ahorro semanal = ${meta} ÷ ${sem} = ${nSem} semanas.` };
        } },
        { t: 'gen', f: () => {
          const ing = R(16, 30) * 100;
          const pct = P([10, 15, 20, 25]);
          const aho = (ing * pct) / 100;
          return { t: 'num', q: `En casa de Mateo los ingresos mensuales son de <b>${ing} €</b> y han decidido ahorrar el <b>${pct} %</b> cada mes. ¿Cuántos <b>euros</b> ahorran al mes?`, a: aho, u: '€', why: `El ${pct} % de ${ing} € es (${ing} · ${pct}) ÷ 100 = ${aho} €.` };
        } }
      ]
    },
    {
      title: 'Impuestos, servicios públicos y consumo responsable',
      intro: [
        { i: '🏥', h: '¿Para qué sirven los impuestos?', p: 'Los <b>impuestos</b> son pagos obligatorios que la ciudadanía y las empresas aportan al Estado, a la comunidad autónoma y al ayuntamiento.<br>Con ese dinero común se financian los <b>servicios públicos</b> e infraestructuras que usamos todos: colegios, hospitales, carreteras, parques, bomberos, pensiones o alumbrado.' },
        { i: '🏷️', h: 'Impuestos directos e indirectos', p: '• <b>Directos</b> (como el <b>IRPF</b>): se pagan según los ingresos o la riqueza de cada persona; quien gana más, aporta más.<br>• <b>Indirectos</b> (como el <b>IVA</b>): se pagan al comprar un producto o servicio, incluidos en el precio del tique.' },
        { i: '♻️', h: 'Consumo responsable y las 3R', p: 'Ser una <b>consumidora responsable</b> significa distinguir entre necesidades reales y deseos creados por la publicidad, comparar precios y calidades, pedir tique o factura para conservar la <b>garantía</b>, elegir productos de cercanía y aplicar las <b>3R: reducir, reutilizar y reciclar</b>.' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuál es la finalidad principal de los impuestos que pagan los ciudadanos y las empresas?', o: ['Financiar los servicios públicos y las infraestructuras comunes (sanidad, educación, carreteras, bomberos…)', 'Guardar el dinero bajo llave sin gastarlo nunca en nada', 'Pagar únicamente la publicidad de las marcas privadas', 'Regalar productos de lujo en los centros comerciales'], a: 0, why: 'Los impuestos sostienen el Estado del bienestar: escuelas públicas, hospitales, transporte, seguridad y ayudas sociales.' },
        { t: 'match', q: 'Une cada concepto con su definición correcta.', pairs: [['IVA', 'Impuesto indirecto que se paga al comprar bienes y servicios'], ['IRPF', 'Impuesto directo sobre los ingresos de las personas según lo que ganan'], ['Factura o tique', 'Justificante de compra necesario para reclamar o usar la garantía'], ['Publicidad engañosa', 'Anuncio que exagera o miente sobre las cualidades de un producto']], why: 'Distinguir IVA e IRPF y conocer tus derechos como consumidora es clave en la vida diaria.' },
        { t: 'tf', q: 'Un hospital público o un colegio público son gratuitos en el momento de usarlos, pero se pagan entre todos gracias a los impuestos.', a: true, why: 'Todos los servicios públicos tienen un coste (sueldos de médicos y docentes, material, edificios) que se sufraga con los impuestos.' },
        { t: 'sort', q: 'Clasifica estas acciones según sean ejemplos de consumo responsable o de consumo irresponsable (consumismo).', cats: ['Consumo responsable', 'Consumo irresponsable'], items: [{ x: 'Comprar fruta de temporada y de productores cercanos', c: 0 }, { x: 'Reparar un aparato o reutilizar una mochila en buen estado', c: 0 }, { x: 'Comparar precios y leer las etiquetas antes de elegir', c: 0 }, { x: 'Comprar ropa que no necesitamos solo porque sale en un anuncio', c: 1 }, { x: 'Dejar las luces y el grifo abiertos sin necesidad', c: 1 }, { x: 'Tirar comida en buen estado a la basura', c: 1 }], why: 'El consumo responsable cuida el presupuesto familiar y el medioambiente; el consumismo derrocha dinero y recursos naturales.' },
        { t: 'order', q: 'Ordena las «3R» de la ecología y el consumo sostenible según su prioridad (de la más importante a la última).', items: ['Reducir (consumir menos y evitar envases innecesarios)', 'Reutilizar (dar una segunda vida a las cosas antes de tirarlas)', 'Reciclar (separar los residuos en su contenedor para fabricar nuevos materiales)'], why: 'El mejor residuo es el que no se produce (reducir); después conviene reutilizar y, por último, reciclar.' },
        { t: 'choice', q: '¿Por qué es importante pedir siempre el tique o la factura al hacer una compra?', o: ['Porque justifica la compra para reclamar o usar la garantía y asegura que se declara el IVA', 'Porque sirve como billete de autobús en cualquier ciudad', 'Porque sin tique no te dejan salir de la tienda', 'Porque multiplica por diez el sueldo del comprador'], a: 0, why: 'El tique o factura es la prueba legal de la compra para ejercer nuestros derechos como consumidores y evita el fraude fiscal.' },
        { t: 'tf', q: 'Todo lo que dice un anuncio publicitario tiene como único objetivo informarnos de forma científica, sin intentar convencernos de comprar.', a: false, why: 'La publicidad busca persuadirnos para que compremos; por eso hay que mirarla con espíritu crítico y valorar si realmente necesitamos el producto.' },
        { t: 'tap', q: 'Localiza las dos palabras erróneas sobre los tipos de impuestos.', words: ['El', 'IVA', 'es', 'un', 'impuesto', 'directo', 'sobre', 'el', 'sueldo', 'anual.'], wrong: [5, 8], why: 'El IVA es un impuesto <b>indirecto</b> sobre el <b>consumo</b> (las compras); el que grava el sueldo o la renta es el IRPF.' },
        { t: 'choice', q: '¿Qué diferencia hay entre una compra necesaria y una compra impulsiva?', o: ['La necesaria cubre una necesidad real; la impulsiva se hace por capricho sin reflexionar', 'La necesaria siempre es cara y la impulsiva siempre es gratis', 'La impulsiva solo se hace por la mañana y la necesaria por la noche', 'Son exactamente lo mismo en un presupuesto'], a: 0, why: 'Hacer una lista de la compra antes de ir a la tienda es el mejor truco para evitar las compras impulsivas.' },
        { t: 'tf', q: 'Cuidar el mobiliario urbano, los parques y el material del colegio es también una forma de cuidar el dinero público de todos.', a: true, why: 'Reparar lo que se rompe por descuido o vandalismo cuesta dinero público que sale de los impuestos de todas las familias.' },
        { t: 'gen', f: () => {
          const base = P([20, 30, 40, 50, 60, 80, 100, 150, 200]);
          const ivaPct = P([4, 10, 21]);
          const ivaEur = (base * ivaPct) / 100;
          const total = base + ivaEur;
          return { t: 'num', q: `Un artículo tiene un precio sin impuestos de <b>${base} €</b> y se le aplica un <b>IVA del ${ivaPct} %</b>. ¿Cuál es el <b>precio final</b> con el IVA incluido?`, a: total, u: '€', why: `IVA = (${base} · ${ivaPct}) ÷ 100 = ${ivaEur} €. Precio final = ${base} + ${ivaEur} = ${total} €.` };
        } },
        { t: 'gen', f: () => {
          const precio = P([20, 40, 50, 60, 80, 100, 120]);
          const descPct = P([10, 15, 20, 25, 30]);
          const rebaja = (precio * descPct) / 100;
          const final = precio - rebaja;
          return { t: 'num', q: `Una mochila cuesta <b>${precio} €</b>, pero hoy tiene un <b>descuento del ${descPct} %</b>. ¿Cuánto habrá que <b>pagar</b> por ella?`, a: final, u: '€', why: `Descuento = (${precio} · ${descPct}) ÷ 100 = ${rebaja} €. Precio a pagar = ${precio} − ${rebaja} = ${final} €.` };
        } }
      ]
    }
  ]
});

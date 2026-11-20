/* GENERADO por tools/build.js a partir de content_src/. No editar a mano. */
/* ---- m01.js ---- */
(function(){
Adv.register(1, {
  stations: [
    {
      title: 'Agudas, llanas y esdrújulas',
      intro: [
        { i: '🔊', h: 'La sílaba tónica', p: 'En cada palabra hay una sílaba que suena <b>más fuerte</b>: es la <b>sílaba tónica</b>. En <i>ca-<b>mión</b></i> suena más «mión»; en <i><b>ár</b>-bol</i>, «ár». Para encontrarla, di la palabra alargando cada sílaba.' },
        { i: '📍', h: 'Según dónde esté la fuerza', p: '<b>Aguda</b>: la fuerza está en la última sílaba (ca-<b>fé</b>).<br><b>Llana</b>: en la penúltima (<b>ár</b>-bol).<br><b>Esdrújula</b>: en la antepenúltima (<b>mú</b>-si-ca).<br><b>Sobresdrújula</b>: antes de la antepenúltima (<b>dí</b>-ga-se-lo).' },
        { i: '✏️', h: 'Reglas de la tilde', p: '<b>Agudas</b>: llevan tilde si acaban en vocal, <b>-n</b> o <b>-s</b> (café, camión, compás).<br><b>Llanas</b>: llevan tilde si <b>NO</b> acaban en vocal, -n ni -s (árbol, lápiz).<br><b>Esdrújulas y sobresdrújulas</b>: <b>siempre</b> llevan tilde.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué tipo de palabra es «ventana»?', o: ['Llana', 'Aguda', 'Esdrújula'], a: 0, why: 'ven-<b>ta</b>-na: la sílaba tónica es «ta», la penúltima. Es llana y no lleva tilde porque acaba en vocal.' },
        { t: 'choice', q: '¿Qué tipo de palabra es «reloj»?', o: ['Aguda', 'Llana', 'Esdrújula'], a: 0, why: 're-<b>loj</b>: la fuerza cae en la última sílaba. Es aguda y no lleva tilde porque no acaba en vocal, -n ni -s.' },
        { t: 'tf', q: '«Árbol» es una palabra llana que lleva tilde porque no termina en vocal, en -n ni en -s.', a: true, why: 'Las llanas llevan tilde cuando acaban en una consonante distinta de -n y -s: ár-bol, lá-piz, cés-ped.' },
        { t: 'tf', q: 'Las palabras esdrújulas solo llevan tilde cuando terminan en vocal.', a: false, why: 'Las esdrújulas llevan tilde <b>siempre</b>, acaben como acaben: <i>pá-ja-ro</i>, <i>cár-cel</i>.' },
        { t: 'sort', q: 'Clasifica cada palabra según su sílaba tónica.', cats: ['Aguda', 'Llana', 'Esdrújula'], items: [{ x: 'canción', c: 0 }, { x: 'mesa', c: 1 }, { x: 'teléfono', c: 2 }, { x: 'reloj', c: 0 }, { x: 'lápiz', c: 1 }, { x: 'música', c: 2 }], why: 'can-<b>ción</b> y re-<b>loj</b> (última), <b>me</b>-sa y <b>lá</b>-piz (penúltima), te-<b>lé</b>-fo-no y <b>mú</b>-si-ca (antepenúltima).' },
        { t: 'match', q: 'Une cada tipo de palabra con la posición de su sílaba tónica.', pairs: [['Aguda', 'Última sílaba'], ['Llana', 'Penúltima sílaba'], ['Esdrújula', 'Antepenúltima sílaba'], ['Sobresdrújula', 'Anterior a la antepenúltima']], why: 'Cuenta siempre las sílabas empezando por el final de la palabra.' },
        { t: 'choice', q: '¿Por qué lleva tilde «camión»?', o: ['Es aguda y termina en -n', 'Es llana y termina en -n', 'Es esdrújula'], a: 0, why: 'ca-<b>mión</b> es aguda (la fuerza está al final) y las agudas llevan tilde cuando acaban en vocal, -n o -s.' },
        { t: 'order', q: 'Ordena las sílabas y forma una palabra esdrújula que nombra un animal que vuela.', items: ['pá', 'ja', 'ro'], why: '<b>pá</b>-ja-ro: la fuerza está en la antepenúltima sílaba, por eso es esdrújula y lleva tilde.' },
        { t: 'choice', q: '¿Cuál de estas palabras es llana y NO necesita tilde?', o: ['cuaderno', 'lápiz', 'sofá'], a: 0, why: 'cua-<b>der</b>-no es llana y acaba en vocal: sin tilde. «Lápiz» es llana acabada en -z (con tilde) y «sofá» es aguda acabada en vocal (con tilde).' },
        { t: 'choice', q: '¿Cuál está bien escrita?', o: ['árbol', 'arbol', 'arból'], a: 0, why: '«Árbol» es llana y acaba en -l, así que la tilde va en la sílaba tónica: <b>ár</b>-bol.' },
        { t: 'tap', q: 'Hay dos palabras a las que les falta la tilde. ¡Cázalas!', words: ['El', 'camion', 'pasa', 'por', 'el', 'parque', 'y', 'la', 'musica', 'suena', 'fuerte.'], wrong: [1, 8], why: '<b>camión</b> es aguda acabada en -n y <b>música</b> es esdrújula: las dos llevan tilde.' },
        { t: 'choice', q: '¿Qué tipo de palabra es «cómpramelo»?', o: ['Sobresdrújula', 'Esdrújula', 'Llana'], a: 0, why: '<b>cóm</b>-pra-me-lo: la fuerza está en la primera sílaba, anterior a la antepenúltima («pra»). Es sobresdrújula y siempre lleva tilde.' }
      ]
    },
    {
      title: 'Diptongos e hiatos',
      intro: [
        { i: '🤝', h: 'Diptongo', p: 'Es la unión de <b>dos vocales en la misma sílaba</b>: una abierta (a, e, o) con una cerrada (i, u), o dos cerradas distintas. Ejemplos: <i>ai-re</i>, <i>puen-te</i>, <i>ciu-dad</i>.' },
        { i: '✂️', h: 'Hiato', p: 'Son dos vocales juntas que se pronuncian en <b>sílabas distintas</b>: <i>te-a-tro</i>, <i>ca-í-da</i>. Si la vocal cerrada (i, u) es la tónica, el hiato <b>siempre lleva tilde</b> sobre ella: <i>pa-ís</i>, <i>rí-o</i>, <i>ba-úl</i>, <i>ma-íz</i>.' },
        { i: '📌', h: 'Dónde va la tilde en un diptongo', p: 'El diptongo sigue las <b>reglas generales</b>. Cuando lleva tilde, se escribe sobre la <b>vocal abierta</b> (ca-<b>mión</b>, bai-<b>léis</b>); si son dos cerradas, sobre la segunda (<b>cuí</b>-da-te se escribe «cuídate»).' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué hay en la palabra «puente»?', o: ['Un diptongo', 'Un hiato', 'Ninguna de las dos cosas'], a: 0, keep: true, why: 'puen-te: las vocales «u» y «e» están juntas en la misma sílaba, así que forman un diptongo.' },
        { t: 'choice', q: '¿Qué tiene la palabra «país»?', o: ['Un hiato', 'Un diptongo', 'Ninguna de las dos cosas'], a: 0, keep: true, why: 'pa-<b>ís</b>: las vocales están en sílabas distintas y la «i» cerrada es tónica, por eso el hiato lleva tilde.' },
        { t: 'sort', q: 'Clasifica estas palabras.', cats: ['Diptongo', 'Hiato'], items: [{ x: 'aire', c: 0 }, { x: 'ciudad', c: 0 }, { x: 'río', c: 1 }, { x: 'maíz', c: 1 }, { x: 'cuidado', c: 0 }, { x: 'caída', c: 1 }], why: 'ai-re, ciu-dad y cui-da-do tienen las vocales en la misma sílaba. Rí-o, ma-íz y ca-í-da se separan en sílabas distintas.' },
        { t: 'tf', q: '«Río» es un hiato porque la «i» cerrada es la vocal tónica.', a: true, why: 'rí-o: «í» es cerrada y tónica, así que rompe el diptongo y la tilde es obligatoria.' },
        { t: 'tf', q: 'En «Dios», las vocales «i» y «o» forman un hiato.', a: false, why: '«Dios» es un monosílabo y «io» está en una sola sílaba: es un diptongo.' },
        { t: 'choice', q: '¿Cuál de estas palabras contiene un hiato?', o: ['baúl', 'baile', 'ciudad'], a: 0, why: 'ba-<b>úl</b>: «a» y «ú» se pronuncian en sílabas distintas. En «baile» (ai) y «ciudad» (iu) hay diptongo.' },
        { t: 'choice', q: '¿Cuál de estas formas lleva bien la tilde?', o: ['camión', 'camíon', 'cámion'], a: 0, why: 'ca-<b>mión</b> es aguda acabada en -n y la tilde va en la vocal abierta del diptongo: la «o».' },
        { t: 'tap', q: 'A tres palabras les falta una tilde de hiato. ¡Cázalas!', words: ['Mi', 'tia', 'guarda', 'el', 'maiz', 'en', 'un', 'baul.'], wrong: [1, 4, 7], why: '<b>tía</b>, <b>maíz</b> y <b>baúl</b> son hiatos con vocal cerrada tónica: la tilde es obligatoria.' },
        { t: 'order', q: 'Ordena las sílabas de una palabra con hiato.', items: ['ca', 'í', 'da'], why: 'ca-<b>í</b>-da: la «í» tónica y cerrada forma hiato con la «a».' },
        { t: 'match', q: 'Une cada palabra con su separación en sílabas.', pairs: [['teatro', 'te-a-tro'], ['ciudad', 'ciu-dad'], ['maíz', 'ma-íz'], ['peine', 'pei-ne']], why: 'En «ciudad» y «peine» hay diptongo (una sílaba); en «teatro» y «maíz» hay hiato (dos sílabas).' },
        { t: 'choice', q: '¿Cuántas sílabas tiene la palabra «aire»?', o: ['2', '3', '4'], a: 0, keep: true, why: 'ai-re: «ai» es un diptongo y cuenta como una sola sílaba.' },
        { t: 'choice', q: '¿Sobre qué letra va la tilde en «bailéis»?', o: ['La «e» (vocal abierta)', 'La «i» (vocal cerrada)', 'La «s»'], a: 0, why: 'bai-<b>léis</b> es aguda acabada en -s y la tilde se escribe sobre la vocal abierta del diptongo «ei».' }
      ]
    },
    {
      title: 'Tildes diacríticas y palabras con pregunta',
      intro: [
        { i: '1️⃣', h: 'Los monosílabos no llevan tilde', p: 'Las palabras de una sola sílaba <b>no se acentúan</b>: sol, pan, fe, vio, dio, fue, fui. La excepción es la <b>tilde diacrítica</b>, que distingue palabras iguales con significado diferente.' },
        { i: '🔍', h: 'Parejas con tilde diacrítica', p: '<b>tú</b> (pronombre) / tu (posesivo)<br><b>él</b> (pronombre) / el (artículo)<br><b>mí</b> (pronombre) / mi (posesivo)<br><b>sí</b> (afirmación) / si (condicional)<br><b>té</b> (bebida) / te (pronombre)<br><b>más</b> (cantidad) / mas (pero)<br><b>sé</b> (saber, ser) / se · <b>dé</b> (dar) / de' },
        { i: '❓', h: 'Interrogativos y exclamativos', p: 'Qué, cuál, quién, cómo, dónde, cuándo y cuánto llevan tilde cuando preguntan o exclaman, <b>incluso sin signos</b> (<i>No sé qué quieres</i>). Sin tilde son conjunciones o relativos: <i>Dijo que vendría</i>.' }
      ],
      ex: [
        { t: 'choice', q: 'Elige la opción correcta: «Dame ___ libro, por favor».', o: ['el', 'él'], a: 0, why: 'Aquí «el» es un artículo que acompaña al sustantivo «libro»: no lleva tilde.' },
        { t: 'choice', q: 'Elige la opción correcta: «Este regalo es para ___».', o: ['mí', 'mi'], a: 0, why: 'Tras una preposición, «mí» es pronombre personal y lleva tilde diacrítica.' },
        { t: 'choice', q: '¿Cómo se escribe? «¿___ quieres para cenar?»', o: ['Qué', 'Que'], a: 0, why: 'Es una pregunta, así que «qué» es interrogativo y lleva tilde.' },
        { t: 'choice', q: 'Elige la opción correcta: «Me dijo ___ vendría mañana».', o: ['que', 'qué'], a: 0, why: 'Aquí «que» es una conjunción que une las dos partes de la frase: no se acentúa.' },
        { t: 'tf', q: '«Sol» lleva tilde porque es una palabra aguda terminada en consonante.', a: false, why: '«Sol» es un monosílabo, y los monosílabos no llevan tilde.' },
        { t: 'tf', q: '«Té» con tilde es la bebida y «te» sin tilde es un pronombre.', a: true, why: 'Es una tilde diacrítica: «Me tomo un té» (bebida) y «Te llamo luego» (pronombre).' },
        { t: 'match', q: 'Une cada palabra con su significado.', pairs: [['tu', 'Posesivo: «tu casa»'], ['tú', 'Pronombre: «tú cantas»'], ['el', 'Artículo: «el coche»'], ['él', 'Pronombre: «él corre»']], why: 'Si la palabra va delante de un sustantivo, es posesivo o artículo y no lleva tilde; si sustituye a una persona, es pronombre y la lleva.' },
        { t: 'sort', q: '¿Con tilde o sin tilde? Clasifica cada caso.', cats: ['Con tilde', 'Sin tilde'], items: [{ x: 'Pronombre «tú»', c: 0 }, { x: 'Posesivo «tu»', c: 1 }, { x: 'Artículo «el»', c: 1 }, { x: 'Pronombre «él»', c: 0 }, { x: 'Afirmación «sí»', c: 0 }, { x: 'Condicional «si»', c: 1 }], why: 'Los pronombres y la afirmación «sí» llevan tilde diacrítica; posesivos, artículos y la conjunción «si» no.' },
        { t: 'tap', q: 'A dos palabras les falta la tilde diacrítica. ¡Cázalas!', words: ['Tu', 'sabes', 'que', 'el', 'viene', 'mañana.'], wrong: [0, 3], why: '«Tú sabes que él viene mañana»: aquí «tú» y «él» son pronombres.' },
        { t: 'tf', q: 'En «Dime cuándo vienes», la palabra «cuándo» lleva tilde aunque no haya signos de interrogación.', a: true, why: 'Es una interrogativa indirecta: sigue preguntando algo, aunque no esté entre signos.' },
        { t: 'choice', q: '¿Cuál es la forma correcta?', o: ['¿Dónde vives?', '¿Donde vives?'], a: 0, why: 'En una pregunta directa, «dónde» es interrogativo y lleva tilde.' },
        { t: 'choice', q: 'Elige la opción correcta (cantidad): «Quiero ___ agua».', o: ['más', 'mas'], a: 0, why: '«Más» indica cantidad y lleva tilde; «mas» significa «pero» y no la lleva.' }
      ]
    }
  ]
});

})();
/* ---- m02.js ---- */
(function(){
Adv.register(2, {
  stations: [
    {
      title: 'Palabras primitivas, prefijos y sufijos',
      intro: [
        { i: '🌱', h: 'Palabras primitivas y derivadas', p: 'Las palabras <b>primitivas</b> no proceden de otra palabra de nuestra lengua (<i>pan, sol, mar</i>). A partir de su <b>raíz</b> (o lexema), añadimos morfemas para formar palabras <b>derivadas</b>: <i>panadero, empanada, solar, insolación</i>.' },
        { i: '⬅️', h: 'Los prefijos van delante', p: 'Los <b>prefijos</b> se colocan delante de la raíz y cambian su significado:<br>• Negación u oposición: <b>in-</b> / <b>im-</b> / <b>i-</b> (<i>injusto, imposible, ilegal</i>), <b>des-</b> (<i>deshacer</i>).<br>• Repetición: <b>re-</b> (<i>releer</i>).<br>• Posición o tiempo: <b>sub-</b> (<i>subsuelo</i>), <b>pre-</b> (<i>prehistoria</i>).' },
        { i: '➡️', h: 'Los sufijos van detrás', p: 'Los <b>sufijos</b> se añaden detrás de la raíz:<br>• <b>Diminutivos</b>: <i>-ito, -illo, -ico</i> (<i>perrito, mañica</i>).<br>• <b>Aumentativos</b>: <i>-ón, -azo, -ote</i> (<i>cucharón, golazo</i>).<br>• <b>Despectivos</b>: <i>-ucho, -aco</i> (<i>casucha</i>).<br>• <b>Oficios y gentilicios</b>: <i>-ero, -ista, -és, -ano, -ense</i> (<i>zapatero, aragonés, oscense</i>).' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuál de estas palabras es primitiva?', o: ['mar', 'marinero', 'marea', 'marítimo'], a: 0, why: '«Mar» no procede de ninguna otra palabra; de su raíz nacen las derivadas «marinero», «marea» y «marítimo».' },
        { t: 'sort', q: 'Clasifica estas palabras según sean primitivas o derivadas.', cats: ['Primitiva', 'Derivada'], items: [{ x: 'flor', c: 0 }, { x: 'floristería', c: 1 }, { x: 'papel', c: 0 }, { x: 'papelera', c: 1 }, { x: 'tierra', c: 0 }, { x: 'terrestre', c: 1 }], why: '«Flor», «papel» y «tierra» son palabras primitivas; las demás añaden sufijos a la raíz.' },
        { t: 'match', q: 'Une cada prefijo con su significado principal.', pairs: [['re- (rehacer)', 'Repetición (volver a)'], ['sub- (subterráneo)', 'Por debajo de'], ['pre- (precalentar)', 'Anterioridad (antes de)'], ['des- (desatar)', 'Negación o acción contraria']], why: 'Cada prefijo aporta una idea clara delante de la raíz: repetir, debajo, antes o lo contrario.' },
        { t: 'choice', q: '¿Qué prefijo de negación se escribe correctamente delante de «posible» y «borrable»?', o: ['im- (imposible, imborrable)', 'in- (inposible, inborrable)', 'i- (iposible, iborrable)'], a: 0, why: 'Por regla ortográfica, antes de «p» y «b» siempre se escribe «m», así que el prefijo «in-» se transforma en «im-».' },
        { t: 'tap', q: 'Hay dos palabras con el prefijo mal escrito. ¡Cázalas!', words: ['Es', 'inposible', 'abrir', 'ese', 'bote', 'con', 'un', 'cierre', 'inborrable.'], wrong: [1, 8], why: 'Antes de «p» y «b» se escribe «m»: lo correcto es <b>imposible</b> e <b>imborrable</b>.' },
        { t: 'sort', q: 'Clasifica estas palabras según el tipo de sufijo que llevan.', cats: ['Diminutivo', 'Aumentativo', 'Despectivo'], items: [{ x: 'pajarillo', c: 0 }, { x: 'portazo', c: 1 }, { x: 'casucha', c: 2 }, { x: 'librito', c: 0 }, { x: 'cucharón', c: 1 }, { x: 'pajarraco', c: 2 }], why: '«-illo» e «-ito» disminuyen; «-azo» y «-ón» aumentan o indican golpe; «-ucha» y «-aco» aportan valor despectivo.' },
        { t: 'tf', q: 'La palabra «oscense» es un gentilicio formado con el sufijo «-ense» que indica que alguien es de Huesca.', a: true, why: 'Los gentilicios indican el lugar de origen y se forman con sufijos como -ense (oscense, turolense), -ano (zaragozano) o -és (aragonés).' },
        { t: 'tf', q: 'En la palabra «desorden», la parte «des-» es un sufijo.', a: false, why: '«Des-» va colocado delante de la raíz «orden», por lo que es un prefijo, no un sufijo.' },
        { t: 'order', q: 'Ordena las piezas para formar una palabra derivada con prefijo, raíz y sufijo de profesión.', items: ['sub-', 'direct-', '-ora'], why: 'El prefijo «sub-» va delante de la raíz «direct-» y el sufijo «-ora» se coloca al final: «subdirectora».' },
        { t: 'choice', q: '¿Cuál es la raíz (o lexema) común de «zapato», «zapatero» y «zapatería»?', o: ['zapat-', 'zapa-', '-ero', 'zapato-'], a: 0, why: 'Si quitamos las terminaciones y sufijos (-o, -ero, -ería), la parte invariable que aporta el significado es «zapat-».' },
        { t: 'match', q: 'Une cada lugar de Aragón con su gentilicio derivado mediante sufijo.', pairs: [['Zaragoza', 'zaragozana'], ['Teruel', 'turolense'], ['Aragón', 'aragonés'], ['Jaca', 'jacetana']], why: 'Los sufijos gentilicios más frecuentes son -ano/-ana, -ense y -és/-esa.' },
        { t: 'choice', q: '¿En qué palabra la sílaba «re-» NO es un prefijo, sino parte de la raíz?', o: ['reloj', 'repintar', 'reaparecer', 'reconstruir'], a: 0, why: 'En «repintar», «reaparecer» y «reconstruir» podemos quitar «re-» y quedan «pintar», «aparecer» y «construir». En «reloj» no hay prefijo.' }
      ]
    },
    {
      title: 'Palabras compuestas y parasintéticas',
      intro: [
        { i: '🧩', h: 'Palabras compuestas', p: 'Las palabras <b>compuestas</b> se forman uniendo <b>dos o más palabras simples</b> (dos raíces):<br>• <i>sacapuntas</i> (sacar + puntas)<br>• <i>pelirrojo</i> (pelo + rojo)<br>• <i>paraguas</i> (parar + aguas)<br>• <i>mediodía</i> (medio + día)' },
        { i: '✏️', h: 'La tilde en las compuestas', p: '• <b>Sin guion</b>: funcionan como una sola palabra y siguen las reglas generales de acentuación; la primera parte pierde su tilde si la tenía (<i>décimo + séptimo → decimoséptimo</i>; <i>balón + cesto → baloncesto</i>).<br>• <b>Con guion</b>: cada palabra conserva su tilde original (<i>teórico-práctico</i>).' },
        { i: '🔬', h: 'Palabras parasintéticas', p: 'Las palabras <b>parasintéticas</b> se forman de dos maneras:<br>1) Añadiendo <b>prefijo y sufijo a la vez</b> a una raíz, sin que exista la palabra solo con el prefijo ni solo con el sufijo (<i>a- + terr- + -izar → aterrizar</i>; <i>en- + vej- + -ecer → envejecer</i>).<br>2) Combinando <b>composición + sufijación</b> al mismo tiempo (<i>quince + año + -ero → quinceañero</i>).' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuál de estas palabras es compuesta?', o: ['lavavajillas', 'lavadora', 'lavadero', 'prelavado'], a: 0, why: '«Lavavajillas» une dos palabras simples: el verbo «lavar» y el sustantivo «vajillas». Las demás son derivadas.' },
        { t: 'match', q: 'Une cada combinación de categorías con la palabra compuesta que forma.', pairs: [['Verbo + sustantivo', 'abrelatas'], ['Sustantivo + adjetivo', 'pelirrojo'], ['Adjetivo + adjetivo', 'agridulce'], ['Adverbio + verbo', 'malcriar']], why: 'Las palabras compuestas pueden unir verbos, sustantivos, adjetivos o adverbios en una sola palabra.' },
        { t: 'sort', q: 'Clasifica estas palabras según su procedimiento de formación.', cats: ['Derivada', 'Compuesta', 'Parasintética'], items: [{ x: 'panadería', c: 0 }, { x: 'sacacorchos', c: 1 }, { x: 'aterrizar', c: 2 }, { x: 'jardinero', c: 0 }, { x: 'pararrayos', c: 1 }, { x: 'quinceañera', c: 2 }], why: '«Panadería» y «jardinero» solo añaden sufijo; «sacacorchos» y «pararrayos» unen dos palabras; «aterrizar» y «quinceañera» son parasintéticas.' },
        { t: 'choice', q: '¿Por qué la palabra «envejecer» es parasintética?', o: ['Porque une prefijo (en-) y sufijo (-ecer) a la vez, y no existen *envejo ni *vejecer', 'Porque está formada por dos palabras simples unidas', 'Porque solo tiene un prefijo delante de la raíz'], a: 0, why: 'En la parasíntesis, el prefijo y el sufijo se añaden simultáneamente a la raíz «vej-» (de viejo).' },
        { t: 'tf', q: 'La palabra compuesta «baloncesto» lleva tilde en la «o» porque viene de «balón».', a: false, why: 'En las compuestas sin guion, la primera palabra pierde su tilde. «Baloncesto» es llana acabada en vocal, así que no lleva tilde.' },
        { t: 'tf', q: 'En las palabras compuestas unidas con guion, como «histórico-artístico», cada palabra conserva su tilde.', a: true, why: 'Cuando hay guion intermedio, cada elemento mantiene la acentuación que le corresponde por separado.' },
        { t: 'tap', q: 'Caza las dos palabras compuestas que tienen un error de acentuación.', words: ['En', 'el', 'decimoséptimo', 'partido', 'de', 'balóncesto', 'vimos', 'un', 'ciempiés', 'y', 'un', 'espantapajaros.'], wrong: [5, 11], why: '«Baloncesto» pierde la tilde de «balón» al unirse; «espantapájaros» debe llevar tilde por ser esdrújula.' },
        { t: 'choice', q: '¿Cómo se escribe correctamente la unión de «corta» y «uñas»?', o: ['cortaúñas', 'cortauñas', 'corta-uñas'], a: 0, why: 'Al unirse «corta» + «uñas», se forma un hiato de vocal abierta y vocal cerrada tónica (cor-ta-ú-ñas): lleva tilde obligatoria en la «ú», es decir, «cortaúñas».' },
        { t: 'order', q: 'Ordena los tres elementos que forman la palabra parasintética «sietemesino».', items: ['siete', 'mes', '-ino'], why: 'Une dos raíces («siete» + «mes») y el sufijo «-ino» a la vez (no existe *sietemés ni *mesino).' },
        { t: 'choice', q: '¿Por qué «submarino» se analiza como palabra parasintética?', o: ['Porque se forma con sub- + mar + -ino a la vez para significar «bajo el mar»', 'Porque une dos verbos en presente', 'Porque no tiene ni prefijo ni sufijo'], a: 0, why: 'No existe el sustantivo *submar; se añaden el prefijo «sub-» y el sufijo «-ino» simultáneamente a la raíz «mar».' },
        { t: 'tf', q: 'La palabra «ciempiés» lleva tilde porque es aguda terminada en -s.', a: true, why: 'Al unir «cien» + «pies», la palabra resultante (ciem-piés) tiene dos sílabas, es aguda y acaba en -s, por lo que lleva tilde.' },
        { t: 'choice', q: '¿Cuál de estas palabras es parasintética?', o: ['anaranjado', 'naranjal', 'naranjero', 'paraninfo'], a: 0, why: '«Anaranjado» une el prefijo «a-» y el sufijo «-ado» a la raíz «naranj-» al mismo tiempo (no existen *anaranja ni *naranjado).' }
      ]
    },
    {
      title: 'Familias léxicas y campos semánticos',
      intro: [
        { i: '👨‍👩‍👧‍👦', h: 'Familia léxica (o de palabras)', p: 'Una <b>familia léxica</b> es el conjunto de palabras que comparten la <b>misma raíz (lexema)</b>, por lo que todas derivan de la misma palabra primitiva.<br>Ejemplo con <i>pan</i>: <i>panadero, panadería, empanada, empanadilla, panecillo, apanar</i>.' },
        { i: '🗂️', h: 'Campo semántico', p: 'Un <b>campo semántico</b> es un grupo de palabras de la <b>misma categoría gramatical</b> (por ejemplo, todas son sustantivos) que comparten un <b>tema o rasgo de significado común</b>, aunque tengan raíces totalmente distintas.<br>Ejemplo (calzado): <i>bota, sandalia, zapatilla, mocasín, chancla</i>.' },
        { i: '💡', h: 'Truco para no confundirlos', p: '• ¿Comparten la <b>misma raíz</b> (suenan parecido y vienen de la misma palabra)? → <b>Familia léxica</b>.<br>• ¿Tienen <b>raíces diferentes</b> pero son del <b>mismo tipo y tema</b> (frutas, deportes, muebles)? → <b>Campo semántico</b>.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué forman las palabras «libro, librería, librero, libreta»?', o: ['Una familia léxica', 'Un campo semántico', 'Palabras compuestas'], a: 0, why: 'Todas comparten la misma raíz («libr-») y derivan de la palabra primitiva «libro»: forman una familia léxica.' },
        { t: 'choice', q: '¿Qué forman las palabras «manzano, peral, olivo, almendro, pino»?', o: ['Un campo semántico (árboles)', 'Una familia léxica', 'Palabras parasintéticas'], a: 0, why: 'Son todos sustantivos que nombran árboles y tienen raíces distintas: forman el campo semántico de los árboles.' },
        { t: 'sort', q: 'Clasifica cada palabra en su grupo: ¿familia léxica de «deporte» o campo semántico de los deportes?', cats: ['Familia léxica de «deporte»', 'Campo semántico de deportes'], items: [{ x: 'deportista', c: 0 }, { x: 'deportivo', c: 0 }, { x: 'polideportivo', c: 0 }, { x: 'balonmano', c: 1 }, { x: 'natación', c: 1 }, { x: 'atletismo', c: 1 }], why: '«Deportista», «deportivo» y «polideportivo» comparten la raíz «deport-». «Balonmano», «natación» y «atletismo» son nombres de deportes con raíces distintas.' },
        { t: 'tap', q: 'Caza las dos palabras intrusas que NO pertenecen a la familia léxica de «helado» (raíz hel-/hiel-).', words: ['hielo', 'heladería', 'frigorífico', 'deshielo', 'heladero', 'invierno', 'helar'], wrong: [2, 5], why: '«Frigorífico» e «invierno» se relacionan con el frío por el tema, pero no tienen la raíz de «hielo / helar».' },
        { t: 'tap', q: 'Caza las dos palabras intrusas que NO pertenecen al campo semántico de los ríos de Aragón.', words: ['Ebro', 'Cinca', 'Moncayo', 'Gállego', 'Jiloca', 'Aneto', 'Jalón'], wrong: [2, 5], why: 'El Moncayo y el Aneto son cumbres montañosas de Aragón, no ríos.' },
        { t: 'match', q: 'Une cada serie de palabras con el campo semántico al que pertenece.', pairs: [['cierzo, bochorno, brisa, vendaval', 'Vientos'], ['violín, flauta, trompeta, piano', 'Instrumentos musicales'], ['zaragozano, oscense, turolense', 'Gentilicios de Aragón'], ['butaca, taburete, sofá, silla', 'Asientos']], why: 'En cada grupo todas las palabras comparten categoría y un rasgo de significado común.' },
        { t: 'tf', q: 'Todas las palabras de una misma familia léxica tienen que ser siempre sustantivos.', a: false, why: 'En una familia léxica puede haber sustantivos, adjetivos y verbos (como «sal», «salado» y «salar»): solo necesitan compartir la raíz.' },
        { t: 'tf', q: 'Para que varias palabras formen un campo semántico estricto, deben pertenecer a la misma categoría gramatical.', a: true, why: 'En un campo semántico todas las palabras son de la misma clase (por ejemplo, todos sustantivos), mientras que si mezclan verbos y adjetivos forman un campo asociativo.' },
        { t: 'choice', q: '¿Cuál de estas palabras es una intrusa en la familia léxica de «tierra» (raíz tierr- / terr-)?', o: ['terrorífico', 'terremoto', 'aterrizar', 'subterráneo'], a: 0, why: '«Terrorífico» viene de «terror» (miedo), no de «tierra». En cambio, «terremoto», «aterrizar» y «subterráneo» sí proceden de la raíz de «tierra».' },
        { t: 'sort', q: 'Clasifica estas palabras en sus dos familias léxicas correspondientes.', cats: ['Familia de «caballo» (animal)', 'Familia de «cabello» (pelo)'], items: [{ x: 'caballero', c: 0 }, { x: 'caballeriza', c: 0 }, { x: 'cabalgata', c: 0 }, { x: 'cabellera', c: 1 }, { x: 'descabellado', c: 1 }, { x: 'cabelludo', c: 1 }], why: '«Caballero», «caballeriza» y «cabalgata» vienen de «caballo»; «cabellera», «descabellado» y «cabelludo» vienen de «cabello».' },
        { t: 'order', q: 'Ordena de menor a mayor intensidad este campo semántico de sonidos humanos.', items: ['susurro', 'murmullo', 'voz', 'grito', 'alarido'], why: 'Todas pertenecen al campo semántico de los sonidos de la voz, graduados desde el más suave («susurro») hasta el más fuerte («alarido»).' },
        { t: 'choice', q: '¿Qué palabra de la familia léxica de «luz» tiene la raíz culta «luc-» o «lum-»?', o: ['luciérnaga', 'luna', 'lunes', 'lupa'], a: 0, why: '«Luciérnaga» (igual que «lucir» o «luminoso») pertenece a la familia de «luz». «Luna», «lunes» y «lupa» son palabras distintas.' }
      ]
    }
  ]
});

})();
/* ---- m03.js ---- */
(function(){
Adv.register(3, {
  stations: [
    {
      title: 'Sustantivos y grados del adjetivo',
      intro: [
        { i: '🏷️', h: 'Clases de sustantivos', p: 'Los sustantivos nombran seres, objetos, ideas o lugares. Para analizarlos, fíjate en cuatro parejas:<br>• <b>Común</b> (<i>río</i>) / <b>Propio</b> (<i>Ebro</i>).<br>• <b>Concreto</b> (se percibe con los sentidos: <i>piedra</i>) / <b>Abstracto</b> (idea o sentimiento: <i>alegría, paz</i>).<br>• <b>Individual</b> (uno: <i>oveja, pino</i>) / <b>Colectivo</b> (conjunto en singular: <i>rebaño, pinar</i>).<br>• <b>Contable</b> (<i>silla</i>) / <b>No contable</b> (<i>agua, arena</i>).' },
        { i: '🎨', h: 'El adjetivo calificativo', p: 'El <b>adjetivo</b> expresa una cualidad o estado del sustantivo y <b>concuerda</b> con él en género y número (<i>niñas simpáticas</i>).<br>• De <b>dos terminaciones</b>: cambian en masculino y femenino (<i>alto / alta</i>).<br>• De <b>una terminación</b>: tienen la misma forma para ambos géneros (<i>feliz, inteligente, amable</i>).' },
        { i: '📊', h: 'Los tres grados del adjetivo', p: '• <b>Positivo</b>: cualidad sin comparar (<i>alta, bueno</i>).<br>• <b>Comparativo</b>: de <b>superioridad</b> (<i>más alta que</i>), de <b>igualdad</b> (<i>tan alta como</i>) o de <b>inferioridad</b> (<i>menos alta que</i>).<br>• <b>Superlativo</b>: grado máximo con <i>muy</i>, <i>-ísimo/a</i> o <i>el/la más… de</i> (<i>altísima, muy alta</i>). ¡Ojo a los especiales!: <i>bueno → mejor → óptimo</i>; <i>malo → peor → pésimo</i>.' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuál es el análisis morfológico correcto del sustantivo «rebaño»?', o: ['Común, concreto, colectivo y contable', 'Común, abstracto, individual y no contable', 'Propio, concreto, colectivo y contable'], a: 0, why: '«Rebaño» es un sustantivo común, concreto (se percibe), colectivo (nombra en singular a un grupo de ovejas) y contable.' },
        { t: 'match', q: 'Une cada sustantivo individual con su sustantivo colectivo correspondiente.', pairs: [['abeja', 'enjambre'], ['cerdo', 'piara'], ['isla', 'archipiélago'], ['músico', 'orquesta']], why: 'Los sustantivos colectivos designan en singular un conjunto de seres u objetos de la misma clase.' },
        { t: 'sort', q: 'Clasifica estos sustantivos según sean concretos o abstractos.', cats: ['Sustantivo concreto', 'Sustantivo abstracto'], items: [{ x: 'mochila', c: 0 }, { x: 'montaña', c: 0 }, { x: 'esperanza', c: 1 }, { x: 'justicia', c: 1 }, { x: 'cierzo', c: 0 }, { x: 'amistad', c: 1 }], why: '«Mochila», «montaña» y «cierzo» se perciben por los sentidos; «esperanza», «justicia» y «amistad» son sentimientos o conceptos abstractos.' },
        { t: 'tf', q: 'La palabra «árboles» es un sustantivo colectivo porque indica más de un árbol.', a: false, why: '«Árboles» es el plural de un sustantivo individual («árbol»). El sustantivo colectivo va en singular: «arboleda» o «bosque».' },
        { t: 'tf', q: 'El sustantivo «agua» es femenino, aunque en singular lleve delante «el» («el agua fría»).', a: true, why: 'Ante sustantivos femeninos que empiezan por «a-» o «ha-» tónica (agua, águila, hacha) se usa «el» para evitar el choque de dos aes, pero siguen siendo femeninos: «el agua limpia», «las aguas».' },
        { t: 'tap', q: 'En esta oración hay dos adjetivos que NO concuerdan bien con los sustantivos femeninos. ¡Cázalos!', words: ['El', 'agua', 'frío', 'baja', 'del', 'Pirineo', 'mientras', 'vuela', 'el', 'águila', 'majestuoso.'], wrong: [2, 10], why: '«Agua» y «águila» son sustantivos femeninos, por lo que los adjetivos deben ir en femenino: «el agua <b>fría</b>» y «el águila <b>majestuosa</b>».' },
        { t: 'choice', q: 'En «Sara es tan rápida como Lucía», ¿en qué grado está el adjetivo «rápida»?', o: ['Grado comparativo de igualdad', 'Grado comparativo de superioridad', 'Grado superlativo', 'Grado positivo'], a: 0, why: 'La estructura «tan + adjetivo + como» expresa siempre el grado comparativo de igualdad.' },
        { t: 'sort', q: 'Clasifica estas expresiones según el grado del adjetivo.', cats: ['Grado positivo', 'Grado comparativo', 'Grado superlativo'], items: [{ x: 'un perro fiel', c: 0 }, { x: 'una tarde soleada', c: 0 }, { x: 'más alto que su primo', c: 1 }, { x: 'menos dulce que la miel', c: 1 }, { x: 'un examen facilísimo', c: 2 }, { x: 'una película muy divertida', c: 2 }], why: 'El positivo no compara ni intensifica; el comparativo relaciona dos elementos; el superlativo expresa el grado máximo con «muy» o «-ísimo».' },
        { t: 'match', q: 'Une cada adjetivo en grado positivo con su comparativo y su superlativo cultos.', pairs: [['bueno', 'mejor / óptimo'], ['malo', 'peor / pésimo'], ['grande', 'mayor / máximo'], ['pequeño', 'menor / mínimo']], why: 'Estos cuatro adjetivos tienen formas propias para el comparativo y el superlativo: por eso no se dice *más mejor ni *más peor.' },
        { t: 'order', q: 'Ordena de menor a mayor intensidad estas formas del adjetivo «interesante».', items: ['menos interesante que', 'interesante (positivo)', 'más interesante que', 'interesantísima'], why: 'Va desde el comparativo de inferioridad, pasando por el positivo y el comparativo de superioridad, hasta el superlativo.' },
        { t: 'choice', q: '¿Cuál de estos adjetivos es de una sola terminación (no cambia del masculino al femenino)?', o: ['valiente', 'aragonesa', 'pequeño', 'amarillo'], a: 0, why: 'Decimos «el niño valiente» y «la niña valiente»: tiene una sola terminación para ambos géneros.' },
        { t: 'choice', q: '¿Cuál es el superlativo culto correcto de «antiguo» y de «fuerte»?', o: ['antiquísimo y fortísimo', 'antigüísimo y fuertísimo', 'más antiguo y más fuerte'], a: 0, why: 'En los superlativos cultos sobre la raíz latina se escribe «antiquísimo» y «fortísimo» (también son cultos «celebérrimo» de célebre o «paupérrimo» de pobre).' }
      ]
    },
    {
      title: 'Los determinantes',
      intro: [
        { i: '🧭', h: '¿Qué hacen los determinantes?', p: 'Los <b>determinantes</b> van <b>delante del sustantivo</b> para presentarlo o precisar su significado, y concuerdan con él en género y número.<br>• <b>Artículos determinados</b>: <i>el, la, los, las</i> (al + el = <b>al</b>; de + el = <b>del</b>).<br>• <b>Artículos indeterminados</b>: <i>un, una, unos, unas</i>.' },
        { i: '👉', h: 'Demostrativos y posesivos', p: '• <b>Demostrativos</b> (indican distancia):<br>Cercanía: <i>este, esta, estos, estas</i>.<br>Distancia media: <i>ese, esa, esos, esas</i>.<br>Lejanía: <i>aquel, aquella, aquellos, aquellas</i>.<br>• <b>Posesivos</b> (indican a quién pertenece): de <b>un poseedor</b> (<i>mi, tu, su, mis, tus, sus</i>) o de <b>varios poseedores</b> (<i>nuestro/a, vuestro/a, su/sus</i>).' },
        { i: '🔢', h: 'Numerales, indefinidos e interrogativos', p: '• <b>Numerales cardinales</b> (cantidad exacta: <i>dos, quince</i>) y <b>ordinales</b> (orden: <i>primero, décimo, undécimo, duodécimo</i>).<br>• <b>Indefinidos</b> (cantidad imprecisa: <i>algún, varios, muchos, pocos, demasiadas</i>).<br>• <b>Interrogativos y exclamativos</b>: <i>qué, cuántos/as</i> delante de sustantivo (<i>¡Qué alegría!</i>).' }
      ],
      ex: [
        { t: 'choice', q: 'En la oración «Aquellas montañas tienen varios senderos», ¿qué clases de determinantes son «aquellas» y «varios»?', o: ['«Aquellas» es demostrativo de lejanía y «varios» es indefinido', '«Aquellas» es artículo determinado y «varios» es numeral cardinal', '«Aquellas» es posesivo y «varios» es demostrativo'], a: 0, why: '«Aquellas» indica lejanía respecto a quien habla (demostrativo) y «varios» expresa una cantidad inexacta (indefinido), ambos delante de un sustantivo.' },
        { t: 'sort', q: 'Clasifica estos determinantes demostrativos según la distancia que expresan.', cats: ['Cercanía', 'Distancia media', 'Lejanía'], items: [{ x: 'esta mochila', c: 0 }, { x: 'estos libros', c: 0 }, { x: 'ese árbol', c: 1 }, { x: 'esas nubes', c: 1 }, { x: 'aquel castillo', c: 2 }, { x: 'aquellas cumbres', c: 2 }], why: '«Este/a/os/as» indican cercanía; «ese/a/os/as», distancia media; «aquel/aquella/os/as», lejanía.' },
        { t: 'match', q: 'Une cada sintagma con el tipo de determinante que lleva delante del sustantivo.', pairs: [['nuestras bicicletas', 'Posesivo (varios poseedores)'], ['veintidós puntos', 'Numeral cardinal'], ['demasiado ruido', 'Indefinido'], ['¡qué sorpresa!', 'Exclamativo']], why: '«Nuestras» indica pertenencia a varios poseedores; «veintidós», cantidad exacta; «demasiado», cantidad imprecisa; «qué», exclamación.' },
        { t: 'choice', q: '¿Cuáles son los determinantes numerales ordinales correspondientes a los puestos 11.º y 12.º?', o: ['undécimo y duodécimo', 'onceavo y doceavo', 'decimoprimero y doceavo'], a: 0, why: '«Undécimo» (11.º) y «duodécimo» (12.º) son ordinales (también se admiten decimoprimero y decimosegundo). En cambio, «onceavo» y «doceavo» son fraccionarios (partes de una unidad).' },
        { t: 'tap', q: 'En esta frase se han usado fraccionarios (*-avo) en lugar de determinantes ordinales. ¡Caza los dos errores!', words: ['Subimos', 'al', 'onceavo', 'piso', 'para', 'celebrar', 'el', 'doceavo', 'aniversario', 'del', 'club.'], wrong: [2, 7], why: 'Para indicar orden se usan los ordinales <b>undécimo</b> (o decimoprimero) y <b>duodécimo</b> (o decimosegundo), nunca los partitivos *onceavo ni *doceavo.' },
        { t: 'tf', q: 'En «Nuestro equipo ganó el torneo», el determinante «nuestro» es posesivo de un solo poseedor.', a: false, why: '«Nuestro» indica que el equipo pertenece a varias personas (nosotros/nosotras), así que es un posesivo de varios poseedores.' },
        { t: 'tf', q: 'Las formas «al» y «del» se llaman artículos contractos porque unen una preposición («a» o «de») con el artículo «el».', a: true, why: 'En español, «a + el» se contrae en «al» y «de + el» se contrae en «del» (salvo que «El» forme parte de un nombre propio, como «de El Salvador»).' },
        { t: 'sort', q: 'Clasifica estos determinantes numerales e indefinidos.', cats: ['Numeral cardinal', 'Numeral ordinal', 'Indefinido'], items: [{ x: 'dieciséis cromos', c: 0 }, { x: 'cuarenta páginas', c: 0 }, { x: 'tercer capítulo', c: 1 }, { x: 'octava fila', c: 1 }, { x: 'algunas tardes', c: 2 }, { x: 'pocos minutos', c: 2 }], why: 'Los cardinales expresan un número exacto; los ordinales, el lugar en una serie; los indefinidos, una cantidad imprecisa.' },
        { t: 'choice', q: '¿Cómo se escribe correctamente el numeral cardinal 26?', o: ['veintiséis', 'veintiseis', 'veinte y seis'], a: 0, why: 'Los numerales del 16 al 29 se escriben en una sola palabra. «Veintiséis» es aguda acabada en -s, por lo que lleva tilde en la «e» del diptongo.' },
        { t: 'order', q: 'Ordena de menor a mayor estos determinantes numerales ordinales.', items: ['tercero', 'octavo', 'noveno', 'undécimo', 'vigésimo'], why: 'Corresponden a los puestos 3.º, 8.º, 9.º, 11.º y 20.º.' },
        { t: 'choice', q: 'En «¿Cuántos libros has leído este mes?», ¿qué clase de palabra es «cuántos»?', o: ['Determinante interrogativo, masculino plural', 'Pronombre personal átono', 'Determinante indefinido, masculino singular'], a: 0, why: 'Introduce una pregunta y acompaña directamente al sustantivo «libros», por lo que es un determinante interrogativo.' },
        { t: 'choice', q: '¿Qué ocurre con los determinantes «alguno» y «ninguno» cuando van justo delante de un sustantivo masculino singular?', o: ['Se apocopan en «algún» y «ningún» (con tilde)', 'Se mantienen igual: «alguno día»', 'Pasan a ser pronombres personales'], a: 0, why: 'Pierden la vocal final (apócope) y llevan tilde por pasar a ser palabras agudas terminadas en -n: «algún día», «ningún problema».' }
      ]
    },
    {
      title: 'Los pronombres y el análisis morfológico',
      intro: [
        { i: '🔄', h: 'Determinante frente a pronombre', p: '¡La regla de oro! Muchas palabras tienen la misma forma, pero distinta función:<br>• Si <b>acompaña a un sustantivo</b> → es <b>determinante</b> (<i><b>Este</b> abrigo tiene <b>dos</b> bolsillos</i>).<br>• Si <b>sustituye al sustantivo</b> (va sin él) → es <b>pronombre</b> (<i><b>Este</b> tiene <b>dos</b></i>).' },
        { i: '🙋‍♀️', h: 'Los pronombres personales', p: 'Nombran a las tres personas gramaticales sin usar un sustantivo:<br>• <b>Tónicos</b> (pueden ir solos o tras preposición): <i>yo, mí, conmigo; tú, ti, contigo; él, ella, sí, consigo; nosotros/as, vosotros/as, ellos/as</i>.<br>• <b>Átonos</b> (acompañan al verbo, delante o pegados detrás): <i>me, te, se, lo, la, le, nos, os, los, las, les</i> (<i><b>Me</b> dijo; dímelo</i>).' },
        { i: '🕵️‍♀️', h: 'Todos los demás pronombres', p: 'Cuando van en lugar del nombre, también hay pronombres:<br>• <b>Demostrativos</b>: <i>Prefiero <b>aquella</b></i>.<br>• <b>Posesivos</b>: <i>Tu bici es azul; <b>la mía</b> es roja</i>.<br>• <b>Numerales</b>: <i>Compré <b>tres</b>; llegué <b>la primera</b></i>.<br>• <b>Indefinidos</b>: <i><b>Alguien</b> llamó; no queda <b>nada</b>; vinieron <b>muchos</b></i>.' }
      ],
      ex: [
        { t: 'choice', q: 'En «Esta mochila es pesada, pero aquella es muy ligera», ¿qué son «esta» y «aquella»?', o: ['«Esta» es determinante demostrativo y «aquella» es pronombre demostrativo', 'Las dos son determinantes demostrativos', 'Las dos son pronombres demostrativos'], a: 0, why: '«Esta» acompaña al sustantivo «mochila» (determinante), mientras que «aquella» sustituye a «mochila» y va sola (pronombre).' },
        { t: 'sort', q: 'Clasifica la palabra destacada en mayúsculas según sea determinante o pronombre.', cats: ['Determinante (acompaña al nombre)', 'Pronombre (sustituye al nombre)'], items: [{ x: 'TENGO TRES cuadernos', c: 0 }, { x: 'Yo solo tengo DOS', c: 1 }, { x: 'ALGUNOS niños cantan', c: 0 }, { x: 'ALGUNOS cantan muy bien', c: 1 }, { x: 'aquel perro y ESTE gato', c: 0 }, { x: 'Prefiero ESTE', c: 1 }], why: 'Cuando detrás va el sustantivo («cuadernos», «niños», «gato») es determinante; cuando va sin sustantivo, es pronombre.' },
        { t: 'sort', q: 'Clasifica estos pronombres personales en tónicos o átonos.', cats: ['Pronombre personal tónico', 'Pronombre personal átono'], items: [{ x: 'nosotros', c: 0 }, { x: 'conmigo', c: 0 }, { x: 'vosotras', c: 0 }, { x: 'me', c: 1 }, { x: 'nos', c: 1 }, { x: 'les', c: 1 }], why: '«Nosotros», «conmigo» y «vosotras» son tónicos (pueden aparecer solos); «me», «nos» y «les» son átonos y siempre se apoyan en un verbo.' },
        { t: 'choice', q: 'Analiza morfológicamente el pronombre personal «vosotras».', o: ['Pronombre personal tónico, 2.ª persona del plural, femenino', 'Pronombre personal átono, 3.ª persona del plural, femenino', 'Determinante posesivo, 2.ª persona del plural, femenino'], a: 0, why: 'Designa a las oyentes (2.ª persona del plural, femenino) y tiene acento propio (tónico).' },
        { t: 'match', q: 'Une cada oración con el tipo de pronombre destacado en negrita.', pairs: [['<b>Nadie</b> sabía el secreto.', 'Pronombre indefinido'], ['Tu dibujo es bonito y el <b>nuestro</b> también.', 'Pronombre posesivo'], ['De los cinco pasteles, me comí <b>dos</b>.', 'Pronombre numeral cardinal'], ['<b>Nos</b> encanta viajar por Aragón.', 'Pronombre personal átono']], why: '«Nadie» indica cantidad inexistente; «nuestro» (sin sustantivo), posesión; «dos», cantidad exacta sin sustantivo; «nos», 1.ª persona plural.' },
        { t: 'tf', q: 'El pronombre personal «ti» debe escribirse con tilde diacrítica igual que «mí».', a: false, why: '«Ti» NUNCA lleva tilde, porque no existe otra palabra igual de la que haya que diferenciarlo (a diferencia de «mí / mi» o «tú / tu»).' },
        { t: 'tf', q: 'En la palabra «dámelo», hay dos pronombres personales átonos («me» y «lo») unidos al final del verbo.', a: true, why: 'Son pronombres enclíticos: se unen al verbo «da» (da + me + lo) formando una sola palabra sobresdrújula.' },
        { t: 'tap', q: 'En esta oración hay dos pronombres personales mal empleados tras «entre» y con «con». ¡Cázalos!', words: ['Entre', 'tú', 'y', 'mí', 'haremos', 'el', 'mural', 'y', 'lo', 'llevaré', 'con', 'mí.'], wrong: [3, 11], why: 'Con la preposición «entre» se usan los pronombres de sujeto («entre tú y <b>yo</b>»), y «con + mí» forma siempre una sola palabra: <b>conmigo</b>.' },
        { t: 'order', q: 'Ordena las palabras de la oración siguiendo esta secuencia de categorías: [Determinante artículo] + [Sustantivo] + [Adjetivo] + [Verbo] + [Pronombre indefinido].', items: ['La', 'detective', 'astuta', 'descubrió', 'todo.'], why: '«La» (artículo) + «detective» (sustantivo) + «astuta» (adjetivo) + «descubrió» (verbo) + «todo» (pronombre indefinido).' },
        { t: 'choice', q: '¿Qué palabras son siempre pronombres indefinidos y NUNCA pueden ser determinantes?', o: ['alguien, nadie y nada', 'algún, varios y muchos', 'este, ese y aquel'], a: 0, why: 'No podemos poner un sustantivo detrás de «alguien», «nadie» o «nada» (*alguien niño, *nadie persona): funcionan siempre como pronombres.' },
        { t: 'choice', q: 'En «El perro ladró a él», las dos palabras «el» y «él» son…', o: ['«El» es determinante artículo y «él» es pronombre personal de 3.ª persona', 'Las dos son pronombres personales', 'Las dos son determinantes artículos'], a: 0, why: '«El» sin tilde acompaña al sustantivo «perro» (artículo); «él» con tilde diacrítica sustituye a una persona tras preposición (pronombre personal).' },
        { t: 'choice', q: 'En «Laura vive en el cuarto piso y su abuela vive en el quinto», ¿cómo se analizan «cuarto» y «quinto»?', o: ['«Cuarto» es determinante numeral ordinal y «quinto» es pronombre numeral ordinal', 'Ambos son determinantes numerales cardinales', '«Cuarto» es pronombre y «quinto» es determinante'], a: 0, why: '«Cuarto» acompaña al sustantivo «piso» (determinante ordinal), mientras que «quinto» evita repetir «piso» (pronombre ordinal).' }
      ]
    }
  ]
});

})();
/* ---- m04.js ---- */
(function(){
Adv.register(4, {
  stations: [
    {
      title: 'Formas no personales, persona, número y modo',
      intro: [
        { i: '🧩', h: 'Raíz, desinencias y conjugaciones', p: 'Para encontrar la <b>raíz</b> de un verbo, quita la terminación del infinitivo: <b>-ar</b> (1.ª conjugación: <i>cant-ar</i>), <b>-er</b> (2.ª conjugación: <i>com-er</i>) o <b>-ir</b> (3.ª conjugación: <i>viv-ir</i>). Las terminaciones que añadimos a la raíz son las <b>desinencias</b> e indican persona, número, tiempo y modo.' },
        { i: '🚫', h: 'Las formas no personales', p: 'No expresan ni persona ni número:<br>• <b>Infinitivo</b>: acaba en <i>-ar, -er, -ir</i> (<i>saltar</i>; compuesto: <i>haber saltado</i>).<br>• <b>Gerundio</b>: acaba en <i>-ando, -iendo</i> (<i>saltando, leyendo</i>; compuesto: <i>habiendo saltado</i>).<br>• <b>Participio</b>: acaba en <i>-ado, -ido</i> (<i>saltado</i>) o es irregular: <i>hecho, dicho, escrito, visto, roto, abierto, puesto, vuelto</i>.' },
        { i: '🎭', h: 'Los tres modos verbales', p: '• <b>Indicativo</b>: expresa acciones reales o seguras (<i>Hoy <b>nieva</b> en el Pirineo</i>).<br>• <b>Subjuntivo</b>: expresa deseo, duda o posibilidad (<i>Ojalá <b>nieve</b> mañana; quizá <b>vengan</b></i>).<br>• <b>Imperativo</b>: expresa órdenes, consejos o ruegos afirmativos (<i><b>Escucha</b> bien; <b>venid</b> pronto</i>).' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuál es la raíz y a qué conjugación pertenece la forma verbal «escribíamos»?', o: ['Raíz «escrib-», 3.ª conjugación (escribir)', 'Raíz «escribí-», 2.ª conjugación (escriber)', 'Raíz «escr-», 1.ª conjugación (escrar)'], a: 0, why: 'Su infinitivo es «escribir» (acabado en -ir, 3.ª conjugación). Al quitar «-ir», queda la raíz «escrib-» y la desinencia «-íamos».' },
        { t: 'sort', q: 'Clasifica estas formas no personales del verbo.', cats: ['Infinitivo', 'Gerundio', 'Participio'], items: [{ x: 'compartir', c: 0 }, { x: 'haber vivido', c: 0 }, { x: 'aprendiendo', c: 1 }, { x: 'leyendo', c: 1 }, { x: 'abierto', c: 2 }, { x: 'construido', c: 2 }], why: 'El infinitivo acaba en -ar/-er/-ir; el gerundio, en -ando/-iendo/-yendo; el participio, en -ado/-ido o formas irregulares como «abierto».' },
        { t: 'match', q: 'Une cada verbo con su participio irregular correcto.', pairs: [['hacer', 'hecho'], ['escribir', 'escrito'], ['romper', 'roto'], ['volver', 'vuelto']], why: 'Estos verbos no forman el participio con *-ido, sino con formas irregulares: hecho, escrito, roto, vuelto, visto, puesto, abierto, dicho.' },
        { t: 'sort', q: 'Clasifica estas oraciones según el modo del verbo destacado.', cats: ['Modo indicativo', 'Modo subjuntivo', 'Modo imperativo'], items: [{ x: 'El tren SALE a las cinco.', c: 0 }, { x: 'Ayer VISITAMOS Albarracín.', c: 0 }, { x: 'Ojalá LLUEVA este fin de semana.', c: 1 }, { x: 'Quizá TENGAMOS suerte.', c: 1 }, { x: 'RECOGED vuestras mochilas.', c: 2 }, { x: 'DIME la verdad, por favor.', c: 2 }], why: 'El indicativo enuncia hechos reales; el subjuntivo expresa deseo o duda; el imperativo da órdenes o ruegos.' },
        { t: 'choice', q: '¿En qué persona y número está la forma verbal «descubristeis»?', o: ['2.ª persona del plural (vosotros / vosotras)', '2.ª persona del singular (tú)', '3.ª persona del plural (ellos / ellas)'], a: 0, why: 'La desinencia «-isteis» corresponde a «vosotros o vosotras» (2.ª persona del plural).' },
        { t: 'tf', q: 'Las formas no personales del verbo (infinitivo, gerundio y participio) indican qué persona gramatical (1.ª, 2.ª o 3.ª) realiza la acción.', a: false, why: 'Se llaman «no personales» precisamente porque carecen de desinencias de persona: «cantar», «cantando» y «cantado» sirven para cualquier persona.' },
        { t: 'tf', q: 'Para dar una orden negativa (como «No grites» o «No corráis»), en español usamos formas del modo subjuntivo, no del imperativo.', a: true, why: 'El modo imperativo solo tiene formas propias para órdenes afirmativas («grita», «corred»); las órdenes con «no» se construyen siempre en presente de subjuntivo.' },
        { t: 'tap', q: 'Caza los dos participios mal formados en esta oración.', words: ['Ya', 'hemos', 'escribido', 'el', 'guion', 'y', 'lo', 'hemos', 'ponido', 'sobre', 'la', 'mesa.'], wrong: [2, 8], why: 'Los participios de «escribir» y «poner» son irregulares: se dice «hemos <b>escrito</b>» y «hemos <b>puesto</b>».' },
        { t: 'order', q: 'Ordena estas formas del verbo «tejer» siguiendo este orden: [Infinitivo simple] → [Gerundio simple] → [Participio] → [Infinitivo compuesto].', items: ['tejer', 'tejiendo', 'tejido', 'haber tejido'], why: '«Tejer» (infinitivo), «tejiendo» (gerundio), «tejido» (participio) y «haber tejido» (infinitivo compuesto).' },
        { t: 'choice', q: '¿Cuál es el gerundio correcto del verbo «leer» y del verbo «ir»?', o: ['leyendo y yendo', 'leiendo e iendo', 'leyendo e iyendo'], a: 0, why: 'Cuando la terminación del gerundio queda al principio o entre vocales sin acento, la «i» se convierte en «y»: «leyendo», «oyendo», «yendo».' },
        { t: 'choice', q: 'En «¡Callad un momento, por favor!», ¿cómo se analiza el verbo «callad»?', o: ['2.ª persona del plural del modo imperativo', '3.ª persona del singular del modo subjuntivo', 'Infinitivo compuesto de la 1.ª conjugación'], a: 0, why: 'Los imperativos de 2.ª persona del plural (vosotros/as) acaban en «-d» (callad, escuchad, comed). Nunca debe usarse el infinitivo (*callar) para ordenar.' },
        { t: 'choice', q: '¿Qué forma verbal corresponde a la 1.ª persona del plural del presente de subjuntivo de «saltar»?', o: ['saltemos', 'saltamos', 'saltaremos', 'saltábamos'], a: 0, why: '«Ojalá nosotros saltemos»: es 1.ª persona del plural del presente de subjuntivo. «Saltamos» es indicativo.' }
      ]
    },
    {
      title: 'Tiempos simples y compuestos',
      intro: [
        { i: '⚙️', h: 'Formas simples y compuestas', p: '• <b>Formas simples</b>: constan de una sola palabra (<i>viajo, comíamos, vivirán</i>).<br>• <b>Formas compuestas</b>: se construyen con el verbo auxiliar <b>haber</b> conjugado + el <b>participio</b> del verbo principal (<i>he viajado, habíamos comido, habrán vivido</i>).' },
        { i: '🕰️', h: 'Los tiempos del modo indicativo', p: '<b>Simples</b>:<br>• Presente (<i>canto</i>)<br>• Pret. imperfecto (<i>cantaba, temía</i>)<br>• Pret. perfecto simple (<i>canté, temí</i>)<br>• Futuro simple (<i>cantaré</i>) y Condicional simple (<i>cantaría</i>)<br><b>Compuestos</b> (con <i>haber</i>):<br>• Pret. perfecto compuesto (<i>he cantado</i>)<br>• Pret. pluscuamperfecto (<i>había cantado</i>) y Pret. anterior (<i>hube cantado</i>)<br>• Futuro compuesto (<i>habré cantado</i>) y Condicional compuesto (<i>habría cantado</i>).' },
        { i: '🌙', h: 'Los tiempos del modo subjuntivo', p: 'En subjuntivo usamos cuatro tiempos principales:<br>• <b>Presente</b>: <i>cante, coma</i> (compuesto → <b>Pret. perfecto</b>: <i>haya cantado</i>).<br>• <b>Pret. imperfecto</b>: <i>cantara o cantase, comiera o comiese</i> (compuesto → <b>Pret. pluscuamperfecto</b>: <i>hubiera o hubiese cantado</i>).' }
      ],
      ex: [
        { t: 'choice', q: '¿En qué tiempo y modo está la forma verbal «habíamos llegado»?', o: ['Pretérito pluscuamperfecto de indicativo', 'Pretérito perfecto compuesto de indicativo', 'Condicional compuesto de indicativo', 'Pretérito imperfecto de subjuntivo'], a: 0, why: 'El auxiliar «habíamos» está en pretérito imperfecto de indicativo, por lo que «habíamos llegado» es pretérito pluscuamperfecto de indicativo.' },
        { t: 'match', q: 'Une cada tiempo simple de indicativo con su tiempo compuesto correspondiente.', pairs: [['Presente (canto)', 'Pret. perfecto compuesto (he cantado)'], ['Pret. imperfecto (cantaba)', 'Pret. pluscuamperfecto (había cantado)'], ['Pret. perfecto simple (canté)', 'Pret. anterior (hube cantado)'], ['Futuro simple (cantaré)', 'Futuro compuesto (habré cantado)']], why: 'Cada tiempo compuesto toma el auxiliar «haber» conjugado en el tiempo simple correspondiente más el participio.' },
        { t: 'sort', q: 'Clasifica estas formas verbales del modo indicativo.', cats: ['Pret. imperfecto', 'Pret. perfecto simple', 'Condicional simple'], items: [{ x: 'paseábamos', c: 0 }, { x: 'corrías', c: 0 }, { x: 'anduviste', c: 1 }, { x: 'viajaron', c: 1 }, { x: 'viajaríamos', c: 2 }, { x: 'tendrías', c: 2 }], why: 'El pretérito imperfecto acaba en -aba o -ía; el pretérito perfecto simple expresa acción pasada terminada; el condicional lleva la terminación -ría.' },
        { t: 'choice', q: 'Analiza por completo la forma verbal «habrán terminado».', o: ['3.ª persona del plural, futuro compuesto de indicativo, verbo terminar', '3.ª persona del plural, condicional compuesto de indicativo, verbo terminar', '1.ª persona del plural, pretérito anterior de indicativo, verbo terminar'], a: 0, why: '«Habrán» es futuro simple de «haber» en 3.ª persona del plural (ellos/as), así que junto al participio forma el futuro compuesto de indicativo.' },
        { t: 'tf', q: 'Las formas «cantara» y «cantase» pertenecen ambas al pretérito imperfecto de subjuntivo.', a: true, why: 'El pretérito imperfecto de subjuntivo tiene dos terminaciones equivalentes: en -ra (cantara, comiera) y en -se (cantase, comiese).' },
        { t: 'tf', q: 'La forma verbal «hemos visto» es un pretérito perfecto simple.', a: false, why: 'Consta de dos palabras (auxiliar «hemos» + participio «visto»), así que es pretérito perfecto COMPUESTO. El simple sería «vimos».' },
        { t: 'order', q: 'Ordena cronológicamente estas formas de 1.ª persona del singular, desde la más pasada hasta la futura.', items: ['había estudiado (antes de ayer)', 'estudié (ayer)', 'estudio (ahora)', 'estudiaré (mañana)'], why: 'El pluscuamperfecto expresa un pasado anterior a otro pasado («estudié»), seguido del presente («estudio») y del futuro («estudiaré»).' },
        { t: 'choice', q: '¿Cuál es la 2.ª persona del singular del condicional compuesto de indicativo del verbo «hacer»?', o: ['habrías hecho', 'harías', 'habrás hecho', 'hubieras hecho'], a: 0, why: 'El condicional compuesto une el condicional de «haber» («habrías», con tú) y el participio «hecho».' },
        { t: 'tap', q: 'En este texto se han colado dos formas en presente cuando todo ocurrió ayer (deberían ir en pretérito perfecto simple). ¡Cázalas!', words: ['Ayer', 'madrugamos', 'mucho,', 'subimos', 'al', 'autobús,', 'llegamos', 'a', 'Ordesa', 'y', 'vemos', 'una', 'cascada', 'donde', 'sacamos', 'fotos', 'y', 'volvemos', 'de', 'noche.'], wrong: [10, 17], why: 'Si hablamos de «ayer» en pasado, lo coherente es usar los pretéritos perfectos simples «<b>vimos</b>» y «<b>volvimos</b>» en lugar de los presentes «vemos» y «volvemos».' },
        { t: 'match', q: 'Une cada forma del modo subjuntivo con el nombre de su tiempo.', pairs: [['escuchemos', 'Presente de subjuntivo'], ['escucháramos o escuchásemos', 'Pret. imperfecto de subjuntivo'], ['hayamos escuchado', 'Pret. perfecto de subjuntivo'], ['hubiéramos o hubiésemos escuchado', 'Pret. pluscuamperfecto de subjuntivo']], why: 'En subjuntivo, «haya + participio» es pretérito perfecto y «hubiera/hubiese + participio» es pretérito pluscuamperfecto.' },
        { t: 'choice', q: '¿Qué tiempo verbal es «hube leído»?', o: ['Pretérito anterior de indicativo (1.ª persona del singular)', 'Pretérito pluscuamperfecto de subjuntivo', 'Futuro compuesto de indicativo'], a: 0, why: 'Con «hube, hubiste, hubo, hubimos, hubisteis, hubieron» + participio se forma el pretérito anterior de indicativo.' },
        { t: 'choice', q: '¿Por qué llevan tilde todas las formas del pretérito imperfecto de indicativo de la 2.ª y 3.ª conjugación («comía, vivías, corríamos»)?', o: ['Porque contienen un hiato de vocal cerrada tónica («í») y vocal abierta («a»)', 'Porque todas son palabras esdrújulas', 'Porque son verbos irregulares'], a: 0, why: 'En «co-mí-a» o «vi-ví-as», la «í» cerrada lleva la fuerza de voz junto a la «a» abierta, formando un hiato con tilde obligatoria.' }
      ]
    },
    {
      title: 'Verbos regulares e irregulares sin trampas',
      intro: [
        { i: '⚖️', h: '¿Regular o irregular?', p: '• Un verbo es <b>regular</b> si mantiene su <b>raíz igual</b> en todas sus formas y toma las mismas desinencias que su verbo modelo (<i>amar, temer, partir</i>).<br>• Es <b>irregular</b> si cambia la raíz (<i>d<b>o</b>rmir → d<b>ue</b>rmo; p<b>e</b>dir → p<b>i</b>do</i>) o toma desinencias distintas (<i>estar → est<b>uve</b></i>).<br>¡Ojo! Los cambios solo de letra para conservar el sonido (<i>to<b>c</b>ar → to<b>qu</b>é; co<b>g</b>er → co<b>j</b>o</i>) <b>NO</b> son irregularidades.' },
        { i: '⚡', h: 'Irregulares que no te pueden engañar', p: 'Conjuga siempre así estos verbos:<br>• <b>andar</b> → <i>anduve, anduviste, anduvo</i> (nunca *andé).<br>• <b>conducir</b> → <i>conduje, condujiste, condujeron</i> (nunca *conducí).<br>• <b>caber</b> → <i>quepo</i> (presente), <i>cupe</i> (pasado), <i>cabré</i> (futuro).<br>• <b>satisfacer</b> → se conjuga igual que <i>hacer</i>: <i>satisfice, satisfaré, satisfaría</i>.' },
        { i: '🎯', h: 'Tres reglas de oro para hablar y escribir', p: '1) La 2.ª persona del singular del pasado <b>nunca acaba en -s</b>: se dice <i>dijiste, viniste, fuiste</i> (jamás *dijistes).<br>2) Al unir el imperativo plural con «os», <b>desaparece la -d</b>: <i>callad + os → callaos; sentad + os → sentaos</i> (única excepción: <i>idos</i>, de irse).<br>3) El verbo <b>haber</b> cuando expresa existencia es <b>impersonal</b> y va solo en 3.ª persona del singular: <i><b>Había</b> muchas niñas; <b>hubo</b> fiestas</i> (nunca *habían muchas niñas).' }
      ],
      ex: [
        { t: 'sort', q: 'Clasifica estos verbos según sean regulares o irregulares.', cats: ['Verbo regular', 'Verbo irregular'], items: [{ x: 'saltar (salto, salté, saltaré)', c: 0 }, { x: 'beber (bebo, bebí, beberé)', c: 0 }, { x: 'vivir (vivo, viví, viviré)', c: 0 }, { x: 'dormir (duermo, dormí)', c: 1 }, { x: 'tener (tengo, tuve, tendré)', c: 1 }, { x: 'ir (voy, fui, iré)', c: 1 }], why: '«Saltar», «beber» y «vivir» conservan su raíz invariable y las desinencias modelo; «dormir», «tener» e «ir» alteran su raíz o sus desinencias.' },
        { t: 'tf', q: 'El verbo «tocar» es irregular porque en «toqué» cambia la «c» por «qu».', a: false, why: 'El sonido /k/ de la raíz no cambia: solo se escribe «qu» ante «e» por una regla ortográfica. Por tanto, «tocar» es un verbo completamente regular.' },
        { t: 'choice', q: '¿Cuál es la forma correcta de la 1.ª persona del singular del pretérito perfecto simple del verbo «andar»?', o: ['anduve', 'andé', 'andara'], a: 0, why: '«Andar» es irregular en el pretérito perfecto simple y en el imperfecto de subjuntivo: «yo anduve, tú anduviste, él anduvo, nosotros anduvimos».' },
        { t: 'choice', q: 'Elige las dos formas correctas del verbo «caber» en presente y en pretérito perfecto simple (1.ª persona del singular):', o: ['yo quepo / yo cupe', 'yo cabo / yo cabí', 'yo quepo / yo cabí'], a: 0, why: 'El verbo «caber» es irregular: en presente se dice «yo quepo» y en pretérito perfecto simple se dice «yo cupe».' },
        { t: 'tap', q: 'En esta oración hay tres formas verbales mal conjugadas. ¡Cázalas todas!', words: ['Ayer', 'andé', 'hasta', 'el', 'pueblo,', 'conducí', 'el', 'tractor', 'y', 'me', 'dijistes', 'que', 'todo', 'salió', 'bien.'], wrong: [1, 5, 10], why: 'Las formas correctas son: «ayer <b>anduve</b>», «<b>conduje</b> el tractor» y «me <b>dijiste</b>» (sin -s final).' },
        { t: 'match', q: 'Une cada infinitivo con su forma correcta en 3.ª persona del singular del pretérito perfecto simple.', pairs: [['conducir', 'condujo'], ['traer', 'trajo'], ['saber', 'supo'], ['satisfacer', 'satisfizo']], why: 'Son pretéritos fuertes irregulares: condujo, trajo, supo y satisfizo (conjugado igual que «hizo»).' },
        { t: 'choice', q: '¿Cuál de estas oraciones usa correctamente el verbo impersonal «haber»?', o: ['Había muchas personas en la plaza del Pilar.', 'Habían muchas personas en la plaza del Pilar.', 'Hubieron muchas fiestas en el barrio.'], a: 0, why: 'Cuando «haber» indica que algo existe o ocurre, es impersonal y solo se usa en singular: «había muchas personas», «hubo muchas fiestas».' },
        { t: 'tap', q: 'Caza los dos verbos «haber» que están mal escritos en plural en esta frase.', words: ['En', 'la', 'excursión', 'habían', 'treinta', 'alumnas', 'y', 'hubieron', 'juegos', 'muy', 'divertidos.'], wrong: [3, 7], why: '«Treinta alumnas» y «juegos» no son el sujeto: el verbo «haber» impersonal debe ir siempre en singular («<b>había</b> treinta alumnas» y «<b>hubo</b> juegos»).' },
        { t: 'choice', q: '¿Cómo se escribe correctamente el imperativo de «sentarse» y de «callarse» para «vosotras»?', o: ['sentaos y callaos', 'sentaros y callaros', 'sentados y callados'], a: 0, why: 'Al unir el imperativo («sentad», «callad») con el pronombre «os», se pierde la «-d»: «sentaos» y «callaos».' },
        { t: 'tf', q: 'Si un verbo es irregular en el pretérito perfecto simple (como «tuve» o «estuve»), también será irregular en el pretérito imperfecto de subjuntivo («tuviera», «estuviera»).', a: true, why: 'En español, la raíz del pretérito perfecto simple (tuv-, estuv-, anduv-, conduj-) sirve siempre para formar el pretérito imperfecto de subjuntivo (tuviera, anduviera, condujera).' },
        { t: 'order', q: 'Ordena las sílabas para formar la 1.ª persona del singular del futuro simple del verbo «satisfacer» (recuerda que se conjuga como «hacer»).', items: ['sa', 'tis', 'fa', 'ré'], why: 'Igual que de «hacer» decimos «haré», de «satisfacer» decimos «sa-tis-fa-ré» (nunca *satisfaceré).' },
        { t: 'choice', q: '¿En cuál de estas opciones están bien conjugados los verbos «prever» (ver con antelación) y «proveer» (suministrar)?', o: ['Ellos previeron la tormenta y se proveyeron de agua.', 'Ellos preveyeron la tormenta y se provieron de agua.', 'Ellos preveron la tormenta y se proveeron de agua.'], a: 0, why: '«Prever» se conjuga igual que «ver» (vio → previeron), mientras que «proveer» tiene dos «e» y se conjuga como «leer» (leyeron → proveyeron).' }
      ]
    }
  ]
});

})();
/* ---- m05.js ---- */
(function(){
Adv.register(5, {
  stations: [
    {
      title: 'Los adverbios y sus clases',
      intro: [
        { i: '🧭', h: 'Palabras invariables que acompañan', p: 'Los <b>adverbios</b> expresan circunstancias (lugar, tiempo, modo, cantidad, afirmación, negación o duda). Son <b>invariables</b>: no cambian de género ni de número (<i>él corre rápido</i> / <i>ellas corren rápido</i>).' },
        { i: '🔍', h: '¿A quién modifican?', p: 'Un adverbio puede complementar a un <b>verbo</b> (<i>duerme <b>bien</b></i>), a un <b>adjetivo</b> (<i><b>muy</b> alto</i>) o a <b>otro adverbio</b> (<i><b>bastante</b> cerca</i>). Nunca modifica a un sustantivo.' },
        { i: '🏷️', h: 'Las siete clases y las locuciones', p: '<b>Lugar</b>: aquí, cerca, arriba.<br><b>Tiempo</b>: hoy, ayer, pronto.<br><b>Modo</b>: bien, así, <i>fácilmente</i>.<br><b>Cantidad</b>: muy, más, bastante.<br><b>Afirmación / Negación / Duda</b>: sí, también / no, jamás / quizá.<br>Un grupo fijo que funciona como un adverbio es una <b>locución adverbial</b> (<i>de repente, a cántaros</i>).' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué palabra modifica el adverbio «muy» en la oración «La mochila está muy pesada»?', o: ['Al adjetivo «pesada»', 'Al sustantivo «mochila»', 'Al verbo «está»'], a: 0, why: '«Muy» intensifica la cualidad expresada por el adjetivo «pesada». Un adverbio puede modificar a un verbo, a un adjetivo o a otro adverbio.' },
        { t: 'tf', q: 'Los adverbios son palabras invariables porque no tienen variación de género ni de número.', a: true, why: 'Decimos «él llegó temprano» y «ellas llegaron temprano»: el adverbio «temprano» no varía.' },
        { t: 'sort', q: 'Clasifica cada adverbio según su significado.', cats: ['Lugar', 'Tiempo', 'Modo'], items: [{ x: 'debajo', c: 0 }, { x: 'lejos', c: 0 }, { x: 'mañana', c: 1 }, { x: 'pronto', c: 1 }, { x: 'despacio', c: 2 }, { x: 'fácilmente', c: 2 }], why: '«Debajo» y «lejos» indican dónde (lugar); «mañana» y «pronto», cuándo (tiempo); «despacio» y «fácilmente», cómo (modo).' },
        { t: 'sort', q: 'Clasifica estos adverbios en su categoría correspondiente.', cats: ['Cantidad', 'Afirmación o negación', 'Duda'], items: [{ x: 'demasiado', c: 0 }, { x: 'bastante', c: 0 }, { x: 'tampoco', c: 1 }, { x: 'también', c: 1 }, { x: 'quizá', c: 2 }, { x: 'acaso', c: 2 }], why: '«Demasiado» y «bastante» expresan cantidad; «también» afirma y «tampoco» niega; «quizá» y «acaso» expresan duda.' },
        { t: 'match', q: 'Une cada oración con la palabra a la que modifica el adverbio destacado.', pairs: [['Camina <b>despacio</b>.', 'Modifica a un verbo'], ['Es <b>demasiado</b> tímida.', 'Modifica a un adjetivo'], ['Vive <b>muy</b> cerca.', 'Modifica a otro adverbio'], ['<b>Quizá</b> llueva hoy.', 'Expresa duda sobre toda la acción']], why: 'En «camina despacio» complementa al verbo; en «demasiado tímida», al adjetivo; en «muy cerca», al adverbio «cerca».' },
        { t: 'choice', q: 'En «Comió bastante fruta» y «Estudió bastante», ¿en cuál de las dos es «bastante» un adverbio?', o: ['En «Estudió bastante», porque acompaña al verbo', 'En «Comió bastante fruta», porque acompaña al sustantivo', 'En las dos oraciones'], a: 0, keep: true, why: 'Cuando acompaña al sustantivo «fruta» es un determinante indefinido (en plural diríamos «bastantes frutas»). Junto al verbo «estudió» es invariable: adverbio de cantidad.' },
        { t: 'tf', q: 'Al formar un adverbio terminado en «-mente», se pierde siempre la tilde que llevaba el adjetivo original (por ejemplo, de «fácil» saldría «facilmente»).', a: false, why: 'Al contrario: los adverbios terminados en «-mente» conservan siempre la tilde del adjetivo original si este ya la llevaba (fácil → <b>fácilmente</b>, rápido → <b>rápidamente</b>).' },
        { t: 'tap', q: 'Caza los dos adverbios mal escritos (les falta o les sobra la tilde al terminar en -mente).', words: ['Laura', 'resolvió', 'el', 'problema', 'facilmente', 'y', 'respondió', 'amablémente', 'a', 'todos.'], wrong: [4, 7], why: '«Fácil» lleva tilde, así que se escribe <b>fácilmente</b>; «amable» no lleva tilde, por lo que se escribe <b>amablemente</b>.' },
        { t: 'order', q: 'Ordena las palabras para formar una oración en la que un adverbio modifica a otro adverbio.', items: ['Mi', 'abuela', 'vive', 'bastante', 'cerca.'], why: 'El adverbio de cantidad «bastante» va delante del adverbio de lugar «cerca» para precisar cuánto de cerca vive.' },
        { t: 'choice', q: '¿Qué es la expresión «a cántaros» en la oración «En el Pirineo llovió a cántaros»?', o: ['Una locución adverbial de cantidad o modo', 'Una preposición simple', 'Una conjunción adversativa'], a: 0, why: '«A cántaros» es un grupo fijo de palabras que funciona como un solo adverbio (equivale a «muchísimo»): es una locución adverbial.' },
        { t: 'tap', q: 'Localiza las dos palabras que están mal empleadas como si tuvieran plural cuando actúan como adverbios.', words: ['Ellas', 'son', 'medios', 'tímidas', 'pero', 'hablan', 'muy', 'claros', 'en', 'clase.'], wrong: [2, 7], why: 'Como adverbios, son invariables: se dice «<b>medio</b> tímidas» (modifica al adjetivo) y «hablan muy <b>claro</b>» (modifica al verbo).' },
        { t: 'num', q: '¿Cuántos adverbios hay en la oración «Ayer comimos muy bien aquí»?', a: 4, why: 'Hay 4 adverbios: «ayer» (tiempo), «muy» (cantidad), «bien» (modo) y «aquí» (lugar).' }
      ]
    },
    {
      title: 'Las preposiciones y las conjunciones',
      intro: [
        { i: '🔗', h: 'Las preposiciones: enlaces subordinantes', p: 'Las <b>preposiciones</b> son palabras invariables que unen una palabra con su complemento. Lista actual: <b>a, ante, bajo, cabe, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, so, sobre, tras, versus, vía</b>.' },
        { i: '🤝', h: 'Las conjunciones: coordinantes y subordinantes', p: 'Las <b>conjunciones</b> unen palabras o proposiciones.<br><b>Copulativas</b> (suman): y, e, ni.<br><b>Disyuntivas</b> (dan a elegir): o, u.<br><b>Adversativas</b> (oponen): pero, sino, mas.<br><b>Subordinantes</b>: porque, aunque, si, como, que.' },
        { i: '⚠️', h: 'Cambio de «y → e» y «o → u»', p: 'Para evitar que choquen dos sonidos iguales, «y» cambia a <b>e</b> ante palabras que empiezan por el sonido /i/ (<i>padres <b>e</b> hijos</i>, pero <i>agua <b>y</b> hielo</i> porque «hie-» es diptongo), y «o» cambia a <b>u</b> ante /o/ (<i>siete <b>u</b> ocho</i>).' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuál de estas series contiene ÚNICAMENTE preposiciones?', o: ['desde, durante, mediante, hacia', 'pero, aunque, porque, sino', 'aquí, bastante, nunca, despacio'], a: 0, why: '«Desde, durante, mediante, hacia» son preposiciones. La segunda opción contiene conjunciones y la tercera, adverbios.' },
        { t: 'tf', q: 'Las palabras «durante» y «mediante» son adverbios de modo y nunca funcionan como preposiciones.', a: false, why: 'Es falso: «durante» (durante el recreo) y «mediante» (mediante un sorteo) forman parte de la lista actual de preposiciones del español.' },
        { t: 'sort', q: 'Clasifica estas palabras invariables en su categoría gramatical.', cats: ['Preposición', 'Conjunción', 'Adverbio'], items: [{ x: 'contra', c: 0 }, { x: 'según', c: 0 }, { x: 'aunque', c: 1 }, { x: 'pero', c: 1 }, { x: 'jamás', c: 2 }, { x: 'lejos', c: 2 }], why: '«Contra» y «según» son preposiciones; «aunque» y «pero» son conjunciones; «jamás» y «lejos» son adverbios.' },
        { t: 'match', q: 'Une cada conjunción con el tipo de relación que expresa.', pairs: [['y, e, ni', 'Copulativa (suma)'], ['o, u', 'Disyuntiva (elección)'], ['pero, sino', 'Adversativa (oposición)'], ['porque', 'Causal (causa o motivo)']], why: 'Las copulativas suman, las disyuntivas plantean alternativas, las adversativas contraponen y las causales explican la razón.' },
        { t: 'choice', q: 'Elige la conjunción correcta: «En el museo vimos esculturas de bronce ___ hierro».', o: ['y', 'e', 'u'], a: 0, why: 'Aunque «hierro» empieza por «hi-», forma diptongo (/ié/) y no suena como la vocal /i/. Por eso se mantiene la conjunción «y» (como en «agua y hielo»).' },
        { t: 'choice', q: 'Elige las conjunciones correctas: «Había siete ___ ocho niñas, todas listas ___ inteligentes».', o: ['u / e', 'o / y', 'u / y'], a: 0, why: '«Ocho» empieza por el sonido /o/, por lo que «o» pasa a «u»; «inteligentes» empieza por el sonido /i/, así que «y» pasa a «e».' },
        { t: 'tf', q: 'En español existen dos contracciones obligatorias entre preposición y artículo: «al» (a + el) y «del» (de + el).', a: true, why: 'Cuando las preposiciones «a» o «de» van seguidas del artículo masculino singular «el», se unen formando «al» y «del».' },
        { t: 'tap', q: 'Caza las dos conjunciones mal elegidas antes de vocal igual.', words: ['Invitamos', 'a', 'Marina', 'y', 'Inés', 'el', 'sábado', 'o', 'hoy.'], wrong: [3, 7], why: 'Ante «Inés» (sonido /i/) debemos usar <b>e</b> («Marina e Inés»), y ante «hoy» (sonido /o/) debemos usar <b>u</b> («el sábado u hoy»).' },
        { t: 'order', q: 'Ordena alfabéticamente estas cinco preposiciones de la lista clásica.', items: ['ante', 'bajo', 'contra', 'desde', 'entre'], why: 'En orden alfabético: ante (a), bajo (b), contra (c), desde (d), entre (e).' },
        { t: 'sort', q: 'Clasifica las siguientes conjunciones según su clase.', cats: ['Copulativas', 'Disyuntivas', 'Adversativas'], items: [{ x: 'ni', c: 0 }, { x: 'e', c: 0 }, { x: 'o', c: 1 }, { x: 'u', c: 1 }, { x: 'pero', c: 2 }, { x: 'sino', c: 2 }], why: '«Ni» y «e» suman (copulativas); «o» y «u» dan opción (disyuntivas); «pero» y «sino» oponen ideas (adversativas).' },
        { t: 'choice', q: '¿Qué diferencia hay entre «No fui al cine, sino al teatro» y «Si no estudias, no aprobarás»?', o: ['«Sino» junto es conjunción adversativa; «si no» separado es condicional más negación', 'Significan exactamente lo mismo', '«Sino» junto es condicional y «si no» separado es adversativo'], a: 0, why: '«Sino» (una palabra) contrapone una idea afirmativa a una negativa anterior; «si no» (dos palabras) introduce una condición negativa (puedes meter un sujeto en medio: «si tú no estudias»).' },
        { t: 'num', q: '¿Cuántas preposiciones hay en la oración «Viajamos en tren desde Zaragoza hasta Teruel con mis primos»?', a: 4, why: 'Hay 4 preposiciones: «en», «desde», «hasta» y «con».' }
      ]
    },
    {
      title: 'Conectores y cohesión del texto',
      intro: [
        { i: '🧩', h: '¿Qué es la cohesión?', p: 'Un texto tiene <b>cohesión</b> cuando sus oraciones y párrafos están bien enlazados. Los <b>conectores discursivos</b> son las piezas que guían al lector y muestran la relación lógica entre las ideas.' },
        { i: '🚦', h: 'Tipos de conectores según su función', p: '<b>Orden</b>: en primer lugar, después, por último.<br><b>Adición</b> (añadir): además, asimismo, también.<br><b>Contraste u oposición</b>: sin embargo, no obstante, en cambio.<br><b>Causa</b>: porque, ya que, puesto que.<br><b>Consecuencia</b>: por lo tanto, por consiguiente, así que.' },
        { i: '🎯', h: 'Elegir el conector exacto', p: 'Usar un conector equivocado rompe el sentido: si la segunda idea es la <b>consecuencia</b> de la primera, usamos <i>por lo tanto</i>; si <b>contradice</b> lo esperado, usamos <i>sin embargo</i>.' }
      ],
      ex: [
        { t: 'choice', q: 'Completa con el conector lógico adecuado: «Había mucha niebla en la carretera; ___, el autobús redujo la velocidad».', o: ['por lo tanto', 'sin embargo', 'en primer lugar'], a: 0, why: 'Reducir la velocidad es la consecuencia lógica de que haya niebla, así que corresponde un conector consecutivo: «por lo tanto».' },
        { t: 'choice', q: 'Completa: «Entrenaron muchísimo durante toda la semana; ___, no lograron clasificarse para la final».', o: ['sin embargo', 'por consiguiente', 'puesto que'], a: 0, why: 'No clasificarse contradice lo que cabría esperar tras entrenar mucho; hace falta un conector de contraste u oposición: «sin embargo».' },
        { t: 'match', q: 'Une cada conector con la relación lógica que establece en un texto.', pairs: [['Además / Asimismo', 'Adición (añadir información)'], ['Sin embargo / No obstante', 'Contraste u oposición'], ['Ya que / Puesto que', 'Causa (explicar el motivo)'], ['Por lo tanto / En consecuencia', 'Consecuencia (efecto)'] ], why: 'Cada familia de conectores señala al lector si vamos a sumar un argumento, oponer una idea, dar la causa o extraer la conclusión.' },
        { t: 'sort', q: 'Clasifica estos conectores según su función en el párrafo.', cats: ['Ordenar el texto', 'Contraste', 'Consecuencia'], items: [{ x: 'en primer lugar', c: 0 }, { x: 'para terminar', c: 0 }, { x: 'no obstante', c: 1 }, { x: 'en cambio', c: 1 }, { x: 'por consiguiente', c: 2 }, { x: 'así pues', c: 2 }], why: '«En primer lugar» y «para terminar» estructuran el orden; «no obstante» y «en cambio» oponen; «por consiguiente» y «así pues» expresan consecuencia.' },
        { t: 'order', q: 'Ordena las cuatro frases de esta receta para que los conectores de orden tengan sentido.', items: ['En primer lugar, lava y pela las manzanas.', 'A continuación, córtalas en láminas finas.', 'Después, colócalas sobre la masa en el molde.', 'Por último, hornea la tarta durante media hora.'], why: 'Los conectores organizan la secuencia temporal: «En primer lugar» abre, «A continuación» y «Después» desarrollan, y «Por último» cierra.' },
        { t: 'tf', q: 'El conector «ya que» introduce la causa o el motivo de lo que se acaba de afirmar.', a: true, why: 'Por ejemplo: «Lleva abrigo, ya que hace frío». Equivale a «porque» o «puesto que».' },
        { t: 'tf', q: '«Sin embargo» y «por lo tanto» significan lo mismo y pueden intercambiarse siempre.', a: false, why: '«Sin embargo» indica oposición o contraste, mientras que «por lo tanto» introduce una consecuencia lógica.' },
        { t: 'tap', q: 'En este párrafo hay dos conectores que rompen el sentido lógico. ¡Cázalos!', words: ['Planteamos', 'el', 'huerto', 'escolar:', 'por', 'último', 'preparamos', 'la', 'tierra', 'y', 'sembramos;', 'regamos', 'cada', 'día,', 'sin', 'embargo', 'brotaron', 'las', 'plantas.'], wrong: [5, 15], why: 'Al empezar no puede ir «por <b>último</b>» (debería ser «en primer lugar»), y que broten las plantas tras regar es una consecuencia («por lo tanto»), no una oposición («sin <b>embargo</b>»).' },
        { t: 'choice', q: '¿Qué conector sirve para añadir un nuevo argumento a favor de la misma idea?', o: ['Además', 'No obstante', 'Aunque'], a: 0, why: '«Además» es un conector de adición: suma una idea en la misma dirección argumentativa. «No obstante» y «aunque» introducen oposición.' },
        { t: 'choice', q: 'Completa la oración: «Se suspendió la excursión al Moncayo ___ habían anunciado fuertes rachas de cierzo».', o: ['puesto que', 'en cambio', 'por último'], a: 0, why: 'El anuncio de cierzo fuerte es la causa de suspender la excursión, por lo que se necesita el conector causal «puesto que».' },
        { t: 'order', q: 'Ordena las partes de este argumento para que tenga coherencia y cohesión.', items: ['La biblioteca del colegio tiene pocos libros de misterio;', 'además, muchos ejemplares están estropeados;', 'por lo tanto, proponemos comprar novedades este trimestre.'], why: 'Primero se expone el primer motivo, luego se suma otro con «además» y finalmente se extrae la conclusión con «por lo tanto».' },
        { t: 'choice', q: '¿Cómo se distingue «por qué» (interrogativo) de «porque» (conjunción causal)?', o: ['«Por qué» sirve para preguntar y «porque» para responder dando la causa', '«Porque» sirve para preguntar y «por qué» para responder', 'Se escriben igual en todos los casos'], a: 0, why: 'Preguntamos con «¿Por qué no viniste?» (dos palabras y con tilde) y respondemos dando la causa con «Porque estaba enferma» (una palabra y sin tilde).' }
      ]
    }
  ]
});

})();
/* ---- m06.js ---- */
(function(){
Adv.register(6, {
  stations: [
    {
      title: 'Oración, sujeto y predicado',
      intro: [
        { i: '💬', h: 'Enunciado: oración y frase', p: 'Un <b>enunciado</b> es un mensaje con sentido completo. Si tiene al menos un <b>verbo en forma personal</b>, es una <b>oración</b> (<i>El cierzo sopla fuerte</i>). Si no tiene verbo, es una <b>frase</b> o enunciado no oracional (<i>¡Qué alegría!</i>, <i>Buenas tardes</i>).' },
        { i: '⚖️', h: 'Sujeto y predicado: la prueba de la concordancia', p: 'El <b>sujeto</b> nombra a quien realiza o protagoniza la acción, y su núcleo (sustantivo o pronombre) <b>concuerda en número y persona</b> con el verbo del <b>predicado</b>: si cambias el verbo de singular a plural, el sujeto cambia con él (<i><u>El perro</u> ladra → <u>Los perros</u> ladran</i>).' },
        { i: '👻', h: 'Sujeto léxico y sujeto omitido (o elíptico)', p: 'El <b>sujeto léxico</b> está escrito en la oración (<i><u>Inés</u> lee</i>). El <b>sujeto omitido</b> no aparece escrito, pero se deduce por la desinencia del verbo (<i>Llegaremos pronto</i> → sujeto omitido: <b>nosotros/as</b>).' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué diferencia hay entre una oración y una frase (enunciado no oracional)?', o: ['La oración tiene un verbo conjugado y la frase no tiene verbo', 'La frase siempre es más larga que la oración', 'La oración nunca lleva signos de exclamación'], a: 0, why: 'La presencia de un verbo en forma personal es lo que convierte un enunciado en oración («¡Ven aquí!» es oración; «¡Enhorabuena!» es frase).' },
        { t: 'sort', q: 'Clasifica estos enunciados según sean oraciones o frases.', cats: ['Oración (con verbo)', 'Frase (sin verbo)'], items: [{ x: '¡Silencio en la sala!', c: 1 }, { x: '¡Callaos ahora mismo!', c: 0 }, { x: 'Buenos días a todas.', c: 1 }, { x: 'El tren sale a las ocho.', c: 0 }, { x: '¡Qué frío tan intenso!', c: 1 }, { x: 'Hoy nieva en Jaca.', c: 0 }], why: '«Callaos», «sale» y «nieva» son verbos conjugados (oraciones). Los otros tres enunciados carecen de verbo (frases).' },
        { t: 'choice', q: '¿Cuál es el sujeto de la oración «A mi hermana le encantan las novelas de misterio»?', o: ['las novelas de misterio', 'A mi hermana', 'le'], a: 0, why: 'Si pasamos «encantan» a singular («encanta»), vemos qué cambia obligatoriamente: «le encanta la novela de misterio». Además, ningún sujeto puede empezar por la preposición «a».' },
        { t: 'tf', q: 'El sujeto de una oración nunca puede ir introducido por la preposición «a».', a: true, why: 'Un sintagma que empieza por «a» («a mi hermana», «a los niños») puede ser complemento directo o indirecto, pero jamás sujeto.' },
        { t: 'choice', q: '¿Cuál es el sujeto omitido de la oración «Mañana subiréis al castillo de Loarre»?', o: ['Vosotros o vosotras (2.ª persona del plural)', 'Ellos o ellas (3.ª persona del plural)', 'Nosotros o nosotras (1.ª persona del plural)'], a: 0, why: 'La forma verbal «subiréis» está en 2.ª persona del plural del futuro de indicativo, por lo que concuerda con el pronombre «vosotros/as».' },
        { t: 'match', q: 'Une cada oración con su sujeto correspondiente.', pairs: [['Por la mañana cantan los pájaros.', 'los pájaros'], ['En la mochila llevo mi bocadillo.', 'Sujeto omitido: yo'], ['Esos árboles antiguos dan mucha sombra.', 'Esos árboles antiguos'], ['¿Vendrás a la fiesta el sábado?', 'Sujeto omitido: tú']], why: 'El sujeto puede ir al final («los pájaros»), al principio («Esos árboles antiguos») o estar omitido según la persona del verbo («llevo» → yo, «vendrás» → tú).' },
        { t: 'tap', q: 'Toca únicamente el NÚCLEO del sujeto (una sola palabra) en esta oración.', words: ['La', 'hermana', 'mayor', 'de', 'Lucía', 'ganó', 'el', 'torneo', 'de', 'ajedrez.'], wrong: [1], why: 'El sujeto completo es «La hermana mayor de Lucía», y su palabra principal (el sustantivo que concuerda con «ganó») es el núcleo: <b>hermana</b>.' },
        { t: 'order', q: 'Ordena estos elementos para construir una oración siguiendo el orden: Sujeto + Verbo + Complemento.', items: ['Las alumnas de sexto', 'prepararon', 'una exposición excelente.'], why: '«Las alumnas de sexto» es el sujeto (concuerda en 3.ª persona del plural con «prepararon») y «prepararon una exposición excelente» es el predicado.' },
        { t: 'tf', q: 'El sujeto de una oración siempre tiene que ir colocado al principio de la frase.', a: false, why: 'El sujeto puede aparecer al principio, en medio o al final: en «Ayer llegaron mis primos», el sujeto «mis primos» está al final.' },
        { t: 'sort', q: 'Clasifica estas oraciones según tengan sujeto léxico (expreso) o sujeto omitido.', cats: ['Sujeto léxico', 'Sujeto omitido'], items: [{ x: 'El río Ebro pasa por Zaragoza.', c: 0 }, { x: 'Encontramos una pista secreta.', c: 1 }, { x: 'En el tejado duerme el gato.', c: 0 }, { x: '¿Habéis traído las acuarelas?', c: 1 }, { x: 'Llegaron tarde los invitados.', c: 0 }, { x: 'Siempre desayuno fruta fresca.', c: 1 }], why: '«El río Ebro», «el gato» y «los invitados» están escritos en la oración. En las otras tres el sujeto se deduce del verbo (nosotros, vosotros, yo).' },
        { t: 'choice', q: '¿Cuál es el núcleo del predicado en la oración «Mis amigas entrenan en el polideportivo»?', o: ['entrenan', 'polideportivo', 'amigas'], a: 0, why: 'El núcleo del predicado verbal es siempre el verbo conjugado, en este caso «entrenan». «Amigas» es el núcleo del sujeto.' },
        { t: 'tap', q: 'En la oración «Ayer cayeron dos hojas secas del árbol», toca las tres palabras que forman el sujeto completo.', words: ['Ayer', 'cayeron', 'dos', 'hojas', 'secas', 'del', 'árbol.'], wrong: [2, 3, 4], why: 'Si cambiamos el verbo a singular («cayó»), cambia «una hoja seca»: por tanto, el sujeto es <b>dos hojas secas</b>.' }
      ]
    },
    {
      title: 'Predicado nominal y predicado verbal',
      intro: [
        { i: '🪞', h: 'Predicado nominal (PN): ser, estar y parecer', p: 'Lleva un <b>verbo copulativo</b> (<b>ser, estar</b> o <b>parecer</b>) que sirve de puente entre el sujeto y una cualidad o estado llamado <b>atributo</b>: <i>La sopa está <u>caliente</u></i>, <i>Marta es <u>ingeniera</u></i>.' },
        { i: '🧪', h: 'Cómo reconocer el atributo', p: 'El <b>atributo</b> acompaña a un verbo copulativo, concuerda con el sujeto si es adjetivo o sustantivo, y se puede sustituir por el pronombre neutro invariable <b>lo</b>: <i>Marta es ingeniera → Marta <b>lo</b> es</i>.' },
        { i: '🏃', h: 'Predicado verbal (PV) y casos especiales', p: 'Tiene como núcleo un <b>verbo predicativo</b> (cualquier verbo distinto de ser, estar o parecer: <i>correr, leer, saltar</i>). ¡Ojo! Cuando <i>estar</i> indica solo lugar (<i>Marta está en Huesca</i>) o <i>ser</i> significa «suceder/celebrarse» (<i>El concierto es mañana</i>), no llevan atributo.' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuáles son los tres verbos copulativos del español?', o: ['Ser, estar y parecer', 'Haber, tener y hacer', 'Ir, venir y volver'], a: 0, why: 'Los verbos copulativos son «ser», «estar» y «parecer»; unen el sujeto con un atributo y forman el predicado nominal.' },
        { t: 'choice', q: '¿Qué función sintáctica desempeña «muy cansadas» en «Las jugadoras parecían muy cansadas»?', o: ['Atributo', 'Complemento directo', 'Sujeto'], a: 0, why: 'Va con el verbo copulativo «parecían», expresa un estado del sujeto «Las jugadoras» y puede sustituirse por «lo»: «Las jugadoras lo parecían».' },
        { t: 'tf', q: 'El atributo se puede sustituir por el pronombre neutro «lo» aunque el sujeto sea femenino o plural.', a: true, why: 'Decimos «Ellas son simpáticas → Ellas lo son» y «Los niños están contentos → Los niños lo están»: el pronombre «lo» que sustituye al atributo es invariable.' },
        { t: 'sort', q: 'Clasifica estas oraciones según tengan Predicado Nominal (con atributo) o Predicado Verbal.', cats: ['Predicado Nominal (PN)', 'Predicado Verbal (PV)'], items: [{ x: 'El cielo está despejado.', c: 0 }, { x: 'Mi tía es arquitecta.', c: 0 }, { x: 'Ese perro parece tranquilo.', c: 0 }, { x: 'El autobús llegó puntual.', c: 1 }, { x: 'Clara escribió un poema.', c: 1 }, { x: 'Los vencejos vuelan alto.', c: 1 }], why: 'Las tres primeras llevan verbos copulativos (está, es, parece) con atributo; las tres últimas tienen verbos predicativos (llegó, escribió, vuelan).' },
        { t: 'match', q: 'Une cada oración de predicado nominal con su atributo.', pairs: [['Esas montañas son altísimas.', 'altísimas'], ['El agua del río estaba helada.', 'helada'], ['Tu hermano parece un actor.', 'un actor'], ['Aquellas mochilas son de tela.', 'de tela']], why: 'El atributo puede ser un adjetivo («altísimas», «helada»), un grupo nominal («un actor») o un grupo preposicional («de tela»).' },
        { t: 'choice', q: 'En la oración «Mis abuelos están en Teruel», ¿qué función tiene «en Teruel»?', o: ['Complemento circunstancial de lugar (no es atributo)', 'Atributo', 'Complemento directo'], a: 0, why: 'Aquí «están» significa «se encuentran en un lugar» y no atribuye ninguna cualidad (no podemos decir *«Mis abuelos lo están»); «en Teruel» indica dónde están (CCL).' },
        { t: 'tf', q: 'En la oración «La médica curó al paciente», el predicado es nominal.', a: false, why: 'El verbo «curó» (curar) es un verbo predicativo con significado pleno, por lo que forma un predicado verbal.' },
        { t: 'order', q: 'Ordena las palabras para formar una oración con predicado nominal (Sujeto + Verbo copulativo + Atributo).', items: ['Las', 'tardes', 'de', 'otoño', 'son', 'frescas.'], why: '«Las tardes de otoño» es el sujeto, «son» es el verbo copulativo y «frescas» es el atributo que concuerda en femenino plural.' },
        { t: 'tap', q: 'Toca las dos palabras que forman el atributo en la oración «El nuevo compañero parece muy amable».', words: ['El', 'nuevo', 'compañero', 'parece', 'muy', 'amable.'], wrong: [4, 5], why: 'Tras el verbo copulativo «parece», el grupo adjetival <b>muy amable</b> expresa la cualidad del sujeto («El nuevo compañero lo parece»).' },
        { t: 'choice', q: 'Si sustituimos el atributo por el pronombre «lo» en «Las naranjas están dulces», ¿qué oración obtenemos?', o: ['Las naranjas lo están.', 'Las naranjas las están.', 'Las naranjas le están.'], a: 0, why: 'El atributo siempre se pronominaliza con el neutro invariable «lo» («Las naranjas lo están»), nunca con «las» ni «le».' },
        { t: 'tap', q: 'En «Sara compró flores y la tienda estaba preciosa», toca el único verbo copulativo.', words: ['Sara', 'compró', 'flores', 'y', 'la', 'tienda', 'estaba', 'preciosa.'], wrong: [6], why: '«Compró» es un verbo predicativo, mientras que <b>estaba</b> (del verbo estar) es copulativo y va seguido del atributo «preciosa».' },
        { t: 'choice', q: '¿Cuál de estas tres oraciones tiene un atributo?', o: ['El examen de hoy fue fácil.', 'El tren partió de la estación.', 'Nosotros caminamos por el bosque.'], a: 0, why: '«Fue» (verbo ser) une el sujeto «El examen de hoy» con el atributo «fácil» («El examen lo fue»).' }
      ]
    },
    {
      title: 'CD, CI y complementos circunstanciales',
      intro: [
        { i: '🎯', h: 'Complemento Directo (CD)', p: 'Completa a un verbo predicativo. Va sin preposición o con <b>a</b> si es de persona. Se reconoce sustituyéndolo por los pronombres <b>lo, la, los, las</b>: <i>Leí <u>la novela</u> → <b>La</b> leí</i>; <i>Vi <u>a Eva</u> → <b>La</b> vi</i>.' },
        { i: '🎁', h: 'Complemento Indirecto (CI)', p: 'Indica el destinatario de la acción. Va introducido por la preposición <b>a</b> y se sustituye por <b>le</b> o <b>les</b> (que cambia a <b>se</b> si va delante de lo/la/los/las): <i>Entregué el paquete <u>a Luis</u> → <b>Le</b> entregué el paquete → <b>Se</b> lo entregué</i>.' },
        { i: '🧭', h: 'Complementos Circunstanciales (CC)', p: 'Expresan las circunstancias de la acción:<br><b>CCL</b> (lugar, ¿dónde?): <i>en el parque</i>.<br><b>CCT</b> (tiempo, ¿cuándo?): <i>ayer</i>.<br><b>CCM</b> (modo, ¿cómo?): <i>con cuidado</i>.<br><b>CCCant</b> (cantidad, ¿cuánto?): <i>mucho</i>.<br><b>CCComp</b> (compañía, ¿con quién?) e <b>CCI</b> (instrumento, ¿con qué?).' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué función tiene «un castillo de arena» en «Los niños construyeron un castillo de arena»?', o: ['Complemento directo (CD)', 'Complemento indirecto (CI)', 'Atributo'], a: 0, why: 'Acompaña a un verbo predicativo («construyeron») y se sustituye por el pronombre «lo»: «Los niños lo construyeron».' },
        { t: 'choice', q: '¿Qué función desempeña «a su abuela» en «Paula escribió una postal a su abuela»?', o: ['Complemento indirecto (CI)', 'Complemento directo (CD)', 'Sujeto'], a: 0, why: '«Una postal» es el CD («Paula la escribió») y «a su abuela» es la destinataria (CI), sustituible por «le»: «Paula le escribió una postal».' },
        { t: 'choice', q: 'En la oración «Ayer saludé a mi vecina en la plaza», ¿qué función tiene «a mi vecina»?', o: ['Complemento directo (CD) de persona', 'Sujeto', 'Complemento circunstancial de compañía'], a: 0, why: 'Los CD que se refieren a personas llevan la preposición «a». Lo comprobamos sustituyéndolo por «la»: «Ayer la saludé en la plaza» (y en pasiva: «Mi vecina fue saludada por mí»).' },
        { t: 'tf', q: 'Cuando sustituimos a la vez el CI («le/les») y el CD («lo/la/los/las»), el pronombre «le» se convierte en «se» (como en «Se lo regalé»).', a: true, why: 'Para evitar el sonido de *«le lo regalé», en español «le/les» cambia a «se» delante de «lo, la, los, las»: «Regalé el libro a Marta → Se lo regalé».' },
        { t: 'match', q: 'Une cada complemento destacado con su función sintáctica en «El chef cortó el queso con un cuchillo por la mañana en la cocina».', pairs: [['el queso', 'Complemento directo (CD)'], ['con un cuchillo', 'CC de instrumento (CCI)'], ['por la mañana', 'CC de tiempo (CCT)'], ['en la cocina', 'CC de lugar (CCL)']], why: '«El queso» es el CD («lo cortó»); «con un cuchillo» es el instrumento; «por la mañana» indica cuándo; «en la cocina», dónde.' },
        { t: 'sort', q: 'Clasifica los complementos circunstanciales destacados en cada oración.', cats: ['CC de Lugar (CCL)', 'CC de Tiempo (CCT)', 'CC de Modo (CCM)'], items: [{ x: 'Aparcamos <b>detrás del teatro</b>.', c: 0 }, { x: 'Viven <b>en Calatayud</b>.', c: 0 }, { x: 'Llegaremos <b>esta tarde</b>.', c: 1 }, { x: 'El curso empieza <b>en septiembre</b>.', c: 1 }, { x: 'Resolvió el reto <b>con paciencia</b>.', c: 2 }, { x: 'Nos escuchó <b>atentamente</b>.', c: 2 }], why: '«Detrás del teatro» y «en Calatayud» responden a ¿dónde? (CCL); «esta tarde» y «en septiembre», a ¿cuándo? (CCT); «con paciencia» y «atentamente», a ¿cómo? (CCM).' },
        { t: 'sort', q: 'Distingue el tipo de complemento circunstancial en estas oraciones con la preposición «con».', cats: ['CC de Compañía', 'CC de Instrumento', 'CC de Modo'], items: [{ x: 'Fui al cine <b>con mis primas</b>.', c: 0 }, { x: 'Viajó <b>con su profesora</b>.', c: 0 }, { x: 'Abrió la puerta <b>con la llave</b>.', c: 1 }, { x: 'Pintó el cuadro <b>con un pincel fino</b>.', c: 1 }, { x: 'Habla <b>con mucha educación</b>.', c: 2 }, { x: 'Trabaja <b>con entusiasmo</b>.', c: 2 }], why: 'Con personas es compañía (¿con quién?); con objetos o herramientas es instrumento (¿con qué?); con sustantivos abstractos equivale a un adverbio de modo (educadamente, entusiasmadamente).' },
        { t: 'order', q: 'Ordena estos constituyentes siguiendo el esquema: CCT + Sujeto + Verbo + CD + CI.', items: ['Ayer', 'el bibliotecario', 'prestó', 'un atlas', 'a los alumnos.'], why: '«Ayer» (CCT) + «el bibliotecario» (Sujeto) + «prestó» (Verbo) + «un atlas» (CD, lo prestó) + «a los alumnos» (CI, les prestó un atlas).' },
        { t: 'tap', q: 'En «Mi abuelo preparó una tortilla exquisita a sus nietos el domingo», toca las tres palabras que forman el Complemento Directo (CD).', words: ['Mi', 'abuelo', 'preparó', 'una', 'tortilla', 'exquisita', 'a', 'sus', 'nietos', 'el', 'domingo.'], wrong: [3, 4, 5], why: '<b>Una tortilla exquisita</b> es el CD porque se sustituye por el pronombre femenino singular «la»: «Mi abuelo la preparó a sus nietos el domingo».' },
        { t: 'tf', q: 'Una misma oración simple puede tener varios complementos circunstanciales a la vez.', a: true, why: 'Sí: en «Ayer (CCT) estudiamos mucho (CCCant) en la biblioteca (CCL) con mis amigas (CCComp)» hay cuatro complementos circunstanciales distintos.' },
        { t: 'choice', q: 'Sustituye el CD y el CI por pronombres en «Elena explicó las normas a los participantes».', o: ['Elena se las explicó.', 'Elena les lo explicó.', 'Elena la explicó.'], a: 0, why: '«Las normas» (CD femenino plural) pasa a «las», y «a los participantes» (CI) pasa de «les» a «se» delante de «las»: «Elena se las explicó».' },
        { t: 'tap', q: 'Toca las tres palabras que forman el Complemento Indirecto (CI) en esta oración.', words: ['El', 'árbitro', 'mostró', 'la', 'tarjeta', 'amarilla', 'al', 'delantero', 'visitante.'], wrong: [6, 7, 8], why: '«La tarjeta amarilla» es el CD («la mostró») y <b>al delantero visitante</b> es el CI, sustituible por «le» («El árbitro le mostró la tarjeta amarilla»).' }
      ]
    }
  ]
});

})();
/* ---- m07.js ---- */
(function(){
Adv.register(7, {
  stations: [
    {
      title: 'Reglas de la B/V y de la G/J',
      intro: [
        { i: '🅱️', h: 'Cuándo escribimos B y cuándo V', p: 'Con <b>B</b>: grupos <b>bl-, br-</b> y tras <b>m</b> (<i>cambio</i>); pasado en <b>-aba</b> (<i>cantaba</i>); verbos en <b>-bir/-buir</b> (salvo <i>hervir, servir, vivir</i>); prefijos <b>bi-, biblio-, bio-</b> y adjetivos en <b>-ble/-bundo</b>.<br>Con <b>V</b>: tras <b>n, d, b</b> (<i>enviar, advertir</i>); adjetivos llanos en <b>-ava, -ave, -avo, -eva, -eve, -evo, -iva, -ivo</b>; y pasados con <b>-uv-</b> (<i>estuve, tuve, anduve</i>).' },
        { i: '🦒', h: 'Cuándo escribimos G y cuándo J', p: 'Con <b>G</b>: prefijo <b>geo-</b>, grupo <b>gen</b> (<i>gente</i>), finales en <b>-gia, -gio, -gión</b> y verbos en <b>-ger, -gir</b> (salvo <i>tejer</i> y <i>crujir</i>). Ante <i>e, i</i> suena suave con <b>gu</b> (<i>guerra</i>) o con <b>diéresis</b> si suena la <i>u</i> (<i>pingüino</i>).<br>Con <b>J</b>: palabras terminadas en <b>-aje, -eje, -jería</b> (<i>viaje, relojería</i>) y formas de verbos sin g ni j en el infinitivo (<i>decir → dije, traer → traje</i>).' }
      ],
      ex: [
        { t: 'choice', q: '¿Por qué «hervir», «servir» y «vivir» se escriben con V si terminan en -ir?', o: ['Son las tres únicas excepciones a la regla de los verbos terminados en -bir', 'Porque todas las palabras que empiezan por h o s llevan v', 'Porque están en pretérito imperfecto'], a: 0, why: 'Todos los verbos acabados en -bir (escribir, recibir, subir, prohibir) se escriben con b, excepto «hervir», «servir» y «vivir» (y sus compuestos).' },
        { t: 'sort', q: 'Clasifica estas palabras según se escriban con B o con V.', cats: ['Con B', 'Con V'], items: [{ x: 'escribir', c: 0 }, { x: 'amable', c: 0 }, { x: 'saltábamos', c: 0 }, { x: 'hervir', c: 1 }, { x: 'creativo', c: 1 }, { x: 'estuvimos', c: 1 }], why: 'Con B: «escribir» (-bir), «amable» (-ble) y «saltábamos» (-aba-). Con V: «hervir» (excepción), «creativo» (adjetivo en -ivo) y «estuvimos» (pretérito de estar).' },
        { t: 'tf', q: 'El pretérito perfecto simple del verbo «andar» es «anduve, anduviste, anduvo», con V, pero el pretérito imperfecto es «andaba», con B.', a: true, why: 'En imperfecto de indicativo (1.ª conjugación) siempre va con B («andaba»), y en pretérito perfecto simple lleva el grupo -uv- con V («anduve», igual que «estuve» y «tuve»).' },
        { t: 'choice', q: '¿Cuáles son las dos excepciones a la regla de los verbos terminados en «-ger» y «-gir»?', o: ['tejer y crujir', 'coger y elegir', 'proteger y dirigir'], a: 0, why: 'Los verbos acabados en -ger y -gir se escriben con G (proteger, dirigir, recoger, elegir), salvo las dos excepciones: «tejer» y «crujir».' },
        { t: 'tap', q: 'Caza las dos palabras con faltas de ortografía en el uso de B/V y G/J.', words: ['En', 'aquel', 'viage', 'observamos', 'un', 'pájaro', 'muy', 'activo', 'que', 'hibernava', 'en', 'la', 'cueva.'], wrong: [2, 9], why: 'Las palabras terminadas en -aje se escriben con J (<b>viaje</b>) y los pretéritos imperfectos de la 1.ª conjugación terminan en -aba con B (<b>hibernaba</b>).' },
        { t: 'sort', q: 'Clasifica estas palabras según lleven G o J.', cats: ['Se escribe con G', 'Se escribe con J'], items: [{ x: 'geografía', c: 0 }, { x: 'recoger', c: 0 }, { x: 'origen', c: 0 }, { x: 'equipaje', c: 1 }, { x: 'crujir', c: 1 }, { x: 'conduje', c: 1 }], why: 'Con G: prefijo «geo-», verbo en «-ger» y grupo «gen». Con J: sustantivo en «-aje», excepción «crujir» y pasado «conduje» (de conducir, sin g ni j).' },
        { t: 'match', q: 'Une cada palabra con la regla ortográfica que explica cómo se escribe.', pairs: [['biblioteca', 'Empieza por el elemento «biblio-» (libro)'], ['suave', 'Adjetivo llano terminado en «-ave»'], ['relojería', 'Sustantivo terminado en «-jería»'], ['pingüino', 'Lleva diéresis (ü) para que suene la u en «güi»']], why: 'Cada terminación o prefijo responde a una regla fija de B, V, J o G con diéresis.' },
        { t: 'choice', q: '¿Cómo se escribe la primera persona del presente de indicativo del verbo «proteger»?', o: ['Yo protejo (con j)', 'Yo protego (con g)', 'Yo proteguo (con gu)'], a: 0, why: 'Ante la vocal «o», la G suena suave (/go/); para mantener el sonido fuerte /j/ del infinitivo «proteger», cambiamos la G por J ante «o» y «a»: «protejo, proteja».' },
        { t: 'tf', q: 'Después de la consonante N se escribe siempre B (como en «inbierno» o «enbiar»).', a: false, why: 'Es falso: después de M se escribe B (cambio, tambor), pero después de N y de D se escribe siempre V (<b>invierno</b>, <b>enviar</b>, <b>advertir</b>).' },
        { t: 'order', q: 'Ordena las sílabas para formar un adjetivo terminado en «-bundo» (siempre con B).', items: ['va', 'ga', 'bun', 'do'], why: 'Los adjetivos terminados en «-bundo» y «-bunda» (vagabundo, meditabundo, furibundo) se escriben siempre con B.' },
        { t: 'tap', q: 'Localiza las dos palabras mal escritas en esta oración.', words: ['Mi', 'prima', 'trajó', 'el', 'paragüas', 'y', 'nos', 'contó', 'una', 'leyenda', 'antigua.'], wrong: [2, 4], why: '«Trajo» es llana acabada en vocal (no lleva tilde: <b>trajo</b>) y en «paraguas» la sílaba es «gua», donde la U ya suena sola sin diéresis (<b>paraguas</b>; la diéresis solo se usa en «güe, güi»).' },
        { t: 'choice', q: 'Completa la frase: «Ayer ___ que esperar a que ___ el agua para la infusión».', o: ['tuve / hirviera', 'tube / hirbiera', 'tuve / hirbiera'], a: 0, why: '«Tuve» lleva V por ser el pretérito perfecto simple de «tener» (-uv-), y «hirviera» lleva V porque procede del verbo «hervir», excepción de los terminados en -bir.' }
      ]
    },
    {
      title: 'La H, la LL/Y y la X/S',
      intro: [
        { i: '🤫', h: 'Los secretos de la H', p: 'Se escriben con <b>H</b>: palabras que empiezan por los diptongos <b>hie-, hue-, hui-</b> (<i>hielo, hueso, huida</i>); prefijos <b>hidr-</b> (agua), <b>hiper-</b> (grande), <b>hipo-</b> (debajo/caballo), <b>hemi-</b> (mitad) y <b>hepta-/hexa-</b>; y todas las formas de <b>haber, hacer, hallar, hablar</b> y <b>habitar</b>.' },
        { i: '🦙', h: 'Reglas de LL / Y y de X / S', p: 'Con <b>LL</b>: terminaciones en <b>-illo, -illa, -alle, -elle, -ullo</b> y verbos en <b>-ellar, -illar, -ullar</b>.<br>Con <b>Y</b>: plurales de palabras acabadas en <i>-y</i> (<i>rey → reyes</i>), tras <i>ad-, dis-, sub-</i> (<i>adyacente</i>) y formas de verbos sin ll ni y en el infinitivo (<i>caer → cayó, leer → leyeron, ir → yendo</i>).<br>Con <b>X</b>: prefijos <b>ex-, extra-</b> y ante <b>pl-, pr-</b> (<i>explicar, exprimir</i>, salvo <i>espléndido</i>).' }
      ],
      ex: [
        { t: 'choice', q: '¿Por qué «huevo» empieza con H y «ovíparo» o «ovalado» se escriben sin H?', o: ['Porque «huevo» empieza por el diptongo «hue-» y en «ovíparo» no hay ese diptongo', 'Porque «ovíparo» procede de otro idioma sin vocales', 'Porque los adjetivos nunca llevan h inicial'], a: 0, why: 'En palabras de la familia de «huevo», «hueso», «hueco» y «huérfano», solo llevan H las formas que tienen el diptongo «hue-»; cuando la raíz pasa a «ov-, os-, oqu-, orf-» (óseo, oquedad, orfanato), se escriben sin H.' },
        { t: 'match', q: 'Une cada homófono con su significado exacto.', pairs: [['ha (verbo haber)', 'Va ante participio: «ha venido»'], ['a (preposición)', 'Va ante infinitivo o sustantivo: «va a venir»'], ['hecho (verbo hacer)', 'Participio: «he hecho la cama»'], ['echo (verbo echar)', 'Presente: «echo la carta al buzón»']], why: 'Truco para «ha / a»: si puedes cambiarlo por «había» («había venido»), es del verbo haber y lleva H. Y «hacer» siempre conserva la H («hecho»), mientras que «echar» nunca la lleva («echo»).' },
        { t: 'sort', q: 'Clasifica estas formas según correspondan a «hay», «ahí» o «¡ay!».', cats: ['hay (verbo haber)', 'ahí (adverbio de lugar)', '¡ay! (interjección)'], items: [{ x: 'En la cesta ___ tres manzanas.', c: 0 }, { x: 'Hoy ___ niebla en el valle.', c: 0 }, { x: 'Deja las llaves ___ encima.', c: 1 }, { x: '___ está el libro que buscabas.', c: 1 }, { x: '___, qué susto me has dado.', c: 2 }, { x: '¡___, me he pinchado un dedo!', c: 2 }], why: '«Hay» es forma impersonal de haber (indica existencia); «ahí» es palabra aguda con tilde que señala un lugar; «¡ay!» expresa dolor o sorpresa.' },
        { t: 'choice', q: '¿Qué diferencia hay entre «valla», «vaya» y «baya»?', o: ['«Valla» es una cerca, «vaya» es del verbo ir y «baya» es un fruto carnoso', '«Vaya» es una cerca, «valla» es del verbo ir y «baya» es un fruto', '«Baya» es una cerca y «valla» es un fruto'], a: 0, why: '«La valla del jardín» (con LL: cerca o obstáculo), «Espero que te vaya bien» (con Y: verbo ir) y «El arándano es una baya» (con B y Y: fruto).' },
        { t: 'sort', q: 'Clasifica estas palabras según se escriban con LL o con Y.', cats: ['Con LL', 'Con Y'], items: [{ x: 'ardilla', c: 0 }, { x: 'muelle', c: 0 }, { x: 'orgullo', c: 0 }, { x: 'leyeron', c: 1 }, { x: 'proyectar', c: 1 }, { x: 'reyes', c: 1 }], why: 'Con LL: terminaciones -illa, -elle y -ullo. Con Y: «leyeron» (verbo leer, sin ll ni y), «proyectar» (tras pro-) y «reyes» (plural de rey).' },
        { t: 'tf', q: 'En la oración «El niño se calló y no dijo nada más», el verbo «calló» se escribe con LL porque procede de «callar».', a: true, why: '«Calló» (con LL) es del verbo «callar» (guardar silencio), mientras que «cayó» (con Y) es del verbo «caer» (dar en el suelo).' },
        { t: 'tap', q: 'Caza las dos palabras mal escritas en esta frase.', words: ['Juan', 'se', 'calló', 'de', 'la', 'bicicleta', 'pero', 'no', 'se', 'ha', 'echo', 'daño.'], wrong: [2, 10], why: 'Si se dio un golpe con la bicicleta es del verbo caer, así que se escribe con Y (<b>cayó</b>); y el participio del verbo hacer tras «ha» lleva H (<b>hecho</b>).' },
        { t: 'choice', q: '¿Cuál de estas palabras que tienen el grupo consonántico «pl» se escribe con S y NO con X?', o: ['espléndido', 'explicar', 'explorador'], a: 0, why: 'Aunque ante «pl-» y «pr-» suele escribirse X (explicar, explorar, exprimir), las palabras de la familia de «esplendor» («espléndido», «espliego») se escriben con S.' },
        { t: 'sort', q: 'Clasifica estas palabras según lleven X o S.', cats: ['Con X', 'Con S'], items: [{ x: 'exprimir', c: 0 }, { x: 'extraordinario', c: 0 }, { x: 'oxígeno', c: 0 }, { x: 'espléndido', c: 1 }, { x: 'espontáneo', c: 1 }, { x: 'espectáculo', c: 1 }], why: 'Con X: «exprimir» (ante pr-), «extraordinario» (prefijo extra-) y «oxígeno». Con S: «espléndido», «espontáneo» y «espectáculo».' },
        { t: 'order', q: 'Ordena las sílabas de una palabra que empieza por el prefijo griego «hidro-» (agua) y se escribe con H.', items: ['hi', 'dro', 'a', 'vión'], why: '<b>hi-dro-a-vión</b>: todas las palabras que empiezan por el prefijo «hidr-» o «hidro-» (agua) llevan H inicial.' },
        { t: 'tf', q: 'La palabra «esplanada» se escribe con S porque va delante del grupo «pl-».', a: false, why: 'Se escribe con X (<b>explanada</b>), porque la regla indica que se escribe X delante de los grupos «pl-» y «pr-» (explicar, exprimir, explanada), salvo excepciones como «espléndido».' },
        { t: 'tap', q: 'Caza las dos faltas de ortografía en este mensaje.', words: ['¡Hay,', 'qué', 'alegría', 'ver', 'que', 'ha', 'habido', 'una', 'exposición', 'tan', 'expléndida!'], wrong: [0, 10], why: 'La interjección de emoción se escribe sin H (<b>¡Ay</b>) y el adjetivo de la familia de esplendor se escribe con S (<b>espléndida</b>).' }
      ]
    },
    {
      title: 'Signos de puntuación avanzados',
      intro: [
        { i: '❝', h: 'Las comillas (« ») y los paréntesis ( )', p: 'Las <b>comillas</b> reproducen <b>citas textuales</b>, destacan palabras extranjeras o irónicas y encierran títulos de cuentos, poemas o capítulos.<br>Los <b>paréntesis</b> insertan <b>aclaraciones</b>, fechas, lugares o el significado de una sigla: <i>La ONU (Organización de las Naciones Unidas)</i>.' },
        { i: '…', h: 'Los puntos suspensivos (...) y la raya (—)', p: 'Los <b>puntos suspensivos</b> son <b>exactamente tres (...)</b>: indican que una enumeración queda abierta (equivale a <i>etcétera</i>) o expresan duda, temor o suspense.<br>La <b>raya (—)</b> introduce las intervenciones de un <b>diálogo</b> y encierra los comentarios del narrador (<i>—Ya voy —dijo Ana—. Espérame</i>).' },
        { i: '📏', h: 'Reglas de oro al combinar signos', p: 'Si tras los puntos suspensivos termina la oración, <b>no se añade otro punto</b> (nunca cuatro puntos). Tampoco se escribe nunca «etc.» seguido de puntos suspensivos, porque ambos significan lo mismo.' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuántos puntos forman SIEMPRE el signo de los puntos suspensivos?', o: ['Exactamente tres (...)', 'Entre tres y cinco, según la pausa', 'Cuatro si van al final de una oración'], a: 0, why: 'Los puntos suspensivos son siempre tres (...). Si cierran el enunciado, no se añade un cuarto punto detrás.' },
        { t: 'match', q: 'Une cada signo de puntuación con su función principal.', pairs: [['Comillas (« »)', 'Reproducir literalmente las palabras exactas de alguien'], ['Paréntesis ( )', 'Intercalar un dato aclaratorio como una fecha o una sigla'], ['Puntos suspensivos (...)', 'Dejar una enumeración abierta o crear suspense'], ['Raya (—)', 'Señalar el cambio de interlocutor en un diálogo']], why: 'Cada signo cumple un papel específico para organizar citas, aclaraciones, pausas expresivas o diálogos.' },
        { t: 'tf', q: 'Es correcto escribir al final de una lista: «Compramos peras, manzanas, plátanos, etc...».', a: false, why: 'Tanto «etc.» como los puntos suspensivos «...» indican que la enumeración continúa: usar los dos juntos es una repetición incorrecta (se usa uno u otro, nunca ambos).' },
        { t: 'choice', q: '¿Cuál de estas citas textuales está bien puntuada?', o: ['La guía anunció: «La visita empezará a las diez».', 'La guía anunció: (La visita empezará a las diez).', 'La guía anunció: ...La visita empezará a las diez...'], a: 0, why: 'Las palabras exactas que pronuncia una persona (cita textual) se introducen tras dos puntos y se encierran entre comillas.' },
        { t: 'sort', q: '¿Qué signo usarías en cada caso? Clasifícalos.', cats: ['Comillas (« »)', 'Paréntesis ( )', 'Raya (—)'], items: [{ x: 'Escribir el título de un cuento dentro de un libro', c: 0 }, { x: 'Citar palabra por palabra un refrán popular', c: 0 }, { x: 'Añadir el año de nacimiento y muerte de Goya (1746-1828)', c: 1 }, { x: 'Aclarar qué provincia corresponde a una localidad', c: 1 }, { x: 'Empezar la respuesta de un personaje en un cuento', c: 2 }, { x: 'Encerrar el inciso «—respondió el capitán—» en un diálogo', c: 2 }], why: 'Citas y títulos de partes van entre comillas; fechas y datos precisos van entre paréntesis; diálogos e incisos del narrador van con raya.' },
        { t: 'choice', q: 'En un diálogo teatral o narrativo, ¿cómo se escribe el inciso del narrador cuando el personaje sigue hablando después?', o: ['—No tengas miedo —dijo Lucía—. Todo saldrá bien.', '—No tengas miedo (dijo Lucía). Todo saldrá bien.', '«No tengas miedo» —dijo Lucía— «Todo saldrá bien».'], a: 0, why: 'En los diálogos narrativos se abre con raya (—) y el comentario del narrador con verbo de habla («dijo Lucía») se encierra entre dos rayas, colocando el punto detrás de la segunda raya.' },
        { t: 'tf', q: 'Después de cerrar unos puntos suspensivos, sí se puede escribir una coma, un signo de interrogación o uno de exclamación si la frase lo requiere.', a: true, why: 'Lo único que no se añade tras «...» es otro punto, pero sí pueden ir otros signos: «Ya sabes lo que dicen: en abril...», «¿Me habrán oído...?».' },
        { t: 'order', q: 'Ordena los fragmentos de esta oración para que los paréntesis encierren correctamente la aclaración.', items: ['Francisco de Goya', '(nacido en Fuendetodos en 1746)', 'pintó grabados y tapices', 'de enorme valor artístico.'], why: 'El inciso con el lugar y año de nacimiento va entre paréntesis justo detrás del nombre propio al que aclara.' },
        { t: 'tap', q: 'En esta oración hay dos errores de puntuación y ortografía. ¡Cázalos!', words: ['En', 'la', 'mochila', 'metí', 'linterna,', 'cantimplora,', 'mapa,', 'etc...', 'por', 'si', 'ha', 'caso', 'anochece.'], wrong: [7, 10], why: 'Nunca se combina «etc.» con puntos suspensivos (se escribe <b>etc.</b> o <b>mapa...</b>), y la locución es «por si <b>acaso</b>» (una sola palabra y sin h).' },
        { t: 'choice', q: '¿Qué expresan los puntos suspensivos en la oración «Se acercó despacio a la puerta oscura, giró el pomo y... ¡estaba cerrada!»?', o: ['Suspense, expectación o sorpresa ante lo que viene después', 'Que se ha olvidado el nombre de los objetos de una lista', 'Que es una fecha histórica aclaratoria'], a: 0, why: 'Aquí no hay una enumeración, sino una pausa dramática para crear intriga o sorpresa antes del desenlace.' },
        { t: 'choice', q: '¿Para qué sirven las comillas en la oración «Menudo "orden" tienes hoy en tu escritorio, lleno de papeles por todas partes»?', o: ['Para indicar que la palabra se usa con ironía', 'Para señalar la intervención del narrador en un diálogo', 'Para indicar el año en que ocurrió un suceso'], a: 0, why: 'Las comillas también se emplean para señalar que una palabra se utiliza en sentido irónico o con un significado especial.' },
        { t: 'num', q: 'En el diálogo «—¿Vienes al parque? —preguntó Alba—. Hace una tarde estupenda», ¿cuántas rayas (—) se han utilizado en total?', a: 3, why: 'Se han utilizado 3 rayas: la primera para abrir la intervención de Alba y otras dos para abrir y cerrar el inciso del narrador («—preguntó Alba—»).' }
      ]
    }
  ]
});

})();
/* ---- m08.js ---- */
(function(){
Adv.register(8, {
  stations: [
    {
      title: 'Ideas principales e información implícita',
      intro: [
        { i: '🎯', h: 'Idea principal frente a ideas secundarias', p: 'La <b>idea principal</b> resume el mensaje esencial de un párrafo: si la quitas, el texto pierde el sentido. Las <b>ideas secundarias</b> amplían esa idea con ejemplos, datos, fechas o detalles curiosos.' },
        { i: '🕵️', h: 'Leer entre líneas: información implícita', p: 'Un buen lector no solo capta lo que el texto dice directamente (información <b>explícita</b>), sino también lo que se <b>deduce</b> por las pistas del texto (información <b>implícita</b>).<br>Ejemplo: <i>«Lucía abrió el paraguas al salir»</i> → deducimos que llueve.' },
        { i: '🧶', h: 'Coherencia en el texto', p: 'Un texto tiene <b>coherencia</b> cuando todas sus oraciones tratan del mismo tema, siguen un orden lógico y no se contradicen entre sí.' }
      ],
      ex: [
        { t: 'choice', q: 'Lee: <i>«Las abejas son esenciales para los ecosistemas porque polinizan la mayoría de las plantas con flor. Por ejemplo, un solo colmenar puede visitar millones de flores al día y producir varios kilos de miel»</i>. ¿Cuál es la idea principal?', o: ['Las abejas son esenciales porque polinizan la mayoría de las plantas con flor', 'Un colmenar produce varios kilos de miel', 'Las flores reciben visitas todos los días'], a: 0, why: 'La primera oración expresa el mensaje central; el dato de las flores visitadas y los kilos de miel es un ejemplo secundario.' },
        { t: 'choice', q: 'Lee: <i>«Marcos miró el reloj de la estación, suspiró al ver las vías vacías y se sentó en el banco con su maleta»</i>. ¿Qué información implícita se deduce del texto?', o: ['El tren de Marcos ya se ha marchado o aún no ha llegado', 'Marcos trabaja como maquinista de tren', 'Marcos ha perdido su maleta en el andén'], a: 0, why: 'El reloj, el suspiro, las vías vacías y la maleta son pistas que permiten deducir que está esperando el tren o que acaba de perderlo.' },
        { t: 'tf', q: 'Si eliminamos una idea secundaria de un párrafo, el tema central del texto sigue entendiéndose.', a: true, why: 'Las ideas secundarias aportan detalles o ejemplos; la que resulta imprescindible para el sentido global es la idea principal.' },
        { t: 'tf', q: 'Un buen resumen debe copiar literalmente todos los ejemplos y diálogos del texto original.', a: false, why: 'Resumir consiste en redactar con tus propias palabras solo las ideas principales, dejando fuera los ejemplos y detalles secundarios.' },
        { t: 'sort', q: 'Sobre un texto acerca del quebrantahuesos en el Pirineo, clasifica cada enunciado.', cats: ['Idea principal', 'Idea secundaria (detalle o ejemplo)'], items: [{ x: 'El quebrantahuesos es un ave protegida clave en la fauna del Pirineo', c: 0 }, { x: 'La recuperación de esta especie ha evitado su extinción en la cordillera', c: 0 }, { x: 'Un ejemplar fue avistado el martes cerca de Aínsa a las diez', c: 1 }, { x: 'Sus plumas del pecho suelen teñirse con barro rojizo', c: 1 }, { x: 'En un nido estudiado se contaron cuatro huesos de oveja', c: 1 }], why: 'Las ideas principales recogen la importancia y conservación de la especie; las anécdotas y datos puntuales son ideas secundarias.' },
        { t: 'match', q: 'Une cada pista de un texto con la información implícita que permite deducir.', pairs: [['«Se puso la bufanda, el gorro y los guantes de lana»', 'Hace mucho frío fuera'], ['«Bostezó tres veces y cerró el libro a medianoche»', 'Tiene mucho sueño'], ['«El suelo del patio brillaba lleno de charcos»', 'Acaba de llover'], ['«Aplaudieron puestos en pie cuando bajó el telón»', 'La obra de teatro gustó mucho']], why: 'Inferir consiste en unir las pistas del texto con lo que sabemos del mundo para deducir lo que no se dice literalmente.' },
        { t: 'choice', q: 'Lee: <i>«El cierzo sopla con fuerza en el valle del Ebro. Es un viento seco y fresco que entra desde el noroeste y limpia las nubes del cielo en pocas horas»</i>. ¿Qué dato es EXPLÍCITO en el texto?', o: ['Que el cierzo es un viento seco y fresco del noroeste', 'Que el cierzo solo sopla en los meses de invierno', 'Que a nadie le gusta pasear con cierzo'], a: 0, why: 'La información explícita aparece escrita literalmente en el texto: «viento seco y fresco que entra desde el noroeste».' },
        { t: 'tap', q: 'En este párrafo sobre el ahorro de agua hay UNA palabra que rompe la coherencia porque contradice el sentido. ¡Cázala!', words: ['Para', 'ahorrar', 'agua', 'en', 'casa', 'conviene', 'cerrar', 'el', 'grifo', 'al', 'cepillarse', 'y', 'derrochar', 'cada', 'gota.'], wrong: [12], why: 'Si el párrafo explica cómo ahorrar agua, recomendar «derrochar» contradice el tema; debería decir «aprovechar» o «cuidar».' },
        { t: 'order', q: 'Ordena estos pasos para extraer la idea principal de un texto.', items: ['Leer el texto completo con atención', 'Subrayar las palabras clave de cada párrafo', 'Descartar los ejemplos y detalles secundarios', 'Redactar en una oración breve el mensaje esencial'], why: 'Primero comprendemos el conjunto, luego localizamos lo esencial, filtramos los detalles y finalmente formulamos la idea central.' },
        { t: 'choice', q: 'Lee: <i>«Inés entró en casa con las botas embarradas, dejó la cesta llena de rebollones en la cocina y puso a secar su chubasquero»</i>. ¿De dónde viene Inés?', o: ['Del monte o del bosque, tras buscar setas un día lluvioso', 'De una piscina cubierta en pleno verano', 'De comprar zapatos nuevos en una tienda del centro'], a: 0, why: 'El barro en las botas, los rebollones (setas) en la cesta y el chubasquero mojado indican que viene del monte en un día de lluvia.' },
        { t: 'num', q: 'Lee: <i>«En la excursión al Moncayo iban 3 profesoras, el conductor del autobús y 24 alumnas de sexto»</i>. ¿Cuántas personas viajaban en total en el autobús?', a: 28, u: 'personas', why: 'La lectura atenta exige contar a todos los mencionados: 3 profesoras + 1 conductor + 24 alumnas = 28 personas.' },
        { t: 'choice', q: '¿Qué título resume mejor este texto? <i>«Dormir entre nueve y diez horas a los once años consolida la memoria, mejora la atención en clase y ayuda al crecimiento físico»</i>.', o: ['Los beneficios del sueño en la infancia', 'Cómo decorar un dormitorio juvenil', 'La historia de los relojes despertadores'], a: 0, why: 'Un buen título recoge el tema central: todas las frases hablan de por qué dormir bien beneficia a niñas y niños.' }
      ]
    },
    {
      title: 'Textos narrativos, expositivos y argumentativos',
      intro: [
        { i: '📚', h: 'Tres grandes tipos de texto según su intención', p: '<b>Narrativo</b>: cuenta unos hechos reales o imaginarios que les suceden a unos personajes (planteamiento, nudo y desenlace).<br><b>Expositivo</b>: explica un tema de forma clara y objetiva para informar (libros de texto, enciclopedias).<br><b>Argumentativo</b>: defiende una opinión (<b>tesis</b>) con razones (<b>argumentos</b>).' },
        { i: '✉️', h: 'La carta al director', p: 'Es un texto <b>argumentativo</b> breve que un lector envía a un periódico para expresar su opinión razonada o hacer una propuesta sobre un asunto de interés general. Lleva saludo, exposición del problema, argumentos, propuesta y firma.' },
        { i: '🧱', h: 'Estructura de la exposición y la argumentación', p: 'Un texto <b>expositivo</b> suele ordenarse en <b>introducción</b>, <b>desarrollo</b> y <b>conclusión</b>. En uno <b>argumentativo</b> distinguimos el <b>tema</b>, la <b>tesis</b> (postura que se defiende) y los <b>argumentos</b> (razones que la apoyan).' }
      ],
      ex: [
        { t: 'choice', q: 'Lee: <i>«El lince ibérico es un mamífero carnívoro de la familia de los félidos. Se caracteriza por sus orejas terminadas en un pincel de pelos negros y habita en el bosque mediterráneo»</i>. ¿Qué tipo de texto es?', o: ['Expositivo', 'Narrativo', 'Argumentativo'], a: 0, why: 'Informa de manera objetiva y clara sobre las características de un animal, sin contar una historia ni defender una opinión personal.' },
        { t: 'choice', q: 'Lee: <i>«Considero imprescindible ampliar el carril bici hasta el colegio porque reduciría los atascos a las nueve de la mañana y permitiría al alumnado desplazarse de forma sana y segura»</i>. ¿Qué tipo de texto es?', o: ['Argumentativo', 'Expositivo', 'Narrativo'], a: 0, why: 'Defiende una postura clara (tesis: ampliar el carril bici) apoyándola con dos razones o argumentos (menos atascos y más salud y seguridad).' },
        { t: 'choice', q: 'En el texto anterior sobre el carril bici, ¿cuál es la TESIS que defiende quien escribe?', o: ['Que es necesario ampliar el carril bici hasta el colegio', 'Que a las nueve de la mañana empiezan las clases', 'Que las bicicletas tienen dos ruedas y pedales'], a: 0, why: 'La tesis es la idea u opinión principal que el autor quiere demostrar; el resto son los argumentos que la respaldan.' },
        { t: 'tf', q: 'Una «carta al director» es un texto que un lector envía a un periódico para opinar razonadamente sobre un tema de actualidad o de convivencia.', a: true, why: 'En las cartas al director la ciudadanía expone quejas, agradecimientos o propuestas respaldadas con argumentos.' },
        { t: 'tf', q: 'En un texto expositivo de una enciclopedia, lo más adecuado es inventar personajes fantásticos y usar exclamaciones subjetivas.', a: false, why: 'El texto expositivo busca informar con rigor y claridad, por lo que emplea un lenguaje objetivo y preciso.' },
        { t: 'sort', q: 'Clasifica cada fragmento según el tipo de texto al que pertenece.', cats: ['Narrativo', 'Expositivo', 'Argumentativo'], items: [{ x: 'Aquella tarde, Alba abrió el cofre antiguo y halló un mapa doblado', c: 0 }, { x: 'El lobo dio un paso atrás y huyó hacia el espeso pinar', c: 0 }, { x: 'El río Ebro nace en Fontibre y desemboca en el mar Mediterráneo', c: 1 }, { x: 'La fotosíntesis permite a las plantas elaborar su propio alimento', c: 1 }, { x: 'Deberíamos plantar más árboles en el patio porque darían sombra en junio', c: 2 }, { x: 'Opino que leer cada noche mejora el vocabulario por tres razones claras', c: 2 }], why: 'Los dos primeros relatan acciones de personajes; los dos siguientes explican datos objetivos; los dos últimos defienden una opinión con razones.' },
        { t: 'match', q: 'Une cada parte de un texto con su función.', pairs: [['Planteamiento', 'Presenta a los personajes, el lugar y el tiempo de la historia'], ['Nudo', 'Desarrolla el conflicto o problema principal del relato'], ['Tesis', 'Opinión o idea central que se defiende en una argumentación'], ['Argumento', 'Razón, dato o ejemplo que sirve para apoyar la tesis']], why: 'Planteamiento, nudo y desenlace forman la estructura narrativa; tesis y argumentos vertebran el texto argumentativo.' },
        { t: 'order', q: 'Ordena las partes de esta carta al director para que resulte coherente.', items: ['Sr. Director: Le escribo como vecina del barrio del Actur.', 'Desde hace un mes, dos farolas de la calle principal están fundidas.', 'La falta de luz dificulta el paso de personas mayores al anochecer.', 'Por ello, solicito al Ayuntamiento que repare las luminarias pronto.', 'Atentamente, Carmen Gracia.'], why: 'Una carta al director sigue un orden lógico: saludo y presentación, exposición del hecho, argumento de por qué importa, petición y despedida.' },
        { t: 'tap', q: 'En este texto expositivo sobre los planetas se ha colado UNA palabra subjetiva impropia de un tono objetivo. ¡Cázala!', words: ['Júpiter', 'es', 'el', 'planeta', 'más', 'grande', 'del', 'sistema', 'solar', 'y', 'tiene', 'satélites', 'feísimos.'], wrong: [12], why: '«Feísimos» es un juicio de valor subjetivo; un texto expositivo usa adjetivos descriptivos u objetivos, como «numerosos» o «rocosos».' },
        { t: 'choice', q: '¿Qué conector es más adecuado para introducir la conclusión de un texto argumentativo?', o: ['En conclusión,', 'Había una vez,', 'En primer lugar,'], a: 0, why: '«En conclusión» o «Por tanto» anuncian el cierre del razonamiento; «Había una vez» abre cuentos y «En primer lugar» inicia el primer argumento.' },
        { t: 'order', q: 'Ordena estos tres fragmentos para formar un microrrelato con planteamiento, nudo y desenlace.', items: ['Cada mañana, Leo entrenaba con su abuela en la pista de atletismo.', 'En mitad de la carrera final, se le desató una zapatilla y perdió el ritmo.', 'Con calma, la ató rápido, remontó en la recta y cruzó la meta sonriendo.'], why: 'Primero se presenta la situación inicial (planteamiento), luego surge el obstáculo (nudo) y al final se resuelve (desenlace).' },
        { t: 'choice', q: 'Si redactas un trabajo escolar que explica cómo se forma el granizo en las nubes de tormenta, ¿qué tipo de texto estás escribiendo?', o: ['Un texto expositivo', 'Un texto teatral', 'Una carta al director'], a: 0, why: 'Explicar de forma ordenada y objetiva un fenómeno natural para que otros lo comprendan es la finalidad propia del texto expositivo.' }
      ]
    },
    {
      title: 'Periodismo y lectura crítica: hechos y opiniones',
      intro: [
        { i: '📰', h: 'La noticia y sus partes', p: 'La <b>noticia</b> es un texto periodístico informativo que relata un hecho actual de interés sin añadir opiniones.<br>Partes: <b>titular</b> (destaca lo principal), <b>entradilla</b> (resume los datos esenciales en el primer párrafo) y <b>cuerpo</b> (desarrolla los detalles).' },
        { i: '❓', h: 'Las 6 preguntas del periodismo', p: 'Toda noticia completa responde a seis preguntas clave: <b>¿Qué?</b> (el hecho), <b>¿Quién?</b> (los protagonistas), <b>¿Cuándo?</b> (el momento), <b>¿Dónde?</b> (el lugar), <b>¿Cómo?</b> (el modo) y <b>¿Por qué?</b> (la causa).' },
        { i: '⚖️', h: 'Hechos frente a opiniones y sesgos', p: 'Un <b>hecho</b> es un dato comprobable (<i>«Cayeron 20 litros por metro cuadrado»</i>). Una <b>opinión</b> expresa un juicio personal (<i>«Fue una tarde horrible»</i>). Si un titular informativo mezcla adjetivos valorativos para inclinar al lector, tiene <b>sesgo</b>.' }
      ],
      ex: [
        { t: 'choice', q: '¿En qué parte de la noticia se concentran resumidos los datos más importantes en un solo párrafo inicial, justo debajo del titular?', o: ['En la entradilla', 'En el pie de foto', 'En el último párrafo del cuerpo'], a: 0, why: 'La entradilla (o lead) va entre el titular y el cuerpo y resume qué ha pasado, a quién, dónde y cuándo.' },
        { t: 'choice', q: 'Lee estos dos titulares sobre el mismo suceso. ¿Cuál está redactado de forma objetiva y SIN sesgo valorativo?', o: ['«El nuevo comedor escolar abre este lunes con 120 plazas»', '«Por fin abre el maravilloso e insuperable comedor escolar»', '«El desastroso comedor escolar abre tarde y mal este lunes»'], a: 0, why: 'El primer titular ofrece hechos verificables (fecha y número de plazas) sin adjetivos subjetivos que intenten dirigir la opinión del lector.' },
        { t: 'tf', q: 'En una noticia informativa, el periodista debe separar con claridad los hechos comprobables de sus opiniones personales.', a: true, why: 'La noticia pertenece al género informativo y exige objetividad; las opiniones van en artículos de opinión, editoriales o columnas.' },
        { t: 'tf', q: 'La afirmación «Teruel registró ayer una temperatura mínima de 2 grados bajo cero» es una opinión subjetiva.', a: false, why: 'Es un hecho objetivo porque aporta un dato medible con un termómetro y comprobable en los registros meteorológicos.' },
        { t: 'sort', q: 'Clasifica cada enunciado según exprese un hecho comprobable o una opinión personal.', cats: ['Hecho comprobable', 'Opinión o valoración'], items: [{ x: 'La biblioteca municipal abrió en 2018 y cuenta con 15 000 libros', c: 0 }, { x: 'El partido terminó con un resultado de dos a uno', c: 0 }, { x: 'El tren regional llegó a Huesca a las 17:30', c: 0 }, { x: 'Esa novela de misterio es la más entretenida del mundo', c: 1 }, { x: 'El uniforme del equipo visitante resulta bastante feo', c: 1 }, { x: 'El concierto de ayer fue aburridísimo y demasiado largo', c: 1 }], why: 'Las fechas, cantidades, marcadores y horarios se pueden verificar; los juicios de gusto («más entretenida», «feo», «aburridísimo») son opiniones.' },
        { t: 'match', q: 'Lee: <i>«Ayer martes, el alumnado del CEIP Pirineos plantó cincuenta encinas en el parque norte mediante turnos por equipos para recuperar una ladera erosionada»</i>. Une cada pregunta con su respuesta.', pairs: [['¿Quién?', 'El alumnado del CEIP Pirineos'], ['¿Qué?', 'Plantó cincuenta encinas'], ['¿Dónde?', 'En el parque norte'], ['¿Por qué?', 'Para recuperar una ladera erosionada'], ['¿Cómo?', 'Mediante turnos por equipos']], why: 'Identificar las preguntas básicas permite comprobar si una noticia ofrece toda la información fundamental del suceso.' },
        { t: 'num', q: '¿A cuántas preguntas básicas (qué, quién, cuándo, dónde, cómo y por qué) busca responder una noticia periodística completa?', a: 6, u: 'preguntas', why: 'Las seis preguntas clásicas del periodismo son: ¿qué?, ¿quién?, ¿cuándo?, ¿dónde?, ¿cómo? y ¿por qué?' },
        { t: 'order', q: 'Ordena de arriba abajo los elementos de una noticia tal como aparecen en la página de un periódico.', items: ['Titular (en letra grande y destacada)', 'Entradilla (párrafo breve que resume lo esencial)', 'Primeros párrafos del cuerpo con los datos principales', 'Párrafos finales del cuerpo con detalles secundarios'], why: 'La noticia sigue la estructura de «pirámide invertida»: va de lo más importante arriba (titular y entradilla) a los detalles al final.' },
        { t: 'tap', q: 'En esta breve noticia se han colado DOS palabras subjetivas que introducen un sesgo de opinión. ¡Cázalas!', words: ['El', 'fantástico', 'autobús', 'eléctrico', 'recorrió', 'ayer', 'diez', 'kilómetros', 'sin', 'ninguna', 'estúpida', 'avería.'], wrong: [1, 10], why: '«Fantástico» y «estúpida» son valoraciones personales impropias de una noticia objetiva; basta con decir «El autobús eléctrico recorrió ayer diez kilómetros sin ninguna avería».' },
        { t: 'choice', q: 'Lee: <i>«El museo recibió 4 000 visitantes el sábado. Sin duda, es la exposición más bonita y emocionante del siglo»</i>. ¿Qué ocurre en este fragmento?', o: ['La primera oración es un hecho y la segunda es una opinión', 'Las dos oraciones son hechos comprobables', 'Las dos oraciones son opiniones subjetivas'], a: 0, why: 'El número de visitantes (4 000) es un dato verificable, mientras que calificarla como «la más bonita y emocionante» es un juicio de valor.' },
        { t: 'choice', q: '¿Cómo se llama el texto periodístico firmado por una autora o un autor que sí tiene como finalidad dar su punto de vista personal sobre un tema actual?', o: ['Artículo de opinión o columna', 'Noticia informativa', 'Pie de fotografía'], a: 0, why: 'A diferencia de la noticia (que solo informa), el artículo de opinión o columna expresa y razona la postura personal de quien lo firma.' },
        { t: 'tf', q: 'En la estructura de «pirámide invertida» de una noticia, los datos más importantes se colocan al principio del texto.', a: true, why: 'Así el lector conoce lo esencial desde las primeras líneas, incluso si no llega a leer los últimos párrafos.' }
      ]
    }
  ]
});

})();
/* ---- m09.js ---- */
(function(){
const P = Adv.pick;

Adv.register(9, {
  stations: [
    {
      title: 'Los tres géneros literarios: narrativa, lírica y teatro',
      intro: [
        { i: '📖', h: 'La narrativa: contar historias', p: 'En el género <b>narrativo</b> un <b>narrador</b> relata los hechos que les suceden a unos <b>personajes</b> en un tiempo y un lugar. Se escribe normalmente en prosa.<br>Subgéneros: el <b>cuento</b> (breve), la <b>novela</b> (extensa), la <b>fábula</b> (con moraleja) y la <b>leyenda</b>.' },
        { i: '🎵', h: 'La lírica: expresar sentimientos', p: 'En el género <b>lírico</b> el autor o la autora expresa emociones, sentimientos o una visión subjetiva del mundo. Suele escribirse en <b>verso</b>, cuidando el ritmo, la musicalidad y la rima.' },
        { i: '🎭', h: 'El teatro (género dramático)', p: 'Las obras de <b>teatro</b> se escriben para ser <b>representadas por actores</b> ante un público. No hay narrador: la historia avanza mediante el <b>diálogo</b> de los personajes y las <b>acotaciones</b> (indicaciones entre paréntesis sobre gestos, decorado o vestuario).' }
      ],
      ex: [
        { t: 'choice', q: 'Lee: <i>«CLARA. (Mirando por la ventana con gesto preocupado). ¡Ya empieza a nevar y aún no han vuelto del bosque!»</i>. ¿A qué género literario pertenece este fragmento?', o: ['Al teatro (género dramático)', 'A la narrativa', 'A la lírica'], a: 0, why: 'Aparece el nombre del personaje antes de su intervención y una acotación entre paréntesis: es el formato propio del texto teatral.' },
        { t: 'choice', q: 'En una obra de teatro, ¿cómo se llaman las indicaciones que escribe el autor entre paréntesis para explicar el decorado, la iluminación o los gestos de los actores?', o: ['Acotaciones', 'Moralejas', 'Estrofas'], a: 0, why: 'Las acotaciones orientan a la dirección y a los actores sobre cómo debe ponerse en escena el texto.' },
        { t: 'tf', q: 'La diferencia principal entre un cuento y una novela es que el cuento es un relato breve con trama sencilla y la novela es más extensa y compleja.', a: true, why: 'Ambos pertenecen al género narrativo, pero la novela desarrolla más personajes, escenarios y tramas que el cuento.' },
        { t: 'tf', q: 'En las obras de teatro siempre hay un narrador que cuenta en tercera persona todo lo que hacen los personajes.', a: false, why: 'En el teatro la acción se conoce directamente a través del diálogo y la actuación de los personajes en el escenario.' },
        { t: 'sort', q: 'Clasifica cada elemento según el género literario con el que se relaciona de forma característica.', cats: ['Narrativa', 'Lírica', 'Teatro'], items: [{ x: 'Narrador en primera o tercera persona', c: 0 }, { x: 'Novela de aventuras y cuento popular', c: 0 }, { x: 'Poema organizado en versos y estrofas', c: 1 }, { x: 'Expresión íntima de emociones con ritmo y rima', c: 1 }, { x: 'Acotaciones escénicas entre paréntesis', c: 2 }, { x: 'División en actos y escenas para representar', c: 2 }], why: 'Narrador y novela/cuento son propios de la narrativa; verso y estrofa de la lírica; acotaciones, actos y escenas del teatro.' },
        { t: 'match', q: 'Une cada subgénero narrativo con su definición.', pairs: [['Cuento', 'Relato breve de ficción con pocos personajes y acción concentrada'], ['Novela', 'Narración extensa en prosa con una trama compleja y detallada'], ['Fábula', 'Relato breve, a menudo con animales, que deja una enseñanza o moraleja'], ['Leyenda', 'Relato tradicional que mezcla hechos reales y elementos maravillosos']], why: 'Los cuatro son subgéneros narrativos y se distinguen por su extensión, origen tradicional o intención didáctica.' },
        { t: 'choice', q: '¿Cómo se llama el cambio de una escena a otra dentro de un acto teatral?', o: ['La entrada o salida de algún personaje del escenario', 'El cambio de rima asonante a consonante', 'La aparición de una moraleja final'], a: 0, why: 'En el teatro, los actos se dividen en escenas, y cada escena queda marcada por la entrada o salida de personajes.' },
        { t: 'order', q: 'Ordena de menor a mayor estas unidades de un poema.', items: ['Sílaba métrica', 'Verso (una línea del poema)', 'Estrofa (conjunto de versos agrupados)', 'Poema completo'], why: 'Las sílabas forman cada verso; varios versos se agrupan en una estrofa; y las estrofas componen el poema.' },
        { t: 'tap', q: 'En esta definición del género lírico hay UNA palabra equivocada. ¡Cázala!', words: ['La', 'lírica', 'expresa', 'sentimientos', 'y', 'suele', 'escribirse', 'mediante', 'acotaciones', 'con', 'ritmo', 'y', 'musicalidad.'], wrong: [8], why: 'Las «acotaciones» son propias del teatro; la lírica suele escribirse en «versos».' },
        { t: 'choice', q: 'Lee: <i>«La cigarra cantó durante todo el verano mientras la hormiga guardaba grano con esfuerzo. Así aprendió que conviene ser previsor»</i>. ¿Qué subgénero narrativo es?', o: ['Una fábula', 'Una novela histórica', 'Una tragedia teatral'], a: 0, why: 'Está protagonizada por animales personificados y concluye con una enseñanza práctica o moraleja: es una fábula.' },
        { t: 'choice', q: 'Si el narrador de una novela cuenta la historia diciendo <i>«Aquel verano llegué a Jaca con mi mochila y conocí a mis nuevos amigos»</i>, ¿en qué persona gramatical narra?', o: ['En primera persona (narrador protagonista)', 'En tercera persona (narrador externo)', 'En segunda persona del plural'], a: 0, why: 'Las formas «llegué», «mi» y «conocí» están en primera persona del singular: quien narra participa como protagonista.' },
        { t: 'tf', q: 'El momento de una obra de teatro en que baja el telón para marcar una parte principal de la trama se corresponde con el final de un acto.', a: true, why: 'Los actos son las grandes partes de una obra teatral y su final suele señalarse con la caída del telón o un oscuro.' }
      ]
    },
    {
      title: 'Medida de versos y clases de rima',
      intro: [
        { i: '📏', h: 'Sinalefa y ley del acento final', p: 'Al medir un verso contamos sus <b>sílabas métricas</b>:<br>• <b>Sinalefa</b>: si una palabra acaba en vocal y la siguiente empieza por vocal (o <i>h</i>), se unen en <b>una sola sílaba</b> (<i>la_es-tre-lla</i> = 3).<br>• <b>Última palabra</b>: si es <b>aguda</b> se suma <b>+1</b>; si es <b>llana</b> queda <b>igual</b>; si es <b>esdrújula</b> se resta <b>−1</b>.' },
        { i: '🔢', h: 'Arte menor y arte mayor', p: 'Los versos de <b>8 sílabas o menos</b> son de <b>arte menor</b> (por ejemplo, el octosílabo, de 8). Los versos de <b>9 sílabas o más</b> son de <b>arte mayor</b> (por ejemplo, el endecasílabo, de 11).' },
        { i: '🔔', h: 'Rima consonante y rima asonante', p: 'La rima se mira a partir de la <b>última vocal tónica</b> del verso:<br>• <b>Consonante</b>: coinciden vocales y consonantes (<i>cam<b>ino</b> / dest<b>ino</b></i>).<br>• <b>Asonante</b>: solo coinciden las <b>vocales</b> y cambian las consonantes (<i>v<b>ie</b>nt<b>o</b> / s<b>i</b>l<b>e</b>nc<b>io</b></i> → <b>e-o</b>).' }
      ],
      ex: [
        { t: 'num', q: 'Mide este verso (fíjate en que no hay sinalefas y «plata» es llana):<br><i>«Bri-lla la lu-na de pla-ta»</i>', a: 8, u: 'sílabas', why: 'Bri-lla (2) + la (1) + lu-na (2) + de (1) + pla-ta (2) = 8 sílabas. Como «plata» es llana, se queda en 8 (octosílabo).' },
        { t: 'num', q: 'Mide este verso teniendo en cuenta la última palabra («jardín» es aguda):<br><i>«Can-ta mi ver-de jar-dín»</i>', a: 8, u: 'sílabas', why: 'Can-ta (2) + mi (1) + ver-de (2) + jar-dín (2) = 7 sílabas gramaticales. Como «jardín» es aguda, sumamos 1: 7 + 1 = 8 sílabas métricas.' },
        { t: 'num', q: 'Mide este verso aplicando la sinalefa marcada y sabiendo que «noche» es llana:<br><i>«Blan-ca_es-tre-lla de la no-che»</i>', a: 8, u: 'sílabas', why: 'Hay sinalefa en «ca_es»: Blan-ca_es-tre-lla (4) + de (1) + la (1) + no-che (2) = 8 sílabas métricas.' },
        { t: 'choice', q: '¿Qué tipo de rima hay entre los versos terminados en «mont<b>aña</b>» y «cab<b>aña</b>»?', o: ['Rima consonante', 'Rima asonante', 'No riman entre sí'], a: 0, why: 'Desde la última vocal tónica («a») se repiten exactamente las mismas vocales y consonantes: -aña / -aña.' },
        { t: 'choice', q: '¿Qué tipo de rima hay entre los versos terminados en «l<b>u</b>n<b>a</b>» y «esp<b>u</b>m<b>a</b>»?', o: ['Rima asonante (u-a)', 'Rima consonante', 'No tienen rima'], a: 0, why: 'Desde la última vocal tónica («u») coinciden las vocales (u-a), pero cambian las consonantes (n / m): es rima asonante.' },
        { t: 'tf', q: 'Si la última palabra de un verso es esdrújula (como «pájaros» o «música»), al contar sus sílabas métricas se resta una sílaba (−1).', a: true, why: 'Según la ley del acento final: aguda (+1), llana (igual) y esdrújula (−1).' },
        { t: 'tf', q: 'Un verso de 8 sílabas (octosílabo) es un verso de arte mayor.', a: false, why: 'Los versos de hasta 8 sílabas inclusive son de arte menor; los de arte mayor tienen 9 o más sílabas.' },
        { t: 'sort', q: 'Clasifica cada pareja de palabras finales según el tipo de rima que forman.', cats: ['Rima consonante', 'Rima asonante'], items: [{ x: 'viento / cuento (-ento)', c: 0 }, { x: 'flor / amor (-or)', c: 0 }, { x: 'castillo / chiquillo (-illo)', c: 0 }, { x: 'río / pino (i-o)', c: 1 }, { x: 'verde / nieve (e-e)', c: 1 }, { x: 'casa / rama (a-a)', c: 1 }], why: 'En viento/cuento, flor/amor y castillo/chiquillo coinciden todos los sonidos; en río/pino, verde/nieve y casa/rama solo las vocales.' },
        { t: 'match', q: 'Une cada concepto métrico con su regla.', pairs: [['Sinalefa', 'Unión en una sílaba de la vocal final y la vocal inicial siguiente'], ['Final en palabra aguda', 'Se suma una sílaba (+1) al cómputo del verso'], ['Final en palabra esdrújula', 'Se resta una sílaba (−1) al cómputo del verso'], ['Arte menor', 'Versos que miden 8 sílabas métricas o menos']], why: 'La sinalefa y el acento de la última palabra son las dos reglas clave para medir versos en español.' },
        { t: 'tap', q: 'En esta explicación sobre la rima hay UNA palabra errónea. ¡Cázala!', words: ['En', 'la', 'rima', 'asonante', 'se', 'repiten', 'únicamente', 'las', 'consonantes', 'desde', 'la', 'última', 'vocal', 'tónica.'], wrong: [8], why: 'En la rima asonante se repiten únicamente las «vocales» (no las consonantes) a partir de la última vocal tónica.' },
        { t: 'choice', q: '¿En cuál de estos pares de palabras seguidas se produce una sinalefa al medir el verso?', o: ['«viento helado» (to_he)', '«cielo limpio»', '«tarde fresca»'], a: 0, why: '«Viento» acaba en vocal y «helado» empieza por h seguida de vocal; como la h es muda, se unen en la sinalefa «to_he».' },
        { t: 'order', q: 'Ordena de menor a mayor número de sílabas estos cuatro versos ya medidos.', items: ['Mar azul (3 + 1 = 4 sílabas)', 'Canta el ruiseñor (5 + 1 = 6 sílabas)', 'Brilla la luna de plata (8 sílabas)', 'Pasa el viento suave por la montaña (11 sílabas)'], why: 'Van de 4 sílabas a 6, 8 (octosílabo, arte menor) y 11 sílabas (endecasílabo, arte mayor).' },
        { t: 'gen', f: () => {
          const base = P([7, 8, 9, 10, 11]);
          const kind = P([
            { k: 'aguda', d: 1, w: P(['jardín', 'canción', 'cristal', 'clavel', 'tambor', 'azul']) },
            { k: 'llana', d: 0, w: P(['plata', 'noche', 'viento', 'luna', 'camino', 'espuma']) },
            { k: 'esdrújula', d: -1, w: P(['pájaros', 'música', 'lágrima', 'cántaro', 'árboles', 'brújula']) }
          ]);
          const ans = base + kind.d;
          const op = kind.d === 1 ? `sumamos 1 (${base} + 1 = ${ans})` : kind.d === -1 ? `restamos 1 (${base} − 1 = ${ans})` : `se mantiene igual (${ans})`;
          return { t: 'num', q: `Un verso cuenta con <b>${base}</b> sílabas (aplicadas ya las sinalefas) y su última palabra es «<b>${kind.w}</b>» (${kind.k}). ¿Cuántas sílabas métricas mide el verso?`, a: ans, u: 'sílabas', why: `Como la última palabra («${kind.w}») es ${kind.k}, ${op}.` };
        } }
      ]
    },
    {
      title: 'Las figuras literarias',
      intro: [
        { i: '🪞', h: 'Comparación (símil) y metáfora', p: '• <b>Comparación o símil</b>: relaciona dos elementos parecidos usando un nexo comparativo expreso, casi siempre <b>«como»</b> o <b>«parece»</b> (<i>«Sus dientes son blancos <b>como</b> perlas»</i>).<br>• <b>Metáfora</b>: identifica directamente un elemento con otro <b>sin usar «como»</b> (<i>«Las perlas de tu boca»</i>).' },
        { i: '🗣️', h: 'Personificación (prosopopeya)', p: 'Consiste en atribuir <b>cualidades o acciones propias de las personas</b> (hablar, llorar, reír, soñar, susurrar) a animales, plantas u objetos inanimados.<br>Ejemplo: <i>«El viento cantaba una nana entre los pinos»</i>.' },
        { i: '🚀', h: 'Hipérbole (exageración)', p: 'Es una <b>exageración desmesurada</b> con intención expresiva para destacar una idea o un sentimiento.<br>Ejemplo: <i>«Te he llamado un millón de veces»</i> o <i>«Tanto dolor se agrupa en mi costado, que por doler me duele hasta el aliento»</i>.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué figura literaria aparece en el verso <i>«La luna es una moneda de plata en el cielo»</i>?', o: ['Metáfora', 'Comparación o símil', 'Personificación'], a: 0, why: 'Identifica directamente un elemento real (la luna) con una imagen (una moneda de plata) sin usar la palabra «como».' },
        { t: 'choice', q: '¿Qué figura literaria hay en <i>«Sus manos estaban frías como témpanos de hielo»</i>?', o: ['Comparación o símil', 'Metáfora', 'Hipérbole'], a: 0, why: 'Relaciona dos elementos mediante el nexo comparativo «como»: es una comparación o símil.' },
        { t: 'choice', q: 'Identifica la figura literaria de <i>«Las estrellas nos guiñaban el ojo desde la noche oscura»</i>.', o: ['Personificación', 'Hipérbole', 'Comparación'], a: 0, why: 'Guiñar el ojo es un gesto humano que aquí se atribuye a las estrellas: es una personificación.' },
        { t: 'choice', q: '¿Qué figura literaria se emplea en <i>«Lloró tanto que formó un océano de lágrimas en el salón»</i>?', o: ['Hipérbole', 'Personificación', 'Comparación'], a: 0, why: 'Formar un océano con las lágrimas es una exageración imposible que sirve para recalcar la tristeza: una hipérbole.' },
        { t: 'tf', q: 'La diferencia clave entre la comparación y la metáfora es que la comparación utiliza un enlace comparativo (como «como») y la metáfora identifica ambos términos directamente.', a: true, why: 'Por ejemplo: «cabellos rubios como el oro» es comparación; «el oro de sus cabellos» es metáfora.' },
        { t: 'tf', q: 'En la oración «El río Ebro pasa por Zaragoza» hay una personificación porque el río se mueve.', a: false, why: 'Que un río pase por una ciudad es su curso natural literal; habría personificación si dijéramos «El río Ebro charla con los puentes».' },
        { t: 'sort', q: 'Clasifica cada verso o frase según la figura literaria que contiene.', cats: ['Metáfora', 'Personificación', 'Hipérbole'], items: [{ x: 'El algodón blanco del cielo cubrió la montaña (las nubes)', c: 0 }, { x: 'Tus ojos son dos luceros encendidos', c: 0 }, { x: 'La fuente del parque murmuraba secretos a los bancos', c: 1 }, { x: 'El otoño vistió de fiesta a los hayedos del valle', c: 1 }, { x: 'Tengo tanta hambre que me comería una ballena entera', c: 2 }, { x: 'Corrió más rápido que un rayo dando la vuelta al mundo en un segundo', c: 2 }], why: 'Las dos primeras identifican un elemento con otro; las dos centrales atribuyen acciones humanas a cosas; las dos últimas exageran.' },
        { t: 'match', q: 'Une cada ejemplo con la figura literaria que emplea.', pairs: [['«Nuestras vidas son los ríos»', 'Metáfora'], ['«Mansos como corderos»', 'Comparación o símil'], ['«El reloj bostezó a medianoche»', 'Personificación'], ['«Érase un hombre a una nariz pegado»', 'Hipérbole']], why: 'Sin «como» es metáfora; con «como» es comparación; atribuir un bostezo al reloj es personificación; exagerar una nariz es hipérbole.' },
        { t: 'order', q: 'Ordena estos fragmentos para formar un verso con una comparación (símil).', items: ['Las nubes blancas', 'viajaban por el cielo', 'ligeras como', 'barcos de vela.'], why: '«Las nubes blancas viajaban por el cielo ligeras como barcos de vela» une los dos elementos mediante el enlace «como».' },
        { t: 'tap', q: 'En esta explicación sobre las figuras literarias hay UNA palabra equivocada. ¡Cázala!', words: ['La', 'hipérbole', 'consiste', 'en', 'atribuir', 'acciones', 'humanas', 'a', 'los', 'objetos', 'inanimados.'], wrong: [1], why: 'Atribuir acciones humanas a objetos inanimados es la «personificación», no la hipérbole (que es la exageración).' },
        { t: 'choice', q: 'Si transformamos la comparación <i>«Sus cabellos son rubios como el oro»</i> en una metáfora, ¿cuál de estas expresiones obtenemos?', o: ['«Las hebras de oro de su melena»', '«Sus cabellos parecen oro brillante»', '«Sus cabellos son igual que el oro»'], a: 0, why: 'En «Las hebras de oro de su melena» sustituimos directamente el cabello rubio por la imagen «hebras de oro», sin nexos comparativos.' },
        { t: 'choice', q: 'Lee estos dos versos: <i>«El tren tose y suspira subiendo la cuesta / con una sonrisa que llega de oreja a oreja y da tres vueltas al valle»</i>. ¿Qué dos figuras literarias aparecen?', o: ['Personificación en el primero e hipérbole en el segundo', 'Dos comparaciones con «como»', 'Hipérbole en el primero y comparación en el segundo'], a: 0, why: 'Que el tren tosa y suspire es una personificación; una sonrisa que da tres vueltas al valle es una exageración o hipérbole.' }
      ]
    }
  ]
});

})();
/* ---- m10.js ---- */
(function(){
Adv.register(10, {
  stations: [
    {
      title: 'Las lenguas de España y su origen',
      intro: [
        { i: '🗺️', h: 'España, un país plurilingüe', p: 'Según la Constitución española, el <b>castellano o español</b> es la lengua oficial de todo el Estado. Además, otras lenguas españolas son también <b>cooficiales</b> en sus respectivas comunidades autónomas y forman un patrimonio cultural que debe respetarse y protegerse.' },
        { i: '🗣️', h: 'Las lenguas cooficiales', p: 'Junto al castellano, son lenguas cooficiales:<br>• <b>Gallego</b>: en Galicia.<br>• <b>Catalán</b>: en Cataluña y las Islas Baleares.<br>• <b>Valenciano</b>: en la Comunidad Valenciana.<br>• <b>Euskera o vasco</b>: en el País Vasco y parte de Navarra.<br>• <b>Aranés</b>: en el Valle de Arán (Cataluña).' },
        { i: '🏛️', h: 'Lenguas romances y el euskera', p: 'La mayoría de las lenguas de España son <b>lenguas romances</b> (o románicas) porque nacieron de la evolución del <b>latín</b> que hablaban los romanos: castellano, catalán, valenciano, gallego, aragonés…<br>El <b>euskera</b> es la única lengua de España que <b>no procede del latín</b>: es prerromana.' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuál de las siguientes lenguas de España NO procede del latín y es de origen prerromano?', o: ['El euskera o vasco', 'El gallego', 'El catalán'], a: 0, why: 'El euskera ya se hablaba antes de la llegada de los romanos y no pertenece a la familia de las lenguas romances.' },
        { t: 'choice', q: '¿Cómo se llaman las lenguas que evolucionaron a partir del latín hablado por los romanos, como el castellano, el gallego, el catalán o el aragonés?', o: ['Lenguas romances o románicas', 'Lenguas germánicas', 'Lenguas eslavas'], a: 0, why: 'Se denominan lenguas romances o románicas porque tienen su origen común en el latín de Roma.' },
        { t: 'tf', q: 'El castellano o español es la lengua oficial del Estado en todo el territorio de España.', a: true, why: 'Así lo establece el artículo 3 de la Constitución española, junto con la cooficialidad de las demás lenguas en sus comunidades.' },
        { t: 'tf', q: 'El gallego tiene su origen en el latín y es lengua cooficial en Galicia.', a: true, why: 'El gallego es una lengua romance hermana del portugués y del castellano, cooficial en la comunidad autónoma de Galicia.' },
        { t: 'tf', q: 'El euskera es una lengua romance que nació de la evolución del latín en la Edad Media.', a: false, why: 'El euskera no procede del latín; es la única lengua prerromana viva de la península ibérica.' },
        { t: 'match', q: 'Une cada lengua cooficial con el territorio donde tiene ese reconocimiento.', pairs: [['Gallego', 'Galicia'], ['Euskera o vasco', 'País Vasco y parte de Navarra'], ['Valenciano', 'Comunidad Valenciana'], ['Catalán', 'Cataluña e Islas Baleares'], ['Aranés', 'Valle de Arán (Cataluña)']], why: 'Cada una de estas lenguas comparte oficialidad con el castellano en su respectivo territorio autonómico.' },
        { t: 'sort', q: 'Clasifica estas lenguas según su origen histórico.', cats: ['Lengua romance (procede del latín)', 'Lengua prerromana (no procede del latín)'], items: [{ x: 'Castellano', c: 0 }, { x: 'Gallego', c: 0 }, { x: 'Catalán / valenciano', c: 0 }, { x: 'Aragonés', c: 0 }, { x: 'Euskera o vasco', c: 1 }], why: 'Castellano, gallego, catalán/valenciano y aragonés evolucionaron del latín; el euskera es anterior a la romanización.' },
        { t: 'choice', q: '¿Qué significa que en una comunidad autónoma haya dos lenguas cooficiales?', o: ['Que las dos son oficiales y la ciudadanía puede usar cualquiera de ellas ante las instituciones', 'Que está prohibido hablar castellano en esa comunidad', 'Que cada año se cambia de idioma obligatorio'], a: 0, why: 'La cooficialidad garantiza el derecho a conocer y emplear tanto el castellano como la lengua propia de la comunidad.' },
        { t: 'tap', q: 'En esta frase sobre la historia de nuestras lenguas hay UNA palabra equivocada. ¡Cázala!', words: ['El', 'castellano,', 'el', 'gallego', 'y', 'el', 'catalán', 'evolucionaron', 'a', 'partir', 'del', 'griego', 'hablado', 'en', 'Hispania.'], wrong: [11], why: 'Las lenguas romances de Hispania evolucionaron a partir del «latín» vulgar llevado por los romanos, no del griego.' },
        { t: 'order', q: 'Ordena cronológicamente estas etapas del origen de las lenguas romances en la península ibérica.', items: ['Pueblos prerromanos con sus propias lenguas antes de Roma', 'Llegada de los romanos e implantación del latín vulgar', 'Evolución del latín en distintos romances medievales peninsulares', 'Uso actual de las lenguas de España como patrimonio común'], why: 'Primero existían lenguas prerromanas, luego se difundió el latín, de él nacieron los romances medievales y hoy perviven nuestras lenguas.' },
        { t: 'choice', q: '¿Por qué palabras como «puerta» (castellano), «porta» (gallego y catalán) y «puerta / puerte» (aragonés) se parecen tanto entre sí?', o: ['Porque todas proceden de la misma palabra latina («porta»)', 'Por simple casualidad entre idiomas sin relación', 'Porque todas se copiaron del inglés moderno'], a: 0, why: 'Al ser lenguas romances hermanas nacidas del latín, conservan un gran parecido en su vocabulario y gramática.' },
        { t: 'num', q: 'De esta lista de cinco lenguas habladas en España (castellano, catalán, gallego, aragonés y euskera), ¿cuántas son lenguas romances procedentes del latín?', a: 4, u: 'lenguas', why: 'Son cuatro lenguas romances: castellano, catalán, gallego y aragonés. Solo el euskera no procede del latín.' }
      ]
    },
    {
      title: 'Las modalidades lingüísticas propias de Aragón',
      intro: [
        { i: '🏔️', h: 'El patrimonio lingüístico de Aragón', p: 'El <b>castellano</b> es la lengua oficial de Aragón y la hablada por toda su población. Además, Aragón cuenta con dos lenguas y modalidades lingüísticas propias e históricas que forman parte de su patrimonio cultural: el <b>aragonés</b> y el <b>catalán de Aragón</b>.' },
        { i: '🌲', h: 'El aragonés (altoaragonés)', p: 'El <b>aragonés</b> es una lengua romance nacida en la Edad Media en los valles pirenaicos. Hoy se conserva principalmente en el <b>norte de la provincia de Huesca</b> (Alto Aragón), con variedades locales como el <b>cheso</b> (valle de Hecho), el <b>ansotano</b> (Ansó), el <b>belsetán</b> (Bielsa), el <b>chistabín</b> (valle de Gistau) o el <b>ribagorzano</b>.' },
        { i: '🧭', h: 'El catalán de Aragón', p: 'En las <b>comarcas orientales de Aragón</b>, limítrofes con Cataluña y la Comunidad Valenciana (zona conocida tradicionalmente como <i>La Franja</i>, como La Litera, el Bajo Cinca o el Matarraña), se hablan variedades del <b>catalán de Aragón</b>.' }
      ],
      ex: [
        { t: 'choice', q: 'Además del castellano (lengua oficial), ¿cuáles son las dos lenguas y modalidades lingüísticas propias que forman parte del patrimonio histórico y cultural de Aragón?', o: ['El aragonés y el catalán de Aragón', 'El gallego y el euskera', 'El francés y el portugués'], a: 0, why: 'El Estatuto de Autonomía y la legislación aragonesa protegen las lenguas y modalidades propias de Aragón: el aragonés y el catalán de Aragón.' },
        { t: 'choice', q: '¿En qué zona geográfica de Aragón se conserva principalmente el aragonés en sus distintas variedades vivas?', o: ['En los valles pirenaicos y prepirenaicos del norte de la provincia de Huesca', 'En el extremo sur de la provincia de Teruel', 'En la frontera occidental con Soria y Guadalajara'], a: 0, why: 'El aragonés se mantiene vivo sobre todo en los valles del Alto Aragón, en el norte de la provincia de Huesca.' },
        { t: 'choice', q: '¿En qué parte de Aragón se habla tradicionalmente el catalán de Aragón?', o: ['En las comarcas orientales, junto al límite con Cataluña y la Comunidad Valenciana', 'En las cumbres occidentales del Moncayo', 'En la comarca de la Jacetania, junto a Navarra'], a: 0, why: 'Las hablas del catalán de Aragón se localizan en la franja oriental de la comunidad (Ribagorza oriental, La Litera, Bajo Cinca, Bajo Aragón-Caspe y Matarraña).' },
        { t: 'tf', q: 'El aragonés es una lengua romance porque evolucionó directamente del latín en las tierras pirenaicas y del antiguo Reino de Aragón.', a: true, why: 'El romance navarroaragonés nació del latín vulgar en el Pirineo durante la Edad Media, al igual que el castellano o el catalán.' },
        { t: 'tf', q: 'El cheso, el ansotano, el belsetán y el chistabín son variedades locales del aragonés habladas en distintos valles del Pirineo oscense.', a: true, why: 'Cada valle pirenaico conservó rasgos propios: cheso en Hecho, ansotano en Ansó, belsetán en Bielsa y chistabín en el valle de Gistau.' },
        { t: 'tf', q: 'Las modalidades lingüísticas propias de Aragón carecen de valor cultural y no están reconocidas por el Estatuto de Autonomía.', a: false, why: 'El Estatuto de Autonomía de Aragón reconoce las lenguas y modalidades lingüísticas propias como una riqueza cultural que debe protegerse.' },
        { t: 'match', q: 'Une cada variedad del aragonés con el valle o comarca pirenaica donde se habla.', pairs: [['Cheso', 'Valle de Hecho'], ['Ansotano', 'Valle de Ansó'], ['Belsetán', 'Valle de Bielsa'], ['Chistabín', 'Valle de Gistau']], why: 'El nombre de cada variedad del aragonés procede del gentilicio tradicional de su valle pirenaico.' },
        { t: 'sort', q: 'Clasifica cada comarca o valle según la modalidad lingüística propia que se conserva en él junto al castellano.', cats: ['Zona del aragonés (norte / Pirineos)', 'Zona del catalán de Aragón (este / Franja oriental)'], items: [{ x: 'Valle de Hecho (cheso)', c: 0 }, { x: 'Valle de Ansó (ansotano)', c: 0 }, { x: 'Valle de Bielsa (belsetán)', c: 0 }, { x: 'Comarca del Matarraña', c: 1 }, { x: 'Comarca de La Litera', c: 1 }, { x: 'Comarca del Bajo Cinca', c: 1 }], why: 'Hecho, Ansó y Bielsa son valles pirenaicos de habla aragonesa; La Litera, Bajo Cinca y Matarraña están en el este de Aragón.' },
        { t: 'tap', q: 'En esta explicación sobre las lenguas de Aragón hay UNA palabra geográfica equivocada. ¡Cázala!', words: ['El', 'catalán', 'de', 'Aragón', 'se', 'habla', 'en', 'las', 'comarcas', 'occidentales', 'limítrofes', 'con', 'Cataluña.'], wrong: [9], why: 'Las comarcas limítrofes con Cataluña están en el este de Aragón, por lo que son las comarcas «orientales», no occidentales.' },
        { t: 'choice', q: 'En aragonés, muchas palabras conservan la «f-» inicial latina, como <i>«fillo»</i> (hijo), <i>«fumo»</i> (humo) o <i>«ferrero»</i> (herrero). ¿A qué se debe este rasgo?', o: ['A su evolución directa desde el latín («filius», «fumus», «ferrum»)', 'A una influencia reciente del idioma alemán', 'A una invención moderna del siglo XXI'], a: 0, why: 'Mientras el castellano transformó la f- inicial latina en h- muda (hijo, humo), el aragonés conservó esa f- igual que otras lenguas romances.' },
        { t: 'order', q: 'Ordena de oeste a este estos cuatro valles del Pirineo aragonés donde se conservan variedades del aragonés.', items: ['Valle de Ansó (ansotano)', 'Valle de Hecho (cheso)', 'Valle de Bielsa (belsetán)', 'Valle de Gistau (chistabín)'], why: 'De oeste a este en el Pirineo oscense se suceden Ansó, Hecho (en la Jacetania) y, más al este (en el Sobrarbe), Bielsa y Gistau.' },
        { t: 'choice', q: '¿Qué actitud promueve la escuela y el Estatuto de Autonomía ante la diversidad lingüística de Aragón y de España?', o: ['El respeto, el aprecio y la conservación de todas las lenguas y modalidades como riqueza común', 'El olvido de las palabras y variedades tradicionales de los pueblos', 'El enfrentamiento entre hablantes de distintas zonas'], a: 0, why: 'Todas las lenguas y variedades lingüísticas son vehículos de comunicación y cultura que enriquecen nuestro patrimonio común.' }
      ]
    },
    {
      title: 'El castellano de Aragón y los aragonesismos',
      intro: [
        { i: '💬', h: 'El castellano hablado en Aragón', p: 'El castellano que hablamos en Aragón tiene rasgos propios muy reconocibles, fruto del contacto histórico con el aragonés:<br>• <b>Entonación</b> característica que alarga la vocal final.<br>• Gusto por el diminutivo afectivo en <b>-ico / -ica</b> (<i>pajarico, ratico, fresquico</i>).<br>• Uso expresivo de <b>«pues»</b> al final de frase (<i>«Ya voy, pues»</i>).' },
        { i: '🥨', h: 'Palabras de nuestra tierra: los aragonesismos', p: 'Los <b>aragonesismos</b> son palabras o expresiones propias de Aragón empleadas en el castellano regional (y muchas recogidas en el Diccionario de la RAE):<br>• <b>Laminero/a</b>: goloso.<br>• <b>Chipiar(se)</b>: mojarse o calarse.<br>• <b>Esbarar</b>: resbalar.<br>• <b>Alberge</b>: albaricoque.<br>• <b>Bambolla</b>: ampolla o burbuja.' },
        { i: '🧣', h: 'Más vocabulario tradicional aragonés', p: 'Otras voces muy vivas en Aragón son <b>majo/a</b> (simpático, agradable o bonito), <b>zaborrero/a</b> (chapucero, que hace algo sin cuidado), <b>escobar</b> (barrer con la escoba) o <b>cachirulo</b> (pañuelo tradicional de cuadros rojos y negros).' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuál es el sufijo diminutivo más característico y tradicional del castellano hablado en Aragón (como en «pajarico» o «poquico»)?', o: ['-ico / -ica', '-iño / -iña', '-uco / -uca'], a: 0, why: 'En Aragón predomina el diminutivo «-ico / -ica» (en Galicia es típico «-iño» y en Cantabria «-uco»).' },
        { t: 'choice', q: 'Si alguien en Zaragoza, Huesca o Teruel dice <i>«¡Mi abuela es muy laminera, nunca perdona el postre!»</i>, ¿qué significa el aragonesismo «laminera»?', o: ['Golosa, aficionada a los dulces', 'Muy madrugadora', 'Aficionada a coleccionar láminas'], a: 0, why: '«Laminero» o «laminera» es el aragonesismo clásico para designar a la persona golosa, a la que le gusta mucho el dulce.' },
        { t: 'choice', q: 'Lee: <i>«Nos cayó un chaparrón saliendo del colegio y llegamos a casa completamente chipiados»</i>. ¿Qué significa «chipiados»?', o: ['Mojados, calados o empapados por el agua', 'Muy cansados de correr', 'Muertos de risa'], a: 0, why: '«Chipiar» o «chipiarse» significa en Aragón mojar o calarse de agua, especialmente por la lluvia.' },
        { t: 'tf', q: 'En Aragón se llama tradicionalmente «alberge» a la fruta que en otras regiones de España se conoce como albaricoque.', a: true, why: '«Alberge» es el nombre tradicional aragonés del albaricoque y está recogido en el Diccionario de la lengua española.' },
        { t: 'tf', q: 'El aragonesismo «esbarar» significa quedarse profundamente dormido después de comer.', a: false, why: '«Esbarar» (o «esbarizar») significa resbalar o deslizarse sobre una superficie; de ahí viene también «esbarizaculos» (tobogán).' },
        { t: 'match', q: 'Une cada aragonesismo con su significado en el castellano general.', pairs: [['Laminero', 'Goloso, aficionado al dulce'], ['Chipiar', 'Mojar o empapar con agua'], ['Esbarar', 'Resbalar'], ['Alberge', 'Albaricoque'], ['Bambolla', 'Ampolla en la piel o burbuja en el agua']], why: 'Son cinco aragonesismos de uso cotidiano en las tres provincias aragonesas.' },
        { t: 'sort', q: 'Clasifica cada palabra según su sufijo diminutivo sea el característico de Aragón o propio de otras zonas de España.', cats: ['Diminutivo típico de Aragón (-ico / -ica)', 'Diminutivo de otras regiones (-iño, -ín, -uco)'], items: [{ x: 'pajarico', c: 0 }, { x: 'librico', c: 0 }, { x: 'fresquica', c: 0 }, { x: 'ratico', c: 0 }, { x: 'camiño / pitiño', c: 1 }, { x: 'pequeñín', c: 1 }, { x: 'casuca', c: 1 }], why: 'El sufijo «-ico / -ica» caracteriza el habla aragonesa, frente a «-iño» (Galicia), «-ín» (Asturias/León) o «-uco» (Cantabria).' },
        { t: 'choice', q: '¿Qué significa la palabra aragonesa «esbarizaculos»?', o: ['Tobogán o piedra lisa por donde se resbala sentado', 'Silla de madera muy alta', 'Paraguas para los días de cierzo'], a: 0, why: 'Formada a partir de «esbarizar» (resbalar), nombra de forma muy expresiva el tobogán infantil o las lajas de piedra donde deslizarse.' },
        { t: 'tap', q: 'En esta frase que explica un aragonesismo hay UNA definición equivocada. ¡Cázala!', words: ['En', 'Aragón,', 'la', 'palabra', '«escobar»', 'significa', 'cocinar', 'el', 'suelo', 'con', 'la', 'escoba.'], wrong: [6], why: '«Escobar» significa «barrer» el suelo con la escoba, no cocinar.' },
        { t: 'order', q: 'Ordena los elementos de esta oración coloquial típica del castellano de Aragón, que termina con la partícula «pues».', items: ['Coge la chaqueta,', 'que hace fresquico', 'en la calle,', 'pues.'], why: 'En el castellano coloquial de Aragón es muy frecuente cerrar el enunciado con la conjunción «pues» con valor expresivo.' },
        { t: 'choice', q: '¿Cómo se llama el pañuelo tradicional de cuadros rojos y negros que forma parte del traje regional aragonés?', o: ['Cachirulo', 'Bambolla', 'Alberge'], a: 0, why: 'El cachirulo es el pañuelo tradicional que se anuda en la cabeza o al cuello en las fiestas y trajes regionales de Aragón.' },
        { t: 'tf', q: 'Muchos aragonesismos, como «laminero», «alberge», «majo» o «cachirulo», están recogidos oficialmente en el Diccionario de la Real Academia Española (DLE).', a: true, why: 'El diccionario recoge el léxico propio de las distintas regiones hispanohablantes, incluidos numerosos aragonesismos.' }
      ]
    }
  ]
});

})();
/* ---- m11.js ---- */
(function(){
const R = Adv.rnd, P = Adv.pick, SH = Adv.shuffle;
const fmt = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u202f');
const toRoman = n => {
  const vals = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  let res = '';
  for (const [v, s] of vals) { while (n >= v) { res += s; n -= v; } }
  return res;
};
const signStr = n => n > 0 ? `+${n}` : String(n);

Adv.register(11, {
  stations: [
    {
      title: 'Números naturales grandes',
      intro: [
        { i: '🔢', h: 'Órdenes de unidades y millones', p: 'En nuestro sistema de numeración decimal, <b>diez unidades de un orden</b> forman una unidad del orden inmediato superior.<br>De derecha a izquierda: unidades (U), decenas (D), centenas (C), unidades de millar (UM), decenas de millar (DM), centenas de millar (CM), <b>unidades de millón (UMM)</b>, decenas de millón (DMM) y centenas de millón (CMM).' },
        { i: '🧩', h: 'Valor posicional y descomposición', p: 'El valor de una cifra depende del lugar que ocupa. En <b>4\u202f305\u202f200</b>:<br>• El <b>4</b> vale 4 UMM = 4\u202f000\u202f000.<br>• El <b>3</b> vale 3 CM = 300\u202f000.<br>• El <b>5</b> vale 5 UM = 5\u202f000.<br>• El <b>2</b> vale 2 C = 200.' },
        { i: '🎯', h: 'Comparar y redondear', p: 'Para <b>redondear</b> a un orden, miramos la cifra situada justo a su derecha:<br>• Si es <b>5 o mayor</b> (5, 6, 7, 8, 9), sumamos 1 a la cifra de ese orden.<br>• Si es <b>menor que 5</b> (0, 1, 2, 3, 4), la dejamos igual.<br>Después sustituimos por ceros todas las cifras de la derecha.' }
      ],
      ex: [
        { t: 'choice', q: '¿Cómo se escribe con cifras «tres millones cuarenta mil doscientos»?', o: ['3\u202f040\u202f200', '3\u202f400\u202f200', '3\u202f004\u202f200'], a: 0, why: '3 UMM (3\u202f000\u202f000) + 4 DM (40\u202f000) + 2 C (200) = 3\u202f040\u202f200. Como no hay centenas ni unidades de millar, ponemos ceros en esas posiciones.' },
        { t: 'choice', q: 'En el número 78\u202f504\u202f312, ¿qué valor en unidades tiene la cifra 8?', o: ['8\u202f000\u202f000', '800\u202f000', '80\u202f000\u202f000'], a: 0, why: 'El 8 ocupa la posición de las unidades de millón (UMM), por lo que vale 8\u202f000\u202f000 unidades.' },
        { t: 'tf', q: 'En el número 6\u202f052\u202f190, la cifra de las centenas de millar es 0.', a: true, why: 'De izquierda a derecha: 6 (UMM), 0 (CM), 5 (DM), 2 (UM), 1 (C), 9 (D), 0 (U). Las centenas de millar valen 0.' },
        { t: 'tf', q: 'Al redondear 4\u202f762\u202f100 a las centenas de millar se obtiene 4\u202f700\u202f000.', a: false, why: 'La cifra de las centenas de millar es 7 y a su derecha hay un 6 (que es ≥ 5), así que sube a 8: el redondeo correcto es 4\u202f800\u202f000.' },
        { t: 'match', q: 'Une cada orden de unidades con su valor en unidades.', pairs: [['1 DM', '10\u202f000'], ['1 CM', '100\u202f000'], ['1 UMM', '1\u202f000\u202f000'], ['1 DMM', '10\u202f000\u202f000']], why: 'Cada orden multiplica por 10 al anterior: DM = 10\u202f000, CM = 100\u202f000, UMM = 1\u202f000\u202f000 y DMM = 10\u202f000\u202f000.' },
        { t: 'order', q: 'Ordena estos números de menor a mayor.', items: ['895\u202f400', '1\u202f020\u202f900', '1\u202f200\u202f000', '1\u202f205\u202f000'], why: '895\u202f400 tiene 6 cifras (es el menor). Los otros tienen 7 cifras y comparamos de izquierda a derecha: 1\u202f020\u202f900 < 1\u202f200\u202f000 < 1\u202f205\u202f000.' },
        { t: 'num', q: 'Escribe con cifras el número formado por <b>5 UMM + 3 CM + 8 UM + 4 D</b>.', a: 5308040, why: '5\u202f000\u202f000 + 300\u202f000 + 8\u202f000 + 40 = 5\u202f308\u202f040. Ponemos ceros en DM, C y U.' },
        { t: 'sort', q: 'Clasifica estos números según su redondeo a las unidades de millón.', cats: ['Se redondea a 5\u202f000\u202f000', 'Se redondea a 6\u202f000\u202f000'], items: [{ x: '5\u202f190\u202f000', c: 0 }, { x: '4\u202f830\u202f000', c: 0 }, { x: '5\u202f420\u202f000', c: 0 }, { x: '5\u202f610\u202f000', c: 1 }, { x: '5\u202f950\u202f000', c: 1 }, { x: '6\u202f210\u202f000', c: 1 }], why: 'Miramos las centenas de millar: 5\u202f190\u202f000, 4\u202f830\u202f000 y 5\u202f420\u202f000 están más cerca de 5 millones; 5\u202f610\u202f000, 5\u202f950\u202f000 y 6\u202f210\u202f000 están más cerca de 6 millones.' },
        { t: 'tap', q: 'En esta descomposición de <b>9\u202f407\u202f050</b> hay dos órdenes equivocados. ¡Cázalos!', words: ['9\u202f407\u202f050', '=', '9\u202fUMM', '+', '4\u202fDM', '+', '7\u202fUM', '+', '5\u202fC'], wrong: [4, 8], why: 'El 4 está en las centenas de millar (<b>4 CM</b>, no 4 DM) y el 5 está en las decenas (<b>5 D</b>, no 5 C).' },
        { t: 'choice', q: '¿Cuántas centenas de millar hay en una unidad de millón?', o: ['10', '100', '1\u202f000'], a: 0, keep: true, why: 'Como 1 UMM = 1\u202f000\u202f000 y 1 CM = 100\u202f000, en un millón hay exactamente 10 centenas de millar.' },
        { t: 'num', q: '¿Cuál es el resultado de <b>350\u202f000 + 650\u202f000</b>?', a: 1000000, why: '350\u202f000 + 650\u202f000 = 1\u202f000\u202f000 (un millón).' },
        { t: 'choice', q: '¿Qué número es una decena de millar mayor que 2\u202f990\u202f000?', o: ['3\u202f000\u202f000', '2\u202f991\u202f000', '3\u202f090\u202f000'], a: 0, why: 'Sumar 1 DM es sumar 10\u202f000: 2\u202f990\u202f000 + 10\u202f000 = 3\u202f000\u202f000.' },
        { t: 'gen', f: () => {
          const umm = R(1, 9), cm = R(0, 9), dm = R(1, 9), um = R(0, 9), c = R(1, 9);
          const n = umm * 1000000 + cm * 100000 + dm * 10000 + um * 1000 + c * 100;
          const parts = [];
          if (umm) parts.push(`${umm} UMM`);
          if (cm) parts.push(`${cm} CM`);
          if (dm) parts.push(`${dm} DM`);
          if (um) parts.push(`${um} UM`);
          if (c) parts.push(`${c} C`);
          return { t: 'num', q: `Escribe el número formado por <b>${parts.join(' + ')}</b>.`, a: n, why: `Sumando el valor de cada orden obtenemos ${fmt(n)}.` };
        } },
        { t: 'gen', f: () => {
          const digs = SH([1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 6);
          const n = Number(digs.join(''));
          const posNames = ['centenas de millar', 'decenas de millar', 'unidades de millar', 'centenas', 'decenas', 'unidades'];
          const mults = [100000, 10000, 1000, 100, 10, 1];
          const idx = R(0, 4);
          const d = digs[idx];
          const val = d * mults[idx];
          return { t: 'num', q: `En el número <b>${fmt(n)}</b>, ¿cuántas unidades vale la cifra <b>${d}</b>?`, a: val, why: `La cifra ${d} ocupa el lugar de las ${posNames[idx]}, así que vale ${d} × ${fmt(mults[idx])} = ${fmt(val)}.` };
        } },
        { t: 'gen', f: () => {
          const ord = P([
            { name: 'unidades de millar', m: 1000 },
            { name: 'decenas de millar', m: 10000 },
            { name: 'centenas de millar', m: 100000 }
          ]);
          let n;
          do { n = R(120000, 980000); } while (n % ord.m === 0 || (n % ord.m) * 2 === ord.m);
          const ans = Math.round(n / ord.m) * ord.m;
          const nextDig = Math.floor((n % ord.m) / (ord.m / 10));
          return { t: 'num', q: `Redondea el número <b>${fmt(n)}</b> a las <b>${ord.name}</b>.`, a: ans, why: `La cifra a la derecha de las ${ord.name} es ${nextDig} (${nextDig >= 5 ? '≥ 5, subimos 1' : '< 5, se queda igual'}), por lo que el redondeo es ${fmt(ans)}.` };
        } }
      ]
    },
    {
      title: 'Los números romanos',
      intro: [
        { i: '🏛️', h: 'Las siete letras romanas', p: 'El sistema romano utiliza siete letras mayúsculas con valor fijo:<br><b>I</b> = 1 · <b>V</b> = 5 · <b>X</b> = 10 · <b>L</b> = 50 · <b>C</b> = 100 · <b>D</b> = 500 · <b>M</b> = 1\u202f000.' },
        { i: '➕', h: 'Reglas de suma y resta', p: '• Si una letra va a la derecha de otra de igual o mayor valor, se <b>suma</b>: <b>XV</b> = 10 + 5 = 15.<br>• Si <b>I, X o C</b> van a la izquierda de una de las dos letras siguientes en valor, se <b>restan</b>:<br><b>IV</b> = 4, <b>IX</b> = 9, <b>XL</b> = 40, <b>XC</b> = 90, <b>CD</b> = 400, <b>CM</b> = 900.' },
        { i: '⚠️', h: 'Reglas de repetición', p: '• Las letras <b>I, X, C y M</b> se pueden repetir seguidas hasta <b>3 veces</b> (III = 3, CCC = 300).<br>• Las letras <b>V, L y D nunca se repiten</b> ni se colocan a la izquierda para restar (no existe VV ni VL).' }
      ],
      ex: [
        { t: 'match', q: 'Une cada letra romana con su valor.', pairs: [['L', '50'], ['C', '100'], ['D', '500'], ['M', '1\u202f000']], why: 'En numeración romana: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500 y M = 1\u202f000.' },
        { t: 'tf', q: 'En los números romanos, las letras V, L y D nunca se pueden repetir seguidas.', a: true, why: 'Porque VV sería 10 (que se escribe X), LL sería 100 (C) y DD sería 1\u202f000 (M).' },
        { t: 'tf', q: 'El número 49 se escribe IL en números romanos.', a: false, why: 'La letra I solo puede restar a V y a X. Para escribir 49 descomponemos 40 (XL) + 9 (IX) = <b>XLIX</b>.' },
        { t: 'choice', q: '¿Cómo se escribe correctamente el número 99 en números romanos?', o: ['XCIX', 'IC', 'XCVIIII'], a: 0, why: 'Se descompone en decenas y unidades: 90 (XC) + 9 (IX) = XCIX. La I nunca resta a la C.' },
        { t: 'num', q: '¿Qué número representa el numeral romano <b>MCDXCII</b>?', a: 1492, why: 'M (1\u202f000) + CD (400) + XC (90) + II (2) = 1\u202f492.' },
        { t: 'num', q: '¿A qué siglo pertenece el año <b>1789</b>? Escribe solo el número.', a: 18, why: 'El año 1789 tiene 17 centenas completas y 89 años más, así que pertenece al siglo XVIII (18).' },
        { t: 'sort', q: 'Clasifica estos numerales romanos según estén bien o mal escritos.', cats: ['Bien escrito', 'Mal escrito'], items: [{ x: 'XLIV', c: 0 }, { x: 'CMXC', c: 0 }, { x: 'MDCVI', c: 0 }, { x: 'XXXX', c: 1 }, { x: 'VV', c: 1 }, { x: 'IC', c: 1 }], why: 'XLIV (44), CMXC (990) y MDCVI (1\u202f606) cumplen todas las reglas. XXXX repite X cuatro veces, VV repite V e IC resta I a C.' },
        { t: 'order', q: 'Ordena estos números romanos de menor a mayor.', items: ['XXXIX', 'XL', 'LIX', 'XC', 'CI'], why: 'XXXIX = 39, XL = 40, LIX = 59, XC = 90 y CI = 101.' },
        { t: 'tap', q: 'En esta lista hay dos numerales romanos mal escritos. ¡Cázalos!', words: ['XIV', 'XXXXII', 'LXXV', 'XCIX', 'CCM', 'MMXXIV'], wrong: [1, 4], why: '42 se escribe <b>XLII</b> (X no se repite 4 veces) y 800 se escribe <b>DCCC</b> (C no puede restar dos veces a M).' },
        { t: 'choice', q: 'En Zaragoza se celebró la Exposición Internacional en el año <b>MMVIII</b>. ¿Qué año fue?', o: ['2008', '2018', '1998'], a: 0, why: 'MM (2\u202f000) + V (5) + III (3) = 2008.' },
        { t: 'choice', q: '¿Cómo se escribe en números romanos el año <b>1978</b>?', o: ['MCMLXXVIII', 'MDCCCCLXXVIII', 'MCMXXCVIII'], a: 0, why: '1\u202f000 (M) + 900 (CM) + 70 (LXX) + 8 (VIII) = MCMLXXVIII.' },
        { t: 'num', q: 'Calcula en nuestro sistema decimal: <b>CLX + XL</b>.', a: 200, why: 'CLX es 160 y XL es 40. Su suma es 160 + 40 = 200 (CC).' },
        { t: 'gen', f: () => {
          const n = R(14, 399);
          const rom = toRoman(n);
          return { t: 'num', q: `¿Qué valor tiene el número romano <b>${rom}</b>?`, a: n, why: `Descomponiendo letra a letra según las reglas de suma y resta, ${rom} equivale a ${n}.` };
        } },
        { t: 'gen', f: () => {
          const n = R(21, 999);
          const ok = toRoman(n);
          const w1 = toRoman(n + P([1, 2, 10, -1, -10]));
          let w2 = toRoman(Math.max(5, n + P([5, 20, -5, -20])));
          if (w2 === ok || w2 === w1) w2 = toRoman(n + 3);
          const opts = SH([ok, w1, w2]);
          return { t: 'choice', q: `¿Cómo se escribe <b>${n}</b> en números romanos?`, o: opts, a: opts.indexOf(ok), why: `Descomponemos ${n} en centenas, decenas y unidades para obtener ${ok}.` };
        } },
        { t: 'gen', f: () => {
          const yr = R(1101, 2025);
          const cent = Math.ceil(yr / 100);
          return { t: 'num', q: `¿A qué siglo (escrito en cifras, por ejemplo 15) pertenece el año <b>${yr}</b>?`, a: cent, why: `Dividimos ${yr} entre 100: como pasa de ${(cent - 1) * 100} sin superar ${cent * 100}, corresponde al siglo ${toRoman(cent)} (${cent}).` };
        } }
      ]
    },
    {
      title: 'Números enteros en acción',
      intro: [
        { i: '🌡️', h: 'Positivos, negativos y el cero', p: 'Los <b>números enteros</b> incluyen los positivos (+1, +2, +3…), el <b>0</b> y los negativos (−1, −2, −3…).<br>Sirven para expresar temperaturas bajo cero (−4 °C), plantas de sótano (−2) o profundidades bajo el nivel del mar (−50 m).' },
        { i: '📏', h: 'La recta numérica y la comparación', p: 'En la recta numérica, los negativos están a la <b>izquierda del 0</b> y los positivos a la <b>derecha</b>.<br>Un número entero es <b>mayor cuanto más a la derecha</b> está: +3 > −1, 0 > −5 y <b>−2 > −8</b> (porque −2 está más cerca del 0).' },
        { i: '🔄', h: 'Valor absoluto y opuesto', p: '• El <b>valor absoluto</b> de un entero es su distancia al 0 (siempre sin signo): |−7| = 7 y |+7| = 7.<br>• El <b>opuesto</b> de un número está a la misma distancia del 0 pero al otro lado: op(+6) = −6 y op(−4) = +4.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué número entero representa «un submarino navega a 120 metros bajo el nivel del mar»?', o: ['−120', '+120', '0'], a: 0, keep: true, why: 'El nivel del mar es el 0; bajo el nivel del mar se expresa con signo negativo: −120.' },
        { t: 'tf', q: 'En la recta numérica, −3 es mayor que −9.', a: true, why: '−3 está más a la derecha (más cerca del 0) que −9, por tanto −3 > −9.' },
        { t: 'tf', q: 'El número 0 es mayor que cualquier número entero negativo.', a: true, why: 'Todos los números negativos están a la izquierda del 0 en la recta numérica.' },
        { t: 'sort', q: 'Clasifica cada situación según se exprese con un entero positivo o negativo.', cats: ['Positivo (+)', 'Negativo (−)'], items: [{ x: 'Cumbre del Aneto a 3\u202f404 m de altitud', c: 0 }, { x: 'Termómetro en Jaca a 5 grados bajo cero', c: 1 }, { x: 'Aparcar en el tercer sótano', c: 1 }, { x: 'Ingresar 25 € en la hucha', c: 0 }, { x: 'Bucear a 15 m de profundidad', c: 1 }, { x: 'Subir a la cuarta planta', c: 0 }], why: 'Altitudes sobre el mar, ingresos y plantas sobre el suelo son positivos (+); temperaturas bajo cero, sótanos y profundidades son negativos (−).' },
        { t: 'order', q: 'Ordena estos números enteros de menor a mayor.', items: ['−12', '−5', '−1', '0', '+4', '+9'], why: 'De izquierda a derecha en la recta numérica: −12 < −5 < −1 < 0 < +4 < +9.' },
        { t: 'match', q: 'Une cada expresión con su resultado.', pairs: [['Opuesto de +8', '−8'], ['Opuesto de −5', '+5'], ['Valor absoluto de −11', '11'], ['Siguiente de −4', '−3']], why: 'El opuesto cambia el signo; el valor absoluto deja la distancia al 0 sin signo; un paso a la derecha de −4 es −3.' },
        { t: 'num', q: 'En Benasque la temperatura era de <b>−4 °C</b> al amanecer y al mediodía subió <b>11 °C</b>. ¿Qué temperatura marcaba al mediodía?', a: 7, u: '°C', neg: true, why: 'Partimos de −4 y sumamos 11: −4 + 11 = +7 °C.' },
        { t: 'num', q: 'Un ascensor está en la planta <b>+3</b> y baja <b>5 plantas</b>. ¿A qué planta llega?', a: -2, neg: true, why: '3 − 5 = −2 (llega al segundo sótano).' },
        { t: 'tap', q: 'En esta frase hay dos comparaciones falsas. ¡Cázalas!', words: ['Sabemos', 'que', '+5>−2,', 'que', '−8>−3,', 'que', '0>−6', 'y', 'que', '−1<−9.'], wrong: [4, 9], why: '−8 es menor que −3 (−8 < −3) y −1 es mayor que −9 (−1 > −9) porque está más cerca del 0.' },
        { t: 'choice', q: '¿Cuántos pisos recorre un ascensor para ir del sótano <b>−3</b> a la planta <b>+4</b>?', o: ['7 pisos', '1 piso', '6 pisos'], a: 0, keep: true, why: 'Sube 3 pisos desde −3 hasta la planta 0, y otros 4 pisos hasta la +4: 3 + 4 = 7 pisos.' },
        { t: 'tf', q: 'Dos números opuestos tienen signos iguales pero distinto valor absoluto.', a: false, why: 'Es justo al revés: dos números opuestos tienen signos contrarios y el mismo valor absoluto (por ejemplo, |−6| = |+6| = 6).' },
        { t: 'num', q: 'Un buceador está a <b>−18 m</b> y asciende <b>7 m</b>. ¿A qué posición respecto al nivel del mar se encuentra ahora?', a: -11, u: 'm', neg: true, why: '−18 + 7 = −11 m (sigue a 11 metros bajo el nivel del mar).' },
        { t: 'gen', f: () => {
          const t0 = R(-12, -1);
          const delta = R(3, 18);
          const up = Math.random() < 0.65;
          const tf = up ? t0 + delta : t0 - delta;
          const city = P(['Teruel', 'Jaca', 'Molina de Aragón', 'Canfranc', 'Sallent de Gállego']);
          return { t: 'num', q: `En ${city} el termómetro marca <b>${t0} °C</b> y la temperatura ${up ? 'sube' : 'baja'} <b>${delta} °C</b>. ¿Qué temperatura marca ahora?`, a: tf, u: '°C', neg: true, why: `Calculamos ${t0} ${up ? '+' : '−'} ${delta} = ${signStr(tf)} °C.` };
        } },
        { t: 'gen', f: () => {
          const mode = P(['op', 'abs', 'step']);
          if (mode === 'op') {
            let n; do { n = R(-25, 25); } while (n === 0);
            return { t: 'num', q: `¿Cuál es el <b>opuesto</b> del número entero <b>${signStr(n)}</b>?`, a: -n, neg: true, why: `El opuesto de ${signStr(n)} tiene la misma distancia al 0 pero signo contrario: ${signStr(-n)}.` };
          }
          if (mode === 'abs') {
            const n = -R(2, 40);
            return { t: 'num', q: `¿Cuál es el <b>valor absoluto</b> de <b>${n}</b> (es decir, |${n}|)?`, a: Math.abs(n), why: `El valor absoluto es la distancia al 0, siempre positiva: |${n}| = ${Math.abs(n)}.` };
          }
          const start = R(-10, 10);
          const dir = Math.random() < 0.5 ? 1 : -1;
          const steps = R(2, 9);
          const ans = start + dir * steps;
          return { t: 'num', q: `En la recta numérica, partes de <b>${signStr(start)}</b> y te mueves <b>${steps} unidades hacia la ${dir > 0 ? 'derecha' : 'izquierda'}</b>. ¿A qué número llegas?`, a: ans, neg: true, why: `Moverse a la ${dir > 0 ? 'derecha es sumar' : 'izquierda es restar'}: ${signStr(start)} ${dir > 0 ? '+' : '−'} ${steps} = ${signStr(ans)}.` };
        } },
        { t: 'gen', f: () => {
          const pool = SH([-19, -16, -14, -11, -9, -7, -5, -4, -2, -1, 0, 2, 5, 8]).slice(0, 4);
          const askMin = Math.random() < 0.5;
          const target = askMin ? Math.min(...pool) : Math.max(...pool);
          const opts = pool.map(signStr);
          return { t: 'choice', q: `¿Cuál de estos números enteros es el <b>${askMin ? 'menor' : 'mayor'}</b>?`, o: opts, a: pool.indexOf(target), why: `En la recta numérica, el que está más a la ${askMin ? 'izquierda' : 'derecha'} es ${signStr(target)}.` };
        } }
      ]
    }
  ]
});

})();
/* ---- m12.js ---- */
(function(){
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

})();
/* ---- m13.js ---- */
(function(){
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

})();
/* ---- m14.js ---- */
(function(){
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

})();
/* ---- m15.js ---- */
(function(){
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

})();
/* ---- m16.js ---- */
(function(){
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

})();
/* ---- m17.js ---- */
(function(){
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

})();
/* ---- m18.js ---- */
(function(){
const R = Adv.rnd, P = Adv.pick, SH = Adv.shuffle;

Adv.register(18, {
  stations: [
    {
      title: 'El tiempo en base 60: horas, minutos y segundos',
      intro: [
        { i: '⏱️', h: '¿Por qué se llama sistema sexagesimal?', p: 'Para medir el tiempo (horas, minutos y segundos) usamos el <b>sistema sexagesimal</b>, cuya base es <b>60</b>: cada unidad equivale a <b>60 unidades</b> del orden inmediatamente inferior.<br><b>1 h = 60 min</b> · <b>1 min = 60 s</b> · <b>1 h = 3 600 s</b>.' },
        { i: '🔄', h: 'Forma compleja e incompleja', p: '<b>Forma compleja</b>: usa varias unidades a la vez (<i>2 h 15 min 30 s</i>).<br><b>Forma incompleja</b>: usa una sola unidad (<i>8 130 s</i>).<br>Para bajar de escalón (h → min → s) <b>multiplicamos por 60</b> en cada paso.' },
        { i: '➗', h: 'De incompleja a compleja', p: 'Para subir de escalón (s → min → h) <b>dividimos entre 60</b>. El <b>cociente</b> son las unidades superiores y el <b>resto</b> son las que quedan. Ejemplo: 135 min ÷ 60 → cociente <b>2 h</b> y resto <b>15 min</b> (2 h 15 min).' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuántos segundos hay en 1 hora?', o: ['3 600 s', '600 s', '60 s', '1 200 s'], a: 0, why: 'Como 1 h = 60 min y cada minuto tiene 60 s, multiplicamos 60 · 60 = 3 600 s.' },
        { t: 'tf', q: '2 horas y media equivalen a 150 minutos.', a: true, why: '2 h son 2 · 60 = 120 min, y media hora son 30 min: 120 + 30 = 150 min.' },
        { t: 'tf', q: 'En el sistema sexagesimal, 1,5 horas es lo mismo que 1 hora y 50 minutos.', a: false, why: '0,5 horas es media hora, es decir, la mitad de 60 minutos: 30 minutos (1 h 30 min), no 50 minutos.' },
        { t: 'num', q: '¿Cuántos minutos son 3 horas y cuarto (3 h 15 min)?', a: 195, u: 'min', why: 'Multiplicamos las horas por 60 y sumamos los minutos: 3 · 60 + 15 = 180 + 15 = 195 min.' },
        { t: 'match', q: 'Une cada expresión en forma compleja con su equivalente en minutos.', pairs: [['1 h 20 min', '80 min'], ['2 h 10 min', '130 min'], ['3 h 5 min', '185 min'], ['1 h 45 min', '105 min']], why: 'Multiplicamos las horas por 60 y sumamos los minutos: 60+20=80, 120+10=130, 180+5=185 y 60+45=105.' },
        { t: 'sort', q: 'Clasifica cada medida de tiempo según esté escrita en forma compleja o incompleja.', cats: ['Forma compleja', 'Forma incompleja'], items: [{ x: '2 h 30 min', c: 0 }, { x: '150 min', c: 1 }, { x: '1 h 12 min 40 s', c: 0 }, { x: '7 200 s', c: 1 }, { x: '45 min 18 s', c: 0 }, { x: '4 h', c: 1 }], why: 'La forma compleja combina dos o más unidades (h, min, s); la incompleja expresa toda la cantidad con una sola unidad.' },
        { t: 'order', q: 'Ordena estas duraciones de menor a mayor tiempo.', items: ['50 min', '1 h 10 min', '90 min', '2 h'], why: 'Pasadas todas a minutos son: 50 min < 70 min (1 h 10 min) < 90 min < 120 min (2 h).' },
        { t: 'choice', q: 'Al dividir 200 segundos entre 60 obtenemos cociente 3 y resto 20. ¿Qué significa?', o: ['200 s = 3 min 20 s', '200 s = 20 min 3 s', '200 s = 3 h 20 min'], a: 0, why: 'Al dividir segundos entre 60, el cociente son los minutos completos (3 min) y el resto los segundos sueltos (20 s).' },
        { t: 'tap', q: 'En esta explicación hay dos datos equivocados. ¡Cázalos!', words: ['Una', 'hora', 'tiene', '100', 'minutos', 'y', 'un', 'minuto', 'tiene', '10', 'segundos.'], wrong: [3, 9], why: 'En el sistema sexagesimal la base es 60: una hora tiene <b>60</b> minutos y un minuto tiene <b>60</b> segundos.' },
        { t: 'num', q: 'Un cortometraje dura 4 200 segundos. ¿Cuántos minutos son?', a: 70, u: 'min', why: 'Para pasar de segundos a minutos dividimos entre 60: 4 200 ÷ 60 = 70 min.' },
        { t: 'choice', q: '¿Cómo se escribe correctamente 1 h 85 min pasando los minutos que sobran a horas?', o: ['2 h 25 min', '1 h 25 min', '2 h 85 min', '2 h 15 min'], a: 0, why: 'Como 85 min = 60 min + 25 min = 1 h 25 min, al sumarlo a 1 h obtenemos 2 h 25 min.' },
        { t: 'tf', q: 'Un cuarto de hora equivale a 900 segundos.', a: true, why: 'Un cuarto de hora son 15 minutos, y 15 · 60 = 900 segundos.' },
        { t: 'gen', f: () => {
          const mode = P(['hm', 'ms']);
          if (mode === 'hm') {
            const h = R(1, 8), m = R(5, 55);
            const tot = h * 60 + m;
            return { t: 'num', q: `Convierte <b>${h} h ${m} min</b> a minutos.`, a: tot, u: 'min', why: `Multiplicamos las horas por 60 y sumamos los minutos: ${h} · 60 + ${m} = ${h * 60} + ${m} = ${tot} min.` };
          }
          const m = R(2, 12), s = R(5, 55);
          const tot = m * 60 + s;
          return { t: 'num', q: `Convierte <b>${m} min ${s} s</b> a segundos.`, a: tot, u: 's', why: `Multiplicamos los minutos por 60 y sumamos los segundos: ${m} · 60 + ${s} = ${m * 60} + ${s} = ${tot} s.` };
        } },
        { t: 'gen', f: () => {
          const h = R(1, 6), m = R(5, 54);
          const tot = h * 60 + m;
          const ok = `${h} h ${m} min`;
          const cands = [`${h + 1} h ${m} min`, `${h} h ${(m + 15) % 60 || 10} min`, `${h + 2} h ${m} min`, `${m} h ${h} min`, `${h} h ${m + 5} min`].filter(x => x !== ok);
          const opts = SH([ok, ...[...new Set(cands)].slice(0, 3)]);
          return { t: 'choice', q: `Expresa <b>${tot} min</b> en horas y minutos (forma compleja).`, o: opts, a: opts.indexOf(ok), why: `Dividimos ${tot} ÷ 60: el cociente es ${h} (${h} · 60 = ${h * 60}) y el resto es ${m}. Por tanto, ${ok}.` };
        } },
        { t: 'gen', f: () => {
          const h = R(1, 3), m = R(1, 25), s = R(5, 55);
          const tot = h * 3600 + m * 60 + s;
          return { t: 'num', q: `¿Cuántos segundos son en total <b>${h} h ${m} min ${s} s</b>?`, a: tot, u: 's', why: `${h} h = ${h * 3600} s y ${m} min = ${m * 60} s. Sumamos todo: ${h * 3600} + ${m * 60} + ${s} = ${tot} s.` };
        } }
      ]
    },
    {
      title: 'Amplitud de ángulos: grados, minutos y segundos',
      intro: [
        { i: '📐', h: 'Las unidades de medida de ángulos', p: 'La amplitud de un ángulo se mide en <b>grados (°)</b>. Para medidas muy precisas, cada grado se divide en <b>60 minutos (′)</b> y cada minuto en <b>60 segundos (″)</b>:<br><b>1° = 60′</b> · <b>1′ = 60″</b> · <b>1° = 3 600″</b>.' },
        { i: '🧭', h: 'Tipos de ángulos según su abertura', p: '<b>Agudo</b>: menos de 90°.<br><b>Recto</b>: exactamente 90°.<br><b>Obtuso</b>: más de 90° y menos de 180°.<br><b>Llano</b>: exactamente 180°.<br><b>Completo</b>: 360° (una vuelta entera).' },
        { i: '🤝', h: 'Complementarios y suplementarios', p: 'Dos ángulos son <b>complementarios</b> si sus amplitudes suman <b>90°</b> (un ángulo recto).<br>Dos ángulos son <b>suplementarios</b> si sus amplitudes suman <b>180°</b> (un ángulo llano).' }
      ],
      ex: [
        { t: 'choice', q: '¿Cómo se escribe en símbolos el ángulo «35 grados, 12 minutos y 40 segundos»?', o: ['35° 12′ 40″', '35″ 12′ 40°', '35° 12″ 40′', '35 h 12 min 40 s'], a: 0, why: 'El símbolo de grado es °, el de minuto angular es una comilla simple (′) y el de segundo angular es una comilla doble (″).' },
        { t: 'tf', q: 'Un grado angular (1°) equivale a 3 600 segundos angulares (3 600″).', a: true, why: 'Como 1° = 60′ y cada minuto son 60″, tenemos 60 · 60 = 3 600″.' },
        { t: 'tf', q: 'Dos ángulos son suplementarios cuando entre los dos suman 90°.', a: false, why: 'Los que suman 90° son <b>complementarios</b>. Los <b>suplementarios</b> suman <b>180°</b>.' },
        { t: 'num', q: '¿Cuántos minutos angulares (′) hay en 5° 20′?', a: 320, u: '′', why: 'Multiplicamos los grados por 60 y sumamos los minutos: 5 · 60 + 20 = 300 + 20 = 320′.' },
        { t: 'match', q: 'Une cada tipo de ángulo con su medida.', pairs: [['Ángulo recto', '90°'], ['Ángulo llano', '180°'], ['Ángulo completo', '360°'], ['Ángulo agudo', 'Menor de 90°']], why: 'El recto mide 90°, el llano equivale a dos rectos (180°), el completo da la vuelta entera (360°) y el agudo no llega a 90°.' },
        { t: 'sort', q: 'Clasifica estos ángulos en agudos, rectos u obtusos.', cats: ['Agudo', 'Recto', 'Obtuso'], items: [{ x: '45°', c: 0 }, { x: '89° 30′', c: 0 }, { x: '90°', c: 1 }, { x: '120°', c: 2 }, { x: '91° 15′', c: 2 }, { x: '18°', c: 0 }], why: '89° 30′ aún es menor que 90° (agudo); 90° exactos es recto; 91° 15′ y 120° están entre 90° y 180° (obtusos).' },
        { t: 'order', q: 'Ordena estos ángulos de menor a mayor amplitud.', items: ['45°', '90°', '135°', '180°', '360°'], why: 'De menor a mayor abertura: agudo (45°) < recto (90°) < obtuso (135°) < llano (180°) < completo (360°).' },
        { t: 'num', q: '¿Cuántos grados mide el ángulo complementario de 35°?', a: 55, u: '°', why: 'Dos ángulos complementarios suman 90°, así que restamos: 90° − 35° = 55°.' },
        { t: 'num', q: '¿Cuántos grados mide el ángulo suplementario de 110°?', a: 70, u: '°', why: 'Dos ángulos suplementarios suman 180°, así que restamos: 180° − 110° = 70°.' },
        { t: 'choice', q: 'Si un ángulo mide 89° 60′, ¿de qué tipo de ángulo se trata realmente?', o: ['Recto, porque 89° 60′ = 90°', 'Agudo, porque empieza por 89°', 'Obtuso, porque se pasa de 90°'], a: 0, why: 'Como 60′ es exactamente 1°, al sumarlo a 89° obtenemos 89° + 1° = 90°, que es un ángulo recto.' },
        { t: 'tap', q: 'Encuentra los dos números erróneos en esta frase.', words: ['Un', 'ángulo', 'recto', 'mide', '100', 'grados', 'y', 'uno', 'llano', 'mide', '200', 'grados.'], wrong: [4, 10], why: 'Un ángulo recto mide <b>90</b> grados y un ángulo llano mide <b>180</b> grados.' },
        { t: 'choice', q: '¿Cuál es el ángulo complementario de 40° 20′?', o: ['49° 40′', '50° 40′', '49° 80′', '139° 40′'], a: 0, why: 'Escribimos 90° como 89° 60′ y restamos: (89° − 40°) = 49° y (60′ − 20′) = 40′ → 49° 40′.' },
        { t: 'gen', f: () => {
          const isComp = Math.random() < 0.5;
          const total = isComp ? 90 : 180;
          const name = isComp ? 'complementario' : 'suplementario';
          const deg = isComp ? R(12, 78) : R(25, 165);
          const ans = total - deg;
          return { t: 'num', q: `Calcula en grados el ángulo <b>${name}</b> de un ángulo de <b>${deg}°</b>.`, a: ans, u: '°', why: `Los ángulos ${name}s suman ${total}°. Restamos: ${total}° − ${deg}° = ${ans}°.` };
        } },
        { t: 'gen', f: () => {
          const d = R(2, 12), m = R(5, 55);
          const tot = d * 60 + m;
          return { t: 'num', q: `Expresa el ángulo <b>${d}° ${m}′</b> únicamente en minutos angulares (′).`, a: tot, u: '′', why: `Como 1° = 60′, multiplicamos ${d} · 60 + ${m} = ${d * 60} + ${m} = ${tot}′.` };
        } },
        { t: 'gen', f: () => {
          const d = R(1, 6), m = R(5, 54);
          const tot = d * 60 + m;
          const ok = `${d}° ${m}′`;
          const cands = [`${d + 1}° ${m}′`, `${d}° ${(m + 15) % 60 || 10}′`, `${d + 2}° ${m}′`, `${m}° ${d}′`, `${d}° ${m + 5}′`].filter(x => x !== ok);
          const opts = SH([ok, ...[...new Set(cands)].slice(0, 3)]);
          return { t: 'choice', q: `Convierte <b>${tot}′</b> a grados y minutos (forma compleja).`, o: opts, a: opts.indexOf(ok), why: `Dividimos ${tot} ÷ 60: el cociente es ${d}° (${d} · 60 = ${d * 60}) y el resto es ${m}′. Resultado: ${ok}.` };
        } }
      ]
    },
    {
      title: 'Sumas, restas y problemas sexagesimales',
      intro: [
        { i: '➕', h: 'Sumar en el sistema sexagesimal', p: 'Colocamos horas con horas (o grados con grados), minutos con minutos y segundos con segundos.<br>Si al sumar los segundos o los minutos salen <b>60 o más</b>, restamos 60 y <b>sumamos 1</b> a la unidad inmediatamente superior.' },
        { i: '➖', h: 'Restar pidiendo prestado 60', p: 'Si en la resta los minutos (o segundos) de arriba son menores que los de abajo, <b>pedimos 1 unidad</b> al orden superior y la transformamos en <b>60</b>.<br>Ejemplo: para restar <b>3 h 10 min − 1 h 40 min</b>, transformamos 3 h 10 min en <b>2 h 70 min</b> y restamos → <b>1 h 30 min</b>.' },
        { i: '🚆', h: 'Problemas con horarios y giros', p: '• <b>Hora de llegada</b> = hora de salida + duración.<br>• <b>Duración</b> = hora de llegada − hora de salida.<br>• En geometría, la suma de los ángulos de un triángulo es siempre <b>180°</b>.' }
      ],
      ex: [
        { t: 'choice', q: 'Al sumar 1 h 40 min + 2 h 35 min obtenemos 3 h 75 min. ¿Cómo se escribe correctamente?', o: ['4 h 15 min', '3 h 15 min', '4 h 25 min', '3 h 75 min'], a: 0, why: 'Como 75 min se pasa de 60, hacemos 75 − 60 = 15 min y sumamos 1 h a las 3 h: 4 h 15 min.' },
        { t: 'choice', q: 'Para calcular la resta 5° 20′ − 2° 50′, ¿cómo transformamos el minuendo (5° 20′) antes de restar?', o: ['En 4° 80′', 'En 4° 120′', 'En 6° 80′', 'En 4° 60′'], a: 0, why: 'Como a 20′ no le podemos quitar 50′, tomamos 1° de los 5° (quedan 4°) y añadimos 60′ a los 20′: 20′ + 60′ = 80′.' },
        { t: 'tf', q: 'La suma de 25° 30′ y 14° 30′ es exactamente 40°.', a: true, why: 'Sumamos por separado: 25° + 14° = 39° y 30′ + 30′ = 60′ = 1°. En total, 39° + 1° = 40°.' },
        { t: 'tf', q: 'Al restar 4 h 15 min − 1 h 45 min el resultado es 3 h 30 min.', a: false, why: 'Pasamos 4 h 15 min a 3 h 75 min y restamos: (3 − 1) h = 2 h y (75 − 45) min = 30 min. El resultado es <b>2 h 30 min</b>.' },
        { t: 'order', q: 'Ordena los pasos para calcular la resta 4 h 10 min − 1 h 35 min.', items: ['Ver que 10 min es menor que 35 min', 'Quitar 1 h a las 4 h y sumar 60 min a los 10 min (3 h 70 min)', 'Restar los minutos: 70 min − 35 min = 35 min', 'Restar las horas: 3 h − 1 h = 2 h (resultado: 2 h 35 min)'], why: 'Primero comprobamos si necesitamos pedir prestado, convertimos 1 h en 60 min y luego restamos minutos y horas.' },
        { t: 'match', q: 'Une cada operación con su resultado ya simplificado.', pairs: [['1 h 30 min + 1 h 30 min', '3 h'], ['2 h 45 min + 1 h 20 min', '4 h 5 min'], ['3 h 10 min − 1 h 20 min', '1 h 50 min'], ['4° 15′ + 2° 35′', '6° 50′']], why: 'En las dos primeras los minutos pasan de 60 y suman 1 h; en la tercera pedimos 60 min prestados (2 h 70 min − 1 h 20 min).' },
        { t: 'num', q: 'Un tren sale de Zaragoza a las 09:40 y llega a Huesca a las 10:35. ¿Cuántos minutos dura el viaje?', a: 55, u: 'min', why: 'De 09:40 a 10:00 van 20 minutos, y de 10:00 a 10:35 van 35 minutos: 20 + 35 = 55 min.' },
        { t: 'sort', q: 'Clasifica estas sumas según si los minutos llegan a 60 (hay llevada) o no.', cats: ['Con llevada a la unidad superior', 'Sin llevada'], items: [{ x: '2 h 40 min + 1 h 30 min', c: 0 }, { x: '15° 20′ + 10° 25′', c: 1 }, { x: '3 h 50 min + 2 h 15 min', c: 0 }, { x: '40° 10′ + 20° 35′', c: 1 }, { x: '18° 45′ + 12° 20′', c: 0 }, { x: '1 h 15 min + 2 h 25 min', c: 1 }], why: 'Hay llevada cuando la suma de los minutos es 60 o mayor: 40+30=70, 50+15=65 y 45+20=65.' },
        { t: 'tap', q: 'En esta suma de ángulos hay dos números mal calculados. ¡Tócalos!', words: ['Al', 'sumar', '10°', '40′', 'más', '20°', '30′', 'obtenemos', '30°', '10′', 'porque', 'sobran', '20′.'], wrong: [8, 12], why: '10° + 20° = 30°, pero 40′ + 30′ = 70′ = 1° 10′. Al sumar 1° quedan <b>31°</b> y sobran <b>10′</b>.' },
        { t: 'num', q: 'Dos ángulos de un triángulo miden 65° y 45°. ¿Cuántos grados mide el tercer ángulo?', a: 70, u: '°', why: 'Los tres ángulos de cualquier triángulo suman 180°. Como 65° + 45° = 110°, el tercero mide 180° − 110° = 70°.' },
        { t: 'choice', q: 'Una película empieza a las 17:45 y dura 1 h 50 min. ¿A qué hora termina?', o: ['A las 19:35', 'A las 18:35', 'A las 19:25', 'A las 18:95'], a: 0, why: 'Sumamos 17 h 45 min + 1 h 50 min = 18 h 95 min. Como 95 min = 1 h 35 min, termina a las 19:35.' },
        { t: 'tf', q: 'Si un entrenamiento empieza a las 16:50 y acaba a las 18:15, ha durado 1 h 25 min.', a: true, why: 'De 16:50 a 17:00 van 10 min y de 17:00 a 18:15 va 1 h 15 min. En total: 1 h 25 min.' },
        { t: 'gen', f: () => {
          const isAngle = Math.random() < 0.5;
          const u1 = isAngle ? '°' : ' h', u2 = isAngle ? '′' : ' min';
          const a1 = R(2, 15), m1 = R(30, 55), a2 = R(1, 12), m2 = R(30, 55);
          const rawM = m1 + m2;
          const totA = a1 + a2 + Math.floor(rawM / 60);
          const totM = rawM % 60;
          const ok = `${totA}${u1} ${totM}${u2}`;
          const cands = [`${a1 + a2}${u1} ${totM}${u2}`, `${totA}${u1} ${totM + 10}${u2}`, `${totA + 1}${u1} ${totM + 5}${u2}`, `${a1 + a2}${u1} ${rawM}${u2}`].filter(x => x !== ok);
          const opts = SH([ok, ...[...new Set(cands)].slice(0, 3)]);
          return { t: 'choice', q: `Calcula la suma: <b>${a1}${u1} ${m1}${u2} + ${a2}${u1} ${m2}${u2}</b>.`, o: opts, a: opts.indexOf(ok), why: `Sumamos: ${a1}+${a2} = ${a1 + a2}${u1} y ${m1}+${m2} = ${rawM}${u2} = 1${u1} ${totM}${u2}. Resultado: ${ok}.` };
        } },
        { t: 'gen', f: () => {
          const isAngle = Math.random() < 0.5;
          const u1 = isAngle ? '°' : ' h', u2 = isAngle ? '′' : ' min';
          const a1 = R(5, 18), m1 = R(5, 25), a2 = R(1, a1 - 2), m2 = R(35, 55);
          const totA = (a1 - 1) - a2;
          const totM = (m1 + 60) - m2;
          const ok = `${totA}${u1} ${totM}${u2}`;
          const cands = [`${a1 - a2}${u1} ${totM}${u2}`, `${totA}${u1} ${m2 - m1}${u2}`, `${a1 - a2}${u1} ${m2 - m1}${u2}`, `${totA + 1}${u1} ${totM + 5}${u2}`].filter(x => x !== ok);
          const opts = SH([ok, ...[...new Set(cands)].slice(0, 3)]);
          return { t: 'choice', q: `Calcula la resta: <b>${a1}${u1} ${m1}${u2} − ${a2}${u1} ${m2}${u2}</b>.`, o: opts, a: opts.indexOf(ok), why: `Como ${m1} < ${m2}, pasamos ${a1}${u1} ${m1}${u2} a ${a1 - 1}${u1} ${m1 + 60}${u2}. Restamos: ${a1 - 1}−${a2} = ${totA}${u1} y ${m1 + 60}−${m2} = ${totM}${u2} → ${ok}.` };
        } },
        { t: 'gen', f: () => {
          const h1 = R(8, 16), m1 = P([15, 20, 25, 30, 35, 40, 45, 50]);
          const dur = R(35, 115);
          const totM = h1 * 60 + m1 + dur;
          const h2 = Math.floor(totM / 60), m2 = totM % 60;
          const pad = n => String(n).padStart(2, '0');
          const act = P(['Un autobús sale de Teruel', 'Un taller de robótica empieza', 'Una excursión por el Moncayo comienza', 'Un partido de baloncesto empieza']);
          return { t: 'num', q: `${act} a las <b>${pad(h1)}:${pad(m1)}</b> y termina a las <b>${pad(h2)}:${pad(m2)}</b>. ¿Cuántos <b>minutos</b> ha durado en total?`, a: dur, u: 'min', why: `Hasta las ${pad(h1 + 1)}:00 van ${60 - m1} min, y desde ahí hasta las ${pad(h2)}:${pad(m2)} van ${dur - (60 - m1)} min más: en total ${dur} min.` };
        } }
      ]
    }
  ]
});

})();
/* ---- m19.js ---- */
(function(){
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

})();
/* ---- m20.js ---- */
(function(){
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

})();
/* ---- m21.js ---- */
(function(){
Adv.register(21, {
  stations: [
    {
      title: 'Partes de la célula y funciones vitales',
      intro: [
        { i: '🔬', h: 'La unidad de la vida', p: 'Todos los seres vivos estamos formados por <b>células</b>. Se llaman la unidad de la vida porque son la parte más pequeña capaz de realizar por sí sola las tres <b>funciones vitales</b>: nutrición, relación y reproducción.' },
        { i: '🥚', h: 'Las partes fundamentales', p: '<b>Membrana celular</b>: envuelta fina que rodea la célula y regula lo que entra y sale.<br><b>Citoplasma</b>: líquido interior donde flotan los orgánulos.<br><b>Núcleo</b>: centro de control que guarda el material genético (ADN).<br><b>Orgánulos</b>: pequeñas estructuras con tareas concretas, como las <b>mitocondrias</b>, que obtienen energía.' },
        { i: '🦠', h: 'Unicelulares y pluricelulares', p: 'Los seres <b>unicelulares</b> tienen una sola célula (como las bacterias o los protozoos). Los seres <b>pluricelulares</b> están formados por muchas células (como las plantas y los animales).' }
      ],
      ex: [
        { t: 'choice', q: '¿Por qué decimos que la célula es la unidad básica de los seres vivos?', o: ['Porque es la parte viva más pequeña que realiza las tres funciones vitales', 'Porque se puede ver siempre a simple vista sin instrumentos', 'Porque solo existe en los animales vertebrados'], a: 0, why: 'Cada célula es un ser vivo en miniatura capaz de nutrirse, relacionarse y reproducirse.' },
        { t: 'match', q: 'Une cada parte de la célula con su función principal.', pairs: [['Membrana celular', 'Rodea la célula y controla el paso de sustancias'], ['Citoplasma', 'Medio líquido interior donde están los orgánulos'], ['Núcleo', 'Contiene el ADN y dirige la actividad celular'], ['Mitocondria', 'Orgánulo que obtiene energía para la célula']], why: 'La membrana protege y filtra, el citoplasma alberga los orgánulos, el núcleo dirige y la mitocondria produce energía.' },
        { t: 'tf', q: 'El material genético (ADN) de nuestras células se encuentra guardado dentro del núcleo.', a: true, why: 'En las células con núcleo definido (eucariotas), como las nuestras, el ADN está protegido en el interior del núcleo.' },
        { t: 'tf', q: 'Los seres unicelulares están formados por millones de células agrupadas.', a: false, why: 'El prefijo «uni-» significa uno: los seres unicelulares, como las bacterias, constan de una única célula.' },
        { t: 'choice', q: '¿Qué instrumento necesitamos para observar la mayoría de las células?', o: ['El microscopio', 'El telescopio', 'El termómetro'], a: 0, why: 'Las células son microscópicas, es decir, tan pequeñas que el ojo humano no las distingue sin un microscopio.' },
        { t: 'sort', q: 'Clasifica estos seres vivos según el número de células que los forman.', cats: ['Unicelulares', 'Pluricelulares'], items: [{ x: 'Bacteria', c: 0 }, { x: 'Paramecio (protozoo)', c: 0 }, { x: 'Levadura', c: 0 }, { x: 'Ser humano', c: 1 }, { x: 'Pino', c: 1 }, { x: 'Águila real', c: 1 }], why: 'Bacterias, protozoos y levaduras tienen una sola célula; las plantas y los animales tenemos millones.' },
        { t: 'order', q: 'Ordena las partes de una célula animal yendo desde el exterior hasta el centro.', items: ['Membrana celular', 'Citoplasma', 'Envoltura del núcleo', 'ADN en el interior del núcleo'], why: 'De fuera adentro encontramos primero la membrana, luego el citoplasma y finalmente el núcleo con el ADN.' },
        { t: 'choice', q: '¿Qué función vital realiza una célula cuando toma nutrientes del medio y los transforma en energía?', o: ['Nutrición', 'Relación', 'Reproducción'], a: 0, why: 'La nutrición celular consiste en obtener sustancias y energía para crecer, repararse y funcionar.' },
        { t: 'choice', q: 'Cuando una célula madre se divide para originar células hijas, está realizando la función de…', o: ['Reproducción', 'Relación', 'Nutrición'], a: 0, why: 'Mediante la reproducción celular, una célula se divide y da lugar a nuevas células.' },
        { t: 'tap', q: 'En esta frase sobre la célula hay dos palabras equivocadas. ¡Cázalas!', words: ['El', 'telescopio', 'permite', 'ver', 'cómo', 'el', 'núcleo', 'rodea', 'por', 'fuera', 'a', 'la', 'membrana.'], wrong: [1, 6], why: 'Las células se ven con el <b>microscopio</b> (no telescopio), y es la <b>membrana</b> la que rodea por fuera a la célula; el núcleo está en el interior.' },
        { t: 'num', q: '¿Cuántas funciones vitales realizan todas las células de los seres vivos?', a: 3, why: 'Son exactamente 3 funciones vitales: nutrición, relación y reproducción.' },
        { t: 'tf', q: 'Las mitocondrias son orgánulos encargados de producir la energía que necesita la célula.', a: true, why: 'Las mitocondrias actúan como centrales energéticas mediante la respiración celular.' }
      ]
    },
    {
      title: 'Célula animal y célula vegetal',
      intro: [
        { i: '🤝', h: 'Lo que tienen en común', p: 'Tanto las células animales como las vegetales son <b>eucariotas</b>: las dos tienen <b>membrana celular</b>, <b>citoplasma</b>, <b>núcleo</b> con ADN y orgánulos como las <b>mitocondrias</b>.' },
        { i: '🌿', h: 'Exclusivo de la célula vegetal', p: 'Las células vegetales poseen además:<br><b>Pared celular</b>: capa rígida por fuera de la membrana que da forma poligonal y mantiene erguida a la planta.<br><b>Cloroplastos</b>: orgánulos verdes con <b>clorofila</b> donde se realiza la <b>fotosíntesis</b>.<br><b>Gran vacuola central</b>: bolsa grande que almacena agua y sustancias.' },
        { i: '🐾', h: 'Cómo es la célula animal', p: 'Carece de pared celular y de cloroplastos. Por eso su forma suele ser más variada y flexible (esférica, estrellada, alargada) y los animales necesitamos alimentarnos de otros seres vivos.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué estructura rígida se sitúa por fuera de la membrana en las células vegetales y les da su forma poligonal?', o: ['La pared celular', 'El cloroplasto', 'La mitocondria'], a: 0, why: 'La pared celular es una envoltura firme exclusiva de las plantas (y otros organismos como hongos) que rodea la membrana.' },
        { t: 'choice', q: '¿En qué orgánulo de la célula vegetal se realiza la fotosíntesis?', o: ['En los cloroplastos', 'En el núcleo', 'En la pared celular'], a: 0, why: 'Los cloroplastos contienen clorofila, que capta la luz solar para fabricar nutrientes mediante la fotosíntesis.' },
        { t: 'tf', q: 'Las células animales tienen cloroplastos para fabricar su propio alimento con la luz del sol.', a: false, why: 'Las células animales no tienen cloroplastos; por eso los animales somos heterótrofos y nos alimentamos de otros seres vivos.' },
        { t: 'tf', q: 'Tanto las células animales como las células vegetales tienen núcleo, membrana, citoplasma y mitocondrias.', a: true, why: 'Ambas comparten la estructura básica de las células eucariotas y necesitan mitocondrias para obtener energía.' },
        { t: 'sort', q: 'Clasifica cada característica según corresponda a las células vegetales o a ambas células (animal y vegetal).', cats: ['Solo en la célula vegetal', 'En animal y vegetal'], items: [{ x: 'Pared celular rígida', c: 0 }, { x: 'Cloroplastos con clorofila', c: 0 }, { x: 'Gran vacuola central que ocupa casi todo el interior', c: 0 }, { x: 'Membrana celular', c: 1 }, { x: 'Núcleo con ADN', c: 1 }, { x: 'Mitocondrias', c: 1 }], why: 'La pared celular, los cloroplastos y la gran vacuola central distinguen a la célula vegetal; membrana, núcleo y mitocondrias están en ambas.' },
        { t: 'match', q: 'Une cada componente de la célula vegetal con su descripción.', pairs: [['Clorofila', 'Pigmento verde que capta la energía de la luz solar'], ['Pared celular', 'Cubierta rígida externa que da soporte a la planta'], ['Gran vacuola', 'Bolsa de gran tamaño que almacena agua y sustancias'], ['Mitocondria', 'Orgánulo que obtiene energía tanto en plantas como en animales']], why: 'Cada parte cumple una tarea clave para que la planta se mantenga firme, almacene agua y obtenga alimento y energía.' },
        { t: 'choice', q: 'Si observas al microscopio una célula con forma prismática regular, pared rígida y granos verdes en su interior, ¿de dónde procede?', o: ['De la hoja de una planta', 'De la piel de un mamífero', 'De la sangre de un ave'], a: 0, why: 'La forma poligonal por la pared rígida y los cloroplastos verdes son rasgos inequívocos de una célula vegetal.' },
        { t: 'order', q: 'Ordena las capas y partes de una célula vegetal desde el exterior hasta su centro.', items: ['Pared celular rígida', 'Membrana celular', 'Citoplasma con cloroplastos y vacuola', 'Núcleo celular'], why: 'La pared celular envuelve por fuera a la membrana; dentro están el citoplasma y el núcleo.' },
        { t: 'tap', q: 'Localiza las dos palabras erróneas en esta descripción de la célula animal.', words: ['La', 'célula', 'animal', 'tiene', 'pared', 'celular', 'rígida', 'y', 'cloroplastos', 'para', 'nutrirse.'], wrong: [4, 8], why: 'Ni la <b>pared</b> celular ni los <b>cloroplastos</b> están presentes en las células animales.' },
        { t: 'choice', q: '¿Para qué le sirve a la célula vegetal tener una gran vacuola llena de agua?', o: ['Para almacenar agua y mantener la célula hinchada y firme (turgente)', 'Para dirigir la división del ADN', 'Para desplazarse nadando por la planta'], a: 0, why: 'La vacuola almacena agua y empuja desde dentro contra la pared celular; cuando falta agua, la planta se marchita.' },
        { t: 'tf', q: 'Las células de la raíz de una planta tienen pared celular aunque no reciban luz.', a: true, why: 'Todas las células vegetales tienen pared celular para dar soporte, estén en la hoja, el tallo o la raíz.' },
        { t: 'choice', q: '¿Por qué las células animales pueden tener formas tan variadas (estrelladas, esféricas, alargadas)?', o: ['Porque no tienen una pared celular rígida que las encierre', 'Porque no tienen membrana celular', 'Porque carecen de citoplasma'], a: 0, why: 'Al tener solo membrana celular flexible y no pared rígida, adoptan la forma más adecuada a su función.' }
      ]
    },
    {
      title: 'Niveles de organización del cuerpo',
      intro: [
        { i: '🧱', h: 'De la célula al tejido', p: 'En los seres pluricelulares, las células se especializan (musculares, nerviosas, sanguíneas…). Un grupo de <b>células del mismo tipo</b> que trabajan juntas para realizar una función forma un <b>tejido</b> (como el tejido muscular o el tejido óseo).' },
        { i: '🫀', h: 'Órganos, sistemas y aparatos', p: 'Varios tejidos distintos se unen para formar un <b>órgano</b> (corazón, estómago, pulmón, hueso).<br>Varios órganos forman un <b>sistema</b> o <b>aparato</b> (sistema nervioso, aparato digestivo).<br>Todos los sistemas y aparatos juntos constituyen el <b>organismo</b>.' },
        { i: '📈', h: 'La escalera de la organización', p: 'El orden de menor a mayor complejidad es siempre:<br><b>1. Célula → 2. Tejido → 3. Órgano → 4. Sistema o aparato → 5. Organismo</b>.' }
      ],
      ex: [
        { t: 'order', q: 'Ordena los niveles de organización del cuerpo humano del más sencillo al más complejo.', items: ['Célula', 'Tejido', 'Órgano', 'Sistema o aparato', 'Organismo'], why: 'Las células forman tejidos; los tejidos, órganos; los órganos, sistemas o aparatos; y el conjunto forma el organismo.' },
        { t: 'choice', q: '¿Qué nivel de organización forman millones de células musculares iguales que se agrupan para contraerse juntas?', o: ['Un tejido', 'Un órgano', 'Un aparato'], a: 0, why: 'Una agrupación de células del mismo tipo especializadas en una misma función es un tejido (en este caso, tejido muscular).' },
        { t: 'match', q: 'Une cada ejemplo del cuerpo humano con el nivel de organización al que pertenece.', pairs: [['Neurona', 'Célula'], ['Tejido epitelial (piel)', 'Tejido'], ['Estómago', 'Órgano'], ['Aparato digestivo', 'Sistema o aparato']], why: 'La neurona es una célula; el epitelio es un tejido; el estómago es un órgano; y el aparato digestivo reúne varios órganos.' },
        { t: 'sort', q: 'Clasifica estos elementos según sean células, órganos o sistemas/aparatos.', cats: ['Célula', 'Órgano', 'Sistema o aparato'], items: [{ x: 'Glóbulo rojo', c: 0 }, { x: 'Fibra muscular (miocito)', c: 0 }, { x: 'Corazón', c: 1 }, { x: 'Pulmón', c: 1 }, { x: 'Aparato respiratorio', c: 2 }, { x: 'Sistema nervioso', c: 2 }], why: 'Glóbulo rojo y fibra muscular son células; corazón y pulmón son órganos; respiratorio y nervioso son aparatos o sistemas.' },
        { t: 'tf', q: 'Un órgano, como el corazón o el estómago, está formado por varios tejidos diferentes que colaboran en una función.', a: true, why: 'Por ejemplo, el estómago combina tejido epitelial, tejido muscular para moverse y tejido nervioso.' },
        { t: 'tf', q: 'Todas las células del cuerpo humano tienen exactamente la misma forma y hacen el mismo trabajo.', a: false, why: 'En los seres pluricelulares las células están diferenciadas y especializadas: las neuronas son estrelladas, las musculares son alargadas, etc.' },
        { t: 'order', q: 'Ordena estos ejemplos concretos de menor a mayor nivel de organización.', items: ['Célula muscular del corazón', 'Tejido muscular cardíaco', 'Corazón', 'Aparato circulatorio', 'Ser humano'], why: 'Va desde una sola célula muscular hasta el organismo completo pasando por tejido, órgano y aparato.' },
        { t: 'choice', q: '¿Qué forman una hoja, un tallo o una raíz dentro de una planta?', o: ['Órganos de la planta', 'Células sueltas', 'Organismos independientes'], a: 0, why: 'Las plantas también tienen niveles de organización: las hojas, el tallo y la raíz son sus órganos, formados por tejidos vegetales.' },
        { t: 'match', q: 'Une cada tipo de célula especializada con su función en nuestro cuerpo.', pairs: [['Glóbulo rojo', 'Transportar oxígeno por la sangre'], ['Neurona', 'Transmitir impulsos nerviosos'], ['Célula muscular', 'Contraerse y relajarse para producir movimiento'], ['Glóbulo blanco', 'Defender el organismo frente a infecciones']], why: 'La forma de cada célula está adaptada a su misión dentro de su tejido.' },
        { t: 'tap', q: 'Encuentra las dos palabras intercambiadas por error en esta explicación.', words: ['Un', 'órgano', 'es', 'un', 'conjunto', 'de', 'células', 'idénticas,', 'y', 'un', 'tejido', 'agrupa', 'varios', 'sistemas.'], wrong: [1, 10], why: 'El conjunto de células idénticas es un <b>tejido</b>, mientras que un <b>órgano</b> agrupa varios tejidos (y varios órganos forman un sistema).' },
        { t: 'num', q: 'En la escalera «Célula → Tejido → Órgano → Sistema/Aparato → Organismo», ¿qué puesto (del 1 al 5) ocupa el nivel de Órgano?', a: 3, why: '1 es Célula, 2 es Tejido y <b>3 es Órgano</b>.' },
        { t: 'choice', q: 'El tejido que recubre la superficie externa del cuerpo (la piel) y tapiza el interior de órganos como el tubo digestivo se llama…', o: ['Tejido epitelial', 'Tejido óseo', 'Tejido nervioso'], a: 0, why: 'El tejido epitelial actúa como capa protectora y de revestimiento por fuera y por dentro del cuerpo.' }
      ]
    }
  ]
});

})();
/* ---- m22.js ---- */
(function(){
Adv.register(22, {
  stations: [
    {
      title: 'Aparatos digestivo y respiratorio',
      intro: [
        { i: '🍎', h: '¿Qué es la función de nutrición?', p: 'Gracias a la <b>nutrición</b> obtenemos de los alimentos y del aire los <b>nutrientes</b> y el <b>oxígeno</b> que nuestras células necesitan para conseguir energía y materiales, y expulsamos los desechos. En ella trabajan juntos cuatro aparatos: <b>digestivo, respiratorio, circulatorio y excretor</b>.' },
        { i: '🥖', h: 'El viaje digestivo', p: 'En la <b>boca</b> los dientes mastican y la saliva forma el bolo alimenticio. Baja por la <b>faringe</b> y el <b>esófago</b> hasta el <b>estómago</b>, donde los jugos gástricos lo transforman. En el <b>intestino delgado</b> (con ayuda del hígado y el páncreas) los nutrientes pasan a la sangre. El <b>intestino grueso</b> absorbe agua y forma las heces.' },
        { i: '🫁', h: 'El aparato respiratorio', p: 'El aire entra por las <b>fosas nasales</b>, pasa por la <b>faringe</b>, la <b>laringe</b> y la <b>tráquea</b>, se reparte por dos <b>bronquios</b> y finos <b>bronquiolos</b> hasta los <b>alvéolos pulmonares</b>. Allí el <b>oxígeno</b> pasa a la sangre y el <b>dióxido de carbono</b> sale al exterior.' }
      ],
      ex: [
        { t: 'order', q: 'Ordena el recorrido que siguen los alimentos a lo largo del tubo digestivo.', items: ['Boca', 'Faringe y esófago', 'Estómago', 'Intestino delgado', 'Intestino grueso y ano'], why: 'El alimento se mastica en la boca, baja por faringe y esófago al estómago, pasa al intestino delgado (absorción) y los restos llegan al intestino grueso.' },
        { t: 'choice', q: '¿En qué parte del aparato digestivo pasan los nutrientes a la sangre (absorción)?', o: ['En el intestino delgado', 'En el esófago', 'En la boca'], a: 0, why: 'Las paredes del intestino delgado tienen multitud de pliegues (vellosidades intestinales) por donde los nutrientes pasan a la sangre.' },
        { t: 'order', q: 'Ordena el camino que sigue el aire cuando inspiramos hasta llegar a los alvéolos.', items: ['Fosas nasales', 'Faringe y laringe', 'Tráquea', 'Bronquios y bronquiolos', 'Alvéolos pulmonares'], why: 'El aire entra por las fosas nasales, atraviesa faringe, laringe y tráquea, y se ramifica en bronquios y bronquiolos hasta los alvéolos.' },
        { t: 'choice', q: '¿Dónde se produce exactamente el intercambio de gases entre el aire de los pulmones y la sangre?', o: ['En los alvéolos pulmonares', 'En las fosas nasales', 'En el esófago'], a: 0, why: 'Los alvéolos son diminutos saquitos rodeados de capilares sanguíneos: el oxígeno pasa a la sangre y el dióxido de carbono pasa al alvéolo.' },
        { t: 'match', q: 'Une cada órgano con la tarea que realiza en la digestión.', pairs: [['Dientes y lengua', 'Trituran el alimento y lo mezclan con la saliva'], ['Esófago', 'Tubo muscular que conduce el bolo hasta el estómago'], ['Estómago', 'Segrega jugos gástricos para descomponer el alimento'], ['Intestino grueso', 'Absorbe agua y compacta los restos en forma de heces']], why: 'Cada tramo del tubo digestivo realiza un paso distinto desde la masticación hasta la expulsión de restos no digeridos.' },
        { t: 'sort', q: 'Clasifica estos órganos según pertenezcan al aparato digestivo o al aparato respiratorio.', cats: ['Aparato digestivo', 'Aparato respiratorio'], items: [{ x: 'Estómago', c: 0 }, { x: 'Hígado', c: 0 }, { x: 'Páncreas', c: 0 }, { x: 'Tráquea', c: 1 }, { x: 'Bronquios', c: 1 }, { x: 'Alvéolos pulmonares', c: 1 }], why: 'Estómago, hígado y páncreas intervienen en la digestión; tráquea, bronquios y alvéolos conducen el aire y cambian gases.' },
        { t: 'tf', q: 'El hígado y el páncreas son glándulas anejas que vierten jugos al intestino delgado para ayudar a digerir los alimentos.', a: true, why: 'El hígado produce la bilis y el páncreas el jugo pancreático; ambos desembocan en el intestino delgado.' },
        { t: 'tf', q: 'Al respirar, nuestro cuerpo toma dióxido de carbono del aire para obtener energía y expulsa oxígeno como desecho.', a: false, why: 'Es al revés: tomamos <b>oxígeno</b> del aire para nuestras células y expulsamos el <b>dióxido de carbono</b> que producen como desecho.' },
        { t: 'choice', q: '¿Cómo se llama el músculo plano situado debajo de los pulmones que sube y baja para ayudarnos a inspirar y espirar?', o: ['Diafragma', 'Bíceps', 'Páncreas'], a: 0, why: 'Cuando el diafragma se contrae y baja, los pulmones se llenan de aire (inspiración); cuando se relaja y sube, el aire sale (espiración).' },
        { t: 'tap', q: 'En esta frase sobre la digestión y la respiración hay dos palabras equivocadas. ¡Cázalas!', words: ['Los', 'nutrientes', 'pasan', 'a', 'la', 'sangre', 'en', 'el', 'esófago', 'y', 'el', 'oxígeno', 'entra', 'por', 'el', 'estómago.'], wrong: [8, 15], why: 'Los nutrientes se absorben en el <b>intestino delgado</b> y el oxígeno pasa a la sangre en los <b>alvéolos pulmonares</b>.' },
        { t: 'num', q: '¿Cuántos aparatos intervienen de forma coordinada en la función de nutrición humana?', a: 4, why: 'Son 4 aparatos: digestivo, respiratorio, circulatorio y excretor.' },
        { t: 'choice', q: '¿Por qué es mejor inspirar el aire por las fosas nasales que por la boca?', o: ['Porque en las fosas nasales el aire se calienta, se humedece y se filtra el polvo', 'Porque el aire que entra por la boca no tiene oxígeno', 'Porque la boca está conectada directamente con los bronquios'], a: 0, why: 'Las fosas nasales limpian, humedecen y templan el aire antes de que baje hacia los pulmones.' }
      ]
    },
    {
      title: 'El aparato circulatorio y la sangre',
      intro: [
        { i: '🩸', h: '¿De qué está hecha la sangre?', p: 'La sangre viaja por todo el cuerpo llevando nutrientes y oxígeno y recogiendo desechos. Está formada por un líquido amarillento llamado <b>plasma</b> y tres tipos de células:<br><b>Glóbulos rojos</b>: transportan oxígeno.<br><b>Glóbulos blancos</b>: nos defienden de infecciones.<br><b>Plaquetas</b>: taponan las heridas para cortar hemorragias.' },
        { i: '🛣️', h: 'Los vasos sanguíneos', p: '<b>Arterias</b>: llevan la sangre que <b>sale del corazón</b> hacia el resto del cuerpo.<br><b>Venas</b>: llevan la sangre de <b>vuelta al corazón</b>.<br><b>Capilares</b>: vasos finísimos que unen arterias y venas y permiten el intercambio con las células.' },
        { i: '❤️', h: 'El corazón y los dos circuitos', p: 'El <b>corazón</b> es un órgano musculoso dividido en cuatro cavidades: dos <b>aurículas</b> arriba (reciben sangre) y dos <b>ventrículos</b> abajo (la impulsan). La sangre recorre la <b>circulación pulmonar</b> (corazón ↔ pulmones) y la <b>circulación general</b> (corazón ↔ todo el cuerpo).' }
      ],
      ex: [
        { t: 'match', q: 'Une cada componente de la sangre con su misión.', pairs: [['Plasma', 'Líquido en el que flotan las células y viajan los nutrientes'], ['Glóbulos rojos', 'Transportan el oxígeno desde los pulmones a las células'], ['Glóbulos blancos', 'Defienden el cuerpo frente a microbios e infecciones'], ['Plaquetas', 'Cierran las heridas formando coágulos para no perder sangre']], why: 'Cada componente sanguíneo tiene una tarea indispensable de transporte, defensa o cicatrización.' },
        { t: 'sort', q: 'Clasifica cada característica según corresponda a arterias, venas o capilares.', cats: ['Arterias', 'Venas', 'Capilares'], items: [{ x: 'Llevan la sangre que sale del corazón', c: 0 }, { x: 'Tienen paredes gruesas y elásticas para soportar el impulso', c: 0 }, { x: 'Devuelven la sangre desde los órganos hasta el corazón', c: 1 }, { x: 'Tienen válvulas internas para que la sangre no retroceda', c: 1 }, { x: 'Son vasos microscópicos con paredes de una sola capa de células', c: 2 }, { x: 'En ellos se intercambian gases y nutrientes con las células', c: 2 }], why: 'Las arterias salen del corazón, las venas regresan a él y los capilares conectan ambos en el interior de los órganos.' },
        { t: 'order', q: 'Ordena el recorrido de la sangre en la circulación pulmonar (menor), desde que sale del corazón hasta que regresa con oxígeno.', items: ['Ventrículo derecho del corazón', 'Arterias pulmonares', 'Capilares de los alvéolos pulmonares (toma oxígeno)', 'Venas pulmonares', 'Aurícula izquierda del corazón'], why: 'En el circuito pulmonar la sangre sale del ventrículo derecho hacia los pulmones, se oxigena en los alvéolos y vuelve a la aurícula izquierda.' },
        { t: 'order', q: 'Ordena el recorrido de la sangre en la circulación general (mayor) para repartir el oxígeno por todo el cuerpo.', items: ['Ventrículo izquierdo del corazón', 'Arteria aorta y arterias del cuerpo', 'Capilares de los órganos (entrega oxígeno y recoge desechos)', 'Venas cavas', 'Aurícula derecha del corazón'], why: 'El ventrículo izquierdo impulsa la sangre oxigenada por la aorta a todos los órganos, y las venas cavas la devuelven a la aurícula derecha.' },
        { t: 'choice', q: '¿Qué cavidades del corazón reciben la sangre que llega por las venas?', o: ['Las aurículas (situadas en la parte superior)', 'Los ventrículos (situados en la parte inferior)', 'Los alvéolos'], a: 0, why: 'Las venas siempre desembocan en las dos aurículas superiores; los ventrículos inferiores son los que impulsan la sangre por las arterias.' },
        { t: 'tf', q: 'La sangre del lado izquierdo del corazón se mezcla libremente con la sangre del lado derecho.', a: false, why: 'Un tabique separa por completo la mitad izquierda (sangre rica en oxígeno) de la mitad derecha (sangre con dióxido de carbono) para que nunca se mezclen.' },
        { t: 'tf', q: 'Los capilares sanguíneos tienen paredes tan finas que a través de ellas pasan el oxígeno y los nutrientes hacia las células.', a: true, why: 'Por eso los capilares llegan a todos los rincones de nuestros tejidos.' },
        { t: 'choice', q: 'Cuando te haces un pequeño corte en la piel y al poco rato deja de sangrar, ¿qué elementos de la sangre han actuado para taponar la herida?', o: ['Las plaquetas', 'Los glóbulos rojos', 'Las nefronas'], a: 0, why: 'Las plaquetas se agrupan en el corte y ayudan a formar un coágulo y una costra.' },
        { t: 'num', q: '¿En cuántas cavidades internas (aurículas y ventrículos en total) está dividido el corazón humano?', a: 4, why: 'Tiene 4 cavidades: 2 aurículas superiores (izquierda y derecha) y 2 ventrículos inferiores (izquierdo y derecho).' },
        { t: 'tap', q: 'Caza las dos palabras equivocadas en esta explicación sobre los vasos sanguíneos.', words: ['Las', 'venas', 'sacan', 'la', 'sangre', 'del', 'corazón', 'y', 'las', 'arterias', 'la', 'traen', 'de', 'vuelta.'], wrong: [1, 9], why: 'Es justo al revés: las <b>arterias</b> sacan la sangre del corazón y las <b>venas</b> la traen de vuelta.' },
        { t: 'choice', q: '¿Cómo se llaman los dos movimientos del latido del corazón (contracción para impulsar la sangre y relajación para llenarse)?', o: ['Sístole y diástole', 'Inspiración y espiración', 'Digestión y absorción'], a: 0, why: 'La contracción del corazón se llama sístole y su relajación se llama diástole.' },
        { t: 'choice', q: '¿Por qué decimos que la circulación humana es doble?', o: ['Porque la sangre pasa dos veces por el corazón en cada vuelta completa (circuito pulmonar y circuito general)', 'Porque tenemos dos corazones', 'Porque la sangre circula en dos sentidos por la misma arteria'], a: 0, why: 'Es doble porque recorre dos circuitos cerrados: el pulmonar (para oxigenarse) y el general (para nutrir todo el cuerpo).' }
      ]
    },
    {
      title: 'La excreción y el trabajo en equipo',
      intro: [
        { i: '🧹', h: '¿Qué es la excreción?', p: 'Al producir energía, las células generan <b>sustancias de desecho</b> que pasan a la sangre. La <b>excreción</b> consiste en limpiar la sangre de esos desechos y expulsarlos al exterior.' },
        { i: '🫘', h: 'El sistema urinario y el sudor', p: 'Los <b>riñones</b> son dos órganos con forma de alubia que <b>filtran la sangre</b> y fabrican la <b>orina</b> (agua con desechos). La orina baja por dos <b>uréteres</b>, se acumula en la <b>vejiga urinaria</b> y sale por la <b>uretra</b>.<br>Las <b>glándulas sudoríparas</b> de la piel expulsan <b>sudor</b> y refrescan el cuerpo.' },
        { i: '⚙️', h: 'Los cuatro aparatos conectados', p: '<b>1. Digestivo</b>: aporta nutrientes a la sangre.<br><b>2. Respiratorio</b>: aporta oxígeno y retira CO<sub>2</sub>.<br><b>3. Circulatorio</b>: reparte nutrientes y oxígeno a las células y recoge desechos.<br><b>4. Excretor</b>: filtra la sangre y elimina los desechos.' }
      ],
      ex: [
        { t: 'order', q: 'Ordena el recorrido que sigue la orina desde que se forma hasta que se expulsa del cuerpo.', items: ['Riñones (filtran la sangre y forman la orina)', 'Uréteres', 'Vejiga urinaria', 'Uretra'], why: 'Los riñones producen la orina, los dos uréteres la conducen hasta la vejiga urinaria donde se almacena, y finalmente sale por la uretra.' },
        { t: 'choice', q: '¿Cuál es la función principal de los riñones?', o: ['Filtrar la sangre para retirar las sustancias de desecho y formar la orina', 'Bombear la sangre hacia los pulmones', 'Transformar los alimentos en nutrientes'], a: 0, why: 'Toda la sangre pasa continuamente por los riñones, que actúan como depuradoras retirando los desechos y el exceso de agua.' },
        { t: 'match', q: 'Une cada parte del aparato excretor con su función.', pairs: [['Riñones', 'Filtran la sangre y elaboran la orina'], ['Uréteres', 'Dos conductos que llevan la orina de los riñones a la vejiga'], ['Vejiga urinaria', 'Órgano elástico que almacena la orina hasta su expulsión'], ['Glándulas sudoríparas', 'Producen el sudor en la piel y regulan la temperatura']], why: 'El sistema urinario y las glándulas sudoríparas colaboran para eliminar sustancias de desecho disueltas en agua.' },
        { t: 'tf', q: 'Las heces fecales que expulsa el intestino grueso son restos de alimentos no digeridos, mientras que la orina contiene desechos filtrados de la sangre.', a: true, why: 'Las heces nunca llegaron a entrar en la sangre ni en las células; la orina sí procede de limpiar la sangre de los desechos celulares.' },
        { t: 'tf', q: 'Beber suficiente agua a diario es fundamental para ayudar a los riñones a limpiar la sangre y reponer el líquido perdido en la orina y el sudor.', a: true, why: 'El agua es el medio en el que se disuelven las sustancias de desecho para poder expulsarlas sin dañar los riñones.' },
        { t: 'sort', q: '¿Qué aparato se encarga de cada tarea dentro de la función de nutrición? Clasifícalos.', cats: ['Digestivo o Respiratorio', 'Circulatorio', 'Excretor'], items: [{ x: 'Pasar los nutrientes de los alimentos a la sangre', c: 0 }, { x: 'Captar oxígeno del aire y expulsar dióxido de carbono', c: 0 }, { x: 'Repartir el oxígeno y los nutrientes a todas las células', c: 1 }, { x: 'Transportar los desechos desde las células hasta los órganos que los eliminan', c: 1 }, { x: 'Filtrar la sangre en los riñones para producir la orina', c: 2 }, { x: 'Eliminar agua y desechos por la piel mediante el sudor', c: 2 }], why: 'Digestivo y respiratorio consiguen las materias primas; circulatorio las transporta; excretor depura la sangre.' },
        { t: 'choice', q: 'Además del aparato excretor, ¿qué otro aparato elimina un desecho producido por las células (el dióxido de carbono)?', o: ['El aparato respiratorio, al espirar el aire', 'El aparato locomotor, al caminar', 'El estómago, con los jugos gástricos'], a: 0, why: 'El dióxido de carbono es un gas de desecho celular que la sangre lleva a los alvéolos pulmonares para expulsarlo al espirar.' },
        { t: 'order', q: 'Ordena el viaje completo de un nutriente y sus desechos en nuestro cuerpo.', items: ['El aparato digestivo extrae el nutriente del alimento en el intestino delgado', 'La sangre del aparato circulatorio lo transporta hasta una célula', 'La célula lo usa con oxígeno para obtener energía y produce desechos', 'La sangre lleva los desechos líquidos hasta los riñones', 'El sistema urinario los expulsa al exterior en la orina'], why: 'Así trabajan integrados los aparatos digestivo, circulatorio, respiratorio y excretor.' },
        { t: 'choice', q: '¿Qué dos funciones cumplen las glándulas sudoríparas de nuestra piel?', o: ['Expulsar sustancias de desecho en el sudor y refrescar el cuerpo cuando hace calor', 'Fabricar glóbulos rojos y almacenar bilis', 'Absorber oxígeno y digerir grasas'], a: 0, why: 'El sudor tiene una composición parecida a una orina muy diluida y, al evaporarse sobre la piel, rebaja nuestra temperatura.' },
        { t: 'tap', q: 'Localiza las dos palabras erróneas en esta descripción del sistema urinario.', words: ['La', 'orina', 'se', 'fabrica', 'en', 'la', 'vejiga', 'y', 'baja', 'por', 'la', 'tráquea', 'hasta', 'salir.'], wrong: [6, 11], why: 'La orina se fabrica en los <b>riñones</b>, baja por los <b>uréteres</b> hasta la vejiga y sale por la <b>uretra</b> (la tráquea es del aparato respiratorio).' },
        { t: 'num', q: '¿Cuántos riñones y cuántos uréteres tiene normalmente el ser humano (escribe el número de riñones)?', a: 2, why: 'Tenemos 2 riñones (uno a cada lado de la columna lumbar) y de cada uno sale un uréter (2 uréteres en total).' },
        { t: 'choice', q: '¿Por qué necesitan nuestras células que lleguen a la vez los nutrientes del digestivo y el oxígeno del respiratorio?', o: ['Para realizar la respiración celular en las mitocondrias y obtener energía', 'Para fabricar clorofila y hacer la fotosíntesis', 'Para transformar el oxígeno en hueso'], a: 0, why: 'En las mitocondrias de cada célula, el oxígeno se combina con los nutrientes para liberar la energía con la que vivimos.' }
      ]
    }
  ]
});

})();
/* ---- m23.js ---- */
(function(){
Adv.register(23, {
  stations: [
    {
      title: 'Los órganos de los sentidos',
      intro: [
        { i: '📡', h: 'La función de relación', p: 'La <b>función de relación</b> nos permite captar lo que ocurre a nuestro alrededor (y dentro del cuerpo), analizar esa información y responder. Intervienen tres partes en cadena: <b>1. Órganos de los sentidos → 2. Sistema nervioso → 3. Aparato locomotor</b>.' },
        { i: '👁️', h: 'Vista y oído', p: 'Cada sentido tiene <b>receptores</b> que captan estímulos y los envían al cerebro por un nervio:<br><b>Vista (ojo)</b>: la luz entra por la <b>pupila</b>, atraviesa el <b>cristalino</b> (que enfoca) y llega a la <b>retina</b>, conectada al <b>nervio óptico</b>.<br><b>Oído</b>: el sonido hace vibrar el <b>tímpano</b> y la cadena de huesecillos hasta el <b>caracol</b>, unido al <b>nervio auditivo</b>.' },
        { i: '👃', h: 'Olfato, gusto y tacto', p: '<b>Olfato (nariz)</b>: la <b>pituitaria amarilla</b> capta sustancias del aire (nervio olfativo).<br><b>Gusto (lengua)</b>: las <b>papilas gustativas</b> detectan los sabores.<br><b>Tacto (piel)</b>: los receptores de la piel detectan presión, textura, dolor y temperatura.' }
      ],
      ex: [
        { t: 'order', q: 'Ordena las tres fases en las que ocurre la función de relación cuando reaccionamos ante algo.', items: ['Los órganos de los sentidos captan un estímulo con sus receptores', 'El sistema nervioso recibe la información, la interpreta y elabora una orden', 'El aparato locomotor (músculos y huesos) ejecuta la respuesta moviendo el cuerpo'], why: 'Primero percibimos el estímulo (sentidos), luego procesamos y decidimos (sistema nervioso) y por último actuamos (locomotor).' },
        { t: 'order', q: 'Ordena el recorrido que sigue la luz en el ojo hasta que la imagen viaja hacia el cerebro.', items: ['Córnea y pupila (orificio central del iris)', 'Cristalino (lente que enfoca la imagen)', 'Retina (capa del fondo con receptores de luz)', 'Nervio óptico'], why: 'La luz atraviesa la córnea y la pupila, el cristalino la enfoca sobre la retina y el nervio óptico lleva la señal al cerebro.' },
        { t: 'order', q: 'Ordena el camino que recorre una vibración sonora dentro del oído.', items: ['Pabellón auditivo (oreja) y conducto auditivo', 'Tímpano (membrana que vibra)', 'Cadena de huesecillos', 'Caracol (donde están los receptores auditivos)', 'Nervio auditivo'], why: 'La oreja recoge el sonido, el tímpano y los huesecillos transmiten la vibración al caracol, y el nervio auditivo la envía al cerebro.' },
        { t: 'match', q: 'Une cada sentido con la zona donde se encuentran sus células receptoras.', pairs: [['Vista', 'Retina (en el fondo del ojo)'], ['Oído', 'Caracol (en el oído interno)'], ['Olfato', 'Pituitaria amarilla (en las fosas nasales)'], ['Gusto', 'Papilas gustativas (en la lengua)']], why: 'Los receptores son células especializadas que transforman la luz, el sonido o las sustancias químicas en impulsos nerviosos.' },
        { t: 'choice', q: '¿Qué parte coloreada del ojo rodea a la pupila y se abre o se cierra para regular la cantidad de luz que entra?', o: ['El iris', 'El tímpano', 'La pituitaria'], a: 0, why: 'El iris es el disco de color del ojo; en su centro está la pupila, que se achica si hay mucha luz y se agranda en la oscuridad.' },
        { t: 'choice', q: 'Además de captar los sonidos, ¿qué otra función importantísima tiene el oído interno?', o: ['Informar de la posición del cuerpo y ayudarnos a mantener el equilibrio', 'Enfocar las imágenes lejanas y cercanas', 'Detectar la temperatura de los objetos'], a: 0, why: 'En el oído interno se encuentra también el órgano del equilibrio, que detecta nuestros giros y movimientos.' },
        { t: 'sort', q: 'Clasifica estas partes según pertenezcan al órgano de la vista (ojo) o al del oído.', cats: ['Ojo (vista)', 'Oído (audición)'], items: [{ x: 'Cristalino', c: 0 }, { x: 'Retina', c: 0 }, { x: 'Iris y pupila', c: 0 }, { x: 'Tímpano', c: 1 }, { x: 'Cadena de huesecillos', c: 1 }, { x: 'Caracol', c: 1 }], why: 'Cristalino, retina, iris y pupila forman parte del globo ocular; tímpano, huesecillos y caracol están en el oído.' },
        { t: 'tf', q: 'El cristalino del ojo funciona como una lente natural que enfoca las imágenes sobre la retina.', a: true, why: 'El cristalino cambia ligeramente su curvatura para que veamos nítidos tanto los objetos cercanos como los lejanos.' },
        { t: 'tf', q: 'Las papilas gustativas se encuentran en el interior del oído y sirven para detectar los sonidos graves.', a: false, why: 'Las papilas gustativas están en la lengua y son los receptores del sentido del gusto.' },
        { t: 'tap', q: 'En esta explicación sobre los sentidos hay dos palabras equivocadas. ¡Cázalas!', words: ['En', 'el', 'ojo,', 'la', 'retina', 'capta', 'la', 'luz', 'y', 'el', 'nervio', 'auditivo', 'la', 'lleva', 'al', 'tímpano.'], wrong: [11, 15], why: 'Desde la retina del ojo, la señal viaja por el nervio <b>óptico</b> hasta el <b>cerebro</b> (nervio auditivo y tímpano pertenecen al oído).' },
        { t: 'num', q: '¿Cuántos sentidos clásicos (vista, oído, olfato, gusto y tacto) estudiamos como principales receptores externos?', a: 5, why: 'Son los 5 sentidos: vista, oído, olfato, gusto y tacto.' },
        { t: 'choice', q: '¿Qué órgano contiene los receptores del sentido del tacto que nos avisan del frío, el calor, la presión o el dolor?', o: ['La piel', 'El cristalino', 'La lengua únicamente'], a: 0, why: 'La piel recubre todo nuestro cuerpo y en su capa interna (la dermis) posee distintos receptores táctiles y térmicos.' }
      ]
    },
    {
      title: 'El sistema nervioso y las neuronas',
      intro: [
        { i: '⚡', h: 'Las neuronas', p: 'El tejido nervioso está formado por células estrelladas llamadas <b>neuronas</b>, que transmiten mensajes eléctricos (impulsos nerviosos). Tienen tres partes:<br><b>Dendritas</b>: prolongaciones cortas que <b>reciben</b> el impulso.<br><b>Cuerpo celular (soma)</b>: zona central con el núcleo.<br><b>Axón</b>: prolongación larga que <b>envía</b> el impulso a la siguiente célula.' },
        { i: '🧠', h: 'Sistema nervioso central (SNC)', p: 'Analiza la información y da órdenes. Está protegido por el cráneo y la columna vertebral:<br><b>Encéfalo</b>: incluye el <b>cerebro</b> (pensamiento y movimientos voluntarios), el <b>cerebelo</b> (coordina movimientos y equilibrio) y el <b>bulbo raquídeo</b> (funciones automáticas como el latido o la respiración).<br><b>Médula espinal</b>: cordón nervioso que dirige los <b>actos reflejos</b>.' },
        { i: '🔌', h: 'Sistema nervioso periférico (SNP)', p: 'Es la red de <b>nervios</b> que recorre todo el cuerpo. Los <b>nervios sensitivos</b> llevan información de los sentidos al SNC; los <b>nervios motores</b> llevan las órdenes del SNC a los músculos.' }
      ],
      ex: [
        { t: 'order', q: 'Ordena el recorrido que sigue el impulso nervioso al atravesar una neurona.', items: ['Dendritas (reciben el impulso)', 'Cuerpo celular o soma', 'Axón (transmite el impulso hacia otra neurona o músculo)'], why: 'El impulso eléctrico entra siempre por las dendritas, pasa por el cuerpo celular y sale por el extremo del axón.' },
        { t: 'match', q: 'Une cada órgano del sistema nervioso central con su función principal.', pairs: [['Cerebro', 'Controla actos voluntarios, memoria, lenguaje y emociones'], ['Cerebelo', 'Coordina la precisión de los movimientos y mantiene el equilibrio'], ['Bulbo raquídeo', 'Regula funciones automáticas como el latido y la respiración'], ['Médula espinal', 'Conduce impulsos nerviosos y dirige los actos reflejos']], why: 'Cerebro, cerebelo y bulbo raquídeo forman el encéfalo dentro del cráneo; la médula espinal recorre el interior de la columna vertebral.' },
        { t: 'sort', q: 'Clasifica cada elemento según pertenezca al sistema nervioso central o al periférico, y el tipo de acto.', cats: ['Acto voluntario (decide el cerebro)', 'Acto reflejo (responde la médula espinal)'], items: [{ x: 'Apartar la mano al instante tras pincharte o quemarte sin querer', c: 1 }, { x: 'Escribir tu nombre en un cuaderno', c: 0 }, { x: 'Chutar un balón hacia la portería después de apuntar', c: 0 }, { x: 'Elegir un libro de la estantería', c: 0 }, { x: 'Cerrar los párpados automáticamente cuando algo se acerca de golpe al ojo', c: 1 }, { x: 'Dar una patada involuntaria cuando el médico golpea suavemente debajo de la rótula', c: 1 }], why: 'Los actos voluntarios son conscientes y los decide el cerebro; los actos reflejos son rapidísimos, automáticos y nos protegen del peligro.' },
        { t: 'order', q: 'Ordena el camino del impulso nervioso en un acto voluntario (por ejemplo, ves un vaso de agua y decides cogerlo).', items: ['Receptores de la retina del ojo', 'Nervio sensitivo (nervio óptico)', 'Cerebro (interpreta la imagen y decide coger el vaso)', 'Médula espinal y nervios motores', 'Músculos del brazo y de la mano'], why: 'En un acto voluntario la señal va del sentido al cerebro por un nervio sensitivo, y la orden baja a los músculos por los nervios motores.' },
        { t: 'order', q: 'Ordena el camino de un acto reflejo cuando te quemas un dedo y retiras la mano antes de pensarlo.', items: ['Receptores del dolor y calor en la piel', 'Nervio sensitivo', 'Médula espinal (elabora la orden urgente sin esperar al cerebro)', 'Nervio motor', 'Músculo del brazo que retira la mano'], why: 'En el arco reflejo la médula espinal ordena retirar la mano directamente para ganar tiempo y evitar una quemadura mayor.' },
        { t: 'choice', q: '¿Qué diferencia hay entre los nervios sensitivos y los nervios motores?', o: ['Los sensitivos llevan señales de los sentidos al SNC y los motores llevan órdenes a los músculos', 'Los sensitivos están en los huesos y los motores en el pelo', 'Los sensitivos mueven los músculos y los motores captan la luz'], a: 0, why: 'Los nervios sensitivos informan de lo que sentimos; los nervios motores transmiten la orden de movimiento.' },
        { t: 'tf', q: 'El encéfalo está formado por tres partes principales: el cerebro, el cerebelo y el bulbo raquídeo.', a: true, why: 'Esas tres estructuras se alojan en el interior del cráneo y constituyen el encéfalo.' },
        { t: 'tf', q: 'Mientras dormimos, el bulbo raquídeo deja de funcionar por completo.', a: false, why: 'El bulbo raquídeo controla funciones involuntarias vitales como la respiración y el ritmo del corazón, que no pueden detenerse nunca.' },
        { t: 'choice', q: '¿Qué estructura ósea protege a la médula espinal a lo largo de la espalda?', o: ['La columna vertebral (formada por las vértebras)', 'El cráneo', 'El fémur'], a: 0, why: 'El cráneo protege al encéfalo y la columna vertebral protege en su interior a la médula espinal.' },
        { t: 'tap', q: 'Caza las dos palabras equivocadas en esta frase sobre las neuronas.', words: ['Las', 'neuronas', 'reciben', 'el', 'impulso', 'por', 'el', 'axón', 'y', 'lo', 'envían', 'por', 'las', 'dendritas.'], wrong: [7, 13], why: 'Es al revés: el impulso entra por las <b>dendritas</b> y sale por el <b>axón</b>.' },
        { t: 'num', q: '¿Cuántas partes principales forman el encéfalo (cerebro, cerebelo y bulbo raquídeo)?', a: 3, why: 'El encéfalo consta de esas 3 grandes partes protegidas por el cráneo.' },
        { t: 'choice', q: 'Cuando montas en bicicleta o caminas sin caerte, ¿qué parte del encéfalo se encarga sobre todo de coordinar tus movimientos y tu equilibrio?', o: ['El cerebelo', 'La médula espinal', 'El nervio óptico'], a: 0, why: 'El cerebelo ajusta la precisión de los movimientos y el equilibrio del cuerpo.' }
      ]
    },
    {
      title: 'El aparato locomotor: huesos y músculos',
      intro: [
        { i: '🦴', h: 'El esqueleto y las articulaciones', p: 'Los <b>huesos</b> son órganos rígidos y resistentes que sostienen el cuerpo, protegen órganos delicados (como el cráneo o las costillas) y permiten el movimiento.<br>Las zonas donde se unen dos o más huesos son las <b>articulaciones</b> (fijas, semimóviles o móviles). En las móviles, los <b>ligamentos</b> sujetan los huesos entre sí.' },
        { i: '💪', h: 'Los músculos y los tendones', p: 'Los <b>músculos</b> son órganos elásticos que se <b>contraen</b> (se acortan y engrosan) y se <b>relajan</b> (vuelven a su tamaño) al recibir órdenes de los nervios motores.<br>Los músculos se unen a los huesos mediante cordones muy resistentes llamados <b>tendones</b>.' },
        { i: '🔄', h: 'Músculos antagonistas', p: 'Los músculos tiran de los huesos, pero no pueden empujarlos. Por eso trabajan en parejas opuestas llamadas <b>antagonistas</b>: para doblar el brazo, el <b>bíceps se contrae</b> y el <b>tríceps se relaja</b>; para estirarlo, ocurre al revés.' }
      ],
      ex: [
        { t: 'match', q: 'Une cada elemento del aparato locomotor con su función.', pairs: [['Huesos', 'Piezas rígidas que dan soporte al cuerpo y protegen órganos internos'], ['Músculos', 'Órganos elásticos que se contraen y relajan para mover el cuerpo'], ['Tendones', 'Unen los músculos a los huesos para transmitir la fuerza'], ['Ligamentos', 'Bandas resistentes que unen un hueso con otro en las articulaciones']], why: 'No confundas tendones con ligamentos: el tendón une músculo con hueso, y el ligamento une hueso con hueso.' },
        { t: 'sort', q: 'Clasifica estos nombres según sean huesos o músculos de nuestro cuerpo.', cats: ['Huesos', 'Músculos'], items: [{ x: 'Fémur y tibia', c: 0 }, { x: 'Húmero, radio y cúbito', c: 0 }, { x: 'Costillas y esternón', c: 0 }, { x: 'Bíceps y tríceps', c: 1 }, { x: 'Cuádriceps y gemelos', c: 1 }, { x: 'Pectorales y abdominales', c: 1 }], why: 'Fémur, tibia, húmero, radio, cúbito, costillas y esternón son huesos del esqueleto; bíceps, tríceps, cuádriceps, gemelos, pectorales y abdominales son músculos.' },
        { t: 'order', q: 'Ordena estos huesos del cuerpo humano yendo desde la cabeza hasta el pie.', items: ['Cráneo', 'Clavícula y esternón (tórax)', 'Pelvis (cadera)', 'Fémur (muslo)', 'Tibia y peroné (pierna)'], why: 'De arriba abajo: el cráneo está en la cabeza, clavícula y esternón en el tronco superior, pelvis en la cadera, fémur en el muslo y tibia/peroné en la pierna.' },
        { t: 'choice', q: '¿Qué ocurre con los músculos del brazo cuando doblamos (flexionamos) el codo?', o: ['El bíceps se contrae y el tríceps se relaja', 'El bíceps y el tríceps se contraen a la vez', 'El tríceps se contrae y el bíceps se relaja'], a: 0, why: 'Bíceps y tríceps son músculos antagonistas: al contraerse el bíceps tira del antebrazo hacia arriba mientras el tríceps se relaja.' },
        { t: 'choice', q: '¿Cuál es el hueso más largo del cuerpo humano y dónde se encuentra?', o: ['El fémur, situado en el muslo', 'El húmero, situado en el brazo', 'El estribo, situado en el oído'], a: 0, why: 'El fémur es el hueso del muslo y es el más largo y fuerte de todo nuestro esqueleto.' },
        { t: 'sort', q: 'Clasifica estas articulaciones según el movimiento que permiten.', cats: ['Articulaciones móviles', 'Articulaciones fijas o semimóviles'], items: [{ x: 'Rodilla', c: 0 }, { x: 'Codo', c: 0 }, { x: 'Hombro', c: 0 }, { x: 'Uniones entre los huesos del cráneo', c: 1 }, { x: 'Uniones entre las vértebras de la columna', c: 1 }], why: 'Rodilla, codo y hombro permiten amplios movimientos (móviles); los huesos del cráneo no se mueven (fijas) y las vértebras solo se mueven un poco (semimóviles).' },
        { t: 'tf', q: 'Los tendones unen los músculos con los huesos, mientras que los ligamentos unen los huesos entre sí.', a: true, why: 'Cuando un músculo se contrae, tira del tendón y este mueve el hueso; los ligamentos mantienen sujeta la articulación.' },
        { t: 'tf', q: 'Las costillas y el esternón forman una caja ósea cuya única función es mover los dedos de la mano.', a: false, why: 'La caja torácica (costillas, esternón y vértebras dorsales) protege órganos vitales del pecho como el corazón y los pulmones.' },
        { t: 'order', q: 'Ordena lo que ocurre paso a paso para que un hueso se mueva.', items: ['Un nervio motor trae la orden eléctrica hasta el músculo', 'El músculo recibe el impulso, se contrae y se acorta', 'El músculo tira del tendón al que está unido', 'El hueso gira en la articulación y produce el movimiento'], why: 'El movimiento empieza con la orden nerviosa, sigue con la contracción muscular y se transmite por el tendón al hueso.' },
        { t: 'tap', q: 'Encuentra las dos palabras erróneas en esta frase sobre el esqueleto.', words: ['El', 'húmero', 'es', 'un', 'hueso', 'del', 'muslo', 'y', 'los', 'tendones', 'unen', 'dos', 'huesos', 'entre', 'sí.'], wrong: [6, 9], why: 'El húmero está en el <b>brazo</b> (el del muslo es el fémur) y los que unen dos huesos entre sí son los <b>ligamentos</b>.' },
        { t: 'num', q: 'En el antebrazo tenemos dos huesos largos paralelos (el radio y el cúbito). ¿Cuántos huesos largos en total suman entre el brazo (húmero) y el antebrazo (radio y cúbito) de una extremidad superior?', a: 3, why: 'Son 3 huesos largos: 1 en el brazo (húmero) + 2 en el antebrazo (radio y cúbito) = 3.' },
        { t: 'choice', q: '¿Qué tejido flexible y suave recubre los extremos de los huesos en las articulaciones móviles para evitar que rocen y se desgasten?', o: ['El cartílago', 'El esmalte dental', 'La retina'], a: 0, why: 'El tejido cartilaginoso (cartílago) y el líquido sinovial amortiguan y facilitan el deslizamiento de los huesos en la articulación.' }
      ]
    }
  ]
});

})();
/* ---- m24.js ---- */
(function(){
Adv.register(24, {
  stations: [
    {
      title: 'Aparatos reproductores y células sexuales',
      intro: [
        { i: '🔬', h: 'La reproducción humana y los gametos', p: 'La reproducción humana es <b>sexual</b>: intervienen dos células reproductoras llamadas <b>gametos</b>. El gameto femenino es el <b>óvulo</b> (célula grande, redondeada e inmóvil) y el masculino es el <b>espermatozoide</b> (célula pequeña con cabeza y flagelo o cola para desplazarse).' },
        { i: '♀️', h: 'Aparato reproductor femenino', p: 'Está formado por órganos internos y externos:<br><b>Ovarios</b>: producen los óvulos.<br><b>Trompas de Falopio</b>: conductos que comunican los ovarios con el útero.<br><b>Útero</b>: órgano hueco y musculoso donde se desarrolla el bebé.<br><b>Vagina</b>: conducto elástico que comunica el útero con el exterior.<br><b>Vulva</b>: conjunto de órganos externos que protegen la entrada.' },
        { i: '♂️', h: 'Aparato reproductor masculino', p: 'Sus órganos principales son:<br><b>Testículos</b>: producen los espermatozoides y están protegidos por una bolsa de piel llamada <b>escroto</b>.<br><b>Conductos deferentes</b>: llevan los espermatozoides hasta la uretra.<br><b>Glándulas anejas</b> (vesículas seminales y próstata): fabrican el líquido que nutre y transporta a los espermatozoides formando el <b>semen</b>.<br><b>Uretra y pene</b>: conducto y órgano externo por donde sale el semen y también la orina.' }
      ],
      ex: [
        { t: 'choice', q: '¿Cómo se llaman las células reproductoras humanas (óvulos y espermatozoides)?', o: ['Gametos', 'Neuronas', 'Plaquetas'], a: 0, why: 'Las células especializadas en la reproducción sexual se denominan <b>gametos</b>: el óvulo (femenino) y el espermatozoide (masculino).' },
        { t: 'choice', q: '¿En qué órganos del aparato reproductor femenino se producen los óvulos?', o: ['En los ovarios', 'En el útero', 'En las trompas de Falopio'], a: 0, why: 'Los dos <b>ovarios</b> son los órganos encargados de contener y madurar los óvulos.' },
        { t: 'tf', q: 'El óvulo es una célula grande y redondeada que no tiene movilidad propia, mientras que el espermatozoide es pequeño y se desplaza gracias a un flagelo.', a: true, why: 'El óvulo acumula sustancias nutritivas para los primeros días tras la fecundación; el espermatozoide posee un flagelo (cola) para nadar.' },
        { t: 'tf', q: 'En el aparato reproductor femenino, la uretra y la vagina son el mismo conducto.', a: false, why: 'En las mujeres son dos conductos independientes: la uretra pertenece al aparato excretor (salida de la orina) y la vagina al reproductor.' },
        { t: 'match', q: 'Une cada órgano del aparato reproductor femenino con su función.', pairs: [['Ovarios', 'Producir y madurar los óvulos'], ['Trompas de Falopio', 'Comunicar los ovarios con el útero'], ['Útero', 'Albergar al bebé durante el embarazo'], ['Vulva', 'Proteger la entrada de los conductos internos']], why: 'Cada parte cumple una función: producción (ovarios), transporte (trompas), gestación (útero) y protección externa (vulva).' },
        { t: 'sort', q: 'Clasifica cada órgano según pertenezca al aparato reproductor femenino o al masculino.', cats: ['Aparato femenino', 'Aparato masculino'], items: [{ x: 'Ovarios', c: 0 }, { x: 'Testículos', c: 1 }, { x: 'Trompas de Falopio', c: 0 }, { x: 'Próstata', c: 1 }, { x: 'Útero', c: 0 }, { x: 'Conductos deferentes', c: 1 }], why: 'Ovarios, trompas de Falopio y útero forman parte del aparato reproductor femenino; testículos, conductos deferentes y próstata, del masculino.' },
        { t: 'choice', q: '¿Qué función tienen la próstata y las vesículas seminales?', o: ['Producir líquidos que nutren y transportan a los espermatozoides', 'Producir los óvulos', 'Filtrar la sangre para formar la orina'], a: 0, why: 'Son glándulas anejas que segregan líquidos nutritivos; junto con los espermatozoides forman el semen.' },
        { t: 'order', q: 'Ordena el recorrido que sigue un espermatozoide desde que se forma hasta que sale al exterior.', items: ['Testículos', 'Conductos deferentes', 'Uretra'], why: 'Los espermatozoides nacen en los testículos, viajan por los conductos deferentes y salen al exterior a través de la uretra.' },
        { t: 'tap', q: 'Dos palabras de esta frase son incorrectas. ¡Cázalas!', words: ['Los', 'ovarios', 'producen', 'espermatozoides', 'y', 'se', 'comunican', 'con', 'el', 'pulmón', 'mediante', 'las', 'trompas.'], wrong: [3, 9], why: 'Los ovarios producen <b>óvulos</b> (no espermatozoides) y se comunican con el <b>útero</b> (no con el pulmón) mediante las trompas de Falopio.' },
        { t: 'num', q: '¿Cuántos ovarios tiene el aparato reproductor femenino?', a: 2, why: 'El aparato reproductor femenino cuenta con <b>2</b> ovarios, situados uno a cada lado del útero.' },
        { t: 'choice', q: '¿Cómo se llama la bolsa de piel que recubre y protege a los testículos?', o: ['Escroto', 'Vulva', 'Placenta'], a: 0, why: 'El <b>escroto</b> envuelve a los testículos y los mantiene a la temperatura adecuada para fabricar espermatozoides.' },
        { t: 'tf', q: 'En el aparato masculino, la uretra sirve tanto para expulsar la orina como para la salida del semen.', a: true, why: 'En los varones, la uretra es un conducto compartido por el aparato excretor y el aparato reproductor.' }
      ]
    },
    {
      title: 'La pubertad y el ciclo menstrual',
      intro: [
        { i: '🌱', h: 'Caracteres sexuales y pubertad', p: 'Los <b>caracteres sexuales primarios</b> son los órganos reproductores con los que nacemos. Entre los 10 y los 14 años aproximadamente comienza la <b>pubertad</b>: el cerebro envía señales (hormonas) para que los órganos reproductores maduren y aparezcan los <b>caracteres sexuales secundarios</b>.' },
        { i: '🔄', h: 'Cambios físicos y emocionales', p: 'En las chicas se desarrollan las mamas, se ensanchan las caderas y comienza la menstruación. En los chicos se ensanchan los hombros, la voz se vuelve más grave y crece vello facial. En ambos aparece vello en pubis y axilas, crece la estatura y es fundamental cuidar la <b>higiene diaria</b>.' },
        { i: '📅', h: 'Ovulación y ciclo menstrual', p: 'Cada <b>28 días</b> aproximadamente, un ovario libera un óvulo maduro: es la <b>ovulación</b>. El útero engrosa su pared interna (endometrio) por si hay fecundación. Si el óvulo no es fecundado, ese tejido se expulsa con una pequeña cantidad de sangre por la vagina: es la <b>menstruación</b> o regla.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué son los caracteres sexuales primarios?', o: ['Los órganos reproductores con los que nacemos', 'Los cambios físicos que aparecen en la pubertad', 'Las hormonas que produce el páncreas'], a: 0, why: 'Los caracteres sexuales <b>primarios</b> son los aparatos reproductores masculino y femenino, presentes desde el nacimiento.' },
        { t: 'choice', q: '¿Cómo se llama la etapa de la vida en la que maduran los órganos reproductores y aparecen los caracteres sexuales secundarios?', o: ['Pubertad', 'Infancia', 'Senectud'], a: 0, why: 'La <b>pubertad</b> es la primera fase de la adolescencia, en la que el cuerpo alcanza la madurez biológica para la reproducción.' },
        { t: 'tf', q: 'La ovulación es la salida de un óvulo maduro desde uno de los ovarios hacia la trompa de Falopio.', a: true, why: 'Ocurre aproximadamente una vez cada 28 días: el ovario libera un óvulo que recorre la trompa de Falopio hacia el útero.' },
        { t: 'tf', q: 'La menstruación se produce cuando el óvulo ha sido fecundado por un espermatozoide.', a: false, why: 'Al contrario: la menstruación ocurre cuando el óvulo <b>no</b> ha sido fecundado y el recubrimiento interno del útero se desprende.' },
        { t: 'sort', q: 'Clasifica cada rasgo según sea un carácter sexual primario o secundario.', cats: ['Carácter primario', 'Carácter secundario'], items: [{ x: 'Ovarios y útero', c: 0 }, { x: 'Testículos y pene', c: 0 }, { x: 'Desarrollo de las mamas', c: 1 }, { x: 'Voz más grave en los chicos', c: 1 }, { x: 'Aparición de vello en axilas y pubis', c: 1 }, { x: 'Trompas de Falopio', c: 0 }], why: 'Los órganos reproductores son caracteres primarios (desde el nacimiento); los rasgos físicos externos que surgen en la pubertad son secundarios.' },
        { t: 'num', q: '¿Cuántos días dura aproximadamente, de media, un ciclo menstrual completo?', a: 28, u: 'días', why: 'La duración media de referencia del ciclo menstrual es de unos <b>28 días</b>, aunque puede variar de una mujer a otra.' },
        { t: 'order', q: 'Ordena las fases de un ciclo menstrual cuando NO hay fecundación.', items: ['Maduración del óvulo en el ovario', 'Ovulación (el óvulo sale a la trompa)', 'Engrosamiento de la pared del útero', 'Menstruación (expulsión del tejido y del óvulo no fecundado)'], why: 'Primero madura el óvulo y sale del ovario (ovulación), mientras el útero se prepara; si no hay fecundación, se produce la menstruación.' },
        { t: 'match', q: 'Une cada término con su definición científica.', pairs: [['Pubertad', 'Etapa en la que madura el aparato reproductor'], ['Ovulación', 'Liberación de un óvulo maduro por el ovario'], ['Menstruación', 'Expulsión periódica del recubrimiento del útero'], ['Hormonas', 'Sustancias químicas que activan los cambios corporales']], why: 'Las hormonas ponen en marcha la pubertad y regulan el ciclo de ovulación y menstruación.' },
        { t: 'tap', q: 'Hay dos errores en esta explicación sobre la pubertad. ¡Cázalos!', words: ['Durante', 'la', 'pubertad', 'desaparecen', 'los', 'caracteres', 'sexuales', 'secundarios', 'y', 'disminuye', 'el', 'sudor.'], wrong: [3, 9], why: 'En la pubertad <b>aparecen</b> los caracteres sexuales secundarios y <b>aumenta</b> la actividad de las glándulas sudoríparas y sebáceas.' },
        { t: 'choice', q: '¿Por qué es especialmente importante reforzar la higiene corporal diaria durante la pubertad?', o: ['Porque las glándulas de la piel producen más sudor y grasa', 'Porque la piel deja de transpirar por completo', 'Porque los huesos crecen más despacio'], a: 0, why: 'En la pubertad se activan más las glándulas sudoríparas y sebáceas; ducharse a diario y mantener una buena higiene previene olores e infecciones.' },
        { t: 'tf', q: 'El ciclo menstrual es un proceso natural y saludable que indica que el aparato reproductor femenino funciona correctamente.', a: true, why: 'La menstruación forma parte del funcionamiento normal del cuerpo femenino desde la pubertad hasta la menopausia.' },
        { t: 'choice', q: '¿Hacia dónde pasa directamente el óvulo nada más salir del ovario durante la ovulación?', o: ['A la trompa de Falopio', 'Al estómago', 'Al exterior del cuerpo'], a: 0, why: 'Al salir del ovario, el óvulo entra en la <b>trompa de Falopio</b> correspondiente para dirigirse hacia el útero.' }
      ]
    },
    {
      title: 'Fecundación, embarazo y parto',
      intro: [
        { i: '✨', h: 'La fecundación y el cigoto', p: 'La <b>fecundación</b> es la unión de un óvulo y un espermatozoide. Se produce en las <b>trompas de Falopio</b>. De esa unión surge una primera célula única llamada <b>cigoto</b>, que empieza a dividirse mientras baja hacia el útero y se convierte en un <b>embrión</b>.' },
        { i: '🤰', h: 'El embarazo (9 meses)', p: 'El embrión se implanta en la pared del útero. Alrededor se forman la <b>bolsa amniótica</b> (llena de líquido que lo protege de golpes) y la <b>placenta</b>, un órgano que conecta al bebé con la madre mediante el <b>cordón umbilical</b> para pasarle oxígeno y nutrientes. A partir del tercer mes el embrión tiene todos sus órganos formados y pasa a llamarse <b>feto</b>.' },
        { i: '👶', h: 'Las tres fases del parto', p: 'Tras unos <b>9 meses</b> (unas 40 semanas), el bebé nace en el <b>parto</b>, que tiene tres fases:<br>1. <b>Dilatación</b>: el cuello del útero se abre poco a poco y se rompe la bolsa amniótica.<br>2. <b>Expulsión</b>: el bebé sale al exterior por la vagina y se corta el cordón umbilical (queda la cicatriz del <b>ombligo</b>).<br>3. <b>Alumbramiento</b>: se expulsa la placenta.' }
      ],
      ex: [
        { t: 'choice', q: '¿En qué parte del aparato reproductor femenino se produce normalmente la fecundación?', o: ['En las trompas de Falopio', 'En el ovario', 'En la vagina'], a: 0, why: 'El encuentro y la unión del óvulo con el espermatozoide ocurren en el interior de las <b>trompas de Falopio</b>.' },
        { t: 'choice', q: '¿Cómo se llama la primera célula que se forma justo al unirse el óvulo y el espermatozoide?', o: ['Cigoto', 'Feto', 'Placenta'], a: 0, why: 'La unión de los dos gametos da origen a una única célula inicial denominada <b>cigoto</b>.' },
        { t: 'tf', q: 'A partir del tercer mes de embarazo, cuando ya se reconocen sus órganos, el embrión pasa a llamarse feto.', a: true, why: 'En las primeras semanas se denomina embrión; desde el tercer mes hasta el parto recibe el nombre de <b>feto</b>.' },
        { t: 'tf', q: 'Durante el embarazo, el feto respira aire directamente con sus pulmones dentro de la bolsa amniótica.', a: false, why: 'Dentro del útero los pulmones no respiran aire: el oxígeno llega desde la sangre de la madre a través de la <b>placenta</b> y el <b>cordón umbilical</b>.' },
        { t: 'match', q: 'Une cada estructura del embarazo con su función principal.', pairs: [['Placenta', 'Intercambiar oxígeno, nutrientes y desechos con la sangre materna'], ['Cordón umbilical', 'Conectar al embrión o feto con la placenta'], ['Bolsa y líquido amniótico', 'Proteger al bebé de golpes y cambios de temperatura'], ['Útero', 'Aumentar de tamaño y contraerse en el parto']], why: 'La placenta y el cordón nutren y oxigenan al feto, mientras la bolsa amniótica y el útero lo alojan y protegen.' },
        { t: 'order', q: 'Ordena cronológicamente las etapas del desarrollo desde la unión de los gametos hasta el nacimiento.', items: ['Fecundación', 'Cigoto', 'Embrión', 'Feto', 'Parto'], why: 'Tras la fecundación se forma el cigoto, que se divide en embrión, a los tres meses pasa a ser feto y a los nueve meses nace en el parto.' },
        { t: 'order', q: 'Ordena las tres fases del parto.', items: ['Dilatación', 'Expulsión', 'Alumbramiento'], why: 'Primero se abre el cuello del útero (dilatación), luego sale el bebé (expulsión) y finalmente se expulsa la placenta (alumbramiento).' },
        { t: 'num', q: '¿Cuántos meses dura aproximadamente el embarazo en la especie humana?', a: 9, u: 'meses', why: 'El embarazo humano dura unos <b>9 meses</b> (alrededor de 40 semanas).' },
        { t: 'sort', q: 'Clasifica cada acontecimiento según la fase del parto en la que ocurre.', cats: ['Dilatación', 'Expulsión', 'Alumbramiento'], items: [{ x: 'El cuello del útero se ensancha poco a poco', c: 0 }, { x: 'Se rompe la bolsa amniótica («romper aguas»)', c: 0 }, { x: 'El bebé sale al exterior a través de la vagina', c: 1 }, { x: 'Se corta el cordón umbilical del recién nacido', c: 1 }, { x: 'El útero desprende y expulsa la placenta', c: 2 }], why: 'La apertura del cuello uterino y rotura de la bolsa son de la dilatación; el nacimiento del bebé, de la expulsión; la salida de la placenta es el alumbramiento.' },
        { t: 'tap', q: 'Encuentra las dos palabras erróneas en este texto sobre el embarazo.', words: ['El', 'feto', 'recibe', 'oxígeno', 'y', 'nutrientes', 'por', 'el', 'cordón', 'espinal', 'desde', 'la', 'tráquea', 'materna.'], wrong: [9, 12], why: 'El oxígeno y los nutrientes llegan por el cordón <b>umbilical</b> desde la <b>placenta</b> materna.' },
        { t: 'choice', q: '¿Qué cicatriz queda en nuestro abdomen tras cortarse y secarse el cordón umbilical después de nacer?', o: ['El ombligo', 'El apéndice', 'El esternón'], a: 0, why: 'El <b>ombligo</b> es la cicatriz que queda en el vientre donde estuvo unido el cordón umbilical.' },
        { t: 'choice', q: '¿Por qué una mujer embarazada debe cuidar su alimentación y evitar por completo el alcohol y el tabaco?', o: ['Porque las sustancias de su sangre pasan al feto a través de la placenta', 'Porque el feto mastica los alimentos en el estómago materno', 'Porque el líquido amniótico se convierte en aire'], a: 0, keep: true, why: 'A través de la placenta pasan nutrientes y oxígeno, pero también pueden cruzar sustancias tóxicas que dañan el desarrollo del feto.' }
      ]
    }
  ]
});

})();
/* ---- m25.js ---- */
(function(){
Adv.register(25, {
  stations: [
    {
      title: 'Dieta equilibrada y hábitos saludables',
      intro: [
        { i: '🥗', h: 'Los nutrientes y sus funciones', p: 'Los alimentos nos aportan <b>nutrientes</b> con tres funciones principales:<br><b>Energética</b>: hidratos de carbono (pasta, pan, patata) y lípidos o grasas (aceite de oliva).<br><b>Constructora</b> (estructural): proteínas (legumbres, pescado, huevos, carne) para crecer y reparar tejidos.<br><b>Reguladora</b>: vitaminas y minerales (frutas y verduras) para que el cuerpo funcione bien, además del <b>agua</b>.' },
        { i: '🫒', h: 'La dieta equilibrada y mediterránea', p: 'Una dieta es <b>equilibrada</b> cuando aporta la cantidad adecuada de cada nutriente y suficiente agua. La <b>dieta mediterránea</b> es un modelo saludable basado en frutas, verduras, legumbres, cereales integrales, pescado y aceite de oliva, reduciendo los ultraprocesados y azúcares.' },
        { i: '🧘', h: 'Higiene, descanso y ejercicio', p: 'La salud es el bienestar <b>físico, mental y social</b>. Para cuidarla necesitamos:<br>• Hacer <b>ejercicio físico</b> a diario.<br>• Dormir entre <b>9 y 10 horas</b> a tu edad.<br>• Lavarse las manos y cepillarse los dientes.<br>• Cuidar la <b>higiene postural</b>: espalda recta al sentarse y mochila bien ajustada en ambos hombros.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué nutrientes tienen principalmente una función constructora o estructural para formar y reparar nuestros músculos y tejidos?', o: ['Las proteínas', 'Las vitaminas', 'El agua'], a: 0, why: 'Las <b>proteínas</b> (presentes en legumbres, huevos, pescado, carne y lácteos) son los «ladrillos» con los que crecen y se reparan las células.' },
        { t: 'choice', q: '¿Cuál es la bebida fundamental que debe acompañar siempre una dieta equilibrada para mantenernos hidratados?', o: ['El agua', 'Los refrescos azucarados', 'Las bebidas energéticas'], a: 0, why: 'El <b>agua</b> es esencial para transportar nutrientes, regular la temperatura y eliminar desechos, sin aportar azúcares añadidos.' },
        { t: 'tf', q: 'Las frutas y las verduras destacan por su función reguladora gracias a su riqueza en vitaminas, minerales y fibra.', a: true, why: 'Las vitaminas, los minerales y la fibra regulan los procesos del organismo y facilitan el tránsito digestivo.' },
        { t: 'tf', q: 'Para cuidar la columna vertebral, es recomendable llevar la mochila escolar colgada de un solo hombro y muy baja.', a: false, why: 'La mochila debe llevarse sujeta en <b>ambos hombros</b>, pegada a la zona dorsal y sin superar aproximadamente el 10 % del peso corporal.' },
        { t: 'match', q: 'Une cada grupo de nutrientes con su función principal en el organismo.', pairs: [['Hidratos de carbono', 'Aportar energía de uso inmediato'], ['Lípidos (grasas saludables)', 'Proporcionar energía de reserva y proteger órganos'], ['Proteínas', 'Construir y reparar tejidos y células'], ['Vitaminas y minerales', 'Regular el buen funcionamiento del cuerpo']], why: 'Hidratos y lípidos son energéticos; las proteínas son constructoras; vitaminas y minerales son reguladores.' },
        { t: 'sort', q: 'Clasifica cada hábito según sea saludable o perjudicial para tu salud.', cats: ['Hábito saludable', 'Hábito perjudicial'], items: [{ x: 'Cepillarse los dientes después de las comidas', c: 0 }, { x: 'Dormir entre 9 y 10 horas cada noche', c: 0 }, { x: 'Abusar de la bollería industrial y los refrescos', c: 1 }, { x: 'Pasar muchas horas sedentarias frente a pantallas', c: 1 }, { x: 'Lavarse las manos con agua y jabón antes de comer', c: 0 }, { x: 'Sentarse con la espalda encorvada frente al ordenador', c: 1 }], why: 'La higiene, el descanso, el movimiento y la buena postura protegen la salud; el sedentarismo y el exceso de azúcar la dañan.' },
        { t: 'choice', q: '¿Qué grasa saludable es la base principal de la tradicional dieta mediterránea?', o: ['El aceite de oliva', 'La manteca industrial hidrogenada', 'La nata azucarada'], a: 0, why: 'El <b>aceite de oliva</b> aporta lípidos de origen vegetal muy beneficiosos para el aparato circulatorio.' },
        { t: 'order', q: 'Ordena de mayor a menor frecuencia recomendada en una alimentación saludable.', items: ['Agua, frutas, verduras y cereales integrales (a diario)', 'Pescado, huevos, legumbres y carnes blancas (varias veces por semana)', 'Dulces, bollería y ultraprocesados (de forma muy ocasional)'], why: 'La base diaria son el agua, los vegetales y los cereales; las proteínas se alternan en la semana; los ultraprocesados deben reducirse al mínimo.' },
        { t: 'tap', q: 'Caza las dos palabras erróneas de esta frase sobre nutrición.', words: ['Las', 'proteínas', 'de', 'las', 'legumbres', 'tienen', 'función', 'destructora', 'y', 'los', 'refrescos', 'hidratan', 'mejor', 'que', 'el', 'agua.'], wrong: [7, 10], why: 'Las proteínas tienen función <b>constructora</b> y la bebida que mejor hidrata es siempre el <b>agua</b>, no los refrescos.' },
        { t: 'choice', q: 'Según la Organización Mundial de la Salud, la salud no es solo no estar enfermo, sino un estado completo de bienestar…', o: ['Físico, mental y social', 'Únicamente muscular y óseo', 'Solamente económico'], a: 0, keep: true, why: 'La salud abarca el buen funcionamiento del cuerpo (físico), el equilibrio emocional (mental) y las buenas relaciones con los demás (social).' },
        { t: 'tf', q: 'Lavarse las manos con agua y jabón antes de comer y después de ir al baño ayuda a cortar la transmisión de microorganismos.', a: true, why: 'El jabón arrastra la suciedad y destruye la envoltura de muchos gérmenes que pasarían de las manos a la boca o a los ojos.' },
        { t: 'num', q: '¿Cuántos hombros deben sujetar las correas de la mochila escolar para repartir bien el peso y no dañar la espalda?', a: 2, u: 'hombros', why: 'Usar las <b>2</b> correas reparte la carga de manera simétrica sobre la espalda y evita desviaciones de la columna.' }
      ]
    },
    {
      title: 'Enfermedades, vacunas y antibióticos',
      intro: [
        { i: '🦠', h: 'Enfermedades infecciosas y no infecciosas', p: 'Las enfermedades <b>no infecciosas</b> no se contagian (alergias, diabetes, fracturas). Las <b>infecciosas</b> están causadas por agentes patógenos microscópicos: <b>bacterias</b>, <b>virus</b>, <b>hongos</b> o <b>protozoos</b>, y pueden transmitirse por el aire, el agua, alimentos o heridas.' },
        { i: '💉', h: 'Las vacunas: entrenar las defensas', p: 'Las <b>vacunas</b> son un método de <b>prevención</b>. Contienen microorganismos debilitados, inactivados o fragmentos suyos que no provocan la enfermedad, pero enseñan a nuestros <b>glóbulos blancos</b> a fabricar <b>anticuerpos</b> y guardar memoria por si entra el microbio real.' },
        { i: '💊', h: 'Los antibióticos: solo contra bacterias', p: 'Los <b>antibióticos</b> (como la penicilina, descubierta por Alexander Fleming) son medicamentos que curan infecciones causadas por <b>bacterias</b>. <b>NO sirven contra los virus</b> (como la gripe o el resfriado). Deben tomarse solo con <b>receta médica</b> para evitar bacterias resistentes.' }
      ],
      ex: [
        { t: 'choice', q: '¿Para qué sirven las vacunas?', o: ['Para prevenir enfermedades entrenando a nuestro sistema inmunitario', 'Para curar una fractura de hueso en el momento', 'Para sustituir al sueño y a la dieta equilibrada'], a: 0, why: 'Las <b>vacunas</b> son preventivas: hacen que el sistema inmunitario cree anticuerpos y memoria defensiva antes de sufrir la infección real.' },
        { t: 'choice', q: '¿Contra qué tipo de microorganismos son eficaces los antibióticos?', o: ['Solo contra las bacterias', 'Solo contra los virus como el de la gripe', 'Contra cualquier dolor muscular o golpe'], a: 0, why: 'Los <b>antibióticos</b> atacan exclusivamente a las <b>bacterias</b>; no tienen ningún efecto sobre los virus.' },
        { t: 'tf', q: 'Si tienes un resfriado común o una gripe (causados por virus), tomar un antibiótico te curará más rápido.', a: false, why: 'Los antibióticos no actúan contra los virus. Tomarlos sin necesidad favorece que las bacterias se hagan resistentes.' },
        { t: 'tf', q: 'Los antibióticos solo deben tomarse cuando los receta un médico y respetando los días y las dosis indicadas.', a: true, why: 'Automedicarse o abandonar el tratamiento antes de tiempo permite que sobrevivan las bacterias más fuertes y generen resistencia.' },
        { t: 'sort', q: 'Clasifica cada enfermedad o dolencia según sea infecciosa o no infecciosa.', cats: ['Infecciosa', 'No infecciosa'], items: [{ x: 'Gripe', c: 0 }, { x: 'Esguince de tobillo', c: 1 }, { x: 'Varicela', c: 0 }, { x: 'Alergia al polen', c: 1 }, { x: 'Salmonelosis', c: 0 }, { x: 'Miopía', c: 1 }], why: 'La gripe, la varicela y la salmonelosis están causadas por microorganismos patógenos; un esguince, una alergia o la miopía no se contagian.' },
        { t: 'match', q: 'Une cada concepto médico con su descripción correcta.', pairs: [['Vacuna', 'Prepara las defensas antes de enfermar'], ['Antibiótico', 'Elimina bacterias cuando ya hay infección'], ['Anticuerpo', 'Defensa fabricada por los glóbulos blancos'], ['Patógeno', 'Microorganismo capaz de causar una enfermedad']], why: 'La vacuna previene gracias a los anticuerpos; el antibiótico trata infecciones bacterianas causadas por bacterias patógenas.' },
        { t: 'order', q: 'Ordena cómo actúa una vacuna en nuestro cuerpo.', items: ['Se administra la vacuna con el agente debilitado o fragmentado', 'Los glóbulos blancos lo reconocen y fabrican anticuerpos', 'El sistema inmunitario guarda memoria defensiva', 'Si entra el microbio real, las defensas lo neutralizan rápidamente'], why: 'Ese es el mecanismo de inmunización: exposición segura, creación de anticuerpos, memoria inmunológica y protección rápida.' },
        { t: 'tap', q: 'En este consejo médico hay dos palabras equivocadas. ¡Cázalas!', words: ['Las', 'vacunas', 'sirven', 'para', 'contagiar', 'enfermedades', 'y', 'los', 'antibióticos', 'destruyen', 'virus', 'como', 'la', 'gripe.'], wrong: [4, 10], why: 'Las vacunas sirven para <b>prevenir</b> enfermedades y los antibióticos destruyen <b>bacterias</b>, nunca virus.' },
        { t: 'choice', q: '¿Qué científico descubrió en 1928 la penicilina, el primer antibiótico de la historia?', o: ['Alexander Fleming', 'Isaac Newton', 'Galileo Galilei'], a: 0, why: 'El médico e investigador escocés <b>Alexander Fleming</b> descubrió que el hongo <i>Penicillium</i> producía una sustancia que mataba bacterias: la penicilina.' },
        { t: 'choice', q: '¿Qué ocurre si usamos mal los antibióticos sin receta médica?', o: ['Aparecen bacterias resistentes que dejan de responder al medicamento', 'Los virus se convierten en vitaminas', 'El cuerpo deja de necesitar agua'], a: 0, why: 'El abuso de antibióticos selecciona a las bacterias más resistentes, haciendo que futuras infecciones sean mucho más difíciles de curar.' },
        { t: 'tf', q: 'Cuando la mayoría de la población está vacunada frente a una enfermedad contagiosa, también se protege indirectamente a los más vulnerables.', a: true, why: 'Al reducirse la circulación del patógeno (inmunidad colectiva o de grupo), es mucho más difícil que llegue a quienes son más frágiles.' },
        { t: 'choice', q: '¿Qué células de nuestra sangre se encargan de defendernos frente a las infecciones y fabricar anticuerpos?', o: ['Los glóbulos blancos (leucocitos)', 'Los glóbulos rojos (eritrocitos)', 'Las plaquetas'], a: 0, why: 'Los <b>glóbulos blancos</b> o leucocitos forman parte del sistema inmunitario; los glóbulos rojos transportan oxígeno y las plaquetas coagulan la sangre.' }
      ]
    },
    {
      title: 'Prevención de riesgos y primeros auxilios',
      intro: [
        { i: '🚨', h: 'La regla PAS y el teléfono 112', p: 'Ante un accidente o emergencia, sigue siempre las tres letras de la conducta <b>PAS</b>:<br>1. <b>Proteger</b> el lugar y a ti misma para que no haya más heridos.<br>2. <b>Avisar</b> a los servicios de emergencia llamando al <b>112</b> (gratuito en toda España y la Unión Europea) o a una persona adulta.<br>3. <b>Socorrer</b> al herido con calma sin hacer nada que desconozcas.' },
        { i: '🩹', h: 'Heridas, quemaduras y sangrado nasal', p: '• <b>Herida leve</b>: lavar con agua y jabón (o suero fisiológico) tras lavarse las manos.<br>• <b>Quemadura leve</b>: enfriar con <b>agua fresca del grifo</b> durante varios minutos; nunca aplicar pasta de dientes ni mantequilla, ni pinchar ampollas.<br>• <b>Sangrado nasal</b>: sentarse e inclinar la cabeza ligeramente <b>hacia delante</b> presionando la parte blanda de la nariz (nunca echar la cabeza hacia atrás).' },
        { i: '🫁', h: 'Atragantamientos y golpes de calor', p: '• <b>Atragantamiento</b>: si la persona puede toser, anímala a <b>seguir tosiendo</b>. Si no puede respirar ni toser, se avisa al 112 y se aplican palmadas interescapulares y compresiones abdominales (<b>maniobra de Heimlich</b>).<br>• <b>Insolación o golpe de calor</b>: llevar a un lugar fresco y a la sombra, aflojar la ropa y dar agua a pequeños sorbos si está consciente.' }
      ],
      ex: [
        { t: 'num', q: '¿Cuál es el número de teléfono único y gratuito de emergencias en toda España y en la Unión Europea?', a: 112, why: 'El <b>112</b> es el teléfono de emergencias europeo: funciona gratis las 24 horas y coordina ambulancias, bomberos y policía.' },
        { t: 'order', q: 'Ordena las tres actuaciones de la conducta PAS ante un accidente.', items: ['Proteger (asegurar la zona para evitar nuevos peligros)', 'Avisar (llamar al 112 y explicar qué pasa y dónde)', 'Socorrer (atender al herido dentro de lo que sepamos hacer)'], why: 'Las siglas <b>PAS</b> significan <b>P</b>roteger, <b>A</b>visar y <b>S</b>ocorrer, siempre en ese orden.' },
        { t: 'choice', q: '¿Qué es lo primero que debes hacer ante una quemadura leve en la mano?', o: ['Poner la zona bajo un chorro suave de agua fresca del grifo durante varios minutos', 'Untar pasta de dientes o mantequilla sobre la piel', 'Pinchar las ampollas con una aguja'], a: 0, why: 'El <b>agua fresca</b> detiene el calor residual en la piel. La pasta de dientes o la mantequilla retienen el calor y contaminan la quemadura, y las ampollas protegen de infecciones.' },
        { t: 'choice', q: 'Si a una compañera le sangra la nariz en el patio, ¿cuál es la pauta correcta de primeros auxilios?', o: ['Sentarla con la cabeza ligeramente hacia delante y presionar la parte blanda de la nariz', 'Echarle la cabeza totalmente hacia atrás para que trague la sangre', 'Taponar la nariz con barro o papel sucio'], a: 0, why: 'Inclinar la cabeza ligeramente <b>hacia delante</b> y presionar las aletas nasales durante unos minutos corta la hemorragia y evita tragar sangre.' },
        { t: 'tf', q: 'Ante un accidente de tráfico grave, debemos sacar y mover inmediatamente a los heridos aunque no haya peligro de incendio.', a: false, why: 'Nunca se debe mover a un herido grave (salvo peligro inminente como fuego) porque podríamos agravar una lesión en la columna vertebral.' },
        { t: 'tf', q: 'Si una persona se atraganta pero puede hablar y toser con fuerza, lo mejor es animarla a que siga tosiendo y no darle golpes en la espalda mientras tose eficazmente.', a: true, why: 'La tos es el mecanismo más eficaz para expulsar un cuerpo extraño cuando la obstrucción es parcial.' },
        { t: 'match', q: 'Une cada situación de primeros auxilios con la actuación correcta.', pairs: [['Herida superficial o raspón', 'Lavar con agua y jabón con las manos limpias'], ['Quemadura superficial', 'Enfriar con agua fresca corriente sin aplicar cremas caseras'], ['Sangrado por la nariz', 'Inclinar la cabeza hacia delante y presionar la parte blanda'], ['Agotamiento por calor', 'Llevar a la sombra, refrescar y dar agua a sorbos si está consciente']], why: 'Son pautas básicas universales que evitan infecciones y complicaciones.' },
        { t: 'sort', q: 'Clasifica cada acción en primeros auxilios como correcta o incorrecta.', cats: ['Actuación correcta', 'Actuación incorrecta'], items: [{ x: 'Lavar una herida leve con agua y jabón', c: 0 }, { x: 'Poner pasta de dientes en una quemadura', c: 1 }, { x: 'Echar la cabeza hacia atrás si sangra la nariz', c: 1 }, { x: 'Llamar al 112 indicando el lugar exacto de la emergencia', c: 0 }, { x: 'Pinchar las ampollas de una quemadura', c: 1 }, { x: 'Lavarse las manos antes de curar un raspón', c: 0 }], why: 'El agua limpia, la higiene de manos y el aviso al 112 son medidas seguras; los remedios caseros como pasta de dientes o echar la cabeza atrás son errores peligrosos.' },
        { t: 'tap', q: 'Caza las dos palabras equivocadas en esta pauta de primeros auxilios.', words: ['En', 'una', 'quemadura', 'leve', 'debemos', 'aplicar', 'mantequilla', 'y', 'pinchar', 'las', 'ampollas', 'con', 'cuidado.'], wrong: [6, 8], why: 'En una quemadura leve debemos aplicar <b>agua</b> fresca y <b>respetar</b> (no pinchar) las ampollas para evitar infecciones.' },
        { t: 'choice', q: '¿Cómo se llama la maniobra de compresiones abdominales que se aplica cuando alguien sufre un atragantamiento total y no puede toser ni respirar?', o: ['Maniobra de Heimlich', 'Maniobra de Fleming', 'Maniobra de Arquímedes'], a: 0, why: 'La <b>maniobra de Heimlich</b> comprime el abdomen hacia dentro y hacia arriba para empujar el aire de los pulmones y desalojar el objeto.' },
        { t: 'choice', q: '¿Qué medida ayuda a prevenir un golpe de calor al hacer senderismo en verano por Aragón?', o: ['Beber agua con frecuencia, usar gorra y protector solar y evitar las horas centrales del día', 'Caminar a mediodía sin beber agua para acostumbrar al cuerpo', 'Usar ropa oscura, gruesa y ajustada al sol'], a: 0, why: 'La hidratación constante, la protección solar y evitar el sol intenso del mediodía previenen la insolación y el golpe de calor.' },
        { t: 'tf', q: 'Antes de tocar o limpiar la herida de otra persona, debemos lavarnos bien las manos o usar guantes limpios.', a: true, why: 'Así protegemos al herido para que no entren bacterias en su herida y nos protegemos también a nosotras mismas.' }
      ]
    }
  ]
});

})();
/* ---- m26.js ---- */
(function(){
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

})();
/* ---- m27.js ---- */
(function(){
const R = Adv.rnd, P = Adv.pick;

Adv.register(27, {
  stations: [
    {
      title: 'Las fuerzas, la gravedad y el rozamiento',
      intro: [
        { i: '💥', h: '¿Qué es una fuerza?', p: 'Una <b>fuerza</b> es toda acción capaz de <b>deformar</b> un cuerpo o de <b>cambiar su estado de movimiento</b> (ponerlo en marcha, pararlo, acelerarlo o desviar su trayectoria). En el Sistema Internacional se mide en <b>newtons (N)</b>.' },
        { i: '🧱', h: 'Cuerpos según cómo se deforman', p: '<b>Elásticos</b>: recuperan su forma inicial cuando deja de actuar la fuerza (goma elástica, muelle).<br><b>Plásticos</b>: se deforman y <b>no</b> recuperan su forma (plastilina, arcilla fresca).<br><b>Rígidos o frágiles</b>: no se deforman; si la fuerza es muy grande, se rompen (vidrio, cerámica).' },
        { i: '🌍', h: 'Contacto y distancia: rozamiento y gravedad', p: 'Las fuerzas pueden ser <b>de contacto</b> (empujar una puerta) o <b>a distancia</b>.<br>El <b>rozamiento</b> es una fuerza de contacto que se opone al movimiento entre dos superficies.<br>La <b>gravedad</b> es la fuerza a distancia con la que la Tierra atrae a los cuerpos hacia su centro: produce el <b>peso</b>.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué unidad se utiliza en el Sistema Internacional para medir las fuerzas?', o: ['El newton (N)', 'El kilogramo (kg)', 'El julio (J)'], a: 0, why: 'Las fuerzas (incluido el peso) se miden en <b>newtons (N)</b>; el kilogramo mide la masa y el julio mide la energía.' },
        { t: 'sort', q: 'Clasifica estos objetos según cómo se comportan al aplicarles una fuerza moderada.', cats: ['Elástico', 'Plástico', 'Rígido'], items: [{ x: 'Muelle de acero', c: 0 }, { x: 'Goma del pelo', c: 0 }, { x: 'Plastilina', c: 1 }, { x: 'Barro húmedo', c: 1 }, { x: 'Vaso de vidrio', c: 2 }, { x: 'Plato de porcelana', c: 2 }], why: 'El muelle y la goma recuperan su forma (elásticos); la plastilina y el barro quedan deformados (plásticos); el vidrio y la porcelana no se deforman y se rompen si la fuerza es excesiva (rígidos).' },
        { t: 'tf', q: 'La fuerza de rozamiento actúa siempre en el mismo sentido que el movimiento, ayudando a que los objetos vayan más rápido.', a: false, why: 'Es al revés: el <b>rozamiento</b> siempre se <b>opone</b> al movimiento y frena los objetos que se deslizan o ruedan.' },
        { t: 'tf', q: 'La masa de una astronauta es la misma en la Tierra que en la Luna, pero su peso en la Luna es menor porque allí la gravedad es más débil.', a: true, why: 'La <b>masa</b> (cantidad de materia, en kg) no cambia de lugar, mientras que el <b>peso</b> es la fuerza de atracción gravitatoria y depende de la gravedad del astro.' },
        { t: 'choice', q: '¿Por qué una pelota que rueda por el suelo del patio acaba deteniéndose aunque nadie la toque?', o: ['Por la fuerza de rozamiento con el suelo y el aire', 'Porque se queda sin gravedad', 'Porque los cuerpos tienden a perder su masa'], a: 0, why: 'El <b>rozamiento</b> entre la pelota y el suelo se opone a su avance hasta detenerla.' },
        { t: 'match', q: 'Une cada concepto con su descripción correcta.', pairs: [['Gravedad', 'Fuerza a distancia que atrae los cuerpos hacia el centro de la Tierra'], ['Rozamiento', 'Fuerza de contacto que se opone al deslizamiento entre dos superficies'], ['Cuerpo elástico', 'Recupera su forma original cuando cesa la fuerza'], ['Cuerpo plástico', 'Permanece deformado después de aplicar la fuerza']], why: 'La gravedad actúa a distancia y el rozamiento por contacto; elasticidad y plasticidad describen cómo responde un material a la deformación.' },
        { t: 'tap', q: 'En esta frase científica se han colado dos palabras erróneas. ¡Cázalas!', words: ['El', 'rozamiento', 'es', 'una', 'fuerza', 'a', 'distancia', 'que', 'acelera', 'los', 'objetos', 'que', 'deslizan.'], wrong: [6, 8], why: 'El rozamiento es una fuerza de <b>contacto</b> (no a distancia) y <b>frena</b> (no acelera) los objetos que deslizan.' },
        { t: 'order', q: 'Ordena estas superficies de MENOR a MAYOR fuerza de rozamiento al deslizar sobre ellas un disco.', items: ['Pista de hielo pulido', 'Suelo de madera barnizada', 'Acera de cemento rugoso', 'Camino de grava y piedras'], why: 'Cuanto más lisa y resbaladiza es la superficie, menor es el rozamiento; cuanto más áspera y rugosa, mayor es el rozamiento.' },
        { t: 'choice', q: 'Si lanzamos una pelota verticalmente hacia arriba, ¿qué hace la fuerza de la gravedad mientras la pelota sube?', o: ['Tira de ella hacia abajo, frenándola hasta que se para y cae', 'Empuja la pelota hacia arriba hasta el punto más alto', 'Desaparece mientras sube y solo actúa cuando empieza a bajar'], a: 0, why: 'La gravedad terrestre actúa en todo momento hacia abajo: frena la subida y después acelera la caída.' },
        { t: 'num', q: 'En la Tierra, cada kilogramo de masa pesa aproximadamente 10 N (tomando g ≈ 10 N/kg). ¿Cuántos newtons pesa una mochila de 4 kg?', a: 40, u: 'N', why: 'Peso = masa · g = 4 kg · 10 N/kg = 40 N.' },
        { t: 'tf', q: 'Golpear con una raqueta una pelota de tenis que viene hacia ti para devolverla al otro campo es un ejemplo de fuerza que cambia la dirección y el sentido del movimiento.', a: true, why: 'Las fuerzas no solo paran o ponen en marcha un objeto: también pueden cambiar la dirección y el sentido en que se mueve.' },
        { t: 'choice', q: '¿Para qué llevan dibujo con relieves las suelas de las zapatillas de montaña y los neumáticos de los coches?', o: ['Para aumentar el rozamiento con el suelo y no resbalar', 'Para anular la fuerza de la gravedad al caminar', 'Para disminuir el rozamiento y deslizar como en el hielo'], a: 0, why: 'Un buen agarre necesita suficiente <b>rozamiento</b> entre la suela o el neumático y el suelo, especialmente si está mojado.' },
        { t: 'gen', f: () => {
          const f1 = R(15, 60), f2 = R(10, 50);
          const same = Math.random() < 0.5;
          const res = same ? f1 + f2 : Math.abs(f1 - f2);
          return same
            ? { t: 'num', q: `Dos niñas empujan una caja en la <b>misma dirección y el mismo sentido</b> con fuerzas de <b>${f1} N</b> y <b>${f2} N</b>. ¿Cuál es la fuerza resultante total en newtons?`, a: res, u: 'N', why: `Cuando dos fuerzas actúan en la misma dirección y el mismo sentido, sus intensidades se suman: ${f1} + ${f2} = ${res} N.` }
            : { t: 'num', q: `En el juego de la soga, un equipo tira hacia la izquierda con <b>${f1} N</b> y el otro hacia la derecha con <b>${f2} N</b>. ¿Cuál es el valor de la fuerza resultante en newtons?`, a: res, u: 'N', why: `Cuando dos fuerzas actúan en la misma dirección pero en sentidos opuestos, se restan: |${f1} − ${f2}| = ${res} N.` };
        } }
      ]
    },
    {
      title: 'El magnetismo y los imanes',
      intro: [
        { i: '🧲', h: 'Imanes y materiales magnéticos', p: 'El <b>magnetismo</b> es la propiedad que tienen los <b>imanes</b> de atraer a distancia objetos de <b>hierro, níquel o cobalto</b> (y aleaciones como el acero). Hay imanes <b>naturales</b>, como el mineral <b>magnetita</b>, e imanes <b>artificiales</b> fabricados por las personas.' },
        { i: '🧭', h: 'Los dos polos de un imán', p: 'Todo imán tiene dos extremos donde su fuerza es máxima: el <b>polo norte (N)</b> y el <b>polo sur (S)</b>.<br><b>Polos del mismo nombre se repelen</b> (N con N, o S con S).<br><b>Polos de distinto nombre se atraen</b> (N con S).<br>Si partes un imán por la mitad, obtienes dos imanes completos, cada uno con su polo N y su polo S.' },
        { i: '🌐', h: 'La Tierra es un gigantesco imán', p: 'Gracias a su núcleo metálico, la Tierra genera un <b>campo magnético</b>. Por eso la aguja imantada de una <b>brújula</b> gira sola hasta alinearse en dirección norte-sur y nos permite orientarnos.' }
      ],
      ex: [
        { t: 'choice', q: '¿Cómo se llama el mineral que actúa como un imán natural?', o: ['Magnetita', 'Cuarzo', 'Calcita'], a: 0, why: 'La <b>magnetita</b> es un mineral de hierro que posee magnetismo de forma natural.' },
        { t: 'choice', q: '¿Qué ocurre cuando acercamos el polo norte de un imán al polo norte de otro imán?', o: ['Se repelen', 'Se atraen', 'No ejercen ninguna fuerza entre sí'], a: 0, why: 'Los polos magnéticos del <b>mismo nombre se repelen</b> (norte con norte, o sur con sur) y los de distinto nombre se atraen.' },
        { t: 'tf', q: 'Si un imán de barra se rompe por la mitad, nos quedamos con un trozo que solo tiene polo norte y otro que solo tiene polo sur.', a: false, why: 'No se pueden aislar los polos de un imán: al partirlo se forman dos imanes más pequeños, cada uno con su propio polo norte y su propio polo sur.' },
        { t: 'tf', q: 'La fuerza magnética es una fuerza a distancia que puede actuar incluso a través del aire, del papel o del vidrio.', a: true, why: 'El campo magnético atraviesa medios como el aire, el cartón o el cristal sin necesidad de contacto directo.' },
        { t: 'sort', q: 'Clasifica estos objetos según sean atraídos por un imán o no.', cats: ['Atraído por un imán', 'NO atraído por un imán'], items: [{ x: 'Clavo de hierro', c: 0 }, { x: 'Clip de acero', c: 0 }, { x: 'Moneda de níquel', c: 0 }, { x: 'Tapón de plástico', c: 1 }, { x: 'Goma de borrar', c: 1 }, { x: 'Palo de madera', c: 1 }], why: 'El hierro, el níquel, el cobalto y el acero (aleación de hierro) son ferromagnéticos; el plástico, la goma y la madera no son atraídos por los imanes.' },
        { t: 'match', q: 'Une cada situación magnética con lo que sucede.', pairs: [['Polo norte frente a polo sur', 'Atracción magnética'], ['Polo sur frente a polo sur', 'Repulsión magnética'], ['Aguja imantada de una brújula', 'Se orienta siguiendo el campo magnético terrestre'], ['Imán acercado a un trozo de madera', 'No hay fuerza magnética apreciable']], why: 'Polos opuestos se atraen, polos iguales se repelen, la brújula responde al magnetismo terrestre y la madera no es un material magnético.' },
        { t: 'choice', q: '¿Por qué funciona una brújula en cualquier lugar de la superficie terrestre?', o: ['Porque la Tierra se comporta como un enorme imán con su propio campo magnético', 'Porque la aguja es atraída por la fuerza de rozamiento del viento', 'Porque el Sol imanta el plástico de la carcasa'], a: 0, why: 'El núcleo externo de hierro y níquel fundidos en movimiento convierte a la Tierra en un gran imán que orienta la aguja imantada.' },
        { t: 'tap', q: 'Encuentra las dos palabras erróneas en esta explicación sobre los imanes.', words: ['En', 'un', 'imán,', 'los', 'polos', 'opuestos', 'se', 'repelen', 'y', 'atraen', 'objetos', 'de', 'plástico.'], wrong: [7, 12], why: 'Los polos opuestos se <b>atraen</b> (no se repelen) y los imanes atraen objetos de <b>hierro, níquel o cobalto</b> (no de plástico).' },
        { t: 'num', q: 'Si tienes un imán de barra y lo partes en 3 trozos separados, ¿cuántos polos magnéticos (sumando todos los polos norte y sur de los 3 trozos) tendrás en total?', a: 6, u: 'polos', why: 'Cada uno de los 3 trozos se convierte en un imán completo con 2 polos (1 norte y 1 sur): 3 · 2 = 6 polos en total.' },
        { t: 'order', q: 'Ordena lo que ocurre cuando espolvoreas limaduras de hierro sobre una cartulina colocada encima de un imán.', items: ['Colocamos la cartulina horizontalmente sobre el imán de barra', 'Espolvoreamos las limaduras de hierro de forma repartida', 'Damos unos golpecitos suaves a la cartulina', 'Las limaduras dibujan las líneas del campo y se concentran en los polos'], why: 'Este experimento clásico permite visualizar el <b>campo magnético</b>, que es más intenso en los polos del imán.' },
        { t: 'choice', q: '¿Cómo se llama la región del espacio que rodea a un imán y en la que se notan sus fuerzas magnéticas?', o: ['Campo magnético', 'Zona de rozamiento', 'Órbita gravitatoria'], a: 0, why: 'La zona de influencia alrededor de un imán se denomina <b>campo magnético</b>.' },
        { t: 'tf', q: 'El aluminio de una lata de refresco y el cobre de un cable son fuertemente atraídos por un imán doméstico igual que el hierro.', a: false, why: 'Aunque son metales y conducen la electricidad, ni el aluminio ni el cobre son ferromagnéticos: un imán común atrae al hierro, al níquel y al cobalto.' }
      ]
    },
    {
      title: 'Máquinas simples y compuestas',
      intro: [
        { i: '🛠️', h: 'Las máquinas simples', p: 'Las <b>máquinas</b> nos ayudan a realizar un trabajo con menos esfuerzo o con más comodidad. Las <b>máquinas simples</b> tienen una o muy pocas piezas: la <b>palanca</b>, la <b>polea</b>, el <b>plano inclinado</b> (rampa), la <b>rueda</b>, la <b>cuña</b> y el <b>tornillo</b>.' },
        { i: '⚖️', h: 'La palanca y sus tres grados', p: 'Una <b>palanca</b> es una barra rígida que gira sobre un <b>punto de apoyo (fulcro)</b>. En ella actúan la <b>potencia</b> (fuerza que hacemos) y la <b>resistencia</b> (carga que queremos vencer).<br><b>1.er grado</b>: el apoyo está en medio (balancín, tijeras).<br><b>2.º grado</b>: la resistencia está en medio (carretilla, cascanueces).<br><b>3.er grado</b>: la potencia está en medio (pinzas de depilar, caña de pescar).' },
        { i: '🚲', h: 'Polea, plano inclinado y máquinas compuestas', p: 'La <b>polea</b> es una rueda acanalada por la que pasa una cuerda: cambia la dirección de la fuerza (tiramos hacia abajo para subir un cubo). El <b>plano inclinado</b> es una rampa que permite subir cargas haciendo menos fuerza.<br>Las <b>máquinas compuestas</b> (como la bicicleta o la lavadora) combinan varias máquinas simples u <b>operadores mecánicos</b> (engranajes, ejes, cadenas).' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué máquina simple es una rampa que usamos para subir una caja pesada a una furgoneta haciendo menos fuerza?', o: ['Un plano inclinado', 'Una polea', 'Una palanca de tercer grado'], a: 0, why: 'Una rampa es un <b>plano inclinado</b>: recorremos más distancia, pero necesitamos aplicar menos fuerza que levantando la caja a pulso.' },
        { t: 'choice', q: 'En una palanca de PRIMER grado, ¿qué elemento se sitúa entre los otros dos?', o: ['El punto de apoyo (fulcro)', 'La resistencia', 'La potencia'], a: 0, why: 'En las palancas de <b>primer grado</b> (como un balancín o unas tijeras), el <b>punto de apoyo</b> está entre la potencia y la resistencia.' },
        { t: 'sort', q: 'Clasifica cada ejemplo según sea una máquina simple o una máquina compuesta.', cats: ['Máquina simple', 'Máquina compuesta'], items: [{ x: 'Rampa (plano inclinado)', c: 0 }, { x: 'Palanca', c: 0 }, { x: 'Polea simple', c: 0 }, { x: 'Bicicleta', c: 1 }, { x: 'Lavadora', c: 1 }, { x: 'Reloj mecánico de engranajes', c: 1 }], why: 'El plano inclinado, la palanca y la polea son máquinas simples; la bicicleta, la lavadora y el reloj combinan muchos operadores y son máquinas compuestas.' },
        { t: 'match', q: 'Une cada herramienta con el tipo de palanca al que pertenece.', pairs: [['Tijeras o balancín', 'Palanca de 1.er grado (apoyo en medio)'], ['Carretilla o cascanueces', 'Palanca de 2.º grado (resistencia en medio)'], ['Pinzas de hielo o de depilar', 'Palanca de 3.er grado (potencia en medio)']], why: 'Truco para recordarlo (A-R-P): en 1.er grado va en medio el <b>A</b>poyo, en 2.º la <b>R</b>esistencia y en 3.er grado la <b>P</b>otencia.' },
        { t: 'tf', q: 'Una polea simple fija nos permite levantar el cubo de un pozo tirando de la cuerda cómodamente hacia abajo en vez de tirar hacia arriba.', a: true, why: 'La polea simple fija cambia el sentido de la fuerza: aprovecha nuestro propio peso para tirar hacia abajo y elevar la carga.' },
        { t: 'tf', q: 'En una carretilla de obra, el punto de apoyo está en las empuñaduras que sujetamos con las manos.', a: false, why: 'En una carretilla, el <b>punto de apoyo</b> es el eje de la rueda delantera, la <b>resistencia</b> es la carga en la cubeta (en medio) y la <b>potencia</b> la hacemos en las empuñaduras: por eso es de 2.º grado.' },
        { t: 'choice', q: 'Si queremos subir un barril a una plataforma de 1 metro de altura haciendo la MENOR fuerza posible, ¿qué rampa debemos elegir?', o: ['Una rampa larga y de poca pendiente (por ejemplo, de 4 metros)', 'Una rampa muy corta y empinada (de 1,2 metros)', 'Subirlo verticalmente sin rampa'], a: 0, why: 'En un plano inclinado, cuanto menor es la pendiente (rampa más larga para la misma altura), menor es la fuerza necesaria para subir la carga.' },
        { t: 'tap', q: 'Hay dos palabras equivocadas en la descripción de una bicicleta. ¡Cázalas!', words: ['La', 'bicicleta', 'es', 'una', 'máquina', 'simple', 'cuyos', 'pedales', 'mueven', 'imanes', 'unidos', 'por', 'una', 'cadena.'], wrong: [5, 9], why: 'La bicicleta es una máquina <b>compuesta</b> (no simple) y la cadena une <b>engranajes o ruedas dentadas</b> (platos y piñones, no imanes).' },
        { t: 'order', q: 'Ordena cómo se transmite el movimiento en una bicicleta desde nuestras piernas hasta el suelo.', items: ['Empujamos los pedales con los pies (potencia)', 'Los pedales hacen girar el plato (rueda dentada delantera)', 'La cadena transmite el giro al piñón de la rueda trasera', 'La rueda trasera gira y empuja el suelo, haciendo avanzar la bicicleta'], why: 'Así funcionan los operadores mecánicos encadenados en una máquina compuesta como la bicicleta.' },
        { t: 'choice', q: '¿Qué son los engranajes que encontramos dentro de muchas máquinas compuestas?', o: ['Ruedas dentadas que encajan entre sí para transmitir el movimiento de giro', 'Cables aislantes que frenan la gravedad', 'Imanes naturales tallados en forma de rampa'], a: 0, why: 'Los <b>engranajes</b> son ruedas con dientes que se acoplan entre sí o mediante una cadena para transmitir y modificar la velocidad de giro.' },
        { t: 'tf', q: 'En una palanca de segundo grado, como el cascanueces, siempre ganamos fuerza porque la resistencia está más cerca del punto de apoyo que la potencia.', a: true, why: 'Como la carga (resistencia) está entre el fulcro y nuestra mano, el brazo de potencia es siempre mayor que el de resistencia y multiplicamos nuestra fuerza.' },
        { t: 'num', q: 'Un polipasto sencillo está formado por 2 poleas (1 fija y 1 móvil) que reducen a la mitad la fuerza necesaria para izar una carga. Si queremos levantar una caja de 80 N, ¿cuántos newtons de fuerza debemos aplicar?', a: 40, u: 'N', why: 'Con una polea móvil combinada con una fija la fuerza necesaria se divide entre 2: 80 N ÷ 2 = 40 N.' },
        { t: 'gen', f: () => {
          const dPot = P([2, 3, 4, 5]);
          const dRes = 1;
          const pot = R(15, 60);
          const res = pot * dPot;
          return { t: 'num', q: `En una palanca en equilibrio, el brazo de potencia mide <b>${dPot} m</b> y el brazo de resistencia mide <b>${dRes} m</b>. Si queremos levantar una piedra que pesa <b>${res} N</b>, ¿qué fuerza (en N) debemos aplicar como mínimo?`, a: pot, u: 'N', why: `Por la ley de la palanca (Potencia · brazo de potencia = Resistencia · brazo de resistencia): F · ${dPot} = ${res} · ${dRes} → F = ${res} ÷ ${dPot} = ${pot} N.` };
        } }
      ]
    }
  ]
});

})();
/* ---- m28.js ---- */
(function(){
const R = Adv.rnd, P = Adv.pick;

Adv.register(28, {
  stations: [
    {
      title: 'Formas y propiedades de la energía',
      intro: [
        { i: '⚡', h: '¿Qué es la energía?', p: 'La <b>energía</b> es la capacidad que tienen los cuerpos para producir cambios en sí mismos o en otros cuerpos (moverse, calentar, iluminar). En el Sistema Internacional se mide en <b>julios (J)</b>, aunque en electricidad también usamos mucho el <b>kilovatio hora (kWh)</b>.' },
        { i: '🌈', h: 'Principales formas de energía', p: '<b>Mecánica</b>: la suma de la <b>cinética</b> (movimiento) y la <b>potencial</b> (altura o posición).<br><b>Térmica</b>: pasa de un cuerpo más caliente a otro más frío (calor).<br><b>Luminosa</b>: la que transporta la luz.<br><b>Química</b>: almacenada en alimentos, pilas o combustibles.<br><b>Eléctrica</b>: asociada a la corriente eléctrica.<br><b>Sonora</b>: transportada por las ondas de sonido.<br><b>Nuclear</b>: contenida en el núcleo de átomos como el uranio.' },
        { i: '🔄', h: 'Las 4 propiedades de la energía', p: 'La energía <b>se transforma</b> (una bombilla transforma energía eléctrica en luminosa y térmica), <b>se transfiere</b> de unos cuerpos a otros, <b>se almacena</b> (en una batería) y <b>se conserva</b>: ni se crea ni se destruye, solo cambia de forma.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué forma de energía tiene una bicicleta por el hecho de estar en movimiento?', o: ['Energía cinética', 'Energía química', 'Energía nuclear'], a: 0, why: 'La energía asociada al movimiento de los cuerpos se llama <b>energía cinética</b>.' },
        { t: 'choice', q: '¿Qué transformación principal de energía ocurre en tus músculos cuando desayunas y luego sales a correr?', o: ['De energía química (alimentos) a energía mecánica (movimiento) y térmica (calor)', 'De energía nuclear a energía luminosa', 'De energía sonora a energía eléctrica'], a: 0, why: 'Los alimentos almacenan <b>energía química</b>, que nuestro cuerpo transforma en movimiento (<b>mecánica</b>) y calor (<b>térmica</b>).' },
        { t: 'tf', q: 'Según el principio de conservación, la energía no se crea ni se destruye: solo se transforma de unas formas en otras.', a: true, why: 'En cualquier proceso la energía total se conserva, aunque una parte suele disiparse al ambiente en forma de calor (energía térmica).' },
        { t: 'tf', q: 'El calor pasa de forma espontánea desde el cuerpo más frío hacia el cuerpo más caliente.', a: false, why: 'La transferencia de energía térmica (calor) ocurre siempre desde el cuerpo a <b>mayor temperatura</b> (más caliente) hacia el de <b>menor temperatura</b> (más frío) hasta que se igualan.' },
        { t: 'match', q: 'Une cada objeto o situación con la forma principal de energía que posee o almacena.', pairs: [['Pila nueva o manzana', 'Energía química'], ['Agua embalsada a gran altura en una presa', 'Energía potencial gravitatoria'], ['Viento soplando con fuerza', 'Energía cinética'], ['Rayo de sol que ilumina el patio', 'Energía luminosa']], why: 'Alimentos y pilas guardan energía química; la altura da energía potencial; el aire en movimiento tiene energía cinética; la luz transporta energía luminosa.' },
        { t: 'sort', q: 'Clasifica qué tipo de energía mecánica predomina en cada caso.', cats: ['Energía cinética (movimiento)', 'Energía potencial (altura o elasticidad)'], items: [{ x: 'Tren circulando a gran velocidad por una vía llana', c: 0 }, { x: 'Pelota rodando rápido por el pasillo', c: 0 }, { x: 'Roca quieta en lo alto de un acantilado', c: 1 }, { x: 'Arco tensado justo antes de soltar la flecha', c: 1 }, { x: 'Agua corriendo rápido por el cauce del río', c: 0 }, { x: 'Libro quieto en la estantería más alta', c: 1 }], why: 'Si el cuerpo se mueve predomina la energía cinética; si está quieto en altura o con un muelle/arco tensado, almacena energía potencial.' },
        { t: 'tap', q: 'Caza las dos palabras equivocadas en la descripción del funcionamiento de un ventilador eléctrico.', words: ['Un', 'ventilador', 'transforma', 'la', 'energía', 'sonora', 'de', 'la', 'red', 'en', 'energía', 'nuclear', 'de', 'sus', 'aspas.'], wrong: [5, 11], why: 'El ventilador recibe energía <b>eléctrica</b> (no sonora) de la red y la transforma en energía <b>mecánica o cinética</b> (no nuclear) al girar las aspas.' },
        { t: 'order', q: 'Ordena las transformaciones de energía desde el Sol hasta que encendemos la linterna de una bicicleta con dinamo tras comer.', items: ['La luz del Sol permite a las plantas fabricar nutrientes (energía química)', 'Tomamos esos alimentos y nuestro cuerpo aprovecha su energía química', 'Nuestras piernas transforman esa energía en energía mecánica al pedalear', 'La dinamo transforma el giro en electricidad y el faro en luz'], why: 'La energía va cambiando de forma paso a paso sin crearse de la nada: luminosa → química → mecánica → eléctrica → luminosa.' },
        { t: 'choice', q: 'Cuando encendemos una tostadora eléctrica, ¿en qué forma de energía deseada se transforma la energía eléctrica?', o: ['En energía térmica', 'En energía potencial', 'En energía sonora'], a: 0, why: 'Las resistencias de la tostadora transforman la energía eléctrica en <b>energía térmica</b> (calor) para tostar el pan.' },
        { t: 'choice', q: '¿Cómo se llama la suma de la energía cinética y la energía potencial de un cuerpo?', o: ['Energía mecánica', 'Energía química', 'Energía geotérmica'], a: 0, why: 'La <b>energía mecánica</b> es la suma de la energía cinética (debida al movimiento) y la energía potencial (debida a la posición o deformación).' },
        { t: 'tf', q: 'Cuando dejamos un vaso de leche muy caliente encima de la mesa, se enfría porque transfiere energía térmica al aire de la habitación.', a: true, why: 'La leche está a mayor temperatura que el aire de la cocina, así que le cede calor hasta alcanzar el equilibrio térmico.' },
        { t: 'num', q: 'Si en un salto con pértiga la atleta tiene 900 J de energía potencial y 300 J de energía cinética en un instante dado, ¿cuántos julios de energía mecánica total tiene en ese momento?', a: 1200, u: 'J', why: 'Energía mecánica = Energía potencial + Energía cinética = 900 J + 300 J = 1200 J.' }
      ]
    },
    {
      title: 'Fuentes renovables y no renovables (Aragón)',
      intro: [
        { i: '🌱', h: 'Fuentes de energía renovables', p: 'Son las que <b>no se agotan</b> al usarlas porque la naturaleza las regenera continuamente y son mucho más limpias:<br><b>Solar</b> (luz y calor del Sol), <b>eólica</b> (viento), <b>hidráulica</b> (agua de ríos y embalses), <b>biomasa</b> (materia orgánica) y <b>geotérmica</b> (calor interno de la Tierra).' },
        { i: '🛢️', h: 'Fuentes de energía no renovables', p: 'Se encuentran en cantidades <b>limitadas</b> en la naturaleza y se agotan a medida que las consumimos:<br><b>Combustibles fósiles</b> (<b>carbón, petróleo y gas natural</b>), que al quemarse emiten gases de efecto invernadero como el CO<sub>2</sub>.<br><b>Combustibles nucleares</b> (como el <b>uranio</b>), que generan residuos radiactivos.' },
        { i: '🦅', h: 'Aragón, potencia en energías limpias', p: 'Aragón destaca en España por su producción de energía renovable:<br><b>Eólica</b>: los numerosos parques de aerogeneradores aprovechan vientos constantes como el <b>cierzo</b> en el valle del Ebro y las muelas.<br><b>Solar fotovoltaica</b>: gracias al elevado número de horas de sol.<br><b>Hidráulica</b>: en los ríos y embalses del <b>Pirineo</b> y de la cuenca del Ebro.' }
      ],
      ex: [
        { t: 'sort', q: 'Clasifica estas fuentes de energía en renovables o no renovables.', cats: ['Renovable', 'No renovable'], items: [{ x: 'Viento (eólica)', c: 0 }, { x: 'Sol (solar)', c: 0 }, { x: 'Agua de los embalses (hidráulica)', c: 0 }, { x: 'Petróleo', c: 1 }, { x: 'Carbón', c: 1 }, { x: 'Gas natural', c: 1 }, { x: 'Uranio (nuclear)', c: 1 }, { x: 'Biomasa forestal', c: 0 }], why: 'El viento, el Sol, el agua y la biomasa se regeneran (renovables); el petróleo, el carbón, el gas natural y el uranio existen en reservas limitadas y se agotan (no renovables).' },
        { t: 'choice', q: '¿Qué viento característico del valle del Ebro impulsa gran parte de los aerogeneradores de los parques eólicos de Aragón?', o: ['El cierzo', 'La tramontana', 'El levante'], a: 0, why: 'El <b>cierzo</b> (viento del noroeste que recorre el valle del Ebro) hace de Aragón una de las comunidades líderes en energía eólica.' },
        { t: 'choice', q: '¿En qué zona de Aragón se concentran históricamente numerosas centrales hidroeléctricas gracias al desnivel y al caudal de sus ríos?', o: ['En los Pirineos', 'En el centro del desierto de Los Monegros', 'En las llanuras sin ríos'], a: 0, why: 'Los valles del <b>Pirineo aragonés</b> (ríos Cinca, Ésera, Gállego, Aragón…) y los grandes embalses del Ebro reúnen las condiciones ideales para las centrales hidroeléctricas.' },
        { t: 'tf', q: 'Los paneles solares fotovoltaicos transforman directamente la energía luminosa del Sol en energía eléctrica.', a: true, why: 'Las placas <b>fotovoltaicas</b> producen electricidad a partir de la radiación solar, mientras que los colectores solares térmicos calientan agua.' },
        { t: 'tf', q: 'El carbón, el petróleo y el gas natural son fuentes renovables porque se forman en pocos días bajo el suelo.', a: false, why: 'Son <b>combustibles fósiles no renovables</b>: tardaron millones de años en formarse a partir de restos de seres vivos y se consumen muchísimo más rápido de lo que se originan.' },
        { t: 'match', q: 'Une cada instalación con la fuente de energía que aprovecha.', pairs: [['Parque de aerogeneradores (molinos)', 'Energía eólica (viento)'], ['Planta de paneles fotovoltaicos', 'Energía solar (luz del Sol)'], ['Central hidroeléctrica en una presa', 'Energía hidráulica (agua embalsada)'], ['Central térmica convencional', 'Combustibles fósiles (carbón, gas o derivados del petróleo)']], why: 'Cada central está diseñada para transformar una fuente primaria (viento, sol, caída de agua o combustibles) en electricidad.' },
        { t: 'tap', q: 'Localiza las dos palabras erróneas sobre el impacto ambiental de las energías.', words: ['Quemar', 'combustibles', 'fósiles', 'como', 'el', 'viento', 'emite', 'dióxido', 'de', 'carbono', 'que', 'frena', 'el', 'calentamiento', 'global.'], wrong: [5, 11], why: 'El viento no es un combustible fósil (lo son el <b>carbón, el petróleo y el gas natural</b>), y el CO<sub>2</sub> emitido <b>aumenta</b> (no frena) el efecto invernadero y el calentamiento global.' },
        { t: 'order', q: 'Ordena cómo se produce electricidad en una central hidroeléctrica de un embalse pirenaico.', items: ['El agua acumulada en lo alto del embalse tiene gran energía potencial', 'Al abrir la compuerta, el agua baja con fuerza por la tubería (energía cinética)', 'El chorro de agua hace girar las palas de la turbina', 'El alternador unido a la turbina transforma ese giro en electricidad'], why: 'En la central hidroeléctrica: energía potencial del agua → cinética del agua → mecánica de la turbina → eléctrica en el alternador.' },
        { t: 'choice', q: '¿Qué problema ambiental principal presentan las centrales nucleares que utilizan uranio, a pesar de no quemar combustibles fósiles?', o: ['Generan residuos radiactivos peligrosos que deben vigilarse de forma segura durante muchísimo tiempo', 'Agotan el viento de las comarcas cercanas', 'Emiten grandes cantidades de humo de carbón por sus torres de refrigeración'], a: 0, why: 'Las centrales nucleares utilizan uranio (no renovable) y producen <b>residuos radiactivos</b> difíciles de gestionar; el vapor blanco de sus torres es solo vapor de agua.' },
        { t: 'choice', q: '¿Cuál de estas medidas es un hábito real de ahorro y eficiencia energética en casa y en el colegio?', o: ['Aprovechar la luz natural, usar bombillas LED y apagar luces y pantallas al salir', 'Dejar la calefacción al máximo con las ventanas abiertas en invierno', 'Poner el lavavajillas y la lavadora casi vacíos varias veces al día'], a: 0, why: 'Usar tecnología eficiente (LED), aprovechar el sol y evitar consumos innecesarios reduce el gasto de energía y las emisiones contaminantes.' },
        { t: 'tf', q: 'La energía geotérmica es una fuente renovable que aprovecha el calor del interior de la Tierra.', a: true, why: 'El prefijo «geo-» significa Tierra y «-térmica», calor: la energía geotérmica procede del calor interno de nuestro planeta.' },
        { t: 'choice', q: '¿De dónde procede la energía de la biomasa?', o: ['De restos orgánicos vegetales o animales (pellets de madera, restos agrícolas o ganaderos)', 'De la fisión de átomos de uranio', 'De las mareas del océano'], a: 0, why: 'La <b>biomasa</b> aprovecha la energía química almacenada en la materia orgánica de origen vegetal o animal.' }
      ]
    },
    {
      title: 'La propagación de la luz y el sonido',
      intro: [
        { i: '🔦', h: 'Cómo viaja la luz y los materiales', p: 'La <b>luz</b> viaja en <b>línea recta</b>, en <b>todas las direcciones</b> y a enorme velocidad (unos <b>300 000 km/s en el vacío</b>). Puede viajar por el vacío.<br>Materiales: <b>transparentes</b> (dejan pasar la luz y se ve nítido: cristal), <b>translúcidos</b> (dejan pasar parte de la luz pero se ve borroso: papel cebolla) y <b>opacos</b> (no dejan pasar la luz y producen sombra: madera).' },
        { i: '🪞', h: 'Reflexión, refracción y colores', p: '<b>Reflexión</b>: la luz choca contra una superficie y rebota (por eso nos vemos en un espejo).<br><b>Refracción</b>: la luz cambia de dirección y velocidad al pasar de un medio transparente a otro (por ejemplo, del aire al agua, haciendo que una cuchara parezca torcida).<br>La <b>luz blanca</b> del Sol es la mezcla de todos los colores del <b>arcoíris</b>.' },
        { i: '🔊', h: 'El sonido, sus cualidades y el eco', p: 'El <b>sonido</b> nace cuando un objeto <b>vibra</b> y se propaga mediante ondas, pero <b>necesita un medio material</b> (aire, agua, metal): <b>NO se propaga en el vacío</b>. En el aire viaja a unos <b>340 m/s</b>.<br>Cualidades: <b>intensidad</b> (fuerte/débil), <b>tono</b> (agudo/grave) y <b>timbre</b> (distingue dos voces o instrumentos). Cuando el sonido rebota en una pared lejana y vuelve, oímos el <b>eco</b>.' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuál es la diferencia fundamental entre la luz y el sonido respecto al medio por el que viajan?', o: ['La luz puede viajar por el vacío, pero el sonido necesita siempre un medio material (aire, agua, sólido)', 'El sonido viaja por el vacío del espacio y la luz no puede hacerlo', 'Ni la luz ni el sonido pueden atravesar el agua'], a: 0, why: 'La luz es una onda electromagnética y viaja por el vacío (así nos llega la luz del Sol); el sonido es una onda mecánica y necesita partículas que vibren.' },
        { t: 'sort', q: 'Clasifica estos materiales según su comportamiento ante el paso de la luz.', cats: ['Transparente', 'Translúcido', 'Opaco'], items: [{ x: 'Cristal limpio de una ventana', c: 0 }, { x: 'Agua pura y poco profunda', c: 0 }, { x: 'Papel vegetal o de calcar', c: 1 }, { x: 'Vidrio esmerilado de un baño', c: 1 }, { x: 'Puerta de madera maciza', c: 2 }, { x: 'Plancha de hierro', c: 2 }], why: 'Transparentes: dejan ver con nitidez; translúcidos: dejan pasar algo de luz pero difuminan las formas; opacos: impiden el paso de la luz.' },
        { t: 'choice', q: 'Metes un lápiz dentro de un vaso con agua y, al mirarlo desde fuera, parece como si estuviera partido o doblado. ¿Qué fenómeno de la luz lo explica?', o: ['La refracción de la luz', 'La reflexión en un espejo', 'El eco luminoso'], a: 0, why: 'Es la <b>refracción</b>: los rayos de luz cambian de velocidad y de dirección al pasar del agua al aire.' },
        { t: 'match', q: 'Une cada cualidad del sonido con lo que nos permite distinguir.', pairs: [['Intensidad (volumen)', 'Sonidos fuertes de sonidos débiles'], ['Tono (altura)', 'Sonidos agudos de sonidos graves'], ['Timbre', 'Qué instrumento o qué persona produce una misma nota']], why: 'La intensidad distingue fuerte/débil; el tono, agudo/grave; y el timbre permite reconocer quién o qué instrumento suena aunque den la misma nota al mismo volumen.' },
        { t: 'tf', q: 'Durante una tormenta vemos primero el relámpago y unos segundos después oímos el trueno porque la luz viaja muchísimo más rápido que el sonido.', a: true, why: 'La luz viaja a unos 300 000 km/s (la vemos casi al instante) y el sonido viaja por el aire a unos 340 m/s.' },
        { t: 'tf', q: 'Si hubiera una gran explosión en el vacío del espacio exterior, la escucharíamos con un ruido ensordecedor desde una nave cercana.', a: false, why: 'En el vacío del espacio no hay aire ni ningún medio material, por lo que el sonido <b>no puede propagarse</b>.' },
        { t: 'choice', q: '¿Qué fenómeno ocurre cuando la luz blanca del Sol atraviesa las gotas de lluvia (o un prisma de cristal) y forma el arcoíris?', o: ['La descomposición o dispersión de la luz blanca en los colores que la forman', 'La absorción total de la luz por las nubes opacas', 'La transformación de la luz en ondas sonoras'], a: 0, why: 'La luz blanca está compuesta por todos los colores del arcoíris; al refractarse en las gotas de agua, cada color se desvía un poco diferente y se separan.' },
        { t: 'tap', q: 'Caza las dos palabras erróneas en esta frase sobre los espejos y las sombras.', words: ['Nos', 'vemos', 'en', 'un', 'espejo', 'gracias', 'a', 'la', 'refracción', 'de', 'la', 'luz', 'en', 'su', 'superficie', 'transparente.'], wrong: [8, 15], why: 'Un espejo funciona por <b>reflexión</b> (la luz rebota) sobre una superficie <b>opaca</b> y pulida (no por refracción en una superficie transparente).' },
        { t: 'order', q: 'Ordena cómo se produce el fenómeno del eco cuando gritas frente a un acantilado lejano.', items: ['Tus cuerdas vocales vibran al gritar y ponen a vibrar el aire', 'Las ondas sonoras viajan por el aire alejándose de ti a unos 340 m/s', 'Las ondas chocan contra la pared rocosa del acantilado y se reflejan (rebotan)', 'El sonido reflejado regresa por el aire hasta tus oídos unos instantes después'], why: 'El <b>eco</b> es la reflexión del sonido cuando el obstáculo está lo bastante lejos (al menos a 17 m en el aire) para distinguir el sonido rebotado del original.' },
        { t: 'choice', q: '¿Por qué vemos de color rojo un tomate cuando lo ilumina la luz blanca del Sol?', o: ['Porque su piel refleja la luz roja y absorbe los demás colores', 'Porque el tomate emite luz roja propia en la oscuridad', 'Porque absorbe únicamente el color rojo y refleja todos los demás'], a: 0, why: 'Los objetos que no son fuentes luminosas tienen el color de la luz que <b>reflejan</b> hacia nuestros ojos; el resto de colores los absorben.' },
        { t: 'tf', q: 'Las sombras tienen la misma silueta que el objeto opaco porque la luz se propaga en línea recta y no puede rodear el objeto.', a: true, why: 'Como la luz viaja en línea recta, al topar con un cuerpo opaco queda detrás una zona a la que no llegan los rayos: la sombra.' },
        { t: 'num', q: 'Para que nuestros oídos distingan el eco del sonido original en el aire, el obstáculo donde rebota el sonido debe estar al menos a 17 metros. ¿Cuántos metros en total recorre como mínimo la onda sonora entre la ida y la vuelta?', a: 34, u: 'm', why: 'La onda recorre 17 m de ida hasta la pared y otros 17 m de vuelta hasta nuestro oído: 17 + 17 = 34 m.' },
        { t: 'gen', f: () => {
          const t = R(2, 25);
          const v = P([340, 1500]);
          const medio = v === 340 ? 'por el aire (donde viaja a <b>340 m/s</b>)' : 'bajo el agua del mar (donde viaja a <b>1500 m/s</b>)';
          const d = v * t;
          return { t: 'num', q: `Un sonido se propaga ${medio} durante <b>${t} segundos</b>. ¿Qué distancia (en metros) recorre en ese tiempo?`, a: d, u: 'm', why: `Distancia = velocidad · tiempo = ${v} m/s · ${t} s = ${d} m.` };
        } }
      ]
    }
  ]
});

})();
/* ---- m29.js ---- */
(function(){
const R = Adv.rnd, P = Adv.pick;

Adv.register(29, {
  stations: [
    {
      title: 'Carga eléctrica, conductores y aislantes',
      intro: [
        { i: '⚡', h: 'La carga eléctrica', p: 'Toda la materia tiene <b>cargas eléctricas</b>: pueden ser <b>positivas (+)</b> o <b>negativas (−)</b>, que son los <b>electrones</b>. Normalmente los cuerpos son <b>neutros</b> (tienen igual número de + y −).<br><b>Cargas del mismo signo se repelen</b> (+ con +, o − con −) y <b>cargas de distinto signo se atraen</b> (+ con −).' },
        { i: '🎈', h: 'Electricidad estática y corriente', p: 'Al frotar un globo con lana o un peine con el pelo, pasan electrones de un cuerpo a otro y quedan cargados: es la <b>electricidad estática</b>.<br>Cuando los electrones se mueven de forma ordenada y continua por un material, tenemos <b>corriente eléctrica</b>.' },
        { i: '🔌', h: 'Materiales conductores y aislantes', p: '<b>Conductores</b>: dejan pasar fácilmente la corriente eléctrica, como los <b>metales</b> (<b>cobre, aluminio, oro, plata, hierro</b>) y el agua con sales disueltas.<br><b>Aislantes</b>: no dejan pasar la corriente eléctrica, como el <b>plástico, la madera seca, el vidrio, la goma o la cerámica</b>.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué ocurre cuando acercamos dos cuerpos que tienen carga eléctrica del MISMO signo (por ejemplo, los dos con carga negativa)?', o: ['Se repelen', 'Se atraen', 'Se sueldan entre sí'], a: 0, why: 'Las cargas eléctricas del <b>mismo signo se repelen</b> (+ con +, o − con −) y las de distinto signo (+ con −) se atraen.' },
        { t: 'sort', q: 'Clasifica estos materiales en conductores o aislantes de la electricidad.', cats: ['Conductor eléctrico', 'Aislante eléctrico'], items: [{ x: 'Hilo de cobre', c: 0 }, { x: 'Papel de aluminio', c: 0 }, { x: 'Anillo de plata', c: 0 }, { x: 'Funda de plástico', c: 1 }, { x: 'Palo de madera seca', c: 1 }, { x: 'Guante de goma', c: 1 }, { x: 'Vaso de vidrio', c: 1 }, { x: 'Clavo de hierro', c: 0 }], why: 'Los metales (cobre, aluminio, plata, hierro) conducen muy bien la corriente; el plástico, la madera seca, la goma y el vidrio son aislantes.' },
        { t: 'choice', q: '¿Por qué los cables eléctricos tienen el interior de cobre y el exterior recubierto de plástico?', o: ['Porque el cobre conduce la corriente y el plástico nos aísla para no sufrir una descarga', 'Porque el plástico conduce la electricidad y el cobre solo da color', 'Para que el cable pese el doble y atraiga a los imanes'], a: 0, why: 'El alma de <b>cobre</b> es conductora para que circulen los electrones, y la funda de <b>plástico</b> es aislante para evitar cortocircuitos y descargas.' },
        { t: 'tf', q: 'Un cuerpo es eléctricamente neutro cuando tiene el mismo número de cargas positivas que de cargas negativas.', a: true, why: 'En un cuerpo neutro, las cargas positivas y negativas se compensan exactamente.' },
        { t: 'tf', q: 'Es seguro tocar un enchufe o un aparato eléctrico con las manos mojadas o descalza en el baño, porque el agua del grifo es un aislante perfecto.', a: false, why: '¡Al contrario! El agua corriente contiene sales disueltas y es <b>conductora</b> de la electricidad: nunca se deben manipular aparatos eléctricos con las manos húmedas.' },
        { t: 'match', q: 'Une cada concepto eléctrico con su definición.', pairs: [['Cuerpo neutro', 'Tiene igual cantidad de cargas positivas y negativas'], ['Electricidad estática', 'Acumulación de cargas en un cuerpo, por ejemplo al frotarlo'], ['Corriente eléctrica', 'Movimiento ordenado de electrones a través de un conductor'], ['Material aislante', 'Impide el paso de la corriente eléctrica']], why: 'La electricidad estática está quieta en un cuerpo; la corriente eléctrica circula por los conductores y se frena con los aislantes.' },
        { t: 'choice', q: 'Frotas un globo inflado contra tu jersey de lana y ves que atrae trocitos de papel. ¿Qué fenómeno estás observando?', o: ['Electricidad estática por electrización al frotar', 'Magnetismo natural del caucho', 'Un cambio químico de fermentación'], a: 0, why: 'Al frotar el globo con la lana pasan electrones de un cuerpo a otro y el globo adquiere <b>carga eléctrica estática</b> que atrae los papelitos.' },
        { t: 'tap', q: 'Caza las dos palabras erróneas en esta norma sobre materiales eléctricos.', words: ['Los', 'electricistas', 'usan', 'herramientas', 'con', 'mangos', 'de', 'cobre', 'porque', 'es', 'un', 'excelente', 'aislante.'], wrong: [7], why: 'Los mangos de las herramientas de electricista son de <b>plástico o goma</b> (no de cobre), que sí son materiales aislantes.' },
        { t: 'order', q: 'Ordena lo que ocurre en el experimento del globo y los trocitos de papel.', items: ['Al principio tanto el globo como el jersey son eléctricamente neutros', 'Frotamos el globo contra la lana y pasan electrones al globo', 'El globo queda cargado negativamente (electricidad estática)', 'Acercamos el globo a los papelitos ligeros y los atrae a distancia'], why: 'Así se carga un cuerpo por frotamiento y ejerce fuerzas eléctricas a distancia.' },
        { t: 'choice', q: '¿Qué partículas con carga negativa son las que se desplazan por el interior de un cable metálico para formar la corriente eléctrica?', o: ['Los electrones', 'Los protones del núcleo', 'Las moléculas de aire'], a: 0, why: 'En los metales, los <b>electrones</b> (carga negativa) pueden moverse de un átomo a otro formando la corriente eléctrica.' },
        { t: 'tf', q: 'Los rayos que vemos en una tormenta son enormes descargas eléctricas entre las nubes o entre una nube y el suelo.', a: true, why: 'Las nubes de tormenta acumulan grandes cargas eléctricas por el roce del hielo y el agua, y se descargan de golpe en forma de rayo.' },
        { t: 'choice', q: '¿Para qué sirve un pararrayos instalado en lo alto de un edificio?', o: ['Para ofrecer un camino conductor seguro hasta la tierra y proteger el edificio si cae un rayo', 'Para fabricar nubes de tormenta', 'Para almacenar el rayo dentro de una pila doméstica'], a: 0, why: 'El pararrayos es una punta metálica conectada mediante un grueso cable conductor a una toma de tierra, desviando la descarga sin dañar el edificio.' }
      ]
    },
    {
      title: 'El circuito eléctrico y sus componentes',
      intro: [
        { i: '🔋', h: 'Componentes de un circuito eléctrico', p: 'Un <b>circuito eléctrico</b> es un camino cerrado por el que circula la corriente:<br><b>Generador</b> (pila, batería, alternador): impulsa los electrones.<br><b>Conductores</b> (cables): unen los elementos.<br><b>Receptores</b> (bombilla, motor, timbre, resistencia): transforman la electricidad en luz, giro, sonido o calor.<br><b>Control</b> (interruptor, pulsador): abren o cierran el paso.<br><b>Protección</b> (fusible, magnetotérmico): cortan la corriente si hay peligro.' },
        { i: '🔓', h: 'Circuito cerrado y circuito abierto', p: 'Para que la corriente circule y el receptor funcione, el circuito debe estar <b>cerrado</b> (sin cortes, desde un polo de la pila hasta el otro). Si el interruptor está levantado o un cable se suelta, el circuito está <b>abierto</b> y la bombilla se apaga.' },
        { i: '💡', h: 'Circuitos en serie y en paralelo', p: '<b>En serie</b>: las bombillas van una detrás de otra en el mismo camino; si una se funde, el circuito se abre y <b>se apagan todas</b>.<br><b>En paralelo</b>: cada bombilla tiene su propio ramal conectado al generador; si una se funde, <b>las demás siguen encendidas</b> (así están conectadas las luces de casa).' }
      ],
      ex: [
        { t: 'match', q: 'Une cada componente de un circuito eléctrico con su función.', pairs: [['Generador (pila o batería)', 'Proporciona la energía necesaria para impulsar los electrones'], ['Hilo conductor (cable)', 'Lleva la corriente eléctrica de un elemento a otro'], ['Receptor (bombilla, motor o timbre)', 'Recibe la electricidad y la transforma en luz, movimiento o sonido'], ['Interruptor', 'Permite abrir o cerrar el circuito a voluntad']], why: 'Todo circuito básico reúne generador, conductores, uno o más receptores y un elemento de maniobra o control.' },
        { t: 'choice', q: '¿Cómo debe estar un circuito eléctrico para que la corriente circule y la bombilla se encienda?', o: ['Cerrado', 'Abierto', 'Desconectado del generador'], a: 0, why: 'La corriente eléctrica solo circula cuando el camino es continuo y completo, es decir, cuando el circuito está <b>cerrado</b>.' },
        { t: 'choice', q: 'En un circuito con dos bombillas conectadas EN SERIE, ¿qué ocurre si una de las bombillas se funde o se desenrosca?', o: ['La otra bombilla también se apaga porque el circuito queda abierto', 'La otra bombilla sigue encendida igual que antes', 'La pila se convierte en un aislante de madera'], a: 0, why: 'En un circuito <b>en serie</b> solo hay un camino para la corriente: si se interrumpe en una bombilla, deja de pasar corriente por todo el circuito.' },
        { t: 'choice', q: 'En tu casa puedes apagar la luz de tu habitación sin que se apague el frigorífico de la cocina. ¿Cómo están conectados los receptores de una vivienda?', o: ['En paralelo', 'En serie', 'En circuito abierto permanente'], a: 0, why: 'En las viviendas todas las tomas y lámparas se conectan <b>en paralelo</b>, para que cada aparato funcione de manera independiente.' },
        { t: 'sort', q: 'Clasifica cada elemento según el tipo de receptor o componente que es en un circuito.', cats: ['Generador', 'Receptor', 'Elemento de control o protección'], items: [{ x: 'Pila de petaca (4,5 V)', c: 0 }, { x: 'Batería recargable', c: 0 }, { x: 'Bombilla LED', c: 1 }, { x: 'Motor eléctrico', c: 1 }, { x: 'Zumbador o timbre', c: 1 }, { x: 'Interruptor de pared', c: 2 }, { x: 'Fusible de seguridad', c: 2 }], why: 'Pilas y baterías generan la corriente; bombillas, motores y timbres son receptores; interruptores y fusibles controlan o protegen el circuito.' },
        { t: 'tf', q: 'Un motor eléctrico es un receptor que transforma la energía eléctrica en energía mecánica de giro.', a: true, why: 'Los motores eléctricos reciben corriente y la convierten en movimiento (por ejemplo, en una batidora, un ventilador o un tren eléctrico).' },
        { t: 'tf', q: 'Si conectamos los dos extremos de un cable a un mismo polo de la pila (por ejemplo, los dos al polo positivo), la bombilla lucirá con el doble de brillo.', a: false, why: 'Para que circule corriente hace falta diferencia de potencial: el circuito debe salir de un polo de la pila (por ejemplo, el +) y llegar al <b>otro polo</b> (el −).' },
        { t: 'tap', q: 'Caza las dos palabras equivocadas en la explicación de este circuito.', words: ['Cuando', 'abrimos', 'el', 'interruptor,', 'el', 'circuito', 'queda', 'abierto', 'y', 'la', 'bombilla', 'se', 'enciende', 'gracias', 'al', 'fusible', 'aislante.'], wrong: [12, 16], why: 'Al abrir el interruptor el circuito queda abierto y la bombilla se <b>apaga</b> (no se enciende), y el fusible es un elemento de protección <b>conductor</b> que se funde si hay sobrecarga.' },
        { t: 'order', q: 'Ordena el recorrido de un circuito sencillo desde que pulsamos el interruptor hasta que vemos luz.', items: ['Cerramos el interruptor para completar el camino eléctrico', 'La pila impulsa los electrones por el cable conductor', 'La corriente atraviesa el filamento o el chip LED de la bombilla', 'La bombilla emite luz y la corriente vuelve al otro polo de la pila'], why: 'El circuito debe ser un lazo cerrado desde un borne del generador hasta el otro pasando por el interruptor y el receptor.' },
        { t: 'choice', q: '¿Qué diferencia hay entre un interruptor y un pulsador (como el del timbre de la puerta)?', o: ['El interruptor mantiene su posición fija y el pulsador solo cierra mientras lo apretamos', 'El interruptor es un generador y el pulsador es un cable aislante', 'No hay ninguna diferencia entre los dos'], a: 0, why: 'El <b>interruptor</b> queda fijo en abierto o cerrado (luz del salón), mientras que el <b>pulsador</b> vuelve solo a su posición inicial al soltar el dedo (timbre).' },
        { t: 'choice', q: '¿Para qué sirve un fusible o un interruptor magnetotérmico en el cuadro eléctrico de una casa?', o: ['Para cortar automáticamente la corriente si hay un cortocircuito o una sobrecarga', 'Para aumentar el brillo de las bombillas al doble', 'Para transformar la energía luminosa en sonido'], a: 0, why: 'Los <b>elementos de protección</b> (fusibles y magnetotérmicos) abren el circuito automáticamente cuando la corriente es excesiva, evitando incendios y averías.' },
        { t: 'num', q: 'Una linterna lleva 3 pilas de 1,5 V colocadas en serie (una detrás de otra, uniendo el polo + de una con el − de la siguiente). ¿Cuántos voltios (V) suman en total?', a: 4.5, u: 'V', why: 'Cuando las pilas se conectan en serie correctamente, sus voltajes se suman: 1,5 V + 1,5 V + 1,5 V = 4,5 V.' },
        { t: 'gen', f: () => {
          const n = R(2, 6);
          const vUnit = P([1.5, 2, 3, 9, 12]);
          const total = n * vUnit;
          return { t: 'num', q: `Un juguete eléctrico funciona con <b>${n} pilas</b> de <b>${String(vUnit).replace('.', ',')} V</b> conectadas en serie. ¿Qué voltaje total (en V) suministran todas juntas?`, a: total, u: 'V', why: `En serie los voltajes se suman: ${n} · ${String(vUnit).replace('.', ',')} V = ${String(total).replace('.', ',')} V.` };
        } }
      ]
    },
    {
      title: 'Electricidad y magnetismo: el electroimán',
      intro: [
        { i: '🧭', h: 'El descubrimiento de Oersted', p: 'En 1820, el científico <b>Hans Christian Oersted</b> observó que, al hacer pasar corriente eléctrica por un cable colocado cerca de una <b>brújula</b>, la aguja imantada se desviaba. Demostró así que <b>toda corriente eléctrica crea a su alrededor un campo magnético</b>.' },
        { i: '🔩', h: '¿Qué es y cómo se hace un electroimán?', p: 'Un <b>electroimán</b> es un imán artificial que funciona con electricidad. Se construye enrollando muchas vueltas (<b>espiras</b>) de cable conductor aislado alrededor de un núcleo de <b>hierro</b> (como un clavo grande) y conectando los extremos del cable a una <b>pila</b>.<br>Su gran ventaja: <b>solo atrae objetos de hierro mientras circula la corriente</b>; al abrir el circuito, deja de ser un imán y los suelta.' },
        { i: '🏗️', h: 'Aplicaciones y el camino inverso (generadores)', p: 'Usamos electroimanes en las <b>grúas de los desguaces</b> para levantar y soltar chatarra de hierro, en <b>timbres</b>, cerraduras eléctricas, motores y trenes de levitación magnética.<br>También ocurre lo inverso (<b>inducción electromagnética</b>, descubierta por <b>Faraday</b>): si movemos un imán cerca de una bobina de cable, <b>producimos corriente eléctrica</b>. Así funcionan la <b>dinamo</b> de la bici y los <b>alternadores</b> de las centrales eléctricas.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué descubrió Oersted al colocar una brújula junto a un cable por el que circulaba corriente eléctrica?', o: ['Que la corriente eléctrica genera un campo magnético capaz de desviar la aguja de la brújula', 'Que los imanes destruyen los cables de cobre', 'Que la brújula solo funciona si se conecta a un enchufe'], a: 0, why: 'El experimento de <b>Oersted</b> demostró por primera vez la relación directa entre la electricidad y el magnetismo.' },
        { t: 'choice', q: '¿Qué tres elementos necesitas para construir un electroimán casero en el laboratorio del colegio?', o: ['Un clavo de hierro, cable de cobre aislado enrollado a su alrededor y una pila', 'Un palo de madera, hilo de lana y una goma de borrar', 'Un vaso de vidrio, agua destilada y un tapón de corcho'], a: 0, why: 'Un electroimán requiere un <b>núcleo de hierro</b> (el clavo), una bobina de <b>hilo conductor</b> (cobre con barniz o plástico aislante) y un <b>generador</b> (la pila).' },
        { t: 'tf', q: 'La gran ventaja de un electroimán frente a un imán natural de magnetita es que podemos encender y apagar su magnetismo abriendo o cerrando el circuito eléctrico.', a: true, why: 'El electroimán actúa como imán solo cuando pasa la corriente; al cortar la corriente pierde su magnetismo casi al instante y suelta la carga.' },
        { t: 'tf', q: 'Si desconectamos el cable de la pila en un electroimán casero, el clavo sigue atrayendo con la misma fuerza máxima todos los clips eternamente.', a: false, why: 'Al desconectar la pila deja de circular corriente eléctrica y desaparece el campo magnético del electroimán (los clips caen).' },
        { t: 'choice', q: '¿Cómo podemos conseguir que nuestro electroimán casero tenga MÁS fuerza y atraiga más clips?', o: ['Enrollando más vueltas (espiras) de cable alrededor del clavo o usando una pila de mayor voltaje', 'Cambiando el clavo de hierro por un palillo de madera', 'Cortando el cable para que el circuito quede abierto'], a: 0, why: 'El campo magnético de un electroimán es más intenso cuantas <b>más espiras</b> tiene la bobina y cuanto <b>mayor es la corriente</b> que circula por ella.' },
        { t: 'match', q: 'Une cada dispositivo electromagnético con lo que hace.', pairs: [['Electroimán de una grúa de desguace', 'Atrae el hierro al cerrar el circuito y lo suelta al abrirlo'], ['Dinamo de bicicleta o alternador', 'Transforma el giro de un imán y una bobina en electricidad'], ['Motor eléctrico', 'Transforma la corriente eléctrica en movimiento de giro'], ['Brújula junto a un cable con corriente', 'Su aguja se desvía por el campo magnético de la corriente']], why: 'Electricidad y magnetismo son dos caras del mismo fenómeno: la corriente crea magnetismo (electroimán) y un campo magnético cambiante crea corriente (alternador).' },
        { t: 'sort', q: 'Clasifica cada característica según corresponda a un imán permanente o a un electroimán.', cats: ['Imán permanente (magnetita, imán de nevera)', 'Electroimán'], items: [{ x: 'Su magnetismo está siempre activo sin necesitar pilas', c: 0 }, { x: 'No se puede apagar con un interruptor', c: 0 }, { x: 'Necesita corriente eléctrica para funcionar', c: 1 }, { x: 'Se puede activar y desactivar abriendo o cerrando el circuito', c: 1 }, { x: 'Su fuerza se regula cambiando el número de espiras o la corriente', c: 1 }, { x: 'Conserva sus polos norte y sur aunque no haya ningún cable', c: 0 }], why: 'Los imanes permanentes mantienen su imantación por sí solos, mientras que los electroimanes dependen del paso de la corriente eléctrica.' },
        { t: 'tap', q: 'Caza las dos palabras equivocadas sobre cómo fabricar un electroimán.', words: ['Para', 'hacer', 'un', 'electroimán', 'enrollamos', 'cuerda', 'de', 'algodón', 'alrededor', 'de', 'un', 'clavo', 'de', 'vidrio', 'y', 'conectamos', 'una', 'pila.'], wrong: [5, 13], why: 'Se necesita <b>cable conductor</b> (no cuerda de algodón, que es aislante) enrollado en un núcleo de <b>hierro</b> (no de vidrio).' },
        { t: 'order', q: 'Ordena cómo funciona la grúa con electroimán de una planta de reciclaje para mover chatarra de hierro.', items: ['El operario baja el electroimán apagado sobre el montón de hierro', 'Cierra el interruptor para que pase corriente por la bobina', 'El núcleo se imanta, atrae el hierro y la grúa lo traslada por el aire', 'Sobre el contenedor, abre el circuito y la chatarra cae sola'], why: 'Precisamente porque puede encenderse y apagarse a voluntad, el electroimán es indispensable para levantar y soltar objetos pesados de hierro.' },
        { t: 'choice', q: '¿Cómo producen corriente eléctrica las grandes centrales (eólicas, hidroeléctricas, térmicas) y la dinamo de una bicicleta?', o: ['Haciendo girar imanes junto a bobinas de hilo de cobre en un generador o alternador', 'Frotando globos de goma contra jerséis de lana gigantes', 'Quemando imanes de magnetita dentro de los cables'], a: 0, why: 'Por <b>inducción electromagnética</b>: al girar un imán dentro de una bobina de cobre (o la bobina entre imanes), el movimiento se transforma en corriente eléctrica.' },
        { t: 'tf', q: 'Si en un electroimán cambiamos el clavo de hierro dulce por un lápiz de madera, el electroimán tendrá mucha más fuerza.', a: false, why: 'El núcleo de <b>hierro</b> multiplica enormemente el campo magnético de la bobina; la madera no es un material ferromagnético.' },
        { t: 'num', q: 'Sara construye un electroimán con 20 espiras (vueltas de cable) y luego añade 35 espiras más para hacerlo más potente. ¿Cuántas espiras tiene ahora su electroimán?', a: 55, u: 'espiras', why: 'Sumamos las vueltas de hilo conductor: 20 + 35 = 55 espiras.' }
      ]
    }
  ]
});

})();
/* ---- m30.js ---- */
(function(){
const R = Adv.rnd, P = Adv.pick;

Adv.register(30, {
  stations: [
    {
      title: 'El método científico paso a paso',
      intro: [
        { i: '🔬', h: '¿Qué es el método científico?', p: 'Es el procedimiento ordenado que siguen las científicas y los científicos para investigar la naturaleza y responder preguntas con pruebas fiables, no con suposiciones sin comprobar.' },
        { i: '📋', h: 'Las fases del método científico', p: '1. <b>Observación y pregunta</b>: nos fijamos en un fenómeno y planteamos una duda.<br>2. <b>Hipótesis</b>: proponemos una posible respuesta o explicación que <b>se pueda poner a prueba</b>.<br>3. <b>Experimentación</b>: diseñamos un experimento cambiando <b>solo una variable</b> cada vez y midiendo con rigor.<br>4. <b>Análisis de resultados</b>: organizamos los datos en tablas y gráficos.<br>5. <b>Conclusión y comunicación</b>: comprobamos si la hipótesis era cierta y compartimos el hallazgo.' },
        { i: '🧪', h: 'Experimento justo y control de variables', p: 'Para saber si la luz influye en el crecimiento de una lenteja, ponemos dos macetas con la <b>misma</b> tierra, la <b>misma</b> agua y la <b>misma</b> temperatura, y cambiamos <b>únicamente la luz</b> (una al sol y otra a oscuras). Si cambiáramos todo a la vez, no sabríamos cuál es la causa.' }
      ],
      ex: [
        { t: 'order', q: 'Ordena de principio a fin las fases del método científico.', items: ['Observación de un fenómeno y planteamiento de una pregunta', 'Formulación de una hipótesis (posible explicación comprobable)', 'Diseño y realización de experimentos midiendo y anotando datos', 'Análisis de los resultados en tablas o gráficos', 'Elaboración de conclusiones y comunicación de lo descubierto'], why: 'El orden lógico es: observar y preguntar → formular hipótesis → experimentar → analizar datos → sacar conclusiones.' },
        { t: 'choice', q: 'En el método científico, ¿qué es exactamente una «hipótesis»?', o: ['Una suposición o explicación provisional que se puede comprobar mediante un experimento', 'El resultado final ya demostrado al acabar la investigación', 'Un instrumento de vidrio que sirve para medir volúmenes'], a: 0, why: 'La <b>hipótesis</b> es la respuesta provisional que planteamos antes de experimentar para ver si las pruebas la confirman o la refutan.' },
        { t: 'choice', q: 'Queremos comprobar si el azúcar se disuelve más rápido en agua caliente que en agua fría. ¿Cómo debemos hacer el experimento para que sea válido?', o: ['Misma agua, mismo azúcar y remover igual en ambos vasos, cambiando SOLO la temperatura', 'Un terrón sin remover en un vaso frío y una cucharada removiendo en una jarra caliente', 'Cambiar a la vez la temperatura, el tamaño del vaso y el tipo de líquido'], a: 0, why: 'En un experimento controlado se mantienen fijas todas las condiciones salvo <b>una única variable</b> (en este caso, la temperatura).' },
        { t: 'tf', q: 'Si los resultados de un experimento bien hecho contradicen nuestra hipótesis inicial, debemos falsificar los datos de la tabla para que nos den la razón.', a: false, why: '¡Nunca se inventan ni se alteran los datos! En ciencia, descubrir que una hipótesis era falsa también enseña y nos lleva a formular una hipótesis nueva y mejor.' },
        { t: 'tf', q: 'Repetir varias veces una medición en un experimento ayuda a detectar errores accidentales y a obtener resultados más fiables.', a: true, why: 'Repetir las pruebas y comprobar que cualquier otra persona obtiene el mismo resultado es la base de la fiabilidad científica.' },
        { t: 'match', q: 'Une cada instrumento de laboratorio o medida con su utilidad.', pairs: [['Balanza de precisión', 'Medir la masa de un cuerpo'], ['Probeta graduada', 'Medir con exactitud el volumen de un líquido'], ['Termómetro', 'Medir la temperatura'], ['Cronómetro', 'Medir el tiempo que dura un fenómeno']], why: 'Cada magnitud física (masa, volumen, temperatura, tiempo) requiere su propio instrumento de medida.' },
        { t: 'sort', q: 'Clasifica cada frase del cuaderno de laboratorio de Lara según la fase del método científico a la que corresponde.', cats: ['Hipótesis', 'Experimentación y toma de datos', 'Conclusión'], items: [{ x: '«Creo que las semillas germinarán antes si el algodón está húmedo que si está seco»', c: 0 }, { x: '«Pienso que un péndulo más largo tardará más tiempo en cada oscilación»', c: 0 }, { x: '«Coloco 10 semillas en cada bote, riego solo el bote A y mido cada día a las 9:00»', c: 1 }, { x: '«Anoto en la tabla que a los 4 días han brotado 9 semillas en A y 0 en B»', c: 1 }, { x: '«Los datos confirman la hipótesis: el agua es imprescindible para la germinación»', c: 2 }, { x: '«Se comprueba que la longitud de la cuerda sí modifica el periodo del péndulo»', c: 2 }], why: 'La hipótesis anticipa lo que creemos que pasará; la experimentación realiza la prueba y registra medidas; la conclusión interpreta si la hipótesis se cumple.' },
        { t: 'tap', q: 'Caza las dos palabras equivocadas sobre el trabajo científico.', words: ['En', 'un', 'experimento', 'científico', 'cambiamos', 'todas', 'las', 'variables', 'a', 'la', 'vez', 'y', 'ocultamos', 'los', 'resultados.'], wrong: [5, 12], why: 'Se debe cambiar <b>una sola</b> variable cada vez (no todas) y al final se <b>comunican y comparten</b> los resultados (no se ocultan).' },
        { t: 'choice', q: '¿Para qué sirven las tablas y los gráficos de barras o de líneas en una investigación científica?', o: ['Para organizar los datos medidos y ver con claridad patrones, tendencias o comparaciones', 'Para sustituir a los experimentos y no tener que medir nada', 'Para decorar el laboratorio aunque no tengan números reales'], a: 0, why: 'Las tablas ordenan las mediciones y las gráficas permiten visualizar de un vistazo cómo varía una magnitud respecto a otra.' },
        { t: 'choice', q: '¿Cuál de estas preguntas se puede investigar mediante el método científico haciendo un experimento en clase?', o: ['¿Qué aislante mantiene caliente el agua más tiempo: la lana, el papel o el corcho?', '¿Cuál es el color más bonito del mundo?', '¿Qué día de la semana da más buena suerte?'], a: 0, why: 'El método científico responde preguntas que se pueden <b>medir y comprobar experimentalmente</b> (con un termómetro y un cronómetro), no gustos personales ni supersticiones.' },
        { t: 'tf', q: 'En el laboratorio escolar debemos leer las instrucciones antes de empezar, recoger el pelo largo y no probar ni oler directamente ningún producto.', a: true, why: 'Las normas de seguridad del laboratorio previenen accidentes antes de manipular materiales o instrumentos.' },
        { t: 'num', q: 'Para medir el tiempo que tarda en caer un paracaídas de papel, Clara repite el lanzamiento 3 veces y obtiene: 4 s, 5 s y 6 s. ¿Cuál es el tiempo medio (en segundos) de los tres lanzamientos?', a: 5, u: 's', why: 'Calculamos la media sumando los tres valores y dividiendo entre 3: (4 + 5 + 6) ÷ 3 = 15 ÷ 3 = 5 s.' }
      ]
    },
    {
      title: 'Pensamiento computacional y programación por bloques',
      intro: [
        { i: '🧩', h: 'Algoritmos y programación por bloques', p: 'Un <b>algoritmo</b> es una secuencia ordenada y finita de pasos precisos para resolver un problema o realizar una tarea (como una receta paso a paso).<br>En entornos de <b>programación por bloques</b> (como Scratch o MakeCode), encajamos piezas de colores como un puzle para dar instrucciones al ordenador o a un robot sin errores de escritura.' },
        { i: '🔁', h: 'Eventos, bucles, condicionales y variables', p: '<b>Evento</b>: pone en marcha una acción (<i>«al presionar bandera verde»</i> o <i>«al pulsar tecla espacio»</i>).<br><b>Bucle (repetición)</b>: repite varias veces las instrucciones de su interior (<i>«repetir 10 veces»</i> o <i>«por siempre»</i>).<br><b>Condicional</b>: toma una decisión según se cumpla o no una condición (<i>«si toca el borde, entonces rebotar»</i>).<br><b>Variable</b>: una «cajita» con nombre donde guardamos un dato que puede cambiar, como <i>Puntos</i> o <i>Vidas</i>.' },
        { i: '🐞', h: 'Depurar errores (bugs)', p: 'Cuando un programa no hace lo que esperábamos, tiene un fallo o <b>bug</b>. <b>Depurar</b> consiste en revisar los bloques paso a paso, encontrar dónde está el error lógico y corregirlo.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué es un «algoritmo» en pensamiento computacional?', o: ['Una lista ordenada y precisa de pasos para resolver un problema o completar una tarea', 'Un virus informático que estropea la pantalla del ordenador', 'El cable que conecta el ratón con el teclado'], a: 0, why: 'Un <b>algoritmo</b> es la secuencia de instrucciones paso a paso que lleva desde el estado inicial hasta la solución.' },
        { t: 'match', q: 'Une cada tipo de bloque de programación con lo que hace.', pairs: [['Evento («Al presionar bandera verde»)', 'Detecta una señal para iniciar la ejecución del programa'], ['Bucle («Repetir 4 veces»)', 'Ejecuta varias veces seguidas los bloques que tiene dentro'], ['Condicional («Si toca el color rojo, entonces…»)', 'Ejecuta una acción solo cuando se cumple una condición'], ['Variable («Puntos»)', 'Guarda en memoria un valor (como el marcador) que puede cambiar']], why: 'Eventos, bucles, condicionales y variables son los cuatro pilares de la programación por bloques.' },
        { t: 'choice', q: 'Queremos programar a un personaje para que dibuje un cuadrado (4 lados iguales y 4 giros de 90°). ¿Qué bloque nos ahorra escribir cuatro veces lo mismo?', o: ['Un bucle «repetir 4 veces» que contenga «avanzar 100 pasos» y «girar 90 grados»', 'Un bloque de sonido «tocar tambor»', 'Borrar todo el programa y apagar el ordenador'], a: 0, why: 'Los <b>bucles</b> evitan repetir código innecesariamente: como los 4 lados y giros del cuadrado son iguales, basta con repetir 4 veces esos dos pasos.' },
        { t: 'tf', q: 'En un algoritmo, el orden de las instrucciones no importa nada: da igual ponerse primero los zapatos y después los calcetines.', a: false, why: 'En un algoritmo el <b>orden secuencial es fundamental</b>: cambiar el orden de los pasos suele producir un resultado erróneo.' },
        { t: 'tf', q: '«Depurar» un programa significa buscar y corregir los errores (bugs) cuando el programa no funciona como debería.', a: true, why: 'En programación, un error se llama <b>bug</b> y el proceso de localizarlo y arreglarlo se llama <b>depuración</b>.' },
        { t: 'sort', q: 'Clasifica cada bloque según el grupo lógico al que pertenece.', cats: ['Bucle (repetición)', 'Condicional (decisión)', 'Evento (inicio)'], items: [{ x: 'Repetir 10 veces [ ... ]', c: 0 }, { x: 'Por siempre [ ... ]', c: 0 }, { x: 'Si (vidas = 0) entonces [decir Fin del juego]', c: 1 }, { x: 'Si (toca al ratón) entonces [sumar 1 a Puntos], si no [esperar]', c: 1 }, { x: 'Al presionar bandera verde', c: 2 }, { x: 'Al presionar tecla [flecha derecha]', c: 2 }], why: '«Repetir» y «Por siempre» son bucles; «Si… entonces…» toma decisiones condicionales; «Al presionar…» responde a eventos.' },
        { t: 'tap', q: 'Caza las dos palabras equivocadas en la explicación de una variable de un videojuego.', words: ['Para', 'guardar', 'la', 'puntuación', 'que', 'cambia', 'durante', 'la', 'partida', 'creamos', 'una', 'impresora', 'llamada', 'Puntos', 'y', 'al', 'ganar', 'le', 'sumamos', 'un', 'aislante.'], wrong: [11, 20], why: 'Para guardar un dato que cambia creamos una <b>variable</b> (no una impresora) y al ganar le sumamos un <b>número o valor</b> como 1 o 10 (no un aislante).' },
        { t: 'order', q: 'Ordena los bloques para que, al empezar la partida, el marcador se ponga a cero y cada vez que el gato toque una estrella sume 1 punto.', items: ['Al presionar bandera verde', 'Dar a la variable [Puntos] el valor 0', 'Por siempre (bucle continuo)', 'Si (¿tocando Estrella?) entonces [sumar a Puntos el valor 1]'], why: 'Primero iniciamos con el evento de bandera verde, inicializamos la variable Puntos a 0 y luego vigilamos dentro de un bucle «por siempre» la condición de tocar la estrella.' },
        { t: 'choice', q: '¿En qué consiste la técnica de «descomposición» dentro del pensamiento computacional?', o: ['En dividir un problema grande y complejo en partes más pequeñas y fáciles de resolver', 'En romper el teclado en trozos pequeños', 'En mezclar todos los bloques al azar sin leerlos'], a: 0, why: '<b>Descomponer</b> un reto complejo (por ejemplo, crear un juego) en tareas pequeñas (mover el personaje, programar los puntos, añadir sonido) hace mucho más sencillo resolverlo.' },
        { t: 'choice', q: 'En un programa por bloques leemos: «Si (Puntos > 10) entonces [decir ¡Ganaste!], si no [decir Sigue intentando]». Si la jugadora tiene exactamente 7 puntos, ¿qué mensaje muestra el personaje?', o: ['Sigue intentando', '¡Ganaste!', 'No muestra ningún mensaje'], a: 0, why: 'Como 7 no es mayor que 10, la condición (Puntos > 10) es falsa y se ejecuta el bloque del apartado <b>«si no»</b>: «Sigue intentando».' },
        { t: 'num', q: 'Un robot empieza en la casilla 0 y ejecuta el bloque: «Repetir 5 veces [avanzar 4 casillas]». ¿En qué casilla termina el robot?', a: 20, u: 'casilla', why: 'Repite 5 veces un avance de 4 casillas: 5 · 4 = 20.' },
        { t: 'tf', q: 'Los ordenadores y los robots no adivinan nuestras intenciones: hacen exactamente lo que les indican las instrucciones del programa, paso a paso.', a: true, why: 'Por eso las instrucciones de un algoritmo deben ser claras, completas y sin ambigüedades.' },
        { t: 'gen', f: () => {
          const init = R(0, 15);
          const times = R(3, 8);
          const step = R(2, 9);
          const ans = init + times * step;
          return { t: 'num', q: `Observa este programa por bloques:<br>1) Dar a <b>Puntos</b> el valor <b>${init}</b>.<br>2) <b>Repetir ${times} veces</b>: [ sumar a <b>Puntos</b> el valor <b>${step}</b> ].<br>¿Qué valor tendrá la variable <b>Puntos</b> al terminar el programa?`, a: ans, u: 'puntos', why: `Puntos empieza valiendo ${init} y el bucle suma ${step} un total de ${times} veces: ${init} + ${times} · ${step} = ${init} + ${times * step} = ${ans}.` };
        } }
      ]
    },
    {
      title: 'Seguridad digital, fuentes fiables y uso responsable',
      intro: [
        { i: '🔐', h: 'Contraseñas seguras y privacidad', p: 'Una <b>contraseña segura</b> es larga y combina letras mayúsculas, minúsculas, números y símbolos, sin usar datos fáciles de adivinar (como tu nombre o «123456»).<br><b>Protege tus datos personales</b>: nunca publiques ni envíes a desconocidos tu dirección, teléfono, colegio, contraseñas o fotos privadas.' },
        { i: '🛡️', h: 'Respeto en la red, ciberacoso y engaños', p: 'En internet rige la misma educación que en persona (<b>netiqueta</b>).<br>Si sufres o presencias <b>ciberacoso</b> (insultos, amenazas o difusión de fotos sin permiso) o recibes un mensaje extraño de un desconocido o un premio falso (<b>phishing</b>): <b>no respondas, no abras enlaces, guarda las pruebas, bloquea y cuéntaselo enseguida a tus padres, madres o docentes</b>.' },
        { i: '🕵️‍♀️', h: 'Pensamiento crítico y bienestar digital', p: 'En internet no todo es verdad: para detectar <b>bulos (noticias falsas)</b>, comprueba quién es el autor, mira la fecha y <b>contrasta la información en varias fuentes fiables</b> antes de compartirla.<br>Cuida tu salud: alterna pantallas con deporte, lectura, juego al aire libre y evita usar pantallas justo antes de dormir.' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuál de estas contraseñas es la MÁS segura para proteger una cuenta?', o: ['Tr3n#Pirineo!84', '123456', 'lucia2014'], a: 0, why: 'Una contraseña robusta combina <b>mayúsculas, minúsculas, números y símbolos</b> y no contiene tu nombre ni secuencias simples como «123456».' },
        { t: 'choice', q: 'Juegas online y una persona que no conoces en la vida real te pide por el chat tu dirección, el nombre de tu colegio y una foto tuya. ¿Qué debes hacer?', o: ['No darle ningún dato ni foto, bloquear el perfil y avisar a tu familia o a un adulto', 'Enviarle los datos porque dice que tiene tu misma edad', 'Darle además la contraseña de tu correo electrónico'], a: 0, why: 'En internet nadie es siempre quien dice ser: <b>jamás</b> compartas datos personales o fotos con desconocidos y avisa siempre a tus adultos de confianza.' },
        { t: 'sort', q: 'Clasifica cada conducta digital según sea segura y responsable o peligrosa.', cats: ['Conducta segura y responsable', 'Conducta de riesgo (peligrosa)'], items: [{ x: 'Contrastar una noticia sorprendente en varias fuentes oficiales o científicas', c: 0 }, { x: 'Cerrar sesión cuando terminas de usar un ordenador compartido del colegio', c: 0 }, { x: 'Pedir ayuda a tu familia o tutora si alguien te molesta en redes o juegos', c: 0 }, { x: 'Compartir tu contraseña con amigos o desconocidos', c: 1 }, { x: 'Hacer clic en un enlace que promete un móvil gratis a cambio de tus datos', c: 1 }, { x: 'Reenviar un rumor o una foto humillante de una compañera', c: 1 }], why: 'Cerrar sesión, verificar la información y pedir ayuda a adultos nos protege; compartir contraseñas, picar en enlaces trampa o difundir burlas nos pone en riesgo o daña a otros.' },
        { t: 'tf', q: 'Todo lo que aparece publicado en un vídeo de redes sociales o en la primera página que sale al buscar en internet es 100 % verdadero y científico.', a: false, why: 'En internet cualquiera puede publicar sin pruebas: siempre hay que aplicar el <b>pensamiento crítico</b>, revisar la fuente y contrastar en varios medios rigurosos.' },
        { t: 'tf', q: 'Si somos testigos de que insultan o acosan a una compañera por un grupo de mensajería, ponernos de su lado, no reenviar las burlas y avisar a una persona adulta ayuda a frenar el ciberacoso.', a: true, why: 'Ante el <b>ciberacoso</b> nunca hay que ser cómplice ni reír las gracias: apoyar a la víctima y avisar a docentes y familias es la actuación correcta.' },
        { t: 'match', q: 'Une cada término de seguridad digital con su significado.', pairs: [['Dato personal', 'Información privada como tu dirección, teléfono o foto'], ['Phishing (suplantación)', 'Mensaje o web trampa para robar tus claves o datos'], ['Ciberacoso', 'Insultar, amenazar o humillar a alguien por medios digitales'], ['Netiqueta', 'Normas de respeto y buena educación en internet']], why: 'Conocer estos conceptos nos ayuda a identificar riesgos digitales y a convivir con respeto en el entorno virtual.' },
        { t: 'tap', q: 'Caza las dos palabras equivocadas en este consejo de seguridad en internet.', words: ['Si', 'recibes', 'un', 'mensaje', 'sospechoso', 'con', 'un', 'enlace,', 'ábrelo', 'rápido', 'y', 'escribe', 'tu', 'contraseña', 'secreta.'], wrong: [8, 13], why: 'Ante un mensaje sospechoso <b>nunca debes abrir</b> el enlace ni mucho menos escribir tu <b>contraseña</b> o tus datos personales.' },
        { t: 'order', q: 'Ordena los pasos para comprobar si una noticia llamativa que te llega por internet es real o es un bulo.', items: ['Detenerse antes de reenviarla y no dejarse llevar solo por el titular llamativo', 'Mirar qué web o qué autor la publica y en qué fecha', 'Contrastar la noticia en fuentes oficiales, científicas o medios fiables', 'Si no tiene pruebas o es falsa, no compartirla para no difundir desinformación'], why: 'Parar, verificar el origen, contrastar con fuentes solventes y no difundir bulos es la regla de oro de la ciudadanía digital.' },
        { t: 'choice', q: '¿Qué es la «huella digital» en internet?', o: ['El rastro de publicaciones, comentarios, fotos y datos que dejamos cuando usamos internet', 'La mancha de grasa que queda al tocar el cristal de la tableta con el dedo', 'Un cable especial para conectar la impresora al ordenador'], a: 0, why: 'Nuestra <b>huella digital</b> es todo lo que queda registrado sobre nosotros en la red, por eso debemos pensar bien antes de subir cualquier contenido.' },
        { t: 'choice', q: '¿Cuál de estos hábitos ayuda a cuidar tu salud física y tu descanso frente al uso de pantallas?', o: ['Hacer pausas, practicar deporte a diario y apagar las pantallas un buen rato antes de dormir', 'Jugar con la consola a oscuras hasta la madrugada justo antes de ir a clase', 'Mirar la pantalla a menos de 5 centímetros de los ojos sin pestañear durante 6 horas seguidas'], a: 0, why: 'El bienestar digital exige equilibrio: tiempo de estudio, juego activo al aire libre, trato presencial con amigos y familia, y sueño sin pantallas.' },
        { t: 'tf', q: 'Para hacer un trabajo escolar del colegio, lo correcto es comprender la información de varias fuentes, redactarla con nuestras propias palabras y citar de dónde la hemos obtenido.', a: true, why: 'Copiar y pegar sin leer ni citar no enseña nada; resumir con tus palabras y mencionar las fuentes demuestra aprendizaje y honestidad.' },
        { t: 'num', q: 'La regla saludable «20-20-20» para descansar los ojos frente a una pantalla recomienda que, cada 20 minutos, apartes la vista de la pantalla durante 20 segundos mirando a lo lejos. Si estudias en el ordenador durante 60 minutos, ¿cuántas pausas visuales de 20 segundos habrás hecho?', a: 3, u: 'pausas', why: 'Dividimos los 60 minutos en tramos de 20 minutos: 60 ÷ 20 = 3 pausas visuales.' }
      ]
    }
  ]
});

})();
/* ---- m31.js ---- */
(function(){
const R = Adv.rnd, P = Adv.pick;

Adv.register(31, {
  stations: [
    {
      title: 'La Tierra, sus movimientos y los husos horarios',
      intro: [
        { i: '🌍', h: 'Las cuatro capas de la Tierra', p: 'Nuestro planeta se organiza en cuatro grandes esferas interconectadas:<br><b>Geosfera</b>: parte rocosa y mineral, dividida en <b>corteza</b>, <b>manto</b> y <b>núcleo</b>.<br><b>Hidrosfera</b>: conjunto de toda el agua (océanos, ríos, hielo, aguas subterráneas).<br><b>Atmósfera</b>: capa de gases que envuelve la Tierra.<br><b>Biosfera</b>: conjunto de todos los seres vivos.' },
        { i: '🔄', h: 'Rotación y traslación', p: '<b>Rotación</b>: la Tierra gira sobre su propio eje inclinado en <b>24 horas</b> (un día), originando la sucesión del <b>día y la noche</b>.<br><b>Traslación</b>: la Tierra gira alrededor del Sol en <b>365 días y unas 6 horas</b>. Junto con la inclinación del eje, origina las <b>estaciones del año</b>.' },
        { i: '🕒', h: 'Los 24 husos horarios', p: 'Como la Tierra da una vuelta completa (360°) en 24 horas, se divide en <b>24 husos horarios</b> de 15° cada uno a partir del <b>meridiano de Greenwich</b>. Al viajar hacia el <b>este</b> se suma una hora por huso; hacia el <b>oeste</b> se resta.' }
      ],
      ex: [
        { t: 'match', q: 'Une cada capa de la Tierra con su definición correcta.', pairs: [['Geosfera', 'Parte rocosa y mineral, desde la superficie hasta el centro'], ['Hidrosfera', 'Conjunto de todas las aguas del planeta en cualquier estado'], ['Atmósfera', 'Envoltura de gases como el nitrógeno y el oxígeno'], ['Biosfera', 'Conjunto de todos los seres vivos y los medios que habitan']], why: 'Geosfera (roca), hidrosfera (agua), atmósfera (aire) y biosfera (vida) forman el sistema terrestre.' },
        { t: 'order', q: 'Ordena las tres capas de la geosfera desde la más externa (superficial) hasta la más interna (profunda).', items: ['Corteza', 'Manto', 'Núcleo'], why: 'Vivimos sobre la <b>corteza</b>; debajo está el <b>manto</b> y en el centro del planeta se encuentra el <b>núcleo</b>.' },
        { t: 'choice', q: '¿Qué movimiento de la Tierra provoca la sucesión de los días y las noches?', o: ['El movimiento de rotación sobre su propio eje', 'El movimiento de traslación alrededor del Sol', 'El giro de la Luna alrededor de la Tierra'], a: 0, why: 'Al rotar sobre su eje cada 24 horas, una mitad de la Tierra recibe la luz del Sol (día) mientras la otra queda a oscuras (noche).' },
        { t: 'num', q: '¿Cuántas horas tarda aproximadamente la Tierra en dar una vuelta completa de rotación sobre su eje?', a: 24, u: 'horas', why: 'Una rotación completa dura aproximadamente 24 horas, lo que equivale a un día terrestre.' },
        { t: 'tf', q: 'Las estaciones del año existen porque la Tierra se traslada alrededor del Sol con su eje de rotación inclinado.', a: true, why: 'Por la inclinación del eje, los rayos solares calientan más un hemisferio que el otro según el tramo de la órbita.' },
        { t: 'tf', q: 'Cuando en el hemisferio norte comienza el invierno, en el hemisferio sur también comienza el invierno.', a: false, why: 'Las estaciones están invertidas entre ambos hemisferios: cuando en el norte empieza el invierno, en el sur empieza el verano.' },
        { t: 'choice', q: '¿Por qué añadimos un día extra en febrero cada cuatro años (año bisiesto de 366 días)?', o: ['Porque la traslación dura 365 días y unas 6 horas, y en 4 años esas 6 horas suman 24 horas (1 día)', 'Porque la Tierra gira más despacio sobre su eje en los años pares', 'Porque el Sol se aleja de la Tierra cada cuatro inviernos'], a: 0, why: '6 horas × 4 años = 24 horas, es decir, un día completo que se añade el 29 de febrero.' },
        { t: 'num', q: '¿En cuántos husos horarios se divide la Tierra para organizar las horas del mundo?', a: 24, u: 'husos', why: 'La Tierra se divide en 24 franjas o husos horarios, uno por cada hora que dura la rotación diaria.' },
        { t: 'sort', q: 'Clasifica cada elemento según pertenezca a la geosfera, la hidrosfera o la atmósfera.', cats: ['Geosfera', 'Hidrosfera', 'Atmósfera'], items: [{ x: 'El manto terrestre', c: 0 }, { x: 'La corteza continental', c: 0 }, { x: 'El agua del río Ebro', c: 1 }, { x: 'El hielo de un glaciar', c: 1 }, { x: 'El oxígeno del aire', c: 2 }, { x: 'La capa de ozono', c: 2 }], why: 'Rocas y capas internas pertenecen a la geosfera; ríos y glaciares a la hidrosfera; gases y ozono a la atmósfera.' },
        { t: 'tap', q: 'En este resumen hay dos palabras equivocadas sobre las capas de la Tierra. ¡Cázalas!', words: ['La', 'geosfera', 'se', 'divide', 'en', 'corteza,', 'manto', 'y', 'pulmón,', 'mientras', 'que', 'la', 'hidrosfera', 'reúne', 'todas', 'las', 'rocas.'], wrong: [8, 16], why: 'La capa central de la geosfera es el <b>núcleo</b> (no el pulmón) y la hidrosfera reúne todas las <b>aguas</b> (no las rocas).' },
        { t: 'choice', q: '¿En qué capa de la atmósfera se encuentra la capa de ozono que nos protege de las radiaciones ultravioletas del Sol?', o: ['En la estratosfera', 'En el núcleo interno', 'En la hidrosfera'], a: 0, why: 'Encima de la troposfera está la <b>estratosfera</b>, donde se concentra el ozono que filtra los rayos ultravioletas dañinos.' },
        { t: 'tf', q: 'En la troposfera, la capa más baja de la atmósfera, se producen casi todos los fenómenos meteorológicos como las nubes, la lluvia y el viento.', a: true, why: 'La troposfera está en contacto con la superficie terrestre y contiene la mayor parte del aire y del vapor de agua.' },
        { t: 'gen', f: () => {
          const h0 = R(6, 17);
          const diff = R(1, 6);
          const east = Math.random() < 0.5;
          const dir = east ? 'este' : 'oeste';
          const ans = east ? h0 + diff : h0 - diff;
          return {
            t: 'num',
            q: `En una ciudad situada en el huso del meridiano de Greenwich son las <b>${h0}:00</b> horas. ¿Qué hora ( de 0 a 24) es en ese mismo instante en un lugar situado <b>${diff} husos horarios hacia el ${dir}</b>?`,
            a: ans,
            u: 'horas',
            why: `Hacia el ${dir} se ${east ? 'suman' : 'restan'} las horas de diferencia: ${h0} ${east ? '+' : '−'} ${diff} = ${ans}:00 horas.`
          };
        } }
      ]
    },
    {
      title: 'Tiempo atmosférico y zonas climáticas',
      intro: [
        { i: '🌦️', h: 'Tiempo atmosférico y clima', p: 'El <b>tiempo atmosférico</b> es el estado de la atmósfera en un lugar y un <b>momento concreto</b> («hoy hace viento en Zaragoza»). El <b>clima</b> es el patrón de temperaturas y precipitaciones que se repite en una región a lo largo de <b>muchos años</b> (al menos 30).' },
        { i: '🌡️', h: 'Elementos y factores del clima', p: 'Medimos la atmósfera con el <b>termómetro</b> (temperatura), el <b>pluviómetro</b> (precipitaciones), el <b>anemómetro</b> (velocidad del viento), la <b>veleta</b> (dirección del viento) y el <b>barómetro</b> (presión atmosférica).<br>Influyen la <b>latitud</b>, la <b>altitud</b> y la <b>distancia al mar</b>.' },
        { i: '🌐', h: 'Las zonas climáticas de la Tierra', p: '<b>Zona cálida</b> (una): en torno al Ecuador, entre los trópicos de Cáncer y de Capricornio.<br><b>Zonas templadas</b> (dos): entre los trópicos y los círculos polares; aquí están <b>España y Aragón</b>.<br><b>Zonas frías</b> (dos): dentro de los círculos polares Ártico y Antártico.' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuál es la diferencia fundamental entre el tiempo atmosférico y el clima?', o: ['El tiempo es el estado de la atmósfera en un momento concreto y el clima es lo habitual durante décadas', 'El tiempo solo mide la temperatura y el clima solo mide la lluvia', 'Son dos palabras sinónimas que significan exactamente lo mismo'], a: 0, why: 'El tiempo cambia de un día a otro; el clima resume las condiciones medias observadas durante al menos 30 años.' },
        { t: 'match', q: 'Une cada instrumento meteorológico con la magnitud que mide.', pairs: [['Termómetro', 'Temperatura del aire (en °C)'], ['Pluviómetro', 'Cantidad de precipitación caída (en l/m² o mm)'], ['Anemómetro', 'Velocidad del viento'], ['Barómetro', 'Presión atmosférica']], why: 'Cada aparato de una estación meteorológica registra un elemento distinto del tiempo y del clima.' },
        { t: 'sort', q: 'Clasifica cada afirmación según se refiera al tiempo atmosférico o al clima.', cats: ['Tiempo atmosférico', 'Clima'], items: [{ x: 'Esta tarde ha caído una tormenta en Teruel', c: 0 }, { x: 'Hoy sopla cierzo fuerte en Zaragoza', c: 0 }, { x: 'Mañana bajarán las temperaturas cinco grados', c: 0 }, { x: 'En el valle del Ebro los veranos son calurosos y secos', c: 1 }, { x: 'El norte de España tiene lluvias abundantes todo el año', c: 1 }, { x: 'En los Pirineos los inviernos son fríos y con frecuentes nevadas', c: 1 }], why: 'Lo que pasa «hoy», «esta tarde» o «mañana» es tiempo atmosférico; lo característico de una región año tras año es clima.' },
        { t: 'tf', q: 'A medida que aumenta la altitud en una cordillera como los Pirineos, la temperatura media del aire disminuye.', a: true, why: 'La altitud es un factor del clima: cuanto más subimos por una montaña, más frío hace y más frecuentes son las nevadas.' },
        { t: 'tf', q: 'El agua del mar se calienta y se enfría mucho más rápido que la tierra firme, por lo que en la costa las temperaturas son más extremas.', a: false, why: 'Es al revés: el mar tarda más en calentarse y enfriarse, así que suaviza las temperaturas de la costa.' },
        { t: 'order', q: 'Ordena las zonas climáticas del hemisferio norte yendo desde el Ecuador hacia el Polo Norte.', items: ['Zona cálida intertropical', 'Zona templada del norte', 'Zona fría polar ártica'], why: 'Al alejarnos del Ecuador hacia el Polo Norte aumenta la latitud y los rayos solares llegan cada vez más inclinados.' },
        { t: 'choice', q: '¿En qué zona climática de la Tierra se sitúan España y Aragón?', o: ['En la zona templada del hemisferio norte', 'En la zona cálida ecuatorial', 'En la zona fría polar del norte'], a: 0, why: 'España se encuentra entre el trópico de Cáncer y el círculo polar ártico, dentro de la zona templada del norte.' },
        { t: 'choice', q: '¿Qué rasgos caracterizan al clima mediterráneo de interior (o continentalizado) propio de gran parte de Aragón?', o: ['Inviernos fríos, veranos calurosos y precipitaciones escasas e irregulares', 'Temperaturas suaves de 22 °C todo el año y lluvias torrenciales diarias', 'Inviernos cálidos sin heladas y lluvias abundantes todos los meses'], a: 0, why: 'Al estar lejos de la influencia suave del mar y rodeado de montañas, el interior de Aragón tiene gran contraste térmico y poca lluvia.' },
        { t: 'match', q: 'Une cada tipo de clima de España con una zona donde predomina.', pairs: [['Clima oceánico o atlántico', 'Galicia y la cornisa cantábrica'], ['Clima de alta montaña', 'Cumbres de los Pirineos y del Sistema Ibérico'], ['Clima subtropical', 'Islas Canarias'], ['Clima mediterráneo de interior', 'Depresión del Ebro y Meseta Central']], why: 'La latitud, el relieve y la influencia del Atlántico o del Mediterráneo explican la variedad climática de España.' },
        { t: 'tf', q: 'En la zona cálida, situada entre el trópico de Cáncer y el trópico de Capricornio, los rayos del Sol inciden de forma muy vertical todo el año.', a: true, why: 'Al llegar los rayos solares casi perpendiculares, las temperaturas son altas durante todos los meses del año.' },
        { t: 'tf', q: 'El pluviómetro es el aparato que sirve para señalar la dirección desde la que sopla el viento.', a: false, why: 'La dirección del viento la indica la <b>veleta</b>; el pluviómetro recoge y mide las precipitaciones.' },
        { t: 'tap', q: 'Caza los dos instrumentos meteorológicos que están cambiados de sitio en esta frase.', words: ['En', 'el', 'observatorio', 'medimos', 'la', 'temperatura', 'con', 'el', 'pluviómetro', 'y', 'la', 'lluvia', 'con', 'el', 'termómetro.'], wrong: [8, 14], why: 'La temperatura se mide con el <b>termómetro</b> y la lluvia con el <b>pluviómetro</b>.' }
      ]
    },
    {
      title: 'El cambio climático: causas y soluciones',
      intro: [
        { i: '🌡️', h: 'Efecto invernadero y calentamiento global', p: 'El <b>efecto invernadero natural</b> retiene parte del calor del Sol en la atmósfera y permite que la Tierra tenga una temperatura habitable. Pero las actividades humanas han disparado los <b>gases de efecto invernadero</b> (como el <b>CO<sub>2</sub></b> y el metano), provocando el <b>calentamiento global</b>.' },
        { i: '🏭', h: 'Causas y consecuencias', p: '<b>Causas</b>: quema de combustibles fósiles (carbón, petróleo, gas), industria, transporte contaminante y <b>deforestación</b>.<br><b>Consecuencias</b>: deshielo de glaciares y polos, subida del nivel del mar, sequías, olas de calor más intensas y pérdida de biodiversidad.' },
        { i: '🌱', h: 'Soluciones frente al cambio climático', p: 'La mitigación y adaptación requieren cambiar a <b>energías renovables</b> (eólica y solar, muy presentes en Aragón), proteger los bosques, moverse a pie, en bici o en transporte público, ahorrar agua y electricidad, y practicar las <b>tres R</b>: <b>reducir, reutilizar y reciclar</b>.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué diferencia hay entre el efecto invernadero natural y el calentamiento global actual?', o: ['El efecto natural hace habitable la Tierra; el exceso de gases humanos recalienta el planeta', 'El efecto invernadero natural enfría los polos y el calentamiento global solo ocurre en verano', 'No hay diferencia: el efecto invernadero apareció por primera vez en el siglo XX'], a: 0, why: 'Sin efecto invernadero natural la Tierra estaría helada; el problema actual es el aumento rápido de gases por actividades humanas.' },
        { t: 'choice', q: '¿Cuál es el principal gas de efecto invernadero que se libera al quemar carbón, petróleo o gas natural?', o: ['Dióxido de carbono (CO₂)', 'Oxígeno (O₂)', 'Helio (He)'], a: 0, why: 'La combustión de carbón, derivados del petróleo (gasolina, diésel) y gas natural libera grandes cantidades de CO₂ a la atmósfera.' },
        { t: 'tf', q: 'La deforestación agrava el cambio climático porque al destruir los bosques quedan menos árboles que absorban CO₂ de la atmósfera.', a: true, why: 'Mediante la fotosíntesis, los árboles y las plantas capturan dióxido de carbono y actúan como sumideros de carbono.' },
        { t: 'tf', q: 'Quemar más carbón y petróleo es una solución recomendada para reducir el calentamiento global.', a: false, why: 'El carbón y el petróleo son combustibles fósiles cuya quema es la causa principal del aumento de gases de efecto invernadero.' },
        { t: 'sort', q: 'Clasifica estas fuentes de energía según sean renovables limpias o combustibles fósiles que emiten gases de efecto invernadero.', cats: ['Energía renovable limpia', 'Combustible fósil'], items: [{ x: 'Energía solar fotovoltaica', c: 0 }, { x: 'Energía eólica (del viento)', c: 0 }, { x: 'Energía hidroeléctrica', c: 0 }, { x: 'Carbón mineral', c: 1 }, { x: 'Petróleo y gasolina', c: 1 }, { x: 'Gas natural', c: 1 }], why: 'El sol, el viento y el agua son fuentes renovables que no emiten CO₂ al generar electricidad, a diferencia del carbón, el petróleo y el gas.' },
        { t: 'match', q: 'Une cada consecuencia del cambio climático con su impacto directo.', pairs: [['Deshielo de glaciares y casquetes polares', 'Subida del nivel del mar y pérdida de reservas de hielo'], ['Sequías más largas y olas de calor', 'Escasez de agua e incremento del riesgo de incendios forestales'], ['Calentamiento de los océanos', 'Daños en ecosistemas marinos como los arrecifes de coral'], ['Fenómenos meteorológicos más extremos', 'Inundaciones y tormentas más destructivas']], why: 'El aumento de la temperatura media global altera el ciclo del agua, los océanos y los ecosistemas terrestres.' },
        { t: 'order', q: 'Ordena la regla ecológica de las «tres R» empezando por la acción más importante y prioritaria.', items: ['Reducir el consumo de recursos y envases', 'Reutilizar los productos dándoles un nuevo uso', 'Reciclar los residuos en su contenedor correspondiente'], why: 'El orden es <b>Reducir, Reutilizar y Reciclar</b>: el mejor residuo es el que no llega a producirse.' },
        { t: 'sort', q: 'Clasifica estas acciones cotidianas según ayuden a frenar el cambio climático o aumenten las emisiones contaminantes.', cats: ['Ayuda a frenar el cambio climático', 'Aumenta las emisiones contaminantes'], items: [{ x: 'Ir al colegio andando, en bici o en autobús', c: 0 }, { x: 'Apagar las luces y aparatos que no se usan', c: 0 }, { x: 'Repoblar bosques con árboles autóctonos', c: 0 }, { x: 'Usar el coche privado para trayectos muy cortos', c: 1 }, { x: 'Dejar la calefacción alta con las ventanas abiertas', c: 1 }, { x: 'Comprar productos de usar y tirar innecesarios', c: 1 }], why: 'La movilidad sostenible, el ahorro energético y el consumo responsable reducen nuestra huella de carbono.' },
        { t: 'tf', q: 'Los glaciares del Pirineo aragonés han perdido gran parte de su hielo en las últimas décadas debido al calentamiento global.', a: true, why: 'El ascenso de las temperaturas en alta montaña ha reducido drásticamente los glaciares pirenaicos como el del Aneto o el de Monte Perdido.' },
        { t: 'tf', q: 'El cambio climático solo afecta a las regiones polares y no tiene ninguna consecuencia en la península ibérica.', a: false, why: 'España y Aragón sufren sus efectos directamente: veranos más cálidos, sequías más frecuentes y retroceso de los glaciares pirenaicos.' },
        { t: 'tap', q: 'Caza los dos verbos que convierten este consejo ecológico en un disparate.', words: ['Para', 'proteger', 'el', 'clima', 'debemos', 'derrochar', 'la', 'energía', 'en', 'casa', 'y', 'quemar', 'nuestros', 'bosques.'], wrong: [5, 11], why: 'Para proteger el clima debemos <b>ahorrar</b> energía y <b>cuidar / repoblar</b> los bosques, nunca derrochar ni quemar.' },
        { t: 'choice', q: '¿Por qué destacan el viento (cierzo) y el sol en la transición energética de Aragón?', o: ['Permiten generar electricidad limpia en parques eólicos y plantas solares sin emitir CO₂', 'Porque son combustibles fósiles que se extraen de las minas subterráneas', 'Porque enfrían directamente la corteza terrestre cuando funcionan los aerogeneradores'], a: 0, why: 'Aragón es una de las comunidades líderes en generación de energía eólica y solar, claves para descarbonizar la electricidad.' }
      ]
    }
  ]
});

})();
/* ---- m32.js ---- */
(function(){
Adv.register(32, {
  stations: [
    {
      title: 'El relieve de España',
      intro: [
        { i: '⛰️', h: 'La Meseta Central y sus montañas', p: 'En el centro de la península ibérica se sitúa la <b>Meseta Central</b>, una extensa llanura elevada. Dos sistemas montañosos se alzan en su interior:<br><b>Sistema Central</b>: divide la Meseta en <b>Submeseta Norte</b> y <b>Submeseta Sur</b>.<br><b>Montes de Toledo</b>: están en la Submeseta Sur, entre los valles del Tajo y del Guadiana.' },
        { i: '🧭', h: 'Rebordes y cordilleras exteriores', p: '<b>Rodean la Meseta</b>: Macizo Galaico-Leonés, Cordillera Cantábrica (norte), <b>Sistema Ibérico</b> (noreste) y Sierra Morena (sur).<br><b>Exteriores a la Meseta</b>: Montes Vascos, <b>Pirineos</b>, Cordillera Costero-Catalana y Sistemas Béticos (Subbética y Penibética), junto con las depresiones del <b>Ebro</b> y del <b>Guadalquivir</b>.' },
        { i: '🌋', h: 'Cumbres más altas y archipiélagos', p: '<b>Teide</b> (Tenerife, Canarias): pico más alto de <b>España</b>.<br><b>Mulhacén</b> (Sierra Nevada, Granada): pico más alto de la <b>península ibérica</b>.<br><b>Aneto</b> (Huesca, Aragón): pico más alto de los <b>Pirineos</b>.<br>Los dos archipiélagos son las <b>islas Baleares</b> (mar Mediterráneo) y las <b>islas Canarias</b> (océano Atlántico).' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué gran unidad del relieve ocupa el centro de la península ibérica y qué cordillera la divide en Submeseta Norte y Submeseta Sur?', o: ['La Meseta Central, dividida por el Sistema Central', 'La Depresión del Ebro, dividida por el Sistema Ibérico', 'La Depresión del Guadalquivir, dividida por Sierra Morena'], a: 0, why: 'El <b>Sistema Central</b> atraviesa la Meseta Central y la divide en dos mitades: la Submeseta Norte y la Submeseta Sur.' },
        { t: 'sort', q: 'Clasifica estas cordilleras según estén en el interior de la Meseta, rodeen la Meseta o sean exteriores a ella.', cats: ['Interior de la Meseta', 'Rodea la Meseta', 'Exterior a la Meseta'], items: [{ x: 'Sistema Central', c: 0 }, { x: 'Montes de Toledo', c: 0 }, { x: 'Cordillera Cantábrica', c: 1 }, { x: 'Sistema Ibérico', c: 1 }, { x: 'Pirineos', c: 2 }, { x: 'Sistemas Béticos', c: 2 }], why: 'Sistema Central y Montes de Toledo son interiores; Cantábrica e Ibérico bordean la Meseta; Pirineos y Béticos quedan fuera.' },
        { t: 'match', q: 'Une cada gran cumbre con el récord que ostenta.', pairs: [['Teide (Tenerife)', 'Cumbre más alta de toda España'], ['Mulhacén (Sierra Nevada)', 'Cumbre más alta de la península ibérica'], ['Aneto (Huesca)', 'Cumbre más alta de los Pirineos y de Aragón'], ['Moncayo (Zaragoza-Soria)', 'Cumbre más alta del Sistema Ibérico']], why: 'El Teide es el techo de España (en Canarias), el Mulhacén el de la Península, el Aneto el del Pirineo y el Moncayo el del Sistema Ibérico.' },
        { t: 'tf', q: 'Las islas Canarias están situadas en el océano Atlántico y tienen un relieve de origen volcánico.', a: true, why: 'El archipiélago canario es de origen volcánico y en la isla de Tenerife se alza el volcán del Teide.' },
        { t: 'tf', q: 'El pico más alto de toda España es el Mulhacén y se encuentra en las islas Baleares.', a: false, why: 'El pico más alto de España es el <b>Teide</b> (en Tenerife, Canarias); el Mulhacén es el más alto de la Península y está en Granada.' },
        { t: 'order', q: 'Ordena estas grandes cordilleras peninsulares de norte a sur.', items: ['Cordillera Cantábrica', 'Sistema Central', 'Montes de Toledo', 'Sierra Morena'], why: 'De norte a sur cruzamos la Cordillera Cantábrica, la Submeseta Norte, el Sistema Central, los Montes de Toledo y Sierra Morena.' },
        { t: 'choice', q: '¿Cuáles son las dos grandes depresiones o valles triangulares exteriores a la Meseta Central?', o: ['La depresión del Ebro (al noreste) y la depresión del Guadalquivir (al suroeste)', 'La depresión del Duero y la depresión del Tajo', 'La depresión de los Pirineos y la depresión Cantábrica'], a: 0, why: 'Son dos amplias llanuras bajas en forma de triángulo recorridas por los ríos Ebro y Guadalquivir.' },
        { t: 'choice', q: '¿Qué cordillera exterior se extiende por el norte peninsular y sirve de frontera natural con Francia y Andorra?', o: ['Los Pirineos', 'Los Sistemas Béticos', 'La Cordillera Cantábrica'], a: 0, why: 'Los <b>Pirineos</b> van desde el mar Cantábrico hasta el mar Mediterráneo por el istmo que une la Península con el resto de Europa.' },
        { t: 'match', q: 'Une cada territorio o sierra con su ubicación correcta.', pairs: [['Mallorca, Menorca e Ibiza', 'Islas Baleares, en el mar Mediterráneo'], ['Tenerife, Gran Canaria y Lanzarote', 'Islas Canarias, en el océano Atlántico'], ['Sierra Nevada', 'Cordillera Penibética, en el sur peninsular'], ['Picos de Europa', 'Cordillera Cantábrica, en el norte peninsular']], why: 'Baleares está en el Mediterráneo, Canarias en el Atlántico, Picos de Europa en el norte y Sierra Nevada en el sur.' },
        { t: 'tf', q: 'Sierra Morena bordea la Meseta Central por el sur y la separa del valle del Guadalquivir.', a: true, why: 'Sierra Morena es el escalón montañoso meridional de la Meseta, justo al norte de Andalucía.' },
        { t: 'tf', q: 'El Sistema Ibérico se localiza en el extremo oeste de la Península, haciendo frontera con Portugal.', a: false, why: 'El Sistema Ibérico bordea la Meseta por el <b>este y noreste</b>, atravesando gran parte de Aragón.' },
        { t: 'tap', q: 'Caza los dos nombres de mares u océanos que son erróneos en esta frase.', words: ['Las', 'islas', 'Baleares', 'están', 'en', 'el', 'océano', 'Pacífico', 'y', 'las', 'islas', 'Canarias', 'en', 'el', 'mar', 'Cantábrico.'], wrong: [7, 15], why: 'Las islas Baleares están en el mar <b>Mediterráneo</b> y las islas Canarias en el océano <b>Atlántico</b>.' }
      ]
    },
    {
      title: 'Las tres unidades del relieve de Aragón',
      intro: [
        { i: '🏔️', h: 'Al norte: los Pirineos aragoneses', p: 'El relieve de Aragón se organiza de norte a sur en <b>tres grandes unidades</b>.<br>Al <b>norte</b> (en la provincia de <b>Huesca</b>) se levantan los <b>Pirineos</b>, con las cumbres más altas como el <b>Aneto</b> y el <b>Monte Perdido</b>, valles longitudinales y transversales (Ansó, Hecho, Tena, Benasque) y lagos de origen glaciar llamados <b>ibones</b>.' },
        { i: '🌾', h: 'En el centro: la Depresión del Ebro', p: 'En la franja <b>central</b> se extiende la <b>Depresión del Ebro</b>, una amplia llanura de baja altitud recorrida por el río Ebro. En su paisaje destacan las <b>muelas</b> (elevaciones de cima plana y horizontal, como la Muela de Zaragoza o la sierra de Alcubierre en los Monegros) y las vegas fértiles.' },
        { i: '⛰️', h: 'Al sur: el Sistema Ibérico aragonés', p: 'Al <b>sur y suroeste</b> (en las provincias de <b>Zaragoza y Teruel</b>) se alza el <b>Sistema Ibérico</b>. Su cumbre más elevada es el <b>Moncayo</b> (entre Zaragoza y Soria), y en Teruel destacan las sierras de <b>Albarracín</b>, <b>Gúdar</b> y <b>Javalambre</b>.' }
      ],
      ex: [
        { t: 'order', q: 'Ordena de norte a sur las tres grandes unidades del relieve de Aragón.', items: ['Pirineos', 'Depresión del Ebro', 'Sistema Ibérico'], why: 'De norte a sur, Aragón desciende desde los <b>Pirineos</b> hasta la <b>Depresión del Ebro</b> y vuelve a subir en el <b>Sistema Ibérico</b>.' },
        { t: 'order', q: 'Ordena de norte a sur las tres provincias de la comunidad autónoma de Aragón.', items: ['Huesca', 'Zaragoza', 'Teruel'], why: 'Al norte está <b>Huesca</b>, en el centro <b>Zaragoza</b> y al sur <b>Teruel</b>.' },
        { t: 'match', q: 'Une cada lugar con la unidad del relieve aragonés a la que pertenece.', pairs: [['Pico Aneto y Parque Nacional de Ordesa y Monte Perdido', 'Pirineos (norte de Huesca)'], ['Llanuras de los Monegros y huerta de Zaragoza', 'Depresión del Ebro (centro de Aragón)'], ['Cumbre del Moncayo', 'Sistema Ibérico zaragozano'], ['Sierras de Albarracín, Gúdar y Javalambre', 'Sistema Ibérico turolense']], why: 'Aneto y Ordesa son pirenaicos; Zaragoza y Monegros están en la Depresión; Moncayo y las sierras turolenses son del Sistema Ibérico.' },
        { t: 'choice', q: '¿Qué nombre reciben en el Pirineo aragonés los lagos de alta montaña de origen glaciar?', o: ['Ibones', 'Muelas', 'Marismas'], a: 0, why: 'En Aragón los lagos formados por antiguos glaciares en las montañas del Pirineo se llaman <b>ibones</b>.' },
        { t: 'choice', q: '¿Qué son las «muelas» características del paisaje de la Depresión del Ebro?', o: ['Elevaciones amesetadas de cima plana y horizontal que han resistido la erosión', 'Cumbres puntiagudas de más de 3 000 metros cubiertas de nieve perpetua', 'Valles estrechos excavados por los glaciares en la frontera con Francia'], a: 0, why: 'La roca caliza superior, más dura, protege la cima y deja colinas de cumbre plana llamadas <b>muelas</b>.' },
        { t: 'tf', q: 'El pico Aneto está situado en el Pirineo de Huesca y es la montaña más alta de Aragón.', a: true, why: 'El Aneto (en el valle de Benasque, Huesca) es el techo de Aragón y de toda la cordillera pirenaica.' },
        { t: 'tf', q: 'El Moncayo es la cumbre más alta de todo el Sistema Ibérico.', a: true, why: 'El Moncayo se alza en la frontera entre Zaragoza y Soria y es el punto de mayor altitud del Sistema Ibérico.' },
        { t: 'tf', q: 'Las sierras de Gúdar, Javalambre y Albarracín están situadas en el norte de la provincia de Huesca.', a: false, why: 'Las sierras de Gúdar, Javalambre y Albarracín se encuentran en el sur de Aragón, en la provincia de <b>Teruel</b> (Sistema Ibérico).' },
        { t: 'tf', q: 'La Depresión del Ebro es la zona más montañosa y de mayor altitud de Aragón.', a: false, why: 'Al contrario: es una depresión o llanura hundida entre dos grandes cordilleras (los Pirineos y el Sistema Ibérico).' },
        { t: 'sort', q: 'Clasifica estos espacios naturales y relieves de Aragón en su unidad correspondiente.', cats: ['Pirineos', 'Depresión del Ebro', 'Sistema Ibérico'], items: [{ x: 'Valle de Benasque y pico Aneto', c: 0 }, { x: 'Valle de Tena y valle de Hecho', c: 0 }, { x: 'Vega de Zaragoza y los Monegros', c: 1 }, { x: 'Galachos del Ebro (como Juslibol)', c: 1 }, { x: 'Parque Natural del Moncayo', c: 2 }, { x: 'Sierra de Albarracín y sierra de Gúdar', c: 2 }], why: 'Los valles de alta montaña están en el Pirineo, las vegas y galachos en la Depresión del Ebro y el Moncayo o Albarracín en el Sistema Ibérico.' },
        { t: 'choice', q: '¿Qué espacio natural protegido de los Pirineos aragoneses incluye profundos cañones tallados por el agua y el macizo calcáreo más alto de Europa?', o: ['El Parque Nacional de Ordesa y Monte Perdido', 'La laguna de Gallocanta', 'El delta del Ebro'], a: 0, why: 'El <b>Parque Nacional de Ordesa y Monte Perdido</b> se sitúa en el Pirineo oscense y es uno de los parques nacionales más antiguos de España.' },
        { t: 'tap', q: 'Caza los dos puntos cardinales que están al revés en esta frase sobre Aragón.', words: ['En', 'Aragón,', 'los', 'Pirineos', 'se', 'alzan', 'al', 'sur', 'y', 'el', 'Sistema', 'Ibérico', 'se', 'sitúa', 'al', 'norte.'], wrong: [7, 15], why: 'Los Pirineos están al <b>norte</b> de Aragón y el Sistema Ibérico está al <b>sur</b>.' }
      ]
    },
    {
      title: 'Las vertientes de España y la cuenca del Ebro',
      intro: [
        { i: '🌊', h: 'Las tres vertientes hidrográficas', p: 'Según el mar u océano donde desembocan, los ríos de España se agrupan en tres vertientes:<br><b>Cantábrica</b>: ríos cortos y muy caudalosos (Bidasoa, Nervión, Nalón).<br><b>Atlántica</b>: ríos largos de suave pendiente (Miño, Duero, <b>Tajo</b> —el más largo de la Península—, Guadiana y Guadalquivir).<br><b>Mediterránea</b>: ríos cortos e irregulares (Turia, Júcar, Segura), salvo el <b>Ebro</b>.' },
        { i: '💧', h: 'El río Ebro, eje vertebrador', p: 'El <b>Ebro</b> es el río <b>más caudaloso de España</b> (y el más largo que discurre íntegramente por España). Nace en <b>Fontibre (Cantabria)</b>, atraviesa el centro de Aragón de noroeste a sureste pasando por <b>Zaragoza</b> y desemboca en el <b>mar Mediterráneo</b> formando el <b>delta del Ebro</b> (Tarragona).' },
        { i: '🌿', h: 'Afluentes del Ebro en Aragón', p: '<b>Margen izquierda (desde los Pirineos)</b>: ríos muy caudalosos alimentados por las lluvias y el deshielo, como el <b>Aragón</b>, el <b>Gállego</b> y el sistema <b>Cinca-Segre</b>.<br><b>Margen derecha (desde el Sistema Ibérico)</b>: ríos de menor caudal como el <b>Jalón</b> (con su afluente el Jiloca), el <b>Huerva</b>, el <b>Martín</b> y el <b>Guadalope</b>.' }
      ],
      ex: [
        { t: 'match', q: 'Une cada vertiente hidrográfica de España con sus rasgos principales.', pairs: [['Vertiente cantábrica', 'Ríos cortos, con fuerte pendiente y caudal abundante todo el año'], ['Vertiente atlántica', 'Ríos largos y caudalosos que cruzan la Meseta o Andalucía'], ['Vertiente mediterránea', 'Ríos cortos y de caudal irregular en verano, excepto el Ebro']], why: 'La cercanía de las montañas al mar explica la longitud de los ríos, y el clima de cada zona determina su caudal.' },
        { t: 'order', q: 'Ordena de norte a sur los cinco grandes ríos de la vertiente atlántica peninsular.', items: ['Miño', 'Duero', 'Tajo', 'Guadiana', 'Guadalquivir'], why: 'De norte a sur: <b>Miño</b> (Galicia), <b>Duero</b> (Submeseta Norte), <b>Tajo</b> y <b>Guadiana</b> (Submeseta Sur) y <b>Guadalquivir</b> (Andalucía).' },
        { t: 'choice', q: '¿Cuál es el río más largo de la península ibérica y cuál es el río más caudaloso de España?', o: ['El Tajo es el más largo de la Península y el Ebro es el más caudaloso de España', 'El Miño es el más largo de la Península y el Júcar es el más caudaloso', 'El Segura es el más largo y el Huerva es el más caudaloso'], a: 0, why: 'El <b>Tajo</b> (que nace en Teruel y desemboca en Lisboa) es el más largo de la Península; el <b>Ebro</b> es el de mayor caudal y longitud dentro de España.' },
        { t: 'order', q: 'Ordena el recorrido del río Ebro desde su nacimiento hasta su desembocadura.', items: ['Nace en Fontibre (Cantabria)', 'Recorre el norte de Burgos, La Rioja y Navarra', 'Atraviesa el centro de Aragón pasando por Zaragoza', 'Desemboca en el mar Mediterráneo en el delta del Ebro (Tarragona)'], why: 'El Ebro fluye de noroeste a sureste desde Cantabria hasta el Mediterráneo en Cataluña, cruzando todo Aragón.' },
        { t: 'sort', q: 'Clasifica estos ríos según la vertiente hidrográfica en la que desembocan.', cats: ['Vertiente cantábrica', 'Vertiente atlántica', 'Vertiente mediterránea'], items: [{ x: 'Nalón', c: 0 }, { x: 'Nervión', c: 0 }, { x: 'Duero', c: 1 }, { x: 'Guadalquivir', c: 1 }, { x: 'Ebro', c: 2 }, { x: 'Júcar', c: 2 }], why: 'Nalón y Nervión van al Cantábrico; Duero y Guadalquivir al Atlántico; Ebro y Júcar al Mediterráneo.' },
        { t: 'sort', q: 'Clasifica estos afluentes aragoneses del Ebro según desemboquen por la margen izquierda (nacen en los Pirineos) o por la margen derecha (nacen en el Sistema Ibérico).', cats: ['Margen izquierda (Pirineos)', 'Margen derecha (Sistema Ibérico)'], items: [{ x: 'Río Aragón', c: 0 }, { x: 'Río Gállego', c: 0 }, { x: 'Río Cinca', c: 0 }, { x: 'Río Jalón', c: 1 }, { x: 'Río Huerva', c: 1 }, { x: 'Río Guadalope', c: 1 }], why: 'Al mirar hacia la desembocadura, a la izquierda quedan los Pirineos (Aragón, Gállego, Cinca) y a la derecha el Sistema Ibérico (Jalón, Huerva, Martín, Guadalope).' },
        { t: 'tf', q: 'Los ríos de la vertiente cantábrica son cortos porque nacen en la Cordillera Cantábrica, muy cerca del mar en el que desembocan.', a: true, why: 'Al estar la cordillera tan próxima a la costa, los ríos salvan un gran desnivel en pocos kilómetros.' },
        { t: 'tf', q: 'Los afluentes pirenaicos del Ebro (como el Gállego y el Cinca) son los que más agua le aportan gracias a las lluvias y al deshielo de las nieves.', a: true, why: 'En los Pirineos llueve y nieva mucho más que en el Sistema Ibérico, por lo que sus ríos tienen un caudal mucho mayor.' },
        { t: 'tf', q: 'El río Ebro nace en los Pirineos y desemboca en el océano Atlántico.', a: false, why: 'El Ebro nace en <b>Fontibre (Cantabria)</b> y desemboca en el <b>mar Mediterráneo</b>.' },
        { t: 'tf', q: 'El río Jalón nace en los Pirineos y llega al Ebro por su margen izquierda.', a: false, why: 'El Jalón nace en el <b>Sistema Ibérico</b> y es el principal afluente del Ebro por su <b>margen derecha</b>.' },
        { t: 'choice', q: 'En la Sierra de Albarracín y los Montes Universales (provincia de Teruel) nacen ríos que van a dos vertientes distintas, como el Tajo y el Turia (Guadalaviar). ¿A qué vertientes van?', o: ['El Tajo va a la vertiente atlántica y el Turia a la vertiente mediterránea', 'Ambos van a la vertiente cantábrica', 'El Tajo va al Mediterráneo y el Turia al Atlántico'], a: 0, why: 'Esa zona de Teruel es una divisoria de aguas: el Tajo corre hacia el oeste hasta el Atlántico y el Turia y el Júcar bajan hacia el este hasta el Mediterráneo.' },
        { t: 'tap', q: 'Caza las dos palabras equivocadas sobre el nacimiento y la desembocadura del río Ebro.', words: ['El', 'río', 'Ebro', 'nace', 'en', 'Andalucía', 'y', 'desemboca', 'en', 'el', 'océano', 'Atlántico', 'formando', 'un', 'delta.'], wrong: [5, 11], why: 'El Ebro nace en <b>Cantabria</b> (Fontibre) y desemboca en el mar <b>Mediterráneo</b>.' }
      ]
    }
  ]
});

})();
/* ---- m33.js ---- */
(function(){
const R = Adv.rnd, P = Adv.pick;

Adv.register(33, {
  stations: [
    {
      title: 'Coordenadas geográficas y límites de Europa',
      intro: [
        { i: '🌐', h: 'Paralelos y latitud', p: 'Para localizar cualquier punto en la Tierra usamos líneas imaginarias.<br>Los <b>paralelos</b> rodean la Tierra de este a oeste. El paralelo 0° es el <b>Ecuador</b>, que divide el planeta en hemisferio norte y hemisferio sur.<br>La <b>latitud</b> es la distancia en grados al Ecuador: puede ser <b>Norte (N)</b> o <b>Sur (S)</b>, de <b>0° a 90°</b>.' },
        { i: '🧭', h: 'Meridianos y longitud', p: 'Los <b>meridianos</b> son semicírculos que van de polo a polo. El meridiano 0° es el de <b>Greenwich</b>, que atraviesa Aragón de norte a sur (por Huesca, Zaragoza y Teruel).<br>La <b>longitud</b> es la distancia en grados al meridiano de Greenwich: puede ser <b>Este (E)</b> u <b>Oeste (O)</b>, de <b>0° a 180°</b>.' },
        { i: '🗺️', h: 'Situación y límites de Europa', p: 'Europa está íntegramente en el <b>hemisferio norte</b>.<br><b>Límites</b>: al <b>norte</b>, el océano Glacial Ártico; al <b>oeste</b>, el océano Atlántico; al <b>sur</b>, el mar Mediterráneo; y al <b>este</b>, los <b>montes Urales</b>, el río Ural, el mar Caspio y la cordillera del <b>Cáucaso</b>, que la separan de Asia.' }
      ],
      ex: [
        { t: 'match', q: 'Une cada concepto de las coordenadas geográficas con su definición.', pairs: [['Ecuador (paralelo 0°)', 'Círculo máximo que divide la Tierra en hemisferio norte y sur'], ['Meridiano de Greenwich (0°)', 'Semicírculo de polo a polo que sirve de origen para medir la longitud'], ['Latitud', 'Distancia en grados (de 0° a 90°, Norte o Sur) respecto al Ecuador'], ['Longitud', 'Distancia en grados (de 0° a 180°, Este u Oeste) respecto a Greenwich']], why: 'Los paralelos miden la latitud (N/S desde el Ecuador) y los meridianos miden la longitud (E/O desde Greenwich).' },
        { t: 'sort', q: 'Clasifica estas coordenadas según indiquen latitud (Norte o Sur) o longitud (Este u Oeste).', cats: ['Latitud', 'Longitud'], items: [{ x: '41° Norte (Zaragoza respecto al Ecuador)', c: 0 }, { x: '60° Norte (Oslo respecto al Ecuador)', c: 0 }, { x: '23° Sur (en el hemisferio sur)', c: 0 }, { x: '13° Este (Berlín respecto a Greenwich)', c: 1 }, { x: '4° Oeste (Madrid respecto a Greenwich)', c: 1 }, { x: '24° Este (Atenas respecto a Greenwich)', c: 1 }], why: 'Norte y Sur miden la latitud desde el Ecuador; Este y Oeste miden la longitud desde el meridiano de Greenwich.' },
        { t: 'num', q: '¿Cuántos grados mide la latitud en la línea del Ecuador?', a: 0, u: 'grados', why: 'El Ecuador es el paralelo de referencia desde el que empezamos a contar, por lo que su latitud es 0°.' },
        { t: 'num', q: '¿Cuál es el valor máximo en grados que alcanza la latitud exactamente en el Polo Norte o en el Polo Sur?', a: 90, u: 'grados', why: 'La latitud va desde los 0° en el Ecuador hasta los 90° N en el Polo Norte y 90° S en el Polo Sur.' },
        { t: 'choice', q: '¿Qué línea imaginaria principal (de 0°) cruza las tres provincias de Aragón (Huesca, Zaragoza y Teruel)?', o: ['El meridiano de Greenwich', 'El paralelo del Ecuador', 'El trópico de Capricornio'], a: 0, why: 'El <b>meridiano de Greenwich</b> entra por los Pirineos en Huesca, pasa cerca de Zaragoza y cruza Teruel antes de salir al Mediterráneo.' },
        { t: 'tf', q: 'Todo el continente europeo se encuentra en el hemisferio norte, por lo que todos sus países tienen latitud Norte.', a: true, why: 'Europa se extiende aproximadamente entre los 35° N y los 71° N, siempre al norte del Ecuador.' },
        { t: 'tf', q: 'Si Viena está a 48° N, 16° E y Madrid está a 40° N, 4° O, Viena se sitúa más al norte y más al este que Madrid.', a: true, why: '48° N es mayor latitud norte que 40° N (más al norte), y 16° E está al este del meridiano 0° mientras 4° O está al oeste.' },
        { t: 'tf', q: 'La longitud geográfica se mide en grados Norte o Sur a partir del Ecuador.', a: false, why: 'Norte o Sur desde el Ecuador es la <b>latitud</b>; la longitud se mide al Este o al Oeste del meridiano de Greenwich.' },
        { t: 'tf', q: 'Europa limita al oeste con los montes Urales y al este con el océano Atlántico.', a: false, why: 'Es al revés: al <b>oeste</b> de Europa está el océano Atlántico y al <b>este</b> están los montes Urales, que la separan de Asia.' },
        { t: 'match', q: 'Une cada punto cardinal con el límite natural del continente europeo en esa dirección.', pairs: [['Norte de Europa', 'Océano Glacial Ártico'], ['Oeste de Europa', 'Océano Atlántico'], ['Sur de Europa', 'Mar Mediterráneo'], ['Este de Europa', 'Montes Urales, río Ural y mar Caspio']], why: 'Europa es una gran península de Eurasia rodeada por el Ártico al norte, el Atlántico al oeste, el Mediterráneo al sur y los Urales al este.' },
        { t: 'order', q: 'Ordena estas cuatro capitales europeas de sur a norte fijándote en su latitud.', items: ['Atenas (38° N)', 'Madrid (40° N)', 'París (49° N)', 'Oslo (60° N)'], why: 'Cuanto mayor es el número de grados de latitud Norte, más cerca está la ciudad del Polo Norte.' },
        { t: 'tap', q: 'Caza las dos palabras equivocadas en esta regla sobre las coordenadas geográficas.', words: ['La', 'latitud', 'se', 'mide', 'desde', 'Greenwich', 'y', 'la', 'longitud', 'se', 'mide', 'desde', 'el', 'Ecuador.'], wrong: [5, 13], why: 'La latitud se mide desde el <b>Ecuador</b> y la longitud se mide desde el meridiano de <b>Greenwich</b>.' },
        { t: 'gen', f: () => {
          const lats = [
            ['Atenas', 38], ['Lisboa', 39], ['Madrid', 40], ['Roma', 42],
            ['París', 49], ['Londres', 51], ['Berlín', 52], ['Estocolmo', 59], ['Oslo', 60], ['Helsinki', 60]
          ];
          const i1 = R(0, 4);
          const i2 = R(5, lats.length - 1);
          const [c1, lat1] = lats[i1];
          const [c2, lat2] = lats[i2];
          const diff = lat2 - lat1;
          return {
            t: 'num',
            q: `La ciudad de <b>${c1}</b> está a unos <b>${lat1}° N</b> de latitud y <b>${c2}</b> está a unos <b>${lat2}° N</b>. ¿Cuántos grados de latitud más al norte está ${c2} que ${c1}?`,
            a: diff,
            u: 'grados',
            why: `Como ambas están en el hemisferio norte, restamos sus latitudes: ${lat2}° − ${lat1}° = ${diff}° de diferencia.`
          };
        } }
      ]
    },
    {
      title: 'El relieve, los ríos y los mares de Europa',
      intro: [
        { i: '🏔️', h: 'Llanuras, macizos y cordilleras', p: 'En el centro y el este se extiende la <b>Gran Llanura Europea</b>.<br>Los macizos antiguos (más bajos y redondeados) están en el norte y el este: <b>Montes Escandinavos</b>, <b>Macizo Central</b> y <b>Montes Urales</b>.<br>Las <b>cordilleras jóvenes y elevadas</b> están en el sur: <b>Pirineos</b>, <b>Alpes</b> (con el <b>Mont Blanc</b>), <b>Apeninos</b>, <b>Cárpatos</b>, <b>Balcanes</b> y <b>Cáucaso</b> (con el <b>Elbrús</b>, techo de Europa).' },
        { i: '🌊', h: 'Mares, penínsulas e islas', p: '<b>Mares</b>: Báltico, del Norte y Cantábrico (en el Atlántico); Mediterráneo (con el Tirreno, Adriático y Egeo), mar Negro y mar Caspio.<br><b>Penínsulas</b>: Escandinava, de Jutlandia, Ibérica, Itálica y Balcánica.<br><b>Islas</b>: Islandia, Gran Bretaña e Irlanda (en el Atlántico); Baleares, Córcega, Cerdeña, Sicilia, Creta y Chipre (en el Mediterráneo).' },
        { i: '💧', h: 'Los grandes ríos de Europa', p: '<b>Al mar Caspio</b>: el <b>Volga</b>, el río <b>más largo y caudaloso de Europa</b>.<br><b>Al mar Negro</b>: el <b>Danubio</b>, que nace en Alemania y recorre diez países.<br><b>Al Atlántico y mar del Norte</b>: ríos muy navegables y de caudal regular como el <b>Rin</b>, el <b>Sena</b>, el <b>Támesis</b>, el <b>Loira</b> o el <b>Tajo</b>.<br><b>Al Mediterráneo</b>: <b>Ebro</b>, <b>Ródano</b> y <b>Po</b>.' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuál es el río más largo y caudaloso de toda Europa, que atraviesa Rusia y desemboca en el mar Caspio?', o: ['El río Volga', 'El río Támesis', 'El río Sena'], a: 0, why: 'El <b>Volga</b> supera los 3 500 km de longitud, cruza la llanura rusa y desemboca en el mar Caspio.' },
        { t: 'choice', q: '¿Qué gran río europeo nace en Alemania, pasa por capitales como Viena, Bratislava, Budapest y Belgrado, y desemboca en el mar Negro?', o: ['El río Danubio', 'El río Rin', 'El río Po'], a: 0, why: 'El <b>Danubio</b> es el segundo río más largo de Europa y el más internacional del continente, antes de desembocar en el mar Negro.' },
        { t: 'match', q: 'Une cada cordillera europea con su localización geográfica.', pairs: [['Pirineos', 'Frontera natural entre España, Francia y Andorra'], ['Alpes', 'Gran cordillera central entre Francia, Suiza, Italia y Austria'], ['Apeninos', 'Cordillera que recorre a lo largo la península itálica'], ['Montes Urales', 'Frontera natural oriental entre Europa y Asia']], why: 'Los Pirineos cierran la península ibérica, los Alpes se alzan en el corazón de Europa, los Apeninos vertebran Italia y los Urales limitan con Asia.' },
        { t: 'sort', q: 'Clasifica estas islas europeas según se encuentren en el océano Atlántico o en el mar Mediterráneo.', cats: ['Océano Atlántico', 'Mar Mediterráneo'], items: [{ x: 'Gran Bretaña', c: 0 }, { x: 'Irlanda', c: 0 }, { x: 'Islandia', c: 0 }, { x: 'Sicilia', c: 1 }, { x: 'Cerdeña', c: 1 }, { x: 'Creta', c: 1 }], why: 'Gran Bretaña, Irlanda e Islandia son islas atlánticas del noroeste; Sicilia, Cerdeña y Creta están en el mar Mediterráneo.' },
        { t: 'order', q: 'Ordena estas tres penínsulas europeas de norte a sur.', items: ['Península Escandinava (Noruega y Suecia)', 'Península de Jutlandia (Dinamarca)', 'Península Ibérica (España y Portugal)'], why: 'Al norte está la península Escandinava, justo debajo Dinamarca (Jutlandia) y en el suroeste la península Ibérica.' },
        { t: 'match', q: 'Une cada río europeo con el país o capital por donde pasa y su desembocadura.', pairs: [['Támesis', 'Pasa por Londres (Reino Unido) y va al mar del Norte'], ['Sena', 'Pasa por París (Francia) y va al canal de la Mancha (Atlántico)'], ['Rin', 'Recorre Alemania y Países Bajos hasta el mar del Norte'], ['Po', 'Recorre el norte de Italia y desemboca en el mar Adriático']], why: 'El Támesis pasa por Londres, el Sena por París, el Rin es la gran arteria comercial hacia el mar del Norte y el Po cruza el norte de Italia.' },
        { t: 'tf', q: 'En el sur de Europa se encuentran las cordilleras más jóvenes y elevadas del continente, como los Alpes, los Pirineos y el Cáucaso.', a: true, why: 'Por haberse formado más recientemente y estar menos desgastadas por la erosión, las montañas del sur tienen las cumbres más altas.' },
        { t: 'tf', q: 'La Gran Llanura Europea ocupa buena parte del centro y del este del continente, desde Francia hasta los montes Urales.', a: true, why: 'Es la gran unidad llana de Europa, muy favorable para la agricultura, las ciudades y los ríos navegables.' },
        { t: 'tf', q: 'Las islas de Sicilia, Córcega y Creta están situadas en el océano Glacial Ártico.', a: false, why: 'Sicilia, Córcega y Creta son islas del <b>mar Mediterráneo</b>, en el sur de Europa.' },
        { t: 'tf', q: 'Los montes Apeninos separan Europa de Asia.', a: false, why: 'Los Apeninos recorren Italia; la cordillera que separa Europa de Asia al este son los <b>montes Urales</b> (y el Cáucaso al sureste).' },
        { t: 'choice', q: '¿Cuál es el pico más alto de la cordillera de los Alpes y cuál es la cumbre más alta de todo el continente europeo?', o: ['El Mont Blanc en los Alpes y el Elbrús en la cordillera del Cáucaso', 'El Aneto en los Alpes y el Teide en el Cáucaso', 'El Mulhacén en los Alpes y el Moncayo en los Urales'], a: 0, why: 'El <b>Mont Blanc</b> (entre Francia e Italia) es el techo de los Alpes y de Europa occidental; el <b>Elbrús</b> (en el Cáucaso) es el techo de Europa.' },
        { t: 'tap', q: 'Caza las dos palabras equivocadas en esta frase sobre los grandes ríos de Europa.', words: ['El', 'río', 'más', 'largo', 'de', 'Europa', 'es', 'el', 'Huerva', 'y', 'el', 'Danubio', 'desemboca', 'en', 'el', 'Pacífico.'], wrong: [8, 15], why: 'El río más largo de Europa es el <b>Volga</b> y el Danubio desemboca en el mar <b>Negro</b>.' }
      ]
    },
    {
      title: 'Países y capitales de Europa',
      intro: [
        { i: '🏛️', h: 'Europa Occidental y del Sur', p: 'Principales países y capitales de nuestro entorno:<br><b>España</b> (Madrid), <b>Portugal</b> (Lisboa), <b>Francia</b> (París), <b>Andorra</b> (Andorra la Vella), <b>Italia</b> (Roma), <b>Grecia</b> (Atenas), <b>Reino Unido</b> (Londres), <b>Irlanda</b> (Dublín), <b>Bélgica</b> (Bruselas) y <b>Países Bajos</b> (Ámsterdam).' },
        { i: '🏰', h: 'Europa Central, Nórdica y Oriental', p: '<b>En el centro</b>: <b>Alemania</b> (Berlín), <b>Suiza</b> (Berna), <b>Austria</b> (Viena), <b>Polonia</b> (Varsovia) y <b>República Checa</b> (Praga).<br><b>En el norte (nórdicos)</b>: <b>Noruega</b> (Oslo), <b>Suecia</b> (Estocolmo), <b>Finlandia</b> (Helsinki) y <b>Dinamarca</b> (Copenhague).<br><b>En el este</b>: <b>Hungría</b> (Budapest), <b>Rumanía</b> (Bucarest) y <b>Ucrania</b> (Kiev).' },
        { i: '🧭', h: 'Cómo situarlos sin mapa', p: 'Piensa en su posición relativa:<br>En la península ibérica, <b>Portugal</b> está al oeste de <b>España</b>, y al cruzar los Pirineos hacia el noreste están <b>Andorra</b> y <b>Francia</b>.<br>De oeste a este en el centro: <b>Francia → Alemania → Polonia</b>.<br>En las penínsulas mediterráneas de oeste a este: <b>Ibérica → Itálica → Balcánica</b>.' }
      ],
      ex: [
        { t: 'match', q: 'Une cada país del sur y oeste de Europa con su capital.', pairs: [['Francia', 'París'], ['Portugal', 'Lisboa'], ['Italia', 'Roma'], ['Grecia', 'Atenas']], why: 'París es la capital de Francia, Lisboa de Portugal, Roma de Italia y Atenas de Grecia.' },
        { t: 'match', q: 'Une cada país del centro y norte de Europa con su capital.', pairs: [['Alemania', 'Berlín'], ['Polonia', 'Varsovia'], ['Austria', 'Viena'], ['Suecia', 'Estocolmo']], why: 'Berlín es la capital de Alemania, Varsovia de Polonia, Viena de Austria y Estocolmo de Suecia.' },
        { t: 'order', q: 'Ordena estos cuatro países europeos en el sentido de un viaje por tierra de oeste a este.', items: ['Portugal', 'España', 'Francia', 'Alemania'], why: 'Partiendo del Atlántico en <b>Portugal</b>, cruzamos <b>España</b>, pasamos los Pirineos hacia <b>Francia</b> y al este llegamos a <b>Alemania</b>.' },
        { t: 'order', q: 'Ordena estas cuatro capitales europeas de norte a sur.', items: ['Estocolmo (Suecia)', 'Berlín (Alemania)', 'París (Francia)', 'Madrid (España)'], why: 'Estocolmo está en Escandinavia (norte), más al sur Berlín, luego París y en el sur de Europa Madrid.' },
        { t: 'sort', q: 'Clasifica estos países según se sitúen en el norte de Europa (países nórdicos) o en el sur de Europa (bañados por el Mediterráneo).', cats: ['Norte de Europa (nórdicos)', 'Sur de Europa (mediterráneos)'], items: [{ x: 'Noruega', c: 0 }, { x: 'Suecia', c: 0 }, { x: 'Finlandia', c: 0 }, { x: 'España', c: 1 }, { x: 'Italia', c: 1 }, { x: 'Grecia', c: 1 }], why: 'Noruega, Suecia y Finlandia están en el norte junto al Báltico y el Ártico; España, Italia y Grecia están en las tres grandes penínsulas del Mediterráneo.' },
        { t: 'choice', q: '¿Con qué país europeo comparte frontera internacional la comunidad autónoma de Aragón a través de los Pirineos?', o: ['Con Francia', 'Con Portugal', 'Con Suiza'], a: 0, why: 'El norte de la provincia de Huesca limita directamente con <b>Francia</b> a lo largo de la cordillera pirenaica.' },
        { t: 'choice', q: '¿Cuáles son las capitales del Reino Unido y de Irlanda?', o: ['Londres es la capital del Reino Unido y Dublín es la capital de Irlanda', 'Bruselas es la capital del Reino Unido y Copenhague la de Irlanda', 'Ámsterdam es la capital del Reino Unido y Oslo la de Irlanda'], a: 0, why: 'En las islas del Atlántico nororiental, <b>Londres</b> es la capital del Reino Unido y <b>Dublín</b> la de la República de Irlanda.' },
        { t: 'choice', q: '¿Cuáles son las capitales de Bélgica y de los Países Bajos?', o: ['Bruselas (Bélgica) y Ámsterdam (Países Bajos)', 'Viena (Bélgica) y Praga (Países Bajos)', 'Berna (Bélgica) y Budapest (Países Bajos)'], a: 0, why: '<b>Bruselas</b> es la capital de Bélgica (y sede principal de la Unión Europea) y <b>Ámsterdam</b> es la capital de los Países Bajos.' },
        { t: 'tf', q: 'Portugal se sitúa al oeste de España, en la península ibérica, y su capital es Lisboa.', a: true, why: 'España y Portugal comparten la península ibérica, y Lisboa se ubica en la desembocadura del río Tajo en el Atlántico.' },
        { t: 'tf', q: 'Noruega y Suecia ocupan la península escandinava y sus capitales son Oslo y Estocolmo.', a: true, why: 'Oslo es la capital de Noruega (en la fachada atlántica) y Estocolmo la de Suecia (en la fachada del mar Báltico).' },
        { t: 'tf', q: 'La capital de Alemania es Roma y la capital de Italia es Berlín.', a: false, why: 'Están intercambiadas: la capital de Alemania es <b>Berlín</b> y la de Italia es <b>Roma</b>.' },
        { t: 'tap', q: 'Caza las dos capitales equivocadas en esta frase sobre países de Europa.', words: ['La', 'capital', 'de', 'Francia', 'es', 'Lisboa', 'y', 'la', 'capital', 'de', 'Grecia', 'es', 'Berlín.'], wrong: [5, 12], why: 'La capital de Francia es <b>París</b> (no Lisboa) y la capital de Grecia es <b>Atenas</b> (no Berlín).' }
      ]
    }
  ]
});

})();
/* ---- m34.js ---- */
(function(){
const R = Adv.rnd, P = Adv.pick;

Adv.register(34, {
  stations: [
    {
      title: 'Natalidad, mortalidad y migraciones',
      intro: [
        { i: '👥', h: '¿Qué estudia la demografía?', p: 'La <b>demografía</b> es la ciencia que estudia la población de un lugar: cuántos habitantes hay, cómo se reparten por edades y cómo cambia su número con el paso del tiempo.' },
        { i: '👶', h: 'Crecimiento natural o vegetativo', p: 'La <b>natalidad</b> es el número de nacimientos y la <b>mortalidad</b> el de defunciones. La <b>esperanza de vida</b> son los años que, de media, vive una persona.<br><b>Crecimiento natural = nacimientos − defunciones</b>. Si nacen más de los que mueren, es positivo; si mueren más, es negativo.' },
        { i: '🧳', h: 'Las migraciones y el saldo migratorio', p: '<b>Emigrar</b> es salir de tu lugar de origen para vivir en otro; <b>inmigrar</b> es llegar a un lugar nuevo para instalarse en él.<br><b>Saldo migratorio = inmigrantes − emigrantes</b>.<br><b>Crecimiento real = crecimiento natural + saldo migratorio</b>.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué ciencia se encarga de estudiar la población y sus cambios?', o: ['La demografía', 'La geología', 'La meteorología', 'La cartografía'], a: 0, why: 'La <b>demografía</b> analiza el volumen, la estructura y la evolución de la población.' },
        { t: 'match', q: 'Une cada concepto demográfico con su definición.', pairs: [['Natalidad', 'Número de nacimientos en una población'], ['Mortalidad', 'Número de defunciones en una población'], ['Emigración', 'Salida de personas hacia otro lugar'], ['Inmigración', 'Llegada de personas desde otro lugar']], why: 'Natalidad y mortalidad forman el movimiento natural; emigración e inmigración, el movimiento migratorio.' },
        { t: 'tf', q: 'Si en un municipio hay más defunciones que nacimientos en un año, su crecimiento natural es negativo.', a: true, why: 'El crecimiento natural es nacimientos menos defunciones. Si mueren más personas de las que nacen, el resultado es negativo.' },
        { t: 'choice', q: 'Si Lucía deja su pueblo de Teruel para ir a vivir a Madrid, para su pueblo de Teruel Lucía es una…', o: ['Emigrante', 'Inmigrante', 'Turista', 'Censada temporal'], a: 0, why: 'Respecto al lugar del que <b>sale</b>, una persona es <b>emigrante</b>; respecto al lugar al que llega, es inmigrante.' },
        { t: 'sort', q: 'Clasifica cada hecho según aumente o disminuya la población de una localidad.', cats: ['Aumenta la población', 'Disminuye la población'], items: [{ x: 'Nacimientos', c: 0 }, { x: 'Llegada de inmigrantes', c: 0 }, { x: 'Defunciones', c: 1 }, { x: 'Salida de emigrantes', c: 1 }], why: 'La población sube cuando nacen bebés o llegan inmigrantes, y baja cuando fallecen habitantes o emigran.' },
        { t: 'choice', q: '¿Cómo se calcula el saldo migratorio de un territorio?', o: ['Inmigrantes menos emigrantes', 'Nacimientos menos defunciones', 'Inmigrantes más nacimientos', 'Población total entre superficie'], a: 0, why: 'El <b>saldo migratorio</b> compara quiénes llegan (inmigrantes) con quiénes se marchan (emigrantes).' },
        { t: 'tf', q: 'Una población puede crecer en habitantes aunque tenga crecimiento natural negativo, si su saldo migratorio es positivo y mayor.', a: true, why: 'El crecimiento real suma el crecimiento natural y el saldo migratorio: la llegada de inmigrantes puede compensar que haya pocos nacimientos.' },
        { t: 'choice', q: '¿Qué indica la esperanza de vida al nacer?', o: ['El número medio de años que se espera que viva una persona', 'El número de hijos por cada mil habitantes', 'La edad máxima a la que se puede trabajar', 'El porcentaje de jóvenes de un país'], a: 0, why: 'Una esperanza de vida alta refleja buenos servicios sanitarios, higiene y alimentación.' },
        { t: 'tap', q: 'En esta frase hay dos términos demográficos colocados al revés. ¡Cázalos!', words: ['El', 'crecimiento', 'natural', 'es', 'la', 'resta', 'entre', 'inmigrantes', 'y', 'emigrantes.'], wrong: [7, 9], why: 'El crecimiento natural resta <b>nacimientos</b> y <b>defunciones</b>; inmigrantes menos emigrantes es el saldo migratorio.' },
        { t: 'order', q: 'Ordena de menor a mayor escala estos pasos para obtener el crecimiento real de un municipio.', items: ['Contar los nacimientos y las defunciones del año', 'Restar defunciones a nacimientos (crecimiento natural)', 'Calcular inmigrantes menos emigrantes (saldo migratorio)', 'Sumar crecimiento natural y saldo migratorio'], why: 'Primero se obtienen por separado el crecimiento natural y el saldo migratorio, y al final se suman.' },
        { t: 'num', q: 'En un pueblo nacieron 12 bebés y fallecieron 9 personas durante el año. ¿Cuál fue su crecimiento natural?', a: 3, u: 'habitantes', why: 'Crecimiento natural = nacimientos (12) − defunciones (9) = 3 habitantes.' },
        { t: 'tf', q: 'El padrón municipal solo registra a los turistas que visitan un pueblo durante el fin de semana.', a: false, why: 'El padrón municipal registra a los vecinos que residen habitualmente en el municipio, no a los visitantes de paso.' },
        { t: 'gen', f: () => {
          const nac = R(15, 95), def = R(10, 90);
          const cn = nac - def;
          return { t: 'num', neg: true, q: `En una localidad hubo <b>${nac}</b> nacimientos y <b>${def}</b> defunciones en un año. ¿Cuál fue su <b>crecimiento natural</b>?`, a: cn, u: 'personas', why: `Crecimiento natural = nacimientos − defunciones = ${nac} − ${def} = ${cn}.` };
        } },
        { t: 'gen', f: () => {
          const nac = R(20, 80), def = R(10, 50), inm = R(15, 70), emi = R(5, 40);
          const cn = nac - def, sm = inm - emi, cr = cn + sm;
          return { t: 'num', neg: true, q: `En una villa hubo <b>${nac}</b> nacimientos, <b>${def}</b> defunciones, llegaron <b>${inm}</b> inmigrantes y se marcharon <b>${emi}</b> emigrantes. ¿Cuál fue su <b>crecimiento real</b>?`, a: cr, u: 'habitantes', why: `Crecimiento natural: ${nac} − ${def} = ${cn}. Saldo migratorio: ${inm} − ${emi} = ${sm}. Crecimiento real: ${cn} + (${sm}) = ${cr}.` };
        } }
      ]
    },
    {
      title: 'Pirámides de población y estructura',
      intro: [
        { i: '📊', h: '¿Qué es una pirámide de población?', p: 'Es un <b>gráfico de barras horizontales</b> que muestra la estructura de la población por <b>sexo</b> y <b>edad</b> en un momento dado.<br>En el eje vertical se colocan los tramos de edad (de 5 en 5 años, los más jóvenes abajo y los mayores arriba) y a cada lado se sitúan hombres y mujeres.' },
        { i: '🎂', h: 'Los tres grupos de edad', p: '<b>Población joven</b> (0–14 años): situada en la <b>base</b> de la pirámide.<br><b>Población adulta</b> (15–64 años): ocupa el <b>centro o tronco</b>.<br><b>Población anciana o mayor</b> (65 años o más): está en la <b>cúspide o cima</b>.' },
        { i: '🔺', h: 'Formas de la pirámide', p: '<b>Triangular o pagoda</b> (base ancha, cima estrecha): población joven con alta natalidad.<br><b>Campana</b> (base y centro parecidos): población equilibrada o estancada.<br><b>Urna o bulbo</b> (base estrecha y parte superior ancha): población <b>envejecida</b>, típica de España y Aragón.' }
      ],
      ex: [
        { t: 'choice', q: 'En una pirámide de población, ¿dónde se representa a los niños y niñas de 0 a 4 años?', o: ['En la barra más baja (la base)', 'En la cúspide (arriba del todo)', 'Justo en la mitad vertical', 'Fuera del gráfico'], a: 0, why: 'Las edades se ordenan de abajo arriba: la base corresponde a los recién nacidos y más jóvenes, y la cima a los más mayores.' },
        { t: 'match', q: 'Une cada parte de la pirámide de población con el grupo de edad que representa.', pairs: [['Base de la pirámide', 'Población joven (0 a 14 años)'], ['Tronco o zona central', 'Población adulta (15 a 64 años)'], ['Cúspide o cima', 'Población mayor (65 años o más)']], why: 'La pirámide se lee de abajo (base joven) hacia arriba (cúspide de mayores).' },
        { t: 'choice', q: '¿Qué indica una pirámide de población con forma de urna o bulbo (base muy estrecha y parte alta ancha)?', o: ['Una población envejecida con baja natalidad', 'Una población muy joven con muchos nacimientos', 'Un país sin personas mayores de 65 años', 'Una natalidad altísima y mortalidad elevada'], a: 0, why: 'La base estrecha señala que nacen pocos niños y la parte superior ancha indica que hay muchas personas mayores y alta esperanza de vida.' },
        { t: 'tf', q: 'En una pirámide de población, un lado del eje central representa a los hombres y el otro lado a las mujeres.', a: true, why: 'El gráfico divide cada tramo de edad en dos barras horizontales: hombres a un lado (normalmente el izquierdo) y mujeres al otro (el derecho).' },
        { t: 'sort', q: 'Clasifica cada rasgo según corresponda a una pirámide joven (triangular) o envejecida (urna).', cats: ['Pirámide triangular (joven)', 'Pirámide en urna (envejecida)'], items: [{ x: 'Base muy ancha', c: 0 }, { x: 'Alta natalidad', c: 0 }, { x: 'Base estrecha', c: 1 }, { x: 'Cúspide ancha y alta esperanza de vida', c: 1 }, { x: 'Pocos nacimientos', c: 1 }, { x: 'Muchos niños y adolescentes', c: 0 }], why: 'Mucha natalidad ensancha la base (triangular); poca natalidad y mucha longevidad estrechan la base y ensanchan la parte alta (urna).' },
        { t: 'order', q: 'Ordena estos grupos de edad desde la base hasta la cúspide de una pirámide de población.', items: ['0 a 4 años', '15 a 19 años', '40 a 44 años', '65 a 69 años', '85 años o más'], why: 'En el eje vertical los tramos suben desde los recién nacidos en la base hasta los mayores en la cima.' },
        { t: 'choice', q: 'Si en una pirámide el tramo de 25 a 45 años se ensancha de golpe respecto a los demás, ¿qué fenómeno suele explicarlo?', o: ['La llegada de inmigrantes en edad de trabajar', 'Un aumento repentino de bebés nacidos ese mismo año', 'Una disminución de la esperanza de vida', 'Un error al medir la superficie del país'], a: 0, why: 'La mayoría de las personas que migran para buscar empleo son adultos jóvenes, lo que ensancha los tramos centrales.' },
        { t: 'tf', q: 'En España y en Aragón predomina actualmente la pirámide de población en forma de urna o regresiva.', a: true, why: 'Tanto en España como en Aragón la natalidad es baja y la esperanza de vida es de las más altas del mundo.' },
        { t: 'tap', q: 'Localiza las dos palabras erróneas sobre cómo se dibuja una pirámide de población.', words: ['En', 'la', 'base', 'van', 'los', 'ancianos', 'y', 'en', 'la', 'cúspide', 'los', 'bebés.'], wrong: [5, 11], why: 'Es al revés: en la <b>base</b> van los bebés y jóvenes, y en la <b>cúspide</b> las personas ancianas.' },
        { t: 'choice', q: '¿Por qué en la cúspide de las pirámides españolas suele ser más larga la barra de las mujeres que la de los hombres?', o: ['Porque las mujeres tienen una esperanza de vida media algo mayor', 'Porque solo se censan las mujeres mayores de 80 años', 'Porque nacen diez veces más niñas que niños', 'Porque los hombres no aparecen en el padrón'], a: 0, why: 'La mayor longevidad media femenina hace que en los tramos de edad más avanzados haya más mujeres que hombres.' },
        { t: 'tf', q: 'Una pirámide con forma de campana representa una población con natalidad muy baja y en rápido retroceso.', a: false, why: 'La forma de campana corresponde a una población estacionaria o equilibrada; la regresiva o envejecida tiene forma de urna o bulbo.' },
        { t: 'num', q: 'Si los tramos de edad de una pirámide van de 5 en 5 años (0-4, 5-9, 10-14), ¿cuántos tramos forman el grupo de población joven (de 0 a 14 años)?', a: 3, u: 'tramos', why: 'De 0 a 14 años hay 3 tramos quinquenales: 0–4, 5–9 y 10–14 años.' }
      ]
    },
    {
      title: 'Densidad, Zaragoza y despoblación rural',
      intro: [
        { i: '📐', h: 'La densidad de población', p: 'Para saber si un territorio está muy o poco poblado no basta con el total de habitantes: hay que relacionarlo con su superficie.<br><b>Densidad = habitantes ÷ superficie en km<sup>2</sup></b> (se expresa en <b>hab./km<sup>2</sup></b>).' },
        { i: '🏙️', h: 'El contraste demográfico en Aragón', p: 'Aragón es una comunidad extensa pero con baja densidad media y un reparto muy desigual:<br>• <b>Zaragoza capital y su entorno</b> concentran más de la mitad de toda la población aragonesa.<br>• Numerosas comarcas rurales (sobre todo en Teruel, Huesca y zonas de Zaragoza) sufren <b>despoblación</b>.' },
        { i: '🌾', h: 'Éxodo rural y reto demográfico', p: 'El <b>éxodo rural</b> fue la marcha de jóvenes del campo a la ciudad en busca de empleo, estudios y servicios. Esto provoca en muchos pueblos <b>envejecimiento</b>, baja natalidad y riesgo de cierre de escuelas, comercios o consultorios.' }
      ],
      ex: [
        { t: 'choice', q: '¿Con qué fórmula se calcula la densidad de población de un territorio?', o: ['Habitantes dividido entre superficie en km²', 'Superficie en km² multiplicada por habitantes', 'Nacimientos menos defunciones por cien', 'Inmigrantes dividido entre emigrantes'], a: 0, why: 'La densidad indica cuántos habitantes cabrían de media en cada kilómetro cuadrado: <b>hab./km<sup>2</sup></b>.' },
        { t: 'choice', q: '¿Cómo se reparte la población en Aragón?', o: ['De forma desigual: gran concentración en Zaragoza frente a extensas zonas rurales poco pobladas', 'De manera idéntica en todos los municipios de las tres provincias', 'Concentrada casi por completo en las cumbres del Pirineo', 'Con más población en los pueblos pequeños que en las ciudades'], a: 0, why: 'El área metropolitana de Zaragoza reúne a más de la mitad de los aragoneses, mientras muchas comarcas tienen densidades muy bajas.' },
        { t: 'tf', q: 'Dos comarcas con el mismo número de habitantes tienen distinta densidad si una es mucho más extensa que la otra.', a: true, why: 'Al dividir los mismos habitantes entre una superficie mayor, la comarca más grande tiene menor densidad (hab./km²).' },
        { t: 'match', q: 'Une cada concepto con lo que ocurre en el territorio aragonés.', pairs: [['Éxodo rural', 'Marcha de población del campo a la ciudad por trabajo o estudios'], ['Envejecimiento rural', 'Predominio de personas mayores en los pueblos pequeños'], ['Macrocefalia urbana', 'Gran peso demográfico y económico de Zaragoza frente al resto'], ['Despoblación', 'Pérdida continuada de habitantes en un municipio o comarca']], why: 'Estos cuatro fenómenos están conectados y explican el reto demográfico de Aragón.' },
        { t: 'sort', q: 'Clasifica cada característica según sea propia de Zaragoza capital o de un pequeño municipio rural afectado por la despoblación.', cats: ['Zaragoza capital y su entorno', 'Pequeño municipio rural despoblado'], items: [{ x: 'Alta densidad de población', c: 0 }, { x: 'Gran variedad de empleos, universidades y hospitales', c: 0 }, { x: 'Muy baja densidad (pocos hab./km²)', c: 1 }, { x: 'Población muy envejecida y pocos nacimientos', c: 1 }, { x: 'Llegada frecuente de población joven y activa', c: 0 }, { x: 'Dificultad para mantener abierta la escuela o comercios', c: 1 }], why: 'La concentración de empleo y servicios atrae población joven a Zaragoza, mientras que muchos pueblos envejecen y pierden servicios.' },
        { t: 'choice', q: '¿Por qué el éxodo rural de jóvenes reduce también la natalidad de los pueblos?', o: ['Porque se marchan las personas en edad de tener hijos y quedan sobre todo mayores', 'Porque en los pueblos está prohibido empadronar bebés', 'Porque la altitud impide el crecimiento natural', 'Porque el saldo migratorio solo cuenta a los jubilados'], a: 0, why: 'Al emigrar los adultos jóvenes a las ciudades, la población que permanece en el pueblo tiene una edad media muy alta y nacen muy pocos niños.' },
        { t: 'tf', q: 'La mejora de las conexiones a internet, el teletrabajo, el turismo rural y la agroindustria ayudan a fijar población en el medio rural.', a: true, why: 'Tener empleo, buenas comunicaciones digitales y carreteras, vivienda y servicios básicos (escuela, sanidad) permite que familias jóvenes vivan en los pueblos.' },
        { t: 'order', q: 'Ordena la cadena de causas y consecuencias típica de la despoblación rural.', items: ['Falta de empleos variados en el pueblo', 'Emigración de los jóvenes hacia la ciudad', 'Envejecimiento de la población que se queda y caída de nacimientos', 'Riesgo de pérdida de servicios como la escuela o las tiendas'], why: 'La falta de oportunidades impulsa la emigración juvenil, lo que envejece el padrón, reduce los nacimientos y dificulta sostener los servicios.' },
        { t: 'tap', q: 'Encuentra las dos palabras equivocadas en esta descripción de la población aragonesa.', words: ['Zaragoza', 'tiene', 'una', 'densidad', 'muy', 'baja', 'y', 'concentra', 'poca', 'población.'], wrong: [5, 8], why: 'Zaragoza tiene una densidad <b>alta</b> y concentra <b>mucha</b> población (más de la mitad de Aragón).' },
        { t: 'choice', q: '¿Dónde se localizan principalmente las mayores densidades de población de Aragón?', o: ['En el eje del valle del Ebro, especialmente en el entorno de Zaragoza, y en las capitales provinciales', 'En las zonas más altas del Sistema Ibérico turolense', 'En los valles más aislados de la alta montaña pirenaica', 'Por igual en todas las comarcas de frontera'], a: 0, why: 'El corredor del Ebro y las capitales (Zaragoza, Huesca y Teruel) concentran la industria, los servicios y las principales vías de comunicación.' },
        { t: 'tf', q: 'En Aragón todos los municipios tienen exactamente la misma densidad de población, sin diferencias entre el campo y la ciudad.', a: false, why: 'El reparto es muy desigual: Zaragoza y su entorno tienen alta densidad, mientras que muchos municipios rurales tienen muy pocos hab./km².' },
        { t: 'gen', f: () => {
          const sup = P([10, 20, 25, 40, 50, 100, 200]);
          const dens = R(3, 60);
          const hab = sup * dens;
          return { t: 'num', q: `Una comarca tiene <b>${hab}</b> habitantes repartidos en una superficie de <b>${sup} km<sup>2</sup></b>. ¿Cuál es su <b>densidad de población</b>?`, a: dens, u: 'hab./km²', why: `Densidad = habitantes ÷ superficie = ${hab} ÷ ${sup} = ${dens} hab./km².` };
        } }
      ]
    }
  ]
});

})();
/* ---- m35.js ---- */
(function(){
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

})();
/* ---- m36.js ---- */
(function(){
Adv.register(36, {
  stations: [
    {
      title: 'La Constitución de 1978 y la división de poderes',
      intro: [
        { i: '📜', h: 'La Constitución española de 1978', p: 'Es la <b>ley más importante</b> de España. Fue aprobada por los ciudadanos en referéndum el <b>6 de diciembre de 1978</b>.<br>Define a España como un <b>Estado social y democrático de Derecho</b> cuya forma política es la <b>monarquía parlamentaria</b> (el Rey es el jefe del Estado, pero no gobierna) y recoge nuestros <b>derechos y deberes</b> fundamentales.' },
        { i: '⚖️', h: 'La división de tres poderes', p: 'Para evitar abusos y garantizar la democracia, el poder del Estado se divide en tres:<br>• <b>Poder legislativo</b>: elabora y aprueba las leyes y los presupuestos.<br>• <b>Poder ejecutivo</b>: gobierna y aplica las leyes.<br>• <b>Poder judicial</b>: juzga y hace cumplir las leyes.' },
        { i: '🏛️', h: '¿Quién ejerce cada poder en España?', p: '• <b>Legislativo</b>: las <b>Cortes Generales</b>, formadas por dos cámaras: el <b>Congreso de los Diputados</b> y el <b>Senado</b>.<br>• <b>Ejecutivo</b>: el <b>Gobierno</b>, integrado por el presidente y los ministros.<br>• <b>Judicial</b>: los <b>jueces y magistrados</b> en los juzgados y tribunales.' }
      ],
      ex: [
        { t: 'choice', q: '¿En qué fecha se aprobó en referéndum la actual Constitución española?', o: ['El 6 de diciembre de 1978', 'El 19 de marzo de 1812', 'El 23 de abril de 1982', 'El 12 de octubre de 1992'], a: 0, why: 'La Constitución española fue votada y aprobada por la ciudadanía el <b>6 de diciembre de 1978</b>, fecha que celebramos cada año como el Día de la Constitución.' },
        { t: 'match', q: 'Une cada poder del Estado con la institución que lo ejerce en España.', pairs: [['Poder legislativo', 'Cortes Generales (Congreso y Senado)'], ['Poder ejecutivo', 'Gobierno (presidente y ministros)'], ['Poder judicial', 'Jueces y magistrados en juzgados y tribunales']], why: 'Las Cortes hacen las leyes (legislativo), el Gobierno dirige el país (ejecutivo) y los jueces imparten justicia (judicial).' },
        { t: 'tf', q: 'En una monarquía parlamentaria como la española, el Rey es el jefe del Estado y representa al país, pero no elabora las leyes ni dirige el Gobierno.', a: true, why: 'El Rey reina pero no gobierna: las leyes las hacen las Cortes Generales y la dirección política corresponde al Gobierno.' },
        { t: 'sort', q: 'Clasifica cada elemento según sea un derecho o un deber de la ciudadanía recogido en la Constitución.', cats: ['Derecho', 'Deber'], items: [{ x: 'Recibir educación y atención sanitaria', c: 0 }, { x: 'Expresar libremente las ideas y votar', c: 0 }, { x: 'Respetar las leyes y los derechos de los demás', c: 1 }, { x: 'Contribuir a los gastos públicos pagando impuestos', c: 1 }], why: 'La Constitución garantiza libertades y servicios (derechos) y exige responsabilidades para convivir (deberes).' },
        { t: 'choice', q: '¿Qué dos cámaras componen las Cortes Generales de España?', o: ['El Congreso de los Diputados y el Senado', 'El Ayuntamiento y la Diputación Provincial', 'El Gobierno y el Tribunal Supremo', 'Las Cortes de Aragón y el Justicia'], a: 0, why: 'Las Cortes Generales son bicamerales: están formadas por el <b>Congreso de los Diputados</b> y el <b>Senado</b>.' },
        { t: 'order', q: 'Ordena el camino democrático de una ley desde las elecciones hasta su cumplimiento.', items: ['Los ciudadanos mayores de 18 años votan en las elecciones generales', 'Las Cortes Generales debaten y aprueban la nueva ley', 'El Gobierno aplica la ley y organiza los servicios necesarios', 'Los jueces y tribunales velan por que todos cumplan la ley'], why: 'El poder nace del voto ciudadano, pasa al legislativo (crea la ley), al ejecutivo (la aplica) y al judicial (la hace cumplir).' },
        { t: 'tf', q: 'Cualquier ley que se apruebe en España puede contradecir lo que dice la Constitución sin ningún problema.', a: false, why: 'Ninguna ley puede ir en contra de la Constitución, porque es la norma suprema del Estado. El Tribunal Constitucional vigila que todas las leyes la respeten.' },
        { t: 'tap', q: 'En esta oración se han intercambiado dos instituciones del Estado. ¡Cázalas!', words: ['El', 'Gobierno', 'ejerce', 'el', 'poder', 'legislativo', 'y', 'los', 'jueces', 'el', 'ejecutivo.'], wrong: [5, 10], why: 'El Gobierno ejerce el poder <b>ejecutivo</b> y los jueces ejercen el poder <b>judicial</b> (el legislativo corresponde a las Cortes).' },
        { t: 'choice', q: '¿Cuál es la función principal del poder legislativo?', o: ['Elaborar y aprobar las leyes, aprobar los Presupuestos del Estado y controlar al Gobierno', 'Dictar sentencias en los juicios', 'Asfaltar las calles de cada municipio', 'Imprimir billetes de euro'], a: 0, why: 'Legislar significa hacer leyes; además, el Parlamento aprueba los presupuestos anuales y controla la acción del Gobierno.' },
        { t: 'tf', q: 'En España el sufragio universal significa que todos los ciudadanos mayores de edad (18 años) tienen derecho a votar en las elecciones.', a: true, why: 'El voto es libre, igual, directo y secreto para todos los ciudadanos mayores de 18 años.' },
        { t: 'num', q: '¿A partir de qué edad se alcanza la mayoría de edad en España y se puede votar en las elecciones?', a: 18, u: 'años', why: 'Según el artículo 12 de la Constitución española, los españoles son mayores de edad a los 18 años.' },
        { t: 'choice', q: '¿Por qué es fundamental que los tres poderes del Estado estén separados?', o: ['Para que ningún poder concentre toda la autoridad y se controlen mutuamente en defensa de la libertad', 'Para que haya el triple de edificios en las ciudades', 'Porque así solo hace falta votar una vez cada cincuenta años', 'Para que los jueces puedan redactar los presupuestos de los ministerios'], a: 0, why: 'La división de poderes impide el abuso de poder y es la base de toda democracia moderna.' }
      ]
    },
    {
      title: 'Organización territorial: municipios, comarcas y provincias',
      intro: [
        { i: '🗺️', h: 'De lo más cercano al conjunto de España', p: 'La Constitución organiza el territorio en <b>municipios</b>, <b>provincias</b> y <b>comunidades autónomas</b>. En Aragón, además, existe una entidad intermedia fundamental: la <b>comarca</b>.' },
        { i: '🏘️', h: 'El municipio y la comarca', p: '• <b>Municipio</b>: es la entidad territorial básica. Lo gobierna el <b>Ayuntamiento</b>, formado por el <b>alcalde o alcaldesa</b> y los <b>concejales</b> (elegidos por los vecinos).<br>• <b>Comarca</b>: agrupación de municipios vecinos que comparten historia, geografía y servicios (recogida de residuos, protección civil, cultura, deportes). Aragón se divide en <b>33 comarcas</b>.' },
        { i: '🏛️', h: 'Provincias y comunidades autónomas', p: '• <b>Provincia</b>: agrupación de municipios; su órgano de gobierno y apoyo a los pueblos es la <b>Diputación Provincial</b>. Aragón tiene <b>3 provincias</b>: <b>Huesca, Teruel y Zaragoza</b>.<br>• <b>España</b> cuenta con <b>17 comunidades autónomas</b> y <b>2 ciudades autónomas</b> (Ceuta y Melilla).' }
      ],
      ex: [
        { t: 'order', q: 'Ordena estas entidades territoriales de menor a mayor extensión dentro de España.', items: ['Municipio', 'Comarca', 'Provincia', 'Comunidad autónoma', 'Estado español'], why: 'Varios municipios forman una comarca, varias comarcas integran una provincia, las provincias forman la comunidad autónoma y el conjunto integra España.' },
        { t: 'choice', q: '¿Qué institución gobierna un municipio y quiénes la integran?', o: ['El Ayuntamiento, formado por el alcalde o alcaldesa y los concejales', 'La Diputación, formada por los senadores', 'El Senado, formado por los ministros', 'El Juzgado de Paz, formado por los magistrados'], a: 0, why: 'Los vecinos eligen en las elecciones municipales a los concejales, y estos eligen al alcalde o alcaldesa.' },
        { t: 'match', q: 'Une cada entidad territorial con la institución que la gobierna o administra.', pairs: [['Municipio', 'Ayuntamiento (alcalde y concejales)'], ['Comarca', 'Consejo Comarcal'], ['Provincia', 'Diputación Provincial'], ['Comunidad Autónoma de Aragón', 'Instituciones autonómicas (Cortes y DGA)']], why: 'Cada nivel territorial tiene su propio órgano de gobierno para prestar los servicios que le corresponden.' },
        { t: 'num', q: '¿Cuántas provincias forman la Comunidad Autónoma de Aragón?', a: 3, u: 'provincias', why: 'Aragón está integrada por 3 provincias: Huesca, Teruel y Zaragoza.' },
        { t: 'num', q: '¿En cuántas comarcas se organiza el territorio de Aragón?', a: 33, u: 'comarcas', why: 'La comarcalización de Aragón divide la comunidad en 33 comarcas.' },
        { t: 'sort', q: 'Clasifica cada capital o territorio según sea una provincia de Aragón o una ciudad autónoma de España.', cats: ['Provincia de Aragón', 'Ciudad autónoma de España'], items: [{ x: 'Huesca', c: 0 }, { x: 'Teruel', c: 0 }, { x: 'Zaragoza', c: 0 }, { x: 'Ceuta', c: 1 }, { x: 'Melilla', c: 1 }], why: 'Huesca, Teruel y Zaragoza son las tres provincias aragonesas; Ceuta y Melilla son las dos ciudades autónomas situadas en el norte de África.' },
        { t: 'tf', q: 'España está organizada en 17 comunidades autónomas y 2 ciudades autónomas (Ceuta y Melilla).', a: true, why: 'Ese es el mapa autonómico de España establecido a partir de la Constitución de 1978.' },
        { t: 'choice', q: '¿Para qué sirven principalmente las comarcas en Aragón?', o: ['Para agrupar municipios cercanos y compartir servicios difíciles de sostener por separado', 'Para sustituir a las Cortes Generales en Madrid', 'Para cobrar impuestos aduaneros al cruzar de un pueblo a otro', 'Para prohibir que existan ayuntamientos en los pueblos'], a: 0, why: 'Gracias a la comarca, municipios pequeños comparten recogida de basuras, servicios sociales, cultura, deportes o protección civil.' },
        { t: 'tf', q: 'En un municipio, el alcalde y los concejales son nombrados por sorteo entre los turistas que pasan por la plaza.', a: false, why: 'Los concejales son elegidos democráticamente por los vecinos en las elecciones municipales cada cuatro años.' },
        { t: 'tap', q: 'Encuentra las dos palabras erróneas sobre la organización territorial de Aragón.', words: ['Aragón', 'se', 'divide', 'en', 'cinco', 'provincias', 'y', 'dos', 'comarcas.'], wrong: [4, 7], why: 'Aragón se divide en <b>tres</b> provincias (Huesca, Teruel y Zaragoza) y <b>33</b> comarcas.' },
        { t: 'choice', q: '¿Cuál de estos servicios suele encargarse de gestionar directamente el Ayuntamiento de tu municipio?', o: ['El alumbrado público, la limpieza de las calles, los parques y el agua potable', 'La defensa militar de las fronteras del país', 'La firma de tratados internacionales con otros continentes', 'La elección de los magistrados del Tribunal Supremo'], a: 0, why: 'Los ayuntamientos atienden los servicios más próximos a la vida diaria de los vecinos.' },
        { t: 'tf', q: 'La Diputación Provincial de Huesca, la de Teruel y la de Zaragoza colaboran especialmente con los municipios más pequeños de su provincia.', a: true, why: 'Una de las funciones esenciales de las diputaciones provinciales es apoyar técnica y económicamente a los ayuntamientos con menos recursos.' }
      ]
    },
    {
      title: 'Las instituciones propias de Aragón',
      intro: [
        { i: '📕', h: 'El Estatuto de Autonomía de Aragón', p: 'Es la <b>norma institucional básica</b> de nuestra comunidad autónoma (justo por debajo de la Constitución). Fue aprobado en <b>1982</b> y reformado posteriormente (como en 1996, 2007 y 2022).<br>Define el territorio, los símbolos (la bandera de las cuatro barras rojas sobre fondo amarillo, el escudo y el himno), las competencias y las instituciones de Aragón. El <b>23 de abril</b> (San Jorge) se celebra el <b>Día de Aragón</b>.' },
        { i: '🏰', h: 'Cortes de Aragón y Gobierno de Aragón (DGA)', p: '• <b>Cortes de Aragón</b>: ejercen el poder <b>legislativo</b> autonómico (aprueban las leyes y presupuestos de Aragón y eligen al Presidente). Su sede es el histórico <b>Palacio de la Aljafería</b>, en Zaragoza.<br>• <b>Diputación General de Aragón (DGA) o Gobierno de Aragón</b>: ejerce el poder <b>ejecutivo</b> autonómico (integrado por el Presidente y los consejeros). Su sede principal es el <b>Edificio Pignatelli</b>.' },
        { i: '🛡️', h: 'El Justicia de Aragón y el TSJA', p: '• <b>El Justicia de Aragón</b>: institución histórica aragonesa encargada de <b>defender los derechos y libertades</b> de los ciudadanos frente a posibles abusos de las administraciones públicas y de tutelar el <b>Derecho foral aragonés</b>.<br>• <b>Tribunal Superior de Justicia de Aragón (TSJA)</b>: máximo órgano del poder judicial en la comunidad.' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuál es la norma institucional básica de la Comunidad Autónoma de Aragón, que recoge sus competencias e instituciones?', o: ['El Estatuto de Autonomía de Aragón', 'El Código de la Circulación', 'El Reglamento Municipal de Tráfico', 'El Tratado de Roma'], a: 0, why: 'Dentro de la Constitución, el <b>Estatuto de Autonomía</b> (aprobado en 1982) es la ley fundamental de Aragón.' },
        { t: 'match', q: 'Une cada institución de Aragón con su función principal.', pairs: [['Cortes de Aragón', 'Ejercen el poder legislativo y aprueban las leyes aragonesas'], ['Gobierno de Aragón (DGA)', 'Ejerce el poder ejecutivo y dirige la administración autonómica'], ['El Justicia de Aragón', 'Defiende los derechos de los ciudadanos y tutela el Derecho foral'], ['Tribunal Superior de Justicia (TSJA)', 'Culmina la organización del poder judicial en Aragón']], why: 'El Estatuto establece estas instituciones para el autogobierno de Aragón.' },
        { t: 'choice', q: '¿En qué monumento histórico de Zaragoza tienen su sede las Cortes de Aragón?', o: ['En el Palacio de la Aljafería', 'En la Catedral de Jaca', 'En las Torres de Teruel', 'En el Castillo de Loarre'], a: 0, why: 'El parlamento autonómico (las <b>Cortes de Aragón</b>) se reúne en el <b>Palacio de la Aljafería</b> de Zaragoza.' },
        { t: 'tf', q: 'Las siglas DGA corresponden a «Diputación General de Aragón», que es la denominación histórica del Gobierno de Aragón.', a: true, why: 'El Estatuto denomina al poder ejecutivo autonómico Gobierno de Aragón o Diputación General de Aragón (DGA).' },
        { t: 'choice', q: '¿Cuál es la misión principal del Justicia de Aragón?', o: ['Defender los derechos de la ciudadanía ante la Administración y tutelar el Derecho foral aragonés', 'Dirigir las obras de las carreteras comarcales', 'Recaudar el impuesto del IVA en los comercios', 'Presidir los plenos de todos los ayuntamientos'], a: 0, why: 'El Justicia de Aragón es el defensor de los derechos de los aragoneses y guardián del Derecho foral.' },
        { t: 'sort', q: 'Clasifica cada rasgo según corresponda a las Cortes de Aragón o al Gobierno de Aragón (DGA).', cats: ['Cortes de Aragón', 'Gobierno de Aragón (DGA)'], items: [{ x: 'Formadas por diputados y diputadas elegidos en las elecciones autonómicas', c: 0 }, { x: 'Tienen su sede en el Palacio de la Aljafería', c: 0 }, { x: 'Aprueban las leyes y los presupuestos de la comunidad', c: 0 }, { x: 'Integrado por el Presidente y los consejeros y consejeras', c: 1 }, { x: 'Ejerce la función ejecutiva y gestiona sanidad o educación', c: 1 }, { x: 'Tiene su sede principal en el Edificio Pignatelli', c: 1 }], why: 'Las Cortes representan a los ciudadanos y legislan; la DGA gobierna y dirige las consejerías.' },
        { t: 'tf', q: 'El Día de Aragón se celebra cada año el 23 de abril, festividad de San Jorge.', a: true, why: 'El 23 de abril, día de San Jorge, es la festividad oficial de la Comunidad Autónoma de Aragón.' },
        { t: 'tap', q: 'Caza las dos palabras equivocadas sobre las sedes y funciones en Aragón.', words: ['Las', 'Cortes', 'de', 'Aragón', 'ejercen', 'el', 'poder', 'judicial', 'en', 'el', 'Pignatelli.'], wrong: [7, 10], why: 'Las Cortes de Aragón ejercen el poder <b>legislativo</b> y su sede es el Palacio de la <b>Aljafería</b> (el Edificio Pignatelli es la sede de la DGA).' },
        { t: 'order', q: 'Ordena cómo se forma el Gobierno de Aragón tras unas elecciones autonómicas.', items: ['La ciudadanía aragonesa vota para elegir a los diputados de las Cortes de Aragón', 'Se constituyen las Cortes de Aragón en el Palacio de la Aljafería', 'Las Cortes debaten y eligen de entre sus miembros al Presidente de Aragón', 'El Presidente nombra a los consejeros y consejeras de la DGA'], why: 'En un sistema parlamentario, los ciudadanos eligen a las Cortes, las Cortes eligen al Presidente y este designa a su Gobierno.' },
        { t: 'choice', q: '¿Cómo es la bandera tradicional de Aragón según recoge el Estatuto de Autonomía?', o: ['Cuatro barras rojas horizontales sobre fondo amarillo, con el escudo de Aragón', 'Dos franjas verticales verdes y una blanca en el centro', 'Un fondo azul oscuro con doce estrellas doradas', 'Tres franjas horizontales: roja, blanca y azul'], a: 0, why: 'El artículo 3 del Estatuto establece que la bandera de Aragón es la tradicional de las cuatro barras rojas horizontales sobre fondo amarillo.' },
        { t: 'tf', q: 'El Justicia de Aragón es una institución creada por primera vez hace solo cinco años y sin ninguna tradición histórica.', a: false, why: 'El Justicia de Aragón tiene raíces medievales en el antiguo Reino de Aragón y fue recuperado por el Estatuto de Autonomía en 1982.' },
        { t: 'num', q: '¿En qué año se aprobó el primer Estatuto de Autonomía de Aragón de la etapa democrática actual?', a: 1982, why: 'El Estatuto de Autonomía de Aragón fue aprobado por Ley Orgánica el 10 de agosto de 1982.' }
      ]
    }
  ]
});

})();
/* ---- m37.js ---- */
(function(){
Adv.register(37, {
  stations: [
    {
      title: 'Origen, símbolos y valores de la Unión Europea',
      intro: [
        { i: '🕊️', h: 'Un proyecto de paz tras la guerra', p: 'Tras la Segunda Guerra Mundial, varios países europeos decidieron unir la gestión de su carbón y su acero para evitar nuevas guerras. En <b>1957</b>, seis países firmaron el <b>Tratado de Roma</b> y fundaron la <b>Comunidad Económica Europea (CEE)</b>: Alemania, Francia, Italia, Bélgica, Países Bajos y Luxemburgo.' },
        { i: '🇪🇺', h: 'De la CEE a la Unión Europea actual', p: 'Con el <b>Tratado de Maastricht</b> (1992), la CEE pasó a llamarse <b>Unión Europea (UE)</b>. España ingresó en <b>1986</b> junto con Portugal. Tras la salida del Reino Unido (<i>Brexit</i>), la UE está integrada hoy por <b>27 países miembros</b>.' },
        { i: '⭐', h: 'Símbolos y valores europeos', p: 'La <b>bandera europea</b> tiene <b>12 estrellas doradas</b> en círculo sobre fondo azul (simbolizan la unidad y la armonía, no el número de países). Su himno es la <i>Oda a la Alegría</i> de Beethoven, su lema es <b>«Unida en la diversidad»</b> y el <b>9 de mayo</b> se celebra el Día de Europa. Sus valores son la democracia, la libertad, la igualdad y los derechos humanos.' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuál fue el objetivo principal para iniciar la unión de los países europeos tras la Segunda Guerra Mundial?', o: ['Asegurar una paz duradera y cooperar económicamente', 'Crear un único ejército para conquistar otros continentes', 'Imponer un solo idioma obligatorio en toda Europa'], a: 0, why: 'Tras la devastación de la Segunda Guerra Mundial, los países europeos buscaron colaborar en economía para evitar enfrentarse de nuevo en una guerra.' },
        { t: 'num', q: '¿Cuántos países miembros forman parte de la Unión Europea en la actualidad?', a: 27, why: 'Desde la salida del Reino Unido (Brexit), la Unión Europea está formada por 27 Estados miembros.' },
        { t: 'num', q: '¿En qué año ingresó España en la Comunidad Económica Europea (actual Unión Europea)?', a: 1986, why: 'España y Portugal entraron juntas en la Comunidad Económica Europea el 1 de enero de 1986.' },
        { t: 'tf', q: 'Las 12 estrellas de la bandera europea significan que la Unión Europea solo acepta a 12 países miembros.', a: false, why: 'El número de estrellas es fijo (12) porque simboliza la perfección, la plenitud y la unidad, no la cantidad de Estados miembros.' },
        { t: 'tf', q: 'Para que un país pueda formar parte de la Unión Europea es obligatorio que sea una democracia y respete los derechos humanos.', a: true, why: 'La democracia, el Estado de derecho, la libertad, la igualdad y los derechos humanos son valores fundamentales y requisitos obligatorios de la UE.' },
        { t: 'sort', q: 'Clasifica estos países europeos según pertenezcan o no a la Unión Europea en la actualidad.', cats: ['Miembro de la UE', 'No miembro de la UE'], items: [{ x: 'España', c: 0 }, { x: 'Francia', c: 0 }, { x: 'Alemania', c: 0 }, { x: 'Italia', c: 0 }, { x: 'Reino Unido', c: 1 }, { x: 'Suiza', c: 1 }, { x: 'Noruega', c: 1 }], why: 'España, Francia, Alemania e Italia son miembros de la UE. Suiza y Noruega nunca han entrado, y el Reino Unido salió con el Brexit.' },
        { t: 'match', q: 'Une cada símbolo de la Unión Europea con su descripción correcta.', pairs: [['Bandera europea', 'Círculo de 12 estrellas doradas sobre fondo azul'], ['Himno europeo', 'Melodía de la Oda a la Alegría, de Beethoven'], ['Lema oficial', '«Unida en la diversidad»'], ['Día de Europa', 'Se celebra cada 9 de mayo']], why: 'Estos cuatro símbolos representan la identidad compartida y los valores de paz y unión de la ciudadanía europea.' },
        { t: 'order', q: 'Ordena cronológicamente estos hitos de la historia europea, del más antiguo al más reciente.', items: ['Final de la Segunda Guerra Mundial (1945)', 'Tratado de Roma: seis países fundan la CEE (1957)', 'Ingreso de España y Portugal en la CEE (1986)', 'Tratado de Maastricht: nace la Unión Europea (1992)', 'Salida del Reino Unido o Brexit (2020)'], why: 'La integración comenzó tras 1945, consolidó la CEE en 1957, incorporó a España en 1986, adoptó el nombre de UE en 1992 y vivió el Brexit en 2020.' },
        { t: 'choice', q: '¿Cuáles fueron los seis países fundadores que firmaron el Tratado de Roma en 1957?', o: ['Alemania, Francia, Italia, Bélgica, Países Bajos y Luxemburgo', 'España, Portugal, Francia, Italia, Grecia y Alemania', 'Reino Unido, Francia, Alemania, Suiza, Austria y Bélgica'], a: 0, why: 'El núcleo fundador en 1957 estuvo formado por Francia, Italia, la República Federal de Alemania y los tres países del Benelux (Bélgica, Países Bajos y Luxemburgo).' },
        { t: 'tap', q: 'En esta descripción de la bandera europea hay dos palabras equivocadas. ¡Cázalas!', words: ['La', 'bandera', 'europea', 'tiene', 'doce', 'estrellas', 'verdes', 'sobre', 'fondo', 'rojo.'], wrong: [6, 9], why: 'La bandera de la Unión Europea tiene doce estrellas doradas (amarillas) dispuestas en círculo sobre un fondo azul.' },
        { t: 'choice', q: '¿Qué tratado transformó la Comunidad Económica Europea (CEE) en la Unión Europea (UE)?', o: ['El Tratado de Maastricht', 'El Tratado de Cádiz', 'El Tratado de Versalles'], a: 0, why: 'El Tratado de Maastricht (firmado en 1992) dio origen formal a la Unión Europea y preparó la llegada de la moneda única.' },
        { t: 'choice', q: '¿Qué expresa el lema de la Unión Europea «Unida en la diversidad»?', o: ['Que los europeos cooperan por la paz y el bien común respetando sus distintas culturas y lenguas', 'Que todos los países miembros tienen exactamente las mismas tradiciones y el mismo clima', 'Que cada país actúa por su cuenta sin acordar normas comunes'], a: 0, why: 'El lema destaca que la riqueza cultural y lingüística de los 27 países es compatible con trabajar unidos por objetivos comunes.' }
      ]
    },
    {
      title: 'Ciudadanía europea, mercado único y el euro',
      intro: [
        { i: '🛂', h: 'Ciudadanía europea y espacio Schengen', p: 'Toda persona con la nacionalidad de un Estado miembro tiene la <b>ciudadanía europea</b>: puede viajar, estudiar, trabajar o residir libremente en cualquier país de la UE. Además, en el <b>espacio Schengen</b> se han suprimido los controles fronterizos habituales entre los países firmantes.' },
        { i: '💶', h: 'El mercado único y el euro (€)', p: 'En el <b>mercado único</b> circulan libremente personas, mercancías, servicios y capitales, sin pagar impuestos de aduana (aranceles) al cruzar de un país miembro a otro. La moneda común es el <b>euro (€)</b>, cuyos billetes y monedas empezaron a circular en España en <b>2002</b>.' },
        { i: '🏦', h: 'La eurozona y el Banco Central Europeo', p: 'El grupo de países de la UE que utilizan el euro se llama <b>eurozona</b> o zona del euro (algunos miembros, como Dinamarca, Suecia o Polonia, mantienen su propia moneda). El <b>Banco Central Europeo (BCE)</b>, con sede en <b>Fránkfurt</b> (Alemania), gestiona el euro y vigila la estabilidad de los precios.' }
      ],
      ex: [
        { t: 'num', q: '¿En qué año empezaron a circular físicamente los billetes y monedas de euro en España?', a: 2002, why: 'El 1 de enero de 2002 los billetes y monedas de euro entraron en circulación en España, sustituyendo a la antigua peseta.' },
        { t: 'tf', q: 'Todos los países que pertenecen a la Unión Europea utilizan obligatoriamente el euro en la actualidad.', a: false, why: 'Solo los países de la eurozona usan el euro; otros Estados miembros como Dinamarca, Suecia o Polonia conservan su moneda nacional.' },
        { t: 'tf', q: 'Gracias a la ciudadanía europea, una joven de Zaragoza puede estudiar o trabajar en Francia o Alemania con los mismos derechos que los ciudadanos de allí.', a: true, why: 'La libre circulación y residencia de las personas es uno de los derechos fundamentales de la ciudadanía de la Unión Europea.' },
        { t: 'match', q: 'Une cada concepto de la Unión Europea con su significado.', pairs: [['Eurozona', 'Conjunto de países de la UE que usan el euro como moneda'], ['Espacio Schengen', 'Zona europea donde se viaja sin controles en las fronteras'], ['Mercado único', 'Libre circulación de bienes, servicios, capitales y personas'], ['Erasmus+', 'Programa europeo de intercambio para estudiantes']], why: 'El mercado único, el espacio Schengen, la eurozona y programas como Erasmus+ facilitan la vida cotidiana de los europeos.' },
        { t: 'sort', q: 'Clasifica estos países según utilicen el euro como moneda oficial o tengan otra moneda distinta.', cats: ['Usa el euro (€)', 'No usa el euro'], items: [{ x: 'España', c: 0 }, { x: 'Francia', c: 0 }, { x: 'Alemania', c: 0 }, { x: 'Portugal', c: 0 }, { x: 'Reino Unido (libra esterlina)', c: 1 }, { x: 'Polonia (esloti)', c: 1 }, { x: 'Dinamarca (corona danesa)', c: 1 }], why: 'España, Francia, Alemania y Portugal forman parte de la eurozona; Polonia y Dinamarca son de la UE pero conservan su moneda, y el Reino Unido usa la libra.' },
        { t: 'choice', q: '¿Qué institución dirige la política monetaria del euro y vigila que los precios se mantengan estables?', o: ['El Banco Central Europeo (BCE)', 'El Tribunal Internacional de La Haya', 'La Organización de las Naciones Unidas'], a: 0, why: 'El Banco Central Europeo (BCE), con sede en Fránkfurt, es el responsable de emitir y gestionar el euro.' },
        { t: 'choice', q: '¿Qué característica tienen las monedas de euro que usamos todos los días?', o: ['Tienen una cara común para toda la eurozona y otra cara nacional de cada país', 'Solo valen en el país cuyo dibujo aparece en el reverso', 'Tienen forma cuadrada las de céntimos y redonda las de euro'], a: 0, why: 'Todas las monedas de euro tienen una cara común con el valor y una cara nacional con símbolos del país emisor, y sirven en toda la eurozona.' },
        { t: 'tap', q: 'Encuentra las dos palabras erróneas en esta explicación sobre el mercado único.', words: ['En', 'el', 'mercado', 'único', 'europeo', 'se', 'cobran', 'aduanas', 'y', 'se', 'prohíbe', 'trabajar', 'en', 'otros', 'países.'], wrong: [7, 10], why: 'En el mercado único se eliminaron las aduanas interiores y se garantiza el derecho a trabajar libremente en cualquier país miembro.' },
        { t: 'order', q: 'Ordena de menor a mayor valor estas monedas de curso legal de la zona euro.', items: ['Moneda de 5 céntimos', 'Moneda de 20 céntimos', 'Moneda de 50 céntimos', 'Moneda de 1 euro', 'Moneda de 2 euros'], why: 'Un euro equivale a 100 céntimos, por lo que 5 cts. < 20 cts. < 50 cts. < 1 € (100 cts.) < 2 € (200 cts.).' },
        { t: 'num', q: '¿A cuántos céntimos de euro equivale exactamente una moneda de 2 euros?', a: 200, why: 'Cada euro se divide en 100 céntimos, así que 2 euros equivalen a 2 × 100 = 200 céntimos.' },
        { t: 'choice', q: '¿Cuáles son las cuatro grandes libertades de circulación del mercado único europeo?', o: ['Personas, mercancías, servicios y capitales', 'Ejércitos, fronteras, aduanas y pasaportes', 'Monedas, himnos, banderas y escudos'], a: 0, why: 'El mercado interior de la UE se basa en la libre circulación de personas, mercancías (productos), servicios y capitales (dinero e inversiones).' },
        { t: 'tf', q: 'Los billetes de euro tienen exactamente el mismo diseño en todos los países de la eurozona.', a: true, why: 'A diferencia de las monedas (que tienen una cara nacional), los billetes de euro son idénticos en todos los países y muestran puentes y ventanas de estilos arquitectónicos europeos.' }
      ]
    },
    {
      title: 'Las instituciones de la Unión Europea',
      intro: [
        { i: '🗳️', h: 'El Parlamento Europeo (voz ciudadana)', p: 'Representa directamente a los <b>ciudadanos de la UE</b>. Está formado por los <b>eurodiputados</b>, elegidos por sufragio universal cada <b>5 años</b>. Comparte con el Consejo de la UE la tarea de debatir y <b>aprobar las leyes europeas y el presupuesto</b>. Sus sedes están en <b>Estrasburgo</b> y <b>Bruselas</b>.' },
        { i: '⚙️', h: 'La Comisión Europea (órgano ejecutivo)', p: 'Es el poder ejecutivo de la Unión y defiende el <b>interés común europeo</b>. Está integrada por <b>27 comisarios</b> (uno por cada país miembro). Se encarga de <b>proponer las nuevas leyes</b>, gestionar el presupuesto y vigilar que se cumplan las normas y tratados. Su sede está en <b>Bruselas</b>.' },
        { i: '🏛️', h: 'El Consejo de la UE y el Tribunal de Justicia', p: 'El <b>Consejo de la Unión Europea</b> reúne a los <b>ministros</b> de los gobiernos de cada país según la materia tratada y aprueba las leyes junto con el Parlamento. Por su parte, el <b>Tribunal de Justicia de la UE</b> (en Luxemburgo) garantiza que las leyes europeas se cumplan igual en todos los Estados.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué institución de la Unión Europea está formada por los eurodiputados que eligen directamente los ciudadanos con su voto?', o: ['El Parlamento Europeo', 'La Comisión Europea', 'El Banco Central Europeo'], a: 0, why: 'El Parlamento Europeo es la única institución de la UE cuyos miembros (los eurodiputados) son elegidos directamente por los ciudadanos en las urnas.' },
        { t: 'num', q: '¿Cada cuántos años se celebran las elecciones para elegir a los eurodiputados del Parlamento Europeo?', a: 5, why: 'La ciudadanía de los 27 países vota cada 5 años en las elecciones al Parlamento Europeo.' },
        { t: 'choice', q: '¿Qué institución ejerce el poder ejecutivo de la UE, propone las nuevas leyes y cuenta con un comisario de cada país miembro?', o: ['La Comisión Europea', 'El Parlamento Europeo', 'El Tribunal de Cuentas'], a: 0, why: 'La Comisión Europea es el órgano ejecutivo: redacta las propuestas de ley, aplica las políticas comunes y vigila que se respeten los tratados.' },
        { t: 'choice', q: '¿Quiénes integran el Consejo de la Unión Europea (también llamado Consejo de Ministros)?', o: ['Los ministros de los gobiernos de cada país miembro, según el tema que se trate', 'Un juez vitalicio de cada provincia europea', 'Los alcaldes de todas las capitales del mundo'], a: 0, why: 'En el Consejo de la UE se reúnen los ministros nacionales por áreas (por ejemplo, todos los ministros de Agricultura o de Medio Ambiente) para aprobar leyes junto al Parlamento.' },
        { t: 'match', q: 'Une cada institución de la Unión Europea con su función principal.', pairs: [['Parlamento Europeo', 'Representa a los ciudadanos y aprueba leyes y presupuestos'], ['Comisión Europea', 'Propone las leyes, ejecuta políticas y vigila los tratados'], ['Consejo de la UE', 'Reúne a los ministros nacionales para legislar con el Parlamento'], ['Tribunal de Justicia', 'Garantiza que la ley europea se cumpla igual en todos los países']], why: 'Cada institución tiene un papel claro: la Comisión propone y ejecuta, el Parlamento y el Consejo legislan, y el Tribunal de Justicia vela por la ley.' },
        { t: 'sort', q: 'Clasifica cada rasgo según corresponda al Parlamento Europeo, a la Comisión Europea o al Consejo de la UE.', cats: ['Parlamento Europeo', 'Comisión Europea', 'Consejo de la UE'], items: [{ x: 'Formado por eurodiputados elegidos por los ciudadanos cada 5 años', c: 0 }, { x: 'Representa directamente a la ciudadanía de la Unión', c: 0 }, { x: 'Compuesta por 27 comisarios, uno de cada país miembro', c: 1 }, { x: 'Órgano ejecutivo que propone las leyes y vigila los tratados', c: 1 }, { x: 'Reúne a los ministros de los gobiernos de cada Estado miembro', c: 2 }, { x: 'Representa a los gobiernos nacionales al aprobar leyes y presupuestos', c: 2 }], why: 'El Parlamento representa a los ciudadanos (eurodiputados), la Comisión al interés común (comisarios) y el Consejo de la UE a los gobiernos nacionales (ministros).' },
        { t: 'tf', q: 'Para aprobar la mayoría de las leyes europeas, el Parlamento Europeo y el Consejo de la Unión Europea deben ponerse de acuerdo.', a: true, why: 'Ambos órganos comparten el poder legislativo: debaten y votan las propuestas que les presenta la Comisión Europea.' },
        { t: 'tf', q: 'Los comisarios de la Comisión Europea tienen la obligación de defender solo los intereses de su propio país y no los de la Unión.', a: false, why: 'Al contrario: la Comisión Europea representa y defiende el interés general de toda la Unión Europea por encima de los intereses particulares de cada Estado.' },
        { t: 'order', q: 'Ordena los pasos del proceso habitual para crear y aplicar una ley en la Unión Europea.', items: ['La Comisión Europea estudia una necesidad y propone el texto de la nueva ley', 'El Parlamento Europeo y el Consejo de la UE debaten, modifican y aprueban la ley', 'Los países miembros aplican la ley y la Comisión vigila que todos la cumplan'], why: 'En la UE, la iniciativa legislativa parte de la Comisión, la aprobación corresponde al Parlamento y al Consejo, y el control recae de nuevo en la Comisión y el Tribunal.' },
        { t: 'tap', q: 'Caza las dos palabras equivocadas en esta frase sobre las elecciones europeas.', words: ['Los', 'ciudadanos', 'votan', 'cada', 'cinco', 'años', 'para', 'elegir', 'a', 'los', 'jueces', 'del', 'Banco', 'Europeo.'], wrong: [10, 12], why: 'Los ciudadanos votan cada cinco años para elegir a los eurodiputados del Parlamento Europeo.' },
        { t: 'match', q: 'Une cada institución europea con la ciudad donde tiene su sede principal o más representativa.', pairs: [['Comisión Europea', 'Bruselas (Bélgica)'], ['Plenos del Parlamento Europeo', 'Estrasburgo (Francia)'], ['Banco Central Europeo', 'Fránkfurt (Alemania)'], ['Tribunal de Justicia de la UE', 'Luxemburgo']], why: 'Bruselas, Estrasburgo, Fránkfurt y Luxemburgo acogen las principales sedes de las instituciones de la Unión Europea.' },
        { t: 'choice', q: '¿Qué diferencia hay entre el Consejo de la Unión Europea y el Consejo Europeo?', o: ['En el Consejo de la UE se reúnen los ministros y en el Consejo Europeo los jefes de Estado o de Gobierno', 'Son exactamente la misma institución con distinto nombre', 'El Consejo Europeo solo se ocupa de organizar competiciones deportivas'], a: 0, why: 'El Consejo Europeo reúne a los presidentes o primeros ministros para fijar las grandes orientaciones políticas, mientras que el Consejo de la UE reúne a los ministros para legislar.' }
      ]
    }
  ]
});

})();
/* ---- m38.js ---- */
(function(){
Adv.register(38, {
  stations: [
    {
      title: 'Guerra de la Independencia, Sitios y «La Pepa»',
      intro: [
        { i: '⚔️', h: 'La Guerra de la Independencia (1808-1814)', p: 'En <b>1807</b>, las tropas francesas de <b>Napoleón Bonaparte</b> entraron en España con el pretexto de invadir Portugal, pero ocuparon ciudades españolas y Napoleón proclamó rey a su hermano <b>José I Bonaparte</b>. El <b>2 de mayo de 1808</b> el pueblo de Madrid se alzó contra la invasión, iniciando una guerra que duró hasta <b>1814</b>.' },
        { i: '🦁', h: 'Los Sitios de Zaragoza (1808 y 1809)', p: 'Durante la guerra, <b>Zaragoza</b> sufrió dos durísimos asedios franceses: en el <b>primer Sitio (1808)</b> los defensores lograron rechazar al ejército imperial; en el <b>segundo Sitio (1808-1809)</b> la ciudad capituló exhausta tras meses de lucha casa por casa y epidemias. Destacaron el general <b>José de Palafox</b> y heroínas como <b>Agustina de Aragón</b>, <b>Casta Álvarez</b> o <b>Manuela Sancho</b>.' },
        { i: '📜', h: 'Las Cortes de Cádiz y «La Pepa» (1812)', p: 'En plena guerra, los diputados españoles se reunieron en Cádiz y el <b>19 de marzo de 1812</b> (día de San José) aprobaron la primera Constitución española, llamada popularmente <b>«La Pepa»</b>. Establecía la <b>soberanía nacional</b>, la <b>división de poderes</b>, la monarquía constitucional y libertades como la de imprenta.' }
      ],
      ex: [
        { t: 'order', q: 'Ordena cronológicamente estos acontecimientos del inicio del siglo XIX en España.', items: ['Entrada de las tropas de Napoleón con pretexto de ir a Portugal (1807)', 'Levantamiento del 2 de mayo en Madrid y primer Sitio de Zaragoza (1808)', 'Aprobación de la Constitución de Cádiz, «La Pepa» (1812)', 'Final de la Guerra de la Independencia y regreso de Fernando VII (1814)'], why: 'La ocupación comenzó en 1807, la guerra estalló el 2 de mayo de 1808, las Cortes aprobaron la Constitución en 1812 y el conflicto concluyó en 1814.' },
        { t: 'num', q: '¿En qué año se aprobó en Cádiz la primera Constitución de la historia de España, apodada «La Pepa»?', a: 1812, why: 'Las Cortes de Cádiz promulgaron la Constitución el 19 de marzo de 1812.' },
        { t: 'choice', q: '¿Por qué la Constitución de Cádiz de 1812 fue conocida popularmente como «La Pepa»?', o: ['Porque se aprobó el 19 de marzo, festividad de San José', 'En honor a una reina española llamada Josefa', 'Porque fue redactada en el palacio de La Pepa en Madrid'], a: 0, why: 'Al promulgarse el día de San José (19 de marzo de 1812), el pueblo empezó a llamarla cariñosamente «La Pepa».' },
        { t: 'match', q: 'Une cada personaje de la Guerra de la Independencia con su papel histórico.', pairs: [['José de Palafox', 'General que dirigió la defensa en los Sitios de Zaragoza'], ['Agustina de Aragón', 'Heroína que disparó un cañón en el Portillo de Zaragoza'], ['Napoleón Bonaparte', 'Emperador francés que invadió España en 1808'], ['José I Bonaparte', 'Rey impuesto por su hermano Napoleón en el trono español']], why: 'Frente a la ocupación de Napoleón y José I, en Zaragoza sobresalieron el liderazgo de Palafox y el valor de heroínas como Agustina de Aragón.' },
        { t: 'sort', q: 'Clasifica estas ideas políticas según pertenezcan al liberalismo de la Constitución de 1812 o al absolutismo.', cats: ['Liberalismo (Constitución de 1812)', 'Absolutismo'], items: [{ x: 'Soberanía nacional: el poder reside en la nación', c: 0 }, { x: 'División de poderes (legislativo, ejecutivo y judicial)', c: 0 }, { x: 'Libertad de imprenta e igualdad de los ciudadanos ante la ley', c: 0 }, { x: 'Monarquía sujeta a una Constitución escrita', c: 0 }, { x: 'El rey concentra todos los poderes sin ningún límite', c: 1 }, { x: 'Los habitantes son súbditos sin derechos constitucionales', c: 1 }], why: 'La Constitución de 1812 defendía las ideas liberales frente al absolutismo del Antiguo Régimen, en el que el monarca tenía poder absoluto.' },
        { t: 'tf', q: 'En el primer Sitio de Zaragoza (verano de 1808), los defensores lograron resistir y obligaron a las tropas francesas a levantar el asedio.', a: true, why: 'Durante el primer Sitio (junio-agosto de 1808), la tenaz defensa de soldados y vecinos de Zaragoza forzó la retirada francesa.' },
        { t: 'tf', q: 'La Constitución de 1812 establecía que el rey tenía poder absoluto para hacer las leyes y juzgar sin contar con las Cortes.', a: false, why: 'Todo lo contrario: «La Pepa» limitó el poder del rey mediante la división de poderes y entregó la soberanía a la nación representada en las Cortes.' },
        { t: 'order', q: 'Ordena cronológicamente el desarrollo de los Sitios de Zaragoza durante la Guerra de la Independencia.', items: ['Alzamiento de Zaragoza y entrega del mando a Palafox (mayo de 1808)', 'Primer Sitio: heroica defensa y retirada de los franceses (verano de 1808)', 'Segundo Sitio: lucha casa por casa y epidemia de tifus (invierno 1808-1809)', 'Capitulación de la ciudad arrasada ante el ejército francés (febrero de 1809)'], why: 'Zaragoza resistió con éxito el primer Sitio en el verano de 1808, pero sucumbió en febrero de 1809 tras el durísimo segundo Sitio.' },
        { t: 'choice', q: '¿Quiénes fueron Casta Álvarez, Manuela Sancho y María Agustín en la historia de Aragón?', o: ['Heroínas populares que combatieron y ayudaron a defender Zaragoza en los Sitios', 'Reinas de la Corona de Aragón durante la Edad Media', 'Escritoras que redactaron la Constitución de Cádiz en 1812'], a: 0, why: 'Junto con Agustina de Aragón, mujeres como Casta Álvarez, Manuela Sancho o María Agustín tuvieron un protagonismo decisivo en la defensa de Zaragoza.' },
        { t: 'tap', q: 'Caza las dos palabras equivocadas en este resumen del inicio de la Guerra de la Independencia.', words: ['El', '2', 'de', 'mayo', 'de', '1808', 'el', 'pueblo', 'se', 'levantó', 'en', 'Lisboa', 'contra', 'el', 'ejército', 'inglés', 'de', 'Napoleón.'], wrong: [11, 15], why: 'El levantamiento del 2 de mayo de 1808 tuvo lugar en Madrid contra el ejército francés de Napoleón Bonaparte.' },
        { t: 'match', q: 'Une cada fecha con el acontecimiento histórico que le corresponde.', pairs: [['2 de mayo de 1808', 'Levantamiento de Madrid contra la ocupación francesa'], ['Verano de 1808', 'Primer Sitio de Zaragoza'], ['19 de marzo de 1812', 'Promulgación de la Constitución de Cádiz («La Pepa»)'], ['1814', 'Fin de la Guerra de la Independencia']], why: 'Entre 1808 y 1814 transcurrió la Guerra de la Independencia, con hitos como los Sitios de Zaragoza y la Constitución de 1812.' },
        { t: 'choice', q: '¿Qué genial pintor aragonés, nacido en Fuendetodos, reflejó el horror de esta contienda en «Los desastres de la guerra» y «El 3 de mayo en Madrid»?', o: ['Francisco de Goya', 'Diego Velázquez', 'Pablo Picasso'], a: 0, why: 'El aragonés Francisco de Goya (1746-1828) fue testigo de la Guerra de la Independencia y plasmó su crudeza en lienzos y grabados universales.' }
      ]
    },
    {
      title: 'De Fernando VII a la Restauración borbónica',
      intro: [
        { i: '👑', h: 'Fernando VII (1814-1833) y el carlismo', p: 'Al regresar en <b>1814</b>, <b>Fernando VII</b> anuló la Constitución de 1812 y restauró el <b>absolutismo</b> (salvo en el Trienio Liberal, 1820-1823). Durante su reinado se independizaron casi todas las colonias americanas. Antes de morir en <b>1833</b>, cambió la ley sucesoria para que reinara su hija <b>Isabel</b> en vez de su hermano <b>Carlos María Isidro</b>, desencadenando la <b>Primera Guerra Carlista</b>.' },
        { i: '⚖️', h: 'Isabel II (1833-1868) y el Sexenio Democrático', p: 'Bajo el reinado de <b>Isabel II</b>, España se organizó como una <b>monarquía constitucional y liberal</b>, con alternancia y choques entre liberales <b>moderados</b> y <b>progresistas</b>. En <b>1868</b>, la revolución <i>«La Gloriosa»</i> destronó a la reina y dio paso al <b>Sexenio Democrático (1868-1874)</b>, que incluyó el reinado de Amadeo I y la <b>Primera República (1873-1874)</b>.' },
        { i: '🔄', h: 'La Restauración borbónica (desde 1874)', p: 'En <b>1874</b> regresó la dinastía de los Borbones con el rey <b>Alfonso XII</b> (hijo de Isabel II) y se aprobó la <b>Constitución de 1876</b>. El político <b>Cánovas del Castillo</b> organizó el <b>turno pacífico</b> en el poder entre el <b>Partido Conservador</b> (Cánovas) y el <b>Partido Liberal</b> (Sagasta). En <b>1898</b>, España perdió sus últimas colonias de ultramar: <b>Cuba, Puerto Rico y Filipinas</b>.' }
      ],
      ex: [
        { t: 'order', q: 'Ordena cronológicamente estas cuatro grandes etapas políticas del siglo XIX español.', items: ['Reinado absolutista de Fernando VII (1814-1833)', 'Reinado liberal de Isabel II (1833-1868)', 'Sexenio Democrático y Primera República (1868-1874)', 'Restauración borbónica con Alfonso XII (desde 1874)'], why: 'Tras Fernando VII reinó su hija Isabel II; su caída en 1868 abrió el Sexenio Democrático hasta que en 1874 comenzó la Restauración con Alfonso XII.' },
        { t: 'choice', q: '¿Qué decisión tomó Fernando VII nada más regresar al trono de España en 1814?', o: ['Anuló la Constitución de 1812 y restauró el absolutismo', 'Proclamó la Primera República española', 'Entregó el gobierno de forma permanente a los liberales'], a: 0, why: 'Fernando VII rechazó jurar la Constitución de Cádiz, la abolió en mayo de 1814 y persiguió a los liberales, volviendo al absolutismo.' },
        { t: 'match', q: 'Une cada grupo o partido político del siglo XIX con lo que defendía.', pairs: [['Carlistas', 'Absolutismo, tradición y el trono para Carlos María Isidro'], ['Isabelinos', 'Defensa del trono de Isabel II con una monarquía liberal'], ['Partido Conservador', 'Liderado por Cánovas del Castillo durante la Restauración'], ['Partido Liberal', 'Liderado por Sagasta, se turnaba con los conservadores']], why: 'En la primera mitad del siglo se enfrentaron carlistas e isabelinos; en la Restauración se turnaron conservadores (Cánovas) y liberales (Sagasta).' },
        { t: 'sort', q: 'Clasifica estos hechos históricos según la etapa del siglo XIX en la que sucedieron.', cats: ['Reinado de Fernando VII', 'Reinado de Isabel II', 'La Restauración'], items: [{ x: 'Vuelta al absolutismo en 1814 y Trienio Liberal (1820-1823)', c: 0 }, { x: 'Independencia de la mayor parte de las colonias de América continental', c: 0 }, { x: 'Consolidación de la monarquía liberal con moderados y progresistas', c: 1 }, { x: 'Revolución de 1868 («La Gloriosa») que destrona a la reina', c: 1 }, { x: 'Reinado de Alfonso XII y aprobación de la Constitución de 1876', c: 2 }, { x: 'Turno de partidos (Cánovas y Sagasta) y pérdida de Cuba en 1898', c: 2 }], why: 'Cada reinado marcó una época: absolutismo y pérdida continental con Fernando VII, estado liberal con Isabel II y turno bipartidista en la Restauración.' },
        { t: 'tf', q: 'La Primera Guerra Carlista estalló en 1833 porque los partidarios de Carlos María Isidro no aceptaron a Isabel II como reina y defendían el absolutismo.', a: true, why: 'El conflicto sucesorio entre los partidarios de la niña Isabel II (apoyada por los liberales) y los de su tío Carlos (absolutistas) provocó las Guerras Carlistas.' },
        { t: 'tf', q: 'Durante la Primera República española (1873-1874), la jefatura del Estado seguía en manos de un rey hereditario.', a: false, why: 'En una república no hay rey: el jefe del Estado es un presidente de la República.' },
        { t: 'order', q: 'Ordena cronológicamente quién ocupó la jefatura del Estado en España a lo largo del siglo XIX.', items: ['Fernando VII', 'Isabel II', 'Presidentes de la Primera República (1873-1874)', 'Alfonso XII'], why: 'Fernando VII reinó hasta 1833, su hija Isabel II hasta 1868, la Primera República tuvo lugar en 1873-1874 y tras ella reinó Alfonso XII.' },
        { t: 'match', q: 'Une cada año clave del siglo XIX con su acontecimiento histórico.', pairs: [['1833', 'Muerte de Fernando VII e inicio de la Primera Guerra Carlista'], ['1868', 'Revolución «La Gloriosa» y exilio de Isabel II'], ['1873', 'Proclamación de la Primera República española'], ['1898', 'Pérdida de las últimas colonias: Cuba, Puerto Rico y Filipinas']], why: 'Estas cuatro fechas (1833, 1868, 1873 y 1898) marcan los grandes giros políticos de la España decimonónica.' },
        { t: 'choice', q: '¿En qué consistía el sistema político del «turno pacífico» ideado por Antonio Cánovas del Castillo en la Restauración?', o: ['En la alternancia pactada en el gobierno entre el Partido Conservador y el Partido Liberal', 'En que cada año gobernaba un rey distinto elegido por sorteo', 'En la unión de España y Francia bajo un mismo parlamento'], a: 0, why: 'Para dar estabilidad al régimen de la Restauración, el Partido Conservador de Cánovas y el Partido Liberal de Sagasta se alternaban pacíficamente en el poder.' },
        { t: 'num', q: '¿En qué año perdió España sus últimas posesiones coloniales de ultramar (Cuba, Puerto Rico y Filipinas)?', a: 1898, why: 'En 1898, tras la guerra contra Estados Unidos, España perdió Cuba, Puerto Rico y Filipinas, hecho conocido como el «Desastre del 98».' },
        { t: 'tap', q: 'Encuentra los dos datos erróneos en esta frase sobre la etapa de la Restauración.', words: ['En', '1874', 'comenzó', 'la', 'Restauración', 'con', 'el', 'rey', 'Fernando', 'XII', 'y', 'en', '1898', 'se', 'conquistó', 'la', 'isla', 'de', 'Cuba.'], wrong: [8, 14], why: 'La Restauración comenzó con el rey Alfonso XII (no Fernando XII) y en 1898 España perdió la colonia de Cuba.' },
        { t: 'choice', q: 'Al morir Alfonso XII en 1885, ¿quién ejerció como reina regente hasta la mayoría de edad de su hijo Alfonso XIII en 1902?', o: ['María Cristina de Habsburgo', 'Juana I de Castilla', 'Isabel la Católica'], a: 0, why: 'María Cristina de Habsburgo asumió la regencia durante toda la minoría de edad de Alfonso XIII, que nació pocos meses después de morir su padre.' }
      ]
    },
    {
      title: 'La Revolución Industrial y la sociedad de clases',
      intro: [
        { i: '🚂', h: 'La Revolución Industrial y el vapor', p: 'Iniciada en Gran Bretaña en el siglo XVIII, la <b>Revolución Industrial</b> se desarrolló en España durante el <b>siglo XIX</b>. Sustituyó los talleres artesanales por grandes <b>fábricas</b> con máquinas movidas por la <b>máquina de vapor</b>, que quemaba <b>carbón mineral (hulla)</b>. Destacaron la <b>industria textil</b> en Cataluña, la <b>siderurgia</b> en el País Vasco y Asturias, y el <b>ferrocarril</b>.' },
        { i: '🏭', h: 'El ferrocarril y la industria en Aragón', p: 'El primer ferrocarril peninsular unió <b>Barcelona y Mataró en 1848</b>. En <b>Aragón</b>, su posición entre Madrid, Barcelona, País Vasco y Francia convirtió a <b>Zaragoza</b> en un gran <b>nudo ferroviario</b> desde la década de 1860. Además, en el valle del Ebro florecieron la <b>industria harinera</b> y la <b>industria azucarera</b> (a partir de la remolacha).' },
        { i: '👥', h: 'La nueva sociedad de clases y el movimiento obrero', p: 'Los antiguos estamentos dieron paso a la <b>sociedad de clases</b>, dividida por la riqueza: <b>clase alta</b> (alta burguesía y nobleza), <b>clase media</b> (profesionales liberales, comerciantes, funcionarios) y <b>clase trabajadora</b> (<b>proletariado</b> industrial y campesinos). Frente a las duras condiciones laborales, los obreros crearon <b>sindicatos</b> y utilizaron la <b>huelga</b> para conquistar derechos.' }
      ],
      ex: [
        { t: 'sort', q: 'Clasifica estas características según correspondan al antiguo taller artesanal o a la fábrica de la Revolución Industrial.', cats: ['Taller artesanal', 'Fábrica industrial'], items: [{ x: 'Trabajo manual con herramientas sencillas y producción reducida', c: 0 }, { x: 'Un maestro artesano elabora la pieza completa de principio a fin', c: 0 }, { x: 'Uso de máquinas movidas por la energía del vapor y del carbón', c: 1 }, { x: 'Producción en serie, rápida, abundante y más barata', c: 1 }, { x: 'Centenares de obreros asalariados con tareas especializadas', c: 1 }], why: 'La Revolución Industrial pasó del trabajo manual en pequeños talleres al trabajo mecanizado en grandes fábricas con producción en serie.' },
        { t: 'match', q: 'Une cada territorio con la actividad económica en la que destacó durante la industrialización española del siglo XIX.', pairs: [['Cataluña', 'Industria textil (especialmente del algodón)'], ['País Vasco', 'Industria siderúrgica (hierro y altos hornos)'], ['Asturias', 'Minería del carbón (hulla)'], ['Aragón (Zaragoza y valle del Ebro)', 'Nudo ferroviario e industrias harinera y azucarera']], why: 'En el siglo XIX español, Cataluña lideró el textil, el País Vasco la siderurgia, Asturias el carbón y Zaragoza destacó como nudo ferroviario y centro agroindustrial.' },
        { t: 'sort', q: 'Clasifica a estos grupos dentro de las tres clases sociales propias del siglo XIX.', cats: ['Clase alta', 'Clase media', 'Clase trabajadora (baja)'], items: [{ x: 'Alta burguesía (dueños de fábricas, bancos y ferrocarriles)', c: 0 }, { x: 'Antigua nobleza propietaria de grandes tierras', c: 0 }, { x: 'Médicos, abogados, ingenieros y funcionarios', c: 1 }, { x: 'Pequeños comerciantes de las ciudades', c: 1 }, { x: 'Proletariado (obreros y obreras de las fábricas y minas)', c: 2 }, { x: 'Jornaleros y campesinos sin tierras propias', c: 2 }], why: 'En la sociedad de clases, la posición dependía de la riqueza: burguesía y nobleza arriba, clases medias profesionales en el centro y obreros y campesinos en la base.' },
        { t: 'order', q: 'Ordena la cadena que hacía funcionar la industria y el transporte en la Primera Revolución Industrial.', items: ['Extracción del carbón mineral (hulla) en las minas', 'Combustión del carbón en la caldera para transformar el agua en vapor', 'Impulso del vapor que mueve los telares de la fábrica y la locomotora', 'Transporte rápido de los productos en tren hacia otras ciudades'], why: 'El carbón alimentaba la máquina de vapor, que a su vez movía tanto las máquinas de las fábricas como las locomotoras del ferrocarril.' },
        { t: 'choice', q: '¿Qué fuente de energía fue la protagonista principal de la Primera Revolución Industrial para alimentar las máquinas de vapor?', o: ['El carbón mineral (hulla)', 'La energía nuclear de uranio', 'Los paneles solares fotovoltaicos'], a: 0, why: 'El carbón mineral fue el combustible indispensable para calentar las calderas de las máquinas de vapor en fábricas, barcos y locomotoras.' },
        { t: 'num', q: '¿En qué año se inauguró la primera línea de ferrocarril de la España peninsular, entre Barcelona y Mataró?', a: 1848, why: 'En 1848 entró en funcionamiento el tren entre Barcelona y Mataró (antes, en 1837, se había inaugurado en la Cuba española la línea La Habana-Güines).' },
        { t: 'tf', q: 'En la sociedad de clases del siglo XIX, todos los ciudadanos eran iguales ante la ley y su grupo social dependía de su riqueza económica.', a: true, why: 'A diferencia de los estamentos medievales y modernos (con privilegios de nacimiento por ley), la sociedad de clases se basaba en la igualdad jurídica y el nivel de riqueza.' },
        { t: 'tf', q: 'Al comienzo de la Revolución Industrial, los obreros trabajaban solo 6 horas al día, tenían vacaciones pagadas y el trabajo infantil estaba prohibido.', a: false, why: 'Al principio las condiciones eran durísimas: jornadas de 12 a 14 horas, salarios muy bajos, ausencia de seguros y presencia de niños trabajando en fábricas y minas.' },
        { t: 'match', q: 'Une cada concepto social y económico del siglo XIX con su definición.', pairs: [['Burguesía', 'Clase social dueña de las fábricas, bancos y grandes negocios'], ['Proletariado', 'Conjunto de obreros que trabajaban por un salario en las fábricas'], ['Sindicato', 'Asociación de trabajadores para defender sus derechos laborales'], ['Huelga', 'Interrupción colectiva del trabajo para exigir mejoras laborales']], why: 'El auge de la burguesía industrial y del proletariado dio origen al movimiento obrero, que creó sindicatos y utilizó la huelga para lograr derechos.' },
        { t: 'choice', q: '¿Qué dos factores impulsaron el crecimiento económico y urbano de Zaragoza en la segunda mitad del siglo XIX?', o: ['Su papel como gran nudo ferroviario y el auge de las industrias harinera y azucarera', 'La construcción de grandes astilleros para barcos transatlánticos', 'El descubrimiento de las mayores minas de diamantes de Europa'], a: 0, why: 'Zaragoza conectó por tren con Madrid, Barcelona, Bilbao y Francia, y desarrolló una potente industria agroalimentaria (harineras y azucareras de remolacha).' },
        { t: 'tap', q: 'Caza las dos palabras equivocadas en este texto sobre las reivindicaciones del movimiento obrero.', words: ['En', 'el', 'siglo', 'XIX', 'los', 'sindicatos', 'obreros', 'luchaban', 'por', 'jornadas', 'más', 'largas', 'y', 'salarios', 'más', 'bajos.'], wrong: [11, 15], why: 'El movimiento obrero reclamaba jornadas laborales más cortas (hasta conquistar las 8 horas), salarios más altos y dignos, y el fin del trabajo infantil.' },
        { t: 'order', q: 'Ordena cronológicamente estos cambios en los medios de transporte y la vida urbana hasta finales del siglo XIX.', items: ['Transporte lento en carros y diligencias de caballos por caminos de tierra', 'Inauguración del primer ferrocarril peninsular con locomotora de vapor (1848)', 'Conexión ferroviaria de Zaragoza con Madrid y Barcelona (década de 1860)', 'Llegada del alumbrado eléctrico y los primeros tranvías a fines del siglo XIX'], why: 'A lo largo del siglo XIX se pasó de la tracción animal al ferrocarril de vapor a mediados de siglo y, ya al final de la centuria, a la electricidad.' }
      ]
    }
  ]
});

})();
/* ---- m39.js ---- */
(function(){
Adv.register(39, {
  stations: [
    {
      title: 'Alfonso XIII y la Segunda República',
      intro: [
        { i: '👑', h: 'El reinado de Alfonso XIII (1902-1931)', p: '<b>Alfonso XIII</b> comenzó a reinar de forma efectiva en <b>1902</b>. Durante su reinado, España vivió conflictos sociales, laborales y en el norte de África. En <b>1923</b>, el general <b>Miguel Primo de Rivera</b> dio un golpe de Estado e instauró una dictadura con el visto bueno del rey que duró hasta <b>1930</b>.' },
        { i: '🗳️', h: 'La Segunda República (1931-1936)', p: 'Tras las elecciones municipales de abril de <b>1931</b>, Alfonso XIII abandonó España y el <b>14 de abril de 1931</b> se proclamó la <b>Segunda República</b>. En una república, el jefe del Estado no es un rey hereditario, sino un <b>presidente elegido</b>.' },
        { i: '📜', h: 'La Constitución de 1931 y las reformas', p: 'La <b>Constitución de 1931</b> reconoció amplias libertades y, por primera vez en la historia de España, el <b>sufragio universal femenino</b> (el derecho de las mujeres a votar), impulsado por diputadas como <b>Clara Campoamor</b>. También se emprendieron reformas educativas, laborales y agrarias.' }
      ],
      ex: [
        { t: 'choice', q: '¿Qué forma de gobierno se proclamó en España el 14 de abril de 1931?', o: ['La Segunda República', 'La Primera República', 'Una monarquía absoluta', 'El Imperio español'], a: 0, why: 'Tras las elecciones municipales de abril de 1931 y la marcha de Alfonso XIII, se proclamó la Segunda República el 14 de abril de 1931.' },
        { t: 'tf', q: 'En la Constitución de 1931 se reconoció por primera vez en España el derecho al voto de las mujeres.', a: true, why: 'La Constitución de 1931 aprobó el sufragio universal femenino, defendido en las Cortes por Clara Campoamor, y las mujeres votaron en las elecciones generales de 1933.' },
        { t: 'tf', q: 'Durante el reinado de Alfonso XIII no hubo ninguna dictadura en España.', a: false, why: 'Entre 1923 y 1930 gobernó una dictadura encabezada por el general Miguel Primo de Rivera bajo el reinado de Alfonso XIII.' },
        { t: 'num', q: '¿En qué año se proclamó la Segunda República en España?', a: 1931, why: 'La Segunda República se proclamó el 14 de abril de 1931.' },
        { t: 'choice', q: '¿Quién encabezó la dictadura establecida en España entre 1923 y 1930?', o: ['Miguel Primo de Rivera', 'Clara Campoamor', 'Fernando VII', 'Adolfo Suárez'], a: 0, why: 'El general Miguel Primo de Rivera dio un golpe de Estado en septiembre de 1923 y gobernó como dictador hasta enero de 1930.' },
        { t: 'choice', q: '¿Qué diputada destacó en 1931 por defender en las Cortes el derecho al voto de las mujeres?', o: ['Clara Campoamor', 'Agustina de Aragón', 'Isabel II', 'Mariana Pineda'], a: 0, why: 'Clara Campoamor defendió con firmeza en los debates constitucionales de 1931 que las mujeres tuvieran el mismo derecho al voto que los hombres.' },
        { t: 'match', q: 'Une cada fecha o protagonista con el hecho histórico que le corresponde.', pairs: [['1902', 'Inicio efectivo del reinado de Alfonso XIII'], ['1923', 'Golpe de Estado de Miguel Primo de Rivera'], ['14 de abril de 1931', 'Proclamación de la Segunda República'], ['Clara Campoamor', 'Defensora del sufragio femenino en 1931']], why: 'Alfonso XIII asumió el trono en 1902; Primo de Rivera gobernó desde 1923; la Segunda República nació en 1931 y aprobó el voto femenino defendido por Clara Campoamor.' },
        { t: 'order', q: 'Ordena cronológicamente estos acontecimientos del primer tercio del siglo XX en España.', items: ['Mayoría de edad y subida efectiva al trono de Alfonso XIII (1902)', 'Inicio de la dictadura de Miguel Primo de Rivera (1923)', 'Fin de la dictadura de Primo de Rivera (1930)', 'Proclamación de la Segunda República (1931)'], why: 'La secuencia histórica va de 1902 (Alfonso XIII) a 1923-1930 (dictadura de Primo de Rivera) y culmina con la Segunda República en abril de 1931.' },
        { t: 'sort', q: 'Clasifica cada característica según corresponda a una monarquía hereditaria o a una república democrática.', cats: ['Monarquía hereditaria', 'República democrática'], items: [{ x: 'La jefatura del Estado pasa de padres a hijos en una dinastía real', c: 0 }, { x: 'El jefe del Estado es un rey o una reina', c: 0 }, { x: 'El jefe del Estado es un presidente elegido temporalmente', c: 1 }, { x: 'No existe la figura del rey en la jefatura del Estado', c: 1 }], why: 'En la monarquía el jefe del Estado es el monarca por sucesión dinástica; en la república la jefatura del Estado es electiva y temporal.' },
        { t: 'choice', q: '¿Qué impulsó la Segunda República en el ámbito de la educación?', o: ['La creación de miles de escuelas públicas y las Misiones Pedagógicas para llevar cultura al medio rural', 'El cierre de todas las escuelas primarias de los pueblos', 'La prohibición de aprender a leer antes de los catorce años'], a: 0, why: 'La Segunda República dio gran importancia a la enseñanza: construyó numerosas escuelas, formó maestros y organizó las Misiones Pedagógicas para acercar libros, cine y arte a los pueblos.' },
        { t: 'tap', q: 'En esta frase sobre 1931 hay dos palabras con errores de acentuación. ¡Cázalas!', words: ['La', 'Constitucion', 'de', '1931', 'reconocio', 'el', 'voto', 'de', 'las', 'mujeres.'], wrong: [1, 4], why: '<b>Constitución</b> y <b>reconoció</b> son palabras agudas terminadas en -n y en vocal, por lo que llevan tilde.' },
        { t: 'num', q: '¿En qué año comenzó la dictadura de Miguel Primo de Rivera?', a: 1923, why: 'El golpe de Estado del general Miguel Primo de Rivera tuvo lugar en septiembre de 1923.' }
      ]
    },
    {
      title: 'La Guerra Civil y su impacto en Aragón',
      intro: [
        { i: '⚡', h: 'El estallido de la Guerra Civil (1936-1939)', p: 'En <b>julio de 1936</b>, una sublevación militar contra el Gobierno de la Segunda República triunfó en parte del país y fracasó en otra. España quedó dividida en <b>dos zonas</b> enfrentadas (la zona republicana y la zona sublevada) y comenzó la <b>Guerra Civil Española</b>, que duró hasta el <b>1 de abril de 1939</b>.' },
        { i: '🗺️', h: 'El frente de Aragón', p: 'Aragón quedó dividido de norte a sur por una larga línea de frente durante casi dos años. Las tres capitales de provincia (<b>Zaragoza, Huesca y Teruel</b>) quedaron inicialmente en la zona sublevada, mientras que la <b>mitad oriental</b> de Aragón permaneció en la zona republicana.' },
        { i: '🏛️', h: 'Batallas en Aragón y consecuencias', p: 'El territorio aragonés fue escenario de duros combates como la batalla de <b>Belchite</b> (1937), la batalla de <b>Teruel</b> (en el crudo invierno de 1937-1938) o la bolsa de <b>Bielsa</b> (1938). La guerra causó miles de víctimas, pueblos destruidos, hambre y el <b>exilio</b> de cientos de miles de personas.' }
      ],
      ex: [
        { t: 'num', q: '¿En qué año comenzó la Guerra Civil Española?', a: 1936, why: 'La Guerra Civil Española comenzó en julio de 1936 tras la sublevación militar parcial contra el Gobierno de la República.' },
        { t: 'num', q: '¿En qué año terminó la Guerra Civil Española?', a: 1939, why: 'La Guerra Civil Española finalizó el 1 de abril de 1939.' },
        { t: 'tf', q: 'Durante buena parte de la Guerra Civil, el territorio de Aragón estuvo dividido de norte a sur por una línea de frente.', a: true, why: 'El frente de Aragón atravesó las tres provincias aragonesas de norte a sur: la mitad occidental con las tres capitales quedó en zona sublevada y la mitad oriental en zona republicana.' },
        { t: 'tf', q: 'La Guerra Civil Española duró diez años, desde 1936 hasta 1946.', a: false, why: 'La Guerra Civil Española duró casi tres años: comenzó en julio de 1936 y terminó el 1 de abril de 1939.' },
        { t: 'choice', q: '¿Qué localidad zaragozana quedó destruida en 1937 y conservó las ruinas de su Pueblo Viejo junto al pueblo nuevo?', o: ['Belchite', 'Tarazona', 'Calatayud', 'Ejea de los Caballeros'], a: 0, why: 'En Belchite tuvo lugar una dura batalla en el verano de 1937; las ruinas del Pueblo Viejo de Belchite quedaron en pie junto al nuevo núcleo construido después.' },
        { t: 'choice', q: '¿Qué capital de provincia aragonesa fue escenario de una de las batallas más duras de la guerra durante el frío invierno de 1937 a 1938?', o: ['Teruel', 'Zaragoza', 'Huesca'], a: 0, why: 'La batalla de Teruel se libró entre diciembre de 1937 y febrero de 1938 con temperaturas inferiores a los -15 °C y causó una gran destrucción en la ciudad.' },
        { t: 'match', q: 'Une cada lugar de Aragón con lo ocurrido allí durante la Guerra Civil.', pairs: [['Belchite', 'Batalla de 1937 en Zaragoza que destruyó su Pueblo Viejo'], ['Teruel', 'Capital provincial disputada en una dura batalla invernal (1937-1938)'], ['Bielsa', 'Valle pirenaico oscense donde resistió una bolsa republicana en 1938'], ['Frente de Aragón', 'Línea militar que dividió la región de norte a sur entre 1936 y 1938']], why: 'Belchite (Zaragoza), Teruel y Bielsa (Huesca) fueron tres de los escenarios más señalados del frente de Aragón.' },
        { t: 'order', q: 'Ordena cronológicamente estos hechos de la Guerra Civil Española.', items: ['Sublevación militar e inicio de la Guerra Civil (julio de 1936)', 'Batalla de Belchite en la provincia de Zaragoza (verano de 1937)', 'Batalla de Teruel (invierno de 1937-1938)', 'Final de la Guerra Civil Española (1 de abril de 1939)'], why: 'La guerra empezó en julio de 1936; en 1937 fue la batalla de Belchite, en el invierno de 1937-1938 la de Teruel y el 1 de abril de 1939 concluyó el conflicto.' },
        { t: 'sort', q: 'Clasifica estos elementos según correspondan a la situación de Aragón al inicio de la guerra o a las consecuencias del conflicto.', cats: ['Situación militar en Aragón', 'Consecuencias de la guerra'], items: [{ x: 'División del territorio aragonés en dos zonas separadas por el frente', c: 0 }, { x: 'Escenario de batallas en lugares como Belchite, Teruel o el Pirineo', c: 0 }, { x: 'Pérdida de vidas humanas y destrucción de viviendas, puentes y ferrocarriles', c: 1 }, { x: 'Exilio de miles de personas hacia Francia y América', c: 1 }], why: 'Durante el conflicto Aragón estuvo partido por el frente; al terminar quedaron graves pérdidas humanas, materiales y el exilio.' },
        { t: 'choice', q: '¿Qué significa la palabra «exilio», que afectó a cientos de miles de españoles al final de la Guerra Civil?', o: ['Tener que abandonar el propio país y refugiarse en el extranjero por motivos políticos o de guerra', 'Cambiar de barrio dentro de la misma ciudad por motivos de trabajo', 'Ir de vacaciones de verano a un pueblo de la costa'], a: 0, why: 'El exilio es la salida forzada del propio país; en 1939 cientos de miles de personas cruzaron la frontera hacia Francia o partieron a países como México y Argentina.' },
        { t: 'choice', q: '¿Por qué país vecino salieron la mayoría de los refugiados aragoneses y españoles al final de la campaña en el norte y en Cataluña?', o: ['Francia, cruzando los pasos fronterizos de los Pirineos', 'Portugal, cruzando el río Miño', 'Italia, a pie por los Alpes'], a: 0, why: 'Por la cercanía geográfica, miles de familias y combatientes cruzaron los pasos pirenaicos hacia Francia en 1938 y principios de 1939.' },
        { t: 'tap', q: 'En esta frase sobre la Guerra Civil hay dos palabras a las que les falta la tilde. ¡Cázalas!', words: ['El', 'frente', 'dividio', 'la', 'region', 'de', 'norte', 'a', 'sur.'], wrong: [2, 4], why: '<b>dividió</b> y <b>región</b> son palabras agudas terminadas en vocal y en -n, por lo que llevan tilde.' }
      ]
    },
    {
      title: 'La dictadura franquista (1939-1975)',
      intro: [
        { i: '🏛️', h: 'Qué fue la dictadura franquista', p: 'Al terminar la Guerra Civil en <b>1939</b>, el general <b>Francisco Franco</b> instauró una <b>dictadura</b> que duró hasta su muerte en <b>noviembre de 1975</b>. Todos los poderes del Estado se concentraron en una sola persona, se suprimió la Constitución y se prohibieron los partidos políticos y los sindicatos libres.' },
        { i: '🍞', h: 'Años 40 y 50: posguerra y aislamiento', p: 'Durante la década de <b>1940</b>, España vivió una dura <b>posguerra</b> marcada por la escasez de alimentos y energía, las <b>cartillas de racionamiento</b>, la falta de libertades y el aislamiento internacional. En los años 50 comenzó el fin del aislamiento exterior con acuerdos con Estados Unidos y el ingreso en la <b>ONU (1955)</b>.' },
        { i: '🏭', h: 'Años 60: desarrollismo y éxodo rural', p: 'En la década de <b>1960</b> se produjo un fuerte crecimiento industrial y del turismo. Millones de personas dejaron el campo para ir a trabajar a las fábricas de las grandes ciudades (<b>éxodo rural</b>) o a países europeos. En Aragón, muchos pueblos perdieron población mientras <b>Zaragoza</b> crecía rápidamente.' }
      ],
      ex: [
        { t: 'num', q: '¿En qué año terminó la dictadura franquista con la muerte de Francisco Franco?', a: 1975, why: 'Francisco Franco murió el 20 de noviembre de 1975, lo que puso fin a la dictadura y dio paso a la Transición.' },
        { t: 'tf', q: 'Durante la dictadura franquista no existían partidos políticos legalizados ni elecciones democráticas libres.', a: true, why: 'En una dictadura se suprime el pluralismo político: los partidos y sindicatos libres estaban prohibidos y existía censura de prensa.' },
        { t: 'tf', q: 'En la década de 1940 España vivió una etapa de gran abundancia económica sin escasez de alimentos.', a: false, why: 'Los años 40 fueron la dura etapa de la posguerra y la autarquía, con grave escasez y cartillas de racionamiento para los productos básicos.' },
        { t: 'choice', q: '¿Para qué servían las cartillas de racionamiento utilizadas en España entre 1939 y 1952?', o: ['Para controlar y limitar la cantidad de alimentos y productos básicos que podía adquirir cada familia', 'Para viajar gratis en avión por toda Europa', 'Para votar en las elecciones al Parlamento cada cuatro años'], a: 0, why: 'Ante la escasez de la posguerra, el Estado racionaba productos básicos como el pan, el aceite o el azúcar mediante cupones en una cartilla.' },
        { t: 'choice', q: '¿Cómo se llama el traslado masivo de población desde los pueblos del campo hacia las ciudades industriales en los años 50 y 60?', o: ['Éxodo rural', 'Trashumancia estacional', 'Inmigración intercontinental', 'Turismo de interior'], a: 0, why: 'El éxodo rural vació muchas zonas agrarias del interior —incluidas numerosas comarcas de Aragón— y concentró la población en ciudades industriales como Zaragoza, Madrid, Barcelona o Bilbao.' },
        { t: 'choice', q: '¿Qué efecto tuvo el desarrollismo de los años 60 en la población de Aragón?', o: ['Zaragoza creció como polo industrial mientras muchas comarcas rurales sufrieron despoblación', 'Toda la población de Zaragoza se trasladó a vivir a pequeños pueblos del Pirineo', 'Aragón cerró todas sus fábricas y se dedicó únicamente a la pesca marítima'], a: 0, why: 'La designación de Zaragoza como polo de desarrollo industrial atrajo a miles de trabajadores del campo aragonés, acelerando la despoblación rural en Teruel, Huesca y la provincia zaragozana.' },
        { t: 'match', q: 'Une cada concepto de la etapa 1939-1975 con su definición correcta.', pairs: [['Dictadura', 'Sistema sin división de poderes ni elecciones libres bajo un dictador'], ['Censura', 'Control estatal sobre prensa, libros y cine para prohibir contenidos'], ['Racionamiento', 'Reparto limitado de alimentos y productos básicos en la posguerra'], ['Éxodo rural', 'Emigración masiva de habitantes del campo a las ciudades industriales']], why: 'Estos cuatro conceptos resumen la organización política de la dictadura, las penurias de los años 40 y el cambio social de los años 60.' },
        { t: 'sort', q: 'Clasifica estas características según pertenezcan a la posguerra de los años 40 o a la etapa de los años 60.', cats: ['Años 40 (posguerra)', 'Años 60 (desarrollismo)'], items: [{ x: 'Cartillas de racionamiento y grave escasez de productos básicos', c: 0 }, { x: 'Aislamiento internacional tras la Segunda Guerra Mundial', c: 0 }, { x: 'Fuerte crecimiento de la industria, del turismo y de ciudades como Zaragoza', c: 1 }, { x: 'Llegada del televisor y del automóvil utilitario a muchos hogares', c: 1 }], why: 'Los años 40 estuvieron marcados por la autarquía, el racionamiento y el aislamiento; los años 60 trajeron industrialización, turismo y consumo urbano.' },
        { t: 'order', q: 'Ordena cronológicamente estas etapas y hechos de la historia de España entre 1939 y 1975.', items: ['Final de la Guerra Civil e inicio de la posguerra (1939)', 'Ingreso de España en la Organización de las Naciones Unidas, ONU (1955)', 'Planes de desarrollo industrial y auge del éxodo rural (años 1960)', 'Fin de la dictadura tras la muerte de Francisco Franco (1975)'], why: 'La dictadura comenzó en 1939 con la posguerra, en 1955 España entró en la ONU, en los años 60 se produjo el desarrollismo y en 1975 terminó el régimen.' },
        { t: 'num', q: '¿En qué año ingresó España en la Organización de las Naciones Unidas (ONU)?', a: 1955, why: 'España fue admitida en la ONU en diciembre de 1955, durante la apertura exterior de la década de 1950.' },
        { t: 'choice', q: '¿A qué países europeos emigraron cientos de miles de trabajadores españoles en la década de 1960 en busca de empleo?', o: ['Francia, Alemania y Suiza', 'Noruega, Islandia y Finlandia', 'Grecia, Turquía y Bulgaria'], a: 0, why: 'Durante los años 60, muchos españoles emigraron a países industriales de Europa occidental como Francia, Alemania y Suiza, desde donde enviaban ahorros a sus familias.' },
        { t: 'tap', q: 'En esta frase sobre el éxodo rural hay dos palabras a las que les falta la tilde. ¡Cázalas!', words: ['En', 'la', 'decada', 'de', '1960', 'crecio', 'la', 'industria', 'en', 'Zaragoza.'], wrong: [2, 5], why: '<b>década</b> es una palabra esdrújula y <b>creció</b> es una palabra aguda terminada en vocal; ambas llevan tilde.' }
      ]
    }
  ]
});

})();
/* ---- m40.js ---- */
(function(){
Adv.register(40, {
  stations: [
    {
      title: 'La Transición y la Constitución de 1978',
      intro: [
        { i: '🕊️', h: '¿Qué fue la Transición española?', p: 'La <b>Transición</b> fue el proceso histórico pacífico mediante el cual España pasó de la dictadura franquista a una <b>democracia</b>. Comenzó en <b>noviembre de 1975</b> con la proclamación de <b>Juan Carlos I</b> como rey de España.' },
        { i: '🗳️', h: 'Las reformas hacia la democracia (1976-1977)', p: 'En <b>1976</b>, el rey nombró presidente del Gobierno a <b>Adolfo Suárez</b>, quien impulsó la reforma política: se concedió una amnistía, se legalizaron los <b>partidos políticos</b> y los sindicatos, y el <b>15 de junio de 1977</b> se celebraron las primeras elecciones democráticas desde 1936.' },
        { i: '📘', h: 'La Constitución de 1978 y las autonomías', p: 'Las Cortes elegidas redactaron una Constitución de consenso que el pueblo español aprobó en referéndum el <b>6 de diciembre de 1978</b>. Estableció una <b>monarquía parlamentaria</b>, garantizó los derechos fundamentales y organizó España en <b>comunidades autónomas</b> (Aragón aprobó su Estatuto en <b>1982</b>).' }
      ],
      ex: [
        { t: 'choice', q: '¿Cómo se llama el proceso pacífico por el que España pasó de la dictadura a la democracia a partir de 1975?', o: ['La Transición', 'La Restauración', 'La Ilustración', 'La Reconquista'], a: 0, why: 'La Transición fue la etapa en la que se desmontaron las instituciones de la dictadura y se construyó un Estado democrático basado en la Constitución de 1978.' },
        { t: 'num', q: '¿En qué año aprobaron los españoles en referéndum la actual Constitución española?', a: 1978, why: 'La Constitución española fue aprobada por la ciudadanía en referéndum el 6 de diciembre de 1978.' },
        { t: 'tf', q: 'Las elecciones generales del 15 de junio de 1977 fueron las primeras elecciones democráticas celebradas en España desde 1936.', a: true, why: 'Tras más de cuarenta años sin comicios libres, el 15 de junio de 1977 los ciudadanos volvieron a elegir democráticamente a sus representantes en las Cortes.' },
        { t: 'tf', q: 'La Constitución de 1978 fue redactada por un solo partido político sin acuerdo con los demás.', a: false, why: 'La Constitución de 1978 fue fruto del consenso y el diálogo entre representantes de las principales fuerzas políticas elegidas en 1977.' },
        { t: 'choice', q: '¿Quién fue nombrado presidente del Gobierno en 1976 y dirigió las reformas políticas que hicieron posible las elecciones democráticas de 1977?', o: ['Adolfo Suárez', 'Miguel Primo de Rivera', 'Fernando VII', 'Manuel Azaña'], a: 0, why: 'Adolfo Suárez presidió el Gobierno desde julio de 1976, impulsó la Ley para la Reforma Política, legalizó los partidos y convocó las elecciones de 1977.' },
        { t: 'choice', q: '¿Qué forma política del Estado establece para España la Constitución de 1978?', o: ['Una monarquía parlamentaria', 'Una monarquía absoluta', 'Una dictadura militar', 'Una república federal'], a: 0, why: 'Según la Constitución de 1978, España es una monarquía parlamentaria: el rey es el jefe del Estado, pero la soberanía reside en el pueblo y las Cortes ejercen el poder legislativo.' },
        { t: 'order', q: 'Ordena cronológicamente los grandes pasos de la Transición española.', items: ['Proclamación de Juan Carlos I como rey de España (noviembre de 1975)', 'Nombramiento de Adolfo Suárez como presidente del Gobierno (julio de 1976)', 'Primeras elecciones generales democráticas (15 de junio de 1977)', 'Aprobación en referéndum de la Constitución española (6 de diciembre de 1978)', 'Aprobación del primer Estatuto de Autonomía de Aragón (1982)'], why: 'La Transición avanzó paso a paso desde 1975 y 1976 hasta las elecciones de 1977, la Constitución de 1978 y el despliegue de los Estatutos de Autonomía como el de Aragón en 1982.' },
        { t: 'match', q: 'Une cada fecha clave de la Transición con lo que se conmemora o sucedió en ella.', pairs: [['Noviembre de 1975', 'Proclamación del rey Juan Carlos I tras el fin de la dictadura'], ['15 de junio de 1977', 'Primeras elecciones democráticas a las Cortes Generales'], ['6 de diciembre de 1978', 'Referéndum de aprobación de la Constitución española'], ['1982', 'Aprobación del Estatuto de Autonomía de Aragón']], why: 'Estas cuatro fechas marcan el camino desde el inicio de la Transición hasta la consolidación constitucional y autonómica.' },
        { t: 'sort', q: 'Clasifica estos rasgos según correspondan a la dictadura anterior a 1975 o a la democracia constitucional de 1978.', cats: ['Dictadura (1939-1975)', 'Democracia (Constitución de 1978)'], items: [{ x: 'Concentración de los poderes del Estado en una sola persona', c: 0 }, { x: 'Prohibición de partidos políticos y censura de prensa', c: 0 }, { x: 'División de poderes: legislativo, ejecutivo y judicial', c: 1 }, { x: 'Sufragio universal libre y organización en comunidades autónomas', c: 1 }], why: 'La Constitución de 1978 garantizó la división de poderes, los derechos fundamentales, las elecciones libres y la autonomía de las regiones y nacionalidades.' },
        { t: 'num', q: '¿Qué día de diciembre se celebra cada año en España el Día de la Constitución?', a: 6, why: 'El 6 de diciembre se conmemora el referéndum de 1978 en el que el pueblo español aprobó la Constitución.' },
        { t: 'choice', q: '¿Qué norma institucional básica, aprobada por primera vez en 1982, regula el autogobierno y las instituciones propias de Aragón (Cortes, DGA y Justicia)?', o: ['El Estatuto de Autonomía de Aragón', 'El Tratado de Maastricht', 'La Constitución de Cádiz de 1812'], a: 0, why: 'Dentro del marco de la Constitución de 1978, el Estatuto de Autonomía de Aragón es la norma institucional básica de nuestra comunidad autónoma.' },
        { t: 'tap', q: 'En esta frase sobre la Transición hay dos palabras a las que les falta la tilde. ¡Cázalas!', words: ['La', 'Transicion', 'permitio', 'recuperar', 'las', 'libertades', 'en', 'España.'], wrong: [1, 2], why: '<b>Transición</b> y <b>permitió</b> son palabras agudas acabadas en -n y en vocal, por lo que llevan tilde.' }
      ]
    },
    {
      title: 'España en la Unión Europea y la etapa democrática',
      intro: [
        { i: '🇪🇺', h: 'La entrada en Europa (1986)', p: 'Consolidada la democracia, España solicitó integrarse en el proyecto europeo. El <b>1 de enero de 1986</b>, España ingresó oficialmente en la <b>Comunidad Económica Europea (CEE)</b>, actual <b>Unión Europea (UE)</b>, al mismo tiempo que Portugal.' },
        { i: '💶', h: 'De los grandes eventos de 1992 al euro (2002)', p: 'En <b>1992</b> España mostró su modernización al mundo con los <b>Juegos Olímpicos de Barcelona</b> y la <b>Exposición Universal de Sevilla</b>. Diez años después, el <b>1 de enero de 2002</b>, empezó a circular en efectivo el <b>euro (€)</b>, que sustituyó a la <b>peseta</b>.' },
        { i: '💧', h: 'Hitos recientes en Aragón y en España', p: 'En <b>2008</b>, <b>Zaragoza</b> acogió la <b>Exposición Internacional</b> bajo el lema <i>Agua y desarrollo sostenible</i>, que transformó las riberas del Ebro. En <b>2014</b>, tras la abdicación de Juan Carlos I, fue proclamado rey <b>Felipe VI</b>.' }
      ],
      ex: [
        { t: 'num', q: '¿En qué año ingresó España en la Comunidad Económica Europea (actual Unión Europea)?', a: 1986, why: 'España se convirtió en Estado miembro de pleno derecho el 1 de enero de 1986, tras firmar el Tratado de Adhesión en junio de 1985.' },
        { t: 'choice', q: '¿Qué otro país de la península ibérica ingresó en la Comunidad Económica Europea el mismo día que España (1 de enero de 1986)?', o: ['Portugal', 'Francia', 'Italia', 'Suiza'], a: 0, why: 'España y Portugal entraron juntos el 1 de enero de 1986, pasando la comunidad de diez a doce Estados miembros.' },
        { t: 'tf', q: 'Los fondos europeos recibidos tras la entrada en la Unión Europea ayudaron a modernizar autovías, ferrocarriles y regadíos en España y Aragón.', a: true, why: 'La integración en la UE supuso el acceso al mercado único europeo y a fondos de cohesión y desarrollo regional que impulsaron infraestructuras clave como el AVE o la red de autovías.' },
        { t: 'tf', q: 'La moneda oficial de España antes de la llegada del euro se llamaba franco español.', a: false, why: 'Antes del euro, la moneda oficial de España desde 1868 era la peseta.' },
        { t: 'num', q: '¿En qué año empezaron a circular en España los billetes y monedas de euro sustituyendo a la peseta?', a: 2002, why: 'Aunque el euro existía como moneda contable desde 1999, los billetes y monedas físicos entraron en circulación el 1 de enero de 2002.' },
        { t: 'choice', q: '¿Cuál fue el tema central de la Exposición Internacional celebrada en Zaragoza en el año 2008?', o: ['Agua y desarrollo sostenible', 'La conquista del espacio exterior', 'El ferrocarril de vapor del siglo XIX'], a: 0, why: 'La Expo Zaragoza 2008 tuvo como eje «Agua y desarrollo sostenible», dejó emblemas como la Torre del Agua o el Pabellón Puente y recuperó las riberas del Ebro.' },
        { t: 'order', q: 'Ordena cronológicamente estos acontecimientos de la España democrática.', items: ['Ingreso de España en la Comunidad Económica Europea, hoy UE (1986)', 'Juegos Olímpicos de Barcelona y Exposición Universal de Sevilla (1992)', 'Puesta en circulación de los billetes y monedas de euro (2002)', 'Exposición Internacional de Zaragoza sobre el agua (2008)', 'Proclamación de Felipe VI como rey de España (2014)'], why: 'La secuencia histórica va de 1986 (entrada en la CEE/UE) a 1992 (Barcelona y Sevilla), 2002 (euro), 2008 (Expo de Zaragoza) y 2014 (proclamación de Felipe VI).' },
        { t: 'match', q: 'Une cada año con el acontecimiento histórico ocurrido en España.', pairs: [['1986', 'Entrada de España en la Comunidad Económica Europea (UE)'], ['1992', 'Juegos Olímpicos de Barcelona y Expo Universal de Sevilla'], ['2002', 'Adopción de los billetes y monedas de euro en lugar de la peseta'], ['2008', 'Exposición Internacional de Zaragoza en el meandro de Ranillas']], why: 'Cada fecha representa un hito de la integración europea y de la proyección internacional de España y Aragón.' },
        { t: 'sort', q: 'Clasifica cada elemento según sea un beneficio directo de pertenecer a la Unión Europea o un evento internacional celebrado en España.', cats: ['Pertenencia a la Unión Europea', 'Eventos celebrados en España'], items: [{ x: 'Uso del euro como moneda común con otros países europeos', c: 0 }, { x: 'Libre circulación de ciudadanos y mercancías por los Estados miembros', c: 0 }, { x: 'Participación en programas educativos europeos como Erasmus', c: 0 }, { x: 'Juegos Olímpicos de Barcelona (1992)', c: 1 }, { x: 'Exposición Internacional de Zaragoza (2008)', c: 1 }], why: 'El euro, la libre circulación y el programa Erasmus derivan de la integración en la UE; Barcelona 92 y la Expo Zaragoza 2008 fueron grandes citas internacionales organizadas en España.' },
        { t: 'choice', q: '¿Quién es el jefe del Estado en España desde junio de 2014 tras la abdicación del rey Juan Carlos I?', o: ['El rey Felipe VI', 'El rey Alfonso XIII', 'El rey Carlos III', 'El rey Fernando VII'], a: 0, why: 'En junio de 2014 Juan Carlos I abdicó y las Cortes Generales proclamaron rey de España a su hijo Felipe VI.' },
        { t: 'choice', q: '¿Qué nuevo medio de transporte ferroviario de alta velocidad se inauguró en España en 1992 y conectó más tarde Zaragoza con Madrid y Barcelona?', o: ['El AVE (Alta Velocidad Española)', 'El tranvía tirado por caballos', 'El barco de vapor por el canal Imperial'], a: 0, why: 'El primer tren AVE se estrenó en 1992 entre Madrid y Sevilla, y en 2003 llegó a Zaragoza y Lleida dentro de la línea Madrid-Zaragoza-Barcelona.' },
        { t: 'tap', q: 'En esta frase sobre Europa hay dos palabras a las que les falta la tilde. ¡Cázalas!', words: ['España', 'entro', 'en', 'la', 'Union', 'Europea', 'en', '1986.'], wrong: [1, 4], why: '<b>entró</b> y <b>Unión</b> son palabras agudas terminadas en vocal y en -n, por lo que llevan tilde.' }
      ]
    },
    {
      title: 'Retos sociales, culturales y tecnológicos del siglo XXI',
      intro: [
        { i: '🤝', h: 'Cambios sociales y demográficos', p: 'En el siglo XXI, la sociedad española ha avanzado en la <b>igualdad entre mujeres y hombres</b>, la diversidad cultural y el estado del bienestar (sanidad, educación y pensiones públicas). Al mismo tiempo, afronta el <b>envejecimiento de la población</b> y la <b>despoblación rural</b> en territorios del interior como gran parte de Aragón.' },
        { i: '💻', h: 'La revolución tecnológica y digital', p: 'La expansión de <b>internet</b>, los dispositivos móviles y la <b>inteligencia artificial</b> ha transformado el trabajo, la cultura y la comunicación. Sus retos principales son reducir la <b>brecha digital</b> (llevando fibra óptica a todos los pueblos), proteger la privacidad y usar la red de forma segura y crítica.' },
        { i: '🌱', h: 'Sostenibilidad y Agenda 2030', p: 'Frente al <b>cambio climático</b>, España y Aragón impulsan la transición hacia las <b>energías renovables</b> (como la eólica y la solar), el ahorro de agua, la economía circular y los <b>17 Objetivos de Desarrollo Sostenible (ODS)</b> aprobados por la ONU en <b>2015</b>.' }
      ],
      ex: [
        { t: 'choice', q: '¿Cuál es uno de los principales retos demográficos que afronta Aragón y el interior de España en el siglo XXI?', o: ['La despoblación de muchos municipios rurales y el envejecimiento de sus habitantes', 'La falta de espacio porque todos los pueblos del Pirineo tienen millones de habitantes', 'Una natalidad tan alta que duplica la población cada dos años'], a: 0, why: 'Muchas comarcas rurales de Teruel, Huesca y Zaragoza tienen muy baja densidad de población y una media de edad elevada, por lo que requieren servicios e infraestructuras para fijar población.' },
        { t: 'tf', q: 'En las últimas décadas España pasó de ser un país principalmente de emigrantes a recibir inmigrantes de Europa, América Latina y África.', a: true, why: 'Desde finales del siglo XX y en el siglo XXI, millones de personas de otros países han llegado a España para trabajar y vivir, enriqueciendo la diversidad cultural y rejuveneciendo la población.' },
        { t: 'tf', q: 'La brecha digital consiste en que todas las personas y todos los pueblos tienen exactamente el mismo acceso y manejo de la tecnología.', a: false, why: 'Al contrario: la brecha digital es la desigualdad entre quienes tienen acceso a internet de calidad y competencias digitales y quienes carecen de ellos.' },
        { t: 'choice', q: '¿Qué son los ODS promovidos por la Organización de las Naciones Unidas (ONU) desde 2015?', o: ['Los 17 Objetivos de Desarrollo Sostenible para erradicar la pobreza y cuidar el planeta', 'Unas olimpiadas deportivas que se celebran solo en invierno', 'Los impuestos municipales que se pagan por aparcar el coche'], a: 0, why: 'Los 17 Objetivos de Desarrollo Sostenible (ODS) de la Agenda 2030 de la ONU buscan un desarrollo que cuide a las personas y al medioambiente.' },
        { t: 'num', q: '¿Cuántos son los Objetivos de Desarrollo Sostenible (ODS) establecidos por la ONU en la Agenda 2030?', a: 17, why: 'La Agenda 2030 de las Naciones Unidas está formada por 17 Objetivos de Desarrollo Sostenible.' },
        { t: 'sort', q: 'Clasifica cada desafío del siglo XXI según sea un reto social y demográfico, un reto tecnológico o un reto medioambiental.', cats: ['Social y demográfico', 'Tecnológico y digital', 'Medioambiental'], items: [{ x: 'Frenar la despoblación rural y atender el envejecimiento de la población', c: 0 }, { x: 'Lograr la igualdad real de oportunidades entre mujeres y hombres', c: 0 }, { x: 'Proteger la ciberseguridad y llevar internet de alta velocidad a todos los pueblos', c: 1 }, { x: 'Usar la inteligencia artificial de forma ética y contrastar los bulos en la red', c: 1 }, { x: 'Reducir las emisiones contaminantes mediante energías renovables como la eólica y la solar', c: 2 }, { x: 'Ahorrar agua y adaptar la agricultura y los bosques frente al cambio climático', c: 2 }], why: 'La sociedad del siglo XXI combina retos de cohesión social y demografía, retos de digitalización responsable y retos ecológicos de sostenibilidad.' },
        { t: 'match', q: 'Une cada concepto actual con su significado correcto.', pairs: [['Estado del bienestar', 'Servicios públicos (sanidad, educación, pensiones) para una vida digna'], ['Brecha digital', 'Desigualdad en el acceso a internet y a las nuevas tecnologías'], ['Transición energética', 'Paso de los combustibles fósiles a las energías renovables'], ['Economía circular', 'Modelo basado en reducir residuos, reutilizar y reciclar materiales']], why: 'Estos cuatro conceptos son fundamentales para comprender los desafíos sociales, tecnológicos y ecológicos de la actualidad.' },
        { t: 'order', q: 'Ordena cronológicamente la aparición e implantación generalizada de estas tecnologías de la información y la comunicación en los hogares.', items: ['Prensa escrita en papel y telégrafo (siglo XIX)', 'Radio y televisión tradicional en blanco y negro (mediados del siglo XX)', 'Ordenadores personales y conexión a la World Wide Web de internet (años 1990)', 'Teléfonos inteligentes, fibra óptica e inteligencia artificial (siglo XXI)'], why: 'La evolución tecnológica pasó de la prensa y el telégrafo a la radio y televisión en el siglo XX, internet en los años 90 y los smartphones y la IA en el siglo XXI.' },
        { t: 'choice', q: '¿En qué dos fuentes de energía limpia y renovable destaca especialmente Aragón dentro de España en el siglo XXI?', o: ['La energía eólica (del viento) y la energía solar fotovoltaica', 'La energía mareomotriz de los océanos y el carbón mineral', 'El petróleo y el gas natural extraídos del mar'], a: 0, why: 'Gracias al viento del valle del Ebro y del Sistema Ibérico y a las muchas horas de sol, Aragón es una de las comunidades líderes en producción de energía eólica y solar.' },
        { t: 'choice', q: '¿Cómo ayuda la llegada de internet de banda ancha y el teletrabajo a los pequeños municipios de Aragón?', o: ['Permite que profesionales y empresas trabajen desde los pueblos, ayudando a combatir la despoblación', 'Obliga a cerrar las escuelas y los centros de salud rurales', 'Impide que los agricultores vendan sus productos fuera de su comarca'], a: 0, why: 'La conectividad digital en el medio rural permite trabajar a distancia, emprender negocios en línea y acceder a servicios digitales sin abandonar los pueblos.' },
        { t: 'tf', q: 'Uno de los grandes avances sociales de la España democrática ha sido la plena igualdad legal entre mujeres y hombres y su incorporación a todos los ámbitos laborales y políticos.', a: true, why: 'La Constitución de 1978 y las leyes de igualdad reconocieron la plena igualdad jurídica, superando las limitaciones que tenían las mujeres durante la dictadura.' },
        { t: 'tap', q: 'En esta frase sobre los retos del siglo XXI hay dos palabras a las que les falta la tilde. ¡Cázalas!', words: ['La', 'tecnologia', 'y', 'la', 'educacion', 'ayudan', 'al', 'progreso', 'social.'], wrong: [1, 4], why: '<b>tecnología</b> lleva tilde por tener un hiato de vocal cerrada tónica (í-a) y <b>educación</b> por ser aguda terminada en -n.' }
      ]
    }
  ]
});

})();

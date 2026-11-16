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

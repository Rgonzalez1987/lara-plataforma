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

const PROBLEMAS_DB = [
    {
        "id": "p_1",
        "level": 1,
        "text": "En su misión a Marte, la comandante Elena recolectó 16 muestras de roca ígnea. Al día siguiente, el robot explorador trajo 9 muestras adicionales. ¿Cuántas muestras de roca tienen en total para analizar en el laboratorio?",
        "tokens": [
            9,
            16
        ],
        "answer": 25,
        "hint": "Suma ambas cantidades para obtener el total."
    },
    {
        "id": "p_2",
        "level": 1,
        "text": "El museo de egiptología albergaba 62 papiros antiguos en su bóveda principal. Tras una exitosa expedición en el Valle de los Reyes, los arqueólogos donaron 22 papiros más. ¿Cuál es el nuevo total de la colección?",
        "tokens": [
            22,
            62
        ],
        "answer": 84,
        "hint": "Suma ambas cantidades para obtener el total."
    },
    {
        "id": "p_3",
        "level": 1,
        "text": "El equipo de desarrollo de un videojuego había programado 14 misiones secundarias. En la última reunión decidieron añadir 11 misiones extra para el DLC. ¿Cuántas misiones secundarias tendrá el juego completo?",
        "tokens": [
            14,
            11
        ],
        "answer": 25,
        "hint": "Suma ambas cantidades para obtener el total."
    },
    {
        "id": "p_4",
        "level": 1,
        "text": "La central hidroeléctrica estaba produciendo 53 megavatios de energía. Al encender la turbina auxiliar, la producción aumentó en 8 megavatios. ¿Cuánta energía se está generando ahora?",
        "tokens": [
            8,
            53
        ],
        "answer": 61,
        "hint": "Suma ambas cantidades para obtener el total."
    },
    {
        "id": "p_5",
        "level": 1,
        "text": "Durante el recuento anual del jardín botánico, se catalogaron 27 especies de orquídeas raras. Un coleccionista privado donó su invernadero con 15 especies diferentes. ¿Cuántas orquídeas tienen ahora?",
        "tokens": [
            27,
            15
        ],
        "answer": 42,
        "hint": "Suma ambas cantidades para obtener el total."
    },
    {
        "id": "p_6",
        "level": 1,
        "text": "El chef italiano preparó 99 raviolis artesanales para el gran banquete. Sin embargo, en el último momento decidió hacer 36 más por si los invitados repetían. ¿Cuántos raviolis hay listos para hervir?",
        "tokens": [
            36,
            99
        ],
        "answer": 135,
        "hint": "Suma ambas cantidades para obtener el total."
    },
    {
        "id": "p_7",
        "level": 1,
        "text": "En el campeonato mundial de ajedrez, el gran maestro ha jugado 10 partidas oficiales a lo largo del año. Si en este torneo juega 8 partidas más, ¿cuál será su total anual?",
        "tokens": [
            8,
            10
        ],
        "answer": 18,
        "hint": "Suma ambas cantidades para obtener el total."
    },
    {
        "id": "p_8",
        "level": 1,
        "text": "Una reserva marina protegía a 86 tortugas boba. Tras el éxito del programa de incubación, nacieron y fueron liberadas 53 crías más. ¿Cuántas tortugas habitan ahora en la reserva?",
        "tokens": [
            53,
            86
        ],
        "answer": 139,
        "hint": "Suma ambas cantidades para obtener el total."
    },
    {
        "id": "p_9",
        "level": 1,
        "text": "Un satélite de comunicaciones transmitió 10 terabytes de datos en la primera semana de órbita, y 7 terabytes en la segunda semana. ¿Cuál es el volumen total de datos enviados?",
        "tokens": [
            10,
            7
        ],
        "answer": 17,
        "hint": "Suma ambas cantidades para obtener el total."
    },
    {
        "id": "p_10",
        "level": 1,
        "text": "La biblioteca del monasterio custodia 23 manuscritos medievales. Recientemente, un historiador encontró 6 textos perdidos en una abadía lejana y los trajo. ¿A cuánto asciende el archivo ahora?",
        "tokens": [
            6,
            23
        ],
        "answer": 29,
        "hint": "Suma ambas cantidades para obtener el total."
    },
    {
        "id": "p_11",
        "level": 1,
        "text": "El galeón pirata Barba Roja contaba con 95 cañones de asalto en cubierta. Tras saquear una fortaleza naval, incorporaron 23 cañones nuevos al barco. ¿Cuál es su poder de fuego total?",
        "tokens": [
            23,
            95
        ],
        "answer": 118,
        "hint": "Suma ambas cantidades para obtener el total."
    },
    {
        "id": "p_12",
        "level": 1,
        "text": "Una fábrica de drones ensambla piezas todo el día. Tenían 12 baterías en stock y acaban de recibir un cargamento de emergencia con 7 más. ¿Cuántas baterías tienen listas para usar?",
        "tokens": [
            12,
            7
        ],
        "answer": 19,
        "hint": "Suma ambas cantidades para obtener el total."
    },
    {
        "id": "p_13",
        "level": 1,
        "text": "El tanque principal del acuario contenía 83 medusas bioluminiscentes. Para una exhibición especial en otra ciudad, trasladaron 66 medusas con sumo cuidado. ¿Cuántas quedaron en el acuario original?",
        "tokens": [
            83,
            66
        ],
        "answer": 17,
        "hint": "Suma ambas cantidades para obtener el total."
    },
    {
        "id": "p_14",
        "level": 1,
        "text": "Una flota comercial de 70 naves de carga viajaba hacia Alfa Centauri. Durante una tormenta de asteroides, 9 naves sufrieron daños y tuvieron que regresar a la base. ¿Cuántas naves continuaron el viaje?",
        "tokens": [
            70,
            9
        ],
        "answer": 61,
        "hint": "Identifica el número mayor y réstale el menor para saber lo que queda."
    },
    {
        "id": "p_15",
        "level": 1,
        "text": "El teatro de la ópera tenía 53 butacas disponibles para el estreno mundial. Se han vendido ya 38 entradas anticipadas por internet. ¿Cuántos asientos quedan libres para comprar en taquilla?",
        "tokens": [
            53,
            38
        ],
        "answer": 15,
        "hint": "Identifica el número mayor y réstale el menor para saber lo que queda."
    },
    {
        "id": "p_16",
        "level": 1,
        "text": "En el almacén de suministros médicos del hospital central había 36 cajas de mascarillas de alta filtración. Tras abastecer las urgencias, retiraron 31 cajas. ¿Cuántas quedan en reserva?",
        "tokens": [
            36,
            31
        ],
        "answer": 5,
        "hint": "Identifica el número mayor y réstale el menor para saber lo que queda."
    },
    {
        "id": "p_17",
        "level": 1,
        "text": "La red de metro de la ciudad moviliza a miles de personas. En un tren iban 11 pasajeros, pero al llegar a la estación central, se bajaron 8 personas. ¿Cuántos pasajeros siguen en los vagones?",
        "tokens": [
            11,
            8
        ],
        "answer": 3,
        "hint": "Identifica el número mayor y réstale el menor para saber lo que queda."
    },
    {
        "id": "p_18",
        "level": 1,
        "text": "Un granjero tenía un rebaño de 97 ovejas merinas. Para mejorar los pastos, decidió vender 73 ovejas a una granja vecina. ¿De cuántas ovejas se compone ahora su rebaño?",
        "tokens": [
            97,
            73
        ],
        "answer": 24,
        "hint": "Identifica el número mayor y réstale el menor para saber lo que queda."
    },
    {
        "id": "p_19",
        "level": 1,
        "text": "El presupuesto del departamento de robótica era de 76 mil euros. Acaban de comprar un nuevo brazo mecánico que costó 58 mil euros. ¿Cuánto dinero les queda para el resto del año?",
        "tokens": [
            76,
            58
        ],
        "answer": 18,
        "hint": "Suma ambas cantidades para obtener el total."
    },
    {
        "id": "p_20",
        "level": 1,
        "text": "En la expedición al Everest, el equipo base tenía 75 botellas de oxígeno. Los alpinistas de vanguardia se llevaron 9 botellas para el asalto a la cumbre. ¿Cuántas botellas permanecen en el campamento base?",
        "tokens": [
            9,
            75
        ],
        "answer": 66,
        "hint": "Suma ambas cantidades para obtener el total."
    },
    {
        "id": "p_21",
        "level": 1,
        "text": "Una empresa de ciberseguridad detectó 20 intentos de intrusión en su servidor. Gracias a los nuevos filtros de firewall, lograron bloquear automáticamente 19 de esos intentos. ¿Cuántos tuvieron que ser revisados manualmente?",
        "tokens": [
            20,
            19
        ],
        "answer": 1,
        "hint": "Identifica el número mayor y réstale el menor para saber lo que queda."
    },
    {
        "id": "p_22",
        "level": 1,
        "text": "El novelista de fantasía épica escribió un primer borrador con 94 páginas. Su editor le aconsejó recortar la historia, así que eliminó 38 páginas de relleno. ¿Cuál es la extensión final del libro?",
        "tokens": [
            38,
            94
        ],
        "answer": 56,
        "hint": "Identifica el número mayor y réstale el menor para saber lo que queda."
    },
    {
        "id": "p_23",
        "level": 1,
        "text": "En el servidor del famoso juego online estaban conectados 52 jugadores simultáneos. Debido a un error de conexión en Europa, 26 jugadores fueron desconectados de golpe. ¿Cuántos lograron mantenerse en línea?",
        "tokens": [
            52,
            26
        ],
        "answer": 26,
        "hint": "Identifica el número mayor y réstale el menor para saber lo que queda."
    },
    {
        "id": "p_24",
        "level": 1,
        "text": "Un banco de semillas global almacenaba 19 variedades de trigo antiguo. Por desgracia, un fallo en el sistema de refrigeración echó a perder 16 muestras. ¿Cuántas variedades siguen intactas?",
        "tokens": [
            19,
            16
        ],
        "answer": 3,
        "hint": "Identifica el número mayor y réstale el menor para saber lo que queda."
    },
    {
        "id": "p_25",
        "level": 2,
        "text": "Un escuadrón aéreo contaba con 29 cazas de combate. Recibieron 13 nuevos aviones de última generación, pero en unas maniobras, 2 cazas antiguos fueron dados de baja por mantenimiento. ¿Cuántos aviones están operativos?",
        "tokens": [
            13,
            2,
            29
        ],
        "answer": 40,
        "hint": "Suma los cazas nuevos a los que ya había, y luego resta los que se dieron de baja."
    },
    {
        "id": "p_26",
        "level": 2,
        "text": "La pizzería artesanal tenía en su almacén 45 kilos de harina. El proveedor les entregó un saco de 14 kilos, y durante el fin de semana usaron 2 kilos amasando. ¿Cuánta harina queda para la próxima semana?",
        "tokens": [
            2,
            45,
            14
        ],
        "answer": 57,
        "hint": "Suma el pedido a tu inventario inicial, y resta lo que gastaste en cocinar."
    },
    {
        "id": "p_27",
        "level": 2,
        "text": "En un rally por el desierto, el equipo inició con 30 litros de combustible. Repostaron 20 litros en el primer punto de control, pero quemaron 18 litros atravesando las dunas de arena. ¿Con cuánto combustible llegan al campamento?",
        "tokens": [
            20,
            30,
            18
        ],
        "answer": 32,
        "hint": "Al combustible inicial súmale lo repostado, y réstale lo que quemó el motor."
    },
    {
        "id": "p_28",
        "level": 2,
        "text": "El arquitecto diseñó un rascacielos. La empresa constructora trajo 45 vigas de acero, y luego un camión trajo 12 más. Sin embargo, 17 vigas estaban defectuosas y se devolvieron. ¿Cuántas vigas útiles tienen?",
        "tokens": [
            12,
            45,
            17
        ],
        "answer": 40,
        "hint": "Suma todas las vigas que llegaron a la obra y resta las defectuosas."
    },
    {
        "id": "p_29",
        "level": 2,
        "text": "Una influencer tenía 39 seguidores en su red social. Tras un video viral ganó 18 seguidores nuevos, pero una semana después 7 personas cerraron sus cuentas. ¿Cuál es su número actual de seguidores?",
        "tokens": [
            7,
            18,
            39
        ],
        "answer": 50,
        "hint": "Suma los nuevos seguidores y resta los que se dieron de baja."
    },
    {
        "id": "p_30",
        "level": 2,
        "text": "El refugio de animales cuidaba a 29 perritos. Rescataron a 17 cachorros de una camada abandonada, y este fin de semana 3 familias adoptaron a un perrito cada una. ¿Cuántos perros quedan en el refugio?",
        "tokens": [
            17,
            3,
            29
        ],
        "answer": 43,
        "hint": "Suma los perros rescatados al total, y resta los que fueron adoptados."
    },
    {
        "id": "p_31",
        "level": 2,
        "text": "Un equipo de espeleólogos compró 34 estuches de baterías de linterna. Cada estuche trae 9 baterías de larga duración. Además, encontraron 2 baterías sueltas en la mochila del guía. ¿De cuántas baterías disponen en total?",
        "tokens": [
            34,
            2,
            9
        ],
        "answer": 308,
        "hint": "Multiplica los estuches por las baterías que trae cada uno, y suma las sueltas."
    },
    {
        "id": "p_32",
        "level": 2,
        "text": "Para el concierto de rock, los organizadores montaron 48 torres de luces, cada una con 11 focos LED de alta potencia. Al final añadieron 15 focos gigantes a ras de suelo para el vocalista. ¿Cuántos focos hay en el escenario?",
        "tokens": [
            48,
            11,
            15
        ],
        "answer": 543,
        "hint": "Multiplica las torres por los focos de cada una, y suma los focos del suelo."
    },
    {
        "id": "p_33",
        "level": 2,
        "text": "Un botánico planta semillas de girasol en un huerto. Ha preparado 5 hileras, y en cada hilera planta 6 semillas con precisión. Luego le sobran 21 semillas que planta en una maceta aparte. ¿Cuántas semillas ha plantado en total?",
        "tokens": [
            21,
            6,
            5
        ],
        "answer": 51,
        "hint": "Multiplica las hileras por las semillas por hilera, y súmale las de la maceta."
    },
    {
        "id": "p_34",
        "level": 2,
        "text": "En el campeonato de robótica escolar, hay 50 equipos participantes. Cada equipo está formado por 5 jóvenes ingenieros. Además, hay 4 profesores que actúan como jueces. ¿Cuántas personas forman parte de la competición directamente?",
        "tokens": [
            4,
            50,
            5
        ],
        "answer": 254,
        "hint": "Multiplica los equipos por sus miembros, y suma a los profesores."
    },
    {
        "id": "p_35",
        "level": 2,
        "text": "La flota de taxis de la ciudad ha renovado 39 modelos de coche. Por cada modelo nuevo compraron 15 unidades eléctricas idénticas. Además, el alcalde donó 4 taxis de hidrógeno especiales. ¿Cuántos taxis nuevos circularán?",
        "tokens": [
            39,
            15,
            4
        ],
        "answer": 589,
        "hint": "Multiplica los modelos por las unidades compradas, y suma los vehículos donados."
    },
    {
        "id": "p_36",
        "level": 2,
        "text": "Para la cena de gala, el hotel dispuso 6 mesas circulares, colocando 13 sillas elegantes en cada una. Para el personal de seguridad, pusieron 10 sillas plegables en la entrada. ¿Cuántas sillas hay en el salón?",
        "tokens": [
            10,
            6,
            13
        ],
        "answer": 88,
        "hint": "Multiplica las mesas por las sillas de cada una, y añade las sillas de la entrada."
    },
    {
        "id": "p_37",
        "level": 2,
        "text": "Un productor musical tiene un presupuesto de 30 mil dólares. Decide financiar 5 videoclips para sus artistas, y cada videoclip cuesta 3 mil dólares en producción. ¿Cuánto dinero de su presupuesto quedará sin gastar?",
        "tokens": [
            3,
            5,
            30
        ],
        "answer": 15,
        "hint": "Primero multiplica para saber el costo total de los videoclips, y réstalo a tu presupuesto."
    },
    {
        "id": "p_38",
        "level": 2,
        "text": "El capitán del submarino contabiliza los suministros. Tienen 27 raciones de emergencia en la despensa. La tripulación de 6 marineros consume 3 raciones cada uno durante una semana bajo el hielo. ¿Cuántas raciones quedan tras esa semana?",
        "tokens": [
            3,
            6,
            27
        ],
        "answer": 9,
        "hint": "Multiplica los marineros por su consumo para ver el gasto, y réstalo a las raciones iniciales."
    },
    {
        "id": "p_39",
        "level": 2,
        "text": "En una mina de cristales preciosos había 30 geodas sin abrir. Un equipo de 7 mineros bajó a la cueva y cada uno extrajo 4 geodas para llevárselas a analizar al laboratorio. ¿Cuántas geodas permanecen en la cueva?",
        "tokens": [
            30,
            4,
            7
        ],
        "answer": 2,
        "hint": "Calcula cuántas geodas extrajeron multiplicando a los mineros, y réstalo del total de la cueva."
    },
    {
        "id": "p_40",
        "level": 2,
        "text": "La estación espacial almacena 27 paneles solares de repuesto. Sufren una tormenta de meteoritos que daña varios sectores. Deciden enviar a 5 astronautas, y cada uno instala 3 paneles nuevos. ¿Cuántos repuestos quedan en el almacén?",
        "tokens": [
            27,
            5,
            3
        ],
        "answer": 12,
        "hint": "Multiplica los astronautas por los paneles que instalan, y resta ese uso al stock."
    },
    {
        "id": "p_41",
        "level": 2,
        "text": "Un camión frigorífico transporta 21 vacunas contra una enfermedad tropical. Se detiene en 5 clínicas rurales, y en cada clínica deja una caja con 3 vacunas exactas. ¿Cuántas vacunas continúan en el camión?",
        "tokens": [
            21,
            5,
            3
        ],
        "answer": 6,
        "hint": "Multiplica las clínicas por las vacunas entregadas a cada una, y réstalo al cargamento inicial."
    },
    {
        "id": "p_42",
        "level": 2,
        "text": "El herrero de la aldea tiene 30 lingotes de hierro fundido. Recibe el encargo de fabricar 7 armaduras para los guardias, y cada armadura requiere fundir 4 lingotes. ¿Cuántos lingotes le sobrarán en su taller?",
        "tokens": [
            7,
            4,
            30
        ],
        "answer": 2,
        "hint": "Multiplica las armaduras por los lingotes que necesita cada una, y resta eso de lo que tenías."
    },
    {
        "id": "p_43",
        "level": 2,
        "text": "Una fábrica de chocolates produjo 33 bombones por la mañana y 6 por la tarde. El gerente decide empaquetar toda la producción del día en cajas elegantes que contienen 13 bombones cada una. ¿Cuántas cajas lograrán llenar?",
        "tokens": [
            13,
            6,
            33
        ],
        "answer": 3.0,
        "hint": "Suma los bombones de todo el día, y luego divídelos entre la capacidad de cada caja."
    },
    {
        "id": "p_44",
        "level": 2,
        "text": "En el festival de cine independiente, se proyectaron 45 cortometrajes el sábado y 20 el domingo. Todos los cortos se dividieron en 5 bloques de proyección con la misma cantidad de obras. ¿Cuántos cortometrajes hubo en cada bloque?",
        "tokens": [
            20,
            45,
            5
        ],
        "answer": 13.0,
        "hint": "Suma los cortos de ambos días para el total, y divídelo entre el número de bloques."
    },
    {
        "id": "p_45",
        "level": 2,
        "text": "Un pirata informático ético encontró 6 vulnerabilidades en el servidor de correo y 20 en el de bases de datos. Su equipo de 13 programadores se repartió el trabajo a partes iguales para parchearlas. ¿Cuántas vulnerabilidades arregló cada uno?",
        "tokens": [
            6,
            13,
            20
        ],
        "answer": 2.0,
        "hint": "Suma las vulnerabilidades encontradas y divídelas equitativamente entre los programadores."
    },
    {
        "id": "p_46",
        "level": 2,
        "text": "Durante la vendimia, los recolectores juntaron 17 cestas de uva blanca y 16 de uva tinta. Juntaron todas las cestas en la bodega y las prensaron en 3 cubas enormes de igual tamaño. ¿Cuántas cestas entraron en cada cuba?",
        "tokens": [
            17,
            16,
            3
        ],
        "answer": 11.0,
        "hint": "Suma todas las cestas de uva y divide el resultado entre el número de cubas."
    },
    {
        "id": "p_47",
        "level": 2,
        "text": "El club de astronomía cuenta con 48 miembros veteranos y 12 novatos. Para observar la lluvia de estrellas, alquilan 2 telescopios de alta potencia y se dividen en grupos iguales por telescopio. ¿Cuántas personas hay en cada grupo?",
        "tokens": [
            2,
            48,
            12
        ],
        "answer": 30.0,
        "hint": "Suma los miembros totales del club, y divídelos entre el número de telescopios disponibles."
    },
    {
        "id": "p_48",
        "level": 2,
        "text": "Una editorial imprimió 37 ejemplares de una novela policíaca en tapa dura y 18 en tapa blanda. Para distribuirlos a las librerías, empaquetaron todo en 5 palés iguales. ¿Cuántos libros transporta cada palé?",
        "tokens": [
            18,
            37,
            5
        ],
        "answer": 11.0,
        "hint": "Suma los libros de ambos formatos para tener el total impreso, y divide entre los palés."
    },
    {
        "id": "p_49",
        "level": 3,
        "text": "Un astillero construyó 12 fragatas con 12 cañones cada una. Luego, se retiraron del servicio 5 acorazados viejos, a los cuales se les desarmó sus 4 cañones cada uno. ¿Cuántos cañones más tiene la nueva flota respecto a la vieja?",
        "tokens": [
            12,
            4,
            12,
            5
        ],
        "answer": 124,
        "hint": "Multiplica los cañones nuevos, haz lo mismo con los viejos, y resta ambos resultados."
    },
    {
        "id": "p_50",
        "level": 3,
        "text": "Una fábrica de microchips tiene 10 obleas de silicio. En cada oblea imprime 7 procesadores. Un lote defectuoso obligó a desechar 9 obleas antes de imprimir, que debían haber tenido 6 procesadores cada una. ¿Cuántos procesadores válidos se imprimieron?",
        "tokens": [
            6,
            7,
            9,
            10
        ],
        "answer": 7,
        "hint": "Resta las obleas desechadas al total. Como cada oblea iba a tener los mismos procesadores (B=D), multiplica las buenas por los procesadores."
    },
    {
        "id": "p_51",
        "level": 3,
        "text": "Para un torneo de e-sports, la organización alquiló 8 pabellones. En cada pabellón instalaron 12 ordenadores de alta gama y 10 monitores extra para los espectadores. Si el total de equipos electrónicos se distribuyó en redes de 8 aparatos, ¿cuántas redes se formaron?",
        "tokens": [
            12,
            8,
            10,
            8
        ],
        "answer": 22.0,
        "hint": "Suma los aparatos por pabellón. Multiplícalo por el número de pabellones. Finalmente divide entre los aparatos por red."
    },
    {
        "id": "p_52",
        "level": 3,
        "text": "Un explorador espacial encontró 13 minas de titanio en un planeta y 10 en otro. En cada mina trabajan 2 androides mineros. Si los androides deben ser transportados de vuelta en naves con capacidad para 2 androides, ¿cuántas naves se necesitan?",
        "tokens": [
            13,
            2,
            2,
            10
        ],
        "answer": 23.0,
        "hint": "Suma el total de minas encontradas. Multiplica por los androides de cada mina. Divide entre la capacidad de cada nave."
    },
    {
        "id": "p_53",
        "level": 3,
        "text": "Una galería de arte vendió 11 cuadros del periodo renacentista a 4 miles de euros cada uno. Con el dinero, compraron 2 esculturas modernas a 4 miles de euros cada una. ¿Cuántos miles de euros le sobraron de ganancia a la galería?",
        "tokens": [
            4,
            4,
            2,
            11
        ],
        "answer": 36,
        "hint": "Multiplica cuadros por precio para sacar el ingreso, luego esculturas por precio para el gasto, y réstalos."
    },
    {
        "id": "p_54",
        "level": 3,
        "text": "El jefe de bomberos coordinó 12 parques de bomberos. Cada parque envió 15 camiones grandes y 10 furgonetas de apoyo para apagar un gran incendio forestal. Si en cada vehículo viajaban 3 bomberos profesionales, ¿cuántos bomberos acudieron a la emergencia?",
        "tokens": [
            15,
            12,
            3,
            10
        ],
        "answer": 900,
        "hint": "Suma camiones y furgonetas para saber los vehículos por parque. Multiplica por el número de parques, y finalmente por los bomberos de cada vehículo."
    },
    {
        "id": "p_55",
        "level": 3,
        "text": "Un astillero construyó 13 fragatas con 8 cañones cada una. Luego, se retiraron del servicio 5 acorazados viejos, a los cuales se les desarmó sus 6 cañones cada uno. ¿Cuántos cañones más tiene la nueva flota respecto a la vieja?",
        "tokens": [
            5,
            13,
            8,
            6
        ],
        "answer": 74,
        "hint": "Multiplica los cañones nuevos, haz lo mismo con los viejos, y resta ambos resultados."
    },
    {
        "id": "p_56",
        "level": 3,
        "text": "Una fábrica de microchips tiene 12 obleas de silicio. En cada oblea imprime 6 procesadores. Un lote defectuoso obligó a desechar 3 obleas antes de imprimir, que debían haber tenido 9 procesadores cada una. ¿Cuántos procesadores válidos se imprimieron?",
        "tokens": [
            9,
            6,
            3,
            12
        ],
        "answer": 54,
        "hint": "Resta las obleas desechadas al total. Como cada oblea iba a tener los mismos procesadores (B=D), multiplica las buenas por los procesadores."
    },
    {
        "id": "p_57",
        "level": 3,
        "text": "Para un torneo de e-sports, la organización alquiló 10 pabellones. En cada pabellón instalaron 14 ordenadores de alta gama y 7 monitores extra para los espectadores. Si el total de equipos electrónicos se distribuyó en redes de 10 aparatos, ¿cuántas redes se formaron?",
        "tokens": [
            14,
            10,
            7,
            10
        ],
        "answer": 21.0,
        "hint": "Suma los aparatos por pabellón. Multiplícalo por el número de pabellones. Finalmente divide entre los aparatos por red."
    },
    {
        "id": "p_58",
        "level": 3,
        "text": "Un explorador espacial encontró 13 minas de titanio en un planeta y 15 en otro. En cada mina trabajan 3 androides mineros. Si los androides deben ser transportados de vuelta en naves con capacidad para 7 androides, ¿cuántas naves se necesitan?",
        "tokens": [
            3,
            13,
            7,
            15
        ],
        "answer": 12.0,
        "hint": "Suma el total de minas encontradas. Multiplica por los androides de cada mina. Divide entre la capacidad de cada nave."
    },
    {
        "id": "p_59",
        "level": 3,
        "text": "Una galería de arte vendió 11 cuadros del periodo renacentista a 7 miles de euros cada uno. Con el dinero, compraron 8 esculturas modernas a 3 miles de euros cada una. ¿Cuántos miles de euros le sobraron de ganancia a la galería?",
        "tokens": [
            3,
            8,
            11,
            7
        ],
        "answer": 53,
        "hint": "Multiplica cuadros por precio para sacar el ingreso, luego esculturas por precio para el gasto, y réstalos."
    },
    {
        "id": "p_60",
        "level": 3,
        "text": "El jefe de bomberos coordinó 3 parques de bomberos. Cada parque envió 14 camiones grandes y 7 furgonetas de apoyo para apagar un gran incendio forestal. Si en cada vehículo viajaban 5 bomberos profesionales, ¿cuántos bomberos acudieron a la emergencia?",
        "tokens": [
            3,
            5,
            7,
            14
        ],
        "answer": 315,
        "hint": "Suma camiones y furgonetas para saber los vehículos por parque. Multiplica por el número de parques, y finalmente por los bomberos de cada vehículo."
    },
    {
        "id": "p_61",
        "level": 3,
        "text": "Un astillero construyó 4 fragatas con 13 cañones cada una. Luego, se retiraron del servicio 2 acorazados viejos, a los cuales se les desarmó sus 3 cañones cada uno. ¿Cuántos cañones más tiene la nueva flota respecto a la vieja?",
        "tokens": [
            3,
            2,
            4,
            13
        ],
        "answer": 46,
        "hint": "Multiplica los cañones nuevos, haz lo mismo con los viejos, y resta ambos resultados."
    },
    {
        "id": "p_62",
        "level": 3,
        "text": "Una fábrica de microchips tiene 13 obleas de silicio. En cada oblea imprime 10 procesadores. Un lote defectuoso obligó a desechar 10 obleas antes de imprimir, que debían haber tenido 4 procesadores cada una. ¿Cuántos procesadores válidos se imprimieron?",
        "tokens": [
            13,
            10,
            10,
            4
        ],
        "answer": 30,
        "hint": "Resta las obleas desechadas al total. Como cada oblea iba a tener los mismos procesadores (B=D), multiplica las buenas por los procesadores."
    },
    {
        "id": "p_63",
        "level": 3,
        "text": "Para un torneo de e-sports, la organización alquiló 9 pabellones. En cada pabellón instalaron 15 ordenadores de alta gama y 8 monitores extra para los espectadores. Si el total de equipos electrónicos se distribuyó en redes de 3 aparatos, ¿cuántas redes se formaron?",
        "tokens": [
            8,
            3,
            15,
            9
        ],
        "answer": 69.0,
        "hint": "Suma los aparatos por pabellón. Multiplícalo por el número de pabellones. Finalmente divide entre los aparatos por red."
    },
    {
        "id": "p_64",
        "level": 3,
        "text": "Un explorador espacial encontró 12 minas de titanio en un planeta y 12 en otro. En cada mina trabajan 7 androides mineros. Si los androides deben ser transportados de vuelta en naves con capacidad para 7 androides, ¿cuántas naves se necesitan?",
        "tokens": [
            7,
            7,
            12,
            12
        ],
        "answer": 24.0,
        "hint": "Suma el total de minas encontradas. Multiplica por los androides de cada mina. Divide entre la capacidad de cada nave."
    },
    {
        "id": "p_65",
        "level": 3,
        "text": "Una galería de arte vendió 13 cuadros del periodo renacentista a 3 miles de euros cada uno. Con el dinero, compraron 2 esculturas modernas a 2 miles de euros cada una. ¿Cuántos miles de euros le sobraron de ganancia a la galería?",
        "tokens": [
            3,
            13,
            2,
            2
        ],
        "answer": 35,
        "hint": "Multiplica cuadros por precio para sacar el ingreso, luego esculturas por precio para el gasto, y réstalos."
    },
    {
        "id": "p_66",
        "level": 3,
        "text": "El jefe de bomberos coordinó 3 parques de bomberos. Cada parque envió 4 camiones grandes y 6 furgonetas de apoyo para apagar un gran incendio forestal. Si en cada vehículo viajaban 10 bomberos profesionales, ¿cuántos bomberos acudieron a la emergencia?",
        "tokens": [
            10,
            6,
            3,
            4
        ],
        "answer": 300,
        "hint": "Suma camiones y furgonetas para saber los vehículos por parque. Multiplica por el número de parques, y finalmente por los bomberos de cada vehículo."
    },
    {
        "id": "p_67",
        "level": 3,
        "text": "Un astillero construyó 15 fragatas con 9 cañones cada una. Luego, se retiraron del servicio 3 acorazados viejos, a los cuales se les desarmó sus 8 cañones cada uno. ¿Cuántos cañones más tiene la nueva flota respecto a la vieja?",
        "tokens": [
            3,
            8,
            15,
            9
        ],
        "answer": 111,
        "hint": "Multiplica los cañones nuevos, haz lo mismo con los viejos, y resta ambos resultados."
    },
    {
        "id": "p_68",
        "level": 3,
        "text": "Una fábrica de microchips tiene 5 obleas de silicio. En cada oblea imprime 12 procesadores. Un lote defectuoso obligó a desechar 4 obleas antes de imprimir, que debían haber tenido 8 procesadores cada una. ¿Cuántos procesadores válidos se imprimieron?",
        "tokens": [
            5,
            4,
            12,
            8
        ],
        "answer": 12,
        "hint": "Resta las obleas desechadas al total. Como cada oblea iba a tener los mismos procesadores (B=D), multiplica las buenas por los procesadores."
    },
    {
        "id": "p_69",
        "level": 3,
        "text": "Para un torneo de e-sports, la organización alquiló 14 pabellones. En cada pabellón instalaron 5 ordenadores de alta gama y 7 monitores extra para los espectadores. Si el total de equipos electrónicos se distribuyó en redes de 8 aparatos, ¿cuántas redes se formaron?",
        "tokens": [
            14,
            5,
            8,
            7
        ],
        "answer": 21.0,
        "hint": "Suma los aparatos por pabellón. Multiplícalo por el número de pabellones. Finalmente divide entre los aparatos por red."
    },
    {
        "id": "p_70",
        "level": 3,
        "text": "Un explorador espacial encontró 8 minas de titanio en un planeta y 11 en otro. En cada mina trabajan 10 androides mineros. Si los androides deben ser transportados de vuelta en naves con capacidad para 5 androides, ¿cuántas naves se necesitan?",
        "tokens": [
            5,
            8,
            10,
            11
        ],
        "answer": 38.0,
        "hint": "Suma el total de minas encontradas. Multiplica por los androides de cada mina. Divide entre la capacidad de cada nave."
    },
    {
        "id": "p_71",
        "level": 3,
        "text": "Una galería de arte vendió 9 cuadros del periodo renacentista a 12 miles de euros cada uno. Con el dinero, compraron 10 esculturas modernas a 5 miles de euros cada una. ¿Cuántos miles de euros le sobraron de ganancia a la galería?",
        "tokens": [
            12,
            10,
            5,
            9
        ],
        "answer": 58,
        "hint": "Multiplica cuadros por precio para sacar el ingreso, luego esculturas por precio para el gasto, y réstalos."
    },
    {
        "id": "p_72",
        "level": 3,
        "text": "El jefe de bomberos coordinó 8 parques de bomberos. Cada parque envió 9 camiones grandes y 9 furgonetas de apoyo para apagar un gran incendio forestal. Si en cada vehículo viajaban 9 bomberos profesionales, ¿cuántos bomberos acudieron a la emergencia?",
        "tokens": [
            9,
            9,
            8,
            9
        ],
        "answer": 1296,
        "hint": "Suma camiones y furgonetas para saber los vehículos por parque. Multiplica por el número de parques, y finalmente por los bomberos de cada vehículo."
    },
    {
        "id": "p_73",
        "level": 4,
        "text": "La bióloga registró 16 cóndores andinos y 7 águilas calvas en su expedición de 5 meses. (Nota: además vio 163 gorriones comunes, pero no son rapaces). Si cada rapaz consume 4 kilos de carne a la semana, ¿cuántos kilos de carne consumen todas las rapaces en total a la semana?",
        "tokens": [
            4,
            7,
            163,
            5,
            16
        ],
        "answer": 92,
        "hint": "Ignora los gorriones y los meses. Suma las rapaces y multiplica por su consumo de carne."
    },
    {
        "id": "p_74",
        "level": 4,
        "text": "Un jeque árabe compró 24 deportivos rojos y 20 deportivos negros. Su palacio tiene 126 habitaciones de lujo con paredes de mármol. Si cada coche tiene un motor con 6 cilindros, y contrata a 5 mecánicos para revisarlos todos, ¿cuántos cilindros en total revisarán los mecánicos?",
        "tokens": [
            6,
            126,
            20,
            5,
            24
        ],
        "answer": 264,
        "hint": "Las habitaciones o los mecánicos no importan para saber los cilindros. Suma los coches y multiplica por los cilindros que tiene cada uno."
    },
    {
        "id": "p_75",
        "level": 4,
        "text": "Una expedición vikinga preparó 12 barcos largos y 18 barcos ligeros. Navegaron durante 133 días con tormentas de nieve. Cada barco llevaba una tripulación de 5 guerreros fieros y 3 remeros expertos. ¿Cuántas personas en total formaban la expedición nórdica?",
        "tokens": [
            18,
            3,
            5,
            12,
            133
        ],
        "answer": 240,
        "hint": "Los días de tormenta son relleno. Suma todos los barcos. Suma guerreros y remeros para saber la gente por barco, y multiplícalo por los barcos."
    },
    {
        "id": "p_76",
        "level": 4,
        "text": "En una central nuclear hay 10 reactores activos y 20 en mantenimiento. Para enfriarlos se usan 5 mil litros de agua pesada por reactor activo. En la ciudad vecina viven 51 mil personas ajenas a la central. Si la central se refrigera 10 veces al día, ¿cuántos miles de litros de agua gasta la central activa diariamente?",
        "tokens": [
            10,
            20,
            51,
            5,
            10
        ],
        "answer": 500,
        "hint": "Ignora los reactores en mantenimiento y la población. Multiplica los activos por el agua que usan, y luego por las veces al día."
    },
    {
        "id": "p_77",
        "level": 4,
        "text": "Un influencer de tecnología revisó 30 smartphones de gama alta y 13 portátiles ultra finos. En su canal tiene 98 millones de suscriptores inactivos que no ven los videos. Si dedicó 8 horas a testear cada dispositivo, y grabó 2 tomas de cámara de cada uno, ¿cuántas horas en total pasó testeando tecnología?",
        "tokens": [
            13,
            8,
            30,
            2,
            98
        ],
        "answer": 344,
        "hint": "Los suscriptores inactivos y las tomas de cámara son trampas. Suma los dispositivos analizados y multiplícalo por las horas de testeo."
    },
    {
        "id": "p_78",
        "level": 4,
        "text": "El zoológico recibió 20 pingüinos emperador y 5 leones marinos desde un refugio polar en 142 camiones con aire acondicionado. Cada animal fue alimentado con 5 kilos de pescado al día durante 2 días de adaptación. ¿Cuántos kilos de pescado consumieron en total todos los animales en ese periodo?",
        "tokens": [
            2,
            20,
            5,
            5,
            142
        ],
        "answer": 250,
        "hint": "Ignora los camiones. Suma a todos los animales rescatados. Multiplica los kilos diarios por los días para sacar la ración completa de uno, y multiplícalo por los animales."
    },
    {
        "id": "p_79",
        "level": 4,
        "text": "La bióloga registró 20 cóndores andinos y 20 águilas calvas en su expedición de 5 meses. (Nota: además vio 58 gorriones comunes, pero no son rapaces). Si cada rapaz consume 2 kilos de carne a la semana, ¿cuántos kilos de carne consumen todas las rapaces en total a la semana?",
        "tokens": [
            5,
            20,
            58,
            2,
            20
        ],
        "answer": 80,
        "hint": "Ignora los gorriones y los meses. Suma las rapaces y multiplica por su consumo de carne."
    },
    {
        "id": "p_80",
        "level": 4,
        "text": "Un jeque árabe compró 16 deportivos rojos y 15 deportivos negros. Su palacio tiene 124 habitaciones de lujo con paredes de mármol. Si cada coche tiene un motor con 6 cilindros, y contrata a 9 mecánicos para revisarlos todos, ¿cuántos cilindros en total revisarán los mecánicos?",
        "tokens": [
            6,
            9,
            15,
            16,
            124
        ],
        "answer": 186,
        "hint": "Las habitaciones o los mecánicos no importan para saber los cilindros. Suma los coches y multiplica por los cilindros que tiene cada uno."
    },
    {
        "id": "p_81",
        "level": 4,
        "text": "Una expedición vikinga preparó 18 barcos largos y 8 barcos ligeros. Navegaron durante 164 días con tormentas de nieve. Cada barco llevaba una tripulación de 6 guerreros fieros y 3 remeros expertos. ¿Cuántas personas en total formaban la expedición nórdica?",
        "tokens": [
            18,
            164,
            3,
            6,
            8
        ],
        "answer": 234,
        "hint": "Los días de tormenta son relleno. Suma todos los barcos. Suma guerreros y remeros para saber la gente por barco, y multiplícalo por los barcos."
    },
    {
        "id": "p_82",
        "level": 4,
        "text": "En una central nuclear hay 26 reactores activos y 9 en mantenimiento. Para enfriarlos se usan 10 mil litros de agua pesada por reactor activo. En la ciudad vecina viven 152 mil personas ajenas a la central. Si la central se refrigera 8 veces al día, ¿cuántos miles de litros de agua gasta la central activa diariamente?",
        "tokens": [
            10,
            9,
            152,
            8,
            26
        ],
        "answer": 2080,
        "hint": "Ignora los reactores en mantenimiento y la población. Multiplica los activos por el agua que usan, y luego por las veces al día."
    },
    {
        "id": "p_83",
        "level": 4,
        "text": "Un influencer de tecnología revisó 25 smartphones de gama alta y 18 portátiles ultra finos. En su canal tiene 111 millones de suscriptores inactivos que no ven los videos. Si dedicó 2 horas a testear cada dispositivo, y grabó 4 tomas de cámara de cada uno, ¿cuántas horas en total pasó testeando tecnología?",
        "tokens": [
            111,
            25,
            18,
            4,
            2
        ],
        "answer": 86,
        "hint": "Los suscriptores inactivos y las tomas de cámara son trampas. Suma los dispositivos analizados y multiplícalo por las horas de testeo."
    },
    {
        "id": "p_84",
        "level": 4,
        "text": "El zoológico recibió 20 pingüinos emperador y 14 leones marinos desde un refugio polar en 66 camiones con aire acondicionado. Cada animal fue alimentado con 3 kilos de pescado al día durante 5 días de adaptación. ¿Cuántos kilos de pescado consumieron en total todos los animales en ese periodo?",
        "tokens": [
            5,
            14,
            3,
            20,
            66
        ],
        "answer": 510,
        "hint": "Ignora los camiones. Suma a todos los animales rescatados. Multiplica los kilos diarios por los días para sacar la ración completa de uno, y multiplícalo por los animales."
    },
    {
        "id": "p_85",
        "level": 4,
        "text": "La bióloga registró 24 cóndores andinos y 18 águilas calvas en su expedición de 5 meses. (Nota: además vio 118 gorriones comunes, pero no son rapaces). Si cada rapaz consume 10 kilos de carne a la semana, ¿cuántos kilos de carne consumen todas las rapaces en total a la semana?",
        "tokens": [
            24,
            5,
            18,
            10,
            118
        ],
        "answer": 420,
        "hint": "Ignora los gorriones y los meses. Suma las rapaces y multiplica por su consumo de carne."
    },
    {
        "id": "p_86",
        "level": 4,
        "text": "Un jeque árabe compró 19 deportivos rojos y 16 deportivos negros. Su palacio tiene 199 habitaciones de lujo con paredes de mármol. Si cada coche tiene un motor con 2 cilindros, y contrata a 5 mecánicos para revisarlos todos, ¿cuántos cilindros en total revisarán los mecánicos?",
        "tokens": [
            5,
            199,
            2,
            16,
            19
        ],
        "answer": 70,
        "hint": "Las habitaciones o los mecánicos no importan para saber los cilindros. Suma los coches y multiplica por los cilindros que tiene cada uno."
    },
    {
        "id": "p_87",
        "level": 4,
        "text": "Una expedición vikinga preparó 17 barcos largos y 15 barcos ligeros. Navegaron durante 48 días con tormentas de nieve. Cada barco llevaba una tripulación de 4 guerreros fieros y 5 remeros expertos. ¿Cuántas personas en total formaban la expedición nórdica?",
        "tokens": [
            17,
            5,
            15,
            4,
            48
        ],
        "answer": 288,
        "hint": "Los días de tormenta son relleno. Suma todos los barcos. Suma guerreros y remeros para saber la gente por barco, y multiplícalo por los barcos."
    },
    {
        "id": "p_88",
        "level": 4,
        "text": "En una central nuclear hay 18 reactores activos y 20 en mantenimiento. Para enfriarlos se usan 9 mil litros de agua pesada por reactor activo. En la ciudad vecina viven 158 mil personas ajenas a la central. Si la central se refrigera 8 veces al día, ¿cuántos miles de litros de agua gasta la central activa diariamente?",
        "tokens": [
            18,
            158,
            8,
            20,
            9
        ],
        "answer": 1296,
        "hint": "Ignora los reactores en mantenimiento y la población. Multiplica los activos por el agua que usan, y luego por las veces al día."
    },
    {
        "id": "p_89",
        "level": 4,
        "text": "Un influencer de tecnología revisó 28 smartphones de gama alta y 12 portátiles ultra finos. En su canal tiene 182 millones de suscriptores inactivos que no ven los videos. Si dedicó 7 horas a testear cada dispositivo, y grabó 2 tomas de cámara de cada uno, ¿cuántas horas en total pasó testeando tecnología?",
        "tokens": [
            12,
            28,
            182,
            2,
            7
        ],
        "answer": 280,
        "hint": "Los suscriptores inactivos y las tomas de cámara son trampas. Suma los dispositivos analizados y multiplícalo por las horas de testeo."
    },
    {
        "id": "p_90",
        "level": 4,
        "text": "El zoológico recibió 11 pingüinos emperador y 12 leones marinos desde un refugio polar en 130 camiones con aire acondicionado. Cada animal fue alimentado con 9 kilos de pescado al día durante 5 días de adaptación. ¿Cuántos kilos de pescado consumieron en total todos los animales en ese periodo?",
        "tokens": [
            130,
            9,
            5,
            11,
            12
        ],
        "answer": 1035,
        "hint": "Ignora los camiones. Suma a todos los animales rescatados. Multiplica los kilos diarios por los días para sacar la ración completa de uno, y multiplícalo por los animales."
    },
    {
        "id": "p_91",
        "level": 4,
        "text": "La bióloga registró 16 cóndores andinos y 10 águilas calvas en su expedición de 6 meses. (Nota: además vio 122 gorriones comunes, pero no son rapaces). Si cada rapaz consume 9 kilos de carne a la semana, ¿cuántos kilos de carne consumen todas las rapaces en total a la semana?",
        "tokens": [
            10,
            6,
            16,
            9,
            122
        ],
        "answer": 234,
        "hint": "Ignora los gorriones y los meses. Suma las rapaces y multiplica por su consumo de carne."
    },
    {
        "id": "p_92",
        "level": 4,
        "text": "Un jeque árabe compró 30 deportivos rojos y 8 deportivos negros. Su palacio tiene 96 habitaciones de lujo con paredes de mármol. Si cada coche tiene un motor con 10 cilindros, y contrata a 8 mecánicos para revisarlos todos, ¿cuántos cilindros en total revisarán los mecánicos?",
        "tokens": [
            96,
            10,
            8,
            8,
            30
        ],
        "answer": 380,
        "hint": "Las habitaciones o los mecánicos no importan para saber los cilindros. Suma los coches y multiplica por los cilindros que tiene cada uno."
    },
    {
        "id": "p_93",
        "level": 4,
        "text": "Una expedición vikinga preparó 17 barcos largos y 17 barcos ligeros. Navegaron durante 102 días con tormentas de nieve. Cada barco llevaba una tripulación de 6 guerreros fieros y 4 remeros expertos. ¿Cuántas personas en total formaban la expedición nórdica?",
        "tokens": [
            17,
            4,
            17,
            102,
            6
        ],
        "answer": 340,
        "hint": "Los días de tormenta son relleno. Suma todos los barcos. Suma guerreros y remeros para saber la gente por barco, y multiplícalo por los barcos."
    },
    {
        "id": "p_94",
        "level": 4,
        "text": "En una central nuclear hay 18 reactores activos y 20 en mantenimiento. Para enfriarlos se usan 9 mil litros de agua pesada por reactor activo. En la ciudad vecina viven 176 mil personas ajenas a la central. Si la central se refrigera 10 veces al día, ¿cuántos miles de litros de agua gasta la central activa diariamente?",
        "tokens": [
            10,
            18,
            9,
            176,
            20
        ],
        "answer": 1620,
        "hint": "Ignora los reactores en mantenimiento y la población. Multiplica los activos por el agua que usan, y luego por las veces al día."
    },
    {
        "id": "p_95",
        "level": 4,
        "text": "Un influencer de tecnología revisó 24 smartphones de gama alta y 18 portátiles ultra finos. En su canal tiene 131 millones de suscriptores inactivos que no ven los videos. Si dedicó 2 horas a testear cada dispositivo, y grabó 7 tomas de cámara de cada uno, ¿cuántas horas en total pasó testeando tecnología?",
        "tokens": [
            7,
            24,
            131,
            18,
            2
        ],
        "answer": 84,
        "hint": "Los suscriptores inactivos y las tomas de cámara son trampas. Suma los dispositivos analizados y multiplícalo por las horas de testeo."
    },
    {
        "id": "p_96",
        "level": 4,
        "text": "El zoológico recibió 11 pingüinos emperador y 5 leones marinos desde un refugio polar en 197 camiones con aire acondicionado. Cada animal fue alimentado con 5 kilos de pescado al día durante 2 días de adaptación. ¿Cuántos kilos de pescado consumieron en total todos los animales en ese periodo?",
        "tokens": [
            5,
            2,
            5,
            197,
            11
        ],
        "answer": 160,
        "hint": "Ignora los camiones. Suma a todos los animales rescatados. Multiplica los kilos diarios por los días para sacar la ración completa de uno, y multiplícalo por los animales."
    },
    {
        "id": "p_97",
        "level": 5,
        "text": "El gobierno aprobó un fondo de 1307 millones para tecnología educativa. Compraron 21 miles de tablets a 19 euros cada una, y 39 miles de pizarras digitales a 6 euros cada una. Había otro fondo de 990 millones para sanidad intacto. ¿Cuántos millones de euros sobraron del fondo educativo? (Nota: los precios en miles coinciden con millones en el resultado).",
        "tokens": [
            21,
            6,
            39,
            19,
            990,
            1307
        ],
        "answer": 674,
        "hint": "Ignora la sanidad. Multiplica las tablets por su precio, las pizarras por su precio, súmalo para tener el gasto, y réstalo al fondo original."
    },
    {
        "id": "p_98",
        "level": 5,
        "text": "Un consorcio petrolero extrae crudo de dos plataformas. La plataforma Alfa bombea 12 barriles por hora a 13 dólares cada uno. La Beta bombea 28 barriles por hora a 19 dólares. Trabajan 3 horas al día bajo condiciones extremas y ráfagas de viento de 997 km/h. ¿Cuál es la facturación total en dólares por el petróleo de un día?",
        "tokens": [
            3,
            997,
            28,
            13,
            12,
            19
        ],
        "answer": 2064,
        "hint": "El viento no importa. Calcula lo que factura Alfa en una hora (multiplicando), luego Beta. Súmalo. Finalmente multiplica por las horas del día."
    },
    {
        "id": "p_99",
        "level": 5,
        "text": "Una constructora planea un rascacielos. Usan 20 vigas de titanio que cuestan 19 miles de euros, y 12 paneles de cristal templado a 15 miles de euros cada uno. El presupuesto total es de 2362 miles de euros y emplean a 567 obreros sindicados. ¿Cuánto dinero en miles de euros quedará en las reservas de la constructora tras comprar esos materiales?",
        "tokens": [
            12,
            19,
            20,
            2362,
            15,
            567
        ],
        "answer": 1802,
        "hint": "Ignora a los obreros. Calcula el gasto en vigas, el gasto en paneles, suma ambos gastos, y resta ese gran total a tu presupuesto inicial."
    },
    {
        "id": "p_100",
        "level": 5,
        "text": "Un laboratorio de genética sintetizó 24 cadenas de ADN tipo X, que tardan 11 horas cada una en formarse, y 46 cadenas tipo Y, que requieren 14 horas cada una. Disponen de 9 incubadoras, pero 299 de ellas tienen un fallo en el termostato. Si cada cadena se hizo una a una, ¿cuántas horas de síntesis genéticas totales ocurrieron?",
        "tokens": [
            11,
            24,
            46,
            9,
            299,
            14
        ],
        "answer": 908,
        "hint": "Las incubadoras y los fallos son distractores para el tiempo de procesamiento en serie. Multiplica ADN X por sus horas, ADN Y por las suyas, y suma los dos tiempos."
    },
    {
        "id": "p_101",
        "level": 5,
        "text": "El gobierno aprobó un fondo de 1856 millones para tecnología educativa. Compraron 42 miles de tablets a 12 euros cada una, y 10 miles de pizarras digitales a 19 euros cada una. Había otro fondo de 557 millones para sanidad intacto. ¿Cuántos millones de euros sobraron del fondo educativo? (Nota: los precios en miles coinciden con millones en el resultado).",
        "tokens": [
            19,
            12,
            42,
            557,
            10,
            1856
        ],
        "answer": 1162,
        "hint": "Ignora la sanidad. Multiplica las tablets por su precio, las pizarras por su precio, súmalo para tener el gasto, y réstalo al fondo original."
    },
    {
        "id": "p_102",
        "level": 5,
        "text": "Un consorcio petrolero extrae crudo de dos plataformas. La plataforma Alfa bombea 20 barriles por hora a 15 dólares cada uno. La Beta bombea 46 barriles por hora a 11 dólares. Trabajan 4 horas al día bajo condiciones extremas y ráfagas de viento de 466 km/h. ¿Cuál es la facturación total en dólares por el petróleo de un día?",
        "tokens": [
            4,
            11,
            15,
            466,
            20,
            46
        ],
        "answer": 3224,
        "hint": "El viento no importa. Calcula lo que factura Alfa en una hora (multiplicando), luego Beta. Súmalo. Finalmente multiplica por las horas del día."
    },
    {
        "id": "p_103",
        "level": 5,
        "text": "Una constructora planea un rascacielos. Usan 16 vigas de titanio que cuestan 10 miles de euros, y 37 paneles de cristal templado a 18 miles de euros cada uno. El presupuesto total es de 1839 miles de euros y emplean a 755 obreros sindicados. ¿Cuánto dinero en miles de euros quedará en las reservas de la constructora tras comprar esos materiales?",
        "tokens": [
            18,
            755,
            37,
            16,
            10,
            1839
        ],
        "answer": 1013,
        "hint": "Ignora a los obreros. Calcula el gasto en vigas, el gasto en paneles, suma ambos gastos, y resta ese gran total a tu presupuesto inicial."
    },
    {
        "id": "p_104",
        "level": 5,
        "text": "Un laboratorio de genética sintetizó 48 cadenas de ADN tipo X, que tardan 14 horas cada una en formarse, y 11 cadenas tipo Y, que requieren 10 horas cada una. Disponen de 9 incubadoras, pero 499 de ellas tienen un fallo en el termostato. Si cada cadena se hizo una a una, ¿cuántas horas de síntesis genéticas totales ocurrieron?",
        "tokens": [
            10,
            48,
            9,
            14,
            11,
            499
        ],
        "answer": 782,
        "hint": "Las incubadoras y los fallos son distractores para el tiempo de procesamiento en serie. Multiplica ADN X por sus horas, ADN Y por las suyas, y suma los dos tiempos."
    },
    {
        "id": "p_105",
        "level": 5,
        "text": "El gobierno aprobó un fondo de 2034 millones para tecnología educativa. Compraron 10 miles de tablets a 6 euros cada una, y 45 miles de pizarras digitales a 14 euros cada una. Había otro fondo de 403 millones para sanidad intacto. ¿Cuántos millones de euros sobraron del fondo educativo? (Nota: los precios en miles coinciden con millones en el resultado).",
        "tokens": [
            45,
            403,
            14,
            10,
            6,
            2034
        ],
        "answer": 1344,
        "hint": "Ignora la sanidad. Multiplica las tablets por su precio, las pizarras por su precio, súmalo para tener el gasto, y réstalo al fondo original."
    },
    {
        "id": "p_106",
        "level": 5,
        "text": "Un consorcio petrolero extrae crudo de dos plataformas. La plataforma Alfa bombea 15 barriles por hora a 13 dólares cada uno. La Beta bombea 33 barriles por hora a 20 dólares. Trabajan 4 horas al día bajo condiciones extremas y ráfagas de viento de 469 km/h. ¿Cuál es la facturación total en dólares por el petróleo de un día?",
        "tokens": [
            33,
            469,
            4,
            20,
            13,
            15
        ],
        "answer": 3420,
        "hint": "El viento no importa. Calcula lo que factura Alfa en una hora (multiplicando), luego Beta. Súmalo. Finalmente multiplica por las horas del día."
    },
    {
        "id": "p_107",
        "level": 5,
        "text": "Una constructora planea un rascacielos. Usan 14 vigas de titanio que cuestan 15 miles de euros, y 44 paneles de cristal templado a 12 miles de euros cada uno. El presupuesto total es de 1438 miles de euros y emplean a 943 obreros sindicados. ¿Cuánto dinero en miles de euros quedará en las reservas de la constructora tras comprar esos materiales?",
        "tokens": [
            1438,
            44,
            14,
            15,
            943,
            12
        ],
        "answer": 700,
        "hint": "Ignora a los obreros. Calcula el gasto en vigas, el gasto en paneles, suma ambos gastos, y resta ese gran total a tu presupuesto inicial."
    },
    {
        "id": "p_108",
        "level": 5,
        "text": "Un laboratorio de genética sintetizó 39 cadenas de ADN tipo X, que tardan 15 horas cada una en formarse, y 45 cadenas tipo Y, que requieren 18 horas cada una. Disponen de 3 incubadoras, pero 784 de ellas tienen un fallo en el termostato. Si cada cadena se hizo una a una, ¿cuántas horas de síntesis genéticas totales ocurrieron?",
        "tokens": [
            39,
            15,
            3,
            784,
            18,
            45
        ],
        "answer": 1395,
        "hint": "Las incubadoras y los fallos son distractores para el tiempo de procesamiento en serie. Multiplica ADN X por sus horas, ADN Y por las suyas, y suma los dos tiempos."
    },
    {
        "id": "p_109",
        "level": 5,
        "text": "El gobierno aprobó un fondo de 3579 millones para tecnología educativa. Compraron 49 miles de tablets a 19 euros cada una, y 47 miles de pizarras digitales a 14 euros cada una. Había otro fondo de 746 millones para sanidad intacto. ¿Cuántos millones de euros sobraron del fondo educativo? (Nota: los precios en miles coinciden con millones en el resultado).",
        "tokens": [
            19,
            49,
            3579,
            746,
            47,
            14
        ],
        "answer": 1990,
        "hint": "Ignora la sanidad. Multiplica las tablets por su precio, las pizarras por su precio, súmalo para tener el gasto, y réstalo al fondo original."
    },
    {
        "id": "p_110",
        "level": 5,
        "text": "Un consorcio petrolero extrae crudo de dos plataformas. La plataforma Alfa bombea 14 barriles por hora a 11 dólares cada uno. La Beta bombea 23 barriles por hora a 14 dólares. Trabajan 6 horas al día bajo condiciones extremas y ráfagas de viento de 196 km/h. ¿Cuál es la facturación total en dólares por el petróleo de un día?",
        "tokens": [
            14,
            11,
            14,
            6,
            23,
            196
        ],
        "answer": 2856,
        "hint": "El viento no importa. Calcula lo que factura Alfa en una hora (multiplicando), luego Beta. Súmalo. Finalmente multiplica por las horas del día."
    },
    {
        "id": "p_111",
        "level": 5,
        "text": "Una constructora planea un rascacielos. Usan 28 vigas de titanio que cuestan 20 miles de euros, y 46 paneles de cristal templado a 15 miles de euros cada uno. El presupuesto total es de 3106 miles de euros y emplean a 767 obreros sindicados. ¿Cuánto dinero en miles de euros quedará en las reservas de la constructora tras comprar esos materiales?",
        "tokens": [
            3106,
            20,
            46,
            28,
            15,
            767
        ],
        "answer": 1856,
        "hint": "Ignora a los obreros. Calcula el gasto en vigas, el gasto en paneles, suma ambos gastos, y resta ese gran total a tu presupuesto inicial."
    },
    {
        "id": "p_112",
        "level": 5,
        "text": "Un laboratorio de genética sintetizó 25 cadenas de ADN tipo X, que tardan 9 horas cada una en formarse, y 28 cadenas tipo Y, que requieren 11 horas cada una. Disponen de 2 incubadoras, pero 419 de ellas tienen un fallo en el termostato. Si cada cadena se hizo una a una, ¿cuántas horas de síntesis genéticas totales ocurrieron?",
        "tokens": [
            11,
            28,
            2,
            9,
            419,
            25
        ],
        "answer": 533,
        "hint": "Las incubadoras y los fallos son distractores para el tiempo de procesamiento en serie. Multiplica ADN X por sus horas, ADN Y por las suyas, y suma los dos tiempos."
    },
    {
        "id": "p_113",
        "level": 5,
        "text": "El gobierno aprobó un fondo de 3487 millones para tecnología educativa. Compraron 49 miles de tablets a 20 euros cada una, y 40 miles de pizarras digitales a 13 euros cada una. Había otro fondo de 930 millones para sanidad intacto. ¿Cuántos millones de euros sobraron del fondo educativo? (Nota: los precios en miles coinciden con millones en el resultado).",
        "tokens": [
            13,
            40,
            3487,
            20,
            49,
            930
        ],
        "answer": 1987,
        "hint": "Ignora la sanidad. Multiplica las tablets por su precio, las pizarras por su precio, súmalo para tener el gasto, y réstalo al fondo original."
    },
    {
        "id": "p_114",
        "level": 5,
        "text": "Un consorcio petrolero extrae crudo de dos plataformas. La plataforma Alfa bombea 38 barriles por hora a 14 dólares cada uno. La Beta bombea 35 barriles por hora a 14 dólares. Trabajan 3 horas al día bajo condiciones extremas y ráfagas de viento de 374 km/h. ¿Cuál es la facturación total en dólares por el petróleo de un día?",
        "tokens": [
            35,
            14,
            3,
            374,
            38,
            14
        ],
        "answer": 3066,
        "hint": "El viento no importa. Calcula lo que factura Alfa en una hora (multiplicando), luego Beta. Súmalo. Finalmente multiplica por las horas del día."
    },
    {
        "id": "p_115",
        "level": 5,
        "text": "Una constructora planea un rascacielos. Usan 33 vigas de titanio que cuestan 8 miles de euros, y 34 paneles de cristal templado a 5 miles de euros cada uno. El presupuesto total es de 1833 miles de euros y emplean a 425 obreros sindicados. ¿Cuánto dinero en miles de euros quedará en las reservas de la constructora tras comprar esos materiales?",
        "tokens": [
            34,
            8,
            33,
            1833,
            5,
            425
        ],
        "answer": 1399,
        "hint": "Ignora a los obreros. Calcula el gasto en vigas, el gasto en paneles, suma ambos gastos, y resta ese gran total a tu presupuesto inicial."
    },
    {
        "id": "p_116",
        "level": 5,
        "text": "Un laboratorio de genética sintetizó 32 cadenas de ADN tipo X, que tardan 16 horas cada una en formarse, y 26 cadenas tipo Y, que requieren 14 horas cada una. Disponen de 3 incubadoras, pero 202 de ellas tienen un fallo en el termostato. Si cada cadena se hizo una a una, ¿cuántas horas de síntesis genéticas totales ocurrieron?",
        "tokens": [
            16,
            202,
            3,
            26,
            14,
            32
        ],
        "answer": 876,
        "hint": "Las incubadoras y los fallos son distractores para el tiempo de procesamiento en serie. Multiplica ADN X por sus horas, ADN Y por las suyas, y suma los dos tiempos."
    },
    {
        "id": "p_117",
        "level": 5,
        "text": "El gobierno aprobó un fondo de 1717 millones para tecnología educativa. Compraron 12 miles de tablets a 5 euros cada una, y 34 miles de pizarras digitales a 10 euros cada una. Había otro fondo de 293 millones para sanidad intacto. ¿Cuántos millones de euros sobraron del fondo educativo? (Nota: los precios en miles coinciden con millones en el resultado).",
        "tokens": [
            34,
            1717,
            10,
            293,
            12,
            5
        ],
        "answer": 1317,
        "hint": "Ignora la sanidad. Multiplica las tablets por su precio, las pizarras por su precio, súmalo para tener el gasto, y réstalo al fondo original."
    },
    {
        "id": "p_118",
        "level": 5,
        "text": "Un consorcio petrolero extrae crudo de dos plataformas. La plataforma Alfa bombea 14 barriles por hora a 12 dólares cada uno. La Beta bombea 32 barriles por hora a 17 dólares. Trabajan 5 horas al día bajo condiciones extremas y ráfagas de viento de 578 km/h. ¿Cuál es la facturación total en dólares por el petróleo de un día?",
        "tokens": [
            12,
            5,
            32,
            14,
            578,
            17
        ],
        "answer": 3560,
        "hint": "El viento no importa. Calcula lo que factura Alfa en una hora (multiplicando), luego Beta. Súmalo. Finalmente multiplica por las horas del día."
    },
    {
        "id": "p_119",
        "level": 5,
        "text": "Una constructora planea un rascacielos. Usan 40 vigas de titanio que cuestan 17 miles de euros, y 12 paneles de cristal templado a 14 miles de euros cada uno. El presupuesto total es de 2774 miles de euros y emplean a 285 obreros sindicados. ¿Cuánto dinero en miles de euros quedará en las reservas de la constructora tras comprar esos materiales?",
        "tokens": [
            40,
            14,
            12,
            285,
            17,
            2774
        ],
        "answer": 1926,
        "hint": "Ignora a los obreros. Calcula el gasto en vigas, el gasto en paneles, suma ambos gastos, y resta ese gran total a tu presupuesto inicial."
    },
    {
        "id": "p_120",
        "level": 5,
        "text": "Un laboratorio de genética sintetizó 20 cadenas de ADN tipo X, que tardan 7 horas cada una en formarse, y 12 cadenas tipo Y, que requieren 20 horas cada una. Disponen de 7 incubadoras, pero 820 de ellas tienen un fallo en el termostato. Si cada cadena se hizo una a una, ¿cuántas horas de síntesis genéticas totales ocurrieron?",
        "tokens": [
            20,
            820,
            20,
            7,
            12,
            7
        ],
        "answer": 380,
        "hint": "Las incubadoras y los fallos son distractores para el tiempo de procesamiento en serie. Multiplica ADN X por sus horas, ADN Y por las suyas, y suma los dos tiempos."
    }
];

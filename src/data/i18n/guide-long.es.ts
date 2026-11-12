import type { GuideLong } from './types';

const tarifas = 'Las entradas de los parques gestionados por Madagascar National Parks se duplicaron el 1 de noviembre de 2026. Antes de la subida, un visitante extranjero pagaba unos 45.000 ariary al día en la mayoría de los parques: compruebe la nueva tarifa en la taquilla, donde se paga en efectivo, en ariary.';

export const guideLong: Record<string, GuideLong> = {
  andasibe: {
    sections: [
      { h: 'El canto del indri', p: [
        'Andasibe es ante todo un sonido. Por la mañana, un grito largo y melancólico atraviesa el bosque y se responde de una colina a otra: es el indri, el lémur vivo más grande, que solo sobrevive en libertad. Las familias de indris de la reserva de Analamazaotra están acostumbradas a la presencia humana, así que con un buen guía el encuentro es casi seguro.',
        'El parque nacional de Andasibe-Mantadia reúne dos sectores. Analamazaotra, junto al pueblo, es el más accesible: senderos de una a cuatro horas, poco desnivel y los indris a la cita. Mantadia, más lejos por una pista, es un bosque primario más salvaje y empinado, para quien quiere caminar mucho y ver el sifaka diademado, uno de los lémures más bonitos de la isla.',
      ]},
      { h: 'Lo que se ve en un día', p: [
        'Además de los indris, a menudo se ven lémures pardos, lémures del bambú grises, camaleones gigantes (entre ellos el camaleón de Parson), ranas de colores y numerosas aves endémicas. El bosque es húmedo todo el año: la vegetación es densa, con helechos arborescentes y orquídeas por todas partes.',
        'Por la noche, un paseo nocturno en el borde del bosque permite ver lémures ratón, camaleones dormidos en las ramas y los sorprendentes insectos de la selva. Suele ser el momento preferido de los niños.',
      ]},
      { h: '¿Cuánto tiempo hace falta?', p: [
        'Andasibe es la excursión ideal desde Tana, al principio o al final del viaje. Se recomienda de verdad pasar una noche allí: se llega por la tarde, se hace el paseo nocturno y se entra en el bosque temprano a la mañana siguiente, cuando cantan los indris. En el día es posible, pero se pasa más tiempo en la carretera que en el bosque.',
        'Con dos noches se añade Mantadia o una reserva comunitaria cercana, y quizá la isla de los lémures de Vakona, más turística pero muy apreciada por las familias.',
      ]},
      { h: 'La carretera desde Tana', p: [
        'Salimos de la capital hacia el este por la RN2, la carretera de Tamatave. Está asfaltada y atraviesa colinas, arrozales y pueblos junto a la carretera donde se compra fruta. Son unos 150 km, de tres a cuatro horas según el tráfico a la salida de Tana y los camiones que suben del puerto.',
      ]},
    ],
    pratique: [
      ['Distancia desde Tana', 'Unos 150 km por la RN2, 3 a 4 h de carretera'],
      ['Estancia recomendada', '1 noche mínimo, 2 noches para Mantadia'],
      ['Mejor época', 'Todo el año; de septiembre a diciembre suele ser más seco y agradable'],
      ['Entrada y guía', 'Guía local obligatorio. ' + tarifas],
      ['Dónde dormir', 'Lodges y hoteles en el pueblo de Andasibe, para todos los presupuestos'],
    ],
  },

  isalo: {
    sections: [
      { h: 'Un decorado de wéstern en el corazón del Sur', p: [
        'Después de los arrozales de las Tierras Altas y el vacío de la meseta de Horombe, Isalo surge como una muralla de arenisca esculpida por el viento y el agua. El macizo está cortado por cañones profundos donde corren arroyos bordeados de palmeras y pandanos: en pocos minutos se pasa de un paisaje desértico a un oasis.',
        'Es uno de los parques más visitados de Madagascar, y lo merece. Gusta a todos: a los senderistas por sus rutas, a las familias por sus piscinas naturales, a los fotógrafos por sus colores al atardecer.',
      ]},
      { h: 'Las caminatas imprescindibles', p: [
        'La Piscina natural es el paseo clásico: unas horas de marcha por la meseta y después una poza de agua clara al pie de una pequeña cascada, rodeada de pandanos. Se puede nadar. El circuito suele combinar la Piscina natural con los miradores sobre el macizo.',
        'El Cañón de los Lémures y el Cañón de las Ratas se adentran en una garganta estrecha y fresca. A menudo se ven lémures pardos y sifakas de Verreaux saltando de árbol en árbol. Para buenos caminantes hay circuitos de un día entero e incluso travesías de varios días con noches en tienda.',
        'Al final del día todo el mundo se reúne en la Ventana de Isalo, un arco natural en la roca a través del cual se ve ponerse el sol. Le llevo en coche, casi no hay que caminar.',
      ]},
      { h: 'Ranohira, el pueblo base', p: [
        'El pueblo de Ranohira, en la RN7, es la puerta del parque: allí se paga la entrada y se conoce al guía. El alojamiento va desde la pequeña casa de huéspedes hasta el lodge de categoría, algunos entre las rocas con vistas magníficas.',
        'Aconsejo dos noches: un día completo en el parque y medio día para la Ventana y descansar. Con una sola noche se ve solo una parte de Isalo y uno se va con ganas de más.',
      ]},
      { h: 'Calor y organización', p: [
        'Hace mucho calor a mediodía, sobre todo de octubre a marzo. Salimos temprano, con mucha agua, sombrero y crema solar. El calzado de montaña cerrado es imprescindible, los senderos son pedregosos. Le espero al final de la caminata con agua fresca.',
      ]},
    ],
    pratique: [
      ['Acceso', 'En la RN7, unos 240 km antes de Tulear; entrada del parque en Ranohira'],
      ['Estancia recomendada', '2 noches en Ranohira'],
      ['Mejor época', 'De abril a noviembre; mucho calor de diciembre a marzo'],
      ['Entrada y guía', 'Guía local obligatorio. ' + tarifas],
      ['Qué llevar', 'Agua, sombrero, crema solar, bañador, calzado cerrado'],
    ],
  },

  'tsingy-de-bemaraha': {
    sections: [
      { h: 'Un bosque de piedra Patrimonio de la UNESCO', p: [
        'Los Tsingy de Bemaraha son una inmensa meseta caliza que el agua de lluvia ha excavado durante millones de años hasta formar agujas afiladas como cuchillas. «Tsingy» significaría «donde no se puede caminar descalzo». El sitio es Patrimonio Mundial de la UNESCO y, para muchos viajeros, el momento cumbre del viaje.',
        'El pueblo de Bekopaka, a orillas del río Manambolo, es la base para visitar el parque. Hay que quedarse al menos dos noches para hacer los dos grandes circuitos sin prisas.',
      ]},
      { h: 'Grandes Tsingy y Pequeños Tsingy', p: [
        'Los Grandes Tsingy están a una hora de pista al norte de Bekopaka. El circuito es aéreo: se avanza con arnés por tramos de vía ferrata, se suben escaleras, se cruzan puentes colgantes sobre grietas y se llega a miradores que dominan un mar de agujas grises. Hace falta buena forma física y no tener vértigo.',
        'Los Pequeños Tsingy, muy cerca del pueblo, son más accesibles y ya dan una muy buena idea del lugar. Son adecuados para familias y para quien no quiere vía ferrata. Muchos añaden un descenso en piragua por las gargantas del Manambolo, entre acantilados y cuevas.',
        'En el bosque seco del parque viven los sifakas de Decken, completamente blancos, lémures pardos y numerosas aves.',
      ]},
      { h: 'El acceso: una auténtica aventura en 4x4', p: [
        'Desde Morondava se sube hacia el norte por la pista: unos 200 km, una larga jornada de 8 a 10 horas. Se cruza el Tsiribihina en transbordador en Belo-sur-Tsiribihina y luego el Manambolo justo antes de Bekopaka. La pista es polvorienta y a veces está muy rota: un 4x4 en buen estado con un chófer que la conozca es imprescindible.',
        'Se puede partir el trayecto durmiendo cerca del bosque de Kirindy o en Belo-sur-Tsiribihina. En total, cuente al menos cuatro días ida y vuelta desde Morondava, y una semana desde Tana por carretera.',
      ]},
      { h: '¿Cuándo ir?', p: [
        'El parque solo es accesible en la estación seca, normalmente de mayo a mediados de noviembre. La apertura depende del estado de la pista después de la temporada de lluvias: a principios de mayo algunos circuitos pueden seguir cerrados y los hoteles de gama alta a veces abren más tarde. De diciembre a abril la pista suele ser impracticable. Cada año compruebo las fechas exactas antes de confirmar un circuito.',
      ]},
    ],
    pratique: [
      ['Acceso', 'Desde Morondava: unos 200 km de pista, 8 a 10 h en 4x4, 2 cruces en transbordador'],
      ['Estancia recomendada', 'Al menos 4 días ida y vuelta desde Morondava, con 2 noches en Bekopaka'],
      ['Temporada', 'Solo estación seca, normalmente de mayo a mediados de noviembre (comprobar cada año)'],
      ['Entrada y guía', 'Guía obligatorio; la entrada de los Tsingy es más cara que la de otros parques. ' + tarifas],
      ['Qué llevar', 'Guantes, calzado cerrado con buena suela, linterna frontal, agua'],
    ],
  },

  'allee-des-baobabs': {
    sections: [
      { h: 'La imagen de Madagascar', p: [
        'A unos veinte kilómetros de Morondava, una pista de tierra roja pasa entre una veintena de baobabs gigantes alineados. Son Adansonia grandidieri, la especie más majestuosa de los baobabs malgaches, con troncos lisos y rectos de más de 25 metros. Algunos tendrían varios siglos. El lugar está protegido como monumento natural.',
        'Los baobabs son los supervivientes de un antiguo bosque denso, talado con el tiempo para los cultivos. Siguen en pie entre arrozales y campos, lo que refuerza aún más su silueta.',
      ]},
      { h: '¿Atardecer o amanecer?', p: [
        'El atardecer es el momento más famoso: los troncos se vuelven naranjas, el cielo se enciende detrás de los árboles y las carretas de cebúes pasan por la pista. Pero también es el momento en que está todo el mundo.',
        'Mi consejo: vuelva al amanecer. Hay muy poca gente, la luz es suave y los reflejos en las charcas después de la temporada de lluvias son magníficos. Los fotógrafos suelen preferir la mañana.',
      ]},
      { h: 'Alrededor de la Avenida', p: [
        'A pocos kilómetros están los «Baobabs enamorados», dos troncos entrelazados con una bonita leyenda, y el baobab sagrado, rodeado de ofrendas, que se visita con respeto siguiendo las indicaciones de los vecinos.',
        'La Avenida está en la ruta de Kirindy y los Tsingy: se suele visitar la primera tarde, al llegar a Morondava, y se vuelve a cruzar al salir hacia el norte. También combina bien con un paseo en piragua por los manglares de Morondava.',
      ]},
      { h: '¿Hace falta un 4x4?', p: [
        'No, a la Avenida se llega en coche desde Morondava por una carretera en buen estado y luego unos kilómetros de pista. El 4x4 es imprescindible en cuanto se sigue hacia Kirindy, Belo-sur-Tsiribihina o los Tsingy, y para la gran pista costera hacia Belo-sur-Mer.',
      ]},
    ],
    pratique: [
      ['Acceso', 'Unos 20 km al norte de Morondava, 30 a 45 min'],
      ['Momento ideal', 'Amanecer (tranquilo) o atardecer (ambiente)'],
      ['Duración', '1 a 2 horas en el lugar'],
      ['Vehículo', 'Basta un coche; 4x4 para seguir hacia Kirindy y los Tsingy'],
      ['Respeto', 'No subirse a los árboles ni a las tumbas; pedir permiso antes de fotografiar a la gente'],
    ],
  },

  ranomafana: {
    sections: [
      { h: 'La selva a un paso de la RN7', p: [
        'Ranomafana significa «agua caliente» en malgache, por las fuentes termales del pueblo. El parque nacional protege una selva de montaña, Patrimonio Mundial de la UNESCO junto con las demás selvas de Atsinanana. Se creó tras el descubrimiento, en 1986, del lémur dorado del bambú, una especie desconocida hasta entonces.',
        'Dejamos la RN7 después de Ambositra y en pocos kilómetros el paisaje cambia por completo: las colinas peladas dejan paso a un bosque denso, torrentes y cascadas.',
      ]},
      { h: 'Lo que se ve', p: [
        'Con un guía local se buscan los lémures del bambú (el dorado y el gran lémur del bambú), el sifaka de Milne-Edwards, los lémures de vientre rojo y los lémures pardos. El bosque es también un paraíso para camaleones, ranas y aves.',
        'El paseo nocturno, por la carretera en el borde del parque, es un gran momento: los guías encuentran camaleones dormidos, geckos de cola de hoja casi invisibles y lémures ratón que salen a comer.',
      ]},
      { h: '¿Cuánto tiempo quedarse?', p: [
        'Dos noches es lo ideal: se llega por la tarde para el paseo nocturno, se dedica la mañana siguiente al parque y se disfruta de las piscinas de agua caliente del pueblo al final del día. Los circuitos van de dos horas a un día entero, según su forma física.',
        'Ranomafana es también una buena base para las plantaciones de té de Sahambavy y la ciudad alta de Fianarantsoa, a unas dos horas de carretera.',
      ]},
      { h: 'Preparar la visita', p: [
        'Llueve a menudo, incluso en la estación seca: lleve chaqueta impermeable y calzado que agarre, los senderos son resbaladizos y empinados. En la estación húmeda hay sanguijuelas: calcetines altos y pantalón por dentro. Salga temprano, los lémures están más activos.',
      ]},
    ],
    pratique: [
      ['Acceso', 'Desvío por la RN25 desde la RN7, entre Ambositra y Fianarantsoa'],
      ['Estancia recomendada', '2 noches'],
      ['Mejor época', 'De abril a diciembre; más lluvia de enero a marzo'],
      ['Entrada y guía', 'Guía local obligatorio. ' + tarifas],
      ['Qué llevar', 'Chaqueta de lluvia, calzado de montaña, linterna para la noche'],
    ],
  },

  'nosy-be': {
    sections: [
      { h: 'La isla de los perfumes', p: [
        'Nosy Be es la gran isla del noroeste, conocida por sus playas, sus aguas cálidas y el aroma del ylang-ylang, cuyas flores se usan en perfumería. Es el destino de playa más desarrollado de Madagascar, con hoteles para todos los presupuestos, y el punto de partida de muchas excursiones en barco.',
        'La mayoría de los viajeros llega en avión. Con Tripack también puede ir por carretera desde Tana: un verdadero viaje de una semana por el oeste y el norte, que termina en barco.',
      ]},
      { h: '¿Qué hacer en Nosy Be?', p: [
        'Subir al Mont Passot, el punto más alto de la isla, para ver el atardecer sobre los lagos de cráter. Visitar las destilerías de ylang-ylang y las plantaciones de vainilla y pimienta. Pasear por el parque nacional de Lokobe, un bosque primario donde viven lémures negros y camaleones pantera.',
        'Alrededor de la isla, las excursiones en barco llevan a Nosy Komba, la isla de los lémures, a Nosy Tanikely, reserva marina ideal para hacer snorkel con tortugas, y a Nosy Iranja y su banco de arena. A final de año suelen verse tiburones ballena mar adentro: infórmese allí sobre la temporada.',
      ]},
      { h: 'La ruta desde Tana', p: [
        'Por carretera son unos 1.100 km. Se pasa por el parque de Ankarafantsika y sus bosques secos, la ciudad portuaria de Mahajanga y su circo rojo, y luego la RN6 hasta Ambanja y el valle del Sambirano, donde crece el mejor cacao de la isla. El coche se queda en el puerto de Ankify, desde donde una lancha rápida llega a Hell-Ville en unos 45 minutos.',
        'Parte de la RN6 está muy deteriorada: se recomienda un 4x4 y la ruta se hace en la estación seca. Le dejo en el barco y puedo recogerle a la vuelta para seguir hacia Diego-Suarez o volver a Tana.',
      ]},
      { h: '¿Cuántos días?', p: [
        'En la isla, cuente al menos cuatro o cinco días para disfrutar de las playas y hacer dos o tres excursiones en barco. Con la ruta desde Tana, un viaje completo cabe en dos semanas.',
      ]},
    ],
    pratique: [
      ['Acceso', 'Avión desde Tana, o carretera hasta Ankify (unos 1.100 km) y luego barco (≈ 45 min)'],
      ['Estancia recomendada', '4 a 5 días en la isla; 5 a 6 días de carretera desde Tana'],
      ['Mejor época', 'De abril a diciembre; temporada de lluvias de enero a marzo'],
      ['En la isla', 'El 4x4 se queda en Ankify; en la isla, taxis, scooters y barcos'],
      ['Parque de Lokobe', 'Guía obligatorio. ' + tarifas],
    ],
  },

  morondava: {
    sections: [
      { h: 'La capital del Menabe', p: [
        'Morondava es una pequeña ciudad costera, calurosa y tranquila, a orillas del canal de Mozambique. Es la capital de la región del Menabe y la base de las mejores excursiones del oeste: la Avenida de los Baobabs, el bosque de Kirindy, los Tsingy de Bemaraha y, al sur, Belo-sur-Mer.',
        'La ciudad vive de la pesca, el arroz y el turismo. El paseo marítimo, la playa de Nosy Kely y los atardeceres sobre el océano la convierten en una etapa agradable entre dos jornadas de pista.',
      ]},
      { h: 'Qué ver en la ciudad y alrededores', p: [
        'La Avenida de los Baobabs, a unos veinte kilómetros, al atardecer o al amanecer. Los manglares, que se descubren en piragua con los pescadores. El pueblo pesquero de Betania, al otro lado del estuario, al que se llega en piragua. Las tumbas sakalava, decoradas con esculturas, que se visitan con respeto y con un guía.',
        'Más lejos, el bosque de Kirindy (unos 60 km) es el mejor lugar del país para ver la fosa, y el punto de partida hacia los Tsingy.',
      ]},
      { h: 'Llegar a Morondava', p: [
        'Por carretera desde Tana se baja por la RN7 hasta Antsirabe y luego por la RN34 y la RN35 pasando por Miandrivazo: unos 650 km, dos días de carretera con una etapa. La carretera está asfaltada, pero algunos tramos están deteriorados.',
        'También hay vuelos entre Tana y Morondava. Si llega en avión, puedo recogerle en el aeropuerto de Morondava (el trayecto de aproximación del vehículo se incluye entonces en el presupuesto), o dejarle allí al final del circuito para evitar la vuelta por carretera.',
        'Para los aventureros, la gran pista costera une Morondava con Tulear por Belo-sur-Mer, Morombe y Andavadoaka, en 4x4 y en la estación seca.',
      ]},
    ],
    pratique: [
      ['Distancia desde Tana', 'Unos 650 km, 2 días de carretera; hay vuelos nacionales'],
      ['Estancia recomendada', '2 noches para la ciudad y los baobabs; 5 a 6 días con los Tsingy'],
      ['Mejor época', 'De abril a noviembre; pistas difíciles en la temporada de lluvias'],
      ['Vehículo', 'Coche hasta Morondava; 4x4 para Kirindy, los Tsingy y Belo-sur-Mer'],
      ['Ver también', 'Páginas Avenida de los Baobabs, Kirindy, Tsingy de Bemaraha y Belo-sur-Mer'],
    ],
  },

  antsirabe: {
    sections: [
      { h: 'La ciudad termal de las Tierras Altas', p: [
        'A 1.500 metros de altitud, Antsirabe es una ciudad de clima fresco, fundada a finales del siglo XIX por misioneros noruegos atraídos por sus fuentes termales. Sus grandes avenidas, su antiguo hotel de las termas y su estación le dan un encanto algo anticuado, y la ciudad está llena de rickshaws de colores.',
        'Es la primera gran etapa de la RN7, a unos 170 km de Tana, y el lugar ideal para una primera noche tras llegar a Madagascar.',
      ]},
      { h: 'Los artesanos de Antsirabe', p: [
        'Antsirabe es la ciudad del ingenio y el reciclaje. En rickshaw se visitan los talleres donde se fabrican objetos de cuerno de cebú, caramelos artesanales, miniaturas de bicicletas y rickshaws con latas recicladas, bordados y piedras talladas.',
        'Es la mejor forma de descubrir la ciudad y apoyar a las familias de artesanos. Negocie amablemente el precio del rickshaw antes de subir y deje propina si el conductor ha sido simpático.',
      ]},
      { h: 'Los lagos de cráter', p: [
        'La región es volcánica. El lago Tritriva, a unos veinte kilómetros, es un lago de cráter de aguas oscuras rodeado de paredes abruptas y de leyendas de amores imposibles. Rodearlo a pie lleva aproximadamente una hora. El lago Andraikiba, más grande y abierto, invita a un paseo tranquilo.',
        'El mercado de Antsirabe, muy animado, es también la ocasión de descubrir las frutas, verduras y especias de las Tierras Altas.',
      ]},
      { h: 'Mis consejos', p: [
        'Las noches son frescas, incluso frías de junio a agosto: un forro polar es imprescindible. Si tiene tiempo, prevea dos noches para los lagos y los artesanos sin prisas. En la ruta desde Tana siempre paramos en Ambatolampy con los fundidores de aluminio.',
      ]},
    ],
    pratique: [
      ['Distancia desde Tana', 'Unos 170 km por la RN7, 3 a 4 h de carretera'],
      ['Estancia recomendada', '1 a 2 noches'],
      ['Clima', 'Fresco todo el año, frío por la noche de junio a agosto'],
      ['Imprescindible', 'Ruta de los artesanos en rickshaw, lago Tritriva'],
      ['Siguiente etapa', 'Ambositra (≈ 90 km) y después Ranomafana'],
    ],
  },

  'belo-sur-mer': {
    sections: [
      { h: 'El pueblo de los carpinteros de ribera', p: [
        'Belo-sur-Mer es un pueblo vezo al final de una pista de arena, a unos 80 km al sur de Morondava. En la playa, los carpinteros siguen construyendo a mano grandes goletas de madera, sin planos, con técnicas heredadas de marineros llegados de lejos hace dos siglos. Ver esos cascos gigantes apoyados en la arena es un espectáculo único.',
        'El pueblo vive al ritmo del mar y las mareas: pesca, salinas, cabotaje. No hay grandes hoteles ni multitudes, solo algunos alojamientos sencillos y un ambiente fuera del tiempo.',
      ]},
      { h: '¿Qué hacer en Belo-sur-Mer?', p: [
        'Visitar los astilleros y charlar con los carpinteros. Pasear por las salinas, donde la sal se recoge a mano. Salir en piragua hacia los islotes para hacer snorkel, disfrutar de playas desiertas y pescar con los vezo. Explorar la laguna y los manglares.',
        'Justo al lado, el parque nacional de Kirindy-Mitea protege bosques secos, baobabs, lagos y dunas, con lémures, muchas aves y paisajes muy variados.',
      ]},
      { h: 'Cómo llegar', p: [
        'Desde Morondava hay que contar de cuatro a seis horas de pista de arena en 4x4, a veces con tramos delicados según las mareas y la temporada. Belo-sur-Mer es también una etapa de la gran pista costera entre Morondava y Tulear, por Morombe y Andavadoaka.',
        'Es mi pueblo preferido de la costa Oeste. Quédese al menos dos noches: el viaje es largo y el pueblo se descubre despacio. Para saberlo todo sobre el pueblo, el alojamiento y las actividades, consulte la web visitbelosurmer.com.',
      ]},
    ],
    pratique: [
      ['Acceso', 'Unos 80 km al sur de Morondava, 4 a 6 h de pista en 4x4'],
      ['Estancia recomendada', '2 noches mínimo'],
      ['Mejor época', 'De abril a noviembre (estación seca)'],
      ['Vehículo', '4x4 obligatorio'],
      ['Más información', 'visitbelosurmer.com, la web dedicada al pueblo'],
    ],
  },

  ifaty: {
    sections: [
      { h: 'La playa después de la carretera', p: [
        'Después de una semana en la RN7, Ifaty y Mangily son la recompensa: pueblos de pescadores vezo, playas de arena blanca y agua turquesa protegida por una barrera de coral. Están a una hora al norte de Tulear por carretera asfaltada.',
        'El ambiente es relajado, con hoteles para todos los presupuestos, pequeños restaurantes de pescado y piraguas con balancín que salen al amanecer.',
      ]},
      { h: 'El bosque espinoso de Reniala', p: [
        'Detrás de las dunas crece un bosque único en el mundo: el bosque espinoso del suroeste. La reserva de Reniala protege baobabs en forma de botella, didiereáceas erizadas de espinas y multitud de plantas adaptadas a la sequía. Se visita con guía, preferiblemente temprano, cuando las aves están activas y el calor es soportable.',
        'Es también un excelente lugar para observar aves, con varias especies que solo se ven en el suroeste de Madagascar.',
      ]},
      { h: 'Mar y actividades', p: [
        'Snorkel y buceo en el arrecife, salidas en piragua con los pescadores y, aproximadamente de julio a septiembre, observación de ballenas jorobadas que suben por el canal de Mozambique (la temporada exacta varía, infórmese allí). Por la noche, el atardecer sobre el océano cierra el día de maravilla.',
        'El mar es más agradable con marea alta: los centros de buceo y los hoteles publican los horarios de las mareas.',
      ]},
      { h: '¿Ifaty o Anakao?', p: [
        'A Ifaty se llega en coche y ofrece más opciones de alojamiento. A Anakao, al sur de Tulear, se llega en barco y tiene un aire más salvaje, con el islote de Nosy Ve. Los dos son buenas opciones para terminar la RN7; le aconsejo según sus gustos.',
      ]},
    ],
    pratique: [
      ['Acceso', 'A 1 h al norte de Tulear, carretera asfaltada'],
      ['Estancia recomendada', '2 a 3 noches para descansar después de la RN7'],
      ['Mejor época', 'De abril a noviembre; ballenas aproximadamente de julio a septiembre'],
      ['Imprescindible', 'Bosque de Reniala temprano, snorkel en el arrecife'],
      ['Regreso', 'Carretera hacia Tana o vuelo desde Tulear'],
    ],
  },

  kirindy: {
    sections: [
      { h: 'El reino de la fosa', p: [
        'El bosque de Kirindy es un bosque seco caducifolio a unos 60 km al norte de Morondava. Se gestiona desde hace tiempo para la investigación y el ecoturismo, y es uno de los mejores lugares de Madagascar para observar la fosa, el mayor depredador de la isla, una especie de gran felino que no lo es.',
        'La fosa es más fácil de ver en la estación seca, sobre todo a final de año, época de reproducción, cuando a veces se acerca a las instalaciones del lugar.',
      ]},
      { h: 'De día y de noche', p: [
        'De día se camina por senderos llanos en busca de sifakas de Verreaux, lémures de frente roja y numerosas aves. En la estación seca los árboles pierden las hojas y el bosque toma tonos dorados; hay baobabs por todas partes.',
        'De noche es otro bosque. Se puede ver el lémur ratón de Madame Berthe, uno de los primates más pequeños del mundo, lémures nocturnos, camaleones y a veces la rata saltadora gigante, una especie rara que solo vive en esta región.',
      ]},
      { h: 'Organizar la visita', p: [
        'Kirindy está en la pista hacia los Tsingy de Bemaraha: se para a la ida o a la vuelta. Lo mejor es dormir allí una noche para el paseo nocturno y una caminata a la mañana siguiente. El alojamiento en el lugar y los alrededores es sencillo.',
        'La pista desde Morondava pasa por la Avenida de los Baobabs. Se recomienda mucho un 4x4, y el acceso se complica en la temporada de lluvias.',
      ]},
    ],
    pratique: [
      ['Acceso', 'Unos 60 km al norte de Morondava por la pista de los Tsingy'],
      ['Estancia recomendada', '1 noche para el paseo nocturno'],
      ['Mejor época', 'Estación seca, de abril a noviembre; la fosa es más visible a final de año'],
      ['Vehículo', '4x4 recomendado'],
      ['Visita', 'Guía obligatorio; compruebe las tarifas allí'],
    ],
  },
};

import type { GuideLong } from './types';

const mnp = 'Guía obligatorio; las tarifas de Madagascar National Parks se duplicaron el 1 de noviembre de 2026, compruebe el precio en la taquilla';

export const guideLong2: Record<string, GuideLong> = {
  antananarivo: {
    sections: [
      { h: 'Una capital sobre doce colinas', p: [
        'Antananarivo, a la que todos llaman Tana, se asienta sobre colinas entre las que se extienden arrozales, en plena ciudad. El Rova, el antiguo palacio de la reina, domina la ciudad alta; más abajo, la ciudad moderna se organiza en torno a la avenida de la Independencia y el barrio de Analakely.',
        'Muchos viajeros solo pasan por aquí, pero basta un día para captar su alma: la ciudad alta y sus casas de ladrillo, las escaleras animadas, los mercados y la vista desde el Rova sobre toda la llanura.',
      ]},
      { h: 'Excursiones alrededor de Tana', p: [
        'La colina real de Ambohimanga, Patrimonio de la UNESCO, está a una hora en coche al norte: es la cuna de la monarquía merina, con murallas, puertas de piedra y una vista magnífica. Al sur, la RN7 empieza con pueblos de artesanos y arrozales.',
        "Para un día de naturaleza, el Lemurs' Park, al oeste, permite ver lémures cerca de la capital. Y para el bosque y el indri, Andasibe está a unas tres horas por la RN2.",
      ]},
      { h: 'Moverse por Tana', p: [
        'El tráfico es el verdadero reto de la capital: cruzar la ciudad en hora punta puede llevar dos horas. Salgo temprano por la mañana y evito el centro a última hora de la tarde. Por la noche, mejor desplazarse en coche que a pie.',
      ]},
    ],
    pratique: [
      ['Aeropuerto', 'Ivato, de 30 min a más de una hora del centro según el tráfico'],
      ['Estancia recomendada', '1 día para la ciudad, 1 día para Ambohimanga'],
      ['Imprescindible', 'El Rova, la ciudad alta, Ambohimanga'],
      ['Consejo', 'Salir temprano, evitar la hora punta'],
    ],
  },
  ambatolampy: {
    sections: [
      { h: 'La ciudad de las ollas', p: [
        'Ambatolampy es la primera parada de verdad de la RN7, a unos 70 km de Tana. Toda la ciudad vive de la fundición de aluminio: se recogen latas, piezas de motor y cacerolas viejas, se funden y el metal se vierte en moldes de arena para fabricar las ollas que hay en todas las cocinas de Madagascar.',
        'Visitar un taller impresiona: todo se hace a mano, con fuego de leña o carbón, a una velocidad asombrosa. Los artesanos también hacen pequeños recuerdos, cebúes, baobabs o llaveros, fundidos delante de usted.',
      ]},
      { h: 'Alrededor de la ciudad', p: [
        'La zona está cubierta de pinares y arrozales, con mercados de colores junto a la carretera. Una pausa aquí corta el trayecto entre Tana y Antsirabe, y es el lugar ideal para comprar el mejor recuerdo de la RN7: una pequeña olla.',
      ]},
    ],
    pratique: [
      ['Distancia desde Tana', 'Unos 70 km por la RN7, 1 h 30 a 2 h'],
      ['Duración de la visita', '30 min a 1 h'],
      ['Imprescindible', 'Un taller de fundición de aluminio'],
      ['Respeto', 'Pedir permiso antes de fotografiar a los artesanos'],
    ],
  },
  ambositra: {
    sections: [
      { h: 'La capital de la madera', p: [
        'Ambositra es la ciudad de la marquetería y la talla en madera. En la calle principal, tiendas y talleres ofrecen cajas, cuadros y objetos de madera preciosa con incrustaciones, hechos a mano. Las fachadas talladas de las casas marcan el tono desde la llegada.',
        'Es una etapa corta entre Antsirabe y Ranomafana, ideal para una noche o una comida, con una bonita vista sobre los arrozales en terrazas.',
      ]},
      { h: 'Los pueblos zafimaniry', p: [
        'En las montañas del este viven los zafimaniry, cuyo saber hacer con la madera es Patrimonio Inmaterial de la UNESCO: sus casas se construyen sin un solo clavo, y cada puerta y ventana está tallada con motivos geométricos.',
        'A estos pueblos solo se llega a pie, tras una carretera hasta Antoetra: cuente al menos un día, y varios días para un verdadero trekking. Le busco un guía local de confianza.',
      ]},
    ],
    pratique: [
      ['Acceso', 'En la RN7, unos 90 km al sur de Antsirabe'],
      ['Estancia recomendada', '1 noche; 1 a 3 días más para los zafimaniry'],
      ['Imprescindible', 'Los talleres de marquetería'],
      ['Qué llevar', 'Buen calzado para los pueblos zafimaniry'],
    ],
  },
  fianarantsoa: {
    sections: [
      { h: 'La ciudad donde se aprende el bien', p: [
        'Fianarantsoa, «donde se aprende el bien», es la capital intelectual y religiosa del país, con sus escuelas, iglesias y universidad. Su ciudad alta, encaramada en una colina, es uno de los conjuntos históricos más bonitos de Madagascar: callejuelas empedradas, casas de ladrillo con balcones y vistas a los arrozales.',
        'A última hora de la tarde la luz sobre los tejados y la llanura es magnífica: es el momento de subir a pie a la ciudad alta.',
      ]},
      { h: 'Té, vino y tren', p: [
        'Alrededor de la ciudad se visitan las plantaciones de té de Sahambavy, en colinas de un verde intenso, y fincas vinícolas que producen un vino local sorprendente. Fianarantsoa es también el punto de salida del tren FCE hacia Manakara, en la costa Este, una línea mítica de horarios irregulares: infórmese justo antes del viaje.',
      ]},
    ],
    pratique: [
      ['Acceso', 'En la RN7, unas 2 h después de Ranomafana'],
      ['Estancia recomendada', 'Medio día a 1 noche'],
      ['Imprescindible', 'La ciudad alta al final del día, el té de Sahambavy'],
      ['Tren FCE', 'Hacia Manakara; horarios a comprobar allí'],
    ],
  },
  ambalavao: {
    sections: [
      { h: 'Papel antemoro y mercado de cebúes', p: [
        'Ambalavao marca el final de las Tierras Altas y la entrada en el Sur. Aquí se fabrica el papel antemoro, a partir de corteza de árbol, decorado con flores secas prensadas en la pasta: una artesanía antigua que se ve nacer en los talleres.',
        'La ciudad acoge también uno de los mayores mercados de cebúes del país, adonde los ganaderos llegan tras días de camino. El día de mercado es a mitad de semana: compruebo el día exacto por usted.',
      ]},
      { h: 'La reserva de Anja', p: [
        'A pocos kilómetros al sur, la reserva comunitaria de Anja está gestionada por los vecinos. Al pie de enormes bloques de granito viven cientos de lémures de cola anillada, fáciles de observar, sobre todo por la mañana cuando toman el sol en las rocas.',
        'Su entrada va directamente al pueblo: un buen ejemplo de turismo que beneficia a los habitantes.',
      ]},
    ],
    pratique: [
      ['Acceso', 'En la RN7, a 1 h al sur de Fianarantsoa'],
      ['Duración', '2 a 3 h para Anja, 1 h para el papel antemoro'],
      ['Mejor momento', 'Por la mañana para los lémures de cola anillada'],
      ['Anja', 'Reserva comunitaria, guía local en el lugar'],
    ],
  },
  'plateau-horombe': {
    sections: [
      { h: 'El salvaje oeste malgache', p: [
        'Después de Ihosy, la RN7 avanza en línea recta por la meseta de Horombe, una inmensa sabana de hierba dorada sin árboles y casi sin pueblos durante decenas de kilómetros. Es uno de los paisajes más impactantes del viaje: un cielo inmenso, rebaños de cebúes y, a lo lejos, las primeras crestas de Isalo.',
        'Llenamos el depósito en Ihosy, porque después no hay nada. Siempre paro para una foto en medio de la nada: un verdadero momento de silencio y espacio.',
      ]},
    ],
    pratique: [
      ['Ubicación', 'En la RN7 entre Ihosy y Ranohira (Isalo)'],
      ['Tiempo de travesía', 'Unas 1 h 30 a 2 h'],
      ['Consejo', 'Llenar el depósito y comprar agua en Ihosy'],
      ['Foto', 'Mejor luz al final del día'],
    ],
  },
  ilakaka: {
    sections: [
      { h: 'La ciudad del zafiro', p: [
        'Ilakaka apenas existía antes de 1998. El descubrimiento de zafiros en el río desató una fiebre: decenas de miles de buscadores llegaron de todo el país y del extranjero, y nació una ciudad junto a la RN7, con mostradores de compradores y letreros de colores.',
        'Se cruza Ilakaka entre Isalo y Tulear. Se puede parar a ver los pozos de los mineros y el ambiente único de la ciudad, pero desconfíe de las piedras vendidas en la calle: sin certificado, mejor abstenerse.',
      ]},
    ],
    pratique: [
      ['Ubicación', 'En la RN7, unos 30 min después de Ranohira'],
      ['Duración', 'Parada de 30 min'],
      ['Compra de piedras', 'Solo en tienda con certificado'],
      ['Después', 'Zombitse y luego Tulear'],
    ],
  },
  zombitse: {
    sections: [
      { h: 'Un bosque de transición', p: [
        'El parque nacional de Zombitse-Vohibasia protege un bosque poco común, de transición entre el bosque seco del Oeste y el bosque espinoso del Sur, junto a la RN7. Es un lugar clave para la observación de aves, con especies que casi no se ven en ningún otro sitio.',
        'Una caminata de una hora con guía basta para ver sifakas, lémures saltadores dormidos en los huecos de los árboles y bonitos baobabs. Es la pausa ideal entre Isalo y Tulear.',
      ]},
    ],
    pratique: [
      ['Ubicación', 'Junto a la RN7, entre Ilakaka y Sakaraha'],
      ['Duración', '1 a 2 h'],
      ['Mejor momento', 'Por la mañana, para las aves'],
      ['Entrada y guía', mnp],
    ],
  },
  tulear: {
    sections: [
      { h: 'El final de la RN7', p: [
        'Tulear (Toliara) es una ciudad calurosa y luminosa frente al canal de Mozambique. Es el final de la RN7 y la puerta de las playas del suroeste: Ifaty y Mangily al norte, Anakao al sur en barco. También es el punto de partida de la gran pista costera hacia Morondava.',
        'En la ciudad: el jardín botánico de Antsokay y su flora espinosa, el mercado de conchas y las puestas de sol sobre el océano. La ciudad tiene aeropuerto con vuelos a Tana, práctico para no rehacer toda la RN7.',
      ]},
      { h: 'Preparar lo que sigue', p: [
        'Si se sigue hacia el norte por la costa, aquí se prepara el 4x4: combustible, agua, piezas de recambio. La pista de arena requiere varios días con etapas en Andavadoaka, Morombe y Belo-sur-Mer, solo en la estación seca.',
      ]},
    ],
    pratique: [
      ['Distancia desde Tana', 'Unos 930 km por la RN7'],
      ['Estancia recomendada', '1 noche antes de las playas o la pista'],
      ['Imprescindible', 'Jardín de Antsokay, puesta de sol'],
      ['Regreso', 'Vuelos Tulear–Tana posibles'],
    ],
  },
  anakao: {
    sections: [
      { h: 'Un pueblo vezo junto al mar', p: [
        'Anakao es un pueblo de pescadores vezo al sur de Tulear, al que se llega en barco. El ritmo se ralentiza enseguida: una playa inmensa, piraguas con balancín y alojamientos sencillos o con encanto frente al océano.',
        'Enfrente, el islote de Nosy Ve es un lugar de anidación del rabijunco etéreo de cola roja, una magnífica ave marina, y un buen sitio para el snorkel. También se puede salir en piragua con los pescadores o explorar la costa hasta Saint-Augustin.',
      ]},
      { h: 'Cómo llegar', p: [
        'El barco sale del puerto de Tulear; la travesía dura una hora según el mar. Le dejo en el puerto y le recojo a la vuelta: no hace falta coche durante sus días de playa.',
      ]},
    ],
    pratique: [
      ['Acceso', 'Barco desde Tulear, alrededor de 1 h'],
      ['Estancia recomendada', '2 a 3 noches'],
      ['Imprescindible', 'Nosy Ve y sus aves marinas'],
      ['Vehículo', 'El 4x4 se queda en Tulear'],
    ],
  },
  andavadoaka: {
    sections: [
      { h: 'El fin del mundo', p: [
        'Andavadoaka es un pueblo vezo aislado en la pista de arena entre Tulear y Morombe. Lagunas turquesa, arrecifes de coral, baobabs y casi ningún turista: es una de las etapas más bonitas de la costa Oeste. El pueblo es conocido por la protección del mar gestionada por las comunidades.',
        'Se viene por la calma, el buceo y el snorkel, los paseos en piragua y las puestas de sol sobre el océano.',
      ]},
      { h: 'La pista', p: [
        'La pista desde Tulear es larga y arenosa: salimos al amanecer, solo en 4x4 y en la estación seca. Andavadoaka es una etapa natural de la gran travesía costera Tulear–Morondava.',
      ]},
    ],
    pratique: [
      ['Acceso', 'Pista de arena desde Tulear, un largo día en 4x4'],
      ['Estancia recomendada', '2 noches'],
      ['Temporada', 'De abril a noviembre'],
      ['Vehículo', '4x4 obligatorio'],
    ],
  },
  morombe: {
    sections: [
      { h: 'Etapa antes del Mangoky', p: [
        'Morombe es la última ciudad de verdad antes de la gran travesía hacia el norte. Pequeña ciudad costera con sus dhows y su paseo marítimo, permite abastecerse y descansar entre dos días de pista.',
        'Justo después hay que cruzar el Mangoky, uno de los ríos más grandes de la isla. El cruce depende del nivel del agua y de la temporada: siempre lo compruebo la víspera con los barqueros. Alrededor de la ciudad, bonitos bosques de baobabs merecen una parada.',
      ]},
    ],
    pratique: [
      ['Ubicación', 'En la pista costera entre Andavadoaka y Belo-sur-Mer'],
      ['Estancia recomendada', '1 noche'],
      ['Punto clave', 'Cruce del Mangoky, comprobar la víspera'],
      ['Vehículo', '4x4 obligatorio'],
    ],
  },
  'belo-sur-tsiribihina': {
    sections: [
      { h: 'El paso del río', p: [
        'Belo-sur-Tsiribihina es la etapa obligada en la ruta de los Tsingy. Aquí el 4x4 sube a un transbordador para cruzar el ancho río Tsiribihina entre las piraguas: un momento de aventura que todos los viajeros recuerdan.',
        'También es el punto de llegada de los descensos del río en piragua o barcaza desde Miandrivazo, otra forma original de llegar al Oeste. El transbordador tiene sus horarios y sus caprichos: dejamos margen y comemos en el pueblo.',
      ]},
    ],
    pratique: [
      ['Ubicación', 'En la pista Morondava–Tsingy, unos 100 km al norte de Morondava'],
      ['Cruce', 'Transbordador sobre el Tsiribihina'],
      ['Temporada', 'Estación seca para la pista'],
      ['Vehículo', '4x4 obligatorio'],
    ],
  },
  mananjary: {
    sections: [
      { h: 'La costa Este y el canal', p: [
        'Mananjary es una ciudad de la costa Este, a orillas del océano Índico y del canal de Pangalanes. Es tierra antambahoaka, famosa por el Sambatra, una gran ceremonia colectiva de circuncisión que se celebra aproximadamente cada siete años y reúne a miles de personas.',
        'Se llega bajando desde Ranomafana por la carretera del Este. La ciudad ofrece bonitos paseos por la playa (el baño suele ser peligroso por las corrientes) y por el canal en piragua.',
      ]},
    ],
    pratique: [
      ['Acceso', 'Por carretera desde Ranomafana'],
      ['Estancia recomendada', '1 noche'],
      ['Imprescindible', 'Un paseo en piragua por el Pangalanes'],
      ['Mar', 'Baño a menudo peligroso (corrientes)'],
    ],
  },
  'canal-des-pangalanes': {
    sections: [
      { h: 'Una vía de agua de más de 600 km', p: [
        'El canal de Pangalanes bordea la costa Este de Madagascar durante cientos de kilómetros, uniendo lagos, lagunas y ríos con tramos excavados a mano. Los pueblos de pescadores se suceden en sus orillas, entre cocoteros, ravenalas y piraguas.',
        'Navegar por el canal es descubrir la vida de la costa Este al ritmo del agua: pesca, transporte de mercancías, niños bañándose. El paisaje es muy distinto al de las Tierras Altas y el Sur.',
      ]},
      { h: 'Cómo descubrirlo', p: [
        'Desde Manakara o Mananjary se hace un paseo en piragua de medio día o un día entero. Más al norte, algunos lodges junto al canal permiten pasar una o dos noches tranquilas. Le aconsejo según su itinerario.',
      ]},
    ],
    pratique: [
      ['Acceso', 'Desde Manakara, Mananjary o la región de Tamatave'],
      ['Duración', 'Medio día a 2 noches'],
      ['Mejor época', 'De abril a diciembre; más lluvia de enero a marzo'],
      ['Actividad', 'Piragua con un piragüero local'],
    ],
  },
  manakara: {
    sections: [
      { h: 'Final del tren y de la costa Este', p: [
        'Manakara es la ciudad de llegada del tren FCE desde Fianarantsoa y una etapa agradable de la costa Este. Su paseo marítimo, batido por las olas del océano Índico, y la desembocadura donde el canal de Pangalanes se une al mar la hacen muy fotogénica.',
        'Se hacen paseos en piragua por el canal, se visitan pueblos de pescadores y plantaciones de especias y frutas de los alrededores. El baño en el mar es peligroso, pero el canal ofrece momentos de calma.',
      ]},
    ],
    pratique: [
      ['Acceso', 'Por carretera (RN25 y RN12) o en el tren FCE desde Fianarantsoa'],
      ['Estancia recomendada', '1 a 2 noches'],
      ['Imprescindible', 'El canal de Pangalanes en piragua'],
      ['Mar', 'Baño peligroso'],
    ],
  },
  ankarafantsika: {
    sections: [
      { h: 'El bosque seco del Noroeste', p: [
        'El parque nacional de Ankarafantsika protege un gran bosque seco junto a la RN4, en la ruta de Mahajanga. Se ven fácilmente los sifakas de Coquerel, con su pelaje blanco y marrón, lémures pardos, muchas aves y, de noche, varias especies de lémures ratón.',
        'El lago Ravelobe, en el corazón del parque, alberga cocodrilos y atrae a las aves. Los senderos son llanos y fáciles, ideales para familias.',
      ]},
      { h: 'Una etapa en la ruta del Norte', p: [
        'Ankarafantsika es la primera gran etapa en la ruta de Tana a Mahajanga y Nosy Be. Una noche allí permite el paseo nocturno y una caminata a la mañana siguiente, cuando el calor aún es soportable.',
      ]},
    ],
    pratique: [
      ['Acceso', 'En la RN4, a unos 450 km de Tana'],
      ['Estancia recomendada', '1 noche'],
      ['Mejor época', 'De abril a noviembre'],
      ['Entrada y guía', mnp],
    ],
  },
  mahajanga: {
    sections: [
      { h: 'La ciudad portuaria del Noroeste', p: [
        'Mahajanga, o Majunga, es una ciudad portuaria calurosa y cosmopolita a orillas del canal de Mozambique. Su enorme baobab, plantado en medio de una rotonda cerca del paseo marítimo, es su símbolo. Por la tarde todos se reúnen en el paseo para la puesta de sol y las brochetas.',
        'La ciudad tiene una larga historia de comercio con África oriental, la India y el mundo árabe, que se ve en sus barrios antiguos y sus puertas talladas.',
      ]},
      { h: 'El Circo Rojo', p: [
        'A unos quince kilómetros, el Cirque Rouge es un anfiteatro de acantilados erosionados en tonos rojos, ocres y blancos, con chimeneas de hadas. Se visita a última hora de la tarde, cuando la luz enciende los colores, y se puede bajar hasta la playa.',
      ]},
    ],
    pratique: [
      ['Acceso', 'Por la RN4 desde Tana (unos 560 km) o vuelo nacional'],
      ['Estancia recomendada', '1 a 2 noches'],
      ['Imprescindible', 'El Cirque Rouge al final del día, el paseo marítimo'],
      ['Después', 'Ruta hacia Antsohihy, Ambanja y Nosy Be'],
    ],
  },
  antsohihy: {
    sections: [
      { h: 'Una etapa en la RN6', p: [
        'Antsohihy es una pequeña ciudad al fondo de una bahía, en la RN6 hacia el norte. Es una etapa de tránsito en la ruta de Nosy Be, útil para dividir un trayecto largo y descansar.',
        'La carretera alrededor de Antsohihy puede estar muy deteriorada según los años: aquí el 4x4 y la experiencia del chófer marcan la diferencia. Salimos temprano para conducir de día.',
      ]},
    ],
    pratique: [
      ['Ubicación', 'En la ruta Mahajanga–Ambanja (RN6)'],
      ['Duración', '1 noche de tránsito'],
      ['Carretera', 'Tramos deteriorados, 4x4 recomendado'],
      ['Temporada', 'Se recomienda la estación seca'],
    ],
  },
  ambanja: {
    sections: [
      { h: 'El valle del cacao', p: [
        'Ambanja es la puerta del valle del Sambirano, donde crecen algunos de los mejores cacaos del mundo, además de vainilla, pimienta e ylang-ylang. Visitar una plantación, ver las mazorcas en los árboles y probar los granos fermentados es un bonito descubrimiento antes de llegar a Nosy Be.',
        'A pocos kilómetros, el puerto de Ankify es el punto de embarque hacia Nosy Be. También se puede dormir allí frente al mar, con vistas a las islas.',
      ]},
    ],
    pratique: [
      ['Ubicación', 'En la RN6, a unos 20 km del puerto de Ankify'],
      ['Duración', '1 noche o medio día'],
      ['Imprescindible', 'Una plantación de cacao del Sambirano'],
      ['Después', 'Barco Ankify–Nosy Be (≈ 45 min)'],
    ],
  },
};

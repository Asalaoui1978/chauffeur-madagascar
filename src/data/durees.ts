// Pages « Madagascar en 2 / 3 semaines » : combinaisons des itinéraires existants, en 4 langues.
import type { Lang } from '../i18n';

type Option = { h: string; resume: string; etapes: string[]; itins: string[] };
type DureeText = { title: string; description: string; h1: string; short: string; intro: string[]; options: Option[]; conseils: string[]; faq: [string, string][] };
export type Duree = { slug: string; jours: number; photo: string; text: Record<Lang, DureeText> };

export const durees: Duree[] = [
  {
    slug: 'madagascar-2-semaines',
    jours: 14,
    photo: 'isalo',
    text: {
      fr: {
        title: 'Madagascar en 2 semaines avec chauffeur : 3 itinéraires testés',
        description: "Que faire à Madagascar en 2 semaines ? Trois circuits de 14 jours avec chauffeur : RN7 et Andasibe, côte Ouest et Tsingy, ou route du Nord jusqu'à Nosy Be.",
        h1: 'Madagascar en 2 semaines',
        short: 'Madagascar en 2 semaines',
        intro: [
          "Deux semaines, c'est la durée la plus courante pour un premier voyage à Madagascar. C'est assez pour une belle région, à condition de ne pas vouloir tout voir : l'île est plus grande que la France et les routes sont lentes. Mieux vaut choisir un axe et le faire bien.",
          "Voici les trois circuits de 14 jours que je conseille le plus souvent. Tous partent de Tana, et tous peuvent être adaptés à vos envies et à votre budget.",
        ],
        options: [
          { h: 'Option 1 : la RN7 et Andasibe (le grand classique)', resume: "Le meilleur choix pour un premier voyage : forêts et lémuriens, Hautes Terres, canyons de l'Isalo et plage pour finir. Possible toute l'année.", itins: ['rn7-tana-tulear'], etapes: [
            'Jours 1 à 3 : arrivée à Tana, puis Andasibe et ses indris (2 nuits)',
            'Jours 4 à 6 : Antsirabe, Ambositra, Ranomafana',
            'Jours 7 à 9 : Fianarantsoa, Anja, Isalo (2 nuits)',
            'Jours 10 à 13 : Tuléar, puis Ifaty ou Anakao',
            'Jour 14 : vol Tuléar–Tana et départ',
          ]},
          { h: "Option 2 : la côte Ouest et les Tsingy", resume: "Pour les amateurs d'aventure et de grands paysages : Allée des Baobabs, forêt de Kirindy, Tsingy de Bemaraha et Belo-sur-Mer. En saison sèche uniquement, en 4x4.", itins: ['cote-ouest-tsingy'], etapes: [
            'Jours 1 à 3 : Tana, Antsirabe, Miandrivazo, Morondava',
            "Jour 4 : l'Allée des Baobabs au coucher du soleil",
            'Jours 5 à 9 : Kirindy, Belo-sur-Tsiribihina, Tsingy de Bemaraha (2 nuits à Bekopaka), retour',
            'Jours 10 à 12 : Belo-sur-Mer et ses goélettes',
            'Jours 13 et 14 : Morondava, vol ou route vers Tana',
          ]},
          { h: 'Option 3 : la route du Nord jusqu\'à Nosy Be', resume: 'Forêts sèches, ville portuaire, vallée du cacao, puis une semaine de mer et d\'îles. Idéal pour finir le voyage les pieds dans l\'eau.', itins: ['tana-nosy-be'], etapes: [
            'Jours 1 à 2 : Tana, puis Ankarafantsika',
            'Jours 3 et 4 : Mahajanga et le Cirque rouge',
            'Jours 5 et 6 : Antsohihy, Ambanja et le cacao du Sambirano',
            'Jours 7 à 13 : bateau pour Nosy Be, plages et excursions en mer',
            'Jour 14 : vol Nosy Be–Tana ou départ international',
          ]},
        ],
        conseils: [
          "Ne prévoyez pas plus de 5 heures de route par jour en moyenne : on roule autour de 50 km/h et jamais de nuit.",
          "Les vols intérieurs (Tuléar, Morondava, Nosy Be) évitent de refaire la route au retour : je vous dépose à l'aéroport.",
          "Gardez une journée de marge pour les imprévus : bac, pluie, panne.",
        ],
        faq: [
          ['Peut-on faire la RN7 et les Tsingy en 2 semaines ?', "C'est très serré : il faudrait enchaîner les longues journées de route. En 2 semaines, je conseille de choisir l'un ou l'autre ; les deux ensemble se font bien en 3 semaines."],
          ['Quelle est la meilleure période pour 2 semaines à Madagascar ?', "D'avril à novembre pour la plupart des régions. Les Tsingy ne sont accessibles qu'en saison sèche, en général de mai à mi-novembre."],
          ['Faut-il un 4x4 pour un circuit de 2 semaines ?', "Pour la RN7, une voiture suffit, le 4x4 apporte du confort. Pour la côte Ouest, les Tsingy et la route du Nord, le 4x4 est indispensable."],
        ],
      },
      en: {
        title: 'Madagascar in 2 weeks with a driver: 3 tried-and-tested itineraries',
        description: 'What to do in Madagascar in 2 weeks? Three 14-day tours with a driver: RN7 and Andasibe, West coast and Tsingy, or the northern road to Nosy Be.',
        h1: 'Madagascar in 2 weeks',
        short: 'Madagascar in 2 weeks',
        intro: [
          "Two weeks is the most common length for a first trip to Madagascar. It's enough for one fine region, as long as you don't try to see everything: the island is bigger than France and the roads are slow. Better to choose one route and do it well.",
          'Here are the three 14-day tours I recommend most often. They all start in Tana and can all be adapted to your wishes and budget.',
        ],
        options: [
          { h: 'Option 1: the RN7 and Andasibe (the great classic)', resume: 'The best choice for a first trip: forests and lemurs, the Highlands, the Isalo canyons and a beach to finish. Possible all year round.', itins: ['rn7-tana-tulear'], etapes: [
            'Days 1 to 3: arrival in Tana, then Andasibe and its indris (2 nights)',
            'Days 4 to 6: Antsirabe, Ambositra, Ranomafana',
            'Days 7 to 9: Fianarantsoa, Anja, Isalo (2 nights)',
            'Days 10 to 13: Tulear, then Ifaty or Anakao',
            'Day 14: Tulear–Tana flight and departure',
          ]},
          { h: 'Option 2: the West coast and the Tsingy', resume: 'For lovers of adventure and big landscapes: the Avenue of the Baobabs, Kirindy forest, the Tsingy de Bemaraha and Belo-sur-Mer. Dry season only, by 4x4.', itins: ['cote-ouest-tsingy'], etapes: [
            'Days 1 to 3: Tana, Antsirabe, Miandrivazo, Morondava',
            'Day 4: the Avenue of the Baobabs at sunset',
            'Days 5 to 9: Kirindy, Belo-sur-Tsiribihina, Tsingy de Bemaraha (2 nights in Bekopaka), return',
            'Days 10 to 12: Belo-sur-Mer and its schooners',
            'Days 13 and 14: Morondava, flight or road to Tana',
          ]},
          { h: 'Option 3: the northern road to Nosy Be', resume: 'Dry forests, a port town, the cocoa valley, then a week of sea and islands. Ideal to end the trip with your feet in the water.', itins: ['tana-nosy-be'], etapes: [
            'Days 1 to 2: Tana, then Ankarafantsika',
            'Days 3 and 4: Mahajanga and the Red Circus',
            'Days 5 and 6: Antsohihy, Ambanja and Sambirano cocoa',
            'Days 7 to 13: boat to Nosy Be, beaches and sea trips',
            'Day 14: Nosy Be–Tana flight or international departure',
          ]},
        ],
        conseils: [
          'Plan no more than about 5 hours of driving a day on average: we drive at around 50 km/h and never at night.',
          'Domestic flights (Tulear, Morondava, Nosy Be) save driving back: I drop you at the airport.',
          'Keep a spare day for the unexpected: ferry, rain, breakdown.',
        ],
        faq: [
          ['Can you do the RN7 and the Tsingy in 2 weeks?', "It's very tight: you'd have to chain long driving days. In 2 weeks I suggest choosing one or the other; both together work well in 3 weeks."],
          ['What is the best time for 2 weeks in Madagascar?', 'April to November for most regions. The Tsingy are only accessible in the dry season, usually May to mid-November.'],
          ['Do you need a 4x4 for a 2-week tour?', 'For the RN7 a car is enough, a 4x4 adds comfort. For the West coast, the Tsingy and the northern road, a 4x4 is essential.'],
        ],
      },
      it: {
        title: 'Madagascar in 2 settimane con autista: 3 itinerari collaudati',
        description: 'Cosa fare in Madagascar in 2 settimane? Tre circuiti di 14 giorni con autista: RN7 e Andasibe, costa Ovest e Tsingy, o la strada del Nord fino a Nosy Be.',
        h1: 'Madagascar in 2 settimane',
        short: 'Madagascar in 2 settimane',
        intro: [
          "Due settimane è la durata più comune per un primo viaggio in Madagascar. Bastano per una bella regione, a patto di non voler vedere tutto: l'isola è più grande della Francia e le strade sono lente. Meglio scegliere un asse e farlo bene.",
          'Ecco i tre circuiti di 14 giorni che consiglio più spesso. Partono tutti da Tana e si possono adattare ai vostri desideri e al vostro budget.',
        ],
        options: [
          { h: 'Opzione 1: la RN7 e Andasibe (il grande classico)', resume: "La scelta migliore per un primo viaggio: foreste e lemuri, Altopiani, canyon dell'Isalo e mare per finire. Possibile tutto l'anno.", itins: ['rn7-tana-tulear'], etapes: [
            'Giorni 1-3: arrivo a Tana, poi Andasibe e i suoi indri (2 notti)',
            'Giorni 4-6: Antsirabe, Ambositra, Ranomafana',
            'Giorni 7-9: Fianarantsoa, Anja, Isalo (2 notti)',
            'Giorni 10-13: Tulear, poi Ifaty o Anakao',
            'Giorno 14: volo Tulear-Tana e partenza',
          ]},
          { h: 'Opzione 2: la costa Ovest e gli Tsingy', resume: "Per chi ama l'avventura e i grandi paesaggi: Viale dei Baobab, foresta di Kirindy, Tsingy de Bemaraha e Belo-sur-Mer. Solo nella stagione secca, in 4x4.", itins: ['cote-ouest-tsingy'], etapes: [
            'Giorni 1-3: Tana, Antsirabe, Miandrivazo, Morondava',
            'Giorno 4: il Viale dei Baobab al tramonto',
            'Giorni 5-9: Kirindy, Belo-sur-Tsiribihina, Tsingy de Bemaraha (2 notti a Bekopaka), ritorno',
            'Giorni 10-12: Belo-sur-Mer e le sue golette',
            'Giorni 13 e 14: Morondava, volo o strada per Tana',
          ]},
          { h: 'Opzione 3: la strada del Nord fino a Nosy Be', resume: 'Foreste secche, una città portuale, la valle del cacao, poi una settimana di mare e isole. Ideale per finire il viaggio con i piedi nell\'acqua.', itins: ['tana-nosy-be'], etapes: [
            'Giorni 1-2: Tana, poi Ankarafantsika',
            'Giorni 3 e 4: Mahajanga e il Circo Rosso',
            'Giorni 5 e 6: Antsohihy, Ambanja e il cacao del Sambirano',
            'Giorni 7-13: barca per Nosy Be, spiagge ed escursioni in mare',
            'Giorno 14: volo Nosy Be-Tana o partenza internazionale',
          ]},
        ],
        conseils: [
          'Non prevedete più di circa 5 ore di strada al giorno in media: si viaggia a circa 50 km/h e mai di notte.',
          "I voli interni (Tulear, Morondava, Nosy Be) evitano di rifare la strada al ritorno: vi accompagno all'aeroporto.",
          'Tenete un giorno di margine per gli imprevisti: traghetto, pioggia, guasto.',
        ],
        faq: [
          ['Si possono fare la RN7 e gli Tsingy in 2 settimane?', "È molto stretto: bisognerebbe concatenare lunghe giornate di strada. In 2 settimane consiglio di scegliere l'uno o l'altro; insieme vanno bene in 3 settimane."],
          ['Qual è il periodo migliore per 2 settimane in Madagascar?', 'Da aprile a novembre per la maggior parte delle regioni. Gli Tsingy sono accessibili solo nella stagione secca, in genere da maggio a metà novembre.'],
          ['Serve un 4x4 per un circuito di 2 settimane?', "Per la RN7 basta un'auto, il 4x4 dà più comfort. Per la costa Ovest, gli Tsingy e la strada del Nord il 4x4 è indispensabile."],
        ],
      },
      es: {
        title: 'Madagascar en 2 semanas con chófer: 3 itinerarios probados',
        description: '¿Qué hacer en Madagascar en 2 semanas? Tres circuitos de 14 días con chófer: RN7 y Andasibe, costa Oeste y Tsingy, o la ruta del Norte hasta Nosy Be.',
        h1: 'Madagascar en 2 semanas',
        short: 'Madagascar en 2 semanas',
        intro: [
          'Dos semanas es la duración más habitual para un primer viaje a Madagascar. Basta para una buena región, siempre que no se quiera verlo todo: la isla es más grande que Francia y las carreteras son lentas. Mejor elegir un eje y hacerlo bien.',
          'Estos son los tres circuitos de 14 días que más recomiendo. Todos salen de Tana y todos se pueden adaptar a sus deseos y a su presupuesto.',
        ],
        options: [
          { h: 'Opción 1: la RN7 y Andasibe (el gran clásico)', resume: 'La mejor opción para un primer viaje: bosques y lémures, Tierras Altas, cañones de Isalo y playa para terminar. Posible todo el año.', itins: ['rn7-tana-tulear'], etapes: [
            'Días 1 a 3: llegada a Tana y luego Andasibe y sus indris (2 noches)',
            'Días 4 a 6: Antsirabe, Ambositra, Ranomafana',
            'Días 7 a 9: Fianarantsoa, Anja, Isalo (2 noches)',
            'Días 10 a 13: Tulear y luego Ifaty o Anakao',
            'Día 14: vuelo Tulear–Tana y salida',
          ]},
          { h: 'Opción 2: la costa Oeste y los Tsingy', resume: 'Para amantes de la aventura y los grandes paisajes: Avenida de los Baobabs, bosque de Kirindy, Tsingy de Bemaraha y Belo-sur-Mer. Solo en la estación seca, en 4x4.', itins: ['cote-ouest-tsingy'], etapes: [
            'Días 1 a 3: Tana, Antsirabe, Miandrivazo, Morondava',
            'Día 4: la Avenida de los Baobabs al atardecer',
            'Días 5 a 9: Kirindy, Belo-sur-Tsiribihina, Tsingy de Bemaraha (2 noches en Bekopaka), regreso',
            'Días 10 a 12: Belo-sur-Mer y sus goletas',
            'Días 13 y 14: Morondava, vuelo o carretera a Tana',
          ]},
          { h: 'Opción 3: la ruta del Norte hasta Nosy Be', resume: 'Bosques secos, una ciudad portuaria, el valle del cacao y luego una semana de mar e islas. Ideal para terminar el viaje con los pies en el agua.', itins: ['tana-nosy-be'], etapes: [
            'Días 1 a 2: Tana y luego Ankarafantsika',
            'Días 3 y 4: Mahajanga y el Circo Rojo',
            'Días 5 y 6: Antsohihy, Ambanja y el cacao del Sambirano',
            'Días 7 a 13: barco a Nosy Be, playas y excursiones en el mar',
            'Día 14: vuelo Nosy Be–Tana o salida internacional',
          ]},
        ],
        conseils: [
          'No prevea más de unas 5 horas de carretera al día de media: se circula a unos 50 km/h y nunca de noche.',
          'Los vuelos nacionales (Tulear, Morondava, Nosy Be) evitan rehacer la carretera a la vuelta: le dejo en el aeropuerto.',
          'Guarde un día de margen para imprevistos: transbordador, lluvia, avería.',
        ],
        faq: [
          ['¿Se pueden hacer la RN7 y los Tsingy en 2 semanas?', 'Es muy justo: habría que encadenar largos días de carretera. En 2 semanas aconsejo elegir uno u otro; los dos juntos encajan bien en 3 semanas.'],
          ['¿Cuál es la mejor época para 2 semanas en Madagascar?', 'De abril a noviembre para la mayoría de las regiones. Los Tsingy solo son accesibles en la estación seca, normalmente de mayo a mediados de noviembre.'],
          ['¿Hace falta un 4x4 para un circuito de 2 semanas?', 'Para la RN7 basta un coche, el 4x4 aporta comodidad. Para la costa Oeste, los Tsingy y la ruta del Norte, el 4x4 es imprescindible.'],
        ],
      },
    },
  },
  {
    slug: 'madagascar-3-semaines',
    jours: 21,
    photo: 'tsingy-de-bemaraha',
    text: {
      fr: {
        title: 'Madagascar en 3 semaines avec chauffeur : itinéraires et conseils',
        description: "Que faire à Madagascar en 3 semaines ? Trois circuits de 21 jours avec chauffeur : RN7 et côte Ouest jusqu'aux Tsingy, RN7 et Sud-Est, ou Hautes Terres et Nosy Be.",
        h1: 'Madagascar en 3 semaines',
        short: 'Madagascar en 3 semaines',
        intro: [
          "Avec trois semaines, Madagascar se découvre vraiment : on peut combiner deux régions très différentes, prendre son temps dans les parcs et garder quelques jours de plage. C'est la durée que je conseille à ceux qui le peuvent.",
          "Voici trois façons d'utiliser ces 21 jours. Chacune associe deux de mes itinéraires, et je les adapte selon la saison et votre rythme.",
        ],
        options: [
          { h: "Option 1 : la RN7 puis la côte Ouest jusqu'aux Tsingy (la grande boucle)", resume: "Le voyage le plus complet : toute la RN7, puis la piste côtière de Tuléar à Morondava par Belo-sur-Mer, et les Tsingy de Bemaraha. En saison sèche, en 4x4. Pour les voyageurs qui aiment la route.", itins: ['rn7-tana-tulear', 'cote-ouest-tsingy'], etapes: [
            'Jours 1 à 9 : la RN7 de Tana à Tuléar (Antsirabe, Ranomafana, Isalo)',
            'Jours 10 à 14 : la piste côtière par Andavadoaka, Morombe et Belo-sur-Mer',
            "Jours 15 à 19 : Morondava, l'Allée des Baobabs, Kirindy et les Tsingy",
            'Jours 20 et 21 : retour à Morondava et vol vers Tana',
          ]},
          { h: 'Option 2 : la RN7 et le Sud-Est', resume: "Les Hautes Terres et l'Isalo, puis la côte Est, le canal des Pangalanes et Manakara. Possible une grande partie de l'année.", itins: ['rn7-tana-tulear', 'sud-est-manakara-pangalanes'], etapes: [
            'Jours 1 à 3 : Tana, Andasibe ou Antsirabe',
            'Jours 4 à 8 : Ranomafana, Mananjary, le canal des Pangalanes, Manakara',
            'Jours 9 à 11 : remontée vers Fianarantsoa, Ambalavao et Anja',
            'Jours 12 à 18 : Isalo, Tuléar, Ifaty ou Anakao',
            'Jours 19 à 21 : vol Tuléar–Tana, dernières visites et départ',
          ]},
          { h: 'Option 3 : la RN7 et Nosy Be', resume: "Le meilleur des deux mondes : la RN7 et ses parcs, puis une semaine d'îles au nord, rejointe en avion pour ne pas perdre de temps.", itins: ['rn7-tana-tulear', 'tana-nosy-be'], etapes: [
            'Jours 1 à 3 : Tana et Andasibe',
            'Jours 4 à 12 : la RN7 jusqu\'à Tuléar et Ifaty',
            'Jour 13 : vol Tuléar–Tana',
            'Jours 14 à 20 : vol vers Nosy Be, plages et excursions (ou la route du Nord en 5 à 6 jours)',
            'Jour 21 : départ',
          ]},
        ],
        conseils: [
          'Alternez les grosses journées de route et les journées sur place pour ne pas vous épuiser.',
          "Pour l'option 1, partez entre mai et octobre : la piste côtière et les Tsingy dépendent de la saison sèche.",
          'Prévoyez une nuit à Tana avant le vol retour, en cas de retard sur la route.',
        ],
        faq: [
          ['Peut-on faire tout Madagascar en 3 semaines ?', "Non, l'île est trop grande. Trois semaines permettent de combiner deux régions, par exemple la RN7 et la côte Ouest, ou la RN7 et Nosy Be."],
          ['Faut-il prendre des vols intérieurs ?', "Pas obligatoirement, mais un vol au retour (depuis Tuléar, Morondava ou Nosy Be) fait souvent gagner deux à trois jours de route."],
          ['Le même chauffeur peut-il faire les 3 semaines ?', "Oui, c'est même l'idéal : Patrick vous accompagne du premier au dernier jour, ou vous retrouve à l'aéroport si une partie se fait en avion."],
        ],
      },
      en: {
        title: 'Madagascar in 3 weeks with a driver: itineraries and tips',
        description: 'What to do in Madagascar in 3 weeks? Three 21-day tours with a driver: RN7 and the West coast to the Tsingy, RN7 and the South-East, or the Highlands and Nosy Be.',
        h1: 'Madagascar in 3 weeks',
        short: 'Madagascar in 3 weeks',
        intro: [
          "With three weeks you really discover Madagascar: you can combine two very different regions, take your time in the parks and keep a few beach days. It's the length I recommend to those who can.",
          'Here are three ways to use those 21 days. Each combines two of my itineraries, and I adapt them to the season and your pace.',
        ],
        options: [
          { h: 'Option 1: the RN7 then the West coast to the Tsingy (the great loop)', resume: 'The most complete trip: the whole RN7, then the coastal track from Tulear to Morondava via Belo-sur-Mer, and the Tsingy de Bemaraha. Dry season, by 4x4. For travellers who love the road.', itins: ['rn7-tana-tulear', 'cote-ouest-tsingy'], etapes: [
            'Days 1 to 9: the RN7 from Tana to Tulear (Antsirabe, Ranomafana, Isalo)',
            'Days 10 to 14: the coastal track via Andavadoaka, Morombe and Belo-sur-Mer',
            'Days 15 to 19: Morondava, the Avenue of the Baobabs, Kirindy and the Tsingy',
            'Days 20 and 21: back to Morondava and flight to Tana',
          ]},
          { h: 'Option 2: the RN7 and the South-East', resume: 'The Highlands and Isalo, then the East coast, the Pangalanes canal and Manakara. Possible for much of the year.', itins: ['rn7-tana-tulear', 'sud-est-manakara-pangalanes'], etapes: [
            'Days 1 to 3: Tana, Andasibe or Antsirabe',
            'Days 4 to 8: Ranomafana, Mananjary, the Pangalanes canal, Manakara',
            'Days 9 to 11: back up to Fianarantsoa, Ambalavao and Anja',
            'Days 12 to 18: Isalo, Tulear, Ifaty or Anakao',
            'Days 19 to 21: Tulear–Tana flight, last visits and departure',
          ]},
          { h: 'Option 3: the RN7 and Nosy Be', resume: 'The best of both worlds: the RN7 and its parks, then a week of islands in the north, reached by plane to save time.', itins: ['rn7-tana-tulear', 'tana-nosy-be'], etapes: [
            'Days 1 to 3: Tana and Andasibe',
            'Days 4 to 12: the RN7 to Tulear and Ifaty',
            'Day 13: Tulear–Tana flight',
            'Days 14 to 20: flight to Nosy Be, beaches and trips (or the northern road in 5 to 6 days)',
            'Day 21: departure',
          ]},
        ],
        conseils: [
          'Alternate long driving days with days on site so you don\'t wear yourself out.',
          'For option 1, travel between May and October: the coastal track and the Tsingy depend on the dry season.',
          'Plan a night in Tana before your return flight in case of delays on the road.',
        ],
        faq: [
          ['Can you see all of Madagascar in 3 weeks?', 'No, the island is too big. Three weeks let you combine two regions, for example the RN7 and the West coast, or the RN7 and Nosy Be.'],
          ['Should you take domestic flights?', 'Not necessarily, but a return flight (from Tulear, Morondava or Nosy Be) often saves two to three days of driving.'],
          ['Can the same driver do all 3 weeks?', "Yes, that's ideal: Patrick accompanies you from the first day to the last, or meets you at the airport if part of the trip is by plane."],
        ],
      },
      it: {
        title: 'Madagascar in 3 settimane con autista: itinerari e consigli',
        description: 'Cosa fare in Madagascar in 3 settimane? Tre circuiti di 21 giorni con autista: RN7 e costa Ovest fino agli Tsingy, RN7 e Sud-Est, o Altopiani e Nosy Be.',
        h1: 'Madagascar in 3 settimane',
        short: 'Madagascar in 3 settimane',
        intro: [
          "Con tre settimane il Madagascar si scopre davvero: si possono combinare due regioni molto diverse, prendersi il tempo nei parchi e tenere qualche giorno di mare. È la durata che consiglio a chi può.",
          'Ecco tre modi di usare questi 21 giorni. Ognuno unisce due dei miei itinerari, e li adatto alla stagione e al vostro ritmo.',
        ],
        options: [
          { h: "Opzione 1: la RN7 e poi la costa Ovest fino agli Tsingy (il grande anello)", resume: 'Il viaggio più completo: tutta la RN7, poi la pista costiera da Tulear a Morondava passando per Belo-sur-Mer, e gli Tsingy de Bemaraha. Stagione secca, in 4x4. Per chi ama la strada.', itins: ['rn7-tana-tulear', 'cote-ouest-tsingy'], etapes: [
            'Giorni 1-9: la RN7 da Tana a Tulear (Antsirabe, Ranomafana, Isalo)',
            'Giorni 10-14: la pista costiera per Andavadoaka, Morombe e Belo-sur-Mer',
            'Giorni 15-19: Morondava, il Viale dei Baobab, Kirindy e gli Tsingy',
            'Giorni 20 e 21: ritorno a Morondava e volo per Tana',
          ]},
          { h: 'Opzione 2: la RN7 e il Sud-Est', resume: "Gli Altopiani e l'Isalo, poi la costa Est, il canale delle Pangalanes e Manakara. Possibile per gran parte dell'anno.", itins: ['rn7-tana-tulear', 'sud-est-manakara-pangalanes'], etapes: [
            'Giorni 1-3: Tana, Andasibe o Antsirabe',
            'Giorni 4-8: Ranomafana, Mananjary, il canale delle Pangalanes, Manakara',
            'Giorni 9-11: risalita verso Fianarantsoa, Ambalavao e Anja',
            'Giorni 12-18: Isalo, Tulear, Ifaty o Anakao',
            'Giorni 19-21: volo Tulear-Tana, ultime visite e partenza',
          ]},
          { h: 'Opzione 3: la RN7 e Nosy Be', resume: "Il meglio dei due mondi: la RN7 e i suoi parchi, poi una settimana di isole al nord, raggiunta in aereo per non perdere tempo.", itins: ['rn7-tana-tulear', 'tana-nosy-be'], etapes: [
            'Giorni 1-3: Tana e Andasibe',
            'Giorni 4-12: la RN7 fino a Tulear e Ifaty',
            'Giorno 13: volo Tulear-Tana',
            'Giorni 14-20: volo per Nosy Be, spiagge ed escursioni (o la strada del Nord in 5-6 giorni)',
            'Giorno 21: partenza',
          ]},
        ],
        conseils: [
          'Alternate le lunghe giornate di strada con giornate sul posto per non stancarvi troppo.',
          "Per l'opzione 1 partite tra maggio e ottobre: la pista costiera e gli Tsingy dipendono dalla stagione secca.",
          'Prevedete una notte a Tana prima del volo di ritorno, in caso di ritardi sulla strada.',
        ],
        faq: [
          ['Si può vedere tutto il Madagascar in 3 settimane?', "No, l'isola è troppo grande. Tre settimane permettono di combinare due regioni, per esempio la RN7 e la costa Ovest, o la RN7 e Nosy Be."],
          ['Bisogna prendere voli interni?', 'Non necessariamente, ma un volo al ritorno (da Tulear, Morondava o Nosy Be) fa spesso risparmiare due o tre giorni di strada.'],
          ['Lo stesso autista può fare tutte e 3 le settimane?', "Sì, è l'ideale: Patrick vi accompagna dal primo all'ultimo giorno, o vi ritrova all'aeroporto se una parte si fa in aereo."],
        ],
      },
      es: {
        title: 'Madagascar en 3 semanas con chófer: itinerarios y consejos',
        description: '¿Qué hacer en Madagascar en 3 semanas? Tres circuitos de 21 días con chófer: RN7 y costa Oeste hasta los Tsingy, RN7 y Sudeste, o Tierras Altas y Nosy Be.',
        h1: 'Madagascar en 3 semanas',
        short: 'Madagascar en 3 semanas',
        intro: [
          'Con tres semanas se descubre de verdad Madagascar: se pueden combinar dos regiones muy distintas, ir sin prisa por los parques y guardar unos días de playa. Es la duración que recomiendo a quien puede.',
          'Estas son tres formas de aprovechar esos 21 días. Cada una combina dos de mis itinerarios, y los adapto a la temporada y a su ritmo.',
        ],
        options: [
          { h: 'Opción 1: la RN7 y luego la costa Oeste hasta los Tsingy (el gran circuito)', resume: 'El viaje más completo: toda la RN7, luego la pista costera de Tulear a Morondava por Belo-sur-Mer, y los Tsingy de Bemaraha. Estación seca, en 4x4. Para viajeros a los que les gusta la carretera.', itins: ['rn7-tana-tulear', 'cote-ouest-tsingy'], etapes: [
            'Días 1 a 9: la RN7 de Tana a Tulear (Antsirabe, Ranomafana, Isalo)',
            'Días 10 a 14: la pista costera por Andavadoaka, Morombe y Belo-sur-Mer',
            'Días 15 a 19: Morondava, la Avenida de los Baobabs, Kirindy y los Tsingy',
            'Días 20 y 21: regreso a Morondava y vuelo a Tana',
          ]},
          { h: 'Opción 2: la RN7 y el Sudeste', resume: 'Las Tierras Altas e Isalo, luego la costa Este, el canal de Pangalanes y Manakara. Posible gran parte del año.', itins: ['rn7-tana-tulear', 'sud-est-manakara-pangalanes'], etapes: [
            'Días 1 a 3: Tana, Andasibe o Antsirabe',
            'Días 4 a 8: Ranomafana, Mananjary, el canal de Pangalanes, Manakara',
            'Días 9 a 11: subida hacia Fianarantsoa, Ambalavao y Anja',
            'Días 12 a 18: Isalo, Tulear, Ifaty o Anakao',
            'Días 19 a 21: vuelo Tulear–Tana, últimas visitas y salida',
          ]},
          { h: 'Opción 3: la RN7 y Nosy Be', resume: 'Lo mejor de los dos mundos: la RN7 y sus parques, y luego una semana de islas en el norte, a la que se llega en avión para no perder tiempo.', itins: ['rn7-tana-tulear', 'tana-nosy-be'], etapes: [
            'Días 1 a 3: Tana y Andasibe',
            'Días 4 a 12: la RN7 hasta Tulear e Ifaty',
            'Día 13: vuelo Tulear–Tana',
            'Días 14 a 20: vuelo a Nosy Be, playas y excursiones (o la ruta del Norte en 5 o 6 días)',
            'Día 21: salida',
          ]},
        ],
        conseils: [
          'Alterne los días largos de carretera con días en el lugar para no agotarse.',
          'Para la opción 1, viaje entre mayo y octubre: la pista costera y los Tsingy dependen de la estación seca.',
          'Prevea una noche en Tana antes del vuelo de regreso, por si hay retrasos en la carretera.',
        ],
        faq: [
          ['¿Se puede ver todo Madagascar en 3 semanas?', 'No, la isla es demasiado grande. Tres semanas permiten combinar dos regiones, por ejemplo la RN7 y la costa Oeste, o la RN7 y Nosy Be.'],
          ['¿Hay que tomar vuelos nacionales?', 'No necesariamente, pero un vuelo de regreso (desde Tulear, Morondava o Nosy Be) suele ahorrar dos o tres días de carretera.'],
          ['¿Puede el mismo chófer hacer las 3 semanas?', 'Sí, es lo ideal: Patrick le acompaña del primer al último día, o le recoge en el aeropuerto si una parte se hace en avión.'],
        ],
      },
    },
  },
];

export const dureesUi: Record<Lang, { optionsH2: string; tipsH2: string; faqH2: string; seeItin: string; cta: string; msg: string; listH2: string }> = {
  fr: { optionsH2: 'Trois itinéraires possibles', tipsH2: 'Mes conseils', faqH2: 'Questions fréquentes', seeItin: "Voir l'itinéraire détaillé", cta: 'Demander un devis', msg: 'Bonjour Tripack, je prépare un voyage de {x} jours à Madagascar. Pouvez-vous me faire un devis ?', listH2: 'Selon la durée de votre voyage' },
  en: { optionsH2: 'Three possible itineraries', tipsH2: 'My tips', faqH2: 'Frequently asked questions', seeItin: 'See the detailed itinerary', cta: 'Request a quote', msg: 'Hello Tripack, I am planning a {x}-day trip to Madagascar. Could you send me a quote?', listH2: 'By length of trip' },
  it: { optionsH2: 'Tre itinerari possibili', tipsH2: 'I miei consigli', faqH2: 'Domande frequenti', seeItin: "Vedi l'itinerario dettagliato", cta: 'Chiedi un preventivo', msg: 'Buongiorno Tripack, sto preparando un viaggio di {x} giorni in Madagascar. Può farmi un preventivo?', listH2: 'Secondo la durata del viaggio' },
  es: { optionsH2: 'Tres itinerarios posibles', tipsH2: 'Mis consejos', faqH2: 'Preguntas frecuentes', seeItin: 'Ver el itinerario detallado', cta: 'Pedir un presupuesto', msg: 'Hola Tripack, estoy preparando un viaje de {x} días a Madagascar. ¿Puede hacerme un presupuesto?', listH2: 'Según la duración del viaje' },
};

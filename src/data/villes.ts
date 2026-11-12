// Pages « chauffeur + ville / service » (référencement local), en 4 langues.
import type { Lang } from '../i18n';

type VilleText = {
  name: string;
  title: string; // balise <title>
  description: string; // meta description
  h1: string;
  intro: string[];
  services: string[];
  faq: [string, string][];
};

export type Ville = {
  slug: string;
  photo: string; // clé de src/data/photos.ts
  lieu?: string; // fiche du mini-guide liée
  itineraires: string[];
  lat: number;
  lng: number;
  text: Record<Lang, VilleText>;
};

export const villes: Ville[] = [
  {
    slug: 'antananarivo',
    photo: 'threepac-4x4',
    lieu: 'antananarivo',
    itineraires: ['rn7-tana-tulear', 'sud-est-manakara-pangalanes', 'tana-nosy-be'],
    lat: -18.879, lng: 47.508,
    text: {
      fr: {
        name: 'Antananarivo',
        title: 'Chauffeur à Antananarivo (Tana) – voiture et 4x4 avec chauffeur',
        description: "Chauffeur privé à Antananarivo : accueil à l'aéroport, visites de Tana, excursions et départ des circuits RN7, Sud-Est et Nosy Be avec Tripack.",
        h1: 'Chauffeur privé à Antananarivo',
        intro: [
          "Tana est la base de Tripack. C'est d'ici que partent presque tous les circuits : la RN7 vers le Sud, la route du Sud-Est vers les Pangalanes, et la route du Nord vers Nosy Be.",
          "Circuler dans la capitale demande de l'expérience : embouteillages, collines, ruelles. Patrick connaît les horaires à éviter et les raccourcis, pour que votre voyage commence sans stress.",
        ],
        services: ["Accueil à l'aéroport d'Ivato et transfert à l'hôtel", 'Visite de Tana : Rova, marché d\'Analakely, lac Anosy', "Excursion à la colline royale d'Ambohimanga (UNESCO)", 'Excursion de 1 ou 2 jours à Andasibe, la forêt des indris (≈ 3 h de route)', 'Départ des circuits RN7, Sud-Est et route du Nord', 'Mise à disposition à la journée'],
        faq: [
          ['Combien de temps entre l\'aéroport et le centre de Tana ?', "Comptez de 30 minutes à plus d'une heure selon la circulation. Aux heures de pointe, mieux vaut prévoir large."],
          ['Peut-on réserver un chauffeur seulement pour une journée à Tana ?', 'Oui, sur demande : visites de la ville ou excursion à Ambohimanga. Écrivez à Tripack sur WhatsApp avec la date.'],
          ['Le chauffeur peut-il venir me chercher tard le soir ?', "Oui, Patrick suit l'heure d'arrivée de votre vol et vous attend à la sortie de l'aéroport."],
        ],
      },
      en: {
        name: 'Antananarivo',
        title: 'Private driver in Antananarivo (Tana) – car and 4x4 with driver',
        description: 'Private driver in Antananarivo: airport pick-up, Tana city tours, day trips and departures for RN7, South-East and Nosy Be tours with Tripack.',
        h1: 'Private driver in Antananarivo',
        intro: [
          "Tana is Tripack's home base. Almost every tour starts here: the RN7 to the South, the South-East road to the Pangalanes, and the northern road to Nosy Be.",
          'Driving in the capital takes experience: traffic jams, hills, narrow lanes. Patrick knows the times to avoid and the shortcuts, so your trip starts stress-free.',
        ],
        services: ['Pick-up at Ivato airport and transfer to your hotel', 'Tana city tour: Rova, Analakely market, Lake Anosy', 'Day trip to the royal hill of Ambohimanga (UNESCO)', '1- or 2-day trip to Andasibe, the forest of the indri (≈ 3 h drive)', 'Departures for the RN7, South-East and northern road tours', 'Driver at your disposal by the day'],
        faq: [
          ['How long from the airport to central Tana?', 'From 30 minutes to over an hour depending on traffic. At rush hour, allow plenty of time.'],
          ['Can I book a driver for just one day in Tana?', 'Yes, on request: city tour or a trip to Ambohimanga. Message Tripack on WhatsApp with the date.'],
          ['Can the driver pick me up late at night?', 'Yes, Patrick follows your flight arrival time and waits for you at the airport exit.'],
        ],
      },
      it: {
        name: 'Antananarivo',
        title: 'Autista ad Antananarivo (Tana) – auto e 4x4 con autista',
        description: "Autista privato ad Antananarivo: accoglienza in aeroporto, visite di Tana, escursioni e partenza dei circuiti RN7, Sud-Est e Nosy Be con Tripack.",
        h1: 'Autista privato ad Antananarivo',
        intro: [
          'Tana è la base di Tripack. Da qui partono quasi tutti i circuiti: la RN7 verso il Sud, la strada del Sud-Est verso le Pangalanes e la strada del Nord verso Nosy Be.',
          'Guidare nella capitale richiede esperienza: ingorghi, colline, vicoli. Patrick conosce gli orari da evitare e le scorciatoie, perché il vostro viaggio cominci senza stress.',
        ],
        services: ["Accoglienza all'aeroporto di Ivato e trasferimento in hotel", "Visita di Tana: Rova, mercato di Analakely, lago Anosy", "Escursione alla collina reale di Ambohimanga (UNESCO)", 'Escursione di 1 o 2 giorni ad Andasibe, la foresta degli indri (≈ 3 ore di strada)', 'Partenza dei circuiti RN7, Sud-Est e strada del Nord', 'Autista a disposizione per la giornata'],
        faq: [
          ["Quanto tempo dall'aeroporto al centro di Tana?", "Da 30 minuti a più di un'ora secondo il traffico. Nelle ore di punta conviene prevedere margine."],
          ['Si può prenotare un autista per una sola giornata a Tana?', 'Sì, su richiesta: visita della città o escursione ad Ambohimanga. Scrivete a Tripack su WhatsApp con la data.'],
          ["L'autista può venirmi a prendere a tarda sera?", "Sì, Patrick segue l'orario di arrivo del vostro volo e vi aspetta all'uscita dell'aeroporto."],
        ],
      },
      es: {
        name: 'Antananarivo',
        title: 'Chófer en Antananarivo (Tana) – coche y 4x4 con chófer',
        description: 'Chófer privado en Antananarivo: recogida en el aeropuerto, visitas de Tana, excursiones y salida de los circuitos RN7, Sudeste y Nosy Be con Tripack.',
        h1: 'Chófer privado en Antananarivo',
        intro: [
          'Tana es la base de Tripack. Desde aquí salen casi todos los circuitos: la RN7 hacia el Sur, la ruta del Sudeste hacia las Pangalanes y la ruta del Norte hacia Nosy Be.',
          'Circular por la capital exige experiencia: atascos, colinas, callejuelas. Patrick conoce las horas a evitar y los atajos, para que su viaje empiece sin estrés.',
        ],
        services: ['Recogida en el aeropuerto de Ivato y traslado al hotel', 'Visita de Tana: Rova, mercado de Analakely, lago Anosy', 'Excursión a la colina real de Ambohimanga (UNESCO)', 'Excursión de 1 o 2 días a Andasibe, el bosque de los indris (≈ 3 h de carretera)', 'Salida de los circuitos RN7, Sudeste y ruta del Norte', 'Chófer a disposición por días'],
        faq: [
          ['¿Cuánto se tarda del aeropuerto al centro de Tana?', 'De 30 minutos a más de una hora según el tráfico. En hora punta, mejor prever margen.'],
          ['¿Se puede reservar un chófer solo un día en Tana?', 'Sí, bajo petición: visita de la ciudad o excursión a Ambohimanga. Escriba a Tripack por WhatsApp con la fecha.'],
          ['¿Puede el chófer recogerme tarde por la noche?', 'Sí, Patrick sigue la hora de llegada de su vuelo y le espera a la salida del aeropuerto.'],
        ],
      },
    },
  },
  {
    slug: 'aeroport-ivato',
    photo: 'interieur-vehicule',
    lieu: 'antananarivo',
    itineraires: ['rn7-tana-tulear', 'tana-nosy-be'],
    lat: -18.797, lng: 47.479,
    text: {
      fr: {
        name: "Aéroport d'Ivato",
        title: "Transfert aéroport d'Ivato (Tana) avec chauffeur privé",
        description: "Transfert privé depuis l'aéroport international d'Ivato à Antananarivo : accueil à la sortie, aide aux bagages, trajet vers votre hôtel ou départ direct en circuit.",
        h1: "Transfert depuis l'aéroport d'Ivato",
        intro: [
          "Après un long vol, la dernière chose dont on a envie, c'est de négocier un taxi. Tripack vous attend à la sortie de l'aéroport international d'Ivato avec une pancarte à votre nom.",
          "Il vous conduit à votre hôtel à Tana, ou directement sur la route si votre circuit commence le jour même. Et au retour, il vous ramène à l'aéroport avec de la marge.",
        ],
        services: ['Accueil personnalisé à la sortie des arrivées', 'Aide pour les bagages', 'Suivi de votre vol en cas de retard', 'Transfert vers votre hôtel à Tana ou ses environs', "Retour à l'aéroport en fin de voyage"],
        faq: [
          ["Que se passe-t-il si mon vol a du retard ?", "Patrick suit l'arrivée de votre vol et adapte l'heure de prise en charge."],
          ["Faut-il réserver le transfert à l'avance ?", "Oui, de préférence : envoyez votre numéro de vol et votre heure d'arrivée sur WhatsApp."],
          ["Le transfert est-il inclus dans un circuit ?", "En général oui, si le circuit commence ou se termine à Tana. Précisez-le dans votre demande de devis."],
        ],
      },
      en: {
        name: 'Ivato Airport',
        title: 'Ivato Airport (Tana) transfer with a private driver',
        description: 'Private transfer from Ivato international airport in Antananarivo: meet and greet at the exit, help with luggage, drive to your hotel or straight onto your tour.',
        h1: 'Transfer from Ivato Airport',
        intro: [
          "After a long flight, the last thing you want is to haggle over a taxi. Tripack waits for you at the exit of Ivato international airport with a sign bearing your name.",
          'He drives you to your hotel in Tana, or straight onto the road if your tour starts the same day. And at the end of your trip, he takes you back to the airport in good time.',
        ],
        services: ['Personal meet and greet at arrivals', 'Help with luggage', 'Flight tracking in case of delay', 'Transfer to your hotel in or around Tana', 'Return to the airport at the end of your trip'],
        faq: [
          ['What if my flight is delayed?', 'Patrick tracks your flight and adjusts the pick-up time.'],
          ['Should I book the transfer in advance?', 'Yes, preferably: send your flight number and arrival time on WhatsApp.'],
          ['Is the transfer included in a tour?', 'Usually yes, if the tour starts or ends in Tana. Mention it in your quote request.'],
        ],
      },
      it: {
        name: 'Aeroporto di Ivato',
        title: "Trasferimento dall'aeroporto di Ivato (Tana) con autista privato",
        description: "Trasferimento privato dall'aeroporto internazionale di Ivato ad Antananarivo: accoglienza all'uscita, aiuto con i bagagli, tragitto verso l'hotel o partenza diretta per il circuito.",
        h1: "Trasferimento dall'aeroporto di Ivato",
        intro: [
          "Dopo un lungo volo, l'ultima cosa che si desidera è contrattare un taxi. Tripack vi aspetta all'uscita dell'aeroporto internazionale di Ivato con un cartello con il vostro nome.",
          "Vi accompagna all'hotel a Tana, o direttamente sulla strada se il circuito comincia lo stesso giorno. E alla fine del viaggio vi riporta all'aeroporto con margine.",
        ],
        services: ["Accoglienza personalizzata all'uscita degli arrivi", 'Aiuto con i bagagli', 'Monitoraggio del volo in caso di ritardo', "Trasferimento all'hotel a Tana o dintorni", "Ritorno all'aeroporto a fine viaggio"],
        faq: [
          ['E se il mio volo è in ritardo?', "Patrick segue l'arrivo del volo e adatta l'orario di presa in carico."],
          ['Bisogna prenotare il trasferimento in anticipo?', 'Sì, preferibilmente: inviate numero di volo e orario di arrivo su WhatsApp.'],
          ['Il trasferimento è incluso in un circuito?', 'In genere sì, se il circuito inizia o finisce a Tana. Indicatelo nella richiesta di preventivo.'],
        ],
      },
      es: {
        name: 'Aeropuerto de Ivato',
        title: 'Traslado desde el aeropuerto de Ivato (Tana) con chófer privado',
        description: 'Traslado privado desde el aeropuerto internacional de Ivato en Antananarivo: recibimiento a la salida, ayuda con el equipaje, trayecto al hotel o salida directa al circuito.',
        h1: 'Traslado desde el aeropuerto de Ivato',
        intro: [
          'Después de un vuelo largo, lo último que apetece es regatear un taxi. Tripack le espera a la salida del aeropuerto internacional de Ivato con un cartel con su nombre.',
          'Le lleva a su hotel en Tana, o directamente a la carretera si su circuito empieza ese mismo día. Y al final del viaje, le devuelve al aeropuerto con margen.',
        ],
        services: ['Recibimiento personalizado en llegadas', 'Ayuda con el equipaje', 'Seguimiento del vuelo en caso de retraso', 'Traslado a su hotel en Tana o alrededores', 'Regreso al aeropuerto al final del viaje'],
        faq: [
          ['¿Qué pasa si mi vuelo se retrasa?', 'Patrick sigue la llegada de su vuelo y adapta la hora de recogida.'],
          ['¿Hay que reservar el traslado con antelación?', 'Sí, preferiblemente: envíe su número de vuelo y hora de llegada por WhatsApp.'],
          ['¿El traslado está incluido en un circuito?', 'Por lo general sí, si el circuito empieza o termina en Tana. Indíquelo en su solicitud de presupuesto.'],
        ],
      },
    },
  },
  {
    slug: 'nosy-be',
    photo: 'nosy-be',
    lieu: 'nosy-be',
    itineraires: ['tana-nosy-be'],
    lat: -13.4, lng: 48.27,
    text: {
      fr: {
        name: 'Nosy Be',
        title: 'Aller à Nosy Be avec chauffeur : la route depuis Tana',
        description: "Rejoindre Nosy Be par la route avec un chauffeur privé : Tana, Ankarafantsika, Mahajanga, Ambanja et le bateau d'Ankify. Un vrai voyage avant la plage.",
        h1: 'Aller à Nosy Be avec chauffeur',
        intro: [
          "La plupart des voyageurs prennent l'avion pour Nosy Be. Avec Tripack, vous pouvez y aller par la route et transformer le trajet en voyage : forêts sèches et lémuriens d'Ankarafantsika, ville portuaire de Mahajanga, vallée du cacao à Ambanja.",
          "La voiture s'arrête au port d'Ankify, d'où un bateau rejoint l'île en 45 minutes environ. Patrick vous dépose au bateau et peut vous reprendre au retour pour la suite du voyage.",
        ],
        services: ['Route Tana → Ankify en 5 à 6 jours avec étapes', 'Dépose et reprise au port d\'Ankify', "Visite d'une plantation de cacao dans le Sambirano", "Possibilité de prolonger vers Diego-Suarez et la montagne d'Ambre", 'Retour vers Tana par la route ou dépose à l\'aéroport'],
        faq: [
          ['Combien de jours faut-il pour aller de Tana à Nosy Be par la route ?', "Environ 1 100 km : comptez 5 à 6 jours avec les étapes, et plus si l'état de la RN6 l'impose."],
          ['Quelle est la meilleure saison ?', "D'avril à décembre. De janvier à mars, la saison des pluies rend la RN6 difficile."],
          ['Le 4x4 va-t-il sur l\'île ?', "Non, il reste à Ankify. Sur Nosy Be, on se déplace en bateau, en taxi ou en scooter."],
        ],
      },
      en: {
        name: 'Nosy Be',
        title: 'Getting to Nosy Be with a private driver: the road from Tana',
        description: 'Reach Nosy Be by road with a private driver: Tana, Ankarafantsika, Mahajanga, Ambanja and the boat from Ankify. A real journey before the beach.',
        h1: 'Getting to Nosy Be with a driver',
        intro: [
          "Most travellers fly to Nosy Be. With Tripack you can go by road and turn the transfer into a journey: the dry forests and lemurs of Ankarafantsika, the port town of Mahajanga, the cocoa valley at Ambanja.",
          'The car stops at the port of Ankify, from where a boat reaches the island in about 45 minutes. Patrick drops you at the boat and can pick you up on your return to continue the trip.',
        ],
        services: ['Tana → Ankify road trip in 5 to 6 days with stops', 'Drop-off and pick-up at Ankify port', 'Visit to a cocoa plantation in the Sambirano', 'Possible extension to Diego-Suarez and Amber Mountain', 'Return to Tana by road or drop-off at the airport'],
        faq: [
          ['How many days to drive from Tana to Nosy Be?', 'About 1,100 km: allow 5 to 6 days with stops, more if the RN6 conditions require it.'],
          ['What is the best season?', 'April to December. From January to March the rainy season makes the RN6 difficult.'],
          ['Does the 4x4 go onto the island?', 'No, it stays in Ankify. On Nosy Be you get around by boat, taxi or scooter.'],
        ],
      },
      it: {
        name: 'Nosy Be',
        title: 'Andare a Nosy Be con autista: la strada da Tana',
        description: "Raggiungere Nosy Be su strada con un autista privato: Tana, Ankarafantsika, Mahajanga, Ambanja e la barca da Ankify. Un vero viaggio prima del mare.",
        h1: 'Andare a Nosy Be con autista',
        intro: [
          "La maggior parte dei viaggiatori va a Nosy Be in aereo. Con Tripack potete andarci su strada e trasformare il trasferimento in un viaggio: foreste secche e lemuri di Ankarafantsika, la città portuale di Mahajanga, la valle del cacao ad Ambanja.",
          "L'auto si ferma al porto di Ankify, da dove una barca raggiunge l'isola in circa 45 minuti. Patrick vi lascia alla barca e può riprendervi al ritorno per proseguire il viaggio.",
        ],
        services: ['Strada Tana → Ankify in 5-6 giorni con tappe', 'Accompagnamento e ritiro al porto di Ankify', 'Visita di una piantagione di cacao nel Sambirano', "Possibile prolungamento verso Diego-Suarez e la Montagna d'Ambra", "Ritorno a Tana su strada o accompagnamento all'aeroporto"],
        faq: [
          ['Quanti giorni servono da Tana a Nosy Be su strada?', 'Circa 1.100 km: contate 5-6 giorni con le tappe, di più se lo stato della RN6 lo impone.'],
          ['Qual è la stagione migliore?', 'Da aprile a dicembre. Da gennaio a marzo la stagione delle piogge rende difficile la RN6.'],
          ["Il 4x4 va sull'isola?", "No, resta ad Ankify. A Nosy Be ci si sposta in barca, taxi o scooter."],
        ],
      },
      es: {
        name: 'Nosy Be',
        title: 'Ir a Nosy Be con chófer: la ruta desde Tana',
        description: 'Llegar a Nosy Be por carretera con chófer privado: Tana, Ankarafantsika, Mahajanga, Ambanja y el barco desde Ankify. Un verdadero viaje antes de la playa.',
        h1: 'Ir a Nosy Be con chófer',
        intro: [
          'La mayoría de los viajeros vuela a Nosy Be. Con Tripack puede ir por carretera y convertir el traslado en un viaje: bosques secos y lémures de Ankarafantsika, la ciudad portuaria de Mahajanga, el valle del cacao en Ambanja.',
          'El coche se queda en el puerto de Ankify, desde donde un barco llega a la isla en unos 45 minutos. Patrick le deja en el barco y puede recogerle a la vuelta para seguir el viaje.',
        ],
        services: ['Ruta Tana → Ankify en 5 o 6 días con etapas', 'Traslado y recogida en el puerto de Ankify', 'Visita de una plantación de cacao en el Sambirano', 'Posible prolongación hacia Diego-Suarez y la Montaña de Ámbar', 'Regreso a Tana por carretera o traslado al aeropuerto'],
        faq: [
          ['¿Cuántos días se tarda de Tana a Nosy Be por carretera?', 'Unos 1.100 km: cuente 5 o 6 días con etapas, más si el estado de la RN6 lo exige.'],
          ['¿Cuál es la mejor temporada?', 'De abril a diciembre. De enero a marzo, la temporada de lluvias complica la RN6.'],
          ['¿El 4x4 va a la isla?', 'No, se queda en Ankify. En Nosy Be se desplaza en barco, taxi o scooter.'],
        ],
      },
    },
  },
  {
    slug: 'morondava',
    photo: 'allee-des-baobabs',
    lieu: 'morondava',
    itineraires: ['cote-ouest-tsingy'],
    lat: -20.284, lng: 44.318,
    text: {
      fr: {
        name: 'Morondava',
        title: 'Chauffeur à Morondava : Allée des Baobabs, Kirindy et Tsingy en 4x4',
        description: "Chauffeur et 4x4 pour Morondava : Allée des Baobabs, forêt de Kirindy, Belo-sur-Mer et Tsingy de Bemaraha. Circuits de 2 à 6 jours ou grande boucle côte Ouest.",
        h1: 'Chauffeur et 4x4 à Morondava',
        intro: [
          "Morondava est le point de départ des plus belles excursions de l'Ouest : l'Allée des Baobabs au coucher du soleil, la forêt de Kirindy et son fossa, et surtout les Tsingy de Bemaraha, accessibles uniquement en 4x4.",
          "Tripack connaît chaque piste et chaque bac de la région. Il peut vous emmener depuis Tana, ou vous rejoindre à Morondava si vous arrivez en avion (trajet d'approche à prévoir dans le devis).",
        ],
        services: ['Allée des Baobabs au coucher ou au lever du soleil', 'Forêt de Kirindy et balade de nuit', 'Circuit Tsingy de Bemaraha (4 à 5 jours aller-retour)', 'Belo-sur-Mer et ses goélettes', "Accueil à l'aéroport de Morondava sur demande"],
        faq: [
          ['Combien de jours pour les Tsingy depuis Morondava ?', "Comptez au moins 4 jours aller-retour : une journée de piste à l'aller, deux jours dans les Tsingy, une journée de retour."],
          ['Quand peut-on aller aux Tsingy ?', "Uniquement en saison sèche, en général de mai à mi-novembre (à vérifier chaque année)."],
          ['Faut-il un 4x4 pour l\'Allée des Baobabs ?', "Non, elle est proche de Morondava. Le 4x4 devient indispensable au-delà, vers Kirindy, Belo-sur-Mer et les Tsingy."],
        ],
      },
      en: {
        name: 'Morondava',
        title: 'Driver in Morondava: Avenue of the Baobabs, Kirindy and the Tsingy by 4x4',
        description: 'Driver and 4x4 in Morondava: Avenue of the Baobabs, Kirindy forest, Belo-sur-Mer and the Tsingy de Bemaraha. Tours of 2 to 6 days or the great West coast loop.',
        h1: 'Driver and 4x4 in Morondava',
        intro: [
          'Morondava is the starting point for the finest trips in the West: the Avenue of the Baobabs at sunset, Kirindy forest and its fossa, and above all the Tsingy de Bemaraha, reachable only by 4x4.',
          'Tripack knows every track and every ferry in the area. He can drive you from Tana, or meet you in Morondava if you arrive by plane (positioning drive to be included in the quote).',
        ],
        services: ['Avenue of the Baobabs at sunset or sunrise', 'Kirindy forest and night walk', 'Tsingy de Bemaraha tour (4 to 5 days return)', 'Belo-sur-Mer and its schooners', 'Pick-up at Morondava airport on request'],
        faq: [
          ['How many days for the Tsingy from Morondava?', 'Allow at least 4 days return: a day of track there, two days in the Tsingy, a day back.'],
          ['When can you visit the Tsingy?', 'Only in the dry season, usually from May to mid-November (to be checked each year).'],
          ['Do you need a 4x4 for the Avenue of the Baobabs?', 'No, it is close to Morondava. A 4x4 becomes essential beyond it, towards Kirindy, Belo-sur-Mer and the Tsingy.'],
        ],
      },
      it: {
        name: 'Morondava',
        title: 'Autista a Morondava: Viale dei Baobab, Kirindy e Tsingy in 4x4',
        description: 'Autista e 4x4 a Morondava: Viale dei Baobab, foresta di Kirindy, Belo-sur-Mer e Tsingy de Bemaraha. Circuiti da 2 a 6 giorni o il grande anello della costa Ovest.',
        h1: 'Autista e 4x4 a Morondava',
        intro: [
          "Morondava è il punto di partenza delle più belle escursioni dell'Ovest: il Viale dei Baobab al tramonto, la foresta di Kirindy e il suo fossa, e soprattutto gli Tsingy de Bemaraha, raggiungibili solo in 4x4.",
          "Tripack conosce ogni pista e ogni traghetto della regione. Può portarvi da Tana, oppure raggiungervi a Morondava se arrivate in aereo (tragitto di avvicinamento da includere nel preventivo).",
        ],
        services: ['Viale dei Baobab al tramonto o all\'alba', 'Foresta di Kirindy ed escursione notturna', 'Circuito Tsingy de Bemaraha (4-5 giorni andata e ritorno)', 'Belo-sur-Mer e le sue golette', "Accoglienza all'aeroporto di Morondava su richiesta"],
        faq: [
          ['Quanti giorni per gli Tsingy da Morondava?', "Almeno 4 giorni andata e ritorno: un giorno di pista all'andata, due giorni negli Tsingy, un giorno di ritorno."],
          ['Quando si può andare agli Tsingy?', 'Solo nella stagione secca, in genere da maggio a metà novembre (da verificare ogni anno).'],
          ['Serve un 4x4 per il Viale dei Baobab?', 'No, è vicino a Morondava. Il 4x4 diventa indispensabile oltre, verso Kirindy, Belo-sur-Mer e gli Tsingy.'],
        ],
      },
      es: {
        name: 'Morondava',
        title: 'Chófer en Morondava: Avenida de los Baobabs, Kirindy y Tsingy en 4x4',
        description: 'Chófer y 4x4 en Morondava: Avenida de los Baobabs, bosque de Kirindy, Belo-sur-Mer y Tsingy de Bemaraha. Circuitos de 2 a 6 días o el gran circuito de la costa Oeste.',
        h1: 'Chófer y 4x4 en Morondava',
        intro: [
          'Morondava es el punto de partida de las mejores excursiones del Oeste: la Avenida de los Baobabs al atardecer, el bosque de Kirindy y su fosa, y sobre todo los Tsingy de Bemaraha, a los que solo se llega en 4x4.',
          'Tripack conoce cada pista y cada transbordador de la región. Puede llevarle desde Tana, o reunirse con usted en Morondava si llega en avión (trayecto de aproximación a incluir en el presupuesto).',
        ],
        services: ['Avenida de los Baobabs al atardecer o al amanecer', 'Bosque de Kirindy y paseo nocturno', 'Circuito Tsingy de Bemaraha (4 a 5 días ida y vuelta)', 'Belo-sur-Mer y sus goletas', 'Recogida en el aeropuerto de Morondava bajo petición'],
        faq: [
          ['¿Cuántos días para los Tsingy desde Morondava?', 'Al menos 4 días ida y vuelta: un día de pista a la ida, dos días en los Tsingy y un día de regreso.'],
          ['¿Cuándo se puede ir a los Tsingy?', 'Solo en la estación seca, normalmente de mayo a mediados de noviembre (a comprobar cada año).'],
          ['¿Hace falta un 4x4 para la Avenida de los Baobabs?', 'No, está cerca de Morondava. El 4x4 es imprescindible más allá, hacia Kirindy, Belo-sur-Mer y los Tsingy.'],
        ],
      },
    },
  },
  {
    slug: 'tulear',
    photo: 'piste-rouge',
    lieu: 'tulear',
    itineraires: ['rn7-tana-tulear', 'cote-ouest-tsingy'],
    lat: -23.35, lng: 43.669,
    text: {
      fr: {
        name: 'Tuléar',
        title: 'Chauffeur à Tuléar (Toliara) : Ifaty, Anakao et piste de la côte Ouest',
        description: "Chauffeur et 4x4 à Tuléar : fin de la RN7, plages d'Ifaty et d'Anakao, et départ de la grande piste côtière vers Belo-sur-Mer, Morondava et les Tsingy.",
        h1: 'Chauffeur et 4x4 à Tuléar',
        intro: [
          "Tuléar est le terminus de la RN7 et le point de départ de l'aventure côte Ouest. D'ici, une piste de sable remonte vers le nord, de village vezo en village vezo, jusqu'à Belo-sur-Mer et Morondava.",
          "Tripack peut finir la RN7 avec vous à Tuléar, vous conduire aux plages d'Ifaty ou au port pour Anakao, ou attaquer la piste côtière en 4x4. Il peut aussi vous rejoindre à Tuléar si vous arrivez en avion (sur demande).",
        ],
        services: ['Arrivée de la RN7 depuis Tana', "Transferts vers Ifaty, Mangily et le port d'Anakao", 'Piste côtière Tuléar → Belo-sur-Mer → Morondava en 4x4', 'Forêt d\'épineux du Reniala et jardin d\'Antsokay', "Accueil à l'aéroport de Tuléar sur demande"],
        faq: [
          ['Peut-on aller de Tuléar à Morondava par la côte ?', "Oui, en 4x4 et en saison sèche : comptez plusieurs jours avec les étapes à Andavadoaka, Morombe et Belo-sur-Mer."],
          ['Comment rejoindre Anakao ?', "En bateau depuis Tuléar. Tripack vous dépose au port et vous récupère au retour."],
          ['Peut-on rentrer à Tana en avion depuis Tuléar ?', "Oui, il existe des vols Tuléar-Tana, ce qui évite de refaire toute la RN7."],
        ],
      },
      en: {
        name: 'Tulear',
        title: 'Driver in Tulear (Toliara): Ifaty, Anakao and the West coast track',
        description: 'Driver and 4x4 in Tulear: end of the RN7, the beaches of Ifaty and Anakao, and the start of the great coastal track to Belo-sur-Mer, Morondava and the Tsingy.',
        h1: 'Driver and 4x4 in Tulear',
        intro: [
          "Tulear is the end of the RN7 and the starting point of the West coast adventure. From here a sand track heads north, from one Vezo village to the next, all the way to Belo-sur-Mer and Morondava.",
          'Tripack can finish the RN7 with you in Tulear, drive you to the beaches of Ifaty or to the port for Anakao, or tackle the coastal track by 4x4. He can also meet you in Tulear if you arrive by plane (on request).',
        ],
        services: ['Arrival of the RN7 from Tana', 'Transfers to Ifaty, Mangily and the Anakao port', 'Coastal track Tulear → Belo-sur-Mer → Morondava by 4x4', 'Reniala spiny forest and Antsokay garden', 'Pick-up at Tulear airport on request'],
        faq: [
          ['Can you drive from Tulear to Morondava along the coast?', 'Yes, by 4x4 and in the dry season: allow several days with stops at Andavadoaka, Morombe and Belo-sur-Mer.'],
          ['How do you get to Anakao?', 'By boat from Tulear. Tripack drops you at the port and picks you up on your return.'],
          ['Can you fly back to Tana from Tulear?', 'Yes, there are Tulear–Tana flights, which saves driving the whole RN7 again.'],
        ],
      },
      it: {
        name: 'Tulear',
        title: 'Autista a Tulear (Toliara): Ifaty, Anakao e pista della costa Ovest',
        description: "Autista e 4x4 a Tulear: fine della RN7, spiagge di Ifaty e Anakao, e partenza della grande pista costiera verso Belo-sur-Mer, Morondava e gli Tsingy.",
        h1: 'Autista e 4x4 a Tulear',
        intro: [
          "Tulear è il capolinea della RN7 e il punto di partenza dell'avventura della costa Ovest. Da qui una pista di sabbia risale verso nord, di villaggio vezo in villaggio vezo, fino a Belo-sur-Mer e Morondava.",
          "Tripack può terminare la RN7 con voi a Tulear, portarvi alle spiagge di Ifaty o al porto per Anakao, oppure affrontare la pista costiera in 4x4. Può anche raggiungervi a Tulear se arrivate in aereo (su richiesta).",
        ],
        services: ['Arrivo della RN7 da Tana', 'Trasferimenti verso Ifaty, Mangily e il porto per Anakao', 'Pista costiera Tulear → Belo-sur-Mer → Morondava in 4x4', 'Foresta spinosa del Reniala e giardino di Antsokay', "Accoglienza all'aeroporto di Tulear su richiesta"],
        faq: [
          ['Si può andare da Tulear a Morondava lungo la costa?', 'Sì, in 4x4 e nella stagione secca: contate diversi giorni con tappe ad Andavadoaka, Morombe e Belo-sur-Mer.'],
          ['Come si raggiunge Anakao?', 'In barca da Tulear. Tripack vi lascia al porto e vi riprende al ritorno.'],
          ['Si può tornare a Tana in aereo da Tulear?', 'Sì, ci sono voli Tulear-Tana, che evitano di rifare tutta la RN7.'],
        ],
      },
      es: {
        name: 'Tulear',
        title: 'Chófer en Tulear (Toliara): Ifaty, Anakao y pista de la costa Oeste',
        description: 'Chófer y 4x4 en Tulear: final de la RN7, playas de Ifaty y Anakao, y salida de la gran pista costera hacia Belo-sur-Mer, Morondava y los Tsingy.',
        h1: 'Chófer y 4x4 en Tulear',
        intro: [
          'Tulear es el final de la RN7 y el punto de partida de la aventura de la costa Oeste. Desde aquí, una pista de arena sube hacia el norte, de pueblo vezo en pueblo vezo, hasta Belo-sur-Mer y Morondava.',
          'Tripack puede terminar la RN7 con usted en Tulear, llevarle a las playas de Ifaty o al puerto para Anakao, o lanzarse a la pista costera en 4x4. También puede reunirse con usted en Tulear si llega en avión (bajo petición).',
        ],
        services: ['Llegada de la RN7 desde Tana', 'Traslados a Ifaty, Mangily y el puerto de Anakao', 'Pista costera Tulear → Belo-sur-Mer → Morondava en 4x4', 'Bosque espinoso de Reniala y jardín de Antsokay', 'Recogida en el aeropuerto de Tulear bajo petición'],
        faq: [
          ['¿Se puede ir de Tulear a Morondava por la costa?', 'Sí, en 4x4 y en la estación seca: cuente varios días con etapas en Andavadoaka, Morombe y Belo-sur-Mer.'],
          ['¿Cómo se llega a Anakao?', 'En barco desde Tulear. Tripack le deja en el puerto y le recoge a la vuelta.'],
          ['¿Se puede volver a Tana en avión desde Tulear?', 'Sí, hay vuelos Tulear-Tana, que evitan rehacer toda la RN7.'],
        ],
      },
    },
  },
];

export const villesUi: Record<Lang, { nav: string; servicesH2: string; tripsH2: string; faqH2: string; guideLink: string; listTitle: string; listDesc: string; listH1: string; listLead: string; cta: string; msg: string }> = {
  fr: { nav: 'Nos zones', servicesH2: 'Ce que Tripack propose', tripsH2: 'Les circuits au départ ou en passant par ici', faqH2: 'Questions fréquentes', guideLink: 'Que voir à {x} : la fiche du mini-guide', listTitle: 'Chauffeur à Madagascar par ville : Tana, aéroport d\'Ivato, Nosy Be, Morondava, Tuléar', listDesc: "Où Tripack vous accompagne : Antananarivo et l'aéroport d'Ivato, Nosy Be, Morondava et les Tsingy, Tuléar et la côte Ouest.", listH1: 'Où Tripack vous emmène', listLead: 'Les villes et services les plus demandés, avec tout ce qu\'il faut savoir.', cta: 'Demander un devis', msg: 'Bonjour Tripack, je voudrais un chauffeur pour {x}. Pouvez-vous me faire un devis ?' },
  en: { nav: 'Areas', servicesH2: 'What Tripack offers', tripsH2: 'Tours starting from or passing through here', faqH2: 'Frequently asked questions', guideLink: 'What to see in {x}: the travel guide page', listTitle: 'Private driver in Madagascar by city: Tana, Ivato airport, Nosy Be, Morondava, Tulear', listDesc: 'Where Tripack takes you: Antananarivo and Ivato airport, Nosy Be, Morondava and the Tsingy, Tulear and the West coast.', listH1: 'Where Tripack takes you', listLead: 'The most requested cities and services, with everything you need to know.', cta: 'Request a quote', msg: 'Hello Tripack, I would like a driver for {x}. Could you send me a quote?' },
  it: { nav: 'Zone', servicesH2: 'Cosa propone Tripack', tripsH2: 'I circuiti in partenza o di passaggio da qui', faqH2: 'Domande frequenti', guideLink: 'Cosa vedere a {x}: la scheda della mini-guida', listTitle: "Autista in Madagascar per città: Tana, aeroporto di Ivato, Nosy Be, Morondava, Tulear", listDesc: "Dove vi accompagna Tripack: Antananarivo e l'aeroporto di Ivato, Nosy Be, Morondava e gli Tsingy, Tulear e la costa Ovest.", listH1: 'Dove vi porta Tripack', listLead: 'Le città e i servizi più richiesti, con tutto quello che c\'è da sapere.', cta: 'Chiedi un preventivo', msg: 'Buongiorno Tripack, vorrei un autista per {x}. Può farmi un preventivo?' },
  es: { nav: 'Zonas', servicesH2: 'Lo que ofrece Tripack', tripsH2: 'Circuitos que salen o pasan por aquí', faqH2: 'Preguntas frecuentes', guideLink: 'Qué ver en {x}: la ficha de la miniguía', listTitle: 'Chófer en Madagascar por ciudad: Tana, aeropuerto de Ivato, Nosy Be, Morondava, Tulear', listDesc: 'Dónde le acompaña Tripack: Antananarivo y el aeropuerto de Ivato, Nosy Be, Morondava y los Tsingy, Tulear y la costa Oeste.', listH1: 'Adónde le lleva Tripack', listLead: 'Las ciudades y servicios más solicitados, con todo lo que hay que saber.', cta: 'Pedir un presupuesto', msg: 'Hola Tripack, me gustaría un chófer para {x}. ¿Puede hacerme un presupuesto?' },
};

// Fiches du mini-guide → pages ville les plus utiles (maillage interne)
export const villesParLieu: Record<string, string[]> = {
  antananarivo: ['antananarivo', 'aeroport-ivato'], andasibe: ['antananarivo', 'aeroport-ivato'], ambatolampy: ['antananarivo'], antsirabe: ['antananarivo'],
  ambositra: ['antananarivo'], ranomafana: ['antananarivo'], fianarantsoa: ['antananarivo'], ambalavao: ['tulear'], 'plateau-horombe': ['tulear'],
  isalo: ['tulear'], ilakaka: ['tulear'], zombitse: ['tulear'], tulear: ['tulear'], ifaty: ['tulear'], anakao: ['tulear'],
  andavadoaka: ['tulear', 'morondava'], morombe: ['tulear', 'morondava'], 'belo-sur-mer': ['morondava', 'tulear'], morondava: ['morondava'],
  'allee-des-baobabs': ['morondava'], kirindy: ['morondava'], 'belo-sur-tsiribihina': ['morondava'], 'tsingy-de-bemaraha': ['morondava'],
  mananjary: ['antananarivo'], 'canal-des-pangalanes': ['antananarivo'], manakara: ['antananarivo'],
  ankarafantsika: ['nosy-be'], mahajanga: ['nosy-be'], antsohihy: ['nosy-be'], ambanja: ['nosy-be'], 'nosy-be': ['nosy-be'],
};

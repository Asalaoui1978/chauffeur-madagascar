// Questions fréquentes affichées sur les grandes fiches du mini-guide (balisage FAQPage pour Google).
import type { Lang } from '../../i18n';

type QA = [string, string][];

export const guideFaq: Record<Lang, Record<string, QA>> = {
  fr: {
    andasibe: [
      ["Peut-on visiter Andasibe en une journée depuis Tana ?", "Oui, mais on passe 6 à 8 heures sur la route aller-retour. Une nuit sur place permet la balade de nuit et l'entrée en forêt au lever du jour, quand les indris chantent."],
      ["Est-on sûr de voir l'indri ?", "Presque toujours dans la réserve d'Analamazaotra : plusieurs familles sont habituées aux visiteurs et les guides savent où les trouver."],
      ["Faut-il un guide à Andasibe ?", "Oui, un guide local agréé est obligatoire dans le parc. Il se réserve à l'entrée, et Tripack peut s'en occuper pour vous."],
    ],
    isalo: [
      ["Combien de jours faut-il pour l'Isalo ?", "Deux nuits à Ranohira : une journée complète de randonnée et une demi-journée pour la Fenêtre de l'Isalo et le repos."],
      ["Peut-on se baigner dans le parc de l'Isalo ?", "Oui, à la Piscine naturelle et dans certains bassins des canyons. Prévoyez votre maillot."],
      ["Les randonnées de l'Isalo sont-elles difficiles ?", "Le circuit de la Piscine naturelle est accessible à tous avec de bonnes chaussures. Les circuits d'une journée et les canyons demandent plus d'endurance, surtout à cause de la chaleur."],
    ],
    'tsingy-de-bemaraha': [
      ["Quand peut-on visiter les Tsingy de Bemaraha ?", "Uniquement en saison sèche, en général de mai à mi-novembre. Les dates d'ouverture dépendent chaque année de l'état de la piste."],
      ["Faut-il un 4x4 pour aller aux Tsingy ?", "Oui. La piste depuis Morondava fait environ 200 km avec deux traversées en bac ; seul un 4x4 en bon état avec un chauffeur expérimenté la fait en sécurité."],
      ["Les Grands Tsingy sont-ils dangereux ?", "Le circuit est sécurisé (baudrier, câbles, ponts suspendus) et se fait avec un guide. Il faut une bonne condition physique et ne pas avoir le vertige ; sinon, les Petits Tsingy sont plus faciles."],
    ],
    'allee-des-baobabs': [
      ["L'Allée des Baobabs est-elle payante ?", "L'accès à l'Allée est libre ou soumis à une petite contribution locale selon les périodes : renseignez-vous sur place."],
      ["Quel est le meilleur moment pour voir l'Allée des Baobabs ?", "Le coucher du soleil pour l'ambiance, le lever du soleil pour le calme et la lumière douce."],
      ["Combien de temps de route depuis Morondava ?", "Environ 30 à 45 minutes pour une vingtaine de kilomètres."],
    ],
    ranomafana: [
      ["Combien de temps rester à Ranomafana ?", "Deux nuits : une balade de nuit le premier soir, la forêt le lendemain matin et les piscines d'eau chaude du village."],
      ["Quels lémuriens voit-on à Ranomafana ?", "Le lémur bambou doré, le grand hapalémur, le propithèque de Milne-Edwards, les lémurs à ventre roux et les lémurs bruns, entre autres."],
      ["Quelle est la meilleure saison pour Ranomafana ?", "D'avril à décembre. Il pleut souvent toute l'année, mais les pluies sont plus fortes de janvier à mars."],
    ],
    'nosy-be': [
      ["Peut-on aller à Nosy Be en voiture ?", "On va en voiture jusqu'au port d'Ankify, puis en bateau jusqu'à l'île (environ 45 minutes). Depuis Tana, la route fait environ 1 100 km."],
      ["Combien de jours prévoir à Nosy Be ?", "Quatre à cinq jours sur l'île pour les plages et deux ou trois excursions en bateau."],
      ["Quand partir à Nosy Be ?", "D'avril à décembre. La saison des pluies va de janvier à mars."],
    ],
  },
  en: {
    andasibe: [
      ['Can you visit Andasibe as a day trip from Tana?', 'Yes, but you spend 6 to 8 hours on the road there and back. A night there allows the night walk and entering the forest at daybreak, when the indris sing.'],
      ['Are you sure to see the indri?', 'Almost always in the Analamazaotra reserve: several families are used to visitors and the guides know where to find them.'],
      ['Do you need a guide in Andasibe?', 'Yes, a licensed local guide is compulsory in the park. You book one at the entrance, and Tripack can arrange it for you.'],
    ],
    isalo: [
      ['How many days do you need for Isalo?', 'Two nights in Ranohira: a full day of hiking and half a day for the Isalo Window and rest.'],
      ['Can you swim in Isalo National Park?', 'Yes, at the Natural Pool and in some pools in the canyons. Bring your swimsuit.'],
      ['Are the Isalo hikes difficult?', 'The Natural Pool circuit is accessible to everyone with good shoes. Full-day circuits and the canyons require more stamina, mainly because of the heat.'],
    ],
    'tsingy-de-bemaraha': [
      ['When can you visit the Tsingy de Bemaraha?', 'Only in the dry season, usually from May to mid-November. Opening dates depend each year on the state of the track.'],
      ['Do you need a 4x4 to reach the Tsingy?', 'Yes. The track from Morondava is about 200 km with two ferry crossings; only a 4x4 in good condition with an experienced driver does it safely.'],
      ['Are the Grands Tsingy dangerous?', "The circuit is secured (harness, cables, suspension bridges) and done with a guide. You need to be fit and not afraid of heights; otherwise the Petits Tsingy are easier."],
    ],
    'allee-des-baobabs': [
      ['Is there a fee for the Avenue of the Baobabs?', 'Access is free or subject to a small local contribution depending on the period: ask on site.'],
      ['When is the best time to see the Avenue of the Baobabs?', 'Sunset for the atmosphere, sunrise for calm and soft light.'],
      ['How long is the drive from Morondava?', 'About 30 to 45 minutes for some twenty kilometres.'],
    ],
    ranomafana: [
      ['How long should you stay in Ranomafana?', "Two nights: a night walk on the first evening, the forest the next morning and the village's hot pools."],
      ['Which lemurs can you see in Ranomafana?', "The golden bamboo lemur, the greater bamboo lemur, Milne-Edwards' sifaka, red-bellied lemurs and brown lemurs, among others."],
      ['What is the best season for Ranomafana?', 'April to December. It rains often all year, but rains are heavier from January to March.'],
    ],
    'nosy-be': [
      ['Can you get to Nosy Be by car?', 'You drive to the port of Ankify, then take a boat to the island (about 45 minutes). From Tana the road is about 1,100 km.'],
      ['How many days in Nosy Be?', 'Four to five days on the island for the beaches and two or three boat trips.'],
      ['When to go to Nosy Be?', 'April to December. The rainy season runs from January to March.'],
    ],
  },
  it: {
    andasibe: [
      ['Si può visitare Andasibe in giornata da Tana?', "Sì, ma si passano 6-8 ore in strada tra andata e ritorno. Una notte sul posto permette l'escursione notturna e l'ingresso nella foresta all'alba, quando gli indri cantano."],
      ["Si è sicuri di vedere l'indri?", 'Quasi sempre nella riserva di Analamazaotra: diverse famiglie sono abituate ai visitatori e le guide sanno dove trovarle.'],
      ['Serve una guida ad Andasibe?', "Sì, una guida locale autorizzata è obbligatoria nel parco. Si prenota all'ingresso e Tripack può occuparsene per voi."],
    ],
    isalo: [
      ["Quanti giorni servono per l'Isalo?", "Due notti a Ranohira: una giornata intera di trekking e mezza giornata per la Finestra dell'Isalo e il riposo."],
      ["Si può fare il bagno nel parco dell'Isalo?", 'Sì, alla Piscina naturale e in alcune vasche dei canyon. Portate il costume.'],
      ["Le escursioni dell'Isalo sono difficili?", 'Il circuito della Piscina naturale è alla portata di tutti con buone scarpe. I circuiti di una giornata e i canyon richiedono più resistenza, soprattutto per il caldo.'],
    ],
    'tsingy-de-bemaraha': [
      ['Quando si possono visitare gli Tsingy de Bemaraha?', "Solo nella stagione secca, in genere da maggio a metà novembre. Le date di apertura dipendono ogni anno dallo stato della pista."],
      ['Serve un 4x4 per andare agli Tsingy?', 'Sì. La pista da Morondava è di circa 200 km con due traversate in traghetto; solo un 4x4 in buono stato con un autista esperto la percorre in sicurezza.'],
      ['I Grandi Tsingy sono pericolosi?', 'Il percorso è attrezzato (imbragatura, cavi, ponti sospesi) e si fa con una guida. Serve una buona forma fisica e non soffrire di vertigini; altrimenti i Piccoli Tsingy sono più facili.'],
    ],
    'allee-des-baobabs': [
      ['Il Viale dei Baobab è a pagamento?', "L'accesso è libero o soggetto a un piccolo contributo locale secondo i periodi: informatevi sul posto."],
      ['Qual è il momento migliore per il Viale dei Baobab?', "Il tramonto per l'atmosfera, l'alba per la tranquillità e la luce morbida."],
      ['Quanto ci vuole da Morondava?', 'Circa 30-45 minuti per una ventina di chilometri.'],
    ],
    ranomafana: [
      ['Quanto fermarsi a Ranomafana?', "Due notti: escursione notturna la prima sera, la foresta la mattina dopo e le piscine d'acqua calda del villaggio."],
      ['Quali lemuri si vedono a Ranomafana?', 'Il lemure dorato del bambù, il grande apalemure, il sifaka di Milne-Edwards, i lemuri dal ventre rosso e i lemuri bruni, tra gli altri.'],
      ['Qual è la stagione migliore per Ranomafana?', "Da aprile a dicembre. Piove spesso tutto l'anno, ma le piogge sono più forti da gennaio a marzo."],
    ],
    'nosy-be': [
      ['Si può andare a Nosy Be in auto?', "Si va in auto fino al porto di Ankify, poi in barca fino all'isola (circa 45 minuti). Da Tana la strada è di circa 1.100 km."],
      ['Quanti giorni a Nosy Be?', "Quattro-cinque giorni sull'isola per le spiagge e due o tre escursioni in barca."],
      ['Quando andare a Nosy Be?', 'Da aprile a dicembre. La stagione delle piogge va da gennaio a marzo.'],
    ],
  },
  es: {
    andasibe: [
      ['¿Se puede visitar Andasibe en un día desde Tana?', 'Sí, pero se pasan de 6 a 8 horas en la carretera ida y vuelta. Una noche allí permite el paseo nocturno y entrar en el bosque al amanecer, cuando cantan los indris.'],
      ['¿Es seguro ver al indri?', 'Casi siempre en la reserva de Analamazaotra: varias familias están acostumbradas a los visitantes y los guías saben dónde encontrarlas.'],
      ['¿Hace falta guía en Andasibe?', 'Sí, un guía local autorizado es obligatorio en el parque. Se reserva en la entrada y Tripack puede encargarse por usted.'],
    ],
    isalo: [
      ['¿Cuántos días hacen falta para Isalo?', 'Dos noches en Ranohira: un día completo de caminata y medio día para la Ventana de Isalo y descansar.'],
      ['¿Se puede nadar en el parque de Isalo?', 'Sí, en la Piscina natural y en algunas pozas de los cañones. Lleve el bañador.'],
      ['¿Son difíciles las caminatas de Isalo?', 'El circuito de la Piscina natural es accesible para todos con buen calzado. Los circuitos de un día y los cañones exigen más resistencia, sobre todo por el calor.'],
    ],
    'tsingy-de-bemaraha': [
      ['¿Cuándo se pueden visitar los Tsingy de Bemaraha?', 'Solo en la estación seca, normalmente de mayo a mediados de noviembre. Las fechas de apertura dependen cada año del estado de la pista.'],
      ['¿Hace falta un 4x4 para ir a los Tsingy?', 'Sí. La pista desde Morondava tiene unos 200 km con dos cruces en transbordador; solo un 4x4 en buen estado con un chófer experimentado la hace con seguridad.'],
      ['¿Son peligrosos los Grandes Tsingy?', 'El circuito está asegurado (arnés, cables, puentes colgantes) y se hace con guía. Hace falta buena forma física y no tener vértigo; si no, los Pequeños Tsingy son más fáciles.'],
    ],
    'allee-des-baobabs': [
      ['¿Hay que pagar para ver la Avenida de los Baobabs?', 'El acceso es libre o con una pequeña contribución local según la época: infórmese allí.'],
      ['¿Cuál es el mejor momento para ver la Avenida de los Baobabs?', 'El atardecer por el ambiente, el amanecer por la calma y la luz suave.'],
      ['¿Cuánto se tarda desde Morondava?', 'Unos 30 a 45 minutos para una veintena de kilómetros.'],
    ],
    ranomafana: [
      ['¿Cuánto tiempo quedarse en Ranomafana?', 'Dos noches: paseo nocturno la primera noche, el bosque a la mañana siguiente y las piscinas de agua caliente del pueblo.'],
      ['¿Qué lémures se ven en Ranomafana?', 'El lémur dorado del bambú, el gran lémur del bambú, el sifaka de Milne-Edwards, los lémures de vientre rojo y los lémures pardos, entre otros.'],
      ['¿Cuál es la mejor temporada para Ranomafana?', 'De abril a diciembre. Llueve a menudo todo el año, pero las lluvias son más intensas de enero a marzo.'],
    ],
    'nosy-be': [
      ['¿Se puede ir a Nosy Be en coche?', 'Se va en coche hasta el puerto de Ankify y luego en barco hasta la isla (unos 45 minutos). Desde Tana la carretera tiene unos 1.100 km.'],
      ['¿Cuántos días en Nosy Be?', 'De cuatro a cinco días en la isla para las playas y dos o tres excursiones en barco.'],
      ['¿Cuándo ir a Nosy Be?', 'De abril a diciembre. La temporada de lluvias va de enero a marzo.'],
    ],
  },
};

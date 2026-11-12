// Itinéraires. Les distances et durées sont indicatives (elles varient selon la saison et l'état des routes).
export type Jour = { jour: string; titre: string; route?: string; texte: string; lieux: string[] };

export type Itineraire = {
  slug: string;
  title: string;
  short: string;
  description: string;
  distance: string;
  duree: string;
  saison: string;
  vehicule: string;
  intro: string[];
  route: string[]; // slugs des lieux, dans l'ordre, pour la carte
  jours: Jour[];
  conseils: string[];
  photo: string; // clé dans src/data/photos.ts
  themes: string[]; // caractéristiques touristiques
  pointsForts: string[];
  idealPour: string;
  niveau: 'Facile' | 'Modéré' | 'Aventure';
  image?: string; // [À COMPLÉTER]
};

export const itineraires: Itineraire[] = [
  {
    slug: 'rn7-tana-tulear',
    title: 'La Route du Sud : la RN7 de Tana à Tuléar',
    short: 'RN7 : Tana → Tuléar',
    description: "Circuit RN7 avec chauffeur de Tana à Tuléar : Antsirabe, Ambositra, Ranomafana, Fianarantsoa, Isalo… L'itinéraire jour par jour, la route et les conseils de Tripack.",
    distance: 'environ 950 km',
    duree: '9 à 12 jours conseillés (2 à 3 jours en direct)',
    saison: "Toute l'année (route goudronnée), idéal d'avril à novembre",
    vehicule: 'Voiture ou 4x4',
    photo: 'isalo',
    themes: ['Paysages', 'Lémuriens', 'Randonnée', 'Culture', 'Plages'],
    pointsForts: ["Les rizières en terrasses des Hautes Terres", "La forêt humide de Ranomafana", "Les makis catta d'Anja", "Les canyons et piscines naturelles de l'Isalo", "La mer turquoise à Ifaty ou Anakao"],
    idealPour: 'Un premier voyage à Madagascar, en couple, entre amis ou en famille',
    niveau: 'Facile',
    intro: [
      "La RN7 est la route mythique de Madagascar. En un peu moins de mille kilomètres, elle traverse presque tous les paysages de l'île : les rizières en terrasses des Hautes Terres, la forêt tropicale humide, les savanes infinies du Sud, les canyons de l'Isalo, puis la forêt d'épineux et la mer turquoise du canal du Mozambique.",
      "La route est goudronnée sur toute sa longueur, mais certaines portions sont dégradées et les nids-de-poule obligent à rouler doucement. Les zébus, les charrettes et les enfants qui rentrent de l'école sont aussi de la partie. Avec un chauffeur qui connaît chaque virage, vous regardez le paysage au lieu de la route.",
    ],
    route: ['antananarivo', 'ambatolampy', 'antsirabe', 'ambositra', 'ranomafana', 'fianarantsoa', 'ambalavao', 'plateau-horombe', 'isalo', 'ilakaka', 'zombitse', 'tulear', 'ifaty'],
    jours: [
      { jour: 'Jour 1', titre: 'Tana → Antsirabe', route: '≈ 170 km · 4 à 5 h', texte: "Départ tôt pour éviter les embouteillages. Pause à Ambatolampy chez les fondeurs d'aluminium, puis montée vers Antsirabe au milieu des rizières et des villages de briques rouges.", lieux: ['antananarivo', 'ambatolampy', 'antsirabe'] },
      { jour: 'Jour 2', titre: 'Antsirabe → Ambositra', route: '≈ 90 km · 2 h', texte: "Matinée en pousse-pousse et visite des artisans d'Antsirabe, détour possible par le lac Tritriva. L'après-midi, route vers Ambositra et ses ateliers de marqueterie.", lieux: ['antsirabe', 'ambositra'] },
      { jour: 'Jour 3', titre: 'Ambositra → Ranomafana', route: '≈ 140 km · 4 h', texte: "La route descend vers l'est et la végétation change d'un coup : on entre dans la forêt humide. Arrivée à Ranomafana, bain dans les piscines d'eau chaude, balade de nuit.", lieux: ['ambositra', 'ranomafana'] },
      { jour: 'Jour 4', titre: 'Parc national de Ranomafana', texte: 'Journée de randonnée dans le parc avec un guide local, à la recherche du lémur bambou doré.', lieux: ['ranomafana'] },
      { jour: 'Jour 5', titre: 'Ranomafana → Fianarantsoa → Ambalavao', route: '≈ 120 km · 3 h', texte: 'Visite de la haute ville de Fianarantsoa, détour possible par les plantations de thé de Sahambavy, puis Ambalavao et son papier Antemoro.', lieux: ['ranomafana', 'fianarantsoa', 'ambalavao'] },
      { jour: 'Jour 6', titre: 'Ambalavao → Anja → Isalo', route: '≈ 280 km · 5 à 6 h', texte: "Les makis catta d'Anja le matin, puis la grande traversée du plateau de l'Horombe. Arrivée à Ranohira pour le coucher de soleil à la Fenêtre de l'Isalo.", lieux: ['ambalavao', 'plateau-horombe', 'isalo'] },
      { jour: 'Jour 7', titre: "Parc national de l'Isalo", texte: 'Randonnée vers la Piscine naturelle et le Canyon des Makis. Baignade et pique-nique dans les canyons.', lieux: ['isalo'] },
      { jour: 'Jour 8', titre: 'Isalo → Tuléar', route: '≈ 240 km · 4 à 5 h', texte: "Traversée de la ville du saphir, Ilakaka, puis pause nature à Zombitse. La chaleur monte, les baobabs apparaissent : arrivée à Tuléar, au bord de la mer.", lieux: ['isalo', 'ilakaka', 'zombitse', 'tulear'] },
      { jour: 'Jours 9-10', titre: 'Plages : Ifaty ou Anakao', texte: "Repos bien mérité au nord (Ifaty, Mangily) ou au sud en bateau (Anakao). Ou bien on continue vers la côte Ouest et les Tsingy !", lieux: ['ifaty', 'anakao'] },
    ],
    conseils: [
      "Ne faites pas la RN7 en 3 jours : vous verriez surtout le bitume. Dix jours, c'est le bon rythme.",
      "Le retour vers Tana peut se faire en avion depuis Tuléar, ce qui évite de refaire toute la route.",
      "Prévoyez des vêtements chauds pour les Hautes Terres et des vêtements légers pour le Sud : on passe de 10 °C à 35 °C dans le même voyage.",
    ],
  },
  {
    slug: 'cote-ouest-tsingy',
    title: 'La Côte Ouest et les Tsingy : de Tuléar à Belo-sur-Mer, Morondava et Bemaraha',
    short: 'Côte Ouest : Tuléar → Tsingy',
    description: "Circuit aventure en 4x4 avec chauffeur de Tuléar aux Tsingy de Bemaraha par Andavadoaka, Belo-sur-Mer, Morondava et l'Allée des Baobabs. Jour par jour.",
    distance: 'environ 800 km de pistes',
    duree: '11 à 13 jours',
    saison: "Saison sèche uniquement (environ de mai à mi-novembre, à vérifier chaque année)",
    vehicule: '4x4 obligatoire',
    photo: 'allee-des-baobabs',
    themes: ['Aventure', 'Paysages', 'Plages', 'Randonnée', 'Lémuriens'],
    pointsForts: ['Les pistes de sable et les villages vezo', 'Les goélettes de Belo-sur-Mer', "L'Allée des Baobabs au coucher du soleil", 'Le fossa dans la forêt de Kirindy', 'Les Tsingy de Bemaraha (UNESCO)'],
    idealPour: "Les voyageurs qui aiment l'aventure et les lieux hors des sentiers battus",
    niveau: 'Aventure',
    intro: [
      "Voici l'itinéraire des voyageurs qui veulent sortir des sentiers battus. Pas de goudron ou presque : des pistes de sable, des traversées de fleuves en bac ou en pirogue, des villages de pêcheurs vezo où l'on voit peu de touristes, et des baobabs à perte de vue.",
      "Le voyage se termine en apothéose avec l'Allée des Baobabs et les Tsingy de Bemaraha, classés au patrimoine mondial de l'UNESCO. C'est exigeant, c'est parfois long, mais c'est le Madagascar dont on se souvient toute sa vie.",
    ],
    route: ['tulear', 'ifaty', 'andavadoaka', 'morombe', 'belo-sur-mer', 'morondava', 'allee-des-baobabs', 'kirindy', 'belo-sur-tsiribihina', 'tsingy-de-bemaraha'],
    jours: [
      { jour: 'Jour 1', titre: 'Tuléar → Ifaty → Andavadoaka', route: '≈ 200 km de piste · 7 à 9 h', texte: "Départ à l'aube. Après Ifaty, le goudron s'arrête : la piste de sable longe la côte, entre forêt d'épineux et villages de pêcheurs.", lieux: ['tulear', 'ifaty', 'andavadoaka'] },
      { jour: 'Jour 2', titre: 'Andavadoaka', texte: 'Journée libre : lagon, snorkeling, sortie en pirogue avec les pêcheurs.', lieux: ['andavadoaka'] },
      { jour: 'Jour 3', titre: 'Andavadoaka → Morombe', route: '≈ 50 km · 2 h', texte: "Courte étape jusqu'à Morombe et son front de mer. Après-midi tranquille au bord de l'eau.", lieux: ['andavadoaka', 'morombe'] },
      { jour: 'Jour 4', titre: 'Morombe → Belo-sur-Mer', route: '≈ 170 km · 7 à 9 h', texte: "La grande étape : traversée du fleuve Mangoky, pistes de sable, forêts de baobabs. Arrivée à Belo-sur-Mer au coucher du soleil.", lieux: ['morombe', 'belo-sur-mer'] },
      { jour: 'Jour 5', titre: 'Belo-sur-Mer', texte: 'Visite des chantiers de goélettes, des marais salants et sortie en pirogue sur le lagon.', lieux: ['belo-sur-mer'] },
      { jour: 'Jour 6', titre: 'Belo-sur-Mer → Morondava', route: '≈ 80 km · 3 à 4 h', texte: "Piste vers le nord en longeant le parc de Kirindy-Mitea. Le soir : premier coucher de soleil sur l'Allée des Baobabs.", lieux: ['belo-sur-mer', 'morondava', 'allee-des-baobabs'] },
      { jour: 'Jour 7', titre: 'Morondava → Kirindy', route: '≈ 60 km · 2 h', texte: "Lever du soleil sur les baobabs, puis les baobabs amoureux. Route vers la forêt de Kirindy, balade de nuit à la recherche du fossa.", lieux: ['allee-des-baobabs', 'kirindy'] },
      { jour: 'Jour 8', titre: 'Kirindy → Belo-sur-Tsiribihina → Bekopaka', route: '≈ 150 km · 6 à 8 h', texte: 'Traversée de la Tsiribihina en bac, puis piste jusqu\'au fleuve Manambolo et le village de Bekopaka, porte des Tsingy.', lieux: ['kirindy', 'belo-sur-tsiribihina', 'tsingy-de-bemaraha'] },
      { jour: 'Jour 9', titre: 'Les Grands Tsingy', texte: 'Journée entière dans les Grands Tsingy : passerelles, ponts suspendus, panoramas sur les pics calcaires.', lieux: ['tsingy-de-bemaraha'] },
      { jour: 'Jour 10', titre: 'Petits Tsingy et gorges de la Manambolo', texte: 'Matinée dans les Petits Tsingy, après-midi en pirogue dans les gorges et les grottes de la Manambolo.', lieux: ['tsingy-de-bemaraha'] },
      { jour: 'Jour 11', titre: 'Bekopaka → Morondava', route: '≈ 200 km · 8 à 10 h', texte: 'Retour vers Morondava par la même piste. Dernière soirée face à la mer.', lieux: ['tsingy-de-bemaraha', 'morondava'] },
      { jour: 'Jour 12', titre: 'Retour vers Tana', texte: "En avion depuis Morondava, ou par la route en deux jours via Miandrivazo et Antsirabe.", lieux: ['morondava'] },
    ],
    conseils: [
      "Cet itinéraire se fait uniquement en saison sèche : pendant les pluies, les pistes deviennent impraticables et le parc des Tsingy ferme.",
      "Les étapes sont longues et poussiéreuses : un foulard, des lunettes de soleil et beaucoup d'eau.",
      "On peut aussi le faire dans l'autre sens, ou le combiner avec la RN7 pour une grande boucle de trois semaines.",
    ],
  },
  {
    slug: 'sud-est-manakara-pangalanes',
    title: 'Le Sud-Est : de Tana à Ranomafana, Mananjary et Manakara',
    short: 'Sud-Est : Tana → Manakara',
    description: "Circuit avec chauffeur de Tana vers le Sud-Est de Madagascar : Antsirabe, Ranomafana, Mananjary, le canal des Pangalanes et Manakara, terminus du train FCE.",
    distance: 'environ 1 100 km (aller-retour)',
    duree: '9 à 11 jours',
    saison: "D'avril à décembre de préférence (la côte Est est arrosée toute l'année, cyclones possibles de janvier à mars)",
    vehicule: 'Voiture ou 4x4',
    photo: 'canal-des-pangalanes',
    themes: ['Lémuriens', 'Culture', 'Paysages', 'Randonnée', 'Aventure'],
    pointsForts: ['La forêt humide et les lémuriens de Ranomafana', 'La descente spectaculaire des Hautes Terres vers l\'océan', 'Le canal des Pangalanes en pirogue', 'Les plantations de vanille, café et poivre', 'Le mythique train FCE à Manakara'],
    idealPour: 'Les amoureux de nature verte, de vie locale et de voyages loin de la foule',
    niveau: 'Modéré',
    intro: [
      "Le Sud-Est est la face verte et humide de Madagascar. On commence par la RN7 et ses rizières, puis à Ranomafana, la route plonge vers l'est : forêt tropicale, cascades, et soudain l'océan Indien.",
      "Sur la côte, la vie suit le canal des Pangalanes, une longue voie d'eau qui longe la mer. Pirogues, villages de pêcheurs, plantations d'épices, et à Manakara, le terminus du célèbre train Fianarantsoa - Côte Est. Un voyage authentique, encore peu fréquenté.",
    ],
    route: ['antananarivo', 'antsirabe', 'ambositra', 'ranomafana', 'mananjary', 'canal-des-pangalanes', 'manakara', 'fianarantsoa'],
    jours: [
      { jour: 'Jour 1', titre: 'Tana → Antsirabe', route: '≈ 170 km · 4 à 5 h', texte: "Départ de Tana par la RN7, arrêt chez les fondeurs d'Ambatolampy, arrivée dans la ville des pousse-pousse.", lieux: ['antananarivo', 'ambatolampy', 'antsirabe'] },
      { jour: 'Jour 2', titre: 'Antsirabe → Ambositra', route: '≈ 90 km · 2 h', texte: "Matinée au lac Tritriva ou chez les artisans, puis route vers Ambositra et ses sculpteurs.", lieux: ['antsirabe', 'ambositra'] },
      { jour: 'Jour 3', titre: 'Ambositra → Ranomafana', route: '≈ 140 km · 4 h', texte: 'On quitte la RN7 pour la RN25 : la route descend dans la forêt humide jusqu\'au village de Ranomafana.', lieux: ['ambositra', 'ranomafana'] },
      { jour: 'Jour 4', titre: 'Parc national de Ranomafana', texte: 'Randonnée à la recherche des lémuriens, cascades, puis balade de nuit.', lieux: ['ranomafana'] },
      { jour: 'Jour 5', titre: 'Ranomafana → Mananjary', route: '≈ 150 km · 4 h', texte: "La descente vers la côte : cascades, villages, plantations de café, jusqu'à l'océan Indien.", lieux: ['ranomafana', 'mananjary'] },
      { jour: 'Jour 6', titre: 'Le canal des Pangalanes', texte: 'Journée en pirogue sur le canal, entre lagunes et villages de pêcheurs.', lieux: ['canal-des-pangalanes'] },
      { jour: 'Jour 7', titre: 'Mananjary → Manakara', route: '≈ 180 km · 4 h', texte: 'Route vers le sud à travers les plantations de vanille, de poivre et de girofle.', lieux: ['mananjary', 'manakara'] },
      { jour: 'Jour 8', titre: 'Manakara', texte: "La gare du train FCE, le bord de mer, une sortie sur les Pangalanes. Si le train circule, on peut en faire un tronçon pendant que je suis par la route.", lieux: ['manakara', 'canal-des-pangalanes'] },
      { jour: 'Jour 9', titre: 'Manakara → Fianarantsoa', route: '≈ 250 km · 6 à 7 h', texte: 'Remontée vers les Hautes Terres. Soirée dans la haute ville de Fianarantsoa.', lieux: ['manakara', 'fianarantsoa'] },
      { jour: 'Jour 10', titre: 'Fianarantsoa → Tana', route: '≈ 410 km · 9 à 10 h', texte: 'Retour vers la capitale, ou bien on continue vers le sud par la RN7 jusqu\'à l\'Isalo et Tuléar !', lieux: ['fianarantsoa', 'antananarivo'] },
    ],
    conseils: [
      "La côte Est est humide toute l'année : prévoyez un imperméable léger et un anti-moustiques efficace.",
      "Le train FCE ne circule pas toujours selon un horaire fixe : on vérifie sur place quelques jours avant.",
      "Cet itinéraire se combine très bien avec la RN7 : Sud-Est d'abord, puis Isalo et Tuléar.",
    ],
  },
  {
    slug: 'tana-nosy-be',
    title: 'La Route du Nord : de Tana à Nosy Be',
    short: 'Nord : Tana → Nosy Be',
    description: "Circuit avec chauffeur de Tana à Nosy Be par la RN4 et la RN6 : Ankarafantsika, Mahajanga, la vallée du cacao à Ambanja, puis l'île aux parfums.",
    distance: 'environ 1 100 km',
    duree: '8 à 10 jours (dont 3 à Nosy Be)',
    saison: "D'avril à décembre (la saison des pluies, de janvier à mars, rend la RN6 difficile)",
    vehicule: '4x4 conseillé',
    photo: 'nosy-be',
    themes: ['Plages', 'Lémuriens', 'Paysages', 'Culture', 'Aventure'],
    pointsForts: ["Les sifakas d'Ankarafantsika", 'Le Cirque Rouge et le vieux baobab de Mahajanga', 'Les plantations de cacao et d\'ylang-ylang du Sambirano', 'Les plages et îlots de Nosy Be', 'Le snorkeling à Nosy Tanikely'],
    idealPour: 'Ceux qui veulent finir leur voyage les pieds dans l\'eau, après une vraie traversée du pays',
    niveau: 'Modéré',
    intro: [
      "Plutôt que de prendre l'avion pour Nosy Be, pourquoi ne pas traverser Madagascar par la route ? De Tana, la RN4 descend des Hautes Terres vers les forêts sèches de l'Ouest, puis la RN6 remonte vers le Nord, à travers des paysages de savane, de baobabs et de plantations.",
      "En chemin : les lémuriens d'Ankarafantsika, la ville portuaire de Mahajanga, la vallée du cacao à Ambanja. Et pour finir, le bateau vers Nosy Be, l'île aux parfums, ses plages et ses îlots.",
    ],
    route: ['antananarivo', 'ankarafantsika', 'mahajanga', 'antsohihy', 'ambanja', 'nosy-be'],
    jours: [
      { jour: 'Jour 1', titre: 'Tana → Ankarafantsika', route: '≈ 450 km · 9 à 10 h', texte: "Grosse journée de route sur la RN4 : on quitte les Hautes Terres pour les plaines de l'Ouest. Arrivée au parc en fin de journée.", lieux: ['antananarivo', 'ankarafantsika'] },
      { jour: 'Jour 2', titre: "Parc d'Ankarafantsika", texte: 'Balade du matin avec les sifakas de Coquerel, le lac Ravelobe, puis le canyon d\'Ankarokaroka. Balade de nuit.', lieux: ['ankarafantsika'] },
      { jour: 'Jour 3', titre: 'Ankarafantsika → Mahajanga', route: '≈ 120 km · 2 à 3 h', texte: 'Arrivée à Mahajanga, visite du vieux baobab et coucher de soleil au Cirque Rouge.', lieux: ['ankarafantsika', 'mahajanga'] },
      { jour: 'Jour 4', titre: 'Mahajanga → Antsohihy', route: '≈ 420 km · 8 à 9 h', texte: "On rejoint la RN6 vers le Nord : savanes, baobabs et petits villages. Nuit à Antsohihy.", lieux: ['mahajanga', 'antsohihy'] },
      { jour: 'Jour 5', titre: 'Antsohihy → Ambanja', route: '≈ 220 km · 5 h', texte: 'La route entre dans la vallée verte du Sambirano. Visite d\'une plantation de cacao.', lieux: ['antsohihy', 'ambanja'] },
      { jour: 'Jour 6', titre: 'Ambanja → Ankify → Nosy Be', route: '≈ 20 km + 45 min de bateau', texte: "Court trajet jusqu'au port d'Ankify, puis traversée en bateau vers Nosy Be.", lieux: ['ambanja', 'nosy-be'] },
      { jour: 'Jours 7-9', titre: 'Nosy Be et ses îles', texte: 'Plages, réserve de Lokobe, coucher de soleil au mont Passot, excursions vers Nosy Komba, Nosy Tanikely ou Nosy Iranja.', lieux: ['nosy-be'] },
    ],
    conseils: [
      "La RN4 et surtout la RN6 ont des tronçons très abîmés : les temps de route peuvent s'allonger. On ne roule jamais de nuit.",
      "Le retour se fait en avion depuis Nosy Be (aéroport de Fascène) ou par la route avec moi.",
      "On peut prolonger vers Diego-Suarez, la montagne d'Ambre et les Tsingy rouges : demandez-moi !",
    ],
  },
];

export const getItineraire = (slug: string) => itineraires.find((i) => i.slug === slug);

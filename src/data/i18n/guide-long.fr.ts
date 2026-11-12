// Contenu long des fiches les plus recherchées du mini-guide (affiché sous « À voir »).
// Chiffres sensibles (tarifs, saisons) : toujours formulés comme indicatifs, à revérifier chaque année.
import type { GuideLong } from './types';

const frais = "Les droits d'entrée des parcs gérés par Madagascar National Parks ont doublé au 1er novembre 2026. Avant cette hausse, un visiteur étranger payait environ 45 000 ariary par jour dans la plupart des parcs : vérifiez le nouveau tarif au guichet, où l'on paie en espèces, en ariary.";

export const guideLong: Record<string, GuideLong> = {
  andasibe: {
    sections: [
      { h: "Le chant de l'indri", p: [
        "Andasibe, c'est d'abord un son. Le matin, un cri long et plaintif traverse la forêt et se répond d'une colline à l'autre : c'est l'indri, le plus grand lémurien vivant, qui ne survit qu'en liberté et qu'on ne voit nulle part ailleurs dans cette région. Les familles d'indris de la réserve d'Analamazaotra sont habituées à la présence humaine, ce qui rend la rencontre presque certaine avec un bon guide.",
        "Le parc national d'Andasibe-Mantadia réunit deux secteurs. Analamazaotra, juste à côté du village, est le plus accessible : des sentiers de une à quatre heures, peu de dénivelé, et les indris au rendez-vous. Mantadia, plus loin sur une piste, est une forêt primaire plus sauvage et plus pentue, pour ceux qui veulent marcher longtemps et voir le propithèque à diadème, l'un des plus beaux lémuriens de l'île.",
      ]},
      { h: "Ce qu'on voit en une journée", p: [
        "En plus des indris, on croise souvent des lémurs bruns, des hapalémurs gris, des caméléons géants (dont le caméléon de Parson), des grenouilles colorées et de nombreux oiseaux endémiques. La forêt est humide toute l'année : la végétation est dense, les fougères arborescentes et les orchidées sont partout.",
        "Le soir, une balade de nuit en bordure de forêt permet de voir les microcèbes, les caméléons endormis sur les branches et les insectes étonnants de la forêt pluviale. C'est souvent le moment préféré des enfants.",
      ]},
      { h: "Combien de temps prévoir ?", p: [
        "Andasibe est l'excursion idéale au départ de Tana, en début ou en fin de voyage. Une nuit sur place est vraiment conseillée : on arrive l'après-midi, on fait la balade de nuit, et on entre dans la forêt tôt le lendemain matin, quand les indris chantent. En aller-retour dans la journée, c'est faisable mais on passe plus de temps sur la route que dans la forêt.",
        "Avec deux nuits, on ajoute Mantadia ou une réserve communautaire voisine, et pourquoi pas une visite de l'île aux lémuriens de Vakona, plus touristique mais appréciée des familles.",
      ]},
      { h: "La route depuis Tana", p: [
        "On quitte la capitale par l'est et on suit la RN2, la route de Tamatave. Elle est goudronnée et passe par des collines, des rizières et des villages de bord de route où l'on achète des fruits. Comptez environ 150 km, soit trois à quatre heures selon la circulation à la sortie de Tana et les camions qui montent du port.",
      ]},
    ],
    pratique: [
      ["Distance depuis Tana", "Environ 150 km par la RN2, 3 à 4 h de route"],
      ["Durée conseillée", "1 nuit minimum, 2 nuits pour Mantadia"],
      ["Meilleure période", "Toute l'année ; septembre à décembre est souvent plus sec et agréable"],
      ["Entrée et guide", "Guide local obligatoire. " + frais],
      ["Où dormir", "Lodges et hôtels au village d'Andasibe, pour tous les budgets"],
    ],
  },

  isalo: {
    sections: [
      { h: "Un décor de western au cœur du Sud", p: [
        "Après les rizières des Hautes Terres et le vide du plateau de l'Horombe, l'Isalo surgit comme une muraille de grès sculptée par le vent et l'eau. Le massif est découpé de canyons profonds où coulent des ruisseaux bordés de palmiers et de pandanus : on passe en quelques minutes d'un paysage de désert à une oasis.",
        "C'est l'un des parcs les plus visités de Madagascar, et il le mérite. Il plaît à tout le monde : les marcheurs pour ses randonnées, les familles pour ses piscines naturelles, les photographes pour ses couleurs au coucher du soleil.",
      ]},
      { h: "Les randonnées à ne pas manquer", p: [
        "La Piscine naturelle est la balade classique : une marche de quelques heures sur le plateau, puis un bassin d'eau claire au pied d'une petite cascade, entouré de pandanus. On peut s'y baigner. Le circuit combine souvent la Piscine naturelle avec les points de vue sur le massif.",
        "Le Canyon des Makis et le Canyon des Rats s'enfoncent dans une gorge étroite et fraîche. On y croise souvent des lémurs bruns et des propithèques de Verreaux, qui bondissent d'arbre en arbre. Pour les bons marcheurs, il existe des circuits d'une journée entière, et même des randonnées de plusieurs jours avec nuits sous la tente.",
        "En fin de journée, tout le monde se retrouve à la Fenêtre de l'Isalo, une arche naturelle dans la roche à travers laquelle on regarde le soleil se coucher. Je vous y dépose en voiture, il n'y a presque pas de marche.",
      ]},
      { h: "Ranohira, le village de base", p: [
        "Le village de Ranohira, au bord de la RN7, est la porte d'entrée du parc : c'est là que l'on paie l'entrée et que l'on rencontre son guide. Les hébergements vont de la petite chambre d'hôtes au lodge de standing, certains installés dans les rochers avec une vue superbe.",
        "Je conseille deux nuits : une journée complète dans le parc, et une demi-journée pour la Fenêtre et la détente. Avec une seule nuit, on ne voit qu'une partie de l'Isalo et on repart frustré.",
      ]},
      { h: "Chaleur et organisation", p: [
        "Il fait très chaud en milieu de journée, surtout d'octobre à mars. On part tôt le matin, on prend beaucoup d'eau, un chapeau et de la crème solaire. Les chaussures de marche fermées sont indispensables, les sentiers sont rocailleux. Je vous attends à l'arrivée de la randonnée avec de l'eau fraîche.",
      ]},
    ],
    pratique: [
      ["Accès", "Sur la RN7, environ 240 km avant Tuléar ; entrée du parc à Ranohira"],
      ["Durée conseillée", "2 nuits à Ranohira"],
      ["Meilleure période", "Avril à novembre ; très chaud de décembre à mars"],
      ["Entrée et guide", "Guide local obligatoire. " + frais],
      ["À emporter", "Eau, chapeau, crème solaire, maillot de bain, chaussures fermées"],
    ],
  },

  'tsingy-de-bemaraha': {
    sections: [
      { h: "Une forêt de pierre classée à l'UNESCO", p: [
        "Les Tsingy de Bemaraha sont un immense plateau de calcaire que l'eau de pluie a creusé pendant des millions d'années jusqu'à former des aiguilles tranchantes comme des lames. « Tsingy » voudrait dire « là où l'on ne peut pas marcher pieds nus ». Le site est inscrit au patrimoine mondial de l'UNESCO et c'est, pour beaucoup de voyageurs, le moment le plus fort de leur voyage.",
        "Le village de Bekopaka, sur la rive du fleuve Manambolo, est la base pour visiter le parc. On y dort deux nuits au minimum pour faire les deux grands circuits sans courir.",
      ]},
      { h: "Grands Tsingy et Petits Tsingy", p: [
        "Les Grands Tsingy sont à environ une heure de piste au nord de Bekopaka. Le circuit est aérien : on progresse avec un baudrier sur des passages de via ferrata, on grimpe des échelles, on traverse des ponts suspendus au-dessus de crevasses, et l'on arrive sur des belvédères d'où l'on domine une mer de pointes grises. Il faut une bonne condition physique et ne pas avoir le vertige.",
        "Les Petits Tsingy, tout près du village, sont plus accessibles et donnent déjà une très bonne idée du site. Ils conviennent aux familles et à ceux qui ne veulent pas de via ferrata. On complète souvent avec une descente en pirogue des gorges de la Manambolo, entre falaises et grottes.",
        "Dans la forêt sèche du parc vivent des propithèques de Decken, tout blancs, des lémurs bruns et de nombreux oiseaux.",
      ]},
      { h: "L'accès : une vraie aventure en 4x4", p: [
        "Depuis Morondava, on remonte vers le nord par la piste : environ 200 km, une grosse journée de 8 à 10 heures. On traverse la Tsiribihina en bac à Belo-sur-Tsiribihina, puis la Manambolo juste avant Bekopaka. La piste est poussiéreuse, parfois défoncée, et un 4x4 en bon état avec un chauffeur qui la connaît est indispensable.",
        "On peut couper le trajet en dormant près de la forêt de Kirindy ou à Belo-sur-Tsiribihina. Au total, il faut compter au moins quatre jours aller-retour depuis Morondava, et une semaine depuis Tana par la route.",
      ]},
      { h: "Quand partir ?", p: [
        "Le parc n'est accessible qu'en saison sèche, en général de mai à mi-novembre. L'ouverture dépend de l'état de la piste après la saison des pluies : début mai, certains circuits peuvent encore être fermés, et les hôtels haut de gamme ouvrent parfois plus tard. De décembre à avril, la piste est le plus souvent impraticable. Je vérifie chaque année les dates exactes avant de confirmer un circuit.",
      ]},
    ],
    pratique: [
      ["Accès", "Depuis Morondava : environ 200 km de piste, 8 à 10 h en 4x4, 2 traversées en bac"],
      ["Durée conseillée", "4 jours minimum aller-retour depuis Morondava, dont 2 nuits à Bekopaka"],
      ["Saison", "Saison sèche uniquement, en général de mai à mi-novembre (à vérifier chaque année)"],
      ["Entrée et guide", "Guide obligatoire ; l'entrée des Tsingy est plus chère que celle des autres parcs. " + frais],
      ["À emporter", "Gants, chaussures fermées à bonne semelle, frontale, eau"],
    ],
  },

  'allee-des-baobabs': {
    sections: [
      { h: "L'image de Madagascar", p: [
        "À une vingtaine de kilomètres de Morondava, une piste de terre rouge passe entre une vingtaine de baobabs géants alignés. Ce sont des Adansonia grandidieri, l'espèce la plus majestueuse des baobabs malgaches, avec des troncs lisses et droits qui montent à plus de 25 mètres. Certains auraient plusieurs siècles. Le site est protégé comme monument naturel.",
        "Les baobabs sont les survivants d'une ancienne forêt dense, défrichée au fil du temps pour les cultures. Ils restent debout au milieu des rizières et des champs, ce qui renforce encore leur silhouette.",
      ]},
      { h: "Coucher ou lever du soleil ?", p: [
        "Le coucher du soleil est le moment le plus célèbre : les troncs virent à l'orange, le ciel s'embrase derrière les arbres, et les charrettes à zébus passent sur la piste. Mais c'est aussi le moment où tout le monde est là.",
        "Mon conseil : revenez au lever du soleil. Il y a très peu de monde, la lumière est douce et les reflets dans les mares, après la saison des pluies, sont magnifiques. Les photographes préfèrent souvent le matin.",
      ]},
      { h: "Autour de l'Allée", p: [
        "À quelques kilomètres se trouvent les « Baobabs amoureux », deux troncs enlacés qui ont donné lieu à une jolie légende, et le baobab sacré, entouré d'offrandes, que l'on respecte en suivant les consignes des villageois.",
        "L'Allée se trouve sur la route de Kirindy et des Tsingy : on la visite souvent le premier soir, en arrivant à Morondava, puis on la retraverse en partant vers le nord. Elle se combine aussi avec une balade en pirogue dans les mangroves de Morondava.",
      ]},
      { h: "Faut-il un 4x4 ?", p: [
        "Non, l'Allée est accessible en voiture depuis Morondava par une route en bon état puis quelques kilomètres de piste. En revanche, le 4x4 devient indispensable dès qu'on continue vers Kirindy, Belo-sur-Tsiribihina ou les Tsingy, et pour la grande piste côtière vers Belo-sur-Mer.",
      ]},
    ],
    pratique: [
      ["Accès", "Environ 20 km au nord de Morondava, 30 à 45 min"],
      ["Moment idéal", "Lever du soleil (calme) ou coucher du soleil (ambiance)"],
      ["Durée", "1 à 2 heures sur place"],
      ["Véhicule", "Voiture suffisante ; 4x4 pour continuer vers Kirindy et les Tsingy"],
      ["Respect", "Ne pas monter sur les arbres ni sur les tombeaux ; demander avant de photographier les habitants"],
    ],
  },

  ranomafana: {
    sections: [
      { h: "La forêt pluviale à deux pas de la RN7", p: [
        "Ranomafana veut dire « eau chaude » en malgache, en référence aux sources thermales du village. Le parc national protège une forêt humide de montagne, inscrite au patrimoine mondial de l'UNESCO avec les autres forêts de l'Atsinanana. Il a été créé après la découverte, en 1986, du lémur bambou doré, une espèce inconnue jusque-là.",
        "On quitte la RN7 après Ambositra et, en quelques kilomètres, le paysage change complètement : les collines pelées laissent la place à une forêt dense, des torrents et des cascades.",
      ]},
      { h: "Ce qu'on y voit", p: [
        "Avec un guide local, on part à la recherche des lémurs bambous (le doré et le grand hapalémur), du propithèque de Milne-Edwards, des lémurs à ventre roux et des lémurs bruns. La forêt est aussi un paradis pour les caméléons, les grenouilles et les oiseaux.",
        "La balade de nuit, le long de la route en lisière du parc, est un grand moment : les guides repèrent les caméléons endormis, les geckos à queue feuillue presque invisibles et les microcèbes qui viennent se nourrir.",
      ]},
      { h: "Combien de temps rester ?", p: [
        "Deux nuits, c'est l'idéal : on arrive l'après-midi pour la balade de nuit, on consacre la matinée suivante au parc, et l'on profite des piscines d'eau chaude du village en fin de journée. Les circuits vont de deux heures à une journée entière, selon votre forme.",
        "Ranomafana est aussi une bonne base pour découvrir les plantations de thé de Sahambavy et la ville haute de Fianarantsoa, à environ deux heures de route.",
      ]},
      { h: "Préparer sa visite", p: [
        "Il pleut souvent, même en saison sèche : prenez une veste imperméable et des chaussures qui accrochent, les sentiers sont glissants et pentus. Les sangsues sont présentes en saison humide : chaussettes hautes et pantalon rentré. Partez tôt le matin, les lémuriens sont plus actifs.",
      ]},
    ],
    pratique: [
      ["Accès", "Détour par la RN25 depuis la RN7, entre Ambositra et Fianarantsoa"],
      ["Durée conseillée", "2 nuits"],
      ["Meilleure période", "Avril à décembre ; plus de pluie de janvier à mars"],
      ["Entrée et guide", "Guide local obligatoire. " + frais],
      ["À emporter", "Veste de pluie, chaussures de marche, frontale pour la nuit"],
    ],
  },

  'nosy-be': {
    sections: [
      { h: "L'île aux parfums", p: [
        "Nosy Be est la grande île du nord-ouest, connue pour ses plages, ses eaux chaudes et l'odeur de l'ylang-ylang, dont les fleurs servent à la parfumerie. C'est la destination balnéaire la plus développée de Madagascar, avec des hôtels pour tous les budgets, et le point de départ de nombreuses excursions en bateau.",
        "La plupart des voyageurs y arrivent en avion. Avec Tripack, vous pouvez aussi y aller par la route depuis Tana : un vrai voyage d'une semaine à travers l'ouest et le nord, qui se termine en bateau.",
      ]},
      { h: "Que faire à Nosy Be ?", p: [
        "Monter au mont Passot, le point culminant de l'île, pour le coucher de soleil sur les lacs de cratère. Visiter les distilleries d'ylang-ylang et les plantations de vanille et de poivre. Se promener dans le parc national de Lokobe, une forêt primaire où vivent des lémurs noirs et des caméléons panthères.",
        "Autour de l'île, les excursions en bateau mènent à Nosy Komba, l'île aux lémuriens, à Nosy Tanikely, une réserve marine idéale pour le snorkeling avec les tortues, et à Nosy Iranja et son banc de sable. En fin d'année, des requins-baleines sont souvent observés au large : renseignez-vous sur place pour la saison.",
      ]},
      { h: "La route depuis Tana", p: [
        "Par la route, il faut compter environ 1 100 km. On passe par le parc d'Ankarafantsika et ses forêts sèches, la ville portuaire de Mahajanga et son cirque rouge, puis la RN6 jusqu'à Ambanja et la vallée du Sambirano, où pousse le meilleur cacao de l'île. La voiture s'arrête au port d'Ankify, d'où un bateau rapide rejoint Hell-Ville en 45 minutes environ.",
        "Une partie de la RN6 est très dégradée : un 4x4 est conseillé et la route se fait en saison sèche. Je vous dépose au bateau et je peux vous reprendre au retour pour continuer vers Diego-Suarez ou rentrer à Tana.",
      ]},
      { h: "Combien de jours ?", p: [
        "Sur l'île, comptez au moins quatre ou cinq jours pour profiter des plages et faire deux ou trois excursions en bateau. Avec la route depuis Tana, un voyage complet tient en deux semaines.",
      ]},
    ],
    pratique: [
      ["Accès", "Avion depuis Tana, ou route jusqu'à Ankify (environ 1 100 km) puis bateau (≈ 45 min)"],
      ["Durée conseillée", "4 à 5 jours sur l'île ; 5 à 6 jours de route depuis Tana"],
      ["Meilleure période", "Avril à décembre ; saison des pluies de janvier à mars"],
      ["Sur place", "Le 4x4 reste à Ankify ; sur l'île, taxis, scooters et bateaux"],
      ["Parc de Lokobe", "Guide obligatoire. " + frais],
    ],
  },

  morondava: {
    sections: [
      { h: "La capitale du Menabe", p: [
        "Morondava est une petite ville côtière, chaude et tranquille, posée sur le canal du Mozambique. C'est la capitale de la région du Menabe et la base de départ des plus belles excursions de l'ouest : l'Allée des Baobabs, la forêt de Kirindy, les Tsingy de Bemaraha et, au sud, Belo-sur-Mer.",
        "La ville vit de la pêche, de la riziculture et du tourisme. Le front de mer, la plage de Nosy Kely et les couchers de soleil sur l'océan en font une étape agréable entre deux journées de piste.",
      ]},
      { h: "À voir en ville et autour", p: [
        "L'Allée des Baobabs, à une vingtaine de kilomètres, au coucher ou au lever du soleil. Les mangroves, que l'on découvre en pirogue avec les pêcheurs. Le village de pêcheurs de Betania, de l'autre côté de l'estuaire, que l'on rejoint en pirogue. Les tombeaux sakalava, ornés de sculptures, que l'on visite avec respect et avec un guide.",
        "Plus loin, la forêt de Kirindy (environ 60 km) est le meilleur endroit du pays pour voir le fossa, et le point de départ vers les Tsingy.",
      ]},
      { h: "Venir à Morondava", p: [
        "Par la route depuis Tana, on descend la RN7 jusqu'à Antsirabe, puis la RN34 et la RN35 par Miandrivazo : environ 650 km, deux jours de route avec une étape. La route est goudronnée mais certains tronçons sont abîmés.",
        "Il existe aussi des vols entre Tana et Morondava. Si vous arrivez en avion, je peux venir vous chercher à l'aéroport de Morondava (le trajet d'approche du véhicule est alors compté dans le devis), ou vous y déposer à la fin du circuit pour éviter le retour par la route.",
        "Pour les aventuriers, la grande piste côtière relie Morondava à Tuléar par Belo-sur-Mer, Morombe et Andavadoaka, en 4x4 et en saison sèche.",
      ]},
    ],
    pratique: [
      ["Distance depuis Tana", "Environ 650 km, 2 jours de route ; vols intérieurs possibles"],
      ["Durée conseillée", "2 nuits pour la ville et les baobabs ; 5 à 6 jours avec les Tsingy"],
      ["Meilleure période", "Avril à novembre ; pistes difficiles en saison des pluies"],
      ["Véhicule", "Voiture jusqu'à Morondava ; 4x4 pour Kirindy, les Tsingy et Belo-sur-Mer"],
      ["Voir aussi", "Pages Allée des Baobabs, Kirindy, Tsingy de Bemaraha et Belo-sur-Mer"],
    ],
  },

  antsirabe: {
    sections: [
      { h: "La ville d'eaux des Hautes Terres", p: [
        "À 1 500 mètres d'altitude, Antsirabe est une ville au climat frais, fondée à la fin du XIXe siècle par des missionnaires norvégiens attirés par ses sources thermales. Ses larges avenues, son ancien hôtel des thermes et sa gare donnent un charme un peu suranné, et la ville est envahie de pousse-pousse colorés.",
        "C'est la première grande étape de la RN7, à environ 170 km de Tana, et l'endroit idéal pour une première nuit après l'arrivée à Madagascar.",
      ]},
      { h: "Les artisans d'Antsirabe", p: [
        "Antsirabe est la ville de la débrouille et du recyclage. En pousse-pousse, on visite les ateliers où l'on fabrique des objets en corne de zébu, des bonbons artisanaux, des miniatures de vélos et de pousse-pousse en boîtes de conserve recyclées, ou encore des broderies et des pierres taillées.",
        "C'est la meilleure façon de découvrir la ville et de faire vivre les familles d'artisans. Négociez gentiment le prix du pousse-pousse avant de monter, et laissez un pourboire si le conducteur a été sympathique.",
      ]},
      { h: "Les lacs de cratère", p: [
        "La région est volcanique. Le lac Tritriva, à une vingtaine de kilomètres, est un lac de cratère aux eaux sombres entouré de parois abruptes et de légendes d'amours impossibles. On en fait le tour à pied en une heure environ. Le lac Andraikiba, plus grand et plus ouvert, se prête à une balade tranquille.",
        "Le marché d'Antsirabe, très animé, est aussi l'occasion de découvrir les fruits, les légumes et les épices des Hautes Terres.",
      ]},
      { h: "Mes conseils", p: [
        "Les soirées sont fraîches, voire froides de juin à août : une polaire est indispensable. Si vous avez le temps, prévoyez deux nuits pour faire les lacs et les artisans sans vous presser. Sur la route depuis Tana, on s'arrête toujours à Ambatolampy chez les fondeurs d'aluminium.",
      ]},
    ],
    pratique: [
      ["Distance depuis Tana", "Environ 170 km par la RN7, 3 à 4 h de route"],
      ["Durée conseillée", "1 à 2 nuits"],
      ["Climat", "Frais toute l'année, froid le soir de juin à août"],
      ["À ne pas manquer", "Tour des artisans en pousse-pousse, lac Tritriva"],
      ["Étape suivante", "Ambositra (≈ 90 km) puis Ranomafana"],
    ],
  },

  'belo-sur-mer': {
    sections: [
      { h: "Le village des charpentiers de marine", p: [
        "Belo-sur-Mer est un village vezo au bout d'une piste de sable, à environ 80 km au sud de Morondava. Sur la plage, les charpentiers construisent encore à la main de grandes goélettes en bois, sans plans, avec des techniques héritées de marins venus de loin il y a deux siècles. Voir ces coques géantes posées sur le sable est un spectacle unique.",
        "Le village vit au rythme de la mer et des marées : pêche, salines, cabotage. Il n'y a ni grand hôtel ni foule, juste quelques hébergements simples et une ambiance hors du temps.",
      ]},
      { h: "Que faire à Belo-sur-Mer ?", p: [
        "Visiter les chantiers navals et discuter avec les charpentiers. Se promener dans les salines, où le sel est récolté à la main. Partir en pirogue vers les îlots du large, pour le snorkeling, les plages désertes et la pêche avec les Vezo. Explorer la lagune et les mangroves.",
        "Juste à côté, le parc national de Kirindy-Mitea protège des forêts sèches, des baobabs, des lacs et des dunes. On y voit des lémuriens, de nombreux oiseaux et des paysages très variés.",
      ]},
      { h: "Y aller", p: [
        "Depuis Morondava, il faut compter quatre à six heures de piste de sable en 4x4, avec parfois des passages délicats selon les marées et la saison. Belo-sur-Mer est aussi une étape de la grande piste côtière entre Morondava et Tuléar, par Morombe et Andavadoaka.",
        "C'est mon village préféré de la côte Ouest. Restez au moins deux nuits : le trajet est long et le village se découvre lentement. Pour tout savoir sur le village, les hébergements et les activités, consultez le site visitbelosurmer.com.",
      ]},
    ],
    pratique: [
      ["Accès", "Environ 80 km au sud de Morondava, 4 à 6 h de piste en 4x4"],
      ["Durée conseillée", "2 nuits minimum"],
      ["Meilleure période", "Avril à novembre (saison sèche)"],
      ["Véhicule", "4x4 obligatoire"],
      ["En savoir plus", "visitbelosurmer.com, le site consacré au village"],
    ],
  },

  ifaty: {
    sections: [
      { h: "La plage après la route", p: [
        "Après une semaine sur la RN7, Ifaty et Mangily sont la récompense : des villages de pêcheurs vezo, des plages de sable blanc et une eau turquoise protégée par une barrière de corail. Ils se trouvent à environ une heure au nord de Tuléar, par une route goudronnée.",
        "L'ambiance est détendue, avec des hôtels pour tous les budgets, des petits restaurants de poissons et des pirogues à balancier qui partent à l'aube.",
      ]},
      { h: "La forêt d'épineux de Reniala", p: [
        "Derrière les dunes pousse une forêt unique au monde : la forêt d'épineux du sud-ouest. La réserve de Reniala protège des baobabs en forme de bouteille, des didiéréacées hérissées d'épines et une multitude de plantes adaptées à la sécheresse. On la visite avec un guide, de préférence tôt le matin, quand les oiseaux sont actifs et la chaleur supportable.",
        "C'est aussi un excellent site d'observation des oiseaux, avec plusieurs espèces que l'on ne voit que dans le sud-ouest de Madagascar.",
      ]},
      { h: "Mer et activités", p: [
        "Snorkeling et plongée sur le récif, sorties en pirogue avec les pêcheurs, et, de juillet à septembre environ, observation des baleines à bosse qui remontent le canal du Mozambique (la saison exacte varie, renseignez-vous sur place). Le soir, le coucher de soleil sur l'océan termine parfaitement la journée.",
        "La mer est plus agréable à marée haute : les clubs de plongée et les hôtels affichent les horaires des marées.",
      ]},
      { h: "Ifaty ou Anakao ?", p: [
        "Ifaty se rejoint en voiture et offre plus de choix d'hébergement. Anakao, au sud de Tuléar, se rejoint en bateau et a un côté plus sauvage, avec l'îlot de Nosy Ve. Les deux sont de bons choix pour finir la RN7 ; je vous conseille selon vos envies.",
      ]},
    ],
    pratique: [
      ["Accès", "Environ 1 h au nord de Tuléar, route goudronnée"],
      ["Durée conseillée", "2 à 3 nuits pour se reposer après la RN7"],
      ["Meilleure période", "Avril à novembre ; baleines environ de juillet à septembre"],
      ["À ne pas manquer", "Forêt de Reniala tôt le matin, snorkeling sur le récif"],
      ["Retour", "Route vers Tana ou vol depuis Tuléar"],
    ],
  },

  kirindy: {
    sections: [
      { h: "Le royaume du fossa", p: [
        "La forêt de Kirindy est une forêt sèche caducifoliée, à environ 60 km au nord de Morondava. Elle est gérée depuis longtemps pour la recherche et l'écotourisme, et c'est l'un des meilleurs endroits de Madagascar pour observer le fossa, le plus grand prédateur de l'île, une sorte de grand félin qui n'en est pas un.",
        "Le fossa est plus facile à voir en saison sèche, surtout en fin d'année, période de reproduction, où il s'approche parfois des installations du site.",
      ]},
      { h: "De jour et de nuit", p: [
        "De jour, on marche sur des sentiers plats à la rencontre des propithèques de Verreaux, des lémurs à front roux et de nombreux oiseaux. En saison sèche, les arbres perdent leurs feuilles et la forêt prend des teintes dorées ; les baobabs sont présents un peu partout.",
        "La nuit, c'est une autre forêt. On y voit le microcèbe de Madame Berthe, l'un des plus petits primates du monde, des lémurs nocturnes, des caméléons et parfois le rat sauteur géant, une espèce rare qui ne vit que dans cette région.",
      ]},
      { h: "Organiser sa visite", p: [
        "Kirindy est sur la piste qui mène aux Tsingy de Bemaraha : on s'y arrête à l'aller ou au retour. Le mieux est d'y dormir une nuit pour faire la balade de nuit et une marche le lendemain matin. L'hébergement sur place et aux alentours est simple.",
        "La piste depuis Morondava passe par l'Allée des Baobabs. Un 4x4 est fortement conseillé, et l'accès devient difficile en saison des pluies.",
      ]},
    ],
    pratique: [
      ["Accès", "Environ 60 km au nord de Morondava par la piste des Tsingy"],
      ["Durée conseillée", "1 nuit pour la balade de nuit"],
      ["Meilleure période", "Saison sèche, d'avril à novembre ; fossa plus visible en fin d'année"],
      ["Véhicule", "4x4 conseillé"],
      ["Visite", "Guide obligatoire ; tarifs à vérifier sur place"],
    ],
  },
};

import type { GuideLong } from './types';

const mnp = 'Guide compulsory; Madagascar National Parks fees doubled on 1 November 2026, check the rate at the ticket office';

export const guideLong2: Record<string, GuideLong> = {
  antananarivo: {
    sections: [
      { h: 'A capital on twelve hills', p: [
        "Antananarivo, which everyone calls Tana, is built on hills with rice fields stretching between them, right in the city. The Rova, the former queen's palace, overlooks the upper town; below, the modern city is organised around Independence Avenue and the Analakely district.",
        "Many travellers only pass through, but one day is enough to grasp its soul: the upper town and its brick houses, the lively staircases, the markets, and the view from the Rova over the whole plain.",
      ]},
      { h: 'Trips around Tana', p: [
        "The royal hill of Ambohimanga, a UNESCO site, is about an hour's drive north: it's the cradle of the Merina monarchy, with ramparts, stone gates and a magnificent view. To the south, the RN7 begins with craft villages and rice fields.",
        "For a nature day, Lemurs' Park to the west lets you see lemurs close to the capital. And for the forest and the indri, Andasibe is about three hours away on the RN2.",
      ]},
      { h: 'Getting around Tana', p: [
        "Traffic is the capital's real challenge: crossing town at rush hour can take two hours. I leave early in the morning and avoid the centre in the late afternoon. In the evening, get around by car rather than on foot.",
      ]},
    ],
    pratique: [
      ['Airport', 'Ivato, 30 min to over an hour from the centre depending on traffic'],
      ['Recommended stay', '1 day for the city, 1 day for Ambohimanga'],
      ['Not to miss', 'The Rova, the upper town, Ambohimanga'],
      ['Tip', 'Leave early, avoid rush hour'],
    ],
  },
  ambatolampy: {
    sections: [
      { h: 'The town of cooking pots', p: [
        "Ambatolampy is the first real stop on the RN7, about 70 km from Tana. The whole town lives from aluminium casting: cans, engine parts and old pans are collected, melted, and the metal is poured into sand moulds to make the cooking pots found in every kitchen in Madagascar.",
        "Visiting a workshop is impressive: everything is done by hand, over wood or charcoal fires, at amazing speed. The craftsmen also make small souvenirs, zebus, baobabs or key rings, cast in front of you.",
      ]},
      { h: 'Around the town', p: [
        "The area is covered with pine woods and rice fields, with colourful markets along the road. A short break here splits the drive from Tana to Antsirabe, and it's the perfect place to buy the best souvenir of the RN7: a small cooking pot.",
      ]},
    ],
    pratique: [
      ['Distance from Tana', 'About 70 km on the RN7, 1 h 30 to 2 h'],
      ['Visit length', '30 min to 1 h'],
      ['Not to miss', 'An aluminium foundry workshop'],
      ['Respect', 'Ask before photographing the craftsmen'],
    ],
  },
  ambositra: {
    sections: [
      { h: 'Capital of woodcraft', p: [
        "Ambositra is the town of marquetry and woodcarving. On the main street, shops and workshops sell boxes, pictures and objects in inlaid precious wood, all handmade. The carved facades of the houses set the tone as soon as you arrive.",
        "It's a short stop between Antsirabe and Ranomafana, ideal for a night or lunch, with a lovely view over the terraced rice fields.",
      ]},
      { h: 'The Zafimaniry villages', p: [
        "In the mountains to the east live the Zafimaniry, whose woodworking knowledge is on UNESCO's intangible heritage list: their houses are built without a single nail, and every door and window is carved with geometric patterns.",
        "These villages can only be reached on foot, after a drive to Antoetra: allow at least a day, and several days for a real trek. I'll find you a trustworthy local guide.",
      ]},
    ],
    pratique: [
      ['Access', 'On the RN7, about 90 km south of Antsirabe'],
      ['Recommended stay', '1 night; 1 to 3 more days for the Zafimaniry'],
      ['Not to miss', 'The marquetry workshops'],
      ['What to bring', 'Good shoes for the Zafimaniry villages'],
    ],
  },
  fianarantsoa: {
    sections: [
      { h: 'The town where good is learnt', p: [
        "Fianarantsoa, \"where good is learnt\", is the country's intellectual and religious capital, with its schools, churches and university. Its upper town, perched on a hill, is one of Madagascar's finest historic quarters: cobbled lanes, brick houses with balconies and views over the rice fields.",
        "In the late afternoon the light on the roofs and the plain is superb: that's the time to walk up to the upper town.",
      ]},
      { h: 'Tea, wine and train', p: [
        "Around town you can visit the Sahambavy tea plantations, on intensely green hills, and wine estates producing a surprising local wine. Fianarantsoa is also the departure point of the FCE train to Manakara on the East coast, a legendary line with irregular timetables: check just before your trip.",
      ]},
    ],
    pratique: [
      ['Access', 'On the RN7, about 2 h after Ranomafana'],
      ['Recommended stay', 'Half a day to 1 night'],
      ['Not to miss', 'The upper town at the end of the day, Sahambavy tea'],
      ['FCE train', 'To Manakara; check timetables locally'],
    ],
  },
  ambalavao: {
    sections: [
      { h: 'Antemoro paper and zebu market', p: [
        "Ambalavao marks the end of the Highlands and the gateway to the South. Antemoro paper is made here from tree bark, decorated with dried flowers pressed into the pulp: an old craft you can watch in the workshops.",
        "The town also hosts one of the country's largest zebu markets, where herders arrive after days of walking. Market day is mid-week: I'll check the exact day for you.",
      ]},
      { h: 'The Anja reserve', p: [
        "A few kilometres south, the Anja community reserve is run by the villagers. At the foot of huge granite boulders live hundreds of ring-tailed lemurs, easy to approach, especially in the morning when they sunbathe on the rocks.",
        "Your entrance fee goes straight to the village: a fine example of tourism that benefits local people.",
      ]},
    ],
    pratique: [
      ['Access', 'On the RN7, about 1 h south of Fianarantsoa'],
      ['Time needed', '2 to 3 h for Anja, 1 h for Antemoro paper'],
      ['Best time', 'Morning for the ring-tailed lemurs'],
      ['Anja', 'Community reserve, local guide on site'],
    ],
  },
  'plateau-horombe': {
    sections: [
      { h: 'The Malagasy Wild West', p: [
        "After Ihosy, the RN7 runs straight across the Horombe plateau, a vast savannah of golden grass with no trees and hardly a village for dozens of kilometres. It's one of the most striking landscapes of the trip: a huge sky, zebu herds and, in the distance, the first Isalo ridges.",
        "We fill up in Ihosy, as there's nothing afterwards. I always stop for a photo in the middle of nowhere: a real moment of silence and space.",
      ]},
    ],
    pratique: [
      ['Location', 'On the RN7 between Ihosy and Ranohira (Isalo)'],
      ['Crossing time', 'About 1 h 30 to 2 h'],
      ['Tip', 'Fill up and buy water in Ihosy'],
      ['Photo', 'Best light at the end of the day'],
    ],
  },
  ilakaka: {
    sections: [
      { h: 'The sapphire town', p: [
        "Ilakaka barely existed before 1998. The discovery of sapphires in the river triggered a rush: tens of thousands of prospectors came from all over the country and abroad, and a boomtown grew up along the RN7, with dealers' counters and colourful signs.",
        "You pass through Ilakaka between Isalo and Tulear. You can stop to see the miners' pits and the town's unique atmosphere, but beware of stones sold in the street: without a certificate, better not.",
      ]},
    ],
    pratique: [
      ['Location', 'On the RN7, about 30 min after Ranohira'],
      ['Time needed', '30-minute stop'],
      ['Buying stones', 'Only in a shop, with a certificate'],
      ['Next', 'Zombitse, then Tulear'],
    ],
  },
  zombitse: {
    sections: [
      { h: 'A transitional forest', p: [
        "Zombitse-Vohibasia National Park protects a rare forest at the transition between the dry forest of the West and the spiny forest of the South, right by the RN7. It's a major birdwatching site, with species found almost nowhere else.",
        "A one-hour walk with a guide is enough to see sifakas, sportive lemurs asleep in tree hollows and fine baobabs. It's the perfect break between Isalo and Tulear.",
      ]},
    ],
    pratique: [
      ['Location', 'By the RN7, between Ilakaka and Sakaraha'],
      ['Time needed', '1 to 2 h'],
      ['Best time', 'Morning, for the birds'],
      ['Entrance and guide', mnp],
    ],
  },
  tulear: {
    sections: [
      { h: 'The end of the RN7', p: [
        "Tulear (Toliara) is a hot, bright town facing the Mozambique Channel. It's the end of the RN7 and the gateway to the south-western beaches: Ifaty and Mangily to the north, Anakao to the south by boat. It's also the starting point of the great coastal track to Morondava.",
        "In town: the Antsokay botanical garden and its spiny flora, the shell market and the sunsets over the ocean. The town has an airport with flights to Tana, handy to avoid driving the whole RN7 again.",
      ]},
      { h: 'Preparing what comes next', p: [
        "If you continue north along the coast, we prepare the 4x4 here: fuel, water, spare parts. The sand track takes several days with stops in Andavadoaka, Morombe and Belo-sur-Mer, in the dry season only.",
      ]},
    ],
    pratique: [
      ['Distance from Tana', 'About 930 km on the RN7'],
      ['Recommended stay', '1 night before the beaches or the track'],
      ['Not to miss', 'Antsokay garden, sunset'],
      ['Return', 'Tulear–Tana flights available'],
    ],
  },
  anakao: {
    sections: [
      { h: 'A Vezo village at the end of the sea', p: [
        "Anakao is a Vezo fishing village south of Tulear, reached by boat. The pace slows immediately: a huge beach, outrigger canoes and simple or charming places to stay facing the ocean.",
        "Opposite, the islet of Nosy Ve is a nesting site for red-tailed tropicbirds, magnificent seabirds, and a good snorkelling spot. You can also go out by dugout with the fishermen or explore the coast towards Saint-Augustin.",
      ]},
      { h: 'Getting there', p: [
        "The boat leaves from Tulear port; the crossing takes about an hour depending on the sea. I drop you at the port and pick you up on your return: no need for a car during your beach days.",
      ]},
    ],
    pratique: [
      ['Access', 'Boat from Tulear, about 1 h'],
      ['Recommended stay', '2 to 3 nights'],
      ['Not to miss', 'Nosy Ve and its seabirds'],
      ['Vehicle', 'The 4x4 stays in Tulear'],
    ],
  },
  andavadoaka: {
    sections: [
      { h: 'The end of the world', p: [
        "Andavadoaka is a remote Vezo village on the sand track between Tulear and Morombe. Turquoise lagoons, coral reefs, baobabs and hardly any tourists: it's one of the finest stops on the West coast. The village is known for community-run marine conservation.",
        "People come for the calm, diving and snorkelling, dugout trips and sunsets over the ocean.",
      ]},
      { h: 'The track', p: [
        "The track from Tulear is long and sandy: we leave at dawn, by 4x4 only, in the dry season. Andavadoaka is a natural stop on the great Tulear–Morondava coastal crossing.",
      ]},
    ],
    pratique: [
      ['Access', 'Sand track from Tulear, a long day by 4x4'],
      ['Recommended stay', '2 nights'],
      ['Season', 'April to November'],
      ['Vehicle', '4x4 essential'],
    ],
  },
  morombe: {
    sections: [
      { h: 'A stop before the Mangoky', p: [
        "Morombe is the last real town before the big crossing north. A small coastal town with dhows and a seafront, it's a place to restock and rest between two days on the track.",
        "Just after it you must cross the Mangoky, one of the island's largest rivers. The crossing depends on water levels and the season: I always check with the ferrymen the day before. Around town, fine baobab forests are worth a stop.",
      ]},
    ],
    pratique: [
      ['Location', 'On the coastal track between Andavadoaka and Belo-sur-Mer'],
      ['Recommended stay', '1 night'],
      ['Key point', 'Mangoky crossing, check the day before'],
      ['Vehicle', '4x4 essential'],
    ],
  },
  'belo-sur-tsiribihina': {
    sections: [
      { h: 'Crossing the river', p: [
        "Belo-sur-Tsiribihina is the unavoidable stop on the way to the Tsingy. Here the 4x4 boards a ferry to cross the wide Tsiribihina river among the dugouts: a moment of adventure every traveller remembers.",
        "It's also the arrival point of river descents by dugout or barge from Miandrivazo, another original way to reach the West. The ferry has its timetable and its moods: we keep a margin and have lunch in the village.",
      ]},
    ],
    pratique: [
      ['Location', 'On the Morondava–Tsingy track, about 100 km north of Morondava'],
      ['Crossing', 'Ferry over the Tsiribihina'],
      ['Season', 'Dry season for the track'],
      ['Vehicle', '4x4 essential'],
    ],
  },
  mananjary: {
    sections: [
      { h: 'The East coast and the canal', p: [
        "Mananjary is an East coast town on the Indian Ocean and the Pangalanes canal. It's Antambahoaka country, famous for the Sambatra, a great collective circumcision ceremony held about every seven years that brings together thousands of people.",
        "You get here by driving down from Ranomafana on the eastern road. The town offers nice walks along the beach (swimming is often dangerous because of currents) and on the canal by dugout.",
      ]},
    ],
    pratique: [
      ['Access', 'By road from Ranomafana'],
      ['Recommended stay', '1 night'],
      ['Not to miss', 'A dugout trip on the Pangalanes'],
      ['Sea', 'Swimming often dangerous (currents)'],
    ],
  },
  'canal-des-pangalanes': {
    sections: [
      { h: 'A waterway over 600 km long', p: [
        "The Pangalanes canal runs along Madagascar's East coast for hundreds of kilometres, linking lakes, lagoons and rivers with hand-dug sections. Fishing villages follow one another along its banks, among coconut palms, traveller's trees and dugouts.",
        "Travelling on the canal means discovering East coast life at the pace of the water: fishing, goods transport, children swimming. The scenery is very different from the Highlands and the South.",
      ]},
      { h: 'How to discover it', p: [
        "From Manakara or Mananjary you take a half-day or full-day dugout trip. Further north, lodges on the canal let you spend one or two quiet nights. I'll advise you depending on your itinerary.",
      ]},
    ],
    pratique: [
      ['Access', 'From Manakara, Mananjary or the Tamatave area'],
      ['Time needed', 'Half a day to 2 nights'],
      ['Best time', 'April to December; more rain from January to March'],
      ['Activity', 'Dugout with a local boatman'],
    ],
  },
  manakara: {
    sections: [
      { h: 'End of the train line and the East coast', p: [
        "Manakara is the arrival town of the FCE train from Fianarantsoa and a pleasant East coast stop. Its seafront, pounded by Indian Ocean waves, and the river mouth where the Pangalanes canal meets the sea make it very photogenic.",
        "You can take dugout trips on the canal, visit fishing villages and the spice and fruit plantations nearby. Swimming in the sea is dangerous, but the canal offers calm moments.",
      ]},
    ],
    pratique: [
      ['Access', 'By road (RN25 and RN12) or the FCE train from Fianarantsoa'],
      ['Recommended stay', '1 to 2 nights'],
      ['Not to miss', 'The Pangalanes canal by dugout'],
      ['Sea', 'Swimming dangerous'],
    ],
  },
  ankarafantsika: {
    sections: [
      { h: 'The dry forest of the North-West', p: [
        "Ankarafantsika National Park protects a large dry forest by the RN4, on the road to Mahajanga. You easily see Coquerel's sifakas with their white and brown fur, brown lemurs, many birds and, at night, several species of mouse lemur.",
        "Lake Ravelobe, in the heart of the park, is home to crocodiles and attracts birds. The trails are flat and easy, ideal for families.",
      ]},
      { h: 'A stop on the northern road', p: [
        "Ankarafantsika is the first big stop on the road from Tana to Mahajanga and Nosy Be. A night there allows the night walk and a walk the next morning, while the heat is still bearable.",
      ]},
    ],
    pratique: [
      ['Access', 'On the RN4, about 450 km from Tana'],
      ['Recommended stay', '1 night'],
      ['Best time', 'April to November'],
      ['Entrance and guide', mnp],
    ],
  },
  mahajanga: {
    sections: [
      { h: 'The port town of the North-West', p: [
        "Mahajanga, or Majunga, is a hot, cosmopolitan port town on the Mozambique Channel. Its huge baobab, planted in the middle of a roundabout near the seafront, is its symbol. In the evening everyone meets on the seafront promenade for the sunset and grilled skewers.",
        "The town has a long history of trade with East Africa, India and the Arab world, visible in its old districts and carved doors.",
      ]},
      { h: 'The Red Circus', p: [
        "About fifteen kilometres away, the Cirque Rouge is an amphitheatre of eroded cliffs in red, ochre and white, with fairy chimneys. Visit in the late afternoon, when the light sets the colours ablaze, and walk down to the beach.",
      ]},
    ],
    pratique: [
      ['Access', 'On the RN4 from Tana (about 560 km) or domestic flight'],
      ['Recommended stay', '1 to 2 nights'],
      ['Not to miss', 'The Cirque Rouge at the end of the day, the seafront'],
      ['Next', 'Road to Antsohihy, Ambanja and Nosy Be'],
    ],
  },
  antsohihy: {
    sections: [
      { h: 'A stop on the RN6', p: [
        "Antsohihy is a small town at the head of a bay, on the RN6 heading north. It's a transit stop on the way to Nosy Be, useful to break a long drive and rest.",
        "The road around Antsohihy can be very rough depending on the year: this is where the 4x4 and the driver's experience make the difference. We leave early to drive in daylight.",
      ]},
    ],
    pratique: [
      ['Location', 'On the Mahajanga–Ambanja road (RN6)'],
      ['Time needed', '1 transit night'],
      ['Road', 'Rough sections, 4x4 recommended'],
      ['Season', 'Dry season recommended'],
    ],
  },
  ambanja: {
    sections: [
      { h: 'The cocoa valley', p: [
        "Ambanja is the gateway to the Sambirano valley, where some of the world's finest cocoa grows, along with vanilla, pepper and ylang-ylang. Visiting a plantation, seeing the pods on the trees and tasting the fermented beans is a lovely discovery before reaching Nosy Be.",
        "A few kilometres away, the port of Ankify is the boarding point for Nosy Be. You can also stay there facing the sea, with views of the islands.",
      ]},
    ],
    pratique: [
      ['Location', 'On the RN6, about 20 km from Ankify port'],
      ['Time needed', '1 night or half a day'],
      ['Not to miss', 'A Sambirano cocoa plantation'],
      ['Next', 'Ankify–Nosy Be boat (≈ 45 min)'],
    ],
  },
};

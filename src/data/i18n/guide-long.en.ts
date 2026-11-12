import type { GuideLong } from './types';

const fees = "Entrance fees for parks run by Madagascar National Parks doubled on 1 November 2026. Before the increase, a foreign visitor paid about 45,000 ariary per day in most parks: check the new rate at the ticket office, where you pay in cash, in ariary.";

export const guideLong: Record<string, GuideLong> = {
  andasibe: {
    sections: [
      { h: 'The song of the indri', p: [
        "Andasibe is first of all a sound. In the morning, a long, haunting call rolls through the forest and is answered from hill to hill: it's the indri, the largest living lemur, which only survives in the wild. The indri families of the Analamazaotra reserve are used to people, so with a good guide an encounter is almost certain.",
        "Andasibe-Mantadia National Park has two sectors. Analamazaotra, right next to the village, is the most accessible: trails of one to four hours, little climbing, and the indris are there. Mantadia, further along a track, is a wilder, steeper primary forest for those who want to walk longer and see the diademed sifaka, one of the most beautiful lemurs on the island.",
      ]},
      { h: 'What you see in a day', p: [
        "Besides the indris, you often meet brown lemurs, grey bamboo lemurs, giant chameleons (including Parson's chameleon), colourful frogs and many endemic birds. The forest is humid all year round: the vegetation is dense, with tree ferns and orchids everywhere.",
        "In the evening, a night walk along the forest edge reveals mouse lemurs, chameleons asleep on branches and the amazing insects of the rainforest. It's often the children's favourite moment.",
      ]},
      { h: 'How long to stay?', p: [
        "Andasibe is the perfect trip from Tana, at the start or end of your journey. One night there is really recommended: arrive in the afternoon, do the night walk, and enter the forest early the next morning when the indris sing. A day trip is possible, but you spend more time on the road than in the forest.",
        "With two nights you can add Mantadia or a nearby community reserve, and perhaps the Vakona lemur island, more touristy but popular with families.",
      ]},
      { h: 'The road from Tana', p: [
        "We leave the capital to the east and follow the RN2, the road to Tamatave. It is paved and runs through hills, rice fields and roadside villages where you can buy fruit. It's about 150 km, three to four hours depending on traffic leaving Tana and the lorries coming up from the port.",
      ]},
    ],
    pratique: [
      ['Distance from Tana', 'About 150 km on the RN2, 3 to 4 h drive'],
      ['Recommended stay', '1 night minimum, 2 nights to add Mantadia'],
      ['Best time', 'All year; September to December is often drier and pleasant'],
      ['Entrance and guide', 'Local guide compulsory. ' + fees],
      ['Where to stay', 'Lodges and hotels in Andasibe village for all budgets'],
    ],
  },

  isalo: {
    sections: [
      { h: 'A western film set in the heart of the South', p: [
        "After the Highland rice fields and the emptiness of the Horombe plateau, Isalo rises like a sandstone wall carved by wind and water. The massif is cut by deep canyons with streams lined by palms and pandanus: in a few minutes you go from a desert landscape to an oasis.",
        "It's one of the most visited parks in Madagascar, and rightly so. Everyone loves it: hikers for its trails, families for its natural pools, photographers for its colours at sunset.",
      ]},
      { h: 'Hikes not to miss', p: [
        "The Natural Pool is the classic walk: a few hours on the plateau, then a clear pool at the foot of a small waterfall surrounded by pandanus. You can swim there. The circuit often combines the Natural Pool with viewpoints over the massif.",
        "The Canyon des Makis and the Canyon des Rats lead into a narrow, cool gorge. You often see brown lemurs and Verreaux's sifakas leaping from tree to tree. For strong walkers there are full-day circuits, and even multi-day treks with nights under canvas.",
        "At the end of the day everyone meets at the Isalo Window, a natural arch in the rock through which you watch the sun set. I drive you there; there's almost no walking.",
      ]},
      { h: 'Ranohira, the base village', p: [
        "The village of Ranohira, on the RN7, is the gateway to the park: this is where you pay the entrance fee and meet your guide. Accommodation ranges from small guesthouses to upmarket lodges, some set among the rocks with superb views.",
        "I recommend two nights: a full day in the park and half a day for the Window and relaxing. With only one night you see just part of Isalo and leave frustrated.",
      ]},
      { h: 'Heat and planning', p: [
        "It's very hot in the middle of the day, especially from October to March. We start early, take plenty of water, a hat and sunscreen. Closed walking shoes are essential, as the trails are rocky. I wait for you at the end of the hike with cold water.",
      ]},
    ],
    pratique: [
      ['Access', 'On the RN7, about 240 km before Tulear; park entrance in Ranohira'],
      ['Recommended stay', '2 nights in Ranohira'],
      ['Best time', 'April to November; very hot from December to March'],
      ['Entrance and guide', 'Local guide compulsory. ' + fees],
      ['What to bring', 'Water, hat, sunscreen, swimsuit, closed shoes'],
    ],
  },

  'tsingy-de-bemaraha': {
    sections: [
      { h: 'A UNESCO-listed stone forest', p: [
        "The Tsingy de Bemaraha are a vast limestone plateau that rainwater has carved over millions of years into pinnacles as sharp as blades. \"Tsingy\" is said to mean \"where you cannot walk barefoot\". The site is a UNESCO World Heritage Site and, for many travellers, the highlight of their trip.",
        "The village of Bekopaka, on the bank of the Manambolo river, is the base for visiting the park. Stay at least two nights to do both main circuits without rushing.",
      ]},
      { h: 'Grands Tsingy and Petits Tsingy', p: [
        "The Grands Tsingy are about an hour's drive north of Bekopaka. The circuit is aerial: you move along via ferrata sections in a harness, climb ladders, cross suspension bridges over crevasses and reach viewpoints overlooking a sea of grey pinnacles. You need to be reasonably fit and not afraid of heights.",
        "The Petits Tsingy, close to the village, are more accessible and already give a very good idea of the site. They suit families and those who don't want the via ferrata. Many visitors add a dugout trip through the Manambolo gorges, between cliffs and caves.",
        "The park's dry forest is home to the all-white Decken's sifaka, brown lemurs and many birds.",
      ]},
      { h: 'Getting there: a real 4x4 adventure', p: [
        "From Morondava we head north on the track: about 200 km, a long day of 8 to 10 hours. We cross the Tsiribihina by ferry at Belo-sur-Tsiribihina, then the Manambolo just before Bekopaka. The track is dusty and sometimes badly rutted; a 4x4 in good condition with a driver who knows it is essential.",
        "You can break the journey by staying near Kirindy forest or in Belo-sur-Tsiribihina. In total, allow at least four days return from Morondava, and a week from Tana by road.",
      ]},
      { h: 'When to go?', p: [
        "The park is only accessible in the dry season, usually from May to mid-November. Opening depends on the state of the track after the rainy season: in early May some circuits may still be closed, and upmarket hotels sometimes open later. From December to April the track is usually impassable. I check the exact dates every year before confirming a tour.",
      ]},
    ],
    pratique: [
      ['Access', 'From Morondava: about 200 km of track, 8 to 10 h by 4x4, 2 ferry crossings'],
      ['Recommended stay', 'At least 4 days return from Morondava, including 2 nights in Bekopaka'],
      ['Season', 'Dry season only, usually May to mid-November (check each year)'],
      ['Entrance and guide', 'Guide compulsory; Tsingy entrance costs more than other parks. ' + fees],
      ['What to bring', 'Gloves, closed shoes with good soles, head torch, water'],
    ],
  },

  'allee-des-baobabs': {
    sections: [
      { h: 'The image of Madagascar', p: [
        "About twenty kilometres from Morondava, a red dirt road runs between some twenty giant baobabs standing in a row. They are Adansonia grandidieri, the most majestic of Madagascar's baobabs, with smooth, straight trunks over 25 metres tall. Some are said to be several centuries old. The site is protected as a natural monument.",
        "The baobabs are survivors of an old dense forest, cleared over time for farming. They stand among rice fields and fields, which makes their silhouette even more striking.",
      ]},
      { h: 'Sunset or sunrise?', p: [
        "Sunset is the most famous moment: the trunks turn orange, the sky lights up behind the trees and zebu carts roll along the track. But it's also when everyone is there.",
        "My advice: come back at sunrise. There are very few people, the light is soft and the reflections in the ponds after the rainy season are magnificent. Photographers often prefer the morning.",
      ]},
      { h: 'Around the Avenue', p: [
        "A few kilometres away are the \"Baobabs in love\", two intertwined trunks with a lovely legend, and the sacred baobab, surrounded by offerings, which you visit respectfully, following the villagers' instructions.",
        "The Avenue is on the road to Kirindy and the Tsingy: you often visit it on the first evening on arrival in Morondava, then pass it again heading north. It also combines well with a dugout trip in the Morondava mangroves.",
      ]},
      { h: 'Do you need a 4x4?', p: [
        "No, the Avenue can be reached by car from Morondava on a good road followed by a few kilometres of track. A 4x4 becomes essential as soon as you continue to Kirindy, Belo-sur-Tsiribihina or the Tsingy, and for the great coastal track to Belo-sur-Mer.",
      ]},
    ],
    pratique: [
      ['Access', 'About 20 km north of Morondava, 30 to 45 min'],
      ['Best moment', 'Sunrise (quiet) or sunset (atmosphere)'],
      ['Time needed', '1 to 2 hours on site'],
      ['Vehicle', 'A car is enough; 4x4 to continue to Kirindy and the Tsingy'],
      ['Respect', "Don't climb the trees or the tombs; ask before photographing people"],
    ],
  },

  ranomafana: {
    sections: [
      { h: 'Rainforest a step away from the RN7', p: [
        "Ranomafana means \"hot water\" in Malagasy, after the village's hot springs. The national park protects a montane rainforest, listed as a UNESCO World Heritage Site with the other Rainforests of the Atsinanana. It was created after the discovery in 1986 of the golden bamboo lemur, a species unknown until then.",
        "We leave the RN7 after Ambositra and within a few kilometres the landscape changes completely: bare hills give way to dense forest, torrents and waterfalls.",
      ]},
      { h: 'What you see', p: [
        "With a local guide you go looking for bamboo lemurs (the golden and the greater bamboo lemur), Milne-Edwards' sifaka, red-bellied lemurs and brown lemurs. The forest is also a paradise for chameleons, frogs and birds.",
        "The night walk, along the road at the edge of the park, is a highlight: guides spot sleeping chameleons, almost invisible leaf-tailed geckos and mouse lemurs coming to feed.",
      ]},
      { h: 'How long to stay?', p: [
        "Two nights is ideal: arrive in the afternoon for the night walk, spend the next morning in the park and enjoy the village's hot pools at the end of the day. Circuits range from two hours to a full day, depending on your fitness.",
        "Ranomafana is also a good base for the Sahambavy tea plantations and the old upper town of Fianarantsoa, about two hours away.",
      ]},
      { h: 'Preparing your visit', p: [
        "It rains often, even in the dry season: bring a waterproof jacket and grippy shoes, the trails are slippery and steep. Leeches are present in the wet season: long socks and trousers tucked in. Go early in the morning, when lemurs are most active.",
      ]},
    ],
    pratique: [
      ['Access', 'Detour via the RN25 from the RN7, between Ambositra and Fianarantsoa'],
      ['Recommended stay', '2 nights'],
      ['Best time', 'April to December; more rain from January to March'],
      ['Entrance and guide', 'Local guide compulsory. ' + fees],
      ['What to bring', 'Rain jacket, walking shoes, head torch for the night'],
    ],
  },

  'nosy-be': {
    sections: [
      { h: 'The perfumed island', p: [
        "Nosy Be is the large island in the north-west, known for its beaches, warm waters and the scent of ylang-ylang, whose flowers are used in perfumery. It's the most developed beach destination in Madagascar, with hotels for all budgets, and the starting point for many boat trips.",
        "Most travellers fly there. With Tripack you can also go by road from Tana: a real week-long journey through the west and north, ending by boat.",
      ]},
      { h: 'What to do in Nosy Be?', p: [
        "Climb Mont Passot, the island's highest point, for sunset over the crater lakes. Visit the ylang-ylang distilleries and the vanilla and pepper plantations. Walk in Lokobe National Park, a primary forest home to black lemurs and panther chameleons.",
        "Around the island, boat trips go to Nosy Komba, the lemur island, to Nosy Tanikely, a marine reserve perfect for snorkelling with turtles, and to Nosy Iranja and its sandbank. At the end of the year whale sharks are often seen offshore: ask locally about the season.",
      ]},
      { h: 'The road from Tana', p: [
        "By road it's about 1,100 km. We go through Ankarafantsika park and its dry forests, the port town of Mahajanga and its red circus, then the RN6 to Ambanja and the Sambirano valley, where the island's best cocoa grows. The car stops at the port of Ankify, from where a speedboat reaches Hell-Ville in about 45 minutes.",
        "Part of the RN6 is very rough: a 4x4 is recommended and the road is done in the dry season. I drop you at the boat and can pick you up on your return to continue to Diego-Suarez or go back to Tana.",
      ]},
      { h: 'How many days?', p: [
        "On the island, allow at least four or five days to enjoy the beaches and do two or three boat trips. With the road from Tana, a complete trip fits into two weeks.",
      ]},
    ],
    pratique: [
      ['Access', 'Flight from Tana, or road to Ankify (about 1,100 km) then boat (≈ 45 min)'],
      ['Recommended stay', '4 to 5 days on the island; 5 to 6 days on the road from Tana'],
      ['Best time', 'April to December; rainy season from January to March'],
      ['On the island', 'The 4x4 stays in Ankify; on the island, taxis, scooters and boats'],
      ['Lokobe park', 'Guide compulsory. ' + fees],
    ],
  },

  morondava: {
    sections: [
      { h: 'Capital of the Menabe', p: [
        "Morondava is a small, hot and peaceful coastal town on the Mozambique Channel. It's the capital of the Menabe region and the starting point for the finest trips in the west: the Avenue of the Baobabs, Kirindy forest, the Tsingy de Bemaraha and, to the south, Belo-sur-Mer.",
        "The town lives from fishing, rice growing and tourism. The seafront, Nosy Kely beach and the sunsets over the ocean make it a pleasant stop between two days on the track.",
      ]},
      { h: 'What to see in and around town', p: [
        "The Avenue of the Baobabs, about twenty kilometres away, at sunset or sunrise. The mangroves, explored by dugout with fishermen. The fishing village of Betania across the estuary, reached by dugout. The Sakalava tombs, decorated with carvings, visited respectfully and with a guide.",
        "Further away, Kirindy forest (about 60 km) is the best place in the country to see the fossa, and the starting point for the Tsingy.",
      ]},
      { h: 'Getting to Morondava', p: [
        "By road from Tana, you take the RN7 to Antsirabe, then the RN34 and RN35 via Miandrivazo: about 650 km, two days with an overnight stop. The road is paved but some stretches are damaged.",
        "There are also flights between Tana and Morondava. If you arrive by plane, I can pick you up at Morondava airport (the vehicle's positioning drive is then included in the quote), or drop you there at the end of the tour to avoid driving back.",
        "For adventurers, the great coastal track links Morondava to Tulear via Belo-sur-Mer, Morombe and Andavadoaka, by 4x4 and in the dry season.",
      ]},
    ],
    pratique: [
      ['Distance from Tana', 'About 650 km, 2 days by road; domestic flights available'],
      ['Recommended stay', '2 nights for the town and baobabs; 5 to 6 days with the Tsingy'],
      ['Best time', 'April to November; tracks difficult in the rainy season'],
      ['Vehicle', 'Car to Morondava; 4x4 for Kirindy, the Tsingy and Belo-sur-Mer'],
      ['See also', 'Avenue of the Baobabs, Kirindy, Tsingy de Bemaraha and Belo-sur-Mer pages'],
    ],
  },

  antsirabe: {
    sections: [
      { h: 'The Highlands spa town', p: [
        "At 1,500 metres above sea level, Antsirabe is a town with a cool climate, founded at the end of the 19th century by Norwegian missionaries drawn by its hot springs. Its wide avenues, old spa hotel and railway station give it a slightly old-fashioned charm, and the town is full of colourful rickshaws.",
        "It's the first big stop on the RN7, about 170 km from Tana, and the ideal place for a first night after arriving in Madagascar.",
      ]},
      { h: "Antsirabe's craftsmen", p: [
        "Antsirabe is the town of resourcefulness and recycling. By rickshaw you visit workshops making zebu-horn objects, handmade sweets, miniature bicycles and rickshaws from recycled tins, embroidery and cut stones.",
        "It's the best way to discover the town and support craft families. Agree on the rickshaw fare kindly before getting in, and leave a tip if the driver was nice.",
      ]},
      { h: 'The crater lakes', p: [
        "The area is volcanic. Lake Tritriva, about twenty kilometres away, is a dark crater lake surrounded by steep walls and legends of impossible love. Walking around it takes about an hour. Lake Andraikiba, larger and more open, is perfect for a quiet stroll.",
        "Antsirabe's very lively market is also a chance to discover the fruit, vegetables and spices of the Highlands.",
      ]},
      { h: 'My tips', p: [
        "Evenings are cool, even cold from June to August: a fleece is essential. If you have time, plan two nights to see the lakes and the craftsmen without rushing. On the way from Tana we always stop at Ambatolampy to see the aluminium founders.",
      ]},
    ],
    pratique: [
      ['Distance from Tana', 'About 170 km on the RN7, 3 to 4 h drive'],
      ['Recommended stay', '1 to 2 nights'],
      ['Climate', 'Cool all year, cold in the evening from June to August'],
      ['Not to miss', 'Rickshaw tour of the craftsmen, Lake Tritriva'],
      ['Next stop', 'Ambositra (≈ 90 km), then Ranomafana'],
    ],
  },

  'belo-sur-mer': {
    sections: [
      { h: 'The village of shipwrights', p: [
        "Belo-sur-Mer is a Vezo village at the end of a sand track, about 80 km south of Morondava. On the beach, carpenters still build large wooden schooners by hand, without plans, using techniques handed down from sailors who came from afar two centuries ago. Seeing these giant hulls resting on the sand is a unique sight.",
        "The village lives by the rhythm of the sea and the tides: fishing, salt pans, coastal trading. There are no big hotels and no crowds, just a few simple places to stay and a timeless atmosphere.",
      ]},
      { h: 'What to do in Belo-sur-Mer?', p: [
        "Visit the shipyards and chat with the carpenters. Walk through the salt pans, where salt is harvested by hand. Take a dugout to the offshore islets for snorkelling, deserted beaches and fishing with the Vezo. Explore the lagoon and mangroves.",
        "Right next door, Kirindy-Mitea National Park protects dry forests, baobabs, lakes and dunes, with lemurs, many birds and very varied landscapes.",
      ]},
      { h: 'Getting there', p: [
        "From Morondava, allow four to six hours of sand track by 4x4, sometimes with tricky sections depending on the tides and season. Belo-sur-Mer is also a stop on the great coastal track between Morondava and Tulear via Morombe and Andavadoaka.",
        "It's my favourite village on the West coast. Stay at least two nights: the journey is long and the village reveals itself slowly. For everything about the village, accommodation and activities, see visitbelosurmer.com.",
      ]},
    ],
    pratique: [
      ['Access', 'About 80 km south of Morondava, 4 to 6 h of track by 4x4'],
      ['Recommended stay', '2 nights minimum'],
      ['Best time', 'April to November (dry season)'],
      ['Vehicle', '4x4 essential'],
      ['Find out more', 'visitbelosurmer.com, the website dedicated to the village'],
    ],
  },

  ifaty: {
    sections: [
      { h: 'The beach after the road', p: [
        "After a week on the RN7, Ifaty and Mangily are the reward: Vezo fishing villages, white sand beaches and turquoise water protected by a coral reef. They are about an hour north of Tulear on a paved road.",
        "The atmosphere is relaxed, with hotels for all budgets, small fish restaurants and outrigger canoes leaving at dawn.",
      ]},
      { h: 'The Reniala spiny forest', p: [
        "Behind the dunes grows a forest unique in the world: the spiny forest of the south-west. The Reniala reserve protects bottle-shaped baobabs, spiky Didiereaceae and a host of drought-adapted plants. Visit it with a guide, ideally early in the morning when birds are active and the heat bearable.",
        "It's also an excellent birdwatching site, with several species found only in south-western Madagascar.",
      ]},
      { h: 'Sea and activities', p: [
        "Snorkelling and diving on the reef, dugout trips with fishermen and, roughly from July to September, humpback whales travelling up the Mozambique Channel (the exact season varies, ask locally). In the evening, sunset over the ocean ends the day perfectly.",
        "The sea is nicer at high tide: dive centres and hotels post the tide times.",
      ]},
      { h: 'Ifaty or Anakao?', p: [
        "Ifaty is reached by car and offers more choice of accommodation. Anakao, south of Tulear, is reached by boat and feels wilder, with the islet of Nosy Ve. Both are good choices to end the RN7; I'll advise you depending on what you like.",
      ]},
    ],
    pratique: [
      ['Access', 'About 1 h north of Tulear, paved road'],
      ['Recommended stay', '2 to 3 nights to rest after the RN7'],
      ['Best time', 'April to November; whales roughly July to September'],
      ['Not to miss', 'Reniala forest early in the morning, snorkelling on the reef'],
      ['Return', 'Road to Tana or flight from Tulear'],
    ],
  },

  kirindy: {
    sections: [
      { h: 'Kingdom of the fossa', p: [
        "Kirindy forest is a dry deciduous forest about 60 km north of Morondava. It has long been managed for research and ecotourism, and it's one of the best places in Madagascar to see the fossa, the island's largest predator, a sort of big cat that isn't one.",
        "The fossa is easier to see in the dry season, especially at the end of the year, the breeding period, when it sometimes comes close to the site's buildings.",
      ]},
      { h: 'By day and by night', p: [
        "By day you walk on flat trails looking for Verreaux's sifakas, red-fronted lemurs and many birds. In the dry season the trees lose their leaves and the forest takes on golden hues; baobabs are everywhere.",
        "At night it's another forest. You can see Madame Berthe's mouse lemur, one of the smallest primates in the world, nocturnal lemurs, chameleons and sometimes the giant jumping rat, a rare species found only in this region.",
      ]},
      { h: 'Planning your visit', p: [
        "Kirindy is on the track to the Tsingy de Bemaraha: you stop there on the way there or back. Best is to spend a night for the night walk and a walk the next morning. Accommodation on site and nearby is simple.",
        "The track from Morondava passes the Avenue of the Baobabs. A 4x4 is strongly recommended, and access becomes difficult in the rainy season.",
      ]},
    ],
    pratique: [
      ['Access', 'About 60 km north of Morondava on the Tsingy track'],
      ['Recommended stay', '1 night for the night walk'],
      ['Best time', 'Dry season, April to November; fossa more visible at the end of the year'],
      ['Vehicle', '4x4 recommended'],
      ['Visit', 'Guide compulsory; check prices on site'],
    ],
  },
};

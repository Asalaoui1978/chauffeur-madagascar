// Photos d'illustration libres de droits (Wikimedia Commons, licences Creative Commons ou domaine public).
// Elles sont affichées directement depuis Wikimedia, avec le nom de l'auteur, comme l'exigent les licences.
// Pour mettre vos propres photos : déposez-les dans public/images/ et remplacez `file` par `src: '/images/...'`.

export type Photo = {
  file?: string; // nom exact du fichier sur Wikimedia Commons
  src?: string; // ou chemin d'une photo locale (prioritaire)
  author: string;
  alt: string;
};

export const photos: Record<string, Photo> = {
  'allee-des-baobabs': { file: 'Allée des baobabs Morondava Madagascar.jpg', author: 'Cactus0625', alt: "L'Allée des Baobabs au lever du jour, près de Morondava" },
  morondava: { file: 'Walking the Avenue of the Baobabs.jpg', author: 'Gavin Evans', alt: "Habitants marchant sur l'Allée des Baobabs à Morondava" },
  'tsingy-de-bemaraha': { file: 'Tsingy de Bemaraha, Madagascar.jpg', author: 'Cactus0625', alt: 'Les pics calcaires des Tsingy de Bemaraha' },
  'tsingy-circuit': { file: 'Circuit Andamozavaky, Tsingy de Bemaraha, Madagascar.jpg', author: 'Cactus0625', alt: 'Circuit Andamozavaky dans les Tsingy de Bemaraha' },
  isalo: { file: 'Isalo National Park 01.jpg', author: 'Bernard Gagnon', alt: "Les reliefs de grès du parc national de l'Isalo" },
  ambalavao: { file: 'Ring-tailed lemur (Lemur catta) in tree.jpg', author: 'Charles J. Sharp', alt: "Maki catta dans un arbre de la réserve d'Anja, près d'Ambalavao" },
  fianarantsoa: { file: 'Madagascar - rice terraces (2).jpg', author: 'Hardscarf', alt: 'Rizières en terrasses des Hautes Terres malgaches' },
  rizieres: { file: 'Madagascar - rice terraces.jpg', author: 'Hardscarf', alt: 'Rizières en terrasses au bord de la RN7, entre Ranomafana et l\'Isalo' },
  antsirabe: { file: 'Antsirabe pousse pousse.JPG', author: 'Lemurbaby', alt: 'Pousse-pousse dans les rues d\'Antsirabe' },
  ambositra: { file: 'Pousse-pousse Madagascar.jpg', author: 'Bernard Gagnon', alt: 'Pousse-pousse à Ambositra' },
  ranomafana: { file: 'Namorona River in Ranomafana National Park 2013 1.jpg', author: 'Smiley.toerist', alt: 'La rivière Namorona dans la forêt de Ranomafana' },
  'nosy-be': { file: 'Ampasipohy, Nosy Be, Madagascar, 2025-09-21, DD 17.jpg', author: 'Diego Delso', alt: "Plage d'Ampasipohy à Nosy Be" },
  'nosy-komba': { file: 'Nosy Komba, Madagascar, 2025-09-12, DD 48.jpg', author: 'Diego Delso', alt: 'Plage de Nosy Komba, au large de Nosy Be' },
  mahajanga: { file: 'The baobab, Mahajanga.jpg', author: 'Lukys', alt: 'Le vieux baobab en bord de mer, symbole de Mahajanga' },
  'cirque-rouge': { file: 'Le Cirque Rouge de Mahajanga.jpg', author: 'DavidBanken', alt: 'Le Cirque Rouge de Mahajanga' },
  ankarafantsika: { file: 'Lake Ravelobe, Ankarafantsika National Park, Madagascar.jpg', author: 'Frank Vassen', alt: "Le lac Ravelobe dans le parc national d'Ankarafantsika" },
  manakara: { file: 'Manakara Be - south.jpg', author: 'Hardscarf', alt: 'Le front de mer de Manakara' },
  'canal-des-pangalanes': { file: 'Nosy Varika - bridge (1).jpg', author: 'Hardscarf', alt: 'Le canal des Pangalanes près de Nosy Varika' },
  tulear: { file: 'Madagaskar Bucht von Toliara Küstensegler.JPG', author: 'voir Wikimedia Commons', alt: 'Voilier traditionnel dans la baie de Tuléar' },
  anakao: { file: 'Madagaskar Anako Beach Kinderauslegerboot.JPG', author: 'voir Wikimedia Commons', alt: "Pirogue à balancier sur la plage d'Anakao" },
  mananjary: { file: 'Canal des Pangalanes à Mananjary.jpg', author: 'voir Wikimedia Commons', alt: 'Le canal des Pangalanes à Mananjary' },
};

export const photoUrl = (p: Photo, width = 1280) =>
  p.src ?? `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(p.file ?? '')}?width=${width}`;

export const photoPage = (p: Photo) =>
  p.file ? `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(p.file.replace(/ /g, '_'))}` : undefined;

export const getPhoto = (key?: string) => (key ? photos[key] : undefined);

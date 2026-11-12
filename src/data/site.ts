// Réglages généraux du site : à compléter ici, tout le site se met à jour.
export const site = {
  name: 'Chauffeur Madagascar',
  tagline: 'Votre chauffeur-guide sur les routes de Madagascar',
  driver: 'ThreePac',
  driverRealName: 'Patrick',
  url: 'https://chauffeurmadagascar.com',
  whatsapp: '261347090909',
  phoneDisplay: '+261 34 70 909 09',
  email: '', // [À COMPLÉTER] e-mail (laisser vide pour le masquer)
  languages: ['Malgache', 'Français'], // [À COMPLÉTER] ajouter Anglais, Italien… si parlé
  vehicle: '4x4 climatisé (modèle à préciser)', // [À COMPLÉTER]
  beloSurMerSite: 'https://visitbelosurmer.com/',
};

export const whatsappLink = (message = 'Bonjour ThreePac, je prépare un voyage à Madagascar et je voudrais un devis.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

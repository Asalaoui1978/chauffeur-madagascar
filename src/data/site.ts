// Réglages généraux du site : à compléter ici, tout le site se met à jour.
export const site = {
  name: 'Chauffeur Madagascar',
  tagline: 'Votre chauffeur-guide sur les routes de Madagascar',
  driver: 'Tripack',
  driverRealName: 'Patrick',
  url: 'https://chauffeurmadagascar.com',
  whatsapp: '261347090909',
  phoneDisplay: '+261 34 70 909 09',
  facebookName: 'Tripack Patty Andriamalala',
  // [À COMPLÉTER] remplacer par l'adresse exacte du profil (ex. https://www.facebook.com/xxxx)
  facebook: 'https://www.facebook.com/share/14uCRcZVfkL/',
  email: '', // [À COMPLÉTER] e-mail (laisser vide pour le masquer)
  languages: ['Malgache', 'Français'], // [À COMPLÉTER] ajouter Anglais, Italien… si parlé
  vehicle: 'Kia Sportage 4x4', // quatre roues motrices, climatisé, 5 places (confirmé nov. 2026)
  beloSurMerSite: 'https://visitbelosurmer.com/',
};

export const whatsappLink = (message = 'Bonjour Tripack, je prépare un voyage à Madagascar et je voudrais un devis.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

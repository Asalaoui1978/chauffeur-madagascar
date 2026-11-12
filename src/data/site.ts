// Réglages généraux du site : à compléter ici, tout le site se met à jour.
export const site = {
  name: 'Chauffeur Madagascar',
  tagline: 'Votre chauffeur-guide sur les routes de Madagascar',
  driver: 'ThreePac',
  driverRealName: 'Patrick',
  url: 'https://chauffeurmadagascar.com',
  whatsapp: '261347090909',
  phoneDisplay: '+261 34 70 909 09',
  facebookName: 'Tripack Patty Andriamalala',
  // [À COMPLÉTER] remplacer par l'adresse exacte du profil (ex. https://www.facebook.com/xxxx)
  facebook: 'https://www.facebook.com/search/top?q=Tripack%20Patty%20Andriamalala',
  email: '', // [À COMPLÉTER] e-mail (laisser vide pour le masquer)
  languages: ['Malgache', 'Français'], // [À COMPLÉTER] ajouter Anglais, Italien… si parlé
  vehicle: '4x4 Kia Sportage', // [À VÉRIFIER] modèle, places, climatisation
  beloSurMerSite: 'https://visitbelosurmer.com/',
};

export const whatsappLink = (message = 'Bonjour ThreePac, je prépare un voyage à Madagascar et je voudrais un devis.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

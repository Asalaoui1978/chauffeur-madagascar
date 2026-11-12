// Réglages généraux du site : à compléter ici, tout le site se met à jour.
export const site = {
  name: 'Chauffeur Madagascar', // [À COMPLÉTER] nom définitif du site
  tagline: 'Votre chauffeur-guide sur les routes de Madagascar',
  driver: 'ThreePac',
  driverRealName: 'Patrick',
  url: 'https://chauffeur-madagascar.pages.dev', // [À COMPLÉTER] domaine définitif
  whatsapp: '261340000000', // [À COMPLÉTER] numéro WhatsApp au format international, sans + ni espaces
  phoneDisplay: '+261 34 00 000 00', // [À COMPLÉTER]
  email: 'contact@exemple.com', // [À COMPLÉTER]
  languages: ['Malgache', 'Français'], // [À COMPLÉTER] ajouter Anglais, Italien… si parlé
  vehicle: '4x4 climatisé (modèle à préciser)', // [À COMPLÉTER]
  beloSurMerSite: 'https://visitbelosurmer.com/',
};

export const whatsappLink = (message = 'Bonjour ThreePac, je prépare un voyage à Madagascar et je voudrais un devis.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export type ItinText = {
  title: string;
  short: string;
  description: string;
  distance: string;
  duree: string;
  saison: string;
  vehicule: string;
  intro: string[];
  jours: { jour: string; titre: string; route?: string; texte: string }[];
  conseils: string[];
  pointsForts: string[];
  idealPour: string;
};

export type LieuText = {
  name: string;
  description: string;
  intro: string;
  aVoir: string[];
  conseil: string;
};

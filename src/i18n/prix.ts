import type { Lang } from './index';

export const prixUi: Record<Lang, { fact: string; range: (a: number, b: number, j1: number, j2: number) => string; est_h: string; est_days: string; est_txt: (n: number, t: number) => string; est_note: string; msg: (n: number, t: number) => string }> = {
  fr: {
    fact: 'Prix du chauffeur',
    range: (a, b, j1, j2) => `${a} à ${b} € (${j1} à ${j2} jours × 50 €), hors carburant et péages`,
    est_h: 'Estimation du prix du chauffeur', est_days: 'Nombre de jours avec le chauffeur',
    est_txt: (n, t) => `${n} jour${n > 1 ? 's' : ''} × 50 € = ${t} €`,
    est_note: 'Chauffeur et 4x4 Kia Sportage climatisé (jusqu’à 4 passagers). Patrick gère ses repas et son hébergement. Carburant et péages en plus, chiffrés dans le devis.',
    msg: (n, t) => `Estimation chauffeur : ${n} jours × 50 € = ${t} € (hors carburant et péages).`,
  },
  en: {
    fact: 'Driver price',
    range: (a, b, j1, j2) => `€${a} to €${b} (${j1} to ${j2} days × €50), excluding fuel and tolls`,
    est_h: 'Driver price estimate', est_days: 'Number of days with the driver',
    est_txt: (n, t) => `${n} day${n > 1 ? 's' : ''} × €50 = €${t}`,
    est_note: 'Driver and air-conditioned Kia Sportage 4x4 (up to 4 passengers). Patrick takes care of his own meals and accommodation. Fuel and tolls extra, detailed in the quote.',
    msg: (n, t) => `Driver estimate: ${n} days × €50 = €${t} (excluding fuel and tolls).`,
  },
  it: {
    fact: 'Prezzo dell’autista',
    range: (a, b, j1, j2) => `da ${a} a ${b} € (${j1}-${j2} giorni × 50 €), carburante e pedaggi esclusi`,
    est_h: 'Stima del prezzo dell’autista', est_days: 'Numero di giorni con l’autista',
    est_txt: (n, t) => `${n} giorn${n > 1 ? 'i' : 'o'} × 50 € = ${t} €`,
    est_note: 'Autista e 4x4 Kia Sportage climatizzato (fino a 4 passeggeri). Patrick provvede da sé a pasti e alloggio. Carburante e pedaggi a parte, indicati nel preventivo.',
    msg: (n, t) => `Stima autista: ${n} giorni × 50 € = ${t} € (carburante e pedaggi esclusi).`,
  },
  es: {
    fact: 'Precio del chófer',
    range: (a, b, j1, j2) => `de ${a} a ${b} € (${j1} a ${j2} días × 50 €), sin combustible ni peajes`,
    est_h: 'Estimación del precio del chófer', est_days: 'Número de días con el chófer',
    est_txt: (n, t) => `${n} día${n > 1 ? 's' : ''} × 50 € = ${t} €`,
    est_note: 'Chófer y 4x4 Kia Sportage climatizado (hasta 4 pasajeros). Patrick se encarga de sus comidas y su alojamiento. Combustible y peajes aparte, detallados en el presupuesto.',
    msg: (n, t) => `Estimación chófer: ${n} días × 50 € = ${t} € (sin combustible ni peajes).`,
  },
};

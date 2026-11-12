// Renvoie les lieux et itinéraires dans la langue demandée (le français reste la source).
import type { Lang } from '../i18n';
import { lieux as lieuxFr, type Lieu } from './lieux';
import { itineraires as itinFr, type Itineraire } from './itineraires';
import { lieux as lieuxEn } from './i18n/lieux.en';
import { lieux as lieuxIt } from './i18n/lieux.it';
import { lieux as lieuxEs } from './i18n/lieux.es';
import { itin as itinEn } from './i18n/itineraires.en';
import { itin as itinIt } from './i18n/itineraires.it';
import { itin as itinEs } from './i18n/itineraires.es';

const lieuxTr = { en: lieuxEn, it: lieuxIt, es: lieuxEs };
const itinTr = { en: itinEn, it: itinIt, es: itinEs };

export const getLieux = (lang: Lang): Lieu[] =>
  lang === 'fr' ? lieuxFr : lieuxFr.map((l) => ({ ...l, ...(lieuxTr[lang][l.slug] ?? {}) }));

export const getItineraires = (lang: Lang): Itineraire[] =>
  lang === 'fr'
    ? itinFr
    : itinFr.map((it) => {
        const tr = itinTr[lang][it.slug];
        if (!tr) return it;
        return {
          ...it,
          ...tr,
          // on garde la liste des lieux de chaque jour (données non traduites)
          jours: it.jours.map((j, i) => ({ ...j, ...(tr.jours[i] ?? {}) })),
        };
      });

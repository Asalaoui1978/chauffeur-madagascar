import type { Lang } from '../i18n';
import type { GuideLong } from './i18n/types';
import { guideLong as fr } from './i18n/guide-long.fr';
import { guideLong as en } from './i18n/guide-long.en';
import { guideLong as it } from './i18n/guide-long.it';
import { guideLong as es } from './i18n/guide-long.es';

const all: Record<Lang, Record<string, GuideLong>> = { fr, en, it, es };
export const pratiqueH2: Record<Lang, string> = { fr: 'Infos pratiques', en: 'Practical information', it: 'Informazioni pratiche', es: 'Información práctica' };
export const getGuideLong = (lang: Lang, slug: string): GuideLong | undefined => all[lang][slug] ?? undefined;
export const guideUi: Record<Lang, { faq: string; driver: string; blog: string }> = {
  fr: { faq: 'Questions fréquentes', driver: 'Votre chauffeur dans la région', blog: 'À lire sur le blog' },
  en: { faq: 'Frequently asked questions', driver: 'Your driver in the area', blog: 'Read on the blog' },
  it: { faq: 'Domande frequenti', driver: 'Il vostro autista nella zona', blog: 'Da leggere sul blog' },
  es: { faq: 'Preguntas frecuentes', driver: 'Su chófer en la zona', blog: 'Para leer en el blog' },
};

import type { Lang } from '../i18n';
import type { GuideLong } from './i18n/types';
import { guideLong as fr } from './i18n/guide-long.fr';
import { guideLong as en } from './i18n/guide-long.en';
import { guideLong as it } from './i18n/guide-long.it';
import { guideLong as es } from './i18n/guide-long.es';
import { guideLong2 as fr2 } from './i18n/guide-long2.fr';
import { guideLong2 as en2 } from './i18n/guide-long2.en';
import { guideLong2 as it2 } from './i18n/guide-long2.it';
import { guideLong2 as es2 } from './i18n/guide-long2.es';

const all: Record<Lang, Record<string, GuideLong>> = { fr: { ...fr, ...fr2 }, en: { ...en, ...en2 }, it: { ...it, ...it2 }, es: { ...es, ...es2 } };
export const pratiqueH2: Record<Lang, string> = { fr: 'Infos pratiques', en: 'Practical information', it: 'Informazioni pratiche', es: 'Información práctica' };
export const getGuideLong = (lang: Lang, slug: string): GuideLong | undefined => all[lang][slug] ?? undefined;
export const guideUi: Record<Lang, { faq: string; driver: string; blog: string }> = {
  fr: { faq: 'Questions fréquentes', driver: 'Votre chauffeur dans la région', blog: 'À lire sur le blog' },
  en: { faq: 'Frequently asked questions', driver: 'Your driver in the area', blog: 'Read on the blog' },
  it: { faq: 'Domande frequenti', driver: 'Il vostro autista nella zona', blog: 'Da leggere sul blog' },
  es: { faq: 'Preguntas frecuentes', driver: 'Su chófer en la zona', blog: 'Para leer en el blog' },
};

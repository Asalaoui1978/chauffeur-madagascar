import type { Lang } from '../i18n';
import type { GuideLong } from './i18n/types';
import { guideLong as fr } from './i18n/guide-long.fr';
import { guideLong as en } from './i18n/guide-long.en';
import { guideLong as it } from './i18n/guide-long.it';
import { guideLong as es } from './i18n/guide-long.es';

const all: Record<Lang, Record<string, GuideLong>> = { fr, en, it, es };
export const pratiqueH2: Record<Lang, string> = { fr: 'Infos pratiques', en: 'Practical information', it: 'Informazioni pratiche', es: 'Información práctica' };
export const getGuideLong = (lang: Lang, slug: string): GuideLong | undefined => all[lang][slug] ?? undefined;

import { ui } from './ui';

export const langs = ['fr', 'en', 'it', 'es'] as const;
export type Lang = (typeof langs)[number];
export const otherLangs = ['en', 'it', 'es'] as const;

export const langNames: Record<Lang, string> = { fr: 'Français', en: 'English', it: 'Italiano', es: 'Español' };
export const ogLocale: Record<Lang, string> = { fr: 'fr_FR', en: 'en_GB', it: 'it_IT', es: 'es_ES' };

/** Lien vers une page dans une langue : '/guide/' → '/en/guide/' */
export const L = (lang: Lang, path: string) => (lang === 'fr' ? path : `/${lang}${path}`);

type Dict = typeof ui.fr;
export const t = (lang: Lang) => ui[lang] as Dict;

/** Remplace {x} dans un texte */
export const fill = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));

/** Langue et chemin « neutre » d'une URL : '/en/guide/isalo/' → { lang: 'en', path: '/guide/isalo/' } */
export const parseUrl = (url: URL): { lang: Lang; path: string } => {
  const m = url.pathname.match(/^\/(en|it|es)(\/.*)?$/);
  if (m) return { lang: m[1] as Lang, path: m[2] || '/' };
  return { lang: 'fr', path: url.pathname };
};

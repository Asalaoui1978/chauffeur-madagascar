// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ⚠️ Remplacer par le domaine définitif quand il sera choisi.
export default defineConfig({
  site: 'https://chauffeurmadagascar.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr', en: 'en', it: 'it', es: 'es' } },
    }),
  ],
});

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ⚠️ Remplacer par le domaine définitif quand il sera choisi.
export default defineConfig({
  site: 'https://chauffeur-madagascar.pages.dev',
  trailingSlash: 'always',
  integrations: [sitemap()],
});

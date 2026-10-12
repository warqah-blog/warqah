import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://warqah.pages.dev',
  output: 'static',
  integrations: [sitemap({ i18n: { defaultLocale: 'ar', locales: { ar: 'ar-SA', en: 'en' } } })],
  adapter: cloudflare(),
});

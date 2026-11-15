import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://warqah.pages.dev',
  output: 'static',
  integrations: [sitemap({ filter: (page) => page !== 'https://warqah.pages.dev/' })],
  adapter: cloudflare(),
});

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://warqah.blog',
  output: 'static',
  integrations: [sitemap({ filter: (page) => page !== 'https://warqah.blog/' })],
  adapter: cloudflare(),
});

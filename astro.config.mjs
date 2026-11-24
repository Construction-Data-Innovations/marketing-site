import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.constructwise.ai',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/checkout') && !page.includes('/email-preferences'),
    }),
  ],
  redirects: {
    '/conexpo': {
      status: 302,
      destination: 'https://244285324.hs-sites-na2.com/constructwise-at-conexpo',
    },
  },
});

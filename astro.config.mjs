import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  redirects: {
    '/conexpo': {
      status: 302,
      destination: 'https://244285324.hs-sites-na2.com/constructwise-at-conexpo',
    },
  },
});

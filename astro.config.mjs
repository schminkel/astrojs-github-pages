import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://schminkel.github.io',
  base: '/astrojs-github-pages',
  
  integrations: [
    react()
  ]
});
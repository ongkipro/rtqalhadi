// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://rtqalhadi.com',
  integrations: [sitemap()],
  build: {
    // Inline semua CSS ke <style> → hilangkan request CSS yang render-blocking.
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

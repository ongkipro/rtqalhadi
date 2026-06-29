// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build
export default defineConfig({
  site: 'https://rtqalhadi.com',
  // Sitemap dibuat manual via src/pages/sitemap.xml.ts (satu file /sitemap.xml).
  build: {
    // Inline semua CSS ke <style> → hilangkan request CSS yang render-blocking.
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

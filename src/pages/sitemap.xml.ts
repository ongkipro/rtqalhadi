import type { APIRoute } from 'astro';
import { NAV, SITE_URL } from '../data/site';

// Satu sitemap tunggal: /sitemap.xml (bukan sitemap-index).
const routes = ['/', ...NAV.map((n) => `${n.href}/`)];

export const GET: APIRoute = () => {
  const urls = routes
    .map((r) => `  <url><loc>${SITE_URL}${r}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

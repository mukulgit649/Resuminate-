import { writeFileSync } from 'fs';
import { join } from 'path';

const routes = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/features', priority: 0.9, changefreq: 'weekly' },
  { path: '/templates', priority: 0.9, changefreq: 'weekly' },
  { path: '/resources', priority: 0.8, changefreq: 'weekly' },
  { path: '/blog', priority: 0.8, changefreq: 'daily' },
  { path: '/success-stories', priority: 0.8, changefreq: 'weekly' },
  { path: '/pricing', priority: 0.9, changefreq: 'monthly' },
  { path: '/faq', priority: 0.7, changefreq: 'monthly' },
  { path: '/ats-score', priority: 0.8, changefreq: 'weekly' },
  { path: '/interview-coach', priority: 0.8, changefreq: 'weekly' },
  { path: '/job-matcher', priority: 0.8, changefreq: 'weekly' },
];

const generateSitemap = () => {
  const baseUrl = 'https://resuminate.com';
  const date = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
};

export default generateSitemap; 
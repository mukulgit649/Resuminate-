import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap(); 
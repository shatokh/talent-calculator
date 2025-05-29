import { createWriteStream } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { resolve } from 'path';

const baseUrl = 'https://talent-calculator-ecru.vercel.app';

const links = [
  { url: '/',      changefreq: 'monthly', priority: 1.0 },
  { url: '/class/guardian',   changefreq: 'monthly', priority: 0.9 },
  { url: '/class/alchemist',  changefreq: 'monthly', priority: 0.9 },
  { url: '/class/hunter',     changefreq: 'monthly', priority: 0.9 },
  { url: '/class/mage',       changefreq: 'monthly', priority: 0.9 },
  { url: '/class/shadow',     changefreq: 'monthly', priority: 0.9 }
];

async function generate() {
  const sitemap = new SitemapStream({ hostname: baseUrl });
  const path = resolve('static/sitemap.xml');
  const writeStream = createWriteStream(path);

  sitemap.pipe(writeStream);              // Pipe to file

  for (const link of links) {
    sitemap.write(link);                  // Add URL
  }

  sitemap.end();                          // End stream

  await streamToPromise(sitemap);         // Wait for generation to complete
  console.log('✅ sitemap.xml generated at', path);
}

generate().catch(console.error);

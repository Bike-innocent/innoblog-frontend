// // generate-sitemap.js

// const SitemapGenerator = require('sitemap-generator-cli');
// const path = require('path');

// SitemapGenerator({
//   baseURL: 'https://innoblog.com.ng',
//   urls: [
//     '/',
//     '/home',
//     '/posts/slug', // Use real slugs or dynamically generate these URLs
//     '/profile',
//     '/saved',
//     '/register',
//     '/login',
//     '/forgot-password',
//     '/reset-password',
//     '/privacy-policy',
//     '/terms-of-service',

//   ],
//   output: path.join(__dirname, 'public', 'sitemap.xml'),
// }).then(() => {
//   console.log('Sitemap generated successfully');
// });


// generate-sitemap.js

const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function generateSitemap() {
    try {
        // Base URL of your site
        const baseURL = 'https://innoblog.com.ng';

        // Fetch post slugs from your backend API
        const { data: slugs } = await axios.get('https://backend.innoblog.com.ng/api/posts/slugs/site-map'); // Adjust the endpoint as necessary

        // Create an array to hold all URLs
        const urls = [
            '/',
            '/home',
            '/posts/slug', // Use real slugs or dynamically generate these URL
            '/register',
            '/login',
            '/forgot-password',
            '/reset-password',
            '/privacy-policy',
            '/terms-of-service',
        ];

        // Add dynamic post URLs
        slugs.forEach(slug => {
            urls.push(`/posts/${slug}`);
          
        });

        // Generate sitemap XML
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(url => `
        <url>
          <loc>${baseURL}${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
      `).join('')}
    </urlset>`;

        // Write the sitemap to a file
        fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
        console.log('Sitemap generated successfully');
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}

generateSitemap();

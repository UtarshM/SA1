// Sitemap Generator for SEO
// This helps search engines discover all your pages

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (urls: SitemapUrl[]): string => {
  const urlEntries = urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

// Static pages sitemap
export const getStaticPagesSitemap = (baseUrl: string): SitemapUrl[] => {
  return [
    {
      loc: `${baseUrl}/`,
      changefreq: 'daily',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/courses`,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/blog`,
      changefreq: 'daily',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/about`,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/workshop`,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/internships`,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/admissions`,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/testimonials`,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/contact`,
      changefreq: 'monthly',
      priority: 0.7
    }
  ];
};

// Generate blog posts sitemap from WordPress
export const getBlogPostsSitemap = async (baseUrl: string, wordpressUrl: string): Promise<SitemapUrl[]> => {
  try {
    const response = await fetch(`${wordpressUrl}/wp-json/wp/v2/posts?per_page=100`);
    const posts = await response.json();

    return posts.map((post: any) => ({
      loc: `${baseUrl}/blog/${post.slug}`,
      lastmod: post.modified,
      changefreq: 'monthly' as const,
      priority: 0.8
    }));
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
    return [];
  }
};

// Generate robots.txt content
export const generateRobotsTxt = (baseUrl: string): string => {
  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin and private pages
Disallow: /admin/
Disallow: /private/

# Allow all bots to crawl
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /
`;
};

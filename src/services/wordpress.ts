// WordPress REST API Service
// Configure your WordPress site URL in .env file

const WORDPRESS_URL = import.meta.env.VITE_WORDPRESS_URL || 'https://your-wordpress-site.com';
const WP_API_BASE = `${WORDPRESS_URL}/wp-json/wp/v2`;

export interface WordPressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  categories: number[];
  tags: number[];
  yoast_head?: string;
  yoast_head_json?: {
    title: string;
    description: string;
    robots: {
      index: string;
      follow: string;
    };
    og_title: string;
    og_description: string;
    og_image: Array<{
      url: string;
      width: number;
      height: number;
    }>;
    twitter_card: string;
    twitter_title: string;
    twitter_description: string;
    twitter_image: string;
    canonical: string;
    og_locale: string;
    og_type: string;
    og_url: string;
    article_published_time: string;
    article_modified_time: string;
  };
  _embedded?: {
    author?: Array<{
      id: number;
      name: string;
      url: string;
      description: string;
      avatar_urls: {
        [key: string]: string;
      };
    }>;
    'wp:featuredmedia'?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
      media_details: {
        width: number;
        height: number;
      };
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
  };
}

export interface WordPressCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
}

export interface WordPressAuthor {
  id: number;
  name: string;
  url: string;
  description: string;
  avatar_urls: {
    [key: string]: string;
  };
}

// Fetch all posts with pagination
export const fetchPosts = async (
  page: number = 1,
  perPage: number = 10,
  categoryId?: number,
  search?: string
): Promise<{ posts: WordPressPost[]; totalPages: number; total: number }> => {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
      _embed: 'true',
    });

    if (categoryId) {
      params.append('categories', categoryId.toString());
    }

    if (search) {
      params.append('search', search);
    }

    const response = await fetch(`${WP_API_BASE}/posts?${params.toString()}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const posts = await response.json();
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');
    const total = parseInt(response.headers.get('X-WP-Total') || '0');

    return { posts, totalPages, total };
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return { posts: [], totalPages: 0, total: 0 };
  }
};

// Fetch single post by slug
export const fetchPostBySlug = async (slug: string): Promise<WordPressPost | null> => {
  try {
    const response = await fetch(`${WP_API_BASE}/posts?slug=${slug}&_embed=true`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }

    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    return null;
  }
};

// Fetch single post by ID
export const fetchPostById = async (id: number): Promise<WordPressPost | null> => {
  try {
    const response = await fetch(`${WP_API_BASE}/posts/${id}?_embed=true`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    return null;
  }
};

// Fetch all categories
export const fetchCategories = async (): Promise<WordPressCategory[]> => {
  try {
    const response = await fetch(`${WP_API_BASE}/categories?per_page=100`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress categories:', error);
    return [];
  }
};

// Fetch author by ID
export const fetchAuthor = async (id: number): Promise<WordPressAuthor | null> => {
  try {
    const response = await fetch(`${WP_API_BASE}/users/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch author');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress author:', error);
    return null;
  }
};

// Fetch featured posts
export const fetchFeaturedPosts = async (limit: number = 3): Promise<WordPressPost[]> => {
  try {
    // Assuming you have a "featured" tag or category with ID 1
    // Adjust this based on your WordPress setup
    const response = await fetch(
      `${WP_API_BASE}/posts?per_page=${limit}&_embed=true&orderby=date&order=desc`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch featured posts');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
};

// Fetch related posts
export const fetchRelatedPosts = async (
  postId: number,
  categoryIds: number[],
  limit: number = 3
): Promise<WordPressPost[]> => {
  try {
    if (categoryIds.length === 0) {
      return [];
    }

    const response = await fetch(
      `${WP_API_BASE}/posts?categories=${categoryIds.join(',')}&exclude=${postId}&per_page=${limit}&_embed=true`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch related posts');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
};

// Helper function to extract plain text from HTML
export const stripHtml = (html: string): string => {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};

// Helper function to format date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Helper function to calculate read time
export const calculateReadTime = (content: string): string => {
  const wordsPerMinute = 200;
  const text = stripHtml(content);
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
};

// Helper function to get featured image URL
export const getFeaturedImageUrl = (post: WordPressPost): string => {
  if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
    return post._embedded['wp:featuredmedia'][0].source_url;
  }
  return 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200';
};

// Helper function to get author name
export const getAuthorName = (post: WordPressPost): string => {
  if (post._embedded?.author?.[0]?.name) {
    return post._embedded.author[0].name;
  }
  return 'Scalezix Academy';
};

// Helper function to get categories
export const getCategories = (post: WordPressPost): string[] => {
  if (post._embedded?.['wp:term']?.[0]) {
    return post._embedded['wp:term'][0].map(term => term.name);
  }
  return [];
};

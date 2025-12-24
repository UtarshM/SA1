import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import {
  fetchPostBySlug,
  fetchRelatedPosts,
  WordPressPost,
  getFeaturedImageUrl,
  getAuthorName,
  formatDate,
  calculateReadTime,
  getCategories,
  stripHtml
} from '../services/wordpress';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      
      setLoading(true);
      const fetchedPost = await fetchPostBySlug(slug);
      setPost(fetchedPost);
      
      if (fetchedPost && fetchedPost.categories.length > 0) {
        const related = await fetchRelatedPosts(fetchedPost.id, fetchedPost.categories, 3);
        setRelatedPosts(related);
      }
      
      setLoading(false);
    };

    loadPost();
    window.scrollTo(0, 0);
  }, [slug]);

  const handleShare = (platform: string) => {
    if (!post) return;
    
    const url = window.location.href;
    const title = post.title.rendered;
    
    const shareUrls: { [key: string]: string } = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const getCategoryColor = (categoryName: string) => {
    const colors: { [key: string]: string } = {
      'AI Trends': 'bg-blue-100 text-blue-800',
      'Career Advice': 'bg-green-100 text-green-800',
      'Technical': 'bg-purple-100 text-purple-800',
      'Ethics': 'bg-orange-100 text-orange-800',
      'NLP': 'bg-indigo-100 text-indigo-800',
      'Healthcare': 'bg-pink-100 text-pink-800',
      'Industry News': 'bg-teal-100 text-teal-800'
    };
    return colors[categoryName] || 'bg-gray-100 text-gray-800';
  };

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Back to Blog
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const categories = getCategories(post);
  const authorName = getAuthorName(post);
  const featuredImage = getFeaturedImageUrl(post);
  const publishDate = formatDate(post.date);
  const readTime = calculateReadTime(post.content.rendered);

  // Use Yoast SEO data if available, otherwise fallback to defaults
  const seoTitle = post.yoast_head_json?.title || post.title.rendered;
  const seoDescription = post.yoast_head_json?.description || stripHtml(post.excerpt.rendered).substring(0, 160);
  const ogImage = post.yoast_head_json?.og_image?.[0]?.url || featuredImage;

  return (
    <div className="pt-16">
      <Helmet>
        <title>{seoTitle} | Scalezix Academy</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={window.location.href} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={ogImage} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={post.modified} />
        <meta property="article:author" content={authorName} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title.rendered,
            image: featuredImage,
            datePublished: post.date,
            dateModified: post.modified,
            author: {
              '@type': 'Person',
              name: authorName
            },
            publisher: {
              '@type': 'Organization',
              name: 'Scalezix Academy',
              logo: {
                '@type': 'ImageObject',
                url: 'https://scalezixacademy.com/scalezix-academy-logo.png'
              }
            },
            description: seoDescription,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': window.location.href
            }
          })}
        </script>
      </Helmet>

      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog">
            <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title.rendered}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span>{authorName}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{publishDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={featuredImage}
              alt={post.title.rendered}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none mb-12
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-gray-700 prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700
              prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto
              prose-img:rounded-lg prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Share Buttons */}
          <div className="border-t border-b border-gray-200 py-8 mb-12">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Share2 className="h-5 w-5 mr-2" />
                Share this article
              </h3>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          {post._embedded?.author?.[0] && (
            <div className="bg-gray-50 rounded-lg p-6 mb-12">
              <div className="flex items-start space-x-4">
                {post._embedded.author[0].avatar_urls?.['96'] && (
                  <img
                    src={post._embedded.author[0].avatar_urls['96']}
                    alt={authorName}
                    className="w-16 h-16 rounded-full"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    About {authorName}
                  </h3>
                  <p className="text-gray-600">
                    {post._embedded.author[0].description || 'Expert contributor at Scalezix Academy'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => {
                const relatedCategories = getCategories(relatedPost);
                return (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                    <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden h-full">
                      <img
                        src={getFeaturedImageUrl(relatedPost)}
                        alt={relatedPost.title.rendered}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        {relatedCategories.length > 0 && (
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${getCategoryColor(relatedCategories[0])}`}>
                            {relatedCategories[0]}
                          </span>
                        )}
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                          {relatedPost.title.rendered}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {stripHtml(relatedPost.excerpt.rendered)}
                        </p>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Joining an Upcoming Cohort?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Explore our structured AI learning cohorts and start your learning journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programs">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Programs
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;

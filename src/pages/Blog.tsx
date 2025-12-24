import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Clock, Search, Tag, Loader } from 'lucide-react';
import {
  fetchPosts,
  fetchCategories,
  WordPressPost,
  WordPressCategory,
  getFeaturedImageUrl,
  getAuthorName,
  stripHtml,
  formatDate,
  calculateReadTime,
  getCategories
} from '../services/wordpress';

const Blog = () => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [categories, setCategories] = useState<WordPressCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch categories on mount
  useEffect(() => {
    const loadCategories = async () => {
      const cats = await fetchCategories();
      setCategories(cats);
    };
    loadCategories();
  }, []);

  // Fetch posts when filters change
  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const { posts: fetchedPosts, totalPages: pages } = await fetchPosts(
        currentPage,
        9,
        selectedCategory,
        searchTerm
      );
      setPosts(fetchedPosts);
      setTotalPages(pages);
      setLoading(false);
    };
    
    // Debounce search
    const timer = setTimeout(() => {
      loadPosts();
    }, 500);

    return () => clearTimeout(timer);
  }, [currentPage, selectedCategory, searchTerm]);

  const handleCategoryChange = (categoryId: number | undefined) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
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

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const regularPosts = posts.slice(1);

  return (
    <div className="pt-16">
      <Helmet>
        <title>AI Learning Insights & Guides | Scalezix Academy Blog</title>
        <meta 
          name="description" 
          content="Read simplified explanations, applied perspectives, and learning guidance on artificial intelligence and modern AI tools." 
        />
        <meta name="keywords" content="AI blog, machine learning tutorials, AI career advice, artificial intelligence trends, deep learning, NLP, computer vision" />
        <link rel="canonical" href="https://scalezixacademy.com/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Blog - Latest Insights & Trends | Scalezix Academy" />
        <meta property="og:description" content="Stay updated with the latest AI trends, tutorials, and career advice from industry experts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scalezixacademy.com/blog" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Blog - Latest Insights & Trends | Scalezix Academy" />
        <meta name="twitter:description" content="Stay updated with the latest AI trends, tutorials, and career advice." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Scalezix Academy Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our blog shares simple explanations, practical perspectives, and learning guidance around artificial intelligence and modern AI tools.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleCategoryChange(undefined)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === undefined
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <Loader className="h-12 w-12 text-blue-600 animate-spin" />
            </div>
          )}

          {/* Featured Post */}
          {!loading && featuredPost && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={getFeaturedImageUrl(featuredPost)}
                      alt={featuredPost.title.rendered}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    {getCategories(featuredPost).length > 0 && (
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(getCategories(featuredPost)[0])}`}>
                          {getCategories(featuredPost)[0]}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Link to={`/blog/${featuredPost.slug}`}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-200">
                        {featuredPost.title.rendered}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {stripHtml(featuredPost.excerpt.rendered).substring(0, 200)}...
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {getAuthorName(featuredPost)}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(featuredPost.date)}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {calculateReadTime(featuredPost.content.rendered)}
                      </div>
                    </div>
                    <Link to={`/blog/${featuredPost.slug}`}>
                      <button className="group flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 self-start">
                        Read Full Article
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts Grid */}
          {!loading && regularPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => {
                const postCategories = getCategories(post);
                return (
                  <article key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                    <div className="relative">
                      <img
                        src={getFeaturedImageUrl(post)}
                        alt={post.title.rendered}
                        className="w-full h-48 object-cover"
                      />
                      {postCategories.length > 0 && (
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(postCategories[0])}`}>
                            {postCategories[0]}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <Link to={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
                          {post.title.rendered}
                        </h3>
                      </Link>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {stripHtml(post.excerpt.rendered)}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {getAuthorName(post)}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(post.date)}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {calculateReadTime(post.content.rendered)}
                        </div>
                      </div>
                      
                      <Link to={`/blog/${post.slug}`}>
                        <button className="group flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* No Results */}
          {!loading && posts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No articles found matching your criteria</div>
              <p className="text-gray-400 mt-2">Try adjusting your search or filters</p>
            </div>
          )}

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
              >
                Previous
              </button>
              <span className="text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with AI Insights
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter and never miss the latest AI trends, tutorials, and career advice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Topics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most popular AI topics and discover what interests you most
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Machine Learning',
              'Deep Learning',
              'Neural Networks',
              'Computer Vision',
              'Natural Language Processing',
              'AI Ethics',
              'Robotics',
              'Data Science',
              'Python',
              'TensorFlow',
              'PyTorch',
              'AI Career'
            ].map((topic, index) => (
              <button
                key={index}
                className="bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                <Tag className="h-4 w-4 mr-2" />
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

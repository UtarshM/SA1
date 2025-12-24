import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>Page Not Found | Scalezix Academy</title>
        <meta 
          name="description" 
          content="The page you're looking for doesn't exist. Return to Scalezix Academy homepage." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-blue-600 mb-4 animate-bounce">
              404
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/"
              className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </button>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Looking for something specific?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <Link to="/programs" className="flex items-center text-blue-600 hover:text-blue-700">
                <Search className="h-4 w-4 mr-2" />
                AI Programs
              </Link>
              <Link to="/blog" className="flex items-center text-blue-600 hover:text-blue-700">
                <Search className="h-4 w-4 mr-2" />
                Blog
              </Link>
              <Link to="/about" className="flex items-center text-blue-600 hover:text-blue-700">
                <Search className="h-4 w-4 mr-2" />
                About Us
              </Link>
              <Link to="/contact" className="flex items-center text-blue-600 hover:text-blue-700">
                <Search className="h-4 w-4 mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
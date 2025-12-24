import { Helmet } from 'react-helmet-async';

const Disclaimer = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>Disclaimer | Scalezix Academy</title>
        <meta 
          name="description" 
          content="Important disclaimer about Scalezix Academy's educational programs and certifications." 
        />
        <link rel="canonical" href="https://scalezixacademy.com/disclaimer" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Disclaimer
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Scalezix Academy provides educational programs focused on learning and exposure to artificial intelligence concepts and tools.
            </p>
            
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>We do not offer job guarantees or placement services.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>We do not provide government-recognized or third-party certifications.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Completion certificates are issued solely to acknowledge participation in learning programs.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Scalezix Academy is not affiliated with or endorsed by any external certification authority.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>All learning outcomes depend on individual effort, engagement, and understanding.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;

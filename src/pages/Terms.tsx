import { Helmet } from 'react-helmet-async';

const Terms = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>Terms & Conditions | Scalezix Academy</title>
        <meta 
          name="description" 
          content="Terms and conditions for Scalezix Academy's educational programs and services." 
        />
        <link rel="canonical" href="https://scalezixacademy.com/terms" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Terms & Conditions
            </h1>
            <p className="text-lg text-gray-600">
              Effective Date: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Scalezix Academy is an education initiative operated by <span className="font-semibold">Scalezix Ventures LLP</span>. By accessing or using this website, you agree to the following terms.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Nature of Programs</h2>
                <p className="text-gray-700 leading-relaxed">
                  All programs offered by Scalezix Academy are educational in nature and focused on learning, exposure, and understanding of artificial intelligence concepts and tools.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. No Guarantees</h2>
                <p className="text-gray-700 leading-relaxed">
                  Scalezix Academy does not provide job guarantees, placement assistance, income assurances, or employment outcomes of any kind.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Certificates</h2>
                <p className="text-gray-700 leading-relaxed">
                  Certificates issued by Scalezix Academy are participation-based and acknowledge completion of learning activities. They are not government-recognized or affiliated with any external certification authority.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cohort Structure</h2>
                <p className="text-gray-700 leading-relaxed">
                  Programs are conducted in cohort formats with limited seats per batch. Admission to a cohort is subject to availability.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payments</h2>
                <p className="text-gray-700 leading-relaxed">
                  At present, Scalezix Academy does not accept online payments through this website. Program details and enrollment processes are shared separately upon request.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content on this website, including text and materials, is the intellectual property of Scalezix Ventures LLP and may not be reused without permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes</h2>
                <p className="text-gray-700 leading-relaxed">
                  Scalezix Academy reserves the right to update program structure, content, or terms without prior notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;

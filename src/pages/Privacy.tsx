import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>Privacy Policy | Scalezix Academy</title>
        <meta 
          name="description" 
          content="Privacy policy for Scalezix Academy - how we collect, use, and protect your personal information." 
        />
        <link rel="canonical" href="https://scalezixacademy.com/privacy" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Scalezix Academy respects your privacy and is committed to protecting your personal information.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may collect basic information such as name, email address, and contact details when you submit an enquiry or request program details.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Collected information is used only to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Respond to enquiries</li>
                  <li>Share program details</li>
                  <li>Communicate relevant updates</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We do not sell or share personal data with third parties for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  Reasonable measures are taken to protect your information from unauthorized access.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies</h2>
                <p className="text-gray-700 leading-relaxed">
                  This website may use basic cookies for performance and analytics purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. External Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our blog may be hosted on a separate WordPress installation. We are not responsible for external website privacy practices.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Consent</h2>
                <p className="text-gray-700 leading-relaxed">
                  By using this website, you consent to this privacy policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;

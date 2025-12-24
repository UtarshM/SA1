import React from 'react';
import { Award, CheckCircle, Shield, FileCheck, Search, Download } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Certification = () => {
  const certificationFeatures = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Skills Validated",
      description: "Each certificate represents completion of structured curriculum with assessments and projects"
    },
    {
      icon: <FileCheck className="h-8 w-8 text-green-600" />,
      title: "Assessment-Based",
      description: "Earned through weekly assignments, module assessments, and capstone project completion"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Verification ID",
      description: "Every certificate includes a unique verification ID for authenticity validation"
    },
    {
      icon: <Search className="h-8 w-8 text-orange-600" />,
      title: "Public Verification",
      description: "Employers can verify certificate authenticity using the verification portal"
    }
  ];

  const certificationProcess = [
    {
      step: 1,
      title: "Complete Program",
      description: "Finish all modules, assignments, and weekly assessments"
    },
    {
      step: 2,
      title: "Submit Capstone Project",
      description: "Build and present a comprehensive project demonstrating learned skills"
    },
    {
      step: 3,
      title: "Pass Final Assessment",
      description: "Complete the program evaluation with minimum 70% score"
    },
    {
      step: 4,
      title: "Receive Certificate",
      description: "Download your verified certificate with unique ID"
    }
  ];

  const whatCertificateShows = [
    "Program name and duration completed",
    "Skills and technologies covered",
    "Projects and assessments completed",
    "Instructor and academy verification",
    "Unique verification ID",
    "Date of completion"
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="Certification"
        description="Learn about Scalezix Academy certifications, verification process, and what our certificates represent"
        keywords="AI certification, verified certificates, learning credentials, skill validation"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Verified Certifications
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certificates validate your learning journey and demonstrate capability to employers
            </p>
          </div>
        </div>
      </section>

      {/* What Certificate Represents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Certificates Represent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More than just completion - validation of skills and capability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificationFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Earn Your Certificate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear requirements and assessment-based validation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificationProcess.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What's Included in Your Certificate
            </h2>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whatCertificateShows.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verification Portal */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Certificate Verification
            </h2>
            <p className="text-xl text-gray-600">
              Employers can verify certificate authenticity using the verification ID
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="max-w-md mx-auto">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Verification ID
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g., SA2024-ML-12345"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center">
                  <Search className="h-5 w-5 mr-2" />
                  Verify
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Verification IDs are found on the bottom of each certificate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Certificate */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sample Certificate
            </h2>
            <p className="text-xl text-gray-600">
              Professional design with all verification details
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-12 border-4 border-blue-600">
            <div className="text-center">
              <div className="mb-6">
                <Award className="h-16 w-16 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Certificate of Completion</h3>
              <p className="text-gray-600 mb-8">This certifies that</p>
              <p className="text-2xl font-bold text-gray-900 mb-8">[Student Name]</p>
              <p className="text-gray-600 mb-4">has successfully completed</p>
              <p className="text-xl font-bold text-blue-600 mb-8">[Program Name]</p>
              <div className="grid grid-cols-2 gap-8 mb-8 text-sm">
                <div>
                  <p className="text-gray-600">Duration</p>
                  <p className="font-semibold">[8 Weeks]</p>
                </div>
                <div>
                  <p className="text-gray-600">Completion Date</p>
                  <p className="font-semibold">[Date]</p>
                </div>
              </div>
              <div className="border-t border-gray-300 pt-6">
                <p className="text-xs text-gray-500">Verification ID: SA2024-ML-12345</p>
                <p className="text-xs text-gray-500 mt-1">Verify at: scalezixacademy.com/verify</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Earn Your Certificate?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Enroll in a program and start your learning journey today
          </p>
          <a href="/courses">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center">
              <Download className="h-5 w-5 mr-2" />
              View Programs
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Certification;

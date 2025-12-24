import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import PaymentModal from '../components/PaymentModal';
import toast from 'react-hot-toast';
import { Search, Clock, Users, Star, ArrowRight, BookOpen, Award, Play, Code, Zap } from 'lucide-react';

const Courses = () => {
  const [paymentModal, setPaymentModal] = useState<{
    isOpen: boolean;
    courseTitle: string;
    coursePrice: number;
  }>({
    isOpen: false,
    courseTitle: '',
    coursePrice: 0
  });

  const courses = [
    {
      id: 1,
      title: 'Complete AI & Machine Learning Mastery',
      category: 'Artificial Intelligence',
      description: 'Master AI from fundamentals to advanced implementation. Learn ML algorithms, deep learning, neural networks, and build production-ready AI systems. Includes comprehensive algorithm implementation and real-world projects.',
      price: 15000,
      originalPrice: 25000,
      duration: '16 weeks + 4 weeks Capstone',
      students: '50+',
      rating: 4.9,
      level: 'Beginner to Advanced',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Dr. Harsh Singh',
      modules: 24,
      projects: 8,
      certificate: true,
      featured: true,
      outcomes: 'Build AI systems from scratch; implement ML algorithms; design neural networks; deploy production AI models; understand AI mathematics and theory',
      careerPath: 'AI Engineer, ML Engineer, Data Scientist, AI Research Engineer',
      icon: <Code className="h-6 w-6" />
    },
    {
      id: 2,
      title: 'AI-Powered Automation & Intelligent Systems',
      category: 'AI Automation',
      description: 'Learn to build intelligent automation systems using AI. Master RPA, process automation, AI agents, workflow automation, and intelligent decision systems. Build end-to-end automated solutions.',
      price: 12000,
      originalPrice: 20000,
      duration: '12 weeks + 3 weeks Capstone',
      students: '45+',
      rating: 4.8,
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Michael Chen',
      modules: 18,
      projects: 6,
      certificate: true,
      featured: true,
      outcomes: 'Build AI-powered automation systems; implement RPA solutions; create intelligent agents; automate business processes; integrate AI with existing systems',
      careerPath: 'Automation Engineer, AI Solutions Architect, RPA Developer, Intelligent Systems Engineer',
      icon: <Zap className="h-6 w-6" />
    }
  ];

  const getLevelColor = (level: string) => {
    if (level.includes('Beginner')) return 'bg-green-100 text-green-800';
    if (level.includes('Intermediate')) return 'bg-yellow-100 text-yellow-800';
    if (level.includes('Advanced')) return 'bg-red-100 text-red-800';
    return 'bg-gray-100 text-gray-800';
  };

  const handleEnrollClick = (courseTitle: string, coursePrice: number) => {
    setPaymentModal({
      isOpen: true,
      courseTitle,
      coursePrice
    });
  };

  const handlePaymentSuccess = () => {
    toast.success('Successfully enrolled! Check your email for course access.');
  };

  return (
    <div className="pt-16">
      <SEOHead
        title="AI & Automation Programs"
        description="Master AI and Automation with our comprehensive programs. Learn machine learning algorithms, deep learning, and intelligent automation systems."
        keywords="AI programs, machine learning courses, automation training, AI education, intelligent systems"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              AI & Automation Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive, outcome-driven programs designed to build professional capabilities in AI and Intelligent Automation
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border-2 border-gray-200 hover:border-blue-500">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  {course.featured && (
                    <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                      ⭐ Featured Program
                    </div>
                  )}
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      {course.icon}
                    </div>
                    <span className="text-sm font-medium text-blue-600">{course.category}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                      {course.modules} modules
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-blue-600" />
                      {course.students} enrolled
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 mr-2 text-green-600" />
                      Verified Certificate
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">What You'll Be Able To Do:</h4>
                    <p className="text-sm text-gray-600">{course.outcomes}</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Career Pathways:</h4>
                    <p className="text-sm text-gray-600">{course.careerPath}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-3xl font-bold text-gray-900">₹{course.price.toLocaleString()}</span>
                        <span className="text-lg text-gray-500 line-through">₹{course.originalPrice.toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-green-600 font-medium">Save ₹{(course.originalPrice - course.price).toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link 
                      to={`/course/${course.id}`}
                      className="flex-1 group bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button
                      onClick={() => handleEnrollClick(course.title, course.price)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Focus on AI & Automation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are the most in-demand skills shaping the future of technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">High Demand</h3>
              <p className="text-gray-600">
                AI and automation skills are among the most sought-after in the job market, with salaries 40% above average
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Future-Proof</h3>
              <p className="text-gray-600">
                These technologies are transforming every industry, ensuring long-term career relevance and growth
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real Impact</h3>
              <p className="text-gray-600">
                Build systems that solve real problems, automate workflows, and create intelligent solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Master AI & Automation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our comprehensive programs and build the skills that employers demand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleEnrollClick(courses[0].title, courses[0].price)}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Enroll in AI Program
            </button>
            <button 
              onClick={() => handleEnrollClick(courses[1].title, courses[1].price)}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Enroll in Automation Program
            </button>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={paymentModal.isOpen}
        onClose={() => setPaymentModal({ ...paymentModal, isOpen: false })}
        courseTitle={paymentModal.courseTitle}
        coursePrice={paymentModal.coursePrice}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </div>
  );
};

export default Courses;

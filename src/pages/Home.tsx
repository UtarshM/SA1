import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, Target, BookOpen, Award, CheckCircle, ArrowRight, Sparkles, TrendingUp, Clock, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>Practical AI Learning Cohorts | Scalezix Academy</title>
        <meta 
          name="description" 
          content="Join structured, cohort-based AI learning programs focused on practical understanding and real-world exposure. Limited seats per batch." 
        />
        <link rel="canonical" href="https://scalezixacademy.com" />
      </Helmet>

      {/* Hero Section - Bold & Modern */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-white text-sm font-medium">Cohort-Based AI Learning</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
            >
              Master AI Through<br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Practical Learning
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-4 leading-relaxed"
            >
              Structured cohorts. Real understanding. No hype.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-gray-400 mb-10"
            >
              Limited to 100 learners per cohort • Practical exposure • Honest approach
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/programs">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 text-lg shadow-2xl flex items-center justify-center space-x-2"
                >
                  <span>Explore AI Cohorts</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-200 text-lg"
                >
                  Request Details
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
            >
              {[
                { number: '100', label: 'Max Learners/Cohort', icon: <Users className="h-6 w-6" /> },
                { number: '2', label: 'AI Programs', icon: <Target className="h-6 w-6" /> },
                { number: '3-5', label: 'Months Duration', icon: <Clock className="h-6 w-6" /> },
                { number: '100%', label: 'Practical Focus', icon: <TrendingUp className="h-6 w-6" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2 text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-6 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-white text-center"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">No Job Guarantees</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">No Placement Promises</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Just Honest Learning</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Modern Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Scalezix Academy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take a different approach to AI education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-12 w-12" />,
                title: 'Practical Focus',
                description: 'Learn AI through real tools, workflows, and examples. No theory-only lectures.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <BookOpen className="h-12 w-12" />,
                title: 'Structured Path',
                description: 'Progressive modules with guided sessions. Clear roadmap from basics to applied AI.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: <Award className="h-12 w-12" />,
                title: 'Honest Scope',
                description: 'We focus on learning. No false promises about jobs, placements, or certifications.',
                gradient: 'from-orange-500 to-red-500'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-2xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6 text-white shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Cohorts - Bold Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our AI Learning Cohorts
            </h2>
            <p className="text-xl text-gray-600">
              Choose the program that fits your learning goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Foundation Cohort */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl transform group-hover:scale-105 transition-transform duration-300 opacity-90"></div>
              <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-4 border-white">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Foundation</div>
                    <h3 className="text-3xl font-bold text-gray-900">AI Foundations Cohort</h3>
                  </div>
                  <div className="text-5xl">🧠</div>
                </div>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Build strong AI fundamentals and practical awareness through structured learning.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Core AI concepts and terminology',
                    'How modern AI systems function',
                    'Introduction to widely used AI tools',
                    'Real-world AI use cases and limitations'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Duration</div>
                    <div className="text-2xl font-bold text-gray-900">3 Months</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-1">Investment</div>
                    <div className="text-3xl font-bold text-blue-600">₹5,000</div>
                  </div>
                </div>

                <Link to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group shadow-lg"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Applied Cohort */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl transform group-hover:scale-105 transition-transform duration-300 opacity-90"></div>
              <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-4 border-white">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-2">Advanced</div>
                    <h3 className="text-3xl font-bold text-gray-900">Applied AI Cohort</h3>
                  </div>
                  <div className="text-5xl">⚙️</div>
                </div>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Deepen your AI understanding through workflows, tools, and real-world scenarios.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Applied AI thinking and problem framing',
                    'Tool-based AI workflows',
                    'Case-driven learning',
                    'Responsible and practical AI usage'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Duration</div>
                    <div className="text-2xl font-bold text-gray-900">5 Months</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-1">Investment</div>
                    <div className="text-3xl font-bold text-purple-600">₹10,000</div>
                  </div>
                </div>

                <Link to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center group shadow-lg"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Cohort Limit Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 border-2 border-blue-200 rounded-full px-6 py-3">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-blue-900 font-semibold">Limited to 100 learners per cohort</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How to Join a Cohort
            </h2>
            <p className="text-xl text-gray-600">
              Simple 4-step process to start your AI learning journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Request Details', description: 'Submit your interest through our contact form' },
              { step: '02', title: 'Get Information', description: 'Receive cohort schedule and program details' },
              { step: '03', title: 'Confirm Seat', description: 'Confirm your interest and seat availability' },
              { step: '04', title: 'Start Learning', description: 'Join the cohort and begin your journey' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl text-white font-bold text-2xl mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 -z-10"></div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-600 mb-6">
              Note: Cohort seats are allocated on a first-come basis
            </p>
          </motion.div>
        </div>
      </section>

      {/* Learning Commitment */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6">
              <Star className="h-10 w-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Learning Commitment
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our cohorts are designed for learners who are willing to invest time and effort into understanding AI concepts. Active participation and consistent engagement are encouraged for the best learning experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Join a cohort and build genuine AI understanding through practical, structured learning
            </p>
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-10 py-5 rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 text-xl shadow-2xl inline-flex items-center space-x-3"
              >
                <span>Request Program Details</span>
                <ArrowRight className="h-6 w-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

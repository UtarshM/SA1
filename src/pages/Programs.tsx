import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, CheckCircle, ArrowRight, Workflow, Zap, Bot, Network, Sparkles } from 'lucide-react';
import CohortTimeline from '../components/CohortTimeline';

const Programs = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>AI Learning Cohorts | Scalezix Academy</title>
        <meta 
          name="description" 
          content="Explore structured AI cohorts designed for practical learning, guided progression, and applied understanding. No hype. Limited seats." 
        />
        <link rel="canonical" href="https://scalezixacademy.com/programs" />
      </Helmet>

      {/* Hero Section - Modern & Bold */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-white text-sm font-medium">AI Workflow & Automation Programs</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              AI Learning Cohorts
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Master AI workflows and automation through structured, cohort-based learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Workflow Icons Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Workflow className="h-10 w-10" />, label: 'AI Workflows', color: 'from-blue-500 to-cyan-500' },
              { icon: <Bot className="h-10 w-10" />, label: 'Automation', color: 'from-purple-500 to-pink-500' },
              { icon: <Network className="h-10 w-10" />, label: 'AI Systems', color: 'from-orange-500 to-red-500' },
              { icon: <Zap className="h-10 w-10" />, label: 'Practical Tools', color: 'from-green-500 to-emerald-500' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-3 text-white shadow-lg`}>
                  {item.icon}
                </div>
                <div className="text-sm font-semibold text-gray-700">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cohorts Section - Premium Cards */}
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
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600">
              Two comprehensive programs designed for different skill levels
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

      {/* Cohort Timeline */}
      <CohortTimeline />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'Is this a certification course?',
                answer: 'We provide a participation-based completion certificate. It is not government-recognized or affiliated with external bodies.'
              },
              {
                question: 'Will this help me get a job?',
                answer: 'The program focuses on learning and understanding AI. We do not provide job guarantees or placement assistance.'
              },
              {
                question: 'Are sessions live or recorded?',
                answer: 'Learning formats may include guided sessions and structured materials. Exact details are shared with cohort information.'
              },
              {
                question: 'Can beginners join?',
                answer: 'Yes. The AI Foundations Cohort is designed for beginners.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Start Learning?
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

export default Programs;

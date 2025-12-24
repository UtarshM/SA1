import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Heart, Users, BookOpen, Award, CheckCircle, Lightbulb, TrendingUp, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>About Scalezix Academy | AI Learning Initiative</title>
        <meta 
          name="description" 
          content="Scalezix Academy is an AI learning initiative by Scalezix Ventures LLP, focused on honest, structured, cohort-based education." 
        />
        <link rel="canonical" href="https://scalezixacademy.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Scalezix Academy
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Building the future of AI education through honest, practical, and structured learning
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Scalezix Academy is an education initiative by <span className="font-semibold text-blue-600">Scalezix Ventures LLP</span>, created to provide honest, structured learning in artificial intelligence.
                </p>
                <p className="text-lg">
                  We believe that AI education should be accessible, practical, and grounded in reality. Our mission is to help learners build genuine understanding and confidence in AI concepts without the noise of exaggerated claims or unrealistic promises.
                </p>
                <p className="text-lg">
                  Founded with a commitment to educational integrity, we focus on what matters most: helping learners develop clear thinking, practical skills, and a solid foundation in artificial intelligence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: <Users className="h-8 w-8" />, label: 'Cohort-Based', value: 'Learning Model', color: 'from-blue-500 to-blue-600' },
                { icon: <BookOpen className="h-8 w-8" />, label: 'Practical', value: 'AI Focus', color: 'from-purple-500 to-purple-600' },
                { icon: <Shield className="h-8 w-8" />, label: 'Honest', value: 'Approach', color: 'from-green-500 to-green-600' },
                { icon: <Target className="h-8 w-8" />, label: 'Structured', value: 'Programs', color: 'from-orange-500 to-orange-600' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`bg-gradient-to-br ${item.color} p-6 rounded-xl text-white text-center shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex justify-center mb-3">
                    {item.icon}
                  </div>
                  <div className="text-sm opacity-90 mb-1">{item.label}</div>
                  <div className="font-bold text-lg">{item.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6"
              >
                <Target className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To provide accessible, honest, and practical AI education that empowers learners to understand and apply artificial intelligence concepts with confidence and clarity — without hype, shortcuts, or false promises.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6"
              >
                <Lightbulb className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To become a trusted name in AI education, known for integrity, practical learning outcomes, and a commitment to helping learners build genuine skills that matter in the real world of artificial intelligence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Scalezix Academy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: 'Honesty First',
                description: 'We believe in transparent communication. No job guarantees, no placement promises, no exaggerated claims — just honest education focused on learning.',
                gradient: 'from-blue-50 to-blue-100',
                iconBg: 'bg-blue-600'
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: 'Practical Learning',
                description: 'Every concept is taught with real-world context. We focus on tools, workflows, and examples that help you understand how AI is actually used.',
                gradient: 'from-purple-50 to-purple-100',
                iconBg: 'bg-purple-600'
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Cohort-Based',
                description: 'Small, focused cohorts of 100 learners ensure structured progression, meaningful interaction, and a supportive learning environment.',
                gradient: 'from-green-50 to-green-100',
                iconBg: 'bg-green-600'
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: 'Structured Approach',
                description: 'Clear learning paths, progressive modules, and guided sessions help you build knowledge systematically without feeling overwhelmed.',
                gradient: 'from-orange-50 to-orange-100',
                iconBg: 'bg-orange-600'
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: 'Learner-Centric',
                description: 'Your learning journey matters. We design programs that respect your time, effort, and commitment to understanding AI concepts.',
                gradient: 'from-pink-50 to-pink-100',
                iconBg: 'bg-pink-600'
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: 'Continuous Growth',
                description: 'We stay updated with AI developments and continuously refine our programs to ensure relevant, current, and valuable learning experiences.',
                gradient: 'from-indigo-50 to-indigo-100',
                iconBg: 'bg-indigo-600'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`bg-gradient-to-br ${value.gradient} p-8 rounded-xl hover:shadow-lg transition-all duration-300`}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className={`w-14 h-14 ${value.iconBg} rounded-lg flex items-center justify-center mb-4 text-white`}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We take a different approach to AI education — one that prioritizes truth over marketing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'No False Promises',
                description: 'We don\'t promise jobs, placements, or career transformations. We focus on what we can deliver: quality learning and practical understanding.',
                icon: <CheckCircle className="h-6 w-6" />
              },
              {
                title: 'Transparent Scope',
                description: 'Our certificates are participation-based, not government-recognized. We\'re clear about what you\'ll receive and what you won\'t.',
                icon: <CheckCircle className="h-6 w-6" />
              },
              {
                title: 'Realistic Expectations',
                description: 'We set honest expectations about learning timelines, effort required, and outcomes. No shortcuts, no magic formulas.',
                icon: <CheckCircle className="h-6 w-6" />
              },
              {
                title: 'Quality Over Quantity',
                description: 'Limited cohort sizes (100 learners max) ensure focused attention, structured progression, and meaningful learning experiences.',
                icon: <CheckCircle className="h-6 w-6" />
              },
              {
                title: 'Practical Focus',
                description: 'Every lesson connects to real-world applications. We teach AI as it\'s actually used, not just theoretical concepts.',
                icon: <CheckCircle className="h-6 w-6" />
              },
              {
                title: 'Continuous Support',
                description: 'Guided sessions, structured materials, and a supportive learning environment throughout your cohort journey.',
                icon: <CheckCircle className="h-6 w-6" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="opacity-90 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Award className="h-10 w-10 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to You</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                When you join Scalezix Academy, you're choosing an education partner that values your time, effort, and trust. We commit to providing:
              </p>
              <ul className="space-y-3 text-left max-w-2xl mx-auto">
                {[
                  'Honest, transparent communication about program scope and outcomes',
                  'Structured learning paths designed for practical understanding',
                  'Quality content focused on real-world AI applications',
                  'Supportive learning environment with limited cohort sizes',
                  'Continuous program refinement based on learner feedback',
                  'Respect for your learning journey and individual goals'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your AI Learning Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore our cohort-based programs and discover how we can help you build genuine AI understanding
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/programs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
                >
                  View AI Cohorts
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 text-lg shadow-md hover:shadow-lg"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

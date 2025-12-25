import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      // EmailJS configuration
      const serviceId = 'service_54fxgq8';
      const templateId = 'template_b0ztpvd';
      const publicKey = 'PahX09a_71AQG3kxg';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'academy@scalezix.com'
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24-48 hours.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);

    } catch (error) {
      console.error('Email send error:', error);
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or email us directly at academy@scalezix.com'
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Us",
      details: "academy@scalezix.com",
      description: "Send us an email anytime",
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Us",
      details: "+91 82000 10241",
      description: "Mon-Sat from 10am to 6pm IST",
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Visit Us",
      details: "iHub, Ahmedabad",
      description: "Come say hello at our campus",
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Office Hours",
      details: "Mon-Sat: 10am-6pm IST",
      description: "Sunday closed",
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="pt-16">
      <Helmet>
        <title>Contact Scalezix Academy | AI Learning Programs</title>
        <meta 
          name="description" 
          content="Request details about upcoming AI learning cohorts and program structure at Scalezix Academy." 
        />
        <link rel="canonical" href="https://scalezixacademy.com/contact" />
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
              <MessageCircle className="h-4 w-4 text-yellow-400" />
              <span className="text-white text-sm font-medium">Get in Touch</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Contact Scalezix Academy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Have questions about our AI cohorts? We're here to help
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-blue-600 font-semibold mb-1">{info.details}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Send us a Message</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24-48 hours
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-200"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              >
                <option value="">Select a subject</option>
                <option value="cohort-inquiry">Cohort Inquiry</option>
                <option value="program-details">Program Details</option>
                <option value="schedule">Schedule Information</option>
                <option value="general">General Question</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us how we can help you..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status.type === 'loading'}
              whileHover={{ scale: status.type === 'loading' ? 1 : 1.02 }}
              whileTap={{ scale: status.type === 'loading' ? 1 : 0.98 }}
              className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center shadow-lg ${
                status.type === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {status.type === 'loading' ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Submit Enquiry
                </>
              )}
            </motion.button>

            {/* Status Messages */}
            {status.type === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-start space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-green-800 text-sm">{status.message}</p>
              </motion.div>
            )}

            {status.type === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start space-x-3"
              >
                <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-red-800 text-sm">{status.message}</p>
              </motion.div>
            )}

            <p className="mt-6 text-center text-sm text-gray-600 bg-blue-50 border border-blue-200 rounded-lg p-3">
              <span className="font-semibold">Response Time:</span> We typically respond within 24–48 hours with relevant cohort details.
            </p>
          </motion.form>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visit Our Campus
            </h2>
            <p className="text-xl text-gray-600">
              Located at iHub, Ahmedabad - India's Premier Innovation Hub
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Scalezix Academy Campus</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Address</div>
                      <span className="text-gray-700">iHub Ahmedabad, Gujarat</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Office Hours</div>
                      <span className="text-gray-700">Monday - Saturday: 10:00 AM - 6:00 PM IST</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Phone</div>
                      <span className="text-gray-700">+91 82000 10241</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Located at India's premier innovation hub, our campus features state-of-the-art AI labs, 
                  collaborative learning spaces, and all the resources you need for hands-on AI education.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
                >
                  Schedule a Visit
                </motion.button>
              </div>
              
              {/* Map Placeholder with Icon */}
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-96 flex flex-col items-center justify-center border-4 border-white shadow-lg">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-xl">
                  <MapPin className="h-12 w-12 text-white" />
                </div>
                <p className="text-gray-700 font-bold text-xl">iHub Ahmedabad</p>
                <p className="text-gray-600">Gandhinagar, Gujarat</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

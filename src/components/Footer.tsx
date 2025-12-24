import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/programs' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const programLinks = [
    { name: 'AI Foundations Cohort', href: '/programs' },
    { name: 'Applied AI Cohort', href: '/programs' },
    { name: 'How Cohorts Work', href: '/programs' },
  ];

  const legal = [
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Disclaimer', href: '/disclaimer' }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '/contact', name: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://x.com/scalezixacademy', name: 'X' },
    { icon: <Linkedin className="h-5 w-5" />, href: '/contact', name: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, href: '/contact', name: 'Instagram' },
    { icon: <Youtube className="h-5 w-5" />, href: '/contact', name: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/sa2 logo.webp" 
                alt="Scalezix Academy" 
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Scalezix Academy is an education initiative by Scalezix Ventures LLP, providing honest, structured learning in artificial intelligence through cohort-based programs.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">iHub Ahmedabad, Gujarat</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+91 82000 10241</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">academy@scalezix.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated with AI Trends</h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest AI course updates, industry insights, and career tips.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Social Links */}
            <div className="flex space-x-6 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* Copyright */}
            <div className="text-center">
              <div className="text-gray-400 text-sm mb-1">
                © 2025 Scalezix Academy. An education initiative by Scalezix Ventures LLP. All rights reserved.
              </div>
              <div className="text-gray-500 text-xs">
                Designed for focused, cohort-based learning in artificial intelligence.
              </div>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              {legal.map((item, index) => (
                <span key={item.name} className="flex items-center">
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                  {index < legal.length - 1 && (
                    <span className="text-gray-600 mx-2">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaClock, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Departments', href: '/departments' },
    { name: 'Services', href: '/departments#services' },
    { name: 'Medical Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Insurance', href: '/insurance' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Hospital Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">MediCare Hospital</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              Delivering exceptional healthcare with compassion, innovation, and excellence since 1995.
            </p>
            <div className="space-y-4">
              <p className="flex items-center text-gray-300">
                <FaPhone className="h-5 w-5 text-purple-700 mr-3" />
                Emergency: 911
              </p>
              <p className="flex items-center text-gray-300">
                <FaPhone className="h-5 w-5 text-purple-700 mr-3" />
                Reception: +1 234 567 890
              </p>
              <p className="flex items-center text-gray-300">
                <FaEnvelope className="h-5 w-5 text-purple-700 mr-3" />
                info@medicare.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 text-sm md:text-base hover:text-purple-700 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Working Hours</h3>
            <div className="space-y-3 text-gray-400 text-sm md:text-base">
              <p className="flex items-center">
                <FaClock className="h-5 w-5 text-purple-700 mr-3" />
                Emergency: 24/7
              </p>
              <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
              <p>Sat: 8:00 AM - 5:00 PM</p>
              <p>Sun: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
          <p className="flex items-center">
            Made with <FaHeart className="h-4 w-4 text-purple-700 mx-1" /> by MediCare Hospital
          </p>
          <p>© {new Date().getFullYear()} MediCare Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
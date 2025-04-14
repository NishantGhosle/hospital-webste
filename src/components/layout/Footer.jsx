import React from 'react';
import { Link } from 'react-router-dom';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hospital Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">MediCare Hospital</h3>
            <p className="text-gray-400 mb-4">
              Providing quality healthcare services with compassion and excellence.
            </p>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="mr-2">📞</span> Emergency: 911
              </p>
              <p className="flex items-center">
                <span className="mr-2">📱</span> Reception: +1 234 567 890
              </p>
              <p className="flex items-center">
                <span className="mr-2">📧</span> info@medicare.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Working Hours</h3>
            <div className="space-y-2 text-gray-400">
              <p>Emergency: 24/7</p>
              <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
              <p>Saturday: 8:00 AM - 5:00 PM</p>
              <p>Sunday: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MediCare Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

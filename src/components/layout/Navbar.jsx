import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const departments = [
    { name: 'Cardiology', href: '/departments/cardiology' },
    { name: 'Orthopaedics', href: '/departments/orthopaedics' },
    { name: 'Neurology', href: '/departments/neurology' },
    { name: 'Paediatrics', href: '/departments/paediatrics' },
    { name: 'Gynaecology & Obstetrics', href: '/departments/gynaecology' },
    { name: 'General Medicine', href: '/departments/general-medicine' },
    { name: 'Emergency Care', href: '/departments/emergency' },
  ];

  const facilities = [
    { name: 'State-of-the-art ICUs & OT', href: '/facilities/icu-ot' },
    { name: '24/7 Ambulance & Pharmacy', href: '/facilities/ambulance-pharmacy' },
    { name: 'Diagnostics: X-ray, Ultrasound', href: '/facilities/diagnostics' },
    { name: 'Private & General Wards', href: '/facilities/wards' },
    { name: 'Insurance Support', href: '/facilities/insurance' },
    { name: 'Patient-Friendly Infrastructure', href: '/facilities/infrastructure' },
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Departments & Facilities',
      href: '#',
      dropdowns: [
        { title: 'Departments', items: departments },
        { title: 'Our Facilities', items: facilities },
      ],
    },
    { name: 'Health Packages', href: '/packages' },
    { name: 'Insurance', href: '/insurance' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-purple-700 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-6">
              <a
                href="tel:1234567890"
                className="flex items-center hover:text-purple-200 transition-all duration-300"
              >
                <FaPhone className="h-5 w-5 text-white mr-3" />
                <div className="flex flex-col">
                  <span className="text-xs">Emergency Helpline</span>
                  <span className="font-semibold">123-456-7890</span>
                </div>
              </a>
              <Link
                to="/contact#appointment"
                className="bg-white text-purple-700 px-5 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all duration-300 hover:shadow-lg flex items-center"
              >
                Book Appointment
              </Link>
            </div>
            <div className="flex items-center space-x-5">
              <a href="#" className="hover:text-purple-200 transition-colors duration-300">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-purple-200 transition-colors duration-300">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-purple-200 transition-colors duration-300">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-purple-200 transition-colors duration-300">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="group flex items-center">
                <img
                  className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                  src="/logo.svg"
                  alt="MediCare Logo"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.dropdowns && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdowns ? (
                    <>
                      <button className="flex items-center px-3 py-2 text-gray-700 hover:text-purple-700 font-medium transition-colors duration-300">
                        {item.name}
                        <ChevronDownIcon className="h-4 w-4 ml-1 group-hover:text-purple-700 transition-colors" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl border border-gray-100 w-[600px] p-6 transition-all duration-200">
                          <div className="grid grid-cols-2 gap-8">
                            {item.dropdowns.map((dropdown, idx) => (
                              <div key={idx}>
                                <h3 className="text-sm font-semibold text-purple-700 mb-3">
                                  {dropdown.title}
                                </h3>
                                <ul className="space-y-2">
                                  {dropdown.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        to={subItem.href}
                                        className="text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 px-3 py-2 rounded-lg transition-colors flex items-center"
                                      >
                                        <span className="mr-2 text-purple-700 text-xs">•</span>
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="px-3 py-2 text-gray-700 hover:text-purple-700 font-medium transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact#emergency"
                className="ml-4 bg-red-500 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-red-600 transition-all duration-300 hover:shadow-lg"
              >
                Emergency: 24/7
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Bars3Icon className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className={`fixed inset-y-0 right-0 w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } rounded-l-2xl overflow-y-auto`}
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-purple-700 text-white">
              <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                <img src="/logo.svg" alt="MediCare Logo" className="h-8 w-8" />
                <span className="text-xl font-bold">MediCare</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-purple-800 transition-all duration-300"
              >
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="py-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdowns ? (
                    <>
                      <button className="flex items-center justify-between w-full px-4 py-3 text-gray-700 font-medium hover:bg-purple-50">
                        {item.name}
                        <ChevronDownIcon className="h-4 w-4 text-purple-700" />
                      </button>
                      {item.dropdowns.map((dropdown, idx) => (
                        <div key={idx} className="bg-gray-50 py-2">
                          <h3 className="text-sm font-semibold text-purple-700 px-6 py-2">
                            {dropdown.title}
                          </h3>
                          {dropdown.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-6 py-2 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-4 py-3 text-gray-700 font-medium hover:text-purple-700 hover:bg-purple-50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-4 py-4 mt-4 border-t border-gray-100">
                <Link
                  to="/contact#emergency"
                  className="block text-center bg-red-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300"
                >
                  Emergency: 24/7
                </Link>
                <div className="mt-4 flex justify-center space-x-6">
                  <a href="#" className="text-gray-600 hover:text-purple-700">
                    <FaFacebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-purple-700">
                    <FaInstagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-purple-700">
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-purple-700">
                    <FaYoutube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
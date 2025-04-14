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
    { name: 'General Medicine & Diagnostics', href: '/departments/general-medicine' },
    { name: 'Emergency & Trauma Care', href: '/departments/emergency' },
  ];

  const facilities = [
    { name: 'State-of-the-art ICUs, NICUs, and Operation Theatres', href: '/facilities/icu-ot' },
    { name: '24x7 Ambulance and Pharmacy', href: '/facilities/ambulance-pharmacy' },
    { name: 'In-house Diagnostics: Pathology, X-ray, Ultrasound', href: '/facilities/diagnostics' },
    { name: 'Comfortable private and general wards', href: '/facilities/wards' },
    { name: 'Cashless TPA & Insurance Support', href: '/facilities/insurance' },
    { name: 'Clean, hygienic, and patient-friendly infrastructure', href: '/facilities/infrastructure' },
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Departments & Facilities',
      href: '#',
      dropdowns: [
        {
          title: 'Departments',
          items: departments
        },
        {
          title: 'Our Facilities',
          items: facilities
        }
      ]
    },
    { name: 'Health Packages', href: '/packages' },
    { name: 'Insurance', href: '/insurance' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-500 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a href="tel:1234567890" className="flex items-center hover:text-white-200 transition-all duration-300 transform hover:scale-105">
                <div className="bg-white-700 p-2 rounded-full mr-3">
                  <FaPhone className="text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white">Emergency Helpline</span>
                  <span className="font-semibold text-white">123-456-7890</span>
                </div>
              </a>
              <button className="ml-6 bg-purple-600 hover:bg-purple-700 px-5 py-1.5 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2 text-white">
                <span>Book Appointment</span>
                <span className="text-xs">(24/7)</span>
              </button>
            </div>
            <div className="flex items-center space-x-5">
              <a href="#" className="text-white hover:text-blue-800 transition-all duration-100 transform hover:scale-500 hover:rotate-12"><FaFacebook className="text-xl" /></a>
              <a href="#" className="text-white hover:text-pink-600 transition-all duration-100 transform hover:scale-500 hover:rotate-12"><FaInstagram className="text-xl" /></a>
              <a href="#" className="text-white hover:text-blue-600 transition-all duration-100 transform hover:scale-500 hover:rotate-12"><FaTwitter className="text-xl" /></a>
              <a href="#" className="text-white hover:text-red-600 transition-all duration-100 transform hover:scale-500 hover:rotate-12"><FaYoutube className="text-xl" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex-shrink-0 flex items-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full transform transition-all duration-300 group-hover:scale-110 opacity-10"></div>
                  <img
                    className="h-12 w-auto relative transform transition-all duration-300 group-hover:scale-105"
                    src="/logo.svg"
                    alt="Hospital Logo"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navigation.map((item) => (
                <div key={item.name} className="relative group" onMouseEnter={() => item.dropdowns && setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
                  {item.dropdowns ? (
                    <>
                      <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-purple-600 group">
                        <span>{item.name}</span>
                        <ChevronDownIcon className="h-4 w-4 group-hover:text-purple-600 transition-colors" />
                      </button>

                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-xl border-t border-gray-100 transform opacity-100 scale-100 transition-all duration-200 px-6 py-4 w-[800px]">
                          <div className="flex gap-12">
                            {item.dropdowns.map((dropdown, idx) => (
                              <div key={idx} className="min-w-[200px]">
                                <h3 className="text-sm font-semibold text-purple-600 mb-3">{dropdown.title}</h3>
                                <ul className="space-y-2">
                                  {dropdown.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        to={subItem.href}
                                        className="flex items-start text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-3 py-1.5 rounded-lg transition-colors"
                                      >
                                        <span className="mr-2 text-purple-600 text-xs">▣</span>
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
                      className="px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <button className="ml-6 bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2.5 rounded-full hover:from-red-700 hover:to-red-600 transition-all duration-300 text-sm font-medium transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 animate-pulse">
                <span className="font-semibold">Emergency: 24/7</span>
              </button>
            </div>

            {/* Mobile menu button */}
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
        <div className={`md:hidden fixed inset-0 backdrop-blur-sm bg-black/30 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className={`fixed inset-y-0 right-0 w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} rounded-l-2xl overflow-hidden`}>
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-purple-600">
              <div className="flex items-center space-x-3">
                <img src="/logo.svg" alt="Hospital Logo" className="h-8 w-8" />
                <span className="text-xl font-bold text-white">MediCare</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 group">
                <XMarkIcon className="h-6 w-6 text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>
            <div className="py-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdowns ? (
                    <>
                      <div className="flex items-center justify-between text-black px-4 py-3 font-medium">
                        <span>{item.name}</span>
                        <ChevronDownIcon className="h-4 w-4" />
                      </div>
                      {item.dropdowns.map((dropdown, idx) => (
                        <div key={idx} className="bg-gray-50 py-2">
                          <h3 className="text-sm font-semibold text-purple-600 px-6 py-2">{dropdown.title}</h3>
                          {dropdown.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-6 py-2 text-sm text-black hover:text-purple-700 hover:bg-purple-50"
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
                      className="flex items-center space-x-2 text-black hover:text-purple-700 hover:bg-purple-50 px-4 py-3 transition-colors border-l-4 border-transparent hover:border-purple-700"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-4 py-4 mt-4 border-t border-gray-100">
                <button className="w-full bg-purple-600 text-white px-4 py-3 rounded-xl hover:bg-purple-700 transition-all duration-300 font-medium shadow-lg flex items-center justify-center space-x-2 animate-pulse">
                  <span>Emergency: 24/7</span>
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </button>
                <div className="mt-4 flex justify-center space-x-6">
                  <a href="#" className="text-white hover:text-blue-500 transition-colors"><FaFacebook className="text-xl" /></a>
                  <a href="#" className="text-white hover:text-pink-500 transition-colors"><FaInstagram className="text-xl" /></a>
                  <a href="#" className="text-white hover:text-blue-400 transition-colors"><FaTwitter className="text-xl" /></a>
                  <a href="#" className="text-white hover:text-red-500 transition-colors"><FaYoutube className="text-xl" /></a>
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

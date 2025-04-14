import React from 'react';
import HeroSection from '../components/common/HeroSection';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaUserMd } from 'react-icons/fa';

const packages = [
  {
    id: 'basic',
    name: 'Basic Health Check',
    price: 199,
    description: 'Essential health screening for overall wellness',
    tests: [
      'Complete Blood Count',
      'Blood Sugar Test',
      'Lipid Profile',
      'Liver Function Test',
      'Kidney Function Test',
      'Chest X-Ray',
      'ECG',
      'Doctor Consultation',
    ],
    recommended: 'Adults (18-40 years)',
  },
  {
    id: 'comprehensive',
    name: 'Comprehensive Health Check',
    price: 399,
    description: 'Detailed health assessment with advanced screenings',
    tests: [
      'All Basic Health Check Tests',
      'Thyroid Profile',
      'Vitamin D & B12',
      'PSA (Male)/Mammography (Female)',
      'Bone Density Scan',
      'Stress Test',
      'Ultrasound Abdomen',
      'Diet Consultation',
    ],
    recommended: 'Adults (40+ years)',
    featured: true,
  },
  {
    id: 'executive',
    name: 'Executive Health Check',
    price: 699,
    description: 'Comprehensive evaluation with specialized tests',
    tests: [
      'All Comprehensive Health Check Tests',
      'Full Body MRI',
      'CT Scan',
      'Cancer Markers',
      'Genetic Screening',
      'Cardiac Risk Assessment',
      'Mental Health Evaluation',
      'Personalized Health Plan',
    ],
    recommended: 'Corporate Executives & High-Risk Individuals',
  },
];

const HealthPackages = () => {
  return (
    <div className="bg-gray-50">
      <HeroSection
        title="Your Health, Our Priority"
        subtitle="Explore our tailored health packages for comprehensive care and peace of mind."
        backgroundImage="/images/hero/packages-hero.jpg"
        overlayColor="from-purple-900/70 to-indigo-900/70"
        buttonText="Explore Packages"
        buttonLink="#packages"
        height="h-[450px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="packages">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Health Check Packages
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Preventive care designed to keep you healthy, from routine check-ups to executive screenings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                pkg.featured ? 'ring-4 ring-purple-200' : ''
              }`}
            >
              {pkg.featured && (
                <div className="absolute top-0 left-0 w-full">
                 
                </div>
              )}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl md:text-2xl font-bold text-gray-900">{pkg.name}</h2>
                    <p className="text-gray-600 text-sm md:text-base">{pkg.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">From</div>
                    <div className="text-2xl md:text-3xl font-extrabold text-purple-700">
                      ${pkg.price}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <FaCheckCircle className="w-5 h-5 text-purple-700 mr-2" />
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {pkg.tests.map((test) => (
                      <li
                        key={test}
                        className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-purple-50 transition-colors"
                      >
                        <FaCheckCircle className="h-5 w-5 text-purple-700 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm md:text-base">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <div className="flex items-center bg-purple-50 p-4 rounded-lg mb-6">
                    <FaUserMd className="w-5 h-5 text-purple-700 mr-3" />
                    <p className="text-sm text-purple-900 font-medium">
                      Recommended for: {pkg.recommended}
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center py-3 px-6 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition-all duration-300 hover:shadow-lg focus:ring-4 focus:ring-purple-300"
                  >
                    Book Now
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Plan Your Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Preparation Guidelines
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-purple-700 mr-2 mt-1" />
                  12-hour fasting required for blood tests
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-purple-700 mr-2 mt-1" />
                  Bring previous medical records if available
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-purple-700 mr-2 mt-1" />
                  Wear comfortable clothing
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-purple-700 mr-2 mt-1" />
                  Allow 2-3 hours for the check-up
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Additional Benefits
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-purple-700 mr-2 mt-1" />
                  Free follow-up consultation
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-purple-700 mr-2 mt-1" />
                  Digital health records access
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-purple-700 mr-2 mt-1" />
                  Detailed health report
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="h-5 w-5 text-purple-700 mr-2 mt-1" />
                  Personalized lifestyle recommendations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthPackages;
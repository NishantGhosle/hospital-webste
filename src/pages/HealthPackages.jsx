import React from 'react';
import HeroSection from '../components/common/HeroSection';
import { Link } from 'react-router-dom';

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
    <div>
      <HeroSection
        title="Comprehensive Health Packages"
        subtitle="Preventive care packages designed for your well-being, from basic health screenings to executive check-ups."
        backgroundImage="/images/hero/packages-hero.jpg"
        overlayColor="from-purple-900/80"
        buttonText="View Packages"
        buttonLink="#packages"
        height="h-[400px]"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="packages">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Health Check Packages
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Preventive care packages designed for your well-being
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl ${pkg.featured ? 'ring-2 ring-[#B4336D]' : ''}`}
            >
              {pkg.featured && (
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-[#B4336D] to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h2>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">Starting from</div>
                    <div className="text-4xl font-bold text-[#B4336D]">${pkg.price}</div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#B4336D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Included Tests
                  </h3>
                  <ul className="space-y-3">
                    {pkg.tests.map((test) => (
                      <li key={test} className="flex items-start bg-gray-50 p-3 rounded-lg hover:bg-pink-50 transition-colors">
                        <svg
                          className="h-5 w-5 text-[#B4336D] mr-3 mt-0.5 flex-shrink-0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <div className="flex items-center mb-6 bg-blue-50 p-4 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <p className="text-sm text-blue-700 font-medium">
                      Recommended for: {pkg.recommended}
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className={`w-full flex items-center justify-center py-4 px-6 rounded-xl text-white font-medium
                      ${pkg.featured
                        ? 'bg-gradient-to-r from-[#B4336D] to-pink-500 hover:from-[#B4336D]/90 hover:to-pink-500/90'
                        : 'bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700'
                      } transform transition-all duration-300 hover:scale-[0.98] hover:shadow-lg`}
                  >
                    <span>Book Now</span>
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Important Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Preparation Guidelines
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 12-hour fasting required for blood tests</li>
                  <li>• Bring previous medical records if available</li>
                  <li>• Wear comfortable clothing</li>
                  <li>• Allow 2-3 hours for the check-up</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Additional Benefits
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free follow-up consultation</li>
                  <li>• Digital health records</li>
                  <li>• Detailed health report</li>
                  <li>• Lifestyle recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthPackages;

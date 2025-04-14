import React from 'react';
import HeroSection from '../common/HeroSection';

const FacilityLayout = ({ title, description, image, content, features }) => {
  return (
    <div className="bg-gray-50">
      <HeroSection
        title={title}
        subtitle={description}
        backgroundImage={image}
        overlayColor="from-purple-900/70 to-indigo-900/70"
        height="h-[450px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed animate-slide-up">
              {content}
            </div>

            {features && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group animate-slide-up animation-delay-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            )}

            <a
              href="/contact#appointment"
              className="inline-flex items-center px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition-all duration-300 hover:shadow-lg focus:ring-4 focus:ring-purple-300 animate-slide-up animation-delay-400"
            >
              Explore Facility
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          <div className="space-y-6">
            <div className="sticky top-6">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-xl group">
                <img
                  src={image}
                  alt={title}
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md mt-6 animate-slide-up animation-delay-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Highlights</h3>
                <ul className="space-y-3">
                  {features?.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg
                        className="h-5 w-5 text-purple-700 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityLayout;
import React from 'react';
import HeroSection from '../common/HeroSection';

const DepartmentLayout = ({ title, description, image, content }) => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight animate-slide-up">
              {title}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed animate-slide-up animation-delay-200">
              {content}
            </div>
            <a
              href="/contact#appointment"
              className="inline-flex items-center px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition-all duration-300 hover:shadow-lg focus:ring-4 focus:ring-purple-300 animate-slide-up animation-delay-400"
            >
              Book Appointment
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

          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl group">
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-700/10 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-50"></div>
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentLayout;

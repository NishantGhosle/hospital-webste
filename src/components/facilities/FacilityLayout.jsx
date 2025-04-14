import React from 'react';
import HeroSection from '../common/HeroSection';

const FacilityLayout = ({ title, description, image, content, features }) => {
  return (
    <div>
      <HeroSection
        title={title}
        subtitle={description}
        backgroundImage={image}
        overlayColor="from-blue-900/80"
        height="h-[400px]"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-lg max-w-none text-gray-600">
              {content}
            </div>
            
            {features && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-lg font-semibold text-[#B4336D] mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            <div className="sticky top-6">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl mb-6">
                <img 
                  src={image} 
                  alt={title}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="bg-gradient-to-br from-[#B4336D] to-pink-500 rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
                <ul className="space-y-3">
                  {features?.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
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

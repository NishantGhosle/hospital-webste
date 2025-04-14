import React from 'react';
import HeroSection from '../common/HeroSection';

const DepartmentLayout = ({ title, description, image, content }) => {
  return (
    <div>
      <HeroSection
        title={title}
        subtitle={description}
        backgroundImage={image}
        overlayColor="from-[#B4336D]/80"
        height="h-[400px]"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#B4336D]">{title}</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              {content}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={image} 
                alt={title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#B4336D]/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentLayout;

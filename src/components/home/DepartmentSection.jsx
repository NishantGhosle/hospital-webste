import React, { useState, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const departments = [
  {
    name: 'Emergency',
    image: '/images/departments/orthopaedics.jpg',
  },
  {
    name: 'Cardiology',
    image: '/images/departments/cardiology.jpg',
  },
  {
    name: 'General Medicine',
    image: '/images/departments/ent.jpg',
  },
  {
    name: 'Gynaecology',
    image: '/images/departments/gastroenterology.jpg',
  },
  {
    name: 'Orthopaedics',
    image: '/images/departments/orthopaedics.jpg',
  },
  {
    name: 'Paediatrics',
    image: '/images/departments/paediatrics.jpg',
  },
];

const DepartmentSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const scrollToCard = (index) => {
    const card = carouselRef.current.children[index];
    if (card) {
      card.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
    setActiveIndex(index);
  };

  const nextCard = () => {
    const newIndex = (activeIndex + 1) % departments.length;
    scrollToCard(newIndex);
  };

  const prevCard = () => {
    const newIndex = (activeIndex - 1 + departments.length) % departments.length;
    scrollToCard(newIndex);
  };

  // Removed auto-scroll effect

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Departments</h1>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            From routine checkups to advanced treatments, our specialized departments are here to meet your health needs with expertise and compassion.
          </p>
         
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevCard}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronLeftIcon className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextCard}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronRightIcon className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-hidden snap-x snap-mandatory gap-4 pb-4"
          >
            {departments.map((department, index) => (
              <div
                key={department.name}
                className={`flex-none w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-12px)] snap-center transform transition-all duration-300 ${index === activeIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-70'}`}
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src={department.image}
                    alt={department.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-100 transition-colors">
                        {department.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentSection;

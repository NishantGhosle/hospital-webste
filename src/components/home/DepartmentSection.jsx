import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const departments = [
  { name: 'Emergency', image: '/images/departments/emergency.jpg' },
  { name: 'Cardiology', image: '/images/departments/cardiology.jpg' },
  { name: 'General Medicine', image: '/images/departments/general-medicine.jpg' },
  { name: 'Gynaecology', image: '/images/departments/gynaecology.jpg' },
  { name: 'Orthopaedics', image: '/images/departments/orthopaedics.jpg' },
  { name: 'Paediatrics', image: '/images/departments/paediatrics.jpg' },
  { name: 'Neurology', image: '/images/departments/neurology.jpg' },
  { name: 'Dermatology', image: '/images/departments/dermatology.jpg' },
  { name: 'Oncology', image: '/images/departments/oncology.jpg' },
  { name: 'Radiology', image: '/images/departments/radiology.jpg' },
  { name: 'Urology', image: '/images/departments/urology.jpg' },
  { name: 'Endocrinology', image: '/images/departments/endocrinology.jpg' },
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
        inline: 'center',
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

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight animate-[slide-up_0.6s_ease-out]">
          Departments That Care, Experts Who Cure
          </h1>
          <p className="mt-4 text-lg md:text-md text-gray-600 max-w-3xl mx-auto animate-[slide-up_0.6s_ease-out_0.2s]">
          We combine innovation with expertise to treat a wide range of health concerns:

          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevCard}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-purple-700 rounded-full shadow-lg hover:bg-purple-800 transition-all duration-300 flex items-center justify-center focus:ring-4 focus:ring-purple-300"
            aria-label="Previous department"
          >
            <FaChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextCard}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-purple-700 rounded-full shadow-lg hover:bg-purple-800 transition-all duration-300 flex items-center justify-center focus:ring-4 focus:ring-purple-300"
            aria-label="Next department"
          >
            <FaChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6"
            style={{
              msOverflowStyle: 'none', // IE and Edge
              scrollbarWidth: 'none', // Firefox
              WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
            }}
          >
            {departments.map((department, index) => (
              <div
                key={`${department.name}-${index}`}
                className={`flex-none w-full sm:w-80 md:w-96 snap-center transition-all duration-500 ${
                  index === activeIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                }`}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img
                    src={department.image}
                    alt={department.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
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

      {/* Inline Animation Keyframes */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        [class*="animate-[slide-up"] {
          animation-fill-mode: forwards;
        }
      `}</style>
      <style jsx>{`
        div[style*="msOverflowStyle"]::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </section>
  );
};

export default DepartmentSection;
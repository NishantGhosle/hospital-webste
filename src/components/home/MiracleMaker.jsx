import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const doctors = [
  { name: 'Dr. Priya Sharma', image: '/images/doctors/priya-sharma.jpg' },
  { name: 'Dr. Vikram Singh', image: '/images/doctors/vikram-singh.jpg' },
  { name: 'Dr. Anjali Mehta', image: '/images/doctors/anjali-mehta.jpg' },
  { name: 'Dr. Rohan Patel', image: '/images/doctors/rohan-patel.jpg' },
  { name: 'Dr. Sneha Gupta', image: '/images/doctors/sneha-gupta.jpg' },
  { name: 'Dr. Arjun Reddy', image: '/images/doctors/arjun-reddy.jpg' },
  { name: 'Dr. Neha Kapoor', image: '/images/doctors/neha-kapoor.jpg' },
  { name: 'Dr. Sameer Khan', image: '/images/doctors/sameer-khan.jpg' },
];

const MiracleMaker = () => {
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
    const newIndex = (activeIndex + 1) % doctors.length;
    scrollToCard(newIndex);
  };

  const prevCard = () => {
    const newIndex = (activeIndex - 1 + doctors.length) % doctors.length;
    scrollToCard(newIndex);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight animate-[slide-up_0.6s_ease-out]">
            Meet Our Healing Heroes
          </h1>
          <p className="mt-4 text-lg md:text-md text-gray-600 max-w-3xl mx-auto animate-[slide-up_0.6s_ease-out_0.2s]">
            Discover the dedicated doctors behind every miracle, blending expertise with compassion to transform lives.
          </p>
          <p className=" text-lg md:text-md text-gray-600 max-w-3xl mx-auto animate-[slide-up_0.6s_ease-out_0.2s]">
          “It’s not just about finding the cure. It’s about being human through the healing.”
          </p>
        </div>

        <div className="relative">
          <button
            onClick={prevCard}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 flex items-center justify-center focus:ring-4 focus:ring-purple-300"
            aria-label="Previous doctor"
          >
            <FaChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextCard}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 flex items-center justify-center focus:ring-4 focus:ring-purple-300"
            aria-label="Next doctor"
          >
            <FaChevronRight className="h-6 w-6 text-white" />
          </button>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-8 scrollbar-hide"
          >
            {doctors.map((doctor, index) => (
              <div
                key={doctor.name}
                className={`flex-none w-72 snap-center transition-all duration-500 ${
                  index === activeIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                }`}
              >
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-white">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-4/5 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                      {doctor.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default MiracleMaker;
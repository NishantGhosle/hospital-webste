import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const services = [
  '5000+ patients cured',
  '24x7 emergency response',
  'Multispeciality care under one roof',
  'NABH-like quality assurance',
  'Neurological Sciences',
  'Trusted by families across the region',
];

const ServicesGrid = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://c8.alamy.com/comp/TW2CR7/professional-african-female-doctor-at-the-hospital-medical-healthcare-business-and-doctor-service-of-africa-TW2CR7.jpg"
              alt="Professional Doctor"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />
          </div>

          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Why Choose Atal?
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Because health isn’t just about medicine — it’s about compassion, clarity, and care. Here, science
            meets sensitivity, and experience meets empathy
            </p>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Our Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FaCheckCircle className="h-5 w-5 text-purple-700 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition-all duration-300 hover:shadow-lg focus:ring-4 focus:ring-purple-300"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
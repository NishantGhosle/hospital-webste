import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-blue-600">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover mix-blend-multiply"
          src="/images/hero-bg.jpg"
          alt="Hospital building"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Your Health Is Our Priority
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
          Providing exceptional healthcare services with cutting-edge technology
          and compassionate care. Our team of expert medical professionals is
          dedicated to your well-being.
        </p>
        <div className="mt-10 flex space-x-4">
          <Link
            to="/departments"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 transition-colors"
          >
            Our Services
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

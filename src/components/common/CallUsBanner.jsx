import React from 'react';
import { FaPhone, FaAmbulance } from 'react-icons/fa';

const CallUsBanner = () => {
  return (
    <div className="bg-purple-700 relative">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <FaPhone className="h-6 w-6 text-white" />
              <FaAmbulance className="h-6 w-6 text-white" />
            </div>
            <p className="text-white text-base md:text-lg">
              <span className="md:hidden font-semibold">Emergency? Call Now!</span>
              <span className="hidden md:inline">
                <span className="opacity-90">24/7 Emergency Services - </span>
                <span className="font-semibold">Call us at </span>
                <span className="font-bold text-xl bg-white text-purple-700 px-2 py-1 rounded-lg">
                  911
                </span>
              </span>
            </p>
          </div>
          <a
            href="tel:911"
            className="flex items-center justify-center px-6 py-2 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
          >
            <FaPhone className="h-5 w-5 mr-2" />
            Call Emergency
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallUsBanner;
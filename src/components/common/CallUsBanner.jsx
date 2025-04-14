import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { FaAmbulance } from 'react-icons/fa';

const CallUsBanner = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 animate-pulse opacity-50"></div>
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex-1 flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm transform hover:scale-110 transition-all duration-300">
                <PhoneIcon className="h-6 w-6 text-white animate-bounce" aria-hidden="true" />
              </div>
              <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm transform hover:scale-110 transition-all duration-300">
                <FaAmbulance className="h-6 w-6 text-white animate-pulse" />
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <p className="font-medium text-white">
                <span className="md:hidden text-lg font-bold group-hover:underline">Emergency? Call Now!</span>
                <span className="hidden md:inline text-lg">
                  <span className="font-normal opacity-90">24/7 Emergency Services Available - </span>
                  <span className="font-bold group-hover:underline">Call us at</span>
                </span>
                <span className="ml-2 font-black text-2xl bg-white text-red-600 px-2 py-0.5 rounded animate-pulse group-hover:scale-105 transition-transform duration-300 inline-block">911</span>
              </p>
            </div>
          </div>
          <div className="mt-2 flex-shrink-0 w-full sm:mt-0 sm:w-auto">
            <a
              href="tel:911"
              className="flex items-center justify-center px-6 py-2.5 rounded-full shadow-lg text-base font-medium text-white border-2 border-white/30 hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10 group"
            >
              <span className="mr-2 group-hover:rotate-12 transition-transform duration-300">🚑</span>
              <span>Call Emergency</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent animate-shimmer"></div>
    </div>
  );
};

export default CallUsBanner;

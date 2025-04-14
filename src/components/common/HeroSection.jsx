import React from 'react';
import PropTypes from 'prop-types';

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
  overlayColor = 'from-purple-900/70 to-indigo-900/70',
  height = 'h-[650px]',
}) => {
  return (
    <div className={`relative ${height} overflow-hidden`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Decorative Shape */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 text-purple-700/20"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C360,0 1080,0 1440,100 L1440,100 L0,100 Z"
          fill="currentColor"
        />
      </svg>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${overlayColor}`} />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-4 animate-slide-up">
            {title}
          </h1>
          <p className="text-md md:text-md text-white/90 mb-8 animate-slide-up animation-delay-200">
            {subtitle}
          </p>
          {buttonText && buttonLink && (
            <div className="flex space-x-4 animate-slide-up animation-delay-400">
              <a
                href={buttonLink}
                className="inline-flex items-center px-5 py-2 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition-all duration-300 hover:shadow-lg focus:ring-4 focus:ring-purple-300"
              >
                {buttonText}
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-5 py-2 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-700 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  overlayColor: PropTypes.string,
  height: PropTypes.string,
};

export default HeroSection;

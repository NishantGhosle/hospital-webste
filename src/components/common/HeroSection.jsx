import React from 'react';
import PropTypes from 'prop-types';

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
  overlayColor = 'from-purple-900/80',
  height = 'h-[450px]'
}) => {
  return (
    <div className={`relative ${height} overflow-hidden group`}>
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-3000 group-hover:scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${overlayColor} to-transparent`} />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up animation-delay-200">
            {subtitle}
          </p>
          {buttonText && buttonLink && (
            <div className="animate-fade-in-up animation-delay-400">
              <a
                href={buttonLink}
                className="inline-flex items-center px-7 py-3 text-lg font-medium 
      bg-purple-600 text-white rounded-full transition-all duration-100 hover:bg-purple-700 hover:text-white hover:scale-105 hover:shadow-lg"
              >
                {buttonText}
                <svg
                  className="w-5 h-5 ml-2 -mr-1 transform transition-transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
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

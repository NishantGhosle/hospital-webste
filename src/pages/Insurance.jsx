import React from 'react';
import HeroSection from '../components/common/HeroSection';

const Insurance = () => {
  return (
    <div className="bg-gray-50">
      <HeroSection
        title="Insurance & Billing"
        subtitle="Partnering with top insurance providers for seamless care and transparent billing."
        backgroundImage="/images/hero/insurance-hero.jpg"
        overlayColor="from-purple-900/70 to-indigo-900/70"
        height="h-[450px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Insurance Simplified
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading insurance providers to make healthcare accessible and stress-free.
          </p>
        </div>

        {/* Claim Process */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Our Claims Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Verify Coverage",
                desc: "Reach out to your provider or our team to confirm your coverage.",
              },
              {
                step: 2,
                title: "Receive Care",
                desc: "Access top-quality medical care from our trusted providers.",
              },
              {
                step: 3,
                title: "Claims Processing",
                desc: "We handle all claims submissions for a hassle-free experience.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="h-14 w-14 mx-auto mb-5 bg-purple-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-purple-200">
                  <span className="text-2xl font-bold text-purple-700">{item.step}</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Have Insurance Questions?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Our dedicated insurance specialists are ready to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+1234567890"
              className="inline-block bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-800 transition-colors duration-300"
            >
              Call Us
            </a>
            <a
              href="mailto:insurance@medicare.com"
              className="inline-block bg-transparent border-2 border-purple-700 text-purple-700 font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 hover:text-white transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
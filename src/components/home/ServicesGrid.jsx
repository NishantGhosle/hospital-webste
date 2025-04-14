import React from 'react';

const services = [
  'Comprehensive Emergency Care',
  'Cardiology Services',
  'Center for Digestive & Liver Diseases',
  'Advanced Surgical Care',
  'Neurological Sciences',
  'Laser Treatment Clinic',
  'Renal Care & Dialysis',
  'Blood Bank & Laboratory',
  'Obstetrics & Gynaecology',
  'Pharmacy & Ambulance Services'
];

const ServicesGrid = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://c8.alamy.com/comp/TW2CR7/professional-african-female-doctor-at-the-hospital-medical-healthcare-business-and-doctor-service-of-africa-TW2CR7.jpg"
              // src="/doctor.jpg"
              alt="Professional Doctor"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-purple-700 mb-4">
              Here for You, Here for Generations
            </h2>
            
            <p className="text-gray-600 mb-6">
              For almost 50 years, National Hospital has been a trusted name in healthcare across
              Malabar. Located in the heart of Kozhikode, our 400-bedded super-specialty hospital
              is more than just a medical facility – it's a place where advanced technology meets
              genuine compassion.
            </p>
           

            <div>
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">What We Offer:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <span className="text-purple-700">•</span>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="inline-flex items-center px-7 py-3 text-lg font-medium 
      bg-purple-600 text-white rounded-full transition-all duration-100 hover:bg-purple-700 hover:text-white hover:scale-105 hover:shadow-lg">
              AND MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

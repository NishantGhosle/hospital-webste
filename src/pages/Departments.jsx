import React from 'react';
import HeroSection from '../components/common/HeroSection';

const departments = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    description: 'Comprehensive cardiac care with state-of-the-art facilities.',
    services: [
      'Cardiac Consultation',
      'ECG/EKG',
      'Echocardiography',
      'Stress Testing',
      'Cardiac Catheterization',
    ],
    icon: '❤️',
  },
  {
    id: 'neurology',
    name: 'Neurology',
    description: 'Expert care for neurological disorders and conditions.',
    services: [
      'Neurological Consultation',
      'EEG',
      'EMG',
      'Sleep Studies',
      'Movement Disorder Treatment',
    ],
    icon: '🧠',
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    description: 'Specialized care for bones, joints, and musculoskeletal system.',
    services: [
      'Joint Replacement',
      'Sports Medicine',
      'Spine Surgery',
      'Fracture Care',
      'Physical Therapy',
    ],
    icon: '🦴',
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    description: 'Comprehensive healthcare for children from birth through adolescence.',
    services: [
      'Well-Child Visits',
      'Vaccinations',
      'Developmental Screening',
      'Pediatric Emergency Care',
      'Chronic Disease Management',
    ],
    icon: '👶',
  },
];

const Departments = () => {
  return (
    <div>
      <HeroSection
        title="Our Specialized Departments"
        subtitle="Expert care across multiple specialties, equipped with state-of-the-art facilities and experienced medical professionals."
        backgroundImage="/images/hero/departments-hero.jpg"
        overlayColor="from-emerald-900/80"
        height="h-[400px]"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Departments
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Specialized care delivered by experienced medical professionals
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {departments.map((dept) => (
            <div
              key={dept.id}
              id={dept.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{dept.icon}</span>
                  <h2 className="text-3xl font-bold text-gray-900">{dept.name}</h2>
                </div>
                <p className="mt-4 text-lg text-gray-600">{dept.description}</p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Services Offered
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dept.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-center text-gray-600"
                      >
                        <svg
                          className="h-5 w-5 text-blue-500 mr-2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Our Facilities
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Modern Operating Rooms',
                description: 'State-of-the-art surgical facilities with advanced equipment',
              },
              {
                name: 'Diagnostic Imaging',
                description: 'Latest imaging technology including MRI, CT, and X-ray',
              },
              {
                name: 'Emergency Department',
                description: '24/7 emergency care with rapid response capabilities',
              },
              {
                name: 'Laboratory Services',
                description: 'Full-service medical laboratory for accurate diagnostics',
              },
              {
                name: 'Rehabilitation Center',
                description: 'Comprehensive rehabilitation services and equipment',
              },
              {
                name: 'Pharmacy',
                description: 'In-house pharmacy with prescription and OTC medications',
              },
            ].map((facility) => (
              <div
                key={facility.name}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {facility.name}
                </h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;

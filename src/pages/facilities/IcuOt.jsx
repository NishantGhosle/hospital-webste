import React from 'react';
import FacilityLayout from '../../components/facilities/FacilityLayout';

const IcuOt = () => {
  const features = [
    {
      title: 'Advanced ICU Setup',
      description: 'State-of-the-art intensive care units equipped with the latest monitoring and life support systems'
    },
    {
      title: 'Modern NICU',
      description: 'Specialized neonatal intensive care unit with advanced infant care equipment'
    },
    {
      title: 'Digital Operation Theatres',
      description: 'Fully equipped operation theatres with modern surgical equipment and monitoring systems'
    },
    {
      title: 'Recovery Units',
      description: 'Dedicated post-operative care units with continuous monitoring'
    },
    {
      title: 'Infection Control',
      description: 'Advanced infection control protocols and HEPA filtration systems'
    },
    {
      title: '24/7 Critical Care',
      description: 'Round-the-clock critical care support with experienced medical staff'
    }
  ];

  return (
    <FacilityLayout
      title="ICUs, NICUs & Operation Theatres"
      description="State-of-the-art critical care and surgical facilities equipped with the latest medical technology"
      image="/images/facilities/icu-ot.jpg"
      features={features}
      content={
        <div className="space-y-6">
          <p>
            Our hospital features advanced intensive care units, neonatal care facilities, and 
            modern operation theatres equipped with the latest medical technology. Our facilities 
            are designed to provide the highest level of care for critical patients and ensure 
            successful surgical outcomes.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">World-Class Infrastructure</h3>
          <p>
            Each ICU bed is equipped with state-of-the-art monitoring systems, ventilators, and 
            life support equipment. Our operation theatres feature advanced surgical equipment, 
            laminar air flow systems, and modern anesthesia workstations to ensure safe and 
            successful surgeries.
          </p>

          <div className="bg-blue-50 p-6 rounded-xl mt-8">
            <h4 className="text-xl font-semibold text-blue-800 mb-4">Facility Highlights</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Modern ICU beds with advanced monitoring systems
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Specialized NICU with infant care equipment
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Digital operation theatres with latest surgical equipment
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Advanced infection control measures
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
};

export default IcuOt;

import React from 'react';
import DepartmentLayout from '../../components/departments/DepartmentLayout';

const Cardiology = () => {
  return (
    <DepartmentLayout
      title="Cardiology Department"
      description="Advanced cardiac care with state-of-the-art technology and experienced specialists"
      image="/images/departments/cardiology.jpg"
      content={
        <div className="space-y-6">
          <p>
            Our Cardiology Department is equipped with cutting-edge technology and staffed by highly skilled specialists 
            dedicated to providing comprehensive cardiac care. From preventive cardiology to complex cardiac surgeries, 
            we offer a complete range of services to ensure your heart health.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800">Our Services</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>24/7 Cardiac Emergency Care</li>
            <li>Non-invasive Cardiology</li>
            <li>Interventional Cardiology</li>
            <li>Electrophysiology</li>
            <li>Pediatric Cardiology</li>
            <li>Cardiac Rehabilitation</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800">Advanced Facilities</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Modern Cardiac Catheterization Labs</li>
            <li>Advanced ECG and Echo Machines</li>
            <li>Stress Test Facilities</li>
            <li>Holter Monitoring</li>
            <li>Dedicated Cardiac ICU</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Experienced team of cardiologists and cardiac surgeons
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Latest diagnostic and treatment technologies
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Comprehensive cardiac rehabilitation programs
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                24/7 emergency cardiac care
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
};

export default Cardiology;

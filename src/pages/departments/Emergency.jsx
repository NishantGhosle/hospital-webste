import React from 'react';
import DepartmentLayout from '../../components/departments/DepartmentLayout';

const Emergency = () => {
  return (
    <DepartmentLayout
      title="Emergency Department"
      description="24/7 Emergency Medical Care with Advanced Life Support"
      image="/images/departments/emergency.jpg"
      content={
        <div className="space-y-6">
          <p>
            Our Emergency Department provides round-the-clock emergency medical care with state-of-the-art
            facilities and a dedicated team of emergency medicine specialists. We are equipped to handle
            all types of medical emergencies with rapid response times and comprehensive care protocols.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800">Our Services</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>24/7 Emergency Care</li>
            <li>Trauma Care Unit</li>
            <li>Critical Care Services</li>
            <li>Rapid Response Teams</li>
            <li>Emergency Surgeries</li>
            <li>Disaster Management</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800">Advanced Facilities</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Modern Emergency Operation Theaters</li>
            <li>Advanced Life Support Ambulances</li>
            <li>State-of-the-art Monitoring Systems</li>
            <li>Dedicated Emergency ICU</li>
            <li>Point-of-Care Testing Laboratory</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Experienced emergency medicine specialists available 24/7
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Rapid response time with modern equipment
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Comprehensive trauma care facilities
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Integrated approach with all specialties
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
};

export default Emergency;

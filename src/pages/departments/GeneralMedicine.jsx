import React from 'react';
import DepartmentLayout from '../../components/departments/DepartmentLayout';

const GeneralMedicine = () => {
  return (
    <DepartmentLayout
      title="General Medicine"
      description="Comprehensive Healthcare for All Ages with Expert Physicians"
      image="/images/departments/general-medicine.jpg"
      content={
        <div className="space-y-6">
          <p>
            The Department of General Medicine is the cornerstone of our healthcare services, providing
            comprehensive medical care for patients of all ages. Our team of experienced physicians
            specializes in diagnosing, treating, and preventing a wide range of medical conditions.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800">Our Services</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Comprehensive Health Check-ups</li>
            <li>Chronic Disease Management</li>
            <li>Acute Care Services</li>
            <li>Preventive Healthcare</li>
            <li>Internal Medicine</li>
            <li>Geriatric Care</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800">Advanced Facilities</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Modern Consultation Rooms</li>
            <li>Advanced Diagnostic Equipment</li>
            <li>Treatment Units</li>
            <li>Health Screening Center</li>
            <li>Vaccination Clinic</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Experienced team of physicians and specialists
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Comprehensive health assessment and care
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Integrated approach to treatment
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Focus on preventive healthcare
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
};

export default GeneralMedicine;

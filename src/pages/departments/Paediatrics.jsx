import React from 'react';
import DepartmentLayout from '../../components/departments/DepartmentLayout';

const Paediatrics = () => {
  return (
    <DepartmentLayout
      title="Paediatrics Department"
      description="Specialized Healthcare for Children in a Child-Friendly Environment"
      image="/images/departments/paediatrics.jpg"
      content={
        <div className="space-y-6">
          <p>
            Our Paediatrics Department is dedicated to providing comprehensive healthcare services for
            infants, children, and adolescents. We create a child-friendly environment where young
            patients feel comfortable and secure while receiving the highest quality medical care.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800">Our Services</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Newborn Care and NICU</li>
            <li>Pediatric Emergency Care</li>
            <li>Routine Check-ups and Vaccinations</li>
            <li>Child Development Assessment</li>
            <li>Pediatric Subspecialty Care</li>
            <li>Child Nutrition Services</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800">Advanced Facilities</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Modern NICU Facility</li>
            <li>Child-Friendly Treatment Rooms</li>
            <li>Pediatric Emergency Unit</li>
            <li>Vaccination Center</li>
            <li>Child Development Center</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Expert pediatricians and child specialists
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Child-friendly environment and approach
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Comprehensive pediatric care services
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Family-centered care approach
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
};

export default Paediatrics;

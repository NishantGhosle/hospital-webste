import React from 'react';
import DepartmentLayout from '../../components/departments/DepartmentLayout';

const Neurology = () => {
  return (
    <DepartmentLayout
      title="Neurology Department"
      description="Advanced Neurological Care with Cutting-edge Technology"
      image="/images/departments/neurology.jpg"
      content={
        <div className="space-y-6">
          <p>
            The Department of Neurology specializes in the diagnosis and treatment of all conditions
            and diseases involving the central and peripheral nervous system. Our team of highly
            qualified neurologists uses advanced technology to provide comprehensive care for
            neurological disorders.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800">Our Services</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Comprehensive Neurological Evaluations</li>
            <li>Stroke Treatment and Prevention</li>
            <li>Epilepsy Management</li>
            <li>Movement Disorders Care</li>
            <li>Headache and Migraine Treatment</li>
            <li>Neuromuscular Disease Management</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800">Advanced Facilities</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>State-of-the-art EEG Laboratory</li>
            <li>Advanced EMG Testing Unit</li>
            <li>Neuroimaging Center</li>
            <li>Specialized Stroke Unit</li>
            <li>Neuro-rehabilitation Facility</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Expert neurologists and specialists
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Latest diagnostic and treatment technology
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Comprehensive neurological care
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Integrated rehabilitation programs
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
};

export default Neurology;

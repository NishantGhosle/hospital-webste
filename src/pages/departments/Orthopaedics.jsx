import React from 'react';
import DepartmentLayout from '../../components/departments/DepartmentLayout';

const Orthopaedics = () => {
  return (
    <DepartmentLayout
      title="Orthopaedics Department"
      description="Advanced Care for Bone, Joint, and Musculoskeletal Health"
      image="/images/departments/orthopaedics.jpg"
      content={
        <div className="space-y-6">
          <p>
            Our Orthopaedics Department provides comprehensive care for all musculoskeletal conditions,
            including disorders of bones, joints, ligaments, tendons, muscles, and nerves. Our team
            of experienced orthopaedic surgeons and specialists uses the latest techniques and
            technology for diagnosis and treatment.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800">Our Services</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Joint Replacement Surgery</li>
            <li>Sports Injury Treatment</li>
            <li>Spine Surgery</li>
            <li>Trauma Care</li>
            <li>Arthroscopic Surgery</li>
            <li>Pediatric Orthopaedics</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800">Advanced Facilities</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Modern Operation Theaters</li>
            <li>Advanced Imaging Equipment</li>
            <li>Rehabilitation Center</li>
            <li>Sports Medicine Facility</li>
            <li>Specialized Pain Management Unit</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Experienced orthopaedic surgeons
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Latest surgical techniques
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Comprehensive rehabilitation programs
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Personalized treatment plans
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
};

export default Orthopaedics;

import React from 'react';
import DepartmentLayout from '../../components/departments/DepartmentLayout';

const Gynaecology = () => {
  return (
    <DepartmentLayout
      title="Gynaecology Department"
      description="Expert Women's Healthcare with Advanced Medical Solutions"
      image="/images/departments/gynaecology.jpg"
      content={
        <div className="space-y-6">
          <p>
            Our Gynaecology Department provides comprehensive care for women's health issues across all
            life stages. With a team of experienced gynecologists and modern medical facilities, we
            ensure the highest standard of care for our patients.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800">Our Services</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Comprehensive Women's Health Check-ups</li>
            <li>Gynecological Surgeries</li>
            <li>Fertility Treatments</li>
            <li>Pregnancy Care</li>
            <li>Menopause Management</li>
            <li>Family Planning Services</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800">Advanced Facilities</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Modern Labor and Delivery Suites</li>
            <li>Advanced Laparoscopy Equipment</li>
            <li>Fetal Monitoring Systems</li>
            <li>Ultrasound Facilities</li>
            <li>Specialized Operating Theaters</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Expert female healthcare specialists
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                State-of-the-art medical facilities
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Comprehensive women's health services
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Privacy and comfort-focused care
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
};

export default Gynaecology;

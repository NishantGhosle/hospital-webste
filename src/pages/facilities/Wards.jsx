import React from 'react';
import FacilityLayout from '../../components/facilities/FacilityLayout';

const Wards = () => {
  return (
    <FacilityLayout
      title="Patient Wards"
      description="Comfortable and Well-Equipped Patient Care Units"
      image="/images/facilities/wards.jpg"
      content={
        <>
          <p>
            Our hospital features various types of wards designed to provide optimal care and comfort
            to patients. Each ward is equipped with modern medical facilities and staffed by skilled
            healthcare professionals who provide round-the-clock care and monitoring.
          </p>
        </>
      }
      features={[
        {
          title: "General Wards",
          description: "Clean and comfortable multi-bed wards with modern amenities"
        },
        {
          title: "Private Rooms",
          description: "Well-appointed single rooms with attached bathrooms and visitor facilities"
        },
        {
          title: "ICU/CCU",
          description: "State-of-the-art intensive care units with advanced monitoring systems"
        },
        {
          title: "Mother & Child Care",
          description: "Specialized maternity wards with newborn care facilities"
        },
        {
          title: "Isolation Wards",
          description: "Negative pressure rooms for infection control and patient isolation"
        },
        {
          title: "Recovery Units",
          description: "Post-operative care units with specialized monitoring equipment"
        }
      ]}
    />
  );
};

export default Wards;

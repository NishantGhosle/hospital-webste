import React from 'react';
import FacilityLayout from '../../components/facilities/FacilityLayout';

const Infrastructure = () => {
  return (
    <FacilityLayout
      title="Hospital Infrastructure"
      description="Modern Healthcare Facilities & Architecture"
      image="/images/facilities/infrastructure.jpg"
      content={
        <>
          <p>
            Our hospital features modern infrastructure designed to provide a comfortable and healing
            environment for patients while ensuring efficient healthcare delivery. The facility is
            built with the latest architectural concepts that prioritize patient comfort, safety,
            and accessibility.
          </p>
        </>
      }
      features={[
        {
          title: "Modern Building Design",
          description: "Earthquake-resistant structure with modern amenities and green building features"
        },
        {
          title: "Advanced HVAC System",
          description: "HEPA-filtered air conditioning with positive pressure isolation rooms"
        },
        {
          title: "Smart Hospital Features",
          description: "Digital signage, automated doors, and smart elevator systems"
        },
        {
          title: "Power Backup",
          description: "100% power backup with UPS for critical areas"
        },
        {
          title: "Fire Safety Systems",
          description: "Advanced fire detection and suppression systems throughout the building"
        },
        {
          title: "Accessibility Features",
          description: "Wheelchair ramps, handrails, and specially designed restrooms for differently-abled"
        }
      ]}
    />
  );
};

export default Infrastructure;

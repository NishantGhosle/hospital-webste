import React from 'react';
import FacilityLayout from '../../components/facilities/FacilityLayout';

const Diagnostics = () => {
  return (
    <FacilityLayout
      title="Diagnostic Services"
      description="Advanced Medical Diagnostics & Imaging"
      image="/images/facilities/diagnostics.jpg"
      content={
        <>
          <p>
            Our Diagnostic Center is equipped with state-of-the-art technology and staffed by expert
            technicians and radiologists. We provide comprehensive diagnostic services ranging from
            routine laboratory tests to advanced imaging procedures, ensuring accurate and timely
            diagnosis for better treatment outcomes.
          </p>
        </>
      }
      features={[
        {
          title: "Advanced Imaging Services",
          description: "MRI, CT Scan, X-Ray, Ultrasound, and Digital Mammography"
        },
        {
          title: "Laboratory Services",
          description: "Comprehensive clinical laboratory with automated testing systems"
        },
        {
          title: "Cardiac Diagnostics",
          description: "ECG, Echo, Stress Test, and Holter monitoring"
        },
        {
          title: "Neurological Diagnostics",
          description: "EEG, EMG, and Nerve Conduction Studies"
        },
        {
          title: "Digital Reporting",
          description: "Quick turnaround time with digital report delivery"
        },
        {
          title: "24/7 Emergency Testing",
          description: "Round-the-clock emergency laboratory and imaging services"
        }
      ]}
    />
  );
};

export default Diagnostics;

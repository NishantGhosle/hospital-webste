import React from 'react';
import FacilityLayout from '../../components/facilities/FacilityLayout';

const AmbulancePharmacy = () => {
  return (
    <FacilityLayout
      title="Ambulance & Pharmacy Services"
      description="24/7 Emergency Response and Comprehensive Pharmacy Care"
      image="/images/facilities/ambulance-pharmacy.jpg"
      content={
        <>
          <p>
            Our hospital provides round-the-clock ambulance and pharmacy services to ensure immediate
            medical response and continuous access to essential medications. Our modern fleet of
            ambulances and well-stocked pharmacy work together to deliver comprehensive healthcare
            support.
          </p>
        </>
      }
      features={[
        {
          title: "Advanced Life Support Ambulances",
          description: "Fully equipped ambulances with trained paramedical staff available 24/7"
        },
        {
          title: "GPS Tracking System",
          description: "Real-time ambulance tracking for efficient emergency response"
        },
        {
          title: "24/7 Pharmacy Services",
          description: "Round-the-clock access to essential medications and medical supplies"
        },
        {
          title: "Digital Prescription System",
          description: "Electronic prescription processing for quick and accurate medication dispensing"
        },
        {
          title: "Medication Counseling",
          description: "Expert advice on medication usage, side effects, and interactions"
        },
        {
          title: "Home Delivery Service",
          description: "Medication delivery service for patients' convenience"
        }
      ]}
    />
  );
};

export default AmbulancePharmacy;

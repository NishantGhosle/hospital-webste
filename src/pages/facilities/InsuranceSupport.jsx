import React from 'react';
import FacilityLayout from '../../components/facilities/FacilityLayout';

const InsuranceSupport = () => {
  return (
    <FacilityLayout
      title="Insurance Support"
      description="Comprehensive Insurance Assistance Services"
      image="/images/facilities/insurance.jpg"
      content={
        <>
          <p>
            Our dedicated Insurance Support team helps patients navigate through various insurance
            processes, ensuring a hassle-free experience. We work with multiple insurance providers
            and offer guidance on claims, coverage, and documentation requirements.
          </p>
        </>
      }
      features={[
        {
          title: "Insurance Documentation",
          description: "Assistance with insurance paperwork and claim submissions"
        },
        {
          title: "Network Hospitals",
          description: "Partnerships with major insurance providers and TPA networks"
        },
        {
          title: "Cashless Facility",
          description: "Streamlined process for cashless hospitalization"
        },
        {
          title: "Claim Processing",
          description: "Expert support for quick and efficient claim settlements"
        },
        {
          title: "Insurance Advisory",
          description: "Guidance on insurance coverage and policy benefits"
        },
        {
          title: "24/7 Support",
          description: "Round-the-clock assistance for insurance-related queries"
        }
      ]}
    />
  );
};

export default InsuranceSupport;

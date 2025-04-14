import React from 'react';
import HeroSection from '../components/common/HeroSection';
import DepartmentSection from '../components/home/DepartmentSection';
import ServicesGrid from '../components/home/ServicesGrid';
import AppointmentForm from '../components/common/AppointmentForm';

const Home = () => {
  return (
    <div >
      <HeroSection
        title="World-Class Healthcare at Your Doorstep"
        subtitle="Experience exceptional medical care with cutting-edge technology and compassionate professionals dedicated to your well-being."
        backgroundImage="/images/hero/home-hero.jpg"
        buttonText="Book an Appointment"
        buttonLink="#appointment"
        height="h-[450px]"
      />
      <DepartmentSection />
      <ServicesGrid />
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto  sm:px-6 ">
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
};

export default Home;

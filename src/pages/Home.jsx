import React from 'react';
import HeroSection from '../components/common/HeroSection';
import DepartmentSection from '../components/home/DepartmentSection';
import ServicesGrid from '../components/home/ServicesGrid';
import AppointmentForm from '../components/common/AppointmentForm';

const Home = () => {
  return (
    <div className="bg-gray-50">
      <HeroSection
        title="Healthcare You Can Trust"
        subtitle="Discover world-class medical care powered by innovation and compassion, tailored to your unique needs."
        backgroundImage="/images/hero/home-hero.jpg"
        buttonText="Book Appointment"
        buttonLink="#appointment"
        height="h-[450px]"
      />
      <DepartmentSection />
      <ServicesGrid />
      <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-20" id="appointment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
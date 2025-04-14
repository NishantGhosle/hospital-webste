import React from 'react';
import HeroSection from '../components/common/HeroSection';

const About = () => {
  return (
    <div>
      <HeroSection
        title="Our Story of Excellence"
        subtitle="Discover our journey of innovation, compassion, and commitment to healthcare excellence since 1990."
        backgroundImage="/images/hero/about-hero.jpg"
        overlayColor="from-indigo-900/80"
        height="h-[400px]"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">About Us</h1>
          <p className="mt-4 text-xl text-gray-500">
            Providing exceptional healthcare services since 1995
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quos, consectetur ipsam tempore vero recusandae blanditiis voluptate delectus suscipit est sequi assumenda quia esse illo unde ut doloribus. Quam, minima a velit aspernatur asperiores reprehenderit similique amet est repellat corporis quisquam dolore perferendis accusantium ex doloribus voluptatibus illo? Recusandae quidem similique ipsum nisi eligendi harum magni alias architecto. Sequi commodi amet saepe obcaecati architecto esse quaerat, rem voluptatem voluptatibus, asperiores nam corrupti perspiciatis reprehenderit perferendis deserunt inventore accusamus facilis! Rerum impedit officiis natus ullam ducimus ex? Numquam repellendus sint alias adipisci aspernatur quod error, odio reiciendis maiores unde perferendis enim.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga deserunt iusto perferendis harum expedita aut neque mollitia quos rem deleniti velit necessitatibus nostrum quaerat sunt, aperiam quasi tenetur veniam sapiente quod unde, delectus architecto? Sed totam dolor nemo obcaecati similique praesentium aliquam? Temporibus quaerat quis nihil ea saepe fugit adipisci ullam similique, maiores harum ad. Quidem consequuntur commodi velit alias harum possimus nihil ullam placeat tempora, impedit enim eius dicta, modi necessitatibus neque hic quaerat. Blanditiis ea non, nemo tempore necessitatibus quisquam provident nesciunt aliquam dolore hic quod esse explicabo earum aperiam tempora eos quae eveniet in. Unde, cum alias!
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-16 py-12 bg-gray-50 rounded-2xl">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold text-[#B4336D]">60+</h3>
                <p className="text-gray-600 font-medium">Doctors</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold text-[#B4336D]">1,000,000+</h3>
                <p className="text-gray-600 font-medium">Lives Transformed</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold text-[#B4336D]">40+</h3>
                <p className="text-gray-600 font-medium">Years of Experience</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold text-[#B4336D]">200+</h3>
                <p className="text-gray-600 font-medium">Beds</p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Johnson',
                role: 'Chief Medical Officer',
                image: '/images/team/leader1.jpg',
              },
              {
                name: 'Dr. Michael Chen',
                role: 'Head of Surgery',
                image: '/images/team/leader2.jpg',
              },
              {
                name: 'Dr. Emily Williams',
                role: 'Director of Patient Care',
                image: '/images/team/leader3.jpg',
              },
            ].map((leader) => (
              <div key={leader.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200">
                  {/* Add actual images later */}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900">{leader.name}</h3>
                  <p className="text-gray-600">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

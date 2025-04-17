import React from 'react';
import HeroSection from '../components/common/HeroSection';
import { FaUserMd, FaHeart, FaHospital, FaBed } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gray-50">
      <HeroSection
        title="Our Legacy of Care"
        subtitle="Since 1995, we've been committed to innovation, compassion, and transforming lives through exceptional healthcare."
        backgroundImage="/images/hero/about-hero.jpg"
        overlayColor="from-purple-900/70 to-indigo-900/70"
        height="h-[450px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            About Us
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering healthcare excellence with a patient-first approach for over three decades.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ratione officiis sint veritatis cupiditate. Quibusdam, architecto corrupti consequuntur quia necessitatibus harum iure dignissimos, reprehenderit exercitationem nisi voluptatibus inventore nulla veniam earum, assumenda incidunt dolorem maiores aliquam ullam! Ipsam soluta fugit officia possimus, minus nisi quam doloribus, officiis maiores veritatis, nemo cumque harum mollitia perspiciatis dignissimos quisquam rerum iste deleniti. Atque voluptas illo temporibus quae natus et porro minus, ducimus facere aliquam sed magnam nulla qui alias blanditiis tempore dolor autem adipisci! Iste temporibus tenetur vero nisi, beatae eum! Saepe esse tempore harum dignissimos tenetur velit, laboriosam adipisci et itaque nulla!
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, laborum possimus! Soluta facilis officiis molestiae ut iusto eaque nam temporibus aperiam itaque explicabo nesciunt sit, culpa voluptatem quasi esse voluptate necessitatibus delectus! Tempore a consectetur dolore aliquid ullam repudiandae, consequuntur sit, numquam iusto quos doloribus neque. Necessitatibus distinctio officia quas rem perspiciatis animi repellat tempore voluptas, tempora cum, quia, ex aliquam odit exercitationem cupiditate consectetur temporibus modi suscipit saepe quaerat aspernatur totam sed nostrum! Sit natus nulla incidunt ea. Deleniti rem delectus sint officia deserunt suscipit obcaecati dolorem consequatur ipsa ullam, voluptatum excepturi nemo quae cum voluptatibus illum. Commodi, dolores.
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-16 py-12 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: <FaUserMd className="h-8 w-8 text-purple-700 mx-auto mb-2" />, value: '60+', label: 'Doctors' },
                { icon: <FaHeart className="h-8 w-8 text-purple-700 mx-auto mb-2" />, value: '1M+', label: 'Lives Transformed' },
                { icon: <FaHospital className="h-8 w-8 text-purple-700 mx-auto mb-2" />, value: '40+', label: 'Years of Excellence' },
                { icon: <FaBed className="h-8 w-8 text-purple-700 mx-auto mb-2" />, value: '200+', label: 'Beds' },
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  {stat.icon}
                  <h3 className="text-3xl md:text-4xl font-extrabold text-purple-700">{stat.value}</h3>
                  <p className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Leadership
          </h2>
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
              <div
                key={leader.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{leader.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Our Patients Say */}
        <div className="mt-20 py-16 bg-gradient-to-br from-indigo-50 to-purple-100 rounded-3xl">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 animate-fade-in">
              What Our Patients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "I came in with fear, I walked out with gratitude. The care I received at Atal was beyond anything I expected.",
                  name: "Sunita Verma",
                  role: "Heart Patient",
                },
                {
                  quote: "They treated my father like their own. Hats off to the team!",
                  name: "Rajesh S.",
                  role: "Trauma Recovery",
                },
                {
                  quote: "My child’s health was critical. Today she’s smiling again, all thanks to Atal.",
                  name: "Nagma F.",
                  role: "Pediatric ICU",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <p className="text-gray-600 italic mb-4 text-base md:text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path d="M4 8a8 8 0 1112 0 8 8 0 01-12 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-purple-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Journey
          </h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Discover how we’re shaping the future of healthcare. Connect with us to learn more or explore opportunities to collaborate.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg focus:ring-4 focus:ring-purple-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation-fill-mode: forwards;
          animation-duration: 0.6s;
          animation-timing-function: ease-out;
        }
      `}</style>
    </div>
  );
};

export default About;
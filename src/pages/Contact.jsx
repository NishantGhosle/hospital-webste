// import React from 'react';
// import HeroSection from '../components/common/HeroSection';
// import { FaPhone, FaEnvelope, FaHospital } from 'react-icons/fa';

// const Contact = () => {
//   return (
//     <div>
//       <HeroSection
//         title="Get in Touch"
//         subtitle="Have questions? We're here to help. Reach out to us through any of our contact channels."
//         backgroundImage="/images/hero/contact-hero.jpg"
//         overlayColor="from-gray-900/80"
//         buttonText="Contact Us Now"
//         buttonLink="#contact-form"
//         height="h-[450px]"
//       />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Contact Us</h1>
//           <p className="mt-4 text-xl text-gray-500">
//             We're here to help and answer any questions you might have
//           </p>
//         </div>

//         <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Left Side - Contact Info */}
//           <div className="space-y-8">


//             <div className="space-y-6">
//               {/* Phone */}
//               <div className="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer group">
//                 <div className="h-12 w-12 bg-purple-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                   <FaPhone className="text-white text-xl" />
//                 </div>

//                 <div className="ml-4">
//                   <h3 className="text-sm text-gray-500">Phone</h3>
//                   <p className="text-lg font-semibold">0495-415 2222</p>
//                 </div>
//               </div>

//               {/* Mobile */}
//               <div className="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer group">
//                 <div className="h-12 w-12 bg-purple-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                   <FaPhone className="text-white text-xl" />
//                 </div>

//                 <div className="ml-4">
//                   <h3 className="text-sm text-gray-500">Mobile</h3>
//                   <p className="text-lg font-semibold">7025 777 666</p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer group">
//                 <div className="h-12 w-12 bg-purple-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                   <FaEnvelope className="text-white text-xl" />
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-sm text-gray-500">Email</h3>
//                   <p className="text-lg font-semibold">contactnationalhospital@gmail.com</p>
//                 </div>
//               </div>

//               {/* Address */}
//               <div className="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer group">
//                 <div className="h-12 w-12 bg-purple-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                   <FaHospital className="text-white text-xl" />
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-sm text-gray-500">National Hospital</h3>
//                   <p className="text-lg font-semibold">Mavoor Road, Calicut, Kerala, India</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Contact Form */}
//           <div className="bg-gray-50 p-8 rounded-2xl">
//             <form className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm text-gray-600 mb-2">Full Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     placeholder="Name"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none transition-all"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="mobile" className="block text-sm text-gray-600 mb-2">Mobile</label>
//                   <input
//                     type="tel"
//                     id="mobile"
//                     name="mobile"
//                     placeholder="Mobile"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none transition-all"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm text-gray-600 mb-2">Subject</label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   placeholder="Type Your Subject"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none transition-all"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm text-gray-600 mb-2">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   placeholder="Your Message Here"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none transition-all resize-none"
//                   required
//                 />
//               </div>

//               <div className="flex items-center justify-between">

//                 <button
//                   type="submit"
//                   className="inline-flex items-center px-7 py-3 text-lg font-medium 
//       bg-purple-600 text-white rounded-full transition-all duration-100 hover:bg-purple-700 hover:text-white hover:scale-105 hover:shadow-lg"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React from 'react';
import HeroSection from '../components/common/HeroSection';
import { FaPhone, FaEnvelope, FaHospital } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-50">
      <HeroSection
        title="Connect With Us"
        subtitle="We're here to answer your questions and provide support. Reach out today."
        backgroundImage="/images/hero/contact-hero.jpg"
        overlayColor="from-gray-900/80"
        buttonText="Get in Touch"
        buttonLink="#contact-form"
        height="h-[450px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Let's Talk
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question or need assistance? Our team is ready to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: <FaPhone className="text-white text-xl" />,
                label: "Phone",
                value: "0495-415 2222",
              },
              {
                icon: <FaPhone className="text-white text-xl" />,
                label: "Mobile",
                value: "7025 777 666",
              },
              {
                icon: <FaEnvelope className="text-white text-xl" />,
                label: "Email",
                value: "contactnationalhospital@gmail.com",
              },
              {
                icon: <FaHospital className="text-white text-xl" />,
                label: "National Hospital",
                value: "Mavoor Road, Calicut, Kerala, India",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-12 w-12 bg-purple-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="ml-5">
                  <h3 className="text-sm text-gray-500">{item.label}</h3>
                  <p className="text-lg font-semibold text-gray-900">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl" id="contact-form">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-700 focus:border-transparent bg-gray-50 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    placeholder="Your Mobile"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-700 focus:border-transparent bg-gray-50 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-700 focus:border-transparent bg-gray-50 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us more..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-700 focus:border-transparent bg-gray-50 outline-none transition-all resize-none"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition-all duration-300 hover:shadow-lg focus:ring-4 focus:ring-purple-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
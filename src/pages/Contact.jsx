import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import HeroSection from '../components/common/HeroSection';
import { FaPhone, FaEnvelope, FaHospital } from 'react-icons/fa';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Full name is required'),
      mobile: Yup.string().required('Mobile number is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values) => {
      // Format the form data for the alert
      const formattedDetails = `
Contact Form Submission:
Full Name: ${values.name}
Mobile: ${values.mobile}
Subject: ${values.subject}
Message: ${values.message}
      `;
      console.log(values);
      alert(formattedDetails);
      formik.resetForm();
    },
  });

  return (
    <div className="bg-gray-50">
      <HeroSection
        title="Connect With Us"
        subtitle="We're here to answer your questions and provide support. Reach out today."
        backgroundImage="/images/hero/contact-hero.jpg"
        overlayColor="from-purple-900/70 to-indigo-900/70"
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
            <form onSubmit={formik.handleSubmit} className="space-y-6">
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
                    {...formik.getFieldProps('name')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-700 focus:border-transparent bg-gray-50 outline-none transition-all"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-red-600 text-sm mt-1">{formik.errors.name}</div>
                  )}
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
                    {...formik.getFieldProps('mobile')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-700 focus:border-transparent bg-gray-50 outline-none transition-all"
                  />
                  {formik.touched.mobile && formik.errors.mobile && (
                    <div className="text-red-600 text-sm mt-1">{formik.errors.mobile}</div>
                  )}
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
                  {...formik.getFieldProps('subject')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-700 focus:border-transparent bg-gray-50 outline-none transition-all"
                />
                {formik.touched.subject && formik.errors.subject && (
                  <div className="text-red-600 text-sm mt-1">{formik.errors.subject}</div>
                  )}
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
                  {...formik.getFieldProps('message')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-700 focus:border-transparent bg-gray-50 outline-none transition-all resize-none"
                />
                {formik.touched.message && formik.errors.message && (
                  <div className="text-red-600 text-sm mt-1">{formik.errors.message}</div>
                )}
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
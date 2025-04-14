import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AppointmentForm = () => {
  const inputStyles = "mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-100 focus:border-[#B4336D] focus:ring-[#B4336D] bg-gray-50 text-gray-900 transition-all duration-200";
  const labelStyles = "block text-sm font-medium text-gray-600 mb-1";
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      department: '',
      date: '',
      time: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().required('Required'),
      department: Yup.string().required('Required'),
      date: Yup.date().required('Required'),
      time: Yup.string().required('Required'),
      message: Yup.string(),
    }),
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
      alert('Appointment request submitted successfully!');
      formik.resetForm();
    },
  });

  const departments = [
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Dermatology',
    'General Medicine',
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#B4336D] mb-2">Request an Appointment</h2>
        <p className="text-gray-600">Submit your details, and our team will contact you to confirm your booking time.</p>
      </div>
      
      <form onSubmit={formik.handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelStyles}>
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            {...formik.getFieldProps('name')}
            className={inputStyles}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-600 text-sm mt-1">{formik.errors.name}</div>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelStyles}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            {...formik.getFieldProps('email')}
            className={inputStyles}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-600 text-sm mt-1">{formik.errors.email}</div>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelStyles}>
            Mobile
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your mobile number"
            {...formik.getFieldProps('phone')}
            className={inputStyles}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-600 text-sm mt-1">{formik.errors.phone}</div>
          )}
        </div>

        {/* Department */}
        <div>
          <label htmlFor="department" className={labelStyles}>
            Select Department
          </label>
          <select
            id="department"
            {...formik.getFieldProps('department')}
            className={inputStyles}
          >
            <option value="">Select a department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          {formik.touched.department && formik.errors.department && (
            <div className="text-red-600 text-sm mt-1">{formik.errors.department}</div>
          )}
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className={labelStyles}>
            Appointment Date
          </label>
          <input
            id="date"
            type="date"
            {...formik.getFieldProps('date')}
            className={inputStyles}
          />
          {formik.touched.date && formik.errors.date && (
            <div className="text-red-600 text-sm mt-1">{formik.errors.date}</div>
          )}
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className={labelStyles}>
            Select Doctor
          </label>
          <select
            id="time"
            {...formik.getFieldProps('time')}
            className={inputStyles}
          >
            <option value="">Select a doctor</option>
            <option value="dr-smith">Dr. Smith - Cardiology</option>
            <option value="dr-jones">Dr. Jones - Neurology</option>
            <option value="dr-williams">Dr. Williams - Orthopedics</option>
            <option value="dr-brown">Dr. Brown - Pediatrics</option>
            <option value="dr-davis">Dr. Davis - General Medicine</option>
          </select>
          {formik.touched.time && formik.errors.time && (
            <div className="text-red-600 text-sm mt-1">{formik.errors.time}</div>
          )}
        </div>
      {/* </div> */}

        </div>

        <div className="mt-6">
        <label htmlFor="message" className={labelStyles}>
          Additional Notes (Optional)
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Any specific concerns or requirements?"
          {...formik.getFieldProps('message')}
          className={inputStyles}
        />
      </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-[#B4336D] text-white rounded-lg font-medium hover:bg-[#933058] transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#B4336D] focus:ring-offset-2"
          >
            Submit Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;

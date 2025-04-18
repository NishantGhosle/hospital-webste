import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AppointmentForm = () => {
  const inputStyles =
    'mt-1 block w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-purple-700 focus:border-transparent outline-none transition-all duration-300';
  const labelStyles = 'block text-sm font-medium text-gray-700 mb-2';
  const [isSubmitting, setIsSubmitting] = useState(false);

  const departments = [
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Dermatology',
    'General Medicine',
  ];

  const doctors = [
    { value: 'dr-smith', label: 'Dr. Smith - Cardiology' },
    { value: 'dr-jones', label: 'Dr. Jones - Neurology' },
    { value: 'dr-williams', label: 'Dr. Williams - Orthopedics' },
    { value: 'dr-brown', label: 'Dr. Brown - Pediatrics' },
    { value: 'dr-davis', label: 'Dr. Davis - General Medicine' },
  ];

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      department: '',
      date: '',
      doctor: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Full name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Mobile number is required'),
      department: Yup.string().required('Please select a department'),
      date: Yup.date().required('Appointment date is required').min(new Date(), 'Date must be in the future'),
      doctor: Yup.string().required('Please select a doctor'),
      message: Yup.string(),
    }),
    onSubmit: async (values) => {
      // Format the form data for the alert
      const selectedDoctor = doctors.find((doc) => doc.value === values.doctor)?.label || values.doctor;
      const formattedDetails = `
Appointment Details:
Full Name: ${values.name}
Email: ${values.email}
Mobile Number: ${values.phone}
Department: ${values.department}
Appointment Date: ${new Date(values.date).toLocaleDateString()}
Doctor: ${selectedDoctor}
Additional Notes: ${values.message || 'None'}
      `;
      console.log(values);
      console.log(formattedDetails);

      // Prepare form data for FormSubmit
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('phone', values.phone);
      formData.append('department', values.department);
      formData.append('date', new Date(values.date).toLocaleDateString());
      formData.append('doctor', selectedDoctor);
      formData.append('message', values.message || 'None');
      formData.append('_subject', 'New Appointment Request');
      formData.append('_template', 'table');
      formData.append('_next', 'https://yourwebsite.com/thank-you'); // Replace with your thank-you page URL

      try {
        setIsSubmitting(true);
        const response = await fetch('https://formsubmit.co/imailamar412@gmail.com', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`FormSubmit error: ${response.statusText}`);
        }

        formik.resetForm();
      } catch (error) {
        console.error('Form submission error:', error);
        console.log(`Failed to submit the form: ${error.message}. Please try again.`);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Book Your Appointment in Seconds
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-md max-w-2xl mx-auto">
          Your health can’t wait—and now it doesn’t have to.
        </p>
        <p className="text-gray-600 text-base md:text-md max-w-2xl mx-auto">
          [Book Now] or Call: [Insert Phone Number]
          Walk-ins welcome. Online priority slots available.
        </p>
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
              name="name"
              placeholder="Your full name"
              {...formik.getFieldProps('name')}
              className={inputStyles}
              aria-describedby={formik.touched.name && formik.errors.name ? 'name-error' : undefined}
            />
            {formik.touched.name && formik.errors.name && (
              <div id="name-error" className="text-red-600 text-sm mt-1">
                {formik.errors.name}
              </div>
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
              name="email"
              placeholder="Your email address"
              {...formik.getFieldProps('email')}
              className={inputStyles}
              aria-describedby={formik.touched.email && formik.errors.email ? 'email-error' : undefined}
            />
            {formik.touched.email && formik.errors.email && (
              <div id="email-error" className="text-red-600 text-sm mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className={labelStyles}>
              Mobile Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Your mobile number"
              {...formik.getFieldProps('phone')}
              className={inputStyles}
              aria-describedby={formik.touched.phone && formik.errors.phone ? 'phone-error' : undefined}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div id="phone-error" className="text-red-600 text-sm mt-1">
                {formik.errors.phone}
              </div>
            )}
          </div>

          {/* Department */}
          <div>
            <label htmlFor="department" className={labelStyles}>
              Department
            </label>
            <select
              id="department"
              name="department"
              {...formik.getFieldProps('department')}
              className={inputStyles}
              aria-describedby={formik.touched.department && formik.errors.department ? 'department-error' : undefined}
            >
              <option value="">Select a department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            {formik.touched.department && formik.errors.department && (
              <div id="department-error" className="text-red-600 text-sm mt-1">
                {formik.errors.department}
              </div>
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
              name="date"
              min={new Date().toISOString().split('T')[0]}
              {...formik.getFieldProps('date')}
              className={inputStyles}
              aria-describedby={formik.touched.date && formik.errors.date ? 'date-error' : undefined}
            />
            {formik.touched.date && formik.errors.date && (
              <div id="date-error" className="text-red-600 text-sm mt-1">
                {formik.errors.date}
              </div>
            )}
          </div>

          {/* Doctor */}
          <div>
            <label htmlFor="doctor" className={labelStyles}>
              Doctor
            </label>
            <select
              id="doctor"
              name="doctor"
              {...formik.getFieldProps('doctor')}
              className={inputStyles}
              aria-describedby={formik.touched.doctor && formik.errors.doctor ? 'doctor-error' : undefined}
            >
              <option value="">Select a doctor</option>
              {doctors.map((doc) => (
                <option key={doc.value} value={doc.value}>
                  {doc.label}
                </option>
              ))}
            </select>
            {formik.touched.doctor && formik.errors.doctor && (
              <div id="doctor-error" className="text-red-600 text-sm mt-1">
                {formik.errors.doctor}
              </div>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelStyles}>
            Additional Notes (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Any specific concerns or requirements?"
            {...formik.getFieldProps('message')}
            className={inputStyles}
            aria-describedby={formik.touched.message && formik.errors.message ? 'message-error' : undefined}
          />
          {formik.touched.message && formik.errors.message && (
            <div id="message-error" className="text-red-600 text-sm mt-1">
              {formik.errors.message}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition-all duration-300 hover:shadow-lg focus:ring-4 focus:ring-purple-300 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
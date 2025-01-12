/* eslint-disable react/prop-types */
import { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = ({ position }) => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    service_required: '',
    message: ''
  });

  const validateField = (name, value) => {
    switch (name) {
      case 'user_name':
        return !value.trim() ? 'Name is required' : '';
      case 'user_email':
        return !value.trim() 
          ? 'Email is required'
          : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ? 'Please enter a valid email address'
            : '';
      case 'user_phone':
        return value.trim() && !/^\+?\d{10,}$/.test(value.replace(/[-\s]/g, ''))
          ? 'Please enter a valid phone number'
          : '';
      case 'service_required':
        return !value ? 'Please select a service' : '';
      case 'message':
        return !value.trim() ? 'Message is required' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    
    if (!validateForm()) {
      setStatus({
        type: 'error',
        message: 'Please correct the errors before submitting.'
      });
      return;
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERV,
        import.meta.env.VITE_TEMP,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUB,
        }
      );

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. Please expect a response within the next 48 hours'
      });
      form.current.reset();
      setFormData({
        user_name: '',
        user_email: '',
        user_phone: '',
        service_required: '',
        message: ''
      });
      setErrors({});
      
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later or give us a call at (904) 396-6777.'
      });
      console.error('Failed to send email:', error);
    }
  };

  const containerClasses = `w-full flex ${
    position === 'left' 
      ? 'justify-start' 
      : position === 'center'
        ? 'justify-center'
        : 'justify-end'
  }`;

  const inputClasses = (fieldName) => `
    w-full rounded-md border ${errors[fieldName] ? 'border-red-500' : 'border-gray-300'} 
    p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500
    transition-colors duration-200
  `;

  return (
    <div className={containerClasses}>
      <div className="w-full max-w-md">
        <div className="rounded-lg border border-gray-200 bg-white shadow-lg">
          <div className="border-b border-gray-200 p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          </div>
          <div className="p-6">
            {status.message && (
              <div className={`mb-4 p-4 rounded-md ${
                status.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {status.message}
              </div>
            )}
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  className={inputClasses('user_name')}
                />
                {errors.user_name && (
                  <p className="text-red-500 text-sm mt-1">{errors.user_name}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  className={inputClasses('user_email')}
                />
                {errors.user_email && (
                  <p className="text-red-500 text-sm mt-1">{errors.user_email}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  value={formData.user_phone}
                  onChange={handleChange}
                  className={inputClasses('user_phone')}
                />
                {errors.user_phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.user_phone}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Service Required <span className="text-red-500">*</span>
                </label>
                <select
                  name="service_required"
                  value={formData.service_required}
                  onChange={handleChange}
                  className={inputClasses('service_required')}
                >
                  <option value="">Select a service</option>
                  <option value="IRS Representation">IRS Representation</option>
                  <option value="Bookkeeping">Bookkeeping</option>
                  <option value="Personal Taxes">Personal Taxes</option>
                  <option value="Business Taxes">Business Taxes</option>
                  <option value="Incorporation Services">Incorporation Services</option>
                </select>
                {errors.service_required && (
                  <p className="text-red-500 text-sm mt-1">{errors.service_required}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClasses('message')}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
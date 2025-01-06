/* eslint-disable react/prop-types */
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = ({ position }) => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(import.meta.env.VITE_SERV, import.meta.env.VITE_TEMP, form.current, {
          publicKey: import.meta.env.VITE_PUB,
        })
        .then(
          () => console.log('SUCCESS!'),
          (error) => console.log('FAILED...', error.text)
        );
    };
  
    // Using template literal for className concatenation
    const containerClasses = `w-full flex ${position === 'left' ? 'justify-start' : 'justify-end'}`;
  
    return (
      <div className={containerClasses}>
        <div className="w-full max-w-md">
          <div className="rounded-lg border border-gray-200 bg-white shadow-lg">
            <div className="border-b border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <div className="p-6">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="user_phone"
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
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
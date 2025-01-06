import { ContactUs } from '../Email/Email';
import './cont.css'

const ContactPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header Section */}
      <h1 id='title' className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-12 text-center tracking-tight">
        College Tax and Retirement Strategies, LLC
      </h1>
      
      {/* Contact Information Section */}
      <div className="mb-12 text-center space-y-8">
        {/* Location */}
        <div className="space-y-4 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 inline-block pb-2">
            Come See Us!
          </h2>
          <div className="bg-gradient-to-r from-white to-gray-50 p-4 rounded-lg shadow-md">
            <p className="text-xl text-gray-700 font-medium">3110 Spring Glenn Rd</p>
            <p className="text-xl text-gray-700 font-medium">Jacksonville, FL 32207</p>
          </div>
        </div>

        {/* Contact Numbers */}
        <div className="space-y-4 flex flex-col items-center">
          <div className="flex items-center space-x-3 text-xl transform hover:scale-105 transition-transform duration-300">
            <span className="text-red-500 text-2xl">📞</span>
            <a 
              href="tel:(904) 396-6777" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-semibold underline decoration-blue-400 decoration-2 underline-offset-4"
            >
              (904) 396-6777
            </a>
          </div>
          <div className="flex items-center space-x-3 text-xl transform hover:scale-105 transition-transform duration-300">
            <span className="text-red-500 text-2xl">📠</span>
            <span className="text-gray-700 font-semibold">(904) 725-9980</span>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="space-y-8 ">
        <h2 className="text-3xl font-bold text-center ml-52 text-gray-800 border-b-2 border-blue-500 inline-block pb-2 px-4 transform hover:scale-105 transition-transform duration-300">
          Send Us a Message
        </h2>
        <div className="flex justify-center">
          <ContactUs position="center" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
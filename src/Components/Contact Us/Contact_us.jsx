import { ContactUs } from '../Email/Email';
import PageHeader from '../PageHeader/PageHeader';
import './cont.css'

const ContactPage = () => {
  return (
    <>
      <PageHeader
        title='Contact Us'
        backgroundImage='/jax_back2.jpeg'
        overlayOpacity='bg-black/40'
      />
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Company Name */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          College Tax and Retirement Strategies, LLC
        </h1>

        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg">
            We are always happy to help with your tax and accounting needs. Whether you have a quick question or need detailed assistance, our team is here to provide you with the guidance and support you deserve. Don’t hesitate to reach out!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Location & Contact Info */}
          <div className="flex flex-col items-center justify-start mt-52 space-y-8">
            {/* Location */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-700 mb-3 flex items-center justify-center">
                <span className="mr-2">📍</span> Our Location
              </h2>
              <address className="text-gray-600 text-xl not-italic">
                3110 Spring Glenn Rd<br />
                Jacksonville, FL 32207
              </address>
            </div>

            {/* Contact Numbers */}
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-700 mb-3">Contact Information</h2>
              <div className="space-y-2">
                <a 
                  href="tel:(904) 396-6777" 
                  className="flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="mr-2">📞</span>
                  (904) 396-6777
                </a>
                <div className="flex items-center justify-center text-gray-600">
                  <span className="mr-2">📠</span>
                  (904) 396-6754
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <h2 className="text-xl text-center font-semibold text-gray-700 mb-6">Send Us a Message</h2>
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
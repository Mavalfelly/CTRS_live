import { MapPin, Phone } from 'lucide-react';
import MapComponent from "../MapComp/Map";

const Footer = () => {
  const taxSeasonHours = [
    { day: 'Monday', hours: '8:00am - 10:00pm' },
    { day: 'Tuesday', hours: '8:00am - 10:00pm' },
    { day: 'Wednesday', hours: '8:00am - 7:00pm' },
    { day: 'Thursday', hours: '8:00am - 10:00pm' },
    { day: 'Friday', hours: '8:00am - 10:00pm' },
    { day: 'Saturday', hours: '10:00am - 10:00pm' },
    { day: 'Sunday', hours: '10:00am - 10:00pm' }
  ];

  const nonTaxSeasonHours = [
    { day: 'Monday', hours: '8:00am - 10:00pm' },
    { day: 'Tuesday', hours: '8:00am - 10:00pm' },
    { day: 'Wednesday', hours: '8:00am - 6:00pm' },
    { day: 'Thursday', hours: '8:00am - 10:00pm' },
    { day: 'Friday', hours: '8:00am - 6:00pm' },
    { day: 'Saturday', hours: 'CLOSED' },
    { day: 'Sunday', hours: 'CLOSED' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map and Contact Info Container */}
          <div className="flex flex-col lg:flex-row gap-24 lg:w-1/2">
            {/* Map */}
            <div className="w-full lg:w-64 h-48">
              <MapComponent />
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <div>
                  <p>3110 Spring Glenn Rd</p>
                  <p>Jacksonville, FL 32207</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-500" />
                <div>
                  <p>(904) 725-9980</p>
                  <p>(904) 733-4547</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 lg:w-1/2">
            {/* Tax Season Hours */}
            <div className="flex-1">
              <h3 className="font-semibold mb-4">Tax Season Hours</h3>
              <div className="space-y-2">
                {taxSeasonHours.map((item) => (
                  <div key={item.day} className="flex justify-between gap-4">
                    <span className="font-medium">{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Non-Tax Season Hours */}
            <div className="flex-1">
              <h3 className="font-semibold mb-4">Non-Tax Season Hours</h3>
              <div className="space-y-2">
                {nonTaxSeasonHours.map((item) => (
                  <div key={item.day} className="flex justify-between gap-4">
                    <span className="font-medium">{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Moniker */}
        <div className="mt-8 pt-4 border-t border-gray-800 flex justify-between items-center">
          <div className="w-24">{/* Empty div for spacing */}</div>
          <div className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} All Rights Reserved
          </div>
          <div className="text-sm text-gray-400">
            Built by MJF
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
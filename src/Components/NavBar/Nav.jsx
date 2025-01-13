import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  let dropdownTimeout;

  return (
    <nav className="bg-white shadow-md h-20 relative z-50">
      <div className="max-w-7xl mx-auto px-4 pt-3 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand section */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/ctrs2.png" 
                alt="Company Logo" 
                className="h-52 min-w-52 flex justify-center"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-m font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-m font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-m font-medium transition-colors">
              Contact Us
            </Link>
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                clearTimeout(dropdownTimeout);
                setIsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                dropdownTimeout = setTimeout(() => setIsDropdownOpen(false), 200);
              }}
            >
              <button className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-m font-medium transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <Link
                      to="/personal_taxes"
                      className="block px-4 py-2 text-m text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Personal Taxes
                    </Link>
                  </div>
                  <div className="py-1">
                    <Link
                      to="/business_taxes"
                      className="block px-4 py-2 text-m text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Business Taxes
                    </Link>
                  </div>
                  <div className="py-1">
                    <Link
                      to="/bookkeeping"
                      className="block px-4 py-2 text-m text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Bookkeeping
                    </Link>
                  </div> 
                  <div className="py-1">
                    <Link
                      to="/inc_services"
                      className="block px-4 py-2 text-m text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Incorporation Services
                    </Link>
                  </div>
                  <div className="py-1">
                    <Link
                      to="/irs_rep"
                      className="block px-4 py-2 text-m text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      IRS Representation
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/resources" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-m font-medium transition-colors">
              Resources
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden z-50 relative bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
          >
            Contact
          </Link>
          {/* Mobile Services Menu */}
          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Services
              <ChevronRight className={`ml-2 h-4 w-4 transform transition-transform ${isMobileServicesOpen ? 'rotate-90' : ''}`} />
            </button>
            <div className={`${isMobileServicesOpen ? 'block' : 'hidden'} space-y-1`}>
              <Link
                to="/personal_taxes"
                className="block px-3 py-2 pl-6 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                - Personal Taxes
              </Link>
              <Link
                to="/business_taxes"
                className="block px-3 py-2 pl-6 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                - Business Taxes
              </Link>
              <Link
                to="/bookkeeping"
                className="block px-3 py-2 pl-6 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                - Bookkeeping
              </Link>
              <Link
                to="/inc_services"
                className="block px-3 py-2 pl-6 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                - Incorporation Services
              </Link>
              <Link
                to="/irs_rep"
                className="block px-3 py-2 pl-6 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                - IRS Representation
              </Link>
            </div>
          </div>
          <Link
            to="/resources"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
          >
            Resources
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
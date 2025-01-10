/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <>
         {/* Hero Section with Video Background */}
         <div
            className="relative flex flex-col items-center justify-center h-screen"
          >
            {/* Video Background - Added brightness filter */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-75"
            >
              <source src="/back2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Darker Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

            {/* Hero Content */}
            <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 leading-tight tracking-tight drop-shadow-lg">
                Welcome to College Tax and Retirement Stratagies
              </h1>
              <h1 className="text-3xl font-bold mb-6 leading-tight tracking-tight drop-shadow-lg">
                Jacksonville's Best Tax Preperation and Bookkeeping Firm
              </h1>
              <h2 className="text-3xl font-medium mb-4 drop-shadow-lg bg-black/30 inline-block px-6 py-2 rounded-full">
                27 Years of Quality Service
              </h2>
              <h4 className="text-xl mb-6 drop-shadow-md">Questions? We are here to help!</h4>
              <p className="text-lg font-medium">
                Call{" "}
                <a
                  href="tel:+19043696777"
                  className="text-blue-300 hover:text-blue-200 underline font-bold drop-shadow-md transition-colors duration-300"
                >
                  (904) 396-6777
                </a>{" "}
                <span className="drop-shadow-md">to schedule an appointment with us!</span>
              </p>
            </div>
          </div>

          {/* Rest of the content */}
          <div className="bg-gray-100">
            {/* Mission Statement */}
            <section
              id="Mission"
              className="text-center max-w-4xl mx-auto px-4 py-16 text-gray-700"
            >
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <hr className="border-black mb-5"/>
              <p className="text-l font-semibold leading-relaxed">
                For more than 27 years, Lyuba and her dedicated team have proudly
                served the Jacksonville community with expert tax
                preparation services. With a commitment to accuracy, professionalism,
                and personalized care, we handle everything from simple tax filings to
                intricate financial matters. No matter how straightforward or complex
                your needs may be, you can trust us to provide reliable solutions
                tailored to your unique situation.
                <br />
                <span className="text-blue-600 font-bold hover:text-blue-800">
                  Let us help you achieve financial peace of mind!
                </span>
              </p>
            </section>

            {/* Services Section */}
            <section id="servs" className="py-12">
              <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
                  Our Services
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {/* Personal Taxes */}
                  <div className="text-center bg-white p-6 shadow-md rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="flex justify-center mb-4">
                      <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full">
                        <i className="fas fa-dollar-sign"></i>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      Personal Taxes
                    </h3>
                    <p className="text-sm text-gray-600">
                      Year-round individual tax preparation, planning, and IRS notice
                      resolution. Fast, accurate, and efficient service.
                    </p>
                    <Link to='personal_taxes' className="mt-4 inline-block text-blue-600 font-bold hover:underline">
                      Learn More
                    </Link>
                  </div>

                  {/* Business Taxes */}
                  <div className="text-center bg-white p-6 shadow-md rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="flex justify-center mb-4">
                      <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full">
                        <i className="fas fa-briefcase"></i>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      Business Taxes
                    </h3>
                    <p className="text-sm text-gray-600">
                      Corporate, partnership, and sole proprietor tax filings. We
                      handle Forms 1120, 1120S, 1065, and Schedule C.
                    </p>
                    <Link to='business_taxes' className="mt-4 inline-block text-blue-600 font-bold hover:underline">
                      Learn More
                    </Link>
                  </div>

                  {/* Bookkeeping */}
                  <div className="text-center bg-white p-6 shadow-md rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="flex justify-center mb-4">
                      <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full">
                        <i className="fas fa-chart-line"></i>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      Bookkeeping
                    </h3>
                    <p className="text-sm text-gray-600">
                      Comprehensive monthly, quarterly, and yearly bookkeeping
                      services to ease your business operations.
                    </p>
                    <Link to='bookkeeping' className="mt-4 inline-block text-blue-600 font-bold hover:underline">
                      Learn More
                    </Link>
                  </div>

                  {/* Incorporation Services */}
                  <div className="text-center bg-white p-6 shadow-md rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="flex justify-center mb-4">
                      <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full">
                        <i className="fas fa-building"></i>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      Incorporation Services
                    </h3>
                    <p className="text-sm text-gray-600">
                      Setup your free initial consultation to form a new business,
                      whether it's a corporation or LLC.
                    </p>
                    <Link to='inc_services' className="mt-4 inline-block text-blue-600 font-bold hover:underline">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
    );
}

export default Landing;
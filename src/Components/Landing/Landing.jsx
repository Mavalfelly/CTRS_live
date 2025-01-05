/* eslint-disable react/no-unescaped-entities */

const Landing = () => {
    return (
        <>
          {/* Landing Section */}
          <div
            id="landing"
            className="flex flex-col items-center justify-start min-h-screen bg-gray-100 text-gray-800 px-4 text-center"
          >
            <h1 className="text-4xl font-bold mb-4 text-blue-800">
              Jacksonville's Best Accounting and Bookkeeping Firm
            </h1>
            <h2 className="text-2xl font-medium mb-2">27 Years of Quality Service</h2>
            <h4 className="text-lg mb-4 text-gray-600">Questions? We are here to help!</h4>
            <p className="text-base">
              Call{" "}
              <a
                href="tel:+19043696777"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                (904) 396-6777
              </a>{" "}
              to schedule an appointment with us!
            </p>
      
            {/* Mission Statement */}
            <section
              id="Mission"
              className="text-center max-w-4xl mx-auto mt-8 px-4 py-6 bg-gray-50 text-gray-700 rounded-md shadow-md"
            >
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-base leading-relaxed">
                For more than 27 years, Lyuba and her dedicated team have proudly
                served the Jacksonville community with expert accounting and tax
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
            <section id="servs" className="py-12 bg-gray-100">
              <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
                  Our Services
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {/* Personal Taxes */}
                  <div className="text-center bg-white p-6 shadow-md rounded-lg">
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
                    <a href="#" className="mt-4 inline-block text-blue-600 font-bold hover:underline">
                      Learn More
                    </a>
                  </div>
      
                  {/* Business Taxes */}
                  <div className="text-center bg-white p-6 shadow-md rounded-lg">
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
                    <a href="#" className="mt-4 inline-block text-blue-600 font-bold hover:underline">
                      Learn More
                    </a>
                  </div>
      
                  {/* Bookkeeping */}
                  <div className="text-center bg-white p-6 shadow-md rounded-lg">
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
                    <a href="#" className="mt-4 inline-block text-blue-600 font-bold hover:underline">
                      Learn More
                    </a>
                  </div>
      
                  {/* Incorporation Services */}
                  <div className="text-center bg-white p-6 shadow-md rounded-lg">
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
                      whether it’s a corporation or LLC.
                    </p>
                    <a href="#" className="mt-4 inline-block text-blue-600 font-bold hover:underline">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      );
      
}

export default Landing;

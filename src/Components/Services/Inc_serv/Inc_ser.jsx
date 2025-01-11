/* eslint-disable react/no-unescaped-entities */
import Cuds from "../../Contact Us/ContactButton";
import PageHeader from "../../PageHeader/PageHeader";


const IncPage = () => {
    return (
      <>
        <PageHeader
            title='Incorperation Services'
            backgroundImage='/jax_back2.jpeg'
            overlayOpacity='bg-black/40'
        />
        <div className="max-w-4xl mb-10 mx-auto p-6">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-gray-900">
                  Start Your New Business With Confidence
              </h1>
              <p className="text-gray-700">
                  At CTRS, we provide professional incorporation services designed to establish your business on a strong foundation. Our experienced team will guide you through the entire process, ensuring compliance with legal requirements and positioning your business for success.
              </p>
            </div>
    
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Comprehensive Business Formation</h2>
              <p className="text-gray-700">
                  Starting a business involves navigating numerous legal and administrative steps. Our business formation services handle everything from selecting the right entity to filing all required documents. Whether you're establishing a corporation, LLC, or another entity type, we tailor our support to meet your unique needs and goals.
              </p>
            </div>
    
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Entity Selection Guidance: LLC, Corporations, and More</h2>
              <p className="text-gray-700">
                  Choosing the right business entity is critical to your company's success, impacting taxes, liability, and operations. We provide detailed guidance on entity types, such as corporations, LLCs, partnerships, and sole proprietorships. Our expert advice ensures you make an informed choice that aligns with your business vision.
              </p>
            </div>
    
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Incorporation Document Preparation</h2>
              <p className="text-gray-700">
                  Accurate and complete documentation is key to successful business incorporation. We handle the preparation and filing of essential documents, including Articles of Incorporation, bylaws, and organizational meeting minutes. Our meticulous approach ensures compliance with state requirements and eliminates unnecessary delays.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">EIN and Tax ID Services</h2>
              <p className="text-gray-700">
                  An Employer Identification Number (EIN) is vital for tax filings and business operations. We simplify the process by obtaining your EIN from the IRS, ensuring your business is properly registered for tax purposes. This efficient service helps you start operations without unnecessary complications.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">State and Federal Compliance Support</h2>
              <p className="text-gray-700">
                  Remaining compliant with state and federal regulations is essential for your business's long-term success. We provide ongoing support, including filing annual reports, maintaining corporate records, and meeting state-specific requirements. With our help, you can confidently navigate the regulatory landscape and focus on growing your business.
              </p>
            </div>
          </div>
        </div>
        <Cuds/>
      </>
    );
  };
  
  export default IncPage;
  
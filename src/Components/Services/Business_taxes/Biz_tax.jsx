/* eslint-disable react/no-unescaped-entities */
import PageHeader from "../../PageHeader/PageHeader";


const BusinessTaxesPage = () => {
  return (
    <>
    <PageHeader
            title='Business Tax Services'
            backgroundImage='/jax_back2.jpeg'
            overlayOpacity='bg-black/40'
        />
      <div className="max-w-4xl mb-20 mx-auto p-6">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              We Help Local Businesses Solve Tax Problems & Plan for The Future.
            </h1>
            <p className="text-gray-700">
              At CTRS, we provide tailored business tax services specifically designed for small to medium-sized businesses. Our skilled team is dedicated to simplifying the complexities of business taxation, ensuring full compliance, and maximizing your tax efficiency.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Tax Preparation for Local Businesses</h2>
            <p className="text-gray-700">
              Our thorough tax preparation services encompass every aspect of business tax filings, including federal, state, and local returns. We prioritize accuracy and timely submissions, tailoring our approach to align with your business operations and financial objectives. By maximizing deductions and credits, we help minimize your tax burden effectively.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Strategic Tax Planning</h2>
            <p className="text-gray-700">
              Effective tax planning is essential for maintaining your business's financial health. We offer strategic tax planning services designed to help you manage and forecast your tax obligations year-round. Our proactive approach focuses on identifying tax-saving opportunities, recommending optimal tax strategies, and keeping you prepared for changes in tax laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Payroll Tax Services</h2>
            <p className="text-gray-700">
              Managing payroll taxes can be both complex and time-consuming. Our comprehensive payroll tax services include accurate payroll tax calculations, timely filings, and full compliance with regulations. We ensure your payroll taxes are handled efficiently, helping you avoid penalties and unnecessary costs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Sales Tax Compliance</h2>
            <p className="text-gray-700">
              Navigating sales tax regulations can be challenging for businesses of all sizes. We provide expert guidance and services to ensure your sales tax filings are accurate and compliant with local and state requirements. From calculating sales tax to managing filings, we help you avoid penalties and streamline your processes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Business Tax Resolution</h2>
            <p className="text-gray-700">
              Struggling with unresolved tax issues or disputes? Our business tax resolution services are here to help. We work with you to address IRS or state tax challenges, develop effective solutions, and bring your business back into compliance, giving you peace of mind.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessTaxesPage;



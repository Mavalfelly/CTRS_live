/* eslint-disable react/no-unescaped-entities */
import Cuds from "../../Contact Us/ContactButton";
import PageHeader from "../../PageHeader/PageHeader";
const IRSPage = () => {
    return (
      <>
        <PageHeader
            title='IRS Representation'
            backgroundImage='/Jax_back1.jpg'
            overlayOpacity='bg-black/40'
        />
        <div className="max-w-4xl mb-6 mx-auto p-6">
          <div className="space-y-8 mb-10">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-gray-900">
                Professional IRS Representation Services You Can Trust
              </h1>
              <p className="text-gray-700">
                At CTRS, we specialize in providing expert IRS representation to individuals and businesses facing tax-related challenges. Our experienced team is committed to protecting your rights, resolving disputes, and achieving the best possible outcome for your situation.
              </p>
            </div>
    
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Audit Representation</h2>
              <p className="text-gray-700">
                Receiving an audit notice from the IRS can be stressful, but you don't have to face it alone. We provide professional audit representation, working directly with the IRS on your behalf. Our team ensures that all documentation is accurate and that your rights are fully protected throughout the process.
              </p>
            </div>
    
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Tax Debt Resolution</h2>
              <p className="text-gray-700">
                Struggling with unpaid taxes or mounting tax debt? We help negotiate with the IRS to resolve your tax liabilities. From installment agreements to offers in compromise, we explore all available options to find a solution that works for you.
              </p>
            </div>
    
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Offer in Compromise</h2>
              <p className="text-gray-700">
                An Offer in Compromise (OIC) allows taxpayers to settle their tax debt for less than the full amount owed. If you qualify, we can help you navigate this complex process and negotiate a reduced settlement with the IRS. Our team will assess your financial situation and work on your behalf to secure a favorable offer that provides you with relief from overwhelming tax debt.
              </p>
            </div>
    
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Penalty Abatement</h2>
              <p className="text-gray-700">
                If you've been hit with IRS penalties, we can help. Our penalty abatement services focus on reducing or eliminating penalties by demonstrating reasonable cause or addressing compliance issues. Let us help you minimize the financial impact of penalties on your finances.
              </p>
            </div>
    
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Wage Garnishment and Levy Relief</h2>
              <p className="text-gray-700">
                Facing wage garnishments, bank levies, or property liens from the IRS? Our experts can assist in negotiating relief and releasing these enforcement actions. We work quickly to protect your assets and find manageable solutions to resolve your tax issues.
              </p>
            </div>
    
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">IRS Appeals</h2>
              <p className="text-gray-700">
                If you disagree with an IRS decision, we can guide you through the appeals process. Our team prepares and presents your case to the IRS Appeals Office, working to achieve a fair resolution while protecting your interests.
              </p>
            </div>
          </div>
          <Cuds/>
        </div>  
      </>  
      );
  };
  
  export default IRSPage;
  
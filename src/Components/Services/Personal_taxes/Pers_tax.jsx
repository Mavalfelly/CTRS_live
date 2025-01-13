/* eslint-disable react/no-unescaped-entities */
import Cuds from "../../Contact Us/ContactButton";
import PageHeader from "../../PageHeader/PageHeader";


const PerTaxesPage = () => {
    return (
        <>
            <PageHeader
                title='Personal Tax Services'
                backgroundImage='/Jax_back1.jpg'
                overlayOpacity='bg-black/40'
            />
            <div className="max-w-4xl mb-6 mx-auto p-6">
                <div className="space-y-8 mb-10">
                    <div>
                        <h1 className="text-4xl font-bold mb-4 text-gray-900">
                            Tax Problems? Questions? We've Seen It All and Are Ready to Help.
                        </h1>
                        <p className="text-gray-700">
                            At CTRS, we specialize in offering comprehensive personal tax services tailored to fit your unique financial needs. Our experienced team is dedicated to ensuring you receive the maximum benefits and deductions available, all while maintaining full compliance with tax laws and regulations.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-3 text-gray-900">Tax Return Preparation</h2>
                        <p className="text-gray-700">
                            Our personalized tax preparation service guarantees that your tax returns are accurate and optimized for the best possible outcome. We take the time to understand your financial situation and goals, allowing us to identify opportunities for tax savings and credits. From straightforward tax filings to more complex returns, we handle it all with precision and care.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-3 text-gray-900">Tax Planning Strategies</h2>
                        <p className="text-gray-700">
                            Effective tax planning is vital for minimizing your tax liability and maximizing savings. Our experts work with you throughout the year to develop strategies aligned with your financial objectives. By anticipating changes in tax laws and your personal circumstances, we help you stay prepared and make informed decisions.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-3 text-gray-900">Tax Resolution Services</h2>
                        <p className="text-gray-700">
                            If you're facing tax issues such as unpaid taxes, penalties, or complex tax questions, we're here to help. Our tax resolution services are designed to address your concerns, find effective solutions, and provide peace of mind. We work closely with you to develop a plan that resolves issues quickly and ensures compliance moving forward.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-3 text-gray-900">Amended Tax Returns</h2>
                        <p className="text-gray-700">
                            Mistakes on previously filed tax returns? We can help. Our amended tax return services ensure that any errors are corrected promptly, helping you claim additional refunds or address discrepancies with the IRS. Let us handle the complexities and get your tax filings back on track.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-3 text-gray-900">Year-Round Tax Support</h2>
                        <p className="text-gray-700">
                            Taxes aren’t just a once-a-year concern. We provide year-round tax support to help you stay organized and prepared. Whether you have questions, need advice on financial decisions, or require assistance with quarterly filings, our team is here to support you every step of the way.
                        </p>
                    </div>
                </div>
                <Cuds/>
            </div>
            
        </>
    );
};

export default PerTaxesPage;
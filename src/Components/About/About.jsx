/* eslint-disable react/no-unescaped-entities */
import { ContactUs } from '../Email/Email';

const About = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <section className="space-y-12 mb-12">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-white to-gray-50 rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">
                        Welcome to CTRS
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700 font-light">
                        For <span className="font-semibold text-blue-600">more than 27 years</span>, 
                        Lyuba and her dedicated team have proudly served the Jacksonville community 
                        with expert accounting and tax preparation services. With a commitment to 
                        <span className="font-semibold text-blue-600"> accuracy, professionalism, and personalized care</span>, 
                        we handle everything from simple tax filings to intricate financial matters. 
                        No matter how straightforward or complex your needs may be, you can trust us 
                        to provide reliable solutions tailored to your unique situation.
                    </p>
                </div>

                {/* Why Choose Us Section */}
                <div className="bg-gradient-to-l from-white to-gray-50 rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">
                        Why Choose Us
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700 font-light">
                        Our mission is to provide <span className="font-semibold text-blue-600">reliable, high-quality</span> accounting 
                        and tax services that empower our clients to achieve financial success and peace of mind. 
                        With a focus on <span className="font-semibold text-blue-600">expertise, personalized support, 
                        and meticulous attention to detail</span>, we are dedicated to managing your finances 
                        with care and precision. Partner with us for a brighter financial future.
                    </p>
                </div>

                {/* Let's Work Together Section */}
                <div className="bg-gradient-to-r from-white to-gray-50 rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">
                        Let's Work Together
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700 font-light">
                        Reach out to us today by calling{' '}
                        <a 
                            href="tel:+19043696777" 
                            className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 underline"
                        >
                            (904) 396-6777
                        </a>
                        {' '}or filling out the contact form below. We're eager to assist you, resolve 
                        your challenges, and guide you toward achieving your goals. Let's work together 
                        to create a successful future.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <div className="mt-12 bg-white rounded-lg shadow-xl p-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Get in Touch
                </h2>
                <ContactUs position="center" />
            </div>
        </div>
    );
};

export default About;
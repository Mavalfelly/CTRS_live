/* eslint-disable react/no-unescaped-entities */
import { ContactUs } from '../Email/Email';
import PageHeader from '../PageHeader/PageHeader';

const About = () => {
    return (
        <div className='bg-gradient-to-b from-blue-50 to-white'>
            <PageHeader
                title='About Us'
                backgroundImage='/Jax_back1.jpg'
                overlayOpacity='bg-black/40'
            />
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Company Name */}
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    College Tax and Retirement Strategies, LLC
                </h1>

                <div className="space-y-16">
                    {/* Welcome Section */}
                    <section className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                            Welcome to CTRS
                        </h2>
                        <p className="text-gray-600 text-lg">
                            For <span className="text-blue-600">more than 27 years</span>, 
                            Lyuba and her dedicated team have proudly served the Jacksonville community 
                            with expert accounting and tax preparation services. With a commitment to 
                            <span className="text-blue-600"> accuracy, professionalism, and personalized care</span>, 
                            we handle everything from simple tax filings to intricate financial matters. 
                            No matter how straightforward or complex your needs may be, you can trust us 
                            to provide reliable solutions tailored to your unique situation.
                        </p>
                    </section>

                    {/* Why Choose Us Section */}
                    <section className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                            Why Choose Us
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Our mission is to provide <span className="text-blue-600">reliable, high-quality</span> accounting 
                            and tax services that empower our clients to achieve financial success and peace of mind. 
                            With a focus on <span className="text-blue-600">expertise, personalized support, 
                            and meticulous attention to detail</span>, we are dedicated to managing your finances 
                            with care and precision. Partner with us for a brighter financial future.
                        </p>
                    </section>

                    {/* Let's Work Together Section */}
                    <section className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                            Let's Work Together
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Reach out to us today by calling{' '}
                            <a 
                                href="tel:+19043696777" 
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                (904) 396-6777
                            </a>
                            {' '}or filling out the contact form below. We're eager to assist you, resolve 
                            your challenges, and guide you toward achieving your goals. Let's work together 
                            to create a successful future.
                        </p>
                    </section>

                    {/* Contact Form Section */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center">
                            Get in Touch
                        </h2>
                        <ContactUs position="center" />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import Image from 'next/image';

const Contact: React.FC = () => {
    return (
        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 py-8 px-4 sm:px-6 lg:px-8 shadow-lg">
            <div className="flex items-center justify-center sm:justify-start mb-8 lg:mb-24 md:mb-12 sm:mb-12">
                <div className="max-w-lg mx-auto text-center sm:text-left">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 md:text-4xl">
                        Contact Information
                    </h2>
                    <div className="mt-8 text-left">
                        <p className="text-lg font-semibold text-gray-800">Fully Licensed & Insured</p>
                        <p className="mt-2 text-gray-800">
                            <strong>Nurul Karim</strong> <br /> President & CEO
                        </p>
                        <p className="mt-2 text-gray-800">
                            <strong>Zayan Contracting LLC</strong> <br /> General Contractor
                        </p>
                        <p className="mt-2 text-gray-800">Free Estimates</p>
                        <p className="mt-2 text-gray-800">zayancontracting2024@gmail.com</p>
                        <p className="mt-2 text-gray-800">82 Louisa St. Brooklyn NY 11218</p>
                        <p className="mt-2 text-gray-800">
                            <a href="tel:929-539-9509" className="text-blue-600 hover:underline">929-539-9509</a>
                        </p>
                    </div>
                    <div className="mt-6">
                        <a
                            href="tel:929-539-9509"
                            className="inline-block rounded bg-blue-600 px-8 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative h-40 sm:h-[400px]">
                <Image
                    alt="Contact Image"
                    src="/contact.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
        </section>
    );
};

export default Contact;

import React from 'react';
import Image from 'next/image';

const Projects: React.FC = () => {
    return (
        <section className="bg-white py-8">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <span className="relative flex justify-center py-8 mb-10">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                    ></div>

                    <span className="relative z-10 bg-white px-6 text-3xl font-bold text-gray-900 text-center">
                        Our Project
                    </span>
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative w-full h-64">
                        <Image
                            src="/g1.jpg"
                            alt="Image 1"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="relative w-full h-64">
                        <Image
                            src="/g2.jpg"
                            alt="Image 2"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="relative w-full h-64">
                        <Image
                            src="/g3.jpg"
                            alt="Image 3"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="relative w-full h-64">
                        <Image
                            src="/g4.jpg"
                            alt="Image 4"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;

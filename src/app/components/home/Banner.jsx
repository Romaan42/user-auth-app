import Link from "next/link";
import React from "react";

const Banner = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('banner.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/70"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Hi, I'm <span className="text-blue-400">Roman Khan</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-4 text-gray-200">
                        Web Developer &amp; React.js Specialist
                    </p>
                    <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
                        Passionate about creating beautiful, functional, and user-friendly
                        web experiences using React.js, Node.js, Express.js, mongoDb, mySQL and Next.js. Let's
                        build something amazing together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                            href="/project"
                        >
                            View My Projects
                        </Link>
                        <Link
                            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                            href="/contact"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-arrow-down-line text-2xl"></i>
                </div>
            </div>
        </section>
    );
};

export default Banner;

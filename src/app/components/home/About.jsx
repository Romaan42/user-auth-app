import React from "react";
import Image from "next/image";

export default function About() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            I'm Roman Khan, a passionate web developer with expertise in Nodejs, Express js, MongoDb, React js and Next js. I love creating beautiful,
                            functional, and user-friendly web experiences that make a real
                            difference.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            With a strong foundation in frontend technologies and a keen eye
                            for design, I specialize in building responsive web applications
                            that work seamlessly across all devices and browsers.
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                            When I'm not coding, you can find me exploring new technologies,
                            contributing to open-source projects, or sharing knowledge with
                            the developer community.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center p-4 bg-blue-50 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600 mb-2">50+</div>
                                <div className="text-gray-600">Projects Completed</div>
                            </div>
                            <div className="text-center p-4 bg-green-50 rounded-lg">
                                <div className="text-2xl font-bold text-green-600 mb-2">3+</div>
                                <div className="text-gray-600">Years Experience</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                            alt="Roman Khan - Web Developer"
                            className="rounded-2xl shadow-2xl w-full h-[500px] object-cover object-top"
                            src="/my-image.jpg"
                            width={400}
                            height={400}
                        />
                        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-semibold text-gray-700">
                                    Available for projects
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";



export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 font-pacifico">Roman Khan</h3>
                        <p className="text-gray-300 mb-4">
                            Passionate web developer specializing in React.js and modern web
                            technologies. Creating beautiful, functional, and user-friendly
                            web experiences.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            <a
                                href="/"
                                className="text-gray-300 hover:text-white transition-colors block cursor-pointer"
                            >
                                Home
                            </a>
                            <a
                                href="/projects"
                                className="text-gray-300 hover:text-white transition-colors block cursor-pointer"
                            >
                                Projects
                            </a>
                            <a
                                href="/resume"
                                className="text-gray-300 hover:text-white transition-colors block cursor-pointer"
                            >
                                Resume
                            </a>
                            <a
                                href="/contact"
                                className="text-gray-300 hover:text-white transition-colors block cursor-pointer"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/in/romaan-khan/" target="_blank"
                                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                            >
                                <div className="text-2xl w-6 h-6 flex items-center justify-center">
                                    <FaLinkedinIn />
                                </div>
                            </a>
                            <a
                                href="https://github.com/Romaan42" target="_blank"
                                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                            >
                                <div className="text-2xl w-6 h-6 flex items-center justify-center">
                                    <FaGithub />
                                </div>
                            </a>
                            <a
                                href="https://x.com/romaan4103" target="_blank"
                                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                            >
                                <div className="text-2xl w-6 h-6 flex items-center justify-center">
                                    <FaTwitter />
                                </div>
                            </a>
                            <a
                                href="romaan4244@gmail.com" target="_blank"
                                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                            >
                                <div className="text-2xl w-6 h-6 flex items-center justify-center">
                                    <IoMdMail />
                                </div>
                            </a>
                            <a
                                href="https://wa.me/+923416479008" target="_blank"
                                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                            >
                                <div className="text-2xl w-6 h-6 flex items-center justify-center">
                                    <FaWhatsapp />
                                </div>
                            </a>
                            <a
                                href="https://www.facebook.com/roman.khan.538556" target="_blank"
                                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                            >
                                <div className="text-2xl w-6 h-6 flex items-center justify-center">
                                    <FaFacebook />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-300">
                        © 2024 Roman Khan. All rights reserved. Built with React &amp;
                        Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
}

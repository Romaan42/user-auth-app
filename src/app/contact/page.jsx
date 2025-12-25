import React from "react";
import { FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import FormData from "../components/contact/FormData";


const ContactPage = () => {
    return (
        <main>
            <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-32 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                        Have a project in mind? Let's discuss how we can work together to
                        create something amazing with MERN stack and modern web technologies.
                    </p>
                </div>
            </section>
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Send Me a Message
                            </h2>
                            <FormData />
                        </div>
                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Let's Connect
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    I'm always excited to discuss new projects and opportunities.
                                    Whether you need a MERN stack developer, have questions about
                                    web development, or just want to say hello, I'd love to hear
                                    from you.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <IoMailOutline />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                                Email
                                            </h3>
                                            <p className="text-blue-600 font-medium mb-1">
                                                romaan4244@email.com
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                Send me an email and I'll respond within 24 hours
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <MdOutlinePhone />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                                Phone
                                            </h3>
                                            <p className="text-blue-600 font-medium mb-1">
                                                +92 346 9715695
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                Available Monday to Friday, 9 AM - 6 PM EST
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <IoLocationOutline />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                                Location
                                            </h3>
                                            <p className="text-blue-600 font-medium mb-1">Dagi mukkaram khan, Tarnab, district & tehsil Charsadda</p>
                                            <p className="text-gray-600 text-sm">
                                                Open to remote work and local collaborations
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Me</h3>
                                <p className="text-gray-600 mb-6">
                                    Stay connected and see my latest work and insights about web
                                    development.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <a
                                        href="#"
                                        className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all cursor-pointer"
                                    >
                                        <div className="w-8 h-8 flex items-center justify-center text-blue-600">
                                            <FaLinkedinIn />
                                        </div>
                                        <span className="ml-3 font-medium text-gray-700">LinkedIn</span>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all cursor-pointer"
                                    >
                                        <div className="w-8 h-8 flex items-center justify-center text-gray-800">
                                            <FaGithub />
                                        </div>
                                        <span className="ml-3 font-medium text-gray-700">GitHub</span>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all cursor-pointer"
                                    >
                                        <div className="w-8 h-8 flex items-center justify-center text-blue-400">
                                            <FaXTwitter />
                                        </div>
                                        <span className="ml-3 font-medium text-gray-700">Twitter</span>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all cursor-pointer"
                                    >
                                        <div className="w-8 h-8 flex items-center justify-center text-pink-500">
                                            <FaDribbble />
                                        </div>
                                        <span className="ml-3 font-medium text-gray-700">Dribbble</span>
                                    </a>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Quick Response
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    I typically respond to all inquiries within 24 hours. For
                                    urgent projects, feel free to mention it in your message.
                                </p>
                                <div className="flex items-center text-green-600">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                    <span className="font-medium">Available for new projects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;

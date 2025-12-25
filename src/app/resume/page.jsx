import React from "react";
import SkillsSection from "../components/home/SkillsSection";

const ResumePage = () => {

    return (
        <main>
            <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-32 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Resume</h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
                            Experienced web developer with expertise in React.js, Node.js, Express.js, mongoDb, Next.js and modern frontend and backend technologies
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
                        >
                            <div className="w-5 h-5 flex items-center justify-center mr-2">
                                <i className="ri-download-line"></i>
                            </div>
                            Download PDF
                        </a>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Work Experience
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            My professional journey in web development and React.js
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                        <div className="space-y-12">
                            <div className="relative flex items-start">
                                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                                <div className="ml-20 bg-gray-50 rounded-xl p-8 flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                                Senior Frontend Developer
                                            </h3>
                                            <p className="text-lg text-blue-600 font-semibold">
                                                TechFlow Solutions
                                            </p>
                                        </div>
                                        <div className="text-right mt-2 md:mt-0">
                                            <p className="text-gray-600 font-medium">
                                                2022 - Present
                                            </p>
                                            <p className="text-gray-500">Remote</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Lead development of React.js applications serving 100K+
                                                users
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Architect and implement responsive web interfaces using
                                                HTML5, CSS3, and JavaScript
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Collaborate with UX/UI designers to create pixel-perfect
                                                implementations
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Mentor junior developers and conduct code reviews
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Optimize application performance resulting in 40% faster
                                                load times
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative flex items-start">
                                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                                <div className="ml-20 bg-gray-50 rounded-xl p-8 flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                                Frontend Developer
                                            </h3>
                                            <p className="text-lg text-blue-600 font-semibold">
                                                Digital Innovations Ltd
                                            </p>
                                        </div>
                                        <div className="text-right mt-2 md:mt-0">
                                            <p className="text-gray-600 font-medium">2021 - 2022</p>
                                            <p className="text-gray-500">New York, NY</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Developed and maintained React.js components for
                                                e-commerce platform
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Implemented responsive designs using CSS3 and modern
                                                JavaScript
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Integrated RESTful APIs and handled state management
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Participated in agile development processes and sprint
                                                planning
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Contributed to improving code quality and development
                                                workflows
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative flex items-start">
                                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                                <div className="ml-20 bg-gray-50 rounded-xl p-8 flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                                Junior Web Developer
                                            </h3>
                                            <p className="text-lg text-blue-600 font-semibold">
                                                Creative Web Studio
                                            </p>
                                        </div>
                                        <div className="text-right mt-2 md:mt-0">
                                            <p className="text-gray-600 font-medium">2020 - 2021</p>
                                            <p className="text-gray-500">Los Angeles, CA</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Built responsive websites using HTML5, CSS3, and
                                                JavaScript
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Assisted in React.js development and component creation
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Collaborated with designers to implement user interfaces
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Performed cross-browser testing and bug fixes
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Learned and applied modern web development best
                                                practices
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Education &amp; Certifications
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Academic background and professional certifications in web
                            development
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">
                                Education
                            </h3>
                            <div className="space-y-8">
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                                                Bachelor of Science in Computer Science
                                            </h4>
                                            <p className="text-lg text-blue-600 font-semibold mb-1">
                                                University of Technology
                                            </p>
                                            <p className="text-gray-500">San Francisco, CA</p>
                                        </div>
                                        <span className="text-gray-600 font-medium whitespace-nowrap ml-4">
                                            2016 - 2020
                                        </span>
                                    </div>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Graduated Magna Cum Laude with 3.8 GPA
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Specialized in Web Development and Software Engineering
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Relevant Coursework: Data Structures, Algorithms, Web
                                                Programming
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                President of Computer Science Student Association
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                                                Full Stack Web Development Bootcamp
                                            </h4>
                                            <p className="text-lg text-blue-600 font-semibold mb-1">
                                                CodeAcademy Pro
                                            </p>
                                            <p className="text-gray-500">Online</p>
                                        </div>
                                        <span className="text-gray-600 font-medium whitespace-nowrap ml-4">
                                            2019
                                        </span>
                                    </div>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Intensive 6-month program focused on modern web
                                                technologies
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Hands-on projects using React.js, JavaScript, HTML5, and
                                                CSS3
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Built 10+ full-stack applications during the program
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700">
                                                Top 5% of graduating className
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">
                                Certifications
                            </h3>
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">
                                                React Developer Certification
                                            </h4>
                                            <p className="text-blue-600 font-semibold mb-1">
                                                Meta (Facebook)
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Credential ID: META-RD-2023-001
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                                2023
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">
                                                JavaScript Advanced Certification
                                            </h4>
                                            <p className="text-blue-600 font-semibold mb-1">
                                                Mozilla Developer Network
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Credential ID: MDN-JS-2022-045
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                                2022
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-gray-900 mb-2">
                                                Responsive Web Design Certification
                                            </h4>
                                            <p className="text-blue-600 font-semibold mb-1">
                                                freeCodeCamp
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Credential ID: FCC-RWD-2021-789
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                                2021
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                                        Continuous Learning
                                    </h4>
                                    <p className="text-gray-700 mb-4">
                                        I'm committed to staying updated with the latest web
                                        development trends and technologies.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                            React 18
                                        </span>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                            Next.js 14
                                        </span>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                            TypeScript
                                        </span>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                            Tailwind CSS
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Skills Overview
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive skill set in modern web development technologies and
                            practices
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">
                                Technical Skills
                            </h3>

                            <SkillsSection />
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    Soft Skills
                                </h3>
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Problem Solving</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Team Collaboration</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Project Management</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Communication</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Attention to Detail</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Time Management</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Adaptability</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span className="text-gray-700">Leadership</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    Tools &amp; Software
                                </h3>
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm">
                                            VS Code
                                        </span>
                                        <span className="px-3 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm">
                                            Figma
                                        </span>
                                        <span className="px-3 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm">
                                            Chrome DevTools
                                        </span>
                                        <span className="px-3 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm">
                                            Postman
                                        </span>
                                        <span className="px-3 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm">
                                            Webpack
                                        </span>
                                        <span className="px-3 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm">
                                            npm/yarn
                                        </span>
                                        <span className="px-3 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm">
                                            ESLint
                                        </span>
                                        <span className="px-3 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm">
                                            Prettier
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Ready to Work Together?
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                            I'm always interested in new opportunities and exciting projects.
                            Let's discuss how I can contribute to your team's success.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ResumePage;

import React from "react";
import { FaCss3, FaDatabase, FaGit, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { FaTabletScreenButton } from "react-icons/fa6";

export default function SkillsSection() {
    let skills = [
        { name: "HTML5", icon: <FaHtml5 />, proficiency: 95 },
        {
            name: "CSS3",
            icon: <FaCss3 />,
            proficiency: 90,
        },
        {
            name: "JavaScript",
            icon: <IoLogoJavascript />,
            proficiency: 88,
        },
        { name: "React.js", icon: <FaReact />, proficiency: 92 },
    ];

    let frameWorks = [
        { name: "Node js", icon: <FaNodeJs />, proficiency: 90 },
        { name: "Express js", icon: "EX", proficiency: 80 },
        {
            name: "MongoDb",
            icon: <FaDatabase />,
            proficiency: 95,
        },
        { name: "Next.js", icon: <RiNextjsFill />, proficiency: 91 },
    ];


    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Skills &amp; Expertise
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Proficient in modern web development technologies with a focus on
                        creating responsive and user-friendly applications.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">
                            Frontend Technologies
                        </h3>
                        <div className="space-y-6">
                            {skills.map((skill, i) => (
                                <div key={"skill" + i} className="flex items-center">
                                    <div className="text-[22px] text-blue-600 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mr-4">
                                        {skill.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-lg font-[300] text-gray-900">
                                                {skill.name}{" "}
                                            </span>
                                            <span className="text-sm text-gray-600">
                                                {skill.proficiency}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                                                style={{ width: skill.proficiency + "%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">
                            Backend Technologies
                        </h3>
                        <div className="space-y-6">
                            {frameWorks.map((skill, i) => (
                                <div key={"skill" + i} className="flex items-center">
                                    <div className="text-[22px] text-blue-600 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mr-4">
                                        {skill.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-lg font-[300] text-gray-900">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm text-gray-600">
                                                {skill.proficiency}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                                                style={{ width: skill.proficiency + "%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

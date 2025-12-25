import React from 'react'
import { FaCss3Alt, FaDatabase, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { RiJavascriptFill, RiNextjsFill } from 'react-icons/ri'

export default function Teach() {
    const technologies = [
        { name: 'HTML5', icon: <FaHtml5 className='text-orange-500 text-4xl' /> },
        { name: 'CSS3', icon: <FaCss3Alt className='text-4xl' /> },
        { name: 'JavaScript', icon: <RiJavascriptFill className='text-yellow-500 text-4xl' /> },
        { name: 'React.js', icon: <FaReact className='text-blue-400 text-4xl' /> },
        { name: 'Node.js', icon: <FaNodeJs className='text-green-500 text-4xl' /> },
        { name: 'MongoDb', icon: <FaDatabase className='text-green-600 text-4xl' /> },
        { name: 'MySQL', icon: <FaDatabase className='text-4xl' /> },
        { name: 'Next.js', icon: <RiNextjsFill className='text-gray-500 text-4xl' /> },
    ]
    return (
        <div className='bg-gray-50 my-20'>
            <h1 className='bg-gray-50 mb-4 text-center text-2xl font-bold text-blue-600'>Technologies I Teach</h1>
            <div>
                <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 p-4'>
                    {technologies.map((tech, index) => (
                        <li key={index} className='flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
                            <div className='text-5xl text-blue-600 mb-2'>{tech.icon}</div>
                            <span className='text-lg font-medium text-gray-800'>{tech.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

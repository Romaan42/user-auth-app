import React from "react";

function page() {

    return (
        <main>
            <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-32 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">My Projects</h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                        Explore my latest web development projects showcasing React.js,
                        JavaScript, and modern frontend technologies.
                    </p>
                </div>
            </section>
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Here are some of my recent projects that demonstrate my skills in
                            React.js, JavaScript, and modern web development.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative">
                                <img
                                    alt="E-Commerce Dashboard"
                                    className="w-full h-48 object-cover object-top"
                                    src="https://readdy.ai/api/search-image?query=Modern%20e-commerce%20dashboard%20interface%20with%20clean%20design%2C%20data%20analytics%20charts%2C%20product%20management%20panels%2C%20professional%20UI%20design%2C%20blue%20and%20white%20color%20scheme%2C%20responsive%20layout%2C%20modern%20web%20application%20interface&amp;width=600&amp;height=400&amp;seq=project-001&amp;orientation=landscape"
                                />
                                <div className="absolute top-4 right-4 flex space-x-2">
                                    <a
                                        href="#"
                                        className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                                    >
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <i className="ri-external-link-line text-gray-700"></i>
                                        </div>
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                                    >
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <i className="ri-github-line text-gray-700"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    E-Commerce Dashboard
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Modern admin dashboard for e-commerce platforms built with
                                    React.js and advanced data visualization.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        React.js
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        JavaScript
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        CSS3
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        Chart.js
                                    </span>
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center font-semibold transition-colors cursor-pointer whitespace-nowrap"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href="#"
                                        className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 py-2 px-4 rounded-lg text-center font-semibold transition-colors cursor-pointer whitespace-nowrap"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative">
                                <img
                                    alt="Restaurant Website"
                                    className="w-full h-48 object-cover object-top"
                                    src="https://readdy.ai/api/search-image?query=Beautiful%20restaurant%20website%20homepage%20with%20elegant%20food%20photography%2C%20modern%20menu%20layout%2C%20reservation%20booking%20interface%2C%20responsive%20design%2C%20warm%20color%20palette%2C%20professional%20food%20service%20web%20design&amp;width=600&amp;height=400&amp;seq=project-002&amp;orientation=landscape"
                                />
                                <div className="absolute top-4 right-4 flex space-x-2">
                                    <a
                                        href="#"
                                        className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                                    >
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <i className="ri-external-link-line text-gray-700"></i>
                                        </div>
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                                    >
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <i className="ri-github-line text-gray-700"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Restaurant Website
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Responsive restaurant website with online menu, reservation
                                    system, and modern design aesthetics.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        HTML5
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        CSS3
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        JavaScript
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        React.js
                                    </span>
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center font-semibold transition-colors cursor-pointer whitespace-nowrap"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href="#"
                                        className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 py-2 px-4 rounded-lg text-center font-semibold transition-colors cursor-pointer whitespace-nowrap"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative">
                                <img
                                    alt="Task Management App"
                                    className="w-full h-48 object-cover object-top"
                                    src="https://readdy.ai/api/search-image?query=Task%20management%20application%20interface%20with%20kanban%20board%20layout%2C%20drag%20and%20drop%20functionality%2C%20clean%20productivity%20app%20design%2C%20organized%20task%20cards%2C%20modern%20UI%20elements%2C%20professional%20workspace%20design&amp;width=600&amp;height=400&amp;seq=project-003&amp;orientation=landscape"
                                />
                                <div className="absolute top-4 right-4 flex space-x-2">
                                    <a
                                        href="#"
                                        className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                                    >
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <i className="ri-external-link-line text-gray-700"></i>
                                        </div>
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                                    >
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <i className="ri-github-line text-gray-700"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Task Management App
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Productivity app for task management with drag-and-drop
                                    functionality and real-time updates.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        React.js
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        JavaScript
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        HTML5
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        CSS3
                                    </span>
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center font-semibold transition-colors cursor-pointer whitespace-nowrap"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href="#"
                                        className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 py-2 px-4 rounded-lg text-center font-semibold transition-colors cursor-pointer whitespace-nowrap"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative">
                                <img
                                    alt="Weather Forecast App"
                                    className="w-full h-48 object-cover object-top"
                                    src="https://readdy.ai/api/search-image?query=Weather%20forecast%20application%20interface%20with%20beautiful%20weather%20icons%2C%20temperature%20displays%2C%20location%20maps%2C%20clean%20modern%20design%2C%20weather%20data%20visualization%2C%20mobile%20responsive%20weather%20app%20design&amp;width=600&amp;height=400&amp;seq=project-004&amp;orientation=landscape"
                                />
                                <div className="absolute top-4 right-4 flex space-x-2">
                                    <a
                                        href="#"
                                        className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                                    >
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <i className="ri-external-link-line text-gray-700"></i>
                                        </div>
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                                    >
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <i className="ri-github-line text-gray-700"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Weather Forecast App
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Beautiful weather application with location-based forecasts
                                    and interactive weather maps.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        React.js
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        API Integration
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        CSS3
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        JavaScript
                                    </span>
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center font-semibold transition-colors cursor-pointer whitespace-nowrap"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href="#"
                                        className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 py-2 px-4 rounded-lg text-center font-semibold transition-colors cursor-pointer whitespace-nowrap"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative">
                                <img
                                    alt="Portfolio Website"
                                    className="w-full h-48 object-cover object-top"
                                    src="https://readdy.ai/api/search-image?query=Creative%20portfolio%20website%20design%20with%20modern%20layout%2C%20project%20showcases%2C%20professional%20developer%20portfolio%2C%20clean%20typography%2C%20interactive%20elements%2C%20contemporary%20web%20design%20aesthetics&amp;width=600&amp;height=400&amp;seq=project-005&amp;orientation=landscape"
                                />
                                <div className="absolute top-4 right-4 flex space-x-2">
                                    <a
                                        href="#"
                                        className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                                    >
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <i className="ri-external-link-line text-gray-700"></i>
                                        </div>
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                                    >
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <i className="ri-github-line text-gray-700"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Portfolio Website
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Personal portfolio website showcasing creative design and
                                    smooth animations.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        HTML5
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        CSS3
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        JavaScript
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        React.js
                                    </span>
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center font-semibold transition-colors cursor-pointer whitespace-nowrap"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href="#"
                                        className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 py-2 px-4 rounded-lg text-center font-semibold transition-colors cursor-pointer whitespace-nowrap"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative">
                                <img
                                    alt="Social Media Dashboard"
                                    className="w-full h-48 object-cover object-top"
                                    src="https://readdy.ai/api/search-image?query=Social%20media%20analytics%20dashboard%20with%20graphs%20and%20charts%2C%20engagement%20metrics%20display%2C%20modern%20data%20visualization%2C%20social%20network%20management%20interface%2C%20professional%20dashboard%20design%2C%20clean%20UI%20layout&amp;width=600&amp;height=400&amp;seq=project-006&amp;orientation=landscape"
                                />
                                <div className="absolute top-4 right-4 flex space-x-2">
                                    <a
                                        href="#"
                                        className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                                    >
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <i className="ri-external-link-line text-gray-700"></i>
                                        </div>
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                                    >
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <i className="ri-github-line text-gray-700"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Social Media Dashboard
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Analytics dashboard for social media management with real-time
                                    data and insights.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        React.js
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        JavaScript
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        Data Visualization
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        CSS3
                                    </span>
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center font-semibold transition-colors cursor-pointer whitespace-nowrap"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href="#"
                                        className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 py-2 px-4 rounded-lg text-center font-semibold transition-colors cursor-pointer whitespace-nowrap"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default page;

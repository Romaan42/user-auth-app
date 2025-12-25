"use client"

import { handleUserContact } from "@/app/actions/userActions"
import { useActionState, useEffect, useState } from "react"

const FormData = () => {

    const [state, formAction, loading] = useActionState(handleUserContact)
    const [success, setSuccess] = useState({})

    useEffect(() => {
        if (state?.success) {
            setSuccess(state.message)
        }
    }, [state])


    const handleUserSubmit = (formData) => {
        const user = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            projectType: formData.get("projectType"),
            message: formData.get("message")
        }
        formAction(user)
    }
    return (
        <form action={handleUserSubmit} id="contact-form-roman-khan" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Full Name *
                    </label>
                    <input
                        id="name"
                        required={true}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Your full name"
                        type="text"
                        name="name"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Email Address *
                    </label>
                    <input
                        id="email"
                        required={true}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="your.email@example.com"
                        type="email"

                        name="email"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Subject *
                    </label>
                    <input
                        id="subject"
                        required={true}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Project inquiry, collaboration, etc."
                        type="text"
                        name="subject"
                    />
                </div>
                <div>
                    <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Project Type
                    </label>
                    <div className="relative">
                        <select
                            required={true}
                            id="projectType"
                            name="projectType"
                            className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none bg-white cursor-pointer"
                        >
                            <option value="">Select project type</option>
                            <option value="website">Website Development</option>
                            <option value="webapp">Web Application</option>
                            <option value="ecommerce">E-commerce Site</option>
                            <option value="portfolio">Portfolio Website</option>
                            <option value="other">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <div className="w-5 h-5 flex items-center justify-center">
                                <i className="ri-arrow-down-s-line text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    required={true}
                    maxLength="500"
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-vertical"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                    0/500 characters
                </div>
                <div>{success?.message}</div>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
                Send Message
            </button>
        </form>
    )
}

export default FormData
"use client"
import Link from "next/link";
import { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    let links = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/project" },
        { name: "Resume", path: "/resume" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="bg-white shadow-sm fixed w-full top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-bold text-gray-900 font-pacifico"
                    >
                        Roman Khan
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {links.map((link) => (
                            <Link key={link.name} className="nav-link" href={link.path}>
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaXmark /> : <FaBarsStaggered />}
                    </button>
                </div>

                {/* Mobile Dropdown */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60" : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col space-y-4 py-4 bg-white border-t">
                        {links.map((link) => (
                            <Link key={link.name} className="nav-link" href={link.path}>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}

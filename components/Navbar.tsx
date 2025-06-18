"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-rgb(177, 190, 168) bg-opacity-90"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-4">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-800">EARLY</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <a
                        href="#"
                        className="text-gray-800 hover:text-gray-600 rounded-full px-4 py-2 transition-colors"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-gray-800 hover:text-gray-600 rounded-full px-4 py-2 transition-colors"
                    >
                        Early Program
                    </a>
                    <a
                        href="#"
                        className="text-gray-800 hover:text-gray-600 rounded-full px-4 py-2 transition-colors"
                    >
                        Medications
                    </a>
                    <a
                        href="#"
                        className="text-gray-800 hover:text-gray-600 rounded-full px-4 py-2 transition-colors"
                    >
                        Calculators
                    </a>
                    <a
                        href="#"
                        className="text-gray-800 hover:text-gray-600 rounded-full px-4 py-2 transition-colors"
                    >
                        Blog
                    </a>
                    <a
                        href="#"
                        className="text-gray-800 hover:text-gray-600 rounded-full px-4 py-2 transition-colors"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center space-x-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button className="bg-gray-800 text-white hover:bg-gray-700 rounded-full px-6 py-2">
                        Start EARLY
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    <a
                        href="#"
                        className="block text-gray-800 hover:text-gray-600 rounded-full px-4 py-2 transition-colors"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="block text-gray-800 hover:text-gray-600 rounded-full px-4 py-2 transition-colors"
                    >
                        Early Program
                    </a>
                    <a
                        href="#"
                        className="block text-gray-800 hover:text-gray-600 rounded-full px-4 py-2 transition-colors"
                    >
                        Medications
                    </a>
                    <a
                        href="#"
                        className="block text-gray-800 hover:text-gray-600 rounded-full px-4 py-2 transition-colors"
                    >
                        Calculators
                    </a>
                    <a
                        href="#"
                        className="block text-gray-800 hover:text-gray-600 rounded-full px-4 py-2 transition-colors"
                    >
                        Blog
                    </a>
                    <a
                        href="#"
                        className="block text-gray-800 hover:text-gray-600 rounded-full px-4 py-2 transition-colors"
                    >
                        Contact
                    </a>
                    <Button className="w-full bg-gray-800 text-white hover:bg-gray-700 rounded-full">
                        Start EARLY
                    </Button>
                </div>
            )}
        </nav>
    )
}

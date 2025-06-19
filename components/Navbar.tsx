"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

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
            <div className="mx-auto px-10 flex items-center justify-between py-4">
                <div className="flex items-center space-x-2">
                    <Image
                        src={"/assets/logo.png"}
                        alt="Logo"
                        width={200}
                        height={200}
                    />
                </div>

                <div
                    className={`hidden md:flex space-x-6 px-4 py-2 text-[15px] rounded-full transition-all duration-300 ${isScrolled
                        ? "bg-[#79855F4D]"
                        : "bg-white/10 backdrop-blur-2xl"
                        }`}
                >
                    <a
                        href="#"
                        className="text-black font-bold rounded-full px-4 py-2 transition-colors"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-black font-bold rounded-full px-4 py-2 transition-colors"
                    >
                        Early Program
                    </a>
                    <a
                        href="#"
                        className="text-black font-bold rounded-full px-4 py-2 transition-colors"
                    >
                        Medications
                    </a>
                    <a
                        href="#"
                        className="text-black font-bold rounded-full px-4 py-2 transition-colors"
                    >
                        Calculators
                    </a>
                    <a
                        href="#"
                        className="text-black font-bold rounded-full px-4 py-2 transition-colors"
                    >
                        Blog
                    </a>
                    <a
                        href="#"
                        className="text-black font-bold rounded-full px-4 py-2 transition-colors"
                    >
                        Contact
                    </a>
                </div>


                <div className="md:hidden flex items-center space-x-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>

                <div className="hidden md:block">
                    <Button className="bg-[#393E2C] text-white text-[20px] rounded-full p-7">
                        Start EARLY
                    </Button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white/70 backdrop-blur-xl md:hidden rounded-l-2xl flex flex-col justify-between px-6 py-8">
                    {/* Close Button */}
                    <div className="flex justify-end">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-black"
                        >
                            <X className="w-6 h-6" />
                        </Button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col space-y-4 text-lg text-gray-800 font-medium">
                        <a href="#" className="border-b pb-2">Home</a>
                        <a href="#" className="border-b pb-2">Early Program</a>
                        <a href="#" className="border-b pb-2">Medications</a>
                        <a href="#" className="border-b pb-2">Calculators</a>
                        <a href="#" className="border-b pb-2">Blog</a>
                        <a href="#" className="border-b pb-2">Contact</a>
                    </div>

                    {/* Bottom Button */}
                    <div className="pt-6">
                        <Button className="w-full bg-[#393E2C] text-white text-[18px] rounded-full py-3">
                            Start EARLY
                        </Button>
                    </div>
                </div>
            )}

        </nav>
    )
}

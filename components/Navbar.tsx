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
            <div className=" px-2 md:px-10 flex items-center justify-between py-2 ">
                <div className="flex items-center space-x-4">
                    <Image
                        src={"/assets/logo.png"}
                        alt="Logo"
                        width={200}
                        height={200}
                    />
                </div>

                <div
                    className={`hidden lg:flex space-x-5 px-4 py-2 text-md lg:text-lg rounded-full transition-all duration-300 ${isScrolled
                        ? "bg-[#79855F4D]"
                        : "bg-white/10 backdrop-blur-2xl"
                        }`}
                >
                    <a
                        href="#"
                        className="text-black underline font-bold rounded-full transition-colors"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-black  rounded-full transition-colors"
                    >
                        Early Program
                    </a>
                    <a
                        href="#"
                        className="text-black  rounded-full transition-colors"
                    >
                        Medications
                    </a>
                    <a
                        href="#"
                        className="text-black  rounded-full transition-colors"
                    >
                        Calculators
                    </a>
                    <a
                        href="#"
                        className="text-black  rounded-full transition-colors"
                    >
                        Blog
                    </a>
                    <a
                        href="#"
                        className="text-black rounded-full transition-colors"
                    >
                        Contact
                    </a>
                </div>


                <div className="flex lg:hidden items-center space-x-2">
                    <Button
                        variant="ghost"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-20 h-20" /> : <Menu className="w-24 h-24 text-2xl"  />}
                    </Button>
                </div>

                <div className="hidden lg:block">
                    <Button className="bg-[#393E2C] text-white text-[8px] lg:text-[16px] rounded-full py-2 lg:py-5 px-2 lg:px-12">
                        Start EARLY
                    </Button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white/70 backdrop-blur-xl lg:hidden rounded-l-2xl flex flex-col justify-between px-6 py-8">
                  
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

                    
                    <div className="flex flex-col space-y-4 text-lg md:text-5xl text-gray-800 font-medium">
                        <a href="#" className="border-b pb-2 md:pb-10">Home</a>
                        <a href="#" className="border-b pb-2 md:pb-10">Early Program</a>
                        <a href="#" className="border-b pb-2 md:pb-10">Medications</a>
                        <a href="#" className="border-b pb-2 md:pb-10">Calculators</a>
                        <a href="#" className="border-b pb-2 md:pb-10">Blog</a>
                        <a href="#" className="border-b pb-2 md:pb-10">Contact</a>
                    </div>

                    
                    <div className="pt-6">
                        <Button className="w-full bg-[#393E2C] text-white text-[18px] md:text-[30px] rounded-full py-3 md:py-10">
                            Start EARLY
                        </Button>
                    </div>
                </div>
            )}

        </nav>
    )
}

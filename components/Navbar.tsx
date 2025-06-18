"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-rgb(177, 190, 168) bg-opacity-90"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-4">
                <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-800">EARLY</span>
                </div>
                <div className={`flex space-x-6 border rounded-full  ${isScrolled ? "bg-[#79855F4D]" : "bg-white/40"}`}>
                    <a href="#" className="text-gray-800 hover:text-gray-600 rounded-full px-4 py-2 transition-colors">
                        Home
                    </a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 rounded-full px-4 py-2 transition-colors">
                        Early Program
                    </a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 rounded-full px-4 py-2 transition-colors">
                        Medications
                    </a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 rounded-full px-4 py-2 transition-colors">
                        Calculators
                    </a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 rounded-full px-4 py-2 transition-colors">
                        Blog
                    </a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 rounded-full px-4 py-2 transition-colors">
                        Contact
                    </a>
                </div>
                <Button className="bg-gray-800 text-white hover:bg-gray-700 rounded-full px-6 py-2">
                    Start EARLY
                </Button>
            </div>
        </nav>
    );
}
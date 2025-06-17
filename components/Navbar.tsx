'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="sticky top-0 z-50 w-full transition-all">
            <div className="relative flex justify-between items-center px-4 py-4 md:px-8">

                <div className="flex items-center gap-2  p-2">
                    <Link href="/">
                        <Image
                            src="/assets/logo1.png"
                            alt="Early Fit Logo"
                            width={180}
                            height={180}
                        />
                    </Link>
                </div>

                {/* Nav Links Centered */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                    <ul
                        className={`flex gap-6 rounded-3xl px-6 py-2 text-sm font-medium transition-colors duration-300 ${scrolled ? "bg-[#79855F4D]" : "bg-[#FFFFFFA6]"
                            }`}
                    >
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="#">Early Program</Link></li>
                        <li><Link href="#">Medications</Link></li>
                        <li><Link href="#">Calculators</Link></li>
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul>
                </div>

                <div className="hidden md:block">
                    <Button variant="website">Start Early</Button>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            <div
                className={clsx(
                    "md:hidden transition-all duration-300 overflow-hidden bg-[#79855F4D]",
                    menuOpen ? "max-h-[300px] px-4 pb-4" : "max-h-0 px-4"
                )}
            >
                <ul className="flex flex-col gap-3 pt-2 text-sm font-medium">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#">Early Program</Link></li>
                    <li><Link href="#">Medications</Link></li>
                    <li><Link href="#">Calculators</Link></li>
                    <li><Link href="#">Blog</Link></li>
                    <li><Link href="#">Contact</Link></li>
                    <li>
                        <Button variant="website" className="w-full mt-2">
                            Start Early
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

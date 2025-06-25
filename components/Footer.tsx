"use client"

import Link from "next/link";
import { Separator } from "./ui/separator";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-manrope',
    display: 'swap',
});

const Footer = () => {
    return (
        <>
            <div>
                <div className='bg-[#434935]' >
                    <section className="py-12 lg:py-24">
                        <div className="w-full px-6 md:px-12 lg:px-20 mx-auto">
                            <div className="flex flex-col items-start lg:flex-row gap-8">

                                <div className="w-full pl-10 lg:w-[35%] flex justify-start lg:pb-0">
                                    <div className="flex items-center justify-center gap-2">
                                        <Image
                                            src="/assets/logo1.png"
                                            alt="Logo"
                                            width={200}
                                            height={200}
                                            className='items-center justify-center'
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:hidden">
                                    <Separator />
                                </div>


                                <div
                                    className={`w-full lg:w-[65%] text-white text-[18px] md:text-[22px] lg:text-[24px] ${manrope.className}`}
                                >
                                    {/* Mobile layout: show two columns with vertical divider */}
                                    <div className="flex md:hidden justify-center gap-6">
                                        {/* Left side */}
                                        <div className="space-y-2 flex flex-col text-left">
                                            <Link href="/">Home</Link>
                                            <Link href="#">Early Program</Link>
                                            <Link href="#">Medication</Link>
                                            <Link href="#">Calculators</Link>
                                            <Link href="#">Blog</Link>
                                            <Link href="#">Results</Link>
                                        </div>

                                        {/* Vertical line */}
                                        <div className="w-px bg-white/30 mx-2" />

                                        {/* Right side */}
                                        <div className="space-y-2 flex flex-col text-left">
                                            <Link href="#">About Us</Link>
                                            <Link href="#">Careers</Link>
                                            <Link href="#">Contact Us</Link>
                                            <Link href="#">Terms of Use</Link>
                                            <Link href="#">Privacy Policy</Link>
                                        </div>
                                    </div>

                                    {/* Desktop layout: 4 columns grid */}
                                    <div className="hidden md:grid grid-cols-4 gap-6">
                                        <div className="space-y-2 flex flex-col text-left">
                                            <Link href="/">Home</Link>
                                            <Link href="#">Early Program</Link>
                                            <Link href="#">Medication</Link>
                                        </div>
                                        <div className="space-y-2 flex flex-col text-left">
                                            <Link href="#">Calculators</Link>
                                            <Link href="#">Blog</Link>
                                            <Link href="#">Results</Link>
                                        </div>
                                        <div className="space-y-2 flex flex-col text-left">
                                            <Link href="#">About Us</Link>
                                            <Link href="#">Careers</Link>
                                            <Link href="#">Contact Us</Link>
                                        </div>
                                        <div className="space-y-2 flex flex-col text-left">
                                            <Link href="#">Terms of Use</Link>
                                            <Link href="#">Privacy Policy</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:hidden pt-4">
                                <Separator />
                            </div>
                            <div className="flex items-center pl-10 gap-4 pt-10">
                                <div className="p-2 bg-white rounded-full hover:bg-white/20 transition cursor-pointer">
                                    <Facebook className="w-8 h-8" />
                                </div>
                                <div className="p-2 bg-white rounded-full hover:bg-white/20 transition cursor-pointer">
                                    <Instagram className="w-8 h-8" />
                                </div>
                                <div className="p-2 bg-white rounded-full hover:bg-white/20 transition cursor-pointer">
                                    <Linkedin className="w-8 h-8" />
                                </div>
                                <div className="p-2 bg-white rounded-full hover:bg-white/20 transition cursor-pointer">
                                    <MessageCircle className="w-8 h-8" />
                                </div>
                            </div>
                        </div>
                    </section>


                    <Separator />
                    <div className=" pt-6 pb-6 text-[20px] text-center text-white">
                        © 2025 EARLY. All rights reserved.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
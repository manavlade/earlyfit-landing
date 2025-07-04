"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Early Program", path: "/early-fit" },
        { name: "Medications", path: "/medicines" },
        { name: "Calculators", path: "/calculators" },
        { name: "Blog", path: "/blogs" },
        { name: "Contact", path: "/contact" },
      ];
    

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
            <div className=" px-2 md:px-10 flex items-center justify-between py-6 ">
                <div className="flex items-center space-x-4">
                    <Image
                        src={"/assets/logo.png"}
                        alt="Logo"
                        width={120}
                        height={120}
                    />
                </div>

                <div
                    className={`hidden lg:flex space-x-5 px-4 py-2 text-md lg:text-xl rounded-full transition-all duration-300 ${isScrolled ? "bg-[#79855F4D]" : "bg-white/10 backdrop-blur-2xl"
                        }`}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.path}
                            onClick={() => router.push(item.path)}
                            className={`cursor-pointer rounded-full transition-colors text-black font-medium ${pathname === item.path ? "underline font-bold" : ""
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>


                <div className="flex lg:hidden items-center space-x-4">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
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
                        <a onClick={() => router.push("/")} className="border-b pb-2 md:pb-10 cursor-pointer">Home</a>
                        <a onClick={() => router.push("/early-fit")} className="border-b pb-2 md:pb-10 cursor-pointer">Early Program</a>
                        <a onClick={() => router.push("/medicines")} className="border-b pb-2 md:pb-10 cursor-pointer">Medications</a>
                        <a onClick={() => router.push("/calculators")} className="border-b pb-2 md:pb-10 cursor-pointer">Calculators</a>
                        <a onClick={() => router.push("/blog")} className="border-b pb-2 md:pb-10 cursor-pointer">Blog</a>
                        <a onClick={() => router.push("/contact")} className="border-b pb-2 md:pb-10 cursor-pointer">Contact</a>
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

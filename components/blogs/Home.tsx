"use client"

import Image from "next/image";
import Navbar from "../Navbar";
import { Unna } from "next/font/google";
import { ArrowLeft, User } from "lucide-react";

const unna = Unna({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-unna',
    display: 'swap',
});



type Blog = {
    title: string
    image: string
    tag: string
    author: string
    date: string
}

const blogs: Blog[] = [
    {
        title: "Complete Guide to GLP-1 Weight Loss Programs: What You Need to Know",
        image: "/assets/m4.jpg",
        tag: "GLP-1",
        author: "Wrishila",
        date: "June 12, 2025",
    },
    {
        title: "The Indian Vegetarian Diet For Diabetes: Your Complete 30 Days Plan",
        image: "/assets/m3.jpg",
        tag: "Diet Plan",
        author: "Saloni",
        date: "June 12, 2025",
    },
    {
        title: "Exercises That Actually Work For Weight Loss",
        image: "/assets/m2.jpg",
        tag: "Exercise",
        author: "Wrishila",
        date: "June 12, 2025",
    },
    {
        title: "7 Day GM Diet Plan For Weight Loss",
        image: "/assets/m1.jpg",
        tag: "Diet Plan",
        author: "Wrishila",
        date: "June 12, 2025",
    },
]

const BlogHome = () => {
    return (
        <>
            <div>
                <div className="py-10" >
                    <Navbar />
                </div>
                <div className="w-[90%] mx-auto">
                    <Image
                        src="/blogs/blog1.jpg"
                        alt="Blog"
                        width={1200}
                        height={800}
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </div>

                <div>
                    <section className="w-full py-12 bg-[#DBDFD2]">
                        <div className="w-full md:w-[90%] mx-auto px-4 space-y-10">
                            <p className={`text-3xl md:text-5xl text-center font-bold ${unna.className}`}>
                                More on OZEMPIC
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {blogs.map((blog, index) => (
                                    <div
                                        key={index}
                                        className="bg-white shadow-sm p-1 sm:p-4 md:p-5 hover:shadow-md transition rounded-xl border border-gray-300 flex flex-col overflow-hidden w-full"
                                    >
                                        <div className="relative w-full h-72 md:h-72 xl:h-80">
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                fill
                                                className="object-cover rounded-2xl"
                                            />
                                            <span className="absolute top-2 right-2 text-[10px] sm:text-xs md:text-sm lg:text-base bg-[#e2ebdf] text-black font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                                                {blog.tag}
                                            </span>
                                        </div>

                                        <div className="flex flex-col justify-between flex-grow mt-4">
                                            <h3 className="text-sm sm:text-base md:text-lg xl:text-xl text-left mb-2">
                                                {blog.title}
                                            </h3>
                                            <div className="text-xs sm:text-sm text-gray-500 flex justify-between items-center mt-auto">
                                                <span className="flex items-center gap-1">{blog.date}</span>
                                                <span className="flex items-center gap-1">
                                                    <User className="w-4 h-4" />
                                                    By {blog.author}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center">
                                <button className="mt-4 bg-[#a4af88] hover:bg-[#8f9d6e] text-white px-6 sm:px-8 md:px-10 py-2 md:py-3 rounded-full text-sm md:text-lg font-bold transition">
                                    More Blogs
                                </button>
                            </div>
                        </div>
                    </section>
                </div>

                <div>
                    <section>
                        <p className="text-3xl md:text-5xl text-center font-bold" >Explore Topics</p>
                        <div>
                            <div>
                                <button>
                                    <ArrowLeft/>
                                </button>
                            </div>
                            {/* <div>
                                <Image
                                src=""
                                
                                />
                            </div> */}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default BlogHome;
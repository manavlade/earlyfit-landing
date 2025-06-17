"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const content = [
    {
        image: "/assets/t1.png",
        name: "Surya Mehta",
        description: "I never imagined I could go from 127 kg to 96 kg, it felt like a dream too far. But my coach believed in me from the very beginning. They supported me through every dip, every moment of doubt, and helped me build habits I could actually stick to. What started as just weight loss made me feel stronger, lighter, and more in control of my life than I’ve ever been"
    },
    {
        image: "/assets/t2.png",
        name: "Shivani Roy, 37, Homemaker",
        description: "I started at 96 kg and struggled with thyroid issues. Nothing was helping until my coach helped me lose 28 kg. She gave me a diet and guided me with empathy and patience. I developed a healthier relationship with food, with my body, and with myself."
    },
    {
        image: "/assets/t3.png",
        name: "Arav Thampi, 34, Director - Strategic Alliances",
        description: "I’ve lost 8 kgs, but more than that, I feel lighter, healthier, and more energetic. The plan made the process feel easy and realistic. The plan was simple and practical, and the support kept me going. What felt overwhelming at first slowly became second nature. I truly feel like I’ve started something I can continue for life."
    }
]


const testimonials = [
    "/assets/t1.png",
    "/assets/t2.png",
    "/assets/t3.png",
];

const ImageCarousels = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < testimonials.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center bg-[#F9F8F3] p-8 gap-6">
                <div className="max-w-md">
                    <p className="text-gray-700">
                        I never imagined I could go from 127 kg to 96 kg, it felt like a dream too far.
                        But my coach believed in me from the very beginning. They supported me through
                        every dip, every moment of doubt, and helped me build habits I could actually
                        stick to. What started as just weight loss made me feel stronger, lighter, and
                        more in control of my life than I’ve ever been.
                        <br />
                        <span className="font-semibold block mt-2">
                            - Surya Mehta, 28, Software Engineer
                        </span>
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className="p-2 disabled:opacity-30"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <Image
                        src={testimonials[currentIndex]}
                        alt={`testimonial ${currentIndex + 1}`}
                        width={500}
                        height={500}
                        className="rounded-lg transition-all duration-300"
                    />

                    <button
                        onClick={handleNext}
                        disabled={currentIndex === testimonials.length - 1}
                        className="p-2 disabled:opacity-30"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ImageCarousels;
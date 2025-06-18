"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Testimonial = {
  image: string;
  name: string;
  profession: string;
  description: string;
};

const content: Testimonial[] = [
  {
    image: "/assets/t1.png",
    name: "Surya Mehta",
    profession: "Software Engineer",
    description: "I never imagined I could go from 127 kg to 96 kg, it felt like a dream too far. But my coach believed in me from the very beginning. They supported me through every dip, every moment of doubt, and helped me build habits I could actually stick to. What started as just weight loss made me feel stronger, lighter, and more in control of my life than I’ve ever been.",
  },
  {
    image: "/assets/t2.png",
    name: "Shivani Roy",
    profession: "Homemaker",
    description: "I started at 96 kg and struggled with thyroid issues. Nothing was helping until my coach helped me lose 28 kg. She gave me a diet and guided me with empathy and patience. I developed a healthier relationship with food, with my body, and with myself.",
  },
  {
    image: "/assets/t3.png",
    name: "Arav Thampi",
    profession: "Director - Strategic Alliances",
    description: "I’ve lost 8 kgs, but more than that, I feel lighter, healthier, and more energetic. The plan made the process feel easy and realistic. The plan was simple and practical, and the support kept me going. What felt overwhelming at first slowly became second nature. I truly feel like I’ve started something I can continue for life.",
  },
];

const ImageCarousels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < content.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <section className="w-full bg-[#F9F8F3] py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full">
          <div className="md:w-[42%] w-full md:pr-6 flex-shrink-0 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-black text-lg md:text-xl leading-relaxed mb-6 font-serif">
                  {content[currentIndex].description}
                </p>
                <div className="font-bold text-black text-base md:text-lg mt-4">
                  - <span className="font-extrabold">{content[currentIndex].name}</span>
                  {", "}
                  <span className="font-normal">{content[currentIndex].profession}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="md:w-[58%] w-full flex flex-col md:flex-row items-center justify-center relative mt-10 md:mt-0">
            <div className="flex items-center w-full justify-center">
              <Button
                size="icon"
                className="rounded-full w-10 h-10 bg-black/80 text-white shadow-lg mr-4"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous"
              >
                <ChevronLeft size={22} />
              </Button>
              <motion.div
                key={content[currentIndex].image}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 w-[300px] h-[500px]"
              >
                <Image
                  src={content[currentIndex].image}
                  alt={content[currentIndex].name}
                  width={300}
                  height={500}
                  className="rounded-xl object-cover shadow-lg"
                  priority
                />
              </motion.div>
              <Button
                size="icon"
                className="rounded-full w-10 h-10 bg-black/80 text-white shadow-lg ml-4"
                onClick={handleNext}
                disabled={currentIndex === content.length - 1}
                aria-label="Next"
              >
                <ChevronRight size={22} />
              </Button>
            </div>
            <div className="mt-5 md:mt-0 md:ml-5 w-[100px] h-[100px]">
              {currentIndex < content.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 0.85 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.4 }}
                  className="cursor-pointer"
                  onClick={handleNext}
                >
                  <Image
                    src={content[currentIndex + 1].image}
                    alt={content[currentIndex + 1].name}
                    width={100}
                    height={100}
                    className="rounded-xl object-cover shadow-md opacity-70"
                  />
                </motion.div>
              )}
              {currentIndex > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 0.85 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.4 }}
                  className="cursor-pointer mt-5"
                  onClick={handlePrev}
                >
                  <Image
                    src={content[currentIndex - 1].image}
                    alt={content[currentIndex - 1].name}
                    width={100}
                    height={100}
                    className="rounded-xl object-cover shadow-md opacity-70"
                  />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousels;
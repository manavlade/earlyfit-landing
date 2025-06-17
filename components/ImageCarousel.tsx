import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Unna } from "next/font/google";

const images = [
  "/assets/t1.png",
  "/assets/t2.png",
  "/assets/t3.png",
];

const texts = [
  {
    content: "I never imagined I could go from 127 kg to 96 kg, it felt like a dream too far. But my coach believed in me from the very beginning. They supported me through every dip, every moment of doubt, and helped me build habits I could actually stick to. What started as just weight loss made me feel stronger, lighter, and more in control of my life than I’ve ever been.\n\n— Surya Mehta, 28, Software Engineer",
  },
  {
    content: "I’ve lost 26 kgs and as a practicing gynecologist I can confidently say the approach is holistic, balanced, and deeply effective. My coach helped me feel nourished, not restricted. The lifestyle guidance and healthy habits have not only changed my weight, but my overall health and energy. \n\n— Dr. Riya Parulekar, 48, Gynecologist",
  },
  {
    content: "I’ve lost 8 kgs, but more than that, I feel  lighter, healthier, and more energetic. The plan made the process feel easy and realistic. The plan was simple and practical, and the support kept me going. What felt overwhelming at first slowly became second nature. I truly feel like I’ve started something I can continue for life \n\n— Arav Thampi, 34, Director - Strategic Alliances",
  },
];


const unna = Unna({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});


const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={"flex items-center justify-center bg-[#F9F8F3]" + unna.className}>
      <div className="flex flex-col md:flex-row items-center max-w-5xl w-full p-6">
        <div className="md:w-1/2 p-4">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg whitespace-pre-line">{texts[currentIndex].content}</p>
          </motion.div>
        </div>

        <div className="md:w-1/2 relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Success Story ${currentIndex + 1}`}
              className="w-full h-64 object-cover rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="bg-white rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="bg-white rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
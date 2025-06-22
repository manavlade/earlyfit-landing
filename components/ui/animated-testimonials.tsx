"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Unna } from "next/font/google"

const testimonials = [
  {
    title: "1:1 Doctor Support",
    description:
      "India’s first program with 1:1 support from endocrinologists- Super Specialists in metabolism and GLP-1.",
    image: "/assets/test1.png",
  },
  {
    title: "1:1 Expert Coach, 24x7",
    description:
      "With tailored plans and frequent check-ins, your EARLY coach is there with you every step of the way.",
    image: "/assets/test2.png",
  },
  {
    title: "Third Service Title",
    description:
      "Description for the third service or feature, to be shown when user navigates.",
    image: "/assets/test3.png",
  },
]

const unna = Unna({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-unna',
  display: 'swap',
})

export default function AnimatedTestimonials() {
  const [startIndex, setStartIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const itemsPerView = 2
  const cardWidth = isMobile ? 288 : 480
  const cardGap = 24
  const translateX = -(startIndex * (cardWidth + cardGap))

  const handleNext = () => {
    if (startIndex + itemsPerView < testimonials.length) {
      setStartIndex(startIndex + 1)
    }
  }

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  return (
    <div className="w-full overflow-x-hidden py-6">

      <div className="relative">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{
            transform: `translateX(${translateX}px)`,
            width: `${(cardWidth + cardGap) * testimonials.length}px`,
          }}
        >
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className={`bg-white rounded-xl shadow-md h-full p-0 ${isMobile ? "min-w-[18rem] max-w-[18rem]" : "min-w-[30rem]"
                }`}
            >
              <CardHeader className="pt-6 pb-3">
                <CardTitle
                  className={`font-semibold text-[#393E2C] ${isMobile ? "text-xl" : "text-3xl"} ${unna.className}`}
                >
                  {item.title}
                </CardTitle>
                <p className={`${isMobile ? "text-sm" : "text-2xl"} text-[#79855F]`}>
                  {item.description}
                </p>

              </CardHeader>
              <CardContent className="p-0">
                <div className={`w-full ${isMobile ? "h-[180px]" : "h-[300px]"} overflow-hidden`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-16 mt-16">
        <Button
          onClick={handlePrev}
          disabled={startIndex === 0}
          variant="outline"
          className="rounded-full h-12 w-12 p-0 bg-transparent border border-[#02542D] flex items-center justify-center"
        >
          <ArrowLeft size={10} className="text-[#02542D] h-12 w-12" />
        </Button>
        <Button
          onClick={handleNext}
          disabled={startIndex + itemsPerView >= testimonials.length}
          variant="outline"
          className="rounded-full h-12 w-12 p-0 bg-transparent border border-[#02542D] flex items-center justify-center"
        >
          <ArrowRight size={10} className="text-[#02542D] h-16 w-16" />
        </Button>
      </div>

    </div>
  )
}

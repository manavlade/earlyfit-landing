"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./card"

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

export default function AnimatedTestimonials() {
  const [startIndex, setStartIndex] = useState(0)

  // Show 1 card on small screens, 2 on medium+
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768
  const itemsToShow = isMobile ? 1 : 2

  const visibleCards = testimonials.slice(startIndex, startIndex + itemsToShow)

  const handleNext = () => {
    if (startIndex + itemsToShow < testimonials.length) {
      setStartIndex(startIndex + 1)
    }
  }

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500">
        {visibleCards.map((item, index) => (
          <Card key={index} className="bg-white rounded-xl shadow-md h-full">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-700">{item.description}</p>
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-auto object-cover rounded-md"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <Button
          onClick={handlePrev}
          disabled={startIndex === 0}
          variant="outline"
          size="icon"
        >
          <ArrowLeft />
        </Button>
        <Button
          onClick={handleNext}
          disabled={startIndex + itemsToShow >= testimonials.length}
          variant="outline"
          size="icon"
        >
          <ArrowRight />
        </Button>
      </div>
    </div>
  )
}

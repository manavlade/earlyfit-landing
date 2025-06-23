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
  const [itemsToShow, setItemsToShow] = useState(2)

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 1024) {
        setItemsToShow(1)
      }
      else if (window.innerWidth < 1280) {
        setItemsToShow(3)
      }
      else {
        setItemsToShow(2)
      }
    }

    updateItemsToShow()
    window.addEventListener("resize", updateItemsToShow)
    return () => window.removeEventListener("resize", updateItemsToShow)
  }, [])

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - itemsToShow, 0))
  }

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + itemsToShow, testimonials.length - itemsToShow)
    )
  }

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsToShow
  )

  return (
    <div>
      <div className="w-full overflow-hidden">
        <div className="relative px-4 max-w-full overflow-hidden">
          <div className="flex gap-6  transition-all duration-500 ease-in-out justify-center items-center">
            {visibleTestimonials.map((item, index) => (
              <div className="px-2 sm:px-4 md:px-2">
                <Card
                  key={index}
                  className="bg-white rounded-2xl shadow-md w-full md:min-w-[300px] lg:min-w-[400px] h-[600px] flex flex-col p-2"
                >
                  <CardHeader className=" flex-grow">
                    <CardTitle
                      className={`font-semibold text-[#393E2C] text-3xl pt-2 ${unna.className}`}
                    >
                      {item.title}
                    </CardTitle>
                    <p className="text-2xl text-[#79855F]">{item.description}</p>
                  </CardHeader>

                  <CardContent className="p-0">
                    <div className="w-full h-[300px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover rounded-b-2xl"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-16 mt-16">
        <Button
          onClick={handlePrev}
          disabled={startIndex === 0}
          variant="outline"
          className="rounded-full h-12 w-12 p-0 bg-transparent border border-[#02542D] flex items-center justify-center"
        >
          <ArrowLeft className="text-[#02542D] h-6 w-6" />
        </Button>
        <Button
          onClick={handleNext}
          disabled={startIndex + itemsToShow >= testimonials.length}
          variant="outline"
          className="rounded-full h-12 w-12 p-0 bg-transparent border border-[#02542D] flex items-center justify-center"
        >
          <ArrowRight className="text-[#02542D] h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

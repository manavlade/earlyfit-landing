"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TestimonialData {
  id: number
  name: string
  age: number
  profession: string
  content: string
  image: string
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Surya Mehta",
    age: 28,
    profession: "Software Engineer",
    content:
      "I never imagined I could go from 127 kg to 96 kg, it felt like a dream too far. But my coach believed in me from the very beginning. They supported me through every dip, every moment of doubt, and helped me build habits I could actually stick to. What started as just weight loss made me feel stronger, lighter, and more in control of my life than I've ever been.",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 2,
    name: "Priya Sharma",
    age: 32,
    profession: "Marketing Manager",
    content:
      "The transformation wasn't just physical - it was mental too. My coach helped me understand that sustainable change comes from building the right mindset. I lost 15 kg in 6 months and gained so much confidence that I never thought possible.",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    id: 3,
    name: "Rahul Gupta",
    age: 35,
    profession: "Business Owner",
    content:
      "As a busy entrepreneur, I thought I'd never have time for fitness. But the personalized approach made it work with my schedule. Lost 20 kg and feel more energetic than ever. My productivity has increased dramatically.",
    image: "/placeholder.svg?height=600&width=400",
  },
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16 bg-gradient-to-br from-gray-50 to-white">
      {/* Top Section - Rating & Reviews */}
      <div className="text-center mb-16 relative">
        <div className="flex justify-center items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-7 h-7 fill-green-500 text-green-500" />
          ))}
        </div>
        <p className="text-xl text-gray-700 font-medium">4.5 Average Rating • 000 Reviews</p>

        {/* Purple W badge */}
        <div className="absolute top-0 right-8 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">W</span>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Section - Testimonial Text */}
        <div className="space-y-8">
          <blockquote className="text-gray-800 text-2xl leading-relaxed font-light">
            {currentTestimonial.content}
          </blockquote>

          <div className="space-y-1">
            <p className="text-2xl font-bold text-gray-900">
              - {currentTestimonial.name}, {currentTestimonial.age},
            </p>
            <p className="text-xl text-gray-900 font-bold">{currentTestimonial.profession}</p>
          </div>
        </div>

        {/* Right Section - Image Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 h-[500px]">
            {/* Left Image */}
            <div className="relative w-64 h-80 opacity-70 transform scale-90 transition-all duration-500">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={
                    testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].image ||
                    "/placeholder.svg"
                  }
                  alt="Previous testimonial"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
              </div>
            </div>

            <div className="relative w-80 h-96 z-10 transform transition-all duration-500">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
              </div>
            </div>

            <div className="relative w-64 h-80 opacity-70 transform scale-90 transition-all duration-500">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={testimonials[(currentIndex + 1) % testimonials.length].image || "/placeholder.svg"}
                  alt="Next testimonial"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow border-gray-200"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow border-gray-200"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </Button>
          </div>

        </div>
      </div>

      <div className="flex justify-center mt-12 gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-purple-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => {
              setCurrentIndex(index)
              setIsAutoPlaying(false)
            }}
          />
        ))}
      </div>
    </div>
  )
}

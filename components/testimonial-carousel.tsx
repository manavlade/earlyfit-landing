"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { unna } from "@/fonts/unna"

interface TestimonialData {
  id: number
  name: string
  age: number
  profession: string
  content: string
  image: string
  weightLoss?: string
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Surya Mehta",
    age: 28,
    profession: "Software Engineer",
    weightLoss: "127 kg to 96 kg",
    content:
      "I never imagined I could go from 127 kg to 96 kg, it felt like a dream too far. But my coach believed in me from the very beginning. They supported me through every dip, every moment of doubt, and helped me build habits I could actually stick to. What started as just weight loss made me feel stronger, lighter, and more in control of my life than I've ever been.",
    image: "/assets/t1.png",
  },
  {
    id: 2,
    name: "Priya Sharma",
    age: 32,
    profession: "Marketing Manager",
    weightLoss: "78 kg to 65 kg",
    content:
      "The transformation wasn't just physical - it was mental too. My coach helped me understand that sustainable change comes from building the right mindset. I lost 13 kg in 5 months and gained confidence I never thought possible. Now I feel at peace with myself.",
    image: "/assets/t2.png",
  },
  {
    id: 3,
    name: "Rahul Gupta",
    age: 35,
    profession: "Business Owner",
    weightLoss: "95 kg to 75 kg",
    content:
      "As a busy entrepreneur, I thought I'd never have time for fitness. But the personalized approach made it work with my schedule. Lost 20 kg and feel more energetic than ever. Standing on my balcony each morning, I feel like a completely new person.",
    image: "/assets/t3.png",
  },
  
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) 
  }

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) 
  }

  const activeTestimonial = testimonials[activeIndex]
  const otherTestimonials = testimonials.filter((_, index) => index !== activeIndex)

  return (
    <div >
      <div className="w-full  max-w-7xl mx-auto  ">
      <h1 className={`text-center text-3xl pb-4 md:text-5xl pt-4 font-extrabold ${unna.className}`}>Real Success Stories</h1>
        {/* Rating Display Section */}
        <div className="text-center mb-10 relative">
          <div className="flex justify-center items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-[#79A55F] text-[#79A55F] drop-shadow-sm" />
            ))}
          </div>
          <p className="text-xl text-gray-700 ">4.5 Average Rating • {testimonials.length * 47} Reviews</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start ">
          <div className="space-y-8">
            <Card className="overflow-hidden shadow-2xl p-0">
              <CardContent className="p-0">
                <div className="relative h-96 w-full">
                  <Image
                    src={activeTestimonial.image || "/placeholder.svg"}
                    alt={`${activeTestimonial.name} - Success Story`}
                    fill
                    className="object-cover transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium opacity-90">Featured Success Story</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <blockquote className="text-gray-800 text-xl leading-relaxed font-light italic">
                "{activeTestimonial.content}"
              </blockquote>

              <div className="space-y-2">
                <p className="text-2xl font-bold text-gray-900">
                  - {activeTestimonial.name}, {activeTestimonial.age}
                </p>
                <p className="text-xl text-gray-700 font-semibold">{activeTestimonial.profession}</p>
                {activeTestimonial.weightLoss && (
                  <p className="text-lg text-green-600 font-semibold">Transformation: {activeTestimonial.weightLoss}</p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center">Other Success Stories</h3>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4 h-80">
                {otherTestimonials.slice(0, 4).map((testimonial, index) => (
                  <Card
                    key={testimonial.id}
                    className={`overflow-hidden cursor-pointer p-0 transition-all duration-500 hover:scale-105 hover:shadow-xl ${index < 2 ? "h-full" : "h-full"
                      }`}
                    onClick={() => {
                      setActiveIndex(testimonials.findIndex((t) => t.id === testimonial.id))
                      setIsAutoPlaying(false)
                      setTimeout(() => setIsAutoPlaying(true), 10000)
                    }}
                  >
                    <CardContent className="p-0 h-full relative">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`${testimonial.name} - Success Story`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 text-white">
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs opacity-90">{testimonial.profession}</p>
                        {testimonial.weightLoss && (
                          <p className="text-xs text-green-300 font-medium mt-1">{testimonial.weightLoss}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="flex justify-center items-center gap-6 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-14 h-14 rounded-full bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#02542D] hover:border-[#02542D]"
                  onClick={goToPrevious}
                >
                  <ArrowLeft className="h-6 w-6 text-[#02542D]" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-14 h-14 rounded-full bg-transparent  shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#02542D] hover:border-[#02542D]"
                  onClick={goToNext}
                >
                  <ArrowRight className="h-6 w-6 text-[#02542D]" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
        
        </div>
      </div>
    </div>
  )
}

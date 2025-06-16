"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

export default function WeightLossCalculator() {
  const [weight, setWeight] = useState(100)
  const [heightFeet, setHeightFeet] = useState(5)
  const [heightInches, setHeightInches] = useState(7)

  const totalHeightInInches = heightFeet * 12 + heightInches
  const heightInMeters = totalHeightInInches * 0.0254
  const bmi = weight / (heightInMeters * heightInMeters)
  const weightLoss6Months = Math.round(weight * 0.15)
  const weightLoss12Months = Math.round(weight * 0.2)
  const bmiIn12Months = (weight - weightLoss12Months) / (heightInMeters * heightInMeters)

  return (
    <section className="bg-[#F4F3EC] py-12 px-4 md:px-12 ">
      <div className=" grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">
            Curious about <span className="text-[#101010]">weight loss medications?</span>
          </h2>
          <p className="text-gray-700 mb-4">
            GLP-1 weight loss & BMI calculator. <br />
            Minimum average weight loss with proper diet & lifestyle changes.
          </p>
          <div className="rounded-full bg-[#DBF0B6] text-[#1A1A1A] text-center p-10 max-w-sm">
            <p className="text-xl mb-1">Lose up to</p>
            <p className="text-5xl font-bold">20%</p>
            <p className="text-lg">of your body weight<br />with GLP-1</p>
          </div>
        </div>

        {/* Right Section */}
        <Card className="p-6 space-y-4 border border-gray-300 shadow-sm">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Weight (kg)</span>
              <span>{weight}</span>
            </div>
            <Slider
              defaultValue={[weight]}
              min={40}
              max={160}
              step={1}
              onValueChange={(val) => setWeight(val[0])}
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Height (ft)</span>
              <span>
                {heightFeet}’{heightInches}”
              </span>
            </div>
            <Slider
              defaultValue={[heightFeet * 12 + heightInches]}
              min={48}
              max={84}
              step={1}
              onValueChange={(val) => {
                const totalInches = val[0]
                setHeightFeet(Math.floor(totalInches / 12))
                setHeightInches(totalInches % 12)
              }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <Card className="p-4 text-center">
              <p className="text-sm mb-1 text-gray-600">6 Months</p>
              <p className="text-xl font-semibold">{weightLoss6Months} kg</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-sm mb-1 text-gray-600">12 Months</p>
              <p className="text-xl font-semibold">{weightLoss12Months} kg</p>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 text-center">
              <p className="text-sm mb-1 text-gray-600">Current</p>
              <p className="text-xl font-bold">{bmi.toFixed(1)}</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-sm mb-1 text-gray-600">In 12 Months</p>
              <p className="text-xl font-bold">{bmiIn12Months.toFixed(1)}</p>
            </Card>
          </div>
        </Card>
      </div>
    </section>
  )
}

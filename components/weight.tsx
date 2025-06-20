"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";


import { Unna } from 'next/font/google';


const unna = Unna({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-unna',
  display: 'swap',
});


const feetToMeters = (feet: number) => feet * 0.3048;
const calculateBMI = (weightKg: number, heightFeet: number) => {
  const heightMeters = feetToMeters(heightFeet);
  return +(weightKg / (heightMeters * heightMeters)).toFixed(1);
};


const WeightCalculator = () => {
  const [weight, setWeight] = useState(100);
  const [heightFeet, setHeightFeet] = useState(5.6);

  const currentBMI = calculateBMI(weight, heightFeet);
  const weightLoss6 = Math.round(weight * 0.15);
  const weightLoss12 = Math.round(weight * 0.20);
  const bmiIn12Months = calculateBMI(weight - weightLoss12, heightFeet);

  return (
    <div className="bg-[#E8E9E1] p-4 md:p-8 rounded-xl border border-black shadow-md w-full max-w-2xl mx-auto space-y-6 md:space-y-8 text-[10px] md:text-base">
      <div>
        <div className="flex justify-between items-center mb-2">
          <p className={`font-bold text-gray-800 text-[10px] md:text-lg ${unna.className}`}>Weight (kg)</p>
          <p className={`text-black font-bold text-[10px] md:text-lg ${unna.className}`}>{weight}</p>
        </div>
        <Slider
          defaultValue={[weight]}
          min={40}
          max={150}
          step={1}
          onValueChange={([val]) => setWeight(val)}
          className="accent-lime-500"
        />
      </div>
      <div>
        <div className="flex justify-between items-center mb-2">
          <p className={`font-bold text-gray-800 text-[10px] md:text-xl ${unna.className}`}>Height (ft)</p>
          <p className={`text-black font-bold text-[10px] md:text-xl ${unna.className}`}>
            {`${Math.floor(heightFeet)}’${Math.round((heightFeet % 1) * 12)}”`}
          </p>
        </div>
        <Slider
          defaultValue={[heightFeet]}
          min={4}
          max={7}
          step={0.1}
          onValueChange={([val]) => setHeightFeet(parseFloat(val.toFixed(1)))}
          className="accent-lime-500"
        />
      </div>

      {/* Weight Loss */}
      <div>
        <p className="text-black font-semibold text-[12px] md:text-[24px] mb-3">Weight You Could Lose (kg)</p>
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-[#E8E9E1] border border-black text-left py-4 md:py-6 shadow-sm rounded-lg">
            <CardContent>
              <p className="text-[10px] md:text-[20px] text-black mb-1">6 Months</p>
              <p className="text-2xl md:text-4xl font-bold">{weightLoss6} kg</p>
            </CardContent>
          </Card>
          <Card className="bg-[#E8E9E1] border border-black text-left py-4 md:py-6 shadow-sm rounded-lg">
            <CardContent>
              <p className="text-[10px] md:text-[20px] text-black mb-1">12 Months</p>
              <p className="text-2xl md:text-4xl font-bold">{weightLoss12} kg</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* BMI */}
      <div>
        <p className="text-black font-semibold text-[12px] md:text-[24px] mb-3">Body Mass Index (BMI)</p>
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-[#E8E9E1] border border-black text-left py-4 md:py-6 shadow-sm rounded-lg">
            <CardContent>
              <p className="text-[10px] md:text-[20px] text-black mb-1">Current</p>
              <p className="text-2xl md:text-4xl font-bold">{currentBMI}</p>
            </CardContent>
          </Card>
          <Card className="bg-[#E8E9E1] border border-black text-left py-4 md:py-6 shadow-sm rounded-lg">
            <CardContent>
              <p className="text-[10px] md:text-[20px] text-black mb-1">In 12 Months</p>
              <p className="text-2xl md:text-4xl font-bold">{bmiIn12Months}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

  );
};

export default WeightCalculator;

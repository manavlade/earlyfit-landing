"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const feetToMeters = (feet: number) => feet * 0.3048;
const calculateBMI = (weightKg: number, heightFeet: number) => {
  const heightMeters = feetToMeters(heightFeet);
  return +(weightKg / (heightMeters * heightMeters)).toFixed(1);
};

const WeightCalculator = () => {
  const [weight, setWeight] = useState(100);
  const [heightFeet, setHeightFeet] = useState(5.6); // ~5’7”
  
  const currentBMI = calculateBMI(weight, heightFeet);
  const weightLoss6 = Math.round(weight * 0.15); // 15%
  const weightLoss12 = Math.round(weight * 0.20); // 20%
  const bmiIn12Months = calculateBMI(weight - weightLoss12, heightFeet);

  return (
    <Card className="w-full max-w-md bg-[#F3F4F0] border border-gray-300 rounded-xl p-6 space-y-6">
      <div>
        <div className="flex justify-between items-center mb-1">
          <p className="font-medium text-gray-800">Weight (kg)</p>
          <p className="text-black font-semibold">{weight}</p>
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
        <div className="flex justify-between items-center mb-1">
          <p className="font-medium text-gray-800">Height (ft)</p>
          <p className="text-black font-semibold">{`${Math.floor(heightFeet)}’${Math.round(
            (heightFeet % 1) * 12
          )}”`}</p>
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

      <div>
        <p className="text-gray-700 font-medium mb-2">Weight You Could Lose (kg)</p>
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white text-center py-4">
            <CardContent>
              <p className="text-sm text-gray-500">6 Months</p>
              <p className="text-2xl font-bold">{weightLoss6} kg</p>
            </CardContent>
          </Card>
          <Card className="bg-white text-center py-4">
            <CardContent>
              <p className="text-sm text-gray-500">12 Months</p>
              <p className="text-2xl font-bold">{weightLoss12} kg</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <p className="text-gray-700 font-medium mb-2">Body Mass Index (BMI)</p>
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white text-center py-4">
            <CardContent>
              <p className="text-sm text-gray-500">Current</p>
              <p className="text-2xl font-bold">{currentBMI}</p>
            </CardContent>
          </Card>
          <Card className="bg-white text-center py-4">
            <CardContent>
              <p className="text-sm text-gray-500">In 12 Months</p>
              <p className="text-2xl font-bold">{bmiIn12Months}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Card>
  );
};

export default WeightCalculator;

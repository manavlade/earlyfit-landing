import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

const Medicinespage = () => {
    return (
        <>
            <div>
                <div className="w-full flex justify-center py-10">
                    <div className="w-[90%] max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-10">
                        {/* Text Section */}
                        <div className="text-center md:text-left flex-1">
                            <p className="text-3xl md:text-5xl font-semibold mb-6">
                                Weight Management Medications
                            </p>
                            <p className="text-base md:text-2xl mb-8">
                                GLP-1 medications like Tirzepatide and Semaglutide are transforming how we treat
                                obesity, PCOS, and metabolic disorders — offering science-backed, non-surgical solutions
                                for long-term weight loss. GLP-1 is a natural hormone produced in the gut which reduces
                                appetite, improves insulin sensitivity, and supports sustainable fat loss. Clinical
                                trials show obese people who use these medications can reduce up to 20% body weight
                                on average.
                            </p>
                            <Button className="text-lg md:text-2xl bg-[#79855F] rounded-2xl px-8 py-4">
                                Get Started
                            </Button>
                        </div>

                        {/* Image Section */}
                        <div className="flex-1 flex justify-center">
                            <Image
                                src="/medicines/hm.png"
                                alt="medicine"
                                width={500}
                                height={500}
                                className="w-full max-w-md h-auto"
                            />
                        </div>
                    </div>
                </div>


                <div className="bg-[#DBDFD2] p-12 text-center text-2xl" >
                    <p>Curious to learn about different FDA-approved medications for weight management?
                        We put together some reading materials for you:</p>
                </div>

                <div>
                    <div className="w-full flex justify-center py-10">
                        <div className="w-[90%] max-w-screen-xl flex items-center justify-between text-center gap-4">
                            <div>
                                <Button
                                    variant="outline"
                                    className="rounded-full h-12 w-12 p-0 bg-transparent border border-[#02542D]"
                                >
                                    <ArrowLeft className="text-[#02542D] h-6 w-6" />
                                </Button>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                                <Image
                                    src="/medicines/mr(2).png"
                                    alt="medicine"
                                    width={1200}
                                    height={1200}
                                    className="w-auto max-w-[700px] h-auto"
                                />
                                <Image
                                    src="/medicines/mr(1).png"
                                    alt="medicine"
                                    width={1200}
                                    height={1200}
                                    className="w-auto max-w-[700px] h-auto"
                                />
                            </div>

                            <div>
                                <Button
                                    variant="outline"
                                    className="rounded-full h-12 w-12 p-0 bg-transparent border border-[#02542D] flex items-center justify-center"
                                >
                                    <ArrowRight className="text-[#02542D] h-6 w-6" />
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Medicinespage
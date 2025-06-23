"use client"

import Image from "next/image";
import Navbar from "../Navbar";
import { Button } from "../ui/button";

const Details = () => {
    return (
        <div>
            <div className="py-8" >
                <Navbar />
            </div>
            <div>
                <div className="w-full flex justify-center bg-[#DBDFD2] py-10">
                    <div className="w-[90%] max-w-screen-xl flex flex-col md:flex-row items-center justify-center gap-10">
                        <Image
                            src="/medicines/detail.png"
                            alt="Detail Illustration"
                            width={800}
                            height={700}
                            className="w-full max-w-xl h-auto"
                        />

                        <Image
                            src="/medicines/detailText.png"
                            alt="Detail Text"
                            width={500}
                            height={500}
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>

                <div className="w-full flex justify-center py-10">
                    <div className="w-[75%] max-w-screen-xl flex flex-col md:flex-row gap-12 items-center justify-center">

                        <div className="flex-1 text-center md:text-left space-y-6">
                            <p className="text-3xl font-semibold">What is OZEMPIC?</p>
                            <p>
                                Ozempic is a drug that is approved by the U.S. Food and Drug Administration (FDA) to
                                treat Type 2 diabetes and to reduce major heart events in adults who have Type 2 diabetes
                                and cardiovascular disease. Clinicians prescribe it off-label for weight loss because
                                clinical evidence shows it also helps people lose weight.
                            </p>
                            <p>
                                Ozempic is a brand name for semaglutide which Novo Nordisk manufactures.
                                It is a synthetic version of the GLP-1 hormone.
                            </p>
                            <Button>Get Started</Button>
                        </div>

                        <div className="flex-1 flex justify-center">
                            <Image
                                src="/medicines/detail.png"
                                alt="Detail Illustration"
                                width={800}
                                height={700}
                                className="w-full max-w-xl h-auto"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center py-10">
                    <div className="w-[75%] max-w-screen-xl flex flex-col md:flex-row gap-12 items-center justify-center">
                        <div className="flex-1 flex justify-center">
                            <Image
                                src="/medicines/detail.png"
                                alt="Detail Illustration"
                                width={800}
                                height={700}
                                className="w-full max-w-xl h-auto"
                            />
                        </div>
                        <div className="flex-1 text-center md:text-left space-y-6">
                            <p className="text-3xl font-semibold">Benefits of Ozempic</p>
                            <p>
                                Expected weight loss depends on the dosage of Ozempic. In one study, people who took
                                2.4 mg of semaglutide every week for 68 weeks lost an average of 14.9% of their total
                                body weight. (Safe weight loss is one to two pounds per week.)
                            </p>
                            <p>
                                Although Ozempic is a diabetes medication, it may have more benefits for off-label use
                                beyond weight management. Multiple clinical trials funded by Novo Nordisk show semaglutide
                                can reduce the risk of major cardiovascular events such as heart attack, stroke, or
                                death in adults with Type 2 diabetes and known heart disease.
                            </p>
                            <p>
                                Semaglutide improves heart health by lowering blood sugar and helping people lose excess body
                                weight. Research is ongoing to determine if semaglutide can treat other medical conditions
                            </p>

                            <p>
                                And it’s significant to note that some patients have reported reduced cravings while using semaglutide for weight loss
                            </p>
                            <Button>Get Started</Button>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center py-10">
                    <div className="w-[75%] max-w-screen-xl flex flex-col md:flex-row gap-12 items-center justify-center">

                        <div className="flex-1 text-center md:text-left space-y-6">
                            <p className="text-3xl font-semibold">How does OZEMPIC work?</p>
                            <p>
                            When you eat, your food stimulates your gut to release the GLP-1 hormone. GLP-1 helps lower blood glucose (blood sugar) by stimulating insulin release. And insulin helps blood glucose enter your body’s cells for later energy use. 
                            In some people, the gut doesn't make enough natural GLP-1, or the brain isn't sensitive to it
                            </p>
                            <p>
                            Ozempic is a synthetic GLP-1 RA or glucagon-like peptide-1 receptor agonist. A drug that works as an agonist activates the same cell receptors as the body's natural hormones. So, Ozempic works in the gut like natural GLP-1. Because Ozempic slows digestion,
                             it helps curb hunger and signal fullness to the brain. As a result, some people with obesity have lost weight while taking i
                            </p>
                            <p>
                              Because Ozempic supports a process the body isn’t doing well, it’s intended for long-term use. 
                            It’s important to note that GLP-1 medications don’t work for everyone. There are dozens of biological reasons why people struggle to lose weight.
                            </p>
                            <Button>Get Started</Button>
                        </div>

                        <div className="flex-1 flex justify-center">
                            <Image
                                src="/medicines/detail.png"
                                alt="Detail Illustration"
                                width={800}
                                height={700}
                                className="w-full max-w-xl h-auto"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Details;
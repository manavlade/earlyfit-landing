import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Navbar from "../Navbar"
import { Separator } from "../ui/separator"
import Link from "next/link"
import {
    Facebook, Instagram, Linkedin, MessageCircle,
} from "lucide-react"


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Cardo, Manrope, Unna } from "next/font/google"

const unna = Unna({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-unna',
    display: 'swap',
});

const cardo = Cardo({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-cardo',
    display: 'swap',
});

const manrope = Manrope({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-manrope',
    display: 'swap',
});

const faqData = [
    {
        question: "What is a GLP-1 medication?",
        answer: `GLP-1 is a natural hormone produced in the human body that helps regulate appetite, blood sugar, and metabolism. GLP-1 medications mimic this hormone to reduce hunger, improve insulin response, and support sustainable weight loss.`,
    },
    {
        question: "Which GLP-1 medication do Early doctors prescribe?",
        answer: `If found eligible after your comprehensive medical evaluation, our doctors will prescribe the medication best suited for your health profile. This may include Mounjaro (Tirzepatide)—one of the most advanced and effective GLP-1 medications available today. In clinical studies, Mounjaro has shown average weight loss of up to 22%, outperforming older GLP-1 drugs.`,
    },
    {
        question: "What are Mounjaro and Rybelsus, and how do they work for weight loss?",
        answer: `Mounjaro (tirzepatide) and Rybelsus (oral semaglutide) are prescription GLP-1–based weight-loss medications. Both boost GLP-1 activity in your body, making you feel full faster and improving insulin response. In clinical programs, patients on Mounjaro often lose around 15–20% of their body weight on average. Rybelsus (a daily tablet) has a similar appetite-suppressing effect while also improving blood sugar. In short, these medications help curb hunger and teach your body to regulate food intake more effectively.`,
    },
    {
        question: "What does the program include beyond medication?",
        answer: `This is a full medical weight-loss program. You get a dedicated care team – including a leading doctor, certified nutritionist, fitness expert, and habit coach – who guide you throughout your journey. The program includes:\n\n- Regular virtual check-ins to adjust your plan\n- Personalized diet charts and meal plans tailored to Indian preferences\n- Workout plans based on your body type, fitness level, and goals\n- 24x7 access to the Early app, which tracks your weight, hunger, energy levels, labs, and more\n- Integration with smart devices like digital scales, fitness trackers, and health watches\n- Medication delivery and tracking\n- A side-effect support kit to manage early symptoms like nausea or fatigue, along with easy-to-follow guidance within the app`,
    },
    {
        question: "Is the program safe?",
        answer: `Yes. When prescribed and monitored by our expert medical team, GLP-1 medications are a safe and clinically-proven solution. These medications are CDSCO-approved and used by millions globally. Your safety is our top priority, which is why every user's journey is supervised by a qualified endocrinologist to ensure the treatment is right for your unique health needs and to manage your progress closely.`,
    },
    {
        question: "What are the side effects and how do you help manage them?",
        answer: `GLP-1 medications are generally safe when overseen by doctors. Most people only experience mild side effects during the first few weeks, such as nausea, diarrhea, vomiting or constipation. These are managed by starting at a low dose and increasing it slowly, and by advising small, bland meals if needed. Serious side effects are rare. Importantly, the medical team screens participants for any risk factors (for example, a history of pancreatitis or certain cancers), and will not prescribe GLP-1s if it’s unsafe. Your dedicated Care Team will guide you on dietary adjustments, and you’ll have access to our in-app Remedies Toolkit and 1-on-1 nutritionist support to address any discomfort swiftly.`,
    },
    {
        question: "Will I have to take medication forever?",
        answer: `Not at all. Medication is a tool to kickstart your metabolic reset, not a lifelong dependency. Our primary goal is to help you build lasting, healthy habits. As you approach your goal weight, your doctor will guide you through a safe, gradual tapering plan. The aim is to empower you to maintain your results independently.`,
    },
    {
        question: "Will I gain the weight back after stopping?",
        answer: `This is a common concern, and our program is specifically designed to keep your weight off long term. Weight regain often happens when medication is stopped abruptly without a long term strategy. The Early program is different because we focus on two key areas:\n\n- Building Sustainable Habits: Your nutritionist helps you master healthy eating and lifestyle routines\n- Medically-Guided Tapering: Your doctor creates a structured plan to gradually reduce the medication, allowing your body to adapt and preventing the shock that can lead to relapse.`,
    },
    {
        question: "How is Early different from other weight loss programs?",
        answer: `Early is not a diet plan; it's a comprehensive medical program that integrates three key pillars:\n\n- Advanced Medication: We use proven GLP-1 medication to address the biological root of weight gain.\n- Dedicated Human Care: You receive ongoing guidance from a full Care Team—a Specialized Endocrinologist & Your Coach - specialized nutritionist & fitness coach - not just an app.\n- Integrated Technology: Our app, connected smart scale, and health tracking integrations provide your Care Team with real-time data to personalize your plan and track your progress effectively.`,
    },
    {
        question: "Is this program suitable if I have PCOS (PCOD) or diabetes?",
        answer: `Absolutely. In fact, PCOS/PCOD and diabetes are common reasons to join. GLP-1 therapy helps women with PCOS by improving insulin resistance and aiding weight loss. Many medically supervised weight-loss programs explicitly include PCOS/PCOD as a qualifying condition.`,
    },
]

const Medicinespage = () => {
    return (
        <>
            <div>
                <div className="py-10" >
                    <Navbar />
                </div>
                <div className="w-full flex  bg-[] justify-center py-10">
                    <div className="w-[90%] max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-10">
                        {/* Text Section */}
                        <div className="text-center md:text-left flex-1">
                            <p className={`text-3xl md:text-5xl font-semibold mb-6 ${unna.className}`}>
                                Weight Management Medications
                            </p>
                            <p className="text-base md:text-xl mb-8">
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
                    <p>Curious to learn about different FDA-approved medications for weight management? <br />
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
                                    className="w-auto md:min-w-[500px] h-auto"
                                />
                                <Image
                                    src="/medicines/mr(1).png"
                                    alt="medicine"
                                    width={1200}
                                    height={1200}
                                    className="w-auto md:min-w-[500px] h-auto"
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

                    <div className="bg-[#DBDFD2]" >
                        <div className="w-full flex flex-col space-y-6 items-center justify-center py-20" >
                            <p className={`text-2xl md:text-5xl font-semibold text-center ${unna.className}`} >Looking for a Smarter Way to Lose Weight?</p>
                            <Image
                                src="/medicines/md.png"
                                alt="medicine"
                                width={1200}
                                height={1200}
                                className="w-auto md:min-w-[500px] h-auto"
                            />
                        </div>
                    </div>

                    <div>
                        <section className={"bg-white px-6 py-12 lg:px-20 lg:py-24"}>
                            <div className="w-full flex justify-center">
                                <div className="w-full md:max-w-[90%]">
                                    <div className="flex flex-col md:flex-row gap-12 w-full">
                                        <div className="w-full md:w-1/2">
                                            <p className={`text-[20px] md:text-[60px] font-bold leading-tight ${unna.className}`}>
                                                <span className="text-[#79855F]">Your Questions, </span> <br />
                                                Answered.
                                            </p>
                                            <p className="flex flex-wrap md:flex-nowrap items-center gap-2 text-[14px] md:text-[25px] mt-4 whitespace-nowrap">
                                                Need Help?
                                                <span className="flex items-center gap-1 text-[#79855F] font-semibold cursor-pointer whitespace-nowrap">
                                                    Get in touch with us here <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
                                                </span>
                                            </p>

                                        </div>
                                        <div className="w-full md:w-[75%] space-y-4">
                                            {faqData.map((item, i) => (
                                                <Accordion key={i} type="single" collapsible className="w-full">
                                                    <AccordionItem value={`item-${i + 1}`}>
                                                        <AccordionTrigger className={`text-[25px] text-black font-semibold ${unna.className}`}>
                                                            {item.question}
                                                        </AccordionTrigger>
                                                        <AccordionContent className="whitespace-pre-line text-[20px]">
                                                            {item.answer}
                                                        </AccordionContent>
                                                        <Separator />
                                                    </AccordionItem>
                                                </Accordion>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className='bg-[#434935]' >
                            <section className="px-6 py-12 lg:py-24">
                                <div className="md:max-w-[90%] w-full mx-auto flex flex-col lg:flex-row gap-8">

                                    <div className="w-full lg:w-[35%] flex justify-start pb-10 lg:pb-0">
                                        <div className="flex items-center gap-2">
                                            <Image
                                                src="/assets/logo1.png"
                                                alt="Logo"
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                    </div>
                                    <div className={`w-full lg:w-[65%] grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-[18px] md:text-[22px] lg:text-[24px] ${manrope.className}`}>
                                        <div className="space-y-2 flex flex-col text-left">
                                            <Link href="/">Home</Link>
                                            <Link href="#">Early Program</Link>
                                            <Link href="#">Medication</Link>
                                        </div>
                                        <div className="space-y-2 flex flex-col text-left">
                                            <Link href="#">Calculators</Link>
                                            <Link href="#">Blog</Link>
                                            <Link href="#">Results</Link>
                                        </div>
                                        <div className="space-y-2 flex flex-col text-left">
                                            <Link href="#">About Us</Link>
                                            <Link href="#">Careers</Link>
                                            <Link href="#">Contact Us</Link>
                                        </div>
                                        <div className="space-y-2 flex flex-col text-left">
                                            <Link href="#">Terms of Use</Link>
                                            <Link href="#">Privacy Policy</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 pt-10 md:px-16">
                                    <div className="p-2 bg-white rounded-full hover:bg-white/20 transition cursor-pointer">
                                        <Facebook className="w-8 h-8" />
                                    </div>
                                    <div className="p-2 bg-white rounded-full hover:bg-white/20 transition cursor-pointer">
                                        <Instagram className="w-8 h-8" />
                                    </div>
                                    <div className="p-2 bg-white rounded-full hover:bg-white/20 transition cursor-pointer">
                                        <Linkedin className="w-8 h-8" />
                                    </div>
                                    <div className="p-2 bg-white rounded-full hover:bg-white/20 transition cursor-pointer">
                                        <MessageCircle className="w-8 h-8" />
                                    </div>
                                </div>
                            </section>

                            <Separator />
                            <div className=" pt-6 pb-6 text-[28px] text-center text-white">
                                © 2025 EARLY. All rights reserved.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Medicinespage
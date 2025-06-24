"use client"

import Image from "next/image";
import Navbar from "../Navbar";
import { Button } from "../ui/button";


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "../ui/separator";
import { Cardo, Manrope, Unna } from "next/font/google";
import { ArrowLeft, ArrowRight, Facebook, Instagram, Linkedin, MessageCircle, User } from "lucide-react";
import Link from "next/link";
import Footer from "../Footer";

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



type Blog = {
    title: string
    image: string
    tag: string
    author: string
    date: string
}

const blogs: Blog[] = [
    {
        title: "Complete Guide to GLP-1 Weight Loss Programs: What You Need to Know",
        image: "/assets/m4.jpg",
        tag: "GLP-1",
        author: "Wrishila",
        date: "June 12, 2025",
    },
    {
        title: "The Indian Vegetarian Diet For Diabetes: Your Complete 30 Days Plan",
        image: "/assets/m3.jpg",
        tag: "Diet Plan",
        author: "Saloni",
        date: "June 12, 2025",
    },
    {
        title: "Exercises That Actually Work For Weight Loss",
        image: "/assets/m2.jpg",
        tag: "Exercise",
        author: "Wrishila",
        date: "June 12, 2025",
    },
    {
        title: "7 Day GM Diet Plan For Weight Loss",
        image: "/assets/m1.jpg",
        tag: "Diet Plan",
        author: "Wrishila",
        date: "June 12, 2025",
    },
]

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


const Details = () => {
    return (
        <div>
            <div className="py-8" >
                <Navbar />
            </div>
            <div>
                <div className="w-full flex justify-center bg-[#DBDFD2] py-10">
                    <div className="w-full md:w-[90%] mx-auto bg-[#dbe0d2] rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-2/4">
                            <Image
                                src="/medicines/detail.png"
                                alt="Ozempic Injection"
                                width={600}
                                height={600}
                                className="rounded-xl object-cover w-full h-auto"
                            />
                        </div>

                        <div className="w-full md:w-1/3 space-y-4">
                            <h2 className="text-2xl md:text-5xl font-bold text-black">OZEMPIC</h2>

                            <div className="flex flex-wrap gap-6">
                                {["GLP-1", "Semaglutide", "Injection"].map((tag, i) => (
                                    <span
                                        key={i}
                                        className="border border-black rounded-full px-3 py-1 text-sm text-black"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <ul className="space-y-4 text-[24px] font-medium text-black">
                                {[
                                    "Lowers blood sugar",
                                    "Reduces appetite",
                                    "Regulates insulin",
                                    "Causes significant weight loss",
                                ].map((point, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-[#607a3e]" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <button className="bg-[#607a3e] hover:bg-[#4f6730] text-white font-semibold px-6 py-2 rounded-full text-sm">
                                Know More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center py-10">
                    <div className="min-w-[90%] max-w-screen-xl flex flex-col md:flex-row gap-12 items-center justify-center">

                        <div className="flex-1 text-center md:text-left space-y-6">
                            <p className={`text-3xl font-semibold ${unna.className}`}>What is OZEMPIC?</p>
                            <p className="text-left px-4 md:px-0">
                                Ozempic is a drug that is approved by the U.S. Food and Drug Administration (FDA) to
                                treat Type 2 diabetes and to reduce major heart events in adults who have Type 2 diabetes
                                and cardiovascular disease. Clinicians prescribe it off-label for weight loss because
                                clinical evidence shows it also helps people lose weight.
                            </p>
                            <p className="text-left px-4 md:px-0">
                                Ozempic is a brand name for semaglutide which Novo Nordisk manufactures.
                                It is a synthetic version of the GLP-1 hormone.
                            </p>
                            <div className="justify-center items-center flex" >
                                <Button className="text-lg md:text-2xl bg-[#79855F] cursor-pointer rounded-full hover:bg-[#79855F] px-8 py-5">
                                    Get Started
                                </Button>
                            </div>
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
                    <div className="min-w-[90%] max-w-screen-xl flex flex-col md:flex-row gap-12 items-center justify-center">
                        <div className="flex-1  hidden md:flex justify-center">
                            <Image
                                src="/medicines/detail.png"
                                alt="Detail Illustration"
                                width={800}
                                height={700}
                                className="w-full max-w-xl h-auto"
                            />
                        </div>
                        <div className="flex-1 text-center md:text-left space-y-6">
                            <p className={`text-3xl font-semibold ${unna.className}`}>Benefits of Ozempic</p>
                            <p className="text-left px-4 md:px-0" >
                                Expected weight loss depends on the dosage of Ozempic. In one study, people who took
                                2.4 mg of semaglutide every week for 68 weeks lost an average of 14.9% of their total
                                body weight. (Safe weight loss is one to two pounds per week.)
                            </p>
                            <p className="text-left px-4 md:px-0">
                                Although Ozempic is a diabetes medication, it may have more benefits for off-label use
                                beyond weight management. Multiple clinical trials funded by Novo Nordisk show semaglutide
                                can reduce the risk of major cardiovascular events such as heart attack, stroke, or
                                death in adults with Type 2 diabetes and known heart disease.
                            </p>
                            <p className="text-left px-4 md:px-0">
                                Semaglutide improves heart health by lowering blood sugar and helping people lose excess body
                                weight. Research is ongoing to determine if semaglutide can treat other medical conditions
                            </p>

                            <p className="text-left px-4 md:px-0">
                                And it’s significant to note that some patients have reported reduced cravings while using semaglutide for weight loss
                            </p>
                            <div className="justify-center items-center flex" >
                                <Button className="text-lg md:text-2xl bg-[#79855F] cursor-pointer rounded-full hover:bg-[#79855F] px-8 py-5">
                                    Get Started
                                </Button>
                            </div>
                        </div>

                        <div className="flex-1 flex md:hidden justify-center">
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
                    <div className="min-w-[90%] max-w-screen-xl flex flex-col md:flex-row gap-12 items-center justify-center">

                        <div className="flex-1 text-center md:text-left space-y-6">
                            <p className={`text-3xl font-semibold ${unna.className}`}>How does Ozempic work?</p>
                            <p className="text-left px-4 md:px-0">
                                When you eat, your food stimulates your gut to release the GLP-1 hormone. GLP-1 helps lower blood glucose (blood sugar) by stimulating insulin release. And insulin helps blood glucose enter your body’s cells for later energy use.
                                In some people, the gut doesn't make enough natural GLP-1, or the brain isn't sensitive to it
                            </p>
                            <p className="text-left px-4 md:px-0">
                                Ozempic is a synthetic GLP-1 RA or glucagon-like peptide-1 receptor agonist. A drug that works as an agonist activates the same cell receptors as the body's natural hormones. So, Ozempic works in the gut like natural GLP-1. Because Ozempic slows digestion,
                                it helps curb hunger and signal fullness to the brain. As a result, some people with obesity have lost weight while taking i
                            </p>
                            <p className="text-left  px-4 md:px-0">
                                Because Ozempic supports a process the body isn’t doing well, it’s intended for long-term use.
                                It’s important to note that GLP-1 medications don’t work for everyone. There are dozens of biological reasons why people struggle to lose weight.
                            </p>
                            <div className="justify-center items-center flex" >
                                <Button className="text-lg md:text-2xl bg-[#79855F] cursor-pointer rounded-full hover:bg-[#79855F] px-8 py-5">
                                    Get Started
                                </Button>
                            </div>
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

                <div className="w-full bg-[#DBDFD2] flex mt-[50px] md:mt-[100px] justify-center py-10">
                    <div className=" flex flex-col md:flex-row  items-center justify-center">
                        <div>
                            <p className="text-3xl md:text-5xl text-center py-6 font-bold" >How to use It</p>
                            <p className="text-xl md:text-2xl py-2 text-center" >Physicians typically instruct patients to take Ozempic once a week.</p>
                            <div className="pt-8" >
                                <div className="w-full  space-y-4 px-10 md:px-0">
                                    {faqData.map((item, i) => (
                                        <Accordion key={i} type="single" collapsible className="min-w-[75%]">
                                            <AccordionItem value={`item-${i + 1}`}>
                                                <AccordionTrigger className={`text-[20px] text-black font-semibold ${unna.className}`}>
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
                </div>

                <section className="w-full py-10 mt-[50px] md:mt-[100px]">
                    <div className="w-full flex justify-center">
                        <div className="w-full md:w-[90%] flex flex-col items-center md:items-start mx-auto gap-4">
                            {/* Title */}
                            <p className={`text-3xl md:text-5xl font-bold text-center md:text-left w-full ${unna.className}`}>
                                Other Medications
                            </p>

                            {/* Arrows */}
                            <div className=" hidden md:flex  gap-4 self-end">
                                <button className="bg-transparent hover:bg-white border border-[#02542D] rounded-full p-2 shadow-md">
                                    <ArrowLeft className="w-5 h-5 text-[#02542D]" />
                                </button>
                                <button className="bg-transparent hover:bg-white border border-[#02542D] rounded-full p-2 shadow-md">
                                    <ArrowRight className="w-5 h-5 text-[#02542D]" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center py-10">
                        <div className="w-full flex flex-wrap gap-6 items-center justify-center">
                            <Image
                                src="/medicines/med1.png"
                                alt="Detail Illustration"
                                width={800}
                                height={700}
                                className="w-full max-w-xs md:max-w-md h-auto"
                            />
                            <Image
                                src="/medicines/med2.png"
                                alt="Detail Illustration"
                                width={800}
                                height={700}
                                className="w-full max-w-xs md:max-w-md h-auto"
                            />
                            <Image
                                src="/medicines/med3.png"
                                alt="Detail Illustration"
                                width={800}
                                height={700}
                                className="w-full max-w-xs md:max-w-md h-auto"
                            />
                        </div>
                    </div>
                </section>


                <section className="w-full py-12 bg-[#DBDFD2]">
                    <div className="w-full md:w-[90%] mx-auto px-4 space-y-10">
                        <p className={`text-3xl md:text-5xl text-center font-bold ${unna.className}`}>
                            More on OZEMPIC
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {blogs.map((blog, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-sm p-1 sm:p-4 md:p-5 hover:shadow-md transition rounded-xl border border-gray-300 flex flex-col overflow-hidden w-full"
                                >
                                    <div className="relative w-full h-72 md:h-72 xl:h-80">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            fill
                                            className="object-cover rounded-2xl"
                                        />
                                        <span className="absolute top-2 right-2 text-[10px] sm:text-xs md:text-sm lg:text-base bg-[#e2ebdf] text-black font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                                            {blog.tag}
                                        </span>
                                    </div>

                                    <div className="flex flex-col justify-between flex-grow mt-4">
                                        <h3 className="text-sm sm:text-base md:text-lg xl:text-xl text-left mb-2">
                                            {blog.title}
                                        </h3>
                                        <div className="text-xs sm:text-sm text-gray-500 flex justify-between items-center mt-auto">
                                            <span className="flex items-center gap-1">{blog.date}</span>
                                            <span className="flex items-center gap-1">
                                                <User className="w-4 h-4" />
                                                By {blog.author}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center">
                            <button className="mt-4 bg-[#a4af88] hover:bg-[#8f9d6e] text-white px-6 sm:px-8 md:px-10 py-2 md:py-3 rounded-full text-sm md:text-lg font-bold transition">
                                More Blogs
                            </button>
                        </div>
                    </div>
                </section>

                <section className={"bg-[#FAF8F5] px-6 py-12 lg:px-20 lg:py-24"}>
                    <div className="w-full flex justify-center">
                        <div className="w-full md:max-w-[90%]">
                            <div className="flex flex-col md:flex-row gap-12 w-full">
                                <div className="w-full md:w-1/2">
                                    <p className={`text-3xl text-center md:text-[60px] font-bold leading-tight ${unna.className}`}>
                                        <span className="text-[#79855F]">Your Questions, </span> <br />
                                        Answered.
                                    </p>
                                    <p className="flex text-center justify-center flex-wrap md:flex-nowrap items-center gap-2 text-xl md:text-[25px] mt-4 whitespace-nowrap">
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

                <Footer />

            </div>
        </div>
    )
}

export default Details;
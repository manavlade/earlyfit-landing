'use client'

import {
    Scale,
    CheckCircle,
    BadgeCheck,
    HeartPulse,
    Stethoscope,
    ChevronLeft,
    ChevronRight,
    X,
    Pill,
    Apple,
    Dumbbell,
    Headphones,
    FlaskConical,
    Syringe,
    AppWindow,
    CalendarDays,
    User,
    ArrowRight,
    Facebook, Instagram, Linkedin, MessageCircle,
    Check

} from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button';
import Link from 'next/link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Marquee } from './magicui/marquee';
import WeightCalculator from './weight';
import Navbar from './Navbar';
import ImageCarousels from './Imagecor';
import { Unna, Cardo, Manrope } from 'next/font/google';
import TestimonialCarousel from './testimonial-carousel';
import AnimatedTestimonials from './ui/animated-testimonials';


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


const benefits = [
    {
        title: 'More Energy',
        banner: '/assets/1i.png',
    },
    {
        banner: '/assets/22.png',
        title: 'Faster Metabolism',
    },
    {
        banner: '/assets/3i.png',
        title: 'No Cravings',
    },
    {
        banner: '/assets/4.png',
        title: 'Reduced inflammation',
    },
    {
        banner: '/assets/5.png',
        title: 'Joint Relief',
    },
    {
        banner: '/assets/6.png',
        title: 'Supports fertility for overweight women',
    },
    {
        banner: '/assets/7.png',
        title: 'Blood sugar regulation',
    },
    {
        banner: '/assets/8.png',
        title: 'Reduced Heart Risk',
    },
    {
        banner: '/assets/9.png',
        title: 'Hormonal balance',
    },
]

const doctors = [
    {
        name: "Dr. John Dee",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, tortor sed fermentum aliquam, eros nisl dapibus odio, non ultrices nibh nisi nec justo.",
        image: "/assets/d1.png",
    },
    {
        name: "Dr. John Dee",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, tortor sed fermentum aliquam, eros nisl dapibus odio, non ultrices nibh nisi nec justo.",
        image: "/assets/d3.png",
    },
    {
        name: "Dr. John Dee",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, tortor sed fermentum aliquam, eros nisl dapibus odio, non ultrices nibh nisi nec justo.",
        image: "/assets/d1.png",
    },
];

const articles = [
    {
        title:
            "This Popular GLP-1 Drug Helps Shed Massive Amount Of Weight And Keep It Off For Years, Find Scientists.",
        date: "April 2025",
        sourceLogo: "/assets/p2.png",
    },
    {
        title:
            "WHO Scientists Endorse Weight Loss Drugs For Controlling Obesity: What Does It Mean For Therapies?",
        date: "December 2024",
        sourceLogo: "/assets/p1.png",
    },
    {
        title:
            "Not Just Weight Loss, GLP-1 Drugs Like Ozempic Can Help With 175 Conditions; Says Groundbreaking Study",
        date: "January 2025",
        sourceLogo: "/assets/p3.png",
    },
    {
        title:
            "Oprah Winfrey Shares Experience Of Taking ‘magic Drug’ GLP-1 For Weight Loss: ‘One Of The First Things I Realised…’",
        date: "February 2025",
        sourceLogo: "/assets/p1.png",
    },
];

const imageUrls = [
    "/assets/i1.png",
    "/assets/i2.png",
    "/assets/i3.png",
    "/assets/i4.png",
    "/assets/i5.png",
    "/assets/i6.png",
    "/assets/i7.png",
    "/assets/i8.png",
    "/assets/i9.png",
    "/assets/i10.png",
    "/assets/i11.png",
    "/assets/i12.png",
    "/assets/i13.png",
    "/assets/i15.png",
    "/assets/i14.png",
    "/assets/i17.png",
    "/assets/i16.png",
    "/assets/i19.png",
]

const inclusions = [
    {
        label: "GLP-1 Medication",
        icon: <Pill className="inline-block mr-2 h-4 w-4" />,
        reset: "Rs. 49,000 (12 Weeks)",
        lite: "-",
    },
    {
        label: "Doctor Connect",
        icon: <Stethoscope className="inline-block mr-2 h-4 w-4" />,
        reset: "3 Sessions",
        lite: "3 Sessions",
    },
    {
        label: "Nutritionist Connect",
        icon: <Apple className="inline-block mr-2 h-4 w-4" />,
        reset: "Unlimited",
        lite: "Unlimited",
    },
    {
        label: "Lab Test",
        icon: <FlaskConical className="inline-block mr-2 h-4 w-4" />,
        reset: "2 Tests",
        lite: "2 Tests",
    },
    {
        label: "Smart Scale",
        icon: <Scale className="inline-block mr-2 h-4 w-4" />,
        reset: true,
        lite: true,
    },
    {
        label: "Kit to Manage Side-Effects",
        icon: <Syringe className="inline-block mr-2 h-4 w-4" />,
        reset: true,
        lite: true,
    },
    {
        label: "EARLY APP",
        icon: <AppWindow className="inline-block mr-2 h-4 w-4" />,
        reset: true,
        lite: true,
    },
    {
        label: "Personalized Meal Plan",
        icon: <Apple className="inline-block mr-2 h-4 w-4" />,
        reset: true,
        lite: true,
    },
    {
        label: "Personalized Workout Plan",
        icon: <Dumbbell className="inline-block mr-2 h-4 w-4" />,
        reset: true,
        lite: true,
    },
    {
        label: "24 x 7 Support",
        icon: <Headphones className="inline-block mr-2 h-4 w-4" />,
        reset: true,
        lite: false,
    },
];

const chunkArray = (arr: string[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );

const imageChunks = chunkArray(imageUrls, 6);

export default function Glp1Benefits() {
    return (
        <div>
            <Navbar />
            <div>
                <section
                    className="relative bg-cover bg-center bg-no-repeat min-h-screen"
                    style={{
                        backgroundImage: `url('/assets/home.png')`,
                    }}
                >
                    <div className="absolute inset-0"></div>

                    <div className="relative z-10 flex flex-col md:flex-row min-h-screen items-end md:items-center pt-10">
                        {/* Text Block */}
                        <div className="w-full md:w-2/4 h-auto bg-whitebackdrop-blur-lg p-6 md:p-10 text-white space-y-6 shadow-md mt-auto md:mt-0">
                            <h1 className={`text-[20px] sm:text-[24px] md:text-5xl font-bold leading-snug ${unna.className}`}>
                                The LAST weight loss <br /> program you’ll ever try
                            </h1>

                            <div className="bg-white inline-block px-4 rounded-lg text-left shadow-sm">
                                <p className="text-gray-900 text-[12px] sm:text-sm md:text-[30px] font-bold">
                                    Up to <span className="text-[20px] sm:text-[24px] md:text-[50px] font-semibold text-[#79855F]">20%*</span><br />
                                    weight loss with GLP-1
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <button className="bg-[#D2F47D] text-black text-sm sm:text-[16px] md:text-[18px] font-semibold px-5 py-2 rounded-full transition">
                                    Book FREE Consultation
                                </button>
                                <button className="bg-white text-black border border-gray-300 text-sm sm:text-[16px] md:text-[18px] font-medium px-5 py-2 rounded-full transition hover:bg-gray-100">
                                    Learn About GLP-1
                                </button>
                            </div>

                            <p className="text-[14px] sm:text-[18px] md:text-[26px] text-white">
                                India’s first weight loss program built <br /> by Super-Specialist Endocrinologists
                            </p>

                            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 text-xl text-white text-[26px]">
                                <div className="flex items-center gap-2">
                                    <Stethoscope className="w-5 h-5" />
                                    <span>Built by Super-Specialty Endocrinologists</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BadgeCheck className="w-5 h-5" />
                                    <span>Results or Money Back</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5" />
                                    <span>Safe, Effective and Sustainable Results</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <HeartPulse className="w-5 h-5" />
                                    <span>100% Personalized Plans</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>

            <div>
                <section className="py-12 px-6 md:px-16 bg-white">
                    <div className="w-full flex justify-center">
                        <div className="w-full md:max-w-[90%] grid md:grid-cols-2 gap-14 items-center ">
                            <div>
                                <h2 className={`text-[23px] md:text-5xl justify-center-safe sm:px-5 px-0 font-bold text-gray-900 mb-6 leading-snug ${unna.className}`}>
                                    Early Leans On GLP-1 To Help You Lose Weight
                                </h2>
                                <p className="text-gray-700 text-[10px] md:text-xl">
                                    GLP-1s are a naturally occurring peptide in the human body. They make you feel full for longer, naturally reducing appetite and cravings.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-x-10 gap-y-5">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <Image
                                            src={benefit.banner}
                                            alt={benefit.title}
                                            width={100}
                                            height={100}
                                        />
                                        <p className="text-black text-center font-semibold text-md md:text-lg">
                                            {benefit.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-6 md:py-16">
                    <div className="w-full flex justify-center">
                        <div className="w-full max-w-[90%] md:max-w-[75%] flex flex-col-reverse md:flex-row justify-between gap-8 items-center">
                            <div className="w-full md:w-1/2">
                                <Image
                                    src="/assets/graph.png"
                                    alt="graph"
                                    width={1000}
                                    height={1000}
                                    className="w-full h-auto"
                                />
                            </div>

                            <div className="w-full md:w-1/2 flex flex-col gap-4 border p-6 border-white text-left">
                                <p className={`font-bold text-[26px] sm:text-[32px] md:text-[40px] leading-snug ${unna.className}`}>
                                    Rooted in Medical Research and Science
                                </p>

                                <p className="text-[16px] sm:text-[5px] md:text-[20px]">
                                    <span className="underline pr-2">Clinical Research</span>
                                    shows that the Early program can help you lose up to 20% of weight, often 4X more than just diet/exercise alone.
                                </p>

                                <p className="text-[16px] sm:text-[5px] md:text-[20px]">
                                    GLP-1 when used alone has risks like muscle loss. <br />
                                    Early's program uses pioneering technology, lifestyle coaching and science to be the safest and most effective long-term weight loss solution.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className={"bg-[#E8E9E1] px-6 py-12 lg:px-20 lg:py-24"}>
                    <div className="w-full flex justify-center">
                        <div className="w-full md:max-w-[75%] flex flex-col md:flex-row gap-5 items-center">

                            <div>
                                <p className={`text-[#79855F] font-bold text-[30px] md:text-[40px] leading-snug ${unna.className}`}>
                                    <span className="whitespace-nowrap">
                                        GLP-1s are <span className="text-black">BETTER</span>
                                    </span>
                                    <br />
                                    with Early
                                </p>

                                <p className="text-[18px] md:text-[20px]">Just like Biology</p>

                                <div className="flex justify-start pt-5">
                                    <Button className="bg-[#79855F] rounded-full px-7 py-8 text-2xl md:text-3xl text-white">
                                        Start Early
                                    </Button>
                                </div>
                            </div>

                            <div>
                                <AnimatedTestimonials />
                            </div>

                        </div>
                    </div>
                </section>

                <section className="px-4 md:px-16 py-20 bg-white">
                    <p className={`font-bold text-[22px] md:text-[70px] text-center ${unna.className}`} >How Early Works?</p>
                    <p className='text-[15px] md:text-[30px] text-center'>4 Steps to Sustainable Results</p>
                    <div className="w-[90%] mx-auto space-y-20 mt-10">

                        <div className="flex flex-col md:flex-row items-center gap-y-6 md:gap-8 relative">
                            <div className="w-full md:w-1/4">
                                <Image src="/assets/e1.png" alt="Step 1" width={300} height={240} />
                            </div>
                            <div className="w-full md:w-3/4 bg-[#E6EBE2] border border-[#C1C9B6] rounded-2xl p-6 relative overflow-visible">
                                <div className={`absolute -top-4 left-4 bg-[#E6EBE2] border border-[#C1C9B6] px-4 py-1 rounded-lg text-[24px] font-semibold text-[#6C7D52] ${unna.className}`}>
                                    STEP 1
                                </div>
                                <h3 className={`text-xl md:text-[40px] font-extrabold mb-2 ${unna.className}`}>Start with a Free Consultation</h3>
                                <p className="text-base md:text-[26px] text-gray-800 mb-4">
                                    Book a free, no-obligation call with an Early expert. We’ll explain how GLP-1s work, answer your questions, and assess whether Early is the right fit for your health goals.
                                </p>
                                <button className="bg-[#6C7D52] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#5b6947] transition">
                                    Start EARLY
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse md:flex-row items-center gap-10 relative">
                            <div className="w-full md:w-3/4 bg-[#F3F4F0] border border-[#D3D8CB] rounded-2xl p-6 relative">
                                <div className={`absolute -top-4 left-4 bg-[#F3F4F0] border border-[#D3D8CB] px-4 py-1 rounded-lg text-[24px] font-semibold text-[#6C7D52] ${unna.className}`}>
                                    STEP 2
                                </div>
                                <h3 className={`text-xl md:text-[40px] font-extrabold mb-2 ${unna.className}`}>Activate Early App, Devices & Care Team</h3>
                                <p className="text-base md:text-[26px] text-gray-800">
                                    We help you setup the Early App, your at-home blood tests, smart scale delivery, and your first consult with an Early Endocrinologist. The Early app connects your CGM, fitness tracker, and scale, and brings your care team, data, and daily plan into one place.
                                </p>
                            </div>
                            <div className="w-full md:w-1/4">
                                <Image src="/assets/e2.png" alt="Step 2" width={300} height={240} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-y-6 md:gap-10 relative">
                            <div className="w-full md:w-1/4">
                                <Image src="/assets/e3.png" alt="Step 3" width={300} height={240} />
                            </div>
                            <div className="w-full md:w-3/4 bg-[#E6EBE2] border border-[#C1C9B6] rounded-2xl p-6 relative">
                                <div className={`absolute -top-4 left-4 bg-[#E6EBE2] border border-[#C1C9B6] px-4 py-1 rounded-lg text-[24px] font-semibold text-[#6C7D52] ${unna.className}`}>
                                    STEP 3
                                </div>
                                <h3 className={`text-xl md:text-[40px] font-extrabold mb-2 ${unna.className}`}>Your Personalized Plan</h3>
                                <p className="text-base md:text-[26px] text-gray-800">
                                    Your care team analyzes data from your meals, workouts, and body composition. Your food, movement, and medication plan is adjusted weekly and scientifically, all tailored to your body.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse md:flex-row items-center gap-10 justify-between relative">
                            <div className="w-full md:w-3/4 bg-[#F3F4F0] border border-[#D3D8CB] rounded-2xl p-6 relative">
                                <div className={`absolute -top-4 left-4 bg-[#F3F4F0] border border-[#D3D8CB] px-4 py-1 rounded-lg text-[24px] font-semibold text-[#6C7D52] ${unna.className}`}>
                                    STEP 4
                                </div>
                                <h3 className={`text-xl md:text-[40px] font-extrabold mb-2 ${unna.className}`}>Medication stops, Progress continues!</h3>
                                <p className="text-base md:text-[26px] text-gray-800">
                                    We help you taper medication safely and lock in your progress. Your app keeps you on track with habit reminders, coaching nudges, and progress insights — long after the meds stop.
                                </p>
                            </div>
                            <div className="w-full md:w-1/4">
                                <Image src="/assets/e4.png" alt="Step 4" width={300} height={240} />
                            </div>
                        </div>
                        <p className="text-base md:text-lg text-gray-800">
                            *Medications are only prescribed if your doctor finds them appropriate. If your BMI is under 27, or between
                            27-30 without a qualifying health condition, you won’t be eligible, and Metabolic Reset subscription will be refunded.
                        </p>
                    </div>
                </section>

                <div>
                    <TestimonialCarousel />
                </div>

                {/* <section className={"py-16 bg-[#fefdfc] text-center px-6"}>
                    <h2 className={`text-3xl md:text-4xl font-bold mb-12 ${unna.className}`}>Leading Doctors</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative max-w-7xl mx-auto">
                        <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-[#02542D] hover:bg-gray-100">
                            <ChevronLeft className="w-5 h-5 text-[#02542D]" />
                        </button>

                        {doctors.map((doc, index) => (
                            <div key={index} className="max-w-xs text-center space-y-4">
                                <div className="w-48 h-48 mx-auto overflow-hidden rounded-full relative">
                                    <Image
                                        src={doc.image}
                                        alt={doc.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className={`text-lg font-bold ${unna.className}`}>{doc.name}</h3>
                                <p className="text-sm text-gray-700">{doc.description}</p>
                            </div>
                        ))}

                        <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-[#02542D]">
                            <ChevronRight className="w-5 h-5 text-[#02542D]" />
                        </button>
                    </div>
                </section> */}

                <section className={"bg-[#F9F8F3] px-6 py-12 lg:px-20 lg:py-24"}>
                    <div className="w-full flex justify-center">
                        <div className="w-full max-w-[75%] text-center">
                            <h2 className={`text-2xl md:text-4xl font-bold text-black mb-10 ${unna.className}`}>
                                GLP-1 - a <span className="text-black font-bold">REVOLUTION</span> in weight loss,<br />
                                <span className="text-black font-bold">TRUSTED</span> by doctors
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {articles.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#6d7f59] text-white rounded-xl p-6 pb-20 relative overflow-visible flex flex-col justify-end"
                                    >
                                        <p className={`text-[20px] italic mb-6 ${unna.className}`}>{item.title}</p>

                                        <div className="mt-auto">
                                            <p className="text-[20px] mb-2">{item.date}</p>
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
                                                <img
                                                    src={item.sourceLogo}
                                                    alt="source"
                                                    className="h-16 w-auto object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className={"bg-[#F9F8F3] px-6 py-12 lg:px-20 lg:py-24 font-satoshi"}>
                    <div className="w-full flex justify-center">
                        <div className="w-full max-w-[75%] grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className={`text-[40px] md:text-4xl font-bold mb-4 ${unna.className}`}>
                                    Find your <span className="text-[#A5B970]">MetabolicType</span>
                                </h2>
                                <p className="text-gray-700 mb-8 text-[22px] ">
                                    Not all weight gain is the same. Understand your biology—and finally unlock
                                    the approach that works for YOU. Early’s team of super specialist
                                    endocrinologists and nutritionists have created MetabolicType, a research-backed
                                    tool that helps our Early experts identify your specific root causes of
                                    metabolic disturbances. This is the first step to creating custom, personalized
                                    weight loss plans.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    {[
                                        {
                                            title: "Hungry Brain",
                                            description:
                                                "Your Brain’s reward system is highly sensitive to good cues, making it hard to resist cravings.",
                                            icon: "🧠",
                                        },
                                        {
                                            title: "Hungry Gut",
                                            description:
                                                "Your digestive system empties quickly, sending frequent hunger signals throughout the day.",
                                            icon: "⏱️",
                                        },
                                        {
                                            title: "Slow Burn",
                                            description:
                                                "Your metabolism runs efficiently at rest but struggles to adapt to dietary changes.",
                                            icon: "🔥",
                                        },
                                        {
                                            title: "Emotional Hunger",
                                            description:
                                                "Your eating patterns are closely tied to emotional states, stress, and comfort-seeking.",
                                            icon: "💚",
                                        },
                                    ].map((item, idx) => (
                                        <div key={idx} className='border border-[#9CD212] rounded-lg p-4 ' >
                                            <div className="text-[20px] text-[#9CD212]">{item.icon}</div>
                                            <div

                                                className="flex gap-3"
                                            >
                                                <div>
                                                    <h4 className={`font-semibold text-[20px] mb-1 ${unna.className}`}>{item.title}</h4>
                                                    <p className="text-[16px] text-gray-700">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button className={`bg-[#393E2C] w-full text-[30px] text-white px-6 py-6 rounded-full font-semibold ${unna.className}`}>
                                    Start EARLY
                                </Button>
                            </div>

                            <div className="flex justify-center lg:justify-end">
                                <Image
                                    src="/assets/mobile.png"
                                    alt="App screenshot"
                                    width={1000}
                                    height={1000}
                                    className="w-full h-auto max-w-[500px]"
                                />
                            </div>

                        </div>
                    </div>
                </section>

                <section className={"bg-[#E8E9E1] px-6 py-12 lg:px-20 lg:py-24"}>
                    <div className="w-full flex justify-center">
                        <div className="w-full md:max-w-[75%] flex flex-col md:flex-row gap-5 items-center">
                            <div className="flex-1">
                                <p className={` text-[20px] md:text-[50px] font-bold ${unna.className}`}>
                                    Curious about weight
                                    <br />
                                    loss medications?
                                </p>
                                <p className=" text-[12px] md:text-[20px]  text-black font-medium py-4">GLP-1 weight loss & BMI calculator.</p>
                                <p className="text-[12px] md:text-[20px] text-black font-medium">Minimum average weight loss with proper diet & lifestyle changes.</p>

                                <div className="flex mt-6">
                                    <div className="bg-[#D2F47D] border border-[#D2F47D] w-80 h-80 sm:w-96 sm:h-96 rounded-full flex flex-col items-center justify-center text-center p-6">
                                        <p className={`text-black text-[28px] sm:text-[30px] font-medium leading-snug ${unna.className}`}>
                                            Lose up to <br />
                                            <span className="text-[60px] sm:text-[70px] font-bold">20%</span> <br />
                                            of your body weight with GLP-1
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 w-full mt-10 md:mt-0 flex justify-center">
                                <WeightCalculator />
                            </div>
                        </div>
                    </div>
                </section>

                <section className={"bg-[#f9f8f3] py-12 px-4"}>
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className={`text-3xl md:text-4xl font-semibold mb-2 ${cardo.className}`}>Pricing (3 Months)</h2>
                        <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <div className="bg-[#E8E9E1] p-10">
                            <div className="block md:hidden flex justify-center items-center">
                                <img src="/assets/Group 1261154645.png" alt="Logo" />
                            </div>
                            <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-300">
                                <table className="min-w-full text-sm text-gray-800 bg-[#79855F0D] border-separate border-spacing-y-4">
                                    <thead>
                                        <tr className="bg-[#79855F] text-white text-base">
                                            <th className={`p-4 text-left text-white font-bold text-[30px] ${cardo.className}`}>
                                                INCLUSIONS
                                            </th>
                                            <th className={`p-4 text-center text-white font-bold text-[30px] ${cardo.className}`}>
                                                METABOLIC RESET
                                            </th>
                                            <th className={`p-4 text-center text-white font-bold text-[30px] ${cardo.className}`}>
                                                METABOLIC LITE
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {inclusions.map((item, index) => (
                                            <tr key={index} className="bg-[#79855F0D] rounded-xl shadow-sm border border-gray-200">
                                                <td className={`p-4 text-[20px] text-black font-extrabold flex items-center gap-2 ${cardo.className}`}>
                                                    {item.icon}
                                                    <div className="flex">{item.label}</div>
                                                </td>
                                                <td className={`p-4 text-center text-[20px] ${cardo.className}`}>
                                                    {typeof item.reset === "boolean" ? (
                                                        item.reset ? (
                                                            <Check className="text-[#79855F] mx-auto" />
                                                        ) : (
                                                            <X className="text-red-500 mx-auto" />
                                                        )
                                                    ) : (
                                                        item.reset
                                                    )}
                                                </td>
                                                <td className={`p-4 text-center text-[20px] ${cardo.className}`}>
                                                    {typeof item.lite === "boolean" ? (
                                                        item.lite ? (
                                                            <Check className="text-[#79855F] mx-auto" />
                                                        ) : (
                                                            <X className="text-red-500 mx-auto" />
                                                        )
                                                    ) : (
                                                        item.lite
                                                    )}
                                                </td>
                                            </tr>
                                        ))}

                                        <tr className="bg-[#79855F] font-semibold text-lg border border-gray-300">
                                            <td className={`p-4 text-left text-white ${cardo.className}`}>YOU PAY</td>
                                            <td className={`p-4 text-center text-white ${cardo.className}`}>Rs. 64,999</td>
                                            <td className={`p-4 text-center text-white ${cardo.className}`}>Rs. 29,999</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <p className=" text-[7px] md:text-[20px] mt-4 text-gray-600 italic">
                            **Any medication beyond the initial 3 months will be prescribed by your doctor based on your needs."
                            <br />
                            EMI option available
                        </p>
                    </div>
                </section>

                <section className={"bg-[#f0f1ea] py-14 px-4 space-y-6"}>
                    <p className={`text-[50px] text-center font-bold ${cardo.className}`}>Weight loss, and so much more</p>
                    <p className="text-center text-[20px] pb-10">EARLY helps you feel your best, look your best, and improve other important aspects of your life</p>
                    <div className="w-full flex justify-center">
                        <div className="w-full overflow-hidden flex flex-col gap-6">
                            {imageChunks.map((chunk, index) => (
                                <Marquee
                                    key={index}
                                    reverse={index % 2 !== 0}
                                    pauseOnHover
                                    className="py-4"
                                >
                                    {chunk.map((url, idx) => (
                                        <div
                                            key={idx}
                                            className="relative w-[400px] h-[200px] overflow-hidden rounded-2xl"
                                        >
                                            <Image
                                                src={url}
                                                alt={`Image ${index * 6 + idx + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </Marquee>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={"bg-[#E8E9E1] px-6 py-12 lg:px-20 lg:py-24"}>
                    <div className="w-full flex justify-center">
                        <div className="w-full max-w-[75%] text-center">
                            <h2 className={`text-[60px] font-semibold mb-10 ${cardo.className}`}>Latest Blogs</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {blogs.map((blog, index) => (
                                    <div
                                        key={index}
                                        className="bg-white shadow-sm overflow-hidden text-left hover:shadow-md transition p-4 rounded-xl"
                                    >
                                        <div className="relative h-52 w-full">
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className='rounded-xl'
                                            />
                                            <span className="absolute top-2 right-2 bg-[#e2ebdf] text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                                                {blog.tag}
                                            </span>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-sm font-semibold mb-2">{blog.title}</h3>
                                            <div className="text-xs text-gray-500 flex justify-between items-center mt-3">
                                                <span className="flex items-center gap-1">
                                                    {blog.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <User className="w-4 h-4" />
                                                    By {blog.author}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="mt-10 bg-[#a4af88] hover:bg-[#8f9d6e] text-white px-6 py-2 rounded-full text-sm font-medium transition">
                                More Blogs
                            </button>
                        </div>
                    </div>
                </section>

                <section className={"bg-white px-6 py-12 lg:px-20 lg:py-24"}>
                    <div className="w-full flex justify-center">
                        <div className="w-full max-w-[75%]">
                            <div className="flex flex-col md:flex-row gap-12 w-full">
                                <div className="w-full md:w-1/2">
                                    <p className={`text-[40px] font-bold leading-tight ${unna.className}`}>
                                        <span className="text-[#79855F]">Your Questions, <br /></span>
                                        Answered.
                                    </p>
                                    <p className="flex gap-2 text-[25px] mt-4">
                                        Need Help?
                                        <span className="flex items-center gap-2 text-[#79855F] font-semibold cursor-pointer">
                                            Get in touch with us here <ArrowRight />
                                        </span>
                                    </p>
                                </div>
                                <div className="w-full md:w-1/2 space-y-4">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Accordion key={i} type="single" collapsible className="w-full">
                                            <AccordionItem value={`item-${i + 1}`}>
                                                <AccordionTrigger className={`text-[20px] text-black font-semibold ${unna.className}`}> Lorem Ipsum</AccordionTrigger>
                                                <AccordionContent>
                                                    Yes. It adheres to the WAI-ARIA design pattern.
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={"bg-[#434935] px-6 py-12 lg:px-20 lg:py-24"}>
                    <div className="max-w-7xl mx-auto flex flex-col gap-8 ">
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 p-2">
                                    <Image
                                        src="/assets/logo1.png"
                                        alt="Logo"
                                        width={200}
                                        height={200}
                                    />
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white rounded-full hover:bg-white/20 transition cursor-pointer">
                                        <Facebook className="w-5 h-5 " />
                                    </div>
                                    <div className="p-2 bg-white rounded-full hover:bg-white/20 transition cursor-pointer">
                                        <Instagram className="w-5 h-5" />
                                    </div>
                                    <div className="p-2 bg-white rounded-full hover:bg-white/20 transition cursor-pointer">
                                        <Linkedin className="w-5 h-5 " />
                                    </div>
                                    <div className="p-2 bg-white rounded-full hover:bg-white/20 transition cursor-pointer">
                                        <MessageCircle className="w-5 h-5" />
                                    </div>
                                </div>

                            </div>

                            <div className={`grid grid-cols-2 md:grid-cols-4 text-white gap-8 text-[20px] ${manrope.className}`}>
                                <div className="space-y-2 flex flex-col">
                                    <Link href="/">Home</Link>
                                    <Link href="#">Early Program</Link>
                                    <Link href="#">Medication</Link>
                                </div>
                                <div className="space-y-2 flex flex-col">
                                    <Link href="#">Calculators</Link>
                                    <Link href="#">Blog</Link>
                                    <Link href="#">Results</Link>
                                </div>
                                <div className="space-y-2 flex flex-col">
                                    <Link href="#">About Us</Link>
                                    <Link href="#">Careers</Link>
                                    <Link href="#">Contact Us</Link>
                                </div>
                                <div className="space-y-2 flex flex-col">
                                    <Link href="#">Terms of Use</Link>
                                    <Link href="#">Privacy Policy</Link>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="border-t border-[#2B2C23] pt-6 text-xs text-center text-white">
                            © 2025 EARLY. All rights reserved.
                        </div>
                    </div>
                </section>
            </div>


        </div>
    )
}

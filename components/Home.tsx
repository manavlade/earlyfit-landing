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
    Check,
    ArrowLeft

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
import { Unna, Cardo, Manrope } from 'next/font/google';
import TestimonialCarousel from './testimonial-carousel';
import AnimatedTestimonials from './ui/animated-testimonials';
import { useRef } from 'react';
import { Separator } from './ui/separator';


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

const chunkArray = (arr: string[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );

const imageChunks = chunkArray(imageUrls, 6);

export default function Glp1Benefits() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = direction === "left" ? -400 : 400
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
        }
    }
    return (
        <div>
            <Navbar />
            <div>
                <section className="relative min-h-screen">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
                        style={{
                            backgroundImage: `url('/assets/mobHome.png')`,
                        }}
                    />
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
                        style={{
                            backgroundImage: `url('/assets/home.png')`,
                        }}
                    />

                    <div className="relative min-h-screen">
                        <div className="absolute inset-0 bg-black/20"></div>

                        <div className="absolute bottom-0 left-0 z-10 w-full md:w-[50%] p-6 md:p-10 text-white space-y-6 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl md:bg-transparent md:backdrop-blur-none md:border-none">

                            <h1 className={`sm:text-[60px] md:text-5xl xl:text-7xl font-bold leading-snug ${unna.className}`}>
                                The LAST weight loss program you’ll ever try
                            </h1>

                            <div className="bg-white inline-block px-4 py-2 rounded-lg text-left shadow-sm">
                                <p className="text-gray-900 text-[16px] sm:text-[22px] md:text-[30px] font-bold leading-tight">
                                    Up to <span className="text-[24px] sm:text-[30px] md:text-[50px] font-semibold text-[#79855F]">20%*</span><br />
                                    weight loss with GLP-1
                                </p>
                            </div>

                            <div className="flex flex-wrap sm:flex-nowrap gap-4 w-full">
                                <button className="w-full sm:w-[250px] h-[50px] bg-[#D2F47D] text-black text-[14px] sm:text-[18px] md:text-[18px] font-semibold px-5 rounded-full transition whitespace-nowrap">
                                    Book FREE Consultation
                                </button>
                                <button className="w-full sm:w-[250px] h-[50px] bg-white text-black border border-gray-300 text-[14px] sm:text-[18px] md:text-[18px] font-medium px-5 rounded-full transition hover:bg-gray-100 whitespace-nowrap">
                                    Learn About GLP-1
                                </button>
                            </div>

                            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 text-white text-[18px] md:text-[18px] break-words w-full">
                                <div className="flex items-start gap-2">
                                    <Stethoscope className="w-5 h-5 shrink-0 mt-1" />
                                    <span>Built by Super-Specialty Endocrinologists</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <BadgeCheck className="w-5 h-5 shrink-0 mt-1" />
                                    <span>Results or Money Back</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 shrink-0 mt-1" />
                                    <span>Safe, Effective and Sustainable Results</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <HeartPulse className="w-5 h-5 shrink-0 mt-1" />
                                    <span>100% Personalized Plans</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>

            </div>

            <div>
                <section className="py-12 px-6 md:px-16 pt-[100px] bg-[#FAF8F5]">
                    <div className="w-full flex justify-center">
                        <div className="w-full md:max-w-[90%] flex flex-col md:grid md:grid-cols-2 gap-14 items-center">

                            <div className="w-full">
                                <h2 className={`text-[20px] md:text-5xl font-bold text-gray-900 mb-6 px-14 md:px-0 leading-snug ${unna.className}`}>
                                    Early Leans On GLP-1 To Help You Lose Weight
                                </h2>
                                <p className="text-gray-700 text-[14px] md:text-xl px-4 md:px-0">
                                    GLP-1s are a naturally occurring peptide in the human body. They make you feel full for longer, naturally reducing appetite and cravings.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-x-10 gap-y-6 w-full">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex flex-col items-center text-center">
                                        <Image
                                            src={benefit.banner}
                                            alt={benefit.title}
                                            width={100}
                                            height={100}
                                        />
                                        <p className="text-black font-semibold text-sm md:text-lg mt-2">
                                            {benefit.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-12 md:py-16 bg-[#FAF8F5] pt-[50px] md:pt-[100px]">
                    <div className="w-full flex justify-center">
                        <div className="w-full md:max-w-[90%] flex flex-col-reverse md:flex-row justify-between gap-12 md:gap-40 items-center px-0 md:px-10">

                            <div className="w-full md:w-1/2">
                                <Image
                                    src="/assets/graph.png"
                                    alt="graph"
                                    width={1500}
                                    height={1200}
                                    className="w-full h-auto max-w-[120%] md:max-w-full rounded-[20px]"
                                />
                            </div>

                            <div className="w-full md:w-1/2 flex flex-col gap-4 text-left">
                                <p className={`font-bold text-[22px] md:text-[40px] leading-snug px-16 md:px-0  ${unna.className}`}>
                                    Rooted in Medical Research and Science
                                </p>

                                <p className="text-[14px] md:text-[20px] ">
                                    <span className="underline pr-2 px-4 md:px-0">Clinical Research</span>
                                    shows that the Early program can help you lose up to 20% of weight,
                                    often 4X more than just diet/exercise alone.
                                </p>

                                <p className="text-[14px] md:text-[20px] px-4 md:px-0">
                                    GLP-1 when used alone has risks like muscle loss. <br />
                                    Early's program uses pioneering technology, lifestyle coaching and
                                    science to be the safest and most effective long-term weight loss solution.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className={"bg-[#E8E9E1] px-6 py-[50px] overflow-x-hidden md:py-[941px] pt-[50px] md:pt-[100px] lg:px-20 lg:py-24"}>
                    <div className="w-full flex justify-center">
                        <div className="w-full md:max-w-[90%] flex flex-col md:flex-row gap-32 items-center">
                            <div>
                                <p className={`text-[#79855F] font-bold text-[30px] md:text-[50px] leading-snug ${unna.className}`}>
                                    <span className="whitespace-nowrap">
                                        GLP-1s are <span className="text-black">BETTER</span>
                                    </span>
                                    <br />
                                    with Early
                                </p>
                                <p className="text-[18px] md:text-[20px]">Just like Biology</p>

                                <div className="flex justify-start pt-5">
                                    <Button className="bg-[#79855F] w-[262px] h-[71px] rounded-full px-2 md:px-7 py-2 md:py-8 text-[20px] md:text-[30px] md:text-3xl text-white">
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

                <section className="px-4 md:px-16 py-20  pt-[50px] md:pt-[100px] bg-[#FAF8F5]">
                    <p className={`font-bold text-[22px] md:text-[70px] text-center ${unna.className}`} >How Early Works?</p>
                    <p className='text-[15px] md:text-[30px] text-center'>4 Steps to Sustainable Results</p>
                    <div className="w-[90%] mx-auto space-y-[30px] mt-10">
                        {/* STEP 1 */}
                        <div className="flex flex-col md:flex-row items-center gap-y-6 md:gap-8 relative">
                            <div className="w-full md:w-1/4 pb-4">
                                <Image src="/assets/e1.png" alt="Step 1" width={262} height={294} />
                            </div>
                            <div className="w-full md:w-3/4 bg-[#E3E6DC] border border-black rounded-xl p-6 relative overflow-visible">
                                <div className={`absolute -top-7 left-4 bg-[#E6EBE2] border border-black px-4 py-1 rounded-lg text-base md:text-2xl font-semibold text-[#6C7D52] ${unna.className}`}>
                                    STEP 1
                                </div>
                                <h3 className={`text-xl md:text-4xl font-extrabold mb-2 pt-2 ${unna.className}`}>
                                    Start with a Free Consultation
                                </h3>
                                <p className="text-sm md:text-xl text-gray-800 mb-4">
                                    Book a free, no-obligation call with an Early expert. We’ll explain how GLP-1s work, answer your questions, and assess whether Early is the right fit for your health goals.
                                </p>
                                <button className="bg-[#6C7D52] text-white px-7 py-2 rounded-full text-sm md:text-base font-bold hover:bg-[#5b6947] transition">
                                    Start EARLY
                                </button>
                            </div>
                        </div>

                        {/* STEP 2 */}
                        <div className="flex flex-col-reverse md:flex-row items-center gap-10 relative">
                            <div className="w-full md:w-3/4 bg-[#E3E6DC] border border-black rounded-xl p-6 relative">
                                <div className={`absolute -top-7 left-4 bg-[#F3F4F0] border border-black px-4 py-1 rounded-lg text-base md:text-2xl font-semibold text-[#6C7D52] ${unna.className}`}>
                                    STEP 2
                                </div>
                                <h3 className={`text-xl md:text-4xl font-extrabold mb-2 pt-2 ${unna.className}`}>
                                    Activate Early App, Devices & Care Team
                                </h3>
                                <p className="text-sm md:text-xl text-gray-800">
                                    We help you setup the Early App, your at-home blood tests, smart scale delivery, and your first consult with an Early Endocrinologist. The Early app connects your CGM, fitness tracker, and scale, and brings your care team, data, and daily plan into one place.
                                </p>
                            </div>
                            <div className="w-full md:w-1/4 pb-4">
                                <Image src="/assets/e2.png" alt="Step 2" width={322} height={304} />
                            </div>
                        </div>

                        {/* STEP 3 */}
                        <div className="flex flex-col md:flex-row items-center gap-y-6 md:gap-10 relative">
                            <div className="w-full md:w-1/4 pb-4">
                                <Image src="/assets/e3.png" alt="Step 3" width={222} height={284} />
                            </div>
                            <div className="w-full md:w-3/4 bg-[#E3E6DC] border border-black rounded-xl p-6 relative">
                                <div className={`absolute -top-7 left-4 bg-[#E6EBE2] border border-black px-4 py-1 rounded-lg text-base md:text-2xl font-semibold text-[#6C7D52] ${unna.className}`}>
                                    STEP 3
                                </div>
                                <h3 className={`text-xl md:text-4xl font-extrabold mb-2 pt-6 ${unna.className}`}>
                                    Your Personalized Plan
                                </h3>
                                <p className="text-sm md:text-xl text-gray-800 pb-6">
                                    Your care team analyzes data from your meals, workouts, and body composition. Your food, movement, and medication plan is adjusted weekly and scientifically, all tailored to your body.
                                </p>
                            </div>
                        </div>

                        {/* STEP 4 */}
                        <div className="flex flex-col-reverse md:flex-row items-center gap-10 justify-between relative">
                            <div className="w-full md:w-3/4 bg-[#E3E6DC] border border-black rounded-xl p-6 relative">
                                <div className={`absolute -top-7 left-7 bg-[#F3F4F0] border border-black px-4 py-1 rounded-lg text-base md:text-2xl font-semibold text-[#6C7D52] ${unna.className}`}>
                                    STEP 4
                                </div>
                                <h3 className={`text-xl md:text-4xl font-extrabold mb-2 pt-6 ${unna.className}`}>
                                    Medication stops, Progress continues!
                                </h3>
                                <p className="text-sm md:text-xl text-gray-800 pb-6">
                                    We help you taper medication safely and lock in your progress. Your app keeps you on track with habit reminders, coaching nudges, and progress insights — long after the meds stop.
                                </p>
                            </div>
                            <div className="w-full md:w-1/4 pb-4">
                                <Image src="/assets/e4.png" alt="Step 4" width={332} height={284} />
                            </div>
                        </div>
                        {/* Disclaimer */}
                        <p className="text-xs md:text-base text-gray-800 items-center text-center">
                            *Medications are only prescribed if your doctor finds them appropriate. If your BMI is under 27, or between <br /> 27-30 without a qualifying health condition, you won’t be eligible, and Metabolic Reset subscription will be refunded.
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

                <section className={"bg-[#F9F8F3] px-6 py-12 lg:px-20 pt-[50px] md:pt-[100px] lg:py-24"}>
                    <div className="w-full flex justify-center">
                        <div className="w-full max-w-[90%] text-center">
                            <h2 className={`text-2xl md:text-4xl font-bold text-black mb-10 ${unna.className}`}>
                                GLP-1 - a <span className="text-black font-bold">REVOLUTION</span> in weight loss,<br />
                                <span className="text-black font-bold">TRUSTED</span> by doctors
                            </h2>

                            <div className="relative">
                                <div
                                    ref={scrollRef}
                                    className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory sm:flex-wrap lg:grid lg:grid-cols-4 lg:overflow-visible"
                                >
                                    {articles.map((item, index) => (
                                        <div
                                            key={index}
                                            className="min-w-[48%] sm:min-w-[48%] lg:min-w-0 snap-start bg-[#6d7f59] text-white rounded-xl p-6 pb-20 relative overflow-visible flex flex-col justify-end"
                                        >
                                            <p className={` text-[10px] md:text-[20px] italic mb-2 ${unna.className}`}>
                                                {item.title}
                                            </p>

                                            <div className="">
                                                <p className="text-[10px] md:text-[20px]">{item.date}</p>
                                                <div className="absolute bottom-0 right-0 transform -translate-x-0 translate-y-1/2 z-10">
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
                                <div className="flex justify-center items-center pt-5 gap-10 mb-4 lg:hidden">
                                    <div className='border rounded-full ' >
                                        <button onClick={() => scroll("left")}>
                                            <ArrowLeft className="w-6 h-6 text-green-700" />
                                        </button>
                                    </div>
                                    <div className='border rounded-full '>
                                        <button className='border rounded-full p-2' onClick={() => scroll("right")}>
                                            <ArrowRight className="w-6 h-6 text-green-700" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={"bg-[#F9F8F3] px-6 py-12 pt-[50px] md:pt-[100px] lg:px-20 lg:py-24 font-satoshi"}>
                    <div className="w-full flex justify-center">
                        <div className="w-full max-w-[90%] grid md:grid-cols-2 items-center">
                            <div className='min-w-[70%]'>
                                <h2 className={`text-[40px] md:text-5xl font-bold mb-4 ${unna.className}`}>
                                    Find your <span className="text-[#79855F]">MetabolicType</span>
                                </h2>
                                <p className="text-gray-700 mb-8 text-[12px] md:text-[22px] ">
                                    Not all weight gain is the same. Understand your biology—and finally unlock
                                    the approach that works for YOU. Early’s team of super specialist
                                    endocrinologists and nutritionists have created MetabolicType, a research-backed
                                    tool that helps our Early experts identify your specific root causes of
                                    metabolic disturbances. This is the first step to creating custom, personalized
                                    weight loss plans.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {[
                                        {
                                            title: "Hungry Brain",
                                            description:
                                                "Your Brain’s reward system is highly sensitive to good cues, making it hard to resist cravings.",
                                            icon: "/assets/vector.png",
                                        },
                                        {
                                            title: "Hungry Gut",
                                            description:
                                                "Your digestive system empties quickly, sending frequent hunger signals throughout the day.",
                                            icon: "/assets/vector(1).png",
                                        },
                                        {
                                            title: "Slow Burn",
                                            description:
                                                "Your metabolism runs efficiently at rest but struggles to adapt to dietary changes.",
                                            icon: "/assets/vector(2).png",
                                        },
                                        {
                                            title: "Emotional Hunger",
                                            description:
                                                "Your eating patterns are closely tied to emotional states, stress, and comfort-seeking.",
                                            icon: "/assets/vector(3).png",
                                        },
                                    ].map((item, idx) => (
                                        <div key={idx} className='border border-[#9CD212] rounded-lg p-4 ' >
                                            <div className="w-6 h-6 md:w-12 md:h-12 mb-2">
                                                <Image
                                                    src={item.icon}
                                                    alt={item.title}
                                                    width={48}
                                                    height={48}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            <div

                                                className="flex gap-3"
                                            >
                                                <div>
                                                    <h4 className={`font-semibold text-[8px] md:text-[26px] mb-1 ${unna.className}`}>{item.title}</h4>
                                                    <p className="text-[8px] md:text-[20px] text-gray-700">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button className={` bg-[#79855F] md:bg-[#393E2C] w-full text-[12px] md:text-[30px] text-white px-6 py-6 rounded-full font-semibold ${unna.className}`}>
                                    Start EARLY
                                </Button>
                            </div>

                            <div className="flex justify-center lg:justify-end  min-w-[30%]">
                                <Image
                                    src="/assets/mobile.png"
                                    alt="App screenshot"
                                    width={800}
                                    height={800}
                                    className="w-full h-auto max-w-[500px]"
                                />
                            </div>

                        </div>
                    </div>
                </section>

                <section className="bg-[#E8E9E1] px-6 py-12 pt-[100px] lg:px-20 lg:py-24">
                    <div className="w-full flex justify-center">
                        <div className="w-full md:max-w-[90%] flex flex-col md:flex-row gap-10 items-start md:items-center">

                            {/* TEXT: 40% on md+ screens */}
                            <div className="w-full md:w-[40%] flex flex-col">
                                <div>
                                    <p className={`text-[20px] md:text-[50px] font-bold text-center md:text-left ${unna.className}`}>
                                        Curious about weight
                                        <br />
                                        loss medications?
                                    </p>
                                    <p className="text-[12px] md:text-[20px] text-black font-medium py-4 text-center md:text-left">
                                        GLP-1 weight loss & BMI calculator.
                                    </p>
                                    <p className="text-[12px] md:text-[20px] text-black font-medium text-center md:text-left">
                                        Minimum average weight loss with proper diet & lifestyle changes.
                                    </p>
                                </div>

                                <div className="flex justify-center md:justify-start mt-6">
                                    <div className="bg-[#D2F47D] border border-[#D2F47D] w-64 h-64 sm:w-80 sm:h-80 rounded-full flex flex-col items-center justify-center text-center p-6">
                                        <p className={`text-black text-[24px] sm:text-[30px] font-medium leading-snug ${unna.className}`}>
                                            Lose up to <br />
                                            <span className="text-[50px] sm:text-[70px] font-bold">20%</span> <br />
                                            of your body weight with GLP-1
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-[60%] mt-10 md:mt-0 flex justify-center">
                                <WeightCalculator />
                            </div>

                        </div>
                    </div>
                </section>


                <section className={"bg-[#f9f8f3] py-12 pt-[100px] px-4"}>
                    <div className="max-w-[90%] mx-auto text-center">
                        <h2 className={`text-3xl md:text-4xl font-semibold mb-2 ${cardo.className}`}>Pricing (3 Months)</h2>
                        <p className="text-gray-600 mb-8">Explore our plans designed for your unique journey.</p>

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

                                        <tr className="bg-[#79855F] text-[32px] font-semibold text-lg border border-gray-300">
                                            <td className={`p-4 text-left text-white ${cardo.className}`}>YOU PAY</td>
                                            <td className={`p-4 text-center text-white ${cardo.className}`}>Rs. 64,999</td>
                                            <td className={`p-4 text-center text-white ${cardo.className}`}>Rs. 29,999</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <p className=" text-[7px] md:text-[20px] mt-4 text-gray-600 ">
                            **Any medication beyond the initial 3 months will be prescribed by your doctor based on your needs."
                            <br />
                            EMI option available
                        </p>
                    </div>
                </section>

                <section className="bg-[#f0f1ea] py-14 px-4 space-y-6 pt-[50px] md:pt-[100px]">
                    <p className={`text-[25px] md:text-[50px] text-center font-bold ${cardo.className}`}>
                        Weight loss, and so much more
                    </p>
                    <p className="text-center text-[20px] pb-10">
                        EARLY helps you feel your best, look your best, and improve other important aspects of your life
                    </p>
                    <div className="w-full flex justify-center">
                        <div className="w-full overflow-hidden flex flex-col gap-6">
                            {imageChunks.map((chunk, index) => (
                                <Marquee
                                    key={index}
                                    reverse={index % 2 !== 0}
                                    pauseOnHover
                                    className="py-2"
                                >
                                    {chunk.map((url, idx) => (
                                        <div
                                            key={idx}
                                            className="relative w-[450px] h-[150px] overflow-hidden rounded-2xl"
                                        >
                                            <Image
                                                src={url}
                                                alt={`Image ${index * 6 + idx + 1}`}
                                                fill
                                                className="object-cover absolute bottom-0 left-0"
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
                        <div className="w-full max-w-[90%] text-center">
                            <h2 className={` text-[22px] md:text-[60px] font-semibold mb-10 ${cardo.className}`}>Latest Blogs</h2>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-14">
                                {blogs.map((blog, index) => (
                                    <div
                                        key={index}
                                        className="bg-white shadow-sm p-5 hover:shadow-md transition rounded-xl border border-gray-300 flex flex-col overflow-hidden w-full md:w-[390px] min-h-[200px] md:min-h-[500px]"
                                    >

                                        <div className="relative w-full h-[300px] md:h-[400px]">
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-2xl"
                                            />
                                            <span className="absolute top-2 right-2 text-[20px] bg-[#e2ebdf] text-black text-xs font-bold px-3 py-1 rounded-full">
                                                {blog.tag}
                                            </span>
                                        </div>

                                        <div className="flex flex-col justify-between flex-grow">
                                            <h3 className=" text-[8px] md:text-[18px] font-semibold text-start justify-start mb-4 pt-6">{blog.title}</h3>

                                            <div className="text-xs text-gray-500 flex justify-between items-center mt-auto">
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

                            <button className="mt-10 bg-[#a4af88] hover:bg-[#8f9d6e] text-white px-12 py-4 rounded-full text-[20px] font-bold transition">
                                More Blogs
                            </button>
                        </div>
                    </div>
                </section>

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
                    <section className=" px-6 py-12 lg:px-20">
                        <div className="md:max-w-[90%] flex flex-col gap-8">
                            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                                <div className="w-full lg:w-[25%] space-y-6 pb-16">
                                    <div className="flex items-center gap-2 p-2">
                                        <Image
                                            src="/assets/logo1.png"
                                            alt="Logo"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-[75%] grid grid-cols-2 md:grid-cols-4 text-white gap-8 text-[33px] ${manrope.className}">
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

                            <div className="flex items-center gap-4">
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


                        </div>
                    </section>
                    <Separator />
                    <div className=" pt-6 text-[33px] text-center text-white">
                        © 2025 EARLY. All rights reserved.
                    </div>
                </div>
            </div>


        </div>
    )
}

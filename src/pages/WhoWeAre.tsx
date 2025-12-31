import { Helmet } from "react-helmet";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuestionsSection from "@/components/QuestionsSection";
import png1 from "@/assets/Omar.png"
import png2 from "@/assets/Samar.png"
import png3 from "@/assets/WALE.jpg"
import png4 from "@/assets/Hamid.png"
import png5 from "@/assets/gomaa.png"
import png6 from "@/assets/F1.jpg"
import {
    Users,
    Heart,
    Target,
    Briefcase,
    Phone,
    ChevronLeft,
    ChevronRight,
    Award,
    CheckCircle2,
    Shield,
    ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const teamLeaders = [
    {
        name: "Olawale Oladapo",
        role: "CEO & Founder",
        image: png3,
    },
    {
        name: "Samar",
        role: "COO And Partner",
        image: png2,
    },
    {
        name: "Abdullah Tarek",
        role: "Lead Manger",
        image: png6,
    },
    {
        name: "Omar Lorenzo",
        role: "Marketing Specialist",
        image: png1,
    },
    {
        name: "Ahmed Gomma",
        role: "Data specialist",
        image: png5,
    },
    {
        name: "Hamid Nosir",
        role: "Acquisition Manager",
        image: png4,
    },
];

const careers = [
    { title: "Cold Caller", icon: Phone },
    { title: "Acquisition Property Specialist", icon: Briefcase },
    { title: "Executive Office Assistant", icon: Users },
    { title: "Property Disposition Specialist", icon: Target },
    { title: "Transaction Co-ordinator", icon: Heart },
    { title: "Marketing Developer", icon: Briefcase },
];

const WhoWeAre = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % teamLeaders.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + teamLeaders.length) % teamLeaders.length);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <Helmet>
                <title>About HudREI - Local Indiana Home Buyers | Our Story & Values</title>
                <meta
                    name="description"
                    content="Learn about HudREI, a local family-owned company buying houses in Indiana. Discover our story, our values, and why homeowners trust us for a fair cash sale."
                />
                <link rel="canonical" href="https://hudrei.com/who-we-are" />
            </Helmet>

            <main className="min-h-screen bg-white">
                {/* --- PROFESSIONAL HERO --- */}
                <section className="relative pt-32 pb-24 overflow-hidden">
                    {/* Animated Background Elements */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -ml-64 -mb-64" />

                    <div className="container relative z-10 mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-8 uppercase tracking-widest">
                                    <Award className="w-4 h-4" />
                                    <span>Indiana's Most Trusted Home Buyers</span>
                                </div>
                                <h1 className="text-5xl md:text-[5rem] font-extrabold text-gray-900 mb-8 leading-[1.05] tracking-tight">
                                    Local Experts with a <span className="text-accent relative">
                                        Mission
                                        <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="8" />
                                        </svg>
                                    </span>
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-medium">
                                    HudREI is a family-owned, values-driven real estate company based right here in Indianapolis. We specialize in providing fair, fast solutions for homeowners across Indiana.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="rounded-2xl px-10 py-8 text-xl font-bold glow-button shadow-xl shadow-primary/20 hover:shadow-2xl hover:-translate-y-1 transition-all w-full sm:w-auto"
                                    >
                                        <Link to="/contact">Get My Cash Offer</Link>
                                    </Button>
                                    <a href="#team" className="text-gray-500 font-semibold hover:text-accent transition-colors flex items-center gap-2 group">
                                        Meet our small but mighty team
                                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* --- MODERN SOCIAL PROOF --- */}
                        <div className="mt-20 flex flex-wrap justify-center items-center gap-8 px-4">
                            {/* Google */}
                            <motion.a
                                whileHover={{ y: -5, scale: 1.02 }}
                                href="https://www.google.com/search?q=hudrei"
                                className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-xl shadow-black/5 border border-gray-100 min-w-[240px]"
                            >
                                <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" className="w-8 h-8" />
                                <div>
                                    <div className="flex text-yellow-500 mb-1">{"★★★★★"}</div>
                                    <div className="text-sm font-bold text-gray-900 leading-none">4.9/5 Google Rated</div>
                                </div>
                            </motion.a>

                            {/* YouTube */}
                            <motion.a
                                whileHover={{ y: -5, scale: 1.02 }}
                                href="https://www.youtube.com/@HudREI"
                                className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-xl shadow-black/5 border border-gray-100 min-w-[240px]"
                            >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" className="w-12" />
                                <div>
                                    <div className="text-sm font-bold text-gray-900 leading-none">Watch Our Process</div>
                                    <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-bold">Subscribe Now</div>
                                </div>
                            </motion.a>

                            {/* Facebook */}
                            <motion.a
                                whileHover={{ y: -5, scale: 1.02 }}
                                href="https://www.facebook.com/profile.php?id=61562781720104"
                                className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-xl shadow-black/5 border border-gray-100 min-w-[240px]"
                            >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-8 h-8" />
                                <div>
                                    <div className="flex text-yellow-500 mb-1">{"★★★★★"}</div>
                                    <div className="text-sm font-bold text-gray-900 leading-none">Join Our Community</div>
                                </div>
                            </motion.a>
                        </div>
                    </div>
                </section>

                {/* --- OUR STORY (SIDE BY SIDE) --- */}
                <section id="story" className="py-24 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
                            <motion.div
                                className="lg:w-1/2"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase mb-4 text-sm">
                                    <div className="w-8 h-px bg-primary" />
                                    The HudREI Story
                                </div>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                                    Born and Raised in <span className="text-accent underline decoration-accent/20">Indiana</span>
                                </h2>
                                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                    <p>
                                        At HudREI, our story isn’t about numbers or skyscrapers—it’s about neighborhood streets and kitchen tables. Growing up in Indiana, we saw first-hand how much a home means, but also how much of a burden it can become when life throws a curveball.
                                    </p>
                                    <p>
                                        We realized that the traditional real estate market wasn’t built for everyone. Homeowners facing probate, financial distress, or property damage were often left with zero good options. That's why we founded HudREI.
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        Today, we are proud to be the small, local team that people call when they need a fair, no-nonsense solution. We aren't just buying houses; we're helping our neighbors move forward.
                                    </p>
                                </div>
                                <div className="mt-10 flex flex-wrap gap-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900">500+</div>
                                            <div className="text-sm text-gray-500">Indiana Sellers Helped</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <Shield className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900">100% Local</div>
                                            <div className="text-sm text-gray-500">Family Owned & Operated</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="lg:w-1/2 relative"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                                    <img
                                        src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000&auto=format&fit=crop"
                                        alt="Indiana Home Study"
                                        className="w-full h-[500px] object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-0" />
                                <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* --- PREMIUM VALUES GRID --- */}
                <section id="values" className="py-32 bg-white relative overflow-hidden">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -ml-64 -mb-64" />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            className="max-w-4xl mx-auto text-center mb-24 px-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight">
                                Values That <span className="text-accent">Define Us</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                                The core principles that guide every single homeowner conversation and every decision we make.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                            {[
                                {
                                    icon: Target,
                                    title: "Transparency",
                                    desc: "No hidden fees, no surprises. We explain exactly how we calculate your offer based on local Indiana data.",
                                    borderColor: "group-hover:border-accent/50",
                                    glowColor: "shadow-accent/10",
                                    iconBg: "bg-accent/10",
                                    delay: 0
                                },
                                {
                                    icon: Heart,
                                    title: "Compassion",
                                    desc: "We understand that selling a home can be emotional. We treat every single homeowner with dignity and respect.",
                                    borderColor: "group-hover:border-primary/50",
                                    glowColor: "shadow-primary/10",
                                    iconBg: "bg-primary/10",
                                    delay: 0.1
                                },
                                {
                                    icon: Users,
                                    title: "Local Expertise",
                                    desc: "We live here and work here. We know the local market better than any national company or big iBuyer.",
                                    borderColor: "group-hover:border-accent/50",
                                    glowColor: "shadow-accent/10",
                                    iconBg: "bg-accent/10",
                                    delay: 0.2
                                },
                                {
                                    icon: Briefcase,
                                    title: "Fair Offers",
                                    desc: "We provide competitive cash offers based on real market conditions, not predatory algorithms.",
                                    borderColor: "group-hover:border-primary/50",
                                    glowColor: "shadow-primary/10",
                                    iconBg: "bg-primary/10",
                                    delay: 0.3
                                }
                            ].map((val, i) => (
                                <motion.div
                                    key={i}
                                    className={cn(
                                        "group bg-white p-12 rounded-[3rem] border border-gray-100 transition-all duration-700",
                                        "hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-3",
                                        val.borderColor,
                                        "relative overflow-hidden"
                                    )}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: val.delay }}
                                >
                                    <div className="relative z-10">
                                        <div className={cn(
                                            "w-20 h-20 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500",
                                            "group-hover:scale-110 group-hover:rotate-3",
                                            val.iconBg
                                        )}>
                                            <val.icon className="w-10 h-10 text-black" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-accent transition-colors">
                                            {val.title}
                                        </h3>
                                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                            {val.desc}
                                        </p>
                                    </div>

                                    {/* Subtle internal glow decoration */}
                                    <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gray-50 rounded-full group-hover:bg-accent/5 transition-colors duration-700 -z-0" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- PREMIUM TEAM SLIDER --- */}
                <section id="team" className="py-32 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">Meet the <span className="text-accent">HudREI</span> Family</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real people. Real conversations. Helping real Hoosiers move forward.</p>
                        </div>

                        <div className="relative max-w-7xl mx-auto px-4">
                            {/* Navigation Buttons */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-40 p-5 rounded-full bg-white shadow-2xl border border-gray-100 text-gray-900 hover:bg-accent hover:text-white transition-all duration-500 lg:-ml-12 hover:scale-110 active:scale-95 group/btn"
                                aria-label="Previous team member"
                            >
                                <ChevronLeft className="w-8 h-8 group-hover/btn:-translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-40 p-5 rounded-full bg-white shadow-2xl border border-gray-100 text-gray-900 hover:bg-accent hover:text-white transition-all duration-500 lg:-mr-12 hover:scale-110 active:scale-95 group/btn"
                                aria-label="Next team member"
                            >
                                <ChevronRight className="w-8 h-8 group-hover/btn:translate-x-1 transition-transform" />
                            </button>

                            <div className="relative h-[600px] flex items-center justify-center">
                                <div className="flex gap-10 items-center justify-center w-full">
                                    <AnimatePresence mode="popLayout" initial={false}>
                                        {teamLeaders.map((member, index) => {
                                            const isCenter = index === currentIndex;
                                            const isLeft = index === (currentIndex - 1 + teamLeaders.length) % teamLeaders.length;
                                            const isRight = index === (currentIndex + 1) % teamLeaders.length;

                                            if (!isCenter && !isLeft && !isRight) return null;

                                            return (
                                                <motion.div
                                                    key={member.name}
                                                    layout
                                                    initial={{ opacity: 0, scale: 0.8, x: isLeft ? -100 : isRight ? 100 : 0 }}
                                                    animate={{
                                                        opacity: isCenter ? 1 : 0.6,
                                                        scale: isCenter ? 1.05 : 0.85,
                                                        x: isLeft ? -50 : isRight ? 50 : 0,
                                                        zIndex: isCenter ? 30 : 20,
                                                        filter: isCenter ? "grayscale(0)" : "grayscale(0.5) blur(1px)"
                                                    }}
                                                    exit={{ opacity: 0, scale: 0.5 }}
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                    className="absolute w-[350px] h-[500px] flex-shrink-0 cursor-pointer"
                                                    onClick={() => {
                                                        if (isLeft) prevSlide();
                                                        if (isRight) nextSlide();
                                                    }}
                                                >
                                                    <div className={`relative w-full h-full bg-white rounded-[3rem] overflow-hidden shadow-2xl border-4 transition-colors duration-500 ${isCenter ? 'border-accent' : 'border-transparent'}`}>
                                                        <div className="h-full overflow-hidden group/card relative">
                                                            <img
                                                                src={member.image}
                                                                alt={member.name}
                                                                className="w-full h-full object-cover transition-all duration-1000 group-hover/card:scale-110"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                                                            <div className="absolute bottom-10 left-0 right-0 px-8 text-center text-white">
                                                                <h3 className={`text-3xl font-bold mb-2 transition-all duration-500 ${isCenter ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                                                    {member.name}
                                                                </h3>
                                                                <div className={`inline-block px-4 py-1 rounded-full bg-accent/90 text-white font-bold text-xs uppercase tracking-wider transition-all duration-700 delay-100 ${isCenter ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                                                    {member.role}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Indicators */}
                            <div className="flex justify-center gap-4 mt-12 pb-10">
                                {teamLeaders.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setDirection(i > currentIndex ? 1 : -1);
                                            setCurrentIndex(i);
                                        }}
                                        className={`h-3 rounded-full transition-all duration-700 ${i === currentIndex ? 'w-16 bg-accent' : 'w-4 bg-gray-200 hover:bg-gray-400'}`}
                                        aria-label={`Go to slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- MODERN CAREERS --- */}
                <section id="careers" className="py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Build Your <span className="text-accent underline decoration-accent/20">Future</span> Here</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We're always looking for world-class talent to join our mission of helping Indiana homeowners.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                            {careers.map((career, index) => (
                                <motion.div
                                    key={career.title}
                                    className="group bg-white p-8 rounded-3xl shadow-xl shadow-black/5 border border-gray-100 hover:border-accent/40 hover:scale-[1.02] transition-all duration-300"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <div className="flex items-center gap-5 mb-4">
                                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <career.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">{career.title}</h3>
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6">Join our fast-paced environment where your work directly impacts families in our community.</p>
                                    <Link to="/contact" className="text-accent font-bold text-sm tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all">
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center">
                            <div className="inline-block p-1 bg-gray-100 rounded-3xl">
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-[1.4rem] px-12 py-8 text-xl font-bold glow-button shadow-2xl"
                                >
                                    <Link to="/careers">View All Open Positions</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <QuestionsSection />

        </>
    );
};

export default WhoWeAre;

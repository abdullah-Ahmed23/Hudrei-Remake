import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Briefcase,
    Globe,
    Phone,
    Users,
    Heart,
    Target,
    Search,
    Send,
    ArrowRight,
    MapPin,
    Building2,
    CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuestionsSection from "@/components/QuestionsSection";
import SEO from "@/components/SEO";
import { useIsMobile } from "@/hooks/use-mobile";

const careers = [

    {
        title: "Property Acquisitions Specialist",
        icon: Briefcase,
        desc: "Analyze properties, negotiate offers with sellers, and secure contracts aligned with company investment goals.",
    },
    {
        title: "Executive Office Assistant",
        icon: Users,
        desc: "Support daily operations, manage schedules, handle communications, and assist leadership with administrative tasks.",
    },
    {
        title: "Property Disposition Specialist",
        icon: Target,
        desc: "Manage the sale of acquired properties, coordinate with buyers, and maximize return on investments.",
    },
    {
        title: "Transaction Co-ordinator",
        icon: Heart,
        desc: "Oversee the closing process from contract to funding. Coordinate with title companies and attorneys.",
    },
    {
        title: "Marketing Developer",
        icon: Briefcase,
        desc: "Execute marketing strategies, manage digital presence, and generate high-quality leads for the acquisitions team.",
    },
    {
        title: "Cold Caller",
        icon: Phone,
        desc: "Professional outreach to potential sellers. Requires excellent communication and persistence.",
    },
];

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1 },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const CareersSection = () => {
    const isMobile = useIsMobile();

    return (
        <>
            <SEO
                title="Careers at HudREI | Join Our Real Estate Team in Indiana"
                description="Looking for a career in real estate? Join HudREI, a rapidly growing local investment company. View our open positions and apply today."
                canonical="https://hudrei.com/careers"
            />
            <Header />
            <main className="min-h-screen bg-gray-50 pt-32">
                {/* Header */}
                <section className="container mx-auto px-4 mb-20">
                    <motion.div
                        key={isMobile ? "mobile-header" : "desktop-header"}
                        initial={isMobile ? undefined : { opacity: 0, y: 30 }}
                        whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        data-aos={isMobile ? "fade-up" : undefined}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6">
                            <Search className="w-4 h-4" />
                            <span>We Are Hiring</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-extrabold mb-6 text-brand-black leading-tight tracking-tight">
                            Build Your Future at <span className="text-accent relative inline-block">
                                HudREI
                                <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="6" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-xl text-brand-black/80 leading-relaxed">
                            Join a fast-growing Indiana real estate investment company focused on transparency, innovation, and helping our community. We're looking for driven individuals to help us reimagine the home selling experience.
                        </p>
                    </motion.div>
                </section>

                {/* Open Roles Grid */}
                <section className="container mx-auto px-4 pb-32">
                    <motion.div
                        variants={isMobile ? undefined : container}
                        initial={isMobile ? undefined : "hidden"}
                        whileInView={isMobile ? undefined : "show"}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {careers.map((role, i) => (
                            <motion.div
                                key={isMobile ? `m-${i}` : `d-${i}`}
                                variants={isMobile ? undefined : item}
                                data-aos={isMobile ? "fade-up" : undefined}
                                data-aos-delay={isMobile ? i * 100 : undefined}
                                className="group bg-white p-8 rounded-2xl border border-brand-black/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                            >
                                <div className="w-14 h-14 mb-8 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-[#01313c] group-hover:scale-110 transition-all duration-300">
                                    <role.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-2xl font-bold text-brand-black mb-4 group-hover:text-[#01313c] transition-colors">
                                    {role.title}
                                </h3>

                                <p className="text-brand-black/80 mb-8 leading-relaxed flex-grow">
                                    {role.desc}
                                </p>

                                <Button
                                    variant="ghost"
                                    className="p-0 h-auto font-bold text-[#01313c] hover:text-primary group/btn flex items-center justify-start gap-2 hover:bg-transparent"
                                    onClick={() => {
                                        document.getElementById('application-CTA')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    View Details & Apply
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                </Button>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Application CTA Section */}
                <section id="application-CTA" className="container mx-auto px-4 pb-32">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-5 gap-16 items-center">
                            {/* Info Side (2 cols) */}
                            <div className="lg:col-span-2" data-aos="fade-right">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-brand-black leading-tight">
                                    Apply To <span className="text-accent">Join HudREI</span>
                                </h2>

                                <div className="space-y-8">
                                    <div className="flex gap-4 p-6 bg-white rounded-2xl border border-brand-black/10 shadow-sm hover:shadow-md transition-all">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#01313c] flex items-center justify-center">
                                            <Briefcase className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-brand-black mb-1">Modern Culture</h4>
                                            <p className="text-sm text-brand-black/80">Strategic systems, automated workflows, and high-performance teams.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 p-6 bg-white rounded-2xl border border-brand-black/10 shadow-sm hover:shadow-md transition-all">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#01313c] flex items-center justify-center">
                                            <Globe className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-brand-black mb-1">Impactful Work</h4>
                                            <p className="text-sm text-brand-black/80">Help Indiana families move forward with confidence and integrity.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 p-8 bg-[#062f33] rounded-[2rem] text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
                                    <p className="text-lg text-gray-200 italic border-l-4 border-accent pl-4 relative z-10">
                                        "We don't just invest in houses; we invest in people. If you're driven, ethical, and ready to learn, we want to hear from you."
                                    </p>
                                    <div className="mt-6 flex items-center gap-4 relative z-10">
                                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-white">H</div>
                                        <div>
                                            <p className="font-bold">HudREI Leadership</p>
                                            <p className="text-xs text-brand-black/60 uppercase tracking-widest">Est. Quality</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Side (3 cols) - Replaces Form */}
                            <div className="lg:col-span-3 bg-white rounded-[2.5rem] shadow-2xl border border-brand-black/10 p-8 md:p-12 text-center relative overflow-hidden group" data-aos="fade-left">
                                {/* Decorative Background */}
                                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] -mr-32 -mt-32 transition-all duration-700 group-hover:bg-accent/10" />

                                <div className="relative z-10">
                                    <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                                        <Send className="w-10 h-10 text-[#01313c]" />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">Ready To Make An Impact?</h3>
                                    <p className="text-brand-black/80 mb-10 text-xl leading-relaxed max-w-lg mx-auto">
                                        We use a secure external portal to manage our applications efficiently. Click the button below to start your journey with us.
                                    </p>

                                    <Button
                                        asChild
                                        size="lg"
                                        className="w-full sm:w-auto px-12 py-8 text-xl font-bold rounded-2xl glow-button shadow-xl shadow-accent/20 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1 transition-all"
                                    >
                                        <a
                                            href="https://forms.monday.com/forms/6cdb8ccecaca5ba2b3b315764bcdb2ef?r=use1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Apply for a Career Here <ArrowRight className="ml-2 w-6 h-6" />
                                        </a>
                                    </Button>

                                    <p className="text-sm text-brand-black/60 mt-8 font-medium">
                                        Takes less than 5 minutes to complete
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <QuestionsSection />
            </main>
        </>
    );
};

export default CareersSection;




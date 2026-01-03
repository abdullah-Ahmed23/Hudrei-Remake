import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
    Search,
    ChartArea,
    DollarSign,
    Footprints,
    Phone,
    BadgeDollarSign,
    Key
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useIsMobile } from "@/hooks/use-mobile";

const ACCENT = "#318075";

const steps = [
    {
        step: "01",
        title: "Contact Us",
        icon: Phone,
        desc: "Fill out our simple form or call us directly. Tell us about your property and your situation.",
        more:
            "You don’t need to clean, repair, or prepare anything. Just tell us about your situation, timeline, and goals — it only takes a minute to get started.",
    },
    {
        step: "02",
        title: "Free Consultation",
        icon: Search, // Using Search or Phone or similar. The user said "A specialist would give you a call". Let's stick to Phone or maybe MessageSquare? HowItWorks has Phone in line 8? Line 8 imports Phone.
        desc: "A specialist would give you a call, understand your situation and goals so we can present an offer that fits your needs.",
        more:
            "We listen to your needs. This isn't just about the house; it's about what you need to move forward. We can discuss creative options, lease-backs, or standard cash offers.",
    },
    {
        step: "03",
        title: "Get Your Cash Offer",
        icon: BadgeDollarSign,
        desc: "If we are a good fit, we present a fair cash offer that actually closes.",
        more:
            "Our team analyzes comparable sales, property condition, and market trends to create a transparent, fair cash offer. We can usually present this to you within 24 hours of seeing the property.",
    },
    {
        step: "04",
        title: "Close on Your Timeline",
        icon: Key,
        desc: "We work with a local title company to handle all the paperwork. You choose the closing date. We pay all costs.",
        more:
            "You choose the closing date whether that's next week or next month, And we pay all closing costs. You get paid cash on closing day. No hidden fees, no commissions, and no pressure.",
    },
];

const HowItWorks = () => {
    const isMobile = useIsMobile();
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    /* Scroll-based line fill */
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.85", "end 0.15"],
    });

    const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <>
            <Helmet>
                <title>How It Works - Sell Your Indiana House Fast | HudREI Process</title>
                <meta name="description" content="Our simple 3-step process to sell your house fast in Indiana. Contact us, get a cash offer, and close on your timeline. See how easy it is." />
                <link rel="canonical" href="https://hudrei.com/how-it-works" />
            </Helmet>

            <section className="bg-white py-28">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* HEADER */}
                    <motion.div
                        key={isMobile ? "m-header" : "d-header"}
                        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-24"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-gray-900 mb-6 md:mb-8 tracking-tight">
                            Selling Your Indiana House in <span className="text-accent relative inline-block">
                                3 Easy Steps
                                <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="6" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A simple, transparent process designed to help you sell your home quickly and stress-free.
                        </p>
                    </motion.div>

                    {/* TIMELINE */}
                    <div ref={containerRef} className="relative">
                        {/* Vertical line (ALL SCREENS) */}
                        <motion.div
                            style={{ scaleY: isMobile ? 1 : lineScale }}
                            className="absolute left-6 top-0 bottom-0 w-[3px] bg-[#318075] origin-top rounded-full"
                        />

                        <div className="space-y-20 pl-20">
                            {steps.map((item, i) => {
                                const isOpen = openIndex === i;

                                return (
                                    <motion.div
                                        key={isMobile ? `m-step-${item.step}` : `d-step-${item.step}`}
                                        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                                        whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-80px" }}
                                        transition={{ duration: 0.6 }}
                                        className="relative"
                                    >
                                        {/* ICON NODE */}
                                        <motion.div
                                            key={isMobile ? "m-icon" : "d-icon"}
                                            initial={isMobile ? { scale: 1 } : { scale: 0 }}
                                            whileInView={isMobile ? undefined : { scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4 }}
                                            className="
                        absolute
                        -left-[52px]
                        top-6
                        w-12 h-12
                        rounded-full
                        bg-white
                        border-[3px]
                        border-[#318075]
                        flex
                        items-center
                        justify-center
                      "
                                        >
                                            <item.icon className="w-6 h-6 text-[#318075]" />
                                        </motion.div>

                                        {/* CARD */}
                                        <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-sm">
                                            <span className="text-sm font-semibold tracking-widest text-gray-500">
                                                STEP {item.step}
                                            </span>

                                            <h3 className="text-2xl sm:text-5xl font-bold text-[#318075] mt-3 mb-4">
                                                {item.title}
                                            </h3>

                                            <p className="text-lg text-gray-700 max-w-3xl">
                                                {item.desc}
                                            </p>

                                            {/* EXPAND */}
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        key={isMobile ? "m-expand" : "d-expand"}
                                                        initial={isMobile ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={isMobile ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
                                                        transition={{ duration: isMobile ? 0 : 0.35 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="text-lg text-gray-700 mt-4 max-w-3xl">
                                                            {item.more}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* TOGGLE */}
                                            <button
                                                onClick={() => setOpenIndex(isOpen ? null : i)}
                                                className="mt-6 text-sm font-semibold text-black underline underline-offset-4 hover:opacity-70 transition"
                                            >
                                                {isOpen ? "Read less" : "Read more"}
                                            </button>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex justify-center mt-24">
                        <Link to="/contact">
                            <Button
                                size="lg"
                                className="rounded-xl px-10 py-6 text-lg font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                            >
                                Get Your Cash Offer
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HowItWorks;

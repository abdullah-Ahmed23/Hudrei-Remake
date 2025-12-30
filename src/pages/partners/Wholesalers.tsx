import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Landmark, Zap, ShieldCheck, Check, ArrowRight, Wallet, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import SEO from "@/components/SEO";
import { motion, AnimatePresence } from "framer-motion";

const Wholesalers = () => {
    const [formType, setFormType] = useState<"submit-deal" | "join-list">("submit-deal");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <SEO
                title="Wholesaler Partnerships | Sell Your Deals to HudREI"
                description="Need a reliable buyer for your wholesale deals? HudREI buys fast with cash. No daisy chains, just solid closings."
                canonical="https://hudrei.com/partners/wholesalers"
            />

            <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#062f33] selection:text-white">
                {/* Light Hero */}
                <section className="relative pt-32 pb-20 overflow-hidden bg-white">
                    {/* Abstract BG */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#062f33]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl">
                            <div className="inline-block px-3 py-1 bg-[#062f33]/5 border border-[#062f33]/10 text-[#062f33] rounded-lg text-sm font-mono mb-6" data-aos="fade-down">
                                Verified Cash Buyer // IN
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900" data-aos="fade-up">
                                Your Reliable <span className="text-[#062f33]">End Buyer</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                                Tired of Daisy chains and buyers who back out? HudREI is a legitimate cash buyer with proof of funds.
                                We look for win-win relationships with local wholesalers.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="200">
                                <Button asChild size="lg" className="bg-[#062f33] hover:bg-[#0b434a] text-white font-bold h-14 px-8 rounded-lg text-lg shadow-xl shadow-[#062f33]/20 transition-transform hover:scale-105">
                                    <a href="#partner-form">Send Us A Deal</a>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="border-gray-200 text-gray-700 hover:bg-gray-50 h-14 px-8 rounded-lg text-lg bg-white transition-transform hover:scale-105">
                                    <Link to="#criteria">View Buy Box</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats / Proof */}
                <section className="py-20 border-y border-gray-100 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 duration-300" data-aos="fade-up" data-aos-delay="0">
                                <Zap className="w-10 h-10 text-[#062f33] mb-4" />
                                <h3 className="text-2xl font-bold mb-2 text-gray-900">24h Decisions</h3>
                                <p className="text-gray-600">We analyze deals fast. You'll get a solid yes or no within 24 hours.</p>
                            </div>
                            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 duration-300" data-aos="fade-up" data-aos-delay="100">
                                <ShieldCheck className="w-10 h-10 text-[#062f33] mb-4" />
                                <h3 className="text-2xl font-bold mb-2 text-gray-900">Proof Of Funds</h3>
                                <p className="text-gray-600">Verifiable cash. We close on your timeline, protecting your assignment fee.</p>
                            </div>
                            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 duration-300" data-aos="fade-up" data-aos-delay="200">
                                <Landmark className="w-10 h-10 text-[#062f33] mb-4" />
                                <h3 className="text-2xl font-bold mb-2 text-gray-900">Repeat Buyer</h3>
                                <p className="text-gray-600">We buy in volume. Bring us a good deal, and we'll be your go-to buyer.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Steps */}
                <section id="criteria" className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-900" data-aos="fade-left">How We Work</h2>
                                <div className="space-y-10">
                                    <div className="flex gap-6 group" data-aos="fade-up" data-aos-delay="0">
                                        <div className="text-6xl font-bold text-gray-100 group-hover:text-[#062f33]/10 transition-colors">01</div>
                                        <div>
                                            <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#062f33] transition-colors">Send The Deal</h4>
                                            <p className="text-gray-600 text-lg">Email us the address, details, and your asking price. We review immediately.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 group" data-aos="fade-up" data-aos-delay="100">
                                        <div className="text-6xl font-bold text-gray-100 group-hover:text-[#062f33]/10 transition-colors">02</div>
                                        <div>
                                            <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#062f33] transition-colors">Quick Walkthrough</h4>
                                            <p className="text-gray-600 text-lg">We'll view the property once (no endless inspections or buyer parades).</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 group" data-aos="fade-up" data-aos-delay="200">
                                        <div className="text-6xl font-bold text-gray-100 group-hover:text-[#062f33]/10 transition-colors">03</div>
                                        <div>
                                            <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#062f33] transition-colors">Closing</h4>
                                            <p className="text-gray-600 text-lg">We fund the deal at the title company. Simple, fast, and reliable.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/2 w-full bg-[#062f33] p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden" data-aos="zoom-in">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <Wallet className="w-8 h-8 text-white" />
                                        <h3 className="text-2xl font-bold text-white">Our Buy Box</h3>
                                    </div>

                                    <ul className="space-y-6">
                                        <li className="flex items-start gap-4">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-gray-100 text-lg">Single Family & Multi-Family</span>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-gray-100 text-lg">Indianapolis & Surrounding Areas (Marion, Hamilton, Hendricks, Johnson Counties)</span>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-gray-100 text-lg">Any Condition (Full Guts to Cosmetic Rehabs)</span>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-gray-100 text-lg">Price Range: $50k - $500k</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partner Form */}
                <section id="partner-form" className="py-24 bg-gray-50 text-gray-900">
                    <div className="container mx-auto px-4 max-w-2xl">
                        <div className="text-center mb-10" data-aos="fade-up">
                            <h2 className="text-4xl font-bold mb-4">Let's Do Business</h2>
                            <p className="text-lg text-gray-600">Choose how you'd like to partner with us below.</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8" data-aos="zoom-in-up">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-16 h-16 bg-[#062f33] rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Check className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Information Received</h3>
                                    <p className="text-gray-600 mb-6">We've got your info. Expect to hear from us shortly.</p>
                                    <Button onClick={() => setSubmitted(false)} variant="outline">Reset Form</Button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">

                                    {/* Toggle Type */}
                                    <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-xl mb-6 relative">
                                        {/* Animated Background Pill */}
                                        <motion.div
                                            className="absolute top-1 bottom-1 bg-white shadow-sm rounded-lg"
                                            layoutId="form-bg"
                                            initial={false}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            style={{
                                                width: "calc(50% - 4px)",
                                                left: formType === "submit-deal" ? "4px" : "calc(50%)"
                                            }}
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setFormType("submit-deal")}
                                            className={`relative z-10 py-3 rounded-lg font-medium text-sm transition-colors duration-200 ${formType === 'submit-deal' ? 'text-[#062f33]' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Submit A Deal
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFormType("join-list")}
                                            className={`relative z-10 py-3 rounded-lg font-medium text-sm transition-colors duration-200 ${formType === 'join-list' ? 'text-[#062f33]' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Join Buyers List
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Contact Name</Label>
                                            <Input className="bg-white text-black" id="name" placeholder="Name" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone</Label>
                                            <Input className="bg-white text-black" id="phone" type="tel" placeholder="Phone" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input className="bg-white text-black" id="email" type="email" placeholder="Email" required />
                                    </div>

                                    <div className="overflow-hidden min-h-[220px]">
                                        <AnimatePresence mode="wait">
                                            {formType === "submit-deal" ? (
                                                <motion.div
                                                    key="submit-deal"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 20 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="space-y-6"
                                                >
                                                    <div className="space-y-2">
                                                        <Label htmlFor="address">Property Address</Label>
                                                        <Input className="bg-white text-black" id="address" placeholder="123 Main St, Indianapolis" required />
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="space-y-2">
                                                            <Label htmlFor="price">Asking Price</Label>
                                                            <Input className="bg-white text-black" id="price" placeholder="$" />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="arv">Estimated ARV</Label>
                                                            <Input className="bg-white text-black" id="arv" placeholder="$" />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="link">Link to Photos (Dropbox/Drive)</Label>
                                                        <Input className="bg-white text-black" id="link" placeholder="https://..." />
                                                    </div>
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="join-list"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="space-y-6"
                                                >
                                                    <div className="space-y-2">
                                                        <Label htmlFor="company">Company Name</Label>
                                                        <Input className="bg-white text-black" id="company" placeholder="Your Wholesaling Co." />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="markets">Markets You Serve</Label>
                                                        <Input className="bg-white text-black" id="markets" placeholder="e.g. Marion County, Fishers, etc." />
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <Button type="submit" className="w-full bg-[#062f33] hover:bg-[#0b434a] text-white py-6 text-lg rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                                        {formType === "submit-deal" ? "Send Deal Now" : "Join Network"} <ChevronRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
};

export default Wholesalers;

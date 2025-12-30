import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Building, TrendingUp, Share2, MessageSquare, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEO from "@/components/SEO";

const LocalInvestors = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <SEO
                title="Investor Partnerships | JV & Opportunities in Indiana"
                description="Connect with HudREI. We partner with local investors on deals, JVs, and inventory sharing. Let's grow our portfolios together."
                canonical="https://hudrei.com/partners/local-investors"
            />

            <main className="min-h-screen bg-[#F8F9FA]">
                {/* Hero */}
                <section className="pt-32 pb-20 px-4 text-center bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto">
                        <div className="w-20 h-20 bg-[#062f33]/5 rounded-3xl flex items-center justify-center mx-auto mb-8 transform rotate-3 shadow-lg shadow-[#062f33]/10" data-aos="zoom-in" data-aos-duration="800">
                            <Building className="w-10 h-10 text-[#062f33]" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight" data-aos="fade-up">
                            Collaborate & <span className="text-[#062f33]">Grow Together</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                            Real estate is a team sport. Whether you're looking to partner on a flip, share resources, or need an exit strategy, we're open to creative partnerships.
                        </p>
                        <div className="flex justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
                            <Button asChild className="bg-[#062f33] hover:bg-[#0b434a] text-white rounded-full px-8 py-6 text-lg shadow-xl shadow-[#062f33]/20 transition-transform hover:scale-105">
                                <a href="#investor-form">Let's Connect</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Opportunities Grid (Masonry-ish look) */}
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-6">

                            {/* Card 1: JV */}
                            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 md:col-span-1 group" data-aos="fade-up">
                                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                                    <TrendingUp className="w-7 h-7 text-orange-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Joint Ventures</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Have a deal but short on capital or crew? We have the resources to help cross the finish line. Let's discuss a JV structure that is fair and profitable for everyone.
                                </p>
                                <a href="#investor-form" className="inline-flex items-center text-[#062f33] font-semibold hover:underline">
                                    Discuss a JV <ArrowUpRight className="w-4 h-4 ml-1" />
                                </a>
                            </div>

                            {/* Card 2: Inventory - Highlights */}
                            <div className="bg-[#062f33] p-10 rounded-3xl shadow-xl md:row-span-2 text-white flex flex-col justify-between relative overflow-hidden" data-aos="zoom-in" data-aos-delay="200">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                <div className="relative z-10">
                                    <Share2 className="w-12 h-12 text-[#2dd4bf] mb-6" />
                                    <h3 className="text-3xl font-bold mb-4">Inventory Sharing</h3>
                                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                        We sometimes come across deals that don't fit our specific buy box but might be perfect for you.
                                        Likewise, if you find something that fits us, we'd love to buy it.
                                    </p>
                                    <ul className="space-y-4 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
                                        <li className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-white text-[#062f33] flex items-center justify-center font-bold text-sm">1</div>
                                            <span>Off-market access</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-white text-[#062f33] flex items-center justify-center font-bold text-sm">2</div>
                                            <span>Pre-vetted leads</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-white text-[#062f33] flex items-center justify-center font-bold text-sm">3</div>
                                            <span>Quick disposition</span>
                                        </li>
                                    </ul>
                                </div>
                                <Button asChild className="bg-white text-[#062f33] hover:bg-gray-100 rounded-xl mt-8 w-full py-6 font-bold text-lg relative z-10 transition-transform hover:scale-105">
                                    <a href="#investor-form">Join Our Buyers List</a>
                                </Button>
                            </div>

                            {/* Card 3: Insights */}
                            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group" data-aos="fade-up" data-aos-delay="100">
                                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                                    <MessageSquare className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Insights</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    We believe in community over competition. Let's share data on what's working in the Indianapolis market right now.
                                </p>
                                <a href="#investor-form" className="inline-flex items-center text-[#062f33] font-semibold hover:underline">
                                    Grab Coffee <ArrowUpRight className="w-4 h-4 ml-1" />
                                </a>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Investor Form Section */}
                <section id="investor-form" className="py-20 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="text-center mb-10" data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Invest With Us</h2>
                            <p className="text-gray-600">Tell us about your goals so we can bring you the right opportunities.</p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200" data-aos="zoom-in-up">
                            {submitted ? (
                                <div className="text-center py-10">
                                    <div className="w-16 h-16 bg-[#062f33] rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Check className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Connected!</h3>
                                    <p className="text-gray-600 mb-6">We'll review your criteria and be in touch soon.</p>
                                    <Button onClick={() => setSubmitted(false)} variant="outline">Start Over</Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>Name</Label>
                                            <Input placeholder="Your Name" required className="bg-white" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Phone</Label>
                                            <Input placeholder="Your Phone" type="tel" required className="bg-white" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Email</Label>
                                        <Input placeholder="Your Email" type="email" required className="bg-white" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Primary Strategy</Label>
                                        <Select>
                                            <SelectTrigger className="bg-white">
                                                <SelectValue placeholder="Select Strategy..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="flip">Fix & Flip</SelectItem>
                                                <SelectItem value="rental">Buy & Hold (Rental)</SelectItem>
                                                <SelectItem value="multi">Multifamily</SelectItem>
                                                <SelectItem value="lending">Private Lending</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>What are you looking for?</Label>
                                        <Textarea placeholder="Specific areas, price points, or JV interests..." className="bg-white" />
                                    </div>

                                    <Button type="submit" className="w-full bg-[#062f33] hover:bg-[#0b434a] text-white py-6 text-lg rounded-xl shadow-lg">
                                        Send Message
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

export default LocalInvestors;

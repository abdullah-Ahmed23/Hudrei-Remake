import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Users, Handshake, DollarSign, Clock, CheckCircle2, ChevronRight, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEO from "@/components/SEO";

const Agents = () => {
    const [submitted, setSubmitted] = useState(false);

    // Placeholder submit handler - designed for GHL Webhook later
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // TODO: GHL Webhook Integration
    };

    return (
        <>
            <SEO
                title="Partner with HudREI | Solutions for Real Estate Agents"
                description="Got a hard-to-sell listing? Partner with HudREI. We buy as-is, close fast, and ensure you get your commission. Let's work together."
                canonical="https://hudrei.com/partners/agents"
            />

            <main className="min-h-screen bg-white font-sans">
                {/* Split Hero */}
                <section className="relative pt-24 lg:pt-0 min-h-[90vh] flex flex-col lg:flex-row">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 lg:p-20 order-2 lg:order-1">
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#062f33]/5 text-[#062f33] font-semibold text-sm mb-6 animate-fade-in" data-aos="fade-down">
                                <Users className="w-4 h-4" />
                                <span>For Real Estate Agents</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight" data-aos="fade-up">
                                Turn Dead Leads Into <span className="text-[#0b434a]">Commissions</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                                Have a listing that's expiring? A seller who can't afford repairs?
                                We buy properties as-is, so you can save the deal and keep your client happy.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="200">
                                <Button asChild size="lg" className="bg-[#062f33] hover:bg-[#0b434a] text-white rounded-full px-8 py-7 text-lg shadow-lg shadow-[#062f33]/20 transition-transform hover:scale-105">
                                    <a href="#refer-form">Refer a Listing</a>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-7 text-lg border-gray-200 bg-[#00767e] hover:bg-[#0b434a] transition-transform hover:scale-105">
                                    <a href="tel:3177951990">Call Us (317) 795-1990</a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="w-full lg:w-1/2 bg-[#062f33] relative overflow-hidden order-1 lg:order-2 min-h-[40vh] lg:min-h-auto" data-aos="zoom-in">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#062f33] to-[#041f22] opacity-90" />

                        <div className="relative h-full flex flex-col items-center justify-center text-white p-12 text-center">
                            <Handshake className="w-24 h-24 text-white/20 mb-8" data-aos="zoom-in" data-aos-delay="300" />
                            <h2 className="text-3xl font-bold mb-4" data-aos="fade-up" data-aos-delay="400">We Are Buyers, Not Competitors</h2>
                            <p className="text-gray-300 max-w-md text-lg" data-aos="fade-up" data-aos-delay="500">
                                We respect your relationship with the seller. Represent them, represent us, or take a referral fee.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pain vs Gain Grid */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Agents Love Us</h2>
                            <p className="text-gray-600 text-lg">We solve the problems that kill traditional listings.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#062f33] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="0">
                                <div className="w-14 h-14 bg-[#062f33]/10 rounded-xl flex items-center justify-center mb-6">
                                    <DollarSign className="w-7 h-7 text-[#062f33]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Protected Commissions</h3>
                                <p className="text-gray-600">
                                    Don't lose a deal because the house won't qualify for financing. We pay cash, and your commission is guaranteed on the HUD.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#062f33] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="100">
                                <div className="w-14 h-14 bg-[#062f33]/10 rounded-xl flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-7 h-7 text-[#062f33]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Buy As-Is</h3>
                                <p className="text-gray-600">
                                    No repair requests, no cleaning, no staging. We take the house exactly as it sits, saving you hours of coordination.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#062f33] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
                                <div className="w-14 h-14 bg-[#062f33]/10 rounded-xl flex items-center justify-center mb-6">
                                    <Clock className="w-7 h-7 text-[#062f33]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Guaranteed Close</h3>
                                <p className="text-gray-600">
                                    When we sign, we close. Don't risk your reputation on flaky investor buyers who back out during inspection.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Agent Referral Form Section */}
                <section id="refer-form" className="py-24 bg-[#062f33] text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
                            {/* Form Context */}
                            <div className="md:w-1/2 pt-10" data-aos="fade-up">
                                <div className="inline-block p-3 rounded-2xl bg-white/10 mb-6">
                                    <Building className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-4xl font-bold mb-6">Let's Save This Deal</h2>
                                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                    Fill out the form to get started. We'll run the numbers and get back to you with a cash offer within 24 hours.
                                    Your client gets a fair price, and you get your commission.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">1</div>
                                        <p>Submit property details</p>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">2</div>
                                        <p>We view (or buy sight unseen)</p>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">3</div>
                                        <p>Close and get paid</p>
                                    </div>
                                </div>
                            </div>

                            {/* The Form */}
                            <div className="md:w-1/2 w-full bg-white rounded-3xl p-8 md:p-10 text-gray-900 shadow-2xl" data-aos="zoom-in-up">
                                {submitted ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Details Received!</h3>
                                        <p className="text-gray-600 mb-8">We'll review your property and reach out typically within 2 hours.</p>
                                        <Button onClick={() => setSubmitted(false)} variant="outline">Submit Another</Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <h3 className="text-2xl font-bold mb-6">Realtor Referral Form</h3>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Agent Name</Label>
                                                <Input id="name" placeholder="John Doe" required className="bg-gray-50 border-gray-200" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone</Label>
                                                <Input id="phone" type="tel" placeholder="(555) 000-0000" required className="bg-gray-50 border-gray-200" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="john@brokerage.com" required className="bg-gray-50 border-gray-200" />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="brokerage">Brokerage Name</Label>
                                            <Input id="brokerage" placeholder="e.g. Century 21" required className="bg-gray-50 border-gray-200" />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="property">Property Address (Optional)</Label>
                                            <Input id="property" placeholder="123 Main St, Indianapolis, IN" className="bg-gray-50 border-gray-200" />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="notes">Notes / Situation</Label>
                                            <Textarea id="notes" placeholder="Needs foundation repair, owner relocating, etc..." className="bg-gray-50 border-gray-200 min-h-[100px]" />
                                        </div>

                                        <Button type="submit" className="w-full bg-[#062f33] hover:bg-[#0b434a] text-white py-6 text-lg rounded-xl">
                                            Send Referral <ChevronRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
};

export default Agents;

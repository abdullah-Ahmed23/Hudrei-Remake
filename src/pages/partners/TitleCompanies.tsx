import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Home, FileCheck, Clock, CheckSquare, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import SEO from "@/components/SEO";

const TitleCompanies = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <SEO
                title="Title Company Partners | Efficient Closings with HudREI"
                description="HudREI seeks efficiency-driven title partners for high-volume transactions in Indiana. Join our preferred vendor network."
                canonical="https://hudrei.com/partners/title-companies"
            />

            <main className="min-h-screen bg-gray-50 text-slate-800">
                {/* Header */}
                <div className="bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4 py-16 md:py-24 text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#062f33]/5 rounded-full mb-6 relative" data-aos="zoom-in">
                            <Home className="w-10 h-10 text-[#062f33]" />
                            <div className="absolute -bottom-1 -right-1 bg-[#eab308] rounded-full p-1.5 border-2 border-white">
                                <Check className="w-4 h-4 text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6" data-aos="fade-up">Streamlined Transactions</h1>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                            We value efficiency. HudREI conducts high-volume transactions and needs partners who can keep up.
                        </p>
                    </div>
                </div>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden" data-aos="fade-up">
                            <div className="grid md:grid-cols-2">
                                {/* Left Info */}
                                <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-gray-100 bg-white">
                                    <h2 className="text-3xl font-bold mb-10 text-slate-900">What We Provide</h2>
                                    <div className="space-y-10">
                                        <div className="flex gap-5" data-aos="fade-up" data-aos-delay="100">
                                            <div className="flex-shrink-0 w-12 h-12 bg-[#062f33]/10 rounded-xl flex items-center justify-center">
                                                <CheckSquare className="w-6 h-6 text-[#062f33]" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-xl mb-2">Organized Files</h3>
                                                <p className="text-slate-600 leading-relaxed">Complete packets and precise instructions to minimize back-and-forth emails. We know what you need before you ask.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-5" data-aos="fade-up" data-aos-delay="200">
                                            <div className="flex-shrink-0 w-12 h-12 bg-[#062f33]/10 rounded-xl flex items-center justify-center">
                                                <Clock className="w-6 h-6 text-[#062f33]" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-xl mb-2">Prompt Communication</h3>
                                                <p className="text-slate-600 leading-relaxed">We respect your time. We answer queries promptly to ensure smooth closings and keep the pipeline moving.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-5" data-aos="fade-up" data-aos-delay="300">
                                            <div className="flex-shrink-0 w-12 h-12 bg-[#062f33]/10 rounded-xl flex items-center justify-center">
                                                <FileCheck className="w-6 h-6 text-[#062f33]" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-xl mb-2">Volume Business</h3>
                                                <p className="text-slate-600 leading-relaxed">Become a trusted partner and expect consistent file openings from our team. We're looking for long-term relationships.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Form */}
                                <div className="p-10 md:p-14 bg-slate-50 flex flex-col justify-center">
                                    {submitted ? (
                                        <div className="text-center py-12">
                                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <Check className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2">Inquiry Sent</h3>
                                            <p className="text-gray-600 mb-6">Our Transaction Coordinator will contact you shortly.</p>
                                            <Button onClick={() => setSubmitted(false)} variant="outline">Back to Form</Button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="mb-6">
                                                <h2 className="text-2xl font-bold mb-2 text-slate-900">Become A Preferred Partner</h2>
                                                <p className="text-slate-600">Join our network of efficient closing partners.</p>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <Label>Company Name</Label>
                                                    <Input placeholder="Title Company Name" required className="bg-white" />
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label>Contact Person</Label>
                                                        <Input placeholder="Name" required className="bg-white" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label>Direct Phone</Label>
                                                        <Input placeholder="Phone" required className="bg-white" />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label>Email</Label>
                                                    <Input placeholder="Email" type="email" required className="bg-white" />
                                                </div>

                                                <div className="space-y-3 pt-2">
                                                    <Label>Do you handle assignment of contracts?</Label>
                                                    <RadioGroup defaultValue="yes" className="flex gap-4">
                                                        <div className="flex items-center space-x-2">
                                                            <RadioGroupItem value="yes" id="r1" />
                                                            <Label htmlFor="r1">Yes</Label>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <RadioGroupItem value="no" id="r2" />
                                                            <Label htmlFor="r2">No / Unsure</Label>
                                                        </div>
                                                    </RadioGroup>
                                                </div>

                                                <Button type="submit" className="w-full bg-[#062f33] hover:bg-[#0b434a] text-white font-bold py-6 text-lg rounded-xl mt-4">
                                                    Submit Inquiry <ChevronRight className="w-4 h-4 ml-2" />
                                                </Button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default TitleCompanies;

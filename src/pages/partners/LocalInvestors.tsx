import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Building, TrendingUp, Share2, MessageSquare, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEO from "@/components/SEO";
import QuestionsSection from "@/components/QuestionsSection";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormField from "@/components/FormField";

const investorSchema = z.object({
    name: z.string().min(1, "Name is required"),
    phone: z.string().min(10, "Valid phone number is required"),
    email: z.string().email("Valid email address is required"),
    strategy: z.string().min(1, "Please select a strategy"),
    interests: z.string().min(1, "Please tell us what you're looking for"),
});

type InvestorFormData = z.infer<typeof investorSchema>;

const LocalInvestors = () => {
    const [submitted, setSubmitted] = useState(false);
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace("#", ""));
            if (element) {
                // Small timeout to ensure DOM is ready
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [hash]);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<InvestorFormData>({
        resolver: zodResolver(investorSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            strategy: "",
            interests: "",
        },
    });

    const onSubmit = async (data: InvestorFormData) => {
        try {
            const payload = {
                fullName: data.name,
                phone: data.phone,
                email: data.email,
                primaryStrategy: data.strategy, // Values updated below
                lookingFor: data.interests,
                source: "Local Investor Page"
            };

            console.log("Submitting Investor:", payload);

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/investors`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.success) {
                setSubmitted(true);
                reset();
            } else {
                console.error("Submission failed:", result.error);
                alert("Submission failed: " + (result.error || "Unknown error"));
            }
        } catch (error) {
            console.error("Network Error:", error);
            alert("Network error. Please try again.");
        }
    };

    return (
        <>
            <SEO
                title="Investor Partnerships | JV & Opportunities in Indiana"
                description="Connect with HudREI. We partner with local investors on deals, JVs, and inventory sharing. Let's grow our portfolios together."
                canonical="https://hudrei.com/partners/local-investors"
            />

            <main className="min-h-screen bg-white font-sans">
                {/* Split Hero */}
                <section className="relative pt-24 lg:pt-0 min-h-[90vh] flex flex-col lg:flex-row">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 lg:p-20 order-2 lg:order-1">
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#062f33]/5 text-[#062f33] font-semibold text-sm mb-6 animate-fade-in" data-aos="fade-down">
                                <Building className="w-4 h-4" />
                                <span>For Real Estate Investors</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-extrabold text-brand-black mb-6 leading-tight tracking-tight" data-aos="fade-up">
                                Collaborate & <span className="text-accent relative inline-block">
                                    Grow Together
                                    <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="6" />
                                    </svg>
                                </span>
                            </h1>
                            <p className="text-xl text-brand-black/80 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                                Real estate is a team sport. Whether you're looking to partner on a flip, share resources, or need an exit strategy, we're open to creative partnerships.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="200">
                                <Button asChild size="lg" className="rounded-xl px-8 py-7 text-lg font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                    <a href="#investor-form">Let's Connect</a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="w-full lg:w-1/2 bg-[#062f33] relative overflow-hidden order-1 lg:order-2 min-h-[40vh] lg:min-h-auto" data-aos="zoom-in">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#062f33] to-[#041f22] opacity-90" />

                        <div className="relative h-full flex flex-col items-center justify-center text-white p-12 text-center">
                            <TrendingUp className="w-24 h-24 text-white/20 mb-8" data-aos="zoom-in" data-aos-delay="300" />
                            <h2 className="text-3xl font-bold mb-4" data-aos="fade-up" data-aos-delay="400">Scale Your Portfolio</h2>
                            <p className="text-gray-300 max-w-md text-lg" data-aos="fade-up" data-aos-delay="500">
                                Access off-market deals, joint venture opportunities, and market insights.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-brand-black mb-4">Partnership Opportunities</h2>
                            <p className="text-brand-black/80 text-lg">Ways we can work together.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#062f33] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="0">
                                <div className="w-14 h-14 bg-[#062f33]/10 rounded-xl flex items-center justify-center mb-6">
                                    <TrendingUp className="w-7 h-7 text-[#062f33]" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-black mb-3">Joint Ventures</h3>
                                <p className="text-brand-black/80">
                                    Have a deal but short on capital or crew? We have the resources to help cross the finish line. Let's discuss a JV structure.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#062f33] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="100">
                                <div className="w-14 h-14 bg-[#062f33]/10 rounded-xl flex items-center justify-center mb-6">
                                    <Share2 className="w-7 h-7 text-[#062f33]" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-black mb-3">Inventory Sharing</h3>
                                <p className="text-brand-black/80">
                                    We sometimes come across deals that don't fit our buy box but might be perfect for you. Join our buyers list.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#062f33] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
                                <div className="w-14 h-14 bg-[#062f33]/10 rounded-xl flex items-center justify-center mb-6">
                                    <MessageSquare className="w-7 h-7 text-[#062f33]" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-black mb-3">Market Insights</h3>
                                <p className="text-brand-black/80">
                                    We believe in community over competition. Let's share data on what's working in the Indianapolis market right now.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <section id="investor-form" className="py-24 bg-[#062f33] text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
                            {/* Form Context */}
                            <div className="md:w-1/2 pt-10" data-aos="fade-up">
                                <div className="inline-block p-3 rounded-2xl bg-white/10 mb-6">
                                    <Building className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-4xl font-bold mb-6">Invest With Us</h2>
                                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                    Tell us about your goals so we can bring you the right opportunities.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">1</div>
                                        <p>Fill out strategy details</p>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">2</div>
                                        <p>We review your criteria</p>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">3</div>
                                        <p>We connect when deals match</p>
                                    </div>
                                </div>
                            </div>

                            {/* The Form */}
                            <div className="md:w-1/2 w-full bg-white rounded-2xl shadow-xl border border-brand-black/10 p-8 md:p-10 text-brand-black" data-aos="zoom-in-up">
                                {submitted ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                            <Check className="w-10 h-10 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Connected!</h3>
                                        <p className="text-brand-black/80 mb-8">We'll review your criteria and be in touch soon.</p>
                                        <Button onClick={() => setSubmitted(false)} className="rounded-xl px-8 py-3 text-base font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">Start Over</Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <FormField label="Name" error={errors.name?.message} required>
                                                <Input {...register("name")} placeholder="Your Name" className="bg-white border-accent/30 focus:border-accent text-brand-black" />
                                            </FormField>
                                            <FormField label="Phone" error={errors.phone?.message} required>
                                                <Input {...register("phone")} placeholder="Your Phone" type="tel" className="bg-white border-accent/30 focus:border-accent text-brand-black" />
                                            </FormField>
                                        </div>

                                        <FormField label="Email" error={errors.email?.message} required>
                                            <Input {...register("email")} placeholder="Your Email" type="email" className="bg-white border-accent/30 focus:border-accent text-brand-black" />
                                        </FormField>

                                        <FormField label="Primary Strategy" error={errors.strategy?.message} required>
                                            <Controller
                                                name="strategy"
                                                control={control}
                                                render={({ field }) => (
                                                    <Select onValueChange={field.onChange} value={field.value}>
                                                        <SelectTrigger className="bg-white border-accent/30 focus:border-accent text-brand-black">
                                                            <SelectValue placeholder="Select Strategy..." />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="Fix and Flip">Fix & Flip</SelectItem>
                                                            <SelectItem value="Buy and Hold">Buy & Hold (Rental)</SelectItem>
                                                            <SelectItem value="Multifamily">Multifamily</SelectItem>
                                                            <SelectItem value="Private Lending">Private Lending</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                )}
                                            />
                                        </FormField>

                                        <FormField label="What are you looking for?" error={errors.interests?.message} required>
                                            <Textarea {...register("interests")} placeholder="Specific areas, price points, or JV interests..." className="bg-white border-accent/30 focus:border-accent text-brand-black min-h-[120px]" />
                                        </FormField>

                                        <Button type="submit" disabled={isSubmitting} className="w-full rounded-xl py-6 text-lg font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                            {isSubmitting ? "Sending..." : (
                                                <>
                                                    Send Message <ChevronRight className="w-4 h-4 ml-2" />
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <QuestionsSection />
            </main>
        </>
    );
};

export default LocalInvestors;




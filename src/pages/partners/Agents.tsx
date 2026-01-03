import { useState, useRef, useEffect } from "react";
import { Users, Handshake, DollarSign, Clock, CheckCircle2, ChevronRight, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEO from "@/components/SEO";
import QuestionsSection from "@/components/QuestionsSection";
import AddressAutocompletePortal from "@/components/AddressAutocompletePortal.tsx";
import { useAddressAutocomplete } from "@/hooks/useAddressAutocomplete";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormField from "@/components/FormField";

const agentSchema = z.object({
    name: z.string().min(1, "Agent name is required"),
    phone: z.string().min(10, "Valid phone number is required"),
    email: z.string().email("Valid email address is required"),
    brokerage: z.string().min(1, "Brokerage name is required"),
    property: z.string().min(1, "Property address is required"),
    notes: z.string().min(1, "Please provide some notes about the situation"),
});

type AgentFormData = z.infer<typeof agentSchema>;

const Agents = () => {
    const [submitted, setSubmitted] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<AgentFormData>({
        resolver: zodResolver(agentSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            brokerage: "",
            property: "",
            notes: "",
        },
    });

    const propertyValue = watch("property");
    const [addressQuery, setAddressQuery] = useState("");
    const { results, clearResults } = useAddressAutocomplete(addressQuery);

    // Sync address query with form value
    useEffect(() => {
        if (propertyValue !== undefined && propertyValue !== addressQuery) {
            setAddressQuery(propertyValue);
        }
    }, [propertyValue]);

    const onSubmit = async (data: AgentFormData) => {
        try {
            const response = await fetch("http://localhost:5000/api/realtors", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    agentName: data.name,
                    phone: data.phone,
                    email: data.email,
                    brokerageName: data.brokerage,
                    propertyAddress: data.property,
                    notes: data.notes,
                    source: "Realtor Referral"
                })
            });

            const result = await response.json();

            if (result.success) {
                setSubmitted(true);
                reset();
                setAddressQuery("");
            } else {
                console.error("Error:", result.error);
                alert("Submission failed: " + (result.error || "Unknown error"));
            }
        } catch (err) {
            console.error("Network Error:", err);
            alert("Network error. Please try again.");
        }
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
                            <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight" data-aos="fade-up">
                                Turn Dead Leads Into <span className="text-accent relative inline-block">
                                    Commissions
                                    <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="6" />
                                    </svg>
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                                Have a listing that's expiring? A seller who can't afford repairs?
                                We buy properties as-is, so you can save the deal and keep your client happy.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="200">
                                <Button asChild size="lg" className="rounded-xl px-8 py-7 text-lg font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
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
                            <div className="md:w-1/2 w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 text-gray-900" data-aos="zoom-in-up">
                                {submitted ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Details Received!</h3>
                                        <p className="text-gray-600 mb-8">We'll review your property and reach out typically within 2 hours.</p>
                                        <Button onClick={() => setSubmitted(false)} className="rounded-xl px-8 py-3 text-base font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">Submit Another</Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        <h3 className="text-2xl font-bold mb-6">Realtor Referral Form</h3>

                                        <div className="grid grid-cols-2 gap-4">
                                            <FormField label="Agent Name" error={errors.name?.message} required>
                                                <Input {...register("name")} placeholder="John Doe" className="bg-white border-accent/30 focus:border-accent text-black" />
                                            </FormField>
                                            <FormField label="Phone" error={errors.phone?.message} required>
                                                <Input {...register("phone")} placeholder="(317) 000-0000" type="tel" className="bg-white border-accent/30 focus:border-accent text-black" />
                                            </FormField>
                                        </div>

                                        <FormField label="Email" error={errors.email?.message} required>
                                            <Input {...register("email")} placeholder="john@brokerage.com" type="email" className="bg-white border-accent/30 focus:border-accent text-black" />
                                        </FormField>

                                        <FormField label="Brokerage Name" error={errors.brokerage?.message} required>
                                            <Input {...register("brokerage")} placeholder="e.g. Century 21" className="bg-white border-accent/30 focus:border-accent text-black" />
                                        </FormField>

                                        <FormField label="Property Address" error={errors.property?.message} required>
                                            <div className="relative">
                                                <Input
                                                    {...register("property")}
                                                    ref={(e) => {
                                                        register("property").ref(e);
                                                        // @ts-ignore
                                                        inputRef.current = e;
                                                    }}
                                                    onChange={(e) => {
                                                        register("property").onChange(e);
                                                        setAddressQuery(e.target.value);
                                                    }}
                                                    placeholder="123 Main St, Indianapolis, IN"
                                                    className="bg-white border-accent/30 focus:border-accent text-black"
                                                />
                                                <AddressAutocompletePortal
                                                    anchorRef={inputRef}
                                                    results={results}
                                                    onSelect={(val) => {
                                                        setValue("property", val, { shouldValidate: true });
                                                        setAddressQuery(val);
                                                        clearResults();
                                                    }}
                                                    onClose={clearResults}
                                                />
                                            </div>
                                        </FormField>

                                        <FormField label="Notes / Situation" error={errors.notes?.message} required>
                                            <Textarea {...register("notes")} placeholder="Needs foundation repair, owner relocating, etc..." className="bg-white border-accent/30 focus:border-accent text-black min-h-[100px]" />
                                        </FormField>

                                        <Button type="submit" disabled={isSubmitting} className="w-full rounded-xl py-6 text-lg font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                            {isSubmitting ? "Sending..." : (
                                                <>
                                                    Send Referral <ChevronRight className="w-4 h-4 ml-2" />
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

export default Agents;

import { useState } from "react";
import { Home, FileCheck, Clock, CheckSquare, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import SEO from "@/components/SEO";
import QuestionsSection from "@/components/QuestionsSection";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormField from "@/components/FormField";

const titleSchema = z.object({
    companyName: z.string().min(1, "Company name is required"),
    contactPerson: z.string().min(1, "Contact person is required"),
    phone: z.string().min(10, "Valid phone number is required"),
    email: z.string().email("Valid email address is required"),
    handleAssignment: z.enum(["yes", "no"]),
});

type TitleFormData = z.infer<typeof titleSchema>;

const TitleCompanies = () => {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<TitleFormData>({
        resolver: zodResolver(titleSchema),
        defaultValues: {
            companyName: "",
            contactPerson: "",
            phone: "",
            email: "",
            handleAssignment: "yes",
        },
    });

    const onSubmit = async (data: TitleFormData) => {
        try {
            const payload = {
                companyName: data.companyName,
                contactPerson: data.contactPerson,
                phone: data.phone,
                email: data.email,
                handlesAssignments: data.handleAssignment === "yes" ? "Yes" : "No / Unsure",
                source: "Title Page"
            };

            console.log("Submitting Title Co:", payload);

            const response = await fetch("http://localhost:5000/api/title", {
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
                title="Title Company Partners | Efficient Closings with HudREI"
                description="HudREI seeks efficiency-driven title partners for high-volume transactions in Indiana. Join our preferred vendor network."
                canonical="https://hudrei.com/partners/title-companies"
            />

            <main className="min-h-screen bg-white font-sans">
                {/* Split Hero */}
                <section className="relative pt-24 lg:pt-0 min-h-[90vh] flex flex-col lg:flex-row">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 lg:p-20 order-2 lg:order-1">
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#062f33]/5 text-[#062f33] font-semibold text-sm mb-6 animate-fade-in" data-aos="fade-down">
                                <Home className="w-4 h-4" />
                                <span>For Title Companies</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight" data-aos="fade-up">
                                Streamlined <span className="text-accent relative inline-block">
                                    Transactions
                                    <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="6" />
                                    </svg>
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                                We value efficiency. HudREI conducts high-volume transactions and needs partners who can keep up.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="200">
                                <Button asChild size="lg" className="rounded-xl px-8 py-7 text-lg font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                    <a href="#partner-form">Become A Partner</a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="w-full lg:w-1/2 bg-[#062f33] relative overflow-hidden order-1 lg:order-2 min-h-[40vh] lg:min-h-auto" data-aos="zoom-in">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224154-260327c00c40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#062f33] to-[#041f22] opacity-90" />

                        <div className="relative h-full flex flex-col items-center justify-center text-white p-12 text-center">
                            <FileCheck className="w-24 h-24 text-white/20 mb-8" data-aos="zoom-in" data-aos-delay="300" />
                            <h2 className="text-3xl font-bold mb-4" data-aos="fade-up" data-aos-delay="400">Volume Business</h2>
                            <p className="text-gray-300 max-w-md text-lg" data-aos="fade-up" data-aos-delay="500">
                                Become a trusted partner and expect consistent file openings from our team.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Provide</h2>
                            <p className="text-gray-600 text-lg">We make your job easier.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#062f33] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="0">
                                <div className="w-14 h-14 bg-[#062f33]/10 rounded-xl flex items-center justify-center mb-6">
                                    <CheckSquare className="w-7 h-7 text-[#062f33]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Organized Files</h3>
                                <p className="text-gray-600">
                                    Complete packets and precise instructions to minimize back-and-forth emails. We know what you need before you ask.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#062f33] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="100">
                                <div className="w-14 h-14 bg-[#062f33]/10 rounded-xl flex items-center justify-center mb-6">
                                    <Clock className="w-7 h-7 text-[#062f33]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Prompt Communication</h3>
                                <p className="text-gray-600">
                                    We respect your time. We answer queries promptly to ensure smooth closings and keep the pipeline moving.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#062f33] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
                                <div className="w-14 h-14 bg-[#062f33]/10 rounded-xl flex items-center justify-center mb-6">
                                    <FileCheck className="w-7 h-7 text-[#062f33]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Volume Business</h3>
                                <p className="text-gray-600">
                                    We're looking for long-term relationships with title companies who can handle our deal flow.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <section id="partner-form" className="py-24 bg-[#062f33] text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
                            {/* Form Context */}
                            <div className="md:w-1/2 pt-10" data-aos="fade-up">
                                <div className="inline-block p-3 rounded-2xl bg-white/10 mb-6">
                                    <Home className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-4xl font-bold mb-6">Become A Preferred Partner</h2>
                                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                    Join our network of efficient closing partners. Fill out the form below to get started.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">1</div>
                                        <p>Submit company details</p>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">2</div>
                                        <p>We review your capabilities</p>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">3</div>
                                        <p>We start sending files</p>
                                    </div>
                                </div>
                            </div>

                            {/* The Form */}
                            <div className="md:w-1/2 w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 text-gray-900" data-aos="zoom-in-up">
                                {submitted ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                            <Check className="w-10 h-10 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Inquiry Sent!</h3>
                                        <p className="text-gray-600 mb-8">Our Transaction Coordinator will contact you shortly.</p>
                                        <Button onClick={() => setSubmitted(false)} className="rounded-xl px-8 py-3 text-base font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">Reset Form</Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="space-y-4">
                                            <FormField label="Company Name" error={errors.companyName?.message} required>
                                                <Input {...register("companyName")} placeholder="Title Company Name" className="bg-white border-accent/30 focus:border-accent text-black" />
                                            </FormField>

                                            <div className="grid grid-cols-2 gap-4">
                                                <FormField label="Contact Person" error={errors.contactPerson?.message} required>
                                                    <Input {...register("contactPerson")} placeholder="Name" className="bg-white border-accent/30 focus:border-accent text-black" />
                                                </FormField>
                                                <FormField label="Direct Phone" error={errors.phone?.message} required>
                                                    <Input {...register("phone")} placeholder="(317) 000-0000" type="tel" className="bg-white border-accent/30 focus:border-accent text-black" />
                                                </FormField>
                                            </div>

                                            <FormField label="Email" error={errors.email?.message} required>
                                                <Input {...register("email")} placeholder="Email" type="email" className="bg-white border-accent/30 focus:border-accent text-black" />
                                            </FormField>

                                            <div className="space-y-3 pt-2">
                                                <Label>Do you handle assignment of contracts?</Label>
                                                <Controller
                                                    name="handleAssignment"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-4">
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="yes" id="r1" />
                                                                <Label htmlFor="r1">Yes</Label>
                                                            </div>
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="no" id="r2" />
                                                                <Label htmlFor="r2">No / Unsure</Label>
                                                            </div>
                                                        </RadioGroup>
                                                    )}
                                                />
                                            </div>

                                            <Button type="submit" disabled={isSubmitting} className="w-full mt-4 rounded-xl py-6 text-lg font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                                {isSubmitting ? "Sending..." : (
                                                    <>
                                                        Submit Inquiry <ChevronRight className="w-4 h-4 ml-2" />
                                                    </>
                                                )}
                                            </Button>
                                        </div>
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

export default TitleCompanies;

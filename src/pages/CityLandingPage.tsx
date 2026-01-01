import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, CheckCircle2, ArrowRight, Shield, Clock, Zap, Home, Info, Landmark, Star, CheckCircle } from "lucide-react";
import { useState, useRef } from "react";
import SEO from "@/components/SEO";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuestionsSection from "@/components/QuestionsSection";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cityData } from "@/data/cityData";
import AddressAutocompletePortal from "@/components/AddressAutocompletePortal.tsx";
import { useAddressAutocomplete } from "@/hooks/useAddressAutocomplete";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormField from "@/components/FormField";

const formSchema = z.object({
    address: z.string().min(1, "Please enter your property address to continue"),
});

type FormData = z.infer<typeof formSchema>;

const CityLandingPage = () => {
    const { area } = useParams<{ area: string }>();
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            address: "",
        },
    });

    const addressQuery = watch("address");
    const { results, clearResults } = useAddressAutocomplete(addressQuery);

    const onSubmit = (data: FormData) => {
        navigate("/contact", {
            state: { streetAddress: data.address },
        });
    };

    // Get specialized data or generate default
    const areaKey = area?.toLowerCase() || "";
    const specializedData = cityData[areaKey];

    // Format area name for display (e.g., "indianapolis" -> "Indianapolis")
    const areaName = specializedData?.name || (area
        ? area.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        : "Indiana");

    const isCounty = areaName.toLowerCase().includes("county");

    return (
        <>
            <SEO
                title={specializedData?.metaTitle || `We Buy Houses for Cash in ${areaName}, Indiana | Fair Offers Fast`}
                description={specializedData?.metaDescription || `Looking to sell your house fast in ${areaName}? HudREI buys homes in any condition. No fees, no repairs, and cash offers in 24 hours. Local ${areaName} experts.`}
                canonical={`https://hudrei.com/we-buy-houses/${area}`}
            />

            <main className="min-h-screen">
                {/* Simplified Hero Section */}
                <section className="relative pt-32 pb-24 overflow-hidden bg-white">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -ml-64 -mb-64" />

                    <div className="container relative z-10 mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-600 font-semibold text-sm mb-8">
                                <MapPin className="w-4 h-4 text-accent" />
                                <span>Buying Houses Throughout {areaName}</span>
                            </div>

                            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight text-gray-900 tracking-tight">
                                {specializedData?.heroLine || (
                                    <>Sell Your <span className="text-accent relative inline-block">
                                        House Fast
                                        <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="6" />
                                        </svg>
                                    </span> In {areaName} Indiana For Cash</>
                                )}
                            </h1>

                            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                                {specializedData?.intro || `Get a fair cash offer for your ${areaName} property today. We buy houses in any condition, with no fees and no repairs needed.`}
                            </p>

                            {/* Address Form */}
                            <motion.form
                                onSubmit={handleSubmit(onSubmit)}
                                initial={{ opacity: 0, scale: 0.97 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="w-full max-w-2xl mx-auto mb-12"
                            >
                                <FormField error={errors.address?.message}>
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                                        <div className="relative w-full">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                                            <Input
                                                {...register("address")}
                                                type="text"
                                                placeholder="Enter your address..."
                                                className="h-16 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 text-lg focus-visible:ring-2 focus-visible:ring-accent/20 pl-12 pr-4 font-bold w-full rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] focus:border-accent"
                                                ref={(e) => {
                                                    register("address").ref(e);
                                                    inputRef.current = e;
                                                }}
                                            />
                                        </div>

                                        <Button
                                            size="lg"
                                            disabled={isSubmitting}
                                            className="h-16 w-full sm:w-auto rounded-2xl px-10 text-xl font-bold glow-button shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex-shrink-0"
                                        >
                                            {isSubmitting ? "Loading..." : "Get Cash Offer"}
                                        </Button>

                                        <AddressAutocompletePortal
                                            anchorRef={inputRef}
                                            results={results}
                                            onSelect={(value) => {
                                                setValue("address", value, { shouldValidate: true });
                                                clearResults();
                                            }}
                                            onClose={clearResults}
                                        />
                                    </div>
                                </FormField>
                            </motion.form>

                            {/* Trust Points */}
                            <div className="flex flex-wrap justify-center gap-6 text-gray-700 text-sm md:text-base">
                                {[
                                    "No repairs needed",
                                    "No agent fees",
                                    "Close on your timeline",
                                ].map((text, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-center gap-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                    >
                                        <CheckCircle className="text-accent w-5 h-5" />
                                        <span className="font-medium">{text}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Google Reviews */}
                            <motion.div
                                className="flex items-center justify-center gap-2 text-gray-500 mt-10 p-4 border-t border-gray-100"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                            >
                                <div className="flex gap-1 text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-500" />
                                    ))}
                                </div>
                                <span className="text-sm font-semibold text-gray-700">
                                    4.9/5 Star Local Rated House Buyer
                                </span>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Local Trust Section */}
                <section className="py-24 bg-gray-50 overflow-hidden border-y border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                    Trusted Local {areaName} Experts
                                </h2>
                                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                    {specializedData?.marketInsights || `Whether you're in the heart of ${areaName} or in ${isCounty ? "the surrounding towns" : "other parts of the county"}, HudREI understands the unique real estate market here. We aren't out-of-state buyers; we're your neighbors.`}
                                </p>

                                <div className="grid md:grid-cols-1 gap-4 mb-10">
                                    {(specializedData?.situations || [
                                        "Fair cash offers based on local market data",
                                        "No pressure, no obligations—you choose the closing date",
                                        "We handle all the paperwork and closing costs",
                                        "Buying as-is: no cleaning or expensive repairs required"
                                    ]).map((situation, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                                                <Zap className="w-5 h-5 text-accent group-hover:text-white" />
                                            </div>
                                            <div>
                                                <p className="text-gray-700 font-medium leading-relaxed">{situation}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl opacity-50" />
                                <div className="bg-white rounded-[2.5rem] p-3 relative border border-gray-200 shadow-2xl overflow-hidden aspect-[4/3] group">
                                    <img
                                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
                                        alt={`Houses in ${areaName}`}
                                        className="w-full h-full object-cover rounded-[2rem] transition-all duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-8">
                                        <p className="text-white font-bold text-xl">Serving homeowners across {areaName}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Neighborhoods Section (Only if available) */}
                {specializedData?.neighborhoods && (
                    <section className="py-24 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Neighborhoods We Serve in {areaName}</h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">We are local investors buying houses in any condition throughout all parts of {areaName}.</p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                                {specializedData.neighborhoods.map((neighbor) => (
                                    <div
                                        key={neighbor}
                                        className="px-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-gray-700 font-semibold shadow-sm hover:border-accent hover:text-accent hover:bg-white transition-all cursor-default"
                                    >
                                        {neighbor}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <div id="how-it-works">
                    <HowItWorksSection />
                </div>

                <TestimonialsSection />

                {/* Local Area SEO Footer */}
                <section className="py-24 bg-teal-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <h3 className="text-4xl md:text-5xl font-bold mb-8">Need to Sell Fast in {areaName}?</h3>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                            Skip the listings, repairs, and showings. Get your guaranteed cash offer and close on your terms.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Button asChild size="lg" className="h-16 rounded-2xl px-12 text-xl font-bold bg-white text-teal-900 hover:bg-accent hover:text-white transition-all">
                                <Link to="/contact">Get My Offer</Link>
                            </Button>
                            <Button asChild variant="outline" className="h-16 rounded-2xl px-12 text-xl font-bold border-white/20 text-white hover:bg-white/10">
                                <Link to="/selling-options">Compare My Options</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <CTASection />
                <QuestionsSection />
            </main>
        </>
    );
};

export default CityLandingPage;

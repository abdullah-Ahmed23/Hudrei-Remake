import { Star, MapPin, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AddressAutocompletePortal from "./AddressAutocompletePortal";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAddressAutocomplete } from "@/hooks/useAddressAutocomplete";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormField from "./FormField";

const formSchema = z.object({
    address: z.string().min(1, "Please enter your property address to continue"),
});

type FormData = z.infer<typeof formSchema>;

const HeroV2 = () => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const isMobile = useIsMobile();

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
        navigate("/contact#contact-form", {
            state: { streetAddress: data.address },
        });
    };

    return (
        <section className="relative min-h-[85vh] md:min-h-[90vh] mt-14 sm:mt-0 bg-white flex items-center overflow-hidden">

            <div className="container relative z-10 mx-auto px-4 sm:px-6 flex flex-col items-center text-center gap-8 sm:gap-10 py-12 md:py-0">

                {/* HEADLINE */}
                <motion.h1
                    key={isMobile ? "m-h1" : "d-h1"}
                    className="text-4xl md:text-7xl font-extrabold text-brand-black max-w-4xl leading-tight tracking-tight"
                    initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                >
                    Sell Your House Fast <span className="text-accent relative inline-block">
                        In Indiana
                        <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="6" />
                        </svg>
                    </span>
                </motion.h1>

                {/* SUBTEXT */}
                <motion.p
                    key={isMobile ? "m-p" : "d-p"}
                    className="text-brand-black text-lg sm:text-xl max-w-2xl leading-relaxed font-medium font-times"
                    initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Keep 100% -  Pay $0 - Sell as-is for a fair cash offer.
                </motion.p>

                {/* ================= ADDRESS BAR ================= */}
                <motion.form
                    onSubmit={handleSubmit(onSubmit)}
                    key={isMobile ? "m-form" : "d-form"}
                    initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.45 }}
                    className="w-full max-w-3xl"
                >
                    <FormField error={errors.address?.message}>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                            <div className="relative w-full">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-black/60 z-10" />
                                <Input
                                    {...register("address")}
                                    type="text"
                                    placeholder="Enter your address..."
                                    className="h-14 sm:h-16 bg-white border-brand-black/30 text-brand-black placeholder:text-brand-black/70 text-lg focus-visible:ring-2 focus-visible:ring-accent/20 pl-12 pr-4 font-bold w-full rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] focus:border-accent"
                                    ref={(e) => {
                                        register("address").ref(e);
                                        inputRef.current = e;
                                    }}
                                />
                            </div>

                            <Button
                                size="lg"
                                disabled={isSubmitting}
                                className="h-14 sm:h-16 w-full sm:w-auto rounded-xl px-8 text-lg sm:text-xl font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all flex-shrink-0"
                            >
                                {isSubmitting ? "Loading..." : "Get My Cash Offer"}
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



                {/* ================= TRUST POINTS ================= */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-brand-black text-sm sm:text-base mt-8">
                    {[
                        "No repairs needed",
                        "No agent fees",
                        "Close in 7-14 days",
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: isMobile ? 0 : 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: isMobile ? 0 : 0.7 + i * 0.1 }}
                            className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50 shadow-sm"
                        >
                            <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                <Check className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
                            </div>
                            <span className="font-semibold">{item}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HeroV2;




import { useState, useRef } from "react";
import { Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useAddressAutocomplete } from "@/hooks/useAddressAutocomplete";
import AddressAutocompletePortal from "@/components/AddressAutocompletePortal.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormField from "./FormField";

const formSchema = z.object({
    address: z.string().min(1, "Please enter your property address to continue"),
});

type FormData = z.infer<typeof formSchema>;

const CTASection = () => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);

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
            state: {
                streetAddress: data.address,
            },
        });
    };

    return (
        <section id="contact" className="py-20 bg-[#fffefd]" >
            <div className="container mx-auto px-4">
                <div className="glass-card max-w-4xl mx-auto rounded-3xl shadow-xl border  border-white/20 px-8 py-14 text-center" data-aos="fade-up">

                    {/* TEXT */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
                        Ready to Sell Your House Fast in
                        <span className="text-accent"> Indiana?</span>
                    </h2>

                    <p className="text-lg text-white mb-10 max-w-2xl mx-auto">
                        Get your fair cash offer today. No obligation. No pressure.
                    </p>

                    {/* ADDRESS FORM */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="relative max-w-2xl mx-auto"
                    >
                        <FormField error={errors.address?.message} className="space-y-2">
                            <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-black" />

                                <Input
                                    {...register("address")}
                                    ref={(e) => {
                                        register("address").ref(e);
                                        // @ts-ignore
                                        inputRef.current = e;
                                    }}
                                    onChange={(e) => {
                                        register("address").onChange(e);
                                    }}
                                    placeholder="Enter your address..."
                                    className="h-16 pl-12 pr-40 text-lg bg-white text-brand-black rounded-2xl border border-brand-black/30 focus:ring-2 focus:ring-accent focus:border-accent w-full font-bold placeholder:text-brand-black/70 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]"
                                />

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 h-12 px-6 rounded-xl glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                                >
                                    {isSubmitting ? "Loading..." : (
                                        <>
                                            <Send className="w-4 h-4 mr-2" />
                                            Start
                                        </>
                                    )}
                                </Button>
                            </div>
                        </FormField>

                        {/* PORTAL AUTOCOMPLETE */}
                        <AddressAutocompletePortal
                            anchorRef={inputRef}
                            results={results}
                            onSelect={(val) => {
                                setValue("address", val, { shouldValidate: true });
                                clearResults();
                            }}
                            onClose={clearResults}
                        />

                    </form>

                </div>
            </div>
        </section>
    );
};

export default CTASection;




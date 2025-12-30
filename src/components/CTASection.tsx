import { useState, useEffect, useRef } from "react";
import { Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AddressAutocompletePortal from "@/components/AddressAutocompletePortal.tsx";
import { useAddressAutocomplete } from "@/hooks/useAddressAutocomplete";

const CTASection = () => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);

    const [addressQuery, setAddressQuery] = useState("");
    const { results, clearResults } = useAddressAutocomplete(addressQuery);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!addressQuery) return;

        setIsSubmitting(true);

        navigate("/contact", {
            state: {
                streetAddress: addressQuery,
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
                        onSubmit={handleSubmit}
                        className="relative max-w-2xl mx-auto"
                    >
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />

                        <Input
                            ref={inputRef}
                            value={addressQuery}
                            onChange={(e) => setAddressQuery(e.target.value)}
                            placeholder="Enter your address"
                            required
                            className="h-16 pl-12 pr-40 text-lg bg-white text-black rounded-2xl border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent"
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

                        {/* PORTAL AUTOCOMPLETE */}
                        <AddressAutocompletePortal
                            anchorRef={inputRef}
                            results={results}
                            onSelect={(val) => {
                                setAddressQuery(val);
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

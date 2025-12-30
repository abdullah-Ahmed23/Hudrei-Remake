import { CheckCircle, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AddressAutocompletePortal from "@/components/AddressAutocompletePortal.tsx";
import { useAddressAutocomplete } from "@/hooks/useAddressAutocomplete";

const HeroV2 = () => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [addressQuery, setAddressQuery] = useState("");
    const { results, clearResults } = useAddressAutocomplete(addressQuery);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/contact", {
            state: { streetAddress: addressQuery },
        });
    };

    return (
        <section className="relative min-h-[85vh] md:min-h-[90vh] mt-14 sm:mt-0 bg-white flex items-center overflow-hidden">

            <div className="container relative z-10 mx-auto px-4 sm:px-6 flex flex-col items-center text-center gap-8 sm:gap-10 py-12 md:py-0">

                {/* HEADLINE */}
                <motion.h1
                    className="text-4xl sm:text-6xl font-extrabold text-gray-900 max-w-4xl leading-tight"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                >
                    Need To Sell Your House Fast In Indiana?
                </motion.h1>

                {/* SUBTEXT */}
                <motion.p
                    className="text-gray-600 text-lg sm:text-xl max-w-2xl leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    We are local, and we buy in any condition. Fast Cash.
                </motion.p>

                {/* ================= ADDRESS BAR ================= */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.45 }}
                    className="w-full max-w-3xl"
                >
                    {/* INPUT & BUTTON - Simplified Light Mode */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                        <div className="relative w-full">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                            <Input
                                type="text"
                                placeholder="Enter your address..."
                                className="h-14 sm:h-16 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 pl-12 pr-4 font-medium w-full rounded-xl shadow-inner-sm"
                                value={addressQuery}
                                onChange={(e) => setAddressQuery(e.target.value)}
                                ref={inputRef}
                            />
                        </div>

                        <Button
                            size="lg"
                            className="h-14 sm:h-16 w-full sm:w-auto rounded-xl px-8 text-lg sm:text-xl font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all flex-shrink-0"
                        >
                            Get Cash Offer
                        </Button>

                        <AddressAutocompletePortal
                            anchorRef={inputRef}
                            results={results}
                            onSelect={(value) => {
                                setAddressQuery(value);
                                clearResults();
                            }}
                            onClose={clearResults}
                        />
                    </div>
                </motion.form>

                {/* ================= GOOGLE REVIEWS ================= */}
                <motion.div
                    className="flex items-center gap-2 text-gray-500 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.65 }}
                >
                    <div className="flex gap-1 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400" />
                        ))}
                    </div>
                    <span className="text-sm font-medium">
                        4.9/5 from {" "}
                        <a
                            href="https://www.google.com/search?q=hudrei"
                            target="_blank"
                            className="text-gray-900 hover:text-primary transition-colors hover:underline"
                        >
                            Google reviews
                        </a>
                    </span>
                </motion.div>

                {/* ================= TRUST POINTS ================= */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-gray-700 text-sm sm:text-base mt-6">
                    {[
                        "No repairs needed",
                        "No agent fees",
                        "Close in 7–14 days",
                    ].map((text, i) => (
                        <motion.div
                            key={i}
                            className="flex items-center gap-2 bg-gray-100 rounded-full py-2 px-4 border border-gray-200"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.75 + i * 0.1 }}
                        >
                            <CheckCircle className="text-[#318174] w-4 h-4 sm:w-5 sm:h-5" />
                            {text}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HeroV2;

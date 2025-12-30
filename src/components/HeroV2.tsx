import { CheckCircle, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import hudreiLogo from "@/assets/hudrei-logo.png";
import AddressAutocompletePortal from "@/components/AddressAutocompletePortal.tsx";

const HeroV2 = () => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [addressQuery, setAddressQuery] = useState("");
    const [addressResults, setAddressResults] = useState<any[]>([]);

    /* ================= A/B HEADLINE ================= */
    const headlineVariant: "long" | "short" = "short";

    /* ================= AUTOCOMPLETE ================= */
    useEffect(() => {
        if (addressQuery.length < 3) {
            setAddressResults([]);
            return;
        }

        const timeout = setTimeout(async () => {
            try {
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&limit=5&q=${addressQuery}`,
                    { headers: { "User-Agent": "hudrei-app" } }
                );
                const data = await res.json();
                setAddressResults(data);
            } catch (err) {
                console.error(err);
            }
        }, 400);

        return () => clearTimeout(timeout);
    }, [addressQuery]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/contact", {
            state: { streetAddress: addressQuery },
        });
    };

    return (
        <>
            {/* ================= HERO ================= */}
            <section className="relative min-h-[85vh] md:min-h-[90vh] mt-14 sm:mt-0 bg-white">
                <div className="min-h-[85vh] md:min-h-[90vh] flex items-center">
                    <div className="container mx-auto px-6 flex flex-col items-center text-center gap-10">



                        {/* HEADLINE */}
                        <motion.h1
                            className="text-4xl sm:text-6xl font-extrabold text-black max-w-4xl leading-tight"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                        >
                            {headlineVariant === "short"
                                ? "We Buy Houses in Indiana Sell Your House Fast for Cash"
                                : "Get a Fair Cash Offer in 24 Hours"}
                        </motion.h1>

                        {/* SUBTEXT */}
                        <motion.p
                            className="text-gray-600 text-lg max-w-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Need to sell your house fast in Indiana? HudREI is a local, family-owned company that buys houses in any condition. No fees, no repairs, and cash offers in 24 hours.
                        </motion.p>

                        {/* ================= ADDRESS BAR ================= */}
                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.45 }}
                            className="
                w-full max-w-3xl
                bg-white
                
                rounded-full
                px-3 py-2
                shadow-[0_18px_50px_rgba(0,0,0,0.08)]
              "
                        >
                            {/* INPUT & BUTTON with Liquid Glass Effect */}
                            <div className="flex flex-col sm:flex-row gap-4 w-full p-2 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                                <Input
                                    type="text"
                                    placeholder="Enter your address..."
                                    className="h-16 bg-white/20 border-none text-black placeholder:text-black text-lg focus-visible:ring-0 focus-visible:ring-offset-0 px-6 font-medium"
                                    value={addressQuery}
                                    onChange={(e) => setAddressQuery(e.target.value)}
                                    ref={inputRef}
                                />
                                <Button
                                    size="lg"
                                    className="h-16 px-10 text-xl font-bold bg-[#318174] hover:bg-white text-white rounded-xl shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)] hover:-translate-y-1 transition-all duration-300 animate-[colorPulse_3s_ease-in-out_infinite] hover:animate-none"
                                >
                                    Get Cash Offer
                                </Button>
                                <style>{`
                                  @keyframes colorPulse {
                                    0%, 100% { background-color: #008670ff; box-shadow: 0 4px 14px 0 rgba(0, 130, 115, 0.39); }
                                    50% { background-color: #006361ff; box-shadow: 0 0 10px rgba(0, 114, 116, 0.62); } 
                                  }
                                `}</style>

                                <AddressAutocompletePortal
                                    anchorRef={inputRef}
                                    results={addressResults}
                                    onSelect={(value) => {
                                        setAddressQuery(value);
                                        setAddressResults([]);
                                    }}
                                    onClose={() => setAddressResults([])}
                                />
                            </div>
                        </motion.form>

                        {/* ================= GOOGLE REVIEWS ================= */}
                        <motion.div
                            className="flex items-center gap-2 text-gray-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.65 }}
                        >
                            <div className="flex gap-1 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                                ))}
                            </div>
                            <span className="text-sm">
                                4.9/5 from 500+{" "}
                                <a
                                    href="https://www.google.com/search?q=hudrei"
                                    target="_blank"
                                    className="text-[#062f33] font-medium hover:underline"
                                >
                                    Google reviews
                                </a>
                            </span>
                        </motion.div>

                        {/* ================= TRUST POINTS (DESKTOP ONLY) ================= */}
                        <div className="flex flex-col sm:flex-row sm:flex gap-2 sm:gap-10 text-gray-700 text-base mt-2">
                            {[
                                "No repairs needed",
                                "No agent fees",
                                "Close in 7–14 days",
                            ].map((text, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.75 + i * 0.1 }}
                                >
                                    <CheckCircle className="text-[#062f33] w-5 h-5" />
                                    {text}
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>


        </>
    );
};

export default HeroV2;

import { useState, useEffect } from "react";
import { Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CTASection = () => {
  const navigate = useNavigate();

  const [addressQuery, setAddressQuery] = useState("");
  const [addressResults, setAddressResults] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔍 Address Autocomplete
  useEffect(() => {
    if (addressQuery.length < 3) {
      setAddressResults([]);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=5&q=${addressQuery}`,
          {
            headers: {
              "User-Agent": "hudrei-form",
            },
          }
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
            Get Your Cash Offer
            <span className="text-accent"> Instantly</span>
          </h2>

          <p className="text-lg text-white mb-10 max-w-2xl mx-auto">
            Enter your property address to receive a fair, no-obligation cash
            offer. No agents. No fees. No pressure.
          </p>

          {/* ADDRESS FORM */}
          <form
            onSubmit={handleSubmit}
            className="relative max-w-2xl mx-auto"
          >
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />

            <Input
              value={addressQuery}
              onChange={(e) => setAddressQuery(e.target.value)}
              placeholder="Enter your address"
              required
              className="h-16 pl-12 pr-40 text-lg bg-white text-black rounded-2xl border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent"
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-12 px-6 rounded-xl bg-accent hover:bg-accent/90"
            >
              {isSubmitting ? "Loading..." : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Start
                </>
              )}
            </Button>

            {/* AUTOCOMPLETE DROPDOWN */}
            <AnimatePresence>
  {addressResults.length > 0 && (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="absolute z-[9999] top-full left-0 w-full mt-3
                 bg-white/95 backdrop-blur-xl
                 border border-gray-200
                 rounded-2xl shadow-2xl
                  overflow-hidden
                 max-h-64  text-left"
    >
      {addressResults.map((item, index) => (
        <motion.div
          key={item.place_id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.04 }}
          whileHover={{
            backgroundColor: "rgba(56,178,172,0.08)",
            x: 4,
          }}
          className="px-5 py-4 cursor-pointer text-sm text-gray-800
                     flex items-start gap-3
                     transition-colors"
          onClick={() => {
            setAddressQuery(item.display_name);
            setAddressResults([]);
          }}
        >
          <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
          <span className="leading-snug">
            {item.display_name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  )}
</AnimatePresence>

          </form>

        </div>
      </div>
    </section>
  );
};

export default CTASection;

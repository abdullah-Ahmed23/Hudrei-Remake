import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressAutocompletePortal from "@/components/AddressAutocompletePortal.tsx";

const HeroV2 = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [addressQuery, setAddressQuery] = useState("");
  const [addressResults, setAddressResults] = useState<any[]>([]);

  /* ---------- Address Autocomplete ---------- */
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

  /* ---------- Submit ---------- */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/contact", {
      state: { streetAddress: addressQuery },
    });
  };

  return (
    <section className="relative min-h-[85vh] md:min-g-[90vh] bg-white overflow-hidden">
      {/* Top strip */}
      <div className="relative z-10 mt-16 md:mt-20 bg-accent text-white text-center py-2 text-xl sm:text-2xl font-semibold">
        SELL WITH EASE AND PEACE!
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-2 md:py-5 min-h-[calc(90vh-188px)] md:min-h-[calc(90vh-40px)] flex items-center">
        <div className="w-full flex flex-col items-center gap-5 md:gap-16 text-center">

          {/* HEADLINE */}
          <h1 className="text-[50px] sm:text-8xl lg:text-8xl font-extrabold uppercase text-black" data-aos="fade-up">
            Get Your Cash Offer{" "}
            
          </h1>

          {/* INFO CARD */}
          <div className="w-full max-w-2xl " data-aos="zoom-in-up">
            <div className="bg-white rounded-3xl shadow-2xl p-8" >
              <h3 className="text-2xl font-semibold text-black mb-6" data-aos="zoom-in-up"   data-aos-duration="500">
                Why Homeowners Choose HudREI
              </h3>

              <ul className="space-y-5 text-gray-700 text-xl">
                <li className="flex gap-3 justify-center " data-aos="zoom-in-down "  data-aos-duration="500">
                  <CheckCircle className="text-accent w-5 h-5 mt-1"   />
                  Cash offers without financing delays
                </li>
                <li className="flex gap-3 justify-center"  data-aos="zoom-in-down "  data-aos-duration="600">
                  <CheckCircle className="text-accent w-5 h-5 mt-1" />
                  Close in as little as 7–14 days
                </li>
                <li className="flex gap-3 justify-center"  data-aos="zoom-in-down "  data-aos-duration="700">
                  <CheckCircle className="text-accent w-5 h-5 mt-1" />
                  No repairs, no fees, no stress
                </li>
              </ul>
            </div>
          </div>

          {/* ADDRESS FORM */}
          <form onSubmit={handleSubmit} className="w-full max-w-xl"  data-aos="fade-right" data-aos-offset="50" >
            <div className="relative">
              <Input
                ref={inputRef}
                value={addressQuery}
                placeholder="Enter Home Address"
                required
                className="h-14 pr-32 rounded-full bg-white text-black shadow-md"
                onChange={(e) => setAddressQuery(e.target.value)}
              />

              <Button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-12 px-8 rounded-full bg-accent font-bold"
              >
                START
              </Button>

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
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroV2;

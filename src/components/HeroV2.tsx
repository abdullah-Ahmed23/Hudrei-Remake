import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressAutocompletePortal from "@/components/AddressAutocompletePortal.tsx";
import TextType from "@/components/TextType";

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
    <section className="relative min-h-[90vh] bg-white overflow-hidden">
      {/* Top strip */}
      <div className="relative z-10 mt-16 md:mt-20 bg-accent text-accent-foreground text-center py-2 text-xs sm:text-sm font-semibold">
        The Most Transparent & Easier Way To Sell Your Home.
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 min-h-[calc(90vh-40px)] flex items-center">
        <div className="w-full flex flex-col items-center gap-16 text-center">

          {/* HEADLINE */}
          <h1 className="text-4xl sm:text-5xl lg:text-8xl font-extrabold uppercase text-black">
            <TextType
              text={["Get Your Cash Offer", "Today!"]}
              typingSpeed={30}
              deletingSpeed={30}
              pauseDuration={2200}
              loop={true}
              showCursor={true}
              hideCursorWhileTyping={false}
              cursorCharacter="|"
              cursorClassName="text-black"
              textColors={["inherit", "#318174"]}
            />
          </h1>

          {/* INFO CARD */}
          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-semibold text-black mb-6">
                Why Homeowners Choose HudREI
              </h3>

              <ul className="space-y-5 text-gray-700 text-xl">
                <li className="flex gap-3 justify-center">
                  <CheckCircle className="text-accent w-5 h-5 mt-1" />
                  Cash offers without financing delays
                </li>
                <li className="flex gap-3 justify-center">
                  <CheckCircle className="text-accent w-5 h-5 mt-1" />
                  Close in as little as 7–14 days
                </li>
                <li className="flex gap-3 justify-center">
                  <CheckCircle className="text-accent w-5 h-5 mt-1" />
                  No repairs, no fees, no stress
                </li>
              </ul>
            </div>
          </div>

          {/* ADDRESS FORM */}
          <form onSubmit={handleSubmit} className="w-full max-w-xl">
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

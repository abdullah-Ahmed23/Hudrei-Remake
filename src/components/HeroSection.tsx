import {
  CheckCircle,
  VolumeX,
  Volume2,
  Send,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import AddressAutocompletePortal from "@/components/AddressAutocompletePortal.tsx";
import heroVideo from "@/media/hero-1.mp4";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ streetAddress: "" });
  const [addressQuery, setAddressQuery] = useState("");
  const [addressResults, setAddressResults] = useState<any[]>([]);
  const [inView, setInView] = useState(false);

  const [videoOpen, setVideoOpen] = useState(false);
  const [muted, setMuted] = useState(false);

  /* ---------------- Intersection Observer ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ---------------- Address Autocomplete ---------------- */
  useEffect(() => {
    if (addressQuery.length < 3) {
      setAddressResults([]);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&limit=5&q=${addressQuery}`,
          { headers: { "User-Agent": "hudrei-form" } }
        );
        const data = await res.json();
        setAddressResults(data);
      } catch (err) {
        console.error(err);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [addressQuery]);

  /* ---------------- Submit ---------------- */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/contact", {
      state: { streetAddress: formData.streetAddress },
    });
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="min-h-screen bg-white pt-20 pb-11 flex items-center"
      >
        <div className="container mx-auto px-4">
          <div
            className={`flex flex-col items-center gap-16 text-center transition-all duration-700
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* HEADLINE */}
            <div className="space-y-4">
              <div className="flex justify-center gap-16 text-sm sm:text-3xl lg:text-4xl text-black font-bold">
                {["Sell As-Is", "Close Fast", "No Fees"].map((b) => (
                  <span key={b} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    {b}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold">
                <span className="text-accent">Get Your Cash Offer Today</span>
              </h1>
            </div>

            {/* 🎥 REEL THUMBNAIL */}
            <button
              onClick={() => setVideoOpen(true)}
              className="relative w-[260px] sm:w-[300px] aspect-[9/16] rounded-2xl overflow-hidden shadow-xl group"
            >
              {/* Thumbnail */}
              <video
                src={heroVideo}
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Send className="w-14 h-14 text-white rotate-45 group-hover:scale-110 transition" />
              </div>
            </button>

            {/* ADDRESS FORM */}
             <div className="flex justify-center  mt-10">
                       <Link to="/contact">
                       <Button className=" w-[20rem] h-[15rem] sm:h-[10rem] sm:w-[25rem] text-lg sm:text-2xl" >Get My no obligation Cash Offer</Button>
                       </Link>
                       </div>
          </div>
        </div>
      </section>

      {/* 🎬 VIDEO MODAL */}
      {videoOpen && (
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur flex items-center justify-center">
          <div className="relative w-[90vw] max-w-[420px] aspect-[9/16] rounded-2xl overflow-hidden bg-black">
            <video
              ref={videoRef}
              src={heroVideo}
              autoPlay
              
              muted={muted}
              className="w-full h-full object-cover"
            />

            {/* Close */}
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 bg-black/60 p-2 rounded-full"
            >
              <X className="text-white w-5 h-5" />
            </button>

            {/* Mute */}
            <button
              onClick={() => setMuted(!muted)}
              className="absolute bottom-4 right-4 bg-black/60 p-2 rounded-full"
            >
              {muted ? (
                <VolumeX className="text-white w-5 h-5" />
              ) : (
                <Volume2 className="text-white w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;

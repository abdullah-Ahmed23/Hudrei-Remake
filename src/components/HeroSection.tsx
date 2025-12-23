import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  VolumeX,
  Volume2,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

import hero1 from "@/media/hero-1.mp4";
import hero2 from "@/media/hero-2.mp4";
import hero3 from "@/media/hero-3.mp4";
import { Link, NavLink, useNavigate } from "react-router-dom";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();




  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    streetAddress: "",
  });
const [addressQuery, setAddressQuery] = useState(formData.streetAddress);
const [addressResults, setAddressResults] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   navigate("/contact", {
  state: {
    fullName: formData.fullName,
    phone: formData.phone,
    email: formData.email,
    streetAddress: formData.streetAddress,
  },
});

  };

  const videos = [
    { title: "How We Help Homeowners", src: hero1 },
    { title: "Simple Cash Process", src: hero2 },
    { title: "Fast Closings", src: hero3 },
  ];

  const benefits = [
    "No repairs needed",
    "Close in 7–14 days",
    "Zero fees or commissions",
  ];

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);

  /* ---------------- INTERSECTION OBSERVER ---------------- */
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

  /* ---------------- PLAY / PAUSE ---------------- */
  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  // autocomplet------------adresss------
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
  }, 400); // debounce

  return () => clearTimeout(timeout);
}, [addressQuery]);






  /* ---------------- SLIDE CHANGE ---------------- */
  const changeSlide = (dir: "next" | "prev") => {
    if (animating) return;
    setAnimating(true);
    setIsPlaying(false);
    setProgress(0);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setTimeout(() => {
      setCurrent((prev) =>
        dir === "next"
          ? (prev + 1) % videos.length
          : (prev - 1 + videos.length) % videos.length
      );
      setAnimating(false);
    }, 400);
  };

  /* ---------------- PROGRESS BAR ---------------- */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (!video.duration) return;
      setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, [current]);

  useEffect(() => {
    videoRef.current?.load();
  }, [current]);

  return (
    <section
      ref={sectionRef}
      className="main min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div
            className={`space-y-8 text-black text-center lg:text-left
              transition-all duration-700 ease-out
              ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
The Safest Way To Sell Your Home  <span className="text-accent">Get Your Cash Offer Today.</span>
            </h1>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  {b}
                </div>
              ))}
            </div>

            {/* FORM */}
         <form onSubmit={handleSubmit} className="space-y-3">
  <Input className="text-white" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name *" required />

  <Input className="text-white" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone *" required />

  <Input className="text-white" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email *" required />

  {/* Address Autocomplete */}
  <div className="relative">
    <Input 
      name="streetAddress"
      value={addressQuery}
      placeholder="Street Address *"
      required
      onChange={(e) => {
        setAddressQuery(e.target.value);
        setFormData({
          ...formData,
          streetAddress: e.target.value,
        });
      }}
    />

    {addressResults.length > 0 && (
      <div className="absolute z-50 w-full bg-white border rounded-md shadow-md mt-1 max-h-60 overflow-auto">
        {addressResults.map((item) => (
          <div
            key={item.place_id}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
            onClick={() => {
              setAddressQuery(item.display_name);
              setFormData({
                ...formData,
                streetAddress: item.display_name,
              });
              setAddressResults([]);
            }}
          >
            {item.display_name}
          </div>
        ))}
      </div>
    )}
  </div>

  <Button type="submit" className="w-full bg-accent text-accent-foreground py-5 font-semibold">
    <Send className="w-4 h-4 mr-2" />
    Get My Cash Offer
  </Button>
</form>

          </div>

          {/* RIGHT – VIDEO SLIDER (UNCHANGED) */}
          <div
            className={`relative h-[520px] md:h-[600px] lg:h-[650px] rounded-2xl overflow-hidden glass-card
              transition-all duration-700 ease-out delay-200
              ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            {/* BLURRED BACKGROUND */}
            <video
              src={videos[current].src}
              muted
              playsInline
              autoPlay
              className="absolute inset-0 w-full h-full scale-110 blur-2xl opacity-50"
            />

            {/* MAIN VIDEO */}
            <video
              ref={videoRef}
              src={videos[current].src}
              muted={muted}
              playsInline
              autoPlay
              onClick={togglePlay}
              className={`absolute inset-0 w-full h-full cursor-pointer
                transition-all duration-400 ease-in-out
                ${animating ? "opacity-0 translate-x-6" : "opacity-100 translate-x-0"}
              `}
            />

            {/* TITLE */}
            <div className="absolute top-0 inset-x-0 bg-black/50 py-2 z-30 text-center text-white text-sm font-semibold uppercase">
              {videos[current].title}
            </div>

            {/* PROGRESS */}
            <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20 z-30">
              <div
                className="h-full bg-accent transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* MUTE */}
            <button
              onClick={() => setMuted(!muted)}
              className="absolute bottom-4 right-4 bg-black/60 p-2 rounded-full z-30"
            >
              {muted ? <VolumeX className="text-white w-5 h-5" /> : <Volume2 className="text-white w-5 h-5" />}
            </button>

            {/* CONTROLS */}
            <button
              onClick={() => changeSlide("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full z-30"
            >
              <ChevronLeft className="text-white" />
            </button>

            <button
              onClick={() => changeSlide("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full z-30"
            >
              <ChevronRight className="text-white" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

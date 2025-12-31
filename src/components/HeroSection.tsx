import {
  CheckCircle,
  VolumeX,
  Volume2,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroVideo from "@/media/Sell My House Fast For Cash - HudREI  Real Estate Reimagined (720p, h264).mp4";
import heroThumb from "@/media/hero-thump.png";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const previewRef = useRef<HTMLVideoElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [inView, setInView] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [muted, setMuted] = useState(false);
  const [hovered, setHovered] = useState(false);

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

  /* ---------------- Hover Preview Controls ---------------- */
  useEffect(() => {
    if (!previewRef.current) return;

    if (hovered) {
      previewRef.current.play().catch(() => { });
    } else {
      previewRef.current.pause();
      previewRef.current.currentTime = 0;
    }
  }, [hovered]);

  return (
    <>
      <section
        ref={sectionRef}
        className=" pt-2 pb-10 bg-white  flex items-center"
      >
        <div className="container mx-auto px-4">
          <div
            className={`flex flex-col items-center gap-16 text-center transition-all duration-700
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* HEADLINE */}
            <div className="space-y-6">


              <h2 className="text-4xl md:text-7xl font-bold text-black mb-6 leading-tight">
                We Buy Houses in Indiana Sell Your House <span className="text-accent underline">Fast  for Cash</span>
              </h2>
              <div className="space-y-6 text-xl text-black leading-relaxed font-medium">
                <p>
                  Need to sell your house fast in Indiana? HudREI is a local, family-owned company that buys houses in any condition throughout the Hoosier State. Whether you're facing foreclosure, dealing with an inherited property, going through a divorce, or simply need to sell quickly, we provide a straightforward solution with no hassles, no fees, and no repairs required.
                </p>

              </div>
            </div>

            {/* 🎬 VIDEO PREVIEW */}
            <button
              onClick={() => setVideoOpen(true)}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative w-full max-w-[900px] aspect-video rounded-3xl overflow-hidden shadow-2xl group will-change-transform"
            >
              {/* Animated Poster */}
              <img
                src={heroThumb}
                alt="Video preview"
                className="absolute inset-0 w-full h-full object-cover
                           scale-105 animate-[slowZoom_8s_ease-in-out_infinite] transform-gpu"
              />

              {/* Preview Video */}
              <video
                ref={previewRef}
                src={heroVideo}
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover
                           opacity-0 group-hover:opacity-100
                           transition-opacity duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors duration-500" />

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  {/* Ripple */}
                  <span className="absolute w-28 h-28 rounded-full bg-accent/30 animate-ping" />
                  <span className="absolute w-20 h-20 rounded-full bg-accent/20 animate-pulse" />

                  {/* Button */}
                  <div
                    className="relative w-16 h-16 rounded-full bg-accent flex items-center justify-center
                               group-hover:scale-110 transition-transform duration-300 shadow-xl"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-7 h-7 fill-white ml-1"
                    >
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>

          </div>
        </div>
      </section>

      {/* 🎬 VIDEO MODAL */}
      {videoOpen && (
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur flex items-center justify-center">
          <div className="relative w-[90vw] max-w-[1000px] aspect-video rounded-3xl overflow-hidden bg-black">
            <video
              ref={videoRef}
              src={heroVideo}
              autoPlay
              muted={muted}
              controls
              className="w-full h-full object-cover"
            />

            {/* Close */}
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 bg-black/60 p-2 rounded-full"
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

      {/* Tailwind animation */}
      <style>
        {`
          @keyframes slowZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
        `}
      </style>
    </>
  );
};

export default HeroSection;

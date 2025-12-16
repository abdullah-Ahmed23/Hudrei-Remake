import { useEffect, useRef, useState } from "react";
import { Star, User } from "lucide-react";

const TestimonialsSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const [offset, setOffset] = useState(0);
  const [animateStars, setAnimateStars] = useState(false);

  const reviews = [
    { name: "Greg", text: "I'm compelled to pass on our great experience with HudREI. The whole team was understanding, patient, and highly professional." },
    { name: "Gloria He", text: "HudREI made selling my home incredibly smooth. Clear communication and proactive support throughout." },
    { name: "Holly Dooley", text: "Excellent experience. Communication was outstanding and they exceeded expectations." },
    { name: "David", text: "Fair price, electronic signing, and timely closing. Very positive experience." },
    { name: "Darien Sharpe", text: "HudREI redefines what it means to work with a real estate team. Professional and knowledgeable." },
    { name: "Lee Contreras", text: "Everyone was very professional and worked together to close the deal smoothly." },
    { name: "Edward Viet", text: "Kind, supportive, and compassionate team during a difficult time." },
    { name: "David Beshara", text: "Very professional and responsive. They followed through on everything." },
    { name: "Badr Almalahi", text: "Organized, results-driven, and clear communication at every step." },
  ];

  const loopedReviews = [...reviews, ...reviews];

  /* -------- CONTINUOUS SCROLL -------- */
  useEffect(() => {
    let rafId: number;
    const speed = 0.25;

    const animate = () => {
      setOffset((prev) => {
        const cardWidth = 360;
        const resetPoint = reviews.length * cardWidth;
        return prev >= resetPoint ? 0 : prev + speed;
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [reviews.length]);

  /* -------- STAR ANIMATION ON VIEW -------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateStars(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-down">
          <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-black text-sm font-medium mb-4">
            Google Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
            Trusted by <span className="text-accent">Homeowners</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-6 will-change-transform"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {loopedReviews.map((review, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={(i % reviews.length) * 80}
                className="min-w-[320px] md:min-w-[360px] bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-4 h-4 text-yellow-400 fill-yellow-400 ${
                        animateStars ? "animate-star" : ""
                      }`}
                      style={{
                        animationDelay: animateStars
                          ? `${idx * 120}ms`
                          : "0ms",
                      }}
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-800 leading-relaxed text-center mb-8">
                  {review.text}
                </p>

                {/* Profile */}
                <div className="flex flex-col items-center justify-center mt-auto">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                    <User className="w-5 h-5 text-accent" />
                  </div>
                  <div className="font-semibold text-gray-900 text-center">
                    {review.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* STAR ANIMATION */}
      <style>{`
        @keyframes starPop {
          0% { transform: scale(0); opacity: 0 }
          60% { transform: scale(1.2); opacity: 1 }
          100% { transform: scale(1); opacity: 1 }
        }
        .animate-star {
          animation: starPop 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;

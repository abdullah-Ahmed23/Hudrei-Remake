import { useEffect, useRef, useState } from "react";
import { Star, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    const [offset, setOffset] = useState(0);
    const [animateStars, setAnimateStars] = useState(false);

    const reviews = [
        { name: "Greg M.", text: "I'm compelled to pass on our great experience with HudREI. The whole team at Hudrei was understanding and patient while we worked through a challenging family period. The professionalism was top notch." },
        { name: "Badr Almalahi", text: "HudREI is an incredibly well-organized, results-driven real estate team. They are easy to work with, professional at every step, and communicate clearly throughout the process. Most importantly, they make sure every transaction is handled with integrity." },
        { name: "Gloria He", text: "HudREI made selling my home incredibly smooth. They handled every obstacle with professionalism and clear communication, always staying one step ahead. Their team was proactive, knowledgeable, and truly went above and beyond." },
        { name: "Holly Dooley", text: "We had an excellent experience with HUDREI. Communication was excellent. They met our expectations and actually made moving and selling our home after 30 years of living in a better experience than I could have imagined." },
        { name: "David", text: "My experience with HudREI was a positive one for me. I enjoyed talking with the staff members that handled my transaction. We agreed on a fair price and did the signing of the Purchase agreement electronically. Closed on time." },
        { name: "Darien Sharpe", text: "HudREI truly redefines what it means to work with a real estate team. Their professionalism, market knowledge, and attention to detail made the entire process smooth and stress-free. They go above and beyond." },
        { name: "Lee Contreras", text: "Sam, Owale, Summer, everyone was very professional and worked together to get to the end. This team is terrific and I want to do another deal with these guys right away." },
        { name: "Alphonso Wilhite", text: "We are very pleased with the experience we shared. Both demonstrated a high level of professionalism and teamwork throughout the sale of our property. They communicated clearly and kept us informed at each step." }
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
            id="testimonials"
            ref={sectionRef}
            className="py-20 md:py-10 bg-white overflow-hidden"
        >
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-14" data-aos="fade-down">
                    <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-black text-sm font-medium mb-4">
                        Google Reviews
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                        What <span className="text-accent">Indiana Homeowners</span> Say About HudREI
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
                                            className={`w-4 h-4 text-yellow-400 fill-yellow-400 ${animateStars ? "animate-star" : ""
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
            <div className="flex justify-center mt-10">
                <Link to="/contact">
                    <Button size="lg" className="rounded-xl px-8 py-6 text-lg font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">Get My Cash Offer</Button>
                </Link>
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

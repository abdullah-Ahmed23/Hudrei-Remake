import { useEffect, useRef, useState } from "react";
import { Star, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
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

    /* -------- STAR ANIMATION ON VIEW -------- */
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimateStars(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            className="py-20 md:py-24 bg-white overflow-hidden"
        >
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-14" data-aos="fade-up">
                    <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-black text-sm font-medium mb-4">
                        Google Reviews
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                        What <span className="text-accent">Indiana Homeowners</span> Say About HudREI
                    </h2>
                </div>

                {/* Slider - CSS Powered for Performance */}
                <div className="relative w-full">
                    <div className="flex gap-6 animate-scroll will-change-transform py-4">
                        {loopedReviews.map((review, i) => (
                            <div
                                key={i}
                                className="min-w-[300px] md:min-w-[360px] bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
                            >
                                {/* Stars */}
                                <div className="flex justify-center gap-1 mb-6">
                                    {[...Array(5)].map((_, idx) => (
                                        <Star
                                            key={idx}
                                            className={`w-5 h-5 text-yellow-400 fill-yellow-400 ${animateStars ? "animate-star" : "opacity-0"}`}
                                            style={{
                                                animationDelay: animateStars ? `${idx * 100}ms` : "0ms",
                                            }}
                                        />
                                    ))}
                                </div>

                                <p className="text-gray-700 leading-relaxed text-center mb-8 font-medium">
                                    "{review.text}"
                                </p>

                                <div className="flex flex-col items-center justify-center mt-auto">
                                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <User className="w-6 h-6 text-accent" />
                                    </div>
                                    <div className="font-bold text-gray-900 text-center">
                                        {review.name}
                                    </div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Verified Seller</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-12">
                <Link to="/contact">
                    <Button size="lg" className="rounded-2xl px-12 py-8 text-xl font-bold glow-button shadow-2xl hover:-translate-y-1.5 transition-all">
                        Get My Cash Offer
                    </Button>
                </Link>
            </div>

            {/* HIGH PERFORMANCE ANIMATIONS */}
            <style>{`
                @keyframes infiniteScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-360px * ${reviews.length} - 1.5rem * ${reviews.length})); }
                }
                
                @media (max-width: 768px) {
                    @keyframes infiniteScroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(calc(-300px * ${reviews.length} - 1.5rem * ${reviews.length})); }
                    }
                }

                .animate-scroll {
                    animation: infiniteScroll 40s linear infinite;
                }
                
                .animate-scroll:hover {
                    animation-play-state: paused;
                }

                @keyframes starPop {
                    0% { transform: scale(0); opacity: 0 }
                    60% { transform: scale(1.3); opacity: 1 }
                    100% { transform: scale(1); opacity: 1 }
                }
                .animate-star {
                    animation: starPop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                }
            `}</style>
        </section>
    );
};

export default TestimonialsSection;

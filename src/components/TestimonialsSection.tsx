import { useEffect, useRef, useState } from "react";
import { Star, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [animateStars, setAnimateStars] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

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

    const [itemsPerView, setItemsPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setItemsPerView(3);
            else if (window.innerWidth >= 768) setItemsPerView(2);
            else setItemsPerView(1);
        };
        handleResize(); // Init
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.ceil(reviews.length / itemsPerView) - 1;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    // Reset index on resize to avoid getting stuck out of bounds
    useEffect(() => {
        setCurrentIndex(0);
    }, [itemsPerView]);

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
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-14" data-aos="fade-up">
                    <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-black text-sm font-medium mb-4">
                        Google Reviews
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                        Reviews From <span className="text-accent">Real Indiana Customers</span> Like You!
                    </h2>
                </div>

                {/* Manual Slider */}
                <div className="relative w-full">
                    <div className="overflow-hidden p-4">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {reviews.map((review, i) => (
                                <div
                                    key={i}
                                    className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3"
                                >
                                    <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
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
                                            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-3">
                                                <User className="w-6 h-6 text-accent" />
                                            </div>
                                            <div className="font-bold text-gray-900 text-center">
                                                {review.name}
                                            </div>
                                            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Verified Seller</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-8 bg-white shadow-lg border border-gray-100 p-3 rounded-full text-gray-800 hover:text-accent hover:scale-110 transition-all z-10"
                        aria-label="Previous Review"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-8 bg-white shadow-lg border border-gray-100 p-3 rounded-full text-gray-800 hover:text-accent hover:scale-110 transition-all z-10"
                        aria-label="Next Review"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {[...Array(maxIndex + 1)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`w-2 h-2 rounded-full transition-all ${currentIndex === i ? "bg-accent w-6" : "bg-gray-200"}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-12">
                <Link to="/contact#contact-form">
                    <Button size="lg" className="rounded-2xl px-12 py-8 text-xl font-bold glow-button shadow-2xl hover:-translate-y-1.5 transition-all">
                        Get My Cash Offer
                    </Button>
                </Link>
            </div>

            {/* ANIMATIONS */}
            <style>{`
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

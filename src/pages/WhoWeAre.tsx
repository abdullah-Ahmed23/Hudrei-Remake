import { Helmet } from "react-helmet";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import png1 from "@/assets/Omar.png"
import png2 from "@/assets/Samar.png"
import png3 from "@/assets/WALE.jpg"
import png4 from "@/assets/Hamid.png"
import png5 from "@/assets/gomaa.png"
import png6 from "@/assets/F1.jpg"
import {
    Users,
    Heart,
    Target,
    Briefcase,
    Phone,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

const teamLeaders = [
    {
        name: "Olawale Oladapo",
        role: "CEO & Founder",
        image: png3,
    },
    {
        name: "Samar",
        role: "COO And Partner",
        image: png2,
    },
    {
        name: "Abdullah Tarek",
        role: "Lead Manger",
        image: png6,
    },
    {
        name: "Omar Lorenzo",
        role: "Marketing Specialist",
        image: png1,
    },
    {
        name: "Ahmed Gomma",
        role: "Data specialist",
        image: png5,
    },
    {
        name: "Hamid Nosir",
        role: "Acquisition Manager",
        image: png4,
    },
];

const careers = [
    { title: "Cold Caller", icon: Phone },
    { title: "Acquisition Property Specialist", icon: Briefcase },
    { title: "Executive Office Assistant", icon: Users },
    { title: "Property Disposition Specialist", icon: Target },
    { title: "Transaction Co-ordinator", icon: Heart },
    { title: "Marketing Developer", icon: Briefcase },
];

const WhoWeAre = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 320;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => {
            el.classList.remove("opacity-0", "translate-y-8");
        });
    }, []);



    return (
        <>
            <Helmet>
                <title>About HudREI - Local Indiana Home Buyers | Our Story & Values</title>
                <meta
                    name="description"
                    content="Learn about HudREI, a local family-owned company buying houses in Indiana. Discover our story, our values, and why homeowners trust us for a fair cash sale."
                />
                <link rel="canonical" href="https://hudrei.com/who-we-are" />
            </Helmet>



            <main className="min-h-screen bg-white">
                {/* Hero Vision Section */}
                <section
                    id="vision"
                    className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-teal-50 to-white"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-white" />
                    <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

                    <div className="container relative z-10 mx-auto px-4 text-center">
                        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                About HudREI: Local Real Estate Investors{" "}
                                <span className="text-primary">Indiana Can Trust</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                We are a local, family-owned business dedicated to helping Indiana homeowners sell their properties regardless of the situation.
                                Whether you're facing foreclosure, probate, or just need to sell fast, we're here to help.
                            </p>
                            <Button
                                asChild
                                size="lg"
                                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg hover-lift"
                            >
                                <Link to="/selling-options">GET MY CASH OFFER!</Link>
                            </Button>
                        </div>


                        {/* Trust Badges */}
                        {/* Trust Badges */}
                        <div className="mt-16 flex flex-wrap justify-center items-center gap-6
                animate-on-scroll opacity-0 translate-y-8
                transition-all duration-700 delay-200">

                            {/* ===== Google ===== */}
                            <a
                                href="https://www.google.com/search?q=hudrei"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3
               bg-white/90 backdrop-blur
               border border-black/5
               px-5 py-3 rounded-2xl
               shadow-sm hover:shadow-xl
               hover:-translate-y-1
               transition-all duration-300"
                            >
                                {/* Google Logo */}
                                <img
                                    src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                                    alt="Google"
                                    className="w-5 h-5"
                                />

                                <span className="font-semibold text-gray-900">Google</span>

                                {/* Stars */}
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className="group-hover:animate-starPulse"
                                            style={{ animationDelay: `${i * 80}ms` }}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </a>

                            {/* ===== YouTube ===== */}
                            <a
                                href="https://www.youtube.com/@HudREI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3
               bg-white/90 backdrop-blur
               border border-black/5
               px-5 py-3 rounded-2xl
               shadow-sm hover:shadow-xl
               hover:-translate-y-1
               transition-all duration-300"
                            >
                                {/* YouTube Logo */}
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                                    alt="YouTube"
                                    className="w-6"
                                />

                                <span className="font-semibold text-gray-900">YouTube</span>
                            </a>

                            {/* ===== Facebook ===== */}
                            <a
                                href="https://www.facebook.com/profile.php?id=61562781720104"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3
               bg-white/90 backdrop-blur
               border border-black/5
               px-5 py-3 rounded-2xl
               shadow-sm hover:shadow-xl
               hover:-translate-y-1
               transition-all duration-300"
                            >
                                {/* Facebook Logo */}
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                                    alt="Facebook"
                                    className="w-5 h-5"
                                />

                                <span className="font-semibold text-gray-900">Facebook</span>

                                {/* Stars */}
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className="group-hover:animate-starPulse"
                                            style={{ animationDelay: `${i * 80}ms` }}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </a>

                        </div>


                    </div>
                </section>

                {/* Why We Do What We Do */}
                <section id="why" className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <Heart className="w-8 h-8 text-primary" />
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    Our Story
                                </h2>
                            </div>
                            <div className="bg-white shadow-lg border border-gray-100 p-8 md:p-12 rounded-2xl">
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    Selling a house is never just about bricks and mortar—it's about your life, your family, and your peace of mind.
                                    I started HudREI after seeing how stressful and complicated the traditional selling process could be for homeowners
                                    who just needed a simple solution.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    Too often, I saw people stuck with properties they couldn't afford to repair, dealing with flaky buyers,
                                    or paying thousands in fees just to get their house sold. I knew there had to be a better way—a way to
                                    offer fair cash prices, close quickly, and treat people with the respect they deserve.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    Today, HudREI is proud to serve homeowners across Indiana. We're not just buying houses; we're providing
                                    fresh starts and financial relief to our neighbors.
                                </p>
                                <div className="text-center">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-accent hover:bg-accent/90 text-white font-semibold px-8"
                                    >
                                        <Link to="/contact">GET MY CASH OFFER!</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section id="mission" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Our Values
                                </h2>
                                <p className="text-lg text-gray-600">The core principles that guide every interaction.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Transparency</h3>
                                    <p className="text-gray-600">No hidden fees, no surprises. We explain exactly how we calculate your offer.</p>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                        <Heart className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Compassion</h3>
                                    <p className="text-gray-600">We understand that selling a home can be emotional. We treat every seller with dignity.</p>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                        <Users className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
                                    <p className="text-gray-600">We live here and work here. We know the Indiana market better than national iBuyers.</p>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                        <Briefcase className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fair Offers</h3>
                                    <p className="text-gray-600">We provide competitive cash offers based on current market conditions and property needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Meet Our Team - Horizontal Scroll */}
                <section id="team" className="py-20 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Users className="w-8 h-8 text-primary" />
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    Meet the Team Behind HudREI
                                </h2>
                            </div>
                            <p className="text-lg text-gray-600">
                                Real humans, real people here to help
                            </p>
                        </div>

                        {/* Scroll Controls */}
                        <div className="flex justify-center gap-4 mb-8">
                            <button
                                onClick={() => scroll("left")}
                                className="p-3 rounded-full bg-white shadow-md border border-gray-100 hover:bg-primary/10 transition-colors"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-700" />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="p-3 rounded-full bg-white shadow-md border border-gray-100 hover:bg-primary/10 transition-colors"
                                aria-label="Scroll right"
                            >
                                <ChevronRight className="w-6 h-6 text-gray-700" />
                            </button>
                        </div>

                        {/* Team Cards - Horizontal Scroll */}
                        <div
                            ref={scrollRef}
                            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {teamLeaders.map((member, index) => (
                                <div
                                    key={member.name}
                                    className="flex-shrink-0 w-72 snap-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="bg-white shadow-lg border border-gray-100 rounded-2xl overflow-hidden hover-lift group">
                                        <div className="relative h-72 overflow-hidden">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
                                        </div>
                                        <div className="p-6 text-center">
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                                                {member.name}
                                            </h3>
                                            <p className="text-accent font-medium">{member.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Careers Section */}
                <section id="careers" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Briefcase className="w-8 h-8 text-primary" />
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    Our Careers
                                </h2>
                            </div>
                            <p className="text-lg text-gray-600">
                                Join our growing team
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {careers.map((career, index) => (
                                <div
                                    key={career.title}
                                    className="bg-white shadow-md border border-gray-100 p-6 rounded-xl hover-lift animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 group cursor-pointer hover:border-primary/30"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                            <career.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {career.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                            <Button
                                asChild
                                size="lg"
                                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8"
                            >
                                <a href="mailto:office@hudrei.com">APPLY FOR A CAREER HERE</a>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>


        </>
    );
};

export default WhoWeAre;

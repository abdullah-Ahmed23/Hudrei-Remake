import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Home,
    Landmark,
    DollarSign,
    Shield,
    Building,
    Phone,
    Mail,
    Clock,
    MapPin,
    Check,
    ChevronDown,
    X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import QuestionsSection from "@/components/QuestionsSection";
import { cn } from "@/lib/utils";


interface OfferOption {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ElementType;
    perks: string[];
    ctaText: string;
    ctaLink: string;
}

const offers: OfferOption[] = [
    {
        id: 1,
        title: "Sell AS-IS",
        subtitle: "Multiple Cash Offers",
        description: "Experience a hassle-free sale with our straightforward cash offer. Using our extensive network of investors and our own capital, we guarantee a quick close on your schedule. No repairs, no agent fees, no financing delays. Leave behind what you don't want and even stay after closing if needed. Sell on your terms, stress-free.",
        icon: Home,
        perks: [
            "Receive Multiple Cash Offers",
            "Get Cash Before Closing",
            "Sell On Your Timeline",
            "Leave Behind Unwanted Items",
            "Stay After Closing If Needed",
            "Zero Uncertainties",
            "No Repairs Required",
            "No Realtor Commissions",
            "Completely Stress-Free"
        ],
        ctaText: "Get Cash Offers",
        ctaLink: "#contact"
    },
    {
        id: 2,
        title: "Become The Bank",
        subtitle: "Sell For Top Dollar",
        description: "This innovative approach is perfect for homeowners who want maximum value without rushing for immediate cash. Instead of a traditional sale, you become the lender. Use your property as collateral, receive a down payment, and enjoy monthly income payments—all while we handle taxes, insurance, and maintenance.",
        icon: Landmark,
        perks: [
            "Higher Sale Price",
            "Earn Passive Income Beyond Sale",
            "No Property Tax Burden",
            "Insurance Covered",
            "Zero Maintenance Worries"
        ],
        ctaText: "Become The Bank",
        ctaLink: "#contact"
    },
    {
        id: 3,
        title: "Max Equity Offer",
        subtitle: "Maximize Your Net Proceeds",
        description: "We handle every detail of selling your home so you walk away with the agreed-upon net price. Forget about paperwork, negotiations, repairs, inspection credits, and appraisal contingencies—we cover it all. Enjoy a seamless experience from start to finish while maximizing your equity.",
        icon: DollarSign,
        perks: [
            "Seamless Selling Experience",
            "Maximize Your Equity",
            "Locked-In Net Price",
            "No Stressful Negotiations",
            "No Repairs or Inspection Fixes",
            "No Appraisal Contingencies"
        ],
        ctaText: "Learn More",
        ctaLink: "#contact"
    },
    {
        id: 4,
        title: "Mortgage Relief Offer",
        subtitle: "Get A Fresh Start",
        description: "Struggling with mortgage payments? Can't sell due to low equity or costly repairs? We specialize in helping homeowners facing financial difficulties. We can take over your mortgage, covering property taxes and maintenance, helping you avoid foreclosure and rebuild your credit.",
        icon: Shield,
        perks: [
            "Free Yourself From Mortgage Burden",
            "Avoid Foreclosure",
            "Rebuild Your Credit Score",
            "Get A Fresh Financial Start",
            "No Equity Constraints",
            "No Home Repairs Needed"
        ],
        ctaText: "Get Mortgage Relief",
        ctaLink: "#contact"
    },
    {
        id: 5,
        title: "List With HudREI",
        subtitle: "Traditional Sale, Expert Support",
        description: "Leverage our in-house listing expertise for a traditional sale. With hundreds of successfully sold properties, we know how to maximize your sale price. Unlike typical agents, we have hands-on experience as property investors, meaning we negotiate fiercely on your behalf to get you top dollar.",
        icon: Building,
        perks: [
            "Proven Track Record",
            "We Are Experienced Sellers",
            "Committed To Maximize Sale Price",
            "Sell On Your Timeline",
            "Fierce Negotiation On Your Behalf"
        ],
        ctaText: "List With HudREI",
        ctaLink: "#contact"
    }
];

const steps = [
    {
        number: 1,
        title: "Get In Touch",
        description: "Click the 'Get Started' button or call us directly to speak with our team."
    },
    {
        number: 2,
        title: "Share Property Details",
        description: "We just need a few details about your needs and your property. Our goal is to make this as easy as possible."
    },
    {
        number: 3,
        title: "Receive Your Offer",
        description: "Once we've reviewed your information, we'll provide you with a no-obligation cash offer for your property."
    },
    {
        number: 4,
        title: "Sign At Title Company",
        description: "If you accept our offer, we'll schedule a meeting at the Title Company. Ask any questions along the way!"
    },
    {
        number: 5,
        title: "Get Your Money",
        description: "You'll receive a certified check at the Title Office to cash at your bank immediately."
    }
];

const PerksModal = ({ offer, isOpen, onClose }: { offer: OfferOption; isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className={cn(
                    "bg-white border border-gray-200 rounded-2xl max-w-lg w-full p-8 relative shadow-2xl",
                    "animate-scale-in"
                )}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <offer.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">{offer.title}</h3>
                        <p className="text-accent font-medium">{offer.subtitle}</p>
                    </div>
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-4">The Perks</h4>

                <ul className="space-y-3">
                    {offer.perks.map((perk, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-3 animate-fade-up"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Check className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-gray-700">{perk}</span>
                        </li>
                    ))}
                </ul>

                <Button className="w-full mt-6 bg-accent text-white hover:bg-accent/90" asChild>
                    <a href={offer.ctaLink}>{offer.ctaText}</a>
                </Button>
            </div>
        </div>
    );
};

const OfferCard = ({ offer, index }: { offer: OfferOption; index: number }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showPerks, setShowPerks] = useState(false);

    return (
        <>
            <div
                id={`offer-${offer.id}`}
                className={cn(
                    "bg-[#0b434a] border border-gray-700 rounded-2xl p-8 hover-lift shadow-lg",
                    "scroll-mt-32",
                    "flex flex-col gap-6",
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
            >
                <div className="flex-1">
                    <div className="flex items-start gap-6 mb-6">
                        <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                            <offer.icon className="w-8 h-8 text-accent" />
                        </div>
                        <div>
                            <span className="text-white/80 font-medium text-sm tracking-wider uppercase">Offer {offer.id}</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">{offer.title}</h3>
                            <p className="text-accent text-lg font-medium">{offer.subtitle}</p>
                        </div>
                    </div>

                    <p className="text-white/90 leading-relaxed mb-8 text-lg">
                        {offer.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="rounded-xl px-8 py-6 text-base font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all" asChild>
                            <a href={offer.ctaLink}>{offer.ctaText}</a>
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => setShowPerks(!showPerks)}
                            className="border-white/30 text-white hover:bg-white hover:text-[#0b434a] bg-transparent backdrop-blur-sm py-6"
                        >
                            View Perks
                            <ChevronDown className={cn("w-4 h-4 ml-2 transition-transform duration-300", showPerks && "rotate-180")} />
                        </Button>
                    </div>

                    {/* Inline perks with animation */}
                    <div className={cn(
                        "overflow-hidden transition-all duration-500 ease-in-out",
                        showPerks ? "max-h-[500px] opacity-100 mt-8" : "max-h-0 opacity-0"
                    )}>
                        <div className="bg-black/20 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <Check className="w-5 h-5 text-accent" />
                                The Perks
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {offer.perks.map((perk, idx) => (
                                    <div
                                        key={idx}
                                        className={cn(
                                            "flex items-center gap-3",
                                            showPerks && "animate-fade-up"
                                        )}
                                        style={{ animationDelay: `${idx * 0.05}s` }}
                                    >
                                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-accent" />
                                        </div>
                                        <span className="text-sm text-white/90">{perk}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simple visual element on the right/left side if needed, or keeping it clean as per user design */}
                {/* The user's code had just content within the div, and flex-row applies to the container */}

            </div>

            <PerksModal offer={offer} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

const SellingOptions = () => {
    return (
        <>

            <SEO
                title="Selling Options in Indiana | Cash Offer vs Listing | HudREI"
                description="Explore your home selling options in Indiana. Compare a fast cash offer from HudREI vs listing with an agent. No fees, no repairs, close in 7 days."
                canonical="https://hudrei.com/selling-options"
            />



            <main className="bg-white">
                {/* Hero Section */}
                <section className="pt-32 pb-20 bg-white" >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-down"
                        data-aos-duration="500">
                        <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-8 animate-fade-in">
                            <Home className="w-10 h-10 text-accent" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                            Your Selling Options
                        </h1>
                        <p className="text-xl md:text-2xl text-accent font-medium mb-6">Choose the path that's best for you!</p>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                            At HudREI, we redefine the selling experience with tailored solutions to meet your needs in Indiana.
                            Say goodbye to stress and uncertainty – our transparent approach and competitive pricing
                            sets a new standard. We offer multiple options to suit your unique situation.
                        </p>
                        <div className="mt-10">
                            <Button className="rounded-xl px-10 py-7 text-lg font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all" asChild>
                                <a href="#offers">Browse Offers</a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Offers Section */}
                <section id="offers" className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up"
                                data-aos-duration="900">
                                Get Cash Offers
                            </h2>
                            <p className="max-w-2xl text-gray-600 text-xl mx-auto leading-relaxed" data-aos="fade-down"
                                data-aos-duration="900">
                                Explore our range of selling solutions designed to meet your specific needs and timeline.
                            </p>
                        </div>

                        <div className="space-y-12 max-w-6xl mx-auto" data-aos="fade-up"
                            data-aos-duration="500">
                            {offers.map((offer, index) => (
                                <OfferCard key={offer.id} offer={offer} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 " data-aos="fade-up"
                        data-aos-duration="500">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                                It's Easy With Us...
                            </h2>
                            <p className="text-gray-600 text-xl">How it works in 5 easy steps.</p>
                        </div>

                        <div className="grid md:grid-cols-5 gap-8" data-aos="fade-in"
                            data-aos-duration="500">
                            {steps.map((step, index) => (
                                <div key={step.number} className="relative group">
                                    <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="w-14 h-14 rounded-full bg-accent text-white font-bold text-xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                                            {step.number}
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300 z-10 bg-white p-1 rounded-full">
                                            <ArrowRight className="w-6 h-6" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-20 text-center" data-aos="fade-up"
                            data-aos-duration="500">
                            <p className="text-2xl text-gray-900 font-bold mb-4">That's It!</p>
                            <p className="text-gray-600 mb-10 text-lg">Some customers can even stay in the home after closing!</p>
                            <div className="inline-block bg-accent/5 border border-accent/20 rounded-2xl px-10 py-6">
                                <p className="text-xl md:text-2xl font-bold text-accent">Nothing Hidden. Full Transparency. No Hassle!</p>
                            </div>
                        </div>
                    </div>
                </section>


                <QuestionsSection />
            </main>


        </>
    );
};


function ArrowRight(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}


export default SellingOptions;

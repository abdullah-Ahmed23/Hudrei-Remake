import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
    Users,
    Landmark,
    Building,
    Home,
    CheckCircle2,
    ArrowRight,
    Handshake,
    DollarSign,
    Briefcase,
    Megaphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

// Define the content for each partner type
const PARTNER_DATA: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    seoTitle: string;
    seoDesc: string;
    icon: React.ElementType;
    benefits: { title: string; desc: string }[];
    ctaText: string;
    color: string;
}> = {
    "agents": {
        title: "Real Estate Agents",
        subtitle: "Turn Dead Leads into Commissions",
        description: "We love working with agents! Have a listing that's expiring? A seller who can't afford repairs? Or a property that won't pass inspection? Bring it to us. We respect your relationship with the seller and ensure you get paid on your side of the deal.",
        seoTitle: "Partner with HudREI | Solutions for Real Estate Agents",
        seoDesc: "got a hard-to-sell listing? Partner with HudREI. We buy as-is, close fast, and ensure you get your commission. Let's work together.",
        icon: Users,
        benefits: [
            {
                title: "Protected Commissions",
                desc: "We are buyers, not competitors. We're happy to have you represent the seller or pay a referral fee where compliant."
            },
            {
                title: "Buy As-Is",
                desc: "No repair requests, no cleaning, no staging. We take the house exactly as it sits."
            },
            {
                title: "Guaranteed Close",
                desc: "When we sign a contract, we close. Don't risk your reputation on flaky investor buyers."
            }
        ],
        ctaText: "Refer a Listing",
        color: "bg-blue-600"
    },
    "wholesalers": {
        title: "Wholesalers",
        subtitle: "Your Reliable End Buyer",
        description: "Tired of Daisy chains and buyers who back out at the last minute? HudREI is a legitimate cash buyer with proof of funds. We look for win-win relationships with local wholesalers who find great deals but need a solid closer.",
        seoTitle: "Wholesaler Partnerships | Sell Your Deals to HudREI",
        seoDesc: "Need a reliable buyer for your wholesale deals? HudREI buys fast with cash. No daisy chains, just solid closings.",
        icon: Landmark,
        benefits: [
            {
                title: "Quick Decisions",
                desc: "We analyze deals fast. You'll get a yes or no within 24 hours, usually sooner."
            },
            {
                title: "Proof of Funds",
                desc: "Verifiable cash. We can close on your timeline, protecting your assignment fee."
            },
            {
                title: "Repeat Business",
                desc: "We buy in volume. Bring us a good deal, and we'll be your go-to buyer for years."
            }
        ],
        ctaText: "Send Us a Deal",
        color: "bg-emerald-600"
    },
    "local-investors": {
        title: "Local Investors",
        subtitle: "Collaborate & Grow Together",
        description: "Real estate is a team sport. Whether you're looking to partner on a flip, share resources, or need an exit strategy for a project that went sideways, we're open to creative partnerships with other local investors in Indiana.",
        seoTitle: "Investor Partnerships | JV & Opportunities in Indiana",
        seoDesc: "Connect with HudREI. We partner with local investors on deals, JVs, and inventory sharing. Let's grow our portfolios together.",
        icon: Building,
        benefits: [
            {
                title: "Joint Ventures",
                desc: "Have a deal but short on capital or crew? Let's discuss a JV structure that works for everyone."
            },
            {
                title: "Inventory Sharing",
                desc: "We sometimes come across deals that don't fit our buy box but might fit yours. Let's swap leads."
            },
            {
                title: "Market Insights",
                desc: "We believe in community over competition. Let's share data on what's working in the local market."
            }
        ],
        ctaText: "Let's Connect",
        color: "bg-purple-600"
    },
    "title-companies": {
        title: "Title Companies",
        subtitle: "Streamlined Transactions",
        description: "We value efficiency. HudREI conducts a high volume of transactions and looks for title partners who can keep up with our pace, communicate clearly, and handle creative closings when necessary.",
        seoTitle: "Title Company Partners | Efficient Closings with HudREI",
        seoDesc: "HudREI seeks efficiency-driven title partners for high-volume transactions in Indiana. Join our preferred vendor network.",
        icon: Home,
        benefits: [
            {
                title: "Volume Business",
                desc: "We are active buyers. Become a preferred partner and expect consistent file openings."
            },
            {
                title: "Organized Files",
                desc: "Our team provides complete packets and precise instructions to minimize back-and-forth."
            },
            {
                title: "Clear Communication",
                desc: "We respect your time. We answer queries promptly to ensure smooth closings for all parties."
            }
        ],
        ctaText: "Become a Partner",
        color: "bg-amber-600"
    }
};

const PartnerDetail = () => {
    const { type } = useParams();
    const data = type ? PARTNER_DATA[type] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [type]);

    if (!data) {
        return <Navigate to="/partners" replace />;
    }

    return (
        <>
            <SEO
                title={data.seoTitle}
                description={data.seoDesc}
                canonical={`https://hudrei.com/partners/${type}`}
            />

            <main className="min-h-screen bg-white">
                {/* Hero */}
                <section className="relative pt-32 pb-20 overflow-hidden bg-[#062f33] text-white">
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex p-4 rounded-2xl bg-white/10 mb-8 backdrop-blur-sm animate-fade-in">
                            <data.icon className="w-10 h-10 text-accent" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up">
                            {data.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 font-light" data-aos="fade-up" data-aos-delay="100">
                            {data.subtitle}
                        </p>
                        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="200">
                            {data.description}
                        </p>
                    </div>
                </section>

                {/* Benefits Grid */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With HudREI?</h2>
                            <p className="text-gray-600">Building relationships based on trust and performance.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {data.benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-6 h-6 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto bg-[#0b434a] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl overflow-hidden relative">
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
                                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                                    Fill out our contact form or give us a call directly. We'd love to discuss how we can help each other win.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-6 rounded-full">
                                        <Link to="/contact">{data.ctaText}</Link>
                                    </Button>
                                    <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-[#0b434a] text-lg px-8 py-6 rounded-full bg-transparent">
                                        <a href="tel:3177951990">Call (317) 795-1990</a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default PartnerDetail;

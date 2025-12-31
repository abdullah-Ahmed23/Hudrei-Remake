import { Link } from "react-router-dom";
import { Users, Landmark, Building, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuestionsSection from "@/components/QuestionsSection";
import SEO from "@/components/SEO";

const PartnerCard = ({
    title,
    desc,
    icon: Icon,
    link,
    delay
}: {
    title: string;
    desc: string;
    icon: any;
    link: string;
    delay: number;
}) => (
    <div
        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        data-aos="fade-up"
        data-aos-delay={delay}
    >
        <div className="w-14 h-14 bg-[#062f33]/5 rounded-2xl flex items-center justify-center mb-6 text-[#062f33] group-hover:bg-[#062f33] group-hover:text-white transition-colors duration-300">
            <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
            {desc}
        </p>
        <Link
            to={link}
            className="inline-flex items-center font-semibold text-accent hover:text-[#062f33] transition-colors"
        >
            Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
    </div>
);

const Partners = () => {
    return (
        <>
            <SEO
                title="Partner With HudREI | Agents, Investors, Wholesalers"
                description="HudREI partners with local real estate professionals in Indiana. Agents, wholesalers, investors, and title companies—let's grow together."
                canonical="https://hudrei.com/partners"
            />

            <main className="min-h-screen bg-gray-50">
                {/* Usage of Hero style consistent with site */}
                <section className="bg-[#062f33] text-white pt-32 pb-20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Partnering for <span className="text-accent underline decoration-accent/20">Impact</span> in Indiana
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            HudREI is committed to building a robust ecosystem of real estate professionals across Indiana. Whether you're an agent, wholesaler, or investor, let's work together to provide better solutions for homeowners.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                            <PartnerCard
                                title="Real Estate Agents"
                                desc="Have a listing that's stuck? A seller needing a cashout? We protect your commission and close fast."
                                icon={Users}
                                link="/partners/agents"
                                delay={0}
                            />

                            <PartnerCard
                                title="Wholesalers"
                                desc="Need a reliable end buyer with proof of funds? We buy deals quickly and perform as promised."
                                icon={Landmark}
                                link="/partners/wholesalers"
                                delay={100}
                            />

                            <PartnerCard
                                title="Local Investors"
                                desc="Interested in JVs, inventory sharing, or networking? We love collaborating with local pros."
                                icon={Building}
                                link="/partners/local-investors"
                                delay={200}
                            />

                            <PartnerCard
                                title="Title Companies"
                                desc="We look for efficiency and clear communication. Join our network of preferred closing partners."
                                icon={Home}
                                link="/partners/title-companies"
                                delay={300}
                            />

                        </div>

                        <div className="mt-20 text-center">
                            <div className="bg-white p-8 rounded-3xl inline-block shadow-lg border border-gray-100 max-w-2xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't fit into these categories?</h3>
                                <p className="text-gray-600 mb-6">
                                    We are always open to new connections with contractors, lenders, and other industry professionals.
                                </p>
                                <Button asChild size="lg" className="rounded-xl px-8 py-6 text-base font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                    <Link to="/contact">Get In Touch</Link>
                                </Button>
                            </div>
                        </div>

                    </div>
                </section>
                <QuestionsSection />
            </main>
        </>
    );
};

export default Partners;

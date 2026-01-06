import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import QuestionsSection from "@/components/QuestionsSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const faqs = [
    {
        question: "Do you purchase homes directly, or will you list my house on the MLS?",
        answer: "Great question! We're not real estate agents and we don't list properties on the MLS. At HudREI, we're professional home buyers. We purchase houses in Indiana that meet our buying criteria. We pay cash and handle the entire process from start to finish."
    },
    {
        question: "Will you make me a fair offer?",
        answer: "Our goal is a win-win. We consider the condition of the property and recent sales of comparable homes in the area. Since we pay cash and cover all closing costs (and you don't pay agent commissions), many sellers find that our offer puts a similar amount of money in their pocket compared to a traditional sale, but with much less stress and time."
    },
    {
        question: "How do you figure out what my house is worth?",
        answer: "We look at the location of the property, what repairs are needed, the current condition of the house, and the value of comparable houses sold in the area recently. We take all these factors into account to come up with a fair price that works for us and works for you."
    },
    {
        question: "Do I pay any fees or commissions?",
        answer: "No. This is what makes us stand out from the traditional method of selling your house. There are NO fees or commissions when you sell your house to us. We’ll make you an offer, and if it’s a fit then we’ll buy your house (and we’ll often pay for the closing costs too!). No hassle. No fees."
    },
    {
        question: "What makes you different from a real estate agent?",
        answer: "Real estate agents list properties and hope that someone will buy them. The average time to sell a property in many markets right now is 60-90 days. Agents take a percentage of the sale price when they find a buyer. We are different: We’re not agents, we’re home buyers. Our company actually buys houses. We don’t list houses. Since we’re actually the one buying the house from you, and we pay with all cash, we can make a decision to buy your house within a couple of days (sometimes the same day)."
    },
    {
        question: "Am I obligated to work with you if I submit my info?",
        answer: "There is absolutely zero obligation for you. Once you tell us a bit about your property, we’ll take a look at things, maybe set up a call with you to find out a bit more, and make you an all-cash offer that’s fair for you and fair for us. From there, it’s 100% your decision on whether or not you’d like to sell your house to us."
    }
];

const FAQItem = ({
    question,
    answer,
    isOpen,
    onClick,
    index
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
    index: number;
}) => {
    const isMobile = useIsMobile();
    return (
        <motion.div
            key={isMobile ? "m-item" : "d-item"}
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: isMobile ? 0 : index * 0.05, duration: 0.4 }}
            className="group border-b border-brand-black/10 last:border-0" data-aos="fade-up"
        >
            <button
                onClick={onClick}
                className="w-full text-left py-4 flex items-center justify-start gap-4 hover:bg-transparent transition-all"
            >
                <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${isOpen ? "text-accent rotate-45" : "text-primary"}`}>
                    <Plus className="w-5 h-5 font-bold" strokeWidth={3} />
                </div>

                <span className={`text-base md:text-lg font-bold transition-colors ${isOpen ? "text-brand-black" : "text-brand-black group-hover:text-primary"}`}>
                    {question}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={isMobile ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={isMobile ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: isMobile ? 0 : 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pl-12 pr-4 pb-6 text-brand-black/80 leading-relaxed text-sm md:text-base">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const isMobile = useIsMobile();

    return (
        <>
            <Helmet>
                <title>Common Questions About Selling Your House | HudREI FAQ</title>
                <meta name="description" content="Have questions about selling your house fast in Indiana? We have answers. Learn about our cash offers, zero fees, and how we buy houses in any condition." />
                <link rel="canonical" href="https://hudrei.com/faq" />
            </Helmet>

            <Header />

            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden" data-aos="fade-up">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
                    <div className="absolute top-20 right-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-200/50 rounded-full blur-3xl" />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            key={isMobile ? "m-header" : "d-header"}
                            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: isMobile ? 0 : 0.6 }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/5 border border-gray-900/10 text-brand-black mb-6">
                                <HelpCircle className="w-4 h-4" />
                                <span className="text-sm font-medium">Got Questions?</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-brand-black mb-6 md:mb-8 tracking-tight">
                                Frequently Asked <span className="text-accent relative inline-block">
                                    Questions
                                    <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="6" />
                                    </svg>
                                </span>
                            </h1>

                            <p className="text-lg text-brand-black/80 max-w-2xl mx-auto">
                                We know selling a house is a big decision, and you probably have questions.
                                Below are answers to the most common ones we hear. If you don't see yours,
                                reach out directly — we're always happy to talk.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 pb-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    index={index}
                                />
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            key={isMobile ? "m-cta" : "d-cta"}
                            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mt-16 text-center"
                        >
                            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-3xl bg-gray-50 border border-brand-black/20">
                                <div className="w-14 h-14 rounded-2xl bg-gray-900/10 flex items-center justify-center">
                                    <MessageCircle className="w-7 h-7 text-brand-black" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className="text-xl font-semibold text-brand-black mb-1">Still have questions?</h3>
                                    <p className="text-brand-black/80">We're here to help. Reach out anytime.</p>
                                </div>
                                <Button asChild className="rounded-xl px-8 py-6 text-base font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                    <Link to="/contact">Contact Us</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
                <QuestionsSection />
            </main>


        </>
    );
};

export default FAQ;




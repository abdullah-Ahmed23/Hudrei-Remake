import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Do you purchase homes directly, or will you list my house on the MLS?",
    answer: "Great question! We're not real estate agents and we don't list properties on the MLS. At HudREI, we're professional home buyers. We purchase houses in Indiana that meet our buying criteria. After we buy, we may make repairs, resell the property, or keep it as a rental."
  },
  {
    question: "Will you make me a fair offer?",
    answer: "Our goal is a win-win price. We typically buy below retail market value because we're covering repairs, risk, and holding costs. But sellers love that we pay cash, close quickly (often in as little as 14 days), and charge no commissions or fees. Many of our clients value the speed and simplicity more than chasing the highest price. And remember — our offers come with zero obligation."
  },
  {
    question: "How do you figure out what my house is worth?",
    answer: "Transparency matters to us. Here's what we consider: Location of the property, condition and needed repairs, recent sales of similar homes in your area, and market trends at the time of sale. We add this all up to present a price that works for both of us."
  },
  {
    question: "Do I pay any fees or commissions?",
    answer: "No. With HudREI, you'll never pay agent commissions or hidden fees. In many cases, we even cover closing costs. What we offer is what you get (minus any mortgage or liens). We make money by taking on the risk of repairs and resale — not by charging you."
  },
  {
    question: "What makes you different from a real estate agent?",
    answer: "Agents market your home, show it to buyers, and collect a commission when it sells. That can take months — and during that time, you still cover utilities, taxes, and upkeep. HudREI is different. We buy directly, with cash, and skip the commissions. You don't need to fix or clean anything. We handle the hard work so you can move on."
  },
  {
    question: "Am I obligated to work with you if I submit my info?",
    answer: "Absolutely not. Sending your information just lets us look at your property and see if we're a good fit. If we are, we'll make you a cash offer. The choice to accept is 100% yours. No pressure, no strings attached."
  },
  {
    question: "Can you really close in 14 days or less?",
    answer: "Yes. Because we pay cash and don't rely on traditional financing, we can close much faster than a standard sale. In many cases, we've closed in as little as 7-10 days, depending on the title work. And if you need more time, we'll close on your schedule."
  },
  {
    question: "What if my house has tenants or family living in it?",
    answer: "That's no problem. We buy properties with tenants, family members, or other occupants still inside. We'll work with you (and them) to create a smooth transition plan."
  },
  {
    question: "My house needs major repairs. Will you still buy it?",
    answer: "Absolutely. We buy homes as-is, in any condition. From outdated kitchens to foundation problems, fire damage, or even hoarder houses — you don't have to fix or clean a thing."
  },
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
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
    className="group"
  >
    <button
      onClick={onClick}
      className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
        isOpen 
          ? "bg-[#062f33] text-white shadow-lg shadow-gray-900/20" 
          : "bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className={`text-lg font-semibold pr-4 ${isOpen ? "text-white" : "text-gray-900"}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? "bg-white/20 text-white" 
            : " text-gray-900 group-hover:bg-gray-900/20"
        }`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </div>
    </button>
    
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-6 py-5 text-black leading-relaxed bg-gray-50 rounded-b-2xl    -mt-4 pt-8">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Helmet>
        <title>FAQ | HudREI - Frequently Asked Questions</title>
        <meta name="description" content="Get answers to common questions about selling your house to HudREI. Learn about our cash offers, closing timeline, and how we buy homes as-is." />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-200/50 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/5 border border-gray-900/10 text-gray-900 mb-6">
                <HelpCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Got Questions?</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Frequently Asked{" "}
                <span className="text-primary">Questions</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 text-center"
            >
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-3xl bg-gray-50 border border-gray-200">
                <div className="w-14 h-14 rounded-2xl bg-gray-900/10 flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-gray-900" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Still have questions?</h3>
                  <p className="text-gray-600">We're here to help. Reach out anytime.</p>
                </div>
                <Button asChild className="rounded-full px-8 bg-[#062f33] hover:bg-gray-800 text-white">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      
    </>
  );
};

export default FAQ;
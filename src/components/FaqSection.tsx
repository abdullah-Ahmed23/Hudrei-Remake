import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

/* ================= HOME FAQ DATA ================= */

const homeFaqs = [
  {
    question: "Do you purchase homes directly, or will you list my house on the MLS?",
    answer:
      "Great question! We're not real estate agents and we don't list properties on the MLS. At HudREI, we're professional home buyers who purchase homes directly for cash.",
  },
  {
    question: "Will you make me a fair offer?",
    answer:
      "Our goal is a win-win price. We typically buy below retail market value because we cover repairs, risk, and holding costs — but sellers love the speed, certainty, and zero fees.",
  },
  {
    question: "Can you really close in 14 days or less?",
    answer:
      "Yes. Because we pay cash and don’t rely on traditional financing, we can often close in as little as 7–10 days depending on title work.",
  },
];

/* ================= FAQ ITEM ================= */

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
  index,
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
      className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${isOpen
          ? "bg-[#062f33] text-white shadow-lg shadow-gray-900/20"
          : "bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300"
        }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={`text-lg font-semibold pr-4 ${isOpen ? "text-white" : "text-gray-900"
            }`}
        >
          {question}
        </span>

        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
              ? "bg-white/20 text-white"
              : "text-gray-900 group-hover:bg-gray-900/20"
            }`}
        >
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
          <div className="px-6 py-5 text-black leading-relaxed bg-gray-50 rounded-b-2xl -mt-4 pt-8">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

/* ================= SECTION ================= */

const HomeFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);




  return (
    <section className="py-10 md:py-24 bg-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Quick answers to common questions about selling your home with HudREI.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {homeFaqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            asChild
            className="rounded-xl px-10 py-6 text-lg font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <Link to="/faq">View All FAQs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQSection;

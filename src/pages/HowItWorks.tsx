import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Search,
  FileText,
  DollarSign,
  CheckCircle,
  ChartArea,
  Footprints,
} from "lucide-react";

import { Button } from "@/components/ui/button"
 import { Link, NavLink } from "react-router-dom";

const steps = [
  {
    step: "01",
    title: "Tell Us About Your Property",
    icon: Search,
    desc: "Enter your home address and answer a few quick questions.",
    more:
      "You don’t need to clean, repair, or prepare anything. Just tell us about your situation, timeline, and goals — it only takes a minute.",
  },
  {
    step: "02",
    title: "We Analyze & Build Your Offer",
    icon: ChartArea,
    desc: "We review your home, market data, and needed repairs.",
    more:
      "Our team analyzes comparable sales, property condition, and market trends to create a transparent, fair cash offer.",
  },
  {
    step: "03",
    title: "Receive Your Cash Offer",
    icon: DollarSign,
    desc: "Get a clear, no-obligation cash offer.",
    more:
      "There’s no pressure to accept. Review it, compare options, or walk away — the decision is always yours.",
  },
  {
    step: "04",
    title: "Close Fast & Move On",
    icon: Footprints,
    desc: "Close in as little as 7–14 days.",
    more:
      "We cover closing costs, handle paperwork, and close on your schedule — even if you need extra time.",
  },
];

const HowItWorks = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /* 🔥 Scroll-based line animation */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-white py-28">
        
      <div className="container mx-auto px-4 max-w-6xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold text-black mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple, transparent process designed to help you sell your home
            fast — without repairs, fees, or pressure.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div ref={containerRef} className="relative">
          {/* Animated vertical line */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-black origin-top"
          />

          <div className="space-y-16">
            {steps.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="relative md:pl-20"
                >

                    
                  {/* DOT */}
                  <div className="hidden md:flex absolute left-3 top-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="w-6 h-6 rounded-full bg-black"
                    />
                  </div>

                  {/* CARD */}
                  <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <item.icon className="w-7 h-7 text-black" />
                      <span className="text-sm font-semibold tracking-widest text-gray-500">
                        STEP {item.step}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-5xl font-bold text-[#318174]  mb-4">
                      {item.title}
                    </h3>

                    <p className="text-lg text-gray-700 max-w-3xl">
                      {item.desc}
                    </p>

                    {/* EXPAND */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-lg text-gray-700 mt-4 max-w-3xl">
                            {item.more}
                          </p>


                          
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* TOGGLE */}
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : i)
                      }
                      className="mt-6 text-sm font-semibold text-black underline underline-offset-4 hover:opacity-70 transition"
                    >
                      {isOpen ? "Read less" : "Read more"}
                    </button>
                  </div>
                  
                  
                </motion.div>
              );
            })}
             
          </div>
        </div>

       
      </div>
      <div className="flex items-center justify-center mt-20">
        <h1></h1>
 <Link className="flex items-center" to="/contact">
                <Button className=" flex items-center bg-accent text-white hover:bg-accent/90 text-lg px-8 py-6" asChild>
                  <a>Get Your Cash Offer</a>
                </Button>
                </Link>
                </div>
      
    </section>
  );
};

export default HowItWorks;

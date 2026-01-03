import { ClipboardList, BadgeDollarSign, Key, Phone } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    id: 1,
    icon: ClipboardList,
    title: "Step 1: Contact Us",
    desc: "Fill out our simple form or call us directly. Tell us about your property and your situation.",
  },
  {
    id: 2,
    icon: Phone,
    title: "Step 2: Free Consultation",
    desc: "A specialist would give you a call, understand your situation and goals so we can present an offer that fits your needs.",
  },
  {
    id: 3,
    icon: BadgeDollarSign,
    title: "Step 3: Get Your Cash Offer",
    desc: "If we are a good fit, we present a fair cash offer that actually closes.",
  },
  {
    id: 4,
    icon: Key,
    title: "Step 4: Close on Your Timeline",
    desc: "If you accept the cash offer. We work with a local title company to handle all the paperwork. You choose the closing date whether that's next week or next month, And we pay all closing costs.",
  },
];

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null); // Added for mobile timeline

  /* Snap detection */
  const inView = useInView(sectionRef, { amount: 0.6, once: true });

  /* Mobile progress */
  const { scrollYProgress } = useScroll({
    target: containerRef, // Changed target to containerRef for mobile
    offset: ["start center", "end center"],
  });

  const isMobile = useIsMobile();
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]); // Changed to scaleY for mobile line

  return (
    <section
      ref={sectionRef}
      className="
        lg:snap-start
        lg:min-h-screen
        bg-white
        flex
        items-center
        py-12 md:py-24
      "
    >
      <div className="container mx-auto px-4 w-full">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-2"
        >
          <p className="uppercase tracking-widest text-sm text-gray-400 mb-4">
            Simple Process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-gray-900 mb-6 md:mb-8 tracking-tight">
            4 SIMPLE STEPS <span className="text-accent relative inline-block">
              For a Quick Sale
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="6" />
              </svg>
            </span> in Indiana
          </h2>
        </motion.div>

        {/* TIMELINE (MOBILE) */}
        <div ref={containerRef} className="relative lg:hidden">
          {/* Vertical line (ALL SCREENS) */}
          <motion.div
            style={{ scaleY: isMobile ? 1 : lineScale }}
            className="absolute left-6 top-0 bottom-0 w-[3px] bg-[#318075] origin-top rounded-full"
          />

          <div className="space-y-20 pl-20">
            {steps.map((item, i) => {
              // const isOpen = openIndex === i; // This variable is not defined in the original context, removed.

              return (
                <motion.div
                  key={`m-step-${item.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  {/* ICON NODE */}
                  <div className="absolute -left-[54px] top-6 w-12 h-12 rounded-full bg-white border-[3px] border-[#318075] flex items-center justify-center z-10">
                    <item.icon className="w-6 h-6 text-[#318075]" />
                  </div>

                  {/* CARD */}
                  <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
                    <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
                      {item.title.split(":")[0]}
                    </span>

                    <h3 className="text-xl font-bold text-[#318075] mt-2 mb-3">
                      {item.title.split(":")[1] || item.title}
                    </h3>

                    <p className="text-base text-gray-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* MOBILE SOLD STAMP */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="relative mt-12 mb-8"
            >
              <div className="absolute -left-[54px] top-8 w-12 h-12 rounded-full bg-red-600 border-[3px] border-white flex items-center justify-center z-10 shadow-lg">
                <span className="text-white font-bold text-xs">END</span>
              </div>

              <div className="border-[4px] border-red-600 bg-white/50 backdrop-blur-sm p-8 rounded-xl text-center rotate-2 transform shadow-xl">
                <span className="text-5xl font-black text-red-600 tracking-widest uppercase">
                  SOLD!
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:block relative mt-20 h-[500px]">

          {/* SVG LINE BACKGROUND */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible">
            {/* 
                 Sine Wave Continuous:
                 Step 1 (Left 2%) -> Step 2 (Left 22%) -> Step 3 (Left 42%) -> Step 4 (Left 62%) -> SOLD (Left 85%)
             */}
            <motion.path
              d="M 50 100 C 150 100, 150 400, 250 400 S 450 100, 550 100 S 750 400, 850 400 S 1050 250, 1100 250"
              fill="none"
              stroke="#318174"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="12 12"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0, ease: "easeInOut" }}
            />
            {/* Arrow Head at end of line near SOLD */}
            <motion.path
              d="M 1085 240 L 1105 250 L 1085 260"
              stroke="#318174"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.9 }}
            />
          </svg>

          {/* ICONS & CONTENT */}
          <div className="relative w-full h-full">

            {/* STEP 1: Top-Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="absolute left-[0%] top-[0%] w-[200px] text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-[#39ac99] flex items-center justify-center shadow-lg mb-4 -rotate-6">
                <ClipboardList className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Step 1: Contact Us</h3>
              <p className="text-sm text-black font-semibold">Fill out our simple form or call us directly. Tell us about your property and your situation.</p>
            </motion.div>

            {/* STEP 2: Bottom-Left (Down) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute left-[20%] top-[60%] w-[200px] text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-[#39ac99] flex items-center justify-center shadow-lg mb-4 rotate-6">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Step 2: Free Consultation</h3>
              <p className="text-sm text-black font-semibold">A specialist would give you a call, understand your situation and goals so we can present an offer that fits your needs.</p>
            </motion.div>

            {/* STEP 3: Top-Right (Up) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute left-[40%] top-[0%] w-[200px] text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-[#39ac99] flex items-center justify-center shadow-lg mb-4 -rotate-3">
                <BadgeDollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Step 3: Get Your Cash Offer</h3>
              <p className="text-sm text-black font-semibold">If we are a good fit, we present a fair cash offer that actually closes.</p>
            </motion.div>

            {/* STEP 4: Bottom-Right (Down) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute left-[60%] top-[60%] w-[200px] text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-[#39ac99] flex items-center justify-center shadow-lg mb-4 rotate-3">
                <Key className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Step 4: Close on Your Timeline</h3>
              <p className="text-sm text-black font-semibold">If you accept the cash offer. We work with a local title company to handle all the paperwork. You choose the closing date whether that's next week or next month, And we pay all closing costs.</p>
            </motion.div>

            {/* SOLD STAMP - Connected and closer line */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -12 }}
              transition={{ delay: 1.8, type: "spring", bounce: 0.5 }}
              className="absolute left-[83%] top-[35%] z-20"
            >
              <div className="flex flex-col items-center">
                <div className="border-[6px] border-red-600 rounded-xl px-10 py-6 bg-white shadow-2xl transform rotate-3 hover:scale-105 transition-transform">
                  <span className="text-6xl font-black text-red-600 tracking-widest uppercase">
                    SOLD!
                  </span>
                </div>
                <p className="mt-4 text-black font-bold uppercase tracking-widest text-sm bg-white/80 px-4 py-1 rounded-full">
                  Your Goal
                </p>
              </div>
            </motion.div>

          </div>

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mt-24 md:mt-32"
        >
          <Button size="lg" className="rounded-xl px-14 py-6 text-lg font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
            <Link to="/contact">Start Your Sale Today</Link>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorksSection;

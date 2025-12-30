import { ClipboardList, BadgeDollarSign, Key } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

const steps = [
  {
    id: 1,
    icon: ClipboardList,
    title: "Contact Us",
    desc: "Fill out our simple form or call us directly. Tell us about your property and your situation.",
  },
  {
    id: 2,
    icon: BadgeDollarSign,
    title: "Get Your Cash Offer",
    desc: "We'll schedule a quick visit (usually within 24-48 hours) and present you with a fair, no-obligation cash offer.",
  },
  {
    id: 3,
    icon: Key,
    title: "Close on Your Timeline",
    desc: "If you accept our offer, we'll handle all the paperwork and pay all closing costs. You choose the date.",
  },
];

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef(null);

  /* Snap detection */
  const inView = useInView(sectionRef, { amount: 0.6, once: true });

  /* Mobile progress */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const mobileLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="
        snap-start
        min-h-screen
        bg-white
        flex
        items-center
        py-2
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
          <h2 className="text-3xl sm:text-4xl lg:text-7xl text-black font-extrabold">
            Our Simple 3-Step Process for a <span className="text-accent">Quick Home Sale</span>
          </h2>
          <p className="text-black text-xl sm:text-2xl mt-4">
            in Indiana
          </p>
        </motion.div>

        {/* ================= DESKTOP ================= */}
        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:block relative h-[51vh]">

          {/* SVG CURVED LINE */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 420"
            fill="none"
          >
            {/* MAIN LINE */}
            <motion.path
              d="M120 140 
         C 420 460, 
           780 -40, 
           1080 140"
              stroke="#318174"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="8 12"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />

            {/* ARROW HEAD (LAST) */}
            <motion.path
              d="M1060 128 L1080 140 L1060 152"
              stroke="#318174"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.8, duration: 0.25 }}
            />
          </svg>

          {/* STEP 1 — LEFT / TOP */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="
      absolute
      left-[-1%]
      top-[28%]
      w-[300px]
      text-center
      text-black
    "
          >
            <div className="mx-auto mb-6 w-20 h-20 rounded-2xl bg-[#39ac99] flex items-center justify-center">
              <ClipboardList className="w-9 h-9 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">
              Contact Us
            </h3>
            <p className="text-black text-xl font-bold  ">
              Fill out our simple form or call us directly. Tell us about your property.
            </p>
          </motion.div>

          {/* STEP 2 — CENTER / BOTTOM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="
      absolute
      left-[37%]
      -translate-x-1/2
      top-[40%]
      w-[340px]
      text-center
      text-black
    "
          >
            <div className="mx-auto mb-6 w-20 h-20 rounded-2xl bg-[#39ac99] flex items-center justify-center">
              <BadgeDollarSign className="w-9 h-9 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">
              Get Your Cash Offer
            </h3>
            <p className="text-black text-xl font-bold ">
              We'll schedule a quick visit and present a fair, no-obligation cash offer.
            </p>
          </motion.div>

          {/* STEP 3 — RIGHT / TOP */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1 }}
            className="
      absolute
      right-[-2%]
      top-[29%]
      w-[300px]
      text-center
      text-black
    "
          >
            <div className="mx-auto mb-6 w-20 h-20 rounded-2xl bg-[#39ac99] flex items-center justify-center">
              <Key className="w-9 h-9 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">
              Close on Your Timeline
            </h3>
            <p className="text-black text-xl font-bold ">
              We handle all the paperwork and pay all closing costs. You choose the date.
            </p>
          </motion.div>
        </div>


        {/* ================= MOBILE ================= */}
        <div className="block lg:hidden relative mt-24 md:mt-28">

          {/* VERTICAL LINE */}
          <div className="absolute left-5 top-0 bottom-0 w-[3px] bg-gray-200 rounded-full">
            <motion.div
              style={{ height: mobileLineHeight }}
              className="w-full bg-accent rounded-full"
            />
          </div>

          <div className="space-y-20 pl-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="absolute -left-[54px] top-2 w-10 h-10 rounded-full bg-white border-4 border-accent flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl text-black font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16 md:mt-2"
        >
          <Button size="lg" className="rounded-full px-14">
            <Link to="/contact">Start Your Sale Today</Link>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorksSection;

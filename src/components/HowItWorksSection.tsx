import { ClipboardList, BadgeDollarSign, Key } from "lucide-react";
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
    icon: BadgeDollarSign,
    title: "Step 2: Get Your Cash Offer",
    desc: "A specialist would give you a call, understand your situation and goals so we can present an offer that fits your needs.",
  },
  {
    id: 3,
    icon: Key,
    title: "Step 3: Close on Your Timeline",
    desc: "If you accept the cash offer. We work with a local title company to handle all the paperwork. You choose the closing date whether that's next week or next month, And we pay all closing costs.",
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

  const isMobile = useIsMobile();
  const mobileLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
            3 SIMPLE PROCESS <span className="text-accent relative inline-block">
              For a Quick Sale
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="6" />
              </svg>
            </span> in Indiana
          </h2>
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
              Step 1: Contact Us
            </h3>
            <p className="text-black text-xl font-bold  ">
              Fill out our simple form or call us directly. Tell us about your property and your situation.
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
              Step 2: Get Your Cash Offer
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
              Step 3: Close on Your Timeline
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
              style={{ height: isMobile ? "100%" : mobileLineHeight }}
              className="w-full bg-accent rounded-full will-change-[height]"
            />
          </div>

          <div className="space-y-20 pl-16">
            {steps.map((step, i) => (
              <div
                key={step.id}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="absolute -left-[54px] top-2 w-10 h-10 rounded-full bg-white border-4 border-accent flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl text-black font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
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
          <Button size="lg" className="rounded-xl px-14 py-6 text-lg font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
            <Link to="/contact">Start Your Sale Today</Link>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorksSection;

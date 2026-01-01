import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  ShieldCheck,
  HeartHandshake,
  MapPinned,
  BadgeCheck,
  BadgeDollarSign,
} from "lucide-react";

const values = [
  {
    title: "No Repairs or Cleaning Needed",
    desc: "Sell your house as-is in Indiana. We buy homes in any condition—whether it's outdated, damaged, or even condemned. No need to spend thousands on repairs, painting, or staging. We handle everything, including cleanout if needed.",
    icon: ShieldCheck,
  },
  {
    title: "Zero Fees or Commissions",
    desc: "Avoid the standard 6% realtor fees that cost Indiana sellers thousands. When you sell to HudREI, there are no realtor commissions, no closing costs, and no hidden fees. What we offer is what you keep.",
    icon: BadgeDollarSign,
  },
  {
    title: "Close on Your Schedule",
    desc: "Need a quick home sale in Indiana? We can close in as few as 7 days. Or, if you need more time to move, we'll work with your timeline. You choose the closing date that works best for you.",
    icon: MapPinned,
  },
  {
    title: "Cash Offers in 24 Hours",
    desc: "No waiting weeks for an offer. We evaluate your property and present a fair cash offer within 24 hours. No obligation—you're free to accept or decline.",
    icon: BadgeCheck,
  },
  {
    title: "No Showings or Open Houses",
    desc: "Forget about keeping your house pristine for endless showings. We only need to visit once to make our offer. No disruption to your life.",
    icon: HeartHandshake,
  },
  {
    title: "We Buy in Any Situation",
    desc: "Facing foreclosure? Inherited a property? Going through a divorce? Behind on taxes? We've helped Indiana homeowners in every situation imaginable. Our cash for houses Indianapolis program is designed to solve your specific problem.",
    icon: BadgeCheck,
  },
];

const AboutValues = () => {
  const isMobile = useIsMobile();
  return (
    <section className="py-28 bg-[#062f33] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-white mt-4 mb-6 tracking-tight">
            Why Sell Your House to <span className="text-accent relative inline-block">
              HudREI?
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="6" />
              </svg>
            </span>
          </h2>
        </div>

        {/* ================= MOBILE (ICONS ONLY) ================= */}
        <motion.div
          className="relative md:hidden space-y-16 pl-14"
          initial={isMobile ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: isMobile ? 0 : 0.1 }
            }
          }}
        >
          {values.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
                className="relative will-change-transform"
              >
                {/* ICON */}
                <div className="absolute -left-[60px] top-1 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center border border-accent/10">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                <h3 className="text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ================= DESKTOP GRID ================= */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-14 text-center"
        >
          {values.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                className="flex flex-col items-center"
              >
                <div className="w-14 h-14 mb-6 rounded-2xl bg-accent/20 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-accent" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-white/70 text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}

        </motion.div>
        <div className="flex items-center justify-center pt-10">
          <Button size="lg" className="rounded-xl px-14 py-6 text-lg font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
            <Link to="/contact">Get My Cash Offer</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;

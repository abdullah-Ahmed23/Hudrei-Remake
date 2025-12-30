import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import {
  ShieldCheck,
  HeartHandshake,
  MapPinned,
  BadgeCheck,
} from "lucide-react";

const values = [
  {
    title: "We Are Transparent",
    desc: "Clear pricing. No hidden fees. Every step explained upfront.",
    icon: ShieldCheck,
  },
  {
    title: "Compassionate",
    desc: "We understand selling a home is emotional. We listen first.",
    icon: HeartHandshake,
  },
  {
    title: "Local Experts",
    desc: "Deep knowledge of Texas neighborhoods and market conditions.",
    icon: MapPinned,
  },
  {
    title: "With Integrity & Real Results",
    desc: "Fair offers backed by honest market analysis.",
    icon: BadgeCheck,
  },
];

const AboutValues = () => {
  return (
    <section className="py-28 bg-[#062f33] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          
          <h2 className="text-4xl sm:text-7xl font-bold mt-4 mb-6">
            At Hudrei We Are
          </h2>
        
        </motion.div>

        {/* ================= MOBILE (ICONS ONLY) ================= */}
        <div className="relative md:hidden">
          <div className="space-y-20 pl-16">
            {values.map((item, i) => {
              const Icon = item.icon;
              const itemRef = useRef<HTMLDivElement>(null);

              const isActive = useInView(itemRef, {
                margin: "-50% 0px -30% 0px",
              });

              return (
                <motion.div
                  ref={itemRef}
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* ICON */}
                  <motion.div
                    animate={
                      isActive
                        ? {
                            scale: 1.15,
                            backgroundColor: "rgba(56, 178, 172, 0.35)",
                          }
                        : {
                            scale: 1,
                            backgroundColor: "rgba(56, 178, 172, 0.1)",
                          }
                    }
                    transition={{ type: "spring", stiffness: 300 }}
                    className="absolute -left-[66px] top-1 w-12 h-12 rounded-xl flex items-center justify-center"
                  >
                    <Icon
                      className={`w-6 h-6 transition-colors duration-300 ${
                        isActive ? "text-accent" : "text-white/50"
                      }`}
                    />
                  </motion.div>

                  <h3 className="text-2xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white text-lg">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-14 text-center"
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
          <Button size="lg" className="rounded-full px-14 ">
            <Link to="/contact">Get My Cash Offer</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;

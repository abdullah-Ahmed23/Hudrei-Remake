import { motion } from "framer-motion";
import {
  PhoneCall,
  Target,
  ClipboardCheck,
  Building2,
  FileCheck,
  Megaphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const careers = [
  {
    title: "Cold Caller",
    icon: PhoneCall,
    desc: "Initiate outbound calls to homeowners, qualify leads, and gather property information for our acquisition team.",
  },
  {
    title: "Acquisition Property Specialist",
    icon: Target,
    desc: "Analyze properties, negotiate offers with sellers, and secure contracts aligned with company investment goals.",
  },
  {
    title: "Executive Office Assistant",
    icon: ClipboardCheck,
    desc: "Support daily operations, manage schedules, handle communications, and assist leadership with administrative tasks.",
  },
  {
    title: "Property Disposition Specialist",
    icon: Building2,
    desc: "Market acquired properties, manage buyer relationships, and maximize resale value through strategic dispositions.",
  },
  {
    title: "Transaction Coordinator",
    icon: FileCheck,
    desc: "Oversee contracts, coordinate with title companies, and ensure smooth closings from agreement to funding.",
  },
  {
    title: "Marketing Developer",
    icon: Megaphone,
    desc: "Build and optimize digital campaigns, landing pages, and automation systems to drive consistent inbound leads.",
  },
];


const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const CareersSection = () => {
  return (
    <section className="py-32 bg-[white] text-black">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Join Our <span className="text-accent">Team</span>
          </h2>
          <p className="text-lg text-black">
            Build a career with a fast-growing real estate investment company focused on transparency, growth, and results.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {careers.map((role, i) => (
            <motion.div
              key={i}
              variants={item}
              className="
                bg-[#062f33] backdrop-blur
                border border-white/10
                rounded-2xl p-8
                hover:-translate-y-1 hover:shadow-xl
                transition-all duration-300
              "
            >
              <div className="w-12 h-12 mb-6 rounded-xl bg-accent/20 flex items-center justify-center">
              <role.icon className="w-6 h-6 text-accent" />

              </div>

              <h3 className="text-xl text-white font-semibold mb-3">
                {role.title}
              </h3>

              <p className="text-white mb-6 leading-relaxed">
                {role.desc}
              </p>

              <Button
                variant="outline"
                className="rounded-full border-white/30 text-white hover:bg-white hover:text-black transition"
              >
                Apply for this role
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-20"
        >
          <Button
            size="lg"
            className="rounded-full px-12 bg-accent text-black hover:bg-accent/90"
          >
            Apply for a Career Opportunity
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default CareersSection;

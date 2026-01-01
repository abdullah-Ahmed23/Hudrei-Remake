import { Phone, Mail, HelpCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const QuestionsSection = () => {
  const isMobile = useIsMobile();
  const markets = [
    "Kokomo",
    "Fort Wayne",
    "Indianapolis",
    "South Bend",
    "Mishawaka",
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* ===== Background ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* Animated house appears on view */}
        <HouseOnView />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-14 mb-20">
          {/* Left */}
          <div className="max-w-md">
            <h2 className="text-4xl text-black md:text-5xl font-bold leading-tight">
              Don’t settle for a generic cash offer.


              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl text-transparent">
                We re-imagined the process to give you options.

              </span>
            </h2>

            <p className="text-black text-lg mt-4">
              Speed. Max Value. Debt Relief.
              Tell us your goal, and we will build the offer that gets you there.
            </p>
          </div>

          {/* Right - CTAs */}
          <div className="btnsQ flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
            <Button
              asChild
              className="w-full sm:w-auto rounded-xl px-8 py-6 text-base font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <a href="tel:+13177951990">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now!  317-795-1990
              </a>
            </Button>

            <Button
              asChild
              className="w-full sm:w-auto rounded-xl px-8 py-6 text-base font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <a href="mailto:office@hudrei.com">
                <Mail className="w-5 h-5 mr-2" />
                office@hudrei.com
              </a>
            </Button>

            <Button
              asChild
              className="w-full sm:w-auto rounded-xl px-8 py-6 text-base font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <a href="/contact">
                <PhoneCall className="w-5 h-5 mr-2" />
                Request a Call
              </a>
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-14">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Markets */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Sell with confidence in your market
          </p>

          <div className="flex flex-wrap justify-center gap-x-3 gap-y-3">
            {markets.map((market, index) => (
              <span key={market} className="flex items-center">
                <p

                  className="text-sm font-medium text-accent hover:text-primary transition-colors hover:underline underline-offset-4"
                >
                  {market}
                </p>

                {index < markets.length - 1 && (
                  <span className="mx-2 text-muted-foreground">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;

/* ================= Background House ================= */

const HouseOnView = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {/* Ghost house */}
      <motion.svg
        className="absolute right-[-240px] top-1/2 -translate-y-1/2 w-[880px] h-[600px] opacity-[0.05] blur-[2px]"
        viewBox="0 0 820 560"
        fill="none"
        initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
        whileInView={isMobile ? undefined : { opacity: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8 }}
      >
        <HousePaths delay={0.2} isMobile={isMobile} />
      </motion.svg>

      {/* Main house */}
      <motion.svg
        className="absolute right-[-160px] top-1/2 -translate-y-1/2 w-[820px] h-[560px] opacity-[0.12]"
        viewBox="0 0 820 560"
        fill="none"
        initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
        whileInView={isMobile ? undefined : { opacity: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8 }}
      >
        <HousePaths delay={0} isMobile={isMobile} />
      </motion.svg>
    </>
  );
};

const HousePaths = ({ delay, isMobile }: { delay: number; isMobile: boolean }) => (
  <>
    <defs>
      <linearGradient id="luxStroke" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="rgb(120,120,120)" />
        <stop offset="100%" stopColor="rgb(160,160,160)" />
      </linearGradient>
    </defs>

    {/* Roof */}
    <motion.path
      d="M140 300 L410 130 L680 300"
      stroke="url(#luxStroke)"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={isMobile ? { pathLength: 1 } : { pathLength: 0 }}
      whileInView={isMobile ? undefined : { pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, delay }}
    />

    {/* Body */}
    <motion.rect
      x="210"
      y="300"
      width="400"
      height="170"
      rx="18"
      stroke="url(#luxStroke)"
      strokeWidth="1.5"
      initial={isMobile ? { pathLength: 1 } : { pathLength: 0 }}
      whileInView={isMobile ? undefined : { pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, delay: delay + 0.15 }}
    />

    {/* Inner cut */}
    <motion.rect
      x="330"
      y="340"
      width="160"
      height="90"
      rx="10"
      stroke="url(#luxStroke)"
      strokeWidth="1"
      initial={isMobile ? { pathLength: 1 } : { pathLength: 0 }}
      whileInView={isMobile ? undefined : { pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, delay: delay + 0.3 }}
    />
  </>
);

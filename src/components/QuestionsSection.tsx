import { Phone, Mail, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const QuestionsSection = () => {
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
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-14 mb-20">
          {/* Left */}
          <div className="max-w-md">
            <h2 className="text-4xl text-black md:text-5xl font-bold leading-tight">
              Need to sell your house fast?

              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl text-transparent">
Get a fair cash offer no repairs, no fees.
              </span>
            </h2>

            <p className="text-black text-lg mt-4">
              Tell us about your property and timeline. HudREI buys homes as-is and closes on your schedule.
            </p>
          </div>

          {/* Right - CTAs */}
          <div className="flex flex-wrap flex-col gap-4">
            <Button
              asChild
              className="rounded-full px-8 py-6 text-base font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <a href="tel:+13177951990">
                <Phone className="w-4 h-4 mr-2" />
              Call Us Now!  317-795-1990
              </a>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="rounded-full px-8 py-6 text-base font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <a href="mailto:office@hudrei.com">
                <Mail className="w-4 h-4 mr-2" />
                office@hudrei.com
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-medium border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all"
            >
              <a href="/contact">
                <HelpCircle className="w-4 h-4 mr-2" />
                Contact Us!
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
                <a
                  href={`/markets/${market.toLowerCase().replace(" ", "-")}`}
                  className="text-sm font-medium text-accent hover:text-primary transition-colors hover:underline underline-offset-4"
                >
                  {market}
                </a>

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
  return (
    <>
      {/* Ghost house */}
      <motion.svg
        className="absolute right-[-240px] top-1/2 -translate-y-1/2 w-[880px] h-[600px] opacity-[0.05] blur-[2px]"
        viewBox="0 0 820 560"
        fill="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8 }}
      >
        <HousePaths delay={0.2} />
      </motion.svg>

      {/* Main house */}
      <motion.svg
        className="absolute right-[-160px] top-1/2 -translate-y-1/2 w-[820px] h-[560px] opacity-[0.12]"
        viewBox="0 0 820 560"
        fill="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8 }}
      >
        <HousePaths delay={0} />
      </motion.svg>
    </>
  );
};

const HousePaths = ({ delay }: { delay: number }) => (
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
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
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
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
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
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, delay: delay + 0.3 }}
    />
  </>
);

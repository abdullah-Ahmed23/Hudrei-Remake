import { DollarSign, Wrench, Calendar, Zap } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
const TrustSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "No Commissions",
      description: "Keep 100% of your sale. No agent fees, no hidden costs.",
      aosDelay: 0,
      aosDuration: 700,
    },
    {
      icon: Wrench,
      title: "No Repairs Needed",
      description: "Sell as-is. We buy homes in any condition.",
      aosDelay: 150,
      aosDuration: 750,
    },
    {
      icon: Calendar,
      title: "Close in 7-14 Days",
      description: "Choose your closing date. Move on your timeline.",
      aosDelay: 300,
      aosDuration: 800,
    },
    {
      icon: Zap,
      title: "Cash Offer in 24 Hours",
      description: "Get a fair, no-obligation offer within one day.",
      aosDelay: 450,
      aosDuration: 850,
    },
  ];

  return (
    <section className="Trust py-20 md:py-28 relative">
      <div className="absolute inset-0 from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div
          className="text-center mb-20 "
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-gray-900 mb-6 md:mb-8 tracking-tight">
            Why Sell to <span className="text-accent relative inline-block">
              HudREI?
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="6" />
              </svg>
            </span>
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-2xl text-black max-w-2xl mx-auto">
            We make selling your home simple, fast, and stress-free.
            Here's what makes us different.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              data-aos="fade-up"
              data-aos-delay={benefit.aosDelay}
              data-aos-duration={benefit.aosDuration}
              className=" card-gg
                relative group rounded-2xl p-6 lg:p-8
                glass-card
                transition-all duration-500
                will-change-transform
                md:hover:-translate-y-3
                md:hover:shadow-2xl md:hover:shadow-accent/10
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute -inset-0.5 rounded-2xl
                  bg-accent/15 blur-xl opacity-0
                  transition-opacity duration-500
                  group-hover:opacity-100
                "
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className=" 
                    w-14 h-14 rounded-xl bg-accent/10
                    flex items-center justify-center mb-6
                    transition-all duration-500
                    group-hover:bg-accent/20
                  "
                >
                  <benefit.icon
                    className="
                      w-7 h-7 text-accent
                      transition-all duration-500
                      group-hover:rotate-12
                      group-hover:scale-110
                      group-hover:animate-pulse
                    "
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {benefit.title}
                </h3>

                <p className="text-white">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="flex justify-center mt-10 relative z-999">
        <Link to="/contact">
          <Button size="lg" className="rounded-xl px-8 py-6 text-lg font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">Get My Cash Offer</Button>
        </Link>
      </div>
    </section>
  );
};

export default TrustSection;

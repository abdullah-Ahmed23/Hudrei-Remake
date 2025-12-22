import { ClipboardList, BadgeDollarSignIcon, Key } from "lucide-react";
import bgImage from "@/media/tmpnr42prtp.webp";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: ClipboardList,
      title: "Submit Your Property",
      description:
        "Fill out our simple form with your property details. Takes less than 2 minutes.",
      aosDelay: 0,
    },
    {
      number: "02",
      icon: BadgeDollarSignIcon,
      title: "Get a Cash Offer",
      description:
        "We'll review your property and send you a fair, no-obligation cash offer within 24 hours.",
      aosDelay: 150,
    },
    {
      number: "03",
      icon: Key,
      title: "Close On Your Timeline",
      description:
        "Accept the offer and choose your closing date. Get paid and move on—it's that simple.",
      aosDelay: 300,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
     <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${bgImage})` }}
/>


      {/* COLOR OVERLAY (same tone as site) */}
      <div className="absolute inset-0 bg-background/70" />

      {/* CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-white">
            Selling your home shouldn't be complicated. Our streamlined process
            gets you from offer to closing in three easy steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-[16%] right-[16%] h-0.5 bg-white bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center group text-white"
                data-aos="fade-right"
                data-aos-delay={step.aosDelay}
                data-aos-duration="800"
              >
                {/* Icon bubble */}
                <div className="relative inline-block mb-8">
                  <div
                    className="
                      w-20 h-20 rounded-2xl bg-secondary
                      flex items-center justify-center
                      transition-all duration-300
                      group-hover:bg-accent/20
                      group-hover:-translate-y-1
                    "
                  >
                    <step.icon className="w-9 h-9 text-accent" />
                  </div>

                  {/* Step number */}
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-xl lg:text-2xl font-semibold mb-4">
                  {step.title}
                </h3>

                <p className="text-muted-foreground max-w-sm mx-auto text-white">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
                <div className="flex justify-center mt-10">
            <Link to="/contact">
            <Button size="lg">Get My Cash Offer</Button>
            </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

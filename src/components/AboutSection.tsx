import { Shield, Heart, Users, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [startCount, setStartCount] = useState(false);

  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "No hidden fees, no surprises. We explain every step clearly.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We understand selling a home can be emotional. We're here to help.",
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "We know the Texas market inside and out.",
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Fair offers based on honest market analysis.",
    },
  ];

  /* -------- START COUNTERS ON VIEW -------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* -------- COUNTER HOOK -------- */
  const useCounter = (end: number, duration = 1200) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!startCount) return;

      let start = 0;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [startCount, end, duration]);

    return count;
  };

  const homes = useCounter(500);
  const days = useCounter(10);
  const satisfaction = useCounter(98);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-28 relative text-white"
      style={{ backgroundColor: "#0b434A" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-4">
                About Us
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                We're <span className="text-accent">HudREI</span>
              </h2>

              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Founded with a simple mission: to help homeowners sell their
                properties quickly, fairly, and without the stress of
                traditional real estate transactions.
              </p>

              <p className="text-white/70 leading-relaxed">
                Whether you're facing foreclosure, dealing with an inherited
                property, relocating for work, or simply want to skip the
                hassle of repairs and showings—we're here to help.
              </p>
            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-10">
              <div data-aos="fade-up" data-aos-delay="0">
                <p className="text-4xl lg:text-5xl font-bold text-accent">
                  {homes}+
                </p>
                <p className="text-white/70">Homes Purchased</p>
              </div>

              <div data-aos="fade-up" data-aos-delay="100">
                <p className="text-4xl lg:text-5xl font-bold text-accent">
                  {days}
                </p>
                <p className="text-white/70">Days Avg. Close</p>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <p className="text-4xl lg:text-5xl font-bold text-accent">
                  {satisfaction}%
                </p>
                <p className="text-white/70">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT – VALUES */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:translate-y-[-4px] transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-white/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

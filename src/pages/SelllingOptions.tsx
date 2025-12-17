import {
  Clock,
  DollarSign,
  Home,
  ShieldCheck,
  CheckCircle,
  TrendingUp,
  Hammer,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const SellingOptions = () => {
  return (
    <main className="bg-[#faf9f6]">
      <Header />

      {/* ================= HERO ================= */}
      <section className="py-[35vh] sm:py-[20vh] bg-[#faf9f6]">
        <div
          className="container mx-auto px-4 max-w-4xl text-left space-y-10  sm:text-center"
          data-aos="fade-up"
        >
          <h1 className="text-3xl text-black sm:text-5xl lg:text-6xl font-bold mb-3 leading-snug">
            HudREI:{" "}
            <span className="text-accent">
              Your Irresistible Home Sale Options
            </span>
          </h1>

          <p className="text-base sm:text-lg text-black mb-6 max-w-xl mx-auto sm:mx-auto">
            Selling your home is a big decision. That’s why we don’t give you
            just one price — we offer flexible solutions designed around your
            timeline, goals, and peace of mind.
          </p>

          {/* HERO CARDS */}
          <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
            {/* Card 1 */}
          <div
  className="glass-card p-4 sm:p-6 rounded-2xl border flex flex-col items-center text-center gap-3"
  data-aos="fade-right"
  data-aos-delay="100"
>
  <Clock className="w-7 h-7 sm:w-9 sm:h-9 text-accent" />

  <h3 className="text-lg sm:text-xl font-semibold">
    Fast Cash Offer
  </h3>

  <p className="text-sm sm:text-base">
    Maximum speed & certainty for a quick, stress-free sale.
  </p>
</div>


            {/* Card 2 */}
        <div
  className="glass-card p-4 sm:p-6 rounded-2xl border flex flex-col items-center text-center gap-3"
  data-aos="fade-left"
  data-aos-delay="250"
>
  <TrendingUp className="w-7 h-7 sm:w-9 sm:h-9 text-accent" />

  <h3 className="text-lg sm:text-xl font-semibold">
    Smart Seller Program
  </h3>

  <p className="text-sm sm:text-base">
    Higher payout with our expert guidance — no repairs required.
  </p>
</div>

          </div>
        </div>
      </section>

      {/* ================= OPTION 1 ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl text-black font-bold mb-4">
              Option 1: Fast Cash Offer
            </h2>
            <p className="text-black max-w-3xl mb-12">
              Designed for homeowners who value speed, certainty, and a
              completely hands-off experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Swift Closing",
                desc: "Close in as little as 2 weeks after clear title (30 days total).",
              },
              {
                icon: DollarSign,
                title: "We Cover Costs",
                desc: "All standard closing costs are on us.",
              },
              {
                icon: Home,
                title: "Sold As-Is",
                desc: "No repairs, no cleaning, no junk removal.",
              },
              {
                icon: ShieldCheck,
                title: "No Commissions",
                desc: "Zero agent fees or hidden charges.",
              },
              {
                icon: CheckCircle,
                title: "Done-For-You",
                desc: "We handle paperwork, title work, and coordination.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="glass-card p-5 rounded-2xl"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <item.icon className="w-7 h-7 text-accent mb-3" />
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div
            className="mt-14 p-6 sm:p-8 rounded-2xl border bg-accent/5"
            data-aos="fade-up"
          >
            <h4 className="font-semibold text-lg text-black mb-3 flex items-center gap-2">
              <ShieldCheck className="text-accent" />
              Performance Guarantee
            </h4>
            <ul className="space-y-2 text-black text-sm sm:text-base">
              <li>
                • Up to <strong>$1,000 paid</strong> if we miss closing due to our
                fault
              </li>
              <li>
                • We help find another buyer at <strong>no cost</strong>
              </li>
              <li>
                • Full access to our comps, title work, and resources
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= OPTION 2 ================= */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl text-black font-bold mb-4">
              Option 2: Smart Seller Program
            </h2>
            <p className="text-black max-w-3xl mb-12">
              Ideal for sellers who want higher value without repairs or
              traditional listing stress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left */}
            <div className="space-y-4" data-aos="fade-right">
              {[
                { icon: TrendingUp, text: "Up to 90% of property value" },
                { icon: Hammer, text: "All repairs handled by us — sell as-is" },
                { icon: DollarSign, text: "We cover standard closing costs" },
                { icon: Clock, text: "Target closing within 60 days" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <item.icon className="text-accent mt-1" />
                  <p className="text-black">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Right */}
            <div
              className="glass-card p-6 sm:p-8 rounded-2xl border"
              data-aos="fade-left"
            >
              <h4 className="font-semibold mb-3">Delay Protection</h4>
              <p className="text-muted-foreground mb-4">
                If closing goes beyond 60 days due to buyer-side delays:
              </p>
              <div className="flex gap-3">
                <AlertTriangle className="text-accent mt-1" />
                <p>
                  You receive <strong>$150 per week</strong> credited until
                  closing (unless delays are on your end).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center bg-[#09393e]" >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4" data-aos="fade-up">
          Not Sure Which Option Fits You?
        </h3>
        <p className="text-muted-foreground mb-6" data-aos="fade-right">
          We’ll help you decide — no pressure, no obligation.
        </p>
        <Button size="lg" className="bg-accent text-accent-foreground" data-aos="fade-left">
          Get My Cash Offer
        </Button>
      </section>

      <Footer />
    </main>
  );
};

export default SellingOptions;

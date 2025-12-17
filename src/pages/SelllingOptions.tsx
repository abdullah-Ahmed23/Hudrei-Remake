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
    <main >
<Header />
      {/* ================= HERO ================= */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            HudREI:{" "}
            <span className="text-accent">
              Your Irresistible Home Sale Options
            </span>
          </h1>

          <p className="text-lg text-muted-foreground mb-10">
            Selling your home is a big decision. That’s why we don’t give you
            just one price — we offer flexible solutions designed around your
            timeline, goals, and peace of mind.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="glass-card p-6 rounded-2xl border">
              <Clock className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Fast Cash Offer
              </h3>
              <p className="text-muted-foreground">
                Maximum speed & certainty for a quick, stress-free sale.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border">
              <TrendingUp className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Smart Seller Program
              </h3>
              <p className="text-muted-foreground">
                Higher payout with our expert guidance — no repairs required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OPTION 1 ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Option 1: Fast Cash Offer
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-12">
            Designed for homeowners who value speed, certainty, and a
            completely hands-off experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
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
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card p-6 rounded-2xl"
              >
                <item.icon className="w-7 h-7 text-accent mb-4" />
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="mt-14 p-8 rounded-2xl border bg-accent/5">
            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <ShieldCheck className="text-accent" />
              Performance Guarantee
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Up to <strong>$1,000 paid</strong> if we miss closing due to our fault</li>
              <li>• We help find another buyer at <strong>no cost</strong></li>
              <li>• Full access to our comps, title work, and resources</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= OPTION 2 ================= */}
      <section className="py-24 bg-[#f9fafb]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Option 2: Smart Seller Program
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-12">
            Ideal for sellers who want higher value without repairs or
            traditional listing stress.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-5">
              <div className="flex gap-3">
                <TrendingUp className="text-accent" />
                <p>
                  <strong>Up to 90% of property value</strong>, depending on
                  market and condition.
                </p>
              </div>
              <div className="flex gap-3">
                <Hammer className="text-accent" />
                <p>All repairs handled by us — you sell as-is.</p>
              </div>
              <div className="flex gap-3">
                <DollarSign className="text-accent" />
                <p>We still cover standard closing costs.</p>
              </div>
              <div className="flex gap-3">
                <Clock className="text-accent" />
                <p>Target closing within 60 days.</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl border">
              <h4 className="font-semibold mb-3 note-title">
                Delay Protection
              </h4>
              <p className="text-muted-foreground mb-4">
                If closing goes beyond 60 days due to buyer-side delays:
              </p>
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-accent mt-1" />
                <p>
                  You receive <strong>$150 per week</strong> credited
                  until closing (unless delays are on your end).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Not Sure Which Option Fits You?
        </h3>
        <p className="text-muted-foreground mb-8">
          We’ll help you decide — no pressure, no obligation.
        </p>
        <Button size="lg" className="bg-accent text-accent-foreground">
          Get My Cash Offer
        </Button>
        
      </section>
<Footer />
    </main>
    
  );
};

export default SellingOptions;

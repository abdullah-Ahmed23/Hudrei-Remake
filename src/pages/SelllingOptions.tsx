import {
  Clock,
  DollarSign,
  Home,
  ShieldCheck,
  CheckCircle,
  TrendingUp,
  Hammer,
  AlertTriangle,
  Scale,
  Users,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SellingOptions = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <main className="bg-[#faf9f6]">
      <Header />

      {/* ================= HERO ================= */}
      <section className="py-[35vh] sm:py-[20vh]">
        <div className="container mx-auto px-4 max-w-4xl text-left sm:text-center space-y-10">
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-black"
          >
            HudREI:{" "}
            <span className="text-accent">
              Your Irresistible Home Sale Options
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-base sm:text-lg text-black max-w-xl mx-auto"
          >
            At HudREI, we understand that selling your home is a major decision.
            That’s why we don’t offer just one price — we provide tailored
            solutions designed around your goals, timeline, and peace of mind.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
          >
            <div className="glass-card p-6 rounded-2xl text-center">
              <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Fast Cash Offer</h3>
              <p className="text-sm">
                Maximum speed & certainty for a quick sale.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center">
              <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Smart Seller Program</h3>
              <p className="text-sm">
                Higher payout with expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OPTION 1 ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-bold text-black mb-6"
          >
            Option 1: Fast Cash Offer
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-black max-w-3xl mb-12"
          >
            Our Fast Cash Offer is built for sellers who prioritize speed,
            certainty, and a completely stress-free process. We handle
            everything so you can move forward with confidence.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              [
                "Swift Closing Timeline",
                "Close in as little as 2 weeks after clear title (≈30 days total).",
                Clock,
              ],
              [
                "We Cover Closing Costs",
                "All standard closing costs are paid by us.",
                DollarSign,
              ],
              [
                "Sold As-Is",
                "No repairs, no cleaning, no junk removal.",
                Home,
              ],
              [
                "Zero Commissions",
                "No agent fees or hidden charges.",
                ShieldCheck,
              ],
              [
                "Done-For-You Process",
                "From paperwork to closing, we handle it all.",
                CheckCircle,
              ],
            ].map(([title, desc, Icon]: any) => (
              <div
                key={title}
                data-aos="zoom-in"
                className="glass-card p-5 rounded-2xl"
              >
                <Icon className="w-7 h-7 text-accent mb-3" />
                <h4 className="font-semibold mb-1">{title}</h4>
                <p className="text-sm">{desc}</p>
              </div>
            ))}

            {/* GUARANTEE */}
            <div
              data-aos="fade-up"
              className="mt-14 p-8 rounded-2xl border bg-accent/5 text-black md:col-span-3"
            >
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <ShieldCheck className="text-accent" />
                Performance Guarantee
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Up to <strong>$1,000 paid</strong> if we fail to close</li>
                <li>• Free help finding another buyer</li>
                <li>• Access to comps, title work & research</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OPTION 2 ================= */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-bold text-black mb-6"
          >
            Option 2: Smart Seller Program
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-black max-w-3xl mb-12"
          >
            Our Smart Seller Program (Novation) is ideal for sellers who want
            higher value without repairs or traditional listing headaches.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div data-aos="fade-right" className="space-y-4">
              {[
                ["Up to 90% of property value", TrendingUp],
                ["All repairs handled by us", Hammer],
                ["Standard closing costs covered", DollarSign],
                ["Target closing within 60 days", Clock],
              ].map(([text, Icon]: any) => (
                <div key={text} className="flex gap-3 text-black">
                  <Icon className="text-accent mt-1" />
                  <p>{text}</p>
                </div>
              ))}
            </div>

            <div
              data-aos="zoom-out"
              className="glass-card p-6 rounded-2xl border"
            >
              <h4 className="font-semibold mb-3">Delay Protection</h4>
              <p className="text-sm mb-3">
                If closing extends beyond 60 days due to buyer-side delays:
              </p>
              <div className="flex gap-3">
                <AlertTriangle className="text-accent mt-1" />
                <p className="text-sm">
                  <strong>$150 per week</strong> credited until closing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPARISON ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2
            data-aos="fade-up"
            className="text-3xl text-black font-bold mb-8 text-center"
          >
            Quick Comparison
          </h2>

          <div data-aos="fade-up" className="overflow-x-auto">
            <table className="w-full border rounded-xl text-black text-sm">
              <thead className="bg-accent/10">
                <tr>
                  <th className="p-3 text-left">Feature</th>
                  <th className="p-3">Fast Cash</th>
                  <th className="p-3">Smart Seller</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Payout", "Lower / Simple", "Up to ~90%"],
                  ["Timeline", "~2 weeks", "~60 days"],
                  ["Repairs", "None", "None"],
                  ["Closing Costs", "We Pay", "We Pay"],
                  ["Protection", "$1,000 Guarantee", "$150/week delay"],
                ].map(([a, b, c]) => (
                  <tr key={a} className="border-t">
                    <td className="p-3">{a}</td>
                    <td className="p-3 text-center">{b}</td>
                    <td className="p-3 text-center">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= HUDREI EDGE ================= */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2
            data-aos="fade-up"
            className="text-3xl text-black font-bold mb-10 text-center"
          >
            HudREI’s Unbeatable Edge
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              [
                "Expert Problem Solving",
                "Probate, liens, violations handled.",
                Scale,
              ],
              [
                "Clear Communication",
                "One point of contact + weekly updates.",
                MessageCircle,
              ],
              [
                "Seller Support",
                "Flexible move-out & next-home help.",
                Users,
              ],
            ].map(([title, desc, Icon]: any) => (
              <div
                key={title}
                data-aos="flip-up"
                className="glass-card p-6 rounded-2xl"
              >
                <Icon className="w-7 h-7 text-accent mb-3" />
                <h4 className="font-semibold mb-1">{title}</h4>
                <p className="text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        
        className="py-20 text-center bg-[#09393e]"
      >
        <h3 data-aos="zoom-in" className="text-3xl font-bold mb-4">
          Ready to See Your Options?
        </h3>
        <p data-aos="zoom-in" className="text-muted-foreground mb-6">
          No pressure. No obligation. Just clarity.
        </p>
        <Link data-aos="zoom-in" to="/#contact">
          <Button size="lg" className="bg-accent text-accent-foreground">
            Get My Cash Offer
          </Button>
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default SellingOptions;

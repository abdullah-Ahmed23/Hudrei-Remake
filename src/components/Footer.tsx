import { Phone, MapPin, Facebook, Instagram, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import hudReiLogo1 from "@/assets/2.png";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", path: "/who-are-we" },
      { label: "Our Team", path: "/who-are-we#team" },
      { label: "How It Works", path: "/how-it-works" },
      { label: "Selling Options", path: "/selling-options" },
      { label: "Careers", path: "/careers" },
    ],
    resources: [
      { label: "Real Estate Blog", path: "/blog" },
      { label: "Success Stories", path: "/testimonials" },
      { label: "Fair Offer Guide", path: "/faq" },
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Terms of Service", path: "/terms-of-service" },
    ],
    areas: [
      { label: "Indianapolis, IN", path: "/we-buy-houses/indianapolis" },
      { label: "Fort Wayne, IN", path: "/we-buy-houses/fort-wayne" },
      { label: "Evansville, IN", path: "/we-buy-houses/evansville" },
      { label: "South Bend, IN", path: "/we-buy-houses/south-bend" },
      { label: "Bloomington, IN", path: "/we-buy-houses/bloomington" },
    ]
  };

  return (
    <footer className="bg-[#041f22] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -mr-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">

          {/* Brand Section */}
          <div className="space-y-8">
            <Link to="/" className="inline-block transform hover:scale-105 transition-transform duration-300">
              <img
                src={hudReiLogo1}
                alt="HudREI"
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-white/80 text-lg leading-relaxed">
              Helping Indiana homeowners sell their properties with dignity, transparency, and speed. Your local, family-owned solution.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/p/Hudrei-61562781720104/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 group shadow-lg">
                <Facebook className="w-5 h-5 opacity-70 group-hover:opacity-100" />
              </a>
              <a href="https://www.instagram.com/hud_rei/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 group shadow-lg">
                <Instagram className="w-5 h-5 opacity-70 group-hover:opacity-100" />
              </a>
              <a href="https://www.tiktok.com/@hud_rei" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 group shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 opacity-70 group-hover:opacity-100 lucide lucide-music-2"
                >
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
                {/* TikTok Icon Placeholder */}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-white/80 hover:text-white flex items-center gap-2 group transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent transform group-hover:translate-x-1 transition-transform" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-white/80 hover:text-white flex items-center gap-2 group transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent transform group-hover:translate-x-1 transition-transform" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold mb-8 text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full" />
            </h4>
            <div className="space-y-5">
              <a href="tel:3177951990" className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-white/10">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-bold uppercase tracking-wider">Call Directly</p>
                  <p className="text-lg font-bold text-white">(317) 795-1990</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-lg font-bold text-white">Avon, IN</p>
                </div>
              </div>
            </div>
            <Button asChild className="w-full rounded-2xl py-8 text-xl font-bold glow-button shadow-2xl">
              <Link to="/contact">Get My Cash Offer</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60 font-medium">
            © {currentYear} HudREI. Real Estate Reimagined. Built with pride in Indiana.
          </p>
          <div className="flex items-center gap-2 text-white/70">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <p className="font-bold uppercase text-xs tracking-widest text-white/50">Serving all of Indiana</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




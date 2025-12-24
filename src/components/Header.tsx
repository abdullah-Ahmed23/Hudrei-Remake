import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Home,
  DollarSign,
  Hammer,
  ShieldCheck,
  Landmark,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import hudReiLogo from "@/assets/hudrei-logo.png";
import { Link, NavLink } from "react-router-dom";


const sellingDropdown = [
  { label: "Sell As-Is", to: "/selling-options#offer-1", icon: Home },
  { label: "Become The Bank", to: "/selling-options#offer-2", icon: Landmark },
  { label: "Max Equity Offer", to: "/selling-options#offer-3", icon: DollarSign },
  { label: "Mortgage Relief Offer", to: "/selling-options#offer-4", icon: ShieldCheck },
  { label: "List With HudREI", to: "/selling-options#offer-5", icon: Building },
];



const navLinks = [
  { label: "Who Are We", to: "/who-are-we" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
  { label: "Careers", to: "/careers" },
  { label: "FAQ", to: "/faq" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileSellingOpen, setMobileSellingOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Scroll effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
      ${scrolled ? "bg-background/90 backdrop-blur-xl shadow-lg" : "bg-white"}`}
    >
      <div className="relative container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={hudReiLogo} alt="HudREI" className="h-10 md:h-12" />
        </Link>

        {/* ✅ Mobile Center CTA (NOT in toggle) */}
<div className=" absolute left-[35%] flex items-center justify-center md:hidden">
  <Button asChild size="sm" className="px-5 font-semibold">
    <Link to="/contact">Get My Cash Offer</Link>
  </Button>
</div>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Selling Options (hover-safe) */}
         {/* Selling Options (hover-safe, no flicker) */}
<div className="relative group">
  {/* Trigger */}
  <div className="flex items-center gap-1 cursor-pointer">
    <NavLink
      to="/selling-options"
      className={`text-sm font-medium ${
        scrolled ? "text-white" : "text-black/80 hover:text-black"
      }`}
    >
      Selling Options
    </NavLink>

    <ChevronDown
      className={`w-4 h-4 transition-transform duration-300
      group-hover:rotate-180
      ${scrolled ? "text-white" : "text-black"}`}
    />
  </div>

  {/* 🔥 Hover bridge (THIS IS THE KEY) */}
  <div className="absolute left-0 top-full h-6 w-full" />

  {/* Dropdown */}
  <div
    className={`absolute left-0 top-[calc(100%+1.25rem)]
    w-64 rounded-xl bg-white shadow-xl overflow-hidden
    opacity-0 scale-95 pointer-events-none
    transition-all duration-200 origin-top
    group-hover:opacity-100
    group-hover:scale-100
    group-hover:pointer-events-auto`}
  >
    {sellingDropdown.map((item, i) => {
      const Icon = item.icon;
      return (
        <Link
          key={item.label}
          to={item.to}
          className="flex items-center gap-3 px-5 py-4 text-black hover:bg-muted transition   hover:text-white"
          style={{ transitionDelay: `${i * 40}ms` }}
        >
          <Icon className="w-5 h-5 text-accent" />
          <span className="text-sm font-medium   ">
            {item.label}
          </span>
        </Link>
      );
    })}
  </div>
</div>

          {/* Other desktop links */}
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-accent"
                    : scrolled
                    ? "text-white hover:text-white/80"
                    : "text-black/80 hover:text-black"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+13177951990"
            className={`flex items-center gap-2 ${
              scrolled ? "text-white" : "text-black/80"
            }`}
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">317-795-1990</span>
          </a>

          <Button asChild>
            <Link to="/contact">Get My Cash Offer</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen((p) => !p)}
          className={`md:hidden ${scrolled ? "text-white" : "text-black"}`}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl px-4 py-6 space-y-4">
          {/* Selling Options mobile dropdown */}
          <div>
            <div className="flex items-center justify-between">
              <Link
                to="/selling-options"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-white"
              >
                Selling Options
              </Link>

              <button
                onClick={() => setMobileSellingOpen((p) => !p)}
                className="p-2 text-white"
              >
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    mobileSellingOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <div
              className={`ml-4 mt-2 overflow-hidden transition-all duration-300
              ${mobileSellingOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              {sellingDropdown.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 py-2 text-white/90"
                  >
                    <Icon className="w-4 h-4 text-accent" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-lg text-white hover:text-white/80"
            >
              {link.label}
            </NavLink>
          ))}

        
        </div>
      )}

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;

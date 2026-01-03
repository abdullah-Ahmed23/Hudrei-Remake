import { useEffect, useState, useRef } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  HelpCircle,
  BookOpen,
  Briefcase,
  Mail,
  Users,
  Building,
  Landmark,
  Home,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import hudReiLogo from "@/assets/hudrei-logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";


/* ================= NAV DATA ================= */

const mainLinks = [
  { label: "Selling Options", to: "/selling-options" },
  { label: "About Us", to: "/who-are-we" },
  { label: "Testimonials", to: "/testimonials" },

];

const learnDropdown = [
  { label: "FAQ", to: "/faq", icon: HelpCircle, desc: "Common questions answered" },
  { label: "Blog", to: "/blog", icon: BookOpen, desc: "Latest news & insights" },
  { label: "Careers", to: "/careers", icon: Briefcase, desc: "Join our team" },
  { label: "Contact Us", to: "/contact", icon: Mail, desc: "Get in touch with us" },
];

const partnersDropdown = [
  { label: "Agents", to: "/partners/agents", icon: Users, desc: "Real estate professionals" },
  { label: "Wholesalers", to: "/partners/wholesalers", icon: Landmark, desc: "Investment partners" },
  { label: "Local Investors", to: "/partners/local-investors", icon: Building, desc: "Community investors" },
  { label: "Title Companies", to: "/partners/title-companies", icon: Home, desc: "Closing partners" },
  { label: "More", to: "/partners", icon: ArrowRight, desc: "Explore all partners" },
];

/* ================= COMPONENT ================= */

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const learnRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (learnRef.current && !learnRef.current.contains(e.target as Node)) {
        setLearnOpen(false);
      }
      if (partnersRef.current && !partnersRef.current.contains(e.target as Node)) {
        setPartnersOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const go = (to: string) => {
    navigate(to);
    setIsMenuOpen(false);
    setLearnOpen(false);
    setPartnersOpen(false);
  };

  const [mobileLearnOpen, setMobileLearnOpen] = useState(false);
  const [mobilePartnersOpen, setMobilePartnersOpen] = useState(false);

  const location = useLocation();
  const isTestimonialsActive = location.pathname === "/testimonials";



  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5  border-black/5"
            : "bg-white"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 relative z-10">
              <img
                src={hudReiLogo}
                alt="HudRei Logo"
                className="h-20 md:h-24 w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {mainLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}


              {/* Learn Dropdown */}
              <div ref={learnRef} className="relative">
                <button
                  onClick={() => {
                    setLearnOpen(!learnOpen);
                    setPartnersOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                    learnOpen
                      ? "text-primary bg-primary/10"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  )}
                >
                  Learn
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      learnOpen && "rotate-180"
                    )}
                  />
                </button>

                {/* Dropdown Panel */}
                <div
                  className={cn(
                    "absolute top-full left-0 mt-2 w-72 origin-top-left transition-all duration-300 ease-out",
                    learnOpen
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  )}
                >
                  <div className="bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-100 p-2 overflow-hidden">
                    {learnDropdown.map((item, idx) => (
                      <button
                        key={item.to}
                        onClick={() => go(item.to)}
                        className="w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all duration-200 hover:bg-gray-50 group"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center transition-colors duration-200 group-hover:bg-primary/20">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
                            {item.label}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Partners Dropdown */}
              <div ref={partnersRef} className="relative">
                <button
                  onClick={() => {
                    setPartnersOpen(!partnersOpen);
                    setLearnOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                    partnersOpen
                      ? "text-primary bg-primary/10"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  )}
                >
                  Partners
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      partnersOpen && "rotate-180"
                    )}
                  />
                </button>

                {/* Dropdown Panel */}
                <div
                  className={cn(
                    "absolute top-full left-0 mt-2 w-72 origin-top-left transition-all duration-300 ease-out",
                    partnersOpen
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  )}
                >
                  <div className="bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-100 p-2 overflow-hidden">
                    {partnersDropdown.map((item, idx) => (
                      <button
                        key={item.to}
                        onClick={() => go(item.to)}
                        className="w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all duration-200 hover:bg-gray-50 group"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center transition-colors duration-200 group-hover:bg-primary/20">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
                            {item.label}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:317-795-1990"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>317-795-1990</span>
              </a>
              <Button
                asChild
                className="rounded-xl px-6 py-4 text-base font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <Link to="/contact#contact-form">Get My Cash Offer</Link>
              </Button>
            </div>

            {/* Mobile CTA + Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                asChild
                size="sm"
                className="rounded-xl px-4 text-xs font-bold glow-button shadow-md"
              >
                <Link to="/contact#contact-form">Get My Cash Offer</Link>
              </Button>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </header >

      {/* ================= MOBILE SLIDE MENU ================= */}
      < div
        className={
          cn(
            "fixed inset-0 z-[60] lg:hidden transition-all duration-500",
            isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          )
        }
      >
        {/* Overlay */}
        < div
          onClick={() => setIsMenuOpen(false)}
          className={
            cn(
              "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500",
              isMenuOpen ? "opacity-100" : "opacity-0"
            )
          }
        />

        {/* Panel */}
        < div
          className={
            cn(
              "absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out",
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            )
          }
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <img src={hudReiLogo} alt="Logo" className="h-8" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {mainLinks.map((l, idx) => (
                <button
                  key={l.to}
                  onClick={() => go(l.to)}
                  className={cn(
                    "w-full text-left px-4 py-3 text-base font-medium text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300",
                    isMenuOpen && "animate-fade-in"
                  )}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {l.label}
                </button>
              ))}

              {/* Learn Accordion */}
              <div className="pt-2">
                <button
                  onClick={() => setMobileLearnOpen((p) => !p)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 rounded-xl hover:bg-gray-50 transition-all"
                >
                  Learn
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      learnOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-out",
                    mobileLearnOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="pl-4 py-2 space-y-1">
                    {learnDropdown.map((item) => (
                      <button
                        key={item.to}
                        onClick={() => go(item.to)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-600 rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        <item.icon className="w-5 h-5 text-primary" />
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Partners Accordion */}
              <div>
                <button
                  onClick={() => setMobilePartnersOpen((p) => !p)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 rounded-xl hover:bg-gray-50 transition-all"
                >
                  Partners
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      partnersOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-out",
                    mobilePartnersOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="pl-4 py-2 space-y-1">
                    {partnersDropdown.map((item) => (
                      <button
                        key={item.to}
                        onClick={() => go(item.to)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-600 rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        <item.icon className="w-5 h-5 text-primary" />
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="p-4 border-t border-gray-100 space-y-3">
              <a
                href="tel:317-795-1990"
                className="flex items-center justify-center gap-2 py-3 text-gray-700 font-medium rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                317-795-1990
              </a>
              <Button asChild className="w-full rounded-xl py-6 text-base font-bold glow-button shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get My Cash Offer
                </Link>
              </Button>
            </div>
          </div>
        </div >
      </div >
    </>
  );
};

export default Header;
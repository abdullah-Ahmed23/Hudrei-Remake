import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import hudReiLogo from "@/assets/hudrei-logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: "Selling Options", to: "/selling-options" },
    { label: "Who Are We", to: "/about" },
    { label: "Testimonials", to: "/testimonials" },
    { label: "Contact", to: "/contact" },
    { label: "Careers", to: "/careers" },
    { label: "FAQ", to: "/faq" },
  ];

  /* Detect scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out
        ${scrolled ? "bg-background/80 backdrop-blur-xl shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={hudReiLogo}
              alt="HudREI"
              className="h-10 md:h-12 w-auto rounded"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200
                  ${
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
              className={`flex items-center gap-2 transition-colors
                ${scrolled ? "text-white" : "text-black/80 hover:text-black"}
              `}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">317-795-1990</span>
            </a>

            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <Link to="/contact">Get My Cash Offer</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              scrolled ? "text-white" : "text-black"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `py-2 text-lg transition-colors
                    ${isActive ? "text-accent" : "text-white hover:text-white/80"}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold mt-2"
              >
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get My Cash Offer
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

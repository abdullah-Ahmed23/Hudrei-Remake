import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import hudReiLogo from "@/assets/hudrei-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navLinks = [
    { label: "Selling Options", href: "#" },
    { label: "Who Are We", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Careers", href: "#" },
    { label: "FAQ", href: "#" },
  ];

  /* Detect scroll */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-out
        ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl shadow-lg "
            : "bg-transparent"
        }
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={hudReiLogo}
              alt="HudREI - We Buy Houses for Cash"
              className="h-10 md:h-12 w-auto rounded"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`
                  text-sm font-medium transition-colors duration-200
                  ${
                    scrolled
                      ? "text-white hover:text-black/80"
                      : "text-black/80 hover:text-black"
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+13177951990"
              className={`
                flex items-center gap-2 transition-colors
                ${
                  scrolled
                    ? "text-white hover:text-white/80"
                    : "text-black/80 hover:text-white"
                }
              `}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">317-795-1990</span>
            </a>

            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <a href="#contact">Get My Cash Offer</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-white/80 transition-colors py-2 text-lg"
                >
                  {link.label}
                </a>
              ))}

              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold mt-2"
              >
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Get My Cash Offer
                </a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

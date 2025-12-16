import { Phone, Mail, MapPin } from "lucide-react";
import hudReiLogo from "@/assets/hudrei-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    resources: [
      { label: "FAQ", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Selling Tips", href: "#" },
      { label: "Market Insights", href: "#" },
    ],
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img 
              src={hudReiLogo} 
              alt="HudREI" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Helping homeowners sell their properties quickly and hassle-free 
              since 2018.
            </p>
            <div className="space-y-3">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-accent" />
                (123) 456-7890
              </a>
              <a href="mailto:info@hudrei.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-accent" />
                info@hudrei.com
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                Houston, Texas
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="font-semibold mb-4">Areas We Serve</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Houston, TX</li>
              <li>Dallas, TX</li>
              <li>Austin, TX</li>
              <li>San Antonio, TX</li>
              <li>Fort Worth, TX</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} HudREI. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
          <p className="text-xs text-muted-foreground/60 mt-4 text-center md:text-left">
            Disclaimer: We are not real estate agents or brokers. We are real estate investors 
            who purchase properties directly from homeowners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

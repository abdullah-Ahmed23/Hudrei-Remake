import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import hudReiLogo1 from "@/assets/w2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#062f33] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP */}
        <div className="pt-16 pb-12 flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* BRAND */}
          <div className="flex flex-col gap-6 lg:w-[28%]">
            <img
              src={hudReiLogo1}
              alt="HudREI"
              className="h-16 w-fit"
            />

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              HudREI is a family-owned real estate investment company based right here in Indiana. We buy houses in any condition, handle all the paperwork, and close on your timeline.
            </p>

            <div className="flex flex-col gap-3 text-sm text-white/80">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span>317-795-1990</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>office@hudrei.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Indianapolis, Indiana</span>
              </div>
            </div>
          </div>

          {/* LINKS WRAPPER */}
          <div className="flex flex-1 flex-col sm:flex-row gap-12">

            {/* COMPANY */}
            <div className="flex flex-col gap-5 min-w-[140px]">
              <h4 className="text-sm font-semibold uppercase tracking-wide">
                Company
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-white/70">
                <li><Link to="/who-are-we" className="hover:text-white">About Us</Link></li>
                <li><Link to="/selling-options" className="hover:text-white">Selling Options</Link></li>
                <li><Link to="/testimonials" className="hover:text-white">Testimonials</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="flex flex-col gap-5 min-w-[140px]">
              <h4 className="text-sm font-semibold uppercase tracking-wide">
                Resources
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-white/70">
                <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              </ul>
            </div>

            {/* AREAS */}
            <div className="flex flex-col gap-5 min-w-[160px]">
              <h4 className="text-sm font-semibold uppercase tracking-wide">
                Areas We Serve
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-white/70">
                <li>Kokomo
                  , IN</li>
                <li>Fort Wayne
                  , IN</li>
                <li>Indianapolis
                  , IN</li>
                <li>South Bend
                  , IN</li>
                <li>Mishawaka
                  , IN</li>
              </ul>
            </div>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10" />

        {/* BOTTOM */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {currentYear} HudREI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

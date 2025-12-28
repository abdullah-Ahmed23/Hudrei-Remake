import { Phone, Mail, MapPin } from "lucide-react";
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
              Helping homeowners sell quickly through transparent cash offers
              and fast closings.
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
                <span>Houston, Texas</span>
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
                <li><a href="/who-are-we" className="hover:text-white">About Us</a></li>
                <li><a href="/selling-options" className="hover:text-white">Selling Options</a></li>
                <li><a href="/#testimonials" className="hover:text-white">Testimonials</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="flex flex-col gap-5 min-w-[140px]">
              <h4 className="text-sm font-semibold uppercase tracking-wide">
                Resources
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-white/70">
                <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
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
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

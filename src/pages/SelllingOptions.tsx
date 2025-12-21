import { useState } from "react";
import { Helmet } from "react-helmet";
import { Home, DollarSign, Building, Landmark, Shield, Phone, Mail, Clock, MapPin, Check, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface OfferOption {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  perks: string[];
  ctaText: string;
  ctaLink: string;
}

const offers: OfferOption[] = [
  {
    id: 1,
    title: "Sell AS-IS",
    subtitle: "Multiple Cash Offers",
    description: "Experience a hassle-free sale with our straightforward cash offer. Using our extensive network of investors and our own capital, we guarantee a quick close on your schedule. No repairs, no agent fees, no financing delays. Leave behind what you don't want and even stay after closing if needed. Sell on your terms, stress-free.",
    icon: Home,
    perks: [
      "Receive Multiple Cash Offers",
      "Get Cash Before Closing",
      "Sell On Your Timeline",
      "Leave Behind Unwanted Items",
      "Stay After Closing If Needed",
      "Zero Uncertainties",
      "No Repairs Required",
      "No Realtor Commissions",
      "Completely Stress-Free"
    ],
    ctaText: "Get Cash Offers",
    ctaLink: "#contact"
  },
  {
    id: 2,
    title: "Become The Bank",
    subtitle: "Sell For Top Dollar",
    description: "This innovative approach is perfect for homeowners who want maximum value without rushing for immediate cash. Instead of a traditional sale, you become the lender. Use your property as collateral, receive a down payment, and enjoy monthly income payments—all while we handle taxes, insurance, and maintenance.",
    icon: Landmark,
    perks: [
      "Higher Sale Price",
      "Earn Passive Income Beyond Sale",
      "No Property Tax Burden",
      "Insurance Covered",
      "Zero Maintenance Worries"
    ],
    ctaText: "Become The Bank",
    ctaLink: "#contact"
  },
  {
    id: 3,
    title: "Max Equity Offer",
    subtitle: "Maximize Your Net Proceeds",
    description: "We handle every detail of selling your home so you walk away with the agreed-upon net price. Forget about paperwork, negotiations, repairs, inspection credits, and appraisal contingencies—we cover it all. Enjoy a seamless experience from start to finish while maximizing your equity.",
    icon: DollarSign,
    perks: [
      "Seamless Selling Experience",
      "Maximize Your Equity",
      "Locked-In Net Price",
      "No Stressful Negotiations",
      "No Repairs or Inspection Fixes",
      "No Appraisal Contingencies"
    ],
    ctaText: "Learn More",
    ctaLink: "#contact"
  },
  {
    id: 4,
    title: "Mortgage Relief Offer",
    subtitle: "Get A Fresh Start",
    description: "Struggling with mortgage payments? Can't sell due to low equity or costly repairs? We specialize in helping homeowners facing financial difficulties. We can take over your mortgage, covering property taxes and maintenance, helping you avoid foreclosure and rebuild your credit.",
    icon: Shield,
    perks: [
      "Free Yourself From Mortgage Burden",
      "Avoid Foreclosure",
      "Rebuild Your Credit Score",
      "Get A Fresh Financial Start",
      "No Equity Constraints",
      "No Home Repairs Needed"
    ],
    ctaText: "Get Mortgage Relief",
    ctaLink: "#contact"
  },
  {
    id: 5,
    title: "List With HudREI",
    subtitle: "Traditional Sale, Expert Support",
    description: "Leverage our in-house listing expertise for a traditional sale. With hundreds of successfully sold properties, we know how to maximize your sale price. Unlike typical agents, we have hands-on experience as property investors, meaning we negotiate fiercely on your behalf to get you top dollar.",
    icon: Building,
    perks: [
      "Proven Track Record",
      "We Are Experienced Sellers",
      "Committed To Maximize Sale Price",
      "Sell On Your Timeline",
      "Fierce Negotiation On Your Behalf"
    ],
    ctaText: "List With HudREI",
    ctaLink: "#contact"
  }
];

const steps = [
  {
    number: 1,
    title: "Get In Touch",
    description: "Click the 'Get Started' button or call us directly to speak with our team."
  },
  {
    number: 2,
    title: "Share Property Details",
    description: "We just need a few details about your needs and your property. Our goal is to make this as easy as possible."
  },
  {
    number: 3,
    title: "Receive Your Offer",
    description: "Once we've reviewed your information, we'll provide you with a no-obligation cash offer for your property."
  },
  {
    number: 4,
    title: "Sign At Title Company",
    description: "If you accept our offer, we'll schedule a meeting at the Title Company. Ask any questions along the way!"
  },
  {
    number: 5,
    title: "Get Your Money",
    description: "You'll receive a certified check at the Title Office to cash at your bank immediately."
  }
];

const PerksModal = ({ offer, isOpen, onClose }: { offer: OfferOption; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-white backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
      
        className={cn(
          "bg-card border border-border rounded-2xl max-w-lg w-full p-8 relative",
          "animate-scale-in"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center">
            <offer.icon className="w-7 h-7 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">{offer.title}</h3>
            <p className="text-accent">{offer.subtitle}</p>
          </div>
        </div>

        <h4 className="text-lg font-semibold text-foreground mb-4">The Perks</h4>
        
        <ul className="space-y-3">
          {offer.perks.map((perk, index) => (
            <li 
              key={index}
              className="flex items-center gap-3 animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-accent" />
              </div>
              <span className="text-foreground">{perk}</span>
            </li>
          ))}
        </ul>

        <Button className="w-full mt-6 bg-accent text-accent-foreground hover:bg-accent/90" asChild>
          <a href={offer.ctaLink}>{offer.ctaText}</a>
        </Button>
      </div>
    </div>
  );
};

const OfferCard = ({ offer, index }: { offer: OfferOption; index: number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPerks, setShowPerks] = useState(false);

  return (
    <>
      <div 
      id={`offer-${offer.id}`}
        className={cn(
          "bg-[#0b434a] border border-border rounded-2xl p-8 hover-lift",
          "scroll-mt-32",
          index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        )}
      >
        <div  className="flex items-start gap-6 mb-6">
          <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
            <offer.icon className="w-8 h-8 text-accent" />
          </div>
          <div>
            <span className="text-accent font-medium text-sm">Offer {offer.id}</span>
            <h3 className="text-2xl font-bold text-white mt-1">{offer.title}</h3>
            <p className="text-accent">{offer.subtitle}</p>
          </div>
        </div>

        <p className="text-whiteleading-relaxed mb-6">
          {offer.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-accent text-accent-foreground hover:bg-[#b8e1ea ]" asChild>
            <a href={offer.ctaLink}>{offer.ctaText}</a>
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setShowPerks(!showPerks)}
            className="border-border text-foreground hover:bg-white"
          >
            View Perks
            <ChevronDown className={cn("w-4 h-4 ml-2 transition-transform", showPerks && "rotate-180")} />
          </Button>
        </div>

        {/* Inline perks with animation */}
        <div className={cn(
          "overflow-hidden transition-all duration-500",
          showPerks ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"
        )}>
          <div className="bg-secondary/50 rounded-xl p-6 border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-4">The Perks</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {offer.perks.map((perk, idx) => (
                <div 
                  key={idx}
                  className={cn(
                    "flex items-center gap-3",
                    showPerks && "animate-fade-up"
                  )}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm text-foreground">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PerksModal offer={offer} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

const SellingOptions = () => {
  return (
    <>
     
      <Helmet>
        <title>Your Selling Options | HudREI - Houston Real Estate Investors</title>
        <meta name="description" content="Choose the selling path that's best for you. Multiple cash offers, become the bank, max equity, mortgage relief, or list with us." />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className=" lg:py-28 bg-white" >
          <div className="container py-20 mx-auto px-4 sm:px-6 lg:px-8 text-center"  data-aos="fade-down"
          data-aos-duration="900">
            <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Home className="w-8 h-8 text-accent"  data-aos="fade-up"
          data-aos-duration="900" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Your Selling Options
            </h1>
            <p className="text-xl text-accent mb-4">Choose the path that's best for you!</p>
            <p className="text-black max-w-3xl mx-auto text-lg leading-relaxed">
              At HudREI, we redefine the selling experience with tailored solutions to meet your needs. 
              Say goodbye to stress and uncertainty – our transparent approach and competitive pricing 
              sets a new standard. We offer multiple options to suit your unique situation.
            </p>
            <Button className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6" asChild>
              <a href="#offers">Browse Offers</a>
            </Button>
          </div>
        </section>

        {/* Offers Section */}
        <section id="offers" className="py-20 bg-[#faf9f6]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4"  data-aos="fade-up"
          data-aos-duration="900">
                Get Cash Offers
              </h2>
              <p className=" max-w-2xl text-black text-2xl  mx-auto"  data-aos="fade-left"
          data-aos-duration="900">
                Explore our range of selling solutions designed to meet your specific needs and timeline.
              </p>
            </div>

            <div className="space-y-8"  data-aos="fade-left"
          data-aos-duration="900">
              {offers.map((offer, index) => (
                <OfferCard key={offer.id} offer={offer} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-[#fffff0]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 "  data-aos="fade-up"
          data-aos-duration="900">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                It's Easy With Us...
              </h2>
              <p className="text-black">How it works in 5 easy steps.</p>
            </div>

            <div className="grid md:grid-cols-5 gap-6"  data-aos="fade-left"
          data-aos-duration="900">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="bg-card border border-border rounded-xl p-6 text-center h-full hover-lift">
                    <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-accent">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center"  data-aos="fade-down"
          data-aos-duration="900">
              <p className="text-lg text-black font-semibold mb-2">That's It!</p>
              <p className="text-black mb-6">Some customers can even stay in the home after closing!</p>
              <div className="inline-block bg-accent/10 border border-accent/30 rounded-xl px-8 py-4">
                <p className="text-xl font-bold text-accent">Nothing Hidden. Full Transparency. No Hassle!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"  data-aos="zoom-in"
          data-aos-duration="900">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Contact Us Today!
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8">
                  If you're ready to sell your Houston property, call us today and get your offer ASAP. 
                  Depending on the circumstances, you can get a cash offer in much less time than you might think.
                </p>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6" asChild>
                  <a href="tel:+1234567890">Get Cash Offers</a>
                </Button>
              </div>

              <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary-foreground mb-6">Have Questions?</h3>
                <p className="text-primary-foreground/80 mb-6">We care about clarity!</p>
                
                <div className="space-y-4">
                  <a href="tel:+1234567890" className="flex items-center gap-4 text-primary-foreground hover:text-accent transition-colors">
                    <Phone className="w-5 h-5" />
                    <span>(123) 456-7890</span>
                  </a>
                  <a href="mailto:office@hudrei.com" className="flex items-center gap-4 text-primary-foreground hover:text-accent transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>office@hudrei.com</span>
                  </a>
                  <div className="flex items-center gap-4 text-primary-foreground/80">
                    <Clock className="w-5 h-5" />
                    <span>Mon-Fri: 8am - 5pm | Sat-Sun: Closed</span>
                  </div>
                  <div className="flex items-center gap-4 text-primary-foreground/80">
                    <MapPin className="w-5 h-5" />
                    <span>Houston, Texas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SellingOptions;
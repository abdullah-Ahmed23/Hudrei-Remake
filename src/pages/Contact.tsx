import { Helmet } from "react-helmet";
import { useState } from "react";
import { Phone, Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hudReiLogo from "@/assets/hudrei-logo.png";
import contactbg from "@/assets/bg-contact.webp";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";



const Contact = () => {
  const { toast } = useToast();
  const location = useLocation();
  const incoming = location.state as any;
    const [formData, setFormData] = useState({
    fullName: incoming?.fullName || "",
    phone: incoming?.phone || "",
    email: incoming?.email || "",
    address: "",
    streetAddress: incoming?.streetAddress || "",
    city: incoming?.city || "",
    state: incoming?.state || "",
    timeline: incoming?.timeline || "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef<HTMLDivElement | null>(null);
useEffect(() => {
  if (incoming && formRef.current) {
    formRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}, [incoming]);

  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Request Received!",
      description: "We'll contact you within 24 hours with your cash offer.",
    });
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      address: "",
      streetAddress: "",
      city: "",
      state: "",
      timeline: "",
      consent: false,
    });
    setIsSubmitting(false);
  };

  const steps = [
    {
      number: "1",
      text: "Tell us about your property. Call us at (317) 795-1990 or fill out our short form.",
    },
    {
      number: "2",
      text: "We'll connect with you fast. If your home fits our buying criteria, we'll set a quick appointment to learn your goals and explain how selling to us works.",
    },
    {
      number: "3",
      text: "Get a fair written offer. We'll present a straightforward, no-obligation cash offer.",
    },
    {
      number: "4",
      text: "Close on your timeline. We work with a local, reputable title company and put cash in your hands in as little as 2 weeks sometimes even sooner.",
    },
  ];

  const promises = [
    "As-Is Purchase – No repairs, cleaning, or showings required",
    "Fast Offers – Usually within 24 hour",
    "Flexible Closings – You choose the date that works best for you",
    "No Hidden Costs – We cover the closing fee",
  ];

  const [addressQuery, setAddressQuery] = useState(formData.streetAddress);
const [addressResults, setAddressResults] = useState([]);
  
  useEffect(() => {
  if (addressQuery.length < 3) {
    setAddressResults([]);
    return;
  }

  const timeout = setTimeout(async () => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=5&q=${addressQuery}`,
        {
          headers: {
            "User-Agent": "hudrei-form",
          },
        }
      );
      const data = await res.json();
      setAddressResults(data);
    } catch (err) {
      console.error(err);
    }
  }, 400); // debounce

  return () => clearTimeout(timeout);
}, [addressQuery]);

 // 🔗 Get address from Hero
  useEffect(() => {
    if (location.state?.streetAddress) {
      setFormData((prev) => ({
        ...prev,
        streetAddress: location.state.streetAddress,
      }));

      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location.state]);


  return (
    <>
      <Helmet>
        <title>Contact HudREI - Get Your Cash Offer Today</title>
        <meta
          name="description"
          content="Ready to sell your house fast? Contact HudREI for a fair cash offer within 24 hours. Call (317) 795-1990 or fill out our form."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
       

        {/* Hero Section */}
        <section className="relative min-h-[500px] py-20 flex items-center overflow-hidden">
        <div className=" inset-0  bg-cover bg-center" >
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#012b3a]" />
</div>


          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white " data-aos="fade-right">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to <span className="text-accent">Begin</span> the{" "}
                  <span className="text-accent">Connection</span>?
                </h1>
                <p className="text-lg text-white/90 mb-4">
                  You deserve peace of mind when making a big decision.
                </p>
                <p className="text-white/80 mb-4">
                  Our job is to listen first, then guide you through every option so you can move
                  forward with clarity and confidence.
                </p>
                <p className="text-white/80 mb-4">
                  Whether you need answers, reassurance, or simply want to see what a fast cash
                  offer looks like, we're here to make the process simple and stress-free.
                </p>
                <p className="text-white/80 mb-6">
                  Reach out to us today to begin the journey.
                </p>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white font-semibold"
                >
                  Get My Cash Offer!
                </Button>
              </div>

              {/* Right - Direct Contact Card */}
              <div
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl p-8 animate-fade-in"
                data-aos="fade-left"
              >
                <div className="text-center mb-6">
                  <p className="text-white text-lg font-medium mb-2">Direct contact</p>
                  <div className="">
                   <img src={hudReiLogo} alt="HudREI" className=" w-18 h-18 mx-auto bg-white rounded-lg flex items-center justify-center mb-4" />
                  </div>
                </div>
                <div className="space-y-4">
                  <a
                    href="tel:3177951990"
                    className="flex items-center justify-center gap-3 bg-primary/90 hover:bg-primary text-white py-3 px-6 rounded-lg transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    (317) 795-1990
                  </a>
                  <a
                    href="mailto:office@hudrei.com"
                    className="flex items-center justify-center gap-3 bg-gray-800/80 hover:bg-gray-800 text-white py-3 px-6 rounded-lg transition-all"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us Directly
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process & Form Section */}
        <section className="py-20 bg-white" >
          <div className="container mx-auto px-4" >
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left - Process */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8" data-aos="fade-down">
                  What's our process look like?
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4" data-aos="zoom-in">
                    Sell Your Property the New Way with HudREI
                  </h3>
                  <p className="text-gray-600 mb-4" data-aos="zoom-in">
                    Tired of the stress, repairs, or endless waiting that come with selling a
                    house? At HudREI, our mission is to Reimagine how smart sellers today sell
                    their home. We buy properties exactly as they are no matter the condition, no
                    matter the location.
                  </p>
                  <p className="text-gray-600 mb-6" data-aos="zoom-in">
                    You can trust us to handle everything quickly, respectfully, and without the
                    usual headaches. Say goodbye to the burden of selling and hello to a simple,
                    hassle-free experience.
                  </p>
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-6" data-aos="fade-up">How It Works</h4>

                <div className="space-y-6 mb-10" >
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex gap-4 items-start "
                      style={{ animationDelay: `${index * 0.1}s` }}
                       data-aos="fade-up"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold">
                        {step.number}
                      </div>
                      <p className="text-gray-700 font-medium pt-2">{step.text}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4"  data-aos="fade-right">Our Promise</h4>
                  <div className="space-y-3">
                    {promises.map((promise, index) => (
                      <div key={index} className="flex items-start gap-3"  data-aos="fade-down">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"  data-aos="fade-left" />
                        <span className="text-gray-700">{promise}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 italic mb-6">
                  "Sometimes we can even have a check in your hand the very same day."
                </p>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-gray-700">
                    Take the first step now. Call{" "}
                    <a href="tel:3177951990" className="text-accent font-semibold hover:underline">
                      (317) 795-1990
                    </a>{" "}
                    or fill out the form to get your cash offer today.
                  </p>
                </div>
              </div>

              {/* Right - Comparison Card + Form */}
              <div className="space-y-8">
                {/* Comparison Card */}
                <div className="bg-gradient-to-br from-primary to-emerald-600 rounded-2xl p-8 text-white"  data-aos="fade-right">
                  <h3 className="text-2xl font-bold mb-4">Listing vs. Selling To Us</h3>
                  <p className="text-white/90 mb-6">
                    Which route is quicker?
                    <br />
                    Puts more cash in your pocket?
                    <br />
                    Has less hassle?
                  </p>
                  <Button
                    variant="secondary"
                    className="bg-white text-primary hover:bg-gray-100 font-semibold"
                  >
                    See The Difference here
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Contact Form */}
       <div
  ref={formRef}
  className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 scroll-mt-12"
  data-aos="zoom-in"
>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <Input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        className="border-accent/30 focus:border-accent text-black bg-white "
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        required
                        className="border-accent/30 focus:border-accent text-black bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="border-accent/30 focus:border-accen text-black bg-white "
                      />
                    </div>

                  

                   <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        streetAddress
                      </label>
    <Input className="text-black bg-white "
      name="streetAddress"
      value={addressQuery}
      placeholder="Street Address *"
      required
      onChange={(e) => {
        setAddressQuery(e.target.value);
        setFormData({
          ...formData,
          streetAddress: e.target.value,
        });
      }}
    />

    {addressResults.length > 0 && (
      <div className="absolute z-50 w-full bg-white text-black border rounded-md shadow-md mt-1 max-h-60 overflow-auto">
        {addressResults.map((item) => (
          <div
            key={item.place_id}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
            onClick={() => {
              setAddressQuery(item.display_name);
              setFormData({
                ...formData,
                streetAddress: item.display_name,
              });
              setAddressResults([]);
            }}
          >
            {item.display_name}
          </div>
        ))}
      </div>
    )}
  </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          City
                        </label>
                        <Input
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="City"
                          className="border-accent/30 focus:border-accent text-black bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          State
                        </label>
                        <Input
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          placeholder="State"
                          className="border-accent/30 focus:border-accent text-black bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        How Soon Do You Want To Sell?
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full h-10 rounded-md border border-accent/30 bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none text-black bg-white"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">As soon as possible</option>
                        <option value="30days">Within 30 days</option>
                        <option value="60days">Within 60-90 days</option>
                        <option value="JustExploring">Just Exploring</option>
                      </select>
                    </div>

                    <div className="flex items-start gap-2 text-sm text-gray-500">
                     <input
  type="checkbox"
  name="consent"
  checked={formData.consent}
  onChange={handleChange}
  className="mt-1"
/>
                      <span>
                        Free offer, no pressure. Your info stays private. Submit to be contacted
                        opt out anytime.
                      </span>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-6"
                    >
                      {isSubmitting ? "Submitting..." : "Get My Offer Now!"}
                    </Button>

                    <div className="text-center text-sm text-gray-500">
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>{" "}
                      |{" "}
                      <a href="#" className="hover:underline">
                        Terms of Service
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

       
      </div>
    </>
  );
};

export default Contact;
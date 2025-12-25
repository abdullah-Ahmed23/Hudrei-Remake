import { Helmet } from "react-helmet";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import png1 from "@/assets/Omar.png"
import png2 from "@/assets/Samar.png"
import png3 from "@/assets/WALE.jpg"
import png4 from "@/assets/Hamid.png"
import png5 from "@/assets/gomaa.png"
import png6 from "@/assets/F1.jpg"
import { 
  Users, 
  Heart, 
  Target, 
  Briefcase,
  Phone,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const teamLeaders = [
  {
    name: "Olawale Oladapo",
    role: "CEO & Founder",
    image: [png3],
  },
  {
    name: "Samar",
    role: "COO And Partner",
    image: [png2],
  },
  {
    name: "Abdullah Tarek",
    role: "Lead Manger",
    image: [png6],
  },
  {
    name: "Omar Lorenzo",
    role: "Marketing Specialist",
    image: [png1],
  },
  {
    name: "Ahmed Gomma",
    role: "Data specialist",
    image: [png5],
  },
  {
    name: "Hamid Nosir",
    role: "Acquisition Manager",
    image: [png4],
  },

];

const careers = [
  { title: "Cold Caller", icon: Phone },
  { title: "Acquisition Property Specialist", icon: Briefcase },
  { title: "Executive Office Assistant", icon: Users },
  { title: "Property Disposition Specialist", icon: Target },
  { title: "Transaction Co-ordinator", icon: Heart },
  { title: "Marketing Developer", icon: Briefcase },
];

const WhoWeAre = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

useEffect(() => {
  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((el) => {
    el.classList.remove("opacity-0", "translate-y-8");
  });
}, []);



  return (
    <>
      <Helmet>
        <title>Who We Are | HudREI - Meet Our Team</title>
        <meta
          name="description"
          content="Meet the HudREI team. We empower sellers with clarity and choice, guiding you through your options with confidence."
        />
      </Helmet>

      

      <main className="min-h-screen bg-white">
        {/* Hero Vision Section */}
        <section
          id="vision"
          className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-teal-50 to-white"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-white" />
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="container relative z-10 mx-auto px-4 text-center">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Our Vision of{" "}
                <span className="text-primary">Service to Sellers</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                At HudREI, we empower sellers with clarity and choice. We guide
                you through your options so you can move forward with confidence
                — even if it's not with us.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg hover-lift"
              >
                <Link to="/selling-options">GET MY CASH OFFER!</Link>
              </Button>
            </div>

           
            {/* Trust Badges */}
{/* Trust Badges */}
<div className="mt-16 flex flex-wrap justify-center items-center gap-6
                animate-on-scroll opacity-0 translate-y-8
                transition-all duration-700 delay-200">

  {/* ===== Google ===== */}
  <a
    href="https://www.google.com/search?q=hudrei"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3
               bg-white/90 backdrop-blur
               border border-black/5
               px-5 py-3 rounded-2xl
               shadow-sm hover:shadow-xl
               hover:-translate-y-1
               transition-all duration-300"
  >
    {/* Google Logo */}
    <img
      src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
      alt="Google"
      className="w-5 h-5"
    />

    <span className="font-semibold text-gray-900">Google</span>

    {/* Stars */}
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="group-hover:animate-starPulse"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          ★
        </span>
      ))}
    </div>
  </a>

  {/* ===== YouTube ===== */}
  <a
    href="https://www.youtube.com/@HudREI"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3
               bg-white/90 backdrop-blur
               border border-black/5
               px-5 py-3 rounded-2xl
               shadow-sm hover:shadow-xl
               hover:-translate-y-1
               transition-all duration-300"
  >
    {/* YouTube Logo */}
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
      alt="YouTube"
      className="w-6"
    />

    <span className="font-semibold text-gray-900">YouTube</span>
  </a>

  {/* ===== Facebook ===== */}
  <a
    href="https://www.facebook.com/profile.php?id=61562781720104"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3
               bg-white/90 backdrop-blur
               border border-black/5
               px-5 py-3 rounded-2xl
               shadow-sm hover:shadow-xl
               hover:-translate-y-1
               transition-all duration-300"
  >
    {/* Facebook Logo */}
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
      alt="Facebook"
      className="w-5 h-5"
    />

    <span className="font-semibold text-gray-900">Facebook</span>

    {/* Stars */}
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="group-hover:animate-starPulse"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          ★
        </span>
      ))}
    </div>
  </a>

</div>


          </div>
        </section>

        {/* Why We Do What We Do */}
        <section id="why" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Why We Do What We Do
                </h2>
              </div>
              <div className="bg-white shadow-lg border border-gray-100 p-8 md:p-12 rounded-2xl">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Selling a house is never just about bricks and mortar — it's
                  about your life, your family, and your peace of mind. Too
                  often, homeowners have been treated like transactions instead
                  of people, left feeling uncertain and pressured. We knew there
                  had to be a better way.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  That's why HudREI was created: to give homeowners a safe,
                  clear, and respectful path forward. Our goal is to take the
                  stress out of selling, replace it with certainty, and walk
                  beside you from the first call to the closing table.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  With us, it's not about squeezing the most out of a deal —
                  it's about making sure you feel confident, cared for, and in
                  control of your next step. At the end of the day, we're not
                  just buying houses. We're building trust, one neighbor at a
                  time.
                </p>
                <div className="text-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
                  >
                    <Link to="/selling-options">GET MY CASH OFFER!</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-8 md:p-12 rounded-2xl">
                <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8">
                  To empower homeowners with real choices and reimagine selling
                  homes through a simpler, transparent, and stress-free process.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
                >
                  <Link to="/selling-options">GET MY CASH OFFER!</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team - Horizontal Scroll */}
        <section id="team" className="py-20 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Meet Our Team of Housing Experts
                </h2>
              </div>
              <p className="text-lg text-gray-600">
                Real humans, real people here to help
              </p>
            </div>

            {/* Scroll Controls */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => scroll("left")}
                className="p-3 rounded-full bg-white shadow-md border border-gray-100 hover:bg-primary/10 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-3 rounded-full bg-white shadow-md border border-gray-100 hover:bg-primary/10 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Team Cards - Horizontal Scroll */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {teamLeaders.map((member, index) => (
                <div
                  key={member.name}
                  className="flex-shrink-0 w-72 snap-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white shadow-lg border border-gray-100 rounded-2xl overflow-hidden hover-lift group">
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-accent font-medium">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section id="careers" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our Careers
                </h2>
              </div>
              <p className="text-lg text-gray-600">
                Join our growing team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {careers.map((career, index) => (
                <div
                  key={career.title}
                  className="bg-white shadow-md border border-gray-100 p-6 rounded-xl hover-lift animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 group cursor-pointer hover:border-primary/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <career.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {career.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
              >
                <a href="mailto:office@hudrei.com">APPLY FOR A CAREER HERE</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      
    </>
  );
};

export default WhoWeAre;
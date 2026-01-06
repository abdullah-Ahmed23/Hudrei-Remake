import SEO from "@/components/SEO";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Question from "@/components/QuestionsSection";
import HowItWorks from "@/components/HowItWorksSection";
import Faq from "@/components/FaqSection"
import ServiceAreasSection from "@/components/ServiceAreasSection";
import ScrollToTop from "@/components/ScrollToTop";


import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import HeroV2 from "@/components/HeroV2";






const Index = () => {



  return (
    <>
      <SEO
        title="Sell My House Fast Indiana | Cash Home Buyers | HudREI"
        description="Looking to sell your house fast in Indiana? HudREI is a local, family-owned company buying homes in any condition. No fees, no repairs, and cash offers in 24 hours. Close on your timeline."
        canonical="https://hudrei.com"
      />

      <div className="min-h-screen bg-background text-foreground">

        <main>

          <HeroV2 />
          <HeroSection />

          <HowItWorksSection />
          <TestimonialsSection />

          <AboutSection />
          <ServiceAreasSection />
          <CTASection />
          <Faq />
          <Question />
        </main>

      </div>
    </>
  );
};

export default Index;




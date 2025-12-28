import { Helmet } from "react-helmet";
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
import ScrollToTop from "@/components/ScrollToTop";


import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import HeroV2 from "@/components/HeroV2";






const Index = () => {



  return (
    <>
      <Helmet>
        <title>HudREI - Sell Your House Fast for Cash | No Fees, No Repairs</title>
        <meta 
          name="description" 
          content="Get a fair cash offer for your home in 24 hours. HudREI buys houses in any condition. No repairs, no fees, close in 7-14 days. Trusted by 500+ Texas homeowners." 
        />
        <meta name="keywords" content="sell house fast, cash home buyers, we buy houses, sell house as-is, Texas home buyers" />
        <link rel="canonical" href="https://hudrei.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="HudREI - Sell Your House Fast for Cash" />
        <meta property="og:description" content="Get a fair cash offer for your home in 24 hours. No repairs, no fees, close on your timeline." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hudrei.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "HudREI",
            "description": "We buy houses for cash in Texas. Get a fair offer in 24 hours.",
            "url": "https://hudrei.com",
            "telephone": "+1-123-456-7890",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "addressCountry": "US"
            },
            "areaServed": ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
       
        <main>

          <HeroV2/>
          <HeroSection />
          <TrustSection />
          <HowItWorksSection />
          <TestimonialsSection />
          
          <AboutSection />
          <Faq />
          <CTASection  />
          <Question  />
        </main>
       
      </div>
    </>
  );
};

export default Index;

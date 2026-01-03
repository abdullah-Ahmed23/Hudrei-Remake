import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { useIsMobile } from "@/hooks/use-mobile";

// Static Imports (Removing Lazy Loading)
import Index from "./pages/Index";
import SellingOptions from "./pages/SellingOptions";
import Listing from "./pages/Listing";
import WhoWeAre from "./pages/WhoWeAre";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import Blog from "./pages/blog";
import Testimonials from "./pages/Testimonials";
import Partners from "./pages/Partners";
import Agents from "./pages/partners/Agents";
import Wholesalers from "./pages/partners/Wholesalers";
import LocalInvestors from "./pages/partners/LocalInvestors";
import TitleCompanies from "./pages/partners/TitleCompanies";
import Faq from "./pages/Faq";
import Careers from "./pages/Careers";
import CityLandingPage from "./pages/CityLandingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import BlogPost from "./pages/blog/[slug]/page";
import Dashboard from "./pages/Dashboard";
import ListingDetails from "./pages/ListingDetails";

const queryClient = new QueryClient();

// Page Transition Wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();
  return (
    <motion.div
      key={isMobile ? "m-page" : "d-page"}
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: isMobile ? 0 : 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      disable: false, // Enable animations on mobile
      disableMutationObserver: false,
    });
  }, []);

  // Refresh AOS on every route change instantly
  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <ScrollToHash />

      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/selling-options" element={<PageTransition><SellingOptions /></PageTransition>} />
          <Route path="/who-are-we" element={<PageTransition><WhoWeAre /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/how-it-works" element={<PageTransition><HowItWorks /></PageTransition>} />
          <Route path="/listing" element={<PageTransition><Listing /></PageTransition>} />
          <Route path="/listing/:id" element={<PageTransition><ListingDetails /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
          <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
          <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
          <Route path="/partners" element={<PageTransition><Partners /></PageTransition>} />
          <Route path="/partners/agents" element={<PageTransition><Agents /></PageTransition>} />
          <Route path="/partners/wholesalers" element={<PageTransition><Wholesalers /></PageTransition>} />
          <Route path="/partners/local-investors" element={<PageTransition><LocalInvestors /></PageTransition>} />
          <Route path="/partners/title-companies" element={<PageTransition><TitleCompanies /></PageTransition>} />
          <Route path="/faq" element={<PageTransition><Faq /></PageTransition>} />
          <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
          <Route path="/we-buy-houses/:area" element={<PageTransition><CityLandingPage /></PageTransition>} />
          <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
          <Route path="/terms-of-service" element={<PageTransition><TermsOfService /></PageTransition>} />
          <Route path="/dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </TooltipProvider>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;

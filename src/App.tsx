import { useEffect, lazy, Suspense, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";
import ScrollToTop from "./components/ScrollToTop";
import LoadingOverlay from "./components/LoadingOverlay";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

// Lazy Load Pages
const Index = lazy(() => import("./pages/Index"));
const SellingOptions = lazy(() => import("./pages/SellingOptions"));
const WhoWeAre = lazy(() => import("./pages/WhoWeAre"));
const Contact = lazy(() => import("./pages/Contact"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Blog = lazy(() => import("./pages/blog"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Partners = lazy(() => import("./pages/Partners"));
const Agents = lazy(() => import("./pages/partners/Agents"));
const Wholesalers = lazy(() => import("./pages/partners/Wholesalers"));
const LocalInvestors = lazy(() => import("./pages/partners/LocalInvestors"));
const TitleCompanies = lazy(() => import("./pages/partners/TitleCompanies"));
const Faq = lazy(() => import("./pages/Faq"));
const Careers = lazy(() => import("./pages/Careers"));
const CityLandingPage = lazy(() => import("./pages/CityLandingPage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Page Transition Wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      disable: false,
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
      <Suspense fallback={<LoadingOverlay />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/selling-options" element={<PageTransition><SellingOptions /></PageTransition>} />
            <Route path="/who-are-we" element={<PageTransition><WhoWeAre /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/how-it-works" element={<PageTransition><HowItWorks /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
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
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </TooltipProvider>
  );
};

const App = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 2000); // 2 seconds for initial brand reveal as requested
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence mode="wait">
        {isInitialLoad ? (
          <LoadingOverlay key="initial-loader" />
        ) : (
          <BrowserRouter key="app-content">
            <AppContent />
          </BrowserRouter>
        )}
      </AnimatePresence>
    </QueryClientProvider>
  );
};

export default App;

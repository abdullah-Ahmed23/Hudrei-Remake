import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SellingOptions from "./pages/SellingOptions";
import ScrollToHash from "./components/ScrollToHash";
import ScrollToTop from "./components/ScrollToTop";
import WhoWeAre from "./pages/WhoWeAre";
import Contact from "./pages/Contact";
import HowItWorks from "@/pages/HowItWorks";
import Blog from "./pages/blog";
import Faq from "./pages/Faq";
import Carrers from "./pages/Careers";
import Partners from "./pages/Partners";
import Agents from "./pages/partners/Agents";
import Wholesalers from "./pages/partners/Wholesalers";
import LocalInvestors from "./pages/partners/LocalInvestors";
import TitleCompanies from "./pages/partners/TitleCompanies";
import AOS from "aos";
import "aos/dist/aos.css";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./App.css";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>

      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>

          <ScrollToTop />
          <ScrollToHash />
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/selling-options" element={<SellingOptions />} />
            <Route path="/who-are-we" element={<WhoWeAre />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Howit" element={<HowItWorks />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/partners/agents" element={<Agents />} />
            <Route path="/partners/wholesalers" element={<Wholesalers />} />
            <Route path="/partners/local-investors" element={<LocalInvestors />} />
            <Route path="/partners/title-companies" element={<TitleCompanies />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/Carrers" element={<Carrers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      <Footer />

    </QueryClientProvider>
  );
};

export default App;

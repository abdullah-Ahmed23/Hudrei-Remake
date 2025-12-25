import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SellingOptions from "./pages/SelllingOptions";
import ScrollToHash from "./components/ScrollToHash";
import ScrollToTop from "./components/ScrollToTop";
import WhoWeAre from "./pages/WhoWeAre";
import Contact from "./pages/Contact";
import Blog from "./pages/blog";
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
        <Header />
        <ScrollToTop />
         <ScrollToHash />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/selling-options" element={<SellingOptions />} />
            <Route path="/who-are-we" element={<WhoWeAre />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      <Footer />
    </QueryClientProvider>
  );
};

export default App;

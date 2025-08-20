import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Layout from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// ✅ Import all service detail pages
import CustomerSupport from "./pages/Services/CustomerSupport";
import CloudMigration from "./pages/Services/CloudMigration";
import AccountingBookkeeping from "./pages/Services/AccountingBookkeeping";
import Payroll from "./pages/Services/Payroll";
import Geospatial from "./pages/Services/Geospatial";
import HR from "./pages/Services/HR";
import Consulting from "./pages/Services/Consulting";
import Recruitment from "./pages/Services/Recruitment";

const queryClient = new QueryClient();

// Smooth scroll to hash
function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Layout>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />

            {/* Service Detail Pages */}
            <Route path="/services/customer-support" element={<CustomerSupport />} />
            <Route path="/services/cloud-migration" element={<CloudMigration />} />
            <Route path="/services/accounting-bookkeeping" element={<AccountingBookkeeping />} />
            <Route path="/services/payroll" element={<Payroll />} />
            <Route path="/services/geospatial" element={<Geospatial />} />
            <Route path="/services/hr" element={<HR />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="/services/recruitment" element={<Recruitment />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

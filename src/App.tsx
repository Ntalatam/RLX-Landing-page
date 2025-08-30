import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import MissionPage from "./pages/Mission";
import Company from "./pages/Company";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";
import FoundingTeam from "./pages/FoundingTeam";
import DemoRequestPage from "./pages/DemoRequest";
import ComingSoon from "./pages/ComingSoon";
const queryClient = new QueryClient();

const App = () => (
  <>
    <video
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src="/images/line.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="fixed inset-0 bg-black/50 z-0 pointer-events-none"></div>
      <div className="fixed inset-0  opacity-40 z-0 pointer-events-none"></div>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/founding-team" element={<FoundingTeam />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/demo-request" element={<DemoRequestPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  </>
);

export default App;
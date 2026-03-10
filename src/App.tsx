import { HashRouter, Routes, Route } from "react-router-dom"; // Change this
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Expertise from "./pages/Expertise";
import Leadership from "./pages/Leadership";
import MeetTheTeam from "./pages/MeetTheTeam";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Change BrowserRouter to HashRouter below */}
      <HashRouter> 
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/team" element={<MeetTheTeam />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
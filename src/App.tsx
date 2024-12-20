import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BreedDetail from "./pages/BreedDetail";
import PetBreedGuides from "./pages/PetBreedGuides";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pet-breed-guides" element={<PetBreedGuides />} />
          <Route path="/pet-breed-guides/:species" element={<Index />} />
          <Route path="/pet-breed-guides/:species/page/:page" element={<Index />} />
          <Route path="/breeds/:species/:breedId" element={<BreedDetail />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
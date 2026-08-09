import { LocaleProvider } from "./context/LocaleContext";
import { useDocumentSetup } from "./hooks/useDocumentSetup";

// Core Components
import { Navbar } from "./components/navigation/Navbar";
import { Hero } from "./components/hero/Hero";
import { MenuSection } from "./components/menu/MenuSection";

// Supporting Sections
import { HighlightsSection } from "./components/highlights/HighlightsSection";
import { GallerySection } from "./components/gallery/GallerySection";
import { VisitUsSection } from "./components/visit-us/VisitUsSection";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <LocaleProvider>
      <AppContent />
    </LocaleProvider>
  );
}

function AppContent() {
  useDocumentSetup();

  return (
    <div className="min-h-screen bg-bg-dark text-cream font-body selection:bg-accent/30 selection:text-cream overflow-x-hidden w-full relative">
      <Navbar />

      <main className="w-full overflow-x-hidden">
        <Hero />
        <MenuSection />
        <GallerySection />
        <VisitUsSection />
        <HighlightsSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
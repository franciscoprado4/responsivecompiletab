import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeatureSection } from "./components/FeatureSection";
import { Workflow } from "./components/Workflow";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
};

export default App;

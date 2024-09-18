import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeatureSection } from "./components/FeatureSection";
import { Workflow } from "lucide-react";

export const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Workflow />
    </>
  );
};

export default App;

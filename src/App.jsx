import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeatureSection } from "./components/FeatureSection";

export const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
    </>
  );
};

export default App;

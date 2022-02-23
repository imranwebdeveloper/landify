import AchievmentSection from "./components/AchievmentSection";
import ClientSection from "./components/ClientSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { IntrigationSection } from "./components/IntrigationSection";
import ManageSection from "./components/ManageSection";
import ReviewsSection from "./components/ReviewsSection";

const App = () => {
  return (
    <>
      <div className="bg-blur">
        <Header />
        <HeroSection />
      </div>
      <ClientSection />
      <FeatureSection />
      <ReviewsSection />
      <AchievmentSection />
      <IntrigationSection />
      <ManageSection />
      <Footer />
    </>
  );
};

export default App;

import Header from "../../components/Header/Header.jsx";
import HeaderV2 from "../../components/HeaderV2/HeaderV2.jsx";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection.jsx";
import HowItWorksSection from "../../components/HowItWorksSection/HowItWorksSection.jsx";
import CTASection from "../../components/CTASection/CTASection.jsx";
import FooterV2 from "../../components/FooterV2/FooterV2.jsx";

const Home = () => {
  return (
    <div>
      <HeaderV2 />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
      <FooterV2 />
    </div>
  );
};

export default Home;

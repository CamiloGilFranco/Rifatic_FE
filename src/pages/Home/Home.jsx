import Header from "../../components/Header/Header";
import HeaderV2 from "../../components/HeaderV2/HeaderV2";
import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import HowItWorksSection from "../../components/HowItWorksSection/HowItWorksSection";
import CTASection from "../../components/CTASection/CTASection";
import FooterV2 from "../../components/FooterV2/FooterV2";

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

import Header from "../../components/Header/Header";
import MainBannerComponent from "../../components/MainBannerComponent/MainBannerComponent";
import MainStepsBannerComponent from "../../components/MainStepsBannerComponent/MainStepsBannerComponent";
import WhyUseComponent from "../../components/WhyUseComponent/WhyUseComponent";
import Footer from "../../components/Footer/Footer";
import HeaderV2 from "../../components/HeaderV2/HeaderV2";
import HeroSection from "../../components/HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeaderV2 />
      <HeroSection />
      {/* 
      <Header />
      <MainBannerComponent />
      <MainStepsBannerComponent />
      <WhyUseComponent />
      <Footer /> */}
    </div>
  );
};

export default Home;

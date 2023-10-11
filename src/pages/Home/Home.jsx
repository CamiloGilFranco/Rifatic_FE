import React from "react";
import Header from "../../components/Header/Header";
import MainBannerComponent from "../../components/MainBannerComponent/MainBannerComponent";
import MainStepsBannerComponent from "../../components/MainStepsBannerComponent/MainStepsBannerComponent";
import WhyUseComponent from "../../components/WhyUseComponent/WhyUseComponent";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <MainBannerComponent />
      <MainStepsBannerComponent />
      <WhyUseComponent />
      <Footer />
    </div>
  );
};

export default Home;

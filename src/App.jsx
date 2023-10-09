import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainBannerComponent from "./components/MainBannerComponent/MainBannerComponent";
import MainStepsBannerComponent from "./components/MainStepsBannerComponent/MainStepsBannerComponent";
import WhyUseComponent from "./components/WhyUseComponent/WhyUseComponent";

function App() {
  return (
    <div>
      <Header />
      <MainBannerComponent />
      <MainStepsBannerComponent />
      <WhyUseComponent />
      <Footer />
    </div>
  );
}

export default App;

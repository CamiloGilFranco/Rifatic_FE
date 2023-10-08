import styles from "./App.module.scss";
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
    </div>
  );
}

export default App;

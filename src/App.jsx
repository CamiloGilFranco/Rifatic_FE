import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import MainBannerComponent from "./components/MainBannerComponent/MainBannerComponent";
import MainStepsBannerComponent from "./components/MainStepsBannerComponent/MainStepsBannerComponent";

function App() {
  return (
    <div>
      <Header />
      <MainBannerComponent />
      <MainStepsBannerComponent />
    </div>
  );
}

export default App;

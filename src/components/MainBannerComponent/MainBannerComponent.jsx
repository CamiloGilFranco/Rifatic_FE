import styles from "./MAinBannerComponent.module.scss";
import logo from "../../assets/logo.png";
const MainBannerComponent = () => {
  return (
    <div className={styles.main_banner_component}>
      <img src={logo} alt="rifatic logo" className={styles.logo} />
      <p className={styles.text}>Administra tus rifas y sorteos</p>
    </div>
  );
};

export default MainBannerComponent;

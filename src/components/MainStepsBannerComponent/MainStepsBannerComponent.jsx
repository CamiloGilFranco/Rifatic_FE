import styles from "./MainStepsBannerComponent.module.scss";
import img1 from "../../assets/cash1.svg";
import img2 from "../../assets/cash2.svg";
import img3 from "../../assets/cash3.svg";

const MainStepsBannerComponent = () => {
  return (
    <div className={styles.main_steps_banner}>
      <div className={styles.main_steps_banner_cards}>
        <div className={styles.single_container}>
          <div className={styles.image_container}>
            <img src={img1} alt="" className={styles.item_image} />
          </div>
          <h2 className={styles.item_subtitle}>Crea tu talonario</h2>
          <p className={styles.item_text}>
            en RIFATIC crea tus talonarios gratis y compártelos con tus amigos
            para maximizar tus ventas
          </p>
        </div>
        <div className={styles.single_container}>
          <div className={styles.image_container}>
            <img src={img2} alt="" className={styles.item_image} />
          </div>
          <h2 className={styles.item_subtitle}>Crea tu talonario</h2>
          <p className={styles.item_text}>
            en RIFATIC crea tus talonarios gratis y compártelos con tus amigos
            para maximizar tus ventas
          </p>
        </div>
        <div className={styles.single_container}>
          <div className={styles.image_container}>
            <img src={img3} alt="" className={styles.item_image} />
          </div>
          <h2 className={styles.item_subtitle}>Crea tu talonario</h2>
          <p className={styles.item_text}>
            en RIFATIC crea tus talonarios gratis y compártelos con tus amigos
            para maximizar tus ventas
          </p>
        </div>
      </div>
      <span className={styles.warning_message}>RIFATIC NO HACE RIFAS</span>
    </div>
  );
};

export default MainStepsBannerComponent;

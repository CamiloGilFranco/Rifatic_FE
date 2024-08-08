import styles from "./MainStepsBannerComponent.module.scss";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { HiOutlineTicket } from "react-icons/hi";

const MainStepsBannerComponent = () => {
  return (
    <div className={styles.main_steps_banner}>
      <div className={styles.main_steps_banner_cards}>
        <div className={styles.single_container}>
          <div className={styles.image_container}>
            <HiOutlineTicket className={styles.item_image} />
          </div>
          <h2 className={styles.item_subtitle}>Crea tu talonario</h2>
          <p className={styles.item_text}>
            en RIFATIC crea tus talonarios gratis y compártelos con tus amigos
            para maximizar tus ventas
          </p>
        </div>
        <div className={styles.single_container}>
          <div className={styles.image_container}>
            <LiaMoneyBillWaveSolid className={styles.item_image} />
          </div>
          <h2 className={styles.item_subtitle}>Crea tu talonario</h2>
          <p className={styles.item_text}>
            en RIFATIC crea tus talonarios gratis y compártelos con tus amigos
            para maximizar tus ventas
          </p>
        </div>
        <div className={styles.single_container}>
          <div className={styles.image_container}>
            <FaHandHoldingDollar className={styles.item_image} />
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

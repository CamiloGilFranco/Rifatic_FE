import styles from "./WhyUseComponent.module.scss";
import image from "../../assets/whyUsePhoto.jpg";
import { TbArrowLeftFromArc } from "react-icons/tb";

const WhyUseComponent = () => {
  return (
    <div className={styles.why_use_component}>
      <h2 className={styles.title}>¿Por qué usar Rifatic?</h2>
      <div className={styles.content_container}>
        <div className={styles.image_container}>
          <img src={image} alt="" className={styles.image} />
        </div>
        <div className={styles.items_container}>
          <div className={styles.item}>
            <TbArrowLeftFromArc className={styles.item_icon} />
            <span className={styles.item_text}>
              Rifatic es la mejor plataforma para la organización y
              administración de tus rifas
            </span>
          </div>
          <div className={styles.item}>
            <TbArrowLeftFromArc className={styles.item_icon} />
            <span className={styles.item_text}>
              Rifatic es la mejor plataforma para la organización y
              administración de tus rifas
            </span>
          </div>
          <div className={styles.item}>
            <TbArrowLeftFromArc className={styles.item_icon} />
            <span className={styles.item_text}>
              Rifatic es la mejor plataforma para la organización y
              administración de tus rifas
            </span>
          </div>
          <div className={styles.item}>
            <TbArrowLeftFromArc className={styles.item_icon} />
            <span className={styles.item_text}>
              Rifatic es la mejor plataforma para la organización y
              administración de tus rifas
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUseComponent;

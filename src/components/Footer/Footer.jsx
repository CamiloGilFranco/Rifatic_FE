import styles from "./Footer.module.scss";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import facebook from "../../assets/facebook.svg";
import tiktok from "../../assets/tiktok.svg";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.social_media_container}>
        <div className={styles.social_media_item}>
          <img src={instagram} alt="" className={styles.social_logo} />
          <span className={styles.social_media_text}>Instagram</span>
        </div>
        <div className={styles.social_media_item}>
          <img src={facebook} alt="" className={styles.social_logo} />
          <span className={styles.social_media_text}>Facebook</span>
        </div>
        <div className={styles.social_media_item}>
          <img src={youtube} alt="" className={styles.social_logo} />
          <span className={styles.social_media_text}>Youtube</span>
        </div>
        <div className={styles.social_media_item}>
          <img src={tiktok} alt="" className={styles.social_logo} />
          <span className={styles.social_media_text}>TikTok</span>
        </div>
      </div>
      <div className={styles.slogan_container}>
        <h2 className={styles.slogan}>Administra tus rifas y sorteos</h2>
      </div>
      <div className={styles.logo_container}>
        <img src={logo} alt="" className={styles.logo} />
      </div>
    </div>
  );
};

export default Footer;

import styles from "./Footer.module.scss";
import logo from "../../assets/logo.png";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.social_media_container}>
        <div className={styles.social_media_item}>
          <FaInstagram className={styles.social_logo} />
          <span className={styles.social_media_text}>Instagram</span>
        </div>
        <div className={styles.social_media_item}>
          <IoLogoFacebook className={styles.social_logo} />
          <span className={styles.social_media_text}>Facebook</span>
        </div>
        <div className={styles.social_media_item}>
          <FaYoutube className={styles.social_logo} />
          <span className={styles.social_media_text}>Youtube</span>
        </div>
        <div className={styles.social_media_item}>
          <FaTiktok className={styles.social_logo} />
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

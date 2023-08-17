import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Image src={logo} width="" height={55} alt />
        <span className={styles.title}>RIFATIC</span>
      </div>
      <div className={styles.buttons_container}>
        <span className={styles.button}>Iniciar sesión</span>
        <span className={styles.button}>Regístrate</span>
        <span className={styles.button}>Donar</span>
      </div>
    </div>
  );
};

export default Header;

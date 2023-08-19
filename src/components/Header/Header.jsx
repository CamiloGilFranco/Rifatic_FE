import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";
import { useState } from "react";
import sun from "../../assets/light_theme.svg";
import moon from "../../assets/dark_theme.svg";

const Header = () => {
  const [theme, setTheme] = useState(false);
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
        <Image
          src={theme ? sun : moon}
          width={30}
          height=""
          alt="dark theme"
          onClick={() => setTheme(!theme)}
          className={styles.theme_button}
        />
      </div>
    </div>
  );
};

export default Header;

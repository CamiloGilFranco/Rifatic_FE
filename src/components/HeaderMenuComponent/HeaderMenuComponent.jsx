import styles from "./HeaderMenuComponent.module.scss";
import sun from "../../assets/light_theme.svg";
import moon from "../../assets/dark_theme.svg";

const HeaderMenuComponent = ({ theme, setTheme }) => {
  return (
    <div className={styles.header_menu}>
      <div className={styles.background}></div>
      <div className={styles.menu_container}>
        <span className={styles.item}>Iniciar sesión</span>
        <span className={styles.item}>Regístrate</span>
        <span className={styles.item}>Donar</span>
        <img
          src={theme ? sun : moon}
          alt="dark theme"
          onClick={() => setTheme(!theme)}
          className={styles.theme_button}
        />
      </div>
    </div>
  );
};

export default HeaderMenuComponent;

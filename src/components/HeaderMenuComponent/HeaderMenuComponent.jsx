import styles from "./HeaderMenuComponent.module.scss";
import sun from "../../assets/light_theme.svg";
import moon from "../../assets/dark_theme.svg";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";

const HeaderMenuComponent = ({ theme, setTheme, mobileMenu }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${styles.header_menu} ${
        mobileMenu ? styles.header_menu_component_show : ""
      }`}
    >
      <div className={styles.background}></div>
      <div className={styles.menu_container}>
        <span className={styles.item}>Iniciar sesión</span>
        <span
          className={styles.item}
          onClick={() => navigate(routes.registrate)}
        >
          Regístrate
        </span>
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

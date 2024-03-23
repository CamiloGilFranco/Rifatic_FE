import styles from "./HeaderMenuComponent.module.scss";
import sun from "../../assets/light_theme.svg";
import moon from "../../assets/dark_theme.svg";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import Cookies from "js-cookie";
import cookies from "../../constants/cookies";

const HeaderMenuComponent = ({ theme, setTheme, mobileMenu, logged, path }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${styles.header_menu} ${
        mobileMenu ? styles.header_menu_component_show : ""
      }`}
    >
      <div className={styles.background}></div>
      <div className={styles.menu_container}>
        {!logged ? (
          <span
            className={styles.item}
            onClick={() => navigate(routes.iniciar_sesion)}
          >
            Iniciar sesión
          </span>
        ) : (
          <span
            className={styles.item}
            onClick={() => {
              navigate(`${routes.user}${path}`);
              console.log("ioughaosih");
            }}
          >
            {Cookies.get(cookies._user)}
          </span>
        )}
        {!logged ? (
          <span
            className={styles.item}
            onClick={() => navigate(routes.registrate)}
          >
            Regístrate
          </span>
        ) : null}
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

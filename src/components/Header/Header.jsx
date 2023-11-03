import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import sun from "../../assets/light_theme.svg";
import moon from "../../assets/dark_theme.svg";
import burger from "../../assets/burger.svg";
import HeaderMenuComponent from "../HeaderMenuComponent/HeaderMenuComponent";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";

const Header = () => {
  const [theme, setTheme] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [logged, setLogged] = useState(false);
  const [path, setPath] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("_role");
    const user = localStorage.getItem("_user");
    const tkn = localStorage.getItem("_tkn");
    const pth = localStorage.getItem("_pth");

    setPath(pth);

    if (!!role && !!user && !!tkn && !!pth) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.logo_container}
        onClick={() => navigate(routes.home)}
      >
        <img src={logo} alt="" className={styles.logo} />
        <span className={styles.title}>RIFATIC</span>
      </div>
      <div className={styles.buttons_container}>
        {!logged ? (
          <span
            className={styles.button}
            onClick={() => navigate(routes.iniciar_sesion)}
          >
            Iniciar sesión
          </span>
        ) : (
          <span
            className={styles.button_session_active}
            onClick={() => navigate(`${routes.user}${path}`)}
          >
            {localStorage.getItem("_user")}
          </span>
        )}

        {!logged ? (
          <span
            className={styles.button}
            onClick={() => navigate(routes.registrate)}
          >
            Regístrate
          </span>
        ) : null}
        <span className={styles.button}>Donar</span>
        <img
          src={theme ? sun : moon}
          alt="dark theme"
          onClick={() => setTheme(!theme)}
          className={styles.theme_button}
        />
        <div
          className={`
            ${styles.burger_container}
            ${mobileMenu ? styles.burger_active : ""}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <img src={burger} alt="" className={styles.burger} />
        </div>
      </div>

      <HeaderMenuComponent
        theme={theme}
        setTheme={setTheme}
        mobileMenu={mobileMenu}
        logged={logged}
        path={path}
      />
    </div>
  );
};

export default Header;

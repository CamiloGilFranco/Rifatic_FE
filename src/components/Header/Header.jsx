import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import HeaderMenuComponent from "../HeaderMenuComponent/HeaderMenuComponent";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import Cookies from "js-cookie";
import cookies from "../../constants/cookies";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";

const Header = () => {
  const [theme, setTheme] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [logged, setLogged] = useState(false);

  const navigate = useNavigate();
  const auth = useSelector((state) => state.authSlice);

  const email = Cookies.get(cookies._email);

  useEffect(() => {
    if (email) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [auth]);

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
            onClick={() => navigate(`${routes.user}`)}
          >
            {Cookies.get(cookies._email)}
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
        <div
          className={`
            ${styles.burger_container}
            ${mobileMenu ? styles.burger_active : ""}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <RxHamburgerMenu className={styles.burger} />
        </div>
      </div>

      <HeaderMenuComponent
        theme={theme}
        setTheme={setTheme}
        mobileMenu={mobileMenu}
        logged={logged}
      />
    </div>
  );
};

export default Header;

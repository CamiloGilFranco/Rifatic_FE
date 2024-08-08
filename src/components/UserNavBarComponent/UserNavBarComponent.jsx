import styles from "./UserNavBarComponent.module.scss";
import { useState } from "react";
import UserNavModalMenuComponent from "../UserNavModalMenuComponent/UserNavModalMenuComponent";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../../constants/routes";
import Cookies from "js-cookie";
import cookies from "../../constants/cookies";
import userOptions from "../../constants/userOtions";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const UserNavBarComponent = ({ name = "", lastName = "" }) => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const navigate = useNavigate();

  const params = useParams();

  const handleLogout = () => {
    Cookies.remove(cookies._role);
    Cookies.remove(cookies._user);
    Cookies.remove(cookies._tkn);
    Cookies.remove(cookies._pth);

    navigate(routes.home);
  };

  return (
    <div className={styles.user_nav_bar}>
      <div className={styles.user_nav_bar_main}>
        <span className={styles.user_name}>{`${name} ${lastName}`}</span>
        <div className={styles.nav_buttons_container1}>
          <button
            className={`${styles.nav_button} ${
              params.option === userOptions.option1
                ? styles.menu_button_active
                : ""
            }`}
            onClick={() =>
              navigate(
                `${routes.user}/${Cookies.get(cookies._pth)}/${
                  userOptions.option1
                }`
              )
            }
          >
            Mis Sorteos
          </button>
          <button
            className={`${styles.nav_button} ${
              params.option === userOptions.option2
                ? styles.menu_button_active
                : ""
            }`}
            onClick={() =>
              navigate(
                `${routes.user}/${Cookies.get(cookies._pth)}/${
                  userOptions.option2
                }`
              )
            }
          >
            Crear Sorteo
          </button>
          <button
            className={`${styles.nav_button} ${
              params.option === userOptions.option3
                ? styles.menu_button_active
                : ""
            }`}
            onClick={() =>
              navigate(
                `${routes.user}/${Cookies.get(cookies._pth)}/${
                  userOptions.option3
                }`
              )
            }
          >
            Mi Perfil
          </button>
          <button
            className={`${styles.nav_button} ${
              params.option === userOptions.option4
                ? styles.menu_button_active
                : ""
            }`}
            onClick={() =>
              navigate(
                `${routes.user}/${Cookies.get(cookies._pth)}/${
                  userOptions.option4
                }`
              )
            }
          >
            Reportar Problema
          </button>
          <button className={`${styles.nav_button}`} onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
        <div className={styles.nav_buttons_container2}>
          <button
            className={`${styles.menu_button} ${
              showNavMenu ? styles.menu_button_active : ""
            }`}
            onClick={() => setShowNavMenu(!showNavMenu)}
          >
            Menu{" "}
            {!showNavMenu ? (
              <IoIosArrowDown className={styles.arrow_icon} />
            ) : (
              <IoIosArrowUp className={styles.arrow_icon} />
            )}
          </button>
        </div>
      </div>
      <UserNavModalMenuComponent showNavMenu={showNavMenu} />
    </div>
  );
};

export default UserNavBarComponent;

import styles from "./UserNavBarComponent.module.scss";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";
import { useState } from "react";
import UserNavModalMenuComponent from "../UserNavModalMenuComponent/UserNavModalMenuComponent";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";

const UserNavBarComponent = ({
  optionSelected,
  setOptionSelected,
  name,
  lastName,
}) => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    setOptionSelected(5);

    localStorage.removeItem("_role");
    localStorage.removeItem("_user");
    localStorage.removeItem("_tkn");
    localStorage.removeItem("_pth");

    navigate(routes.home);
  };

  return (
    <div className={styles.user_nav_bar}>
      <div className={styles.user_nav_bar_main}>
        <span className={styles.user_name}>{`${name} ${lastName}`}</span>
        <div className={styles.nav_buttons_container1}>
          <button
            className={`${styles.nav_button} ${
              optionSelected === 1 ? styles.menu_button_active : ""
            }`}
            onClick={() => setOptionSelected(1)}
          >
            Mis Sorteos
          </button>
          <button
            className={`${styles.nav_button} ${
              optionSelected === 2 ? styles.menu_button_active : ""
            }`}
            onClick={() => setOptionSelected(2)}
          >
            Crear Sorteo
          </button>
          <button
            className={`${styles.nav_button} ${
              optionSelected === 3 ? styles.menu_button_active : ""
            }`}
            onClick={() => setOptionSelected(3)}
          >
            Mi Perfil
          </button>
          <button
            className={`${styles.nav_button} ${
              optionSelected === 4 ? styles.menu_button_active : ""
            }`}
            onClick={() => setOptionSelected(4)}
          >
            Reportar Problema
          </button>
          <button
            className={`${styles.nav_button} ${
              optionSelected === 5 ? styles.menu_button_active : ""
            }`}
            onClick={handleLogout}
          >
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
              <img src={down} alt="" className={styles.arrow_icon} />
            ) : (
              <img src={up} alt="" className={styles.arrow_icon} />
            )}
          </button>
        </div>
      </div>
      <UserNavModalMenuComponent
        optionSelected={optionSelected}
        setOptionSelected={setOptionSelected}
        showNavMenu={showNavMenu}
      />
    </div>
  );
};

export default UserNavBarComponent;

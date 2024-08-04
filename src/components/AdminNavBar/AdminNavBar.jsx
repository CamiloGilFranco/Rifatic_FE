import { useState } from "react";
import styles from "./AdminNavBar.module.scss";
import logo from "../../assets/logo.png";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineDashboard,
  MdOutlineReport,
} from "react-icons/md";
import { FaLessThan, FaRegAddressCard } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { LiaDonateSolid } from "react-icons/lia";
import { GiCardAceSpades } from "react-icons/gi";
import { IoDiceOutline, IoSpeedometerOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";

const AdminNavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [option, setOption] = useState("");

  return (
    <div
      className={`${styles.lateral_nav_bar} 
      ${!showMenu ? styles.lateral_nav_bar_hidden : ""} 
      `}
    >
      <div className={styles.title_container}>
        <img
          src={logo}
          alt="Appril.ai_logo"
          className={`${styles.title_logo} ${
            !showMenu ? styles.title_logo_small : ""
          }`}
        />

        {/* {showMenu ? (
          <img
            src={Nlogo}
            alt="Appril.ai_logo2"
            className={`${styles.text_logo}`}
          />
        ) : null} */}
      </div>
      {showMenu ? (
        <div className={styles.user_data_container}>
          <span className={styles.company_name}>
            {/* authState.companyName */}EMPRESA
          </span>
          <span className={styles.user_name}>
            User: {/* authState.userName */}NOMBRE
          </span>
        </div>
      ) : null}

      <div className={styles.buttons_container}>
        <div
          className={`${styles.button}
            ${!showMenu ? styles.button_on_hide : ""} 
            ${option === "dashboard" ? styles.button_selected : ""}
            `}
          onClick={() => {
            navigate(`${routes.userRedirect}/dashboard`);
            setShowMenu(false);
          }}
        >
          <MdOutlineDashboard className={styles.button_icon} />
          {showMenu ? (
            <span className={styles.button_text}>Dashboard</span>
          ) : null}
        </div>

        <div
          className={`${styles.button}
            ${option === "resultados" ? styles.button_selected : ""}
            ${!showMenu ? styles.button_on_hide : ""} 
            `}
          onClick={() => {
            navigate(`${routes.userRedirect}/resultados`);
            setShowMenu(false);
          }}
        >
          <IoSpeedometerOutline className={styles.button_icon} />
          {showMenu ? (
            <span className={styles.button_text}>Resultados</span>
          ) : null}
        </div>

        <div
          className={`${styles.button}
            ${option === "sorteos" ? styles.button_selected : ""}
            ${!showMenu ? styles.button_on_hide : ""} 
            `}
          onClick={() => {
            navigate(`${routes.userRedirect}/sorteos`);
            setShowMenu(false);
          }}
        >
          <GiCardAceSpades className={styles.button_icon} />
          {showMenu ? (
            <span className={styles.button_text}>Sorteos</span>
          ) : null}
        </div>

        <div
          className={`${styles.button}
            ${option === "usuarios" ? styles.button_selected : ""}
            ${!showMenu ? styles.button_on_hide : ""} 
            `}
          onClick={() => {
            navigate(`${routes.userRedirect}/usuarios`);
            setShowMenu(false);
          }}
        >
          <FiUsers className={styles.button_icon} />
          {showMenu ? (
            <span className={styles.button_text}>Usuarios</span>
          ) : null}
        </div>

        <div
          className={`${styles.button}
            ${option === "reportes" ? styles.button_selected : ""}
            ${!showMenu ? styles.button_on_hide : ""} 
            `}
          onClick={() => {
            navigate(`${routes.userRedirect}/reportes`);
            setShowMenu(false);
          }}
        >
          <MdOutlineReport className={styles.button_icon} />
          {showMenu ? (
            <span className={styles.button_text}>Reportes</span>
          ) : null}
        </div>

        <div
          className={`${styles.button}
            ${option === "loterias" ? styles.button_selected : ""}
            ${!showMenu ? styles.button_on_hide : ""} 
            `}
          onClick={() => {
            navigate(`${routes.userRedirect}/loterias`);
            setShowMenu(false);
          }}
        >
          <IoDiceOutline className={styles.button_icon} />
          {showMenu ? (
            <span className={styles.button_text}>Loterías</span>
          ) : null}
        </div>

        <div
          className={`${styles.button}
            ${!showMenu ? styles.button_on_hide : ""} 
            ${option === "donaciones" ? styles.button_selected : ""}
            `}
          onClick={() => {
            navigate(`${routes.userRedirect}/donaciones`);
            setShowMenu(false);
          }}
        >
          <LiaDonateSolid className={styles.button_icon} />
          {showMenu ? (
            <span className={styles.button_text}>Donaciones</span>
          ) : null}
        </div>

        <div
          className={`${styles.button}
            ${!showMenu ? styles.button_on_hide : ""} 
            ${option === "administradores" ? styles.button_selected : ""}
            `}
          onClick={() => {
            navigate(`${routes.userRedirect}/administradores`);
            setShowMenu(false);
          }}
        >
          <MdOutlineAdminPanelSettings className={styles.button_icon} />
          {showMenu ? (
            <span className={styles.button_text}>Administradores</span>
          ) : null}
        </div>

        <div
          className={`${styles.button}
            ${!showMenu ? styles.button_on_hide : ""} 
            ${option === "mi_perfil" ? styles.button_selected : ""}
            `}
          onClick={() => {
            navigate(`${routes.userRedirect}/mi_perfil`);
            setShowMenu(false);
          }}
        >
          <FaRegAddressCard className={styles.button_icon} />
          {showMenu ? (
            <span className={styles.button_text}>Mi Perfil</span>
          ) : null}
        </div>

        <div
          className={`${styles.button}
            ${!showMenu ? styles.button_on_hide : ""} 
            `}
          onClick={() => {
            Cookies.remove(cookies.access);
            Cookies.remove(cookies.userId);
            Cookies.remove(cookies.access);
            Cookies.remove(cookies.userId);
            Cookies.remove(cookies.userName);
            Cookies.remove(cookies.companyId);
            Cookies.remove(cookies.companyName);
            Cookies.remove(cookies.rolId);
            Cookies.remove(cookies.email);
            dispatch(
              authData({
                userName: "",
                email: "",
                companyName: "",
              })
            );
            navigate(routes.home);
            setShowMenu(false);
          }}
        >
          <RiLogoutBoxLine className={styles.button_icon} />
          {showMenu ? (
            <span className={styles.button_text}>Log Out</span>
          ) : null}
        </div>
      </div>
      <div
        className={`${styles.float_button} 
        ${!showMenu ? styles.float_button_hide : ""} 
        `}
        onClick={() => setShowMenu(!showMenu)}
      >
        <FaLessThan className={styles.button_icon} />
      </div>
      {showMenu ? (
        <span className={styles.version}>{/* version */}1</span>
      ) : null}
    </div>
  );
};

export default AdminNavBar;

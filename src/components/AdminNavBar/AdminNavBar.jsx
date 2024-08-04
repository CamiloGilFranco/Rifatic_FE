import { useState } from "react";
import styles from "./AdminNavBar.module.scss";
import logo from "../../assets/logo.png";
import {
  MdOnlinePrediction,
  MdOutlineDashboard,
  MdOutlineDataset,
} from "react-icons/md";
import { FaLessThan, FaProjectDiagram, FaRegUser } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { FaCartShopping } from "react-icons/fa6";
import { RiLogoutBoxLine } from "react-icons/ri";

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
            ${option === "datasets" ? styles.button_selected : ""}
            ${!showMenu ? styles.button_on_hide : ""} 
            `}
          onClick={() => {
            navigate(`${routes.userRedirect}/datasets`);
            setShowMenu(false);
          }}
        >
          <MdOutlineDataset className={styles.button_icon} />
          {showMenu ? (
            <span className={styles.button_text}>Datasets</span>
          ) : null}
        </div>

        <div
          className={`${styles.button}
            ${option === "projects" ? styles.button_selected : ""}
            ${!showMenu ? styles.button_on_hide : ""} 
            `}
          onClick={() => {
            navigate(`${routes.userRedirect}/projects`);
            setShowMenu(false);
          }}
        >
          <FaProjectDiagram className={styles.button_icon} />
          {showMenu ? (
            <span className={styles.button_text}>Projects</span>
          ) : null}
        </div>

        <div
          className={`${styles.button}
            ${option === "predicts" ? styles.button_selected : ""}
            ${!showMenu ? styles.button_on_hide : ""} 
            `}
          onClick={() => {
            navigate(`${routes.userRedirect}/predicts`);
            setShowMenu(false);
          }}
        >
          <MdOnlinePrediction className={styles.button_icon} />
          {showMenu ? (
            <span className={styles.button_text}>Predicts</span>
          ) : null}
        </div>

        <div
          className={`${styles.button}
            ${option === "artificial_brains" ? styles.button_selected : ""}
            ${!showMenu ? styles.button_on_hide : ""} 
            `}
          onClick={() => {
            navigate(`${routes.userRedirect}/artificial_brains`);
            setShowMenu(false);
          }}
        >
          <LuBrainCircuit className={styles.button_icon} />
          {showMenu ? (
            <span className={styles.button_text}>Artificial Brains</span>
          ) : null}
        </div>

        <div
          className={`${styles.button}
            ${option === "marketplace" ? styles.button_selected : ""}
            ${!showMenu ? styles.button_on_hide : ""} 
            `}
          onClick={() => {
            navigate(`${routes.userRedirect}/marketplace`);
            setShowMenu(false);
          }}
        >
          <FaCartShopping className={styles.button_icon} />
          {showMenu ? (
            <span className={styles.button_text}>MarketPlace</span>
          ) : null}
        </div>

        <div
          className={`${styles.button}
            ${!showMenu ? styles.button_on_hide : ""} 
            ${option === "configuration" ? styles.button_selected : ""}
            `}
          onClick={() => {
            navigate(`${routes.userRedirect}/configuration`);
            setShowMenu(false);
          }}
        >
          <FaRegUser className={styles.button_icon} />
          {showMenu ? (
            <span className={styles.button_text}>Configuration</span>
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

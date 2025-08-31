import styles from "./HeaderV2.module.scss";
import LoginModal from "../LoginModal/LoginModal.jsx";
import { useSelector } from "react-redux";
import IconSelector from "../../ui/IconSelector/IconSelector.jsx";
import appName from "../../constants/appName.js";

const HeaderV2 = () => {
  const theme = useSelector((state) => state.themeSlice);

  return (
    <header
      className={styles.header}
      style={{
        background: theme.headerBackground,
        color: theme.textLight,
      }}
    >
      <div className={styles.container}>
        <div className={styles.brand}>
          <IconSelector name="dice" color={theme.textLight} size="24px" />
          <span className={styles.title}>{appName}</span>
        </div>

        <nav className={styles.nav}></nav>

        <LoginModal />
      </div>
    </header>
  );
};

export default HeaderV2;

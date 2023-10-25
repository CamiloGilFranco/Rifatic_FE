import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import UserNavBarComponent from "../../components/UserNavBarComponent/UserNavBarComponent";
import styles from "./User.module.scss";

const User = () => {
  return (
    <div className={styles.users_page}>
      <Header />
      <UserNavBarComponent />
      <Footer />
    </div>
  );
};

export default User;

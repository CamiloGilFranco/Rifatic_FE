import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import UserNavBarComponent from "../../components/UserNavBarComponent/UserNavBarComponent";
import styles from "./User.module.scss";
import MyRafflesComponent from "../../components/MyRafflesComponent/MyRafflesComponent";

const User = () => {
  const [optionSelected, setOptionSelected] = useState(1);

  return (
    <div className={styles.users_page}>
      <Header />
      <UserNavBarComponent
        optionSelected={optionSelected}
        setOptionSelected={setOptionSelected}
      />
      <MyRafflesComponent />
      <Footer />
    </div>
  );
};

export default User;

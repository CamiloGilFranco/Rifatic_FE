import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import UserNavBarComponent from "../../components/UserNavBarComponent/UserNavBarComponent";
import styles from "./User.module.scss";
import MyRafflesComponent from "../../components/MyRafflesComponent/MyRafflesComponent";
import { useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [optionSelected, setOptionSelected] = useState(1);

  const api = import.meta.env.VITE_API_URL;
  const params = useParams();

  console.log(params);

  const getUserInfo = async () => {
    const response = await axios.get();
  };

  useEffect(() => {
    getUserInfo();
  }, []);

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

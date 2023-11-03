import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import UserNavBarComponent from "../../components/UserNavBarComponent/UserNavBarComponent";
import styles from "./User.module.scss";
import MyRafflesComponent from "../../components/MyRafflesComponent/MyRafflesComponent";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const User = () => {
  const [optionSelected, setOptionSelected] = useState(1);
  const [userData, setUserData] = useState({});

  const api = import.meta.env.VITE_API_URL;
  const params = useParams();
  const token = localStorage.getItem("_tkn");

  const getUserInfo = async () => {
    try {
      const response = await axios.get(`${api}users/path`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { path: params.userPath },
      });

      setUserData(response.data.userData);
    } catch (error) {
      console.log(error);
      toast.error("Ocurrió un error, inténtalo de nuevo mas tarde");
    }
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
        name={userData.name}
        lastName={userData.last_name}
      />
      <MyRafflesComponent giveaways={userData.giveaways} />
      <Footer />
    </div>
  );
};

export default User;

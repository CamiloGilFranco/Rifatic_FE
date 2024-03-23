import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import UserNavBarComponent from "../../components/UserNavBarComponent/UserNavBarComponent";
import styles from "./User.module.scss";
import MyRafflesComponent from "../../components/MyRafflesComponent/MyRafflesComponent";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import CreateGiveawayComponent from "../../components/CreateGiveawayComponent/CreateGiveawayComponent";
import ReportProblem from "../../components/ReportProblem/ReportProblem";
import Cookies from "js-cookie";
import cookies from "../../constants/cookies";
import { HandlerFetchError } from "../../utils/FetchErrors";
import { envVariables } from "../../constants/envVariables";
import { routes } from "../../constants/routes";
import userOptions from "../../constants/userOtions";

const User = () => {
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const params = useParams();
  const token = Cookies.get(cookies._tkn);

  const getUserInfo = async () => {
    try {
      const response = await axios.get(`${envVariables.API_URL}users/path`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { path: params.userPath },
      });

      setUserData(response.data.userData);
    } catch (error) {
      HandlerFetchError(error, navigate);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const showUserComponent = () => {
    let paramsKeys = Object.keys(params);

    if (paramsKeys.length === 1) {
      navigate(
        `${routes.user}/${Cookies.get(cookies._pth)}/${userOptions.option1}`
      );
    }

    if (Object.keys(params).length === 2) {
      switch (params.option) {
        case userOptions.option1:
          return (
            <MyRafflesComponent
              giveaways={userData.giveaways}
              phoneNumber={userData.phone}
            />
          );
        case userOptions.option2:
          return (
            <CreateGiveawayComponent
              phoneNumber={userData.phone}
              userData={userData}
              setUserData={setUserData}
            />
          );
        case userOptions.option4:
          return <ReportProblem />;
        default:
          return null;
      }
    }
  };

  return (
    <div className={styles.users_page}>
      <Header />
      <UserNavBarComponent name={userData.name} lastName={userData.last_name} />
      {showUserComponent()}
      <Footer />
    </div>
  );
};

export default User;

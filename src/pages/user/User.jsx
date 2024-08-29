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
import RaffleDetails from "../../components/RaffleDetails/RaffleDetails";
import { useSelector } from "react-redux";

const User = () => {
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const params = useParams();
  const auth = useSelector((state) => state.authSlice);

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    let paramsKeys = Object.keys(params);

    if (paramsKeys.length === 1) {
      navigate(`${routes.user}/${userOptions.option1}`);
    }
  }, []);

  const getUserInfo = async () => {
    try {
      const response = await axios.get(
        `${envVariables.API_URL}users/get-user-info`,
        {
          headers: { Authorization: `Bearer ${auth._tkn}` },
          params: { email: auth._email },
        }
      );

      setUserData(response.data.userData);
    } catch (error) {
      HandlerFetchError(error, navigate);
    }
  };

  const showUserComponent = () => {
    let paramsKeys = Object.keys(params);

    if (paramsKeys.length === 1) {
      switch (params.option) {
        case userOptions.option1:
          return <MyRafflesComponent phoneNumber={userData.phone} />;
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

    if (paramsKeys.length === 2) {
      if (params.option === userOptions.option5) {
        return <RaffleDetails />;
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

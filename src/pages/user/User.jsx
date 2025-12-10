import { useEffect, useState } from "react";
import Header from "../../components/Header/Header.jsx";
import UserNavBarComponent from "../../components/UserNavBarComponent/UserNavBarComponent.jsx";
import styles from "./User.module.scss";
import MyRafflesComponent from "../../components/MyRafflesComponent/MyRafflesComponent.jsx";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CreateGiveawayComponent from "../../components/CreateGiveawayComponent/CreateGiveawayComponent.jsx";
import ReportProblem from "../../components/ReportProblem/ReportProblem.jsx";
import { HandlerFetchError } from "../../utils/FetchErrors.jsx";
import { envVariables } from "../../constants/envVariables.js";
import { routes } from "../../constants/routes.js";
import userOptions from "../../constants/userOtions.js";
import RaffleDetails from "../../components/RaffleDetails/RaffleDetails.jsx";
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

  //TODO dejar datos de usuario en auth

  const getUserInfo = async () => {
    try {
      const response = await axios.get(
        `${envVariables.API_URL}users/get-user-info`,
        {
          headers: { Authorization: `Bearer ${auth._tkn}` },
          params: { email: auth._email },
        }
      );

      console.log(response.data);

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
    </div>
  );
};

export default User;

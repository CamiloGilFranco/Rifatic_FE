import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import cookies from "../../constants/cookies";
import { toast } from "react-toastify";
import { routes } from "../../constants/routes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandlerFetchError } from "../../utils/FetchErrors";
import axios from "axios";
import { envVariables } from "../../constants/envVariables";
import { authData } from "../../store/slices/authSlice";

const PrivateRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();
  const auth = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    validate();
  }, []);

  useEffect(() => {
    if (auth._tkn) {
      setIsLoading(false);
      setIsAuthenticated(true);
    }
  }, [auth]);

  const validate = async () => {
    if (auth._tkn && auth._role && auth._email) {
      setIsAuthenticated(true);
      return;
    }

    const emailCookie = Cookies.get(cookies._email);
    const tokenCookie = Cookies.get(cookies._tkn);

    if (!emailCookie || !tokenCookie) {
      toast.error("No has iniciado sesión");
      navigate(routes.home);

      return;
    } else {
      try {
        const logResponse = await axios.get(
          `${envVariables.API_URL}users/verify-log`,
          {
            headers: { Authorization: `Bearer ${tokenCookie}` },
            params: { email: emailCookie },
          }
        );

        dispatch(
          authData({
            _tkn: tokenCookie,
            _role: logResponse.data.user_data.role,
            _email: logResponse.data.user_data.email,
          })
        );
      } catch (error) {
        HandlerFetchError(error, navigate);
      }
    }

    setIsLoading(false);
  };

  if (isLoading) {
    return <div style={{ color: "black" }}>Loading...</div>;
  }

  return isAuthenticated ? children : null;
};

export default PrivateRoute;

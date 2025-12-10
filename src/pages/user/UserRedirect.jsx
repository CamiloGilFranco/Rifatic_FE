import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes.js";
import { useEffect } from "react";
import Cookies from "js-cookie";
import cookies from "../../constants/cookies.js";

const UserRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`${routes.user}/my-raffles`);
  }, []);

  return;
};

export default UserRedirect;

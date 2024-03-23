import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import cookies from "../../constants/cookies";
import { toast } from "react-toastify";
import { routes } from "../../constants/routes";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  const _tkn = Cookies.get(cookies._tkn);

  useEffect(() => {
    validate();
  }, []);

  let showed = false;

  const validate = () => {
    if (!_tkn) {
      if (!showed) {
        toast.error("No has iniciado sesión");
      }
      showed = true;
      navigate(routes.home);
    } else {
      return true;
    }
  };

  return validate() ? children : null;
};

export default PrivateRoute;

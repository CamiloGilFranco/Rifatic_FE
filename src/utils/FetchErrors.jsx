import Cookies from "js-cookie";
import { toast } from "react-toastify";
import cookies from "../constants/cookies";
import { routes } from "../constants/routes";

export const HandlerFetchError = (error, navigate, dispatch) => {
  console.log(error);

  if (error?.response?.data?.message === "user couldn't be found") {
    toast.error("Usuario no encontrado");

    Cookies.remove(cookies._tkn);
    Cookies.remove(cookies._email);

    navigate(routes.home);
  } else if (error?.response?.data?.message) {
    toast.error(error?.response?.data?.message);
  } else {
    toast.error("Ocurrió un error, intenta de nuevo mas tarde");
  }
};

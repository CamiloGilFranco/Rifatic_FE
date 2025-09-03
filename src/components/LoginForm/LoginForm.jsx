import { useDispatch, useSelector } from "react-redux";
import styles from "../LoginModal/LoginModal.module.scss";
import InputField from "../../ui/InputField/InputField";
import { useEffect, useRef, useState } from "react";
import { post } from "../../api/queries";
import apiRoutes from "../../api/apiRoutes";
import { authData } from "../../store/slices/authSlice";
import cookies from "../../constants/cookies";
import Cookies from "js-cookie";
import { routes } from "../../constants/routes";
import userOptions from "../../constants/userOtions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { HandlerFetchError } from "../../utils/FetchErrors";
import MyButton from "../../ui/MyButton/MyButton";

const LoginForm = ({ setShowModule }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = useSelector((state) => state.themeSlice);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailRef = useRef(null);

  useEffect(() => {
    setTimeout(() => emailRef.current?.focus(), 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginResponse = await post({
        path: apiRoutes.login,
        payload: { email, password },
        auth: false,
      });

      dispatch(
        authData({
          _tkn: loginResponse.data.token,
          _role: loginResponse.data.role,
          _email: loginResponse.data.email,
        })
      );

      Cookies.set(cookies._email, loginResponse.data.email);
      Cookies.set(cookies._tkn, loginResponse.data.token);

      toast.success("Sesión iniciada");
      navigate(`${routes.user}/${userOptions.option1}`);
    } catch (error) {
      HandlerFetchError(error, navigate);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputField
        icon="mail"
        type="email"
        placeholder="tu@email.com"
        inputRef={emailRef}
        id="email"
        value={email}
        setter={(value) => {
          setEmail(value);
        }}
        label="Correo Electrónico"
      />

      <InputField
        icon="password"
        type="password"
        placeholder="••••••••"
        id="password"
        value={password}
        setter={(value) => {
          setPassword(value);
        }}
        label="Contraseña"
      />

      <MyButton
        text="Iniciar Sesión"
        backgroundColor={theme.intence}
        fontColor={theme.bgLight}
        type="submit"
      />

      <div className={styles.links}>
        <a href="#" className={styles.link} style={{ color: theme.intence }}>
          ¿Olvidaste tu contraseña?
        </a>
        <p className={styles.secondaryText} style={{ color: theme.textMiddle }}>
          ¿No tienes cuenta?{" "}
          <span
            onClick={() => setShowModule("signup")}
            className={styles.linkStrong}
            style={{ color: theme.intence }}
          >
            Regístrate aquí
          </span>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;

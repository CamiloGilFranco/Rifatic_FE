import { useEffect, useRef, useState } from "react";
import styles from "./LoginModal.module.scss";
import MyButton from "../../ui/MyButton/MyButton";
import InputField from "../../ui/InputField/InputField";
import { useDispatch, useSelector } from "react-redux";
import { post } from "../../api/queries";
import Cookies from "js-cookie";
import cookies from "../../constants/cookies";
import { useNavigate } from "react-router-dom";
import { authData } from "../../store/slices/authSlice";
import { toast } from "react-toastify";
import { routes } from "../../constants/routes";
import userOptions from "../../constants/userOtions";
import { HandlerFetchError } from "../../utils/FetchErrors";
import apiRoutes from "../../api/apiRoutes";

const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dialogRef = useRef(null);
  const emailRef = useRef(null);

  const theme = useSelector((state) => state.themeSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      window.addEventListener("keydown", onKey);
      setTimeout(() => emailRef.current?.focus(), 0);
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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
    <>
      <MyButton
        text="Iniciar Sesión"
        icon="login"
        event={() => setOpen(true)}
        backgroundColor={theme.bgLight}
      />

      {open && (
        <div
          className={styles.backdrop}
          role="presentation"
          onClick={() => setOpen(false)}
          style={{ background: theme.transparentBackground }}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-title"
            onClick={(e) => e.stopPropagation()}
            ref={dialogRef}
            style={{ background: theme.bgLight, boxShadow: theme.modalShadow }}
          >
            <div
              className={styles.header}
              style={{ background: theme.bgLight, color: theme.textDark }}
            >
              <h2 id="login-title" className={styles.title}>
                Iniciar Sesión
              </h2>
              <p
                className={styles.subtitle}
                style={{ color: theme.textMiddle }}
              >
                Accede a tu cuenta
              </p>
              <button
                className={styles.close}
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                style={{ color: theme.textMiddle }}
              >
                ×
              </button>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label htmlFor="email" style={{ color: theme.textDark }}>
                Correo Electrónico
              </label>
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
              />

              <label htmlFor="password" style={{ color: theme.textDark }}>
                Contraseña
              </label>
              <InputField
                icon="password"
                type="password"
                placeholder="••••••••"
                id="password"
                value={password}
                setter={(value) => {
                  setPassword(value);
                }}
              />

              <MyButton
                text="Iniciar Sesión"
                backgroundColor={theme.intence}
                fontColor={theme.bgLight}
                type="submit"
              />

              <div className={styles.links}>
                <a
                  href="#"
                  className={styles.link}
                  style={{ color: theme.intence }}
                >
                  ¿Olvidaste tu contraseña?
                </a>
                <p
                  className={styles.secondaryText}
                  style={{ color: theme.textMiddle }}
                >
                  ¿No tienes cuenta?{" "}
                  <a
                    href="#"
                    className={styles.linkStrong}
                    style={{ color: theme.intence }}
                  >
                    Regístrate aquí
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;

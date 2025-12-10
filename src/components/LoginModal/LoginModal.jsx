import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./LoginModal.module.scss";
import MyButton from "../../ui/MyButton/MyButton.jsx";
import { useSelector } from "react-redux";
import LoginForm from "../LoginForm/LoginForm.jsx";
import SingupForm from "./../SingupForm/SingupForm.jsx";
import TermsAndConditionsModalComponent from "../TermsAndConditionsModalComponent/TermsAndConditionsModalComponent.jsx";
import SingupVerification from "../SingupVerification/SingupVerification.jsx";
import appName from "../../constants/appName.js";

const modulesData = {
  login: {
    title: "Iniciar Sesión",
    subtitle: "Accede a tu cuenta",
    form: LoginForm,
  },
  signup: {
    title: "Crear Cuenta",
    subtitle: `Unete a ${appName}`,
    form: SingupForm,
  },
  verification: {
    title: "Verificar Cuenta",
    subtitle: "Ingresa el código de verificación",
    form: SingupVerification,
  },
  terminos: {
    title: "Crear Cuenta",
    subtitle: `Unete a ${appName}`,
    form: TermsAndConditionsModalComponent,
  },
};

const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState("");
  const [showModule, setShowModule] = useState("login");

  const dialogRef = useRef(null);

  const theme = useSelector((state) => state.themeSlice);

  const ModuleSelected = useMemo(() => {
    return modulesData[showModule].form;
  }, [showModule]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      window.addEventListener("keydown", onKey);
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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
                {modulesData[showModule].title}
              </h2>
              <p
                className={styles.subtitle}
                style={{ color: theme.textMiddle }}
              >
                {modulesData[showModule].subtitle}
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

            <ModuleSelected
              token={token}
              setToken={setToken}
              setShowModule={setShowModule}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;

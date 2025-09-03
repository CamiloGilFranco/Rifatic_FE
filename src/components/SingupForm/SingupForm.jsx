import styles from "../LoginModal/LoginModal.module.scss";
import { useEffect, useRef, useState } from "react";
import InputField from "../../ui/InputField/InputField";
import { useSelector } from "react-redux";
import MyButton from "../../ui/MyButton/MyButton";
import { HandlerFetchError } from "../../utils/FetchErrors";
import { post } from "../../api/queries";
import { useNavigate } from "react-router-dom";
import apiRoutes from "../../api/apiRoutes";

const SingupForm = ({ setToken, setShowModule }) => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [terms, setTerms] = useState(false);

  const [errorNombres, setErrorNombres] = useState(false);
  const [errorApellidos, setErrorApellidos] = useState(false);
  const [errorTelefono, setErrorTelefono] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [errorTerms, setErrorTerms] = useState(false);

  const theme = useSelector((state) => state.themeSlice);
  const navigate = useNavigate();

  const nombresRef = useRef(null);

  useEffect(() => {
    setTimeout(() => nombresRef.current?.focus(), 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;

    if (nombres.length === 0) {
      setErrorNombres(true);
      isValid = false;
    } else {
      setErrorNombres(false);
    }

    if (apellidos.length === 0) {
      setErrorApellidos(true);
      isValid = false;
    } else {
      setErrorApellidos(false);
    }

    if (telefono.length !== 10) {
      setErrorTelefono(true);
      isValid = false;
    } else {
      setErrorTelefono(false);
    }

    if (password.length === 0) {
      setErrorPassword(true);
      isValid = false;
    } else {
      setErrorPassword(false);
    }

    if (passwordConfirm !== password) {
      setErrorConfirmPassword(true);
      isValid = false;
    } else {
      setErrorConfirmPassword(false);
    }

    if (!terms) {
      setErrorTerms(true);
      isValid = false;
    } else {
      setErrorTerms(false);
    }

    if (!isValid) {
      return;
    }

    try {
      const singupResponse = await post({
        path: apiRoutes.newUser,
        payload: {
          name: nombres,
          last_name: apellidos,
          phone: telefono,
          email,
          password,
        },
        auth: false,
      });

      setToken(singupResponse.token);
      setShowModule("verification");
    } catch (error) {
      HandlerFetchError(error, navigate);

      console.log(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputField
        icon="person"
        type="text"
        placeholder="Juan"
        id="nombres"
        value={nombres}
        setter={(value) => {
          setNombres(value);
        }}
        inputRef={nombresRef}
        label="Nombres"
        error={errorNombres}
      />

      <InputField
        icon="person"
        type="text"
        placeholder="Perez"
        id="apellidos"
        value={apellidos}
        setter={(value) => {
          setApellidos(value);
        }}
        label="Apellidos"
        error={errorApellidos}
      />

      <InputField
        icon="phone"
        type="tel"
        placeholder="124567890"
        id="telefono"
        value={telefono}
        setter={(value) => {
          setTelefono(value);
        }}
        label="Teléfono"
        error={errorTelefono}
      />

      <InputField
        icon="mail"
        type="email"
        placeholder="tu@email.com"
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
        error={errorPassword}
      />

      <InputField
        icon="password"
        type="password"
        placeholder="••••••••"
        id="passwordConfirm"
        value={passwordConfirm}
        setter={(value) => {
          setPasswordConfirm(value);
        }}
        label="Confirmar Contraseña"
        error={errorConfirmPassword}
      />

      <label
        htmlFor="terms"
        style={{ color: errorTerms ? theme.error : theme.textDark }}
      >
        <input
          type="checkbox"
          id="terms"
          className={styles.checkbox}
          checked={terms}
          onChange={(e) => setTerms(e.target.checked)}
        />
        Acepto{" "}
        <span
          className={styles.link}
          style={{ color: theme.intence }}
          onClick={() => setShowModule("terminos")}
        >
          la Política de privacidad y Términos y Condiciones
        </span>
      </label>

      <MyButton
        text="Crear Cuenta"
        backgroundColor={theme.intence}
        fontColor={theme.bgLight}
        type="submit"
        event={handleSubmit}
      />

      <div className={styles.links}>
        <span
          className={styles.link}
          style={{ color: theme.intence }}
          onClick={() => setShowModule("login")}
        >
          Iniciar Sesión
        </span>
      </div>
    </form>
  );
};

export default SingupForm;

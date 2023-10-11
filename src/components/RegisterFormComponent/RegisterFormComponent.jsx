import { useState } from "react";
import styles from "./RegisterFormComponent.module.scss";

const RegisterFormComponent = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorLastName, setErrorLastName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const inputEmailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (name.length === 0) {
      setErrorName(true);
      isValid = false;
    } else {
      setErrorName(false);
    }

    if (lastName.length === 0) {
      setErrorLastName(true);
      isValid = false;
    } else {
      setErrorLastName(false);
    }

    if (phone.length !== 10) {
      setErrorPhone(true);
      isValid = false;
    } else {
      setErrorPhone(false);
    }

    if (!inputEmailRegEx.test(email)) {
      setErrorEmail(true);
      isValid = false;
    } else {
      setErrorEmail(false);
    }

    if (password.length === 0) {
      setErrorPassword(true);
      isValid = false;
    } else {
      setErrorPassword(false);
    }

    if (confirmPassword !== password) {
      setErrorConfirmPassword(true);
      isValid = false;
    } else {
      setErrorConfirmPassword(false);
    }

    if (!isValid) {
      return;
    }

    console.log("R");
  };

  return (
    <div className={styles.register_form_component}>
      <h2 className={styles.title}>Regístrate Aquí</h2>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="sign-in-name-input" className={styles.label}>
          Nombres
        </label>
        <input
          type="text"
          className={styles.input}
          value={name}
          id="sign-in-name-input"
          placeholder="Nombres"
          onChange={(e) => setName(e.target.value)}
        />
        {errorName ? (
          <span className={styles.error_message}>
            *Debes escribir tu nombre
          </span>
        ) : null}

        <label htmlFor="sign-in-last-name-input" className={styles.label}>
          Apellidos
        </label>
        <input
          type="text"
          className={styles.input}
          value={lastName}
          id="sign-in-last-name-input"
          placeholder="Apellidos"
          onChange={(e) => setLastName(e.target.value)}
        />
        {errorLastName ? (
          <span className={styles.error_message}>
            *Debes escribir tus apellidos
          </span>
        ) : null}

        <label htmlFor="sign-in-phone-input" className={styles.label}>
          Teléfono
        </label>
        <input
          type="text"
          className={styles.input}
          value={phone}
          id="sign-in-phone-input"
          placeholder="Teléfono"
          onChange={(e) => setPhone(e.target.value)}
        />
        {errorPhone ? (
          <span className={styles.error_message}>
            *Debes escribir tu numero de teléfono
          </span>
        ) : null}

        <label htmlFor="sign-in-email-input" className={styles.label}>
          Email
        </label>
        <input
          type="text"
          className={styles.input}
          value={email}
          id="sign-in-email-input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {errorEmail ? (
          <span className={styles.error_message}>
            *Debes escribir un email valido
          </span>
        ) : null}

        <label htmlFor="sign-in-password-input" className={styles.label}>
          Contraseña
        </label>
        <input
          type="password"
          className={styles.input}
          value={password}
          id="sign-in-password-input"
          placeholder="contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorPassword ? (
          <span className={styles.error_message}>
            *Debes escribir una contraseña
          </span>
        ) : null}

        <label
          htmlFor="sign-in-confirm-password-input"
          className={styles.label}
        >
          Confirmar Contraseña
        </label>
        <input
          type="password"
          className={styles.input}
          value={confirmPassword}
          placeholder="Confirmar Contraseña"
          id="sign-in-confirm-password-input"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errorConfirmPassword ? (
          <span className={styles.error_message}>
            *Las contraseñas no coinciden
          </span>
        ) : null}

        <input
          type="submit"
          value={"Registrarme"}
          className={styles.submit_button}
        />
      </form>
    </div>
  );
};

export default RegisterFormComponent;

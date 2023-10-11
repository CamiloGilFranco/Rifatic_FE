import styles from "./LogInFormComponent.module.scss";
import logo from "../../assets/logo.png";
import { useState } from "react";

const LogInFormComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.log_in_form_component}>
      <img src={logo} alt="" className={styles.logo} />
      <h2 className={styles.title}>Iniciar Sesión</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="" className={styles.label}>
          Email
        </label>
        <input
          type="text"
          className={styles.input}
          value={email}
          id="log-in-email-input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="" className={styles.label}>
          Contraseña
        </label>
        <input
          type="password"
          className={styles.input}
          value={password}
          id="log-in-password-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          className={styles.submit_button}
          value={"Iniciar Sesión"}
        />
      </form>
    </div>
  );
};

export default LogInFormComponent;

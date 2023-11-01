import styles from "./LogInFormComponent.module.scss";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";

const LogInFormComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const api = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${api}local/login`, {
        email,
        password,
      });
      console.log(response.data.data);

      localStorage.setItem("_role", response.data.data.role);
      localStorage.setItem("_user", response.data.data.email);
      localStorage.setItem("_tkn", response.data.data.token);

      toast.success("Sesión iniciada");
      navigate(routes.home);
    } catch (error) {
      console.log(error);
      toast.error("Ocurrió un problema, inténtalo de nuevo mas tarde");
    }
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
      <span className={styles.password_link}>¿Olvidaste tu contraseña?</span>
    </div>
  );
};

export default LogInFormComponent;

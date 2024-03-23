import { useState } from "react";
import styles from "./RegisterCodeConfirmationComponent.module.scss";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import { envVariables } from "../../constants/envVariables";

const RegisterCodeConfirmationComponent = ({ token }) => {
  const [verificationCode, setVerificationCode] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${envVariables.API_URL}local/verify`, {
        token,
        verificationCode,
      });

      await Swal.fire({
        title: `¡Usuario verificado!`,
        text: `Ya puedes disfrutar de todo lo que RIFATIC te ofrece`,
        icon: "success",
      });

      navigate(routes.iniciar_sesion);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className={styles.register_code_component}>
      <h2 className={styles.main_message}>
        Te hemos enviado un email con el código de verificación, si no te llegó
        revisa tu carpeta de spam
      </h2>
      <form className={styles.form_container}>
        <label
          htmlFor="register-confirmation-code-input"
          className={styles.label}
        >
          Código de verificación
        </label>
        <input
          type="text"
          className={styles.input_code}
          value={verificationCode}
          id="register-confirmation-code-input"
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <button className={styles.verify_button} onClick={handleSubmit}>
          Verificar
        </button>
      </form>
      <p className={styles.info_text}>
        **El código que te enviamos tiene una vigencia de 5 minutos, si no
        terminas tu registro en este tiempo deberás iniciar de nuevo tu proceso
        de registro
      </p>
    </div>
  );
};

export default RegisterCodeConfirmationComponent;

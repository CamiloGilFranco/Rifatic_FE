import { useEffect, useRef, useState } from "react";
import InputField from "../../ui/InputField/InputField";
import styles from "./SingupVerification.module.scss";
import { useSelector } from "react-redux";
import MyButton from "../../ui/MyButton/MyButton";
import { HandlerFetchError } from "../../utils/FetchErrors";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiRoutes from "../../api/apiRoutes";
import { put } from "../../api/queries";

const SingupVerification = ({ token, setShowModule }) => {
  const [code, setCode] = useState("");

  const navigate = useNavigate();

  const codeRef = useRef(null);

  useEffect(() => {
    setTimeout(() => codeRef.current?.focus(), 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await put({
        path: apiRoutes.verifyNewUser,
        payload: {
          token,
          verificationCode: code,
        },
      });

      if (response.message === "User verified") {
        toast.success("Usuario verificado");
        setShowModule("login");
      }
    } catch (error) {
      HandlerFetchError(error, navigate);
    }
  };

  const theme = useSelector((state) => state.themeSlice);
  return (
    <form
      style={{ color: theme.textDark }}
      className={styles.singupVerification}
      onSubmit={handleSubmit}
    >
      <h2 className={styles.title}>
        Te hemos enviado un email con el código de verificación, si no te llegó
        revisa tu carpeta de spam
      </h2>

      <InputField
        inputRef={codeRef}
        icon="key"
        type="text"
        placeholder="xxxxxx"
        id="code"
        value={code}
        label="Codigo de verificacion"
        setter={(value) => {
          setCode(value);
        }}
      />

      <MyButton
        text="Verificar"
        backgroundColor={theme.intence}
        fontColor={theme.bgLight}
        type="submit"
      />

      <p className={styles.warning} style={{ color: theme.textDark }}>
        **El código que te enviamos tiene una vigencia de 5 minutos, si no
        terminas tu registro en este tiempo deberás iniciar de nuevo tu proceso
        de registro
      </p>
    </form>
  );
};

export default SingupVerification;

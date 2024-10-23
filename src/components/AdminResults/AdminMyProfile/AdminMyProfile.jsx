import { useState } from "react";
import styles from "./AdminMyProfile.module.scss";

const AdminMyProfile = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [actualPassword, setActualPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleUpdateData = async () => {
    console.log("aqui funcion de actualizar datos");
  };

  const handleUpdatePassword = async () => {
    console.log("aqui funcion de actualizar contraseña");
  };

  return (
    <div className={styles.admin_my_profile}>
      <form className={styles.update_my_data_form} onSubmit={handleUpdateData}>
        <span className={styles.form_title}>Actualizar mis Datos</span>
        <div className={styles.input_container}>
          <label
            htmlFor="update_admin_email_input"
            className={styles.input_label}
          >
            Email
          </label>
          <input
            type="text"
            className={styles.form_input}
            id="update_admin_email_input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.input_container}>
          <label
            htmlFor="update_admin_phone_input"
            className={styles.input_label}
          >
            Teléfono
          </label>
          <input
            type="text"
            className={styles.form_input}
            id="update_admin_phone_input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className={styles.buttons_container}>
          <span className={styles.form_button} onClick={handleUpdateData}>
            Actualizar Datos
          </span>
        </div>
      </form>

      <form
        className={styles.update_my_data_form}
        onSubmit={handleUpdatePassword}
      >
        <span className={styles.form_title}>Actualizar mi Contraseña</span>

        <div className={styles.input_container}>
          <label
            htmlFor="update_current_admin_password_input"
            className={styles.input_label}
          >
            Contraseña Actual
          </label>
          <input
            type="password"
            className={styles.form_input}
            id="update_current_admin_password_input"
            value={actualPassword}
            onChange={(e) => setActualPassword(e.target.value)}
          />
        </div>

        <div className={styles.input_container}>
          <label
            htmlFor="update_new_admin_password_input"
            className={styles.input_label}
          >
            Nueva Contraseña
          </label>
          <input
            type="password"
            className={styles.form_input}
            id="update_new_admin_password_input"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div className={styles.input_container}>
          <label
            htmlFor="update_confirm_admin_password_input"
            className={styles.input_label}
          >
            Confirmar Contraseña
          </label>
          <input
            type="password"
            className={styles.form_input}
            id="update_confirm_admin_password_input"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </div>
        <div className={styles.buttons_container}>
          <span className={styles.form_button} onClick={handleUpdatePassword}>
            Actualizar contraseña
          </span>
        </div>
      </form>
    </div>
  );
};

export default AdminMyProfile;

import { useState } from "react";
import styles from "./AdminAdministrators.module.scss";
import { TiDeleteOutline } from "react-icons/ti";

const adminsList = [
  {
    name: "nombre del admin",
    email: "email del admin",
    phone: "teléfono del admin",
  },
  {
    name: "nombre del admin",
    email: "email del admin",
    phone: "teléfono del admin",
  },
  {
    name: "nombre del admin",
    email: "email del admin",
    phone: "teléfono del admin",
  },
  {
    name: "nombre del admin",
    email: "email del admin",
    phone: "teléfono del admin",
  },
  {
    name: "nombre del admin",
    email: "email del admin",
    phone: "teléfono del admin",
  },
  {
    name: "nombre del admin",
    email: "email del admin",
    phone: "teléfono del admin",
  },
  {
    name: "nombre del admin",
    email: "email del admin",
    phone: "teléfono del admin",
  },
  {
    name: "nombre del admin",
    email: "email del admin",
    phone: "teléfono del admin",
  },
  {
    name: "nombre del admin",
    email: "email del admin",
    phone: "teléfono del admin",
  },
  {
    name: "nombre del admin",
    email: "email del admin",
    phone: "teléfono del admin",
  },
  {
    name: "nombre del admin",
    email: "email del admin",
    phone: "teléfono del admin",
  },
  {
    name: "nombre del admin",
    email: "email del admin",
    phone: "teléfono del admin",
  },
  {
    name: "nombre del admin",
    email: "email del admin",
    phone: "teléfono del admin",
  },
  {
    name: "nombre del admin",
    email: "email del admin",
    phone: "teléfono del admin",
  },
  {
    name: "nombre del admin",
    email: "email del admin",
    phone: "teléfono del admin",
  },
  {
    name: "nombre del admin",
    email: "email del admin",
    phone: "teléfono del admin",
  },
  {
    name: "nombre del admin",
    email: "email del admin",
    phone: "teléfono del admin",
  },
  {
    name: "nombre del admin asldjkan sopkd alks dpoaks dpoia sndpia spodk aposid poaisb d",
    email:
      "email del admin  aolsjd aosj dolajk sdoja sodaio0s doas doa sdoj ask dpaskl ndals ",
    phone:
      "teléfono del admin opinaspdinaopisn dlñaks dja sodj aosjd oajs dojabnsdoj bas dja kos",
  },
];

const AdminAdministrators = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreateAdmin = (event) => {
    event.preventDefault();

    console.log("aquí la función submit ");
  };

  return (
    <div className={styles.admin_administrators}>
      <form className={styles.new_admin_form} onSubmit={handleCreateAdmin}>
        <span className={styles.form_title}>Nuevo Administrador</span>
        <div className={styles.input_container}>
          <label htmlFor="new_admin_email_input" className={styles.input_label}>
            Email
          </label>
          <input
            type="text"
            className={styles.form_input}
            id="new_admin_email_input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="new_admin_name_input" className={styles.input_label}>
            Nombre
          </label>
          <input
            type="text"
            className={styles.form_input}
            id="new_admin_name_input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.input_container}>
          <label
            htmlFor="new_admin_last_name_input"
            className={styles.input_label}
          >
            Apellido
          </label>
          <input
            type="text"
            className={styles.form_input}
            id="new_admin_last_name_input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="new_admin_phone_input" className={styles.input_label}>
            Teléfono
          </label>
          <input
            type="text"
            className={styles.form_input}
            id="new_admin_phone_input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={styles.input_container}>
          <label
            htmlFor="new_admin_password_input"
            className={styles.input_label}
          >
            Contraseña
          </label>
          <input
            type="password"
            className={styles.form_input}
            id="new_admin_password_input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.input_container}>
          <label
            htmlFor="new_admin_confirm_password_input"
            className={styles.input_label}
          >
            Confirmar Contraseña
          </label>
          <input
            type="password"
            className={styles.form_input}
            id="new_admin_confirm_password_input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className={styles.buttons_container}>
          <span className={styles.form_button} onClick={handleCreateAdmin}>
            Crear Administrador
          </span>
        </div>
      </form>
      <div className={styles.admins_list}>
        <div className={styles.admins_header}>
          <span className={styles.item_name}>Nombre de Usuario</span>
          <span className={styles.item_name}>Email</span>
          <span className={styles.item_name}>Teléfono</span>
          <span className={styles.see_details_button}></span>
        </div>
        {adminsList.map((item, itemIndex) => {
          return (
            <div className={styles.admin_item} key={itemIndex}>
              <span className={styles.item_name}>{item.name}</span>
              <span className={styles.item_name}>{item.email}</span>
              <span className={styles.item_name}>{item.phone}</span>
              <span className={styles.see_details_button}>
                <TiDeleteOutline
                  className={styles.details_icon}
                  onClick={() => {
                    console.log("función de eliminar admin");
                  }}
                />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminAdministrators;

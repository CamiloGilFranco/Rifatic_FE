import styles from "./UserNavModalMenuComponent.module.scss";

const UserNavModalMenuComponent = ({
  optionSelected,
  setOptionSelected,
  showNavMenu,
}) => {
  return (
    <div
      className={`${showNavMenu ? styles.user_nav_modal : styles.hide_menu}`}
    >
      <button
        className={`${styles.user_nav_modal_button} ${
          optionSelected === 1 ? styles.menu_button_active : ""
        }`}
        onClick={() => setOptionSelected(1)}
      >
        Mis Sorteos
      </button>
      <button
        className={`${styles.user_nav_modal_button} ${
          optionSelected === 2 ? styles.menu_button_active : ""
        }`}
        onClick={() => setOptionSelected(2)}
      >
        Crear Sorteo
      </button>
      <button
        className={`${styles.user_nav_modal_button} ${
          optionSelected === 3 ? styles.menu_button_active : ""
        }`}
        onClick={() => setOptionSelected(3)}
      >
        Mi Perfil
      </button>
      <button
        className={`${styles.user_nav_modal_button} ${
          optionSelected === 4 ? styles.menu_button_active : ""
        }`}
        onClick={() => setOptionSelected(4)}
      >
        Reportar Problema
      </button>
      <button
        className={`${styles.user_nav_modal_button} ${
          optionSelected === 5 ? styles.menu_button_active : ""
        }`}
        onClick={() => setOptionSelected(5)}
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default UserNavModalMenuComponent;

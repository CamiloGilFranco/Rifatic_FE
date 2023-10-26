import styles from "./UserNavBarComponent.module.scss";

const UserNavBarComponent = () => {
  return (
    <div className={styles.user_nav_bar}>
      <span className={styles.user_name}>Adrian Camilo Gil Franco</span>
      <div className={styles.nav_buttons_container}>
        <button className={styles.nav_button}>Reportar Problema</button>
        <button className={styles.nav_button}>Cerrar Sesión</button>
        <button className={styles.nav_button}>Mi Perfil</button>
        <button className={styles.nav_button}>Crear Sorteo</button>
      </div>
    </div>
  );
};

export default UserNavBarComponent;

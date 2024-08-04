import AdminNavBar from "../../components/AdminNavBar/AdminNavBar";
import AdminResults from "../../components/AdminResults/AdminResults";
import styles from "./Admin.module.scss";

const Admin = () => {
  return (
    <div className={styles.admin_page}>
      <AdminNavBar />

      <div className={styles.content_container}>
        <AdminResults />
      </div>
    </div>
  );
};

export default Admin;

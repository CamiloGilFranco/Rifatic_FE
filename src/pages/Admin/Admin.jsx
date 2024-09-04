import AdminNavBar from "../../components/AdminNavBar/AdminNavBar";
import AdminReports from "../../components/AdminResults/AdminReports/AdminReports";
import AdminResults from "../../components/AdminResults/AdminResults";
import AdminUsers from "../../components/AdminResults/AdminUsers/AdminUsers";
import Raffles from "../../components/AdminResults/Raffles/Raffles";
import styles from "./Admin.module.scss";
import AdminLotteries from "./../../components/AdminResults/AdminLotteries/AdminLotteries";
import AdminDonations from "../../components/AdminResults/AdminDonations/AdminDonations";
import AdminAdministrators from "../../components/AdminResults/AdminAdministrators/AdminAdministrators";
import AdminMyProfile from "../../components/AdminResults/AdminMyProfile/AdminMyProfile";

const Admin = () => {
  return (
    <div className={styles.admin_page}>
      <AdminNavBar />

      <div className={styles.content_container}>
        <AdminResults />
        <Raffles />
        <AdminUsers />
        <AdminReports />
        <AdminLotteries />
        <AdminDonations />
        <AdminAdministrators />
        <AdminMyProfile />
      </div>
    </div>
  );
};

export default Admin;

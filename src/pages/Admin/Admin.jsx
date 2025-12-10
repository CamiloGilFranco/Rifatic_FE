import AdminNavBar from "../../components/AdminNavBar/AdminNavBar.jsx";
import AdminReports from "../../components/AdminResults/AdminReports/AdminReports.jsx";
import AdminResults from "../../components/AdminResults/AdminResults.jsx";
import AdminUsers from "../../components/AdminResults/AdminUsers/AdminUsers.jsx";
import Raffles from "../../components/AdminResults/Raffles/Raffles.jsx";
import styles from "./Admin.module.scss";
import AdminLotteries from "./../../components/AdminResults/AdminLotteries/AdminLotteries.jsx";
import AdminDonations from "../../components/AdminResults/AdminDonations/AdminDonations.jsx";
import AdminAdministrators from "../../components/AdminResults/AdminAdministrators/AdminAdministrators.jsx";
import AdminMyProfile from "../../components/AdminResults/AdminMyProfile/AdminMyProfile.jsx";

const Admin = () => {
  return (
    <div className={styles.admin_page}>
      <AdminNavBar />

      <div className={styles.content_container}>
        {/* <AdminResults /> */}
        {/* <Raffles /> */}
        {/* <AdminUsers /> */}
        {/* <AdminReports /> */}
        {/* <AdminLotteries /> */}
        {/* <AdminDonations /> */}
        {/* <AdminAdministrators /> */}
        <AdminMyProfile />
      </div>
    </div>
  );
};

export default Admin;

import styles from "./MyRafflesComponent.module.scss";
import logo from "../../assets/logo.png";
import MyRaffleCardComponent from "../MyRaffleCardComponent/MyRaffleCardComponent";

const MyRafflesComponent = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className={styles.my_raffles}>
      {/* <div className={styles.my_raffles_empty}>
        <img src={logo} alt="" className={styles.empty_logo} />
        <h2 className={styles.empty_subtitle}>
          Aun no tienes sorteos, ya puedes crear el primero
        </h2>
      </div> */}
      <div className={styles.my_raffles_list}>
        {arr.map((raffle, index) => {
          return <MyRaffleCardComponent />;
        })}
      </div>
    </div>
  );
};

export default MyRafflesComponent;

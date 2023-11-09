import styles from "./MyRafflesComponent.module.scss";
import logo from "../../assets/logo.png";
import MyRaffleCardComponent from "../MyRaffleCardComponent/MyRaffleCardComponent";
import { useEffect, useState } from "react";

const MyRafflesComponent = ({ giveaways, phoneNumber }) => {
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    if (giveaways) {
      setShowList(true);
    }
  }, [giveaways]);

  return (
    <div className={styles.my_raffles}>
      {showList ? (
        <div className={styles.my_raffles_list}>
          {giveaways.map((raffle, index) => {
            return (
              <MyRaffleCardComponent
                key={index}
                title={raffle.title}
                id={raffle._id}
                image={raffle.image}
                description={raffle.description}
                drawDate={raffle.draw_date}
                numberOfDigits={raffle.number_of_digits}
                lottery={raffle.lottery}
                ticketPrice={raffle.ticket_price}
                state={raffle.state}
                winningNumber={raffle.winning_number}
                showPhone={raffle.show_phone}
                phoneNumber={phoneNumber}
              />
            );
          })}
        </div>
      ) : (
        <div className={styles.my_raffles_empty}>
          <img src={logo} alt="" className={styles.empty_logo} />
          <h2 className={styles.empty_subtitle}>
            Aun no tienes sorteos, ya puedes crear el primero
          </h2>
        </div>
      )}
    </div>
  );
};

export default MyRafflesComponent;

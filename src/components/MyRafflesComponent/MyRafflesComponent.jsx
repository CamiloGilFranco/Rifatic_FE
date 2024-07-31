import styles from "./MyRafflesComponent.module.scss";
import logo from "../../assets/logo.png";
import MyRaffleCardComponent from "../MyRaffleCardComponent/MyRaffleCardComponent";
import { useEffect, useState } from "react";
import { HandlerFetchError } from "../../utils/FetchErrors";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { envVariables } from "../../constants/envVariables";
import Cookies from "js-cookie";
import cookies from "../../constants/cookies";

const MyRafflesComponent = ({ phoneNumber }) => {
  const [showList, setShowList] = useState(false);
  const [giveaways, setGiveaways] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (giveaways && giveaways.length !== 0) {
      setShowList(true);
    }
  }, [giveaways]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${envVariables.API_URL}giveaways/user`,
        {
          headers: { Authorization: `Bearer ${Cookies.get(cookies._tkn)}` },
        }
      );

      setGiveaways(response.data.giveaways);
    } catch (error) {
      HandlerFetchError(error, navigate);
    }
  };

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
                numberOfSold={raffle.sold_tickets.length}
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

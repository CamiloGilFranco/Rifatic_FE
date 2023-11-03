import styles from "./MyRaffleCardComponent.module.scss";
import share from "../../assets/share.svg";
import { useState } from "react";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import copy from "../../assets/copy.svg";
import wpp from "../../assets/wpp.svg";

const MyRaffleCardComponent = ({
  title,
  id,
  image,
  description,
  drawDate,
  numberOfDigits,
  lottery,
  ticketPrice,
  state,
  winningNumber,
}) => {
  const [optionsMenu, setOptionsMenu] = useState(false);

  const raffleState = () => {
    switch (state) {
      case "finished":
        return "Finalizado";
      case "canceled":
        return "Cancelado";
      case "in progress":
        return "En Progreso";
      default:
        return "";
    }
  };

  return (
    <div className={styles.my_raffle_card}>
      <div className={styles.first_container}>
        <h1 className={styles.raffle_title}>{title}</h1>
        <div
          className={styles.options_icon_container}
          onClick={() => setOptionsMenu(!optionsMenu)}
        >
          <img src={share} alt="" className={styles.options_icon} />
        </div>
      </div>
      <span className={styles.raffle_id}>ID: {id}</span>
      <img src={image} alt="" className={styles.raffle_image} />
      <p className={styles.raffle_description}>{description}</p>
      <p className={styles.raffle_details}>
        Juega el <span className={styles.single_detail}>{drawDate}</span>, con
        las ultimas{" "}
        <span className={styles.single_detail}>{numberOfDigits}</span> cifras de
        la <span className={styles.single_detail}>{lottery}</span>
      </p>
      <p className={styles.ticket_price}>
        Valor de cada boleta:{" "}
        <span className={styles.single_detail}>
          ${ticketPrice.toLocaleString()}
        </span>
      </p>
      <span className={styles.tickets_amount_title}>Cantidad de boletas</span>
      <span className={styles.tickets_amount}>100</span>
      <div className={styles.tickets_info_container}>
        <div className={styles.tickets_info_sub_container}>
          <span className={styles.tickets_amount_title}>Disponibles</span>
          <span className={styles.tickets_amount}>80</span>
        </div>
        <div className={styles.tickets_info_sub_container}>
          <span className={styles.tickets_amount_title}>Vendidas</span>
          <span className={styles.tickets_amount}>20</span>
        </div>
      </div>
      <span className={styles.raffle_state}>{raffleState()}</span>
      <span className={styles.raffle_winner_title}>Numero Ganador</span>
      <span className={styles.raffle_winner_number}>{winningNumber}</span>
      <div className={styles.buttons_container}>
        <span className={styles.go_to_raffle_details}>Ver Sorteo</span>
        <span className={styles.cancel_raffle}>Cancelar Sorteo</span>
      </div>
      {optionsMenu ? (
        <div className={styles.share_list}>
          <div className={styles.list_item}>
            <img src={wpp} alt="" className={styles.item_icon} />
            <span className={styles.item_text}>WhatsApp</span>
          </div>
          <div className={styles.list_item}>
            <img src={facebook} alt="" className={styles.item_icon} />
            <span className={styles.item_text}>Facebook</span>
          </div>
          <div className={styles.list_item}>
            <img src={instagram} alt="" className={styles.item_icon} />
            <span className={styles.item_text}>Instagram</span>
          </div>
          <div className={styles.list_item}>
            <img src={copy} alt="" className={styles.item_icon} />
            <span className={styles.item_text}>Copiar Link</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MyRaffleCardComponent;

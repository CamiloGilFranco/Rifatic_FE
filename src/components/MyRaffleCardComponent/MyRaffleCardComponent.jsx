import styles from "./MyRaffleCardComponent.module.scss";
import share from "../../assets/share.svg";
import { useState } from "react";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import copy from "../../assets/copy.svg";
import wpp from "../../assets/wpp.svg";
import imageGeneric from "../../assets/image-generic.svg";

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

  const numberOfTickets = () => {
    return numberOfDigits === "- - -" ? 0 : 1 * 10 ** parseInt(numberOfDigits);
  };

  return (
    <div className={styles.my_raffle_card}>
      <div className={styles.first_container}>
        {!!title ? (
          <h1 className={styles.raffle_title}>{title}</h1>
        ) : (
          <h1 className={styles.raffle_title}>- - -</h1>
        )}
        {!!state ? (
          <div
            className={styles.options_icon_container}
            onClick={() => setOptionsMenu(!optionsMenu)}
          >
            <img src={share} alt="" className={styles.options_icon} />
          </div>
        ) : null}
      </div>
      {!!state ? (
        <span className={styles.raffle_id}>ID: {id}</span>
      ) : (
        <span className={styles.raffle_id}>ID: - - - </span>
      )}
      <img
        src={
          !!image && typeof image === "string"
            ? image
            : !!image
            ? URL.createObjectURL(image)
            : imageGeneric
        }
        alt=""
        className={styles.raffle_image}
      />
      {description ? (
        <p className={styles.raffle_description}>{description}</p>
      ) : (
        "- - -"
      )}
      <p className={styles.raffle_details}>
        Juega el{" "}
        <span className={styles.single_detail}>{drawDate || "00/00/00"}</span>,
        con las ultimas{" "}
        <span className={styles.single_detail}>{numberOfDigits || "0"}</span>{" "}
        cifras de la{" "}
        <span className={styles.single_detail}>{lottery || "- - -"}</span>
      </p>
      <p className={styles.ticket_price}>
        Valor de cada boleta:{" "}
        <span className={styles.single_detail}>
          ${ticketPrice ? ticketPrice.toLocaleString() : "0"}
        </span>
      </p>
      <span className={styles.tickets_amount_title}>Cantidad de boletas</span>
      <span className={styles.tickets_amount}>{numberOfTickets()}</span>
      <div className={styles.tickets_info_container}>
        <div className={styles.tickets_info_sub_container}>
          <span className={styles.tickets_amount_title}>Disponibles</span>
          <span className={styles.tickets_amount}>
            {state ? "en espera" : numberOfTickets()}
          </span>
        </div>
        <div className={styles.tickets_info_sub_container}>
          <span className={styles.tickets_amount_title}>Vendidas</span>
          <span className={styles.tickets_amount}>
            {state ? "en espera" : "0"}
          </span>
        </div>
      </div>
      {!!state ? (
        <span className={styles.raffle_state}>{raffleState()}</span>
      ) : null}
      {!!state ? (
        <span className={styles.raffle_winner_title}>Numero Ganador</span>
      ) : (
        <span className={styles.raffle_winner_title}>Ganancia Estimada</span>
      )}
      {!!state ? (
        <span className={styles.raffle_winner_number}>{winningNumber}</span>
      ) : (
        <span className={styles.raffle_winner_number}>
          $
          {!!ticketPrice
            ? (numberOfTickets() * parseInt(ticketPrice)).toLocaleString()
            : 0}
        </span>
      )}
      {!!state ? (
        <div className={styles.buttons_container}>
          <span className={styles.go_to_raffle_details}>Ver Sorteo</span>
          <span className={styles.cancel_raffle}>Cancelar Sorteo</span>
        </div>
      ) : null}
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

import styles from "./MyRaffleCardComponent.module.scss";
import share from "../../assets/share.svg";
import { useEffect, useState } from "react";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import copy from "../../assets/copy.svg";
import wpp from "../../assets/wpp.svg";
import imageGeneric from "../../assets/image-generic.svg";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../../constants/routes";
import userOptions from "../../constants/userOtions";
import Cookies from "js-cookie";
import cookies from "../../constants/cookies";

const MyRaffleCardComponent = ({
  title,
  id,
  image,
  description,
  drawDate,
  numberOfDigits,
  numberOfSold = 0,
  lottery,
  ticketPrice,
  state,
  winningNumber,
  showPhone,
  phoneNumber,
}) => {
  const [optionsMenu, setOptionsMenu] = useState(false);
  const [spanishState, setSpanishState] = useState("");
  const [stateColor, setStateColor] = useState(styles.progress);
  const [numberOfTickets, setNumberOfTickets] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      switch (state) {
        case "finished":
          setSpanishState("Finalizado");
          setStateColor(styles.finished);
          break;
        case "canceled":
          setSpanishState("Cancelado");
          setStateColor(styles.canceled);
          break;
        case "in progress":
          setSpanishState("En Progreso");
          setStateColor(styles.progress);
          break;
        default:
          break;
      }
    }
  }, [state]);

  useEffect(() => {
    if (numberOfDigits) {
      setNumberOfTickets(
        numberOfDigits === "- - -" ? 0 : 1 * 10 ** parseInt(numberOfDigits)
      );
    }
  }, [numberOfDigits]);

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
      <span className={styles.tickets_amount}>{numberOfTickets}</span>
      <div className={styles.tickets_info_container}>
        <div className={styles.tickets_info_sub_container}>
          <span className={styles.tickets_amount_title}>Disponibles</span>
          <span className={styles.tickets_amount}>
            {numberOfTickets - numberOfSold}
          </span>
        </div>
        <div className={styles.tickets_info_sub_container}>
          <span className={styles.tickets_amount_title}>Vendidas</span>
          <span className={styles.tickets_amount}>{numberOfSold}</span>
        </div>
      </div>
      {!!state ? (
        <span className={`${styles.raffle_state} ${stateColor}`}>
          {spanishState}
        </span>
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
            ? (numberOfTickets * parseInt(ticketPrice)).toLocaleString()
            : 0}
        </span>
      )}
      {showPhone ? (
        <span className={styles.contact_span}>
          Contacto: <span className={styles.contact_number}>{phoneNumber}</span>
        </span>
      ) : null}
      {!!state ? (
        <div className={styles.buttons_container}>
          <span
            className={styles.go_to_raffle_details}
            onClick={() =>
              navigate(
                `${routes.user}/${Cookies.get(cookies._pth)}/${
                  userOptions.option5
                }/${id}`
              )
            }
          >
            Ver Sorteo
          </span>
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

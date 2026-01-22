import styles from "./RaffleCard.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes.js";
import userOptions from "../../constants/userOtions.js";
import { MdContentCopy } from "react-icons/md";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa6";
import { useSelector } from "react-redux";
import axios from "axios";
import { envVariables } from "./../../constants/envVariables.js";
import { toast } from "react-toastify";

const RaffleCard = ({
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
  setGiveaways,
  giveaways,
}) => {
  const [optionsMenu, setOptionsMenu] = useState(false);
  const [spanishState, setSpanishState] = useState("");
  const [stateColor, setStateColor] = useState(styles.progress);
  const [numberOfTickets, setNumberOfTickets] = useState(0);

  const navigate = useNavigate();
  const auth = useSelector((state) => state.authSlice);
  const theme = useSelector((state) => state.themeSlice);

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
        numberOfDigits === "- - -" ? 0 : 1 * 10 ** parseInt(numberOfDigits),
      );
    }
  }, [numberOfDigits]);

  const handleCancelRaffle = async () => {
    if (numberOfSold) {
      toast.error("No puedes cancelar sorteos con tickets vendidos");
      return;
    }

    try {
      await axios.delete(`${envVariables.API_URL}giveaways/cancel`, {
        headers: {
          Authorization: `Bearer ${auth._tkn}`,
        },
        data: {
          raffle_id: id,
        },
      });

      const filteredGiveaways = giveaways.filter(
        (giveaway) => giveaway._id !== id,
      );

      setGiveaways(filteredGiveaways);
      toast.success("Sorteo cancelado exitosamente");
    } catch (error) {
      toast.error("Error al cancelar el sorteo");
      console.log(error);
    }
  };

  const formatDrawDate = (date) => {
    if (!date) return "00/00/00";
    if (date instanceof Date && !isNaN(date)) {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = String(date.getFullYear()).slice(-2);
      return `${day}/${month}/${year}`;
    }
    return date;
  };

  const handleShare = (platform) => {
    const url = `${window.location.origin}/raffle/${id}`;
    const text = `¡Mira esta rifa! ${title}`;

    switch (platform) {
      case "whatsapp":
        window.open(
          `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url,
          )}`,
        );
        break;
      case "instagram":
        toast.info("Copia el link para compartir en Instagram");
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        toast.success("Link copiado al portapapeles");
        break;
      default:
        break;
    }
    setOptionsMenu(false);
  };

  return (
    <div
      className={styles.raffle_card}
      style={{ background: theme.bgLight, borderColor: theme.border }}
    >
      <div className={styles.header_section}>
        <div className={styles.image_wrapper}>
          {image && typeof image === "string" ? (
            <img src={image} alt={title} className={styles.raffle_image} />
          ) : image ? (
            <img
              src={URL.createObjectURL(image)}
              alt={title}
              className={styles.raffle_image}
            />
          ) : (
            <div
              className={styles.image_placeholder}
              style={{ background: theme.headerBackground }}
            >
              <FaRegImage
                className={styles.image_icon}
                style={{ color: theme.textDark }}
              />
            </div>
          )}
          <div className={styles.image_overlay}></div>

          {state && (
            <div className={`${styles.status_badge} ${stateColor}`}>
              {spanishState}
            </div>
          )}

          {state && (
            <div
              className={styles.share_button}
              onClick={() => setOptionsMenu(!optionsMenu)}
              style={{
                background: theme.primary,
                "--hoverColor": theme.intence,
                color: theme.textLight,
              }}
            >
              <IoShareSocial />
            </div>
          )}
        </div>
      </div>

      <div className={styles.content_section}>
        <div className={styles.title_row}>
          <h2 className={styles.title} style={{ color: theme.textDark }}>
            {title || "- - -"}
          </h2>
          {state && (
            <span
              className={styles.raffle_id}
              style={{ color: theme.textLight, background: theme.primary }}
            >
              #{id?.slice(-6)}
            </span>
          )}
        </div>

        {description && (
          <p className={styles.description} style={{ color: theme.textDark }}>
            {description}
          </p>
        )}

        <div
          className={styles.price_box}
          style={{
            background: theme.primaryLight,
            borderColor: theme.primary,
          }}
        >
          <span
            className={styles.price_label}
            style={{ color: theme.textDark }}
          >
            Valor por boleta
          </span>
          <span className={styles.price_value} style={{ color: theme.primary }}>
            ${ticketPrice ? ticketPrice.toLocaleString() : "0"}
          </span>
        </div>

        <div
          className={styles.info_section}
          style={{
            borderTopColor: theme.primaryLight,
            borderBottomColor: theme.primaryLight,
          }}
        >
          <p className={styles.draw_info} style={{ color: theme.textDark }}>
            Juega el{" "}
            <strong style={{ color: theme.primary }}>
              {formatDrawDate(drawDate)}
            </strong>
            , con las últimas{" "}
            <strong style={{ color: theme.primary }}>
              {numberOfDigits || "0"}
            </strong>{" "}
            cifras de la{" "}
            <strong style={{ color: theme.primary }}>
              {lottery || "- - -"}
            </strong>
          </p>
        </div>

        <div
          className={styles.tickets_section}
          style={{ backgroundColor: theme.bgForeground }}
        >
          <div className={styles.tickets_header}>
            <span
              className={styles.tickets_label}
              style={{ color: theme.textDark }}
            >
              Boletas
            </span>
            <span
              className={styles.tickets_stats}
              style={{ color: theme.textDark }}
            >
              {numberOfSold} / {numberOfTickets}
            </span>
          </div>

          <div
            className={styles.progress_bar_container}
            style={{ background: theme.primaryLight }}
          >
            <div
              className={styles.progress_bar}
              style={{
                width: `${
                  numberOfTickets > 0
                    ? (numberOfSold / numberOfTickets) * 100
                    : 0
                }%`,
                background: theme.headerBackground,
              }}
            />
          </div>

          <div className={styles.tickets_detail}>
            <div className={styles.ticket_stat}>
              <span
                className={styles.stat_value}
                style={{ color: theme.primary }}
              >
                {numberOfTickets - numberOfSold}
              </span>
              <span
                className={styles.stat_label}
                style={{ color: theme.textDark }}
              >
                Disponibles
              </span>
            </div>
            <div className={styles.ticket_stat}>
              <span
                className={styles.stat_value}
                style={{ color: theme.primary }}
              >
                {numberOfSold}
              </span>
              <span
                className={styles.stat_label}
                style={{ color: theme.textDark }}
              >
                Vendidas
              </span>
            </div>
          </div>
        </div>

        <div
          className={styles.earnings_box}
          style={{
            background: theme.primaryLight,
            borderColor: theme.primary,
          }}
        >
          <span
            className={styles.earnings_label}
            style={{ color: theme.textDark }}
          >
            {state ? "Número Ganador" : "Ganancia Estimada"}
          </span>
          <span
            className={styles.earnings_value}
            style={{ color: theme.primary }}
          >
            {state
              ? winningNumber || "- - -"
              : `$${
                  ticketPrice
                    ? (numberOfTickets * parseInt(ticketPrice)).toLocaleString()
                    : 0
                }`}
          </span>
        </div>

        {showPhone && (
          <div
            className={styles.contact_box}
            style={{ background: theme.bgForeground }}
          >
            <span
              className={styles.contact_label}
              style={{ color: theme.textDark }}
            >
              Contacto:
            </span>
            <span
              className={styles.contact_value}
              style={{ color: theme.primary }}
            >
              {phoneNumber}
            </span>
          </div>
        )}

        {state && (
          <div className={styles.action_buttons}>
            <button
              style={{ background: theme.headerBackground }}
              className={styles.view_button}
              onClick={() =>
                navigate(`${routes.user}/${userOptions.option5}/${id}`)
              }
            >
              Ver Sorteo
            </button>
            <button
              className={styles.cancel_button}
              onClick={handleCancelRaffle}
            >
              Cancelar
            </button>
          </div>
        )}
      </div>

      {optionsMenu && (
        <div className={styles.share_menu}>
          <div
            className={styles.share_item}
            onClick={() => handleShare("whatsapp")}
          >
            <FaWhatsapp className={styles.share_icon} />
            <span>WhatsApp</span>
          </div>
          <div
            className={styles.share_item}
            onClick={() => handleShare("facebook")}
          >
            <IoLogoFacebook className={styles.share_icon} />
            <span>Facebook</span>
          </div>
          <div
            className={styles.share_item}
            onClick={() => handleShare("instagram")}
          >
            <FaInstagram className={styles.share_icon} />
            <span>Instagram</span>
          </div>
          <div
            className={styles.share_item}
            onClick={() => handleShare("copy")}
          >
            <MdContentCopy className={styles.share_icon} />
            <span>Copiar Link</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RaffleCard;

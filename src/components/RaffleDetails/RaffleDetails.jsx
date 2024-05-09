import { useEffect, useState } from "react";
import MyRaffleCardComponent from "../MyRaffleCardComponent/MyRaffleCardComponent";
import styles from "./RaffleDetails.module.scss";
import { HandlerFetchError } from "../../utils/FetchErrors";
import { useNavigate, useParams } from "react-router-dom";
import { envVariables } from "../../constants/envVariables";
import axios from "axios";
import Cookies from "js-cookie";
import cookies from "../../constants/cookies";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const RaffleDetails = () => {
  const [raffleData, setRaffleData] = useState({});
  const [numbersList, setNumbersList] = useState([]);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [selectedNumbersSold, setSelectedNumbersSold] = useState([]);
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [expandSelectedNumbers, setExpandSelectedNumbers] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getRaffleData();
  }, []);

  useEffect(() => {
    if (!selectedNumbers.length) {
      setBuyerEmail("");
      setBuyerName("");
      setBuyerPhone("");
      setExpandSelectedNumbers(false);
    }
  }, [selectedNumbers]);

  const getRaffleData = async () => {
    try {
      const response = await axios.get(
        `${envVariables.API_URL}giveaways/single`,
        {
          headers: { Authorization: `Bearer ${Cookies.get(cookies._tkn)}` },
          params: { id: params.detail },
        }
      );

      const numberOfDigits = parseInt(
        response.data.giveawayData.number_of_digits
      );

      const limitNumber = Math.pow(10, numberOfDigits) - 1;

      const ticketList = [];
      for (var i = 0; i <= limitNumber; i++) {
        var number = i.toString().padStart(numberOfDigits, "0");

        const soldInfo = response.data.giveawayData.sold_tickets.find(
          (soldNumber) => number === soldNumber.selected_number
        );

        const sold = soldInfo ? true : false;
        ticketList.push({ number, sold, soldInfo });
      }

      setNumbersList(ticketList);
      setRaffleData(response.data.giveawayData);
    } catch (error) {
      HandlerFetchError(error, navigate);
    }
  };

  console.log(numbersList);

  const handleSelectNumber = (number) => {
    if (selectedNumbersSold.length) {
      toast.error(
        "tienes números seleccionados que ya fueron vendidos, debes deseleccionarlos para vender mas"
      );
      return;
    }

    if (!selectedNumbers.includes(number)) {
      setSelectedNumbers([...selectedNumbers, number]);
    } else {
      const selectedNumbersCopy = [...selectedNumbers].filter(
        (element) => element !== number
      );
      setSelectedNumbers(selectedNumbersCopy);
    }
  };

  const handleSelectSoldNumber = (number) => {
    if (selectedNumbers.length) {
      toast.error(
        "tienes números seleccionados para vendidos, debes deseleccionarlos para seleccionar números vendidos"
      );
      return;
    }

    if (!selectedNumbersSold.includes(number)) {
      setSelectedNumbersSold([...selectedNumbersSold, number]);
    } else {
      const selectedNumbersSoldCopy = [...selectedNumbersSold].filter(
        (element) => element !== number
      );

      setSelectedNumbersSold(selectedNumbersSoldCopy);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!buyerName || !buyerEmail || !buyerPhone) {
      await Swal.fire({
        title: `Debes completar los datos del comprador`,
        icon: "error",
      });

      return;
    }

    try {
      console.log({
        tkn: Cookies.get(cookies._tkn),
        selectedNumbers,
        buyerEmail,
        buyerName,
        buyerPhone,
        raffle_id: raffleData._id,
      });

      const response = await axios.post(
        `${envVariables.API_URL}sold_tickets`,
        {
          selectedNumbers,
          buyerEmail,
          buyerName,
          buyerPhone,
          raffle_id: raffleData._id,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get(cookies._tkn)}`,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      HandlerFetchError(error, navigate);
    }
  };

  return (
    <div className={styles.raffle_details}>
      <div className={styles.raffle_detail_card}>
        <MyRaffleCardComponent
          title={raffleData.title}
          id={raffleData._id}
          image={raffleData.image}
          description={raffleData.description}
          drawDate={raffleData.draw_date}
          numberOfDigits={raffleData.number_of_digits}
          lottery={raffleData.lottery}
          ticketPrice={raffleData.ticket_price}
          state={raffleData.state}
          winningNumber={raffleData.winning_number}
          showPhone={raffleData.show_phone}
          phoneNumber={raffleData.phone_number}
        />
      </div>
      <div className={styles.raffle_numbers_container}>
        <div className={styles.numbers_list_search_bar}></div>
        <div className={styles.numbers_list_container}>
          {numbersList.map((numberData, numberKey) => {
            return (
              <div
                className={`${styles.number_container} ${
                  numberData.sold ? styles.sold_number : ""
                }`}
                key={numberKey}
              >
                <span className={styles.number}>{numberData.number}</span>
                <span
                  className={styles.select_number_button}
                  onClick={() => {
                    numberData.sold
                      ? handleSelectSoldNumber(numberData.number)
                      : handleSelectNumber(numberData.number);
                  }}
                >
                  {selectedNumbers.includes(numberData.number) ||
                  selectedNumbersSold.includes(numberData.number)
                    ? "Deseleccionar"
                    : "Seleccionar"}
                </span>
                <span className={styles.number_box_extra_info}>
                  {numberData.sold ? "Vendido" : ""}
                  {selectedNumbers.includes(numberData.number)
                    ? "Seleccionado"
                    : ""}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {selectedNumbers.length || selectedNumbersSold.length ? (
        <div
          className={`${styles.selected_container} ${
            expandSelectedNumbers ? styles.show_selected_details : ""
          }`}
        >
          <div className={styles.selected_content_container}>
            <div className={styles.selected_container_header}>
              <span className={styles.selected_container_title}>
                {selectedNumbers.length || selectedNumbersSold.length} números
                seleccionados
              </span>
              <div
                className={`${styles.expand_selected_numbers_icon_container} ${
                  expandSelectedNumbers ? styles.rotate_icon : ""
                }`}
                onClick={() => setExpandSelectedNumbers(!expandSelectedNumbers)}
              >
                <KeyboardArrowUpIcon style={{ fontSize: 30 }} />
              </div>
            </div>
            <div className={styles.selected_numbers_detail_container}>
              <div className={styles.selected_numbers_list_container}>
                <span className={styles.selected_numbers_title}>
                  Números Seleccionados
                </span>
                <div className={styles.detail_numbers_container}>
                  {selectedNumbers.sort().map((number, index) => {
                    return (
                      <span className={styles.single_number} key={index}>
                        {number}
                      </span>
                    );
                  })}
                  {selectedNumbersSold.sort().map((number, index) => {
                    return (
                      <span className={styles.single_number} key={index}>
                        {number}
                      </span>
                    );
                  })}
                </div>
              </div>
              {selectedNumbers.length ? (
                <div className={styles.sell_tickets_form}>
                  <span className={styles.sell_tickets_form_title}>
                    Datos del Comprador
                  </span>
                  <form className={styles.buyer_form} onSubmit={handleSubmit}>
                    <label htmlFor="buyer-names-input" className={styles.label}>
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="buyer-names-input"
                      className={styles.input}
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                    />
                    <label htmlFor="buyer-email-input" className={styles.label}>
                      Correo
                    </label>
                    <input
                      type="text"
                      id="buyer-email-input"
                      className={styles.input}
                      value={buyerEmail}
                      onChange={(e) => setBuyerEmail(e.target.value)}
                    />
                    <label htmlFor="buyer-phone-input" className={styles.label}>
                      Teléfono
                    </label>
                    <input
                      type="text"
                      id="buyer-phone-input"
                      className={styles.input}
                      value={buyerPhone}
                      onChange={(e) => setBuyerPhone(e.target.value)}
                    />
                    <input
                      type="submit"
                      value={"Asignar Boletas"}
                      className={styles.submit_button}
                    />
                  </form>
                </div>
              ) : (
                <div className={styles.release_tickets_button_container}>
                  <button className={styles.release_tickets_button}>
                    Liberar Números
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default RaffleDetails;

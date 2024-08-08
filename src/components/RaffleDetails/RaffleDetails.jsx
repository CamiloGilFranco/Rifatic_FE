import { useEffect, useState } from "react";
import MyRaffleCardComponent from "../MyRaffleCardComponent/MyRaffleCardComponent";
import styles from "./RaffleDetails.module.scss";
import { HandlerFetchError } from "../../utils/FetchErrors";
import { useNavigate, useParams } from "react-router-dom";
import { envVariables } from "../../constants/envVariables";
import axios from "axios";
import Cookies from "js-cookie";
import cookies from "../../constants/cookies";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { IoIosArrowUp } from "react-icons/io";

const RaffleDetails = () => {
  const [raffleData, setRaffleData] = useState({});
  const [numbersList, setNumbersList] = useState([]);
  const [numbersListOrigin, setNumbersListOrigin] = useState([]);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [selectedNumberSold, setSelectedNumberSold] = useState({});
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [expandSelectedNumbers, setExpandSelectedNumbers] = useState(false);
  const [findNumber, setFindNumber] = useState("");
  const [filterBy, setFilterBy] = useState("Todos");
  const [ticketsSold, setTicketsSold] = useState(0);

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

  useEffect(() => {
    if (!numbersList.length) {
      return;
    }

    setTicketsSold(
      numbersListOrigin.filter((numberItem) => numberItem.sold).length
    );
  }, [numbersListOrigin]);

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
      setNumbersListOrigin(ticketList);
      setRaffleData(response.data.giveawayData);
    } catch (error) {
      HandlerFetchError(error, navigate);
    }
  };

  const handleSelectNumber = (number) => {
    if (Object.keys(selectedNumberSold).length) {
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

  const handleSelectSoldNumber = (numberData) => {
    if (selectedNumbers.length) {
      toast.error(
        "tienes números seleccionados para ser asignados, debes deseleccionarlos para seleccionar números vendidos"
      );
      return;
    }

    if (numberData.number === selectedNumberSold.number) {
      setSelectedNumberSold({});
      return;
    } else {
      setSelectedNumberSold(numberData);
      setExpandSelectedNumbers(true);
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

      const numbersListCopy = [...numbersList];

      response.data.response.forEach((e) => {
        const foundTicket = numbersListCopy.find(
          (ticket) => ticket.number === e.selected_number
        );

        foundTicket.sold = true;
        foundTicket.soldInfo = {
          email: e.email,
          full_name: e.full_name,
          phone_number: e.phone_number,
          selected_number: e.selected_number,
        };
      });

      setNumbersList(numbersListCopy);
      setNumbersListOrigin(numbersListCopy);
      setSelectedNumbers([]);
      setSelectedNumberSold({});
    } catch (error) {
      HandlerFetchError(error, navigate);
    }
  };

  const handleReleaseTicket = async (e) => {
    e.preventDefault();

    try {
      const deletedTicket = await axios.delete(
        `${envVariables.API_URL}sold_tickets`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get(cookies._tkn)}`,
          },
          data: {
            selected_number: selectedNumberSold,
            raffle_id: raffleData._id,
          },
        }
      );

      setSelectedNumberSold({});
      setExpandSelectedNumbers(false);

      const numbersMap = [...numbersList];

      const foundNumber = numbersMap.find(
        (numberItem) =>
          numberItem.number === deletedTicket.data.deleted_data.selected_number
      );

      foundNumber.sold = false;
      foundNumber.soldInfo = undefined;

      setNumbersList(numbersMap);
      setNumbersListOrigin(numbersMap);
    } catch (error) {
      HandlerFetchError(error, navigate);
    }
  };

  const handleFindNumber = (e) => {
    setFilterBy("Todos");
    const input = e.target.value.replace(/\D/g, "");
    setFindNumber(input);

    const filteredList = numbersListOrigin.filter((numberItem) =>
      numberItem.number.includes(input)
    );

    setNumbersList(filteredList);
  };

  const handleFilterBy = (e) => {
    setFindNumber("");
    setFilterBy(e.target.value);

    switch (e.target.value) {
      case "Vendidos":
        setNumbersList(
          numbersListOrigin.filter((numberItem) => numberItem.sold)
        );
        break;
      case "Disponibles":
        setNumbersList(
          numbersListOrigin.filter((numberItem) => !numberItem.sold)
        );
        break;
      default:
        setNumbersList(numbersListOrigin);
        break;
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
          numberOfSold={ticketsSold}
          lottery={raffleData.lottery}
          ticketPrice={raffleData.ticket_price}
          state={raffleData.state}
          winningNumber={raffleData.winning_number}
          showPhone={raffleData.show_phone}
          phoneNumber={raffleData?.user?.phone}
        />
      </div>
      <div className={styles.raffle_numbers_container}>
        <div className={styles.numbers_list_search_bar}>
          <input
            type="text"
            className={styles.find_ticket_input}
            placeholder="Buscar Número"
            onChange={handleFindNumber}
            value={findNumber}
          />
          <div className="">
            <span className={styles.filter_by_text}>Filtrar por: </span>
            <select
              name="filter-by"
              id=""
              className={styles.filter_by_select}
              onChange={handleFilterBy}
              value={filterBy}
            >
              <option value="Todos">Todos</option>
              <option value="Vendidos">Vendidos</option>
              <option value="Disponibles">Disponibles</option>
            </select>
          </div>
        </div>
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
                      ? handleSelectSoldNumber(numberData)
                      : handleSelectNumber(numberData.number);
                  }}
                >
                  {selectedNumbers.includes(numberData.number) ||
                  selectedNumberSold.number === numberData.number
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
      {selectedNumbers.length || Object.keys(selectedNumberSold).length ? (
        <div
          className={`${styles.selected_container} ${
            expandSelectedNumbers ? styles.show_selected_details : ""
          }`}
        >
          <div className={styles.selected_content_container}>
            <div className={styles.selected_container_header}>
              <span className={styles.selected_container_title}>
                {selectedNumbers.length
                  ? `${selectedNumbers.length} números
                seleccionados`
                  : ""}
              </span>
              <div
                className={`${styles.expand_selected_numbers_icon_container} ${
                  expandSelectedNumbers ? styles.rotate_icon : ""
                }`}
                onClick={() => setExpandSelectedNumbers(!expandSelectedNumbers)}
              >
                <IoIosArrowUp style={{ fontSize: 30 }} />
              </div>
            </div>
            {selectedNumbers.length ? (
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
                  </div>
                </div>

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
              </div>
            ) : null}
            {Object.keys(selectedNumberSold).length ? (
              <div className={styles.selected_numbers_detail_container}>
                <div className={styles.selected_numbers_list_container}>
                  <span className={styles.selected_numbers_title}>
                    Datos del Comprador
                  </span>

                  <div className={styles.buyer_data_container}>
                    <span className={styles.buyer_data_item}>
                      Nombre: {selectedNumberSold.soldInfo.full_name}
                    </span>
                    <span className={styles.buyer_data_item}>
                      Teléfono: {selectedNumberSold.soldInfo.phone_number}
                    </span>
                    <span className={styles.buyer_data_item}>
                      Email: {selectedNumberSold.soldInfo.email}
                    </span>
                    <span className={styles.buyer_data_item}>
                      Numero seleccionado:{" "}
                      {selectedNumberSold.soldInfo.selected_number}
                    </span>
                  </div>
                </div>

                <form
                  onSubmit={handleReleaseTicket}
                  className={styles.release_button_container}
                >
                  <input
                    type="submit"
                    value={"Liberar Boleta"}
                    className={styles.submit_button}
                  />
                </form>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default RaffleDetails;

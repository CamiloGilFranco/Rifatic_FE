import styles from "./CreateGiveawayComponent.module.scss";
import addImage from "../../assets/image.svg";
import MyRaffleCardComponent from "../MyRaffleCardComponent/MyRaffleCardComponent";
import { useState } from "react";

const CreateGiveawayComponent = ({ phoneNumber }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(undefined);
  const [description, setDescription] = useState("");
  const [lottery, setLottery] = useState("- - -");
  const [drawDate, setDrawDate] = useState(undefined);
  const [numberOfDigits, setNumberOfDigits] = useState("- - -");
  const [ticketPrice, setTicketPrice] = useState("");
  const [showPhone, setShowPhone] = useState(false);
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [lotteryError, setLotteryError] = useState(false);
  const [drawDateError, setDrawDateError] = useState(false);
  const [numberOfDigitsError, setNumberOfDigitsError] = useState(false);
  const [ticketPriceError, setTicketPriceError] = useState(false);
  const [termsAndConditionsError, setTermsAndConditionsError] = useState(false);

  const handleSubmit = () => {
    let isValid = true;

    if (!title) {
      setTitleError(true);
      isValid = false;
    } else {
      setTitleError(false);
    }

    if (!image) {
      setImageError(true);
      isValid = false;
    } else {
      setImageError(false);
    }

    if (!description) {
      setDescriptionError(true);
      isValid = false;
    } else {
      setDescriptionError(false);
    }

    if (lottery === "- - -") {
      setLotteryError(true);
      isValid = false;
    } else {
      setLotteryError(false);
    }

    if (!drawDate) {
      setDrawDateError(true);
      isValid = false;
    } else {
      setDrawDateError(false);
    }

    if (numberOfDigits === "- - -") {
      setNumberOfDigitsError(true);
      isValid = false;
    } else {
      setNumberOfDigitsError(false);
    }

    if (!ticketPrice) {
      setTicketPriceError(true);
      isValid = false;
    } else {
      setTicketPriceError(false);
    }

    if (!termsAndConditions) {
      setTermsAndConditionsError(true);
      isValid = false;
    } else {
      setTermsAndConditionsError(false);
    }

    if (!isValid) {
      return;
    }

    console.log("R");
  };

  return (
    <div className={styles.create_giveaway}>
      <form className={styles.new_raffle_form}>
        <h2 className={styles.card_title}>Nueva Rifa</h2>
        <label htmlFor="" className={styles.label}>
          Titulo del Premio
        </label>
        <input
          type="text"
          className={styles.one_line_input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {titleError ? (
          <span className={styles.error_message}>
            **La rifa debe tener un titulo
          </span>
        ) : null}
        <label
          htmlFor="new-raffle-image-input"
          className={styles.image_icon_container}
        >
          <img src={addImage} alt="" className={styles.image_icon} />
        </label>
        <input
          type="file"
          accept="image/*"
          multiple={false}
          name="raffle-image-input"
          id="new-raffle-image-input"
          className={styles.file_input}
          onChange={(event) => {
            setImage(event.target.files[0]);
          }}
        />
        <span className={styles.image_name}>{!!image ? image.name : ""}</span>
        {imageError ? (
          <span className={styles.error_message}>
            **La rifa debe tener una imagen
          </span>
        ) : null}
        <p className={styles.image_explanation}>
          Aumenta tus ventas con una imagen de calidad, puedes usar alguna
          plantilla{" "}
          <a
            href="https://www.canva.com/templates/?query=sorteo"
            className={styles.layout_link}
            target="_blank"
            rel="noreferrer"
          >
            AQUÍ
          </a>
        </p>
        <label htmlFor="" className={styles.label}>
          Descripción
        </label>
        <textarea
          className={styles.textarea_description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {descriptionError ? (
          <span className={styles.error_message}>
            **La rifa debe tener una descripción
          </span>
        ) : null}
        <label className={styles.label}>Lotería</label>
        <select
          className={styles.one_line_input}
          value={lottery}
          onChange={(e) => setLottery(e.target.value)}
        >
          <option value="- - -">Elige Una</option>
          <option value="Lotería de Cundinamarca">
            Lotería de Cundinamarca
          </option>
          <option value="Lotería de La Cruz Roja">
            Lotería de La Cruz Roja
          </option>
          <option value="Lotería del Meta">Lotería del Meta</option>
          <option value="Lotería de Bogotá">Lotería de Bogotá</option>
          <option value="Lotería de Medellin">Lotería de Medellin</option>
          <option value="Lotería de Boyacá">Lotería de Boyacá</option>
        </select>
        {lotteryError ? (
          <span className={styles.error_message}>
            **Debes elegir una lotería para el sorteo
          </span>
        ) : null}
        <label htmlFor="" className={styles.label}>
          Fecha del Sorteo
        </label>
        <input
          type="date"
          className={styles.one_line_input}
          value={drawDate}
          onChange={(e) => setDrawDate(e.target.value)}
        />
        {drawDateError ? (
          <span className={styles.error_message}>
            **Debes elegir una fecha de sorteo
          </span>
        ) : null}
        <label htmlFor="" className={styles.label}>
          Numero de Cifras
        </label>
        <select
          className={styles.one_line_input}
          value={numberOfDigits}
          onChange={(e) => setNumberOfDigits(e.target.value)}
        >
          <option value="- - -">Elige Una</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        {numberOfDigitsError ? (
          <span className={styles.error_message}>
            **Elige la cantidad de cifras para calcular el numero de boletas
            generadas
          </span>
        ) : null}
        <label htmlFor="" className={styles.label}>
          Precio de Cada Boleta
        </label>
        <input
          type="number"
          value={ticketPrice}
          className={styles.one_line_input}
          onChange={(e) => setTicketPrice(e.target.value)}
        />
        {ticketPriceError ? (
          <span className={styles.error_message}>
            **Debes escribir el valor de cada boleta
          </span>
        ) : null}
        <div className={styles.check_phone_container}>
          <input
            type="checkbox"
            checked={showPhone}
            onChange={() => setShowPhone(!showPhone)}
            className={styles.terms_checkbox}
            id="new-raffle-show-phone"
          />
          <label htmlFor="new-raffle-show-phone" className={styles.phone_label}>
            ¿Mostrar mi numero de teléfono para que posibles compradores me
            contacten?
          </label>
        </div>
      </form>
      <div className={styles.container_right}>
        <h2 className={styles.card_title}>Vista Previa</h2>
        <MyRaffleCardComponent
          title={title}
          image={image}
          description={description}
          drawDate={drawDate}
          numberOfDigits={numberOfDigits}
          lottery={lottery}
          ticketPrice={ticketPrice}
          showPhone={showPhone}
          phoneNumber={phoneNumber}
        />
      </div>
      <div className={styles.terms_conditions_container}>
        <li>
          RIFATIC permite la venta de boletas hasta las 24 horas del dia
          anterior a la fecha el sorteo
        </li>
        <li>
          La plataforma RIFATIC valida de forma automática el ganador de cada
          rifa en un plazo de hasta 24 horas después de efectuado el sorteo por
          la lotería correspondiente y se envía un correo electrónico al
          ganador.
        </li>
        <li>
          RIFATIC no se encarga del recaudo de dinero ni de la entrega del
          premio.
        </li>
        <div className={styles.check_container}>
          <input
            type="checkbox"
            checked={termsAndConditions}
            onChange={() => setTermsAndConditions(!termsAndConditions)}
            className={styles.terms_checkbox}
            id="new-raffle-terms-checkbox"
          />
          <label
            htmlFor="new-raffle-terms-checkbox"
            className={styles.terms_label}
          >
            Acepto los Términos y Condiciones
          </label>
        </div>
        {termsAndConditionsError ? (
          <span className={styles.error_message}>
            **Debes aceptar los términos y condiciones
          </span>
        ) : null}
        <button className={styles.create_raffle_button} onClick={handleSubmit}>
          Crear Rifa
        </button>
      </div>
    </div>
  );
};

export default CreateGiveawayComponent;

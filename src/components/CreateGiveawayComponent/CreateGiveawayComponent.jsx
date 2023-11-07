import styles from "./CreateGiveawayComponent.module.scss";
import addImage from "../../assets/image.svg";
import MyRaffleCardComponent from "../MyRaffleCardComponent/MyRaffleCardComponent";
import { useState } from "react";

const CreateGiveawayComponent = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [lottery, setLottery] = useState("- - -");
  const [drawDate, setDrawDate] = useState(null);
  const [numberOfDigits, setNumberOfDigits] = useState("- - -");
  const [ticketPrice, setTicketPrice] = useState("");

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
        <p className={styles.image_explanation}>
          Aumenta tus ventas con una imagen de calidad, puedes usar alguna
          plantilla{" "}
          <a
            href="https://www.canva.com/templates/?query=sorteo"
            className={styles.layout_link}
            target="_blank"
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
        <label>Lotería</label>
        <select
          className={styles.lottery_select}
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
        <label htmlFor="" className={styles.label}>
          Fecha del Sorteo
        </label>
        <input
          type="date"
          className={styles.date_input}
          value={drawDate}
          onChange={(e) => setDrawDate(e.target.value)}
        />
        <label htmlFor="">Numero de Cifras</label>
        <select
          className={styles.number_of_digits_select}
          value={numberOfDigits}
          onChange={(e) => setNumberOfDigits(e.target.value)}
        >
          <option value="- - -">Elige Una</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <label htmlFor="" className={styles.label}>
          Precio de Cada Boleta
        </label>
        <input
          type="number"
          value={ticketPrice}
          onChange={(e) => setTicketPrice(e.target.value)}
        />
      </form>
      <div className={styles.container_right}>
        <MyRaffleCardComponent
          title={title}
          image={image}
          description={description}
          drawDate={drawDate}
          numberOfDigits={numberOfDigits}
          lottery={lottery}
          ticketPrice={ticketPrice}
        />
      </div>
    </div>
  );
};

export default CreateGiveawayComponent;

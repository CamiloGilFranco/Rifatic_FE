import { useState } from "react";
import styles from "./RecordResult.module.scss";
import DatePicker from "react-datepicker";

const RecordResult = ({ record = false, upload = false }) => {
  const [date, setDate] = useState(null);

  console.log({ record, upload });

  return (
    <div className={styles.record_result_container}>
      <span className={styles.title}>Registrar Resultado</span>
      <div className={styles.draw_options_container}>
        <div className={styles.date_picker_container}>
          <label htmlFor="" className={styles.input_label}>
            Fecha de Sorteo
          </label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            className={styles.date_picker}
            placeholderText="00/00/0000"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className={styles.lottery_selector_container}>
          <label htmlFor="" className={styles.input_label}>
            Lotería
          </label>
          <select className={styles.lottery_selector}>
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
        </div>
      </div>
      <div className={styles.winner_number_container}>
        <label htmlFor="" className={styles.input_label}>
          Número Ganador
        </label>
        <div className={styles.winner_number_inputs_container}>
          <input type="text" className={styles.winner_number_input} />
          <input type="text" className={styles.winner_number_input} />
          <input type="text" className={styles.winner_number_input} />
          <input type="text" className={styles.winner_number_input} />
        </div>
      </div>
      <button className={styles.record_winner_button}>
        {`${record ? "Registrar" : "Corregir"}`} Ganador
      </button>
    </div>
  );
};

export default RecordResult;

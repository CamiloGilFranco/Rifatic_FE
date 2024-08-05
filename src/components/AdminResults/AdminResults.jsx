import { useState } from "react";
import styles from "./AdminResults.module.scss";
import DatePicker from "react-datepicker";

const AdminResults = () => {
  const [date, setDate] = useState(null);

  return (
    <div className={styles.admin_results}>
      <div className={styles.record_result_container}>
        <span className={styles.title}>Registrar Resultado</span>
        <div className={styles.draw_options_container}>
          <div className={styles.date_picker_container}>
            <label htmlFor="" className={styles.input_label}>
              Fecha de Sorteo
            </label>
            <DatePicker
              showIcon
              selected={date}
              onChange={(date) => setDate(date)}
              className={styles.date_picker}
              minDate={new Date()}
              placeholderText="00/00/0000"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className={styles.lottery_selector_container}>
            <label htmlFor="" className={styles.input_label}>
              Lotería
            </label>
            <select className={styles.lottery_selector}></select>
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
      </div>

      <div className={styles.last_results_container}>
        <span className={styles.title}>Últimos Resultados</span>
      </div>

      <div className={styles.correct_result_container}>
        <span className={styles.title}>corregir Resultado</span>
      </div>
    </div>
  );
};

export default AdminResults;

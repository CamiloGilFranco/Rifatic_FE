import { useState } from "react";
import styles from "./SolveReportModal.module.scss";
import { toast } from "react-toastify";

const SolveReportModal = ({
  report = {
    id: "oiashsdiasdasd",
    reporter_name: "este es el nombre del que hizo el reporte",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?",
    report_state: "Resuelto",
    response: "",
    created_at: "01-01-2020",
  },
  setShowSolveModal,
}) => {
  const [response, setResponse] = useState("");

  const handleSolveReport = async () => {
    toast.warn("escribir funcion de submit");
  };

  return (
    <div className={styles.solve_modal_report}>
      <div
        className={styles.modal_background}
        onClick={() => setShowSolveModal(false)}
      ></div>
      <div className={styles.modal_container}>
        <div className={styles.header}>
          <span className={styles.header_name}>{report.reporter_name}</span>
          <span className={styles.header_state}>{report.report_state}</span>
          <span className={styles.header_date}>{report.created_at}</span>
        </div>

        <p className={styles.report_description}>{report.description}</p>

        {report.response ? (
          <p className={styles.report_description}>
            Respuesta: {report.response}
          </p>
        ) : (
          <textarea
            className={styles.response_input}
            value={response}
            onChange={(event) => setResponse(event.target.value)}
          ></textarea>
        )}

        <div className={styles.buttons_container}>
          {!report.response && (
            <span
              className={styles.solve_report_action_button}
              onClick={handleSolveReport}
            >
              Enviar Respuesta
            </span>
          )}

          <span
            className={styles.solve_report_action_button}
            onClick={() => setShowSolveModal(false)}
          >
            Cancelar
          </span>
        </div>
      </div>
    </div>
  );
};

export default SolveReportModal;

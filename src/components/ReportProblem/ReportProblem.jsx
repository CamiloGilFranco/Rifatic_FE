import styles from "./ReportProblem.module.scss";

const ReportProblem = () => {
  return (
    <div className={styles.report_problem}>
      <h2 className={styles.title}>Reportar Problema</h2>
      <p className={styles.paragraph}>
        ¿Tienes un problema o quieres dejarnos algún comentario?
      </p>
      <p className={styles.paragraph}>
        Aquí puedes hacerlo y te responderemos a la mayor brevedad{" "}
      </p>
      <textarea className={styles.textarea}></textarea>
      <button className={styles.send_button}>Enviar</button>
    </div>
  );
};

export default ReportProblem;

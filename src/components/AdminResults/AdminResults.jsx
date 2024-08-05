import { useState } from "react";
import styles from "./AdminResults.module.scss";
import RecordResult from "./RecordResult/RecordResult";

const AdminResults = () => {
  return (
    <div className={styles.admin_results}>
      <RecordResult />
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

import { useState } from "react";
import styles from "./AdminResults.module.scss";
import RecordResult from "./RecordResult/RecordResult";

const AdminResults = () => {
  return (
    <div className={styles.admin_results}>
      <RecordResult record />
      <div className={styles.last_results_container}>
        <span className={styles.title}>Últimos Resultados</span>
        <div className={styles.table_container}>
          <table className={styles.results_table}>
            <thead className={styles.thead}>
              <tr className={styles.header_tr}>
                <th className={styles.header_th}>Lotería</th>
                <th className={styles.header_th}>Fecha</th>
                <th className={styles.header_th}>Número Ganador</th>
                <th className={styles.header_th}>Cantidad de Sorteos</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr className={styles.body_tr}>
                <td className={styles.body_td}>Bogota</td>
                <td className={styles.body_td}>00/00/0000</td>
                <td className={styles.body_td}>1234</td>
                <td className={styles.body_td}>10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <RecordResult upload />
    </div>
  );
};

export default AdminResults;

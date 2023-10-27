import styles from "./MyRaffleCardComponent.module.scss";
import options from "../../assets/options.svg";
import { useState } from "react";

const MyRaffleCardComponent = () => {
  const [optionsMenu, setOptionsMenu] = useState(false);
  return (
    <div className={styles.my_raffle_card}>
      <div className={styles.first_container}>
        <h1 className={styles.raffle_title}>
          esta es mi primera rifa y estoy muy feliz de presentarla y venderla{" "}
        </h1>
        <div className={styles.options_icon_container}>
          <img src={options} alt="" className={styles.options_icon} />
        </div>
      </div>
      <span className={styles.raffle_id}>ID: jktydytvluigi6yrdsrtdcik</span>
      <img
        src="https://i.pinimg.com/564x/a1/ca/18/a1ca183bcdccc08288e8f1e9195d36a2.jpg"
        alt=""
        className={styles.raffle_image}
      />
      <p className={styles.raffle_description}>
        En la orilla del mar, las olas besaban la arena dorada. El sol se
        ocultaba lentamente en el horizonte, tiñendo el cielo de tonos cálidos.
        Las gaviotas revoloteaban en busca de su última comida del día. Un
        momento de paz y belleza que nunca olvidaré. La lluvia caía con fuerza
        sobre el tejado, creando una sinfonía de gotas. En la penumbra, una
        velada
      </p>
      <p className={styles.raffle_details}>
        Juega el <span className={styles.single_detail}>00/00/00</span>, con las
        ultimas <span className={styles.single_detail}>X</span> cifras de la{" "}
        <span className={styles.single_detail}>Lotería X</span>
      </p>
      <p className={styles.ticket_price}>
        Valor de cada boleta:{" "}
        <span className={styles.single_detail}>$5.000</span>
      </p>
      <span className={styles.tickets_amount_title}>Cantidad de boletas</span>
      <span className={styles.tickets_amount}>100</span>
      <div className={styles.tickets_info_container}>
        <div className={styles.tickets_info_sub_container}>
          <span className={styles.tickets_amount_title}>Disponibles</span>
          <span className={styles.tickets_amount}>80</span>
        </div>
        <div className={styles.tickets_info_sub_container}>
          <span className={styles.tickets_amount_title}>Vendidas</span>
          <span className={styles.tickets_amount}>20</span>
        </div>
      </div>
      <span className={styles.raffle_state}>Activo</span>
      <span className={styles.raffle_winner_title}>Numero Ganador</span>
      <span className={styles.raffle_winner_number}>058</span>
      <div className={styles.buttons_container}>
        <span className={styles.go_to_raffle_details}>Ver Sorteo</span>
        <span className={styles.cancel_raffle}>Cancelar Sorteo</span>
      </div>
    </div>
  );
};

export default MyRaffleCardComponent;

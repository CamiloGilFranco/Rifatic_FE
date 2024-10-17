import { useState } from "react";
import styles from "./Raffles.module.scss";
import { toast } from "react-toastify";
import { TiDeleteOutline } from "react-icons/ti";

//#region listas constantes

const filterTypes = [
  "Titulo",
  "ID",
  "Email",
  "Estado",
  "Cantidad de Ventas",
  "Fecha de Creación",
  "Fecha de Sorteo",
];

const statusList = ["Activo", "Finalizado", "Cancelado"];

const salesList = ["Mas Vendidos", "Menos Vendidos"];

const Raffles = () => {
  //#region variables
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [filtersList, setFiltersList] = useState([]);
  const [rafflesList, setRafflesList] = useState([]);

  //#region getInput
  const getInput = () => {
    //#region input texto
    if (
      filterType === "Titulo" ||
      filterType === "ID" ||
      filterType === "Email"
    ) {
      return (
        <input
          type="text"
          placeholder={filterType}
          onChange={(event) => setFilterValue(event.target.value)}
          value={filterValue}
          className={styles.filter_value_input}
        />
      );
    }

    //#region input estado

    if (filterType === "Estado") {
      return (
        <select
          name=""
          id=""
          value={filterValue}
          className={styles.filter_value_input}
          onChange={(event) => setFilterValue(event.target.value)}
        >
          <option value="">Selecciona el Estado </option>
          {statusList.map((statusName, statusNameIndex) => {
            return (
              <option value={statusName} key={statusNameIndex}>
                {statusName}
              </option>
            );
          })}
        </select>
      );
    }

    //#region input ventas

    if (filterType === "Cantidad de Ventas") {
      return (
        <select
          name=""
          id=""
          value={filterValue}
          className={styles.filter_value_input}
          onChange={(event) => setFilterValue(event.target.value)}
        >
          <option value="">Cantidad de Ventas</option>
          {salesList.map((salesName, salesNameIndex) => {
            return (
              <option value={salesName} key={salesNameIndex}>
                {salesName}
              </option>
            );
          })}
        </select>
      );
    }

    //#region input fecha

    if (
      filterType === "Fecha de Creación" ||
      filterType === "Fecha de Sorteo"
    ) {
      return (
        <input
          type="date"
          className={styles.filter_value_input}
          onClick={(event) => event.target.showPicker()}
          value={filterValue}
          onChange={(event) => setFilterValue(event.target.value)}
        />
      );
    }
  };

  //#region changeFilterType

  const changeFilterType = (event) => {
    setFilterType(event.target.value);
    setFilterValue("");
  };

  //#region handleAddFilter

  const handleAddFilter = (e) => {
    e.preventDefault();

    if (!filterType || !filterValue) {
      toast.error("Debes agregar el tipo de filtro y su valor");
      return;
    }

    setFiltersList([...filtersList, { filterType, filterValue }]);
    setFilterType("");
    setFilterValue("");
  };

  //#region handleDeleteRule

  const handleDeleteRule = (filter) => {
    const filteredList = [...filtersList].filter(
      (element) =>
        !(
          element.filterType === filter.filterType &&
          element.filterValue === filter.filterValue
        )
    );

    setFiltersList(filteredList);
  };

  //#region handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!filtersList.length) {
      toast.error("No tienes filtros a aplicar");
      return;
    }

    // ---> aplicar aquí lógica de petición de filtro
  };

  //#region render

  return (
    <div className={styles.raffles}>
      <form className={styles.filter_bar} onSubmit={handleSubmit}>
        {
          //#region formInputs
        }

        <div className={styles.inputs_container}>
          <select
            name=""
            id=""
            className={styles.select_filter}
            value={filterType}
            onChange={changeFilterType}
          >
            <option value={""} className={styles.select_filter_value}>
              Tipo de Filtro
            </option>
            {filterTypes.map((type, typeIndex) => {
              return (
                <option
                  value={type}
                  className={styles.select_filter_value}
                  key={typeIndex}
                >
                  {type}
                </option>
              );
            })}
          </select>
          {getInput()}
        </div>

        {
          //#region formButtons
        }

        <div className={styles.buttons_container}>
          <span className={styles.filter_button} onClick={handleAddFilter}>
            Agregar Filtro
          </span>
          <span className={styles.filter_button} onClick={handleSubmit}>
            Aplicar Filtros
          </span>
        </div>

        {
          //#region formFiltersList
        }

        <div className={styles.filter_list_container}>
          <div className={styles.filters_header}>
            <span className={styles.filter_name}>Tipo de Filtro</span>
            <span className={styles.filter_name}>Valor</span>
            <span className={styles.filter_status}></span>
          </div>
          {filtersList.map((filter, filterIndex) => {
            return (
              <div className={styles.filter_item} key={filterIndex}>
                <span className={styles.filter_name}>{filter.filterType}</span>
                <span className={styles.filter_name}>{filter.filterValue}</span>
                <span className={styles.delete_filter}>
                  <TiDeleteOutline
                    className={styles.delete_icon}
                    onClick={() => handleDeleteRule(filter)}
                  />
                </span>
              </div>
            );
          })}
        </div>
      </form>

      {
        //#region rafflesList
      }

      <div className={styles.raffles_list_container}>
        <div className={styles.raffle_header}>
          <span className={styles.item_name}>Titulo</span>
          <span className={styles.item_name}>Email</span>
          <span className={styles.item_status}>Status</span>
          <span className={styles.see_details_button}></span>
        </div>
        {rafflesList.map((item, itemIndex) => {
          return (
            <div className={styles.raffle_item} key={itemIndex}>
              <span className={styles.item_name}>{item.title}</span>
              <span className={styles.item_name}>{item.email}</span>
              <span className={styles.item_status}>{item.state}</span>
              <span className={styles.see_details_button}>ver</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Raffles;

import { useState } from "react";
import styles from "./AdminUsers.module.scss";
import { toast } from "react-toastify";
import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const usersList = [
  { name: "nombre1", email: "email1", raffles: "sorteos1", sales: "ventas1" },
  { name: "nombre1", email: "email1", raffles: "sorteos1", sales: "ventas1" },
  { name: "nombre1", email: "email1", raffles: "sorteos1", sales: "ventas1" },
  { name: "nombre1", email: "email1", raffles: "sorteos1", sales: "ventas1" },
  { name: "nombre1", email: "email1", raffles: "sorteos1", sales: "ventas1" },
  {
    name: "adrian camilo gil franco de bernal maldonado",
    email: "adriancamilogilfrancodebernalmaldonado@gmail.mequierensonsacar.com",
    raffles: "este usuario tiene un puto huevo de sorteos disponibles",
    sales:
      "este usuario tiene un puto huevo de ventas realizadas pero lo que vende es culo",
  },
  { name: "nombre1", email: "email1", raffles: "sorteos1", sales: "ventas1" },
  { name: "nombre1", email: "email1", raffles: "sorteos1", sales: "ventas1" },
  { name: "nombre1", email: "email1", raffles: "sorteos1", sales: "ventas1" },
  { name: "nombre1", email: "email1", raffles: "sorteos1", sales: "ventas1" },
];

const filterTypes = [
  "Nombre",
  "Email",
  "Cantidad de sorteos",
  "Cantidad de Ventas",
  "Actividad",
  "Fecha de Creación",
];

const rafflesQuantity = ["Mas Sorteos", "Menos Sorteos"];

const salesQuantity = ["Mas Ventas", "Menos Ventas"];

const activityQuantity = [
  "Recientemente Actualizado",
  "Antiguamente Actualizado",
];

const AdminUsers = () => {
  //#region variables

  const [filtersList, setFiltersList] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [usersList, setUsersList] = useState([]);

  //#region handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!filtersList.length) {
      toast.error("No tienes filtros a aplicar");
      return;
    }
  };

  //#region changeFilterType

  const changeFilterType = (event) => {
    setFilterType(event.target.value);
    setFilterValue("");
  };

  //#region getInput

  const getInput = () => {
    //#region input texto
    if (filterType === "Nombre" || filterType === "Email") {
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

    //#region input cantidad de sorteos

    if (filterType === "Cantidad de sorteos") {
      return (
        <select
          name=""
          id=""
          value={filterValue}
          className={styles.filter_value_input}
          onChange={(event) => setFilterValue(event.target.value)}
        >
          <option value="">Cantidad de sorteos</option>
          {rafflesQuantity.map((quantityName, quantityNameIndex) => {
            return (
              <option value={quantityName} key={quantityNameIndex}>
                {quantityName}
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
          {salesQuantity.map((salesName, salesNameIndex) => {
            return (
              <option value={salesName} key={salesNameIndex}>
                {salesName}
              </option>
            );
          })}
        </select>
      );
    }

    //#region input actividad

    if (filterType === "Actividad") {
      return (
        <select
          name=""
          id=""
          value={filterValue}
          className={styles.filter_value_input}
          onChange={(event) => setFilterValue(event.target.value)}
        >
          <option value="">Cantidad de Ventas</option>
          {activityQuantity.map((activityName, indexActivityName) => {
            return (
              <option value={activityName} key={indexActivityName}>
                {activityName}
              </option>
            );
          })}
        </select>
      );
    }

    //#region input fecha

    if (filterType === "Fecha de Creación") {
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

  //#region render

  return (
    <div className={styles.admin_users}>
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

      <div className={styles.users_list_container}>
        <div className={styles.users_header}>
          <span className={styles.item_name}>Nombre</span>
          <span className={styles.item_name}>Email</span>
          <span className={styles.item_status}>Sorteos</span>
          <span className={styles.item_status}>Ventas</span>
          <span className={styles.see_details_button}></span>
        </div>
        {usersList.map((item, itemIndex) => {
          return (
            <div className={styles.user_item} key={itemIndex}>
              <span className={styles.item_name}>{item.name}</span>
              <span className={styles.item_name}>{item.email}</span>
              <span className={styles.item_status}>{item.raffles}</span>
              <span className={styles.item_status}>{item.sales}</span>
              <span className={styles.see_details_button}>
                <MdOutlineRemoveRedEye
                  className={styles.details_icon}
                  onClick={() => toast.warn("no hay pantalla de detalles")}
                />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminUsers;

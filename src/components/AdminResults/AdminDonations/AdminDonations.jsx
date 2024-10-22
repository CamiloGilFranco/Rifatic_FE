import { useState } from "react";
import styles from "./AdminDonations.module.scss";
import { toast } from "react-toastify";
import { TiDeleteOutline } from "react-icons/ti";

const filterTypes = [
  "Email",
  "Nombre",
  "Valor Exacto",
  "Valor",
  "Fecha de Donación",
];

const donationsList = [
  {
    email: "email del donador",
    name: "nombre del donador",
    value: "las re plata",
    created_at: "20/20/2020",
  },
  {
    email: "email del donador",
    name: "nombre del donador",
    value: "las re plata",
    created_at: "20/20/2020",
  },
  {
    email: "email del donador",
    name: "nombre del donador",
    value: "las re plata",
    created_at: "20/20/2020",
  },
  {
    email: "email del donador",
    name: "nombre del donador",
    value: "las re plata",
    created_at: "20/20/2020",
  },
  {
    email: "email del donador",
    name: "nombre del donador",
    value: "las re plata",
    created_at: "20/20/2020",
  },
  {
    email: "email del donador",
    name: "nombre del donador",
    value: "las re plata",
    created_at: "20/20/2020",
  },
  {
    email: "email del donador",
    name: "nombre del donador",
    value: "las re plata",
    created_at: "20/20/2020",
  },
  {
    email: "email del donador",
    name: "nombre del donador",
    value: "las re plata",
    created_at: "20/20/2020",
  },
  {
    email: "email del donador",
    name: "nombre del donador",
    value: "las re plata",
    created_at: "20/20/2020",
  },
  {
    email: "email del donador",
    name: "nombre del donador",
    value: "las re plata",
    created_at: "20/20/2020",
  },
  {
    email: "email del donador",
    name: "nombre del donador",
    value: "las re plata",
    created_at: "20/20/2020",
  },
  {
    email: "email del donador",
    name: "nombre del donador",
    value: "las re plata",
    created_at: "20/20/2020",
  },
  {
    email: "email del donador",
    name: "nombre del donador",
    value: "las re plata",
    created_at: "20/20/2020",
  },
  {
    email: "email del donador asoihdopaishndkpansdkñanspdnaspkdnaplsndpaskndpñ",
    name: "nombre del donador oliiahnsopidjaposmndñaklsmndñlamnsñdlmañsldmñalsmdñalsmd",
    value:
      "las re plata lknaslñdnñaklsndñ{lamnsdñlamnsñdlnañsklldnñalsndñalsnmdñlamnsdñlansd",
    created_at:
      "20/20/2020 oabhsldnalksndlaksnda sxopias xopasndoiansdoinasodiaso xca soinaops",
  },
];

const sortValues = ["Donaciones mas altas", "Donaciones mas bajas"];

const AdminDonations = () => {
  const [filterType, setFilterType] = useState("");
  const [filtersList, setFiltersList] = useState([]);
  const [filterValue, setFilterValue] = useState("");

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
    if (
      filterType === "Email" ||
      filterType === "Nombre" ||
      filterType === "Valor Exacto"
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

    //#region input Estado

    if (filterType === "Valor") {
      return (
        <select
          name=""
          id=""
          value={filterValue}
          className={styles.filter_value_input}
          onChange={(event) => setFilterValue(event.target.value)}
        >
          <option value="">Ordenar por Valor</option>
          {sortValues.map((sortValue, sortValueIndex) => {
            return (
              <option value={sortValue} key={sortValueIndex}>
                {sortValue}
              </option>
            );
          })}
        </select>
      );
    }

    //#region input fecha

    if (filterType === "Fecha de Donación") {
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

  return (
    <div className={styles.admin_donations}>
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
        //#region donationsList
      }

      <div className={styles.donation_list_container}>
        <div className={styles.donations_header}>
          <span className={styles.item_name}>Nombre de Usuario</span>
          <span className={styles.item_name}>Email</span>
          <span className={styles.item_name}>Valor</span>
          <span className={styles.item_name}>Fecha de Solicitud</span>
        </div>
        {donationsList.map((item, itemIndex) => {
          return (
            <div className={styles.donations_item} key={itemIndex}>
              <span className={styles.item_name}>{item.name}</span>
              <span className={styles.item_name}>{item.email}</span>
              <span className={styles.item_name}>{item.value}</span>
              <span className={styles.item_name}>{item.created_at}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminDonations;

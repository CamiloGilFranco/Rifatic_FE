import { useEffect, useState } from "react";
import styles from "./AdminReports.module.scss";
import { toast } from "react-toastify";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import SolveReportModal from "./SolveReportModal/SolveReportModal";

const reportsList = [
  {
    reporter_name: "este es el nombre del que hizo el reporte",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?",
    report_state: "Pendiente",
    response: "",
    created_at: "01-01-2020",
  },
  {
    reporter_name: "este es el nombre del que hizo el reporte",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?",
    report_state: "Pendiente",
    response: "",
    created_at: "01-01-2020",
  },
  {
    reporter_name: "este es el nombre del que hizo el reporte",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?",
    report_state: "Pendiente",
    response: "",
    created_at: "01-01-2020",
  },
  {
    reporter_name: "este es el nombre del que hizo el reporte",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?",
    report_state: "Resuelto",
    response: "",
    created_at: "01-01-2020",
  },
  {
    reporter_name: "este es el nombre del que hizo el reporte",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?",
    report_state: "Resuelto",
    response: "",
    created_at: "01-01-2020",
  },
  {
    reporter_name: "este es el nombre del que hizo el reporte",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?",
    report_state: "Resuelto",
    response: "",
    created_at: "01-01-2020",
  },
  {
    reporter_name: "este es el nombre del que hizo el reporte",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?",
    report_state: "Resuelto",
    response: "",
    created_at: "01-01-2020",
  },
  {
    reporter_name: "este es el nombre del que hizo el reporte",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?",
    report_state: "Resuelto",
    response: "",
    created_at: "01-01-2020",
  },
  {
    reporter_name: "este es el nombre del que hizo el reporte",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?",
    report_state: "Resuelto",
    response: "",
    created_at: "01-01-2020",
  },
  {
    reporter_name: "este es el nombre del que hizo el reporte",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?",
    report_state: "Resuelto",
    response:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusamus delectus animi odio aliquam iure esse corporis molestiae deserunt veniam quae quas voluptatibus cupiditate, nihil enim necessitatibus, suscipit consequatur quis?",
    created_at: "01-01-2020",
  },
];

const filterTypes = ["Email", "Estado", "Fecha de Creación"];

const statesList = ["Pendiente", "Resuelto"];

const AdminReports = () => {
  const [filtersList, setFiltersList] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [showSolveModal, setShowSolveModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState({});

  useEffect(() => {
    if (!showSolveModal) {
      setSelectedReport({});
    }
  }, [showSolveModal]);

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
    if (filterType === "Email") {
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

    if (filterType === "Estado") {
      return (
        <select
          name=""
          id=""
          value={filterValue}
          className={styles.filter_value_input}
          onChange={(event) => setFilterValue(event.target.value)}
        >
          <option value="">Cantidad de sorteos</option>
          {statesList.map((stateName, StateNameIndex) => {
            return (
              <option value={stateName} key={StateNameIndex}>
                {stateName}
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
          <span className={styles.item_name}>Nombre de Usuario</span>
          <span className={styles.item_name}>Estado</span>
          <span className={styles.item_name}>Fecha de Solicitud</span>
          <span className={styles.see_details_button}></span>
        </div>
        {reportsList.map((item, itemIndex) => {
          return (
            <div className={styles.user_item} key={itemIndex}>
              <span className={styles.item_name}>{item.reporter_name}</span>
              <span className={styles.item_name}>{item.report_state}</span>
              <span className={styles.item_name}>{item.created_at}</span>
              <span className={styles.see_details_button}>
                <MdOutlineRemoveRedEye
                  className={styles.details_icon}
                  onClick={() => {
                    setSelectedReport(item);
                    setShowSolveModal(true);
                  }}
                />
              </span>
            </div>
          );
        })}
      </div>
      {showSolveModal && (
        <SolveReportModal
          report={selectedReport}
          setShowSolveModal={setShowSolveModal}
        />
      )}
    </div>
  );
};

export default AdminReports;

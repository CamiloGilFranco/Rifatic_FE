import styles from "./RaffleForm.module.scss";
import InputField from "./../../ui/InputField/InputField";
import FileInput from "../../ui/FileInput/FileInput";
import TextAreaInput from "../../ui/TextAreaInput/TextAreaInput";
import SelectInput from "../../ui/SelectInput/SelectInput";
import DateInput from "../../ui/DateInput/DateInput";
import CheckInput from "../../ui/CheckInput/CheckInput";

const RaffleForm = ({ setFormData }) => {
  return (
    <div className={styles.raffle_form}>
      <InputField label="Título de la Rifa" />
      <FileInput />
      <TextAreaInput label="Descripción de la Rifa" />
      <SelectInput
        label="Categoría de la Rifa"
        options={["Opción 1", "Opción 2", "Opción 3"]}
      />
      <DateInput label="Fecha de Finalización" />
      <CheckInput
        label="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae debitis fugiat, maxime quaerat vero eum itaque, tempora, officiis placeat at saepe facilis. Dolores animi ipsam debitis ut earum exercitationem aliquid."
        checked={true}
      />
    </div>
  );
};

export default RaffleForm;

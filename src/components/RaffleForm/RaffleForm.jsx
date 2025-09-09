import styles from "./RaffleForm.module.scss";
import InputField from "./../../ui/InputField/InputField";
import FileInput from "../../ui/FileInput/FileInput";
import TextAreaInput from "../../ui/TextAreaInput/TextAreaInput";
import SelectInput from "../../ui/SelectInput/SelectInput";

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
    </div>
  );
};

export default RaffleForm;

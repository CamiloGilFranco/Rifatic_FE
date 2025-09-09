import styles from "./RaffleForm.module.scss";
import InputField from "./../../ui/InputField/InputField";
import FileInput from "../../ui/FileInput/FileInput";
import TextAreaInput from "../../ui/TextAreaInput/TextAreaInput";

const RaffleForm = ({ setFormData }) => {
  return (
    <div className={styles.raffle_form}>
      <InputField label="Título de la Rifa" />
      <FileInput />
      <TextAreaInput label="Descripción de la Rifa" rows={6} />
    </div>
  );
};

export default RaffleForm;

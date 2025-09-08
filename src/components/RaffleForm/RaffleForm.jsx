import styles from "./RaffleForm.module.scss";
import InputField from "./../../ui/InputField/InputField";
import FileInput from "../../ui/FileInput/FileInput";

const RaffleForm = ({ setFormData }) => {
  return (
    <div className={styles.raffle_form}>
      <InputField label="Título de la Rifa" />
      <FileInput />
    </div>
  );
};

export default RaffleForm;

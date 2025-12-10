import styles from "./RaffleForm.module.scss";
import SelectInput from "../../ui/SelectInput/SelectInput";
import ClasicRaffleForm from "../ClasicRaffleForm/ClasicRaffleForm";
import { useMemo } from "react";
import SocialMediaRaffleForm from "../SocialMediaRaffleForm/SocialMediaRaffleForm";

const raffleTypes = ["Rifa", "Giveaway de Instagram", "Amigo Secreto"];

const selectedForm = {
  Rifa: { form: ClasicRaffleForm },
  "Giveaway de Instagram": { form: SocialMediaRaffleForm },
  "Amigo Secreto": {},
};

const RaffleForm = ({ setFormData, formData }) => {
  console.log(formData.drawDate);

  const FormComponent = useMemo(() => {
    return selectedForm[formData.raffleType]?.form || null;
  }, [formData.raffleType]);

  return (
    <div className={styles.raffle_form}>
      <SelectInput
        label="Tipo de sorteo"
        options={raffleTypes}
        setter={(selectedValue) =>
          setFormData((prev) => ({ ...prev, raffleType: selectedValue }))
        }
        value={formData.raffleType}
      />

      {FormComponent && (
        <FormComponent setFormData={setFormData} formData={formData} />
      )}
      {/* <InputField label="Título de la Rifa" />
      <FileInput />
      <TextAreaInput label="Descripción de la Rifa" />
      <DateInput label="Fecha de Finalización" />
      <CheckInput
        label="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae debitis fugiat, maxime quaerat vero eum itaque, tempora, officiis placeat at saepe facilis. Dolores animi ipsam debitis ut earum exercitationem aliquid."
        checked={true}
      /> */}
    </div>
  );
};

export default RaffleForm;

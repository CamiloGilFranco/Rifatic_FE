import { useEffect } from "react";
import CheckInput from "../../ui/CheckInput/CheckInput";
import DateInput from "../../ui/DateInput/DateInput";
import FileInput from "../../ui/FileInput/FileInput";
import InputField from "../../ui/InputField/InputField";
import SelectInput from "../../ui/SelectInput/SelectInput";
import TextAreaInput from "../../ui/TextAreaInput/TextAreaInput";
import styles from "./ClasicRaffleForm.module.scss";

const loteries = [
  "Lotería de Cundinamarca",
  "Lotería de La Cruz Roja",
  "Lotería del Meta",
  "Lotería de Bogotá",
  "Lotería de Medellin",
  "Lotería de Boyacá",
];

const numberOfDigits = ["1", "2", "3", "4"];

const ClasicRaffleForm = ({ setFormData, formData }) => {
  useEffect(() => {
    setFormData((prev) => ({ ...prev, drawDate: null }));
  }, [formData.lottery]);

  const filterDay = (date) => {
    const day = date.getDay();

    switch (formData.lottery) {
      case "Lotería de Cundinamarca":
        return day === 1;
      case "Lotería de La Cruz Roja":
        return day === 2;
      case "Lotería del Meta":
        return day === 3;
      case "Lotería de Bogotá":
        return day === 4;
      case "Lotería de Medellin":
        return day === 5;
      case "Lotería de Boyacá":
        return day === 6;
      default:
        return day === 8;
    }
  };

  return (
    <div className={styles.clasic_raffle_form}>
      <InputField
        label="Título de la Rifa"
        placeholder="Ingrese el título de la rifa"
        value={formData.title}
        setter={(value) => setFormData((prev) => ({ ...prev, title: value }))}
      />
      <FileInput
        label="Imagen de la Rifa"
        onFileSelect={(file) =>
          setFormData((prev) => ({ ...prev, image: file }))
        }
      />
      <TextAreaInput
        label="Descripción de la Rifa"
        placeholder="Ingrese la descripción de la rifa"
        value={formData.description}
        setter={(value) =>
          setFormData((prev) => ({ ...prev, description: value }))
        }
      />
      <SelectInput
        options={loteries}
        value={formData.lottery}
        setter={(value) => setFormData((prev) => ({ ...prev, lottery: value }))}
        placeholder={"Seleccione la lotería"}
        label="Lotería"
      />
      <DateInput
        label="Fecha de la Rifa"
        value={formData.drawDate}
        setter={(value) => {
          console.log(value);
          setFormData((prev) => ({ ...prev, drawDate: value }));
        }}
        minDate={new Date()}
        filterDate={filterDay}
      />
      <SelectInput
        options={numberOfDigits}
        value={formData.numberOfDigits}
        setter={(value) =>
          setFormData((prev) => ({ ...prev, numberOfDigits: value }))
        }
        label="Número de Dígitos"
      />
      <InputField
        label="Precio del Boleto"
        placeholder="Ingrese el precio de cada numero"
        value={formData.ticketPrice}
        setter={(value) =>
          setFormData((prev) => ({ ...prev, ticketPrice: value }))
        }
        icon={"money"}
        type="number"
      />
      <CheckInput
        label={
          "¿Mostrar mi número de teléfono para que posibles compradores me contacten?"
        }
        checked={formData.showPhone}
        setter={(value) =>
          setFormData((prev) => ({ ...prev, showPhone: value }))
        }
      />
    </div>
  );
};

export default ClasicRaffleForm;

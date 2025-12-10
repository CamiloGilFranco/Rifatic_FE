import CheckInput from "../../ui/CheckInput/CheckInput";
import DateInput from "../../ui/DateInput/DateInput";
import FileInput from "../../ui/FileInput/FileInput";
import InputField from "../../ui/InputField/InputField";
import TextAreaInput from "../../ui/TextAreaInput/TextAreaInput";

import styles from "./SocialMediaRaffleForm.module.scss";

const SocialMediaRaffleForm = ({ setFormData, formData }) => {
  return (
    <div className={styles.SocialMediaRaffleForm}>
      <InputField
        label="Título del Sorteo"
        placeholder="Ingrese el título del sorteo"
        value={formData.title}
        setter={(value) => setFormData((prev) => ({ ...prev, title: value }))}
      />
      <FileInput
        label="Imagen de la Rifa"
        onFileSelect={(file) =>
          setFormData((prev) => ({ ...prev, image: file }))
        }
      />
      <InputField
        label="URL de la publicacion"
        placeholder="Ingrese la URL de la publicacion"
        value={formData.socialMediaUrl}
        setter={(value) =>
          setFormData((prev) => ({ ...prev, socialMediaUrl: value }))
        }
      />
      <InputField
        label="Cantidad de ganadores"
        placeholder="Ingrese la cantidad de ganadores"
        value={formData.winnersNumber}
        setter={(value) =>
          setFormData((prev) => ({ ...prev, winnersNumber: value }))
        }
        type="number"
      />
      <InputField
        label="Cantidad de sustitutos"
        placeholder="Ingrese la cantidad de sustitutos"
        value={formData.substitutesNumber}
        setter={(value) =>
          setFormData((prev) => ({ ...prev, substitutesNumber: value }))
        }
        type="number"
      />
      <TextAreaInput
        label="Eliminar comentarios que no contengan"
        placeholder="Ingrese el contenido que deben tener los comentarios para participar separado por comas"
        value={formData.commentContent}
        setter={(value) =>
          setFormData((prev) => ({ ...prev, commentContent: value }))
        }
      />
      <DateInput
        label="Fecha limite para participar"
        value={formData.limitDate}
        setter={(value) =>
          setFormData((prev) => ({ ...prev, limitDate: value }))
        }
      />
      <CheckInput
        label={"Permitir multiples participaciones por persona"}
        checked={formData.multipleParticipations}
        setter={(value) =>
          setFormData((prev) => ({ ...prev, multipleParticipations: value }))
        }
      />
      <TextAreaInput
        label="Validar que se sigan las siguientes cuentas"
        placeholder="Ingrese las cuentas que deben seguirse para participar separadas por comas"
        value={formData.validateFollows}
        setter={(value) =>
          setFormData((prev) => ({ ...prev, validateFollows: value }))
        }
      />
      <InputField
        label="Número de menciones por comentario"
        placeholder="Ingrese la cantidad de menciones por comentario"
        value={formData.mentionsNumber}
        setter={(value) =>
          setFormData((prev) => ({ ...prev, mentionsNumber: value }))
        }
        type="number"
      />
    </div>
  );
};

export default SocialMediaRaffleForm;

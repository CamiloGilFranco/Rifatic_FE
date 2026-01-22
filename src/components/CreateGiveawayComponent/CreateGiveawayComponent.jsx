import styles from "./CreateGiveawayComponent.module.scss";
import MyRaffleCardComponent from "../MyRaffleCardComponent/MyRaffleCardComponent.jsx";
import { useState } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { envVariables } from "../../constants/envVariables.js";
import { HandlerFetchError } from "../../utils/FetchErrors.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RaffleForm from "../RaffleForm/RaffleForm.jsx";
import { routes } from "../../constants/routes.js";
import CheckInput from "../../ui/CheckInput/CheckInput.jsx";
import MyButton from "../../ui/MyButton/MyButton.jsx";
import RaffleCard from "../RaffleCard/RaffleCard.jsx";

const emptyForm = {
  raffleType: "",
  title: "",
  image: null,
  description: "",
  lottery: "",
  drawDate: "",
  numberOfDigits: "",
  ticketPrice: "",
  showPhone: false,
  termsAndConditions: false,
  socialMediaUrl: "",
  winnersNumber: "",
  substitutesNumber: "",
  commentContent: "",
  limitDate: "",
  multipleParticipations: false,
  validateFollows: "",
  mentionsNumber: "",
  //listType: "",
  //participantsList: [{ name: "", email: "" }],
  //sweeten: false,
  //sweetenFrequency: "",
  //minimumPrice: "",
  AddOrganizerName: false,
};

const CreateGiveawayComponent = ({ phoneNumber }) => {
  const [formData, setFormData] = useState({ ...emptyForm });

  console.log(formData);

  const auth = useSelector((state) => state.authSlice);
  const theme = useSelector((state) => state.themeSlice);

  const token = auth._tkn;
  const navigate = useNavigate();

  const handleSubmit = async () => {
    //  TODO Validaciones

    const areYouSure = await Swal.fire({
      title: "¿Estas seguro de crear tu rifa con los datos suministrados?",
      text: "No podrás modificarlos una vez creada la rifa",
      icon: "warning",
      showCancelButton: true,
      //  TODO usar colores de redux
      confirmButtonColor: "#6d28d9",
      cancelButtonColor: "#ef4444",
      confirmButtonText: `Continuar`,
      cancelButtonText: `Cancelar`,
    });

    if (!areYouSure.isConfirmed) {
      return;
    }

    try {
      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (key === "image") {
          data.append("image", value, "image");
        } else {
          data.append(key, value);
        }
      });

      await axios.post(`${envVariables.API_URL}giveaways`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      /* const newGiveawaysList = [
        response.data.newGiveaway,
        ...userData.giveaways,
      ]; */

      /* setUserData({ ...userData, giveaways: newGiveawaysList }); */

      toast.success("Tu rifa fue creada!!!");
      navigate(routes.myRaffles);
    } catch (error) {
      HandlerFetchError(error, navigate);
    }
  };

  return (
    <div className={styles.create_giveaway}>
      <form className={styles.new_raffle_form}>
        <h2 className={styles.card_title}>Nueva Rifa</h2>
        <RaffleForm setFormData={setFormData} formData={formData} />
      </form>
      <div className={styles.container_right}>
        <h2 className={styles.card_title}>Vista Previa</h2>
        <MyRaffleCardComponent
          title={formData.title}
          image={formData.image}
          description={formData.description}
          drawDate={formData.drawDate}
          numberOfDigits={formData.numberOfDigits}
          lottery={formData.lottery}
          ticketPrice={formData.ticketPrice}
          showPhone={formData.showPhone}
          phoneNumber={phoneNumber}
        />
        <RaffleCard
          title={formData.title}
          image={formData.image}
          description={formData.description}
          drawDate={formData.drawDate}
          numberOfDigits={formData.numberOfDigits}
          lottery={formData.lottery}
          ticketPrice={formData.ticketPrice}
          showPhone={formData.showPhone}
          phoneNumber={phoneNumber}
        />
      </div>
      <div className={styles.terms_conditions_container}>
        <li>
          RIFATIC permite la venta de boletas hasta las 24 horas del dia
          anterior a la fecha el sorteo
        </li>
        <li>
          La plataforma RIFATIC valida de forma automática el ganador de cada
          rifa en un plazo de hasta 24 horas después de efectuado el sorteo por
          la lotería correspondiente y se envía un correo electrónico al
          ganador.
        </li>
        <li>
          RIFATIC no se encarga del recaudo de dinero ni de la entrega del
          premio.
        </li>
        <CheckInput
          label={"Acepto los Términos y Condiciones"}
          checked={formData.termsAndConditions}
          setter={(value) =>
            setFormData((prev) => ({
              ...prev,
              termsAndConditions: value,
            }))
          }
        />

        <div className={styles.button_container}>
          <MyButton
            text="Crear Rifa"
            backgroundColor={theme.primary}
            fontColor={theme.textLight}
            width={150}
            event={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateGiveawayComponent;

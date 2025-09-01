import { useSelector } from "react-redux";
import styles from "./CTASection.module.scss";
import MyButton from "../../ui/MyButton/MyButton";
import IconSelector from "../../ui/IconSelector/IconSelector";

const CTASection = () => {
  const theme = useSelector((state) => state.themeSlice);

  return (
    <section
      className={styles.section}
      style={{
        color: theme.textLight,
        background: `linear-gradient(90deg, ${theme.primary} 0%, ${theme.accent} 100%)`,
      }}
    >
      <div className={styles.container}>
        <div className={styles.inner}>
          <IconSelector name="sparks" />

          <h2 className={styles.title}>
            ¿Listo para Elevar tu Experiencia de Sorteos?
          </h2>

          <p className={styles.subtitle}>
            Únete a miles de organizadores que ya confían en RaffleMax. Comienza
            gratis y descubre el poder de los sorteos profesionales.
          </p>

          <div className={styles.ctaRow}>
            <MyButton
              text="Comenzar Gratis Ahora"
              backgroundColor={theme.bgLight}
              textSize="1.125rem"
              icon="right-arrow"
              height="3rem"
            />
            <MyButton
              text="Hablar con Ventas"
              textSize="1.125rem"
              lineColor={theme.bgLight}
              fontColor={theme.bgLight}
              height="3rem"
            />
          </div>

          <p className={styles.finePrint}>
            Sin tarjeta de crédito requerida • Configuración en 5 minutos •
            Soporte 24/7
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

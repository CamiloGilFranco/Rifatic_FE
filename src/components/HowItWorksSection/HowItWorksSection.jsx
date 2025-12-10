import { useSelector } from "react-redux";
import styles from "./HowItWorksSection.module.scss";
import IconSelector from "../../ui/IconSelector/IconSelector.jsx";

const steps = [
  {
    icon: "gear",
    title: "Configura tu Sorteo",
    description:
      "Define las reglas, premios y fechas de tu sorteo de manera sencilla con nuestro editor intuitivo.",
  },
  {
    icon: "people",
    title: "Invita Participantes",
    description:
      "Comparte tu sorteo a través de redes sociales, email o enlaces directos para maximizar la participación.",
  },
  {
    icon: "trophy",
    title: "Selecciona Ganadores",
    description:
      "Nuestro algoritmo transparente y verificable selecciona los ganadores de forma completamente aleatoria.",
  },
];

const HowItWorksSection = () => {
  const theme = useSelector((state) => state.themeSlice);

  return (
    <section
      id="how-it-works"
      className={styles.section}
      style={{ background: theme.bgLight, color: theme.foreground }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>¿Cómo Funciona?</h2>
          <p
            className={styles.subtitle}
            style={{ color: theme.mutedForeground }}
          >
            Crear y gestionar sorteos nunca fue tan simple. Sigue estos 3 pasos
            y tendrás tu sorteo listo.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((Step, index) => {
            return (
              <article
                key={index}
                className={styles.card}
                style={{
                  background: theme.bgLight,
                  borderColor: theme.border,
                  "--card-hover": theme.primary,
                }}
              >
                <div className={styles.cardContent}>
                  <div
                    className={styles.iconCircle}
                    style={{
                      background: `${theme.primary}40`,
                      color: theme.primary,
                    }}
                  >
                    <IconSelector name={Step.icon} />
                  </div>
                  <h3 className={styles.cardTitle}>{Step.title}</h3>
                  <p
                    className={styles.cardText}
                    style={{ color: theme.mutedForeground }}
                  >
                    {Step.description}
                  </p>
                  <div
                    className={styles.cardStep}
                    style={{ color: theme.primary }}
                  >
                    Paso {index + 1}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

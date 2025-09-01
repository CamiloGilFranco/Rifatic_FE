import { useSelector } from "react-redux";
import styles from "./HeroSection.module.scss";
import MyButton from "../../ui/MyButton/MyButton";

const HeroSection = () => {
  const theme = useSelector((state) => state.themeSlice);
  return (
    <section
      className={styles.section}
      style={{ background: theme.secondary, color: theme.textLight }}
    >
      <div
        className={styles.bubbleA}
        style={{ background: `rgba(${theme.accent}, 0.2)` }}
      />
      <div
        className={styles.bubbleB}
        style={{ background: `rgba(${theme.primary}, 0.2)` }}
      />

      <div className={styles.container}>
        <div className={styles.centered}>
          <h1 className={styles.title}>
            ¡Transforma tus{" "}
            <span
              className={styles.titlePrimary}
              style={{ color: theme.primary }}
            >
              Sorteos
            </span>{" "}
            con Facilidad!
          </h1>

          <p
            className={styles.subtitle}
            style={{ color: theme.mutedForeground }}
          >
            Gestiona, promociona y ejecuta sorteos y rifas de manera eficiente y
            profesional. La plataforma más confiable para tus eventos.
          </p>

          <div className={styles.ctaRow}>
            <MyButton
              text="Comenzar Gratis"
              height={45}
              backgroundColor={theme.primary}
              fontColor={theme.textLight}
              textSize="1.125rem"
              icon="right-arrow"
            />

            <MyButton
              text="Ver Demo"
              height={45}
              fontColor={theme.textLight}
              textSize="1.125rem"
              lineColor={theme.border}
              hoverColor={theme.textMiddle}
              icon="play"
            />
          </div>

          <div
            className={styles.metricsGrid}
            style={{ borderColor: theme.border }}
          >
            <div className={styles.metricBox}>
              <div
                className={styles.metricValue}
                style={{ color: theme.pprimary }}
              >
                100%
              </div>
              <div
                className={styles.metricLabel}
                style={{ color: theme.mutedForeground }}
              >
                Transparente y Seguro
              </div>
            </div>
            <div className={styles.metricBox}>
              <div
                className={styles.metricValue}
                style={{ color: theme.pprimary }}
              >
                Fácil
              </div>
              <div
                className={styles.metricLabel}
                style={{ color: theme.mutedForeground }}
              >
                Configuración en Minutos
              </div>
            </div>
            <div className={styles.metricBox}>
              <div
                className={styles.metricValue}
                style={{ color: theme.pprimary }}
              >
                24/7
              </div>
              <div
                className={styles.metricLabel}
                style={{ color: theme.mutedForeground }}
              >
                Soporte Disponible
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

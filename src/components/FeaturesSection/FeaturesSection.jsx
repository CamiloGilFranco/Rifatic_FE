import { useSelector } from "react-redux";
import styles from "./FeaturesSection.module.scss";
import IconSelector from "../../ui/IconSelector/IconSelector";

const features = [
  {
    icon: "chart",
    title: "Dashboard Intuitivo",
    description:
      "Panel de control fácil de usar con métricas en tiempo real y gestión completa de tus sorteos.",
  },
  {
    icon: "shield",
    title: "Transacciones Seguras",
    description:
      "Máxima seguridad en todos los procesos con encriptación de datos y cumplimiento normativo.",
  },
  {
    icon: "people",
    title: "Gestión de Participantes",
    description:
      "Administra participantes, verifica identidades y mantén un registro completo y transparente.",
  },
  {
    icon: "lightning",
    title: "Sorteos Automáticos",
    description:
      "Algoritmos certificados para sorteos justos y transparentes con resultados instantáneos.",
  },
  {
    icon: "trophy",
    title: "Múltiples Premios",
    description:
      "Configura sorteos con múltiples ganadores y diferentes tipos de premios fácilmente.",
  },
  {
    icon: "gear",
    title: "Personalización Total",
    description:
      "Adapta la plataforma a tu marca con temas personalizados y configuraciones avanzadas.",
  },
];

const FeaturesSection = () => {
  const theme = useSelector((state) => state.themeSlice);

  return (
    <section
      id="features"
      className={styles.section}
      style={{ background: theme.bgLight, color: theme.foreground }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Características Poderosas</h2>
          <p
            className={styles.subtitle}
            style={{ color: theme.mutedForeground }}
          >
            Todo lo que necesitas para gestionar sorteos y rifas de manera
            profesional
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((f, idx) => {
            return (
              <article
                key={idx}
                className={styles.card}
                style={{
                  background: theme.bgLight,
                  borderColor: theme.border,
                  "--hover-shadow": theme.buttonShadow,
                }}
              >
                <div className={styles.cardHeader}>
                  <div
                    className={styles.iconBox}
                    style={{
                      background: `${theme.primary}40`,
                      color: theme.primary,
                    }}
                  >
                    <IconSelector name={f.icon} />
                  </div>
                  <h3 className={styles.cardTitle}>{f.title}</h3>
                </div>
                <div className={styles.cardContent}>
                  <p
                    className={styles.cardText}
                    style={{ color: theme.mutedForeground }}
                  >
                    {f.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

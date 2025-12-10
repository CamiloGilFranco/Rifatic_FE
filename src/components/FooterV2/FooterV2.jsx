import { useSelector } from "react-redux";
import styles from "./FooterV2.module.scss";
import IconSelector from "../../ui/IconSelector/IconSelector.jsx";
import appName from "../../constants/appName.js";

const FooterV2 = () => {
  const theme = useSelector((state) => state.themeSlice);

  const linkStyles = {
    color: `${theme.bgLight}99`,
    "--hover-color": theme.accent,
  };

  return (
    <footer
      className={styles.footer}
      style={{ background: theme.foreground, color: theme.bgLight }}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.brandRow}>
              <IconSelector name={"dice"} />
              <span className={styles.brandName}>RaffleMax</span>
            </div>
            <p
              className={styles.brandText}
              style={{ color: `${theme.bgLight}99` }}
            >
              La plataforma más confiable para gestionar sorteos y rifas de
              manera profesional.
            </p>
            <div className={styles.socials}>
              <a
                href="#"
                aria-label="Facebook"
                className={styles.socialLink}
                style={{
                  color: `${theme.bgLight}70`,
                  "--hover-color": theme.accent,
                }}
              >
                <IconSelector name={"facebook"} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className={styles.socialLink}
                style={{
                  color: `${theme.bgLight}70`,
                  "--hover-color": theme.accent,
                }}
              >
                <IconSelector name={"twitter"} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className={styles.socialLink}
                style={{
                  color: `${theme.bgLight}70`,
                  "--hover-color": theme.accent,
                }}
              >
                <IconSelector name={"twitter"} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className={styles.socialLink}
                style={{ color: `${theme.bgLight}70` }}
              >
                <IconSelector name={"linkedin"} />
              </a>
            </div>
          </div>

          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>Producto</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#features" className={styles.link} style={linkStyles}>
                  Características
                </a>
              </li>
              <li>
                <a href="#" className={styles.link} style={linkStyles}>
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className={styles.link} style={linkStyles}>
                  API
                </a>
              </li>
              <li>
                <a href="#" className={styles.link} style={linkStyles}>
                  Integraciones
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>Soporte</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.link} style={linkStyles}>
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#" className={styles.link} style={linkStyles}>
                  Documentación
                </a>
              </li>
              <li>
                <a href="#support" className={styles.link} style={linkStyles}>
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className={styles.link} style={linkStyles}>
                  Estado del Sistema
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>Legal</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.link} style={linkStyles}>
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className={styles.link} style={linkStyles}>
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className={styles.link} style={linkStyles}>
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className={styles.link} style={linkStyles}>
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={styles.bottomBar}
          style={{
            borderTopColor: `${theme.bgLight}20`,
            color: `${theme.bgLight}60`,
          }}
        >
          <p>© 2025 {appName}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterV2;

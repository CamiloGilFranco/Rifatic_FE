import styles from "./TermsAndConditionsModalComponent.module.scss";

const TermsAndConditionsModalComponent = ({ setTerms, setShowModal }) => {
  return (
    <div className={styles.terms_and_conditions_component}>
      <div
        className={styles.background}
        onClick={() => setShowModal(false)}
      ></div>
      <div className={styles.modal_container}>
        <div className={styles.text_container}>
          <h2 className={styles.title}>Política de tratamiento de datos</h2>
          <h3 className={styles.subtitle}>PRESENTACIÓN</h3>
          <p className={styles.paragraph}>
            <span className={styles.bold}>RIFATIC</span> se encuentra
            comprometido con la Protección de datos Personales en concordancia
            con la{" "}
            <span className={styles.bold}>Ley Estatutaria 1581 de 2012</span>{" "}
            ‘Régimen general de protección de datos personales’, que dicta las
            disposiciones generales para la protección de datos personales, y lo
            establecido en la Constitución Política de Colombia en sus artículos
            15 y 20, en los cuales se reconoce como derecho fundamental de todas
            las personas el derecho a su intimidad personal, familiar y a su
            buen nombre; a conocer, actualizar y rectificar las informaciones
            que se hayan recogido sobre ellas en bancos de datos y en archivos
            de entidades públicas y privadas, garantizado el derecho a la
            rectificación en condiciones de equidad.
          </p>
          <h3 className={styles.subtitle}>OBJETIVO</h3>
          <p className={styles.paragraph}>
            Establecer los criterios para la recolección, almacenamiento, uso,
            actualización, circulación y supresión de los datos personales
            tratados por <span className={styles.bold}>RIFATIC</span>.
          </p>
          <h3 className={styles.subtitle}>ALCANCE</h3>
          <p className={styles.paragraph}>
            Esta política aplica para toda la información personal registrada en
            las bases de datos de <span className={styles.bold}>RIFATIC</span>,
            relacionadas con datos personales de ciudadanos, funcionarios,
            contratistas, proveedores, personal externo, asociados de RIFATIC,
            en general, todas las personas que hagan uso de los canales y
            servicios asociados a RIFATIC y/o que tengan acceso a los datos
            personales recolectados en los diferentes canales, aplicaciones y/o
            documentos definidos por RIFATIC, quien actúa como responsable del
            tratamiento de datos personales.
          </p>
          <h3 className={styles.subtitle}>OBLIGACIONES</h3>
          <p className={styles.paragraph}>
            Esta política es de obligatorio y estricto cumplimiento para
            RIFATIC, como responsable del tratamiento de los datos personales.
          </p>
          <h3 className={styles.subtitle}>RESPONSABLE DEL TRATAMIENTO</h3>
          <p className={styles.paragraph}>
            RIFATIC de Colombia. Página web https://rifatic.com, en la ciudad de
            Bogotá.
          </p>
          <h3 className={styles.subtitle}>TRATAMIENTO Y FINALIDAD</h3>
          <p className={styles.paragraph}>
            El tratamiento que realizará{" "}
            <span className={styles.bold}>RIFATIC</span> con la información
            personal será el siguiente:
            <li className={styles.list}>
              Recolección, almacenamiento, uso, actualización, circulación y
              supresión de los datos personales.
            </li>
            <li className={styles.list}>
              Efectuar las gestiones pertinentes para el desarrollo de la
              operación del servicio de RIFATIC.
            </li>
            <li className={styles.list}>
              Gestionar soporte (solicitudes, quejas, reclamos).
            </li>
            <li className={styles.list}>
              Efectuar encuestas de satisfacción de los bienes y servicios
              ofrecidos por RIFATIC
            </li>
            <li className={styles.list}>
              Contactar al cliente a través de medios telefónicos, SMS o correo
              electrónico para realizar encuestas, estudios y/o notificación de
              procesos en RIFATIC.
            </li>
            <li className={styles.list}>
              Los siguientes literales podrán ser aplicables para clientes y
              participantes de rifas o sorteos.
            </li>
          </p>
          <h3 className={styles.subtitle}>DERECHOS DE LOS TITULARES</h3>
          <p className={styles.paragraph}>
            El Titular de los datos personales tiene derecho a:
            <li className={styles.list}>
              Acceder de forma gratuita a los datos proporcionados que hayan
              sido objeto de tratamiento.
            </li>
            <li className={styles.list}>
              Conocer, actualizar y rectificar su información frente a datos
              parciales, inexactos, incompletos, fraccionados, que induzcan a
              error, o aquellos cuyo tratamiento esté prohibido o no haya sido
              autorizado.
            </li>
            <li className={styles.list}>
              Solicitar prueba de la autorización otorgada.
            </li>
            <li className={styles.list}>
              Revocar la autorización y/o solicitar la supresión del dato,
              siempre que no exista un deber legal o contractual que impida
              eliminarlos.
            </li>
            <li className={styles.list}>
              Abstenerse de responder las preguntas sobre datos sensibles.
              Tendrá carácter facultativo las respuestas que versen sobre datos
              sensibles o sobre datos de las niñas y niños y adolescentes.
            </li>
          </p>
          <h3 className={styles.subtitle}>
            PROCEDIMIENTO PARA EL EJERCICIO DEL DERECHO DE HABEAS DATA
          </h3>
          <p className={styles.paragraph}>
            En cumplimiento de las normas sobre protección de datos personales,
            RIFATIC presenta el procedimiento y requisitos mínimos para el
            ejercicio de sus derechos: Para la radicación y atención de su
            solicitud le solicitamos suministrar la siguiente información:
            <li className={styles.list}>Nombre completo y apellidos.</li>
            <li className={styles.list}>
              Datos de contacto (Dirección física y/o electrónica y teléfonos de
              contacto).
            </li>
            <li className={styles.list}>
              Medios para recibir respuesta a su solicitud.
            </li>
            <li className={styles.list}>
              Motivo(s)/hecho(s) que dan lugar al reclamo con una breve
              descripción del derecho que desea ejercer (conocer, actualizar,
              rectificar, solicitar prueba de la autorización otorgada,
              revocarla, suprimir, acceder a la información).
            </li>
            <li className={styles.list}>
              Firma (si aplica) y número de identificación.
            </li>
            El término máximo previsto por la ley para resolver su solicitud es
            de quince (15) días hábiles, contados a partir del día siguiente a
            la fecha de su recibo. Cuando no fuere posible atender la solicitud
            dentro de dicho término, el RIFATIC notificará al interesado los
            motivos de la demora y la fecha en que se atenderá su solicitud, la
            cual en ningún caso podrá superar los ocho (8) días hábiles
            siguientes al vencimiento del primer término.
          </p>
          <h3 className={styles.subtitle}>
            USO DE RIFATIC POR PARTE DE LOS MENORES DE EDAD
          </h3>
          <p className={styles.paragraph}>
            Los menores de 18 años o incapaces no deberán ingresar ni utilizar
            el servicio que presta RIFATIC sin el previo consentimiento y
            acompañamiento de sus padres, tutores o curadores. RIFATIC, conforme
            a las disposiciones del Código del Menor y de las leyes aplicables,
            señala que los padres, tutores o curadores del usuario menor de edad
            o incapaz son los responsables íntegramente por la utilización que
            el usuario menor de edad o incapaz realice de la plataforma.
          </p>
          <h3 className={styles.subtitle}>
            PROCEDIMIENTO PARA EL EJERCICIO DEL DERECHO DE HABEAS DATA
          </h3>
          <p className={styles.paragraph}>
            En cumplimiento de las normas sobre protección de datos personales,
            RIFATIC presenta el procedimiento y requisitos mínimos para el
            ejercicio de sus derechos: Para la radicación y atención de su
            solicitud le solicitamos suministrar la siguiente información:
            <li className={styles.list}>Nombre completo y apellidos.</li>
            <li className={styles.list}>
              Datos de contacto (Dirección electrónica y teléfonos de contacto).
            </li>
            <li className={styles.list}>
              Medios para recibir respuesta a su solicitud.
            </li>
            <li className={styles.list}>
              Motivo(s)/hecho(s) que dan lugar al reclamo con una breve
              descripción del derecho que desea ejercer (conocer, actualizar,
              rectificar, solicitar prueba de la autorización otorgada,
              revocarla, suprimir, acceder a la información).
            </li>
            <li className={styles.list}>
              Firma (si aplica) y número de identificación.
            </li>
            El término máximo previsto por la ley para resolver su solicitud es
            de quince (15) días hábiles, contados a partir del día siguiente a
            la fecha de su recibo. Cuando no fuere posible atender la solicitud
            dentro de dicho término, RIFATIC notificará al interesado los
            motivos de la demora y la fecha en que se atenderá su solicitud, la
            cual en ningún caso podrá superar los ocho (8) días hábiles
            siguientes al vencimiento del primer término.
          </p>
          <h3 className={styles.subtitle}>VIGENCIA</h3>
          <p className={styles.paragraph}>
            La presente Política para el Tratamiento de Datos Personales rige a
            partir del primero (1ro) de Noviembre del 2023. Las bases de datos
            en las que se registrarán los datos personales tendrán una vigencia
            igual al tiempo en que se mantenga y utilice la información para las
            finalidades descritas en esta política. Una vez se cumpla(n) esa(s)
            finalidad(es) y siempre que no exista un deber legal o contractual
            de conservar su información, sus datos serán eliminados de nuestras
            bases de datos.
          </p>
        </div>
        <div className={styles.button_container}>
          <button
            className={styles.accept_button}
            onClick={() => {
              setTerms(true);
              setShowModal(false);
            }}
          >
            Acepto
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsModalComponent;

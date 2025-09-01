import { useSelector } from "react-redux";
import styles from "./MyButton.module.scss";
import IconSelector from "../IconSelector/IconSelector";

const MyButton = ({
  text = "",
  icon = "",
  lineColor = "",
  backgroundColor = "",
  hoverColor = "",
  fontColor = "",
  event = () => "",
  disabled = false,
  height = "auto",
  width = "auto",
  iconSize = "1.5rem",
  type = "button",
  textSize = "1rem",
  //tooltip,
}) => {
  const theme = useSelector((state) => state.themeSlice);

  return (
    <button
      className={styles.actionButton}
      onClick={event}
      style={{
        borderColor: lineColor || backgroundColor || theme.primary,
        "--hover-color": hoverColor || backgroundColor,
        backgroundColor: backgroundColor || "transparent",
        height,
        width,
        color: fontColor || theme.textDark,
        "--button-shadow": theme.buttonShadow,
      }}
      disabled={disabled}
      type={type}
    >
      {icon && (
        <div
          className={styles.icon_container}
          style={iconSize && { fontSize: iconSize }}
        >
          <IconSelector name={icon} />
        </div>
      )}
      {text && (
        <span
          className={styles.text}
          style={textSize && { fontSize: textSize }}
        >
          {text}
        </span>
      )}
    </button>
  );
};

export default MyButton;

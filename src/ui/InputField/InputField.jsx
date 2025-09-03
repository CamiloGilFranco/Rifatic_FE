import styles from "./InputField.module.scss";
import IconSelector from "../IconSelector/IconSelector";
import { useSelector } from "react-redux";

const InputField = ({
  icon,
  type = "button",
  placeholder,
  value,
  setter,
  inputRef,
  id,
  label,
  error,
}) => {
  const theme = useSelector((state) => state.themeSlice);

  return (
    <div className={styles.inputField}>
      {label && (
        <label
          htmlFor={id}
          className={styles.label}
          style={{ color: theme.textDark }}
        >
          {label}
        </label>
      )}
      <div className={styles.field}>
        <span className={styles.fieldIcon} style={{ color: theme.textMiddle }}>
          {icon && <IconSelector name={icon} />}
        </span>
        <input
          ref={inputRef}
          type={type}
          placeholder={placeholder}
          className={styles.input}
          onChange={(e) => setter(e.target.value)}
          value={value}
          id={id}
          style={{
            borderColor: error ? theme.error : theme.textMiddle,
            backgroundColor: theme.bgLight,
            "--hover-color": theme.primaryHover,
            "--focus-shadow": theme.focusShadow,
          }}
        />
      </div>
    </div>
  );
};

export default InputField;

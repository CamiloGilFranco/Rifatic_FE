import styles from "./TextAreaInput.module.scss";
import IconSelector from "../IconSelector/IconSelector";
import { useSelector } from "react-redux";

const TextAreaInput = ({
  icon,
  placeholder,
  value,
  setter,
  inputRef,
  id,
  label,
  error,
  rows = 4,
  maxLength,
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
        <textarea
          ref={inputRef}
          id={id}
          placeholder={placeholder}
          className={styles.textarea}
          onChange={(e) => setter(e.target.value)}
          value={value}
          rows={rows}
          maxLength={maxLength}
          style={{
            borderColor: error ? theme.error : theme.textMiddle,
            backgroundColor: theme.bgLight,
            "--hover-color": theme.primaryHover,
            "--focus-shadow": theme.focusShadow,
          }}
        />
      </div>
      {error && (
        <p className={styles.error} style={{ color: theme.error }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default TextAreaInput;

import styles from "./CheckInput.module.scss";
import { useSelector } from "react-redux";

const CheckInput = ({
  id,
  label,
  checked = false,
  setter = () => {},
  error,
  disabled = false,
}) => {
  const theme = useSelector((state) => state.themeSlice);

  return (
    <div className={styles.container}>
      <label
        htmlFor={id}
        className={styles.wrapper}
        style={{
          color: theme.textDark,
          cursor: disabled ? "default" : "pointer",
        }}
      >
        <input
          id={id}
          type="checkbox"
          className={styles.checkbox}
          checked={checked}
          disabled={disabled}
          onChange={(e) => setter(e.target.checked)}
          style={{ accentColor: theme.primary }}
        />
        <span className={styles.labelText} style={{ color: theme.textDark }}>
          {label}
        </span>
      </label>

      {error && (
        <p className={styles.error} style={{ color: theme.error }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default CheckInput;

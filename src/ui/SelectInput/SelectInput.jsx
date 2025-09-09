import styles from "./SelectInput.module.scss";
import IconSelector from "../IconSelector/IconSelector";
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";

const SelectInput = ({
  icon,
  options = [],
  placeholder,
  value,
  setter,
  inputRef,
  id,
  label,
  error,
  disabled = false,
  multiple = false,
  variant = "custom", // 'native' | 'custom'
}) => {
  const theme = useSelector((state) => state.themeSlice);
  // Convertir color (hex, rgb(a)) a rgba con alpha dado
  const toRgba = (color, alpha = 0.12) => {
    if (!color) return `rgba(0,0,0,${alpha})`;
    const c = String(color).trim();
    if (c.startsWith("#")) {
      let hex = c.slice(1);
      if (hex.length === 3) hex = hex.split("").map((ch) => ch + ch).join("");
      const int = parseInt(hex, 16);
      const r = (int >> 16) & 255;
      const g = (int >> 8) & 255;
      const b = int & 255;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    const rgbMatch = c.match(/rgba?\(([^)]+)\)/i);
    if (rgbMatch) {
      const parts = rgbMatch[1].split(",").map((p) => p.trim());
      const r = parts[0];
      const g = parts[1];
      const b = parts[2];
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    // fallback: return original color (may not have alpha)
    return c;
  };
  const optionHover = toRgba(theme.primaryHover, 0.12);
  const handleChange = (e) => {
    if (multiple) {
      const selected = Array.from(e.target.selectedOptions).map((o) => o.value);
      setter(selected);
    } else {
      setter(e.target.value);
    }
  };

  // Normalizar opciones: aceptar array de strings o array de { value, label }
  const normalized = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt
  );

  // --- Custom dropdown state ---
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const onDown = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const handleOptionSelect = (optValue) => {
    setter(optValue);
    setOpen(false);
  };

  // Render
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

      <div className={styles.field} ref={containerRef}>
        <span className={styles.fieldIcon} style={{ color: theme.textMiddle }}>
          {icon && <IconSelector name={icon} />}
        </span>

        {variant === "custom" && !multiple ? (
          <div
            className={styles.customSelect}
            style={{
              borderColor: error ? theme.error : theme.textMiddle,
              backgroundColor: theme.bgLight,
              "--hover-color": theme.primaryHover,
              "--option-hover": optionHover,
              "--focus-shadow": theme.focusShadow,
            }}
          >
            <button
              type="button"
              className={styles.trigger}
              onClick={() => setOpen((s) => !s)}
              aria-haspopup="listbox"
              aria-expanded={open}
              disabled={disabled}
            >
              <span className={styles.triggerLabel}>
                {value
                  ? (normalized.find((o) => o.value === value) || {}).label ||
                    value
                  : placeholder || "Seleccionar..."}
              </span>
              <span className={`${styles.caret} ${open ? styles.open : ""}`} />
            </button>

            {open && (
              <ul className={styles.options} role="listbox">
                {normalized.map((opt) => (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={String(opt.value) === String(value)}
                    className={styles.option}
                    onClick={() => handleOptionSelect(opt.value)}
                  >
                    {opt.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <select
            ref={inputRef}
            id={id}
            className={styles.select}
            onChange={handleChange}
            value={value}
            disabled={disabled}
            multiple={multiple}
            style={{
              borderColor: error ? theme.error : theme.textMiddle,
              backgroundColor: theme.bgLight,
              "--hover-color": theme.primaryHover,
              "--option-hover": optionHover,
              "--focus-shadow": theme.focusShadow,
            }}
          >
            {!multiple && placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}

            {normalized.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}
      </div>

      {error && (
        <p className={styles.error} style={{ color: theme.error }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default SelectInput;

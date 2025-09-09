import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import styles from "./DateInput.module.scss";
import IconSelector from "../IconSelector/IconSelector";
import { useSelector } from "react-redux";

const DateInput = ({
  label,
  id,
  selected,
  onChange,
  placeholderText = "dd/mm/yyyy",
  minDate,
  filterDate,
  dateFormat = "dd/MM/yyyy",
  showTime = false,
  timeFormat = "HH:mm",
  timeIntervals = 15,
  icon,
  error,
  disabled = false,
  inputRef,
}) => {
  const theme = useSelector((state) => state.themeSlice);

  const CustomInput = forwardRef(
    ({ value, onClick, onChange, placeholder }, ref) => (
      <input
        ref={ref}
        id={id}
        onClick={onClick}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={styles.input}
        disabled={disabled}
        style={{
          borderColor: error ? theme.error : theme.textMiddle,
          backgroundColor: theme.bgLight,
          "--hover-color": theme.primaryHover,
          "--focus-shadow": theme.focusShadow,
        }}
      />
    )
  );
  CustomInput.displayName = "DateInputCustomInput";

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

        <DatePicker
          id={id}
          selected={selected}
          onChange={onChange}
          placeholderText={placeholderText}
          minDate={minDate}
          filterDate={filterDate}
          dateFormat={dateFormat}
          showTimeSelect={showTime}
          timeFormat={timeFormat}
          timeIntervals={timeIntervals}
          customInput={<CustomInput />}
          ref={inputRef}
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

export default DateInput;

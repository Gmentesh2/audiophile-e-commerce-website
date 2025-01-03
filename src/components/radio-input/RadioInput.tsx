import styles from "./radio-input.module.css";
type Props = {
  label: string;
  name: string;
  checked: boolean;
  onChange: () => void;
};

const RadioInput = ({ label, name, checked, onChange }: Props) => {
  return (
    <label id="" className={styles.label}>
      <input
        className={styles.input}
        type="radio"
        name={name}
        id=""
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.span}>{label}</span>
    </label>
  );
};

export default RadioInput;

import styles from "./Button.module.scss";

const Button = ({
  text,
  color = "orange",
  type = "button",
  className = "",
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[color]} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

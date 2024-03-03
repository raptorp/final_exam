import styles from "./button.module.scss";

const Button = ({ text, iconName, className, onClick }) => {
  // Combine base button class with any additional classes passed in
  const buttonClasses = `${styles.button} ${
    className ? styles[className] : ""
  }`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {iconName && (
        <span className="material-symbols-outlined">{iconName}</span>
      )}
      {text && <span className={styles.button__text}>{text}</span>}
    </button>
  );
};

export default Button;

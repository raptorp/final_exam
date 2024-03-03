import styles from "./card.module.scss";

const FillerCard = ({ children }) => {
  return (
    <div className={`${styles.card} ${styles["card--filler"]}`}>
      <div className={styles.card__container}>
        <div className={styles.card__content}>{children}</div>
      </div>
    </div>
  );
};

export default FillerCard;

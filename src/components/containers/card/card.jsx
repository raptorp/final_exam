import styles from "./card.module.scss";

const Card = ({ children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__container}>
        <div className={styles.card__content}>{children}</div>
      </div>
    </div>
  );
};

export default Card;

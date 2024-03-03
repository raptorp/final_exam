"use client";

import styles from "./tinyCard.module.scss";

const TinyCard = ({ icon, text }) => {
  return (
    <div className={styles.info__card}>
      <div className={styles.info__container}>
        <div className={styles.info__icon}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <span className={styles.info__text}>{text}</span>
      </div>
    </div>
  );
};

export default TinyCard;

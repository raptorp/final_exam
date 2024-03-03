"use client";

import styles from "./mediumCard.module.scss";

const MediumCard = ({ icon, isSvg = false, svgIcon, text, number }) => {
  const renderIcon = () => {
    if (isSvg && svgIcon) {
      return (
        <div class={styles.icon__container}>
          <svg class={styles.icon__svg}>
            <use href={svgIcon}></use>
          </svg>
        </div>
      );
    } else {
      return <span className="material-symbols-outlined">{icon}</span>;
    }
  };

  return (
    <div className={styles.info__card}>
      <div className={styles.info__container}>
        <div className={styles.info__icon}>{renderIcon()}</div>
        <div className={styles.info__content}>
          <span className={styles.info__content__text}>{text}</span>
          <span className={styles.info__content__number}>{number}</span>
        </div>
      </div>
    </div>
  );
};

export default MediumCard;

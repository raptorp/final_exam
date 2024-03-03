"use client";

import styles from "./smallInfoCard.module.scss";

const SmallInfoCard = ({ title, icon, text }) => {
  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((err) => {
          console.error("Failed to copy text to clipboard", err);
        });
    } else {
      console.error("Clipboard API not available");
    }
  };

  return (
    <div className={styles.info__card}>
      <div className={styles.info__container}>
        {title && <span className={styles.info__title}>{title}</span>}

        {icon && (
          <div className={styles.info__icon}>
            <span className="material-symbols-outlined">{icon}</span>
          </div>
        )}

        <span className={styles.info__text}>{text}</span>
      </div>

      <button className={styles.info__copy} onClick={copyToClipboard}>
        <span className="material-symbols-outlined">content_copy</span>
      </button>
    </div>
  );
};

export default SmallInfoCard;

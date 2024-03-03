import Image from "next/image";
import Card from "../card/card";
import styles from "./dashboardCards.module.scss";

const SettingsCard = ({ children }) => {
  return (
    <Card>
      <div className={styles.card__container}>
        <div className={styles.card__content}>settings here</div>
      </div>
    </Card>
  );
};

export default SettingsCard;

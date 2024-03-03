import Card from "../card/card";
import styles from "./dashboardCards.module.scss";

const HeaderCard = ({ children }) => {
  return (
    <Card>
      <div className={styles.card__container}>
        <div className={styles.card__content}>{children}</div>
      </div>
    </Card>
  );
};

export default HeaderCard;

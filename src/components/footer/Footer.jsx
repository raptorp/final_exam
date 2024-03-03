import Image from "next/image";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__logoContact}>
          <div className={styles.footer__logo}>
            <Image
              src="/images/logo/logo_pd.png"
              alt="_#"
              height={53}
              width={190}
              className={styles.logoImg}
            />
          </div>
          <div className={styles.footer__contact}>
            <span className={styles.footer__link}>
              <span className="material-symbols-outlined">mail</span>
              <span className={styles.footer__linkText}>
                admin@profounddecisions.dk
              </span>
            </span>
            <span className={styles.footer__link}>
              <span className="material-symbols-outlined">phone</span>
              <span className={styles.footer__linkText}>+45 1234 5678</span>
            </span>
            <span className={styles.footer__link}>
              <span className="material-symbols-outlined">
                local_post_office
              </span>
              <span className={styles.footer__linkText}>
                <span>Profound Decisions,</span>
                <span>PO Box 666, PR2 1ZW</span>
              </span>
            </span>
          </div>
        </div>
        <div className={styles.footer__dashboard}>
          <span className={styles.footer__title}>Dashboard</span>
          <span className={styles.footer__link}>
            <span className="material-symbols-outlined">person</span>
            <span className={styles.footer__linkText}>Player Account</span>
          </span>
          <span className={styles.footer__link}>
            <span className="material-symbols-outlined">groups</span>
            <span className={styles.footer__linkText}>Group</span>
          </span>
          <span className={styles.footer__link}>
            <span className="material-symbols-outlined">diversity_1</span>
            <span className={styles.footer__linkText}>Coven</span>
          </span>
          <span className={styles.footer__link}>
            <span className="material-symbols-outlined">
              supervisor_account
            </span>
            <span className={styles.footer__linkText}>Admin</span>
          </span>
        </div>
      </div>
      <div className={styles.footer__disclaimer}>
        Final exam project from KEA Denmark
      </div>
    </div>
  );
};

export default Footer;

import Link from "next/link";
import styles from "./about.module.scss";
import TbaBox from "@/components/devStatus/tbaBox";

export const metadata = {
  title: "About",
  description: "_#",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Page</h2>

        <TbaBox />
      </div>
    </div>
  );
};

export default AboutPage;

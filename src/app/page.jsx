import WipBox from "@/components/devStatus/wipBox";
import styles from "./home.module.scss";
import PageHero from "@/components/pageHero/pageHero";

const Home = () => {
  return (
    <div className={styles.container}>
      <PageHero
        title="Join the fight"
        description="Your next adventure awaits"
        heroImageSrc="/images/sword.jpg"
        heroImageAlt="Innovation Hero"
      />
      {/* <div className={styles.recentNews}></div>
      <div className={styles.countdown}></div>
      <div className={styles.booking}></div> */}

      <WipBox />
    </div>
  );
};

export default Home;

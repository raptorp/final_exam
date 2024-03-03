import Image from "next/image";
import styles from "./pageHero.module.scss";
import Link from "next/link";

const PageHero = ({
  title = "Default Title",
  description = "Default description...",
  heroImageSrc = "/images/default-hero.jpg",
  heroImageAlt = "Hero",
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={heroImageSrc}
          alt={heroImageAlt}
          fill
          className={styles.heroImg}
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>

        {/* <div className={styles.descContainer}>
          <p className={styles.desc}>{description}</p>
        </div> */}

        <div className={styles.button}>
          <Link href="/login" alt="_#">
            I&apos;m ready
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageHero;

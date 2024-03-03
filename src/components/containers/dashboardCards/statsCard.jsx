import Card from "../card/card";
import styles from "./dashboardCards.module.scss";
import { getCharacters } from "@/lib/data";
import MediumCard from "../mediumCard/mediumCard";
import NationPieChart from "./statGraphics/PieNations";
import FillerCard from "../card/fillerCard";

const StatsCard = async () => {
  let characters = await getCharacters();

  // Count how many characters haven't been played yet
  const unplayedCharacterCount = characters.filter(
    (char) => char.status.unplayed
  ).length;

  // Count how many characters have died/been retired
  const deadCharacterCount = characters.filter(
    (char) => char.status.isDead
  ).length;

  // Static data as an example
  const eventsPlayed = 16;

  return (
    <Card>
      <div className={styles.card__container}>
        <div className={styles.card__header}>
          <h1 className={styles.card__header__title}>Player Statistics</h1>
        </div>
        <div className={styles.stats__content}>
          <div className={styles.stats__content__grid}>
            <div className={styles.stats__content__grid__item}>
              <MediumCard
                icon="festival"
                text="Events Played:"
                number={eventsPlayed}
              />
            </div>

            <div className={styles.stats__content__grid__item}>
              <MediumCard
                icon="skull"
                text="Dead Characters:"
                number={deadCharacterCount}
              />
            </div>

            <div className={styles.stats__content__grid__item}>
              <MediumCard
                isSvg={true}
                svgIcon="/icons/sparkle40.svg#sparkle"
                text="Unplayed Characters:"
                number={unplayedCharacterCount}
              />
            </div>

            <div className={styles.stats__content__grid__item}>
              <MediumCard icon="raven" text="Fourth statistic:" number={28} />
            </div>
          </div>
          <div className={styles.stats__info}></div>
        </div>

        {/* <NationPieChart characters={characters} /> */}
        <FillerCard>
          <div className={styles.filler__container}>
            <h1>filler</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores laudantium, facilis voluptatem reprehenderit quidem,
              doloribus reiciendis repellat aliquid nulla id velit vitae cum
              eligendi ipsam ipsum porro in vel dolores.
            </p>
          </div>
        </FillerCard>
      </div>
    </Card>
  );
};

export default StatsCard;

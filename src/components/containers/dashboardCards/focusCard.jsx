import Image from "next/image";
import Card from "../card/card";
import styles from "./dashboardCards.module.scss";
import { getCharacters } from "@/lib/data";
import SmallInfoCard from "../smallInfoCard/smallInfoCard";

import noAvatar from "../../../../public/images/noavatar.png";

const FocusCard = async () => {
  let characters = await getCharacters();

  // Find the active character, or use the first character as a fallback
  const activeCharacter =
    characters.find((char) => char.status.isActive) || characters[0];

  const determineStatusIcon = (character) => {
    if (character.status.isActive) {
      return <span className="material-symbols-outlined">how_to_reg</span>;
    }
    return <span className="material-symbols-outlined">error</span>;
  };

  return (
    <Card>
      <div className={styles.card__container}>
        <div className={styles.card__header}>
          <h1 className={styles.card__header__title}>
            {activeCharacter.charName}
            <span> | </span>
            <span className={styles.card__header__title__accent}>
              My Current Character
            </span>
          </h1>

          <div className={styles.card__header__settings}>
            <span className="material-symbols-outlined">settings</span>
          </div>
        </div>
        <div className={styles.focus__content}>
          <div className={styles.focus__info}>
            <div className={styles.focus__info__container}>
              <div className={styles.focus__info__content}>
                <SmallInfoCard
                  title="Chacter ID:"
                  text={activeCharacter.charId}
                />
              </div>

              <div className={styles.focus__info__content}>
                <SmallInfoCard
                  title="Banner:"
                  text={activeCharacter.bannerName}
                />
              </div>

              <div className={styles.focus__info__content}>
                <SmallInfoCard
                  title="Resource:"
                  text={`${activeCharacter.resource.resourceType} - lvl ${activeCharacter.resource.resourceLvl}`}
                />
              </div>

              <div className={styles.focus__info__content}>
                <SmallInfoCard title="Nation:" text={activeCharacter.nation} />
              </div>
            </div>
            {/* <div className={styles.focus__status}>
              {determineStatusIcon(activeCharacter)}
            </div> */}
            <div className={styles.focus__avatar}>
              <div className={styles.focus__avatar__decoration}>
                <div className={styles.focus__avatar__container}>
                  <Image
                    src={activeCharacter.charImg || noAvatar}
                    alt="About Image"
                    fill
                    className={styles.focus__avatar__img}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FocusCard;

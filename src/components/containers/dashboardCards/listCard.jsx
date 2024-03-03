import Image from "next/image";
import Card from "../card/card";
import styles from "./dashboardCards.module.scss";
import { getCharacters } from "@/lib/data";
import { deleteCharacter } from "@/lib/actions";
import Button from "@/components/button/button";

const ListCard = async () => {
  let characters = await getCharacters();

  // Sorting characters: Active first, then unplayed, and dead last
  characters.sort((a, b) => {
    if (a.status.isDead && !b.status.isDead) {
      return 1; // Dead characters go to the end
    } else if (!a.status.isDead && b.status.isDead) {
      return -1; // Non-dead characters stay up
    } else if (a.status.isActive && !b.status.isActive) {
      return -1; // Active character comes first
    } else {
      return 0; // No change in order for others
    }
  });

  const determineStatusIcon = (character) => {
    if (character.status.isActive) {
      return <span className="material-symbols-outlined">how_to_reg</span>;
    } else if (character.status.isDead) {
      return <span className="material-symbols-outlined">skull</span>;
    } else if (character.status.unplayed) {
      return (
        <div class={styles.icon__container}>
          <svg class={styles.icon__svg}>
            <use href="/icons/sparkle20.svg#sparkle"></use>
          </svg>
        </div>
      );
    }
    return <span className="material-symbols-outlined">error</span>;
  };

  return (
    <Card>
      <div className={styles.card__container}>
        <div className={styles.card__header}>
          <h1 className={styles.card__header__title}>All My Characters</h1>
          <Button text="Create new character" className="button--cta" />
        </div>
        <table className={styles.character__table}>
          <tbody>
            {characters.map((character) => (
              <tr
                className={`${styles.character__container} ${
                  character.status.isDead ? styles.character__dead : ""
                } ${character.status.isActive ? styles.character__active : ""}`}
                key={character.charId}
              >
                <td className={styles.character__detail}>
                  <div className={styles.character__info}>
                    <span className={styles.info__name}>
                      {character.charName}
                    </span>
                    <span className={styles.info__id}>
                      CID: {character.charId}
                    </span>
                    {/* <span className={styles.info__banner}>
                      {character.nation}
                    </span> */}
                  </div>
                </td>
                <td className={styles.character__status}>
                  <div className={styles.character__status__container}>
                    {determineStatusIcon(character)}
                  </div>
                </td>
                <td className={styles.character__actions}>
                  <form
                    className={styles.character__actions__container}
                    action={deleteCharacter}
                  >
                    <input type="hidden" name="id" value={character.charId} />
                    <Button className="button--iconOnly" iconName="close" />
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ListCard;

import { getAllCharacters } from "@/lib/data";
import styles from "./adminComponent.module.scss";
import Image from "next/image";
import { deleteUser } from "@/lib/actions";
import Card from "@/components/containers/card/card";

import noAvatar from "../../../public/images/noavatar.png";

const AdminCharacters = async () => {
  const characters = await getAllCharacters();

  return (
    <Card>
      <div className={styles.card__container}>
        <div className={styles.card__header}>
          <h1 className={styles.card__header__title}>
            All characters in the system
          </h1>
        </div>

        <div className={styles.itemList}>
          {characters.map((character) => (
            <div className={styles.user__container} key={character.charId}>
              <div className={styles.user__detail}>
                <Image
                  src={character.charImg || noAvatar}
                  alt=""
                  width={50}
                  height={50}
                />

                <div className={styles.user__info}>
                  <span className={styles.user__info__name}>
                    {character.charName}
                  </span>

                  <span className={styles.user__info__id}>
                    Character ID: {character.charId}
                  </span>
                </div>
              </div>

              <form action={deleteUser}>
                <input type="hidden" name="id" value={character.charId} />

                <button className={styles.user__delete}>Delete</button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default AdminCharacters;

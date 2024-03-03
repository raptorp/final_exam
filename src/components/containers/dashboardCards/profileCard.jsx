import Image from "next/image";
import Card from "../card/card";
import styles from "./dashboardCards.module.scss";
import { getUser } from "@/lib/data";
import SmallInfoCard from "../smallInfoCard/smallInfoCard";
import TinyCard from "../tinyCard/tinyCard";

import noAvatar from "../../../../public/images/noavatar.png";

const ProfileCard = async () => {
  const user = await getUser();

  const fakeAddress = "Streetname 10. 9999 City";

  return (
    <Card>
      <div className={styles.card__container}>
        <div className={styles.card__content}>
          <div className={styles.profile__settings}>
            <span className="material-symbols-outlined">settings</span>
          </div>
          <div className={styles.profile__avatar}>
            <div className={styles.profile__avatar__decoration}>
              <div className={styles.profile__avatar__container}>
                <Image
                  src={user.userImg || noAvatar}
                  alt="About Image"
                  fill
                  className={styles.profile__avatar__img}
                />
              </div>
            </div>
            <div className={styles.profile__avatar__info}>
              <div className={styles.profile__name}>
                <span>Matt Pennington</span>
                <span>|</span>
                <span>@{user.username}</span>
              </div>
              <div className={styles.profile__playerId}>
                <span>Player ID: {user.userId}</span>
              </div>
            </div>
          </div>
          <div className={styles.profile__card}>
            <div className={styles.profile__shortcut}>
              <TinyCard icon="emergency" text="Health Info" />

              <TinyCard icon="confirmation_number" text="Bookings" />

              <TinyCard icon="volunteer_activism" text="Proxy ID" />
            </div>

            <div className={styles.profile__contact}>
              <SmallInfoCard icon="home" text={fakeAddress} />

              <SmallInfoCard icon="alternate_email" text={user.email} />

              <SmallInfoCard
                icon="mail"
                text="Contact info for IC mail [TBA]"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;

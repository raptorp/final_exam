import { getUsers } from "@/lib/data";
import styles from "./adminComponent.module.scss";
import Image from "next/image";
import { deleteUser } from "@/lib/actions";
import Card from "@/components/containers/card/card";

import noAvatar from "../../../public/images/noavatar.png";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <Card>
      <div className={styles.card__container}>
        <div className={styles.card__header}>
          <h1 className={styles.card__header__title}>
            All users in the system
          </h1>
        </div>

        <div className={styles.itemList}>
          {users.map((user) => (
            <div className={styles.user__container} key={user.id}>
              <div className={styles.user__detail}>
                <Image
                  src={user.img || noAvatar}
                  alt=""
                  width={50}
                  height={50}
                />

                <div className={styles.user__info}>
                  <span className={styles.user__info__name}>
                    {user.username}
                  </span>

                  <span className={styles.user__info__id}>
                    User ID: {user.userId}
                  </span>
                </div>
              </div>
              <form action={deleteUser}>
                <input type="hidden" name="id" value={user.id} />

                <button className={styles.user__delete}>Delete</button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default AdminUsers;

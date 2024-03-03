import { getUser } from "@/lib/data";
import styles from "./postUser.module.scss";
import Image from "next/image";

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <div className={styles.img__container}>
        <Image
          src={user.img ? user.img : "/images/noavatar.png"}
          alt="_#"
          width={50}
          height={50}
          className={styles.avatar}
        />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;

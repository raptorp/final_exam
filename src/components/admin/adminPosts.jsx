import { getPosts } from "@/lib/data";
import styles from "./adminComponent.module.scss";
import Image from "next/image";
import { deletePost } from "@/lib/actions";
import Card from "@/components/containers/card/card";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <Card>
      <div className={styles.card__container}>
        <div className={styles.card__header}>
          <h1 className={styles.card__header__title}>
            All blog posts in the system
          </h1>
        </div>
        <div className={styles.itemList}>
          {posts.map((post) => (
            <div className={styles.user__container} key={post.id}>
              <div className={styles.user__detail}>
                <Image
                  src={post.img || "/images/setup.jpg"}
                  alt=""
                  width={50}
                  height={50}
                />
                <div className={styles.user__info}>
                  <span className={styles.user__info__name}>{post.title}</span>
                  <span className={styles.user__info__id}>
                    Author ID: {post.userId}
                  </span>
                </div>
              </div>
              <form action={deletePost}>
                <input type="hidden" name="id" value={post.id} />
                <button className={styles.user__delete}>Delete</button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default AdminPosts;

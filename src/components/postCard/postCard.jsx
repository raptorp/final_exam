import Image from "next/image";
import styles from "./postCard.module.scss";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image
            src={post.img ? post.img : "/images/setup.jpg"}
            alt="_#"
            fill
            className={styles.img}
          />
        </div>

        <span className={styles.date}>
          {post.createdAt.toString().slice(4, 7)}
          <span> / </span>
          {post.createdAt.toString().slice(7, 10)}
          <span> / </span>
          {post.createdAt.toString().slice(10, 16)}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

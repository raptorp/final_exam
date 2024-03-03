import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.scss";
import { getPosts } from "@/lib/data";
import WipBox from "@/components/devStatus/wipBox";

export const metadata = {
  title: "News",
  description: "_#",
};

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <>
      <WipBox />

      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>News Page</h2>
        </div>

        <div className={styles.posts__container}>
          {posts.map((post) => (
            <div className={styles.post} key={post.id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>

      <WipBox />
    </>
  );
};

export default BlogPage;

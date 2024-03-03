import Image from "next/image";
import styles from "./singlePost.module.scss";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import WipBox from "@/components/devStatus/wipBox";

// CREATE META DATE DEPENDING ON THE POST CONTENT
export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return (
    <>
      <WipBox />

      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={post.img ? post.img : "/images/setup.jpg"}
            alt="_#"
            fill
            className={styles.img}
          />
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>

          <div className={styles.detail}>
            {post && (
              <Suspense fallback={<div>Loading...</div>}>
                <PostUser userId={post.userId} />
              </Suspense>
            )}
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>

              <span className={styles.detailValue}>
                {post.createdAt.toString().slice(4, 16)}
              </span>
            </div>
          </div>

          <div className={styles.content}>{post.desc}</div>
        </div>
      </div>

      <WipBox />
    </>
  );
};

export default SinglePostPage;

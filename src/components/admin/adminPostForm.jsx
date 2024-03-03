"use client";

import { addPost } from "@/lib/actions";
import styles from "./adminComponent.module.scss";
import { useFormState } from "react-dom";
import Card from "@/components/containers/card/card";

const AdminPostForm = () => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <Card>
      <div className={styles.card__container}>
        <div className={styles.card__header}>
          <h1 className={styles.card__header__title}>
            Add new blog post from this user
          </h1>
        </div>

        <form action={formAction} className={styles.form__container}>
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="slug" placeholder="slug" />
          <input type="text" name="img" placeholder="img" />
          <textarea type="text" name="desc" placeholder="desc" rows={5} />
          <button className={styles.submitButton}>Add Post</button>
          {state?.error}
        </form>
      </div>
    </Card>
  );
};

export default AdminPostForm;

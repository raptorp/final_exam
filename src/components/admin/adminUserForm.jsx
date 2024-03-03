"use client";

import { useFormState } from "react-dom";
import { addUser } from "@/lib/actions";

import Card from "@/components/containers/card/card";

import styles from "./adminComponent.module.scss";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <Card>
      <div className={styles.card__container}>
        <div className={styles.card__header}>
          <h1 className={styles.card__header__title}>Add new user</h1>
        </div>

        <form action={formAction} className={styles.form__container}>
          <input type="text" name="username" placeholder="Username" required />

          <input type="email" name="email" placeholder="Email" required />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          {/* <input type="text" name="userImg" placeholder="User Image URL" /> */}

          {/* <select name="isAdmin">
          <option value="false">Is Admin?</option>
          <option value="false">No</option>
          <option value="true">Yes</option>
          </select> */}

          <button type="submit" className={styles.submitButton}>
            Add User
          </button>

          {state?.error && <p>{state.error}</p>}
        </form>
      </div>
    </Card>
  );
};

export default AdminUserForm;

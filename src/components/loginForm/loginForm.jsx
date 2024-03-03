"use client";

import { useFormState } from "react-dom";
import { login } from "@/lib/actions";
import styles from "./loginForm.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />

      <input type="password" placeholder="password" name="password" />

      <button>Login</button>

      <div className={styles.error}>{state?.error}</div>

      <div className={styles.register}>
        <Link href="/register">
          {"Don't have an account? Register "} <b>here</b>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;

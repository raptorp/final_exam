import { handleGithubLogin } from "@/lib/actions";
import styles from "./login.module.scss";
import LoginForm from "@/components/loginForm/loginForm";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* SOME LOGIN */}
        {/* <span>Login with social media</span>

        <form action={handleGithubLogin}>
          <button className={styles.button__container}>
            <Image
              className={styles.github}
              src="/images/logo/github.png"
              alt="_#"
              width={96}
              height={39}
            />
          </button>
        </form> */}

        <h1 className={styles.title}>Login</h1>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

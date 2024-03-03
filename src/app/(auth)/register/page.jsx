import styles from "./register.module.scss";
import RegisterForm from "@/components/registerForm/registerForm";

const RegisterPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;

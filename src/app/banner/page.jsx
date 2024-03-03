import styles from "./account.module.scss";
import { auth } from "@/lib/auth";
import Dashboard from "@/components/containers/dashboard/dashboard";
import { Suspense } from "react";

export const metadata = {
  title: "Player Account",
  description: "description here _#",
};

const BannerPage = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard></Dashboard>
      </Suspense>
    </div>
  );
};

export default BannerPage;

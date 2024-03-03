import { Suspense } from "react";
import HeaderCard from "../dashboardCards/headerCard";
import ListCard from "../dashboardCards/listCard";
import ProfileCard from "../dashboardCards/profileCard";
import StatsCard from "../dashboardCards/statsCard";
import FocusCard from "../dashboardCards/focusCard";

import styles from "./dashboard.module.scss";

const Dashboard = ({ children }) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__container}>
        <div className={styles.dashboard__header}>
          <Suspense fallback={<div>Loading...</div>}>
            <HeaderCard>
              <div className={styles.header__container}>
                <div className={styles.header__icon}>
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </div>
                <h1 className={styles.header__title}>My Player Profile</h1>
              </div>
            </HeaderCard>
          </Suspense>
        </div>
        <div className={styles.dashboard__profile}>
          <Suspense fallback={<div>Loading...</div>}>
            <ProfileCard>{children}</ProfileCard>
          </Suspense>
        </div>

        <div className={styles.dashboard__focus}>
          <Suspense fallback={<div>Loading...</div>}>
            <FocusCard>{children}</FocusCard>
          </Suspense>
        </div>

        <div className={styles.dashboard__characterList}>
          <Suspense fallback={<div>Loading...</div>}>
            <ListCard>{children}</ListCard>
          </Suspense>
        </div>

        <div className={styles.dashboard__stats}>
          <Suspense fallback={<div>Loading...</div>}>
            <StatsCard>{children}</StatsCard>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

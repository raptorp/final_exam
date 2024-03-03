"use client";

import Link from "next/link";
import styles from "./tbaBox.module.scss";
import { useState } from "react";

const TbaBox = () => {
  const [tooltip, setTooltip] = useState(
    "Click here to go back to the homepage"
  );

  return (
    <div className={styles.box}>
      <h1 className={styles.title}>[ TBA ]</h1>

      <div className={`${styles.tooltip}`}>
        <Link
          className={`${styles.link} ${styles.tooltip_button}`}
          href="/"
          onMouseLeave={() =>
            setTooltip("Click here to go back to the homepage")
          }
          onClick={() => setTooltip("Going to homepage")}
        >
          Home
        </Link>

        <div className={`${styles.tooltip_container}`}>
          <div className={`${styles.tooltip_text}`}>{tooltip}</div>
        </div>
      </div>
    </div>
  );
};

export default TbaBox;

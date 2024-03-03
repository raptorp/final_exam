"use client";

import Link from "next/link";
import styles from "./tbaBox.module.scss";
import { useState } from "react";

const WipBox = () => {
  const [tooltip, setTooltip] = useState(
    "Click here to go back to the homepage"
  );

  return (
    <div className={styles.wip}>
      <h1>Work in progress</h1>
    </div>
  );
};

export default WipBox;

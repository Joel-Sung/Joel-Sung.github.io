"use client";

import styles from "./LoadingScreen.module.scss";

export default function LoadingScreen() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.spinner}></div>
        <p className={styles.text}>Fetching data from Sanity...</p>
      </div>
    </div>
  );
}

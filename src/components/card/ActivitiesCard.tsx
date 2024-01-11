import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./ActivitiesCard.module.scss";

export default function ActivitiesCard({ title, duration, description }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`
        ${styles.container}
        ${styles[theme]}
        ${styles.themeBgTranslucent}
      `}
    >
      <div className={`${styles.title} ${styles.themeColorFont}`}>{title}</div>
      <div className={styles.duration}>{duration}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}

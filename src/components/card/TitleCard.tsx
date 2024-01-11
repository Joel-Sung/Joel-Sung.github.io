import styles from "./TitleCard.module.scss";

export default function TitleCard({ title, subtitle = "" }) {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      {subtitle != "" && <div className={styles.subtitle}>{subtitle}</div>}
    </div>
  );
}

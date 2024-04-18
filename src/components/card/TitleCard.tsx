import ScrollContainer from "../container/ScrollContainer";
import styles from "./TitleCard.module.scss";

interface TitleCardProps {
  title: string;
  subtitle?: string;
}

export default function TitleCard({ title, subtitle }: TitleCardProps) {
  return (
    <ScrollContainer className={styles.title}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{title}</div>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>
    </ScrollContainer>
  );
}

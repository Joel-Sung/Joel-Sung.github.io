import styles from "./SkillCard.module.scss";

export default function SkillCard({ skill }) {
  return (
    <div className={styles.container}>
      <div className={styles.skill}>{skill}</div>
    </div>
  );
}

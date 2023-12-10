import styles from "./GlassCard.module.css";

export default function GlassCard({ style={}, children }) {
  return (
    <div style={style} className={styles.card}>
      {children}
    </div>
  );
}
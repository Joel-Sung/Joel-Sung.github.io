import styles from './SplittingButton.module.scss';

export default function SplittingButton({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
        <div className={styles['top-left']}></div>
        <div className={styles['top-right']}></div>
        <div className={styles['bot-left']}></div>
        <div className={styles['bot-right']}></div>
    </button>
  )
}
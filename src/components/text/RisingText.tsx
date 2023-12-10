import styles from './RisingText.module.scss'

export default function RisingText({ text, hasCover}) {
  return (
    <div className={styles.container}>
      <div className={hasCover ? styles['instant-text'] : styles['animated-text']}>{text}</div>
      {hasCover && <div className={styles.cover}></div>}
      <div className={hasCover ? styles['portal-slow'] : styles['portal-fast']}></div>
    </div>
  )
}
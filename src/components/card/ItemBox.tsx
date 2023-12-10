import Image from 'next/image'
import styles from './ItemBox.module.scss'

export default function ItemBox({ src, alt, onClick }) {
  return (
    <div className={styles.container}>
      <div className={styles.overlayBackground}>
      </div>
      <div className={styles.overlayDetails}>
        <div>{alt}</div>
        <button onClick={onClick}>View Details</button>
      </div>
      <Image src={src} alt={alt} className={styles.image} />
    </div>
  )
}
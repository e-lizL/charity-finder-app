import styles from './splash-banner.module.css'
import Image from 'next/image';


export default function SplashBanner() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Create Change Today.</h1>
      <h2 className={styles.blurb}>Search and discover global charities that align with your passions.</h2>
      <div className={styles.imageContainer }>
        <div className={styles.imageWrapper}>
          <Image
            src="/hands-global.jpg"
            alt="helping hands holding the world"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  )
}

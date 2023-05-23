import styles from './splash-banner.module.css'
import Image from 'next/image';


export default function SplashBanner() {
  return (
    <div className={styles.description}>
      <h1 className={styles.heading}>Create Change Today.</h1>
      <h2 className={styles.blurb}>Search and discover global charities that align with your passions.</h2>
      <Image
        src="/hands-global.jpg"
        width={500}
        height={600}
        alt="helping hands holding the world"
      />
    </div>
  )
}

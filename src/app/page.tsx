import styles from './page.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Create Change Today.</h1>
        <h2>Search and discover global charities that align with your passions.</h2>
        <Image
          src="/hands-global.jpg"
          width={500}
          height={600}
          alt="helping hands holding the world"
        />
      </div>
    </main>
  )
}

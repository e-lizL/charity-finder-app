import styles from './page.module.css'
import SplashBanner from './components/splash-banner'

export default function Home() {
  return (
    <main className={styles.main}>
      <SplashBanner />
    </main>
  )
}

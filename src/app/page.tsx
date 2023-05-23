import styles from './page.module.css';
import SplashBanner from './components/splash-banner';
import SelectComponent from './components/select-component';

export default function Home() {
  return (
    <main className={styles.main}>
      <SplashBanner />
      <SelectComponent />
    </main>
  )
}

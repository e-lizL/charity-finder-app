import styles from './page.module.css';
import SplashBanner from './components/splash-banner';
import SearchComponent from './components/search-component';

export default function Home() {
  return (
    <main className={styles.main}>
      <SplashBanner />
      <SearchComponent />
    </main>
  )
}

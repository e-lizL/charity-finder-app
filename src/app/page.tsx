import styles from './page.module.css';
import SplashBanner from './components/splash-banner';
import SearchComponent from './components/search-component';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <SplashBanner />
      <SearchComponent />
      <Footer />
    </main>
  )
}

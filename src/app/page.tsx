import styles from './page.module.css';
import SplashBanner from './components/splash-banner';
import MainContent from './components/main-content';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <SplashBanner />
      <MainContent />
      <Footer />
    </main>
  )
}

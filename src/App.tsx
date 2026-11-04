import { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import styles from './App.module.scss';

export function App() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  // Runs once the old page has faded out, so the jump to the top is never visible.
  const handleExitComplete = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    mainRef.current?.focus({ preventScroll: true });
  };

  return (
    <div className={styles.app}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" ref={mainRef} tabIndex={-1} className={styles.main}>
        <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

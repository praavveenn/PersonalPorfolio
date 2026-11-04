import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { portfolio } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';
import { Button } from './Button';
import { ThemeToggle } from './ThemeToggle';
import styles from './Navbar.module.scss';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const sectionIds = links.map((link) => link.id);
const resumeFileName = `${portfolio.name.replace(/\s+/g, '-')}-Resume.pdf`;

export function Navbar() {
  const activeId = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  // Measures the active link. The observer re-runs this on resize and after web fonts load.
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const update = () => {
      const active = list.querySelector<HTMLElement>('a[aria-current]');
      setUnderline(
        active ? { left: active.offsetLeft, width: active.offsetWidth } : { left: 0, width: 0 },
      );
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(list);
    return () => observer.disconnect();
  }, [activeId]);

  const headerClasses = [
    styles.header,
    scrolled ? styles.scrolled : '',
    menuOpen ? styles.menuOpen : '',
  ].join(' ');

  return (
    <header className={headerClasses}>
      <div className={`container ${styles.bar}`}>
        <a href="/#home" className={styles.brand} aria-label={`${portfolio.name}, home`}>
          {portfolio.name}
          <span className={styles.brandDot} aria-hidden="true" />
        </a>

        <nav id="primary-nav" className={styles.nav} aria-label="Primary">
          <ul ref={listRef} className={styles.links}>
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`/#${id}`}
                  className={`${styles.link} ${activeId === id ? styles.active : ''}`}
                  aria-current={activeId === id ? 'location' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <span
            className={styles.underline}
            style={{ transform: `translateX(${underline.left}px)`, width: underline.width }}
            aria-hidden="true"
          />
          <Button
            href={portfolio.resumeUrl}
            download={resumeFileName}
            className={styles.menuResume}
          >
            Download Resume
          </Button>
        </nav>

        <div className={styles.actions}>
          <Button
            href={portfolio.resumeUrl}
            download={resumeFileName}
            size="small"
            className={styles.barResume}
          >
            Download Resume
          </Button>
          <ThemeToggle />
          <button
            type="button"
            className={styles.hamburger}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

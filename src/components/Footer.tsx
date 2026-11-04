import { portfolio } from '../data/portfolio';
import { ExternalLink } from './ExternalLink';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {portfolio.name}. {portfolio.location}.
        </p>
        <ul className={styles.links}>
          <li>
            <ExternalLink href={`mailto:${portfolio.email}`}>Email</ExternalLink>
          </li>
          <li>
            <ExternalLink href={portfolio.linkedinUrl}>LinkedIn</ExternalLink>
          </li>
          <li>
            <ExternalLink href={portfolio.githubUrl}>GitHub</ExternalLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

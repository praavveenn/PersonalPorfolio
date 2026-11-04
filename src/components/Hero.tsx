import type { CSSProperties } from 'react';
import { portfolio } from '../data/portfolio';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useTypewriter } from '../hooks/useTypewriter';
import { Button } from './Button';
import styles from './Hero.module.scss';

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const typedRole = useTypewriter(portfolio.roles, { enabled: !reducedMotion });

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className={`container ${styles.content}`}>
        <p className={`eyebrow ${styles.fadeIn}`}>{portfolio.location}</p>

        <h1 className={styles.name} aria-label={portfolio.name}>
          {[...portfolio.name].map((letter, index) => (
            <span
              key={index}
              className={styles.letter}
              style={{ '--index': index } as CSSProperties}
              aria-hidden="true"
            >
              {letter === ' ' ? ' ' : letter}
            </span>
          ))}
        </h1>

        <p className={`${styles.role} ${styles.fadeIn}`}>
          <span className="visually-hidden">{portfolio.roles.join(', ')}</span>
          <span aria-hidden="true">
            {reducedMotion ? (
              portfolio.roles.join(' → ')
            ) : (
              <>
                {typedRole}
                <span className={styles.caret} />
              </>
            )}
          </span>
        </p>

        <p className={`${styles.intro} ${styles.fadeIn}`}>
          {portfolio.tagline} {portfolio.intro}
        </p>

        <div className={`${styles.actions} ${styles.fadeIn}`}>
          <Button href="/#projects">View Projects</Button>
          <Button
            href={portfolio.resumeUrl}
            download={`${portfolio.name.replace(/\s+/g, '-')}-Resume.pdf`}
            variant="ghost"
          >
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}

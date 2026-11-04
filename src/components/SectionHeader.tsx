import type { ReactNode } from 'react';
import { Reveal } from './Reveal';
import styles from './SectionHeader.module.scss';

interface SectionHeaderProps {
  /** Id for the heading, so the section can point to it with aria-labelledby. */
  id: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}

export function SectionHeader({ id, eyebrow, title, children }: SectionHeaderProps) {
  return (
    <Reveal as="header" stagger className={styles.header}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {children && <p className={styles.lead}>{children}</p>}
    </Reveal>
  );
}

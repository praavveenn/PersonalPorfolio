import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from './ExternalLink';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  /** Internal route. */
  to?: string;
  /** External URL or file. */
  href?: string;
  download?: string;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'ghost';
  size?: 'medium' | 'small';
  className?: string;
  'aria-label'?: string;
}

export function Button({
  children,
  to,
  href,
  download,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  className = '',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = [styles.button, styles[variant], styles[size], className].join(' ');
  const label = <span className={styles.label}>{children}</span>;

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {label}
      </Link>
    );
  }

  if (href) {
    return (
      <ExternalLink href={href} download={download} className={classes} aria-label={ariaLabel}>
        {label}
      </ExternalLink>
    );
  }

  return (
    <button type={type} className={classes} aria-label={ariaLabel}>
      {label}
    </button>
  );
}

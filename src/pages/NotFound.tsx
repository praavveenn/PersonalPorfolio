import { Button } from '../components/Button';
import { PageTransition } from '../components/PageTransition';
import styles from './NotFound.module.scss';

export function NotFound() {
  return (
    <PageTransition title="Page Not Found">
      <div className={`container page ${styles.notFound}`}>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.message}>The page you're looking for doesn't exist or has moved.</p>
        <Button to="/">Back to Home</Button>
      </div>
    </PageTransition>
  );
}

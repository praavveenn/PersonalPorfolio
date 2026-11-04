import type { ExperienceEntry } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { ChipList } from './Chip';
import styles from './Timeline.module.scss';

function TimelineItem({ entry }: { entry: ExperienceEntry }) {
  const { ref, inView } = useInView<HTMLLIElement>();
  const hasMultipleRoles = entry.roles.length > 1;
  const place = [entry.location, entry.workMode].filter(Boolean).join(' · ');

  return (
    <li
      ref={ref}
      className={`reveal ${styles.item} ${inView ? `is-visible ${styles.inView}` : ''}`}
    >
      <span className={styles.node} aria-hidden="true" />

      <article className={styles.card}>
        <header className={styles.cardHeader}>
          <h3 className={styles.company}>{entry.company}</h3>
          <p className={styles.place}>{place}</p>
          <p className={styles.period}>{entry.period}</p>
        </header>

        <div className={hasMultipleRoles ? styles.roleRail : undefined}>
          {entry.roles.map((role) => (
            <div key={role.title}>
              <section className={styles.role}>
                <h4 className={styles.roleTitle}>{role.title}</h4>
                {hasMultipleRoles && (
                  <p className={styles.rolePeriod}>
                    {[role.employmentType, role.period].filter(Boolean).join(' · ')}
                  </p>
                )}
                <ul className={styles.bullets}>
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </section>
              {role.promoted && <p className={styles.promoted}>↑ Promoted</p>}
            </div>
          ))}
        </div>

        {entry.tech.length > 0 && (
          <div className={styles.tech}>
            <ChipList items={entry.tech} label={`Technologies used at ${entry.company}`} />
          </div>
        )}
      </article>
    </li>
  );
}

export function Timeline({ entries }: { entries: ExperienceEntry[] }) {
  const ref = useScrollProgress<HTMLDivElement>();

  return (
    <div ref={ref} className={styles.timeline}>
      <div className={styles.track} aria-hidden="true">
        <div className={styles.fill} />
      </div>
      <ol className={styles.items}>
        {entries.map((entry) => (
          <TimelineItem key={entry.company} entry={entry} />
        ))}
      </ol>
    </div>
  );
}

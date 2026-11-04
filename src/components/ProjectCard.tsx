import type { Project } from '../data/portfolio';
import { Button } from './Button';
import { ChipList } from './Chip';
import styles from './ProjectCard.module.scss';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img
          src={project.image}
          alt={project.imageAlt}
          width="800"
          height="450"
          loading="lazy"
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <ChipList items={project.tech} label={`Technologies used in ${project.title}`} />
        <div className={styles.actions}>
          <Button
            href={project.githubUrl}
            variant="ghost"
            size="small"
            aria-label={`${project.title} on GitHub`}
          >
            GitHub
          </Button>
          <Button
            href={project.demoUrl}
            size="small"
            aria-label={`Live demo of ${project.title}`}
          >
            Live Demo
          </Button>
        </div>
      </div>
    </article>
  );
}

import { portfolio } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';
import styles from './ProjectsSection.module.scss';

export function ProjectsSection() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <SectionHeader id="projects-heading" eyebrow="Projects" title="Things I've built" />
        <Reveal as="ul" stagger className={styles.grid}>
          {portfolio.projects.map((project) => (
            <li key={project.title}>
              <ProjectCard project={project} />
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

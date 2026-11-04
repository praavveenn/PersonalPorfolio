import { portfolio } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';
import { Timeline } from './Timeline';

export function ExperienceSection() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="container">
        <SectionHeader id="experience-heading" eyebrow="Experience" title="Where I've worked" />
        <Timeline entries={portfolio.experience} />
      </div>
    </section>
  );
}

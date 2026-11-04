import { portfolio } from '../data/portfolio';
import { ChipList } from './Chip';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';
import styles from './AboutSection.module.scss';

export function AboutSection() {
  const { story, interests, education, skills } = portfolio;

  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <SectionHeader
          id="about-heading"
          eyebrow="About"
          title="From biotech to building software"
        />

        <Reveal stagger className={styles.story}>
          {story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <div className={styles.group}>
          <h3 className={styles.heading}>Areas of Interest</h3>
          <Reveal as="ul" stagger className={styles.interests}>
            {interests.map((interest, index) => (
              <li key={interest} className={styles.interest}>
                <span className={styles.number} aria-hidden="true">
                  0{index + 1}
                </span>
                {interest}
              </li>
            ))}
          </Reveal>
        </div>

        <div className={styles.group}>
          <h3 className={styles.heading}>Education</h3>
          <Reveal className={styles.education}>
            <h4 className={styles.degree}>{education.degree}</h4>
            <p>
              {education.institution}, {education.location}
            </p>
            <p className={styles.period}>{education.period}</p>
          </Reveal>
        </div>

        <div className={styles.group}>
          <h3 className={styles.heading}>Skills</h3>
          <Reveal stagger className={styles.skills}>
            {skills.map(({ group, skills: items }) => (
              <div key={group} className={styles.skillGroup}>
                <h4 className={styles.skillTitle}>{group}</h4>
                <ChipList items={items} label={`${group} skills`} />
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

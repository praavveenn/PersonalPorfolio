import { portfolio } from '../data/portfolio';
import { ContactForm } from './ContactForm';
import { ExternalLink } from './ExternalLink';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';
import styles from './ContactSection.module.scss';

export function ContactSection() {
  const links = [
    { label: 'Email', value: portfolio.email, href: `mailto:${portfolio.email}` },
    { label: 'LinkedIn', value: 'View profile', href: portfolio.linkedinUrl },
    { label: 'GitHub', value: 'View profile', href: portfolio.githubUrl },
  ];

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <SectionHeader id="contact-heading" eyebrow="Contact" title="Get in touch">
          Email me directly, find me online or send a message using the form.
        </SectionHeader>

        <div className={styles.layout}>
          <Reveal as="ul" stagger className={styles.links}>
            {links.map(({ label, value, href }) => (
              <li key={label}>
                <ExternalLink href={href} className={styles.link}>
                  <span className={styles.label}>{label}</span>
                  <span className={styles.value}>{value}</span>
                </ExternalLink>
              </li>
            ))}
          </Reveal>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { useEffect } from 'react';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { Hero } from '../components/Hero';
import { PageTransition } from '../components/PageTransition';
import { ProjectsSection } from '../components/ProjectsSection';

export function Home() {
  // The sections render after page load, so a link like /#projects needs its scroll applied here.
  useEffect(() => {
    const target = window.location.hash.slice(1);
    if (target) document.getElementById(target)?.scrollIntoView({ behavior: 'instant' });
  }, []);

  return (
    <PageTransition title="Software Engineer">
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </PageTransition>
  );
}

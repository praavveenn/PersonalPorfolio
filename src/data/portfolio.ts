export interface Role {
  title: string;
  employmentType?: string;
  period: string;
  bullets: string[];
  /** Shows the "Promoted" badge between this role and the earlier one listed after it. */
  promoted?: boolean;
}

export interface ExperienceEntry {
  company: string;
  location: string;
  workMode?: string;
  period: string;
  roles: Role[];
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  imageAlt: string;
  githubUrl: string;
  demoUrl: string;
}

export interface SkillGroup {
  group: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface Portfolio {
  name: string;
  location: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  resumeUrl: string;
  tagline: string;
  intro: string;
  roles: string[];
  story: string[];
  interests: string[];
  education: Education;
  skills: SkillGroup[];
  experience: ExperienceEntry[];
  projects: Project[];
}

/** Links set to this value stay on the page when clicked, until a real URL is added. */
export const PLACEHOLDER_URL = '#';

export const portfolio: Portfolio = {
  name: 'Praveen A',
  location: 'Bengaluru, Karnataka, India',
  email: 'praveenananthu08@gmail.com',
  // TODO: Add your LinkedIn profile URL
  linkedinUrl: PLACEHOLDER_URL,
  // TODO: Add your GitHub profile URL
  githubUrl: PLACEHOLDER_URL,
  resumeUrl: '/resume.pdf',

  tagline: 'Software Engineer at Banyan Cloud. Switched from biotech to building software.',
  intro:
    "I'm most interested in backend system design, performance tuning and tracking down hard-to-find bugs.",
  roles: ['Software Engineer', 'UI Engineer', 'Problem Solver'],

  // TODO: Draft built only from your resume facts. Rewrite it in your own words and add why you switched.
  story: [
    'I earned my B.Tech in Biotechnology at Bannari Amman Institute of Technology in Sathyamangalam, studying there from 2021 to 2025.',
    'During my degree I started working on the web. As a Creative Intern at 88GB Business Solutions in 2024, I improved layouts, visual consistency and responsive design. At Dream Corp in 2025, I built React Native components and Next.js dashboards, and supported a full-stack HR system.',
    "In 2026 I joined Banyan Cloud as a UI Engineer Intern and was promoted to Software Engineer. Now I'm drawn to what sits beneath the interface: how systems are designed, how they perform and how to fix them when they break.",
  ],

  interests: [
    'Backend System Design',
    'Performance Tuning & Optimization',
    'Software Debugging & Issue Resolution',
  ],

  education: {
    degree: 'B.Tech Biotechnology',
    institution: 'Bannari Amman Institute of Technology',
    location: 'Sathyamangalam',
    period: 'Nov 2021 – Apr 2025',
  },

  skills: [
    { group: 'Languages', skills: ['Java (OOP, DSA)', 'Python', 'TypeScript'] },
    {
      group: 'Front-End',
      skills: [
        'HTML',
        'CSS',
        'SCSS',
        'JavaScript',
        'React',
        'Next.js',
        'React Native',
        'Bootstrap',
        'Recharts',
      ],
    },
    { group: 'Databases', skills: ['SQL', 'PostgreSQL'] },
    { group: 'Tools', skills: ['Git'] },
  ],

  experience: [
    {
      company: 'Banyan Cloud',
      location: 'Bengaluru',
      workMode: 'On-site',
      period: 'Mar 2026 – Present',
      roles: [
        {
          title: 'Software Engineer',
          employmentType: 'Full-time',
          period: 'Jun 2026 – Present',
          promoted: true,
          bullets: [
            'TODO: Describe your main responsibility as a Software Engineer',
            'TODO: Describe a feature or system you built',
            'TODO: Describe a result or improvement you delivered',
          ],
        },
        {
          title: 'UI Engineer Intern',
          period: 'Mar 2026 – May 2026',
          bullets: [
            'TODO: Describe your main responsibility as a UI Engineer Intern',
            'TODO: Describe a UI feature you built or a result you delivered',
          ],
        },
      ],
      // TODO: Add your Banyan Cloud tech stack (chips stay hidden while this is empty)
      tech: [],
    },
    {
      company: 'Dream Corp',
      location: 'Coimbatore',
      period: 'Jul 2025 – Oct 2025',
      roles: [
        {
          title: 'Front End Developer Intern',
          period: 'Jul 2025 – Oct 2025',
          bullets: [
            'Built modular UI components for an attendance app using React Native',
            'Developed productivity dashboards in Next.js with Recharts',
            'Implemented user management flows and admin updates in the Settings module',
            'Supported backend workflows for a full-stack HR system: attendance, leave management, dashboards',
          ],
        },
      ],
      tech: ['ReactJS', 'NextJS', 'React Native', 'Java', 'SQL'],
    },
    {
      company: '88GB Business Solutions',
      location: 'Bangalore',
      period: 'Jul 2024 – Aug 2024',
      roles: [
        {
          title: 'Creative Intern',
          period: 'Jul 2024 – Aug 2024',
          bullets: [
            'Improved website layout, visual consistency and responsive design',
            'Refined wireframes with the design team to match branding standards',
          ],
        },
      ],
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    },
  ],

  projects: [
    {
      title: 'Payroll Management Application',
      description:
        'Core Java console app for payroll, attendance and records, built with OOP and Collections, with menu navigation and input validation.',
      tech: ['Core Java', 'OOP', 'Collections'],
      // TODO: Replace the placeholder cover with a real screenshot
      image: '/projects/payroll.svg',
      imageAlt: 'Placeholder cover for the Payroll Management Application: abstract ledger rows',
      // TODO: Add the GitHub repository URL
      githubUrl: PLACEHOLDER_URL,
      // TODO: Add the live demo URL
      demoUrl: PLACEHOLDER_URL,
    },
    {
      title: 'Enterprise Car Care Web Platform',
      description:
        'Responsive ReactJS platform that uses API data to power car service workflows, with reusable components and optimized state.',
      tech: ['ReactJS', 'API Integration', 'Reusable Components'],
      // TODO: Replace the placeholder cover with a real screenshot
      image: '/projects/car-care.svg',
      imageAlt: 'Placeholder cover for the Enterprise Car Care Web Platform: abstract wheel rings',
      // TODO: Add the GitHub repository URL
      githubUrl: PLACEHOLDER_URL,
      // TODO: Add the live demo URL
      demoUrl: PLACEHOLDER_URL,
    },
    {
      title: 'F1-Themed Personal Portfolio',
      description: 'ReactJS portfolio with theme switching and reusable components.',
      tech: ['ReactJS', 'Theme Switching', 'Reusable Components'],
      // TODO: Replace the placeholder cover with a real screenshot
      image: '/projects/f1-portfolio.svg',
      imageAlt: 'Placeholder cover for the F1-Themed Personal Portfolio: abstract racing line',
      // TODO: Add the GitHub repository URL
      githubUrl: PLACEHOLDER_URL,
      // TODO: Add the live demo URL
      demoUrl: PLACEHOLDER_URL,
    },
  ],
};

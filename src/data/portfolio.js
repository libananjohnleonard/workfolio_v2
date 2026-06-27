import {
  BuildingIcon,
  CertificateIcon,
  DatabaseIcon,
  FolderCodeIcon,
  LayersIcon,
  MonitorCodeIcon,
} from '@/components/ui/ExperienceIcons'

import internCert from '@/assets/Cert&Achiv/Internship Cert.jpg'
import aiFundamentals from '@/assets/Cert&Achiv/0210.jpg'
import javaRunner from '@/assets/Cert&Achiv/Achiv.jpg'
import cybersecurityAI from '@/assets/Cert&Achiv/0131.jpg'
import advancedEngineers from '@/assets/Cert&Achiv/9.1.jpg'
import cloudNetwork from '@/assets/Cert&Achiv/6.2.jpg'
import dataAnalytics from '@/assets/Cert&Achiv/6.1.jpg'
import cyberFramework from '@/assets/Cert&Achiv/20.1.jpg'
import smartTechno from '@/assets/Cert&Achiv/Tesda Certificate.jpg'

export const timeline = [
  {
    title: 'Intern Junior Web Developer',
    org: 'Seek Marketing Partners',
    icon: BuildingIcon,
    period: 'January-March 2026',
    location: 'Remote, Philippines',
    address: '10 St. Marys Place, Bury, England, BL9 0DZ',
    details: [
      'Managed and maintained client websites under company supervision.',
      'Developed standard service websites using WordPress.',
      'Executed assigned tasks based on client requirements & demands within team workflow.',
      'Collaborated with team lead and worked with production/admin systems.',
      'Handled multiple tasks simultaneously and consistently met deadlines.',
      'Created frontend website clones for training and skill development, including Dorot Garden (dorotgardens.com) and similar platforms.',
    ],
    techStack: ['WordPress', 'Gatsby.js', 'React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL'],
  },
  {
    title: 'Software Lead Developer',
    org: 'Rice Plant Health Monitoring System (Thesis)',
    icon: MonitorCodeIcon,
    period: 'March-May 2026',
    location: 'Remote, Philippines',
    details: [
      'Led the full development of the system as the Software Lead and Full-Stack Developer.',
      'Designed system architecture, workflow, and core logic.',
      'Implemented system features and ensured complete system integration.',
    ],
    techStack: ['Vite.js', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL'],
  },
  {
    title: 'Backend Developer',
    org: 'Infirmary Connect (Thesis)',
    icon: DatabaseIcon,
    period: 'April-May 2026',
    location: 'Remote, Philippines',
    details: [
      'Developed backend system architecture and database design.',
      'Built APIs and server-side logic using Node.js and PostgreSQL.',
      'Improved system workflow and contributed to system design decisions.',
      'Supported deployment and backend optimization.',
    ],
    techStack: ['Node.js', 'Express.js', 'PostgreSQL'],
  },
  {
    title: 'Freelance Full-Stack Developer',
    org: 'Business Websites & Custom Web Applications',
    icon: LayersIcon,
    period: '2023-2026',
    location: 'Remote, Philippines',
    projects: [
      {
        name: 'Infirmary Connect',
        description: 'Appointment system for the infirmary office with addition of using a KIOSK.',
        role: 'Full Stack Developer',
      },
      {
        name: 'Lawatsa',
        description: 'Hotel booking system where you can select hotel and book a room on it.',
        role: 'Backend, API & Database Developer',
      },
      {
        name: 'Digital Archive',
        description: 'A system where you can store digital documents that focus on the academics such as theses and other personal important documents.',
        role: 'Full Stack Developer',
      },
      {
        name: 'Inventory Management System',
        description: 'Inventory management solutions for multiple business types.',
        role: 'Full Stack Developer',
        tags: ['Clothing Shop', 'Vape Shop', 'Laptop Shop', 'Coffee Shop'],
      },
    ],
    techStack: ['PHP', 'Bootstrap 5', 'MySQL', 'Vite', 'React', 'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Vercel'],
  },
  {
    title: 'Academic & Personal Projects',
    org: 'Selected Project Work',
    icon: FolderCodeIcon,
    projects: [
      {
        name: 'ESSU-IGP E-Commerce Website',
        description: 'Fully functional e-commerce system with admin role management and full-stack features.',
        techStack: ['PHP', 'Bootstrap', 'MySQL'],
      },
      {
        name: 'World of Dungeon',
        description: 'Open-world game with a short questline and exploration mechanics.',
        techStack: ['Unity', 'C#'],
      },
      {
        name: 'Typing Warriors',
        description: 'Educational typing game designed with a fun, fast-paced "TypeMonkey-style" gameplay.',
        techStack: ['Python', 'Pygame'],
      },
      {
        name: 'Portfolio Website',
        description: 'Personal developer portfolio showcasing skills, experience, and background.',
        techStack: ['Vite.js', 'Tailwind CSS', 'Vercel'],
      },
    ],
  },
  {
    title: 'Achievements & Certificates',
    org: `${9} Certificates`,
    icon: CertificateIcon,
    certificates: [
      {
        title: 'Certificate of Internship Completion',
        issuer: 'Seek Marketing Partners',
        date: 'March 2026',
        image: internCert,
      },
      {
        title: 'AI Fundamentals and Prompting 101',
        issuer: 'AI Ready ASEAN',
        date: 'February 10, 2026',
        image: aiFundamentals,
      },
      {
        title: 'Cybersecurity in the Age of AI',
        issuer: 'ICpEP R3 and ICpEP KSA',
        date: 'January 31, 2026',
        image: cybersecurityAI,
      },
      {
        title: 'SMART Technopreneurship 101',
        issuer: 'TESDA Online Program',
        date: 'February 19, 2025',
        image: smartTechno,
      },
      {
        title: 'Programming – Java 1st Runner-Up',
        issuer: 'ICpEP Regional Programming Competition',
        date: '2025',
        image: javaRunner,
      },
      {
        title: 'Introduction to Advanced Level Engineers Register',
        issuer: 'ICpEP Qatar TechTalk Session',
        date: 'December 9, 2025',
        image: advancedEngineers,
      },
      {
        title: 'Data Analytics for Strategic Decision-Making',
        issuer: 'ICpEP R3 and ICpEP KSA',
        date: 'December 6, 2025',
        image: dataAnalytics,
      },
      {
        title: 'Practical Application of Cybersecurity Framework',
        issuer: 'ICpEP Qatar Chapter',
        date: 'December 6, 2025',
        image: cyberFramework,
      },
      {
        title: 'Empowering Global Community with Cloud-Network Innovation',
        issuer: 'ICpEP R3 and ICpEP KSA',
        date: 'December 20, 2025',
        image: cloudNetwork,
      },
    ],
  },
]

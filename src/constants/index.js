export const LOGO = 'John Libanan'

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const SOCIAL_LINKS = [
  {
    label: 'github.com/libananjohnleonard',
    href: 'https://github.com/libananjohnleonard',
    icon: 'github',
    external: true,
  },
  {
    label: 'linkedin.com/in/johnleonardlibanan',
    href: 'https://www.linkedin.com/in/johnleonardlibanan',
    icon: 'linkedin',
    external: true,
  },
  {
    label: 'johnleonardlibanan.work@gmail.com',
    href: 'mailto:johnleonardlibanan.work@gmail.com',
    icon: 'email',
  },
]

export const RESUME = {
  label: 'Resume',
  href: '/resume.pdf',
  fileName: 'John_Leonard_Libanan_Resume.pdf',
}

export const PROJECTS = [
  {
    title: 'ESSU-IGP E-Commerce Website',
    category: 'Web Application',
    description: 'Fully functional e-commerce system with admin role management and full-stack features.',
    techStack: ['PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    title: 'Lawatsa',
    category: 'Web Application',
    description: 'Hotel booking system where users can select a hotel and book a room.',
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'React'],
    link: '#',
  },
  {
    title: 'Digital Archive',
    category: 'Web Application',
    description: 'System for storing digital documents focused on academics, theses, and personal files.',
    techStack: ['PHP', 'Bootstrap', 'MySQL'],
    link: '#',
  },
  {
    title: 'Infirmary Connect',
    category: 'Web Application',
    description: 'Appointment system for an infirmary office with an additional KIOSK interface.',
    techStack: ['Vite', 'React', 'Node.js', 'Express.js', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Rice Plant Health Monitoring',
    category: 'Web Application',
    description: 'Full-stack system for monitoring rice plant health with real-time data visualization.',
    techStack: ['Vite', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
]

export const LANDING = {
  role: 'Computer Engineer - Full Stack Developer',
  nameLines: ['Libanan,', 'John Leonard'],
  bio: 'I bring ideas to life through thoughtful design and clean code. Obsessed with detail and driven by curiosity, I create digital experiences that leave a lasting impression.',
}

export const ABOUT = {
  heading: 'Who is John?',
  paragraphs: [
    'A Computer Engineering graduate and Full-Stack Developer.',
    'Every project is a challenge to solve, whether it is frontend interfaces or backend systems, only the tools change. I approach each one with curiosity, treating it as an opportunity to learn, build, and improve.',
    'I have a passion for creating, learning, and experimenting with modern web technologies, frameworks, and scalable applications.',
    'Always building, always learning, and never standing still.',
  ],
  cta: 'Recent Projects',
  ctaHref: '#projects',
  skills: [
    { category: 'Frontend', items: ['WordPress', 'React.js', 'Gatsby.js', 'Vite.js', 'Tailwind CSS', 'Bootstrap', 'Swiper.js', 'HTML5', 'CSS3'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'Laravel', 'PHP'] },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQL', 'Supabase'] },
    { category: 'Programming Languages', items: ['JavaScript', 'Java', 'C++'] },
    { category: 'DevOps & Monitoring', items: ['Git & GitHub', 'Vercel', 'Netlify', 'Railway', 'Render'] },
    { category: 'Tools', items: ['Figma', 'Canva', 'Visual Studio Code', 'Cursor', 'Discord', 'Slack', 'Microsoft Teams'] },
  ],
}

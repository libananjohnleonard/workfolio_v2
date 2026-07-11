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

export { PROJECTS } from '@/data/projects'

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

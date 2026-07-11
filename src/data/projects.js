const allProjectImages = import.meta.glob('@/assets/project-files/*/*', { eager: true, import: 'default' })

function sortImagePaths(paths) {
  const getOrder = (filePath) => {
    const name = filePath.split('/').pop()
    if (name.startsWith('0.')) return 0
    const numeric = name.match(/^(\d+)\./)
    if (numeric) return parseInt(numeric[1], 10)
    return 1000
  }

  return [...paths].sort((a, b) => {
    const orderA = getOrder(a)
    const orderB = getOrder(b)
    if (orderA !== orderB) return orderA - orderB
    return a.localeCompare(b)
  })
}

function loadProjectImages(folder) {
  const folderSegment = `project-files/${folder}/`
  const paths = Object.keys(allProjectImages).filter((path) => path.includes(folderSegment))
  const sortedPaths = sortImagePaths(paths)

  return sortedPaths.map((path) => allProjectImages[path])
}

const projectDefinitions = [
  {
    title: 'ESSU-IGP E-Commerce Website',
    category: 'Web Application',
    description: 'Fully functional e-commerce system with admin role management and full-stack features.',
    techStack: ['PHP', 'Bootstrap', 'MySQL'],
    imageFolder: 'igp-images',
    link: '#',
  },
  {
    title: 'Lawatsa',
    category: 'Web Application',
    description: 'Hotel booking system where users can select a hotel and book a room.',
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'React'],
    imageFolder: 'lakwatsa',
    link: '#',
  },
  {
    title: 'Digital Archive',
    category: 'Web Application',
    description: 'System for storing digital documents focused on academics, theses, and personal files.',
    techStack: ['PHP', 'Bootstrap', 'MySQL'],
    imageFolder: 'archive-images',
    link: '#',
  },
  {
    title: 'Infirmary Connect',
    category: 'Web Application',
    description: 'Appointment system for an infirmary office with an additional KIOSK interface.',
    techStack: ['Vite', 'React', 'Node.js', 'Express.js', 'PostgreSQL'],
    imageFolder: 'infirmary-images',
    link: '#',
  },
  {
    title: 'Rice Plant Health Monitoring',
    category: 'Web Application',
    description: 'Full-stack system for monitoring rice plant health with real-time data visualization.',
    techStack: ['Vite', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    imageFolder: 'rice-images',
    link: '#',
  },
  {
    title: 'World of Dungeon',
    category: 'Game',
    description: 'Open-world game with a short questline and exploration mechanics.',
    techStack: ['Unity', 'C#'],
    imageFolder: 'wod',
    link: '#',
  },
  {
    title: 'Typing Warriors',
    category: 'Game',
    description: 'Educational typing game designed with a fun, fast-paced TypeMonkey-style gameplay.',
    techStack: ['Python', 'Pygame'],
    imageFolder: 'typing-warriors',
    link: '#',
  },
]

export const PROJECTS = projectDefinitions.map((project) => {
  const images = loadProjectImages(project.imageFolder)

  return {
    title: project.title,
    category: project.category,
    description: project.description,
    techStack: project.techStack,
    link: project.link,
    coverImage: images[0] ?? null,
    images,
  }
})

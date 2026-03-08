import { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechCorp Solutions',
    role: 'Senior Full-Stack Developer',
    duration: '2 years',
    startDate: '2022-01',
    location: 'San Francisco, CA (Remote)',
    current: true,
    achievements: [
      'Led development of microservices architecture serving 500K+ users, improving system reliability to 99.9% uptime',
      'Reduced API response time by 60% through optimization and caching strategies',
      'Mentored team of 4 junior developers, establishing code review standards and best practices',
      'Implemented comprehensive testing strategy increasing code coverage from 40% to 85%',
      'Spearheaded migration from monolithic to microservices architecture'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'TypeScript']
  },
  {
    id: '2',
    company: 'StartupHub Inc',
    role: 'Full-Stack Developer',
    duration: '2 years',
    startDate: '2020-03',
    endDate: '2022-01',
    location: 'New York, NY',
    current: false,
    achievements: [
      'Built MVP from scratch using Next.js and Node.js, contributing to $2M seed funding',
      'Developed real-time collaboration features using WebSocket, supporting 10K+ concurrent users',
      'Integrated payment processing with Stripe, handling $1M+ in transactions',
      'Optimized database queries reducing load time by 45%',
      'Implemented automated CI/CD pipeline reducing deployment time by 70%'
    ],
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'AWS', 'TypeScript', 'Stripe']
  },
  {
    id: '3',
    company: 'Digital Agency Pro',
    role: 'Frontend Developer',
    duration: '1.5 years',
    startDate: '2018-09',
    endDate: '2020-03',
    location: 'Austin, TX',
    current: false,
    achievements: [
      'Developed 15+ responsive websites for enterprise clients using React and Vue.js',
      'Improved website performance scores to 95+ on Lighthouse across all projects',
      'Created reusable component library reducing development time by 40%',
      'Collaborated with design team to implement pixel-perfect UIs',
      'Trained junior developers on modern frontend best practices'
    ],
    techStack: ['React', 'Vue.js', 'JavaScript', 'Sass', 'Webpack', 'REST APIs']
  }
]

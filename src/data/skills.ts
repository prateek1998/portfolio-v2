import { Skill } from '@/types'

export const skills: Skill[] = [
  // Frontend
  {
    name: 'React',
    category: 'Frontend',
    level: 95,
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    level: 90,
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    level: 90,
  },
  {
    name: 'Vue.js',
    category: 'Frontend',
    level: 85,
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 95,
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    level: 95,
  },

  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    level: 90,
  },
  {
    name: 'Python',
    category: 'Backend',
    level: 80,
  },
  {
    name: 'PostgreSQL',
    category: 'Backend',
    level: 85,
  },
  {
    name: 'MongoDB',
    category: 'Backend',
    level: 85,
  },
  {
    name: 'GraphQL',
    category: 'Backend',
    level: 85,
  },
  {
    name: 'REST APIs',
    category: 'Backend',
    level: 95,
  },

  // DevOps
  {
    name: 'AWS',
    category: 'DevOps',
    level: 85,
  },
  {
    name: 'Docker',
    category: 'DevOps',
    level: 90,
  },
  {
    name: 'Kubernetes',
    category: 'DevOps',
    level: 75,
  },
  {
    name: 'CI/CD',
    category: 'DevOps',
    level: 85,
  },
  {
    name: 'Nginx',
    category: 'DevOps',
    level: 80,
  },

  // Tools
  {
    name: 'Git',
    category: 'Tools',
    level: 95,
  },
  {
    name: 'Figma',
    category: 'Tools',
    level: 75,
  },
  {
    name: 'Jira',
    category: 'Tools',
    level: 85,
  },
  {
    name: 'VS Code',
    category: 'Tools',
    level: 95,
  }
]

export function getSkillsByCategory(category: Skill['category']): Skill[] {
  return skills.filter(skill => skill.category === category)
}

export const skillCategories: Skill['category'][] = ['Frontend', 'Backend', 'DevOps', 'Tools']

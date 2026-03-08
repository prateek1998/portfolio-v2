export interface Project {
  id: string
  slug: string
  title: string
  shortDescription: string
  category: string
  featured: boolean
  thumbnail: string
  images: string[]
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  metrics: Metric[]
  challenge: string
  solution: string
  results: string
  testimonial?: {
    quote: string
    author: string
    role: string
  }
}

export interface Metric {
  label: string
  value: string
  icon: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
  avatar: string
  linkedIn?: string
  featured: boolean
}

export interface Skill {
  name: string
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Tools'
  level: number
  icon?: string
}

export interface Experience {
  id: string
  company: string
  role: string
  duration: string
  startDate: string
  endDate?: string
  location: string
  achievements: string[]
  techStack: string[]
  current: boolean
}

export interface Education {
  id: string
  school: string
  degree: string
  field: string
  duration: string
  startDate: string
  endDate?: string
  location: string
  grade?: string
  achievements?: string[]
  current: boolean
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  publishedAt: string
  readTime: number
  featured: boolean
  image: string
}

export interface SiteConfig {
  name: string
  title: string
  description: string
  url: string
  ogImage: string
  author: {
    name: string
    email: string
    role: string
    bio: string
    avatar: string
    location: string
    availability: string
  }
  social: {
    github: string
    linkedin: string
    twitter?: string
    email: string
  }
}

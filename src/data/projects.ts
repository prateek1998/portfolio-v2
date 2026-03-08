import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'enterprise-ecommerce-platform',
    title: 'Enterprise E-Commerce Platform',
    shortDescription: 'Rebuilt legacy e-commerce system to serve 100K+ daily users with seamless shopping experience',
    category: 'Full Stack',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop'
    ],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Stripe', 'TypeScript'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/johndoe/ecommerce-platform',
    metrics: [
      { label: 'Performance Boost', value: '40%', icon: 'zap' },
      { label: 'Daily Users', value: '100K+', icon: 'users' },
      { label: 'Revenue Growth', value: '2.5x', icon: 'trending-up' },
      { label: 'Page Load Time', value: '<1s', icon: 'clock' }
    ],
    challenge: 'The client had a legacy e-commerce platform that couldn\'t handle traffic spikes during sales events, resulting in lost revenue and poor customer experience. The monolithic architecture made it difficult to add new features, and the checkout process had a 40% abandonment rate.',
    solution: 'Architected and implemented a modern, scalable solution using Next.js for the frontend with server-side rendering for optimal performance and SEO. Built a microservices backend with Node.js, implemented Redis caching for product catalog and session management, and migrated to PostgreSQL with optimized queries. Integrated Stripe for secure payment processing and deployed on AWS with auto-scaling capabilities.',
    results: 'Reduced page load time by 40% (from 3.2s to 1.8s), decreased checkout abandonment rate by 25%, and increased conversion rate by 18%. The platform now handles 100K+ daily users with 99.9% uptime, even during peak sale periods. Monthly revenue increased by 2.5x within 6 months of launch.',
    testimonial: {
      quote: 'John transformed our struggling e-commerce platform into a high-performance system that drives real business results. His technical expertise and attention to detail were exceptional.',
      author: 'Sarah Chen',
      role: 'VP of Engineering at RetailCo'
    }
  },
  {
    id: '2',
    slug: 'healthcare-patient-portal',
    title: 'Healthcare Patient Portal',
    shortDescription: 'HIPAA-compliant patient portal enabling secure communication between 50K+ patients and healthcare providers',
    category: 'Full Stack',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io', 'AWS', 'Docker'],
    liveUrl: 'https://example-healthcare.com',
    metrics: [
      { label: 'Active Patients', value: '50K+', icon: 'users' },
      { label: 'Security Rating', value: 'A+', icon: 'shield' },
      { label: 'Response Time', value: '<200ms', icon: 'zap' },
      { label: 'Uptime', value: '99.99%', icon: 'check-circle' }
    ],
    challenge: 'Healthcare provider needed a secure, HIPAA-compliant portal for patients to access medical records, communicate with doctors, schedule appointments, and manage prescriptions. The system needed to handle sensitive health data while providing a seamless user experience across devices.',
    solution: 'Built a comprehensive patient portal with React and TypeScript frontend, Node.js backend with role-based access control, and MongoDB for flexible document storage. Implemented end-to-end encryption for all sensitive data, real-time messaging with Socket.io, and integrated with existing EMR systems via HL7 FHIR APIs. Deployed on AWS with HIPAA-compliant infrastructure and automated compliance monitoring.',
    results: 'Successfully launched portal serving 50K+ patients with 99.99% uptime. Reduced administrative call volume by 60% as patients can now self-serve for appointments and prescriptions. Improved patient satisfaction scores by 35%. Passed all HIPAA compliance audits and SOC 2 Type II certification.',
    testimonial: {
      quote: 'John delivered a mission-critical system that not only met our strict compliance requirements but exceeded our expectations for usability and performance.',
      author: 'Dr. Michael Roberts',
      role: 'Chief Medical Officer at HealthPlus'
    }
  },
  {
    id: '3',
    slug: 'real-time-analytics-dashboard',
    title: 'Real-Time Analytics Dashboard',
    shortDescription: 'Enterprise analytics platform processing 1M+ events per day with interactive visualizations',
    category: 'Frontend',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop'
    ],
    techStack: ['React', 'D3.js', 'WebSocket', 'GraphQL', 'PostgreSQL', 'TimescaleDB', 'Kubernetes'],
    liveUrl: 'https://example-analytics.com',
    metrics: [
      { label: 'Events/Day', value: '1M+', icon: 'activity' },
      { label: 'Dashboard Load', value: '<2s', icon: 'gauge' },
      { label: 'Data Latency', value: '<100ms', icon: 'zap' },
      { label: 'Concurrent Users', value: '10K+', icon: 'users' }
    ],
    challenge: 'Marketing team needed real-time insights into campaign performance across multiple channels, but existing analytics solution had 30-minute data delays and couldn\'t handle custom reporting. Dashboard was slow and crashed under heavy load during campaign launches.',
    solution: 'Developed a modern analytics platform with React frontend featuring interactive D3.js visualizations and real-time updates via WebSocket. Built GraphQL API layer for flexible querying, implemented TimescaleDB for efficient time-series data storage, and created custom aggregation pipelines for instant insights. Deployed on Kubernetes with horizontal scaling to handle variable loads.',
    results: 'Reduced data latency from 30 minutes to under 100ms, enabling real-time campaign optimization. Dashboard loads in under 2 seconds even with complex queries. Processing 1M+ events per day and supporting 10K+ concurrent users. Marketing team reports 45% improvement in campaign ROI due to faster decision-making.',
    testimonial: {
      quote: 'The real-time analytics platform John built has become indispensable for our marketing team. We can now make data-driven decisions instantly.',
      author: 'Emily Watson',
      role: 'Director of Marketing at TechStartup'
    }
  },
  {
    id: '4',
    slug: 'collaborative-project-management',
    title: 'Collaborative Project Management Tool',
    shortDescription: 'Team collaboration platform with real-time updates serving 5K+ teams',
    category: 'Full Stack',
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop'
    ],
    techStack: ['Vue.js', 'Node.js', 'MongoDB', 'Redis', 'WebSocket', 'Docker', 'Nginx'],
    githubUrl: 'https://github.com/johndoe/project-management',
    metrics: [
      { label: 'Active Teams', value: '5K+', icon: 'users' },
      { label: 'Real-time Sync', value: '<50ms', icon: 'refresh-cw' },
      { label: 'User Growth', value: '300%', icon: 'trending-up' }
    ],
    challenge: 'Small teams struggled with fragmented tools for task management, communication, and file sharing. Existing solutions were either too complex or lacked real-time collaboration features.',
    solution: 'Built an intuitive project management tool with Vue.js featuring drag-and-drop task boards, real-time collaboration with WebSocket, integrated chat, file sharing, and time tracking. Implemented Redis for caching and real-time presence, MongoDB for flexible data storage.',
    results: 'Launched MVP in 3 months, grew to 5K+ active teams within first year. 300% user growth in 6 months. Average team productivity increased by 40% based on user surveys. Featured on Product Hunt and achieved #2 product of the day.'
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured)
}

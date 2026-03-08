import { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'RetailCo',
    quote: 'John transformed our struggling e-commerce platform into a high-performance system that drives real business results. His technical expertise and attention to detail were exceptional.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    linkedIn: 'https://linkedin.com/in/sarahchen',
    featured: true
  },
  {
    id: '2',
    name: 'Dr. Michael Roberts',
    role: 'Chief Medical Officer',
    company: 'HealthPlus',
    quote: 'John delivered a mission-critical system that not only met our strict compliance requirements but exceeded our expectations for usability and performance.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    linkedIn: 'https://linkedin.com/in/michaelroberts',
    featured: true
  },
  {
    id: '3',
    name: 'Emily Watson',
    role: 'Director of Marketing',
    company: 'TechStartup',
    quote: 'The real-time analytics platform John built has become indispensable for our marketing team. We can now make data-driven decisions instantly.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    linkedIn: 'https://linkedin.com/in/emilywatson',
    featured: true
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'CTO',
    company: 'FinanceHub',
    quote: 'Working with John was a game-changer. He brought deep technical knowledge and a pragmatic approach to solving complex problems. Our API performance improved by 300%.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    linkedIn: 'https://linkedin.com/in/davidkim',
    featured: true
  },
  {
    id: '5',
    name: 'Lisa Anderson',
    role: 'Product Manager',
    company: 'SaaS Corp',
    quote: 'John is not just a developer but a true partner in product development. He brings valuable insights and consistently delivers high-quality work on time.',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
    linkedIn: 'https://linkedin.com/in/lisaanderson',
    featured: false
  },
  {
    id: '6',
    name: 'James Miller',
    role: 'Founder & CEO',
    company: 'StartupXYZ',
    quote: 'John helped us launch our MVP in record time without compromising on quality. His full-stack expertise was invaluable for our small team.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    linkedIn: 'https://linkedin.com/in/jamesmiller',
    featured: false
  }
]

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter(testimonial => testimonial.featured)
}

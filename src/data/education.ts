import { Education } from '@/types'

export const education: Education[] = [
  {
    id: '1',
    school: 'University of California, Berkeley',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    duration: '4 years',
    startDate: '2014-09',
    endDate: '2018-05',
    location: 'Berkeley, CA',
    grade: '3.8 GPA',
    current: false,
    achievements: [
      'Graduated with Honors',
      'Dean\'s List all semesters',
      'Led university hackathon team to 1st place',
      'Published research paper on machine learning algorithms',
      'Teaching Assistant for Data Structures course'
    ]
  },
  {
    id: '2',
    school: 'Lincoln High School',
    degree: 'High School Diploma',
    field: 'Science & Technology Focus',
    duration: '4 years',
    startDate: '2010-09',
    endDate: '2014-05',
    location: 'San Francisco, CA',
    grade: '4.0 GPA',
    current: false,
    achievements: [
      'Valedictorian',
      'National Merit Scholar',
      'Computer Science Club President',
      'Math Olympiad Gold Medalist',
      'AP Scholar with Distinction'
    ]
  }
]

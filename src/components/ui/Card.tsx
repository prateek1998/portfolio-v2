import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  children: React.ReactNode
}

export function Card({ hover = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6',
        hover && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary-300 dark:hover:border-primary-700',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

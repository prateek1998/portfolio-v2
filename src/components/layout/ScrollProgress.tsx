'use client'

import React from 'react'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 dark:bg-gray-800">
      <div
        className="h-full bg-gradient-to-r from-primary-600 to-accent-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

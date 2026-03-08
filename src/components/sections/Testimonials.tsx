'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Linkedin } from 'lucide-react'
import { getFeaturedTestimonials } from '@/data/testimonials'

export function Testimonials() {
  const testimonials = getFeaturedTestimonials()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = testimonials.length - 1
      if (nextIndex >= testimonials.length) nextIndex = 0
      return nextIndex
    })
  }

  const goToSlide = (index: number) => {
    const newDirection = index > currentIndex ? 1 : -1
    setDirection(newDirection)
    setCurrentIndex(index)
  }

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-32 bg-[#FAF8F5] dark:bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large decorative text */}
        <motion.div
          style={{ y }}
          className="absolute bottom-[10%] right-[-5%] text-[200px] font-bebas text-gray-900/[0.02] dark:text-white/[0.02] leading-none select-none"
        >
          VOICES
        </motion.div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-500 to-cyan-400" />
            <span className="font-mono text-sm tracking-wider text-gray-600 dark:text-gray-400 uppercase">
              What Clients Say
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bebas text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-tight text-gray-900 dark:text-white mb-4"
          >
            Client<br />Testimonials
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl italic"
          >
            What clients and colleagues say about working with me
          </motion.p>
        </div>

        {/* Slider Container */}
        <div className="max-w-5xl mx-auto">
          {/* Main Slider */}
          <div className="relative min-h-[500px] lg:min-h-[400px] mb-12">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute inset-0"
              >
                <div className="relative group h-full">
                  {/* Shadow layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />

                  {/* Main card */}
                  <div className="relative h-full bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-white p-8 lg:p-12 flex flex-col">
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="mb-8"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Quote size={32} className="text-white" />
                      </div>
                    </motion.div>

                    {/* Quote Text */}
                    <motion.blockquote
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="flex-1 mb-8"
                    >
                      <p className="font-serif text-2xl lg:text-3xl text-gray-800 dark:text-gray-200 leading-relaxed italic">
                        "{currentTestimonial.quote}"
                      </p>
                    </motion.blockquote>

                    {/* Author Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex items-center justify-between pt-6 border-t-2 border-gray-900 dark:border-white"
                    >
                      <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 translate-x-1 translate-y-1" />
                          <div className="relative w-16 h-16 border-2 border-gray-900 dark:border-white overflow-hidden">
                            <Image
                              src={currentTestimonial.avatar}
                              alt={currentTestimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>

                        {/* Details */}
                        <div>
                          <h4 className="font-bebas text-2xl tracking-tight text-gray-900 dark:text-white">
                            {currentTestimonial.name}
                          </h4>
                          <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
                            {currentTestimonial.role}
                          </p>
                          <p className="font-mono text-xs text-gray-500 dark:text-gray-500">
                            {currentTestimonial.company}
                          </p>
                        </div>
                      </div>

                      {/* LinkedIn Link */}
                      {currentTestimonial.linkedIn && (
                        <motion.a
                          href={currentTestimonial.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="LinkedIn profile"
                        >
                          <Linkedin size={20} className="text-gray-900 dark:text-white" />
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-8">
            {/* Previous Button */}
            <motion.button
              onClick={() => paginate(-1)}
              className="group relative p-4 bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-white"
              whileHover={{ x: -4, y: -4 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 -z-10" />
              <ChevronLeft size={24} className="text-gray-900 dark:text-white" />
            </motion.button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all ${
                    index === currentIndex
                      ? 'w-12 h-3 bg-gradient-to-r from-purple-500 to-pink-500'
                      : 'w-3 h-3 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={() => paginate(1)}
              className="group relative p-4 bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-white"
              whileHover={{ x: 4, y: -4 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 -z-10" />
              <ChevronRight size={24} className="text-gray-900 dark:text-white" />
            </motion.button>
          </div>

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <span className="font-mono text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider">
              {String(currentIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <p className="font-serif text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 italic">
            Ready to join these satisfied clients?
          </p>

          <motion.button
            onClick={() => scrollToSection('#contact')}
            className="group relative px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-mono text-sm tracking-wider uppercase overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Your Project
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

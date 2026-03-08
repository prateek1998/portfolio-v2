'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, MoveDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/site-config'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  const smoothMouseX = useSpring(0, { stiffness: 50, damping: 20 })
  const smoothMouseY = useSpring(0, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 2
      const y = (clientY / innerHeight - 0.5) * 2
      setMousePosition({ x, y })
      smoothMouseX.set(x * 20)
      smoothMouseY.set(y * 20)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [smoothMouseX, smoothMouseY])

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Split text for stagger animation
  const nameChars = siteConfig.author.name.split('')
  const roleWords = siteConfig.author.role.split(' ')

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF8F5] dark:bg-[#0A0A0A]"
    >
      {/* Kinetic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Morphing Shapes */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-cyan-300/10 dark:from-cyan-500/20 dark:to-cyan-300/20"
          style={{
            x: smoothMouseX,
            y: smoothMouseY,
          }}
          animate={{
            borderRadius: [
              '60% 40% 30% 70% / 60% 30% 70% 40%',
              '30% 60% 70% 40% / 50% 60% 30% 60%',
              '60% 40% 30% 70% / 60% 30% 70% 40%',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute bottom-[15%] right-[10%] w-[400px] h-[400px] bg-gradient-to-tl from-orange-500/10 to-pink-400/10 dark:from-orange-500/20 dark:to-pink-400/20"
          style={{
            x: useTransform(smoothMouseX, x => -x * 0.5),
            y: useTransform(smoothMouseY, y => -y * 0.5),
          }}
          animate={{
            borderRadius: [
              '70% 30% 50% 50% / 40% 50% 60% 50%',
              '50% 50% 30% 70% / 60% 40% 50% 60%',
              '70% 30% 50% 50% / 40% 50% 60% 50%',
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

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

        {/* Floating Typography Elements */}
        <motion.div
          className="absolute top-[20%] right-[15%] text-[180px] font-bebas text-gray-900/[0.02] dark:text-white/[0.02] select-none pointer-events-none leading-none"
          animate={{
            y: [0, -30, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          DEV
        </motion.div>

        <motion.div
          className="absolute bottom-[25%] left-[10%] text-[140px] font-bebas text-gray-900/[0.02] dark:text-white/[0.02] select-none pointer-events-none leading-none"
          animate={{
            y: [0, 20, 0],
            rotate: [2, -2, 2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          CODE
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-20"
      >
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Main Typography */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-500 to-cyan-400" />
              <span className="font-mono text-sm tracking-wider text-gray-600 dark:text-gray-400 uppercase">
                Portfolio 2026
              </span>
            </motion.div>

            {/* Name - Kinetic Typography */}
            <div className="overflow-hidden">
              <h1 className="font-bebas text-[clamp(4rem,12vw,10rem)] leading-[0.85] tracking-tight text-gray-900 dark:text-white">
                {nameChars.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block"
                    style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Role - Staggered Words */}
            <div className="flex flex-wrap gap-3 items-center">
              {roleWords.map((word, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative"
                >
                  <span className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200 italic">
                    {word}
                  </span>
                  {i === 0 && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed"
            >
              {siteConfig.author.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-mono text-sm tracking-wider uppercase overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-cyan-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Let's Work Together
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="group px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-mono text-sm tracking-wider uppercase hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Stats & Social */}
          <div className="lg:col-span-5 space-y-12">
            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-6"
            >
              {/* Availability Badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-white"
                whileHover={{ x: -8, y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="w-3 h-3 rounded-full bg-green-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <span className="font-mono text-sm text-gray-900 dark:text-white uppercase tracking-wider">
                  {siteConfig.author.availability}
                </span>
              </motion.div>

              {/* Location */}
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-4 bg-cyan-500/10 border-2 border-cyan-500"
                whileHover={{ x: -8, y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="font-mono text-sm text-gray-900 dark:text-white">
                  📍 {siteConfig.author.location}
                </span>
              </motion.div>

              {/* Experience */}
              <motion.div
                className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 border-2 border-gray-900 dark:border-white"
                whileHover={{ x: -12, y: -12 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-6xl font-bebas text-white dark:text-gray-900 leading-none mb-2">
                  5+
                </div>
                <div className="font-mono text-sm text-gray-400 dark:text-gray-600 uppercase tracking-wider">
                  Years Experience
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links - Vertical Layout */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="space-y-3"
            >
              <div className="font-mono text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4">
                Connect
              </div>

              {[
                { icon: Github, label: 'GitHub', href: siteConfig.social.github },
                { icon: Linkedin, label: 'LinkedIn', href: siteConfig.social.linkedin },
                { icon: Mail, label: 'Email', href: `mailto:${siteConfig.social.email}` },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <social.icon size={20} className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                  <span className="font-mono text-sm text-gray-900 dark:text-white">
                    {social.label}
                  </span>
                  <ArrowRight size={16} className="ml-auto text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Bottom Center */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
            aria-label="Scroll to content"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <MoveDown size={24} />
            </motion.div>
            <span className="font-mono text-xs uppercase tracking-wider">Scroll</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

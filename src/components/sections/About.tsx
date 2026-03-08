'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Award, Briefcase, Code2, Users, Download } from 'lucide-react'
import { siteConfig } from '@/data/site-config'

const highlights = [
  {
    icon: Briefcase,
    label: '5+ Years',
    description: 'Professional Experience',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Code2,
    label: '50+ Projects',
    description: 'Successfully Delivered',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    label: '20+ Clients',
    description: 'Worldwide',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Award,
    label: '99%',
    description: 'Client Satisfaction',
    gradient: 'from-green-500 to-teal-500',
  },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 bg-white dark:bg-gray-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large decorative text */}
        <motion.div
          style={{ y }}
          className="absolute top-[20%] left-[-8%] text-[200px] font-bebas text-gray-900/[0.015] dark:text-white/[0.015] leading-none select-none"
        >
          ABOUT
        </motion.div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
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
              Get to Know Me
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bebas text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-tight text-gray-900 dark:text-white mb-4"
          >
            About<br />Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl italic"
          >
            Passionate about building exceptional digital experiences
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Shadow layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 translate-x-6 translate-y-6 transition-transform group-hover:translate-x-8 group-hover:translate-y-8" />

              {/* Main image */}
              <div className="relative aspect-square border-2 border-gray-900 dark:border-white overflow-hidden">
                <Image
                  src={siteConfig.author.avatar}
                  alt={siteConfig.author.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative element */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-500"
                animate={{
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="font-bebas text-4xl md:text-5xl tracking-tight text-gray-900 dark:text-white">
              Building Digital Solutions That Make a Difference
            </h3>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                With over 5 years of experience in full-stack development, I specialize in creating
                scalable, high-performance web applications that solve real business problems.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey in tech started with a curiosity about how things work on the web. Today,
                I've had the privilege of working with startups and established companies, helping them
                build products that users love and businesses depend on.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm passionate about clean code, user experience, and staying current with the latest
                technologies. When I'm not coding, you'll find me contributing to open-source projects,
                writing technical articles, or exploring new frameworks.
              </p>
            </div>

            {/* Download Resume Button */}
            <motion.a
              href="/resume.pdf"
              download
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-mono text-sm tracking-wider uppercase overflow-hidden mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
                whileHover={{ y: -8 }}
              >
                {/* Shadow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3`} />

                {/* Card */}
                <div className="relative bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-white p-6 lg:p-8 text-center">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex p-3 bg-gradient-to-br ${highlight.gradient} mb-4`}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon size={24} className="text-white" />
                  </motion.div>

                  {/* Value */}
                  <div className="font-bebas text-4xl text-gray-900 dark:text-white leading-none mb-2">
                    {highlight.label}
                  </div>

                  {/* Description */}
                  <p className="font-mono text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

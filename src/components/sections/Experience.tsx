'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Briefcase, MapPin, Calendar, ArrowUpRight, TrendingUp } from 'lucide-react'
import { experiences } from '@/data/experience'

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 bg-white dark:bg-gray-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large decorative text */}
        <motion.div
          style={{ y }}
          className="absolute top-[15%] left-[-10%] text-[220px] font-bebas text-gray-900/[0.015] dark:text-white/[0.015] leading-none select-none"
        >
          CAREER
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
              Professional Journey
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bebas text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-tight text-gray-900 dark:text-white mb-4"
          >
            Work<br />Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl italic"
          >
            My professional journey building impactful solutions
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Vertical */}
          <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-500 via-purple-500 to-orange-500" />

          {/* Experience Cards */}
          <div className="space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0
              const colorGradients = [
                'from-cyan-500 to-blue-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-red-500',
              ]
              const gradient = colorGradients[index % colorGradients.length]

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    {/* Timeline Node */}
                    <div className="hidden lg:block absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <motion.div
                        className={`relative w-8 h-8 rounded-full bg-gradient-to-br ${gradient} border-4 border-white dark:border-gray-950`}
                        whileHover={{ scale: 1.3, rotate: 180 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <motion.div
                          className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradient} blur-lg opacity-50`}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0.2, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Date/Duration Card */}
                    <motion.div
                      className={`${isEven ? 'lg:text-right lg:justify-end' : 'lg:col-start-2'} flex ${isEven ? 'lg:flex-row-reverse' : ''} items-start gap-4`}
                      initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="flex-1">
                        {/* Duration Badge */}
                        <motion.div
                          className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-br ${gradient} mb-4`}
                          whileHover={{ scale: 1.05, rotate: isEven ? -2 : 2 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <Calendar size={20} className="text-white" />
                          <span className="font-mono text-sm text-white uppercase tracking-wider font-bold">
                            {exp.duration}
                          </span>
                        </motion.div>

                        {/* Current Badge */}
                        {exp.current && (
                          <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border-2 border-green-500 mb-4"
                            animate={{
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                          >
                            <motion.div
                              className="w-2 h-2 rounded-full bg-green-500"
                              animate={{
                                opacity: [1, 0.5, 1],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                              }}
                            />
                            <span className="font-mono text-xs text-gray-900 dark:text-white uppercase tracking-wider font-bold">
                              Current Role
                            </span>
                          </motion.div>
                        )}

                        {/* Year Indicator */}
                        <div className={`font-bebas text-7xl text-gray-900/10 dark:text-white/10 leading-none ${isEven ? 'lg:text-right' : ''}`}>
                          {exp.startDate.split('-')[0]}
                        </div>
                      </div>
                    </motion.div>

                    {/* Experience Card */}
                    <motion.div
                      className={`group ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <div className="relative">
                        {/* Shadow layer */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} translate-x-3 translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4`} />

                        {/* Main card */}
                        <div className="relative bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-white p-8 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                          {/* Header */}
                          <div className="mb-6">
                            <div className="flex items-start justify-between gap-4 mb-3">
                              <h3 className="font-bebas text-3xl md:text-4xl tracking-tight text-gray-900 dark:text-white leading-tight">
                                {exp.role}
                              </h3>
                              <motion.div
                                className={`p-2 bg-gradient-to-br ${gradient}`}
                                whileHover={{ rotate: 15, scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                              >
                                <Briefcase size={24} className="text-white" />
                              </motion.div>
                            </div>

                            <h4 className="font-serif text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2 italic">
                              {exp.company}
                            </h4>

                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                              <MapPin size={16} />
                              <span className="font-mono text-sm">{exp.location}</span>
                            </div>
                          </div>

                          {/* Divider */}
                          <motion.div
                            className={`h-1 bg-gradient-to-r ${gradient} mb-6`}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            style={{ transformOrigin: 'left' }}
                          />

                          {/* Achievements */}
                          <div className="mb-6">
                            <div className="flex items-center gap-2 mb-4">
                              <TrendingUp size={18} className="text-gray-600 dark:text-gray-400" />
                              <h5 className="font-mono text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                Key Achievements
                              </h5>
                            </div>
                            <ul className="space-y-3">
                              {exp.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                                >
                                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient} mt-2 flex-shrink-0`} />
                                  <span className="text-sm leading-relaxed">{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech Stack */}
                          <div>
                            <h5 className="font-mono text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">
                              Tech Stack
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {exp.techStack.map((tech, i) => (
                                <motion.span
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.3, delay: 0.7 + i * 0.03 }}
                                  whileHover={{ scale: 1.1, y: -2 }}
                                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 font-mono text-xs text-gray-900 dark:text-white uppercase tracking-wider"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              label: 'Total Experience',
              value: '5+ Years',
              gradient: 'from-cyan-500 to-blue-500',
            },
            {
              label: 'Companies',
              value: experiences.length,
              gradient: 'from-purple-500 to-pink-500',
            },
            {
              label: 'Current Role',
              value: experiences.find(e => e.current)?.role.split(' ')[0] || 'N/A',
              gradient: 'from-orange-500 to-red-500',
            },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Shadow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3`} />

              {/* Card */}
              <div className="relative bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-white p-8">
                <div className="font-bebas text-5xl text-gray-900 dark:text-white leading-none mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

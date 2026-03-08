'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Award, Star } from 'lucide-react'
import { education } from '@/data/education'

export function Education() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-32 bg-[#FAF8F5] dark:bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large decorative text */}
        <motion.div
          style={{ y }}
          className="absolute top-[15%] right-[-10%] text-[220px] font-bebas text-gray-900/[0.02] dark:text-white/[0.02] leading-none select-none"
        >
          LEARN
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
            <div className="h-[2px] w-12 bg-gradient-to-r from-purple-500 to-pink-400" />
            <span className="font-mono text-sm tracking-wider text-gray-600 dark:text-gray-400 uppercase">
              Academic Background
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bebas text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-tight text-gray-900 dark:text-white mb-4"
          >
            Education &<br />Qualifications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl italic"
          >
            Building a strong foundation through continuous learning
          </motion.p>
        </div>

        {/* Education Cards */}
        <div className="space-y-12">
          {education.map((edu, index) => {
            const colorGradients = [
              'from-purple-500 to-pink-500',
              'from-orange-500 to-red-500',
              'from-green-500 to-teal-500',
            ]
            const gradient = colorGradients[index % colorGradients.length]

            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Shadow layer */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6`} />

                {/* Main card */}
                <div className="relative bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-white p-8 lg:p-12">
                  <div className="grid lg:grid-cols-12 gap-8">
                    {/* Left Column - School Info */}
                    <div className="lg:col-span-4 space-y-6">
                      {/* School Icon */}
                      <motion.div
                        className={`inline-flex p-4 bg-gradient-to-br ${gradient}`}
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <GraduationCap size={40} className="text-white" />
                      </motion.div>

                      {/* School Name */}
                      <div>
                        <h3 className="font-bebas text-3xl md:text-4xl tracking-tight text-gray-900 dark:text-white leading-tight mb-2">
                          {edu.school}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
                          <MapPin size={16} />
                          <span className="font-mono text-sm">{edu.location}</span>
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <motion.div
                        className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-br ${gradient}`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Calendar size={20} className="text-white" />
                        <span className="font-mono text-sm text-white uppercase tracking-wider font-bold">
                          {edu.duration}
                        </span>
                      </motion.div>

                      {/* Year Indicator */}
                      <div className="font-bebas text-7xl text-gray-900/10 dark:text-white/10 leading-none">
                        {edu.startDate.split('-')[0]}
                      </div>
                    </div>

                    {/* Right Column - Degree & Achievements */}
                    <div className="lg:col-span-8 space-y-6">
                      {/* Degree Info */}
                      <div>
                        <h4 className="font-serif text-2xl font-semibold text-gray-900 dark:text-white mb-2 italic">
                          {edu.degree}
                        </h4>
                        <p className="font-mono text-lg text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                          {edu.field}
                        </p>
                        {edu.grade && (
                          <motion.div
                            className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Star size={18} className="text-yellow-600 dark:text-yellow-400" />
                            <span className="font-mono text-sm text-gray-900 dark:text-white font-bold">
                              {edu.grade}
                            </span>
                          </motion.div>
                        )}
                      </div>

                      {/* Divider */}
                      <motion.div
                        className={`h-1 bg-gradient-to-r ${gradient}`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ transformOrigin: 'left' }}
                      />

                      {/* Achievements */}
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <Award size={18} className="text-gray-600 dark:text-gray-400" />
                            <h5 className="font-mono text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                              Achievements & Honors
                            </h5>
                          </div>
                          <ul className="space-y-3">
                            {edu.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                              >
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient} mt-2 flex-shrink-0`} />
                                <span className="text-sm leading-relaxed">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

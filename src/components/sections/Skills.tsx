'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { skills, skillCategories, getSkillsByCategory } from '@/data/skills'

const categoryAccents: Record<string, string> = {
  Frontend: '#22D3EE',   // cyan
  Backend:  '#A855F7',   // purple
  DevOps:   '#F97316',   // orange
  Tools:    '#22C55E',   // green
}

const categoryNums: Record<string, string> = {
  Frontend: '01',
  Backend:  '02',
  DevOps:   '03',
  Tools:    '04',
}

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 bg-[#FAF8F5] dark:bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background watermark */}
      <motion.div
        style={{ y }}
        className="absolute top-[5%] right-[-4%] text-[220px] font-bebas text-gray-900/[0.025] dark:text-white/[0.025] leading-none select-none pointer-events-none"
      >
        STACK
      </motion.div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

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
              Technical Arsenal
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bebas text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-tight text-gray-900 dark:text-white"
          >
            Skills &<br />Technologies
          </motion.h2>
        </div>

        {/* Categories */}
        <div className="space-y-0 divide-y-2 divide-gray-900 dark:divide-white">
          {skillCategories.map((category, catIdx) => {
            const categorySkills = getSkillsByCategory(category)
            const accent = categoryAccents[category]
            const num = categoryNums[category]

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: catIdx * 0.08 }}
                className="group py-10 lg:py-12"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
                  {/* Left: category label */}
                  <div className="flex-shrink-0 lg:w-64 flex items-start gap-5">
                    <span
                      className="font-mono text-xs mt-1 opacity-50"
                      style={{ color: accent }}
                    >
                      {num}
                    </span>
                    <div>
                      <h3 className="font-bebas text-5xl md:text-6xl tracking-tight text-gray-900 dark:text-white leading-none">
                        {category}
                      </h3>
                      <motion.div
                        className="h-[3px] mt-2"
                        style={{ transformOrigin: 'left', backgroundColor: accent }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Right: skill tags */}
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: catIdx * 0.08 + skillIdx * 0.04,
                          ease: 'backOut',
                        }}
                        className="relative group/tag"
                      >
                        {/* Brutalist shadow */}
                        <div
                          className="absolute inset-0 translate-x-[3px] translate-y-[3px] transition-transform group-hover/tag:translate-x-[5px] group-hover/tag:translate-y-[5px]"
                          style={{ backgroundColor: accent }}
                        />
                        {/* Tag */}
                        <motion.button
                          className="relative px-5 py-2.5 bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-white font-mono text-sm font-bold uppercase tracking-wide text-gray-900 dark:text-white transition-transform group-hover/tag:-translate-x-[2px] group-hover/tag:-translate-y-[2px]"
                          whileTap={{ scale: 0.97 }}
                        >
                          {skill.name}
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom count row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-wrap gap-4"
        >
          {[
            { label: 'Technologies', value: skills.length },
            { label: 'Categories', value: skillCategories.length },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative px-8 py-6 bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ x: -6, y: -6 }}
            >
              <div className="font-bebas text-5xl text-gray-900 dark:text-white leading-none mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, TrendingUp, X } from 'lucide-react'
import { getFeaturedProjects } from '@/data/projects'
import { Project } from '@/types'

// ─── Project Modal ────────────────────────────────────────────────────────────

function ProjectModal({
  project,
  gradient,
  onClose,
}: {
  project: Project
  gradient: string
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        {/* Dim layer */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          key="modal"
          className="relative w-full max-w-2xl z-10"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Brutalist shadow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} translate-x-3 translate-y-3`} />

          {/* Card */}
          <div className="relative bg-[#FAF8F5] dark:bg-[#111111] border-2 border-gray-900 dark:border-white overflow-hidden">
            {/* Thumbnail strip */}
            <div className="relative h-56 border-b-2 border-gray-900 dark:border-white overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Category badge */}
              <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${gradient}`}>
                <span className="font-mono text-xs text-white uppercase tracking-wider font-bold">
                  {project.category}
                </span>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 p-1.5 bg-white dark:bg-gray-900 border border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5">
              {/* Title */}
              <h3 className="font-bebas text-3xl tracking-tight text-gray-900 dark:text-white leading-tight">
                {project.title}
              </h3>

              {/* Short description */}
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Challenge / detail */}
              {project.challenge && (
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed border-l-2 border-gray-300 dark:border-gray-700 pl-3">
                  {project.challenge.length > 160
                    ? project.challenge.slice(0, 160).trimEnd() + '…'
                    : project.challenge}
                </p>
              )}

              {/* Metrics row */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {project.metrics.slice(0, 3).map((m, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700"
                    >
                      <TrendingUp size={11} className="text-gray-500" />
                      <span className="font-bebas text-lg text-gray-900 dark:text-white leading-none">
                        {m.value}
                      </span>
                      <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wide">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech stack */}
              <div>
                <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-2">
                  Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 font-mono text-[10px] text-gray-800 dark:text-gray-300 uppercase tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-1">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${gradient} font-mono text-xs text-white uppercase tracking-wider font-bold`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <ExternalLink size={13} />
                    Live Site
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-white font-mono text-xs text-gray-900 dark:text-white uppercase tracking-wider font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Github size={13} />
                    GitHub
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function FeaturedProjects() {
  const projects = getFeaturedProjects()
  const sectionRef = useRef<HTMLElement>(null)
  const [activeProject, setActiveProject] = useState<{ project: Project; gradient: string } | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const gradients = [
    'from-cyan-500 to-blue-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500',
  ]

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="relative py-32 bg-[#FAF8F5] dark:bg-[#0A0A0A] overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            style={{ y }}
            className="absolute top-[15%] right-[-8%] text-[200px] font-bebas text-gray-900/[0.02] dark:text-white/[0.02] leading-none select-none"
          >
            WORK
          </motion.div>

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
                Selected Works
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bebas text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-tight text-gray-900 dark:text-white mb-4"
            >
              Featured<br />Projects
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl italic"
            >
              A selection of projects that showcase my expertise in building scalable applications
            </motion.p>
          </div>

          {/* Projects */}
          <div className="space-y-32">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0
              const gradient = gradients[index % gradients.length]

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${!isEven ? 'lg:col-start-7' : ''}`}>
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6`} />

                      <div className="relative aspect-video border-2 border-gray-900 dark:border-white overflow-hidden">
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <div className="flex gap-3">
                            {project.liveUrl && (
                              <motion.a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white dark:bg-gray-900 border border-white hover:bg-gray-100 transition-colors"
                                whileHover={{ scale: 1.1, y: -4 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="View live project"
                              >
                                <ExternalLink size={20} className="text-gray-900 dark:text-white" />
                              </motion.a>
                            )}
                            {project.githubUrl && (
                              <motion.a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white dark:bg-gray-900 border border-white hover:bg-gray-100 transition-colors"
                                whileHover={{ scale: 1.1, y: -4 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="View GitHub repository"
                              >
                                <Github size={20} className="text-gray-900 dark:text-white" />
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="absolute -top-8 -left-8 font-bebas text-8xl text-gray-900/10 dark:text-white/10 leading-none">
                        0{index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''} flex flex-col gap-6`}>
                    {/* Category Badge */}
                    <motion.div
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${gradient}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <span className="font-mono text-xs text-white uppercase tracking-wider font-bold">
                        {project.category}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-bebas text-4xl md:text-5xl tracking-tight text-gray-900 dark:text-white">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {project.metrics.slice(0, 4).map((metric, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                          className="relative group/metric"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} translate-x-1 translate-y-1 transition-transform group-hover/metric:translate-x-2 group-hover/metric:translate-y-2`} />

                          <div className="relative bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <TrendingUp size={16} className="text-gray-500" />
                              <div className="font-bebas text-2xl text-gray-900 dark:text-white leading-none">
                                {metric.value}
                              </div>
                            </div>
                            <p className="font-mono text-xs text-gray-600 dark:text-gray-400">
                              {metric.label}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-mono text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 6).map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.6 + i * 0.03 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 font-mono text-xs text-gray-900 dark:text-white uppercase tracking-wider"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* CTA — opens modal */}
                    <div className="pt-2">
                      <motion.button
                        onClick={() => setActiveProject({ project, gradient })}
                        className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-mono text-sm tracking-wider uppercase overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${gradient}`}
                          initial={{ x: '-100%' }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10 flex items-center gap-2">
                          View Case Study
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-32 text-center"
          >
            <p className="font-serif text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 italic">
              Interested in working together?
            </p>

            <motion.button
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-mono text-sm tracking-wider uppercase overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Discuss Your Project</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modal — rendered outside section so z-index works correctly */}
      {activeProject && (
        <ProjectModal
          project={activeProject.project}
          gradient={activeProject.gradient}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  )
}

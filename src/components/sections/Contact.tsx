'use client'

import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle, XCircle, Sparkles } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { siteConfig } from '@/data/site-config'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 bg-white dark:bg-gray-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large decorative text */}
        <motion.div
          style={{ y }}
          className="absolute bottom-[10%] left-[-5%] text-[200px] font-bebas text-gray-900/[0.015] dark:text-white/[0.015] leading-none select-none"
        >
          CONNECT
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
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bebas text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-tight text-gray-900 dark:text-white mb-4"
          >
            Let's Work<br />Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl italic"
          >
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-8"
          >
            {/* Email Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
              <div className="relative bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-white p-6">
                <motion.div
                  className="inline-flex p-3 bg-gradient-to-br from-cyan-500 to-blue-500 mb-4"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Mail size={24} className="text-white" />
                </motion.div>
                <h3 className="font-bebas text-2xl tracking-tight text-gray-900 dark:text-white mb-2">
                  Email
                </h3>
                <a
                  href={`mailto:${siteConfig.author.email}`}
                  className="font-mono text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors break-all"
                >
                  {siteConfig.author.email}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
              <div className="relative bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-white p-6">
                <motion.div
                  className="inline-flex p-3 bg-gradient-to-br from-purple-500 to-pink-500 mb-4"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <MapPin size={24} className="text-white" />
                </motion.div>
                <h3 className="font-bebas text-2xl tracking-tight text-gray-900 dark:text-white mb-2">
                  Location
                </h3>
                <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
                  {siteConfig.author.location}
                </p>
              </div>
            </div>

            {/* Availability Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-500 translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
              <div className="relative bg-white dark:bg-gray-900 border-2 border-green-500 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-500"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <h3 className="font-bebas text-2xl tracking-tight text-gray-900 dark:text-white">
                    {siteConfig.author.availability}
                  </h3>
                </div>
                <p className="font-mono text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  I typically respond within 24 hours
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <div className="relative group">
              {/* Shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />

              {/* Form Card */}
              <div className="relative bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-white p-8 lg:p-12">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name & Email Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                        Name *
                      </label>
                      <input
                        {...register('name')}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950 border-2 border-gray-300 dark:border-gray-700 font-mono text-sm text-gray-900 dark:text-white focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-mono">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                        Email *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950 border-2 border-gray-300 dark:border-gray-700 font-mono text-sm text-gray-900 dark:text-white focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-mono">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block font-mono text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Project Type *
                    </label>
                    <select
                      {...register('projectType')}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950 border-2 border-gray-300 dark:border-gray-700 font-mono text-sm text-gray-900 dark:text-white focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
                    >
                      <option value="">Select a project type</option>
                      <option value="web-app">Web Application</option>
                      <option value="mobile-app">Mobile Application</option>
                      <option value="website">Website</option>
                      <option value="api">API Development</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.projectType && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-mono">
                        {errors.projectType.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message')}
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950 border-2 border-gray-300 dark:border-gray-700 font-mono text-sm text-gray-900 dark:text-white focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-mono">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-mono text-sm tracking-wider uppercase overflow-hidden disabled:opacity-50"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: isSubmitting ? '-100%' : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <Sparkles size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </span>
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-green-500/10 border-2 border-green-500"
                    >
                      <CheckCircle size={20} className="text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span className="font-mono text-sm text-green-600 dark:text-green-400">
                        Message sent successfully! I'll get back to you soon.
                      </span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-red-500/10 border-2 border-red-500"
                    >
                      <XCircle size={20} className="text-red-600 dark:text-red-400 flex-shrink-0" />
                      <span className="font-mono text-sm text-red-600 dark:text-red-400">
                        Failed to send message. Please try again or email me directly.
                      </span>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'
import { siteConfig } from '@/data/site-config'

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-[#FAF8F5] dark:bg-[#0A0A0A] border-t-2 border-gray-900 dark:border-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Status */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <motion.div
                className="font-bebas text-5xl tracking-tight text-gray-900 dark:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {siteConfig.author.name.split(' ').map((word, i) => (
                  <div key={i}>{word}</div>
                ))}
                <motion.div
                  className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mt-2"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.div>
            </Link>

            <p className="font-mono text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              {siteConfig.author.role}
            </p>

            {/* Availability Badge */}
            <div className="relative inline-flex group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-500 translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="relative inline-flex items-center gap-3 px-4 py-3 bg-green-500/10 border-2 border-green-500">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
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
                <span className="font-mono text-xs text-gray-900 dark:text-white uppercase tracking-wider font-bold">
                  {siteConfig.author.availability}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4">
            <h3 className="font-mono text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 gap-3">
              {footerLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group text-left px-4 py-2 border-l-2 border-transparent hover:border-gray-900 dark:hover:border-white transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <span className="font-mono text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                    {link.label}
                  </span>
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-4">
            <h3 className="font-mono text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-6">
              Connect
            </h3>
            <div className="space-y-3">
              {[
                { icon: Github, label: 'GitHub', href: siteConfig.social.github },
                { icon: Linkedin, label: 'LinkedIn', href: siteConfig.social.linkedin },
                ...(siteConfig.social.twitter ? [{ icon: Twitter, label: 'Twitter', href: siteConfig.social.twitter }] : []),
                { icon: Mail, label: 'Email', href: `mailto:${siteConfig.social.email}` },
              ].map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.label !== 'Email' ? '_blank' : undefined}
                    rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="group flex items-center gap-4 p-3 border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <Icon size={18} className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                    <span className="font-mono text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                      {social.label}
                    </span>
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-gray-900 dark:border-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="font-mono text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                © {currentYear} {siteConfig.author.name}
              </p>
              <p className="font-mono text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                All rights reserved
              </p>
            </div>

            <div className="flex items-center gap-6">
              <p className="font-mono text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Built with Next.js & Tailwind
              </p>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                className="relative p-3 bg-white dark:bg-gray-950 border-2 border-gray-900 dark:border-white group"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Back to top"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 -z-10" />
                <ArrowUp size={18} className="text-gray-900 dark:text-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/rothezee',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/alan-ezequiel-fornes-roth-64167329a/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:alanfornes@sanluis.edu.ar',
      label: 'Email',
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="container-max section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-primary-500 mb-2"
            >
              Alan Roth
            </motion.div>
            <p className="text-dark-400">
              Fullstack Developer & Embedded Systems Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-dark-700 rounded-lg text-dark-400 hover:text-primary-500 hover:bg-dark-600 transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center gap-2 text-dark-400 hover:text-primary-500 transition-colors duration-200"
            >
              <ArrowUp size={20} />
              Back to Top
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-700 mt-8 pt-8">
          <div className="text-center text-dark-400">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              <span>© {currentYear} Alan Ezequiel Roth. Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                <Heart size={16} fill="currentColor" />
              </motion.span>
              <span>and React + TypeScript</span>
            </p>
            <p className="mt-2 text-sm">
              All rights reserved. Built with modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
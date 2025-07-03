import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'
import { useGitHubUser } from '@/hooks/useGitHub'

const Hero = () => {
  const { user, loading } = useGitHubUser()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/10 rounded-full blur-xl animate-bounce-slow" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-600/10 rounded-full blur-xl animate-bounce-slow" style={{ animationDelay: '1s' }} />
      
      <div className="container-max section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Avatar */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary-500/20 shadow-2xl"
              >
                {loading ? (
                  <div className="w-full h-full bg-dark-700 animate-pulse" />
                ) : (
                  <img
                    src={user?.avatar_url || '/api/placeholder/128/128'}
                    alt="Alan Ezequiel Roth"
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-dark-900 animate-pulse" />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-dark-100">Hi, I'm </span>
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
              Alan Roth
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-xl md:text-2xl text-dark-300 mb-4">
              <span className="text-primary-500 font-semibold">Fullstack Developer</span> & 
              <span className="text-primary-500 font-semibold"> Embedded Systems Enthusiast</span>
            </div>
            <div className="text-lg text-dark-400">
              From San Luis, Argentina 🇦🇷
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-dark-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about technology, software development, and electronics. I enjoy transforming ideas into 
            useful and creative solutions, both in the web world and in microcontrollers.
          </motion.p>

          {/* Stats */}
          {user && (
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 mb-12 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">{user.public_repos}</div>
                <div className="text-sm text-dark-400">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">{user.followers}</div>
                <div className="text-sm text-dark-400">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">{user.following}</div>
                <div className="text-sm text-dark-400">Following</div>
              </div>
            </motion.div>
          )}

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Github size={20} />
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-dark-400 mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary-500"
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Code, Zap, Star, Sparkles } from 'lucide-react'
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.15),transparent_50%)]" />
      
      {/* Floating Elements */}
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl"
      />
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-primary-600/20 rounded-full blur-xl"
      />
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-400/20 rounded-full blur-xl"
      />
      
      {/* Floating Icons */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-32 right-20 text-primary-500/30"
      >
        <Code size={40} />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
        className="absolute bottom-32 left-20 text-primary-500/30"
      >
        <Zap size={35} />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '3s' }}
        className="absolute top-1/3 right-1/4 text-primary-500/30"
      >
        <Star size={30} />
      </motion.div>
      
      <div className="container-max section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Avatar with Enhanced Design */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-40 h-40 mx-auto"
              >
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-primary-500/30 animate-spin" style={{ animationDuration: '8s' }} />
                <div className="absolute inset-2 rounded-full border-2 border-primary-400/20 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
                
                {/* Avatar Container */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-primary-500/40 shadow-2xl bg-dark-700">
                  {loading ? (
                    <div className="w-full h-full bg-gradient-to-br from-dark-600 to-dark-800 animate-pulse" />
                  ) : (
                    <img
                      src={user?.avatar_url || '/api/placeholder/128/128'}
                      alt="Alan Ezequiel Roth"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                
                {/* Status Indicator */}
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-dark-900 flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                </div>
                
                {/* Sparkle Effects */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-2 -right-2 text-primary-400"
                >
                  <Sparkles size={20} />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Main Content */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-primary-400 text-sm font-medium">Available for new projects</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-dark-100">Hi, I'm </span>
              <span className="bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600 bg-clip-text text-transparent">
                Alan Roth
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-xl md:text-3xl lg:text-4xl text-dark-300 mb-4 font-light">
              <span className="text-primary-500 font-semibold">Fullstack Developer</span> & 
              <span className="text-primary-500 font-semibold"> Embedded Systems Enthusiast</span>
            </div>
            <div className="text-lg md:text-xl text-dark-400 flex items-center justify-center gap-2">
              <span>From San Luis, Argentina</span>
              <span className="text-2xl">🇦🇷</span>
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg md:text-xl lg:text-2xl text-dark-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Passionate about technology, software development, and electronics. I enjoy transforming ideas into 
            <span className="text-primary-400 font-medium"> useful and creative solutions</span>, both in the web world and in microcontrollers.
          </motion.p>

          {/* Enhanced Stats */}
          {user && (
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 mb-12 max-w-lg mx-auto">
              {[
                { value: user.public_repos, label: 'Repositories', icon: Github },
                { value: user.followers, label: 'Followers', icon: Star },
                { value: user.following, label: 'Following', icon: Code },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 bg-dark-800/50 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="text-primary-500 mr-2" size={20} />
                    <div className="text-2xl md:text-3xl font-bold text-primary-500">{stat.value}</div>
                  </div>
                  <div className="text-sm text-dark-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Enhanced CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Github size={24} className="relative z-10" />
              <span className="relative z-10">View My Work</span>
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center gap-3 text-lg px-8 py-4 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-dark-700 to-dark-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Download size={24} className="relative z-10" />
              <span className="relative z-10">Download CV</span>
            </motion.a>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-dark-400 mb-4 font-medium">Scroll to explore my journey</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary-500 p-2 bg-dark-800/50 rounded-full border border-dark-700"
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
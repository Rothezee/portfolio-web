import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Star, GitFork, Calendar, Code, RefreshCw } from 'lucide-react'
import { useGitHubRepositories } from '@/hooks/useGitHub'
import { githubService } from '@/services/github'
import { formatDistanceToNow } from 'date-fns'
import LoadingSpinner from './LoadingSpinner'

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { repositories, loading, error, refetch } = useGitHubRepositories()
  const [filter, setFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'embedded', label: 'Embedded Systems' },
    { id: 'tools', label: 'Tools & Utilities' },
  ]

  const getProjectCategory = (repo: any) => {
    const name = repo.name.toLowerCase()
    const description = repo.description?.toLowerCase() || ''
    const topics = repo.topics || []
    
    if (topics.includes('web') || topics.includes('website') || topics.includes('react') || topics.includes('vue') || name.includes('web')) {
      return 'web'
    }
    if (topics.includes('mobile') || topics.includes('android') || topics.includes('ios') || name.includes('mobile') || name.includes('app')) {
      return 'mobile'
    }
    if (topics.includes('arduino') || topics.includes('esp32') || topics.includes('iot') || topics.includes('embedded') || name.includes('arduino') || name.includes('esp')) {
      return 'embedded'
    }
    if (topics.includes('tool') || topics.includes('utility') || topics.includes('cli') || name.includes('tool')) {
      return 'tools'
    }
    return 'web' // Default to web for general projects
  }

  const filteredRepositories = repositories.filter(repo => {
    if (filter === 'all') return true
    return getProjectCategory(repo) === filter
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  if (loading) {
    return (
      <section id="portfolio" className="section-padding bg-dark-800/50">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-100 mb-6">
              My <span className="text-primary-500">Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-16"></div>
            <LoadingSpinner />
            <p className="text-dark-300 mt-4">Loading repositories from GitHub...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="portfolio" className="section-padding bg-dark-800/50">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-100 mb-6">
              My <span className="text-primary-500">Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-16"></div>
            <div className="card max-w-md mx-auto">
              <p className="text-red-400 mb-4">Failed to load repositories</p>
              <button onClick={refetch} className="btn-primary inline-flex items-center gap-2">
                <RefreshCw size={16} />
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="portfolio" className="section-padding bg-dark-800/50">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-100 mb-6">
              My <span className="text-primary-500">Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-dark-300 max-w-3xl mx-auto">
              Here are some of my recent projects fetched directly from my GitHub repositories. 
              Each project represents a unique challenge and learning experience.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filterItem) => (
              <button
                key={filterItem.id}
                onClick={() => setFilter(filterItem.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  filter === filterItem.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600 hover:text-dark-100'
                }`}
              >
                {filterItem.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredRepositories.map((repo) => (
              <motion.div
                key={repo.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card group hover:border-primary-500/50 transition-all duration-300"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Code className="text-primary-500" size={20} />
                    <h3 className="text-xl font-semibold text-dark-100 group-hover:text-primary-500 transition-colors duration-200">
                      {repo.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    {repo.language && (
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: githubService.getLanguageColor(repo.language) }}
                      />
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-dark-300 mb-4 line-clamp-3">
                  {repo.description || 'No description available'}
                </p>

                {/* Topics */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs bg-primary-500/20 text-primary-400 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                    {repo.topics.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-dark-600 text-dark-400 rounded-full">
                        +{repo.topics.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-dark-400">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: githubService.getLanguageColor(repo.language) }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star size={14} />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={14} />
                    {repo.forks_count}
                  </span>
                </div>

                {/* Updated Date */}
                <div className="flex items-center gap-1 text-xs text-dark-500 mb-4">
                  <Calendar size={12} />
                  Updated {formatDistanceToNow(new Date(repo.updated_at), { addSuffix: true })}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-center inline-flex items-center justify-center gap-2 text-sm py-2"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center inline-flex items-center justify-center gap-2 text-sm py-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Projects Message */}
          {filteredRepositories.length === 0 && (
            <motion.div variants={itemVariants} className="text-center py-12">
              <p className="text-dark-400 text-lg">No projects found for the selected filter.</p>
            </motion.div>
          )}

          {/* GitHub Link */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <a
              href="https://github.com/rothezee"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
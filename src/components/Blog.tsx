import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Clock, ArrowRight, Tag, User, Eye } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCategory, setSelectedCategory] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: 'Building IoT Solutions with ESP32 and React',
      excerpt: 'Learn how to create a complete IoT dashboard that connects ESP32 sensors with a modern React frontend.',
      content: 'In this comprehensive guide, we\'ll explore how to build a full-stack IoT solution...',
      category: 'iot',
      tags: ['ESP32', 'React', 'IoT', 'WebSocket'],
      author: 'Alan Roth',
      publishedAt: new Date('2024-01-15'),
      readTime: 8,
      views: 1250,
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'Modern Web Development with TypeScript and Tailwind',
      excerpt: 'Discover best practices for building scalable web applications using TypeScript and Tailwind CSS.',
      content: 'TypeScript has revolutionized the way we write JavaScript applications...',
      category: 'web',
      tags: ['TypeScript', 'Tailwind CSS', 'React', 'Best Practices'],
      author: 'Alan Roth',
      publishedAt: new Date('2024-01-10'),
      readTime: 6,
      views: 890,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'Optimizing Database Performance in Node.js Applications',
      excerpt: 'Tips and techniques for improving database performance and reducing query times in your Node.js apps.',
      content: 'Database performance is crucial for any web application...',
      category: 'backend',
      tags: ['Node.js', 'Database', 'Performance', 'MongoDB'],
      author: 'Alan Roth',
      publishedAt: new Date('2024-01-05'),
      readTime: 10,
      views: 1450,
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Getting Started with Arduino: A Beginner\'s Guide',
      excerpt: 'Everything you need to know to start your journey with Arduino microcontrollers and embedded programming.',
      content: 'Arduino has made embedded programming accessible to everyone...',
      category: 'embedded',
      tags: ['Arduino', 'Embedded', 'C++', 'Sensors'],
      author: 'Alan Roth',
      publishedAt: new Date('2023-12-28'),
      readTime: 12,
      views: 2100,
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Posts', count: blogPosts.length },
    { id: 'web', label: 'Web Development', count: blogPosts.filter(post => post.category === 'web').length },
    { id: 'iot', label: 'IoT & Hardware', count: blogPosts.filter(post => post.category === 'iot').length },
    { id: 'backend', label: 'Backend', count: blogPosts.filter(post => post.category === 'backend').length },
    { id: 'embedded', label: 'Embedded Systems', count: blogPosts.filter(post => post.category === 'embedded').length },
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

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

  return (
    <section id="blog" className="section-padding">
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
              Tech <span className="text-primary-500">Blog</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-dark-300 max-w-3xl mx-auto">
              Sharing knowledge, experiences, and insights about web development, embedded systems, 
              and the latest technologies I'm working with.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-700 text-dark-300 hover:bg-dark-600 hover:text-dark-100'
                }`}
              >
                {category.label}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card group hover:border-primary-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Post Image */}
                <div className="relative mb-6 -mx-6 -mt-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="space-y-4">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-dark-400">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDistanceToNow(post.publishedAt, { addSuffix: true })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-dark-100 group-hover:text-primary-500 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-dark-300 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-primary-500/20 text-primary-400 rounded-full"
                      >
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-dark-600 text-dark-400 rounded-full">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-dark-700">
                    <div className="flex items-center gap-1 text-sm text-dark-400">
                      <Eye size={14} />
                      <span>{post.views.toLocaleString()} views</span>
                    </div>
                    
                    <button className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 font-medium transition-colors duration-200 group">
                      Read More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* No Posts Message */}
          {filteredPosts.length === 0 && (
            <motion.div variants={itemVariants} className="text-center py-12">
              <p className="text-dark-400 text-lg">No posts found for the selected category.</p>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="card max-w-2xl mx-auto bg-gradient-to-br from-primary-500/10 to-primary-600/5 border-primary-500/20">
              <h3 className="text-2xl font-bold text-dark-100 mb-4">Stay Updated</h3>
              <p className="text-dark-300 mb-6">
                Want to be notified when I publish new articles? Follow me on social media 
                or check back regularly for the latest insights and tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/rothezee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Follow on GitHub
                  <ArrowRight size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/alan-ezequiel-fornes-roth-64167329a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  Connect on LinkedIn
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
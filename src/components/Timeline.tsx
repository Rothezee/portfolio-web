import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Award, Briefcase, GraduationCap, Code } from 'lucide-react'

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const timelineEvents = [
    {
      year: '2024',
      title: 'Web Technician Studies',
      subtitle: 'Universidad Nacional de San Luis (UNSL)',
      description: 'Currently pursuing advanced web development and modern technologies.',
      type: 'education',
      icon: GraduationCap,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/20',
    },
    {
      year: '2023',
      title: 'IT Technician Graduate',
      subtitle: 'Technical School N°28',
      description: 'Completed comprehensive IT education with focus on programming and systems.',
      type: 'education',
      icon: Award,
      color: 'text-green-500',
      bgColor: 'bg-green-500/20',
    },
    {
      year: '2022',
      title: 'Freelance Developer',
      subtitle: 'Independent Projects',
      description: 'Started working on various web development and embedded systems projects.',
      type: 'work',
      icon: Briefcase,
      color: 'text-primary-500',
      bgColor: 'bg-primary-500/20',
    },
    {
      year: '2021',
      title: 'IoT & Embedded Systems',
      subtitle: 'Arduino & ESP32 Projects',
      description: 'Specialized in microcontroller programming and IoT solutions.',
      type: 'skill',
      icon: Code,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/20',
    },
    {
      year: '2020',
      title: 'Programming Journey Begins',
      subtitle: 'First Steps in Development',
      description: 'Started learning programming fundamentals and web technologies.',
      type: 'milestone',
      icon: Code,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/20',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="timeline" className="section-padding bg-dark-800/50">
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
              My <span className="text-primary-500">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-dark-300 max-w-3xl mx-auto">
              A timeline of my educational background, professional milestones, and key achievements 
              in the world of technology and development.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-600 transform md:-translate-x-0.5"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 transform md:-translate-x-2 z-10">
                    <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`ml-16 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="card group hover:border-primary-500/50 transition-all duration-300">
                      {/* Year Badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg ${event.bgColor}`}>
                          <event.icon className={event.color} size={20} />
                        </div>
                        <span className="text-2xl font-bold text-primary-500">{event.year}</span>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-dark-100 mb-2 group-hover:text-primary-500 transition-colors duration-200">
                        {event.title}
                      </h3>
                      <h4 className="text-primary-400 font-medium mb-3">{event.subtitle}</h4>
                      <p className="text-dark-300 leading-relaxed">{event.description}</p>

                      {/* Type Badge */}
                      <div className="mt-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full ${
                          event.type === 'education' ? 'bg-blue-500/20 text-blue-400' :
                          event.type === 'work' ? 'bg-green-500/20 text-green-400' :
                          event.type === 'skill' ? 'bg-purple-500/20 text-purple-400' :
                          'bg-orange-500/20 text-orange-400'
                        }`}>
                          <Calendar size={12} />
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Current Status */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="card max-w-2xl mx-auto bg-gradient-to-br from-primary-500/10 to-primary-600/5 border-primary-500/20">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold text-dark-100">Currently</h3>
              </div>
              <p className="text-lg text-dark-300 leading-relaxed">
                Actively studying Web Technologies at UNSL while working on exciting projects 
                that combine web development with embedded systems. Always open to new challenges 
                and collaboration opportunities!
              </p>
              <div className="flex items-center justify-center gap-2 mt-4 text-primary-400">
                <MapPin size={16} />
                <span className="text-sm font-medium">San Luis, Argentina</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
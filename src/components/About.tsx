import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Cpu, Globe, Award } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern and high-quality web applications built with the latest technologies and best practices.',
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions and applications tailored to meet specific business requirements.',
    },
    {
      icon: Cpu,
      title: 'Embedded Systems',
      description: 'Microcontroller programming and IoT solutions using ESP32, Arduino, and other embedded platforms.',
    },
    {
      icon: Award,
      title: 'Technical Consulting',
      description: 'Expert guidance on technology choices, architecture decisions, and project planning.',
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
    <section id="about" className="section-padding bg-dark-800/50">
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
              About <span className="text-primary-500">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-dark-100 mb-6">
                Passionate Developer & Problem Solver
              </h3>
              
              <p className="text-lg text-dark-300 leading-relaxed">
                I am Alan Ezequiel Roth, a developer with solid experience in programming since 2020. 
                I stand out for my curiosity, constant learning ability, and commitment to quality in every project.
              </p>
              
              <p className="text-lg text-dark-300 leading-relaxed">
                In these years I have managed and developed my own and professional projects, ranging from 
                web applications to embedded systems with microcontrollers. I love solving problems, 
                automating and optimizing processes, and I always look for new challenges to keep growing.
              </p>
              
              <p className="text-lg text-dark-300 leading-relaxed">
                In my free time I like to read, play, practice languages and explore new technologies or platforms.
              </p>

              {/* Education & Experience */}
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="card">
                  <h4 className="text-xl font-semibold text-dark-100 mb-2">Education</h4>
                  <div className="space-y-2">
                    <div>
                      <p className="text-primary-500 font-medium">Technical School N°28</p>
                      <p className="text-sm text-dark-400">IT Technician (2017-2023)</p>
                    </div>
                    <div>
                      <p className="text-primary-500 font-medium">UNSL</p>
                      <p className="text-sm text-dark-400">Web Technician (2024-Present)</p>
                    </div>
                  </div>
                </div>
                
                <div className="card">
                  <h4 className="text-xl font-semibold text-dark-100 mb-2">Languages</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-dark-300">Spanish</span>
                      <span className="text-primary-500">Native</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark-300">English</span>
                      <span className="text-primary-500">Intermediate</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Services Grid */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="card group hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={32} />
                  </div>
                  <h4 className="text-xl font-semibold text-dark-100 mb-3">{service.title}</h4>
                  <p className="text-dark-300 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
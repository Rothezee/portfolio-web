import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'React', level: 85 },
        { name: 'Vue.js', level: 75 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'PHP', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'C/C++', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 70 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'Linux', level: 85 },
        { name: 'Arduino/ESP32', level: 95 },
        { name: 'IoT Development', level: 90 },
        { name: 'Network Administration', level: 80 },
      ],
    },
    {
      title: 'Design & Others',
      skills: [
        { name: 'UI/UX Design', level: 75 },
        { name: 'Video Editing', level: 70 },
        { name: 'Office Suite', level: 100 },
        { name: 'Technical Writing', level: 85 },
        { name: 'Project Management', level: 80 },
        { name: 'Problem Solving', level: 95 },
      ],
    },
  ]

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 0.5,
      },
    }),
  }

  return (
    <section id="skills" className="section-padding">
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
              My <span className="text-primary-500">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-dark-300 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life. 
              I'm always learning and expanding my skill set to stay current with industry trends.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card"
              >
                <h3 className="text-2xl font-bold text-dark-100 mb-8 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="skill-item"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-dark-200 font-medium">{skill.name}</span>
                        <span className="text-primary-500 font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          variants={progressVariants}
                          custom={skill.level}
                          initial="hidden"
                          animate={inView ? 'visible' : 'hidden'}
                          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="card max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-dark-100 mb-6">Continuous Learning</h3>
              <p className="text-lg text-dark-300 leading-relaxed">
                Technology evolves rapidly, and I believe in continuous learning. I regularly take courses, 
                attend workshops, and work on personal projects to stay updated with the latest trends and 
                best practices in software development and embedded systems.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">5+</div>
                  <div className="text-dark-400">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">20+</div>
                  <div className="text-dark-400">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-2">50+</div>
                  <div className="text-dark-400">Projects Completed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
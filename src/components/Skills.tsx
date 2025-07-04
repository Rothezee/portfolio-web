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
        { 
          name: 'HTML5', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          color: '#E34F26'
        },
        { 
          name: 'CSS3', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          color: '#1572B6'
        },
        { 
          name: 'JavaScript', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          color: '#F7DF1E'
        },
        { 
          name: 'TypeScript', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          color: '#3178C6'
        },
        { 
          name: 'React', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          color: '#61DAFB'
        },
        { 
          name: 'Vue.js', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
          color: '#4FC08D'
        },
        { 
          name: 'Tailwind CSS', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
          color: '#06B6D4'
        },
        { 
          name: 'Sass', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
          color: '#CC6699'
        },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { 
          name: 'Node.js', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          color: '#339933'
        },
        { 
          name: 'PHP', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
          color: '#777BB4'
        },
        { 
          name: 'Python', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          color: '#3776AB'
        },
        { 
          name: 'C++', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
          color: '#00599C'
        },
        { 
          name: 'MySQL', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          color: '#4479A1'
        },
        { 
          name: 'MongoDB', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          color: '#47A248'
        },
        { 
          name: 'Express', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
          color: '#000000'
        },
        { 
          name: 'FastAPI', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
          color: '#009688'
        },
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { 
          name: 'Git', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          color: '#F05032'
        },
        { 
          name: 'Docker', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          color: '#2496ED'
        },
        { 
          name: 'Linux', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
          color: '#FCC624'
        },
        { 
          name: 'VS Code', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
          color: '#007ACC'
        },
        { 
          name: 'Figma', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
          color: '#F24E1E'
        },
        { 
          name: 'Postman', 
          icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
          color: '#FF6C37'
        },
        { 
          name: 'Nginx', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
          color: '#009639'
        },
        { 
          name: 'Firebase', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
          color: '#FFCA28'
        },
      ],
    },
    {
      title: 'Embedded & IoT',
      skills: [
        { 
          name: 'Arduino', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg',
          color: '#00979D'
        },
        { 
          name: 'Raspberry Pi', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg',
          color: '#A22846'
        },
        { 
          name: 'C', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
          color: '#A8B9CC'
        },
        { 
          name: 'ESP32', 
          icon: 'https://www.vectorlogo.zone/logos/espressif/espressif-icon.svg',
          color: '#E7352C'
        },
        { 
          name: 'MQTT', 
          icon: 'https://mqtt.org/assets/img/mqtt-logo-transp.svg',
          color: '#660066'
        },
        { 
          name: 'PlatformIO', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/platformio/platformio-original.svg',
          color: '#FF7F00'
        },
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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
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
              Technologies and tools I use to bring ideas to life. 
              I'm always learning and expanding my skill set to stay current with industry trends.
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="text-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-dark-100 mb-8">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      className="group flex flex-col items-center p-4 bg-dark-800 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300 cursor-pointer"
                      style={{
                        '--skill-color': skill.color,
                      } as React.CSSProperties}
                    >
                      <div className="relative mb-3">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                            style={{
                              filter: 'brightness(0.8)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.filter = 'none'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.filter = 'brightness(0.8)'
                            }}
                          />
                        </div>
                        
                        {/* Glow effect on hover */}
                        <div 
                          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"
                          style={{
                            backgroundColor: skill.color,
                          }}
                        />
                      </div>
                      
                      <span className="text-sm font-medium text-dark-300 group-hover:text-dark-100 transition-colors duration-300 text-center">
                        {skill.name}
                      </span>
                      
                      {/* Animated border on hover */}
                      <div 
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(45deg, ${skill.color}20, transparent)`,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="card max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-dark-100 mb-6">
                Continuous Learning Journey
              </h3>
              <p className="text-lg text-dark-300 leading-relaxed mb-8">
                Technology evolves rapidly, and I believe in continuous learning. I regularly explore new frameworks, 
                attend workshops, and work on personal projects to stay updated with the latest trends and 
                best practices in software development and embedded systems.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-8">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-bold text-primary-500 mb-2">5+</div>
                  <div className="text-dark-400 font-medium">Years of Experience</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-bold text-primary-500 mb-2">30+</div>
                  <div className="text-dark-400 font-medium">Technologies</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-bold text-primary-500 mb-2">50+</div>
                  <div className="text-dark-400 font-medium">Projects Completed</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Learning Path */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary-500/10 border border-primary-500/20 rounded-full">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="text-primary-400 font-medium">
                Currently exploring: AI/ML, Web3, and Advanced IoT Solutions
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
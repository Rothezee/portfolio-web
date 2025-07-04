import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, User, Briefcase } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      id: 1,
      name: 'María González',
      role: 'Project Manager',
      company: 'Tech Solutions Inc.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Alan delivered an exceptional IoT solution for our warehouse management system. His expertise in both web development and embedded systems made him the perfect choice for our project.',
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      role: 'CTO',
      company: 'StartupTech',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Working with Alan was a great experience. He not only delivered high-quality code but also provided valuable insights that improved our overall architecture. Highly recommended!',
    },
    {
      id: 3,
      name: 'Ana Rodríguez',
      role: 'Product Owner',
      company: 'Digital Innovations',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Alan\'s attention to detail and problem-solving skills are outstanding. He transformed our complex requirements into an elegant and efficient solution.',
    },
    {
      id: 4,
      name: 'Roberto Silva',
      role: 'Engineering Lead',
      company: 'IoT Dynamics',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Alan\'s expertise in embedded systems and web technologies is impressive. He delivered our smart home automation project ahead of schedule with excellent documentation.',
    },
    {
      id: 5,
      name: 'Laura Fernández',
      role: 'Startup Founder',
      company: 'EcoTech Solutions',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'As a non-technical founder, I appreciated Alan\'s ability to explain complex concepts clearly. He built our MVP exactly as envisioned and provided ongoing support.',
    },
    {
      id: 6,
      name: 'Diego Morales',
      role: 'Senior Developer',
      company: 'WebCraft Agency',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Alan is a talented developer with a great eye for modern design. His React applications are not only functional but also beautiful and user-friendly.',
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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
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
    <section id="testimonials" className="section-padding bg-dark-800/50">
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
              Client <span className="text-primary-500">Testimonials</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-dark-300 max-w-3xl mx-auto">
              What clients and collaborators say about working with me. 
              These testimonials reflect my commitment to quality and client satisfaction.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card group hover:border-primary-500/50 transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary-500/20 group-hover:text-primary-500/40 transition-colors duration-300">
                  <Quote size={32} />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-500 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-dark-300 leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary-500/20 group-hover:border-primary-500/50 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div>
                    <h4 className="text-dark-100 font-semibold">{testimonial.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-dark-400">
                      <Briefcase size={12} />
                      <span>{testimonial.role}</span>
                    </div>
                    <p className="text-sm text-primary-400">{testimonial.company}</p>
                  </div>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="card max-w-4xl mx-auto bg-gradient-to-br from-primary-500/10 to-primary-600/5 border-primary-500/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-dark-100 mb-4">Client Satisfaction</h3>
                <p className="text-dark-300">
                  Building lasting relationships through quality work and reliable communication.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-3 gap-8">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-bold text-primary-500 mb-2">100%</div>
                  <div className="text-dark-400 font-medium">Client Satisfaction</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-bold text-primary-500 mb-2">15+</div>
                  <div className="text-dark-400 font-medium">Happy Clients</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-bold text-primary-500 mb-2">50+</div>
                  <div className="text-dark-400 font-medium">Projects Delivered</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary-500/10 border border-primary-500/20 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-primary-400 font-medium">
                Ready to start your project? Let's work together!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
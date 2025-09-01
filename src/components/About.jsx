// Import necessary dependencies
import { motion } from 'framer-motion'              // For animations
import { useInView } from 'react-intersection-observer'  // For scroll-based animations
import { FaLaptopCode, FaGraduationCap, FaCoffee } from 'react-icons/fa'  // Section icons

/**
 * About Component
 * Displays professional information, experience, and achievements
 * Features:
 * - Animated sections on scroll
 * - Professional journey cards
 * - Experience statistics
 * - Call-to-action section
 */
const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Updated stats with icons and descriptions
  const stats = [
    { 
      label: 'Years Experience', 
      value: '3+',
      icon: <FaLaptopCode className="text-2xl" />,
      description: 'Years of coding and creating'
    },
    { 
      label: 'Projects Completed', 
      value: '20+',
      icon: <FaGraduationCap className="text-2xl" />,
      description: 'Successful project deliveries'
    },
    { 
      label: 'Satisfied Clients', 
      value: '15+',
      icon: <FaCoffee className="text-2xl" />,
      description: 'Happy clients and counting'
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10" /> */}
      
      <div className="container relative mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {/* Section heading with animated underline */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-white inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-blue-500 mx-auto mt-4 rounded-full"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              {/* Journey Cards with Hover Effects */}
              <motion.div 
                className="group relative bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300" />
                <div className="relative">
                  <FaLaptopCode className="text-3xl text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">Professional Journey</h3>
                  <p className="text-gray-300">
                    As a Developer, I blend creativity with technical expertise to build 
                    innovative solutions. My journey in tech started with a passion for creating 
                    something that has potential to make a difference.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="group relative bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300" />
                <div className="relative">
                  <FaGraduationCap className="text-3xl text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">Education & Learning</h3>
                  <div className="space-y-3">
                    <div className="text-gray-300">
                      <span className="text-purple-400 font-semibold">Current Education:</span> Grade 12
                    </div>
                    <div className="text-gray-300">
                      <span className="text-purple-400 font-semibold">School:</span> SOS Hermann Gmeiner School Gandaki
                    </div>
                    <p className="text-gray-300 mt-4">
                      Continuous learning and staying updated with the latest technologies. 
                      Learning is a lifelong journey, and I embrace every opportunity to grow.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* <motion.div 
                className="group relative bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300" />
                <div className="relative">
                  <FaCoffee className="text-3xl text-pink-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">Work Philosophy</h3>
                  <p className="text-gray-300">
                    I believe in writing clean, maintainable code and creating intuitive user 
                    experiences. My approach combines technical excellence with creative problem-solving.
                  </p>
                </div>
              </motion.div> */}
            </div>

            <div className="space-y-8">
              {/* Stats with Interactive Cards */}
              {/* <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-bold mb-8 text-white text-center">Experience & Impact</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative group"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur" />
                      <div className="relative bg-gray-900 p-6 rounded-xl">
                        <div className="flex items-center justify-center text-blue-400 mb-4">
                          {stat.icon}
                        </div>
                        <div className="text-3xl font-bold text-white mb-2 text-center">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-400 text-center">
                          {stat.label}
                        </div>
                        <div className="text-xs text-gray-500 text-center mt-2">
                          {stat.description}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div> */}

              {/* Call to Action with Animated Background */}
              <motion.div 
                className="relative group overflow-hidden rounded-4xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute -inset-1">
                  <div className="w-full h-full opacity-50 filter blur-xl animate-pulse " 
                       style={{
                         background: "linear-gradient(90deg, #60A5FA -10%, #7C3AED 30%, #DB2777 70%, #60A5FA 110%)",
                         backgroundSize: "200% 100%",
                         animation: "gradientMove 8s linear infinite"
                       }} />
                </div>
                <div className="relative bg-gray-900/90 p-8 rounded-4xl">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Want to work together?</h3>
                  <p className="text-gray-300 mb-6">
                    I'm always excited to connect with fellow developers and clients. 
                    Let's create something amazing together!
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-lg shadow-blue-500/25"
                    onClick={() => {
                      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Let's Talk
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

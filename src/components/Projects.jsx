import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { h1 } from 'framer-motion/client'

const projects = [
  {
    title: 'Class 10 Science Guide App',
    description: 'A mobile application that provides a guide for Class 10 Science students',
    image: '/', // Add your project images to the public folder
    tags: ['Flutter', 'Dart'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Class 12 English Guide App',
    description: 'A mobile application that provides a guide for Class 12 English students',
    image: '',
    tags: ['Flutter', 'Dart'],
    liveLink: '#',
    githubLink: '#',
  },
  // Add more projects as needed
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 ">
       {/* bg-gradient-to-b from-gray-500/22 to-purple-700/20 */}
      <div className="container mx-auto px-4">
        {/* Section heading with animated underline */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-white inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
          <motion.div
            className="h-1 w-24 bg-blue-500 mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-9xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-gray-900/90 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              {/* Project image with zoom effect */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 relative z-20">
                {/* Project title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Project description */}
                <p className="text-gray-600 dark:text-gray-300 mb-5">
                  {project.description}
                </p>
                
                {/* Tech stack tags with enhanced styling */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gradient-to-r from-black-500 to-blue-600 text-white text-xs font-medium px-5 py-2 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action buttons with icons */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-700 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 shadow-md"
                  >
                    <FaExternalLinkAlt size={14} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors duration-300 shadow-md dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    <FaGithub size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

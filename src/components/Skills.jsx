// Import necessary dependencies
import { motion } from 'framer-motion'              // For animations
import { useInView } from 'react-intersection-observer'  // For scroll-based animations
import { 
  // Font Awesome icons for various technologies
  FaHtml5,       // HTML5
  FaCss3Alt,     // CSS3
  FaJs,          // JavaScript
  FaReact,       // React
  FaNode,        // Node.js
  FaPython,      // Python
  FaGitAlt,      // Git
  FaDatabase,    // Database
  FaDocker,      // Docker
  FaAws,         // AWS
  FaMobile,      // Mobile Development
  FaServer,      // Web Server
  FaCode,        // Code
  FaLayerGroup,  // Stack
  FaBrain,        // Skills
  FaFlask
} from 'react-icons/fa'
// Additional technology icons
import { SiKubernetes, SiFlutter, SiFirebase, SiTailwindcss, SiExpress, SiDjango, SiMongodb, SiMysql, SiPostgresql, SiRedis, SiSupabase } from 'react-icons/si'
import { FaArrowsSplitUpAndLeft, FaCakeCandles, FaJarWheat } from 'react-icons/fa6'

/**
 * Skill categories configuration
 * Each category contains a title, description, icon, and either skills or subcategories
 * Added proficiency levels for each skill
 */
const skillCategories = [
  {
    title: 'Web Development',
    description: 'Building responsive and dynamic web applications with modern technologies',
    icon: FaServer,
    subCategories: [
      {
        title: 'Frontend',
        skills: [
          { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', proficiency: 'Advanced' },      // Core markup language
          { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', proficiency: 'Advanced' },       // Styling
          { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', proficiency: 'Advanced' },     // Programming language
          { name: 'React', icon: FaReact, color: 'text-blue-400', proficiency: 'Intermediate' },        // UI library
          { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400', proficiency: 'Intermediate' }   // CSS framework
        ]
      },
      {
        title: 'Backend',
        skills: [
          // { name: 'Node.js', icon: FaNode, color: 'text-green-500', proficiency: 'Intermediate' },      // JavaScript runtime
          { name: 'Python (flask)', icon: FaPython, color: 'text-blue-600', proficiency: 'Intermediate' },      // Backend language
          { name: 'Express', icon: SiExpress, color: 'text-gray-500', proficiency: 'Intermediate' },       // Node.js framework
        ]
      },
      {
        title: 'Database',
        skills: [
          { name: 'MySQL', icon: SiMysql, color: 'text-blue-500', proficiency: 'Intermediate' },      // Relational database
          { name: 'Supabase', icon: SiSupabase, color: 'text-green-400', proficiency: 'Intermediate' }, // Advanced SQL database
        ]
      }
    ]
  },
  {
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile applications with cutting-edge frameworks',
    icon: FaMobile,
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: 'text-blue-400', proficiency: 'Basics' },
    ]
  },
  {
    title: 'DevOps',
    description: 'Implementing CI/CD pipelines and managing cloud infrastructure',
    icon: FaDocker,
    skills: [
      { name: 'Git', icon: FaGitAlt, color: 'text-red-500', proficiency: 'Intermediate' },
    ]
  }
]

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    // Main skills section with light/dark mode support and gradient background
    <section id="skills" className="py-24 ">  
    {/* bg-gradient-to-b from-purple-800/25 to-gray-500/20 */}
      <div className="container mx-auto px-4">
        {/* Section heading with animated underline */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center mb-4"
          >
            <FaBrain className="text-4xl text-blue-500 mr-3" />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white">
              Skills & Expertise
            </h2>
          </motion.div>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p 
            className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A showcase of my technical skills and proficiency levels across various technologies
          </motion.p>
        </div>
        
        {/* Three-column grid for skill categories */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Map through each skill category */}
          {skillCategories.map((category, categoryIndex) => (
            // Animated card for each category with gradient background
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-700/20 to-blue-400/20 rounded-xl shadow-xl overflow-hidden border-gray-700"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`${category.title === 'Mobile Development' || category.title === 'DevOps' ? 'p-8 pb-4' : 'p-8'} relative`}>
                {/* Category header with icon and gradient background */}
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full border-2 border-blue-500 text-cyan-600/100 mr-4">
                    <category.icon className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                {/* Category description */}
                <p className={`text-gray-600 dark:text-gray-300 ${category.title === 'Mobile Development' || category.title === 'DevOps' ? 'mb-4' : 'mb-8'} pl-16`}>
                  {category.description}
                </p>
                
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                  <category.icon className="text-8xl text-current" />
                </div>
                {category.subCategories ? (
                  // Render subcategories for Web Development
                  <div className="space-y-6">
                    {category.subCategories.map((subCategory, subIndex) => (
                      <div key={subCategory.title}>
                        {/* Subcategory header with badge */}
                        <div className="mb-5">
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium mb-3">
                            {subCategory.title === 'Frontend' && <FaCode className="mr-1" />}
                            {subCategory.title === 'Backend' && <FaServer className="mr-1" />}
                            {subCategory.title === 'Database' && <FaDatabase className="mr-1" />}
                            <span>{subCategory.title}</span>
                          </div>
                          <div className="h-px w-full bg-gradient-to-r from-blue-500 to-transparent"></div>
                        </div>
                        <div className={`grid grid-cols-2 sm:grid-cols-3 ${category.title === 'Mobile Development' || category.title === 'DevOps' ? 'gap-3' : 'gap-5'}`}>
                          {subCategory.skills.map((skill, index) => (
                            <motion.div
                              key={skill.name}
                              whileHover={{ scale: 1.05, y: -5 }}
                              className={`flex flex-col items-center bg-white dark:bg-gray-700 ${category.title === 'Mobile Development' || category.title === 'DevOps' ? 'p-3' : 'p-4'} rounded-lg shadow-md relative group`}
                            >
                              {/* Skill icon with glow effect on hover */}
                              <div className="relative">
                                <skill.icon className={`text-3xl ${skill.color} mb-3 transition-all duration-300 group-hover:scale-110 group-hover:filter group-hover:drop-shadow-lg`} />
                                <div className={`absolute inset-0 rounded-full ${skill.color.replace('text', 'bg')} opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-300`}></div>
                              </div>
                              
                              {/* Skill name */}
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-200 text-center">
                                {skill.name}
                              </span>
                              
                              {/* Proficiency tooltip that appears on hover */}
                              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                {skill.proficiency}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Render normal skills for other categories
                  <div>
                    {/* Category header with badge for non-subcategory sections */}
                    <div className="mb-5">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium mb-3">
                        <FaLayerGroup className="mr-1" />
                        <span>Technologies</span>
                      </div>
                      <div className="h-px w-full bg-gradient-to-r from-blue-500 to-transparent"></div>
                    </div>
                    
                    <div className={`grid grid-cols-2 sm:grid-cols-3 ${category.title === 'Mobile Development' || category.title === 'DevOps' ? 'gap-3' : 'gap-5'}`}>
                      {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className={`flex flex-col items-center bg-white dark:bg-gray-700 ${category.title === 'Mobile Development' || category.title === 'DevOps' ? 'p-3' : 'p-4'} rounded-lg shadow-md relative group`}
                      >
                        {/* Skill icon with glow effect on hover */}
                        <div className="relative">
                          <skill.icon className={`text-3xl ${skill.color} mb-3 transition-all duration-300 group-hover:scale-110 group-hover:filter group-hover:drop-shadow-lg`} />
                          <div className={`absolute inset-0 rounded-full ${skill.color.replace('text', 'bg')} opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-300`}></div>
                        </div>
                        
                        {/* Skill name */}
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200 text-center">
                          {skill.name}
                        </span>
                        
                        {/* Proficiency tooltip that appears on hover */}
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                          {skill.proficiency}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                )}
              </div>
              {/* Gradient border at bottom */}
              {/* <div className="bg-gradient-to-r from-blue-500 to-transparent h-2" /> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

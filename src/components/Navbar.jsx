// Import necessary dependencies
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'          // For smooth scrolling navigation
import { motion, AnimatePresence } from 'framer-motion'  // For animations
import { HiMenu, HiX } from 'react-icons/hi' // Menu icons
import { FaHome, FaUser, FaLaptopCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa' // Navigation icons

/**
 * Navbar Component
 * A responsive navigation bar with smooth scroll functionality and animations
 * Features:
 * - Transparent to solid background transition on scroll
 * - Mobile responsive with animated hamburger menu
 * - Smooth scroll navigation
 * - Hover animations and effects
 */
const Navbar = () => {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false)
  // State to track scroll position for navbar background
  const [scrolled, setScrolled] = useState(false)

  // Effect to handle navbar background change on scroll
  useEffect(() => {
    // Function to update scroll state
    const handleScroll = () => {
      const offset = window.scrollY
      // Add background when scrolled more than 50px
      setScrolled(offset > 50)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation menu items configuration
  const menuItems = [
    { name: 'Home', to: 'hero', icon: FaHome },           // Home section
    { name: 'About', to: 'about', icon: FaUser },         // About section
    { name: 'Skills', to: 'skills', icon: FaLaptopCode }, // Skills section
    { name: 'Projects', to: 'projects', icon: FaProjectDiagram }, // Projects section
    { name: 'Contact', to: 'contact', icon: FaEnvelope },  // Contact section
  ]

  // Animation variants for navbar entrance
  const navbarVariants = {
    hidden: { y: -100 },  // Start position: hidden above viewport
    visible: { y: 0 },    // End position: normal position
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 backdrop-blur-sm bg-[#0f172a]/50 shadow-lg'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="#hero" className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 text-transparent bg-clip-text cursor-pointer py-3">
              Riwaj
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                hashSpy={true}
                className="group relative px-4 py-2 rounded-lg text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <span className="flex items-center space-x-2">
                  <item.icon className={`text-lg transition-colors group-[.active]:text-blue-400`} />
                  <span className="group-[.active]:text-blue-400">{item.name}</span>
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-[.active]:opacity-100"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-[#0f172a]/70 text-gray-300 hover:text-blue-400 transition-colors"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="bg-[#0f172a]/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-4 px-4 py-3 rounded-lg text-gray-300 hover:bg-[#1e293b] hover:text-blue-400 transition-all"
                    >
                      <item.icon className="text-lg" />
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar

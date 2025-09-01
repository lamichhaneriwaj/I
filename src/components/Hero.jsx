// Import necessary dependencies
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import meImage from '../assets/me.png'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

// Hero Component: Main landing section of the portfolio with animations and responsive design

/**
 * Hero Component
 * The main landing section of the portfolio
 * Features:
 * - Animated text and image entrance
 * - Gradient blob background effects
 * - Social media links
 * - Call-to-action button
 * - Responsive layout
 */
const Hero = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [
        'Web Developer 💻',
        'App Developer 💻',
        'Web Designer 🎨',
        'Problem Solver 🚀',
        'UI/UX Enthusiast 🎯'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      cursorChar: '|',
      fadeOut: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Two-column grid layout for content and image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content with slide-in animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}    // Start invisible and offset left
            animate={{ opacity: 1, x: 0 }}      // Animate to visible and original position
            transition={{ duration: 0.8 }}       // Animation duration
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-white">
              What's Up 👋
            </h2>
            <h2 className="text-4xl sm:text-6xl font-bold mb-4 text-white">
              I'm <span className='text-blue-500'>Riwaj Lamichhane</span>
            </h2>
            <div className="text-xl sm:text-2xl mb-6 text-gray-300 h-[60px] sm:h-[40px]">
              <span ref={typeTarget} className='text-yellow-500'></span>
            </div>
            <p className="text-gray-400 mb-8">
              I create digital experiences that combine innovative design with powerful functionality.
            </p>
            <div className="flex space-x-4 mb-8">
              <motion.a
                href="https://github.com/lamichhaneriwaj"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/riwaj-lamichhane-2aa879352/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/riwaz.lamichhane.444"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook size={24} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/riwaj.216/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={24} />
              </motion.a>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 1 }}
            >
              <Link
                to="contact"
                smooth={true}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer inline-block"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute top-0 left-0 w-72 h-72 bg-purple-900 rounded-full mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-900 rounded-full mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-900 rounded-full mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <img
                src={meImage}
                alt="Riwaj Lamichhane"
                className=" rounded-2xl  shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import './Contact.css'
import { FaInstagram } from 'react-icons/fa6'


const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
  
  // No need for stars background as we're using the global smoke animation
  
  // Form handling functions
  const handleChange = (e) => {
    const { id, value } = e.target
    setFormState(prev => ({
      ...prev,
      [id]: value
    }))
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }))
    }
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        setSubmitStatus('success')
        // Reset form after successful submission
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      }, 1000)
    } else {
      setSubmitStatus('error')
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden min-h-screen flex items-center">
      {/* bg-gradient-to-b from-purple-700/25 to-blue-800/20 */}
      {/* Using global smoke background instead of stars */}
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading with animated underline */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl font-bold text-white inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h2>
          <motion.div
            className="h-1 w-24 bg-blue-500 mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out through any of the channels below.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Info Panel */}
            <motion.div 
              className="lg:col-span-5 relative z-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="backdrop-blur-lg bg-white/5 rounded-2xl shadow-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
                <div className="space-y-6 mb-10">
                  <div className="contact-info-card">
                    <div className="contact-icon">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Email</h4>
                      <a
                        href="mailto:lamichhane.riwaj000@gmail.com"
                        className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                      >
                        lamichhane.riwaj000@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-info-card">
                    <div className="contact-icon">
                      <FaPhone />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Phone</h4>
                      <p className="text-gray-300">
                        +977 9769210739
                      </p>
                    </div>
                  </div>
                  
                  <div className="contact-info-card">
                    <div className="contact-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Location</h4>
                      <p className="text-gray-300">
                        Pokhara, Nepal
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/lamichhaneriwaj" 
                      target="_blank" 
                      // rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/riwaj-lamichhane-2aa879352/" 
                      target="_blank" 
                      // rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaLinkedin />
                    </a>
                    <a 
                      href="https://www.facebook.com/riwaz.lamichhane.444" 
                      target="_blank" 
                      // rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaFacebook />
                    </a>
                    <a 
                      href="https://www.instagram.com/riwaj.216/" 
                      target="_blank" 
                      // rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-7 relative z-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="backdrop-blur-lg bg-white/5 rounded-2xl shadow-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Send Me a Message
                </h3>
                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                  {/* Toast notifications */}
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-green-900/50 border border-green-500/50 text-green-300 p-4 mb-6 rounded-md backdrop-blur-sm"
                        role="alert"
                      >
                        <div className="flex items-center">
                          <span className="text-xl mr-2">✅</span>
                          <p>Message sent successfully!</p>
                        </div>
                      </motion.div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-red-900/50 border border-red-500/50 text-red-300 p-4 mb-6 rounded-md backdrop-blur-sm"
                        role="alert"
                      >
                        <div className="flex items-center">
                          <span className="text-xl mr-2">❌</span>
                          <p>Failed to send message. Please try again.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2" htmlFor="name">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Riwaj Lamichhane"
                        value={formState.name}
                        onChange={handleChange}
                        className="contact-input w-full pointer-events-auto"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2" htmlFor="email">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="lamichhane.riwaj000@gmail.com"
                        value={formState.email}
                        onChange={handleChange}
                        className="contact-input w-full pointer-events-auto"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formState.subject}
                      onChange={handleChange}
                      className="contact-input w-full pointer-events-auto"
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2" htmlFor="message">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Type your message here..."
                      value={formState.message}
                      onChange={handleChange}
                      className="contact-input w-full pointer-events-auto"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="send-button pointer-events-auto"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Send Message</span>
                    <FaEnvelope />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

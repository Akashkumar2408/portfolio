import React, { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import './Navigation.css'

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            <span className="logo-text">YOUNG <span className="logo-tech">tech</span></span>
          </div>
          
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#team-members" onClick={() => scrollToSection('team-members')}>Team</a></li>
            <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
            <li><a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
            <li><a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
            <li><a href="#process" onClick={() => scrollToSection('process')}>Process</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation


import React from 'react'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">YOUNG <span style={{color: 'var(--color-secondary)'}}>tech</span></h3>
            <p className="footer-description">
              Transforming ideas into digital excellence. We deliver cutting-edge 
              solutions that drive business growth and success.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" aria-label="Dribbble">
                <FaDribbble />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#team-members" onClick={() => scrollToSection('team-members')}>About Us</a></li>
              <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
              <li><a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
              <li><a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
              <li><a href="#process" onClick={() => scrollToSection('process')}>Our Process</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile App Development</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">Branding & Identity</a></li>
              <li><a href="#services">Digital Marketing</a></li>
              <li><a href="#services">Maintenance & Support</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <HiMail className="footer-contact-icon" />
                <a href="mailto:youngtechwork@gmail.com">youngtechwork@gmail.com</a>
              </div>
              <div className="footer-contact-item">
                <HiPhone className="footer-contact-icon" />
                <a href="tel:+919429500518">9429500518</a>
              </div>
              <div className="footer-contact-item">
                <HiLocationMarker className="footer-contact-icon" />
                <span>Remote Team Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} YOUNG tech. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <span>|</span>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


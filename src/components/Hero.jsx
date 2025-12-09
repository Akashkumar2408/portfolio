import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              We Transform Ideas into
              <span className="gradient-text"> Digital Excellence</span>
            </h1>
            <p className="hero-subtitle">
              A professional freelancer team delivering cutting-edge web development, 
              design, and digital solutions for forward-thinking companies.
            </p>
            <div className="hero-cta">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Start Your Project
                <HiArrowRight className="btn-icon" />
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('portfolio')}
              >
                View Our Work
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-placeholder">
              <div className="floating-card card-1">
                <div className="card-content"></div>
              </div>
              <div className="floating-card card-2">
                <div className="card-content"></div>
              </div>
              <div className="floating-card card-3">
                <div className="card-content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


import React from 'react'
import { HiUsers, HiBriefcase, HiStar, HiGlobe } from 'react-icons/hi'
import './TeamOverview.css'

const TeamOverview = () => {
  const stats = [
    {
      icon: <HiBriefcase />,
      number: '2',
      label: 'Projects Delivered',
      color: 'var(--color-primary)'
    },
    {
      icon: <HiUsers />,
      number: '2',
      label: 'Happy Clients',
      color: 'var(--color-secondary)'
    },
    {
      icon: <HiStar />,
      number: '2+',
      label: 'Years Experience',
      color: 'var(--color-accent)'
    },
    
  ]

  return (
    <section id="team" className="team-overview section">
      <div className="container">
        <h2 className="section-title">Who We Are</h2>
        <p className="section-subtitle">
          A dedicated team of skilled professionals committed to delivering 
          exceptional digital solutions that drive business growth.
        </p>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mission-section">
          <div className="mission-content">
            <h3 className="mission-title">Our Mission</h3>
            <p className="mission-text">
              We empower businesses to thrive in the digital landscape by providing 
              innovative, scalable, and user-centric solutions. Our mission is to bridge 
              the gap between vision and reality, transforming complex challenges into 
              elegant digital experiences that drive measurable results.
            </p>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <h4>Excellence</h4>
              <p>We strive for perfection in every project</p>
            </div>
            <div className="value-item">
              <h4>Innovation</h4>
              <p>Cutting-edge solutions for modern challenges</p>
            </div>
            <div className="value-item">
              <h4>Collaboration</h4>
              <p>Partnership approach with every client</p>
            </div>
            <div className="value-item">
              <h4>Transparency</h4>
              <p>Clear communication throughout the process</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamOverview


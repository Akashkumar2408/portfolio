import React, { useState } from 'react'
import { HiCode } from 'react-icons/hi'
import './CaseStudies.css'

const CaseStudies = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const caseStudies = [
    {
      id: 1,
      title: 'EasyBilling',
      client: 'Billing & Inventory Management',
      industry: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
      description: 'Android Kotlin billing and inventory management app. Streamlined business operations with efficient billing and inventory tracking.',
      results: ['Efficient Billing System', 'Inventory Management', 'User-Friendly Interface'],
      technologies: ['Android', 'Kotlin', 'MVVM', 'Room Database'],
      category: 'mobile',
      developer: "Akashkumar's work"
    },
    {
      id: 2,
      title: 'RD Gardi College Website',
      client: 'Educational Institution',
      industry: 'Web Development',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
      description: 'JavaScript and CSS website redesign with updated navigation and pages. Modern, responsive design improving user experience and accessibility.',
      results: ['Modern Design', 'Improved Navigation', 'Responsive Layout'],
      technologies: ['JavaScript', 'CSS', 'HTML', 'Responsive Design'],
      category: 'web',
      developer: "Rohit's work"
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' }
  ]

  const filteredStudies = selectedFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedFilter)

  return (
    <section id="portfolio" className="case-studies section">
      <div className="container">
        <h2 className="section-title">Our Work</h2>
        <p className="section-subtitle">
          Showcasing successful projects that drive real business results
        </p>

        <div className="filter-buttons">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="case-studies-grid">
          {filteredStudies.map(study => (
            <div key={study.id} className="case-study-card">
              <div className="case-study-image">
                <img src={study.image} alt={study.title} />
                <div className="case-study-overlay">
                  <span className="industry-badge">{study.industry}</span>
                </div>
              </div>
              <div className="case-study-content">
                <h3 className="case-study-title">{study.title}</h3>
                <p className="case-study-client">{study.client}</p>
                {study.developer && <p className="case-study-developer" style={{fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 500, marginBottom: '0.5rem'}}>{study.developer}</p>}
                <p className="case-study-description">{study.description}</p>
                
                <div className="case-study-results">
                  {study.results.map((result, idx) => (
                    <span key={idx} className="result-badge">{result}</span>
                  ))}
                </div>

                <div className="case-study-tech">
                  {study.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      <HiCode /> {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies


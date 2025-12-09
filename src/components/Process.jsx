import React from 'react'
import { HiSearch, HiLightBulb, HiCode, HiCheckCircle, HiArrowRight } from 'react-icons/hi'
import './Process.css'

const Process = () => {
  const steps = [
    {
      icon: <HiSearch />,
      title: 'Discovery & Research',
      description: 'We dive deep into your business, goals, and target audience to understand your unique needs.',
      activities: ['Stakeholder interviews', 'Market research', 'Competitor analysis', 'User personas'],
      deliverables: ['Project brief', 'Research report', 'User personas', 'Technical requirements']
    },
    {
      icon: <HiLightBulb />,
      title: 'Planning & Strategy',
      description: 'We create a comprehensive roadmap and strategy tailored to your objectives and timeline.',
      activities: ['Information architecture', 'Feature prioritization', 'Technology selection', 'Timeline planning'],
      deliverables: ['Project roadmap', 'Technical specification', 'Design system', 'Project timeline']
    },
    {
      icon: <HiCode />,
      title: 'Design & Development',
      description: 'Our team brings your vision to life with beautiful designs and robust, scalable code.',
      activities: ['Wireframing & prototyping', 'UI/UX design', 'Frontend development', 'Backend development'],
      deliverables: ['Design mockups', 'Interactive prototypes', 'MVP development', 'Code repository']
    },
    {
      icon: <HiCheckCircle />,
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your product is bug-free, secure, and performs flawlessly.',
      activities: ['Unit testing', 'Integration testing', 'User acceptance testing', 'Performance optimization'],
      deliverables: ['Test reports', 'Bug fixes', 'Performance metrics', 'Security audit']
    },
    {
      icon: <HiArrowRight />,
      title: 'Launch & Support',
      description: 'We handle deployment and provide ongoing support to ensure continued success.',
      activities: ['Deployment', 'Monitoring setup', 'Documentation', 'Training sessions'],
      deliverables: ['Live product', 'Documentation', 'Support plan', 'Maintenance agreement']
    }
  ]

  return (
    <section id="process" className="process section">
      <div className="container">
        <h2 className="section-title">Our Process</h2>
        <p className="section-subtitle">
          A proven methodology that ensures successful project delivery
        </p>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-connector">
                <div className="step-number">{index + 1}</div>
                {index < steps.length - 1 && <div className="connector-line"></div>}
              </div>
              <div className="step-content">
                <div className="step-icon">
                  {step.icon}
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                
                <div className="step-details">
                  <div className="step-activities">
                    <h4>Activities:</h4>
                    <ul>
                      {step.activities.map((activity, idx) => (
                        <li key={idx}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="step-deliverables">
                    <h4>Deliverables:</h4>
                    <ul>
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx}>{deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process


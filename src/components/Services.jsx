import React from 'react'
import { 
  HiCode, 
  HiDeviceMobile, 
  HiColorSwatch, 
  HiLightBulb,
  HiSupport
} from 'react-icons/hi'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <HiCode />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      deliverables: ['React/Next.js', 'Node.js Backend', 'API Integration', 'Performance Optimization']
    },
    {
      icon: <HiDeviceMobile />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      deliverables: ['Flutter', 'iOS Development', 'Android Development', 'App Store Deployment']
    },
    {
      icon: <HiColorSwatch />,
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with functionality.',
      deliverables: ['Wireframing', 'Prototyping', 'Design Systems', 'User Testing']
    },
    {
      icon: <HiLightBulb />,
      title: 'Branding & Identity',
      description: 'Complete brand identity packages that tell your unique story.',
      deliverables: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Marketing Materials']
    },
    {
      icon: <HiSupport />,
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your digital assets running smoothly.',
      deliverables: ['Bug Fixes', 'Updates', 'Security', '24/7 Support']
    }
  ]

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive digital solutions tailored to your business needs
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-deliverables">
                {service.deliverables.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services


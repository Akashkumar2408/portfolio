import React from 'react'
import './TeamMembers.css'

const TeamMembers = () => {
  const members = [
    {
      name: 'Rohit Vyas',
      role: 'Web Designer & Front-end Developer',
      bio: 'MBA graduate with expertise in management and responsive web design. Specialised in converting designs to pixel-perfect, performant web pages.',
      skills: ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'Figma']
    },
    {
      name: 'Prasad Akashkumar',
      role: 'Mobile Developer',
      bio: 'Skilled mobile app developer specializing in Android and cross-platform development. Expert in building scalable applications using Kotlin and Flutter.',
      skills: ['Kotlin', 'Flutter', 'MVVM', 'Firebase']
    },
    {
      name: 'Ashishkumar Ladava',
      role: 'Full Stack Developer',
      bio: 'Passionate Full Stack Developer specializing in Java ecosystem. Strong foundation in building scalable applications with clean architecture.',
      skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker']
    },
    {
      name: 'Aniruddh',
      role: 'Data Engineer',
      bio: '2+ years building AWS-based ETL pipelines and data warehousing solutions. Expert in improving performance and reducing infrastructure costs.',
      skills: ['Python', 'AWS', 'Airflow', 'Kafka', 'Power BI']
    },
    {
      name: 'Dhrumit Rathod',
      role: 'Database Developer',
      bio: 'Database optimization specialist with 1 year experience. Skilled in designing efficient database schemas and automating data workflows.',
      skills: ['SQL Server', 'PostgreSQL', 'Python', 'Power BI', 'AWS']
    }
  ]

  return (
    <section id="team-members" className="team-members section">
      <div className="container">
        <h2 className="section-title">Talented People, Exceptional Results</h2>
        <p className="section-subtitle">
          Our team brings together diverse expertise and decades of combined experience. We're not just freelancers—we're seasoned professionals committed to your success.
        </p>

        <div className="team-members-grid">
          {members.map((member, index) => (
            <div key={index} className="team-member-card">
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
                <div className="member-skills">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
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

export default TeamMembers


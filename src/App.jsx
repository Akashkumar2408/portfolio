import React, { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import TeamOverview from './components/TeamOverview'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import TeamMembers from './components/TeamMembers'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="App">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <TeamOverview />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Process />
      <TeamMembers />
      <Contact />
      <Footer />
    </div>
  )
}

export default App


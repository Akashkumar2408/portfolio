import React, { useState, useEffect } from 'react'
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Raj',
    title: '.NET Developer',
    company: '',
    rating: 5,
    quote: 'Rohit did a great job on the RD Gardi College website update. His work focused on improving the top navigation menu and updating various pages and views. The changes he made enhanced the overall user experience and gave the website a cleaner and more organized look. Rohit completed the work efficiently and understood the requirements clearly. I\'m satisfied with the results and appreciate his professionalism.',
    project: 'RD Gardi College Website'
  },
  {
    name: 'Nikhil',
    title: 'Owner',
    company: 'Harsiddhi Mobile',
    rating: 5,
    quote: 'Akashkumar delivered an excellent Android Kotlin billing and inventory management app for EasyBilling. The application has greatly streamlined our business operations with fast, efficient billing and accurate inventory tracking. The app is easy to use, stable, and well-designed, making day-to-day management much smoother. I appreciate Akashkumar\'s professionalism, clear communication, and ability to understand our business needs. Highly recommended for anyone looking for a reliable billing and inventory solution.',
    project: 'EasyBilling App'
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Auto-swipe testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Trusted by companies worldwide to deliver exceptional results
        </p>

        <div className="testimonials-container">
          <button 
            className="testimonial-nav-btn prev"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <HiChevronLeft />
          </button>

          <div className="testimonial-card">
            <div className="testimonial-rating">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <HiStar key={i} className="star-icon" />
              ))}
            </div>
            <blockquote className="testimonial-quote">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="testimonial-author">
              <div className="author-info">
                <div className="author-name">{testimonials[currentIndex].name}</div>
                <div className="author-title">
                  {testimonials[currentIndex].title}{testimonials[currentIndex].company && `, ${testimonials[currentIndex].company}`}
                </div>
                <div className="author-project">{testimonials[currentIndex].project}</div>
              </div>
            </div>
          </div>

          <button 
            className="testimonial-nav-btn next"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <HiChevronRight />
          </button>
        </div>

        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

import React from 'react'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import './Contact.css'

const Contact = () => {

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to start your project? Reach out to us through the contact information below.
        </p>

        <div className="contact-content-simple">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p className="contact-description">
              We respond to all inquiries within 24 hours. Feel free to reach out through 
              any of the following channels.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <HiMail />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:youngtechwork@gmail.com">youngtechwork@gmail.com</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <HiPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+919429500518">+91 9429500518</a>
                  <br />
                  <a href="tel:+919558874905" style={{marginTop: '0.5rem', display: 'inline-block'}}>+91 9558874905</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <HiLocationMarker />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Remote Team Worldwide</p>
                </div>
              </div>
            </div>

            <div className="response-time">
              <strong>Response Time:</strong> Within 24 hours
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


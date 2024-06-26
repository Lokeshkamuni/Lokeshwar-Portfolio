import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h3>Contact Me</h3>
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <p>Hyderabad, Telangana</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <a href="tel:+917893724239" className="contact-link">7893724239</a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <a href="mailto:lokeshkamuni@gmail.com" className="contact-link">lokeshkamuni@gmail.com</a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
            <a href="https://www.linkedin.com/in/lokeshwar-kamuni-6484ab185" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/lokeshwar-kamuni-6484ab185</a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faGithub} className="contact-icon" />
            <a href="https://github.com/Lokeshkamuni" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/Lokeshkamuni</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

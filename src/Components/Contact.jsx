import React from 'react';
import Form from './Contactform.jsx';
import "./Contact.css";
import Footer from './Footer.jsx';

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <Form />
        <div className="contact-info-section">
          <h1 className="section-heading">Contact Information</h1>
          <div className="contact-info">
            <div className="info-box">
              <div className="info-icon">📞</div>
              <div className="info-text">
                <h3>Phone Number</h3>
                <p className="info-detail">9872854883</p>
              </div>
            </div>
            <div className="info-box">
              <div className="info-icon">✉️</div>
              <div className="info-text">
                <h3>Email Address</h3>
                <p className="info-detail">priyanshuvasudev2005@gmail.com</p>
              </div>
            </div>
            <div className="info-box">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h3>Office Address</h3>
                <p className="info-detail">123 Pharma Street, Health City, 456789</p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="social-media-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Map Section */}
          <div className="map-container">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.6285293484743!2d74.81059667565708!3d31.6440197741576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919651615ddaea5%3A0xad988e4fb5130794!2sSadda%20Pind%20Amritsar!5e0!3m2!1sen!2sin!4v1735152663964!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Reviews Section */}
          <div className="reviews-section">
            <h2 className="reviews-heading">What Our Clients Say</h2>
            <div className="reviews-container">
              <div className="review-card">
                <div className="review-text">
                  <p>"The service was fantastic! I highly recommend them."</p>
                </div>
                <div className="review-author">
                  <p>- John Doe</p>
                  <div className="stars">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="review-text">
                  <p>"Excellent experience from start to finish!"</p>
                </div>
                <div className="review-author">
                  <p>- Jane Smith</p>
                  <div className="stars">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="review-text">
                  <p>"Professional, efficient, and friendly service. 10/10!"</p>
                </div>
                <div className="review-author">
                  <p>- Michael Johnson</p>
                  <div className="stars">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        
      </div>
      <Footer />
    </>
  );
};

export default Contact;

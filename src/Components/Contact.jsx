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
                <p className="info-detail">+91 9988557354</p>
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
                <p className="info-detail">#17, Street No.1, East Chander Nagar, Near Community Center, New Delhi-110051</p>
              </div>
            </div>
          </div>
          <div className="map-container">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.260612412702!2d77.28017327554323!3d28.65191437565423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7352973c07%3A0x92bc19304137afcd!2sCommunity%20center%20chander%20nagar!5e0!3m2!1sen!2sin!4v1735411565928!5m2!1sen!2sin" 
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="reviews-section">
            <h2 className="reviews-heading">What Our Clients Say</h2>
            <div className="reviews-container">
              <div className="review-card">
                <div className="review-text">
                  <p>"By seeing their product quality and service tactics I can say Mediqem Pharma is the best at their work."</p>
                </div>
                <div className="review-author">
                  <p>- Priyanshu Vasudev</p>
                  <div className="stars">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="review-text">
                  <p>"I was a bit worried at first about how the products would be but it was the best and from packaging quality to assurance of work everyone was fulfiled"</p>
                </div>
                <div className="review-author">
                  <p>- Rohit Raj</p>
                  <div className="stars">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="review-text">
                  <p>"The Expereince was amazing, the team was great, helped me at every point and the products were damn good."</p>
                </div>
                <div className="review-author">
                  <p>- Punya Kumar </p>
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

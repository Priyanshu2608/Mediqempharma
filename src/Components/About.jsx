import React from 'react';
import './About.css'; // Ensure the CSS is updated accordingly
import Footer from './Footer';
import who from '../assets/who-we-are-banner.jpg';
import our from '../assets/our.png';
import vision from '../assets/vision.jpeg';  

function About() {
  return (
    <>
      <div className="about-page">
        <header className="about-header">
          <h1>About Us</h1>
          <p>Discover who we are and what we do.</p>
        </header>

        <section className="about-content">
          <div className="content-left">
            <h2>Who We Are</h2>
            <p>
              MediqemPharma is a leading pharmaceutical company focused on providing innovative and high-quality healthcare solutions. We are committed to improving the well-being of people worldwide through our products.
            </p>
          </div>
          <div className="content-right">
            <img src={who} alt="Who we are" />
          </div>
        </section>

        <section className="about-content">
          <div className="content-left">
            <h2>Our Mission</h2>
            <p>
              Our mission is to enhance lives by delivering life-saving medications, promoting health, and improving access to essential pharmaceutical products.
            </p>
          </div>
          <div className="content-right">
            <img src={our} alt="Mission" />
          </div>
        </section>

        <section className="about-content">
          <div className="content-left">
            <h2>Our Vision</h2>
            <p>
              We envision a future where quality healthcare is accessible to everyone, and our innovative products contribute to better global health.
            </p>
          </div>
          <div className="content-right">
            <img src={vision} alt="Vision" />
          </div>
        </section>
      </div>
      <Footer />``
    </>
  );
}

export default About;

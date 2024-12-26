import React from 'react';
import './About.css'; // Make sure to update the CSS file accordingly
import Footer from './Footer';

const About = () => {
  return (
    <>
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>We are committed to providing quality healthcare solutions.</p>
      </header>

      <section className="company-info">
        <h2>Who We Are</h2>
        <p>
          MediqemPharma is a leading pharmaceutical company dedicated to enhancing the health and wellness of individuals through innovation and cutting-edge solutions. Our focus is on delivering high-quality medicines that improve the quality of life.
       
          With decades of experience, our team of skilled professionals works tirelessly to develop, manufacture, and distribute pharmaceutical products that meet the highest standards of safety and effectiveness.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to be a trusted provider of pharmaceuticals, offering products that make a difference in the lives of people worldwide. We are committed to upholding the values of quality, integrity, and compassion in every product we deliver.
        </p>
      </section>

      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          Our vision is to improve global health by providing access to essential, life-saving medications, fostering research and development, and supporting communities through healthcare initiatives.
        </p>
      </section>

      <section className="values">
        <h2>Our Core Values</h2>
        <ul>
          <li>Innovation</li>
          <li>Integrity</li>
          <li>Quality</li>
          <li>Compassion</li>
          <li>Collaboration</li>
        </ul>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default About;

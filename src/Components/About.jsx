import React from "react";
import "./About.css"; // Ensure the CSS is updated accordingly
import Footer from "./Footer";
import who from "../assets/who-we-are-banner.jpg";
import our from "../assets/our.png";
import vision from "../assets/vision.jpeg";

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
              MediqemPharma is a leading pharmaceutical company, committed to
              quality in every aspect of our work. We specialize in the
              development, manufacturing, and distribution of a diverse range of
              pharmaceutical products that meet the highest standards of safety
              and efficacy. Our dedicated team of experts and researchers
              relentlessly pursue innovation to ensure that our medicines
              improve lives and contribute to better global health. With a focus
              on patient well-being, we are driven by our mission to provide
              safe, effective, and accessible healthcare solutions to
              communities around the world.
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
              At MediqemPharma, our mission is to improve the quality of life by
              providing high-quality, affordable, and innovative pharmaceutical
              products. We are dedicated to advancing healthcare by focusing on
              research and development, ensuring that our medicines meet the
              highest standards of safety and efficacy. Our goal is to enhance
              access to essential healthcare solutions worldwide, offering
              compassionate care and reliable support to patients, healthcare
              professionals, and communities. Through our unwavering commitment
              to excellence, we aim to create lasting value and promote better
              health for all.
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
              At MediqemPharma, we envision a world where quality healthcare is
              within everyone's reach. We strive to be at the forefront of
              innovation, delivering cutting-edge pharmaceutical solutions that
              improve lives and enhance global well-being. Our commitment to
              research, development, and excellence in production ensures that
              we bring safe, effective, and accessible medicines to those in
              need, empowering healthier communities around the world. By
              fostering sustainability, integrity, and compassion, we aim to be
              a trusted partner in advancing healthcare for future generations.
            </p>
          </div>
          <div className="content-right">
            <img src={vision} alt="Vision" />
          </div>
        </section>
      </div>
      <Footer />
      
    </>
  );
}

export default About;

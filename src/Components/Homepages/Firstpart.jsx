import React from "react";
import "./Firstpart.css";
import pic1 from "../../assets/pharma2.jpg";
import Second from "../Homepages/Enquire.jsx";

const Firstpart = () => {
  const boxData = [
    {
      title: "Our Aim",
      description:
        "At MediqemPharma, our aim is to revolutionize healthcare by developing, manufacturing, and delivering high-quality pharmaceutical products that improve the lives of people worldwide. Guided by our tagline, 'Committed to Quality,' we strive for excellence in every aspect of our operations—from innovation and production to customer satisfaction and social responsibility. Our focus is on advancing medical solutions that are accessible, safe, and effective while upholding ethical practices and sustainability.",
    },
    {
      title: "Why Choose Us?",
      description:
        "At MediqemPharma, we are committed to delivering high-quality pharmaceutical solutions that prioritize safety and effectiveness. Our innovative approach ensures we stay ahead in meeting the evolving needs of healthcare. With a customer-first mindset, we focus on providing personalized support and building trust. Choose MediqemPharma for excellence, reliability, and a dedication to your well-being.",
    },
  ];

  const cardData = [
    {
      title: "Innovation",
      description: "Pioneering medical advancements for better healthcare solutions.",
      imageUrl:
        "https://www.worldpharmatoday.com/wp-content/uploads/2022/01/pharmaceutical-companys-Innovations.jpg",
    },
    {
      title: "Quality",
      description: "Ensuring high standards in all our products and services.",
      imageUrl:
        "https://www.aaps.ca/wp-content/uploads/Jan-11-pharmaceutical-quality-assurance.jpg",
    },
    {
      title: "Sustainability",
      description: "Committed to environmentally friendly practices.",
      imageUrl:
        "https://www.escopharma.com/images/news-banner/full/data-integrity-in-the-pharmaceutical-industry.jpg",
    },
    {
      title: "Integrity",
      description: "Upholding the highest ethical standards in our practices.",
      imageUrl: "https://images.rodpub.com/images/217/297_main.jpg",
    },
    {
      title: "Excellence",
      description: "Striving for perfection in everything we do.",
      imageUrl:
        "https://img.freepik.com/premium-photo/pharmaceutical-excellence-counter-with-expert-pharmacists_984027-223457.jpg",
    },
    {
      title: "Collaboration",
      description: "Working together for a healthier future.",
      imageUrl: "https://images.rodpub.com/images/239/855_main.jpg",
    },
  ];

  return (
    <div className="container">
     
      <div className="boxes">
        {boxData.map((box, index) => (
          <div className="box" key={index}>
            <h2>{box.title}</h2>
            <h4>{box.description}</h4>
          </div>
        ))}
      </div>

     
      <div className="cards">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.imageUrl} alt={`Image for ${card.title}`} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      
      <div className="image-container">
        <img className="pic1" src={pic1} alt="products" />
        <div className="image-text">Advancing Healthcare with Excellence</div>
        <div className="image-des">
          At MediqemPharma, we take pride in offering a diverse range of pharmaceutical
          products designed to meet the highest standards of quality and efficacy. From
          innovative formulations to trusted generics. Explore our range and discover
          solutions tailored to improve lives, because at MediqemPharma, we are "Committed
          to Quality."
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a href="/products" className="view-products-btn">
            View Products
          </a>
        </div>
      </div>

    
      <Second />
    </div>
  );
};

export default Firstpart;

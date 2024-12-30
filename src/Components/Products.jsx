import React, { useRef } from "react";
import "./Product.css";
import Footer from "./Footer.jsx";
import product1 from "../assets/product1.jpg";
import Productpage1 from "./Productpages/Productpage1.jsx";
const Products = () => {
  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="product-container">
        <div className="product-hero">
          <img className="product-cover" src={product1} alt="Product Cover" />
          <div className="overlay-content">
            <h1 className="product-title">Our Products</h1>
            <p className="product-subtitle">
              Discover our wide range of high-quality pharmaceutical products designed to promote health and well-being.
            </p>
            <button className="know-more-btn" onClick={scrollToNextSection}>
              View Products
            </button>
          </div>
        </div>
      </div>
      <div ref={nextSectionRef}>
       
      </div>
      <Productpage1/>
      <Footer />
    </>
  );
};

export default Products;

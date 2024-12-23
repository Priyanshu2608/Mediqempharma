import React, { useRef } from "react";
import "./Product.css";
import Product1 from './Productpages/Productpage1.jsx';

const Products = () => {
   const nextSectionRef = useRef(null);
  
    const scrollToNextSection = () => {
      if (nextSectionRef.current) {
        nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <div>
      <div className="product-container">
        <div className="product-content">
          <h1 className="product-title">Our Products</h1>
          <p className="product-subtitle">
            "Discover our wide range of high-quality pharmaceutical products
            designed to promote health and well-being."
          </p>
          <button className="know-more-btn" onClick={scrollToNextSection}>
            View Products 
          </button>
        </div>
      </div>
      <div ref={nextSectionRef}>
      <Product1/>
      </div>
    </div>
  );
};

export default Products;

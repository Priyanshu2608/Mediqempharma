import React, { useRef, useState } from "react";
import "./Product.css";
import Footer from "./Footer.jsx";
import { motion } from "framer-motion";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import moxiImage1 from "../assets/MOXIQEM.png";
import moxiImage2 from "../assets/MOXIQEM.png";
import moxiImage3 from "../assets/MOXIQEM.png";

const Products = () => {
  const nextSectionRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const products = [
    {
      id: 1,
      name: "MOXIQEM-CV 625",
      images: [moxiImage1, moxiImage2, moxiImage3], 
      description: "High-quality product for health and well-being.",
      details: {
        composition: "Active Ingredient A, B, C",
        dosage: "Twice daily after meals",
        storage: "Store in a cool, dry place",
        benefits: "Improves immunity, boosts energy",
        moreInfo: "This product is commonly used to boost immunity and overall health. It is designed to help in reducing fatigue and improving energy levels.",
      },
    },
    {
      id: 2,
      name: "MOXIQEM-DDS SYRUP",
      image: "https://via.placeholder.com/200",
      description: "Effective solution for your health needs.",
      details: {
        composition: "Active Ingredient X, Y, Z",
        dosage: "Once daily in the morning",
        storage: "Keep away from direct sunlight",
        benefits: "Supports heart health, reduces fatigue",
        moreInfo: "Supports cardiovascular health and increases energy levels for daily activity.",
      },
    },
    {
      id: 3,
      name: "Product C",
      image: "https://via.placeholder.com/200",
      description: "Trusted choice for health and safety.",
      details: {
        composition: "Active Ingredient M, N, O",
        dosage: "Three times daily after meals",
        storage: "Store in a refrigerator",
        benefits: "Enhances digestion, strengthens bones",
        moreInfo: "This product is designed to enhance digestive health and support bone strength.",
      },
    },
  ];

 
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="product-container">
        <div className="product-content">
          <h1 className="product-title">Our Products</h1>
          <p className="product-subtitle">
            Discover our wide range of high-quality pharmaceutical products designed to promote health and well-being.
          </p>
          <button className="know-more-btn" onClick={scrollToNextSection}>
            View Products
          </button>
        </div>
      </div>
      <div className="product-showcase" ref={nextSectionRef}>
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-short-desc">{product.description}</p>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <motion.div
          className="product-modal"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="modal-content">
            <h2 className="modal-title">{selectedProduct.name}</h2>
            <p className="modal-desc">{selectedProduct.description}</p>

            {/* Slick Carousel for Product Images */}
            <Slider {...sliderSettings} className="product-image-slider">
              {selectedProduct.images.map((img, index) => (
                <div key={index} className="slide">
                  <img src={img} alt={selectedProduct.name} className="product-image-large" />
                </div>
              ))}
            </Slider>
            <ul className="product-details">
              <li><strong>Composition:</strong> {selectedProduct.details.composition}</li>
              <li><strong>Dosage:</strong> {selectedProduct.details.dosage}</li>
              <li><strong>Storage:</strong> {selectedProduct.details.storage}</li>
              <li><strong>Benefits:</strong> {selectedProduct.details.benefits}</li>
              <li><strong>More Information:</strong> {selectedProduct.details.moreInfo}</li>
            </ul>

            <button className="close-btn" onClick={() => setSelectedProduct(null)}>
              Close
            </button>
          </div>
        </motion.div>
      )}
      <Footer />
    </>
  );
};

export default Products;

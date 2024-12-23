// ProductsPage.jsx
import React, { useState } from "react";
import "./Productpage1.css"; // For styling
import moxi from '../../assets/MOXIQEM.png';

const products = [
  {
    id: 1,
    name: "MOXIQEM-CV",
    image: moxi,
    shortDescription: "Amoxycillin + Clavulanic Acid",
    description: "Detailed information about Product 1, including its features, usage, and technical details.",
    features: ["Broad spectrum coverage against ä aerobic and anaerobic dental pathogens", "Adequate GCF concentraons & ä favorable suscepbility", "Proven clinical efficacy in odontogenic ä infecons (upto 96%)"],
    technicalInfo: "Dosage: XYZ, Ingredients: ABC, Storage: Cool & Dry Place"
  },
  {
    id: 2,
    name: "Product 2",
    image: "path/to/image2.jpg",
    shortDescription: "A brief description of Product 2.",
    description: "Detailed information about Product 2, including its features, usage, and technical details.",
    features: ["Feature A", "Feature B", "Feature C"],
    technicalInfo: "Dosage: PQR, Ingredients: DEF, Storage: Room Temperature"
  },
  {
    id: 3,
    name: "Product 3",
    image: "path/to/image3.jpg",
    shortDescription: "A brief description of Product 3.",
    description: "Detailed information about Product 3, including its features, usage, and technical details.",
    features: ["Feature X", "Feature Y", "Feature Z"],
    technicalInfo: "Dosage: LMN, Ingredients: GHI, Storage: Refrigerate"
  },
  {
    id: 4,
    name: "Product 4",
    image: "path/to/image4.jpg",
    shortDescription: "A brief description of Product 4.",
    description: "Detailed information about Product 4, including its features, usage, and technical details.",
    features: ["Feature AA", "Feature BB", "Feature CC"],
    technicalInfo: "Dosage: STU, Ingredients: JKL, Storage: Cool & Dry Place"
  }
];

const Productpage1 = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="products-page">
      <h1 className="header">Our Products</h1>
      <p className="sub-header">Explore our range of high-quality pharmaceutical products.</p>

      {selectedProduct ? (
        <div className="product-detail">
          <button className="back-button" onClick={() => setSelectedProduct(null)}>
            &larr; Back to Products
          </button>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="product-detail-image"
          />
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
          <h3>Key Features:</h3>
          <ul>
            {selectedProduct.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h3>Technical Information:</h3>
          <p>{selectedProduct.technicalInfo}</p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>{product.shortDescription}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Productpage1;

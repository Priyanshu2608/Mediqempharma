import React, { useState } from "react";
import "./Productpage1.css";
import { motion } from "framer-motion";
import Why from "../../assets/whyschose.jpg";
import Quality from "../../assets/quality.png";
import Inno from "../../assets/inno.jpg";
const products = [
  {
    id: 1,
    name: "MOXIQEM-CV 625",
    images: [
      "https://via.placeholder.com/400x300?text=MOXIQEM+Image+1",
      "https://via.placeholder.com/400x300?text=MOXIQEM+Image+2",
      "https://via.placeholder.com/400x300?text=MOXIQEM+Image+3",
    ],
    composition: [
      "Each film-coated tablet contains:",
      "Amoxycillin Trihydrate I.P. - Equivalent to Amoxycillin 500 mg",
      "Potassium Clavulanate Diluted I.P. - Equivalent to Clavulanic Acid 125 mg",
      "Excipients - q.s.",
    ],
    color: "Titanium Dioxide I.P.",
    dosage: "As directed by the physician.",
    storage:
      "Store in a cool & dry place, below 25°C. Protect from light & moisture.",
    caution:
      "SCHEDULE H PRESCRIPTION DRUG - CAUTION: Not to be sold by retail without the prescription of a Registered Medical Practitioner.",
    manufacturer: {
      license: "MB/16/916",
      company: "Polestar Power Industries (WHO-GMP CERTIFIED COMPANY)",
      location:
        "Vill. Damuwala, Haripur Road, Barotiwala, Baddi, Distt. Solan (H.P.) - 174 103",
      website: "www.polestarpharma.com",
    },
  },
  {
    id: 2,
    name: "MOXIQEM-CV",
    images: [
      "https://via.placeholder.com/400x300?text=MOXIQEM+CV+Image+1",
      "https://via.placeholder.com/400x300?text=MOXIQEM+CV+Image+2",
    ],
    composition: [
      "Each 5 ml of the reconstituted suspension contains:",
      "Amoxycillin Trihydrate I.P. - Equivalent to Amoxycillin 200 mg",
      "Potassium Clavulanate Diluted I.P. - Equivalent to Clavulanic Acid 28.5 mg",
      "Excipients - q.s.",
    ],
    dosage: "As directed by the Physician.",
    storage:
      "Store in a cool & dry place, below 25°C. Protect from light & moisture.",
    caution:
      "SCHEDULE H PRESCRIPTION DRUG - CAUTION: Not to be sold by retail without the prescription of a Registered Medical Practitioner.",
    directions: [
      "Boil water, allow it to cool.",
      "Slowly add cooled water up to the mark on the bottle.",
      "Shake vigorously.",
      "Adjust the volume up to the mark by adding more water if necessary.",
      "This makes 30 ml of the suspension.",
    ],
    manufacturer: {
      license: "MB/16/916",
      company: "Polestar Power Industries (WHO-GMP CERTIFIED COMPANY)",
      location:
        "Pharma Division, Vill. Damuwala, Haripur Road, Barotiwala, Baddi, Distt. Solan (H.P.) - 174 103",
      website: "www.polestarpharma.com",
    },
  },

  {
    id: 3,
    name: "MOXIQEM-CV DDS",
    images: [
      "https://via.placeholder.com/400x300?text=MOXIQEM+CV+DDS+Image+1",
      "https://via.placeholder.com/400x300?text=MOXIQEM+CV+DDS+Image+2",
    ],
    composition: [
      "Each 5 ml of the reconstituted suspension contains:",
      "Amoxycillin Trihydrate I.P. - Equivalent to Amoxycillin 400 mg",
      "Potassium Clavulanate Diluted I.P. - Equivalent to Clavulanic Acid 57 mg",
      "Excipients - q.s.",
      "Sterile water for reconstitution - 30 ml",
    ],
    dosage: "As directed by the Physician.",
    storage:
      "Store in a cool & dry place, below 25°C. Protect from light & moisture.",
    caution:
      "SCHEDULE H PRESCRIPTION DRUG - CAUTION: Not to be sold by retail without the prescription of a Registered Medical Practitioner.",
    directions: [
      "Shake the bottle well to loosen the powder.",
      "Use enclosed sterile water supplied with this pack to reconstitute the powder up to the ring mark on the bottle.",
      "Store the reconstituted suspension in refrigerator (2°C - 8°C) when not in use.",
      "Use the reconstituted suspension within 5 days. Any extra portion left to be thrown away.",
    ],
    manufacturer: {
      license: "MB/16/916",
      company: "Polestar Power Industries (WHO-GMP CERTIFIED COMPANY)",
      location:
        "Pharma Division, Vill. Damuwala, Haripur Road, Barotiwala, Baddi, Distt. Solan (H.P.) - 174 103",
      website: "www.polestarpharma.com",
    },
  },
];
const Productpage1 = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageSlide = (direction) => {
    if (!selectedProduct) return;
    const totalImages = selectedProduct.images.length;
    if (direction === "prev") {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
      );
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }
  };

  return (
    <>
      {/* Existing Header and Subheading */}
      <h2 className="products-head">Our Products</h2>
      <p className="products-subhead">
        At MediqemPharma, we are committed to providing world-class
        pharmaceutical products that play a vital role in improving health.
      </p>

      {/* Product Grid */}
      <div className="product-showcase-container">
        <div className="product-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => {
                setSelectedProduct(product);
                setCurrentImageIndex(0);
              }}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="product-card-image"
              />
              <h3 className="product-card-title">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Product Details */}
      {selectedProduct && (
        <motion.div
          className="product-modal"
          initial={{ opacity: 0, scale: 0.8,  }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => setSelectedProduct(null)}
            >
              ✖
            </button>
            <div className="modal-image-slider">
              <button
                className="slider-btn prev"
                onClick={() => handleImageSlide("prev")}
              >
                ◀
              </button>
              <img
                src={selectedProduct.images[currentImageIndex]}
                alt={`${selectedProduct.name} Image ${currentImageIndex + 1}`}
                className="slider-image"
              />
              <button
                className="slider-btn next"
                onClick={() => handleImageSlide("next")}
              >
                ▶
              </button>
            </div>
            <h3 className="modal-product-name">{selectedProduct.name}</h3>
            <ul className="modal-product-details">
              <li>
                <strong>Composition:</strong>
              </li>
              <ul className="composition-list">
                {selectedProduct.composition.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
              <li>
                <strong>Color:</strong> {selectedProduct.color}
              </li>
              <li>
                <strong>Dosage:</strong> {selectedProduct.dosage}
              </li>
              <li>
                <strong>Storage:</strong> {selectedProduct.storage}
              </li>
              <li className="caution">
                <strong>Caution:</strong> {selectedProduct.caution}
              </li>
              <li>
                <strong>Manufacturer:</strong>
              </li>
              <ul className="manufacturer-details">
                <li>License: {selectedProduct.manufacturer.license}</li>
                <li>Company: {selectedProduct.manufacturer.company}</li>
                <li>Location: {selectedProduct.manufacturer.location}</li>
                <li>
                  Website:{" "}
                  <a
                    href={`https://${selectedProduct.manufacturer.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedProduct.manufacturer.website}
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </motion.div>
      )}

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h2>Why Choose MediqemPharma?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img
              src={Why}
              alt="Trust"
              className="feature-icon"
            />
            <h3>Trusted by Experts</h3>
            <p>Our products are backed by rigorous clinical research.</p>
          </div>
          <div className="feature-card">
            <img
              src={Quality}
              alt="Quality"
              className="feature-icon"
            />
            <h3>Quality Assurance</h3>
            <p>All products meet international quality standards.</p>
          </div>
          <div className="feature-card">
            <img
              src={Inno}
              alt="Innovation"
              className="feature-icon"
            />
            <h3>Innovation in Healthcare</h3>
            <p>We strive to develop cutting-edge pharmaceutical solutions.</p>
          </div>
        </div>
      </div>

      {/* Photography Showcase Section */}
      <div className="photography-showcase">
        <h2>Our Facilities</h2>
        <div className="photo-grid">
          <img
            src="https://via.placeholder.com/300?text=Facility+1"
            alt="Facility 1"
          />
          <img
            src="https://via.placeholder.com/300?text=Facility+2"
            alt="Facility 2"
          />
          <img
            src="https://via.placeholder.com/300?text=Facility+3"
            alt="Facility 3"
          />
          <img
            src="https://via.placeholder.com/300?text=Facility+4"
            alt="Facility 4"
          />
        </div>
      </div>
    </>
  );
};

export default Productpage1;

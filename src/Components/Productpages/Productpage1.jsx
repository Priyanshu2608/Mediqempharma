import React, { useState } from "react";
import "./Productpage1.css";
import { motion } from "framer-motion";

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
      <h2 className="products-head"> Our Products </h2>
      <p className="products-subhead">
        At MediqemPharma, we are committed to providing world-class
        pharmaceutical products that play a vital role in improving the health
        and well-being of individuals across the globe. Our goal is to combine
        cutting-edge scientific research with the highest standards of
        manufacturing to create pharmaceutical solutions that are both effective
        and safe. Each product in our portfolio has been carefully developed to
        address the unique needs of patients, ensuring the delivery of quality
        care at every step. We understand the importance of trust and
        reliability in healthcare. Our products are backed by years of research,
        clinical testing, and a deep understanding of medical needs. We are
        proud to offer pharmaceutical solutions that not only meet but exceed
        industry standards.  At MediqemPharma, we prioritize patient safety and well-being,
        which is why our products undergo rigorous testing and quality control
        throughout their development and manufacturing processes. We are always
        striving to improve and innovate, exploring new possibilities in
        medicine to ensure that our offerings remain at the forefront of
        healthcare. Below, we proudly present our range of carefully developed
        products. Each product has been designed with specific medical needs in
        mind and is formulated to provide effective solutions for various health
        concerns. Whether you are a healthcare provider or a patient, our
        products are created to help you manage and improve your health, with
        the assurance of quality, reliability, and effectiveness.
      </p>
      <div className="product-showcase-container">
        {/* Product Grid */}
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

        {/* Modal for Product Details */}
        {selectedProduct && (
          <motion.div
            className="product-modal"
            initial={{ opacity: 0, scale: 0.8 }}
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
      </div>
    </>
  );
};

export default Productpage1;

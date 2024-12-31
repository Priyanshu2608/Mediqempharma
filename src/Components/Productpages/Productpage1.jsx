import React, { useState } from "react";
import "./Productpage1.css";
import { color, motion } from "framer-motion";
import Why from "../../assets/whyschose.jpg";
import Quality from "../../assets/quality.png";
import Inno from "../../assets/inno.jpg";
import Dye from "../../assets/dyefill.png";
import Weight from "../../assets/weight.jpg";
import Compact from "../../assets/compact.png";
import eject from "../../assets/eject.png";
import Pform from "./Productform";
import Moxi from "../../assets/MOXIQEM.png";
import Moxi3 from "../../assets/moxiqem2.png";
import Moxicv1 from "../../assets/Moxicv1.png";
import Moxicv2 from "../../assets/moxicv2.png";
import Moxidds1 from "../../assets/moxidds1.png";
import Moxidds2 from "../../assets/moxidds3.png";
import Bact from "../../assets/bactrofix.png";
import Well from "../../assets/wellraft.png";
const products = [
  {
    id: 1,
    name: "MOXIQEM-CV 625",
    images: [Moxi, Moxi3],
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
    images: [Moxicv1, Moxicv2],
    composition: [
      "Amoxicillin/clavulanic acid, also known as co-amoxiclav or amox-clav, sold under the brand name MoxiQem CV, among others, is an antibiotic medication used for the treatment of a number of bacterial infections. It is a combination consisting of amoxicillin, a β-lactam antibiotic, and potassium clavulanate, a β-lactamase inhibitor. It is specifically used for otitis media, streptococcal pharyngitis, pneumonia, cellulitis, urinary tract infections, and animal bites.It is taken by mouth",
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
    images: [Moxidds1, Moxidds2],
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
  {
    id: 4,
    name: "BACTROFIX OINTMENT",
    images: [Bact],
    composition: [
      "Mupoicin - 2% w/w",
      "In a non-greasy ointment base",
      "Mupirocin, sold under the brand name Bactrofix is a topical antibiotic that treats bacterial skin infections like impetigo, folliculitis, and boils. It works by stopping bacteria from growing and killing existing bacteria on the skin.",
    ],
    color: "White",
    dosage: [
      "Apply a thin film of the medication to the affected area. You can cover the area with a sterile gauze dressing (bandage). Do not use an airtight bandage (such as a plastic-covered bandage).",
      ".Wash your hands before and after use. If you are treating a hand infection, only wash your hands before use. Do not get it in your eyes. If you do, rinse your eyes with plenty of cool tap water. Use it as directed on the prescription label at the same time every day. Do not use it more often than directed. Use the medication for the full course as directed by your care team, even if you think you are better. Do not stop using it unless your care team tells you to stop it early,",
    ],
    storage:
      "Store in a cool & dry place, below 25°C. Protect from light & moisture.",
    caution:
      "Use as directed by the care team.This medication is for external use only. Do not take it by mouth For external use only.",
    manufacturer: {
      license: "Not Available",
      company: "Not Available",
      location: "Not Available",
      website: "Not Available",
    },
  },
  {
    id: 5,
    name: "WELLRAFT",
    images: [Well],
    composition: [
      "Each 5ml contains",
      "Sodium Alginate - 250 mg",
      "Sodium Bicarbonate - 133.5 mg",
      "Calcium Carbonate - 80 mg",
      "WellRaft Oral Suspension Mint Sugar Free is a combination of alginic acid, calcium carbonate, and sodium bicarbonate. Alginic acid forms a protective foam layer that floats on top of the contents of the stomach",
      "WellRaft Suspension Sugar Free Mint Flavour works by neutralising excess stomach acid. It also forms a protective barrier over the stomach layers which soothes burning pain in your chest. As a result, it helps in the management of gastrointestinal symptoms like acidity, acid reflux, heartburn and indigestion.",
    ],
    color: "Erythrosine",
    dosage:
      "WellRaft Oral Suspension Mint Sugar Free may be taken with or without food. Take it in the dose and duration as advised by the doctor. Children below 12 years of age should take only if the doctor advises it. Continue taking the medicine for as long as your doctor recommends.",
    storage:
      "Store in a cool & dry place, below 25°C. Protect from light & moisture.",
    caution:
      "SCHEDULE H PRESCRIPTION DRUG - CAUTION: Not to be sold by retail without the prescription of a Registered Medical Practitioner.",
    manufacturer: {
      license: "Not Available",
      company: "Not Available",
      location: "Not Available",
      website: "Not Available",
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
      <h2 className="products-head">Our Products</h2>
      <p className="products-subhead">
        At MediqemPharma, we are committed to providing world-class
        pharmaceutical products that play a vital role in improving health.
      </p>
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
      <div className="why-choose-us">
        <h2>Why Choose MediqemPharma?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src={Why} alt="Trust" className="feature-icon" />
            <h3>Trusted by Experts</h3>
            <p>Our products are backed by rigorous clinical research.</p>
          </div>
          <div className="feature-card">
            <img src={Quality} alt="Quality" className="feature-icon" />
            <h3>Quality Assurance</h3>
            <p>All products meet international quality standards.</p>
          </div>
          <div className="feature-card">
            <img src={Inno} alt="Innovation" className="feature-icon" />
            <h3>Innovation in Healthcare</h3>
            <p>We strive to develop cutting-edge pharmaceutical solutions.</p>
          </div>
        </div>
      </div>
      <div className="photography-showcase">
        <h2>Manufacturing Process</h2>
        <div className="photo-grid">
          <img src={Dye} alt="Facility 1" />
          <img src={Weight} alt="Facility 2" />
          <img src={Compact} alt="Facility 3" />
          <img src={eject} alt="Facility 4" />
        </div>
      </div>
      <Pform />
    </>
  );
};

export default Productpage1;

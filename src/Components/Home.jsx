import React, { useRef } from "react";
import "../Components/Home.css";

const Home = () => {
  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Welcome to MediqemPharma</h1>
          <p className="home-subtitle">"Committed to quality"</p>
          <button className="know-more-btn" onClick={scrollToNextSection}>
            Know More
          </button>
        </div>
      </div>

      {/* Next Section */}
      <div ref={nextSectionRef} className="next-section">
        <h2>Next Section</h2>
        <p>This is where more content will be.</p>
      </div>
    </div>
  );
};

export default Home;

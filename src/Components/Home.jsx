import React, { useRef } from "react";
import "../Components/Home.css";
import First from '../Components/Homepages/Firstpart.jsx';
import Foot from '../Components/Footer.jsx'




const Home = () => {
  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <div>
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Welcome to MediqemPharma</h1>
          <p className="home-subtitle">"Committed to quality"</p>
          <button className="know-more-home" onClick={scrollToNextSection}>
            Know More
          </button>
        </div>
      </div>
      
      <div ref={nextSectionRef}>
      <First />
      </div>
    </div>
    <Foot/>
    </>
  );
};

export default Home;

import React from "react";
import "./Navbar.css";
import Logo from "../assets/Medilogo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="MediqemPharma Logo" className="logo-image" />
        <h1 className="navbar-title"></h1>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

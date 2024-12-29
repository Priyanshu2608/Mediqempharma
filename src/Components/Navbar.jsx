import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/Medilogo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleNavigation = (path) => {
    setLoading(true);

    // Simulate a delay before navigating
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 1000); // 1-second delay (you can adjust this)
  };

  return (
    <nav className="navbar">
      {/* Make the logo clickable to route to Home */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={Logo} alt="MediqemPharma Logo" className="logo-image" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/");
            }}
            className={loading ? "loading" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/products");
            }}
            className={loading ? "loading" : ""}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/contact");
            }}
            className={loading ? "loading" : ""}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/about");
            }}
            className={loading ? "loading" : ""}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

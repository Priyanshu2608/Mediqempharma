import React from "react";
import "./Footer.css";
import Logo from "../assets/Medilogo.png"; // Correct path to your logo

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Footer Logo */}
                <div className="footer-logo">
                    <img src={Logo} alt="MediqemPharma Logo" className="footer-logo-image" />
                    <h1>MediqemPharma</h1>
                    <p>Committed to Quality</p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p><strong>Email:</strong> info@mediqempharma.com</p>
                    <p><strong>Phone:</strong> +91 12345 67890</p>
                    <p><strong>Address:</strong> #17, Street No.1, East Chander Nagar, Near Community Center, New Delhi-110051</p>
                </div>

                {/* Social Media Icons */}
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} MediqemPharma. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

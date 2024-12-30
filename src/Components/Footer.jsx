import React from "react";
import "./Footer.css";
import Logo from "../assets/Medilogo.png"; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                
                <div className="footer-logo">
                    <img src={Logo} alt="MediqemPharma Logo" className="footer-logo-image" />
                    <h1>MediqemPharma</h1>
                    <p>Committed to Quality</p>
                </div>

                
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

               
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p><strong>Email:</strong> info@mediqempharma.com</p>
                    <p><strong>Phone:</strong> +91 99885 57354</p>
                    <p><strong>Address:</strong> #17, Street No.1, East Chander Nagar, Near Community Center, New Delhi-110051</p>
                </div>

                
                
            </div>

            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} MediqemPharma. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

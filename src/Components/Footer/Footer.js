import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>About Us</h4>
            <p>
              We are a document management system company committed to helping
              you organize and manage your documents efficiently.
            </p>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/documents">Documents</a>
              </li>
              <li>
                <a href="/documentview">Add New Document</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>Email: support@documentsystem.com</p>
            <p>Phone: +123-456-4545</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Document Management System. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

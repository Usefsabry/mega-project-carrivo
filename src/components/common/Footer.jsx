import React from "react";
import logo from "../../assets/images/logo2.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + tagline */}
        <div className="footer-logo">
          <div className="logo-row">
            <span className="logo-composite">
              <img src={logo} alt="Carrivo logo" className="logo-icon-wave" />
            </span>
          </div>
          <p>Find Your Path, Shape Your Future</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div className="footer-col">
            <p className="footer-title">Quick Links</p>
            <a href="#">Career Paths</a>
            <a href="#">Mentors</a>
            <a href="#">Career Hub</a>
            <a href="#">Personality Test</a>
            <a href="#">About Us</a>
          </div>
          <div className="footer-col">
            <p className="footer-title">Support</p>
            <a href="#">Help Center</a>
            <a href="#">FAQs</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Settings</a>
          </div>
          <div className="footer-col">
            <p className="footer-title">Connect</p>
            <div className="footer-social">
              <a href="#">G</a>
              <a href="#">W</a>
              <a href="#">F</a>
              <a href="#">in</a>
            </div>
          </div>
        </div>
      </div>

      <hr className="footer-separator" />
      <p className="footer-copyright">
        © 2025 Carrivo. All rights reserved
      </p>
    </footer>
  );
}

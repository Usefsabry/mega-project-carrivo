import React from "react";
import logoStar from "../../assets/images/image.jpg";        // النجمة البرتقالية
import logoWave1 from "../../assets/images/white.jpg";   // الموجة الزرقاء
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="logo-row">
            {/* علامة Carrivo: الموجة وفي أعلاها النجمة مركّبة */}
            <span className="logo-composite">
              <img src={logoWave1} alt="wave" className="logo-icon-wave" />
              <img src={logoStar} alt="star" className="logo-icon-star" />
            </span>
            <span className="logo-footer">Carrivo</span>
          </div>
          <p>Find Your Path, Shape Your Future</p>
        </div>
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
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Settings</a>
          </div>
          <div className="footer-col">
            <p className="footer-title">Connect</p>
            <div className="footer-social">
              <span>G</span>
              <span>W</span>
              <span>F</span>
              <span>in</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer-separator" />
      <p className="footer-copyright">© 2025 Carrivo. All rights reserved</p>
    </footer>
  );
}

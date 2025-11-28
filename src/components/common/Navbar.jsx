import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logoStar from "../../assets/images/image.jpg";        // النجمة البرتقالية
import logoWave from "../../assets/images/image (1).jpg";   // الموجة الزرقاء

import "./Navbar.css";
import { AuthContext } from "../../Context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => navigate("/")}>
  <span className="logo-composite">
    <img src={logoWave} alt="wave" className="logo-icon-wave" />
    <img src={logoStar} alt="star" className="logo-icon-star" />
  </span>
  <span className="logo-text">Carrivo</span>
</div>

        <ul className="nav-links">
          <li onClick={() => navigate("/paths")}>Career Paths</li>
          <li onClick={() => navigate("/mentors")}>Mentors</li>
          <li onClick={() => navigate("/hub")}>Career Hub</li>
          <li onClick={() => navigate("/about")}>About Us</li>
        </ul>
        <div className="nav-buttons">
          {!isLoggedIn ? (
            <>
              <button className="btn login" onClick={() => navigate("/login")}>Log in</button>
              <button className="btn signup" onClick={() => navigate("/signup")}>Sign up</button>
            </>
          ) : (
            
            <span className="navbar-welcome">Welcome!</span>
          )}
        </div>
      </div>
    </nav>
  );
}

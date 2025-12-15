import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

// ICON IMAGES
import alertIcon from "../../assets/images/alert.png";
import profileIcon from "../../assets/images/profile.png";

// LOGO
import logo from "../../assets/images/logo.png";

import "./Navbar.css";
import { getNotificationsCount } from "../../api/index";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useContext(AuthContext);
  const [notifCount, setNotifCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) return;
    getNotificationsCount()
      .then((data) => {
        setNotifCount(data.count ?? 0);
      })
      .catch(() => setNotifCount(0));
  }, [isLoggedIn]);

  // دالة للتحقق من اللينك النشط
  const isActive = (path) => {
    return location.pathname === path;
  };

  // دالة للتنقل وإغلاق القائمة
  const handleNavigate = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  // Toggle menu
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // إغلاق القائمة عند تغيير المسار
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // إغلاق القائمة عند الضغط على ESC ومنع scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="crv-navbar">
      <div className="crv-navbar-container">
        <div className="crv-navbar-box">

          {/* LOGO */}
          <div className="crv-logo" onClick={() => handleNavigate("/")}>
            <img src={logo} alt="Carrivo Logo" className="crv-logo-img" />
          </div>

          {/* NAVIGATION LINKS - في النص */}
          <ul className="crv-navlinks">
            <li 
              onClick={() => handleNavigate("/")}
              className={isActive("/") ? "active" : ""}
            >
              Home
            </li>
            <li 
              onClick={() => handleNavigate("/paths")}
              className={isActive("/paths") ? "active" : ""}
            >
              Career Paths
            </li>
            <li 
              onClick={() => handleNavigate("/mentors")}
              className={isActive("/mentors") ? "active" : ""}
            >
              Mentors
            </li>
            <li 
              onClick={() => handleNavigate("/career-hub")}
              className={isActive("/career-hub") ? "active" : ""}
            >
              Career Hub
            </li>
            <li 
              onClick={() => handleNavigate("/about")}
              className={isActive("/about") ? "active" : ""}
            >
              About Us
            </li>
          </ul>

          {/* RIGHT SECTION */}
          <div className="crv-right-section">
            {/* Auth Buttons / Icons */}
            {!isLoggedIn ? (
              <div className="crv-auth-buttons">
                <button className="crv-btn crv-login" onClick={() => handleNavigate("/login")}>
                  Log in
                </button>
                <button className="crv-btn crv-signup" onClick={() => handleNavigate("/signup")}>
                  Sign up
                </button>
              </div>
            ) : (
              <div className="crv-icons">
                <span className="crv-icon" onClick={() => handleNavigate("/notifications")}>
                  <img src={alertIcon} className="crv-icon-img" alt="notifications" />
                  {notifCount > 0 && <span className="crv-badge">{notifCount}</span>}
                </span>

                <span className="crv-icon" onClick={() => handleNavigate("/dashboard")}>
                  <img src={profileIcon} className="crv-icon-img" alt="profile" />
                </span>
              </div>
            )}

            {/* BURGER ICON */}
            <button 
              className={`crv-burger ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay - دايماً موجود بس بيظهر ويخفي */}
      <div 
        className={`crv-mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Content - دايماً موجود بس بينزلق */}
      <div className={`crv-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="crv-mobile-links">
          <li 
          onClick={() => handleNavigate("/")}
            className={isActive("/") ? "active" : ""}
          >
            Home
          </li>   
         
          <li 
            onClick={() => handleNavigate("/paths")}
            className={isActive("/paths") ? "active" : ""}
          >
            Career Paths
          </li>
          <li 
            onClick={() => handleNavigate("/mentors")}
            className={isActive("/mentors") ? "active" : ""}
          >
            Mentors
          </li>
          <li 
            onClick={() => handleNavigate("/career-hub")}
            className={isActive("/career-hub") ? "active" : ""}
          >
            Career Hub
          </li>
          <li 
            onClick={() => handleNavigate("/about")}
            className={isActive("/about") ? "active" : ""}
          >
            About Us
          </li>
        </ul>

        {/* Auth في Mobile Menu */}
        {!isLoggedIn && (
          <div className="crv-mobile-auth">
            <button className="crv-btn crv-login" onClick={() => handleNavigate("/login")}>
              Log in
            </button>
            <button className="crv-btn crv-signup" onClick={() => handleNavigate("/signup")}>
              Sign up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
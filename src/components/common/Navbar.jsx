import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

// ICON IMAGES
import alertIcon from "../../assets/images/alert.png";
import profileIcon from "../../assets/images/profile.png";

// LOGO
import logoStar from "../../assets/images/image.jpg";
import logoWave from "../../assets/images/image (1).jpg";

import "./Navbar.css";
import { getNotificationsCount } from "../../api/index";

export default function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const [notifCount, setNotifCount] = React.useState(0);

  console.log("alertIcon:", alertIcon); // 🔥 اختبر المسار

  React.useEffect(() => {
    if (!isLoggedIn) return;
    getNotificationsCount()
      .then((data) => {
        // على حسب شكل الريسبونس، عدّلي الاسم (مثلاً data.count)
        setNotifCount(data.count ?? 0);
      })
      .catch(() => setNotifCount(0));
  }, [isLoggedIn]);

  return (
    <nav className="crv-navbar">
      <div className="crv-navbar-box">

        {/* LOGO */}
        <div className="crv-logo" onClick={() => navigate("/")}>
          <span className="crv-logo-iconset">
            <img src={logoWave} alt="wave" className="crv-logo-wave" />
            <img src={logoStar} alt="star" className="crv-logo-star" />
          </span>
          <span className="crv-logo-text">Carrivo</span>
        </div>

        {/* LINKS */}
        <ul className="crv-navlinks">
          <li onClick={() => navigate("/paths")}>Career Paths</li>
          <li onClick={() => navigate("/mentors")}>Mentors</li>
          <li onClick={() => navigate("/hub")}>Career Hub</li>
          <li onClick={() => navigate("/about")}>About Us</li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="crv-buttons">
          {!isLoggedIn ? (
            <>
              <button className="crv-btn crv-login" onClick={() => navigate("/login")}>
                Log in
              </button>
              <button className="crv-btn crv-signup" onClick={() => navigate("/signup")}>
                Sign up
              </button>
            </>
          ) : (
            <div className="crv-icons">
              <span className="crv-icon" onClick={() => navigate("/notifications")}>
                <img src={alertIcon} className="crv-icon-img" alt="notifications" />
                {notifCount > 0 && <span className="crv-badge">{notifCount}</span>}
              </span>

              <span className="crv-icon" onClick={() => navigate("/dashboard")}>
                <img src={profileIcon} className="crv-icon-img" alt="profile" />
              </span>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}

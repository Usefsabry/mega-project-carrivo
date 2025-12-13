import React from "react";
import "./../styles/StudentDashboard.css";

import logo from "../assets/images/logo.png";
import careerImg from "../assets/images/Career.jpg";
import DashboardIcon from "../assets/images/Required Skills.png"; 
import ProfileIcon from "../assets/images/profile2.png";
import NotificationsIcon from "../assets/images/Notifications.png";
import SettingsIcon from "../assets/images/setting.png";
import RoadmapeIcon from "../assets/images/Roadmap.png";
import SavedResourcesIcon from "../assets/images/saved.png";
import AchievementsIcon from "../assets/images/Achievements.png";
import Mentor from "../assets/images/mentor.png";

import {
  getUserProfile,
  getUserCurrentPath,
  getUserPathOverview,
  getUserMentor,
  getUserQuickAccess,
} from "../api/index";


const CircularProgress = ({ percentage, label, subLabel }) => {
  return (
    <div className="circle-item">
      <div className="circle-chart" style={{ "--percent": percentage }}>
        <div className="circle-inner">
          <span className="circle-text">{percentage}%</span>
        </div>
      </div>
      <p className="circle-label">{label}</p>
      {subLabel && <span className="circle-sub">{subLabel}</span>}
    </div>
  );
};

export default function StudentDashboard() {
  const [profile, setProfile] = React.useState(null);
  const [currentPath, setCurrentPath] = React.useState(null);
  const [overview, setOverview] = React.useState(null);
  const [mentor, setMentor] = React.useState(null);

  const defaultOverview = {
    topRow: [
      { title: "UI/UX Fundamentals", percent: 100 },
      { title: "Design Thinking Basics", percent: 100 },
      { title: "UX Research", percent: 100 },
      { title: "Intro to Figma", percent: 100 },
    ]
  };

  React.useEffect(() => {
    (async () => {
      try {
        const [p, cp, ov, m] = await Promise.all([
          getUserProfile(),
          getUserCurrentPath(),
          getUserPathOverview(),
          getUserMentor(),
        ]);
        setProfile(p);
        setCurrentPath(cp);
        setOverview(ov || defaultOverview); 
        setMentor(m);
      } catch (e) {
        console.error("dashboard load error", e);
      }
    })();
  }, []);

  return (
    <div className="dash-container">
      {/* Sidebar */}
      <aside className="dash-sidebar">
        <div>
          <div className="dash-logo">
            <img src={logo} alt="Carrivo Logo" className="logo-img" />
           
          </div>

          <nav className="dash-nav">
            <button className="nav-item active">
              <img src={DashboardIcon} alt="Dashboard" />
              <span>Dashboard</span>
            </button>
            <button className="nav-item">
              <img src={ProfileIcon} alt="Profile" />
              <span>Profile</span>
            </button>
            <button className="nav-item">
              <img src={NotificationsIcon} alt="Notifications" />
              <span>Notifications</span>
            </button>
            <button className="nav-item">
              <img src={SettingsIcon} alt="Settings" />
              <span>Settings</span>
            </button>
          </nav>
        </div>

        <button className="logout-btn">
          <span className="logout-icon">⎋</span> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="dash-content">
        
        {/* Header Section */}
        <header className="dash-header">
          <div className="user-welcome">
            <div className="user-avatar-placeholder">
               <img src={Mentor} alt="mentor" />
            </div>
            <div>
              <h1>Welcome Back, {profile?.fullName || "Mohamed"}!</h1>
              <p>Your progress is looking great. Keep up the momentum!</p>
            </div>
          </div>
        </header>

        {/* Current Path Card */}
<section className="main-card path-card">

  <div className="path-info">
    <span className="badge-blue">Your Current Path</span>
    <h2>{currentPath?.title || "UI/UX Design Path"}</h2>
    <p className="path-desc">
      {currentPath?.description || "UI/UX Design focuses on creating intuitive..."}
    </p>
    
    <div className="progress-section">
      <div className="progress-labels">
        <span>Learning Progress</span>
        <span className="percent-text">70%</span>
      </div>
      <div className="progress-bar-bg">
        <div className="progress-bar-fill" style={{ width: "70%" }}></div>
      </div>
    </div>

    <button className="btn-primary">Continue Learning</button>
  </div>

  <div className="path-image">
    <img src={careerImg} alt="UI/UX Illustration" />
  </div>
</section>

        {/* Middle Section: Grid of Overview & Mentor */}
        <div className="middle-section">
          
          {/* Learning Overview */}
          <section className="main-card overview-card">
            <span className="badge-light">Learning Overview</span>
            
            <div className="overview-grid-top">
              {/* Top Row Circles */}
              {(overview?.topRow || defaultOverview.topRow).map((item, idx) => (
                <CircularProgress key={idx} percentage={item.percent} label={item.title} />
              ))}
            </div>

            <div className="overview-grid-bottom">
              {/* Bottom Row: 1 Circle + 2 Text Stats */}
              <CircularProgress percentage={50} label="Visual Design Principles" />
              
              <div className="stat-item">
                <span className="stat-val">0%</span>
                <span className="stat-label">Wireframing</span>
              </div>
              
              <div className="stat-item">
                <span className="stat-val">0%</span>
                <span className="stat-label">Prototyping</span>
              </div>
            </div>
          </section>

          {/* Mentor Card */}
          <section className="main-card mentor-card">
            <span className="badge-light">Your Mentor</span>
            <div className="mentor-empty-state">
              <h3>You Don't Have a Mentor Yet!</h3>
              <p>Find a mentor to guide your next steps</p>
              <button className="btn-primary">Find a Mentor</button>
            </div>
          </section>
        </div>

        {/* Quick Access */}
        <div className="quick-access-section">
            <h3>Quick Access</h3>
            <div className="quick-cards">
              <div className="quick-card">
                <div className="icon-box"><img src={RoadmapeIcon} alt="icon"/></div>
                <span>My Roadmap</span>
              </div>
              <div className="quick-card">
                <div className="icon-box"><img src={SavedResourcesIcon} alt="icon"/></div>
                <span>Saved Resources</span>
              </div>
              <div className="quick-card">
                <div className="icon-box"><img src={AchievementsIcon} alt="icon"/></div>
                <span>Achievements</span>
              </div>
            </div>
        </div>

      </main>
    </div>
  );
}
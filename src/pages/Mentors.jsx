import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import "../styles/Mentors.css";

// Mentor Images
import m1 from "../assets/images/Farid-Hassan.png";
import m2 from "../assets/images/farah-nour.png";
import m3 from "../assets/images/omar.png";
import m4 from "../assets/images/lina.png";
import m5 from "../assets/images/jana.png";
import m6 from "../assets/images/zyad.png";
import m7 from "../assets/images/mariam.png";
import m8 from "../assets/images/yousef.png";

// Icons
import starIcon from "../assets/images/star.png";

const STATIC_MENTORS = [
  { id: 1, name: "Farid Hassan", title: "Senior UI/UX Designer", rating: 4.9, price: "300$", img: m1 },
  { id: 2, name: "Farah Nour", title: "Senior UI/UX Designer", rating: 4.7, price: "250$", img: m2 },
  { id: 3, name: "Omar Yassin", title: "UI/UX Lead", rating: 4.9, price: "400$", img: m3 },
  { id: 4, name: "Lina Hossam", title: "Senior UI/UX Designer", rating: 4.8, price: "300$", img: m4 },
  { id: 5, name: "Jana Salma", title: "Senior UI/UX Designer", rating: 4.6, price: "250$", img: m5 },
  { id: 6, name: "Ziad Tarek", title: "Senior UI/UX Designer", rating: 4.7, price: "300$", img: m6 },
  { id: 7, name: "Mariam Adel", title: "Senior UI/UX Designer", rating: 4.8, price: "350$", img: m7 },
  { id: 8, name: "Youssef Karim", title: "Senior Product Designer", rating: 4.9, price: "500$", img: m8 },
];

export default function Mentors() {

  const [search, setSearch] = useState("");

  const filteredMentors = STATIC_MENTORS.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="mentors-wrapper">
        <h1 className="mentors-title">Find Your Mentor</h1>
        <p className="mentors-subtitle">
          Search and connect with experienced professionals in your learning path,
          to guide your next steps and support your growth
        </p>

        {/* Search + Track */}
        <div className="mentors-top">
          <div className="mentor-search-wrapper">
            <span className="search-icon">&#128269;</span>
            <input
              type="text"
              className="mentor-search"
              placeholder="Search mentors by name or company"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="track-btn">
            <span className="track-label">Track:</span>
            <span className="track-value">UI/UX Design</span>
          </button>
        </div>

        {/* Filters */}
        <div className="mentor-filters">
          <button className="filter-chip">
            Sort By <span className="filter-arrow">⌄</span>
          </button>
          <button className="filter-chip">
            Experience Level <span className="filter-arrow">⌄</span>
          </button>
          <button className="filter-chip">
            Availability <span className="filter-arrow">⌄</span>
          </button>
          <button className="filter-chip">
            Rating <span className="filter-arrow">⌄</span>
          </button>
          <button className="filter-chip">
            Price <span className="filter-arrow">⌄</span>
          </button>
          <button className="clear-btn">Clear Filters</button>
        </div>

        {/* Cards */}
        <div className="mentor-grid">
          {filteredMentors.map((m) => (
            <div className="mentor-card" key={m.id}>
              <div className="mentor-avatar-wrapper">
                <img src={m.img} alt={m.name} className="mentor-img" />
              </div>

              <h3 className="mentor-name">{m.name}</h3>
              <p className="mentor-title">{m.title}</p>

              <div className="mentor-info">
                <span className="mentor-rating">
                  <img src={starIcon} alt="star" className="mentor-star" />
                  {m.rating}
                </span>
                <span className="mentor-price">{m.price}</span>
              </div>

              <button className="request-btn">Request Session</button>
              <button className="profile-btn">View Profile</button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

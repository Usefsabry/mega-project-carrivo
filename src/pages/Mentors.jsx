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

// Arrow SVG Component
const ArrowIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.9999 17.5625L22.5996 10.9629L24.4852 12.8485L15.9999 21.3339L7.51465 12.8485L9.40026 10.9629L15.9999 17.5625Z" fill="#00001C"/>
  </svg>
);

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

        {/* Search Bar */}
        <div className="mentors-search-row">
          <div className="mentor-search-wrapper">
            <span className="search-icon">
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.0414 22.1561L29.7517 27.8663L27.8661 29.7519L22.1558 24.0417C20.1026 25.6843 17.4987 26.667 14.6667 26.667C8.04275 26.667 2.66675 21.291 2.66675 14.667C2.66675 8.04299 8.04275 2.66699 14.6667 2.66699C21.2907 2.66699 26.6667 8.04299 26.6667 14.667C26.6667 17.499 25.6841 20.1029 24.0414 22.1561ZM21.3663 21.1667C22.9967 19.4865 24.0001 17.1945 24.0001 14.667C24.0001 9.51032 19.8234 5.33366 14.6667 5.33366C9.51008 5.33366 5.33341 9.51032 5.33341 14.667C5.33341 19.8237 9.51008 24.0003 14.6667 24.0003C17.1942 24.0003 19.4862 22.997 21.1665 21.3666L21.3663 21.1667Z" fill="#4D4D60"/>
              </svg>
            </span>
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
          <div className="flater">
          <button className="filter-chip">
            Sort By <span className="filter-arrow"><ArrowIcon /></span>
          </button>
          <button className="filter-chip">
            Experience Level <span className="filter-arrow"><ArrowIcon /></span>
          </button>
          <button className="filter-chip">
            Availability <span className="filter-arrow"><ArrowIcon /></span>
          </button>
          <button className="filter-chip">
            Rating <span className="filter-arrow"><ArrowIcon /></span>
          </button>
          <button className="filter-chip">
            Price <span className="filter-arrow"><ArrowIcon /></span>
          </button>
          </div>

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
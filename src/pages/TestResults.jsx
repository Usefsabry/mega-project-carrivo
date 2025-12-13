import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TestResults.css";
import CareerImg from "../assets/images/Career.jpg";
// import { STATIC_PATHS } from "../constants/pathsList";


// ====== STATIC 24 TRACKS ======
import STATIC_PATHS from "../constants/pathsList";


import { submitTestApi } from "../api/index";

export default function TestResults() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [recommended, setRecommended] = useState([]); // التراكات اللي هترجع

  const [selectedCareer, setSelectedCareer] = useState(null);

  useEffect(() => {
    const savedAnswers = localStorage.getItem("testAnswers");
    if (!savedAnswers) {
      navigate("/");
      return;
    }

    async function fetchResults() {
      try {
        const answers = JSON.parse(savedAnswers);

        const result = await submitTestApi(answers);

        const returnedTrackIds = result?.recommendedTracks || [];

        const filteredTracks = STATIC_PATHS.filter((t) =>
          returnedTrackIds.includes(t.id)
        );

        setRecommended(filteredTracks);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    }

    fetchResults();
  }, [navigate]);

  if (loading)
    return (
      <div className="test-results-container">
        <p>Loading your result...</p>
      </div>
    );

  return (
    <div className="test-results-container">
      <h1 className="results-title">Your Personalized Recommendation</h1>
      <p className="results-subtitle">
        Based on your personality test results, here are the tracks that match you best!
      </p>

      {/* === Dynamic Cards === */}
      <div className="careers-grid">
        {recommended.map((career) => (
          <div key={career.id} className="career-card">
            <div className="career-inner">
              <div className="career-icon">
                <img src={career.icon} alt={career.title} />
              </div>

              <div className="career-separator" />

              <h3 className="career-title">{career.title}</h3>
              <p className="career-description">{career.desc}</p>
            </div>

            <button className="view-details-btn" onClick={() => setSelectedCareer(career)}>
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* POPUP */}
      {selectedCareer && (
        <div className="popup-overlay" onClick={() => setSelectedCareer(null)}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={() => setSelectedCareer(null)}>
              ×
            </button>

            <div className="popup-body">
              <div className="popup-left">
                <img src={CareerImg} className="popup-large-img" alt={selectedCareer.title} />
              </div>

              <div className="popup-right">
                <h2 className="popup-title">{selectedCareer.title} Path</h2>
                <p className="popup-description">{selectedCareer.desc}</p>

                <button className="popup-start-btn">Start Learning</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

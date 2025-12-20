import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TestResults.css";
import CareerImg from "../assets/images/Career.jpg";
import HeaderImg from "../assets/images/roooot.png";
import STATIC_PATHS from "../constants/pathsList";
import { submitTestApi } from "../api/index";
import { useProgress } from "../components/ProgressContext";

export default function TestResults() {
  const navigate = useNavigate();
  const { answers } = useProgress();

  const [loading, setLoading] = useState(true);
  const [recommended, setRecommended] = useState([]);
  const [selectedCareer, setSelectedCareer] = useState(null);

  useEffect(() => {
    // Check if all answers are filled
    const answeredCount = Object.values(answers).filter(answer => answer !== '').length;
    if (answeredCount === 0) {
      console.log("❌ No answers found");
      navigate("/");
      return;
    }

    async function fetchResults() {
      try {
        console.log("📤 Sending request with answers:", answers);

        // API Call simulation or actual call
        const result = await submitTestApi(answers);
        console.log("📥 API Response:", result);

        const returnedTrackIds = result?.recommendedTracks || result?.tracks || result || [];

        if (!Array.isArray(returnedTrackIds)) {
          console.error("❌ Invalid response format");
          setLoading(false);
          return;
        }

        const filteredTracks = STATIC_PATHS.filter((t) =>
          returnedTrackIds.includes(t.id)
        );

        setRecommended(filteredTracks);
        setLoading(false);
      } catch (e) {
        console.error("❌ Error fetching results:", e);
        setLoading(false);
      }
    }

    fetchResults();
  }, [navigate, answers]);

  if (loading)
    return (
      <div className="test-results-container">
        <p>Loading your result...</p>
      </div>
    );

  return (
    <div className="test-results-container">
      {/* Header Image */}
      <div className="results-header-container">
        <img src={HeaderImg} alt="Recommendation Header" className="results-header-img" />
      </div>

      <h1 className="results-title">Your Personalized Recommendation</h1>
      <p className="results-subtitle">
        Based on your personality test results, here are the top three career paths that best align with you!
      </p>

      {/* === Dynamic Cards === */}
      {recommended.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <p style={{ color: "#666", fontSize: "18px" }}>
            No recommendations found. Please try again.
          </p>
        </div>
      ) : (
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
      )}

      {/* Retake Test Button */}
      <div className="retake-container">
        <button className="retake-btn" onClick={() => navigate('/assessment-start')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 4v6h-6"></path>
            <path d="M1 20v-6h6"></path>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
          </svg>
          Retake the Test
        </button>
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

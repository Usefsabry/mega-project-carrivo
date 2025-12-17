import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TestResults.css";
import CareerImg from "../assets/images/Career.jpg";
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

        const result = await submitTestApi(answers);
        console.log("📥 API Response:", result);

        // Handle different response formats
        const returnedTrackIds = result?.recommendedTracks || result?.tracks || result || [];
        console.log("🎯 Track IDs received:", returnedTrackIds);

        if (!Array.isArray(returnedTrackIds)) {
          console.error("❌ Invalid response format. Expected array, got:", typeof returnedTrackIds);
          setLoading(false);
          return;
        }

        const filteredTracks = STATIC_PATHS.filter((t) =>
          returnedTrackIds.includes(t.id)
        );
        console.log("✅ Filtered tracks:", filteredTracks);

        if (filteredTracks.length === 0) {
          console.warn("⚠️ No tracks matched the returned IDs");
        }

        setRecommended(filteredTracks);
        setLoading(false);
      } catch (e) {
        console.error("❌ Error fetching results:", e);
        console.error("Error details:", e.message, e.stack);
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
      <h1 className="results-title">Your Personalized Recommendation</h1>
      <p className="results-subtitle">
        Based on your personality test results, here are the tracks that match you best!
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

import '../styles/CareerAssessmentStart.css';

import headerImage from '../assets/images/Gbefore test.png'; 
import clockIcon from '../assets/images/timer-line.svg'; 
import smileIcon from '../assets/images/emotion-line.svg'; 
import userIcon from '../assets/images/user-heart-line.svg'; 

const CareerAssessmentStart = () => {
  const handleStartAssessment = () => {
    window.location.href = '/assessment/question/1';
  };

  const handleNotReady = () => {
    window.location.href = '/';
  };

  return (
    <div className="assessment-start-container">
      <div className="assessment-start-content">
        
        {/* Header Image */}
        <div className="header-image">
          <img src={headerImage} alt="Career Path" />
        </div>

        {/* Title */}
        <h1 className="main-title">Ready to Discover Your Path?</h1>
        <p className="subtitle">
          This assessment is designed to help you understand your strengths and find a career
          that truly fits you
        </p>

        {/* Info Box */}
        <div className="info-box">
          <h2 className="info-title">Before You Begin</h2>

          <div className="info-items">

            {/* Item 1 */}
            <div className="info-item">
              <div className="info-icon">
                <img src={clockIcon} alt="Clock" />
              </div>
              <div className="info-content">
                <h3>10 Minutes Estimate</h3>
                <p>
                  The assessment takes about 10 minutes to complete. Please set aside enough time to finish in one
                  sitting.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="info-item">
              <div className="info-icon">
                <img src={smileIcon} alt="Smile" />
              </div>
              <div className="info-content">
                <h3>Answer Honestly</h3>
                <p>
                  Your first instinct is often the best. Be true to yourself for the most accurate and helpful results.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="info-item">
              <div className="info-icon">
                <img src={userIcon} alt="User" />
              </div>
              <div className="info-content">
                <h3>Find a Quiet Place</h3>
                <p>
                  For the best experience, find a comfortable and distraction-free environment before you start.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Buttons */}
        <div className="button-container">
          <button className="btn-secondary" onClick={handleNotReady}>
            I'm not ready yet
          </button>
          <button className="btn-primary" onClick={handleStartAssessment}>
            Start Assessment
          </button>
        </div>

      </div>
    </div>
  );
};

export default CareerAssessmentStart;

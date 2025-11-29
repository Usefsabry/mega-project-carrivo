import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TestResults.css';

import uiuxIcon from '../assets/images/uiux-icon.jpg';        // صورة الهيرو
import card1Icon from '../assets/images/software-icon.jpg';   // كارد 1
import card2Icon from '../assets/images/marketing-icon.jpg';  // كارد 2
import card3Icon from '../assets/images/career-path.jpg';     // كارد 3

const TestResults = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [testData, setTestData] = useState(null);

  useEffect(() => {
    const testCompleted = localStorage.getItem('testCompleted');
    const savedAnswers = localStorage.getItem('testAnswers');

    if (!testCompleted || !savedAnswers) {
      alert('Please complete the test first!');
      navigate('/');
      return;
    }

    try {
      const answers = JSON.parse(savedAnswers);
      setTestData(answers);
      setLoading(false);
    } catch (error) {
      navigate('/');
    }
  }, [navigate]);

  const careers = [
    {
      id: 1,
      title: 'UI/UX Design',
      icon: card1Icon,
      description:
        'UI/UX Design focuses on creating intuitive, user-centered digital experiences that are both functional and visually engaging.',
    },
    {
      id: 2,
      title: 'Software Development',
      icon: card2Icon,
      description:
        'Software Development transforms ideas into reliable, scalable applications through structured logic, problem-solving, and clean code.',
    },
    {
      id: 3,
      title: 'Digital Marketing',
      icon: card3Icon,
      description:
        'Digital Marketing combines creativity and data-driven strategy to help brands reach, engage, and convert the right audience.',
    },
  ];

  const handleRetakeTest = () => {
    localStorage.removeItem('testAnswers');
    localStorage.removeItem('testCompleted');
    localStorage.removeItem('testCompletionDate');
    localStorage.removeItem('carrivo_test_progress');
    navigate('/test/page1');
  };

  const handleViewDetails = (careerTitle) => {
    alert(`Details page for ${careerTitle} coming soon!`);
  };

  if (loading) {
    return (
      <div className="test-results-container">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading your results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="test-results-container">
      <div className="results-content">
        {/* Hero Image */}
        <div className="results-hero">
          <img src={uiuxIcon} alt="Career Path" className="hero-image" />
        </div>

        {/* Title */}
        <h1 className="results-title">Your Personalized Recommendation</h1>
        <p className="results-subtitle">
          Based on your personality test results, here are the top three career paths that best align with you!
        </p>

        {/* Career Cards */}
        <div className="careers-grid">
          {careers.map((career) => (
            <div key={career.id} className="career-card">
              <div className="career-inner">
                <div className="career-icon">
                  <img src={career.icon} alt={career.title} />
                </div>

                <div className="career-separator" />

                <h3 className="career-title">{career.title}</h3>
                <p className="career-description">{career.description}</p>
              </div>

              <button
                className="view-details-btn"
                onClick={() => handleViewDetails(career.title)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Retake Test Button */}
        <button className="retake-test-btn" onClick={handleRetakeTest}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
              fill="currentColor"
            />
          </svg>
          Retake the Test
        </button>
      </div>
    </div>
  );
};

export default TestResults;

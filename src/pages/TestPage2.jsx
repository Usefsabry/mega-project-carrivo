import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../components/ProgressContext.jsx';
import AnswerButton from '../components/AnswerButton.jsx';
import '../styles/TestPage.css';
import logo from '../assets/images/logo.png';

const TestPage2 = () => {
  const navigate = useNavigate();
  const { answers, updateAnswer, calculateProgress, isPageComplete, saveProgress } = useProgress();

  // Scroll to top when page loads
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const questions = [
    { id: 'page2_q1', text: 'I wouldn\'t mind working 8 hours per day in an office' },
    { id: 'page2_q2', text: 'I like selling things' },
    { id: 'page2_q3', text: 'I enjoy creative writing' },
    { id: 'page2_q4', text: 'I enjoy science' },
    { id: 'page2_q5', text: 'I am quick to take on new responsibilities' },
    { id: 'page2_q6', text: 'I am interested in healing people' },
    { id: 'page2_q7', text: 'I enjoy trying to figure out how things work' },
    { id: 'page2_q8', text: 'I like putting things together or assembling things' },
    { id: 'page2_q9', text: 'I am a creative person' },
    { id: 'page2_q10', text: 'I pay attention to details' },
    { id: 'page2_q11', text: 'I like to do filing or typing' },
    { id: 'page2_q12', text: 'I like to analyze things (problems/situations)' },
    { id: 'page2_q13', text: 'I like to play instruments or sing' },
    { id: 'page2_q14', text: 'I enjoy learning about other cultures' }
  ];

  const handleAnswerChange = (questionId, value) => {
    updateAnswer(questionId, value);
  };

  const handleNext = () => {
    if (isPageComplete(2)) {
      navigate('/test/page3');
    }
  };

  const handlePrevious = () => {
    navigate('/test/page1');
  };

  const handleSave = () => {
    saveProgress();
    alert('Progress saved! You can continue later.');
    navigate('/');
  };

  return (
    <div className="test-page-container">
      <div className="main-head">
        <header className="test-header">
          <div className="test-logo">
            <img src={logo} alt="Carrivo Logo" className="test-logo-image" />
          </div>
          <button className="save-button" onClick={handleSave}>
            Save & Continue Later
          </button>
        </header>
      </div>

      <div className="content">
        <div className="progress-section">
          <div className="progress-info">
            <span className="page-number">Page 2/3</span>
            <span className="progress-percentage">{Math.round(calculateProgress())}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
        </div>

        <div className="hint">
          <span className="hint-label">Hint:</span> Answer based on your true preference. There are no right or wrong answers.
        </div>

        <div className="questions-container">
          {questions.map((question) => (
            <div key={question.id} className="question-card">
              <p className="question-text">{question.text}</p>
              <AnswerButton
                selectedValue={answers[question.id]}
                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                name={question.id}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="navigation-buttons-container">
        <button
          className="previous-button"
          onClick={handlePrevious}
        >
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.77134 9.03763H22V11.7043H5.77134L12.9233 18.562L11.0377 20.7418L0.666748 10.371L11.0377 0L12.9233 1.88561L5.77134 9.03763Z" fill="currentColor" />
          </svg>
          Previous
        </button>

        <button
          className={`next-button ${isPageComplete(2) ? 'enabled' : 'disabled'}`}
          onClick={handleNext}
          disabled={!isPageComplete(2)}
        >
          Next
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2287 9.03763H-8.2016e-05V11.7043H16.2287L9.07672 18.8562L10.9623 20.7418L21.3333 10.371L10.9623 0L9.07672 1.88561L16.2287 9.03763Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestPage2;

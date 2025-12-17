import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../components/ProgressContext.jsx';
import AnswerButton from '../components/AnswerButton.jsx';
import '../styles/TestPage.css';
import logo from '../assets/images/logo.png';
import { submitTestApi } from "../api/index";

const TestPage3 = () => {
  const navigate = useNavigate();
  const { answers, updateAnswer, calculateProgress, isPageComplete, saveProgress } = useProgress();

  const questions = [
    { id: 'page3_q1', text: 'I would like to start my own business' },
    { id: 'page3_q2', text: 'I like to cook' },
    { id: 'page3_q3', text: 'I like acting in plays' },
    { id: 'page3_q4', text: 'I am a practical person' },
    { id: 'page3_q5', text: 'I like working with numbers or charts' },
    { id: 'page3_q6', text: 'I like to get into discussions about issues' },
    { id: 'page3_q7', text: 'I am good at keeping records of my work' },
    { id: 'page3_q8', text: 'I like to lead' },
    { id: 'page3_q9', text: 'I like working outdoors' },
    { id: 'page3_q10', text: 'I would like to work in an office' },
    { id: 'page3_q11', text: 'I\'m good at math' },
    { id: 'page3_q12', text: 'I like helping people' },
    { id: 'page3_q13', text: 'I like to draw' },
    { id: 'page3_q14', text: 'I like to give speeches' }
  ];

  const handleAnswerChange = (questionId, value) => {
    updateAnswer(questionId, value);
  };

  const handleViewResults = () => {
    console.log('🔵 Button clicked!');
    console.log('🔵 Is complete?', isPageComplete(3));
    console.log('🔵 All answers:', answers);
    
    if (isPageComplete(3)) {
      // حفظ البيانات (async - won't block navigation)
      saveProgress();
      
      // Navigate directly
      navigate('/test/results', { replace: true });
      
    } else {
      console.log('❌ Not all questions answered');
      alert('Please answer all questions first!');
    }
  };

  const handlePrevious = () => {
    navigate('/test/page2');
  };

  const handleSave = () => {
    saveProgress();
    alert('Progress saved! You can continue later.');
    navigate('/');
  };

  const handleFinish = async () => {
    if (!isPageComplete(3)) return;
    try {
      await submitTestApi(answers);
      navigate("/test/results");
    } catch (e) {
      alert("Could not submit test. Please try again.");
    }
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
            <span className="page-number">Page 3/3</span>
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
            <path d="M5.77134 9.03763H22V11.7043H5.77134L12.9233 18.8562L11.0377 20.7418L0.666748 10.371L11.0377 0L12.9233 1.88561L5.77134 9.03763Z" fill="currentColor"/>
          </svg>
          Previous
        </button>

        <button 
          className={`next-button view-results-button ${isPageComplete(3) ? 'enabled' : 'disabled'}`}
          onClick={handleViewResults}
          disabled={!isPageComplete(3)}
        >
          View Your Results
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2287 9.03763H-8.2016e-05V11.7043H16.2287L9.07672 18.8562L10.9623 20.7418L21.3333 10.371L10.9623 0L9.07672 1.88561L16.2287 9.03763Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestPage3;

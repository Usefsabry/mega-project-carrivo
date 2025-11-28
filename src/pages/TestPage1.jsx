
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../components/ProgressContext.jsx';
import AnswerButton from '../components/AnswerButton.jsx';
import '../styles/TestPage.css';
import logo from '../assets/images/logo.png'

const TestPage1 = () => {
  const navigate = useNavigate();
  const { answers, updateAnswer, calculateProgress, isPageComplete, saveProgress } = useProgress();

  const questions = [
    { id: 'page1_q1', text: 'I like to work on cars' },
    { id: 'page1_q2', text: 'I like to do puzzles' },
    { id: 'page1_q3', text: 'I am good at working independently' },
    { id: 'page1_q4', text: 'I like to work in teams' },
    { id: 'page1_q5', text: 'I am an ambitious person, I set goals for myself' },
    { id: 'page1_q6', text: 'I like to organize things. (files, desks/offices)' },
    { id: 'page1_q7', text: 'I like to build things' },
    { id: 'page1_q8', text: 'I like to read about art and music' },
    { id: 'page1_q9', text: 'I like to have clear instructions to follow' },
    { id: 'page1_q10', text: 'I like to try to influence or persuade people' },
    { id: 'page1_q11', text: 'I like to do experiments' },
    { id: 'page1_q12', text: 'I like to teach or train people' },
    { id: 'page1_q13', text: 'I like trying to help people solve their problems' },
    { id: 'page1_q14', text: 'I like to take care of animals' }
  ];

  const handleAnswerChange = (questionId, value) => {
    updateAnswer(questionId, value);
  };

  const handleNext = () => {
    if (isPageComplete(1)) {
      navigate('/test/page2');
    }
  };

  const handleSave = () => {
    saveProgress();
    // alert('Progress saved successfully!');
  };

  return (
    <div className="test-page-container">
        <div className="main-head">
      <header className="header">
        <div className="logo">
           <img src={logo} alt="Carrivo Logo" className="logo-image" />
        </div>
        <button className="save-button" onClick={handleSave}>
          Save & Continue Later
        </button>
      </header>
      </div>

      <div className="content">
        <div className="progress-section">
          <div className="progress-info">
            <span className="page-number">Page 1/3</span>
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
          <span className="hint-label">Hint:</span> Answer based on your true preference. There are no right or wrong answer
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
        <div className="next-button-container">
          <button 
            className={`next-button ${isPageComplete(1) ? 'enabled' : 'disabled'}`}
            onClick={handleNext}
            disabled={!isPageComplete(1)}
          >
            Next
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.2287 9.03763H-8.2016e-05V11.7043H16.2287L9.07672 18.8562L10.9623 20.7418L21.3333 10.371L10.9623 0L9.07672 1.88561L16.2287 9.03763Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
  );
};

export default TestPage1;
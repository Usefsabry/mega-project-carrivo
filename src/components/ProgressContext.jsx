import React, { createContext, useState, useContext } from 'react';

const ProgressContext = createContext();

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
};

export const ProgressProvider = ({ children }) => {
  const [answers, setAnswers] = useState({
    // Page 1
    page1_q1: '', page1_q2: '', page1_q3: '', page1_q4: '', page1_q5: '',
    page1_q6: '', page1_q7: '', page1_q8: '', page1_q9: '', page1_q10: '',
    page1_q11: '', page1_q12: '', page1_q13: '', page1_q14: '',
    // Page 2
    page2_q1: '', page2_q2: '', page2_q3: '', page2_q4: '', page2_q5: '',
    page2_q6: '', page2_q7: '', page2_q8: '', page2_q9: '', page2_q10: '',
    page2_q11: '', page2_q12: '', page2_q13: '', page2_q14: '',
    // Page 3
    page3_q1: '', page3_q2: '', page3_q3: '', page3_q4: '', page3_q5: '',
    page3_q6: '', page3_q7: '', page3_q8: '', page3_q9: '', page3_q10: '',
    page3_q11: '', page3_q12: '', page3_q13: '', page3_q14: ''
  });

  const TOTAL_QUESTIONS = 42; 

  const updateAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateProgress = () => {
    const answeredCount = Object.values(answers).filter(answer => answer !== '').length;
    return (answeredCount / TOTAL_QUESTIONS) * 100;
  };

  const getPageAnswers = (pageNumber) => {
    return Object.entries(answers)
      .filter(([key]) => key.startsWith(`page${pageNumber}_`))
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  };

  const isPageComplete = (pageNumber) => {
    const pageAnswers = getPageAnswers(pageNumber);
    return Object.values(pageAnswers).every(answer => answer !== '');
  };

  const saveProgress = () => {
    localStorage.setItem('carrivo_test_progress', JSON.stringify(answers));
    console.log('Progress saved:', answers);
  };

  const loadProgress = () => {
    const saved = localStorage.getItem('carrivo_test_progress');
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  };

  const resetProgress = () => {
    setAnswers({
      page1_q1: '', page1_q2: '', page1_q3: '', page1_q4: '', page1_q5: '',
      page1_q6: '', page1_q7: '', page1_q8: '', page1_q9: '', page1_q10: '',
      page1_q11: '', page1_q12: '', page1_q13: '', page1_q14: '',
      page2_q1: '', page2_q2: '', page2_q3: '', page2_q4: '', page2_q5: '',
      page2_q6: '', page2_q7: '', page2_q8: '', page2_q9: '', page2_q10: '',
      page2_q11: '', page2_q12: '', page2_q13: '', page2_q14: '',
      page3_q1: '', page3_q2: '', page3_q3: '', page3_q4: '', page3_q5: '',
      page3_q6: '', page3_q7: '', page3_q8: '', page3_q9: '', page3_q10: '',
      page3_q11: '', page3_q12: '', page3_q13: '', page3_q14: ''
    });
    localStorage.removeItem('carrivo_test_progress');
  };

  return (
    <ProgressContext.Provider
      value={{
        answers,
        updateAnswer,
        calculateProgress,
        getPageAnswers,
        isPageComplete,
        saveProgress,
        loadProgress,
        resetProgress
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
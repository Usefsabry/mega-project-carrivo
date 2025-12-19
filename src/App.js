import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Login/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";

import { AuthProvider } from "./Context/AuthContext";
import { ProgressProvider } from "./components/ProgressContext";

import TestPage1 from "./pages/TestPage1";
import TestPage2 from "./pages/TestPage2";
import TestPage3 from "./pages/TestPage3";
import TestResults from "./pages/TestResults";
import CareerAssessmentStart from "./pages/CareerAssessmentStart";

import Mentors from "./pages/Mentors";
import AboutUs from "./pages/AboutUs";
import StudentDashboard from "./pages/StudentDashboard";
import CareerPaths from "./pages/CareerPaths";

import CareerHub from "./pages/CareerHub";
import ChatBot from "./components/ChatBot/ChatBot";

// Component to conditionally render ChatBot
function ChatBotWrapper() {
  const location = useLocation();
  const hideChatBotPaths = ['/login', '/signup'];
  
  // Don't show ChatBot on login and signup pages
  if (hideChatBotPaths.includes(location.pathname)) {
    return null;
  }
  
  return <ChatBot />;
}

function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/assessment-start" element={<CareerAssessmentStart />} />

            <Route path="/test/page1" element={<TestPage1 />} />
            <Route path="/test/page2" element={<TestPage2 />} />
            <Route path="/test/page3" element={<TestPage3 />} />
            <Route path="/test/results" element={<TestResults />} />

            <Route path="/mentors" element={<Mentors />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/paths" element={<CareerPaths />} />
            <Route path="/career-hub" element={<CareerHub />} />
          </Routes>
          
          {/* ChatBot - يظهر في كل الصفحات ماعدا Login و Signup */}
          <ChatBotWrapper />
        </Router>
      </ProgressProvider>
    </AuthProvider>
  );
}

export default App;

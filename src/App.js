import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
<<<<<<< HEAD
import Mentors from "./pages/Mentors";
import AboutUs from "./pages/AboutUs";
import StudentDashboard from "./pages/StudentDashboard";
import CareerPaths from "./pages/CareerPaths";
=======
import CareerHub from "./pages/CareerHub";
>>>>>>> 3d4a2dfa19eaa00adef9fc286b724392af5b4b7c

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
          </Routes>
        </Router>
      </ProgressProvider>
    </AuthProvider>
   
  );
}

export default App;

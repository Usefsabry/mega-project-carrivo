import { Routes, Route } from "react-router-dom";
import Home from "./pages/Login/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import { AuthProvider } from "./Context/AuthContext";
import { ProgressProvider } from "./components/ProgressContext";
import TestPage1 from "./pages/TestPage1";
import TestPage2 from "./pages/TestPage2";
import TestPage3 from "./pages/TestPage3";
import TestResults from "./pages/TestResults";

function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          <Route path="/test/page1" element={<TestPage1 />} />
          <Route path="/test/page2" element={<TestPage2 />} />
          <Route path="/test/page3" element={<TestPage3 />} />
          <Route path="/test/results" element={<TestResults />} />
        </Routes>
      </ProgressProvider>
    </AuthProvider>
  );
}

export default App;

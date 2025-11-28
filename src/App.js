// import Signup from "./pages/Login/SignUp";
// import Login from "./pages/Login/Login";
// import Signup from "./pages/Login/SignUp";

import { BrowserRouter as Router, Routes, Route ,Link } from "react-router-dom";

import { ProgressProvider } from "./components/ProgressContext";
import TestPage1 from "./pages/TestPage1";
import TestPage2 from "./pages/TestPage2";
import TestPage3 from "./pages/TestPage3";


function App() {
  return (
    <>
     {/* <ProgressProvider>
      <TestPage1/>
      <TestPage2/>
      <TestPage3/>
      </ProgressProvider> */}

       <ProgressProvider>
      
        <Routes>
          <Route path="/test/page1" element={<TestPage1 />} />
          <Route path="/test/page2" element={<TestPage2 />} />
          <Route path="/test/page3" element={<TestPage3 />} />

          {/* Default route */}
          <Route path="/" element={<TestPage1 />} />
        </Routes>
     
    </ProgressProvider>

    </>
  );
}

export default App;

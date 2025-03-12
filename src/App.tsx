import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import ResearchDashboard from "./pages/ResearchDashboard";
import LoginPage from "./pages/LoginPage";
import AuthGuard from "./components/AuthGuard";

const App: React.FC = () => {
  const [backendMessage, setBackendMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:5001/")
      .then((response) => response.text()) // 🔹 Use .text() instead of .json()
      .then((data) => setBackendMessage(data))
      .catch((error) => console.error("Error fetching backend data:", error));
  }, []);
  

  return (
    <Router>
      <Navbar />
      {backendMessage && <p style={{ textAlign: "center", color: "green" }}>{backendMessage}</p>} {/* Shows backend status */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<ResearchDashboard />} /> {/* ✅ No AuthGuard */}
      </Routes>
        
    </Router>
  );
};

export default App;

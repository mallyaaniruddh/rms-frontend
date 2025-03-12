import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import ResearchDashboard from "./pages/ResearchDashboard";
import LoginPage from "./pages/LoginPage";
import AuthGuard from "./components/AuthGuard";


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={
          <AuthGuard>  {/* 🔒 Protect the Research Dashboard */}
            <ResearchDashboard />
          </AuthGuard>
        } />
      </Routes>
    </Router>
  );
};

export default App

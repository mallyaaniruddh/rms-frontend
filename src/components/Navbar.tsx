import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthAdapter from "../adapters/AuthAdapter";
import "../App.css";  // Import CSS

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  // Ensure isAuthenticated is always a boolean
  const checkAuth = () => (typeof AuthAdapter.isAuthenticated === "function" ? AuthAdapter.isAuthenticated() : false);
  
  const [isAuthenticated, setIsAuthenticated] = useState(checkAuth());

  const handleLogout = () => {
    AuthAdapter.logout();
    setIsAuthenticated(false);
    navigate("/"); // Redirect to home
  };

  useEffect(() => {
    setIsAuthenticated(checkAuth());
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Home</Link>
        {!isAuthenticated && <Link to="/login">Login</Link>}
        {isAuthenticated && <Link to="/dashboard">Research Dashboard</Link>}
      </div>
      <div className="nav-right">
        {isAuthenticated ? (
          <button onClick={handleLogout} className="logout-button">Logout</button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
